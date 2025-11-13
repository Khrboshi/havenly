"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function MoodTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    if (!reflections.length) return;

    // Map moods from recent 7 reflections
    const recent = reflections.slice(-7).map((r) => ({
      date: new Date(r.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      mood: r.mood || "Neutral",
    }));

    // Assign numeric scores to moods for the chart
    const moodScale = {
      Happy: 5,
      Calm: 4,
      Neutral: 3,
      Sad: 2,
      Stressed: 1,
    };

    const formatted = recent.map((r) => ({
      date: r.date,
      score: moodScale[r.mood] || 3,
      label: r.mood,
    }));

    setData(formatted);
  }, []);

  if (data.length === 0) {
    return (
      <p className="text-slate-500 text-center text-sm mt-4">
        No recent mood data yet. Reflect to start your trend!
      </p>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-6 mt-10">
      <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">
        Mood Trend (Last 7 Reflections)
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#94a3b8" />
          <Tooltip
            formatter={(value, name, props) => {
              const mood = data.find((d) => d.date === props.payload.date)?.label || "Neutral";
              return [`${mood}`, "Mood"];
            }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 5, fill: "#3b82f6" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
