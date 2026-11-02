# Contributing

Thanks for helping. VFBS is a small project, so a short, focused change is the easiest to review.

## Before you start

- For a bug, open an issue with what you did, what you expected and what happened, plus the version shown in `chrome://extensions` and the page where it happened.
- For a larger change or a new feature, open an issue first so we can agree on the approach.
- For a security problem, follow [SECURITY.md](SECURITY.md) instead.

## Development

There's no build step. Load the `extension` folder with **Load unpacked** in `chrome://extensions`, and press its reload button after a change.

```sh
scripts/package.sh   # packs extension/ into dist/
```

The project's test suite is maintained separately and is not part of this repository. In your pull request, describe how you checked the change: what you ran, on which browser and site, and what you saw.

## Guidelines

- Match the style of the code around your change.
- Explain any behaviour you change, especially anything about permissions or which sites the extension runs on.
- Text shown to people comes in English and Traditional Chinese.
- Code comments are in English and say why, not what.
