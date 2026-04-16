import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useInteractions } from "../../context/InteractionContext"; // Context import

const COLORS = ["#0f172a", "#4338ca", "#0d9488"];

const StatsPage = () => {
  const { interactions } = useInteractions();

  // ১. Interaction array theke data calculate kora
  const chartData = [
    {
      name: "Text",
      value: interactions.filter((i) => i.type === "Text").length,
    },
    {
      name: "Call",
      value: interactions.filter((i) => i.type === "Call").length,
    },
    {
      name: "Video",
      value: interactions.filter((i) => i.type === "Video").length,
    },
  ].filter((item) => item.value > 0); // Sudhu jeta data ase sheta dekhabe

  // Default data jodi kono interaction na thake (jite chart khali na lage)
  const displayData =
    chartData.length > 0 ? chartData : [{ name: "No Data", value: 1 }];
  const displayColors = chartData.length > 0 ? COLORS : ["#e2e8f0"];

  return (
    <div className="flex items-center justify-center min-h-[400px] w-full bg-gray-50 p-4">
      <div className="p-8 w-full max-w-2xl bg-white text-center rounded-3xl shadow-sm border border-gray-100">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Friendship Analytics
          </h2>
          <p className="text-sm font-semibold text-gray-400 mt-1 uppercase tracking-widest">
            By Interaction Type
          </p>
        </div>

        <div className="h-64 w-full flex flex-col items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={displayData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={displayData.length > 1 ? 8 : 0}
                dataKey="value"
                stroke="none"
                startAngle={90}
                endAngle={450}
                animationDuration={1000}
              >
                {displayData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={displayColors[index % displayColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center text for total interactions */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-black text-gray-800">
              {interactions.length}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              Total
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8">
          {chartData.length > 0 ? (
            chartData.map((entry, index) => (
              <div
                key={entry.name}
                className="flex flex-col items-center gap-1"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm font-bold text-gray-700">
                    {entry.name}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  {Math.round((entry.value / interactions.length) * 100)}%
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">
              No activity recorded to analyze
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
