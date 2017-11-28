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
  Grid
} from 'semantic-ui-react';
import Comp1 from './components/Comp1';

class App extends Component {
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
      <Grid container columns={2}>
        <Grid.Column width={4}>
          <Sidebar width="wide" visible={true} icon="labeled" vertical>
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
        </Grid.Column>
        <Grid.Column width={12}>
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
                    <Route path="/loop" exact render={() => ''} />
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
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps({ journeys, selected }) {
  return { journeys, selected };
}
export default connect(mapStateToProps, { fetchJourney, headerSelect })(App);
