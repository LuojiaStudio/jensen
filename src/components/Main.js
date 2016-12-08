require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './public/FooterComponent'
import CenterLogo from './homepage/CenterlogoComponent'
import Header from './homepage/HeaderComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <CenterLogo/>
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
