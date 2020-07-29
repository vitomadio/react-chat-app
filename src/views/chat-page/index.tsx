import React, { useEffect, useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { CssBaseline, TextField, Container, Grid, Paper, FormControl } from '@material-ui/core';
import TopBar from './components/top-bar';
import Drawer from './components/drawer';
import useStyles from './styles';

const ChatPage: React.SFC<any> = ({ history }: any) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />
            <Drawer handleDrawerClose={handleDrawerClose} open={open} />
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
