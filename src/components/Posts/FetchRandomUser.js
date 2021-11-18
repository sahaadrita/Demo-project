import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class FetchRandomUser extends Component {
   state={
      record:[],
      isLoaded: false
   }
     componentDidMount(){
   
     fetch('https://jsonplaceholder.typicode.com/posts'
      )
   .then((response) => {console.log(response)
     return response.json()
   })
   .then((res) => {
       this.setState({record:res})
   })
    
    }
    render() {
        console.log('render method called');
        const {record,isLoaded}=this.state;
        return (
            <div className="wrapper">

                {/* {!isLoaded?<div> Loading...</div>: */}
           
                 
                     {record.map((item)=>{
                        return (
                            <div className="Card" >
                            
  <Card.Img variant="top" src="./images/img1.jpg" />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      {item.body}
    </Card.Text>
   
  </Card.Body>
</div>
                        )
                     })}
                    
                
     
            </div>
        )
    }
  }
