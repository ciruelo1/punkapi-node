import React from 'react';
import "../../assets/css/SearchBeerById.css";
import { Input, Button } from "antd";

const SearchBeerById = ({ validateBeer }) => (
    <div className="searchById">
        <Input
            type="text"
            id="inputId"
            placeholder="id"
        />
        <Button 
            type="primary"
            id="buttonId"
            onClick={(e) => validateBeer(e)}
        >
            Search
        </Button>
    </div>
)

export default SearchBeerById;
