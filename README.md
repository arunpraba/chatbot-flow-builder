# Chatbot flow builder

## [App Demo](https://arunpraba-bite-speed-fe-task.netlify.app/)

## Introduction

This is a simple chatbot flow builder. It allows you to create a chatbot flow by dragging and dropping nodes and connecting them together. The flow can be saved to the local storage and downloaded as a JSON file.

## Features

1. Users can drag and drop nodes from the right panel to the canvas
2. Users can connect nodes together by dragging the connector from one node to another
3. Users can save the flow by clicking the save changes button (the flow will be saved to the local storage). The flow will be loaded from the local storage when the page is refreshed
4. Users can download the flow as a JSON file by clicking the download button

## Getting Started

1. Clone the repo
2. Install dependencies

```
npm install
```

3. Start the server

```
npm run dev
```

4. Open http://localhost:5173 in your browser or whatever port you have specified in the terminal

## Tech Stack

- Language - JavaScript
- Framework - React
- Css - styled-components
- Flow - reactflow
