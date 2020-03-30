import React from 'react';

const RegisterAccount = props => {
    const [accountInfo, setAccountInfo] = React.useState({
        lastName: '',
        firstName: '',
        birthday: '',
        phoneNumber: '',
        userNameRegister: '',
        passWordRegister: '',
        male: '',
    });
    const handleChange = (event, props) => {
        setAccountInfo({
            ...accountInfo,
            [props]: event.target.value
        });
    };
    const handleSubmit = (event, props) => {
        alert("register success");
        console.log(accountInfo);
        event.preventDefault();
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={accountInfo.lastName}
                    onChange={event => handleChange(event, 'lastName')} /><br />
                <input
                    type="text"
                    placeholder="First Name"
                    value={accountInfo.firstName}
                    onChange={event => handleChange(event, 'firstName')} /><br />
                <input
                    type="text"
                    placeholder="Birth Day"
                    value={accountInfo.birthday}
                    onChange={event => handleChange(event, 'birthday')} /><br />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={accountInfo.phoneNumber}
                    onChange={event => handleChange(event, 'phoneNumber')} /><br />
                <input
                    type="text"
                    placeholder="User Name"
                    value={accountInfo.userNameRegister}
                    onChange={event => handleChange(event, 'userNameRegister')} /><br />
                <input
                    type="password"
                    placeholder="PassWord"
                    value={accountInfo.passWordRegister}
                    onChange={event => handleChange(event, 'passWordRegister')} /><br />
                <input
                    type="type"
                    placeholder="Male"
                    value={accountInfo.male}
                    onChange={event => handleChange(event, 'male')} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default RegisterAccount;