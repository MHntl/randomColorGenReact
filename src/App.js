import './App.css';
import React,{useState,useRef} from 'react'


function App() {
  const [hex,setHex]=useState("#dfdbe5")
  const [copyHexValue,SetCopyHexValue]=useState(false)
  const randomHex=()=>{
      const randomHex=`#`+Math.floor(Math.random()*16777721).toString(16)
      console.log(randomHex)
      setHex(randomHex)
}
const copyHex=()=>{
  navigator.clipboard.writeText(hex)
  SetCopyHexValue(true)
  setTimeout(() => {
    SetCopyHexValue(false)
  }, 1000);
  }
//---
  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
       <h1>{hex}</h1>
        <button onClick={randomHex}>Get Color</button>
        <button onClick={copyHex}>Copy Hex Value</button>
        {copyHexValue && <p>Copied!</p>}
        
    </div>
  );
}

export default App;
