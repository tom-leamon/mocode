import './App.css'

import React, { useState } from 'react';

import Code from './components/Code'
import Tabs from './components/Tabs'

const App = () => {
  const [tab, setTab] = useState('html')

  return (
    <div>
      <Tabs callback={setTab} />
      <Code type='html' tab={tab}/>
      <Code type='css' tab={tab}/>
      <Code type='js' tab={tab}/>
    </div> 
  )
  
}

export default App