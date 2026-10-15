import { useState } from "react";

const toggleMessage=()=>{

    const [isVisible, setVisible]= useState(false);

    const toggle=()=> setVisible(!isVisible);

    return(
        <div>
             <button onClick={toggle}>
        {isVisible ? "show message": "hide message"}</button>
    
    
        {
            isVisible && <p>this is toggleble button.</p>
        }
        </div>
        )
        

}
export default toggleMessage;