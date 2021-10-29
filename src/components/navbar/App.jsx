import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";
import { Jumbotron, Container } from "react-bootstrap";

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: "rgba(50, 13, 136)"});
    } else {
      this.setState({color: "#121930"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav_bar" style={{backgroundColor: this.state.color}}>
            <ul>
              <li>
                <Link to="/">
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              {/* <li>
                <Link to="/speakers">
                  <span className="links">Speakers </span>{" "}
                </Link>
              </li> */}
              {/* <li>
                <Link to="/projects">
                  <span className="links">More info </span>{" "}
                </Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            <Route path="/discord" exact component={Discord} />
            <Route path="/linkedin" exact component={Linkedin} />
            <Route path="/devpost" exact component={Devpost} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/links">
              <HomePage />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Speakers() {
  return (
  <div className="jumboSpeaker">
    <Jumbotron fluid>
    <Container>
      <h1>under-construction</h1>
    </Container>
  </Jumbotron>
  </div>
  );
}

function Contact() {
  return <h1>Contact Info</h1>;
}

function Links() {
  return <h2>Home</h2>;
}
