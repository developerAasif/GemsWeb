
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CombineRoutes from "./routes/CombineRoutes";


import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';





import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";


function App() {
  return (    <>
    <Router>
      <CombineRoutes />

  


      </Router>

 
      

   


   
     </>

    
  );
}

export default App;
