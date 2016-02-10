import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Header from '../components/Header/header.js';
import Carousel from '../components/Carousel/carousel.js';
import Info from '../components/Info/info.js';
import Graph from '../components/Graph/graph.js';
import Footer from '../components/Footer/footer.js';

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
        <Info />
      </div>
    );
  }
}

export default Index;
