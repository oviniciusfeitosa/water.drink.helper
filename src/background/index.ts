// console.info('chrome-ext template-react-ts background script')

// export {}

declare const chrome: any;

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.onAlarm.addListener((alarm: any) => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "img/water-128.png",
      title: "Drink Water Reminder",
      message: "It's time to drink water!",
    });
  });
});

export { };

