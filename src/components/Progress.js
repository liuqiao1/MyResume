require('../styles/Progress.less');

import React from 'react'

const Progress = ({...props}) => {
  const {lable, levelDesp, level} = props;

  return (
    <section className = 'progress'>
        <label className = 'progress-lable'>{lable}</label>
        <div className = 'progress-container'>
            <div className = 'progress-level' style={{width:level}}></div>
        </div>
        <div className = 'level-desp'>{levelDesp}</div>
    </section>
  );
}

export default Progress