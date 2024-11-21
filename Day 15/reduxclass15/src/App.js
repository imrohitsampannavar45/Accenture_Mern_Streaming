import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore'
import CoursePage from './CoursePage'

const App = () => {
  return (
    <div>
      <CoursePage />
    </div>
  )
}

export default App
