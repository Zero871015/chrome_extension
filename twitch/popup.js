var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('rotate').addEventListener('click', () => sendMessage({ action: 'ROTATE' }));
}
chrome.tabs.getSelected(null, getSelectedTab);