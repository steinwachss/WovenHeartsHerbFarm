import React from 'react';
import logo from './img/vector logo all transparent.png'
import kickStart from './img/kickstarter_banner.png'
import videoThumb from './img/fillermain.jpg'
import slideThumb from './img/fillslide.jpg'
import sophie from './img/sophia.jpg'
import alyssa from './img/alyssa.jpg'
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <header className="app-header">
        <img id="mainLogo" src={logo} alt=""/>
        <h1 id="titleText">Woven Hearts Herb Farm</h1>
      </header>
      <div id="banner">
        <a href="#" target="_blank"><img src={kickStart} alt="" id="kickStart"/></a>
      </div>
      <div id="video">
        <img src={videoThumb} alt=""/>
      </div>
      <main id="mainContent">
        <div id="about">
          <h2 className="script">Our Story</h2>
          <div id="aboutTxt">
            <p id="first"><strong>Our passion for this project is deeply driven by our love of plants. Woven Hearts Herb Farm is a budding business that aims to produce medicinal plants for the healing hearts in our community.</strong> <em>Our microfarm will supply bulk dried herbs to apothecaries, provide seasonal access to fresh plant material for local healers, and sell medicinal and culinary herb products at farmer's market. Here in Humboldt County we have a highly conscious consumer base with a desire to support local agriculture.  Many community members have experienced the holistic benefits of incorporating healing plants into their lives, whether in the medicine cabinet, the kitchen, or in a simple cup of tea.  Did you know, however, that the cup of chamomile you enjoy could have been grown as far away as Egypt?</em></p>
            <p id="second"><em>We want to produce these plants because <strong>we believe</strong> that...</em></p>
          </div>
          <ul>
            <li><p><em>Herbs grown within the county can provide the community with the freshest plant medicine available.</em></p></li>
            <li><p><em>Medicine from plants is best when grown with love and care: A positive interaction between plant and people can be felt by those consuming the medicine.</em></p></li>
            <li><p><em>Those who tend the land with care also tend the community with care.  Local, responsible agriculture fosters wholeness within the community. </em></p></li>
          </ul>
        </div>
        <div id="slideshow">
          <img className="port" src={sophie} alt=""/>
          <img className="port" src={alyssa} alt=""/>
        </div>
      </main>
      <div id="contactContainer">
        <div id="contact">
          <h2 className="script">Contact Us</h2>
          <ul>
            <li>phone: (707) 890-7813</li>
            <li>email: wovenheartsherbfarm@gmail.com</li>
          </ul>
        </div>
        <div id="social">
        <a href="https://www.instagram.com/woven_hearts_herb_farm_/" target="_blank">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </a>
        <a href="" target="_blank">
          <svg id="kickLogo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="kickstarter-k" class="svg-inline--fa fa-kickstarter-k fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M147.3 114.4c0-56.2-32.5-82.4-73.4-82.4C26.2 32 0 68.2 0 113.4v283c0 47.3 25.3 83.4 74.9 83.4 39.8 0 72.4-25.6 72.4-83.4v-76.5l112.1 138.3c22.7 27.2 72.1 30.7 103.2 0 27-27.6 27.3-67.4 7.4-92.2l-90.8-114.8 74.9-107.4c17.4-24.7 17.5-63.1-10.4-89.8-30.3-29-82.4-31.6-113.6 12.8L147.3 185v-70.6z"></path></svg>
        </a>
        </div>
      </div>
      <footer id="mainFooter">
        <div id="copy">
          <p>&copy; Woven Hearts Herb Farm 2019</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
