let activeTabId;
let startTime;

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url) {
      activeTabId = activeInfo.tabId;
      startTime = Date.now();
    }
  });
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (tabId === activeTabId) {
    const timeSpent = Date.now() - startTime;
    // Send data to backend
    fetch('http://localhost:3000/websites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tabId, timeSpent })
    });
  }
});
