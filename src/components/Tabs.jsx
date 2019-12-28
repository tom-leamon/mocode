import './Tabs.css'

import React from 'react';

const Tabs = ({activeTab, callback}) => {

  const handleClick = (type) => {
    callback(type)
  }

  return (
    <div className='tabs'>
      <button
        className={activeTab === 'html' ? 'active' : null }
        onClick={() => handleClick('html')}
      >
        HTML
      </button>

      <button
        className={activeTab === 'css' ? 'active' : null }
        onClick={() => handleClick('css')}
      >
        CSS
      </button>

      <button 
        className={activeTab === 'js' ? 'active' : null }
        onClick={() => handleClick('js')}
      >
        JS
      </button>

      <button 
        className={activeTab === 'result' ? 'active' : null }
        onClick={() => handleClick('result')}
      >
        Result
      </button>
    </div>
  ) 
}

export default Tabs