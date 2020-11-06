import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import About from './Componenets/About/About';




function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/portfolio">
            <PortfolioPage></PortfolioPage>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>




        </Switch>
      </Router>

    </>
  );
}

export default App;
