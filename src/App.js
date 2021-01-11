import React from 'react';
import Main from './components/Main.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Tech from './components/Tech.js';
import './styles/App.css';



function App() {
  return (
    <div className="App">
      < Main />
      < About />
      < Projects />
      < Tech />
    </div>
  );
}

export default App;
