import React from 'react'
import styledComponents from 'styled-components'

function Nav() {
  return (
    <Div>
      <nav>
        <Welcome>
          <p>hi, admin! Welcome</p>
        </Welcome>
        <Right>
          <input name='search' placeholder='search text' type='text' size={25} />
        </Right>
      </nav>
    </Div>

  )
}

export default Nav

const Div = styledComponents.div`
color:white;
margin-top:20px;
margin-left:65px;
float:right;
background:#1e1e1e;
width:950px;
height:80px;
`

const Right = styledComponents.div`
float:right;
margin-right:10px;
margin-top:-20px;

input{
  padding-top:10px;
  padding-bottom:10px;
  color:white;
  background:black;
  border:0;
}
`

const Welcome = styledComponents.div`
margin-top:28px;
margin-left:19px;
`

