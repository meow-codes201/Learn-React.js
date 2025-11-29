import CompopentC from "./CompopentC";
import './Component.css'
import React,{useContext} from 'react'
import { UserContext } from './CompopentA'

function CompopentB(){

    const user = useContext(UserContext);


    return(
        <div className="box">
            <h1>CompopentB</h1>
            <h2> hi {user}</h2>
            <CompopentC></CompopentC>
           

        </div>
    )
}
export default CompopentB