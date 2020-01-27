import React, { useState, useEffect } from "react";
import api from '../utls/api';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=>{
    api().get('/api/colors')
    .then(res=>{
      console.log(res.data)
      setColorList(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
