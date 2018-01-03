import React, { Component } from 'react';
import { css } from 'glamor';
import { Result } from './Result';

export class ResultsContainer extends Component {
  render() {
    return (
      <div class="card  brown lighten-5 z-depth-2">
        <div class="card-stacked">
          <div class="card-content">
            <div>
              <i
                class="material-icons medium teal-text darken-4"
                style={{ display: 'inline' }}
              >
                toys
              </i>
              <h5
                style={{
                  display: 'inline',
                  position: 'absolute'
                }}
                className="teal-text darken-4"
              >
                Results
              </h5>
            </div>

            <div class="input-field">
              <i class="material-icons prefix">toys</i>
              <input id="result_title" type="text" class="validate" />
              <label for="result_title">Result Title</label>
            </div>

            <ul class="collection">
              <Result />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
