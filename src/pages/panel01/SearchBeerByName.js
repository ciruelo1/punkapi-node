import React from 'react';
import "../../assets/css/SearchBeerByName.css";
import { Input, Button } from "antd";

const SearchBeerByName = ({ validateBeer }) => (
    <div className="searchByName">
        <Input
            type="text"
            id="inputName"
            placeholder="name"
        />
        <Button 
            type="primary"
            id="buttonName"
            onClick={(e) => validateBeer(e)}
        >
            Search
        </Button>
    </div>
);

export default SearchBeerByName;