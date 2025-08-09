# Chatbot Project (React + Vite)

A minimal chatbot UI built with React and Vite. It renders a chat history, supports sending messages with Enter or a button, shows a typing indicator, auto-scrolls to the latest message, and replies using the `supersimpledev` Chatbot helper.

## Features

- Chat history with user and robot messages
- Typing indicator before the bot response
- Auto-scroll to the newest message
- Keyboard support (Enter to send)
- Simple, clean styling with avatars

## Tech stack

- React 19
- Vite 6 (HMR dev server and build)
- ESLint 9
- supersimpledev (Chatbot response helper)

## Quick start

Prerequisites: Node.js 18+ and npm.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Scripts

- Dev: start local server with HMR
	```bash
	npm run dev
	```
- Build: production build to `dist/`
	```bash
	npm run build
	```
- Preview: preview the production build locally
	```bash
	npm run preview
	```
- Lint: run ESLint on the project
	```bash
	npm run lint
	```

## Project structure

```
.
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ robot.png
│  │  └─ user.png
│  ├─ components/
│  │  ├─ ChatInput.jsx / .css
│  │  ├─ ChatMessage.jsx / .css
│  │  └─ ChatMessages.jsx / .css
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
└─ vite.config.js
```

## How it works

- `App.jsx` holds `chatMessages` state and composes the UI with `ChatMessages` and `ChatInput`.
- `ChatInput.jsx` manages the input box. On send:
	- It appends the user's message to state.
	- It shows a temporary robot "typing" message with a spinner text.
	- After a short delay (setTimeout), it calls `Chatbot.getResponse(inputText)` from `supersimpledev` and replaces the typing message with the actual response.
- `ChatMessages.jsx` renders the list of messages and auto-scrolls to the bottom whenever messages change.
- `ChatMessage.jsx` renders each message with a user or robot avatar.

Message shape:

```js
{
	id: string,        // crypto.randomUUID()
	sender: 'user' | 'robot',
	message: string
}
```

## Customization

- Response delay: tweak the `setTimeout` duration in `ChatInput.jsx`.
- Placeholder/button text: edit `ChatInput.jsx`.
- Styling: update the CSS files alongside each component.
- Avatar images: replace `src/assets/robot.png` and `src/assets/user.png`.

## Troubleshooting

- Blank page or errors: ensure Node 18+ and a clean install (`rm -rf node_modules package-lock.json && npm install`).
- Port in use: Vite defaults to 5173; either close the other process or pass `--port` to `npm run dev`.
- CSS not applying: verify class names in JSX match the CSS files.

## Credit

This is built as part of learning JS from SuperSimpleDev Tutorial.

