import React from 'react';
import DetailInfoService from '../../../service/DetailInfoService';

import {useHistory} from 'react-router-dom';

const AddNewFriend = props => {
    const history = new useHistory();
    const [Info, setInfo] = React.useState({
        firstName: '',
        lastName: '',
        birthday: '',
        phoneNumber: '',
    });
    const handleChange = (event, props) => {
        setInfo({
            ...Info,
            [props]: event.target.value
        }
        )
    };
    const handleSubmit = event =>{
        alert(Info.lastName+Info.firstName);
        debugger;
        DetailInfoService.addNewFriend(Info);
        history.push('/home');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        value={Info.firstName}
                        onChange={event => handleChange(event,'firstName')} />
                </label><br />
                <label>
                    Last Name
                    <input
                        type="text"
                        value={Info.lastName}
                        onChange={event => handleChange(event,'lastName')} />
                </label><br />
                <label>
                    Birthday
                    <input
                        type="text"
                        value={Info.birthday}
                        onChange={event => handleChange(event,'birthday')} />
                </label><br />
                <label>
                    phoneNumber
                    <input
                        type="text"
                        value={Info.phoneNumber}
                        onChange={event => handleChange(event,'phoneNumber')} />
                </label><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default AddNewFriend;