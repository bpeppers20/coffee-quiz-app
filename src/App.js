import React from 'react';
import './App.css';
//Icon Imports
import {ReactComponent as Arrow} from './icons/Arrow.svg';
import {ReactComponent as Gear} from './icons/Gear.svg';
import {ReactComponent as Glass} from './icons/Glass.svg';
import {ReactComponent as QuizIcon} from './icons/Quiz.svg';
// Router Imports
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// File Imports
import Home from './Home';
import Quiz from './Quiz';
import Search from './Search';
import Item from './Item';

function App() {
  return ( 
    <>
      <Navbar>
        <NavItem></NavItem>
      </Navbar>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/quiz" exact component={Quiz}/> {/* Example of a Class Component*/}
            <Route path="/search" exact component={Search} />
            <Route path="/search/:id" component={Item} />
            <Route path="/results/:id" component={Item}/>
            <Route path="/"><main> 404 Data Not Found</main></Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

// NavBar Functionality
function Navbar (props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem() {
  return(
    <>
      <li className="logo">
        <a href="/" className="nav-link">
          <span className="link-text logo-text">Logo</span>
            <Arrow />
        </a>
      </li>
      <li className="nav-item">
        <a href="/quiz" className="nav-link">
          <QuizIcon />
          <span className="link-text">Quiz</span>
        </a>
      </li>
      
      
      <li className="nav-item">
        <a href="/search" className="nav-link">
          <Glass />
          <span className="link-text">Search Recipes</span>
        </a>
      </li>
      
      <li className="nav-item">
        <a href="/" className="nav-link">
          <Gear /> 
          <span className="link-text">Settings</span>
        </a>
      </li>
    </>
  );
}

export default App;