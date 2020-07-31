import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    ExitToApp as ExitIcon,
    Person as PersonIcon,
} from '@material-ui/icons';
import IUser from 'interfaces/user-interface';
import useStyles from './styles';
import firebase from 'firebase-config';

export interface ITopBarProps extends RouteComponentProps<any> {
    handleDrawerOpen: () => void;
    open: boolean;
}

const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
    const classes = useStyles();

    const handleLogOut = async () => {
        await firebase.logout();
        props.history.replace('/');
    };

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, props.open && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Chat
                </Typography>
                <IconButton color="inherit" onClick={() => props.history.push('/profile')}>
                    <PersonIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon fontSize="large" />
                    </Badge>
                </IconButton>
                <IconButton
                    color="inherit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogOut();
                    }}
                >
                    <ExitIcon fontSize="large" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(TopBar);
