import React, { useState } from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Phone,
  MessageSquare,
  Video,
  Clock,
  Archive,
  Trash2,
} from "lucide-react";

const FriendDetails = () => {
  const { id } = useParams();
  const { friendsData, loading } = useFriends();

  const [interactions, setInteractions] = useState([]);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  const expectedFriend = friendsData.find((friend) => friend.id === Number(id));

  if (!expectedFriend) {
    return <div className="p-10 text-center">Friend not found!</div>;
  }

  const handleAction = (type) => {
    const title = `${type} with ${expectedFriend.name}`;

    // Toast Notification
    toast.success(`✅ ${title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    const interactionData = {
      date: new Date().toLocaleString(),
      type: type,
      title: title,
    };

    setInteractions((prev) => [...prev, interactionData]);

    console.log("New Interaction Added:", interactionData);
    console.log(interactions);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 flex justify-center items-start">
      <ToastContainer />
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center bg-white">
          <div className="relative mb-6">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-50 shadow-lg"
            />
          </div>

          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {expectedFriend.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {expectedFriend.status === "overdue" && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                Overdue
              </span>
            )}
            {expectedFriend.tags &&
              expectedFriend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="mt-6 text-gray-500 italic text-sm leading-relaxed px-2">
            "{expectedFriend.bio}"
          </p>

          <p className="text-xs text-blue-500 font-medium mt-4">
            Preferred: {expectedFriend.email}
          </p>

          <div className="mt-10 w-full space-y-4 text-left border-t pt-6 border-gray-50">
            <button className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-blue-600 transition-all w-full">
              <Clock size={18} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-all w-full">
              <Archive size={18} /> Archive
            </button>
            <button className="flex items-center gap-3 text-sm font-medium text-red-400 hover:text-red-600 transition-all w-full">
              <Trash2 size={18} /> Delete Contact
            </button>
          </div>
        </div>

        <div className="flex-1 p-8 flex flex-col">
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-50 p-5 rounded-xl text-center border border-gray-100">
              <div className="text-3xl font-bold text-gray-800">
                {expectedFriend.days_since_contact}
              </div>
              <div className="text-[10px] text-blue-500 font-bold uppercase mt-2 border-t border-blue-100 pt-2">
                Days Since Contact
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl text-center border border-gray-100">
              <div className="text-3xl font-bold text-gray-800">
                {expectedFriend.goal}
              </div>
              <div className="text-[10px] text-blue-500 font-bold uppercase mt-2 border-t border-blue-100 pt-2">
                Goal (Days)
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl text-center border border-gray-100 flex flex-col justify-center">
              <div className="text-sm font-bold text-gray-800 truncate">
                {new Date(expectedFriend.next_due_date).toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric", year: "numeric" },
                )}
              </div>
              <div className="text-[10px] text-blue-500 font-bold uppercase mt-2 border-t border-blue-100 pt-2">
                Next Due
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Relationship Goal
              </h3>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">
                Edit
              </button>
            </div>
            <div className="h-px bg-gray-100 w-full mb-4"></div>
            <p className="text-base text-gray-700">
              Connect every{" "}
              <span className="font-bold text-black underline decoration-blue-200 underline-offset-4">
                {expectedFriend.goal} days
              </span>
            </p>
          </div>

          <div className="mt-auto">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 text-center md:text-left">
              Quick Check-In
            </h3>
            <div className="flex justify-around md:justify-start md:gap-16 items-center">
              <button
                onClick={() => handleAction("Call")}
                className="flex flex-col items-center group"
              >
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 mt-3 group-hover:text-blue-600 uppercase tracking-tighter">
                  Call
                </span>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="flex flex-col items-center group"
              >
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 mt-3 group-hover:text-blue-600 uppercase tracking-tighter">
                  Text
                </span>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="flex flex-col items-center group"
              >
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Video
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 mt-3 group-hover:text-blue-600 uppercase tracking-tighter">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
