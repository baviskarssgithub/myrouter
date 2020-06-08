import React from 'react';
import './App.css';
import Nav from './app/components/Nav';
import Shop from './app/components/Shop';
import About from './app/components/About';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  
  return (
    <div style={{border:"solid 1px green"}}>
        <Router>
        <div className="App" style={{border:"solid 1px black"}}>
          <Nav/>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Business" component={Business} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
        </Router>
        
    </div>
    
  );
}

const Home = () =>(
  <div><h1>Home page</h1></div>
);


const Business = () =>(
  <div style={{color:"red", border:"solid 1px red", height:500}}>
    <h1>Business Home page</h1>
    <a href="/">Go to Home</a>
    
  </div>
);


export default App;
