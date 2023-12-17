import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import Contact from './Components/contact';
import Projects from './Components/projects';
import Footer from './Components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <>
      <BrowserRouter>
      <NavBar toggleDarkMode={toggleDarkMode}/>
      <br /><br />
        <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}
export default App;
