import './Code.css'

import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

import Symbols from './Symbols'

const Code = ({type, tab, callback}) => {
  const [currentCode, setCurrentCode] = useState(
    JSON.parse(localStorage.getItem(type)) || ''
  )

  const visible = tab === type

  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(currentCode))
    callback(currentCode)
  }, [currentCode])
  
  const insertSymbol = (symbol) => {
    const el = document.querySelector(`#${tab} textarea`)
    const start = el.selectionStart
    const end = el.selectionEnd
    const text = el.value
    const before = text.substring(0, start)
    const after  = text.substring(end, text.length)
    setCurrentCode(before + symbol + after)
    el.selectionStart = el.selectionEnd = start + symbol.length
    el.focus()
  }

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
      <Symbols className='symbols' insertSymbol={insertSymbol} />
      { renderEditor() }
    </div>
  )
}

export default Code