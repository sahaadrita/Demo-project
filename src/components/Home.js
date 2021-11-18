import React, { Component,useState } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import Dropdown from '@restart/ui/esm/Dropdown'

// export default function Home() {
    
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="./images/img1.jpg" />
//   <Card.Body>
//     <Card.Title>Posts</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go to posts</Button>
//   </Card.Body>
// </Card>
{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
const Home= () => {

const [ name, setName ]  =  useState('ABCD');


 return (
   <>
   <h2> {name} </h2>

   <button onClick = {
     () => setName('XYZ')
   }> Change Name </button>
   </>
 )
}
// function Home(props){
//   return <div>Adrita</div>
// }

export default Home
// </div>
            
//         )
//     }

