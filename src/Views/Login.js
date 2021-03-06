import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import authUser from '../ServerAPI/Users'


import logo from "../logo.png"
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  background: {
    backgroundColor: "#fde85e",
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({updateUserData}) {
  const classes = useStyles();

  const [isWrongPassword, setIsWrongPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState({})

  let history = useHistory()

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = async (e) => {
    setIsLoading(true)  
    const response = await authUser(input.id, input.password)
    setTimeout(() => {
      setIsLoading(false)
      if(response) {
        switch (response.status) {
          case 200:
            let userData = response.data
            userData.id = input.id
            updateUserData(userData)
            
            if (userData.creds === "admin") {
              history.push('/create_range')
            }
            else {
              history.push('/home')
            }

            break;
          case 401:
            setIsWrongPassword(true)
            break;
        }
      } else {
        alert("?????????? ???? ??????????, ?????? ?????? ?????????? ????????")
      }
    }, 1000)
  }

  return (
    <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid className={classes.background} item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={logo} alt="Logo"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            ??????????????
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={handleInputChange}
              type="number"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="?????????? ????????"
              name="id"
              autoFocus
            />
            <TextField
              onChange={handleInputChange}
              error={isWrongPassword}
              helperText={isWrongPassword ? "?????????? ??????????" : null}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="??????????"
              type="password"
              id="password"
            />
            {
              isLoading ? 
              <Grid container
                direction="row"
                alignItems='center'
                justify="center" >
                  <CircularProgress className={classes.submit}/>
              </Grid> : 
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
              >
                ??????????
              </Button>
            }
          </form>
        </div>
      </Grid>
    </Grid>
  );
}