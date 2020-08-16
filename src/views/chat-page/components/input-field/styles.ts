import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    chatInput: {
        padding: theme.spacing(2),
        flex: 1,
    },
    formControl: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputField: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
    submit: {
        flex: 1,
        width: 60,
        height: 60,
        maxWidth: 60,
        borderRadius: '50%',
    },
}));
