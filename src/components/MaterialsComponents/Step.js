import React, { Component } from 'react';
import { css } from 'glamor';
import { ResultsContainer } from './ResultsContainer';

export class Step extends Component {
  constructor(props) {
    super(props);
    this.state = { stepOpened: false };
  }
  openStep = () => {
    this.setState({ stepOpened: !this.state.stepOpened });
  };
  render() {
    return (
      <li
        class="collection-item avatar grey lighten-5"
        data-collapsible="accordion"
        style={{ cursor: 'pointer' }}
      >
        <i
          class="material-icons circle cyan-text lighten-5"
          style={{ backgroundColor: '#e0f2f1' }}
        >
          location_on
        </i>
        <h5 className="editable">Step title</h5>
        <div>
          <i className="material-icons green-text lighten-1">navigation</i>
          <span
            style={{ position: 'absolute' }}
            className="green-text lighten-1"
          >
            Objective
          </span>
          <p className="green-text lighten-1">
            Write the objective of the step
          </p>
        </div>
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
            data-tooltip="Delete Step"
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
            data-tooltip="Show results"
            style={{ zIndex: 0 }}
          >
            <i class="material-icons" onClick={this.openStep}>
              menu
            </i>
          </a>
        </div>
        {/* Results Content */}
        {this.state.stepOpened ? <ResultsContainer /> : null}
      </li>
    );
  }
}
