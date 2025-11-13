# IMDb Context Search Extension

A simple browser extension that allows you to search for selected text on IMDb directly from any webpage using the right-click context menu.

## Features

- Right-click context menu integration
- Search any selected text on IMDb
- Opens search results in a new tab
- Handles special characters and spaces automatically

## Installation

### For Chrome/Chromium-based browsers:

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right corner)
4. Click "Load unpacked" and select the extension folder
5. The extension is now installed and ready to use

### For Firefox:

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" (or "Open about:debugging" depending on your version)
4. Click "Load Temporary Add-on"
5. Select any file in the extension folder
6. The extension is now installed temporarily

### For Other Chromium-based browsers (Edge, Opera, etc.):

The installation process is similar to Chrome:
1. Download or clone this repository
2. Open your browser and navigate to the extensions page (e.g., `edge://extensions/` for Edge)
3. Enable "Developer mode" 
4. Click "Load unpacked" and select the extension folder
5. The extension is now installed and ready to use

## How to Use

1. Select any text on a webpage (e.g., an actor's name, movie title, etc.)
2. Right-click on the selected text
3. Choose "Search IMDb for '[selected text]'" from the context menu
4. A new tab will open with the IMDb search results for your selected text

## Example Usage

- Select "Leonardo DiCaprio" on any webpage → Right-click → "Search IMDb for 'Leonardo DiCaprio'" → See his IMDb page
- Select "The Shawshank Redemption" → Right-click → "Search IMDb for 'The Shawshank Redemption'" → See the movie on IMDb

## Technical Details

- Manifest Version: 3
- Permissions: Context Menus
- Background service worker handles the context menu functionality
- Supports URL encoding for special characters and spaces

## Files

- `manifest.json`: Extension configuration and metadata
- `background.js`: Context menu creation and search functionality
- `README.md`: This file

## License

This project is open source and available under the MIT License.