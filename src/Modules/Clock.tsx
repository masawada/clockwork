import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });
      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-5 left-5 bg-black px-6 py-4 font-light font-sans text-white">
      <p className="text-2xl">{date}</p>
      <p className="text-6xl">{time}</p>
    </div>
  );
}
