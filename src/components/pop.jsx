import React from 'react';
import Company from './Company';

const Pop=()=>{
   
    const [show, setShow] = React.useState(false);
    const clickHandler = (event) =>{

        setShow(true);

    }

    return(

        <div>
   {show && <Company />}  
   
      

{!show && 
 <ul className='head-down'>
<li>Home</li>
<li onClick={clickHandler} id="collateral">Collateral</li>
<li>Analytics</li>
<li>Inventory</li>
<li>Accounts</li>
</ul> }
</div>
    )
}

export default Pop;