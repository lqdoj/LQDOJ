import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import PATH from './Path';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Section/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
const listOfSections=['HOME','CONTESTS','PROBLEMS','FAQ','BUG_REPORT'];
function App() {
  return (
    <div className="App">
      <Router>
        <Header listOfSections={listOfSections}/>
          {/* Below is main part of website */}

        <Switch>
          <Route exact path={PATH.HOME} component ={null}/>
          <Redirect from={`${PATH.LOGIN}*`} to={PATH.LOGIN}/>
          <Route path={PATH.LOGIN} component = {null}/>
          <Redirect from={`${PATH.SIGNUP}*`} to={PATH.SIGNUP}/>
          <Route path={PATH.SIGNUP} component = {null}/>
          {/*this is no match page*/}
          <Route component = {NotFound}/>
        </Switch>

          {/* Above is main part of website */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
