require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HomePage from './homepage/HomePageComponent'
import NewsPage from './newspage/NewspageComponent'

class AppComponent extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="index">
        <HomePage/>
        <NewsPage/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
