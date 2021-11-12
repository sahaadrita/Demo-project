import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import FetchRandomUser from './Posts/FetchRandomUser';


export default class Posts extends Component {
  
    
      
    render() {
        return (
            <div>
             <FetchRandomUser/>
                 <Link to="/post/add"> Add Post </Link>
                 
     
    
            </div>
        )
    }
}
