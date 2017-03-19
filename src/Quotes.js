import React, { Component } from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const article = (title,content,subscript,key) =>(
  <article key={key}>
    <p className="w3-justify">{title}</p>
    <p>{content}</p>
    <p className="ralign"><i>{subscript}</i></p>
  </article>
);

function range(a,b,s){return a<=b?[a].concat(range(a+s,b,s)):[];}

const data = [
  [
    "Miracles",
    "Books are the Best Weapons",
    "Madman",
    "Better Than You Think",
    "Good and Bad",
    "It’s the Person",
    "Pretend It’s a Plan",
    "Important",
    "Slapped",
    "Coincidence",
    "A Hand to Hold",
    "Here I am Right Now",
    "Optimist",
    "Some Days Are Special",
    "We’re All Stories",
    "Be Alive",
    "Bring This to a Party",
    "Don’t Give Up",
    "So Much to See",
    "We Were Fantastic",
  ],
  [
    "“The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.",
    "“You want weapons? We’re in a library! Books! The best weapons in the world!",
    "“Amy Pond, there’s something you’d better understand about me ‘cause it’s important, and one day your life may depend on it: I am definitely a mad man with a box!”",
    "“When you’re a kid, they tell you it’s all… Grow up, get a job, get married, get a house, have a kid, and that’s it. But the truth is, the world is so much stranger than that. It’s so much darker. And so much madder. And so much better.”",
    "“The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.”",
    "“Some people live more in 20 years than others do in 80. It’s not the time that matters, it’s the person.",
    "“Do what I do. Hold tight and pretend it’s a plan!”",
    "“In 900 years of time and space, I’ve never met anyone who wasn’t important",
    "“900 years of time and space, and I’ve never been slapped by someone’s mother.”",
    "“Never ignore coincidence. Unless, of course, you’re busy. In which case, always ignore coincidence.",
    "“There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors… You know the thing you need most of all? You need a hand to hold.",
    "“This is who I am, right here, right now, all right? All that counts is here and now, and this is me!”",
    "“I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.",
    "“Everybody knows that everybody dies. But not every day. Not today. Some days are special. Some days are so, so blessed. Some days, nobody dies at all. Now and then, every once in a very long while, every day in a million days, when the wind stands fair and the Doctor comes to call, everybody lives.”",
    "“We’re all stories, in the end. Just make it a good one, eh?",
    "“Letting it get to you. You know what that’s called? Being alive. Best thing there is. Being alive right now is all that counts.”",
    "“Always take a banana to a party, Rose: bananas are good!",
    "“You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away.",
    "“This is one corner… of one country, in one continent, on one planet that’s a corner of a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and destroying and never remaining the same for a single millisecond. And there is so much, so much to see.",
    "“Rose, before I go, I just want to tell you: you were fantastic. Absolutely fantastic. And you know what? So was I.”",
  ],
  [
    "— The Doctor, Season 5, Episode 12",
    "— The Doctor, Season 2, Episode 2",
    "— The Doctor, Season 5, Episode 1.",
    "— Elton Pope, Season 2, Episode 10.",
    "— The Doctor, Season 5, Episode 10",
    "— The Doctor, Season 3, Episode 6",
    "— The Doctor, Season 7, Christmas Special",
    "— The Doctor, Season 6, Christmas Special",
    "— The Doctor, Season 1, Episode 4",
    "— The Doctor, Season 5, Episode 12",
    "— The Doctor, Season 6, Episode 6",
    "— The Doctor, Season 1, Episode 2",
    "— The Doctor, Season 6, Episode 6",
    "— River Song, Season 6, Episode 13",
    "— The Doctor, Season 5, Episode 13",
    "— The Doctor, Season 6, Episode 4",
    "— The Doctor, Season 2, Episode 4",
    "— Rose Tyler, Season 1, Episode 13",
    "— The Doctor, Season 7, Episode 4",
    "— The Doctor, Season 1, Episode 13",
  ]
];

class Quotes extends Component {
  render() {
    return (
      <section className="w3-container w3-center w3-content" style={{"maxWidth":"800px"}}>
        <h2 className="w3-wide">FAMOUS DOCTOR WHO QUOTES</h2>
        {
          range(0,data[0].length,1)
          .map(x=>article(data[0][x],data[1][x],data[2][x],x))
        }
      </section>
    );
  }
}

export default Quotes;
