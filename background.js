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