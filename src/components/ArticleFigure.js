require('../styles/ArticleFigure.less');

import React from 'react'

const ArticleFigure = ({...props}) => {
  const {title, icon, listItems} = props;

  return (
   <article className = 'project-node'>
        <div className = 'project-node-title'><i className = {icon}></i>{title}</div>
        <div className = 'project-node-content'>
            <ul>
                {listItems.map( (item,key) => <li key={key}>{item}</li> )}
            </ul>
        </div>
    </article>
  );
}

export default ArticleFigure