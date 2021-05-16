import React from 'react';
import Main from './components/Main.js';
import About from './components/About.js';
import Tech from './components/Tech.js';
import Contact from './components/Contact.js';
import './styles/App.css';
import ProjectList from './components/MyProjects/ProjectList.js';



function App() {
  return (
    <div className="App">
      < Main />
      < About />
      <ProjectList />
      < Tech />
      < Contact />
    </div>
  );
}

export default App;
