import React, { Component } from 'react'

export default class AddPost extends Component {
    render() {
        return (
            <>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type ="text" name="username" id="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type ="password" name="password" id="password"/>
                </div>
                
            </form>
            </>
        )
    }
}
