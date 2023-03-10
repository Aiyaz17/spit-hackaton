import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: "2px",
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Link to="/">
                <Typography variant="h6">Home</Typography>
            </Link>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar