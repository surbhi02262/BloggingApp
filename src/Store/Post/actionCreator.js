export const addPostMessage = (postData) =>{
    return (dispatch,getState) =>{
       let user = localStorage.getItem('userDetail');
        let post = localStorage.getItem('Posts');
        console.log('post',post);
         if(post === null || post === "" ){
            postData.id= Math.floor((Math.random() * 100)+1); 
            postData.createdBy='ss';
            postData.time= new Date().toString();
            localStorage.setItem('Posts',JSON.stringify([postData]));
            dispatch({
                type:"ADD_POST",
                data:post,
            })
        }
       else if(user !== null && user !== "" && post !== null && post !== ""){
            user=  JSON.parse(user);
            post=  JSON.parse(post);
            postData.id= Math.floor((Math.random() * 100)+1); 
            postData.createdBy=user.firstName;
            postData.time= new Date().toString();
            post.push(postData)  ;
            localStorage.setItem('Posts',JSON.stringify(post));
            dispatch({
                type:"ADD_POST",
                data:post,
            })
      }
     else if(post !== null && post !== ""){
        post=  JSON.parse(post);
        postData.createdBy='FFF';
        postData.id= Math.floor((Math.random() * 100)+1); 
        postData.time= new Date().toString();
        post.push(postData)  ;
        localStorage.setItem('Posts',JSON.stringify(post));
        dispatch({
            type:"ADD_POST",
            data:post,
        })
        }    
       else{
        post=  JSON.parse(post);
        postData.id= Math.floor((Math.random() * 100)+1); 
        postData.createdBy="Anonymous User";
        postData.time= new Date().toString();
        post.push(postData)  ;
        localStorage.setItem('Posts',JSON.stringify(post));
        dispatch({
            type:"ADD_POST_ANONYMOUS",
            data:postData,
        })
       }      
    }
}
export const setSuccessfalse=() =>{
    return (dispatch) =>{
        dispatch({
            type:"SUCCESS_FALSE"
        })
    }
}
export const deletePost = (data) =>{
    let post = localStorage.getItem('Posts');
    if(post !== null || post !==""){
        post = JSON.parse(post);
        let newPost = post.filter(postData => postData.id !== data.id);
        localStorage.setItem('Posts',JSON.stringify(newPost));
        return (dispatch) =>{
            dispatch({
                type:"DELETE_POST",
                data:newPost
            })
         }
    }
    
}
export const editPostt = (data) =>{
    return (dispatch) =>{
        let post = localStorage.getItem('Posts');
        let editPostData;
        if(post !== null || post !== ""){
            post = JSON.parse(post);
            data.time= new Date().toString();
            editPostData= post.filter(pd => pd.id !== data.id);
            editPostData.push(data);
            localStorage.setItem('Posts',JSON.stringify(editPostData));

        }
        dispatch({
            type:"EDIT_POST",
            data:editPostData,
        })
    }
}