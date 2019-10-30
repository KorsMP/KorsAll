import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Login from './components/Signup/SignInPage'
import Signup from './components/Signup/SignUpPage'
import NavB from './components/NavBar/Counter';
import Feed from './components/NewsFeed/Feedcard'
import Profile from './components/profile/Profile'
import AnswerFeed from './components/AnswersFeed/FeedPage'
import MessageHome from './components/message-home/Home';
import NotFound from './components/not-found/NotFound';

function App() {
  // const [state, setstate] = useState(new auth())
  const [isAuthenticated, setIsAuthententicated] = useState(false)
  console.log(isAuthenticated)


  return (
    <Router>
      <div className="App" >


        <NavB />
        {/* <AnswerFeed/> */}
        {/* <Feed></Feed>
        <Route path="/Profile" exact  strict component={Profile} /> */}
        <Switch>
          <Route path="/" exact  component={Login} />
          <Route path="/Home" exact component={Feed} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Register" exact component={Signup} />
          <Route path="/Answer" exact component={AnswerFeed} />
          <Route path="/Chat" component={MessageHome} />
          <Route component={NotFound} />
          {/* <Route 
                path="/Login" 
                exact 
                 render={
                        ()=>{
                         if(!isAuthenticated){ 
                         return (<Login isAuthenticated={setIsAuthententicated}/>)
                        
                        } else{
                          return(<Redirect
                          to={{
                            pathname: '/',
                            message: 'You Are Signed In'
                          }}
                        />)
                        }
                        
                      }}
            /> */}
        </Switch>
      



        {/* <Switch>

          <Route path="/"
            exact
            render={() => {
              return (<>
                <ul>
                  <li> <Link to="/Login">LogIn</Link></li>
                  <li> <Link to="/Logout">LogOut</Link></li>
                  <li> <Link to="/Home">Home</Link></li>
                </ul>
              </>)
            }
            }

          />

          <Route
            exact path="/Home" render={() => {
                console.log(state.authState())
              if (state.authState()) {
                return (
                  <Counter />
                )
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: '/Login',
                      message: 'Please sign in'
                    }}
                  />
                )
              }
            }}
          />
          <Route path="/Login"
            render={() => {
              if (state.authState()) { return <Redirect to="/Logout" /> }
              else {state.authLogin();return <LoginPage /> }

            }
            }
          />
          <Route path='/Logout'
            render={() => {
              if (!state.authState()) { state.authLogout();return <LogoutPage value={state} /> }
              else {
                return <Redirect
                  to={{
                    pathname: '/Login',
                    message: 'Please sign in'
                  }}
                />
              }
            }}
          />
        </Switch> */}

      </div>
    </Router>

  );
}

export default App;
