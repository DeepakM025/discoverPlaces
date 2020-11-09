import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/scss/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
// import Sidebar from './components/sidebar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
