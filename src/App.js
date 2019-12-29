import './App.css'

import React, { useState, useEffect } from 'react';

import Code from './components/Code'
import Tabs from './components/Tabs'
import Result from './components/Result'

const App = () => {
  const [tab, setTab] = useState('html')
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <div className='app'>
      <Tabs callback={setTab} activeTab={tab} />
      <Code type='html' tab={tab} callback={setHtml} />
      <Code type='css' tab={tab} callback={setCss} />
      <Code type='js' tab={tab} callback={setJs} /> 
      <Result tab={tab} html={html} css={css} js={js} />
    </div> 
  )
  
}

export default App