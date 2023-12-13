import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import Contact from './Components/contact';
import Projects from './Components/projects';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
