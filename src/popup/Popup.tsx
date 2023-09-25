import React, { useEffect, useState } from "react";

declare const chrome: any;

const Popup = () => {
  const [selectedTime, setSelectedTime] = useState("30");

  useEffect(() => {
    chrome.storage.sync.get("notificationInterval", (data: any) => {
      if (data.notificationInterval) {
        setSelectedTime(data.notificationInterval);
      }
    });
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const minutes = parseInt(selectedTime);
    // chrome.alarms.create({ delayInMinutes: 1 });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ notificationInterval: selectedTime });
  };

  return (
    <div>
      <h1>Drink Water Reminder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="time">Select reminder interval:</label>
        <select id="time" name="time" value={selectedTime} onChange={handleTimeChange}>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
        <button type="submit">Set Reminder</button>
      </form>
    </div>
  );
};

export default Popup;
