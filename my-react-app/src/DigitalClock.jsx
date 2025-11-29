import React,{useState,useEffect} from "react"
import './DigitalClock.css'
// import 
function DigitalClock(){

    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
                setTime(new Date());
        },1000)
        return () =>{
            clearInterval(intervalId);
        }

    },[])

 
    function formatTime(){
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        const meridium = (hours>=12)?"PM":"AM"
        hours = hours%12 || 12;
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)}:${meridium}`
    }
    function padZero(number){
        return (number<10)?number.toString().padStart(2,"0"):number;
    }

    return(<>
    <div className="clock-container">
    <div className="clock">
    <span>{formatTime()}</span>
    
    
    </div>
    
    
    
    </div>


    </>);


}
export default DigitalClock