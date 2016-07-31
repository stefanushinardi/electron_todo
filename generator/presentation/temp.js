import React from 'react';

const <%= name %> = (props) => {
  const data = props.data;
  return (
    <div id="<%= name %>" {...props.attributes}>
      <%= name %>
      {props.children}
    </div>;
  )
}
<%= name %>.propTypes = {
  //children: React.PropTypes.element
};
<%= name %>.defaultProps = {
  //children: React.PropTypes.element
};

export default <%= name %>;
