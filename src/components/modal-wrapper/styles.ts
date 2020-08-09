import { makeStyles, Theme, createStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
            justifyContent: 'center',
            alignItems: 'center',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
        },
    }),
);
