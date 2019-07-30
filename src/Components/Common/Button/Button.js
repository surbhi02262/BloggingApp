import React from 'react';
import {Button} from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    margin: {
      marginTop: '20px',
      padding: '12px',
    },
    btn:{
        width:'100%',
        background: '#49688E',
        padding:theme.spacing(1),
    },
})

const CustomizedButtons =(props)=> {
    const { classes,children } = props;
        return (
            <Button variant="contained" color="primary" {...props}
                className={classNames(classes.margin, classes.btn)}>
                    {children}
            </Button>
        );
}

export default withStyles(styles)(CustomizedButtons);
