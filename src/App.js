import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import JourneysList from './JourneysList';
import { fetchJourney, headerSelect } from './actions';
import {
  Menu,
  Sidebar,
  Segment,
  Header,
  Image,
  Icon,
  Grid,
  List,
  Rail,
  Sticky,
  Checkbox,
  Tab,
  Dropdown,
  Visibility
} from 'semantic-ui-react';
import Comp1 from './components/Comp1';
import Gantt from './Gantt';
import { css } from 'glamor';
import { Content } from './components/Content';
import { Management } from './components/Management';
import { Tab1 } from './components/Tab1';
import { Comments } from './components/Comments';

import { Carousel, SideNav, SideNavItem, Button } from 'react-materialize';

const fixedStyle = { margintop: '30px' };

const menuStyle = {
  border: '1px solid #ddd',
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'box-shadow 0.01s ease, padding 0.01s ease'
};

const fixedMenuStyle = {
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};
const fixedSegmentStyle = { marginTop: '4em' };
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, contextRef: null };
  }

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  };
  componentDidMount() {
    //document.getElementsByClassName('.button-collapse')[0].sideNav();
    $('.carousel').carousel();
    $('.button-collapse').sideNav();
    this.props.fetchJourney();
  }

  handleClick = e => {
    const title = e.target.attributes.getNamedItem('data-title').value;
    this.props.headerSelect(title);
    this.props.history.push(`/${title}`);
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: false });
  render() {
    if (!this.props.journeys) return 'Loading';

    const { menuFixed } = this.state;
    const panes = [
      {
        menuItem: 'Details',
        render: () => <Tab1 />
      },
      {
        menuItem: 'Comments',
        render: () => <Comments />
      },
      {
        menuItem: 'Tab 3',
        render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
      }
    ];
    return (
      <Grid columns={3} {...css({ height: '100%' })} stackable>
        <Grid.Row {...css({ height: '10%', padding: '0px' })}>
          <Grid.Column computer={16} tablet={8}>
            <Visibility
              onBottomPassed={this.stickTopMenu}
              onBottomVisible={this.unStickTopMenu}
              once={false}
            >
              <Menu
                fixed={menuFixed && 'top'}
                style={menuFixed ? fixedMenuStyle : menuStyle}
                inverted
              >
                <Menu.Item
                  header
                  onClick={() => {
                    this.props.history.push('/');
                  }}
                >
                  Stellar Prototype
                </Menu.Item>
                <Menu.Item
                  name="Loop Journey"
                  active={this.props.selected === 'loop'}
                  data-title="loop"
                  onClick={this.handleClick}
                />
                <Menu.Item
                  name="Parallel"
                  active={this.props.selected === 'parallel'}
                  data-title="parallel"
                  onClick={this.handleClick}
                />
                <Menu.Item
                  name="Sequentual Journey"
                  data-title="seq"
                  active={this.props.selected === 'seq'}
                  onClick={this.handleClick}
                />
                <Menu.Item position="right">
                  <Dropdown icon="user circle outline">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Option 1" />
                      <Dropdown.Item text="Option 2" />
                      <Dropdown.Item text="Option 3" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </Visibility>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          {...css({ height: '90%', paddingTop: '0em', paddingBottom: '0em' })}
        >
          <Grid.Column width={2} floated="left" stretched only="computer">
            <Sticky
              context={this.state.contextRef}
              active
              {...css({ height: '100%' })}
            >
              <Menu
                icon="labeled"
                fluid
                vertical
                inverted
                color="grey"
                style={menuFixed ? fixedSegmentStyle : null}
              >
                <Menu.Item name="gamepad">
                  <Icon name="gamepad" color="blue" />
                  Link 1
                </Menu.Item>

                <Menu.Item name="video camera">
                  <Icon name="video camera" />
                  Link 2
                </Menu.Item>

                <Menu.Item name="video play">
                  <Icon name="video play" />
                  Link 3
                </Menu.Item>
                <Menu.Item name="gamepad">
                  <Icon name="gamepad" />
                  Link 4
                </Menu.Item>

                <Menu.Item name="video camera">
                  <Icon name="video camera" />
                  Link 5
                </Menu.Item>

                <Menu.Item name="video play">
                  <Icon name="video play" />
                  Link 6
                </Menu.Item>
                <Menu.Item name="gamepad">
                  <Icon name="gamepad" />
                  Link 7
                </Menu.Item>
              </Menu>
            </Sticky>
          </Grid.Column>

          <Grid.Column width={3} stretched>
            <Sticky context={this.state.contextRef} active>
              <Segment color="red" style={menuFixed ? fixedSegmentStyle : null}>
                <List celled divided>
                  <List.Item>
                    <List.Icon
                      link
                      name={this.state.open ? 'folder open' : 'folder'}
                      onClick={() => this.setState({ open: !this.state.open })}
                    />

                    <List.Content>
                      <List.Header>2017</List.Header>
                      {this.state.open ? (
                        <List.List celled>
                          <List.Item>
                            <Icon name="map" />
                            <List.Content>
                              <List.Header as="a">Journey 1</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Icon name="map" />
                            <List.Content>
                              <List.Header>Journey2</List.Header>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      ) : null}
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>2016</List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon name="map" />

                    <List.Content as={List} link>
                      <List.Header>theme.config</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Sticky>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment
              color="green"
              style={{ height: '100%' }}
              style={menuFixed ? fixedSegmentStyle : null}
            >
              <div
                ref={this.handleContextRef}
                style={this.state.fixed ? fixedStyle : null}
              >
                <Content />
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column width={5} stretched>
            <Sticky
              context={this.state.contextRef}
              active
              key="sticky-key"
              className="filled"
            >
              <Segment
                color="blue"
                style={menuFixed ? fixedSegmentStyle : null}
                {...css({ height: '90%' })}
              >
                <Tab panes={panes} />
              </Segment>
            </Sticky>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ journeys, selected }) {
  return { journeys, selected };
}
export default connect(mapStateToProps, { fetchJourney, headerSelect })(App);
