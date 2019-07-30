import React from 'react';
import {Card,CardHeader,CardContent,withStyles} from '@material-ui/core';

const styles = (theme) => ({
    card: {
      maxWidth: 475,
      margin:'0 auto',
    //   padding: theme.spacing(1)
    },
    head: {
        textAlign: 'center',
        background:'#49688E',
        color:'white',
        padding:'25px 0px',
    },
})
const CustomizedCard = (props) =>{
    const{classes,children,title,cls} = props;
    return(
        <Card className={`${classes.card} ${cls}`}> 
            <CardHeader className={classes.head} title={title} />
            <CardContent>{children}</CardContent>       
        </Card>
    )
}
export default withStyles(styles)(CustomizedCard);
