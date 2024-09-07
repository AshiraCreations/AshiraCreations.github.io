import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Theatre from "./pages/Theatre";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path='/theatre' element={<Theatre />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
