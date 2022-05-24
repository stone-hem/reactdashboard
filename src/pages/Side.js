import React,{useEffect, useState} from 'react'
import styledComponents from 'styled-components'
import {FaTaxi} from 'react-icons/fa'

function Side() {
  return (
    <Section>
      <Top>
        <Logo><FaTaxi/></Logo>
        <h1>my taxi</h1>
      </Top>
      <List>
        <ul>
          <li><a href='#'>Dashboard</a></li>
          <li><a href='#'>Riders</a></li>
          <li><a href='#'>Payment Details</a></li>
          <li><a href='#'>learning Center</a></li>
          <li><a href='#'>FAQs</a></li>
          <li><a href='#'>Settings</a></li>
        </ul>
      </List>
    </Section>
  )
}

export default Side

const Section=styledComponents.div`
background:grey;
float:left;
width:250px;
height:1000px;
`
const Logo=styledComponents.div`
padding-top:15px;
padding-left:10px;
`

const Top=styledComponents.div`
color:yellow;
font-family: 'Permanent Marker', cursive;
padding-top:10px;
display:flex;
flex-direction:row;
h1{
  padding-left:10px
}

`
const List=styledComponents.div`
padding:10px;
li{
  padding:10px;
}
a{
  text-decoration:none;
  color:white;
}
`