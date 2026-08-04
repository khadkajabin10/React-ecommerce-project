import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<div>test checkout page</div>}></Route>
    </Routes>
  );
}

export default App;
