import React from 'react';
import Home from './components/cmp/Home';
import Navbar from './components/cmp/Navbar';
import Footer from './components/cmp/Footer'
import ErrorPage from './components/404page/ErrorPage';
import EditRow from './components/pages/EditRow';
import About from './components/pages/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ < Home /> }></Route>
          <Route exact path='/edit/:id' element={ < EditRow /> }></Route>
          <Route exact path='/about' element={ < About /> }></Route>
          <Route path='*' element={ < ErrorPage/> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
