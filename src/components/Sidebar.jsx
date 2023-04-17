import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { AiFillBank, AiFillDiff, AiFillControl, AiFillCopy, AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineSpaceDashboard } from 'react-icons/md'



export default function Sidebar() {
    const [currentActive, setCurrentActive ]=useState(1)
    return (
        <>
            <SECTION>
                <div className="top">
                    <div className="brand">
                        <AiFillBank />
                        <span>My Home</span>
                    </div>
                    <div className="toggle"></div>
                    <div className="links">
                        <ul>
                            <li onClick={()=>setCurrentActive(1)} className={currentActive===1?"active":""}>
                                <a href="#">
                                    <MdOutlineSpaceDashboard /><span> Dashboard</span>
                                </a>
                            </li>
                            <li onClick={()=>setCurrentActive(2)} className={currentActive===2?"active":""}>
                                <a href="#">
                                    <AiFillCopy /><span> Users</span>
                                </a>
                            </li>
                            <li onClick={()=>setCurrentActive(3)} className={currentActive===3?"active":""}>
                                <a href="#">
                                    <AiFillControl /><span> Shares</span>
                                </a>
                            </li>
                            <li onClick={()=>setCurrentActive(4)} className={currentActive===4?"active":""}>
                                <a href="#">
                                    <AiFillDiff /><span> More..</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a href="#">
                        <AiOutlineLogout /> <span>Logout</span>
                    </a>
                </div>
            </SECTION>
        </>
    )
}

const SECTION = styled.section`
position:fixed;
left:0;
background-color:#212121;
height:100vh;
width:18vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:2rem 0;
gap:2rem;
.top{
    display:flex;
    flex-direction:column;
    gap:2rem;
    width:100%;
    .toggle{
        display:none;
    }
    .brand{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:2rem;
        svg{
            color:#00c5c8;
            font-size:2rem;
        }
        span{
            color:#00c5c8;
            font-size:2rem;
        }
    }
    .links{
        display:flex;
        justify-content:center;
        ul{
            list-style-type:none;
            display:flex;
            flex-direction:column;
            gap:1rem;
            li{
                padding:0.6rem 1rem;
                border-radius:0.6rem;
                &:hover{
                    background-color:#00c5c8;
                    a{
                        color:black;
                    }
                }
                a{
                    text-decoration:none;
                    display:flex;
                    gap:1rem;
                    color:white;
                }
            }
            .active{
                background-color:#00c5c8;
                    a{
                        color:black;
                }
            }
        }
    }
}
.logout{
    padding:0.3rem 1rem;
    border-radius:0.6rem;
    &:hover{
        background-color:#da0037;
        padding:1rem;
    }
    a{
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        color:white;
        gap:1rem;
    }
}
`
