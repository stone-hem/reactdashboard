import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

export default function Dashboard() {
  return (
    <Section>
        <Navbar/>
    </Section>
  )
}

const Section=styled.section`
margin-left:18vw;
padding:2rem;
height:100px;
`


