function UserCard (proms){
    console.log(proms)

    return(
    <>
    <h3>UserName:{proms.name}</h3>
    <span>your email:{proms.email}</span>
    <h3>your name:{proms.username}</h3>
    <span>your email{proms.emails}</span>
        <h3>your name:{proms.nio}</h3>
    <span>your email{proms.no}</span>
    
    </>

    
    )

}
export default UserCard;