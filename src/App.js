import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "./components/Context";
import Navbar from "./components/Navbar";
import About from "./Pages/AboutMe";
import HomePage from "./Pages/HomePage";

function App() {

  const [style, setStyle] = useState("light");
  function toggleStyle() {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }

  return (
    <Router>
      <div className="App">
        <Provider value={{ style, toggleStyle }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
