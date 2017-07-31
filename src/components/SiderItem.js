require('../styles/SiderItem.less');

import React from 'react'

const SiderItem = ({...props}) => {
  const {children, title} = props;

  return (
    <section className = 'sider-item'>
        <header className = 'item-header'>
            <h2>{title}</h2>
            <div className = 'trangle'></div>
        </header>
        <div className = 'item-content'>
            {children}
        </div>
    </section>
  );
}

export default SiderItem