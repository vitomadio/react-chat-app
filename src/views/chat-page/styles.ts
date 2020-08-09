import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: '100vh',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 64px)',
    },
    chatContainer: {
        flexGrow: 1,
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
        overflowY: 'auto',
    },
    messageGrid: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.grey[800],
        },
        padding: theme.spacing(1),
    },
    receivedMessagePaper: {
        backgroundColor: '#9fa8da',
        maxWidth: '60%',
        padding: theme.spacing(1),
        float: 'left',
    },
    sentMessagePaper: {
        backgroundColor: '#7986cb',
        maxWidth: '60%',
        padding: theme.spacing(1),
        float: 'right',
    },
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
