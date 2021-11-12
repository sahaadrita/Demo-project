import React, { Component } from 'react'

export default class FetchRandomUser extends Component {
   state={
      data:[],
      isLoaded: false
   }
    async componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => response.json())
   .then((data) => console.log(data));
       try{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await response.json();
         console.log(data);
         this.setState({data: data.splice(0,10),isLoaded: true});
       }
       catch (err){
            console.log(err);
        }
     }
    render() {
        console.log('render method called');
        const {data,isLoaded}=this.state;
        return (
            <div>
                {!isLoaded?<div> Loading...</div>:
                
                 <ul>
                     {data.map((item)=>{
                         return <li key={item.id}>{item.title}</li>
                     })}
                     {data.map((item)=>{
                         return <li key={item.id}>{item.body}</li>
                     })}
                 </ul>
     }
            </div>
        )
    }
}
