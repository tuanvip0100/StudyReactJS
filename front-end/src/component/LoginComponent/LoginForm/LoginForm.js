import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Box,
    CssBaseline,
    Container,
    Grid,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Typography
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {FormGroup} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(0),
    },
    // extendedIcon: {
    //     marginRight: theme.spacing(1),
    // },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
    submit: {
        margin: theme.spacing(0),
      },  
    paperContainer: {
        backgroundColor: '#333',
    },
}));

const LoginForm = props => {
    const classes= useStyles();
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" xs={2}>
                <Typography component="div" variant="body1">
                    <Box bgcolor="white">
                        <form onSubmit={props.onSubmit}>
                            <div className={classes.paper}>
                                <h1>Login Form</h1>
                                <form className={classes.form} noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="Username"
                                        name="userName"
                                        autoComplete="username"
                                        value={props.value.userName}
                                        onChange={event => props.onChange(event, 'userName')}
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={props.value.passWord}
                                        onChange={event => props.onChange(event, 'passWord')}
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        className={classes.submit}>
                                        Sign In
                                    </Button>
                                    {/* <Button
                                        variant="contained"
                                        type="submit"
                                        className={classes.margin}
                                        color="primary">
                                        Clear
                                    </Button> */}
                                    <Grid container>
                                        <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                        </Grid>
                                        <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>                            
                        </form>
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default LoginForm;