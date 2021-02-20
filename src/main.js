/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["\u2660", "\u2663", "\u2665", "\u2666"];

  let randomnumberposition = Math.floor(Math.random() * numbers.length);
  let randomsuitsposition = Math.floor(Math.random() * suits.length);

  let randomsuits = suits[randomsuitsposition];

  document.querySelector(".suit").innerHTML = randomsuits;
  document.querySelector(".number").innerHTML = randomsuits;
  document.querySelector(".suit2").innerHTML = randomnumberposition;
};
