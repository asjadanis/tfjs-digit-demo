import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const homeText = `Hi my name is Asjad and I created this simplistic react-redux-boilerplate based on create-react-app, 
                  to quickly get started with React, without going through a bunch of configurations. This boilerplate 
                  comes pre-configured with redux, redux-thunk, redux-logger, react-router and connected-react-router 
                  to synchronise router state with redux.
                  
                  How to get started: 
                  
                  1 - Clone this repo from https://github.com/asjadanis/react-redux-boilerplate
                  2 - Install node modules running yarn install or npm install.
                  3 - Make sure to install redux dev tools extension first from https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
                  4 - Run yarn start or npm run start to see it in action.
                  5 - For more details see the project source on github and feel free to experiment and fork the repo.
                  `;

const exampleLink = `Navigate here to see it in action <br/><a href="/counter"> Counter Example </a>`;

let iterator = 0;
const timeout = 0;

const HomePage = (props) => {
  const typing = useRef();
  const counterLink = useRef();

  const typeText = () => {
    if (iterator < homeText.length) {
      typing.current.innerHTML += homeText[iterator];
      iterator++;
      setTimeout(typeText, timeout);
    }
    if (iterator >= homeText.length) {
      counterLink.current.innerHTML = exampleLink;
    }
  };

  useEffect(() => {
    typeText();
  }, []);

  return (
    <div>
      <pre className="description" ref={typing}></pre>
      <p ref={counterLink}></p>
    </div>
  );
};

export default HomePage;
