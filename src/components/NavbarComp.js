import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Posts from './Posts';
import AddPost from './Posts/AddPost';


export default class NavbarComp extends Component {
  
    render() {
        return (
          <Router>
            <div>
                <Navbar bg="light" expand="lg">
  
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link}to ={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link}to ={"/posts"}>Posts</Nav.Link>
        
     </Nav>
    </Navbar.Collapse>
 
</Navbar>
</div>
<div>
  <Routes>
  <Route path='/home' element={<Home/>} />
  <Route path='/posts' element={<Posts/>} />
  <Route path="/post/add" element={<AddPost/>} />
  </Routes>
</div>
</Router>


            
        );
    }
  }
    
  
