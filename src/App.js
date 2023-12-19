import {BrowserRouter, Routes, Route} from 'react-router-dom';

// COMPONENTS
import {NavBar} from './components/NavBar';
import {Home} from './components/Home';
import {Projects} from './components/Projects';
import {AboutMe} from './components/AboutMe'
import {Resume} from './components/Resume'
import {Contact} from './components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="about-me" element={<AboutMe />}/>
            <Route path="resume" element={<Resume />}/>
            <Route path="contact" element={<Contact />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
//trigger build//
export default App;