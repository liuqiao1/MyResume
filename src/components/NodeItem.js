require('../styles/NodeItem.less');

import React from 'react'

const NodeItem = ({...props}) => {
  const {when, where, what, children} = props;

  return (
    <section className = 'NodeItem-item '>
        <header className = 'node-header clearfix'>
            <span>{when}</span>
            <span>{where}</span>
            <span>{what}</span>   
        </header>
        <div className = 'node-content'>
            {children}
        </div>
    </section>
  );
}

export default NodeItem