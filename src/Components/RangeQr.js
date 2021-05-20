import 'date-fns'
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import QRCode from 'qrcode.react'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      background: {
        backgroundColor: "#fde85e",
      },
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    element: {
        margin: theme.spacing(1),
    },
}));

export default function RangeQr({rangeData}) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        נשק פרקת? וברקוד סרקת?
                    </Typography>
                    <div className={classes.element}>
                        <QRCode value={JSON.stringify(rangeData)}/>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
