import React from 'react';
import './Tree.scss';
import img1 from '../../img/trees/james-grieve.jpg';
import img2 from '../../img/trees/katy.jpg';
import img3 from '../../img/trees/scrumptious.jpg';

export default function Tree(props) {
  const { id, name, description } = props;

  let img;
  switch (id) {
    case 1:
      img = img1;
      break;
    case 2:
      img = img2;
      break;
    case 3:
      img = img3;
      break;
  }
  
  return (
    <div className="tree">
      <div className="tree-header">
        <div className="tree-picture"><img src={img} alt={name} className="picture" /></div>
        <div className="tree-name"><h5>{name}</h5></div>
      </div>
      <div className="tree-description">{description}</div>
    </div>
  );
}