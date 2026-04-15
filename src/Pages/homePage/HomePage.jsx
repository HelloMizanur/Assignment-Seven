import React from "react";
import Banner from "./../../Components/homePage/Banner";
import FriendsList from "../../Components/homePage/FriendsList";

const HomePage = () => {
  return (
    <div className="py-10">
      <Banner />
      <FriendsList />
    </div>
  );
};

export default HomePage;
