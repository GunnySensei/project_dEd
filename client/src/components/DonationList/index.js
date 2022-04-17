import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import DonationItem from '../DonationItem';

import { QUERY_DONATIONS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_DONATIONS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import spinner from '../../assets/spinner.gif';

function DonationList() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_DONATIONS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DONATIONS,
                donations: data.donations
            });
    
            data.donations.forEach((donation) => {
                idbPromise('donations', 'put', donation);
            });
        } 
        else if (!loading) {
            idbPromise('donations', 'get').then((donations) => {
                dispatch({
                    type: UPDATE_DONATIONS,
                    donations: donations
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterDonations() {
        if (!currentCategory) {
            return state.donations;
        }

        return state.donations.filter(donation => donation.category._id === currentCategory);
    }

    return (
        <div className="my-2">
            <h2>Our donations:</h2>
            {state.donations.length ? (
                <div className="flex-row">
                    {filterDonations().map((donation) => (
                        <DonationItem
                            key={donation._id}
                            _id={donation._id}
                            image={donation.image}
                            name={donation.name}
                            price={donation.price}
                            quantity={donation.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't selected a donation yet, silly-billy!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default DonationList;