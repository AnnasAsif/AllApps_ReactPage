import './App.css';
import React, { useEffect, useState } from 'react';

import Header from './components/Header'
import Main from './components/Main';

import DisplayFrame from './components/Popoups/DisplayFrame';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pic, setPic]=useState("")
  const [trigger, setTrigger]=useState(false)
  const [flags, setFlags]=useState('0')
  const [data, setData]=useState({})
  
  const categoryOptions = [
    {label: 'Love Photo Frames', ip:'161.97.164.28:8080', bundleid:'com.tas.ultimate.frames.editor',store:'TAS'},
    {label: 'Nature Photo Editor', ip:'161.97.164.28:9001', bundleid:'com.mm.nature.photo.editor',store:'MM'},
    {label: 'Smarty Men Jacket', ip:'164.68.111.220:9001', bundleid:'com.las.smarty.jacket.editor',store:'LAS'},
    {label: 'Pic Collage Maker', ip:'164.68.111.220:9001', bundleid:'com.las.collage.maker',store:'LAS'},
    {label: 'Wedding Dress Photo', ip:'161.97.164.28:9005', bundleid:'com.las.wedding.couple.editor',store:'LAS'},
    // {label: 'Police Suits Editor', ip:'213.136.75.99:9004', bundleid:'com.las.wedding.couple.editor',store:'LAS'}//Pending Store and Bundle Id

  ];
  
  useEffect(()=>{
  },[])

  return (
    <div className="App">
      <Header />
      <br/>
      <br/>

      <Main
        categories= {categoryOptions}
        setTrigger={setTrigger} 
        setPic={setPic}
        setFlags= {setFlags}
        flags= {flags}
        data={data}
        setData={setData}
      />

      <DisplayFrame 
        trigger={trigger} 
        pic={pic} 
        setTrigger={setTrigger} 
        setPic={setPic}
      />
      
 
    </div>
  );
}

export default App;
