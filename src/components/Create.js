import React, {useRef} from "react";

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
       
        <form action="/" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
           <input type="text" id="name" ref={nameRef} />
           <button>Add New</button>
        </form>
    )
}

export default Create;