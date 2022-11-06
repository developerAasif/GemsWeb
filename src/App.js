
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Home from "./pages/home/Home";




import "./styles/app.scss";
import "./styles/header.scss";


function App() {
  return (
    <div className="App">
      <Router>
      <Header  />
      <Home/>
    
      
      </Router>
    </div>
  );
}

export default App;
