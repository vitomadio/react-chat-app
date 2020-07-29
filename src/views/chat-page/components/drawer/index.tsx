import * as React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
import useStyles from './styles';

export interface IProps {
    handleDrawerClose: () => void;
    open: boolean;
}

export default function App(props: IProps) {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <Divider />
        </Drawer>
    );
}
