import React from 'react'
import styled from 'styled-components'
import {AiOutlineFileSearch} from 'react-icons/ai'

export default function Navbar() {
  return (
    <Nav>
        <div className="title">
        <h1>Hi, ..., welcome</h1>
        </div>
        <div className="search">
            <AiOutlineFileSearch/>
            <input type="text" placeholder='search'/>
        </div>
    </Nav>
  )
}

const Nav=styled.nav`
display:flex;
justify-content:space-between;
.title{
    h1{
        margin-left:0.5rem;
        color:#00c5c8;
    }
}
.search{
    background:#212121;
    display:flex;
    align-items:center;
    gap:1rem;
    padding:1rem 8rem 1rem 1rem;
    border-radius:1rem;
    svg{
        color:#00c5c8;
    }
    input{
        background-color:transparent;
        border:none;
        color:#00c5c8;
        letter-spacing:0.2rem;
        &::placeholder{
        color:#00c5c8;
        }
        &:focus{
            outline:none;
        }
    }
}
`
