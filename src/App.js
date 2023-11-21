import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from './components/ScrollButton'; 
import RedirectHandler from './components/RedirectHandler';


function App() {
  return (
    <div className="App">
      <Router>
        <RedirectHandler />
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />          
        </Routes>
      </Router>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
