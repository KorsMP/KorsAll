import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap/';
import './style.css'
import { Redirect, Link } from 'react-router-dom'

const Title = () => {
  return (
    <h1>
      KORS
    </h1>
  )
}

function Counter() {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);
  // const [carouselItemCount, setstate] = useState(3)
  // method called to handle toggle (next/prev)

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="pl-3 pr-3 pt-0 pb-0">
        <Navbar.Brand href="#home"><Title></Title></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={{
              pathname: '/Home',
            }} style={{ color: '#000', textDecoration: 'none' }}>
              <Nav className="col-md-4 text-center" title="Sign Up">
                <span className="fas fa-home text-center pl-2 pr-2" style={{ 'fontSize': '24px' }}></span>
                <span style={{ 'fontSize': '25px' }}>Home</span>
              </Nav>
            </Link>
            <Link to={{
              pathname: '/Chat',
            }} style={{ color: '#000', textDecoration: 'none' }}>
              <Nav className="col-md-4 text-center" title="Sign Up">
                <span className="far fa-comments text-center pl-2 pr-2" style={{ 'fontSize': '24px' }}></span>
                <span style={{ 'fontSize': '25px' }}>Chat</span>
              </Nav>
            </Link>
          </Nav>
          <Nav className="d-flex justify-content-end">
            <Link to={{
              pathname: '/Login',
            }} style={{ color: '#000', textDecoration: 'none' }}>
              <Nav className="col-md-4 text-center" title="Sign Up">
                <span className="fas fa-sign-out-alt text-center pl-2 pr-2" style={{ 'fontSize': '24px' }}></span>
                <span style={{ 'fontSize': '14px' }}>Log-out</span>
              </Nav>
            </Link>
            <Link to={{
              pathname: '/Profile',
            }} style={{ color: '#000', textDecoration: 'none' }}>
              <Nav className="col-md-4 text-center" title="Sign Up">
                <span className="fas fa-user-plus text-center pl-2 pr-2" style={{ 'fontSize': '20px' }}></span>
                <span style={{ 'fontSize': '14px' }}>Sign-Up</span>
              </Nav>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Counter
