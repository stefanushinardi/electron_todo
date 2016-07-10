const <%= name %> = {
  componentDidMount : function(){
    //first time component has mounted
  },
  componentWillUnmount: function(){
    //when component is unmounted 
    //console.log('unmounted:',this);
  },
  componentWillReceiveProps: function(nextProps){
    ////invoked when component is receiving new props
  },
  componentWillUpdate: function(nextProps, nextState){
    ////invoked immediately before rendering when new props or state are being received (not called on initial render)
    ////cannot use this.setState() in this method, use componentWillReceiveProps instead
  },
  componentDidUpdate: function(prevProps, prevState){
    //invoked immediately after component's updates are flushed to the DOM. this method is not called for initial render
    //this is an opportunity to operate on the DOM when the component has been updated.
  }
}

export default <%= name %>;

