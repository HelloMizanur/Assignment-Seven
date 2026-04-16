import React from "react";
import useFriends from "../../hooks/useFriends";

const Banner = () => {
  const { friendsData, loading } = useFriends();

  // Loading obosthay placeholder stats
  if (loading) {
    return (
      <div className="text-center p-10 animate-pulse text-gray-400">
        Loading Stats...
      </div>
    );
  }

  // ১. Total Friends (Array length)
  const totalFriends = friendsData.length;

  // ২. On Track (Status check)
  const onTrackCount = friendsData.filter(
    (f) => f.status === "on-track",
  ).length;

  // ৩. Need Attention (Overdue ba almost due)
  const needAttentionCount = friendsData.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;

  return (
    <div className="py-10">
      <div className="text-center space-y-5">
        <h1 className="text-6xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-lg text-gray-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="bg-green-800 py-3 px-6 rounded-lg text-white font-medium cursor-pointer hover:bg-green-900 transition-all shadow-md active:scale-95">
          + Add a Friend
        </button>
      </div>

      <div className="text-center pt-10 flex justify-center gap-6 flex-wrap">
        {/* Total Friends */}
        <div className="w-56 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
          <h3 className="text-5xl font-extrabold text-gray-800">
            {totalFriends}
          </h3>
          <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">
            Total Friends
          </p>
        </div>

        {/* On Track */}
        <div className="w-56 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
          <h3 className="text-5xl font-extrabold text-emerald-500">
            {onTrackCount}
          </h3>
          <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">
            On Track
          </p>
        </div>

        {/* Need Attention */}
        <div className="w-56 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
          <h3 className="text-5xl font-extrabold text-red-500">
            {needAttentionCount}
          </h3>
          <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">
            Need Attention
          </p>
        </div>

        {/* Interactions - Hardcoded for now */}
        <div className="w-56 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
          <h3 className="text-5xl font-extrabold text-blue-500">24</h3>
          <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">
            Interactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
