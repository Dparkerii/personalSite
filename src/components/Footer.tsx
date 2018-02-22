import * as React from 'react';
import { 
  Grid,
  List
 } from 'semantic-ui-react';

export interface FooterProps {
}

export default class Footer extends React.Component<FooterProps, {}> {
  render() {
    return (
      <div className="ui centered grid">
          <Grid>
            <Grid.Row centered={true} columns={1}>
              <Middle/>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export class Middle extends React.Component<{}, {}> {
  render() {
    return (
      <div id="bottomMiddleComponent">
        <List inverted={true}>
          <List.Item>
            <List.Icon name="user" inverted={true}/>
            <List.Content>
              <a href="#">Name</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" inverted={true}/>
            <List.Content>
              <a href="#">Location</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" inverted={true}/>
            <List.Content>
              <a href="mailto: dedicated@email.com">Dedicated@email.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" inverted={true}/>
            <List.Content>
            <a href="#">Github</a>
            </List.Content>
          </List.Item>
        </List>
      </div>
    );
  }
}