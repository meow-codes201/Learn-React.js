import React,{useState,useEffect} from "react"
import './UseEffectHook.css'
function UseEffectHook(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    useEffect(()=>{
        document.title = `count: ${count} ${color}`
    },[count]);

function addCount(){
    setCount(c=>c+1);
}
function subCount(){
    setCount(c=>c-1);
}

function changeColor(){
    setColor(c=> c==="green"?"red":"green")
}

return(
    <>
    <p style={{color:color}}>count : {count}</p>
    <button onClick={addCount}>add</button>
    <button onClick={subCount}>sub</button>
    <br /> <button onClick={changeColor}>change color</button>
    </>
)
}
export default UseEffectHook
