import React from 'react';

const PasswordComponent = ({ password }) => {
  return (
    <button>
      {password ? `I got password: ${password}` : 'I have not received password'}
    </button>
  );
};

export default PasswordComponent;
