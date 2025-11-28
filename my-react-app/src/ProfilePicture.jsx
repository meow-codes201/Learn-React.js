function ProfilePicture(){
const imageUrl = './src/assets/Omnix.jpg';
const handleClick = (e) =>{
    console.log('you touched me 😮');
    e.target.style.display = 'none';
}

return(
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt=""/>


)



}
export default ProfilePicture