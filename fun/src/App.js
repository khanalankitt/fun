import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import Contact from './Components/contact';
import Projects from './Components/projects';
import Footer from './Components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
// import { DarkModeProvider } from './DarkModeContext';
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
      <NavBar toggleDarkMode={toggleDarkMode}/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    </>
  );
}
export default App;
