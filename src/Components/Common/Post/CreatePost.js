import React, { Component } from 'react';
import {CreatePostConfig} from './PostConfig';
import InputField from '../InputField/InputField';
import Card from '../Card/Card';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addPostMessage} from '../../../Store/Post/actionCreator';

let post={}
class CreatePost extends Component {
    handleChange =(name,value)=>{
        post[name]=value;
    }
    addPost = () =>{
        this.props.addPostMessage(post);
    }

    render() {
        if(this.props.success) {
            this.props.history.push('/');
        }
        return (
            <div className="login-container">
                <Card title="ADD POST">
                    <div className="form-container">
                        {CreatePostConfig.map(({name,type,placeholder}) => <InputField name={name} type={type} 
                                    placeholder={placeholder} onChange={this.handleChange}/>)}
                        <Button onClick={this.addPost}>Add Post</Button>
                    </div>
                </Card>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        success: state.Post.isPostSuccessful
    }
}
const mapDispatchToProps ={
    addPostMessage
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CreatePost));