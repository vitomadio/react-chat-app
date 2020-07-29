import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        justifyContent: 'center',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        width: 500,
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
        display: 'flex',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        flexGrow: 1,
    },
    btnsWrapper: {
        marginTop: 0,
    },
    avatarWrapper: {
        position: 'relative',
        cursor: 'pointer',
    },
    editIcon: {
        position: 'absolute',
        top: 0,
        right: -10,
        zIndex: 3,
        cursor: 'pointer',
    },
    fileInput: {
        display: 'none',
    },
    orange: {
        backgroundColor: 'orange',
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));
