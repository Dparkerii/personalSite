import * as React from 'react';
import {
    Divider,
    Segment,
    Container,
    Grid,
    Header,
    List
} from 'semantic-ui-react';

export interface BodyProps {
}

export default class Body extends React.Component<BodyProps, {}> {
  render() {
    return (
      <div id="bodyComponent">
          <Grid>
            <Grid.Row centered={true} columns={1}>
                <Summary/>
            </Grid.Row>
            <Grid.Row centered={true} columns={1}>
                <Experience/>
            </Grid.Row>
            <Grid.Row centered={true} columns={1}>
                <Education/>
            </Grid.Row>
            <Grid.Row centered={true} columns={1}>
                <Skills/>
            </Grid.Row>
          </Grid>

      </div>
    );
  }
}
export class Summary extends React.Component<{}, {}> {
    render() {
        return(
            <div id="summaryComponent">
                <Segment vertical={true}>
                    <Divider horizontal={true}><Header as="h2">Summary</Header></Divider>
                    <Container textAlign="justified" text={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, elit at finibus convallis, odio tellus sagittis ipsum, et feugiat neque sem sed mauris. Nulla augue nisi, euismod et lacus sed, molestie euismod est. Mauris luctus enim sit amet nisi varius, vitae eleifend metus lobortis. Proin eu libero eu tortor porttitor viverra eu sodales lorem. Mauris mauris ligula, porttitor sit amet urna sed, iaculis convallis quam. Nulla tincidunt at velit sed tempor. Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi. 
                    </Container>
                </Segment>
            </div>
        );
    }
}
export class Experience extends React.Component<{}, {}> {
    render() {
        return(
            <div id="experienceComponent">
                <Segment vertical={true}>
                    <Divider horizontal={true}><Header as="h2">Experience</Header></Divider>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column>
                                <Container>
                                    <Header as="h3">Company</Header>
                                    <Header as="h4">position</Header>
                                    <Header as="h4">time</Header>
                                    <Container textAlign="justified" text={true}>
                                        <List bulleted={true}>
                                            <List.Item>
                                                <Container>
                                                    Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. 
                                                    Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi. 
                                                </Container>
                                            </List.Item>
                                            <List.Item>
                                                <Container>
                                                    Nulla augue nisi, euismod et lacus sed, molestie euismod est. Mauris luctus enim sit amet nisi varius, vitae eleifend metus lobortis. Proin eu libero eu tortor porttitor viverra eu sodales lorem. Mauris mauris ligula, porttitor sit amet urna sed, iaculis convallis quam. Nulla tincidunt at velit sed tempor.                                                </Container>
                                            </List.Item>
                                            <List.Item>
                                                <Container>
                                                    Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi. 
                                                </Container>
                                            </List.Item>
                                        </List>
                                    </Container>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}
export class Education extends React.Component<{}, {}> {
    render() {
        return(
            <div id="educationComponent">
                <Segment vertical={true}>
                    <Divider horizontal={true}><Header as="h2">Education</Header></Divider>
                        <Grid >
                            <Grid.Row >
                                <Grid.Column>
                                    <Container>
                                        <Header as="h3">University</Header>
                                        <Header as="h4">Degree</Header>
                                        <Header as="h5">Time and GPA</Header>
                                        <Container textAlign="justified" text={true}>
                                            <List bulleted={true}>
                                                <List.Item>
                                                    <Container>
                                                        Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi.
                                                    </Container>
                                                </List.Item>
                                                <List.Item>
                                                    <Container>
                                                        Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi.
                                                    </Container>
                                                </List.Item>
                                                <List.Item>
                                                    <Container>
                                                        Nullam mollis vehicula urna placerat fermentum. Nulla placerat id leo eu pellentesque. Donec fringilla vitae ex a tempus. Vestibulum ut porta enim. Pellentesque ultrices, urna consectetur laoreet sollicitudin, lectus ipsum pulvinar quam, sed dapibus ex magna sit amet nisi.
                                                    </Container>
                                                </List.Item>
                                            </List>
                                        </Container>
                                    </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Segment>
            </div>
        );
    }
}
export class Skills extends React.Component<{}, {}> {
    render() {
        return(
            <div id="skillsComponent">
                <Segment vertical={true}>
                    <Divider horizontal={true} ><Header as="h2">Skills</Header></Divider>
                    <Container textAlign="center">
                        <List bulleted={true} horizontal={true}>
                            <List.Item>
                                Foo
                            </List.Item>
                            <List.Item>
                                Bar
                            </List.Item>
                            <List.Item>
                                Baz
                            </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
    }
}
