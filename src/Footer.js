import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        <a href="https://www.facebook.com/DoctorWho/"><i className="fa fa-facebook-official"></i></a>&nbsp;
        <a href="https://www.pinterest.com/explore/doctor%20who/"><i className="fa fa-pinterest-p"></i></a>&nbsp;
        <a href="https://twitter.com/bbcdoctorwho"><i className="fa fa-twitter"></i></a>
        <p className="w3-medium">
        Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
