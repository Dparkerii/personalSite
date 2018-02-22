import * as React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

export interface PageNotFoundProps {
}

export default class PageNotFound extends React.Component<PageNotFoundProps> {
  render() {
    return (
      <div>
        <Helmet>
          <title>404</title>
        </Helmet>
        <Header/>
        <h1>Page Not Found</h1>
        <p>Make something funny to go here</p>
      </div>
    );
  }
}
