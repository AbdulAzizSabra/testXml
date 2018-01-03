import React, { Component } from 'react';
import { Tab, Label, Icon, Header, Segment } from 'semantic-ui-react';
import { css } from 'glamor';
export class Tab1 extends Component {
  render() {
    return (
      <Tab.Pane attached={false}>
        <Segment stacked>
          <Header>Tags </Header>
          <Label.Group color="blue">
            <Label as="a">
              Fun
              <Icon name="close" />
            </Label>
            <Label as="a">
              Happyasd
              <Label.Detail>22</Label.Detail>
            </Label>
            <Label as="a">Smart</Label>
            <Label as="a">Insane</Label>
            <Label as="a">Exciting</Label>
          </Label.Group>
        </Segment>
        <Segment stacked>
          <Header>Dates </Header>
          Edit and set dates and duration
        </Segment>

        <Segment stacked>
          <Header>Assigned To </Header>
          List of people or stakeholders
        </Segment>
        <Segment stacked>
          <Header>Assigned To </Header>
          List of people or stakeholders
        </Segment>
      </Tab.Pane>
    );
  }
}
