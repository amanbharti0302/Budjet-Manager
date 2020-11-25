var contextMenuItem ={
    "id":"keylogger",
    "title":"budget calculator",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details);    
    },
{urls: ["<all_urls>"]},
["blocking"]);


// chrome.webRequest.onCompleted.addListener(
//     function(details) {
//         console.log(details);    
//     },
// {urls: ["<all_urls>"]},
// ["blocking"]);



chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        console.log(details);
    //   removeHeader(details.requestHeaders, 'cookie');
    //   return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
     ['blocking', 'requestHeaders', 'extraHeaders']);
  
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        console.log(details);
    //   removeHeader(details.responseHeaders, 'set-cookie');
    //   return {responseHeaders: details.responseHeaders};
    },
    {urls: ["<all_urls>"]},
    ['blocking', 'responseHeaders', 'extraHeaders']);










// chrome.webRequest.onErrorOccurred.addListener((details)=> {

// },
// {urls: ["<all_urls>"]},
// ["blocking"]);

// chrome.tabs.onActivated.addListener((tab) => {
//     const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
//     if (!tabStorage.hasOwnProperty(tabId)) {
//         tabStorage[tabId] = {
//             id: tabId,
//             requests: {},
//             registerTime: new Date().getTime()
//         };
//     }
// });


// chrome.tabs.onRemoved.addListener((tab) => {
//     const tabId = tab.tabId;
//     if (!tabStorage.hasOwnProperty(tabId)) {
//         return;
//     }
//     tabStorage[tabId] = null;
// });


// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     switch (msg.type) {
//         case 'popupInit':
//             response(tabStorage[msg.tabId]);
//             break;
//         default:
//             response('unknown request');
//             break;
//     }
// });