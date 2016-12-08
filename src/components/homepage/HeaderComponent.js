'use strict';

import React from 'react';
import FaBar from 'react-icons/lib/fa/bars'

require('styles/homepage/Header.css');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="header-logo">
          <span><strong>WHU</strong>SU</span>
        </div>
        <div className="header-menu-wrapper">
          <FaBar
            onClick={() => this.props.onOpen()}
          />
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HomepageHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
