import React from "react"
import { useState } from "react";
import axios from 'axios';
import Hamburger from "../../Components/Hamburger/Hamburger";

export default function Home() {
    const [allReactions, setAllReactions] = useState([])
    axios.get('https://api.fda.gov/drug/ndc.json?search=generic_name:*advil*&limit=10')
        .then((response) => {
            console.log(response.data)
            var info = response.data["results"];
            for (var i = 0; i < info['length']; i++) {
                var results = info[i]["brand_name"]
                console.log(results)
            }
        })
        .catch((error) => {
            console.error('Error fetching drug data:', error);
        });

    return (
        <>
            <Hamburger />
            <p></p>
        </>
    );
}