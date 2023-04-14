import React from "react";
import './style.css';
import List from './List';

const App=()=>{
  return(
    <div>
      <List
      items={
        [
          {text:"Lakee Mangal"},
          {text:"12002794"},
          {text:"Lovely Professional University"},
          {text:"Luckymangal02@gmail.com"},
        ]
      }
      />
    </div>
  )
}

export default App;