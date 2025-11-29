import CompopentD from "./CompopentD";
import './Component.css'
import React,{useContext} from 'react'
import { UserContext } from './CompopentA'

function CompopentC(){

    const user = useContext(UserContext);


    return(
        <div className="box">
            <h1>CompopentC</h1>
            <h2>Hello again {user}</h2>
            <CompopentD></CompopentD>

        </div>
    )
}
export default CompopentC