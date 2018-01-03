import React, { Component } from 'react';

export class Details extends Component {
  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }
  render() {
    return [
      <ul class="tabs tabs-fixed-width ">
        <li class="tab col s4">
          <a href="#test1">Details</a>
        </li>
        <li class="tab col s4">
          <a href="#test2">Comments</a>
        </li>
        <li class="tab col s4">
          <a href="#test3">Tab</a>
        </li>
      </ul>,
      <div id="test1" class="col s12">
        <div class="card-panel" style={{ borderLeft: '5px solid teal' }}>
          <h5>Tags</h5>
          <div class="chip">
            Tag1
            <i class="close material-icons">close</i>
          </div>
          <div class="chip">
            Tag2
            <i class="close material-icons">close</i>
          </div>
          <div class="chip">
            Tag3
            <i class="close material-icons">close</i>
          </div>
          <div class="chip">
            Tag4
            <i class="close material-icons">close</i>
          </div>
          <div class="input-field ">
            <i class="material-icons prefix">label</i>
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Add tag</label>
          </div>
        </div>

        <div className="card-panel" style={{ borderLeft: '5px solid #0288d1' }}>
          <h5 style={{ display: 'inline' }}>Status:</h5>
          <i className="material-icons green-text">done</i>
          <span className="green-text">Done</span>
          <i className="material-icons light-blue-text darken-4">
            trending_flat
          </i>
          <span className="light-blue-text darken-4">In progress</span>
        </div>

        <div className="card-panel" style={{ borderLeft: '5px solid #d50000' }}>
          <div class="input-field">
            <i class="material-icons prefix light-blue-text accent-4">
              date_range
            </i>
            <input
              type="text"
              class="datepicker"
              value="2017-12-01"
              style={{ zIndex: '2' }}
            />
            <label for="icon_prefix2">Start Date</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix red-text lighten-1">date_range</i>
            <input
              type="text"
              class="datepicker"
              value="2017-12-01"
              style={{ zIndex: '2' }}
            />
            <label for="icon_prefix2">End Date</label>
          </div>
        </div>
      </div>,
      <div id="test2" class="col s12" style={{ height: '80%' }}>
        <div style={{ height: '100%' }}>
          <ul
            class="collection"
            style={{ maxHeight: '100%', overflow: 'scroll' }}
          >
            <li class="collection-item avatar">
              <img
                src="http://materializecss.com/images/yuna.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="http://materializecss.com/images/yuna.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://colorlib.com/polygon/gentelella/images/img.jpg"
                alt=""
                class="circle"
              />
              <span class="title">
                Titledfsj sdjf sdf jsdjf dsfdsf;jdskfjds; fjds fkdslffjdslfsdklf
                sdkf lk fksjdlfkdjs fsdj
              </span>
              <p className="grey-text lighten-1">today at 14:39</p>
            </li>
          </ul>
          <div class="input-field">
            <img
              src="http://materializecss.com/images/yuna.jpg"
              alt=""
              class="prefix circle"
            />
            <textarea
              id="icon_prefix"
              type="text"
              class="validate"
              style={{
                border: '1px solid #bdbdbd',
                borderTopLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                borderBottomLeftRadius: '25px',
                marginLeft: '49px',
                backgroundColor: 'white',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>,
      <div id="test3" class="col s12">
        Test 3
      </div>
    ];
  }
}
