import { useReducer } from "react";
import {
    UPDATE_DONATIONS,
    UPDATE_CURRENT_DONATION
} from "./actions";
  
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DONATIONS:
            return {
                ...state,
                donations: [...action.donations],
            };

        case UPDATE_CURRENT_DONATION:
            return {
                ...state,
                currentDonation: action.currentDonation,
            };

        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}