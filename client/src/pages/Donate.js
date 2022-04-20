import React from "react";
import DonationList from "../components/DonationList";
import DonCategoryMenu from "../components/DonCatMenu";

const Donate = () => {
  return (
    <div className="container">
      <DonCategoryMenu />
      <DonationList />
    </div>
  );
};

export default Donate;
