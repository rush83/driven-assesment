import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './Routes';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;