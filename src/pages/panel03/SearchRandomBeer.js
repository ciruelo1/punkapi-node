import React from 'react';
import { Button } from "antd";
import "../../assets/css/SearchRandomBeer.css";

const SearchRandomBeer = ({ validateBeer }) => (
    <div className="searchRandomBeer">
        <Button 
            type="primary"
            id="buttonRandom"
            onClick={e => validateBeer(e)}
        >
            Search
        </Button>
    </div>
)

export default SearchRandomBeer;