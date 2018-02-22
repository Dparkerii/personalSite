import * as React from 'react';
import {
  Grid,
  Icon,
  Header,
  Menu,
  Container,
  List
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
}

export default class Heading extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <div>
        <div>
          <Middle/>
        </div>
        <div>
          <TopNavBar
            active="About"
          />
        </div>
      </div>
    );
  }
}

export class Middle extends React.Component<{}, {}> {
  render() {
    return (
      <div id="topMiddleComponent">
        <Grid>
          <Grid.Row color="black">
            <Grid.Column centered={true}>
              <Header as="h2" icon={true} inverted={true} textAlign="center">
                <Icon name="user" circular={true} inverted={true}/>
                <Header.Content>
                  Full Name
                </Header.Content>
              </Header>
              <Container textAlign="center" inverted={true}>
                <List horizontal={true} inverted={true}>
                    <List.Item>
                      <List.Icon name="mail"/>
                      <List.Content>
                      <a href="mailto: dedicated@email.com">Email</a>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name="github"/>
                      <a href="#"> Github</a>
                    </List.Item>
                    <List.Item>
                    <List.Icon name="marker"/>
                    <List.Content>
                      location
                    </List.Content>
                    </List.Item>

                  </List>
                </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>  
      </div>
    );
  }
}

export interface TopNavBarProps {
  active: string;
  admin?: boolean;
}
export interface TopNavBarState {
  activeItem: string;
}

export class TopNavBar extends React.Component<TopNavBarProps, TopNavBarState> {
  constructor(props: TopNavBarProps) {
    super(props);
    this.state = {
      activeItem: this.props.active
    };
  }
  render() {
    return (
      <div id="topNavComponent">
        <Grid inverted={true} columns={1}>
          <Grid.Row>
            <Grid.Column color="black">
            <Container textAlign="center">
            <Menu fluid={true} stackable={true} secondary={true} inverted={true} widths={4}>
              <Menu.Item 
                active={this.state.activeItem === 'About'}  
                onClick={name => this.clickHandler(name)}
              >
              <Link to="/">About </Link>
              </Menu.Item>
              <Menu.Item 
                active={this.state.activeItem === 'Projects'}
                onClick={name => this.clickHandler(name)} 
              >
              <Link to="/projects">Projects</Link>
              </Menu.Item>
              <Menu.Item 
                active={this.state.activeItem === 'Blog'} 
                onClick={name => this.clickHandler(name)}
              >
              <Link to="/blog">Blog</Link>
              </Menu.Item>
              <Menu.Item 
                active={this.state.activeItem === 'Admin'} 
                onClick={name => this.clickHandler(name)}
              >
              <Link to="/admin">Admin</Link>
              </Menu.Item>
            </Menu>
            </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
  private clickHandler(name: any) {
    this.setState({activeItem: name.target.innerText});
  } 
}

{/* <Link to="/">About</Link>{' '}
<Link to="/projects">Projects</Link>{' '}
<Link to="/blog">Blog</Link>{' '} */}