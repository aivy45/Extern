import React, {useState} from 'react';
import Company from './Company';


const Pop=()=>{
    
const [show,setShow]= useState(false);  
const clickHandler=(event)=>{
    setShow(true);
}


    return(
<div>

{show && <Company/>}


{!show && <ul className='head-down'>
<li>Home</li>
<li id='collateral' 
 onClick={clickHandler}
>Collateral</li>
<li>Analytics</li>
<li>Inventory</li>
<li>Accounts</li>
</ul> }
</div>

    )
}

export default Pop;