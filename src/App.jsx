import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Champions from "./components/Champions/Champions";
import Champion from "./components/Champions/Champion";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/champions/*" element={<Champion />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
