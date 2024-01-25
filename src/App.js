import {BrowserRouter , Routes, Route} from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar scrollToTop={scrollToTop} />
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
        <Footer scrollToTop={scrollToTop}/>
      </BrowserRouter>
    </div>
  );
}

export default App;