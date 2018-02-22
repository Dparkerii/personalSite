import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import { Helmet } from 'react-helmet';

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
        <div id="header">
          <Header/>
        </div>
        <div id="bodySegment">
          <br/>
          <Body/>
          <br/>
        </div>
        <div id="footer">
          <br/>
          <Footer/>
          <br/>
        </div>
      </div>
    );
  }
}