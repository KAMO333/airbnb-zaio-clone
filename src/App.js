import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Header from "./component/layout/Header/Header";
import Footer from "../src/component/layout/Footer/Footer";
import SearchPage from "./component/SearchPage/SearchPage";
import Modal from "./component/Modal/Modal";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Route path='/'>
          <Modal />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;