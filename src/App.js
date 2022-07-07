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
import About from "./pages/about/about";
import CarPage from "./pages/car-page/carPage";


function App() {
  return (
      <Router>
            <div className="wrapper">
              <Header />
                <Routes>
                    <Route path="/cars" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/cars/:id" element={<CarPage />} />
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />}/>
                </Routes>
                <Footer />
            </div>
      </Router>
  );
}

export default App;
