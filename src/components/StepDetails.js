import React from 'react';
import Comp1 from './Comp1';
import {
  Accordion,
  Icon,
  Divider,
  Segment,
  Header,
  Label,
  Tab,
  Menu,
  List,
  Form,
  Image,
  Checkbox,
  Progress
} from 'semantic-ui-react';
import { Tasks } from './Tasks';

export class StepDetails extends React.Component {
  renderResult = () => {
    if (Array.isArray(this.props.step.results.result)) {
      return this.props.step.results.result.map((result, index) => {
        return {
          menuItem: (
            <Menu.Item>
              {result.resultTitle._text} &nbsp;{' '}
              <Icon color="green" name="checkmark" />
            </Menu.Item>
          ),
          render: () => (
            <Tab.Pane>
              {' '}
              <Tasks task={result.tasks.task} />
            </Tab.Pane>
          )
        };
      });
    }
    return [
      {
        menuItem: (
          <Menu.Item>
            {this.props.step.results.result.resultTitle._text} &nbsp;{' '}
            <Icon color="green" name="checkmark" />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            {' '}
            <Tasks task={this.props.step.results.result.tasks.task} />
          </Tab.Pane>
        )
      }
    ];
  };
  render() {
    return (
      <div>
        {this.props.step.objective ? (
          <Segment color="green">
            <Header> Objective</Header>
            <p>{this.props.step.objective._text}</p>
          </Segment>
        ) : null}
        {this.props.step.problemStatement ? (
          <Segment color="red">
            <Header> Problem Statement</Header>
            <p>{this.props.step.problemStatement._text}</p>
          </Segment>
        ) : null}
        <Segment color="blue">
          <Header>Results</Header>
          <Tab
            menu={{ fluid: true, vertical: true, tabular: 'right' }}
            panes={this.renderResult()}
          />
        </Segment>
        {this.props.details ? (
          <Segment>
            <Header>Some Details on this Step</Header>
            <Progress
              value={this.props.details.doneResults}
              total={this.props.details.allResults}
              progress="ratio"
            >
              Results
            </Progress>
            <Progress
              value={this.props.details.tasks.done}
              total={this.props.details.tasks.all}
              progress="ratio"
            >
              Tasks
            </Progress>
          </Segment>
        ) : null}
      </div>
    );
  }
}
