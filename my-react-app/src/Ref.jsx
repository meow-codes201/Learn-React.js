import React, {useState,useEffect,useRef} from "react"
import Button from "./Button";
function Ref(){
const ref = useRef(0);
useEffect(()=>{
    console.log('rendered');
    
})
function handleClick(){
    console.log(ref.current);
    ref.current =ref.current + 1;
    
}
return(<>
<button onClick={handleClick}>click</button>
</>)

}
export default Ref