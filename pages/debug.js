"use client";
import { getAnalytics, clearAnalytics } from "@/utils/analytics";
import { useState, useEffect } from "react";

export default function Debug() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getAnalytics());
  }, []);

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold mb-6 text-center">Analytics Log</h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => {
            clearAnalytics();
            setLogs([]);
          }}
          className="btn-secondary"
        >
          Clear Logs
        </button>
      </div>

      {logs.length === 0 ? (
        <p className="text-center text-slate-500">No analytics data yet.</p>
      ) : (
        <pre className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-sm overflow-x-auto">
          {JSON.stringify(logs, null, 2)}
        </pre>
      )}
    </main>
  );
}
