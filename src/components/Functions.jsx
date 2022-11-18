import React from "react";
import Graphics from "./Graphics";
import Ad from "./Ad";
import Interactions from "./Interactions";
import Promotions from "./Promotions";
const Functions = (props) => {

    return(
        <div>
        
        {props.show==='g' && <Graphics />}
        {props.show==='a' && <Ad />}
         {props.show==='i' && <Interactions />}   
         {props.show==='p' && <Promotions/>}
        
        </div>
    )

}

export default Functions;