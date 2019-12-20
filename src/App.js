import React from 'react';
import logo from './img/vector logo.png'
import kickStart from './img/master2.png'
import videoThumb from './img/fillermain.jpg'
import slideThumb from './img/fillslide.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="mainLogo" src={logo} alt=""/>
        <h1 id="titleText">Woven Hearts Herb Farm</h1>
      </header>
      <div id="banner">
        <img src={kickStart} alt="" id="kickStart"/>
      </div>
      <div id="video">
        <img src={videoThumb} alt=""/>
      </div>
      <main id="mainContent">
        <div id="about">
          <h2>our story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div id="slideshow">
          <img src={slideThumb} alt=""/>
        </div>
      </main>
      <footer id="mainFooter">
      <div id="contact">
        <ul>
          <li>phone: 555-555-5555</li>
          <li>email: email@email.com</li>
        </ul>
      </div>
      <div id="social">
        <div>I</div>
        <div>K</div>
      </div>
      <div id="copy">
        <p>&copy; Woven Hearts Herb Farm 2019</p>
      </div>
      </footer>
    </div>
  );
}

export default App;
