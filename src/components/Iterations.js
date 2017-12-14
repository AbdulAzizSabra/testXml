import React from 'react';
import { Segment, Header, Accordion, Icon } from 'semantic-ui-react';
import { Iteration } from './Iteration';

export class Iterations extends React.Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  renderIterations = () => {
    const { activeIndex } = this.state;
    if (Array.isArray(this.props.iterations.iteration)) {
      return this.props.iterations.iteration.map((itr, index) => {
        return [
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            {`V${itr._attributes.iteNumber}.0`}
          </Accordion.Title>,
          <Accordion.Content active={activeIndex === index}>
            <Iteration iteration={itr} />
          </Accordion.Content>
        ];
      });
    } else
      return [
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
        </Accordion.Title>,
        <Accordion.Content active={activeIndex === index}>
          <Iteration itration={this.props.iterations.iteration} />
        </Accordion.Content>
      ];
  };
  render() {
    return (
      <Segment color="teal">
        <Header>Iterations</Header>
        <Accordion fluid styled>
          {this.renderIterations()}
        </Accordion>
      </Segment>
    );
  }
}
