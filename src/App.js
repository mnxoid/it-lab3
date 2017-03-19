import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Nav from './Nav.js';
import Home from './Home.js';
import Quotes from './Quotes.js';
import Footer from './Footer.js';
import Doctors from './Doctors.js';
import Doctor from './Doctor.js';
// import logo from './logo.svg';
import './css/App.css';

const Container = (props) => (
  <div>
    <Nav />
    <div style={{"minHeight":"calc(100vh - 254px)"}}>
      {props.children}
    </div>
    <Footer />
  </div>
);

const NotFound = () => (
  <section className="w3-container w3-center w3-content" style={{"maxWidth":"800px"}}>
    <h2 className="w3-wide">404. Sorry, no page here.</h2>
  </section>
);

const IdTest = (props) => (
  <section className="w3-container w3-center w3-content" style={{"maxWidth":"800px"}}>
    <h2 className="w3-wide">ID={props.params.id}</h2>
  </section>
);

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='quotes' component={Quotes} />
          <Route path='doctors' component={Doctors} />
          <Route path='doctors/:id' component={Doctor} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}



export default App;
