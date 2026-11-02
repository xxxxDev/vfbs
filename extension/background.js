// The toolbar icon leaves the current mode, in whichever frame of the tab it is on.
chrome.action.onClicked.addListener((tab) => {
  // Pages the extension doesn't run on have nobody to answer, which is fine.
  chrome.tabs.sendMessage(tab.id, { vfbs: true, type: 'leave', fromIcon: true }).catch(() => {});
});

// Frames can only reach each other's content scripts through here, where a page can't write.
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message && message.vfbs && sender.tab) chrome.tabs.sendMessage(sender.tab.id, message).catch(() => {});
});
