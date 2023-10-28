// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar />
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
            
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
