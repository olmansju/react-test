import { useState } from 'react';
import { MyFooter } from './footer.js';
import { MyHeader } from './header.js';
import { MyPrimes } from './math.js'; 
import { MyForm } from './form.js'; 



function MyBody() { 
    let [ fName, setFName ]= useState('User');
    let [ harvestCount, setHarvestCount ]= useState(10);
    function increase() {
        setHarvestCount(harvestCount + 1);
      }

    return  <>
    <MyHeader />
    <MyForm fName={fName} setFName={setFName}/>
    <p>
   {(harvestCount) > 10 ? `Hey ${fName}, good job!` : `Keep pressing the button!`}
   </p>
    <button onClick={increase}>Increase the value</button>
    <br />
    <MyPrimes />
    <br />
    <MyFooter num={harvestCount} />
  </>;
}

export default MyBody;