import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from "../utils/GlobalState";
import { QUERY_DONATIONS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

import {
    UPDATE_DONATIONS,
} from '../utils/actions';

import spinner from '../assets/spinner.gif';

function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentDonation, setCurrentDonation] = useState({})

    const { loading, data } = useQuery(QUERY_DONATIONS);

    const { donations } = state;

    useEffect(() => {
        if (donations.length) {
            setCurrentDonation(donations.find(donation => donation._id === id));
        } 
        else if (data) {
            dispatch({
                type: UPDATE_DONATIONS,
                donations: data.donations
            });
            
            data.donations.forEach((donation) => {
                idbPromise('donations', 'put', donation);
            });
        }
        else if (!loading) {
            idbPromise('donations', 'get').then((indexedDonations) => {
                dispatch({
                    type: UPDATE_DONATIONS,
                    donations: indexedDonations
                });
            });
        }
    }, [donations, data, loading, dispatch, id]);

    return (
        <>
        {currentDonation ? (
            <div className="container my-1">
            <Link to="/">← Back</Link>

            <h2>{currentDonation.name}</h2>

            <p>{currentDonation.description}</p>

            <p>
                <strong>Price:</strong>${currentDonation.price}{' '}
                {/* <button onClick={addToCart}>Add to Cart</button> */}
            </p>

            <img
                src={`/images/${currentDonation.image}`}
                alt={currentDonation.name}
            />
            </div>
        ) : null}
        {loading ? <img src={spinner} alt="loading" /> : null}
        </>
    );
}

export default Detail;