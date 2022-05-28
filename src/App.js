
import React from 'react'
import styledComponents from 'styled-components'
import Charts from './pages/Charts'
import Nav from './pages/Nav'
import Side from './pages/Side'
import Table from './pages/Table'


function App() {
  return (
    <Div>
      <Side/>
      <Flex>
      <Nav/>
      <Charts/>
      <Table/>
      </Flex>
      </Div>
  )
}

export default App

const Div=styledComponents.div`
height:100vh;



@media screen and (max-width:768px){
  display:flex;
  flex-direction:column;
}
`
const Flex=styledComponents.div`
display:flex;
flex-direction:column;
`



