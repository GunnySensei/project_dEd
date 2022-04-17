import React from "react";
import { Link } from "react-router-dom";

import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';

function ProductItem(item) {
  // Similar to the TOGGLE_CART logic, you'll need to define a state variable and dispatch() function.
  const [state] = useStoreContext();
  
  const {
    image,
    name,
    _id,
    price
  } = item;
  
  const { checkout } = state


  return (
    <div className="card px-1 py-1">
      <Link to={`/donations/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default ProductItem;
