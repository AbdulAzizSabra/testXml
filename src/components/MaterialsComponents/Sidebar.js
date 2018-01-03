import React, { Component } from 'react';

export class Sidebar extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 250,
      edge: 'left',
      closeOnClick: true,
      draggable: true
    });
  }
  render() {
    return (
      <ul
        id="nav-mobile"
        className="side-nav fixed"
        style={{ backgroundColor: '#2B3F53' }}
      >
        <li>
          <div
            class="navbar nav_title"
            style={{ border: '0', lineHeight: '56px', paddingTop: '9px' }}
          >
            <i
              class="material-icons white small"
              style={{ margin: '0px 10px 0 20px' }}
            >
              apps
            </i>
            <h5 style={{ color: 'white', display: 'inline' }}>App name</h5>
          </div>
        </li>
        <li>
          <div class="user-view">
            <div class="background">
              <img src="http://materializecss.com/images/office.jpg" />
            </div>
            <a href="#!user">
              <img
                class="circle"
                src="http://materializecss.com/images/yuna.jpg"
              />
            </a>
            <a href="#!name">
              <span class="white-text name">John Doe</span>
            </a>
            <a href="#!email">
              <span class="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>

        <li>
          <ul className="collapsible" data-collapsible="accordion">
            <li className="bold">
              <div className="collapsible-header waves-effect waves-teal">
                <i
                  class="material-icons white-text"
                  style={{ margin: '0 10px 0 0' }}
                >
                  train
                </i>
                <a
                  href="#"
                  style={{ padding: '0 10px', overflow: 'hidden' }}
                  className="white-text"
                >
                  Journeys
                </a>
                <i
                  className="material-icons white-text right"
                  style={{ paddingLeft: '20%' }}
                >
                  arrow_drop_down
                </i>
              </div>

              <div
                className="collapsible-body"
                style={{ backgroundColor: '#263749' }}
              >
                <ul>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header waves-effect waves-teal">
                <i
                  class="material-icons white-text"
                  style={{ margin: '0 10px 0 0' }}
                >
                  class
                </i>
                <a
                  href="#"
                  style={{ padding: '0 10px', overflow: 'hidden' }}
                  className="white-text"
                >
                  Templates
                </a>
              </div>
            </li>
            <li>
              <div className="collapsible-header waves-effect waves-teal">
                <i
                  class="material-icons white-text"
                  style={{ margin: '0 10px 0 0' }}
                >
                  flag
                </i>
                <a
                  href="#"
                  style={{ padding: '0 10px', overflow: 'hidden' }}
                  className="white-text"
                >
                  Milestones
                </a>
              </div>
            </li>
            <li>
              <div class="divider" />
            </li>
            <li>
              <div className="collapsible-header waves-effect waves-teal">
                <i
                  class="material-icons white-text"
                  style={{ margin: '0 10px 0 0' }}
                >
                  business
                </i>
                <a
                  href="#"
                  style={{ padding: '0 10px', overflow: 'hidden' }}
                  className="white-text"
                >
                  Management
                </a>
                <i
                  className="material-icons white-text right"
                  style={{ paddingLeft: '20%' }}
                >
                  arrow_drop_down
                </i>
              </div>

              <div
                className="collapsible-body"
                style={{ backgroundColor: '#263749' }}
              >
                <ul>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                  <li style={{ padding: '0 10%' }} className="white-text line">
                    <a className="white-text" style={{ padding: 0 }}>
                      <i
                        className="material-icons white-text"
                        style={{ marginRight: '5px' }}
                      >
                        crop_5_4
                      </i>{' '}
                      Link 1
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* <li>
              <a class="waves-effect" href="#!" style={{ padding: '0 10px' }}>
                Lessons Learned
              </a>
            </li> */}
          </ul>
        </li>
      </ul>
    );
  }
}
