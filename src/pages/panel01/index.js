import React, { useState } from 'react';
import { searchBeerByName } from "../../api";
import SearchBeerByName from './SearchBeerByName';
import DataBeerName from './DataBeerName';
import "../../assets/css/Panels.css";

const Panel01 = () => {
    const [beer, setBeer] = useState([]);

    const getBeerByName = beer_name => {
        fetch(searchBeerByName(beer_name))
        .then(res => res.json())
        .then(data => {
          setBeer(data);
        })
        .catch(err => console.log(err));
    }

    const validateBeer = (e,
        beer_name = document.querySelector("#inputName").value.toLowerCase().trim()
      ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = beer_name.match(/\w+/g);
        beer_name = words && words.join(" ");
        if (typeof beer_name === "string" && e.type === "click") {
          setBeer([]);
          getBeerByName(beer_name);
        }
      };


    return(
        <div className="panels">
            <SearchBeerByName validateBeer={validateBeer} />
            <DataBeerName beer={beer}/>
        </div>
    );
}

export default Panel01;