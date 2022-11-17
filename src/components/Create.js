import React, {useRef} from "react";

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
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
           <input type="text" id="name" ref={nameRef} />
           <button>Add New</button>
        </form>
    )
}

export default Create;