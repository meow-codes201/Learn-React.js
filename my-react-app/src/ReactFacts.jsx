import styles from './ReactFacts.module.css';
import picLink from  './assets/react.svg'
function ReactFacts(){
const link = "./assets./ChatGPT Image Nov 29, 2025, 07_29_36 PM.png";
return(
    <>
    
<img src={picLink} alt="react-logo" width={150} />

<h1>This is React</h1>
<ul>
<li>first released in 2013</li>
<li>was originally created by Jordan Walke</li>
<li>Has well over 200k stars on Github</li>
<li>is maintained by Meta</li>
<li>Powers thousands of enterprise apps, including mobile apss</li>

</ul>


</>

)


}
export default ReactFacts