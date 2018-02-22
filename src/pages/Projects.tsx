import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectBody from '../components/ProjectBody';
import { Helmet } from 'react-helmet';

export interface ProjectsProps {
}

export default class Projects extends React.Component<ProjectsProps, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <div id="header">
        <Header/>
        <br/>
        </div>
        <div id="projectBody">
        <ProjectBody/>
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
