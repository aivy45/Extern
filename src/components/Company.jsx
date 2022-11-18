import React, {useState} from 'react';
import './Company.css'
import Functions from './Functions';
import Create from './Create';

const Company = () => {

  const [temp, setTemp] = useState('g');

function clickHandler(event){

  setTemp(event.target.id);
  
}   

function createHandler() {
  
}

    return (

      <React.Fragment>



   <Create />
      <div className="header">
        <Create/>

        <div className='company-header-main'>
        <div className='company-header'>
        <button className='new-b' onClick={createHandler}>Add new</button>
        <button className="profile">Profile</button>
        </div>
      </div>

      </div>


      <div className='col-functions-main'>
      <div className='col-functions'>
        <div onClick={clickHandler} id="g">Graphics</div>
        <div onClick={clickHandler} id="a">Ad Copies</div>
        <div onClick={clickHandler} id="i">Interactions</div>
        <div onClick={clickHandler} id="p">Promotions</div>
        </div>
        </div>
        
        <Functions show={temp} />

        </React.Fragment>
    );

}

export default Company;