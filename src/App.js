import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import React, {useState} from "react";

function App() {
  const [cartItems, setCartItems] = useState([]); 
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <>
      <Router>
        <NavBar cartItems={cartItems} setCartItems={setCartItems} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="container">
          <div className="pages">
            <Home cartItems={cartItems} setCartItems={setCartItems} searchTerm={searchTerm} />
          </div>
        </div>

      </Router>
    </>
  );
}

export default App;
