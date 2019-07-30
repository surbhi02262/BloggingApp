export const validateUser = (data) =>{
    return (dispatch) =>{
        let user = localStorage.getItem('user');
        let filteredUser = [];
        if(user !== null && user !== ""){
            user = JSON.parse(user);
            filteredUser = user.filter((userData,index) => userData.email === data.email && userData.password === data.password);
        }
        if(filteredUser.length > 0 ){
            data.firstName=data.email;
            localStorage.setItem('userDetail', JSON.stringify(data));
            debugger;
            dispatch({
               
                type:"VALIDATE_USER",
                data
            })
        }else{
            dispatch({
                type:"INVALID_USER",
                data
            }) 
        }              
    }
}
export const getLogggedInUser = () =>{
    return (dispatch) =>{
        let user = localStorage.getItem('userDetail');
        if(user !== null && user !== ""){
            user = JSON.parse(user);
            dispatch({
                type:"VALIDATE_USER",
                data: user
            })
        }  
        let posts = localStorage.getItem('Posts');
        if(posts !== null && posts !== ""){
            posts = JSON.parse(posts);
            dispatch({
                type:"ADD_POST",
                data: posts
            })
        }    
    }
}
export const handleLogout = () =>{
    return (dispatch) =>{
        localStorage.setItem('userDetail',"")
            dispatch({
                type:"LOGOUT",
                data: ""
            })
        }    
    }