import React, { Component } from 'react';
import  Card  from '../Card/Card';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import moment from 'moment';
import {setSuccessfalse,deletePost} from '../../../Store/Post/actionCreator';
import {Link} from 'react-router-dom';

class DisplayPost extends Component {
    componentDidMount(){
       this.props.setSuccessfalse();
    }
    deletePost = (data) =>{
        console.log('del',data);
        this.props.deletePost(data);
    }
    render() {
        const{postData,deletedPostStatus,isLoggedIn} = this.props;
        console.log('isLogedIn',this.props.isLogedIn)
        return (
            <div className="post-container">
            {deletedPostStatus  && <div>Deleted Post succcessfully</div>}
               {postData.length > 0 && postData.map(data => <div className="post-info"> <Card cls="post-card" title={data.title}>
                   <div className="post-information-container">
                        <div>Description:{data.description}</div>
                        <div>Message:{data.message}</div>
                        <div>Posted By:{data.createdBy}</div>
                        <div>Time :{moment(new Date(data.time), "YYYYMMDD").fromNow()}</div>
                        {isLoggedIn 
                        ?   <>
                            <div><Link to={`/edit/${data.id}`}>Edit Post</Link></div>
                            <div><Button className="btn-delete" onClick={() => this.deletePost(data)}>Delete Post</Button></div>
                            </> 
                        : ""
                        }
                   </div>
                
               </Card>
                  </div>)}
            </div>
        );
    }
}

const mapStateToProps= (state) =>({
    isLoggedIn: state.Login.status,
    postData: state.Post.Posts,
    deletedPostStatus : state.Post.isPostDeleted,
    
})

const mapDispatchToProps = {
    setSuccessfalse,
    deletePost
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayPost)