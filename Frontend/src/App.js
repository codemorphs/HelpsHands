// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Main from "./Components/Channeling/Main";
// import Login from "./Components/Channeling/Login";
import Login from "./Components/LoginPage/LoginPage";
import Signup from "./Components/Channeling/Signup";
import Session from "./Components/Channeling/Session";
import Checkout from "./Components/Channeling/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/session" element={<Session />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
