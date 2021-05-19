import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import authUser from '../ServerAPI/Users'

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
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [isWrongPassword, setIsWrongPassword] = useState(false)
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = async (e) => {
      const response = await authUser(input.id, input.password)
      switch (response.status) {
        case 200:
          alert("yeshhhhhhhhhh")
          break;
        case 401:
          setIsWrongPassword(true)
          break;
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              label="תעודת זהות"
              name="id"
              autoFocus
            />
            <TextField
              onChange={handleInputChange}
              error={isWrongPassword}
              helperText={isWrongPassword ? "סיסמה שגויה" : null}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמה"
              type="password"
              id="password"
            />
            <Button
              onClick={handleSubmit}
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              התחבר
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}