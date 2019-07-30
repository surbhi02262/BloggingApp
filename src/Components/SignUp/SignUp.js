import React from 'react'
import {signUpConfig} from './SignUpConfig';
import InputField from '../Common/InputField/InputField';
import Button from '../Common/Button/Button';
import Card from '../Common/Card/Card';
import {connect} from 'react-redux';
import {addUser} from '../../Store/SignUp/actionCreator';
import {withRouter} from 'react-router-dom';
let signUpData={}
class SignUp extends React.Component{
    handleChange =(name,value) =>{
        signUpData[name]=value;
    }
    onSubmit = () => {
        console.log("signUpData ", signUpData)
       this.props.addUser(signUpData);
       this.props.history.push('/login')
    }
    render(){      
        return (
            <div className="sign-up-container">
                <Card title="SIGN UP">
                    <div className="form-container">
                        {signUpConfig.map(({name,type,placeholder}) => <InputField name={name} 
                                type={type} placeholder={placeholder}
                                onChange={this.handleChange}
                        />)}
                        <Button onClick={this.onSubmit}>Sign Up</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addUser
}
export default withRouter(connect(null,mapDispatchToProps)(SignUp));
