import * as React from 'react';
import {
    Grid,
    Segment,
    Header
} from 'semantic-ui-react';
export interface ReadProps {
}
export interface ReadState {
    search: string;
    posts: string[];
}

export default class Read extends React.Component<ReadProps, ReadState > {
    constructor(props: ReadProps) {
        super(props);
        this.state = {
            search: '',
            posts: []
        };
    }
    render() {
        let posts = this.state.posts.map(post => (
        <div >
                <Grid.Column centered={true}>
                <Segment textAlign="center">
                    <h2>Title: {post['title']}</h2>
                    <p>Slug: {post['slug']}</p>
                    <p> Image: {post['featuredImage']}</p>
                    <p>Category: {post['category']}</p>
                    <p> Published: {post['published']}</p>
                </Segment>
                </Grid.Column>
        </div>
        ));
        return (
        <div>
            <Segment>
                <Grid>
                    <Grid.Row centered={true} columns={3}>
                        <Grid.Column width={4}/>
                        <Grid.Column centered={true} width={8}>
                            <Header as="h1" textAlign="center">Read</Header>
                            {posts}
                        </Grid.Column>
                        <Grid.Column width={4}/>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
        );
    }
    componentDidMount() {
        this.getPosts();
    }
    private getPosts() {
        let postData = fetch('http://localhost:8000/api/v1/posts')
                    .then(response => {
                      return response.json();
                    })
                    .then(body => {
                      return body.data;
                    })
                    .then(data => {
                    //   console.log(data);
                      this.setState({posts: data});
                    });
        
        return postData;
    }
}
