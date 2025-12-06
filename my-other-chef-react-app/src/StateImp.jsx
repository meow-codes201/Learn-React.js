import styles from './StateImp.module.css';
import React , { useState } from 'react';
function StateImp(){
    let important = "yes";
    const [count,setCount] = useState(0);

    // const handleClick = ()=>{
    //     setState("definitely yes");
    // }
    function increase(){
        setCount(c => c+1);
    }
    function decrease(){
        setCount(c=>c-1);
    }
    const [goOut,setGoOut] = useState(false);
    function goOutToggle(){
        setGoOut(g=>!g);
    }

    return(
        <>
        <main className={styles.stateImpDiv}>
            <h1>How many times will Bob say "state" in this section?</h1>
        <div className={styles.center}>
            <button className={styles.minus} onClick={decrease} aria-label="minus">-</button>

            <h2 className={styles.count}>{count}</h2>
            <button onClick={increase} className={styles.plus} aria-label="plus">+</button>
        </div>
        
            <button className={styles.myGo} onClick={goOutToggle}>{goOut?
            "Yes":"No"}</button>

        
        </main>
        
        </>
    )

}
export default StateImp;
