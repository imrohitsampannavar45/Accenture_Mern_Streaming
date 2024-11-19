import React from 'react'
import withPassword from './HOCActivity';
import PasswordComponent from './PasswordComponent';
const App = () => {

  const PasswordComponentWithHOC = withPassword(PasswordComponent);
  return (
    <div>
          <PasswordComponentWithHOC />
    </div>
  )
}

export default App
