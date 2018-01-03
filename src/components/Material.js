import React, { Component } from 'react';
import { css } from 'glamor';
// import { Content } from './Content';
import { Collapsible } from './MaterialsComponents/Collapsible';
import { Navbar } from './MaterialsComponents/Navbar';
import { Sidebar } from './MaterialsComponents/Sidebar';
import { Content } from './MaterialsComponents/Content';
import { Details } from './MaterialsComponents/Details';

export class Material extends Component {
  render() {
    return (
      <div>
        <div class="navbar-fixed" style={{ zIndex: '10' }}>
          <Navbar />
        </div>
        <div class="row">
          <div class="col s12 m2 l2">
            <Sidebar />
          </div>

          <div class="col s12 m10 l9 ">
            <div className="row">
              <div className="col s12 m12 l7">
                <Content />
              </div>
              <div className="col s12 m12 l3 show-on-large">
                <div
                  className="toc-wrapper pinned z-depth-5"
                  style={{
                    top: '10%',
                    height: '85%',
                    width: 'inherit'
                  }}
                >
                  <Details />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
