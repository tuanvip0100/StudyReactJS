import React from 'react';
import '../../../App.css';
import {Link} from "react-router-dom";
import DetailInfoService from '../../../service/DetailInfoService';

const ListContact = props => {
    const ContactList= props.value;
    return (
        <div>
            {
                ContactList.map((contact,index) => <ul key={index}>
                    <li>
                        <Link to={`/detail/${contact.id}`}>
                            {contact.lastName} {contact.firstName} - {contact.birthday}
                        </Link>
                    </li>
                </ul>)
            }
        </div>);
}

export default ListContact;