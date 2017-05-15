import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CV from './CV.js';
import Home from './Home.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar inverse collapseOnSelect className="App-nav">
            <Navbar.Header>
              <Navbar.Brand>
                <img src={logo} className="App-logo" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="App-nav-collapse">

              <Nav>
                <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
                <NavItem eventKey={3}><Link to="/cv">CV</Link></NavItem>

                <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                  <MenuItem eventKey={4.2}>Another action</MenuItem>
                  <MenuItem eventKey={4.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.4}>Separated link</MenuItem>
                </NavDropdown>

              </Nav>


              <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Jumbotron>
            <Grid>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  href="http://react-bootstrap.github.io/components.html"
                  target="_blank">
                  View React Bootstrap Docs
              </Button>
              </p>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/cv" render={() =>
                (
                  <CV name="test"></CV>
                )
              } />
            </Grid>
          </Jumbotron>
        </div>
      </Router>

    );
  }
}

export default App;