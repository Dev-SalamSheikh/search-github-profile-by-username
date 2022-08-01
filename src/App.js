import Data from "./Data";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repo from "./Repo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
