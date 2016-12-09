'use strict';

import React from 'react';

require('styles/newspage/NewsContent.css');

class NewsContentComponent extends React.Component {
  render() {
    return (
      <div className="newscontent-component">
        <div className="newspage-row">
          <div className="newspage-col">
            <li><a href="#">记2016年注册志愿者大会暨动员大会</a></li>
            <li><a href="#">电子信息学院新生辩论赛决赛——唇枪舌战，理是非曲直</a></li>
            <li><a href="#">匠心筑梦--我院本科2013级4班荣获武汉大学“先进班集体标兵”</a></li>
            <li><a href="#">“我们说什么都队”到底“对不队”——记医学部院新辩论赛</a></li>
            <li><a href="#">红旗飘抒爱国志，战鼓擂颂时代歌</a></li>
            <li><a href="#">查看更多..</a></li>
          </div>
          <div className="col">
            <img className="news-img" src="http://oss.whusu.com.cn//news_pic/1481181442000.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

NewsContentComponent.displayName = 'NewspageNewsContentComponent';

// Uncomment properties you need
// NewsContentComponent.propTypes = {};
// NewsContentComponent.defaultProps = {};

export default NewsContentComponent;
