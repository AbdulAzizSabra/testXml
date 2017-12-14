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
  Card
} from 'semantic-ui-react';
import { css } from 'glamor';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          title: 'step 1',
          type: 'step',
          id: 'step1id',
          results: [
            {
              id: 'st1res1',
              title: 'result 1 for step 1',
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
          title: 'step 2',
          type: 'step',
          id: 'step2id',
          results: [
            {
              id: 'st2res1',
              title: 'result 1 step 2',
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
    console.log('hello');
    if (event.key == 'Enter') {
      event.preventDefault();
      //console.log(event.target);
      event.target.blur();
      event.target.contentEditable = false;
      const elm = document.getElementById('stepInput');
      elm.focus();
    }
  };

  handleEdit = event => {
    console.log('enter');
    event.target.contentEditable = true;
  };
  handleDismiss = () => {};
  renderSteps = () => {
    this.state.steps.map(step => {
      return (
        <Message
          icon
          onClick={() => {}}
          onDismiss={this.handleDismiss}
          floating={this.state.selected}
          size="small"
          color="teal"
          key={step.id}
        >
          <Icon name="marker" size="tiny" color="red" />
          <Message.Content
            onDoubleClick={this.handleEdit}
            onKeyPress={this.handle}
          >
            {step.title}
          </Message.Content>
          <Popup
            trigger={<Icon name="add" link color="green" />}
            content="add results"
            basic
          />
          <Dropdown icon="ellipsis vertical">
            <Dropdown.Menu>
              <Dropdown.Item text="Option 1" />
              <Dropdown.Item text="Option 2" />
              <Dropdown.Item text="Option 3" />
            </Dropdown.Menu>
          </Dropdown>
        </Message>
      );
    });
  };
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Section link>2017</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section link>Journey 1</Breadcrumb.Section>
        </Breadcrumb>

        <Header as="h2" icon="repeat" content="Journey Title" />
        <Segment>
          <Header as="h4" color="blue">
            <Icon name="target" />
            <Header.Content>
              Journey Goal
              <Header.Subheader>
                Here We will write the goal of the journey
              </Header.Subheader>
            </Header.Content>
          </Header>

          <Header as="h4" color="red">
            <Icon name="road" />
            <Header.Content>Steps</Header.Content>
          </Header>
          {/* <Message
            floating
            content="Way to go!"
            contenteditable="true"
            data-id="myid"
          /> */}

          <Message
            icon
            onClick={() => this.setState({ selected: !this.state.selected })}
            onDismiss={this.handleDismiss}
            floating={this.state.selected}
            size="small"
            color={this.state.selected ? 'teal' : ''}
          >
            <Icon name="marker" size="tiny" color="red" />
            <Message.Content
              onDoubleClick={this.handleEdit}
              onKeyPress={this.handle}
            >
              We are fetching that content for you.
            </Message.Content>
            <Popup
              trigger={<Icon name="add" link color="green" />}
              content="add result"
              basic
            />
            <Dropdown icon="ellipsis vertical">
              <Dropdown.Menu>
                <Dropdown.Item text="New" />
                <Dropdown.Item text="Open..." description="ctrl + o" />
                <Dropdown.Item text="Save as..." description="ctrl + s" />
              </Dropdown.Menu>
            </Dropdown>
          </Message>
          <Container {...css({ paddingLeft: '40px' })}>
            <Card fluid color="red">
              <Card.Header>Result 1</Card.Header>
              <Card.Content />
            </Card>
            <Container {...css({ paddingLeft: '40px' })}>
              <Message color="green">Task</Message>
            </Container>
            <Message color="red">Result</Message>
            <Message color="red">Result</Message>
            <Message color="red">Result</Message>
          </Container>
          <Input
            fluid
            placeholder="Search..."
            type="text"
            icon={<Icon name="search" inverted circular link />}
          >
            <input />
          </Input>
          <Input
            labelPosition="right"
            type="text"
            placeholder="Amount"
            icon="search"
            id="stepInput"
          >
            <Label basic as="a">
              $
            </Label>
            <input />
            <Label>.00</Label>
          </Input>
        </Segment>
      </div>
    );
  }
}
