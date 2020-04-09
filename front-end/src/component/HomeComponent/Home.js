import React from 'react';
import { useHistory } from "react-router-dom";
import ListContact from './ListContact/ListContact';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import DetailInfoService from '../../service/DetailInfoService';
import AddNewFriend from './AddNewFriend/AddNewFriend';
import {Link} from "react-router-dom";

const Home = props => {
    const history = useHistory();
    const [searchTerm,setSearchTerm] = React.useState("");
    const [contactList, setContactList] = React.useState(DetailInfoService.getAll());

    const handleClick = (event) => {
        history.push('/listContact');
    }
    const handleSearch = event => {
        let result= DetailInfoService.getByName(searchTerm);
        result=
        setContactList(
            result
        );
    }
    const handleChange = event => {
        setSearchTerm(
            event.target.value
        );
    }
    return (
        <div>
            <Header />
            <Link to="/addNewFriend" >Add new friend</Link>
            <SearchBar
                value={searchTerm}
                onSearch={handleSearch}
                onChange={handleChange} />
            <ListContact value={contactList} />    
        </div>
        
    );
}

export default Home;