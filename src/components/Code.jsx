import './Code.css'

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

const Code = ({type, tab}) => {

  const [currentCode, setCurrentCode] = useState('')

  const visible = tab === type

  const renderEditor = () => {
    switch(type) {
      case 'html':
        return (
          <Editor
            value={currentCode}
            onValueChange={code => setCurrentCode(code)}
            highlight={code => highlight(code, languages.markup)}
          />
        )
      case 'css':
        return (
          <Editor
            value={currentCode}
            onValueChange={code => setCurrentCode(code)}
            highlight={code => highlight(code, languages.css)}
          />
        )
      case 'js':
        return (
          <Editor
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