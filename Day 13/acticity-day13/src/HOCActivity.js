import React, { useState } from 'react';

const withPassword = (WrappedComponent) => {
  return (props) => {
    const [password] = useState('rohit123'); 
    const [needPassword, setNeedPassword] = useState('no'); 

   
    const newProps = needPassword === 'yes' ? { password } : {};

    return (
      <div>
        <WrappedComponent {...props} {...newProps} />
        <button onClick={() => setNeedPassword(needPassword === 'yes' ? 'no' : 'yes')}>
           Need Password
        </button>
      </div>
    );
  };
};

export default withPassword;
