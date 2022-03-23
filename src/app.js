/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = [
  "jogger",
  "racoon",
  "mario",
  "harit",
  "ethernet",
  "augustus",
  "ioni"
];
let termination = ["com", "net", "us", "io", "it"];
let domain = [];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < termination.length; l++) {
        if (
          termination[l] ==
          noun[k].slice(noun[k].length - termination[l].length, noun[k].length)
        ) {
          domain.push(
            pronoun[i] +
              adj[j] +
              noun[k].slice(0, noun[k].length - termination[l].length) +
              "." +
              termination[l]
          );
        } else {
          domain.push(pronoun[i] + adj[j] + noun[k] + "." + termination[l]);
        }
      }
    }
  }
}
console.log(domain);
