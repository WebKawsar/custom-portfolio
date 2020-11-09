import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import About from './Componenets/About/About';
import AboutPage from './Pages/About/AboutPage';
import ResumePage from './Pages/Resume/ResumePage';




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
            <AboutPage></AboutPage>
          </Route>

          <Route path="/resume">
            <ResumePage></ResumePage>
          </Route>




        </Switch>
      </Router>

    </>
  );
}

export default App;
