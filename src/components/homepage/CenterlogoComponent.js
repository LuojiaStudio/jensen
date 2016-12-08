'use strict';

import React from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down'

require('styles/homepage/Centerlogo.css');


class CenterlogoComponent extends React.Component {
  componentDidMount() {
    window.onload = function(){
      //配置
      var config = {
        vx: 2,//点x轴速度,正为右，负为左
        vy:  2,//点y轴速度
        height: 2,//点高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 100,//点个数
        color: "15, 31, 123",//点颜色
        stroke: "15, 31, 123",//线条颜色
        dist: 3000,//点吸附距离
        e_dist: 20000,//鼠标吸附加速距离
        max_conn: 10//点到点最大连接数
      };
      //调用\
      CanvasParticle(config);
    }
  }

  render() {
    return (
      <div className="centerlogo-component">
        <img  className="homepage-center-img" src="../../images/logo.png" alt="武汉大学学生会"/>
        <div className="center-bar">与其在别处仰望，不如在这里并肩</div>
        <div className="homepage-btn">
          <FaAngleDown/>
        </div>
      </div>
    );
  }
}

CenterlogoComponent.displayName = 'HomepageCenterlogoComponent';

// Uncomment properties you need
// CenterlogoComponent.propTypes = {};
// CenterlogoComponent.defaultProps = {};

export default CenterlogoComponent;
