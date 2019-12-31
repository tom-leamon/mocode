import './Symbols.css'

import React from 'react';

const Symbols = ({insertSymbol}) => {
  const symbols = [
    '{', '}','[',']','(',')','<','>','/','-','`','"',"=",":",";"
  ]

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