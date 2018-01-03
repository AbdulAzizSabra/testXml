import React, { Component } from 'react';
import { css } from 'glamor';

export class Task extends Component {
  render() {
    return (
      <li class="collection-item grey lighten-5" style={{ cursor: 'pointer' }}>
        <p className="editable">{this.props.title}</p>
        <div style={{ marginTop: '5px' }}>
          <p style={{ display: 'inline' }}>
            <input type="checkbox" id="test5" />
            <label for="test5">Done</label>
          </p>

          <a
            class="tooltipped right"
            data-position="bottom"
            data-delay="50"
            data-tooltip="Delete Result"
            {...css({
              ':hover': {
                color: '#212121'
              }
            })}
          >
            <i class="material-icons ">delete</i>
          </a>
        </div>
      </li>
    );
  }
}
