import { useReducer } from "react";
import {
    UPDATE_DONATIONS,
    UPDATE_D_CAT,
    UPDATE_CURRENT_DONATION
} from "./actions";
  
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DONATIONS:
            return {
                ...state,
                donations: [...action.donations],
            };
        
        case UPDATE_D_CAT:
            return {
                ...state,
                categories: [...action.categories]
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