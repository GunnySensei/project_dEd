import React from "react";
import DonationList from "../components/DonationList";
import DonCategoryMenu from "../components/DonCatMenu";
import Checkout from "../components/Checkout";

const Donate = () => {
  return (
    <div className="container">
      <DonCategoryMenu />
      <DonationList />
      <Checkout />
    </div>
  );
};

export default Donate;
