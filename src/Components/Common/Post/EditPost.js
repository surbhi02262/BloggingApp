import React, { Component } from 'react';
import InputField from '../InputField/InputField';
import Card from '../Card/Card';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getConfig} from '../../../Services/Configs'
import {CreatePostConfig} from './PostConfig'
import {editPostt} from '../../../Store/Post/actionCreator';

let editPostData ={}
class EditPost extends Component {
    handleChange =(name,value)=>{
        editPostData[name]=value;
    }
    handleEditChange = (dataToEdit) =>{
        this.props.editPostt(editPostData)

    }
    getPostDataById = () => {
        return this.props.postData.filter(post => post.id === parseInt(this.props.match.params.PostId))  
    }
    componentDidMount(){
        editPostData=this.getPostDataById()[0];
    }
    render() {      
        const{postData}= this.props;
        let filteredData = postData.length >  0 ? this.getPostDataById() :[];
        console.log('filteredData',filteredData);
        if(filteredData.length === 0) {
            this.props.history.push('/')
        }
        let config = getConfig(filteredData[0], CreatePostConfig)
        console.log("Config : ",config)
        if(this.props.isEditSuccess){
            this.props.history.push('/');
        }
        return (
            <div className="login-container">
            <Card title="Edit POST">
                <div className="form-container">
                    {config.map(({name,type,placeholder,value}) => <InputField value={value} name={name} type={type} 
                                    placeholder={placeholder} onChange={this.handleChange}/>)}
                    <Button onClick={() => this.handleEditChange(filteredData)}>Edit Post</Button>
                </div>
            </Card>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
       postData:  state.Post.Posts,
       isEditSuccess: state.Post.isPostSuccessful
})
const mapDispatchToProps ={
    editPostt
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditPost));