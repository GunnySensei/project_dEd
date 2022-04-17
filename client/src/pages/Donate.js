import React from "react";
import DonationList from "../components/DonationList";
import DonCatMenu from "../components/DonCatMenu";
import Checkout from "../components/Checkout";

const Donate = () => {
  return (
    <div className="container">
      <DonCatMenu />
      <DonationList />
      <Checkout />
    </div>
  );
};

export default Donate;
