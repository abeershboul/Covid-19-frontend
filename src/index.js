import React from 'react';
import ReactDOM from 'react-dom/client';
import CovidCard from './Components/CovidCard/CovidCard.js'
import Header from './Components/Header/Header.js'
import Menu from './Components/Menu/Menu.js'
import Home from './Components/Home/Home.js'
import Records from './Components/Records/Records.js'
import AllCountries from './Components/AllCountries/AllCountries.js'
import App from './App'
// https://meet.google.com/hcf-ynfd-jom?pli=1&authuser=0
const root = ReactDOM.createRoot(document.getElementById('root'));
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const header = React.createElement(Header, {}, 'I do not use JSX!');

root.render(
      <React.StrictMode>
            <App />
      </React.StrictMode>
      // <div>
      //       <Header/>
      //       <Menu/>
      //       {/* <Home/> */}
      //       {/* <AllCountries/> */}
      //       <Records/>
      // </div>
);
