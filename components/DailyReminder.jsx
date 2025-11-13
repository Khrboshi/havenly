"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DailyReminder() {
  const [permission, setPermission] = useState("default");
  const [enabled, setEnabled] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    if (!("Notification" in window)) return;
    setPermission(Notification.permission);

    // Check if reminder already set
    const saved = localStorage.getItem("dailyReminderEnabled");
    if (saved === "true") setEnabled(true);
  }, []);

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("Your browser does not support notifications.");
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted") {
      scheduleReminder();
    }
  };

  const scheduleReminder = () => {
    if (permission !== "granted") {
      requestPermission();
      return;
    }

    // Schedule a daily reminder at 20:00 (8 PM local time)
    const now = new Date();
    const target = new Date();
    target.setHours(20, 0, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);

    const delay = target - now;
    setTimeout(() => {
      new Notification("Take a moment to reflect 🌙", {
        body: "Open Havenly to write your daily reflection.",
        icon: "/logo.png",
      });

      // Reschedule automatically for the next day
      scheduleReminder();
    }, delay);

    setEnabled(true);
    setScheduled(true);
    localStorage.setItem("dailyReminderEnabled", "true");
  };

  const disableReminder = () => {
    setEnabled(false);
    setScheduled(false);
    localStorage.removeItem("dailyReminderEnabled");
    alert("Daily reminders disabled.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 bg-white/90 backdrop-blur border border-slate-200 shadow-md rounded-xl p-4 sm:p-5 w-[280px] sm:w-[320px] z-50"
    >
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Daily Reflection Reminder
      </h3>

      {permission === "denied" ? (
        <p className="text-sm text-slate-500">
          Notifications are blocked. Please enable them in your browser settings.
        </p>
      ) : enabled ? (
        <>
          <p className="text-sm text-slate-600 mb-3">
            You’ll receive a gentle reminder every evening around 8 PM.
          </p>
          <button
            onClick={disableReminder}
            className="btn-secondary w-full"
          >
            Disable Reminder
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-slate-600 mb-3">
            Get a quiet nudge once a day to write your reflection.
          </p>
          <button
            onClick={requestPermission}
            className="btn-primary w-full"
          >
            Enable Daily Reminder
          </button>
        </>
      )}
    </motion.div>
  );
}
