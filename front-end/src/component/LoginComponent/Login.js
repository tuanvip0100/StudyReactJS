import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import RegisterAccount from "./RegisterForm/RegisterAccount";
import LoginForm from "./LoginForm/LoginForm";

const Login = props => {
    const history= useHistory();

    const [value, setValue] = React.useState({
        userName: '',
        passWord: '',
    });

    const handleSubmit = (event) => {
        if(value.userName ==="Hung" && value.passWord==="Hung"){
            history.push('/home');
        }
        else{
            alert("Wrong password");
            event.preventDefault();
            setValue({
                ...value,
                userName :'',
                passWord :'',
            })
        }
    };

    const handleChange = (event, prop) => {
        setValue({
            ...value,
            [prop]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <LoginForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={value} />
        </React.Fragment>
    );
}

export default Login;