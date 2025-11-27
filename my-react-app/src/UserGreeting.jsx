import PropTypes from 'prop-types';
import './UserGreeting.css'
function UserGreeting(props){
const welcome = <h2 className="welcome">Welcome {props.username}</h2>;
const login = <h2 className="login">Please log in to contiue</h2>

const isLoggedIn = props.isLoggedIn;


return(isLoggedIn?welcome:login
);

// if(props.isLoggedIn){
//  return(
//     <h2>Welcome {props.username}</h2>
//  ); 
// }
// else{
//     return (<h2>Please log in</h2>);
// }


}
UserGreeting.prototype = {
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
export default UserGreeting