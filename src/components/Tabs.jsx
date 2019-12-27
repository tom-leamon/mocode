import './Tabs.css'

import React from 'react';

const Tabs = ({callback}) => {

  const handleClick = (type) => {
    callback(type)
  }

  return (
    <div className='tabs'>
      <button onClick={() => handleClick('html')}>HTML</button>
      <button onClick={() => handleClick('css')}>CSS</button>
      <button onClick={() => handleClick('js')}>JS</button>
      <button onClick={() => handleClick('result')}>Result</button>
    </div>
  ) 
}

export default Tabs