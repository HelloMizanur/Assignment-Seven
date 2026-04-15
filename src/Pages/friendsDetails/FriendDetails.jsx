import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";

const FriendDetails = () => {
  const { id } = useParams();
  const { friendsData, loading } = useFriends();

  // ১. লোডিং অবস্থায় আগে রিটার্ন করুন
  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // ২. লোডিং শেষ হওয়ার পর ডাটা খুঁজুন
  const expectedFriend = friendsData.find((friend) => friend.id === Number(id));

  // ৩. যদি আইডি না মেলে (ভুল আইডি দিলে) তবে এরর হ্যান্ডেল করুন
  if (!expectedFriend) {
    return <div className="p-10 text-center">Friend not found!</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{expectedFriend.name}</h1>
      <p>ID: {expectedFriend.id}</p>
      {/* এখানে অন্য ডিটেইলস দেখান */}
    </div>
  );
};

export default FriendDetails;
