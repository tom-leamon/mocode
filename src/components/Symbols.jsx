import './Symbols.css'

import React from 'react';

const Symbols = ({insertSymbol}) => {
  const symbols = [
    '{', '}','[',']','(',')','<','>','/','-','`','"',"=",":",";"
  ]

  // const insert = (symbol) => {
  //   const el = document.querySelectorAll(`#${tab} textarea`)[0]
  //   console.log(el)
  //   if (el) {
  //     const start = el.selectionStart
  //     const end = el.selectionEnd
  //     const text = el.value
  //     const before = text.substring(0, start)
  //     const after  = text.substring(end, text.length)
  //     el.value = (before + symbol + after)
  //     el.selectionStart = el.selectionEnd = start + symbol.length
  //     el.focus()
  //   }
  // }

  return (
    <div className='symbols'>
      { 
        symbols.map(symbol => {
          return <div onClick={() => insertSymbol(symbol)} key={symbol} className='symbol'>{symbol}</div>
        }) 
      }
    </div>
  ) 
}

export default Symbols