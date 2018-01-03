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
  Dropdown
} from 'semantic-ui-react';
import Comp1 from './components/Comp1';
import Gantt from './Gantt';
import { css } from 'glamor';
import { Content } from './components/Content';
import { Management } from './components/Management';
import { Tab1 } from './components/Tab1';
import { Comments } from './components/Comments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, contextRef: null };
  }

  handleContextRef = contextRef => this.setState({ contextRef });
  componentDidMount() {
    this.props.fetchJourney();
  }

  handleClick = e => {
    const title = e.target.attributes.getNamedItem('data-title').value;
    this.props.headerSelect(title);
    this.props.history.push(`/${title}`);
  };
  render() {
    if (!this.props.journeys) return 'Loading';

    const { contextRef } = this.state;
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
      <div {...css({ height: '100%' })}>
        <Sidebar
          width="thin"
          visible={true}
          icon="labeled"
          vertical
          animation="push"
          inverted
          as={Menu}
        >
          <Menu.Item name="home" active={true}>
            <Icon name="home" />
            Journeys
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Templates
          </Menu.Item>
          <Menu.Item
            name="camera"
            onClick={() => this.props.history.push('/management')}
          >
            <Icon name="camera" />
            Management
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher {...css({ height: '100%' })}>
          {/**/}
          <Grid padded {...css({ height: '90%' })}>
            <Grid.Row>
              <Grid.Column width={14}>
                <Menu style={{ width: '100%' }}>
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
              </Grid.Column>
            </Grid.Row>
            {/**/}
            <Grid.Row {...css({ height: '100%' })}>
              <Grid.Column width={3}>
                <List celled>
                  <List.Item>
                    <List.Icon
                      link
                      name={this.state.open ? 'folder open' : 'folder'}
                      onClick={() => this.setState({ open: !this.state.open })}
                    />

                    <List.Content divided>
                      <List.Header>2017</List.Header>
                      {this.state.open ? (
                        <List.List celled>
                          <List.Item>
                            <Icon name="map" />
                            <List.Content>
                              <List.Header
                                onClick={() => console.log('journey1')}
                                as="a"
                              >
                                Journey 1
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Icon name="map" />
                            <List.Content>
                              <List.Header
                                onClick={() => console.log('journey2')}
                              >
                                Journey2
                              </List.Header>
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
                    <List.Icon name="file" />

                    <List.Content as={List} link>
                      <List.Header>theme.config</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => {
                    return [
                      <Grid.Column width={7}>
                        <Content handleRef={this.handleContextRef} />
                      </Grid.Column>,

                      <Grid.Column width={4} {...css({ paddingRight: '10px' })}>
                        <Segment {...css({ height: '100%' })}>
                          <Sticky context={this.state.contextRef} active>
                            <Tab panes={panes} />
                          </Sticky>
                        </Segment>
                      </Grid.Column>
                    ];
                  }}
                />
                <Route path="/management" component={Management} />
              </Switch>
            </Grid.Row>

            {/* <Grid.Column width={12}>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column width={16}>
                <Menu style={{ width: '100%' }}>
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
                </Menu>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column width={16}>
                <Segment basic>
                  <Switch>
                    <Route path="/loop" exact component={Gantt} />
                    <Route
                      path="/parallel"
                      exact
                      render={() => 'Parallel Journey'}
                    />
                    <Route
                      exact
                      path="/seq"
                      render={() => <Comp1 journey={this.props.journeys[0]} />}
                    />
                  </Switch>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column> */}
          </Grid>
        </Sidebar.Pusher>
      </div>
    );
  }
}

function mapStateToProps({ journeys, selected }) {
  return { journeys, selected };
}
export default connect(mapStateToProps, { fetchJourney, headerSelect })(App);
