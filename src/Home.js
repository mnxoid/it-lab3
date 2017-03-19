import React, { Component } from 'react';
import { Link } from 'react-router';

import { captions, actors } from './data.js';

function range(a,b,s){return a<=b?[a].concat(range(a+s,b,s)):[];}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const doctor = (i) =>(
  <article className="w3-third" key={i}>
    <p>{actors[i]}</p>
    <Link to={`doctors/${i}`}><img src={`img/doctors/${+i+1}.jpg`} alt="Random Name" style={{"width":"100%"}}/></Link>
    <p>{captions(i)}</p>
  </article>
);

class Home extends Component {
  componentWillMount(){
    var indexes = [];
    var all = range(0,11,1);
    range(0,2,1).forEach(()=>{
      var i=rand(0,11)%all.length;
      indexes.push(all[i]);
      all.splice(i,1);
    });
    this.setState({indexes: indexes});
  }
  componentDidMount(){
    // Automatic Slideshow - change image every 3 seconds
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 3000);
    }
  }
  render() {
    return (
      <div>
        <section>
          <img className="mySlides" src="img/img_band_la.jpg" style={{"width":"100%"}}/>
          <img className="mySlides" src="img/img_band_ny.jpg" style={{"width":"100%"}}/>
          <img className="mySlides" src="img/img_band_chicago.jpg" style={{"width":"100%"}}/>
        </section>

        <section className="w3-container w3-center w3-content" style={{"maxWidth":"600px"}}>
          <h2 className="w3-wide">DOCTOR WHO</h2>
          <p className="w3-opacity"><i>“Do what I do. Hold tight and pretend it’s a plan!”</i><br/>—The Doctor, Season 7, Christmas Special</p>
          <p className="w3-justify">
            Doctor Who is both a television show and a global multimedia franchise created and controlled by the BBC (British Broadcasting Corporation).
            <br/><br/>
            It centres on a time traveller called "the Doctor", who comes from a race of beings known as Time Lords. He travels through space and time in a time machine he calls the TARDIS. This ship — which looks like a small, London police box on the outside — has nearly infinite dimensions on the inside. It has become such an iconic shape in British culture that it is currently the intellectual property of the BBC rather than its actual makers, the Metropolitan Police Service.
          </p>
        </section>

        <section className="w3-row-padding w3-center w3-light-grey">
          <h2 className="w3-wide">RANDOM DOCTORS</h2>
          {
            this.state.indexes.map(i=>doctor(i))
          }
        </section>
      </div>
    );
  }
}

export default Home;
