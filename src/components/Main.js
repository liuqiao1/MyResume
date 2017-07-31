require('normalize.css/normalize.css');
require('styles/App.less');
// require('../styles/font/font-awesome-4.7.0/less/font-awesome.less');
require("font-awesome-webpack");

import React from 'react';
import AvatarFigure from './AvatarFigure'
import SiderItem from './SiderItem'

let avatarImage = require('../images/avatar.png');
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  
  render() {
    const avatarProps = {
      avatarURL: '../images/avatar.png',
      title: '刘巧',
    }

    const basicInfoProps= {
      title: '个人信息'
    }

    return (
      <div className="index">
        <div className = 'sider'>
            <AvatarFigure {...avatarProps} />
            <SiderItem title = '个人信息'>
              <ul className = 'person-info'>
                <li><i className='fa fa-venus'></i><span>女</span></li>
                <li><i className='fa fa-birthday-cake'></i><span>1995-02-08</span></li>
                <li><i className='fa fa-map-marker'></i><span>湖南-长沙</span></li>
                <li><i className='fa fa-language'></i><span>CET-6</span></li>
                <li><i className='fa fa-github'></i><span>https://github.com/liuqiao1</span></li>
                {/*<li><i className='fa fa-github'><a href='https://github.com/liuqiao1'>github主页</a></i><span></span></li>*/}
              </ul>
            </SiderItem>
            <SiderItem title = '联系方式'>
              <ul className = 'person-info'>
                <li><i className='fa fa-phone'></i><span>188-7497-5415</span></li>
                <li><i className='fa fa-envelope'></i><span>liuqiao@csu.edu.cn</span></li>  
              </ul>
            </SiderItem>
            <SiderItem title = '技能图谱'>
              <ul className = 'person-info'>
                <li><i className='fa fa-phone'></i><span>188-7497-5415</span></li>
                <li><i className='fa fa-envelope'></i><span>liuqiao@csu.edu.cn</span></li>  
              </ul>
            </SiderItem>
        </div>
        <div className = 'content'></div>
        {/*<img src={avatarImage} alt="Yeoman Generator" />*/}
        {/*<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
