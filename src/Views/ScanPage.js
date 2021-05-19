import Scanner  from '../Components/Scanner'
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { Grid } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";  
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  console.log(width)
  console.log(height)
  return{
      width,
      height
  };
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fde85e"
    }
  }
});


const useStyles = makeStyles({
  root: {
    maxWidth: getWindowDimensions().width * 0.75,
  },
  media: {
    height: getWindowDimensions().height,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [result, setresult] = useState("")
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleScan = (data) =>{
    if (data != null){
      console.log(data.text)
      setresult(data.text)
      setOpen(true);
    }
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container justify = "center">
      <Card className={classes.root} variant="outlined" style={{backgroundColor: "#cccccc"}} >
        <Scanner handleScan={handleScan}/>
        <CardActionArea>
          <CardContent style={{backgroundColor: "#b2b2b2"}}>
            <Typography gutterBottom variant="h5" component="h2" align = "center">
              סרוק ברקוד לאישור מטווח
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Back
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"!סריקה הושלמה בהצלחה"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {result}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
          !מעולה
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </MuiThemeProvider>
  );
}
