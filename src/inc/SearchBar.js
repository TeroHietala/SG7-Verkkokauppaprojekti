import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBar({addToCart}) {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [input, setInput] = useState([]);

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
    function handleSearch() {

        let result = [];
        result = allData.filter((data) => {
            if (input === data.name) {
                setFilteredData(data);
            }
        });

    }
    
    return (
        <div>
            <h3>Etsi tuotteita</h3>
            <input type="text" placeholder="Etsi tuote nimellä" onChange={event => setInput(event.target.value)}></input>
            <button onClick={(event) => handleSearch(event)}>Etsi</button>
         <div>
            
                <div>
                    <p>{filteredData.name}</p>
                    <p>{filteredData.price}</p>
                     <button className="btn btn-primary" type="button" onClick={e => addToCart(filteredData)}>Lisää ostoskoriin</button>
                    
                    <div>
                        {/* <img src={url + 'images/' + product.image} alt="" /> */}
                    </div>
                </div>
                
           </div> 
         </div>       
    );
}