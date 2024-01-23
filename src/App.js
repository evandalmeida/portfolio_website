import {BrowserRouter , Routes, Route} from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route 
              index='true' 
              path="/"
              element={<Home/>}
              />
            <Route 
              path="/projects" 
              element={<Projects />}
              />
            <Route 
              path="/about-me" 
              element={<AboutMe />}
              />
            <Route 
              path="/resume" 
              element={<Resume />}
              />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

