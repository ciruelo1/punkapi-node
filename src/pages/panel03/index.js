import React, { useState } from 'react';
import { searchRandomBeer } from "../../api";
import SearchRandomBeer from './SearchRandomBeer';
import DataRandomBeer from "./DataRandomBeer";
import "../../assets/css/Panels.css";

const Panel03 = () => {
    const [beer, setBeer] = useState([]);

    const getRandomBeer = () => {
        fetch(searchRandomBeer())
        .then(res => res.json())
        .then(data => {
          setBeer(data);
        })
        .catch(err => console.log(err));
    }

    const validateBeer = e => {
        if (e.type === "click") {
            setBeer([]);
            getRandomBeer();
        }
    };

    return (
        <div className="panels">
            <SearchRandomBeer validateBeer={validateBeer} beer={beer}/>
            <DataRandomBeer beer={beer}/>
        </div>
    )
}

export default Panel03;