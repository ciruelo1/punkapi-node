import React from 'react';
import "../../assets/css/DataBeers.css";

const DataBeerId = ({ beer }) => (
    <div className="dataBeers">
        {beer && beer.map( (result) => {
            const { id, name, image_url, abv, first_brewed, tagline, ibu, ph, ebc } = result;
            return (
                <div className="box">
                    <div className="info">
                        <strong>Id:  </strong><span key={id}>{id}</span> <br />
                        <strong>Nombre:  </strong><span key={id}>{name}</span> <br />
                        <strong>Grados:  </strong><span key={id}>{abv}</span> <br />
                        <strong>Amargor:  </strong><span key={id}>{ibu}</span> <br />
                        <strong>Acidez:  </strong><span key={id}>{ph}</span> <br />
                        <strong>Intensidad de color(ebc):  </strong><span key={id}>{ebc}</span> <br />
                        <strong>Lanzamiento:  </strong><span key={id}>{first_brewed}</span> <br />
                        <strong>Eslogan:  </strong><span key={id}>{tagline}</span> <br />
                    </div>
                    <img src={image_url} alt="img"/>
                </div>
            )
        })}
    </div>
);

export default DataBeerId;