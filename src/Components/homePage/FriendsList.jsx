import React from "react";
import FriendCard from "./FriendCard";
import { useLoaderData } from "react-router";

const FriendsList = () => {
  const friendsData = useLoaderData();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friendsData.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
