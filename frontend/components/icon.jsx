import React from 'react';

const Icon = ({ name, appendClasses, style = "outlined" }) => {
  let classes;
  switch(typeof appendClasses) {
    case 'string':
      classes = appendClasses;
      break;
    case 'object':
      classes = appendClasses.join(' ');
      break;
    case 'undefined':
    default:
      classes = '';
  }
  return <i className={`material-icons-${style} ${classes}`}>{name}</i>
};

export default Icon;
