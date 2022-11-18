import React, {useState} from 'react';
import './header.css';
import img from '../images/open-close.jpg'
import Pop from './pop';
const Header=()=>{

    const [Open , setOpen] = useState("Open");
  
    const click = ()=>{
        if(Open=="Open")
        {
            setOpen("Close");
        }
        else{
            setOpen("Open");
        }
    }

return(

<header className="header">
 <div className='container main-head '>

<div className='head-upper'>
 
 <h1>Company Name</h1>
</div>


{ Open=="Close" && <Pop/>}

 {/* <ul className='head-down'>
<li>Home</li>
<li>Collateral</li>
<li>Analytics</li>
<li>Inventory</li>
<li>Accounts</li>
</ul>  */}

<div className="open-close"
onClick={click}
>
   {Open}
</div>



</div>
</header>

);



};

export default Header;