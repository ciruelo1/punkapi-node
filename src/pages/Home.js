import React, { useState, useEffect } from 'react';
import { hops } from "../api";
import "../assets/css/Home.css";

const Home = () => {
    const [beer, setBeer] = useState();

    useEffect(() => {
        getHops();
    }, []);

    const getHops = (hop) => {
        fetch(hops(hop))
        .then(res => res.json())
        .then(data => {
          setBeer(data);
        })
        .catch(err => console.log(err));
    }

    console.log(beer);

    return (
        <div className="home">
            {beer && 
                beer.map((hop, index) => {
                    const { image_url } = hop;
                    return (
                        <img key={index} src={image_url} alt="img"/>
                    )
                })
            }
        </div>
    )
}

export default Home;
