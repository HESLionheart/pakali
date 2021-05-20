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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider'
import Tab from '@material-ui/core/Tab';
import {
    useHistory,
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  list: {
    width: '80%',
    height: '50%',
    marginRight: theme.spacing(3),
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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


export default function Home({userData}) {
  const classes = useStyles();
  let history = useHistory()
  return (
    <Grid container component="main" className={classes.root}>
      <Grid className={classes.background} xs={12} component={Paper} elevation={6} square>
          <h1>שלום, {userData.name}</h1>
          <Grid container 
                elevation={6}
                direction="row"
                alignItems='center'
                justify="center"> 
            <MyList userData={userData}/>
            <MySpeedDial history={history}/>
          </Grid>
      </Grid>  
    </Grid>
  );
}


const MyList = ({userData}) => {
    const classes = useStyles();

    const isOverDue = (date) => {
        const nowDate = new Date()
        const inputDate = new Date(date)
        return inputDate < nowDate 
    }

    const dateFormatter = (date) => {
        const newDate = new Date(date)
        console.log(newDate)
        return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`
    }

    const filterRanges = (ranges) => {
        return ranges.sort((r1, r2) => {
            const nr1 = new Date(r1.date)
            const nr2 = new Date(r2.date)
            return nr1 < nr2 ? 1 : -1 
        })
    }

    console.table(filterRanges(userData.ranges))

    return (
        <List className={classes.list}>
        {filterRanges(userData.ranges).map((range) => {
            return (
            <>
            <ListItem key={range.name}  button>
                <ListItemAvatar>
                    <Avatar>
                        <GiPistolGun/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText secondary={`תאריך: ${dateFormatter(range.date)}`} primary="מטווח" />
                <br/>
                <br/>
                <br/>
                <ListItemSecondaryAction>
                {   isOverDue(range.date) ?
                    <Chip
                        label="פג תוקף"
                        color="secondary"
                        variant="outlined"
                    /> : null
                }
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            </>
            );
        })}
        </List>
    )
}

const MySpeedDial = ({history}) => {
    

    const actions = [
        { icon: <GiPistolGun size={25}/>, name: 'מטווחים', click: () => history.push('/scan_page') },
        { icon: <ReceiptIcon />, name: 'פטורים' },
        { icon: <PeopleIcon />, name: 'נכס"ל' },
        { icon: <ColorizeIcon />, name: 'חיסונים' },
    ];


    const classes = useStyles();
    const [open, setOpen] = useState(false);

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
                    onClick={action.click}
                />
            ))}
        </SpeedDial>
    )
}
