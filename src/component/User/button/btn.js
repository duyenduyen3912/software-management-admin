import classNames from "classnames/bind";
import './btn.scss';
// const cx = classNames.bind(styles);
// import React from 'react';


const Button = ({ onClick, children, className }) => {
    return (
      <button className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };
export default Button;