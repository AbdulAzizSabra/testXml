//
import React from 'react';
import Comp1 from './components/Comp1';
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
  Checkbox
} from 'semantic-ui-react';

export class StepDetails extends React.Component {
  render() {
    const panes = [
      {
        menuItem: (
          <Menu.Item>
            Result 1 &nbsp; <Icon color="green" name="checkmark" />
          </Menu.Item>
        ),
        render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
      },
      {
        menuItem: 'Tab 2',
        render: () => (
          <Tab.Pane>
            <List vertical>
              <List.Item>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/assets/images/avatar/small/tom.jpg"
                />
                <List.Content>
                  <List.Header>Tom</List.Header>
                  <div>
                    <Form.Field
                      inline={true}
                      control={Checkbox}
                      label="Task Title"
                    />
                  </div>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/assets/images/avatar/small/tom.jpg"
                />
                <List.Content>
                  <List.Header>Tom</List.Header>
                  <div>
                    <Form.Field
                      inline={true}
                      control={Checkbox}
                      onClick={e => console.log(e.target)}
                      label="Task Title"
                    />
                  </div>
                </List.Content>
              </List.Item>
            </List>
          </Tab.Pane>
        )
      },
      { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
    ];

    return [
      <Segment color="red">
        <Header> Problem Statement</Header>
        <p>{this.props.step.problemStatement}</p>
      </Segment>,
      <Segment color="blue">
        <Header>Results</Header>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: 'right' }}
          panes={panes}
        />
      </Segment>
    ];
  }
}
