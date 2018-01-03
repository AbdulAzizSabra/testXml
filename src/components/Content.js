import React, { Component } from 'react';
import {
  Breadcrumb,
  Header,
  Segment,
  Icon,
  Label,
  Input,
  Message,
  Dropdown,
  Popup,
  Container,
  Card,
  Divider,
  Grid
} from 'semantic-ui-react';
import { css } from 'glamor';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          selected: false,
          title: 'step 1',
          type: 'step',
          id: 'step1id',
          results: [
            {
              id: 'st1res1',
              title: 'result 1 for step 1',
              selected: false,
              tasks: [
                {
                  title: 'task 1 for result 1 in step 1'
                },
                {
                  title: 'task 2 for result 1 in step 1'
                }
              ]
            },
            {
              id: 'st1res2',
              title: 'result 2 for step 1',
              selected: false,
              tasks: [
                {
                  title: 'task 1 for result 2 in step 1'
                },
                {
                  title: 'task 2 for result 2 in step 1'
                }
              ]
            }
          ],
          meta: {}
        },
        {
          selected: false,
          title: 'step 2',
          type: 'step',
          id: 'step2id',
          results: [
            {
              id: 'st2res1',
              title: 'result 1 step 2',
              selected: false,
              tasks: [
                {
                  title: 'task 1 for result 1 in step 2'
                },
                {
                  title: 'task 2 for result 1 in step 2'
                }
              ]
            },
            {
              id: 'st2res2',
              title: 'result 2 step 2',
              selected: false,
              tasks: [
                {
                  title: 'task 1 for result 2 in step 2'
                },
                {
                  title: 'task 2 for result 2 in step 2'
                }
              ]
            }
          ],
          meta: {}
        }
      ]
    };
  }
  handle = event => {
    if (event.key == 'Enter') {
      event.preventDefault();
      event.target.blur();
      event.target.contentEditable = false;
      const elm = document.getElementById('stepInput');
      elm.focus();
    }
  };

  handleEdit = event => {
    event.target.contentEditable = true;
  };
  handleDismiss = () => {};
  handleSelect = stepId => {
    let currentState = this.state;

    const index = currentState.steps.findIndex(step => {
      return step.id === stepId;
    });
    currentState.steps[index].selected = !currentState.steps[index].selected;
    this.setState(currentState);
  };

  handleAddResult = event => {
    if (event.key === 'Enter') {
      console.log('enter');
      const stepIndex = event.target.id.split('.')[1];
      let currentState = this.state;
      currentState.steps[stepIndex].results.push({
        id: `st${stepIndex}res${currentState.steps[stepIndex].results.length}`,
        title: event.target.value,
        selected: false,
        tasks: []
      });
      this.setState(currentState);
      event.target.value = '';
    }
  };
  handleSelectResult = (stepIndex, ResultIndex) => {
    let currentState = this.state;
    currentState.steps[stepIndex].results[ResultIndex].selected = !currentState
      .steps[stepIndex].results[ResultIndex].selected;
    this.setState(currentState);
  };
  renderSteps = () => {
    return this.state.steps.map((step, stepIndex) => {
      return (
        <Container
          {...css({ paddingBottom: '10px' })}
          key={`${stepIndex}-stepcontainer-key`}
        >
          <Message
            floating={step.selected}
            size="small"
            color={step.selected ? 'teal' : null}
            key={step.id}
            icon
            {...css({ marginRight: '10px' })}
          >
            <Icon
              name={step.type === 'step' ? 'marker' : 'map'}
              size="small"
              color="red"
            />
            <Message.Header
              onDoubleClick={this.handleEdit}
              onKeyPress={this.handle}
            >
              {step.title}
            </Message.Header>
            <Message.Content>
              <div {...css({ display: 'inline' })}>Other Content</div>
              <Dropdown
                floating
                icon="ellipsis vertical"
                {...css({ float: 'right' })}
              >
                <Dropdown.Menu {...css({ left: '-80px !important' })}>
                  <Dropdown.Item text="Option 1" key="first-option-key" />
                  <Dropdown.Item text="Option 2" key="second-option-key" />
                  <Dropdown.Item text="Option 3" key="third-option-key" />
                </Dropdown.Menu>
              </Dropdown>
              <Popup
                trigger={
                  <Icon
                    name="add"
                    link
                    color="green"
                    onClick={() => this.handleSelect(step.id)}
                    {...css({ float: 'right' })}
                  />
                }
                content="add results"
                basic
              />
            </Message.Content>
          </Message>
          {step.selected ? (
            <Container {...css({ paddingLeft: '40px' })}>
              {step.results.map((result, resultIndex) => {
                return [
                  <Card
                    fluid
                    color="green"
                    key={result.id}
                    onClick={() => {
                      this.handleSelectResult(stepIndex, resultIndex);
                    }}
                  >
                    <Card.Content>
                      <Card.Header>{result.title}</Card.Header>
                    </Card.Content>
                  </Card>,
                  result.selected ? (
                    <Container {...css({ paddingLeft: '40px' })}>
                      {result.tasks.map((task, taskIndex) => {
                        return (
                          <Card fluid color="red" key={task.id}>
                            <Card.Content>
                              <Card.Header>{task.title}</Card.Header>
                            </Card.Content>
                          </Card>
                        );
                      })}
                      <Divider />
                      <Input
                        fluid
                        placeholder="Write a task"
                        type="text"
                        id={`task-input.${stepIndex}.${resultIndex}`}
                        onKeyPress={this.handleAddTask}
                      />
                    </Container>
                  ) : null
                ];
              })}
              <Divider />
              <Input
                fluid
                placeholder="Write a result"
                type="text"
                id={`result-input.${stepIndex}`}
                onKeyPress={this.handleAddResult}
              />
            </Container>
          ) : null}
        </Container>
      );
    });
  };
  handleAddStep = event => {
    if (event.key === 'Enter') {
      let type = '';
      if (this.state.type) {
        type = this.state.type;
      } else {
        type = 'step';
      }
      let currentState = this.state.steps;
      currentState.push({
        selected: false,
        title: event.target.value,
        type,
        id: `step${currentState.length + 1}id`,
        results: []
      });
      this.setState({ steps: currentState, type: null });
      event.target.value = '';
      // const stepsDiv = document.getElementById('steps-container');
      // stepsDiv.scrollTop += stepsDiv.scrollHeight;

      event.target.focus();
    }
  };
  render() {
    const options = [
      { key: 'step', text: 'Normal Step', value: 'step' },
      { key: 'subj', text: 'SubJourney', value: 'subj' }
    ];

    return [
      <Breadcrumb>
        <Breadcrumb.Section link>2017</Breadcrumb.Section>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section link>Journey 1</Breadcrumb.Section>
      </Breadcrumb>,
      <Header as="h2" icon="repeat" content="Journey Title" />,
      <Header as="h4" color="blue">
        <Icon name="target" />
        <Header.Content>
          Journey Goal
          <Header.Subheader>
            Here We will write the goal of the journey
          </Header.Subheader>
        </Header.Content>
      </Header>,
      <Container>
        <Header as="h4" color="red">
          <Icon name="road" />
          <Header.Content>Steps</Header.Content>
        </Header>

        <Container
          // {...css({
          //   height: '100%',
          //   overflow: 'hidden',
          //   ':hover': { overflowY: 'scroll' }
          // })}
          id="steps-container"
        >
          <Input
            label={
              <Dropdown
                defaultValue="step"
                options={options}
                onChange={(e, d) => this.setState({ type: d.value })}
              />
            }
            labelPosition="right"
            placeholder="Type Step name"
            onKeyPress={this.handleAddStep}
            {...css({ paddingBottom: '5px' })}
          />
          {this.renderSteps()}
        </Container>
      </Container>
    ];
  }
}
