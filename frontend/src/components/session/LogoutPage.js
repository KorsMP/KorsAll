import React, { Component } from 'react'

import { withRouter } from "react-router-dom";
export class LogoutPage extends Component {
   constructor(props){
       super(props)
   }
    render() {
        return (
            <>
            
            <h1>LOG OUT PAGE </h1>
            <h3>CLICK HERE TO LOGOUT</h3>
            <button onClick={()=>{
                this.props.history.push('/Home');
            }}>Logout</button>
            </>
        )
    }
}

export default withRouter(LogoutPage)
