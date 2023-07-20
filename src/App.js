import { useState } from "react";
import { BrowserRouter as Router , Route , Rous, Routes
 } from "react-router-dom";

import Sidebar from "./containers/Sidebar";

import "../src/assets/styles/style.css"
import "./app.scss"
import Overview from "./pages/Overview";
import Tickets from "./pages/Tickets";

function App() {
  return (
      <div className="App">
         <Router>
       
       <Sidebar/>

  <Routes>
    <Route path="/Overview" element={<Overview/>}></Route>
    <Route path="/Tickets" element={<Tickets/>}></Route>
  </Routes>
 </Router>
      </div>
   
  );
}

export default App;
