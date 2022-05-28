import React from 'react'
import styledComponents from 'styled-components'

function Table() {
    return (
        <Section>
            <table>
                <caption>This is my table</caption>
                <thead>
                    <tr>
                        <th>header 1</th>
                        <th>header 2</th>
                        <th>header 3</th>
                        <th>header 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>header 1</td>
                        <td>header 2</td>
                        <td>header 3</td>
                        <td>header 4</td>
                    </tr>
                    <tr>
                        <td>header 1</td>
                        <td>header 2</td>
                        <td>header 3</td>
                        <td>header 4</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    )
}

export default Table

const Section = styledComponents.div`
color:white;
margin-top:10px;
background:#1e1e1e;
width:950px;
height:170px;
margin-left:62px;
table{
    border:3px solid yellow;
    width:50%;
}
th,td{
    padding:15px;
    text-align:center;
}
`