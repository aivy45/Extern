import React, {useRef} from "react";
import axios from 'axios';
import "./Create.css"


const Create = (props) =>{

    const nameRef = useRef('');

    const submitHandler = async(event) => {

        event.preventDefault();

        const data ={
            name: nameRef.current.value
        };

        console.log('data is', data);

      const res = await axios.post('http://localhost:5000/add', data)

      console.log('axios', res);
    }

    return(

        <div className="form">
        <form onSubmit={submitHandler} id="create-form">

            <label htmlFor="name">Name</label>
           <input type="text" id="name" ref={nameRef} placeholder="Enter company name" />
           <button>Add New</button>
        </form>
        </div>
    )
}

export default Create;