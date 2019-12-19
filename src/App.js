import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import SortList from './pages/epartslist'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ SortList }/>
    </Router>
  )
}

export default App;
