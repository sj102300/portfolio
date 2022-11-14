import React from 'react';
import './App.css';

// @ts-ignore
import Navbar from './components/nav.tsx';
import MainPage from './components/mainpage';

//npm run start

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <MainPage />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
