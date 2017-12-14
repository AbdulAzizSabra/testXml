import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component {
  componentDidMount() {
    let data = {
      data: [],
      links: [{ id: 1, source: 2, target: 1, type: '0' }]
    };

    this.props.journeys[0].steps.step.forEach((step, index) => {
      let days = this.diffDays(
        step._attributes.startDate,
        step._attributes.endDate
      );

      data.data.push({
        id: index + 1,
        text: step.stepTitle._text,
        start_date: new Date(step._attributes.startDate),
        duration: days,
        assigned: 'some one',
        progress: 0.6
      });
    });
    // var data = {
    // data: [
    //   {
    //     id: 1,
    //     text: 'Task #1',
    //     start_date: '15-04-2017',
    //     duration: 3,
    //     progress: 0.6
    //   },
    //   {
    //     id: 2,
    //     text: 'Task #2',
    //     start_date: '18-04-2017',
    //     duration: 3,
    //     progress: 0.4
    //   }
    // ],
    //   links: [{ id: 1, source: 2, target: 1, type: '1' }]
    // };
    gantt.config.columns = [
      { name: 'text', label: 'Step Title', tree: true },
      { name: 'assigned', label: 'Assigned to' },
      { name: 'duration', label: 'Duration' },
      { name: 'add', width: 40 }
    ];
    gantt.config.scale_unit = 'month';
    gantt.config.date_scale = '%F, %Y';

    // gantt.config.subscales = [
    //   { unit: 'week', step: 1, date: '%W' },
    //   { unit: 'day', step: 1, date: '%D' }
    // ];
    gantt.init(this.ganttContainer);
    gantt.parse(data);
  }

  diffDays(startDate, endDate) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var a = new Date(startDate);
    var b = new Date(endDate); // Or any other JS date

    var remainingDays = dateDiffInDays(a, b);

    if (remainingDays > 0) {
      // Apply you login on remaining days
      return remainingDays;
    } else {
      return 0;
    }

    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
      // Discard the time and time-zone information.
      var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
  }
  render() {
    if (!this.props.journeys) return 'loading...';
    return (
      <div
        ref={input => {
          this.ganttContainer = input;
        }}
        style={{ width: '100%', height: '500px' }}
      />
    );
  }
}

function mapStateToProps({ journeys }) {
  return { journeys };
}
export default connect(mapStateToProps)(Gantt);
