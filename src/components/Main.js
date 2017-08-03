require('normalize.css/normalize.css');
require('styles/App.less');
// require('../styles/font/font-awesome-4.7.0/less/font-awesome.less');
require("font-awesome-webpack");

import React from 'react';
import AvatarFigure from './AvatarFigure'
import SiderItem from './SiderItem'
import Progress from './Progress'
import ContentItem from './ContentItem'
import NodeItem from './NodeItem'
import ArticleFigure from './ArticleFigure'

let avatarImage = require('../images/avatar.png');
let yeomanImage = require('../images/yeoman.png');

const pageData = require('../data/data.json');
// console.log(pageData);

class AppComponent extends React.Component {
  
  render() {
    const avatarProps = {
      avatarURL: require('../images/avatar.png'),
      title: pageData.avatarProps.title,
    }

    const siderItems = pageData.siderItems;
    const contentItems = pageData.contentItems;
    //const basicInfoProps =  pageData.basicInfoProps;
    //const contanctProps = pageData.contanctProps;
    //const jobIntentionProps = pageData.jobIntention;
    
    return (
      <div className="index">
        <div className = 'sider'>
            <AvatarFigure {...avatarProps} />

            {
              siderItems.map( (item,key) => 
                 <SiderItem key={key} title = {item.title}>
                   <ul className = {key == siderItems.length-1 ? 'hoby':'person-info'}>
                      {
                        siderItems[key].content.map((item,key) => <li key = {key}><i className={item.icon}></i><span>{item.lable}</span></li>)
                      }
                   </ul>
                 </SiderItem>
              )
            }
           
        </div>
        <div className = 'content'>
          {/*<ContentItem title = '求职意向' icon = 'fa fa-id-card'>
            <ul className = 'job-intention clearfix'>
              <li><i className = 'fa fa-font-awesome'></i><span>前端开发</span></li>
              <li><i className = 'fa fa-bandcamp'></i><span>实习</span></li>
              <li><i className = 'fa fa-building'></i><span>广州/深圳/杭州/上海</span></li>
              <li><i className = 'fa fa-calendar'></i><span>随时到岗</span></li>              
            </ul>
          </ContentItem>*/}
          {/*如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回。由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。*/}
          {
            contentItems.map((item,key) => 
              <ContentItem key={key} title = {item.title} icon = {item.icon}>
                
                  {item.content.map((item,key) => 
                   <NodeItem key={key} when = {item.when} where = {item.where} what = {item.what} >
                       { item.articles?
                         item.articles.map( (item,key) => 
                             <ArticleFigure  title= {item.title} icon = {item.icon} listItems = {item.listItems} />
                         ):''
                       }
                   </NodeItem>
                  )}                  
              </ContentItem>
            )
          }

         

          <ContentItem title = '技能' icon = 'fa fa-space-shuttle'>
             {/*<Progress lable='CSS' levelDesp='熟练' level='80%' />*/}
             <div className = 'left-sec'>
              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>HTML / CSS</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>能够编写语义化的 HTML、模块化的 CSS</li>
                    <li>熟悉HTML5，了解CSS3</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>ECMAScript</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>熟悉 ECMAScript3、ECMAScript5</li>
                    <li>了解ECMAScript6 , 并在项目中使用部分新特性</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>DOM / BOM</div>
                <div className = 'project-node-content'>
                  <ul>
                    
                    <li>熟悉原生 DOM 与 BOM 的使用及相关标准</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>JAVA</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>熟悉面向对象编程思想, 了解SSM框架</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>Ajax</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>熟悉面向对象编程思想, 了解SSM框架</li>
                  </ul>
                </div>
              </article>
             </div>

             <div className = 'right-sec'>
               <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>前端框架 / 工具</div>
                <div className = 'project-node-content'>
                  <ul>                 
                    <li>熟练使用 jQuery, 熟悉jQuery插件开发</li>
                    <li>熟悉MVVM的思想，熟悉ReactJs</li>
                    <li>能够灵活运用Bootstrap CSS、Ant Designt布局组件</li>
                    <li>使用过前端资源加载 / 打包工具Webpack</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>其他</div>
                <div className = 'project-node-content'>
                  <ul>                 
                    {/*<li>具备C和java语言基础，熟悉面向对象编程思想</li>*/}
                    <li>了解HTTP、TCP/IP 等协议</li>
                    <li>能够使用 Markdown 编写说明文档</li>
                    <li>熟悉常用的SQL语法</li>
                    <li>日常使用 Git 与 Visual Studio Code / Eclipse 进行开发，也使用过svn</li>
                    <li>熟练使用chrome浏览器自带的调试器</li>
                    <li>能够使用Axsure进行简单的设计</li>
                    <li>能够快速阅读英文文档</li>
                  </ul>
                </div>
              </article>
             </div>
             
              
          </ContentItem>
        </div>

        
        {/*<img src={avatarImage} alt="Yeoman Generator" />*/}
        {/*<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
