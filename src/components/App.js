import React, { Component } from 'react';
import logoLarge from '../images/logo-l.svg';
import '../styles/App.css';
import '../styles/style.css';
import Header from './Header';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video />
        <div className="container fullContainer">
      		<div className="content">
            <Header />

            <div className="center-copy">
              <div className="center-text hidden-xs hidden-sm hide margin-auto">
                <h2 className="title hide">
                  A studio dedicated to exploring how we interact and visualize space.
                </h2>
              </div>
              <div className="hidden-md hidden-lg">
                <div className="info-sec hide">
                  <div className="about-sec sub-page-sec">
                    <h2 className="title">
                    ABOUT
                  </h2>
                    <p>
                      A studio dedicated to exploring how we interact and visualize space.
                    </p>
                  </div>

                  <div className="capabilities-sec sub-page-sec">
                    <h2 className="title">CAPABILITIES</h2>
                    <ul>
                      <li>Virtual Reality</li>
                      <li>Augmented Reality</li>
                      <li>App Development</li>
                      <li>Online + Interactive</li>
                      <li>Still Imagery</li>
                      <li>Film + Production</li>
                      <li>360° Imagery</li>
                    </ul>
                  </div>

                  <div className="contact-sec sub-page-sec">
                    <h2 className="title">
                    CONTACT
                  </h2>
                    <p>
                      ALTR Labs
                    </p>
                    <p>
                      New York, New York
                    </p>
                    <p>
                      <a href="tel:212—612—2266" target="_blank" rel="noopener noreferrer">212—612—2266</a>
                      <a href="mailto:info@altrlabs.com" target="_blank" rel="noopener noreferrer">info@altrlabs.com</a>
                    </p>
                  </div>

                  <div className="copyright-sec sub-page-sec">
                    <p>
                      © 2018 ALTR Labs. All rights reserved.
                    </p>
                    <p>
                      No part of this website may be reproduced, distributed or transmitted in any form or by any means, without prior written permission.
                    </p>
                  </div>
                </div>
              </div>


              <div className="altr-logo-hero">
                <img src={logoLarge} width="100%" alt="ALTR LABS Logo" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
