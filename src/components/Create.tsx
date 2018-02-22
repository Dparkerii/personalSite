import * as React from 'react';
import {
    Checkbox,
    Form,
    Button,
    Grid,
    Header
} from 'semantic-ui-react';
export interface CreateProps {
}
export interface CreateState {
    title: string;
    slug: string;
    category: string;
    content: string;
    featuredImage: string;
    publish: boolean;
}

export default class Create extends React.Component<CreateProps, CreateState > {
    constructor(props: CreateProps) {
        super(props);
        this.state = {
            title: '',
            slug: '',
            category: '',
            content: '',
            featuredImage: '',
            publish: false
        };
    }
  render() {
    return (
      <div>
        <Grid>
            <Grid.Row centered={true} columns={3}>
                <Grid.Column width={4}/>
                <Grid.Column centered={true} width={8}>
                    <Header as="h1" textAlign="center">Create</Header>
                    <Form onSubmit={data => this.handleSubmit(data)}>
                        <Form.Group widths="equal">
                            <Form.Input
                                name="title" 
                                fluid={true} 
                                value={this.state.title} 
                                label="Title" 
                                placeholder="Title" 
                                onChange={(name, value) => this.handleChange(name, value)}
                            />
                            <Form.Input 
                                name="slug"
                                fluid={true} 
                                value={this.state.slug} 
                                label="Slug" 
                                placeholder="Slug"
                                onChange={(name, value) => this.handleChange(name, value)}
                            />
                            <Form.Input 
                                name="category"
                                fluid={true} 
                                value={this.state.category}
                                label="Category" 
                                placeholder="Category"
                                onChange={(name, value) => this.handleChange(name, value)}
                            />
                        </Form.Group>
                        <Form.TextArea 
                            name="content"
                            fluid={true}
                            value={this.state.content} 
                            label="Content" 
                            placeholder="Content"
                            onChange={(name, value) => this.handleChange(name, value)}
                        />
                        <Form.Input 
                            name="featuredImage"
                            type="file"
                            fluid={true} 
                            value={this.state.featuredImage}
                            label="Featured Image" 
                            placeholder="Featured Image"
                            onChange={(name, value) => this.handleChange(name, value)}
                        />
                        <Form.Field
                            name="publish"
                            fluid={true}
                            value={this.state.publish}
                            label="Publish" 
                            control={Checkbox} 
                        />
                        <Button fluid={true} type="submit"> Submit </Button>
                    </Form>
                </Grid.Column>
                <Grid.Column width={4}/>
            </Grid.Row>
        </Grid>
      </div>
    );
  }

  private handleChange(name: any, value: any) {
      this.setState({
        [value.name]: value.value
      });
  }

  private handleSubmit(data: any) {
    this.setState({
        title: data.title,
        slug: data.slug,
        category: data.category,
        content: data.content,
        featuredImage: data.featuredImage,
        publish: data.publish
    });
    // createPost()
    this.createPost();
    // setState back to nothing

    this.setState({
        title: '',
        slug: '',
        category: '',
        content: '',
        featuredImage: '',
        publish: false
    });
  }

  private createPost() {
    console.log('createPost state');
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:8000/api/v1/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'
                 },
        body: JSON.stringify(this.state)
    })
    .then(response => {
        console.log('response');
        console.log(response);
        return response.json();
    })
    .then(body => {
        console.log('body');
        console.log(body);
        return body;
    });
    }
}
