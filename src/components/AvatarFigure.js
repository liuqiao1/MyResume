require('../styles/AvatarFigure.less');

import React from 'react'

const AvatarFigure = ({...props}) => {
  const {avatarURL, title} = props;

  return (
    <figure className = 'avatar-figure'>
        <img src={avatarURL} alt={title}/>
        <figcaption>
            <h2>{title}</h2>
        </figcaption>
    </figure>
  );
}

export default AvatarFigure