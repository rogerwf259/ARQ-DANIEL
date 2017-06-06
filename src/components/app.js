import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Separator from './Separator';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <Portfolio />
        <Resume />
        <Separator />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
