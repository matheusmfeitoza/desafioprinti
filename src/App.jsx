import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Champion, Champions } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/champions/:id" element={<Champion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
