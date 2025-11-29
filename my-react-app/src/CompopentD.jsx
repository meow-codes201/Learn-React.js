import './Component.css'
import React,{useContext} from 'react'
import { UserContext } from './CompopentA'

function CompopentD(){
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>CompopentD</h1>
            <h2>Hola {user}</h2>
        </div>
    )
}
export default CompopentD