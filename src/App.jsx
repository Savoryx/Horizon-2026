import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenets/home.jsx";

function App() {
  return (
    <Router>
      <div className="w-screen overflow-x-hidden">

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
