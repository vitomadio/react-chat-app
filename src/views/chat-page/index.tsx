import * as React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import {
    CssBaseline,
    Drawer,
    AppBar,
    TextField,
    Toolbar,
    Typography,
    Divider,
    IconButton,
    Badge,
    Container,
    Grid,
    Paper,
    FormControl,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    Notifications as NotificationsIcon,
} from '@material-ui/icons';
import useStyles from './styles';

const ChatPage: React.SFC<any> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
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
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container} disableGutters>
                    <Grid item xs={12} className={classes.chatContainer}>
                        <Grid container>
                            <Paper className={classes.receivedMessagePaper}>
                                Hello man how you doing? Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Deleniti sint labore tenetur nihil ratione
                                repellendus similique in laudantium dolore at, molestias minima
                                nobis possimus fugit quidem reprehenderit aperiam officiis! Quae.
                            </Paper>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Paper className={classes.sentMessagePaper}>I'm find man thnaks!</Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.chatInput}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-basic"
                                label="Write your message"
                                variant="outlined"
                                multiline
                                rowsMax={1}
                                className={classes.inputField}
                            />
                        </FormControl>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default withRouter(ChatPage);
