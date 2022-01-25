import React from 'react';
import {add,sub,mul,div} from './Calc';



const App = () => {
  return (
    <>
     <ul>                                    
      <li> sum of two number is {add(20, 20)}</li>
    <li> sub of two number is {sub(10, 5)}</li>
    <li> Multiply of two number is {mul(10, 5)}</li>
    <li> Divison of two number is {div(10, 5)}</li>
  </ul>;   
    </>
  );
}

export default App;
