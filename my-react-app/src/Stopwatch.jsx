import React,{useState,useEffect,useRef} from "react"
import styles from './Stopwatch.module.css';
// import { func } from "prop-types";
function Stopwatch(){
const [isRunning,setIsRunning] = useState(false);
const [elapsedTime,setElapsedTime] = useState(0);
const intervalIdRef = useRef(null);
const startTimeRef = useRef(0);

useEffect(()=>{
if(isRunning){
    intervalIdRef.current=setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current)

    },10)
    return()=>{
        clearInterval(intervalIdRef.current);
    }
}

},[isRunning])

function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    // console.log(startTimeRef.current);
    

}
function stop(){
    setElapsedTime(Date.now() - startTimeRef.current);
setIsRunning(false);

}
function reset(){
setElapsedTime(0);
setIsRunning(false);
startTimeRef.current = 0;

}
function formatTime(){
    let hours= Math.floor(elapsedTime/(1000*60*60));

    let min= Math.floor(elapsedTime/(1000*60)%60);
    let sec= Math.floor(elapsedTime/(1000)%60);
    let ms= Math.floor(elapsedTime%1000/(10));
    
    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    ms = String(ms).padStart(2,"0");
    
    
    return ` ${min}:${sec}:${ms}`


    // return ;
}

return(<>

    <div className={styles["stop-watch"]}>
    <div className={styles["display"]}>
        {formatTime()}
        <div className={styles["controls"]}>
            <button className={styles["start-btn"]} onClick={start}>start</button>

            <button className={styles["stop-btn" ]}onClick={stop}>stop</button>
            <button className={styles["reset-btn" ]}onClick={reset}>reset</button>


        </div>
    </div>
</div>




</>)

}
export default Stopwatch