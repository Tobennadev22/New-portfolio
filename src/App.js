import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NavMenu from "./components/NavMenu";
import Project1 from "./pages/Project1";

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/project1" element={<Project1 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
