import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    active: {
        backgroundColor: theme.palette.grey[700],
    },
    closed: {
        paddingLeft: '0 !important',
    },
    orange: {
        backgroundColor: 'orange',
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));
