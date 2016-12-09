'use strict';

import React from 'react';
import Footer from '../public/FooterComponent'
import CenterLogo from './CenterlogoComponent'
import Header from './HeaderComponent'
import Side from '../public/SideComponent'


require('styles/homepage/HomePage.css');

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side_open: false
    }
  }

  handleSideClose() {
    this.setState({
      side_open: false
    })
  }

  handleSideOpen() {
    this.setState({
      side_open: true
    })
  }

  render() {
    return (
      <div className="homepage-component">
        <Header
          onOpen={this.handleSideOpen.bind(this)}
        />
        <CenterLogo/>
        <Side
          open={this.state.side_open}
          onClose={this.handleSideClose.bind(this)}
        />
      </div>
    );
  }
}

HomePageComponent.displayName = 'HomepageHomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;
