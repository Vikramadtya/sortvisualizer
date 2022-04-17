import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Components/Organisms/navbar";
import Home from "./Pages/home";
import Sort from "./Pages/sort";
import About from "./Pages/about";

function App() {
  console.log("jkjk");
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar text="Sort Visualiser" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sort/:name" element={<Sort />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
