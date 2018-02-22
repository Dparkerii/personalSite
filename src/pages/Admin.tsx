import * as React from 'react';
import {
  Grid,
  Menu
} from 'semantic-ui-react';
import CRUD from '../components/CRUD';

export interface AdminProps {
}
export interface AdminState {
  action: string;
  category: string;
  posts: string[];
}
export interface  Idata {
  text: string;
  value: string;
}

export default class Admin extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {
      category: 'none',
      action: 'none',
      posts: []
    };
  }

  render() {

    let menu = (
      <div>
        <Grid textAlign="center">
          <Grid.Row>
            <Menu>
              <Menu.Item
                name="create"
                active={this.state.action === 'create'}
                onClick={name => this.clickHandler(name)}
              >
                Create
              </Menu.Item>
              <Menu.Item
                name="read"
                active={this.state.action === 'read'}
                onClick={name => this.clickHandler(name)}
              >
                Read
              </Menu.Item>
              <Menu.Item
                name="update"
                active={this.state.action === 'update'}
                onClick={name => this.clickHandler(name)}
              >
                Update
              </Menu.Item>
              <Menu.Item
                name="delete"
                active={this.state.action === 'delete'}
                onClick={name => this.clickHandler(name)}
              >
                Delete
              </Menu.Item>
            </Menu> 
          </Grid.Row>
        </Grid>
      </div>
    );
    return (
      <div >
        {menu}
        <CRUD 
          action={this.state.action}
        />
      </div>
    );
  }

  private clickHandler(name: any) {
    console.log(this.state.action);
    this.setState({action: name.target.innerText});
  } 

}
