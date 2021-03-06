import './Result.css'

import React, { useEffect, useRef } from 'react';

const Result = ({tab, html, css, js}) => {
  const visible = tab === 'result'

  const iframe = useRef()

  useEffect(() => {
    if (iframe.current) {
      const getGeneratedPageURL = ({ html, css, js }) => {
        const getBlobURL = (code, type) => {
          const blob = new Blob([code], { type })
          return URL.createObjectURL(blob)
        }
      
        const cssURL = getBlobURL(css, 'text/css')
        const jsURL = getBlobURL(js, 'text/javascript')
      
        const source = `
          <html>
            <head>
              ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
            </head>
            <body>
              ${html || ''}
              ${js && `<script src="${jsURL}"></script>`}
            </body>
          </html>
        `
      
        return getBlobURL(source, 'text/html')
      }
      
      const url = getGeneratedPageURL({html, css, js})

      iframe.current.src = url

      iframe.current.contentWindow.onerror = function(){
        // handle error
        console.log('error')
    }
    }
  }, [html, css, js])

  return (
    <div className={visible ? 'show' : 'hidden'}>
     <iframe ref={iframe} id='iframe'></iframe>
    </div>
  ) 
}

export default Result