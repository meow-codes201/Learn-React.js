import React, {use, useState} from "react"
function Counter(){

    const [count,setCount] = useState(0);
    const increment = () =>{
        satisfies(count++);
    }
    const decrement = () =>{
        setCount(count--);
    }
    const reset = () =>{
        setCount(0);
    }
    return(       
        <>
            <div className="counter-container">
            <p className="count-display">{count}</p> 
            <button className="dec" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>   
            <button onClick={increment} className="inc">Increment</button>
            </div>        
        
        
        </>
    )
}
export default Counter
//     const [name,setName] = useState("Guest");
//     const [age,setAge] = useState(0);
//     const [isEmployed,setIsEmployed] = useState(false);
    
//     const updateName = () =>{
//         // name = "Spongebob"
//         setName("Spongebob");
//     }
//     const updateAge =() =>{
//         setAge(age+1);
//     }
//     const toggleEmployedStatus =() =>{
//         setIsEmployed(!isEmployed);0
//     }
//     return(
//         <>
//         <p>Name:{name}</p>
//         <button onClick={updateName}>set name</button>
//         <p>age:{age}</p>
//         <button onClick={updateAge}>increment age</button>
//         {/* <p>age:{age}</p>
//         <button onClick={updateAge}>increment age</button> */}
        
//         <p>is Employed:{isEmployed?"Yes":"No"}</p>
//         <button onClick={toggleEmployedStatus}>Toggle</button>
        

//         </>
//     )





// }
// export default Counter