import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Author_guideline from './Author_guideline'; 
import  NavBar  from './Components/NavBar';
import FooterPage from './Components/Footer';

//import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router basename='/'>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/Login' component={Login}/>
          <Route  path='/Register' component={Register}/>
          <Route  path='/Author_Guideline' component={Author_guideline}/>
        </Switch>
      <FooterPage/>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
