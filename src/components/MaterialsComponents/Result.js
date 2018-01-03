import React, { Component } from 'react';
import { css } from 'glamor';
import { TasksContainer } from './TasksContainer';

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { resultOpened: false };
  }
  openResult = () => {
    this.setState({ resultOpened: !this.state.resultOpened });
  };
  render() {
    return (
      <li
        class="collection-item avatar grey lighten-5"
        style={{ cursor: 'pointer' }}
      >
        <i
          class="material-icons circle cyan-text lighten-5"
          style={{ backgroundColor: '#e0f2f1' }}
        >
          location_on
        </i>
        <h6 className="editable" style={{ width: '70%' }}>
          Result Title sajhdkjasdh adkjsah dkhasdjk haskdasda dkjahsdj{' '}
        </h6>
        <div className="secondary-content">
          <a
            class="tooltipped valign-wrapper"
            data-position="bottom"
            data-delay="50"
            data-tooltip="Mark as achieved"
            style={{
              position: 'absolute',
              right: '80px',
              top: '10px'
            }}
          >
            <i
              class="material-icons valign-wrapper"
              {...css({
                color: '#0000004d',
                ':hover': { color: '#4db6ac' }
              })}
            >
              check
            </i>
          </a>
          <a
            class="tooltipped"
            data-position="bottom"
            data-delay="50"
            data-tooltip="Delete Result"
            style={{
              position: 'absolute',
              right: '50px',
              top: '10px'
            }}
            {...css({
              ':hover': { color: '#212121' }
            })}
          >
            <i class="material-icons ">delete</i>
          </a>
          <a
            class="btn btn-floating pulse tooltipped"
            data-position="bottom"
            data-delay="50"
            data-tooltip="Show Tasks"
          >
            <i class="material-icons" onClick={this.openResult}>
              menu
            </i>
          </a>
        </div>

        {/* Tasks Content */}
        {this.state.resultOpened ? <TasksContainer /> : null}
      </li>
    );
  }
}
