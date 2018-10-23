// import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import "./reset.css";
import "./single-col.css";
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
              <Link to={`${process.env.PUBLIC_URL}/`}>
                Introduction to Smart Contract!
              </Link>
            </span>
          </h1>
        </header>

        <Router basename="/DAOweb">
          <TOC path={`${process.env.PUBLIC_URL}/:directory`} />
          <LandingPage
            path={`${process.env.PUBLIC_URL}/`}
            structure={structure}
          />
          <Step
            path={`${process.env.PUBLIC_URL}/DAO/:id`}
            directory="DAO"
            structure={structure}
          />
          <Step
            path={`${process.env.PUBLIC_URL}/prep/:id`}
            directory="prep"
            structure={structure}
          />
          <Step
            path={`${process.env.PUBLIC_URL}/DAO/:id`}
            directory="DAO"
            structure={structure}
          />
          <Step
            path={`${process.env.PUBLIC_URL}/prep/:id`}
            directory="prep"
            structure={structure}
          />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
