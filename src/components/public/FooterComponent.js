'use strict';

import React from 'react';

require('styles/public/Footer.css');

let FooterComponent = (props) => (
  <div className="footer-component">
    <div><span>©武汉大学学生会</span><span>技术支持 <a href="#" className="footer-luojiastudio">珞珈工作室</a></span></div>
  </div>
);

FooterComponent.displayName = 'PublicFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
