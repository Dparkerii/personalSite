import * as React from 'react';
import {
  Header,
  Button,
  Form,
  Grid,
  Segment
} from 'semantic-ui-react';

export interface DeleteProps {
}
export interface DeleteState {
  search: string;
  posts: string[];
  found: {};
}

export default class Delete extends React.Component<DeleteProps, DeleteState> {
  constructor(props: DeleteProps) {
    super(props);
    this.state = {
      search: '',
      posts: [],
      found: {}
    };
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={3} />
            <Grid.Column centered={true} width={10}>
              <Segment>
                <Header as="h1" textAlign="center">Delete</Header>
                <Form onSubmit={data => this.handleSearch(data)}>
                  <Form.Input
                    name="search" 
                    fluid={true} 
                    value={this.state.search} 
                    label="Search" 
                    placeholder="Search" 
                    onChange={(name, value) => this.handleChange(name, value)}
                  />
                  <Button fluid={true} type="submit"> Search </Button>
                </Form>
              </Segment>
              <Segment textAlign="center">
                {this.displayResults()}
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
  componentDidMount() {
    this.getPosts();
  }
  private handleSearch(data: any) {
    let findOne = this.state.posts.filter(post => (
      post['slug'] === this.state.search
    ));
    this.setState({found: findOne[0]});
    return findOne;
  }
  private handleChange(name: any, value: any) {
    this.setState({
      [value.name]: value.value
    });
  }
  private displayResults() {
    if (this.state.found !== {}) {
      return(
        <div>
          <p>Title: {this.state.found['title']}</p>
          <p>Slug: {this.state.found['slug']}</p>
          <p>Image: {this.state.found['featuredImages']}</p>
          <p>Category: {this.state.found['category']}</p>
          <p>Published: {this.state.found['published']}</p>
          <Button onClick={data => this.deletePost()}>Delete</Button>
        </div>
      );
    }
    else {
      return false;
    }
  }

  private deletePost() {
    let reqBody = {
      slug: this.state.found['slug']
    };
    console.log(reqBody);
    console.log(JSON.stringify(reqBody));
    fetch('http://localhost:8000/api/v1/posts/' + this.state.found['slug'], {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify(reqBody)
    })
    .then( response => {
      console.log(response);
    });
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
