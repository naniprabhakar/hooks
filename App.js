import React, { useState } from 'react';
import CountApps from './CountApps';
import CustomCounter from './CustomCounter';
  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
      <div>
        <CountApps />
        <CustomCounter />
        </div>
    </div>  
  );  
}  
export default CountApp;