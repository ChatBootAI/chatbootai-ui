# 🤖 ChatBootAI: Reusable Chat Web Component

[![NPM version](https://img.shields.io/npm/v/@chatbootai/chat.svg)](https://www.npmjs.com/package/@chatbootai/chat)
[![Build Status](https://github.com/ChatBootAI/chatbootai-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/ChatBootAI/chatbootai-ui/actions/workflows/ci.yml)
![Node version](https://img.shields.io/node/v/@chatbootai/chat.svg)
[![Install size](https://packagephobia.now.sh/badge?p=%40chatbootai%2Fchat)](https://packagephobia.now.sh/result?p=%40chatbootai%2Fchat)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

This package provides a reusable web component that can be used to add an AI chatbot compatible with the [ChatBootAI OpenAPI specification](https://editor.swagger.io/?url=https://raw.githubusercontent.com/ChatBootAI/chatbootai-openapi/main/openapi.yml) to any website.

## Installation

```bash
npm install @chatbootai/chat-web-component
```

## Usage

Once the package is installed, you can use the web component in your HTML code:

```html
<cba-chat options="{ apiUrl: 'http://your-chat-backend.com' }"></cba-chat>
```

Depending of the framework and build system you're using, you'll have to import the web component in your JS code in different ways. You can have a look at the various integrations examples here:

- [Vanilla HTML](https://github.com/ChatBootAI/chatbootai-ui/tree/main/packages/static-html)
- [Angular](https://github.com/ChatBootAI/chatbootai-ui/tree/main/packages/angular)
- [React](https://github.com/ChatBootAI/chatbootai-ui/tree/main/packages/react)
- [Vue](https://github.com/ChatBootAI/chatbootai-ui/tree/main/packages/vue)
- [Svelte](https://github.com/ChatBootAI/chatbootai-ui/tree/main/packages/svelte)

## Development

This project uses [Vite](https://vitejs.dev/) as a frontend build tool, and [Lit](https://lit.dev/) as a web components library.

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `npm run build`

To build the web component for production to the `dist` folder.

#### `npm run build:website`

To build the demo website for the component to the `dist` folder.
