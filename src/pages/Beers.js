import beer from '../assets/beers.png'
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

const Beers = () => {


    const [beers, setBeers] = useState([]);
    const [filteredBeer, setFilteredBeer] = useState('')

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://ih-beers-api2.herokuapp.com/beers', { signal })
            .then(res => res.json())
            .then(data => setBeers(data))
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('Request cancelled!')
                }else {
                    //TODO: handle other errors.
                }
            })

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <div>
            <img src={beer} alt='beer' />
            <p>All Bears</p>
            <label>Search</label>
            <input type='text' onChange={(e) => setFilteredBeer(e.target.value)} />
            {beers.filter(beer => beer.name.toLowerCase().includes(filteredBeer.toLowerCase()))
                .map(beer => {
                    return (
                        <Link to={`/beers/${beer['_id']}`}>
                            <div style={{ display: 'flex' }}>
                                <img src={beer['image_url']} alt='beer' style={{ width: '100px' }} />
                                <div style={{ flexDirection: 'column' }}>
                                    <p>Name: {beer.name}</p>
                                    <p>{beer['tagline']}</p>
                                    <p>Created By: {beer['contributed_by']}</p>
                                </div>

                            </div>
                        </Link>
                    )
                })}
        </div>
    );
};

export default Beers;