import React, { Component, PropTypes } from 'react';
import Info from '../../components/Info/Info.js'

class Projects extends Component{
  render(){
    return(
      <div id="Projects">
        <h1>
          This is my project
          <Info />
        </h1>
      </div>
    )
  }
}
export default Projects;
