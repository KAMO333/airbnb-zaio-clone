import "./App.css";
import Home from "./component/Home/Home";
import Header from "./component/layout/Header/Header";
import Footer from "../src/component/layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
