require('../styles/ContentItem.less');

import React from 'react'

const ContentItem = ({...props}) => {
  const {children, title, icon} = props;

  return (
    <section className = 'content-item'>
        <header className = 'item-header'>
            {/*<a class="wbdfont divIconFont" for-key="resume_project"></a>*/}
            <i className = {icon}></i>
            <span>{title}</span>
        </header>
        <div className = 'item-content clearfix'>
            {children}
        </div>
    </section>
  );
}

export default ContentItem