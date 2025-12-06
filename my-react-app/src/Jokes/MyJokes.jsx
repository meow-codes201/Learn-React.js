import styles from "./MyJokes.module.css"
function MyJokes(props){

    return(
<>
<div className={styles.myJoke}>
{/* <p className={styles.serial}>{props.serial}. </p>   */}
{props.setup &&<p className={styles.setup}>setup: {props.setup}</p>}
<p className={styles.punchline}> {props.punchline}😂😂😂😂
</p>
</div>
</>
    );

}
export default MyJokes;