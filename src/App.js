
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import logo from './logo.svg';

import Header from './components/header/Header'


import "./styles/app.scss";
import "./styles/header.scss";


function App() {
  return (
    <div className="App">
      <Router>
      <Header  />
      </Router>
    </div>
  );
}

export default App;
