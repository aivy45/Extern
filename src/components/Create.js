import React, {useRef} from "react";
import "./Create.css"


const Create = (props) =>{

    const nameRef = useRef('');

    const submitHandler = (event) => {

        event.preventDefault();

        const data ={
            name: nameRef.current.value
        };

        props.addData(data);
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