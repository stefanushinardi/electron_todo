import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const CheckBox = (props) => {
  const cls = classNames("CheckBox",{
    "checked" : props.checked
  })
  const onClick = ()=>{
    props.onClick(props.data);
  }
  return(
    <div className={cls} onClick={onClick}>
      <div className="CheckBox__box">
        <div className="CheckBox__check">
          &#x2714;
        </div>
      </div>
    </div>
  )
}

//reactMixin.onClass(CheckBox,BaseMixin);

CheckBox.propTypes = {
  checked: React.PropTypes.bool.isRequired
}

CheckBox.defaultProps = {
  checked: false
};

export default CheckBox;


