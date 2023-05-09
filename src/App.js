import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './Create';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Create">
                <Create />
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
