import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


export default class Posts extends Component {
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log(json));
      }
    render() {
        return (
            <div>
                 <h1>Posts</h1>
                 <Link to="/post/add"> Add Post </Link>
                 
     
    
            </div>
        )
    }
}
