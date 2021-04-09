import React from 'react';
import './App.css'
import Visitors from './Components/Visitors'
import Exhibit from './Components/Exhibit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from 'react-router-dom';

export default function App() {
  //const reviews = [];

  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/visitors">Visitors</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/exhibits">Exhibits</Link>
            </Button>
          </ButtonGroup>
          
          <Switch>
            <Route path="/visitors">
              <Visitors />
            </Route>
            <Route path="/exhibits">
              <Exhibit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )
}

function Home() {
  return (
      <div>
          <h2>Home</h2>
          <br/>
          <hr/>
          <br/>
          <img src="https://www.gannett-cdn.com/presto/2018/10/11/PLSJ/36192002-dc0b-4ba8-bb37-b627165ae500-Potter_Park_Zoo.jpg?crop=856,429,x56,y0" alt="zoo-pic"/>
      </div>
  )
}

