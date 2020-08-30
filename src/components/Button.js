import React from 'react';

const Button = ({onClick, disabled}) => {
  return <button className="btn-next" onClick={onClick} disabled={disabled}> NEXT </button>;
};

export default Button;
