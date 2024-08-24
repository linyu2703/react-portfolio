import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "*" element={<Home/>} />
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about.html" element={<About/>} />
            <Route path="/experience.html" element={<Experience/>} />
            <Route path="/projects.html" element={<Projects/>} />
            <Route path="/contact.html" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
