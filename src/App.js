import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import AboutPage from './Pages/About/AboutPage';
import ResumePage from './Pages/Resume/ResumePage';
import Blog from './Componenets/Blog/Blog';
import ContactPage from './Pages/Contact/ContactPage';




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

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>




        </Switch>
      </Router>

    </>
  );
}

export default App;
