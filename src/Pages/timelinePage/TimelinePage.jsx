import React, { useState } from "react";
import { MessageSquare, Phone, Video, ChevronDown } from "lucide-react";
import { useInteractions } from "../../context/InteractionContext"; // Context import koro

const TimelinePage = () => {
  const { interactions } = useInteractions();

  const [filter, setFilter] = useState("All");

  const filteredData = [...interactions]
    .reverse()
    .filter((item) => (filter === "All" ? true : item.type === filter));

  const renderIcon = (type) => {
    const iconProps = { size: 22, className: "text-orange-400" };
    switch (type) {
      case "Text":
        return <MessageSquare {...iconProps} />;
      case "Video":
        return <Video {...iconProps} />;
      case "Call":
        return <Phone {...iconProps} />;
      default:
        return <MessageSquare {...iconProps} />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-12 bg-white min-h-screen text-slate-800">
      <h1 className="text-4xl font-bold mb-10 tracking-tight">Timeline</h1>

      <div className="relative mb-12 w-72">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none bg-slate-50 border border-slate-100 py-3 px-4 pr-10 rounded-lg text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-200 cursor-pointer shadow-sm transition-all"
        >
          <option value="All">All activity</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Call">Call</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <ChevronDown size={18} />
        </div>
      </div>

      <div className="relative space-y-10 before:absolute before:inset-0 before:ml-2.75 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-100 before:via-slate-50 before:to-transparent">
        {filteredData.map((item, index) => (
          <div
            key={item.id || index}
            className="relative flex items-start gap-6 group"
          >
            <div className="mt-1 bg-white relative z-10 p-1">
              {renderIcon(item.type)}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-medium flex items-center gap-2">
                <span className="text-gray-800">{item.type}</span>
                <span className="text-blue-400 font-normal">
                  {item.title.split(item.type)[1]}{" "}
                </span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">{item.date}</p>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-300 italic text-lg">
              No interactions recorded yet. <br />
              <span className="text-sm">
                Go to a friend's profile to start a conversation!
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
