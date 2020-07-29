import { makeStyles } from '@material-ui/core';

const drawerWidth = 300;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: '100vh',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
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
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
    },
    receivedMessagePaper: {
        backgroundColor: '#9fa8da',
        maxWidth: '60%',
        padding: theme.spacing(1),
        float: 'left',
        marginBottom: theme.spacing(2),
    },
    sentMessagePaper: {
        backgroundColor: '#7986cb',
        maxWidth: '60%',
        padding: theme.spacing(1),
        float: 'right',
        marginBottom: theme.spacing(2),
    },
    chatInput: {
        padding: theme.spacing(2),
        flex: 1,
    },
    inputField: {
        boxShadow: 'inset 0 0 5px rgba(0,0,0,.6)',
    },
}));
