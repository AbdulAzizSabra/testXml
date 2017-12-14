import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  List
} from 'semantic-ui-react';
import Comp1 from './components/Comp1';
import Gantt from './Gantt';
import { css } from 'glamor';
import { Content } from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
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
          <Menu.Item name="camera">
            <Icon name="camera" />
            Deliverables
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher {...css({ height: '100%' })}>
          <Grid columns={4} padded>
            <Grid.Row>
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

            <Grid.Row>
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
              <Grid.Column width={7}>
                <Content />
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment>Meta Data</Segment>
              </Grid.Column>
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
