import { useReducer } from "react";
import {
    UPDATE_DONATIONS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";
  
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DONATIONS:
            return {
                ...state,
                donations: [...action.donations],
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };

        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}