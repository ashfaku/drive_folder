
import React, { useState, useEffect } from 'react';

const File = (props) => {
    var tab = props.tabbing;
    const filePath =  "./" + props.path;
  //  console.log(typeof tab);

    var button = <button onClick = {function(e) {
       console.log(filePath); 
      }
    } 
    style = {{display: 'block', marginLeft: tab+50}}>{props.name}</button>;
    return <div>
        {button}
    </div>
};


export default File;