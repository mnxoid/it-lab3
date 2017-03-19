import React, { Component } from 'react';
// import { Link } from 'react-router';
import { descriptions } from './data.js';

const Section = (props) => (
  <section className="w3-container w3-center w3-content" style={{"maxWidth":"1000px"}}>
    {props.children}
  </section>
);

class Doctor extends Component {
  render() {
    if(+this.props.params.id>=0 && +this.props.params.id<=11) {
      return (
          <Section>
            <h2 className="w3-wide">{descriptions[this.props.params.id].match(/The \w+ Doctor/)}</h2>
            <p className="w3-justify doctorText">
              <img src={`img/doctors/${+this.props.params.id+1}.jpg`} className="doctorPic"/>
              {descriptions[this.props.params.id]}
            </p>
          </Section>
      );
    } else {
      return (
          <Section>
            <h2 className="w3-wide">Sorry, no such doctor.</h2>
          </Section>
      );
    }
  }
}

export default Doctor;



