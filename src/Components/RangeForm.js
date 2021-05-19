import 'date-fns'
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {makeStyles} from '@material-ui/core/styles';

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
    formControl: {
        margin: theme.spacing(1),
        // minWidth: 120,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateRange({rangeData, handleInputChanged, handleSubmit}) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        פרטי מטווח
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            onChange={handleInputChanged}
                            className={classes.formControl}
                            type="text"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="id"
                            label="איפה אנחנו?"
                            name="location"
                            autoFocus
                        />
                        <FormControl
                            variant="filled"
                            className={classes.formControl}
                            fullWidth required
                        >
                            <InputLabel id="range-type">איך ירינו?</InputLabel>
                            <Select
                                onChange={handleInputChanged}
                                labelId="range-type"
                                id="range-type-select"
                                name="rangeType"
                            >
                                <MenuItem value={"live"}>מטווח חי</MenuItem>
                                <MenuItem value={"lazer"}>מטווח לייזר</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            variant="filled"
                            className={classes.formControl}
                            fullWidth required
                        >
                            <InputLabel id="gun-type">עם מה ירינו?</InputLabel>
                            <Select
                                onChange={handleInputChanged}
                                labelId="gun-type"
                                id="gun-type-select"
                                name="gunType"
                            >
                                <MenuItem value={"long_m16"}>M16 ארוך</MenuItem>
                                <MenuItem value={"short_m16"}>M16 קצר</MenuItem>
                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                value={rangeData.date}
                                onChange={handleInputChanged}
                                className={classes.formControl}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="מה התאריך היום?"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <Button
                            onClick={handleSubmit}
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            סיימנו לטווח!
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}