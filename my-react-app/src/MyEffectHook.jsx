import React,{useState,useEffect} from "react"
// import './MyEffectHook.css'
function MyEffectHook(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);


    useEffect(()=>{
        window.addEventListener("resize",handleReSize);
     
    //clean up 
    return()=>{
        window.removeEventListener("resize",handleReSize);
    }
    },[]);

    
    function handleReSize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }




return(
    <>
     <p>window width:{width}</p>
     <p>window height:{height}</p>
    </>
)


}
export default MyEffectHook