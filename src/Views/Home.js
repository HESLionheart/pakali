import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ColorizeIcon from '@material-ui/icons/Colorize';
import {GiPistolGun} from 'react-icons/gi'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  background: {
    backgroundColor: "#fde85e"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: "180px",
    height: "180px",
    margin: theme.spacing(1),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
    { icon: <GiPistolGun size={25}/>, name: 'מטווחים' },
    { icon: <ReceiptIcon />, name: 'פטורים' },
    { icon: <PeopleIcon />, name: 'נכס"ל' },
    { icon: <ColorizeIcon />, name: 'חיסונים' },
  ];

export default function Home({userData}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid className={classes.background} item xs={12} sm={8} component={Paper} elevation={6} square>
        <h1>שלום, {userData.name}</h1>
        <MySpeedDial/>
      </Grid>  
    </Grid>
  );
}


const MySpeedDial = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleClose = () => {
    setOpen(false);
    };

    const handleOpen = () => {
    setOpen(true);
    };
    
    return (
        <SpeedDial
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction="up"
        >
            {actions.map((action) => (
            <SpeedDialAction
                tooltipOpen
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
            />
            ))}
        </SpeedDial>
    )
}
