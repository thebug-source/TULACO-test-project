import React from 'react';
import treesData from './json/trees.json';
import Tree from './components/Tree';

export default function TreesPage() {
  return (
    <div className="fill">
      <div className="treesList">
        {
          Object.keys(treesData).map(item =>
            <Tree key={item} id={treesData[item].id} name={treesData[item].name} description={treesData[item].description} />
          )
        }
      </div>
    </div>
  )
}
