import React from 'react';
import {AiFillApi} from 'react-icons/ai';
import "./IconWithText.css"

function IconWithText({ text }) {
  return (
    <div className="icon-with-text">
      <AiFillApi className="icon" size={60} />
      <span className="text-style">{text}</span>
    </div>
  );
}

export default IconWithText;
