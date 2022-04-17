import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_D_CAT } from "../../utils/queries";

import { UPDATE_D_CAT, UPDATE_CURRENT_DONATION } from "../../utils/actions";

import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

function DonCategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_D_CAT);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_D_CAT,
        categories: categoryData.categories,
      });

      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_D_CAT,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_DONATION,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Donation Amount:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default DonCategoryMenu;
