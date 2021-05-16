import React from 'react';
import Main from './components/Main.js';
import About from './components/About.js';
// import Projects from './components/Projects.js';
import Tech from './components/Tech.js';
import Contact from './components/Contact.js';
import './styles/App.css';
import ProjectList from './components/Project.js';



function App() {
  return (
    <div className="App">
      < Main />
      < About />
      <ProjectList />
      {/* < Projects /> */}
      < Tech />
      < Contact />
    </div>
  );
}

export default App;
