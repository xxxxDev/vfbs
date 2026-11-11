# Security

## What VFBS can see and do

VFBS has no server and no analytics, and it sends nothing to its authors. It stores nothing. It asks for no permissions beyond running on the pages you visit, which Chrome shows as access to all websites.

- **Running on all sites.** A video can be on any site, so the content script runs on every page except Google Search, Google account pages and Firefox account pages.
- **Pointer and keys.** It follows the pointer to find the video under it, and listens for <kbd>F2</kbd> and <kbd>F3</kbd>. Neither is recorded or sent anywhere.
- **Coordination between frames.** A video in a frame needs its parent page to fill the window too. Frames coordinate through the extension's background worker, which web pages can't write to, and the messages contain only the name of the action and a one-time token.

## Keep in mind

- A frame can only ask its parent to fill the window after the extension in that frame has seen you press its button or key on a video. A page's own script can't produce that request.
- You can always leave with <kbd>Esc</kbd>, <kbd>F2</kbd> or the extension's icon.
- The buttons appear only on a video you can really see at 400 × 221 pixels or more, and they do nothing if a page has stretched or hidden them.
- A page can notice the extension is installed, from the buttons it adds near a video.

## Reporting a vulnerability

Please do not open a public issue for a security problem. Email [support@v-ax.com](mailto:support@v-ax.com) instead. You can also use GitHub's **Report a vulnerability** button on this repository.

Include VFBS, the version shown in `chrome://extensions`, your browser and its version, minimal steps to reproduce, and the expected and observed results. Use fictional data where possible and redact sensitive information from errors or screenshots.

Do not send passwords, tokens, private keys, account data, or raw private logs. Include only the information needed to reproduce the problem.

For ordinary usage questions and non-sensitive bugs, use this repository's issue tracker.
