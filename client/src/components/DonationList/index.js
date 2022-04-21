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

    const { currentPrice } = state;

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
        if (!currentPrice) {
            return state.donations;
        }

        return state.donations.filter(donation => donation.price._id === currentPrice);
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
                        />
                    ))}
                </div>
            ) : (
                <h3>Work in Progress!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default DonationList;