import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogBody from '../components/BlogBody';
import { Helmet } from 'react-helmet';

export interface BlogProps {
}

export default class Blog extends React.Component<BlogProps, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <div id="header">
        <Header/>
        </div>
        <div id="BlogBody">
        <BlogBody/>
        </div>
        <div id="footer">
        <br/>
        <br/>
        <Footer/>
        <br/>
        </div>
      </div>
    );
  }
}
