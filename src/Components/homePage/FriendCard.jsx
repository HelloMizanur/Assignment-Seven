import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router";
const FriendCard = ({ friend }) => {
  const relativeDate = formatDistanceToNow(new Date(friend.next_due_date), {
    addSuffix: true,
  });
  return (
    <Link
      to={`/friendDetail/${friend.id}`}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-50">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-gray-900 font-bold text-lg">{friend.name}</h3>
      <p className="text-gray-400 text-xs mb-3">Due {relativeDate}</p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 uppercase py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`px-4 py-1 capitalize rounded-full text-xs font-semibold ${friend.status === "on-track" ? "bg-green-200" : friend.status === "overdue" ? "bg-red-200" : "bg-amber-200"}`}
      >
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;
