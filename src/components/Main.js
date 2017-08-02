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
    //const basicInfoProps =  pageData.basicInfoProps;
    //const contanctProps = pageData.contanctProps;
    //const jobIntentionProps = pageData.jobIntention;

    return (
      <div className="index">
        <div className = 'sider'>
            <AvatarFigure {...avatarProps} />

            {
              siderItems.map( (item,key) => 
                 <SiderItem title = {item.title}>
                   <ul className = {key == siderItems.length-1 ? 'hoby':'person-info'}>
                      {
                        siderItems[key].content.map((item,key) => <li><i className={item.icon}></i><span>{item.lable}</span></li>)
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

          <ContentItem title = '教育背景' icon = 'fa fa-mortar-board'>
            <NodeItem when = '2016.09 - 至今' where = '中南大学' what = '软件工程（硕士）'/>
            <NodeItem when = '2012.09 - 2016.06' where = '长沙大学' what = '软件工程（本科）'/>       
          </ContentItem>

          <ContentItem title = '项目经验' icon = 'fa fa-product-hunt'>
            <NodeItem when = '2017.02 - 2017-06' where = '现代烟草农业基础设施管理系统' what = '湖南瑞和科技（实习）'>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目描述</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>该项目为湖南省烟草专卖局提供一个管理烟叶基础设施建设的平台。</li>
                    <li>项目主要功能模块：项目申请，计划管理，过程管理，设计管理，验收管理，数据统计分析等。</li>
                    <li>该项目基于开源框架jeesite开发，前端使HTML,CSS,JavaScript,jQuery,BootStrap,Ajax.Json;</li>
                    <li>后端使用JAVA，SSM框架，数据库使用mySQL,代码管理使用SVN。</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目职责</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>与客户洽谈需求，并根据需求设计并实现原型界面。</li>
                    <li>根据用户意见，优化页面，提升可交互性，使系统更加人性化。</li>
                    <li>配合后端实现各个功能模块。</li>
                    <li>设计并实现可重用组件（悬浮操作框，穿梭框等）以提升开发效率。</li>
                  </ul>
                  
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目收获</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>增强了沟通技能和页面设计能力；熟悉jeesite框架；熟练使用Bootstrap，jQuery；熟悉优秀开源插件，例如Echarts(显示表的阶段性产出信息)，Ztree(渲染类目)等.</li>
                    <li>增强了对交互性，人性化的理解；</li>
                    <li>熟练使用Ajax，JSON，SVN；合作能力提升；熟悉了后端框架SSM。</li>
                    <li>理解并运用JQuery插件开发，Prototype思想；运用闭包访问私有变量；用Json传递参数。</li>
                  </ul>
                </div>
              </article>

              
            </NodeItem>
            <NodeItem when = '2017.05 - 至今' where = '变电站智能机器人巡检系统' what = '湖南能川科技（实习）'>
                <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目描述</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>该项目为国家电网各变电站提供一个信息化集成平台，通过此平台实现对站内巡检机器人及巡检
                    信息的管理。</li>
                    <li>项目主要功能模块：机器人管理，任务管理，实时监控，巡检结果确认，巡检结果对比分析，系
                    统设置。</li>
                    <li>该项目采用前后端分离的开发方式，前端基于dva(基于redux、redux-saga和reactrouter@2.x
                    的轻量级前端框架)实现。</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目职责</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>负责机器人管理，任务管理，巡检结果分析等模块的静态页面设计与实现。</li>
                    <li>负责编写部分可重用的无状态组件。</li>
                    <li>维护项目的develop分支</li>
                  </ul>
                </div>
              </article>

              <article className = 'project-node'>
                <div className = 'project-node-title'><i className = 'fa fa-star'></i>项目收获</div>
                <div className = 'project-node-content'>
                  <ul>
                    <li>熟悉并使用MVVM模型的框架－react.js；使用Less预编译CSS ；使用ES6特性简化代码。</li>
                    <li>熟悉并使用前端资源加载/打包工具－webpack；使用 RequireJS加载模块，重视模块的复用以
                    及模块之间的解耦。</li>
                    <li>熟练使用github常用操作命令，理解工作流程，正确处理冲突。</li>
                  </ul>
                </div>
              </article>
            </NodeItem>
            
          </ContentItem>

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
