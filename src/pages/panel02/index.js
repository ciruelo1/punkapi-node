import React, { useState } from 'react';
import { searchBeerById } from "../../api";
import SearchBeerById from './SearchBeerById';
import DataBeerId from './DataBeerId';
import "../../assets/css/Panels.css";


const Panel02 = () => {
    const [beer, setBeer] = useState([]);

    const getBeerById = beer_id => {
        fetch(searchBeerById(beer_id))
        .then(res => res.json())
        .then(data => {
          setBeer(data);
        })
        .catch(err => console.log(err));
    }

    const validateBeer = (e,
        beer_id = document.querySelector("#inputId").value.toLowerCase().trim()
      ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = beer_id.match(/\w+/g);
        beer_id = words && words.join(" ");
        if (beer_id && beer_id !== beer) {
          setBeer([]);
          getBeerById(beer_id);
        }
    };

    return(
        <div className="panels">
            <SearchBeerById validateBeer={validateBeer} />
            <DataBeerId beer={beer}/>
        </div>
    );
}

export default Panel02;