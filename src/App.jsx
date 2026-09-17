import { useState } from "react";
const ToggleIsVisibility=()=> {

const [isVisible, setIsVisible] = useState(true);

const toggle =()=>{
setIsVisible(!isVisible)
}

  return(
<div>
  <p>The button is{isVisible ? "On" : "Off"}</p>
  <button onClick={toggle}>turn {isVisible ? "Off" : "On"} </button>
</div>  
  )
}

export default ToggleIsVisibility;


