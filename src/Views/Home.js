import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
}));

export default function SignInSide() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState({})

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
            alert("yeshhhhhhhhhh")
            break;
          case 401:
            setIsWrongPassword(true)
            break;
        }
      } else {
        alert("שגיאה לא צפויה, נסו שוב מאוחר יותר")
      }
    }, 1000)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid className={classes.background} item xs={12} sm={8} component={Paper} elevation={6} square>
        Home page
      </Grid>
    </Grid>
  );
}