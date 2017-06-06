import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <section id="about">
          <div id="vl">

            <video id="video" autoPlay>
              {/* <source src="/assets/img/db.mp4" type="video/mp4"/> */}
            </video>
            <img src="assets/img/new-logo.png" className="wow bounceIn" data-wow-delay=".3s"/>

          </div>

          <div id="info">
            <h7 className="bold">ABOUT</h7>
            <p>Chicago-born, Anthony Wiktor is a seasoned vet in the design industry who is currently using his creativity to bring ideas to life in Los Angeles, CA. He has traditional marketing and advertising experience, yet his focus lies in digital design where creating interactive consumer experiences drive him. Anthony's portfolio showcases a range of exceptionally well-crafted campaigns for national brands in both digital and traditional media, and he has won multiple awards for both web design and branding.</p>
            <div id="links_about">
              <a className="ab_link" href="#">Print Resume</a>
              <a className="ab_link" href="#">DownloadPDF</a>
              <a className="ab_link" href="#">LINKED IN</a>
            </div>
          </div>
      </section>
    );
}
}

export default About;
