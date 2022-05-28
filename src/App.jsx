import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Champion from "./components/Champion/Champion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions/*" element={<Champion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
