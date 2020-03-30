import React from 'react';
import {useParams} from "react-router-dom";
import DetailInfoService from '../../service/DetailInfoService';

const Detail = props => {
    const { id }= useParams();
    const Info= DetailInfoService.getByID(Number.parseInt(id));
    return(
        <div>
            <ul>
                <li>{Info.lastName} {Info.firstName}</li>
                <li>{Info.birthday}</li>
            </ul>
        </div>
    );
}

export default Detail;