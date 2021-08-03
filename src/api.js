// root endpoint
const base_url = "https://api.punkapi.com/v2/";
// endpoints
const end_hops = `beers?hops=al`;
const end_beer_name = "beers?beer_name=";
const end_beer_id = "beers?ids=";
const random_beer = "beers/random";
// search methods
export const hops = () => `${base_url}${end_hops}`;
export const searchBeerByName = (beer_name) => `${base_url}${end_beer_name}${beer_name}`;
export const searchBeerById = (beer_id) => `${base_url}${end_beer_id}${beer_id}`;
export const searchRandomBeer = () => `${base_url}${random_beer}`;