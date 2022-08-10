import React from 'react';

import './Button.css';
const Button = ({title, type ,icon}) => {

    console.log(icon);

  return (
    <button className={`button button--${type}`}>
        
        {icon}

        {title}
    
    </button>
  )
}

export default Button