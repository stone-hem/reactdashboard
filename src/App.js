
import React from 'react'
import styledComponents from 'styled-components'
import Charts from './pages/Charts'
import Nav from './pages/Nav'
import Side from './pages/Side'


function App() {
  return (
    <Div>
      <Side/>
      <Nav/>
      <Charts/>
      </Div>
  )
}

export default App

const Div=styledComponents.div`
height:100vh;
`




