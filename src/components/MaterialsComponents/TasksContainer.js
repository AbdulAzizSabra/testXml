import React, { Component } from 'react';
import { css } from 'glamor';
import { Task } from './Task';

export class TasksContainer extends Component {
  render() {
    return (
      <div class="card z-depth-1" style={{ marginTop: '20px' }}>
        <div class="card-stacked">
          <div class="card-content">
            <div>
              <i
                class="material-icons small red-text lighten-2"
                style={{ display: 'inline' }}
              >
                toys
              </i>
              <h5
                style={{
                  display: 'inline'
                }}
                className="red-text lighten-2"
              >
                Tasks
              </h5>
            </div>

            <div class="input-field">
              <i class="material-icons prefix">toys</i>
              <input id="task_title" type="text" class="validate" />
              <label for="task_title">Task Title</label>
            </div>

            <ul class="collection">
              <Task title="Task title" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
