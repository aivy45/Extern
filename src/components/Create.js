import React, {useRef} from "react";
import "./Create.css"


const Create = (props) =>{

    const nameRef = useRef('');

    const submitHandler = async(event) => {

        event.preventDefault();

        const data ={
            name: nameRef.current.value
        };

      const res = await fetch('/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data
            })
      })
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