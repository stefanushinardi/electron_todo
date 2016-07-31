import classnames from "classnames";
import React from 'react';

const Button = ({children,...props}) => {
  const onClick = ()=>{
    props.onClick(props.data);
  }
  return (
    <div className={classnames('Button',props.classes)} onClick={onClick} {...props.attributes}>
      <div className="Button__content">
        {children}
      </div>
    </div>
  )
}

Button.propTypes = {
  classes: React.PropTypes.string
}
Button.defaultProps ={
  classes: ""
}

export default Button;
