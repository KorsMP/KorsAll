import React, { Component } from 'react'
import auth from './auth'
import { withRouter } from "react-router-dom";
export class LoginPage extends Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        return (
            <>
            
            <h1>LOGIN PAGE </h1>
            <h3>CLICK HERE TO LOGIN</h3>
            <button onClick={()=>{
                
                this.props.history.push('/Home');
            }}>Login</button>
            </>
        )
    }
}

export default withRouter(LoginPage);
