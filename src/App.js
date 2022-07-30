import React from 'react';
import { BrowserRouter as Router, useRoutes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Tindercards from './Tindercards';

function App() {
  return (
    <div className="App">

      <Header />
      <Router>    
        <useRoutes>
          <Route path='/welcome'/>
          <Route path='/'>
            <h2>Hello</h2>
          </Route>
        </useRoutes>   
      </Router>
      
    </div>
  );
}

export default App;
