function getUser(id, callback){
    setTimeout(()=>{
        console.log("User Fetched");
        const user = {
            id : 1,
            username: "John Doe"
        }
        callback(null,user)
    },100)
}
function getProfile(usreid,callback){
    setTimeout(()=>{
        console.log("Profile fetched");
        const profile ={
            username:"John Doe"
        }
        callback(null,profile)
    },1000)
}