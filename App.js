import { useEffect } from 'react'
import React,{useState} from 'react'
import Editor from './Editor'
import uselocalstorage from '../hooks/uselocalstorage'
function App() {
  const[html, setHtml] = uselocalstorage('html','')
  const[css, setcss] = uselocalstorage('css','')
  const[js, setjs] = uselocalstorage('js','')
  const[srcDoc, setSrcDoc] = useState('')

 useEffect(() => {
  const timeout = setTimeout(() => {
     setSrcDoc(`
     <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
     `)
  },500)
  return () => clearTimeout(timeout) 
 }, [html, css, js])
  


  return (
    <>
    <div className="pane top-pane">
    <Editor
     language="xml"
      displayName="HTML"
      value={html}
      onChange={setHtml}
    />
    <Editor
      language="css"
      displayName="CSS"
      value={css}
      onChange={setcss}
    />
    <Editor
      language="javscript"
      displayName="JS"
      value={js}
      onChange={setjs}
    />
    </div>
    <div className="pane">
    <iframe
    srcDoc={srcDoc}
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"

    />

    </div>
    
    </>
  )
  
}

export default App;

