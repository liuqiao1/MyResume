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
    const skills = pageData.skills;

    
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

         

          <ContentItem title = {skills.title} icon = {skills.icon}>

             <div className = 'left-sec'>
               {
                 skills.leftArticles.map( (item,key) => 
                       <ArticleFigure  key = {key} title= {item.title} icon = {item.icon} listItems = {item.listItems} />
                 )
               }
             </div>

             <div className = 'right-sec'>
               {
                 skills.rightArticles.map( (item,key) => 
                       <ArticleFigure  key = {key} title= {item.title} icon = {item.icon} listItems = {item.listItems} />
                 )
               }
              
             </div>
             
              
          </ContentItem>
        </div>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
