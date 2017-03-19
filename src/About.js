import React, { Component } from 'react';

const Section = (props) => (
  <section className="w3-container w3-center w3-content" style={{"maxWidth":"1000px"}}>
    {props.children}
  </section>
);

class About extends Component {
  render() {
    return (
      <Section>
        <h2 className="w3-wide">ABOUT</h2>
        <p className="w3-justify doctorText">
          This website was created as an assignment (lab work #3) for "Internet technologies" course at Lviv Polytechnic National University. This site uses React.js and is hosted at Heroku.
        </p><br/><br/>
        <p>Copyright: Dudyak Michael </p>
        <p>(No rights reserved)</p>
      </Section>
    );
  }
}

export default About;



