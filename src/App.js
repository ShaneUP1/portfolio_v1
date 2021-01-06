import React from 'react';
import Main from './components/Main.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import './styles/App.css';



function App() {
  return (
    <div className="App">
      < Main />
      < About />
      < Projects />
    </div>
  );
}

export default App;
