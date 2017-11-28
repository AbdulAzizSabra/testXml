import convert from 'xml-js';

export const FETCH_JOURNEY = 'fetch_journey';
export const HEADER_SELECT = 'header_select';

export function fetchJourney() {
  let payload = [];
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'journey.xml', false);
  xhttp.send();
  const responseText = xhttp.responseText;
  let resultObject = convert.xml2json(responseText, {
    compact: true,
    spaces: 4
  });

  const parsedResult = JSON.parse(resultObject);

  const { journeys } = parsedResult.account;
  if (!Array.isArray(journeys.journey)) {
    payload.push(journeys.journey);
  } else payload = journeys.journey;
  console.log(payload);
  return {
    type: FETCH_JOURNEY,
    payload
  };
}

export function headerSelect(title) {
  return {
    type: HEADER_SELECT,
    payload: title
  };
}

export function calculateDetails(journey) {
  console.log('enter action', journey);
  let achievedObjectives = 0;
  let allResults = 0;
  let achievedResults = 0;
  let stepsDetails = [];
  if (Array.isArray(journey.steps.step)) {
    const result = journey.steps.step.forEach(function(element, index) {
      if (element.objective._attributes.done === 'true') achievedObjectives++;
      if (element.hasOwnProperty('results')) {
        const resultsAnalyse = analyseResults(element.results);
        if (resultsAnalyse) {
          allResults += resultsAnalyse.allResults;
          achievedResults += resultsAnalyse.doneResults;
          stepsDetails.push({
            index,
            ...resultsAnalyse
          });
        }
      }
    });
  } else {
    if (journey.steps.step.objective._attributes.done === 'true')
      achievedObjectives++;
    if (journey.steps.step.hasOwnProperty('results')) {
      const resultsAnalyse = analyseResults(journey.steps.step.results);
      if (resultsAnalyse) {
        allResults += resultsAnalyse.allResults;
        achievedResults += resultsAnalyse.doneResults;
        stepsDetails.push({
          index: journey._attributes.id,
          ...resultsAnalyse
        });
      }
    }
  }

  return {
    type: 'details',
    payload: {
      achievedObjectives,
      allResults,
      achievedResults,
      stepsDetails,
      id: journey._attributes.id
    }
  };

  function analyseResults(results) {
    let all = 0,
      done = 0,
      tasks = { all: 0, done: 0, inProgress: 0 };
    if (Array.isArray(results.result)) {
      results.result.forEach(result => {
        all++;
        if (result._attributes.achieved == 'true') done++;
        const tasksAnalyse = analyseTasks(result.tasks);
        if (tasksAnalyse) {
          tasks.all += tasksAnalyse.all;
          tasks.done += tasksAnalyse.done;
          tasks.inProgress += tasksAnalyse.inProgress;
        }
      });
    } else {
      all = 1;
      if (results.result._attributes.achieved == 'true') done++;
      const tasksAnalyse = analyseTasks(results.result.tasks);
      if (tasksAnalyse) {
        tasks.all += tasksAnalyse.all;
        tasks.done += tasksAnalyse.done;
        tasks.inProgress += tasksAnalyse.inProgress;
      }
    }

    return {
      allResults: all,
      doneResults: done,
      tasks
    };
  }

  function analyseTasks(tasks) {
    let all = 0,
      done = 0,
      inProgress = 0;
    if (Array.isArray(tasks.task)) {
      tasks.task.forEach(task => {
        all++;
        if (task._attributes.done === 'done') {
          done++;
        } else if (task._attributes.done === 'inprogress') {
          inProgress++;
        }
      });
    } else {
      all = 1;
      if (tasks.task._attributes.done === 'done') {
        done++;
      } else if (tasks.task._attributes.done === 'inprogress') {
        inProgress++;
      }
    }

    return { all, done, inProgress };
  }
}
