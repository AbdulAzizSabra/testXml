import React, { Component } from 'react';
import { Collapsible } from './Collapsible';
import { css } from 'glamor';
import { ResultsContainer } from './ResultsContainer';
import { Breadcrumb } from './Breadcrumb';
import { Step } from './Step';

export class Content extends Component {
  render() {
    return (
      <div>
        <Breadcrumb />
        <div className="z-depth-4">
          <div class="card grey lighten-5">
            <div class="card-stacked">
              <div class="card-content">
                <div>
                  <i
                    class="material-icons medium blue-text lighten-2"
                    style={{ display: 'inline', color: '#26374A' }}
                  >
                    repeat
                  </i>
                  <h4
                    style={{ display: 'inline', position: 'absolute' }}
                    className="teal-text darken-3"
                    contentEditable
                  >
                    Journey Name
                  </h4>
                </div>
                <div style={{ marginLeft: '60px' }}>
                  <i className="material-icons red-text accent-2">gps_fixed</i>
                  <h5
                    style={{
                      display: 'inline',

                      marginLeft: '5px'
                    }}
                    className="red-text accent-2"
                  >
                    Goal
                  </h5>
                  <p>Here we Should write the goal of this journey</p>
                </div>
                <div class="card grey lighten-3 z-depth-3">
                  <div class="card-stacked">
                    <div class="card-content">
                      <div>
                        <i
                          class="material-icons medium cyan-text lighten-5"
                          style={{ display: 'inline' }}
                        >
                          linear_scale
                        </i>
                        <h5
                          style={{ display: 'inline', position: 'absolute' }}
                          className="cyan-text lighten-5"
                        >
                          Steps
                        </h5>
                      </div>
                      <div className="row">
                        <div class="input-field col s8">
                          <i class="material-icons prefix">pin_drop</i>
                          <input id="step_title" type="text" class="validate" />
                          <label for="step_title">Step Title</label>
                        </div>
                        <div
                          class="switch col s4"
                          style={{ marginTop: '25px' }}
                        >
                          <label>
                            SubJourney
                            <input type="checkbox" />
                            <span class="lever" />
                          </label>
                        </div>
                      </div>
                      <ul class="collection">
                        <Step />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
