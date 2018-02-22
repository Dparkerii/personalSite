import * as React from 'react';
import {
    Grid,
    Image,
    Segment,
    Container,
    Header,
    List
} from 'semantic-ui-react';

export interface ProjectBodyProps {
}

export default class ProjectBody extends React.Component<ProjectBodyProps, {}> {
  render() {
    return (
        <div>
            <Grid stackable={true}>
                <Grid.Row centered={true} color="red">
                    <Grid.Column width={8} color="yellow">
                        <Details
                            title="Machine Learning"
                        />
                    </Grid.Column>
                    <Grid.Column width={4} color="blue">
                        <Picture/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered={true} color="red">
                    <Grid.Column width={4} color="blue">
                        <Picture/>
                    </Grid.Column>
                    <Grid.Column width={8} color="yellow">
                        <Details
                            title="Scalable Vector Graphics"
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered={true} color="red">
                    <Grid.Column width={8} color="yellow">
                        <Details
                            title="Home Networking and Automation"
                        />
                    </Grid.Column>
                    <Grid.Column width={4} color="blue">
                        <Picture/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
  }
}

export class Picture extends React.Component<{}, {}> {
    render() {
        return(
            <Segment vertical={true}>
                <Image src="#" size="large"/>
            </Segment>
        );
    }
}
export interface DetailsProps {
    title: string;
}

export class Details extends React.Component<DetailsProps, {}> {
    constructor(props: DetailsProps) {
        super(props);
    }
    render() {
        return(
            <Segment vertical={true}>
                <Container textAlign="justified" text={true}>
                    <Header as="h2">{this.props.title}</Header>
                    <List horizontal={true}>
                        <List.Item>
                            metatag
                        </List.Item>
                        <List.Item>
                            metatag
                        </List.Item>
                        <List.Item>
                            metatag
                        </List.Item>
                    </List>
                    <Container text={true} textAlign="justified">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id mauris finibus, congue mauris sed, imperdiet nisl. Phasellus eu ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel neque fringilla, gravida enim quis, commodo augue. Fusce sit amet ligula eu arcu aliquam ultrices. Pellentesque egestas nisl eget quam rutrum pretium. Curabitur lorem ipsum, bibendum sit amet dignissim nec, tristique ut mauris. Donec eget justo libero. In cursus, justo nec imperdiet pulvinar, odio mauris cursus magna, nec scelerisque ex magna sed arcu. Pellentesque iaculis felis ut risus feugiat, eu aliquet ante luctus. Aenean lobortis porttitor risus, non posuere turpis imperdiet ut. Ut semper posuere ipsum nec consectetur. 
                    </Container>
                </Container>
            </Segment>
        );
    }
}
