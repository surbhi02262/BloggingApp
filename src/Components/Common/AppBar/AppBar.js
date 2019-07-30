import React from 'react'
import {Typography,Button,Toolbar,AppBar,withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {handleLogout} from '../../../Store/Login/actionCreator';
import {Link} from 'react-router-dom'
const styles = {  
    title: {
      flexGrow: 1,
    },
    appcolor:{
        background: '#49688E',
    }
  }

const ApplicationBar = (props) =>{
    const { classes,isLoggedIn ,handleLogout} = props;
    return (
            <AppBar position="static" className={classes.appcolor}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="button-link primary" to="/">Blogging App</Link>
                    </Typography>                  
                   {isLoggedIn 
                    ? <>
                        <Link className="button-link primary" to="/addPost">Add Post</Link>
                        <Button onClick={() => handleLogout()} color="inherit">Logout</Button>
                      </>
                    :<>
                        <Link className="button-link primary" to="/login">Login</Link>
                        <Link className="button-link primary" to="/signUp">Sign Up</Link>
                    </>
                    }
                </Toolbar>
            </AppBar>
    )
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.Login.status
})
const mapDispatchToProps = {
    handleLogout
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ApplicationBar));
