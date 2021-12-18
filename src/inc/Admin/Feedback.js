import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Feedback() {
    const url="http://localhost//verkkokauppa/";
    const [palaute, setPalaute] = useState([]);

    useEffect(() => {
        if (palaute !== null) {
            const address = url + "feedback/getfeedback.php/";

            axios.get(address)
                .then((response) => {
                    const json = response.data;
                    setPalaute(json);

                }).catch(error => {
                    if (error.response === undefined) {
                        alert(error);
                    } else {
                        alert(error.response.data.error);
                    }
                })
        }
        console.log(palaute);
    }, [])
    return (
        <div className="feedback">
             
            {palaute.map(pal => (
                <div key={pal.id}>
                    <Link
                        to={{
                           state: {
                                id: pal.id,
                                fname: pal.fname,
                                respomsemail: pal.rmail,
                                feedback: pal.feedback

                            }
                            
                        }}
                    >
                        <p>{pal.feedback}</p>
                        <p>{pal.fname}</p>
                        <p>{pal.responsemail}</p>
                        <hr></hr>
                    </Link>

                </div>

            ))}
            
        </div>
    )
}

export default Feedback
