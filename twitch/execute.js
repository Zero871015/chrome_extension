function autoClick(){ 
  var temp = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
  if(temp.length >= 1)
  {
    console.log("get");
    temp[0].click();
  }
  else
    console.log("failed");
} 

const onMessage = (message) => {
  switch (message.action) {
    case 'ROTATE':
      var timeoutID = window.setInterval(autoClick, 5000);
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);