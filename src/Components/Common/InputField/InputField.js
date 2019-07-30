import React from 'react';
import {TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#49688E',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#49688E',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#49688E',
        },
        '&:hover fieldset': {
          borderColor: '#49688E',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#49688E',
        },
      },
    },
  })(TextField);

  
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textcls: {
      margin: theme.spacing(1),
      width:'100%',
    },
  }));

const InputField = (props) => {
    const{type,name,placeholder, value} = props
    const classes = useStyles();

    const handleChange = (name,value) =>{
        props.onChange(name,value)
    }
   

    if(type === "multiline"){
      return <div className={classes.formGroup}>
        <textarea col="100" 
        style={{width: '92%', height: 100, padding: 10,  
          borderRadius: 6,resize: 'none', fontSize: 16}}
        row="6" placeholder={placeholder}
       
        onChange={(e) =>handleChange(name,e.target.value)}
        >
         {value ? value : ""}
          </textarea>
        </div>
    }
    return (

        <div className={classes.formGroup}>
            <CssTextField
            type={type} name={name}
            className={classes.textcls}
            label={placeholder}
            defaultValue={value? value:""}
            variant="outlined"
            id="custom-css-outlined-input"
            onChange={(e) =>handleChange(name,e.target.value)}/>
        </div>
    );
}

export default InputField;