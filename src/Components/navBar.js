import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nav: {
      backgroundColor: '#fde85e'
  }
});
console.log("navbar")
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='התחברות מפקד'>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText align='right'>התחברות מפקד</ListItemText>
        </ListItem>
        <ListItem button key='צור קשר'>
            <ListItemIcon><DraftsIcon/></ListItemIcon>
            <ListItemText align='right'>צור קשר</ListItemText>
        </ListItem>
        <ListItem button key='הגדרות'>
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText align='right'>הגדרות</ListItemText>
        </ListItem>
        <ListItem button key='התנתק'>
            <ListItemIcon><PowerSettingsNewIcon/></ListItemIcon>
            <ListItemText align='right'>התנתק</ListItemText>
        </ListItem>
      </List>
      
    </div>
  );

  return (
    <div>
        <React.Fragment className={classes.nav} key='menu'>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
