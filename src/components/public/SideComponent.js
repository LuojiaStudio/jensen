'use strict';

import React from 'react';
import FaClose from 'react-icons/lib/fa/close'
import $ from 'jquery'

require('styles/public/Side.css');


class SideComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="side-component">
        <div className="side-tool-wrapper">
          <span>菜单</span>
          <span>
            <FaClose/>
          </span>
        </div>
        <ul className="side-list">
          <li><a href="#">新闻</a></li>
          <li><a href="#">通知</a></li>
          <li><a href="#">权益</a></li>
          <li><a href="#">下载</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </div>
    );
  }
}

SideComponent.displayName = 'PublicSideComponent';

// Uncomment properties you need
// SideComponent.propTypes = {};
// SideComponent.defaultProps = {};

export default SideComponent;
