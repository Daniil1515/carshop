import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home-page/home-page";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


function App() {
  return (
      <Router>
            <div className="wrapper">
              <Header />
                <Routes>
                    <Route path="/cars" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/about"  />
                </Routes>
                <Footer />
            </div>
      </Router>
  );
}

export default App;
