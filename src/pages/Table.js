import React from 'react'
import styledComponents from 'styled-components'

function Table() {
  return (
      <Section>
    <div>Table</div>
    </Section>
  )
}

export default Table

const Section=styledComponents.div`
color:white;
margin-top:10px;
background:#1e1e1e;
width:950px;
height:170px;
margin-left:62px;
`