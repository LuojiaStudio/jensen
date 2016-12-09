'use strict';

import React from 'react';
import Footer from '../public/FooterComponent'
import CenterLogo from '../homepage/CenterlogoComponent'
import Header from '../homepage/HeaderComponent'
import Side from '../public/SideComponent'
import NewsCotent from './NewsContentComponent'

require('styles/newspage/Newspage.css');

class NewspageComponent extends React.Component {
  render() {
    return (
      <div className="newspage-component">
        <NewsCotent/>
      </div>
    );
  }
}

NewspageComponent.displayName = 'NewspageNewspageComponent';

// Uncomment properties you need
// NewspageComponent.propTypes = {};
// NewspageComponent.defaultProps = {};

export default NewspageComponent;
