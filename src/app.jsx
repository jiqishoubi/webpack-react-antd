import React from 'react'
import { HashRouter } from 'react-router-dom'
import { routes, renderChildren } from '@/router'

function App() {
  return (
    <HashRouter>
      {renderChildren(routes)}
    </HashRouter>
  )
}

export default App

