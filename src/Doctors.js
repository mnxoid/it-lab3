import React, { Component } from 'react';
import { Link } from 'react-router';

import { captions, actors } from './data.js';

const doctor = (i) =>(
  <article className="w3-quarter" key={i}>
    <p>{actors[i]}</p>
    <Link to={`doctors/${i}`}><img src={`img/doctors/${+i+1}.jpg`} alt="Random Name" style={{"width":"100%"}}/></Link>
    <p>{captions(i)}</p>
  </article>
);

function range(a,b,s){return a<=b?[a].concat(range(a+s,b,s)):[];}

const doctorRow = (i) =>(
  <section className="w3-row-padding w3-center w3-light-grey" key={i}>
    {
      range(i,i+3,1).map(j=>doctor(j))
    }
  </section>
);

class Doctors extends Component {
  render() {
    return (
      <section className="w3-container w3-center w3-content" style={{"maxWidth":"1000px"}}>
        <h2 className="w3-wide">DOCTOR'S INCARNATIONS</h2>
        {
          range(0,8,4).map(i=>doctorRow(i))
        }
      </section>
    );
  }
}

export default Doctors;
