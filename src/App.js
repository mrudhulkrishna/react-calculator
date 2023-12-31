import { useState } from 'react';
import './App.css';

function App(){
  
  const [result,setResult]=useState("");

  const clickHander = (event)=>{

    setResult(result.concat(event.target.value))
  }

  const clearDisplay = () =>{

    setResult("")
  }
  
  const calculate = () =>{

    setResult(eval(result).toString());
  }

  return (

    <div className="App">
      <h1>CALCULATOR</h1>
        <input type='text' placeholder='0' id='answer' value={result}/>
        <input type='button' value='Clear' className='button clear' onClick={clearDisplay}/>
        <input type='button' value='=' className='button two' onClick={calculate}/>
        <input type='button' value='7' className='button' onClick={clickHander}/>
        <input type='button' value='8' className='button' onClick={clickHander}/>
        <input type='button' value='9' className='button' onClick={clickHander}/>
        <input type='button' value='+' className='button' onClick={clickHander}/>
        <input type='button' value='4' className='button' onClick={clickHander}/>
        <input type='button' value='5' className='button' onClick={clickHander}/>
        <input type='button' value='6' className='button' onClick={clickHander}/>
        <input type='button' value='/' className='button' onClick={clickHander}/>
        <input type='button' value='1' className='button' onClick={clickHander}/>
        <input type='button' value='2' className='button' onClick={clickHander}/>
        <input type='button' value='3' className='button' onClick={clickHander}/>
        <input type='button' value='*' className='button' onClick={clickHander}/>
        <input type='button' value='.' className='button' onClick={clickHander}/>
        <input type='button' value='0' className='button' onClick={clickHander}/>
        <input type='button' value='%' className='button' onClick={clickHander}/>
        <input type='button' value='-' className='button' onClick={clickHander}/>

    </div>
  );
}

export default App;
