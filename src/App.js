import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Hello Dave</h1>
        <Header />
      </Router>
      
    </div>
  );
}

export default App;
