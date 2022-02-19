import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Organisms/navbar";
import Home from "./Pages/home/home";
import Sort from "./Pages/Sort/sort";
import About from "./Pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar text="Sort Visualiser" />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sort/:name" component={Sort} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
