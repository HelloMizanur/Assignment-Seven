import React, { useState } from "react";
import { MessageSquare, Phone, Video, ChevronDown } from "lucide-react";

const TimelinePage = () => {
  // Updated data: Only Text, Video, and Call types
  const initialData = [
    { id: 1, type: "Text", person: "Sarah Chen", date: "March 28, 2026" },
    { id: 2, type: "Video", person: "Aisha Patel", date: "March 23, 2026" },
    { id: 3, type: "Call", person: "Marcus Johnson", date: "March 19, 2026" },
    { id: 4, type: "Text", person: "Elena Rodriguez", date: "March 15, 2026" },
    { id: 5, type: "Video", person: "Tom Baker", date: "March 12, 2026" },
    { id: 6, type: "Call", person: "Sarah Chen", date: "March 10, 2026" },
  ];

  const [filter, setFilter] = useState("All");

  // Logic to filter the array
  const filteredData =
    filter === "All"
      ? initialData
      : initialData.filter((item) => item.type === filter);

  // Icon mapping
  const renderIcon = (type) => {
    const iconProps = { size: 22, className: "text-orange-300" };
    switch (type) {
      case "Text":
        return <MessageSquare {...iconProps} />;
      case "Video":
        return <Video {...iconProps} />;
      case "Call":
        return <Phone {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-12 bg-white min-h-screen text-slate-800">
      <h1 className="text-4xl font-bold mb-10 tracking-tight">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="relative mb-12 w-72">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none bg-slate-50 border border-slate-100 py-3 px-4 pr-10 rounded-lg text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-200 cursor-pointer shadow-sm"
        >
          <option value="All">Filter timeline</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Call">Call</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Timeline Entries */}
      <div className="space-y-10">
        {filteredData.map((item) => (
          <div key={item.id} className="flex items-start gap-5">
            <div className="mt-1">{renderIcon(item.type)}</div>
            <div>
              <h3 className="text-xl font-medium">
                {item.type}
                <span className="text-blue-300 font-normal">
                  {" "}
                  with {item.person}
                </span>
              </h3>
              <p className="text-slate-400 text-base mt-0.5">{item.date}</p>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-slate-400 italic py-4">
            No activity found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
