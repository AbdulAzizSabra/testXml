import React, { Component } from 'react';

export class Breadcrumb extends Component {
  render() {
    return (
      <nav style={{ marginTop: '20px' }} class="blue-grey lighten-4">
        <div class="nav-wrapper" style={{ paddingLeft: '10px' }}>
          <a href="#!" class="breadcrumb">
            First
          </a>
          <a href="#!" class="breadcrumb">
            Second
          </a>
          <a href="#!" class="breadcrumb">
            Third
          </a>
        </div>
      </nav>
    );
  }
}
