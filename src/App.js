import React, { Component } from 'react';
import About from './components/About.js';
import AddNewCard from './components/AddNewCard.js';
import CardList from './components/CardList.js';
import PageHeader from './components/PageHeader.js';
import Footer from './components/Footer.js';
import Card from './components/Card.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

      <PageHeader />

      <Router>
        <div>
          <nav className='tabs'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/addnewcard">Add New Card</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <Switch>
            <Route exact path='/' component={CardList} />
            <Route path='/addnewcard' component={AddNewCard} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>

      <Footer />


      </div>
    );
  }
}

export default App;
