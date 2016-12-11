require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HomePage from './homepage/HomePageComponent'
import NewsPage from './newspage/NewspageComponent'
import VideoPage from './video/VideoPageComponent'

class AppComponent extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="index">
        <HomePage/>
        <NewsPage/>
        <VideoPage/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
