import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const testClasses = classNames({
  'test'            : true,
  'row'             : true,
  'col-xs-offset-3' : true,
  'col-xs-6'        : true,
})
const testIds = classNames({
  'test'            : true,
})

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id={testIds} className={testClasses}> hii </div>
    );
  }
}

export default App;
