import React from 'react';
import HeaderComponent from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>TODO LIST APP</h2>
      </section>
      <HeaderComponent/>
    </div>
  )
}

export default App
