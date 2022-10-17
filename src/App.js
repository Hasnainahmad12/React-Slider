import React, { useEffect, useState } from 'react'
import { Slider } from './Projects/Config/Data'

const App = () => {
  const [Count , setCount] = useState(0);
  const value = Slider[Count];

  const ForWard = () =>{
    const next = Count + 1;
    const lent = Slider.length;
    if(next === lent){
      setCount(0);
    }    
    else{
      setCount(next);
    }
  }

  const BackWard = () =>{
    const back = Count - 1;
    const lent = Slider.length;

    if(back<0)
    {
      setCount(lent -1)
    }
    else{
      setCount(back);
    }
  }

  useEffect(() =>{
   const setting = setTimeout(() =>{ 
      ForWard()
    },1000);
    return () =>clearTimeout(setting)
  },[Count]);

  return (
    <div>
      <div>
        <p>{value.id}</p>
        <p>{value.title}</p>
        <img src={value.img} className='h-72 w-72' alt='' />
      </div>
      <div className='flex gap-10 m-10'>
        <button onClick={BackWard}>{"<"}</button>
        <button onClick={ForWard}>{">"}</button>
      </div>
    </div>
  )
}

export default App