import {React, useState} from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import axios from 'axios';

export default function Search() {
    const [courses, setCourses] = useState([]);
    axios.get("/api/list")
        .then((val) => {
            setCourses(val);
            console.log(val);
        });

    return (
        <div>
            <Header/>
            <input type="text" placeholder='Search...'/>
            
            <h1>Hiya</h1>
        </div>
    )
}
