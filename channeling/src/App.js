// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channeling from './Component/Channeling/channeling';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/channeling" element={<Channeling/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
