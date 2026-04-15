import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friendsData.json");
      const data = await res.json();
      setFriendsData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { friendsData, loading };
};

export default useFriends;
