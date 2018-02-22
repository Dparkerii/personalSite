import * as React from 'react';
import {
  Header,
  Button,
  Form,
  Grid,
  Segment,
  Checkbox
} from 'semantic-ui-react';

export interface UpdateProps {
}
export interface UpdateState {
  search: string;
  posts: string[];
  found: {};
}

export default class Update extends React.Component<UpdateProps, UpdateState> {
  constructor(props: UpdateProps) {
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
                <Header as="h1" textAlign="center">Update</Header>
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
    console.log('display results');
    console.log(this.state.found);
    if (this.state.found !== {}) {
      return(
        <div>
          {/* <p>Title: {this.state.found['title']}</p>
          <p>Slug: {this.state.found['slug']}</p>
          <p>Image: {this.state.found['featuredImages']}</p>
          <p>Category: {this.state.found['category']}</p>
          <p>Published: {this.state.found['published']}</p>
          <Button onClick={data => this.UpdatePost()}>Update</Button> */}
          <Form onSubmit={() => this.UpdatePost()}>
            <Form.Group widths="equal">
              <Form.Input
                  name="title" 
                  fluid={true} 
                  value={this.state.found['title']} 
                  label="Title" 
                  placeholder={this.state.found['title']} 
                  onChange={(name, value) => this.handleChange(name, value)}
              />
              <Form.Input 
                  name="slug"
                  fluid={true} 
                  value={this.state.found['slug']} 
                  label="Slug" 
                  placeholder={this.state.found['slug']}
                  onChange={(name, value) => this.handleChange(name, value)}
              />
              <Form.Input 
                  name="category"
                  fluid={true} 
                  value={this.state.found['category']}
                  label="Category" 
                  placeholder={this.state.found['category']}
                  onChange={(name, value) => this.handleChange(name, value)}
              />
            </Form.Group>
            <Form.TextArea 
                name="content"
                fluid={true}
                value={this.state.found['content']} 
                label="Content" 
                placeholder={this.state.found['content']}
                onChange={(name, value) => this.handleChange(name, value)}
            />
            <Form.Input 
                name="featuredImage"
                type="file"
                fluid={true} 
                value={this.state.found['featuredImage']}
                label="Featured Image" 
                placeholder={this.state.found['featuredImage']}
                onChange={(name, value) => this.handleChange(name, value)}
            />
            <Form.Field
                name="publish"
                fluid={true}
                value={this.state.found['publish']}
                label="Publish" 
                control={Checkbox} 
            />
            <Button fluid={true} type="submit"> Submit </Button>
          </Form>
        </div>
      );
    }
    else {
      return false;
    }
  }

  private UpdatePost() {
    let reqBody = {
      slug: this.state.found['slug']
    };
    console.log(reqBody);
    console.log(JSON.stringify(reqBody));
    console.log(JSON.stringify(this.state.found));
    // fetch('http://localhost:8000/api/v1/posts/' + this.state.found['slug'], {
    //   method: 'PUT',
    //   headers: {'Content-Type': 'application/json; charset=utf-8'},
    //   body: JSON.stringify(reqBody)
    // })
    // .then( response => {
    //   console.log(response);
    // });
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
