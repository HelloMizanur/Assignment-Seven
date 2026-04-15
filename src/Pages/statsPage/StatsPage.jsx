import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Text", value: 400 },
  { name: "Call", value: 300 },
  { name: "Video", value: 300 },
];

const COLORS = ["#0f172a", "#4338ca", "#0d9488"];

const StatsPage = () => {
  return (
    <div className="flex items-center justify-center  w-full bg-gray-50">
      <div className="p-8 w-full px-20 bg-white text-center rounded-2xl shadow-lg border border-gray-100">
        <div className="mb-6 text-left ml-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Friendship Analytics
          </h2>
          <p className="text-sm font-semibold text-gray-400 mt-1">
            By Interaction Type
          </p>
        </div>

        <div className="h-64 w-full flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 mt-4">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-xs font-medium text-gray-400">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
