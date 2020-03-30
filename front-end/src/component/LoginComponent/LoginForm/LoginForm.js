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
    Typography
} from '@material-ui/core';
import {FormGroup} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
const LoginForm = props => {
    const classes= useStyles();
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" xs={6}>
                <Typography component="div" variant="body1">
                    <Box bgcolor="success.main">
                        <form onSubmit={props.onSubmit}>
                            <h1>ABCDEF</h1>
                            <InputLabel htmlFor="userName">
                                User Name
                            </InputLabel >
                            <Input type="text"
                                id="userName"
                                placeholder="User Name"
                                name="userName"
                                value={props.value.userName}
                                onChange={event => props.onChange(event, 'userName')} />
                            <InputLabel htmlFor="passWord">
                                Pass Word
                            </InputLabel>
                            <Input type="password"
                                id="passWord"
                                placeholder="Pass Word"
                                name="passWord"
                                value={props.value.passWord}
                                onChange={event => props.onChange(event, 'passWord')} />
                            <br />
                            <Button
                                variant="contained"
                                type="submit"
                                className={classes.margin}
                                color="primary">
                                Login
                             </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                className={classes.margin}
                                color="primary">
                                Clear
                            </Button>
                        </form>
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default LoginForm;