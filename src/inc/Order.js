import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid';

export default function Order({cart}) {

  
    return (
        <div>
            <h3>Ostoskori</h3>
        {cart.map((product,index) => {
            console.log(product.name);
            //sum+=parseFloat(product.price);
        <div key={uuidv4}>
            <p>{product.name}</p>
            <p>{product.price} €</p>
            <p><a href="#" >Delete</a></p>
         </div>
      
    })}
    </div>
    );
}