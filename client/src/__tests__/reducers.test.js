// import reducer function
import { reducer } from '../utils/reducers';

// import actions
import {
    UPDATE_DONATIONS,
    UPDATE_D_CAT,
    UPDATE_CURRENT_DONATION
} from '../utils/actions';

// sample of what our global state will look like
const initialState = {
    donations: [],
    categories: [{ price: 1.00 }],
    currentDonation: '1',
};

test('UPDATE_DONATIONS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_DONATIONS,
        donations: [{}, {}]
    });
  
    expect(newState.donations.length).toBe(2);
    expect(initialState.donations.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_D_CAT,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_DONATION', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_DONATION,
        currentDonation: '2'
    });
  
    expect(newState.currentDonation).toBe('2');
    expect(initialState.currentDonation).toBe('1');
  });