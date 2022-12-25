import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header.js'
import Menu from './Components/Menu/Menu.js'
import Home from './Components/Home/Home.js'
import AllCountries from './Components/AllCountries/AllCountries.js'
import Records from './Components/Records/Records.js'
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Menu />
          <Routes>
            <Route
              exact path="/"
              element={<Home />}
            />
            <Route
              exact path="/countries"
              element={<AllCountries />}
            />
            <Route
              exact path="/records"
              element={<Records />}
            />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;