import './Code.css'

import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

const Code = ({type, tab, callback}) => {

  const [currentCode, setCurrentCode] = useState('')

  const visible = tab === type

  useEffect(() => {
    callback(currentCode)
  }, [currentCode])

  const renderEditor = () => {
    switch(type) {
      case 'html':
        return (
          <Editor
            id='html'
            className='editor'
            padding={8}
            value={currentCode}
            onValueChange={code => setCurrentCode(code)}
            highlight={code => highlight(code, languages.markup)}
          />
        )
      case 'css':
        return (
          <Editor
            id='css'
            className='editor'
            padding={8}
            value={currentCode}
            onValueChange={code => setCurrentCode(code)}
            highlight={code => highlight(code, languages.css)}
          />
        )
      case 'js':
        return (
          <Editor
            id='js'
            className='editor'
            padding={8}
            value={currentCode}
            onValueChange={code => setCurrentCode(code)}
            highlight={code => highlight(code, languages.javascript)}
          />
        )
    }
  }

  return (
    <div className={visible ? 'visible' : 'hidden'}>
      { renderEditor() }
    </div>
  )
  
}

export default Code