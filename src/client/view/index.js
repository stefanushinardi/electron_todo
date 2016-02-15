import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';
import Home from './_Home/Home.js';

const testClasses = classNames({
  'test'            : true,
  'row'             : true,
  'col-xs-6'        : true,
})
const testIds = classNames({
  'test'            : true,
})

class Index extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="index" className="row">
        <Header />
        {this.props.children || <Home/>}
        <Footer />
      </div>
    );
  }
}

export default Index;
