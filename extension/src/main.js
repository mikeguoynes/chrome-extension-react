/*global chrome*/

export async function viewCode() {
  chrome.storage.sync.set({color: "#3aa757"}, ()=>{});

  await chrome.tabs.query({active: true, currentWindow: true}, 
    (
      r => {
      chrome.tabs.executeScript(r[0].id , {file: 'scripts/launch-kiktab.js'}, function() {
        if(chrome.runtime.lastError) {
          console.error("Script injection failed: " + chrome.runtime.lastError.message);
        }
      })
    }
  ));
  
}