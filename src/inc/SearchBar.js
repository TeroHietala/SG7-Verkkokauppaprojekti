import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBar(addToCart, product) {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState([]);
    const [input, setInput] = useState([]);
    const [result, setResult] =useState([]);

    // Hakee kaikki tuotteet product taulusta
    useEffect(() => {
        if (allData !== null) {
            const address = "http://localhost/verkkokauppa/products/searchproducts.php/"

            axios.get(address)
                .then((response) => {
                    const json = response.data;
                    setAllData(json);
                    //console.log(allData)
                }).catch(error => {
                    if (error.response === undefined) {
                        alert(error);
                    } else {
                        alert(error.response.data.error);
                    }
                })
        }

    }, [])

    //Vertaa input arvoa product taulun arvoon
    const handleSearch = () => {

        let result = [];
        result = allData.filter((data) => {
            console.log(data)
            if (input === data.name) {
                setFilteredData(data.name);
                setFilteredPrice(data.price)
                // console.log(input)
                // console.log(data.name)
                // console.log(data.price)
                // console.log(filteredData)

            }
        });

    }

    return (
        <div>

            <input type="text" placeholder="Etsi tuote nimellä" onChange={event => setInput(event.target.value)}></input>
            <button onClick={(event) => handleSearch(event)}>Etsi</button>
            <div>
                <p>{filteredData}</p>
                <p>{filteredPrice}</p>
                <p>{result}</p>
            </div>
            <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
            <div>
                {/* <img src={url + 'images/' + product.image} alt="" /> */}
            </div>
        </div>
    );
}
