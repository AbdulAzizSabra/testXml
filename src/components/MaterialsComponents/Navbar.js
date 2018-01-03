import React, { Component } from 'react';
import { css } from 'glamor';

const notificationSpanStyle = {
  borderRadius: '60%',
  width: '15px',
  height: '15px',
  padding: '4px',
  border: '1px solid #666',
  color: '#666',
  textAlign: 'center',
  font: '15px Arial, sans-serif',
  display: 'inline',
  position: 'relative',
  bottom: '24%',
  left: '84%'
};

const BurgerButtonStyle = {
  position: 'fixed',
  textAlign: 'center',
  height: '48px',
  width: '48px',
  left: '7.5%',
  top: '-22px',
  float: 'none',
  marginLeft: '-8px',
  color: '#fff',
  fontSize: '36px',
  zIndex: '30',
  lineHeight: '110px'
};

const x = {
  fontSize: '10px',
  fontWeight: '400',
  lineHeight: '13px',
  padding: '2px 6px',
  position: 'absolute',
  right: '135px',
  top: '10px',
  backgroundColor: '#1ABB9C',
  border: '1px solid #1ABB9C!important',
  color: '#fff',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  textAlign: 'center',
  display: 'inline-block',
  minWidth: '10px',
  borderRadius: '10px'
};

export class Navbar extends Component {
  render() {
    return [
      <nav>
        <div class="nav-wrapper" style={{ backgroundColor: '#EDEDED' }}>
          <ul class="right" style={{ height: 'inherit' }}>
            <li style={{ height: 'inherit' }}>
              <a
                class="dropdown-button"
                data-beloworigin="true"
                href="#"
                data-activates="dropdown2"
                style={{ height: 'inherit' }}
              >
                <span class="" style={x}>
                  12
                </span>
                <i
                  class="material-icons Medium"
                  style={{ display: 'inline', color: '#26374A' }}
                >
                  notifications_none
                </i>
              </a>
              <ul
                class=" dropdown-content collection"
                id="dropdown2"
                style={{ minWidth: '200px' }}
              >
                <li class="collection-item">Notification 1</li>
                <li class="collection-item">Notification 2</li>
                <li class="collection-item">Notification 3</li>
                <li class="collection-item">Notification 4</li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-button"
                href="#"
                data-activates="dropdown1"
                data-beloworigin="true"
              >
                {/* <i class="material-icons Medium" style={{ color: '#26374A' }}>
                  account_circle
                </i> */}
                <div
                  className="chip"
                  style={{ borderRadius: '0', backgroundColor: 'transparent' }}
                >
                  <img
                    src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                    alt="Contact Person"
                  />
                  Mosbah
                  <i
                    className="material-icons"
                    style={{
                      display: 'inline',
                      lineHeight: '0px',
                      position: 'absolute',
                      top: '30px'
                    }}
                  >
                    arrow_drop_down
                  </i>
                </div>
              </a>

              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="#!">
                    <i className="material-icons">build</i>Settings
                  </a>
                </li>
                <li>
                  <a href="#!">SignOut</a>
                </li>
              </ul>
            </li>
          </ul>
          <h4
            href="#"
            style={{
              margin: '0 0 0 27%',
              color: '#2B3F53',
              paddingTop: '10px'
            }}
          >
            Stellar Prototype
          </h4>
        </div>
      </nav>,
      <a
        href="#"
        data-activates="nav-mobile"
        className="button-collapse top-nav full hide-on-large-only"
        {...css(BurgerButtonStyle)}
      >
        <i className="material-icons" style={{ color: '#263749' }}>
          menu
        </i>
      </a>
    ];
  }
}
