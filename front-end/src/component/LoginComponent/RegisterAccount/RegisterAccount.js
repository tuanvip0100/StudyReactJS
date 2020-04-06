import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    FormControl,
    Input,
    Button,
    Box,
    Typography,
    Paper,
    InputLabel,
    TextField,
    MenuItem,
    Grid,
} from '@material-ui/core';
import TimerPicker from './TimerPicker';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow:1,
    },
    paper: {
         margin: theme.spacing(1),
         padding: theme.spacing(2),
    },
    typograpy:{
        margin: theme.spacing(1),
        textAlign: "center",
    },
    textField:{
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
        // marginLeft: theme.spacing(5),
        // marginRgight: theme.spacing(5),
        // width: '27ch',
    },
    timerPicker:{
        
    },
    textFieldfullWidth:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(5),
        marginRgight: theme.spacing(5),
        width: '59ch',
    }
}));
const sex =[
    {
        value : 'male',
    },
    {
        value : 'female',
    }
];

const RegisterAccount = props => {
    const classes= useStyles();
    const [accountInfo, setAccountInfo] = React.useState({
        lastName: '',
        firstName: '',
        birthday: new Date('1990-01-01'),
        email: '',
        phoneNumber: '',
        userNameRegister: '',
        passWordRegister: '',
        passWordConfirm: '',
        male: '',
    });
    const handleChange = (event, prop) => {
        setAccountInfo({
            ...accountInfo,
            [prop]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        alert("register success");
        console.log(accountInfo);
        event.preventDefault();
    };
    const setBirthDay =(date,prop) =>{
        setAccountInfo({
            ...accountInfo,
            [prop]: date,
        });
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography
                    variant="h5"
                    color="primary"
                    className={classes.typograpy}>
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                required
                                id="standard-required"
                                label="Last Name"
                                value={accountInfo.lastName}
                                onChange={event => handleChange(event, 'lastName')} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                required
                                id="standard-required"
                                label="First Name"
                                value={accountInfo.firstName}
                                onChange={event => handleChange(event, 'firstName')} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                required
                                id="standard-required"
                                label="Email"
                                value={accountInfo.email}
                                onChange={event => handleChange(event, 'email')} />
                        </Grid>
                        
                        <TextField
                            className={classes.textField}
                            required
                            id="standard-required"
                            label="Phone Number"
                            value={accountInfo.phoneNumber}
                            onChange={event => handleChange(event, 'phoneNumber')} />
                        <TextField
                            className={classes.textFieldfullWidth}

                            required
                            id="standard-required"
                            label="User Name"
                            value={accountInfo.userNameRegister}
                            onChange={event => handleChange(event, 'userNameRegister')} />
                        <TextField
                            className={classes.textFieldfullWidth}

                            id="standard-password-input"
                            label="Password"
                            type="password"
                            value={accountInfo.passWordRegister}
                            onChange={event => handleChange(event, 'passWordRegister')} />
                        <TextField
                            className={classes.textFieldfullWidth}

                            id="standard-password-input"
                            label="Confirm Enter Password"
                            type="Confirm Enter password"
                            value={accountInfo.passWordConfirm}
                            onChange={event => handleChange(event, 'passWordConfirm')} />
                        <TimerPicker
                            className={classes.timerPicker}
                            value={accountInfo.birthday}
                            onChange={setBirthDay} />
                        <TextField
                            className={classes.textField}
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={accountInfo.male}
                            onChange={event => handleChange(event, 'male')}
                        >
                            {sex.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField><br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit} >
                            Register
                         </Button>
                    </Grid>
                </form>
            </div>
        </Container>
        
    );
}

export default RegisterAccount;