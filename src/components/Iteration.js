import React from 'react';
import { Segment, Header, Accordion, Icon } from 'semantic-ui-react';
import { StepDetails } from './StepDetails';

export class Iteration extends React.Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderSteps = () => {
    const { activeIndex } = this.state;
    return this.props.iteration.steps.step.map((step, index) => {
      return (
        <div key={`index.${index}`}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            {step.stepTitle._text} &nbsp;
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <StepDetails step={step} />
          </Accordion.Content>
        </div>
      );
    });
  };

  render() {
    return (
      <Segment color="teal">
        <Header>Steps</Header>
        <Accordion fluid styled>
          {this.renderSteps()}
        </Accordion>
      </Segment>
    );
  }
}
