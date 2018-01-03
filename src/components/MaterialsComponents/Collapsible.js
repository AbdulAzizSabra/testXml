import React, { Component } from 'react';

export class Collapsible extends Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
  }
  render() {
    return (
      <div>
        <ul class="collapsible" data-collapsible="accordion">
          <li>
            <div
              class="collapsible-header"
              onClick={() => console.log('clicked')}
            >
              <i class="material-icons">filter_drama</i>First
              <span class="new badge">Something</span>
            </div>
            <div class="collapsible-body">
              <ul class="collapsible popout" data-collapsible="accordion">
                <li>
                  <div class="collapsible-header collection-item">
                    <i class="material-icons">filter_drama</i>First
                  </div>
                  <div class="collapsible-body">
                    <ul class="collapsible" data-collapsible="accordion">
                      <li>
                        <div class="collapsible-header">
                          <i class="material-icons">filter_drama</i>First
                        </div>
                        <div class="collapsible-body">
                          <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                      </li>
                      <li>
                        <div class="collapsible-header">
                          <i class="material-icons">place</i>Second
                        </div>
                        <div class="collapsible-body">
                          <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                      </li>
                      <li>
                        <div class="collapsible-header">
                          <i class="material-icons">whatshot</i>Third
                        </div>
                        <div class="collapsible-body">
                          <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">place</i>Second
                  </div>
                  <div class="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">whatshot</i>Third
                  </div>
                  <div class="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
