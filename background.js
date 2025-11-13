// Create the context menu item when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchIMDb",
    title: "Search IMDb for '%s'",
    contexts: ["selection"] // Only show when text is selected
  });
});

// Handle context menu item clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Check if our menu item was clicked
  if (info.menuItemId === "searchIMDb") {
    // Get the selected text
    const selectedText = info.selectionText;
    
    // Encode the text for URL (handles spaces and special characters)
    const encodedQuery = encodeURIComponent(selectedText);
    
    // Construct the IMDb search URL
    const searchUrl = `https://www.imdb.com/find?q=${encodedQuery}`;
    
    // Open the search URL in a new tab
    chrome.tabs.create({
      url: searchUrl
    });
  }
});