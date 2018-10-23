import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Step from "./Step";
import TOC from "./TOC";
import LandingPage from "./LandingPage";

import { structure } from "./States";

console.log(structure);

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            <span>
              <Link to={`/`}>Introduction to Smart Contract!</Link>
            </span>
          </h1>
        </header>

        <Router>
          <TOC path={`/:directory`} />
          <LandingPage path={`/`} structure={structure} />
          <Step path={`/DAO/:id`} directory="DAO" structure={structure} />
          <Step path={`/prep/:id`} directory="prep" structure={structure} />
          <Step path={`/DAO/:id`} directory="DAO" structure={structure} />
          <Step path={`/prep/:id`} directory="prep" structure={structure} />
        </Router>
      </div>
    );
  }
}

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
