# SpeedPlay Chrome Extension

![Version](https://img.shields.io/badge/version-1.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A simple Chrome extension that allows users to adjust the playback speed of videos on any website. Choose from 0.5x, 1x, 1.5x, 2x, or 2.5x speeds directly from the extension popup.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Features

- Adjust playback speed to 0.5x, 1x, 1.5x, 2x, or 2.5x.
- Works on any website with HTML5 video elements.
- Simple and intuitive interface within the extension popup.
- Provides immediate feedback when the playback speed is changed.

## Installation

### Clone or Download the Repository

- **Clone the repository using Git:**

  ```bash
  git clone https://github.com/yourusername/speedplay.git

- Or download the ZIP file:
Click on the Code button on GitHub.
Select Download ZIP and extract it to your desired location.

Load the Extension in Chrome
1/ Open Google Chrome and navigate to chrome://extensions/.
2/ Enable Developer Mode:
- Toggle the switch in the top-right corner to enable Developer mode.
3/ Load Unpacked Extension:
- Click on the Load unpacked button.
- Select the speedplay folder (the one containing manifest.json).
4/ Confirm Installation:
- The extension should now appear in your list of extensions.
- You may pin it to the toolbar for easy access.

Permissions Explanation
- activeTab: Allows the extension to access the active tab upon clicking the extension icon.
- scripting: Enables the extension to execute scripts on the current webpage.
- host_permissions: Grants the extension access to all URLs (<all_urls>), necessary for modifying video elements on any website.


## Usage
1/ Navigate to a Website with a Video:
- Visit any website that contains HTML5 video elements (e.g., YouTube, LinkedIn, Vimeo).
2/ Open the Extension Popup:
- Click on the SpeedPlay icon in the Chrome toolbar.
3/ Select Playback Speed:
- Click on the desired playback speed button (0.5x, 1x, 1.5x, 2x, or 2.5x).
4/ Confirmation Message:
- A message will appear within the popup confirming the playback speed has been set.
5/ Enjoy Adjusted Playback:
- The video(s) on the page will now play at the selected speed.

Note: The extension adjusts all video elements on the current page.

## Screenshots
Extension Popup
_The SpeedPlay extension popup with playback speed options and confirmation message.
Confirmation Message
_Confirmation message displayed within the SpeedPlay extension popup.
 
## Contributing 
Contributions are welcome! Please follow these steps:
1. Fork the Repository:
- Click on the **Fork** button at the top-right corner of the repository page.
2. Clone Your Fork:
  git clone https://github.com/yourusername/speedplay.git
3. Create a New Branch:
  git checkout -b feature/your-feature-name
4. Make Your Changes:
- Implement your feature or bug fix.
5. Commit Your Changes:
git commit -m "Add feature: your feature name"
6. Push to Your Branch:
  git push origin feature/your-feature-name
7. Open a Pull Request:
- Go to your forked repository on GitHub.
- Click on Compare & pull request.
- Provide a clear description of your changes and submit the pull request.

Contribution Guidelines
- Code Style: Follow existing code formatting and style.
- Comments: Include comments for complex sections of code.
- Testing: Ensure that your changes work across different websites with video elements.
- Documentation: Update the README if your changes affect usage instructions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by the need for better control over video playback speeds across various platforms.
- Thanks to all contributors who have helped improve this project.

## Contact
For questions, suggestions, or support, please open an issue or contact me at jonny@dimho.com
- GitHub Issues: https://github.com/yourusername/speedplay/issues











