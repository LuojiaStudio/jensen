'use strict';

import React from 'react';
import FaClose from 'react-icons/lib/fa/close'
import $ from 'jquery'

require('styles/public/Side.css');


class SideComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    let side_class = 'side-close';
    if(this.props.open === true) side_class = 'side-open';
    return (
      <div className={side_class}>
        <div className="side-tool-wrapper">
          <span>菜单</span>
          <span>
            <FaClose
              onClick={() => this.props.onClose()}
            />
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
