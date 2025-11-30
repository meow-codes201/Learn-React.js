import React, {useState,useEffect,useRef} from "react"
import Button from "./Button";
function Ref(){
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);


useEffect(()=>{
    console.log('component rendered');
    // console.log(inputRef/);
    
})
function handleClick1(){
    inputRef1.current.focus();
    // ref.current =ref.current + 1;
    // console.log(ref.current); 
    inputRef1.current.style.backgroundColor = 'green'
}
function handleClick2(){
    inputRef2.current.focus();
    // ref.current =ref.current + 1;
    // console.log(ref.current); 
    inputRef2.current.style.backgroundColor = 'green'
}
function handleClick3(){
    inputRef3.current.focus();
    // ref.current =ref.current + 1;
    // console.log(ref.current); 
    inputRef3.current.style.backgroundColor = 'green'
}
return(<>
<button onClick={handleClick1}>click1</button>
<input type="text" ref={inputRef1} />

<button onClick={handleClick2}>click2</button>
<input type="text" ref={inputRef2} />

<button onClick={handleClick3}>click3</button>
<input type="text" ref={inputRef3} />


</>)

}
export default Ref