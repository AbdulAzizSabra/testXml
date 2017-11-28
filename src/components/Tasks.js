import React from 'react';
import { List, Form, Checkbox, Image } from 'semantic-ui-react';

export class Tasks extends React.Component {
  render() {
    if (Array.isArray(this.props.task)) {
      return (
        <List vertical>
          {this.props.task.map((task, index) => {
            return (
              <List.Item key={`task.index.${index}`}>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/assets/images/avatar/small/tom.jpg"
                />
                <List.Content>
                  <List.Header>{task._attributes.assignee}</List.Header>
                  <div>
                    <Form.Field
                      inline={true}
                      control={Checkbox}
                      label={task.taskTitle._text}
                    />
                  </div>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      );
    }
    return (
      <List vertical>
        <List.Item key={`task.index.`}>
          <Image
            avatar
            src="https://react.semantic-ui.com/assets/images/avatar/small/tom.jpg"
          />
          <List.Content>
            <List.Header>{this.props.task._attributes.assignee}</List.Header>
            <div>
              <Form.Field
                inline={true}
                control={Checkbox}
                label={this.props.task.taskTitle._text}
              />
            </div>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}
