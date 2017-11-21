import convert from 'xml-js';

export const FETCH_JOURNEY = 'fetch_journey';

export function fetchJourney() {
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
  return {
    type: FETCH_JOURNEY,
    payload: journeys
  };
}

export function calculateDetails(journey) {
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
          allResults += resultsAnalyse.all;
          achievedResults += resultsAnalyse.done;
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
        allResults += resultsAnalyse.all;
        achievedResults += resultsAnalyse.done;
        stepsDetails.push({
          index: 0,
          ...resultsAnalyse
        });
      }
    }
  }
  console.log('ahcievedObjectives', achievedObjectives);
  console.log('allResults', allResults);
  console.log('achievedResults', achievedResults);
  console.log('stepsDetails', stepsDetails);

  return {
    type: 'details',
    payload: {
      achievedObjectives,
      allResults,
      achievedResults,
      stepsDetails,
      title: journey.title
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
        switch (task._attributes.achieved) {
          case 'done':
            done++;
            break;
          case 'inprogress':
            inProgress++;
        }
      });
    } else {
      all = 1;
      switch (tasks.task._attributes.achieved) {
        case 'done':
          done++;
          break;
        case 'inprogress':
          inProgress++;
      }
    }

    return { all, done, inProgress };
  }
}
