import windowChanger from "./injected-helper"

const inject = async (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN", // MAIN in order to access the window object
      func: windowChanger
    },
    (e) => {
      console.log("e", e)

      console.log("Background script got callback after injection")
    }
  )
}

chrome.tabs.onActivated.addListener((e) => {
  console.log("tagId", e.tabId, e.windowId)

  inject(e.tabId)
})
