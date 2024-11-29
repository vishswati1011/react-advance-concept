
## 1.What is the difference between Socket.io and HTTPS?

## When to use Socket.IO
Socket.IO is ideal for building any app that involves an exchange of messages between multiple users and a server, where you want to maintain the overall state and want a responsive bi-directional realtime user experience. Examples include chat/messenger apps, multi-user games, collaborative editing (think Google Docs), location-based apps, and more.
Socket.IO has good cross-browser compatibility, but its support for different platforms (i.e. non-JavaScript/Node.js) can be patchy. If you are using a well-supported client/server combination, and you are not concerned about supporting legacy browsers, then Socket.IO is fine. If you need an alternative, read our Socket.IO alternatives article for options.

## When to use HTTP
HTTP is ideal for multi-user apps where you don’t need realtime responsiveness in two directions, but you are still concerned with reliable, secure data exchanges between each client and the server. Think about traditional REST/CRUD apps — banking apps, email apps, weather apps, and e-commerce apps.
HTTP is a very mature technology with great support across web browsers, server platforms, and non-browser client types. If you are concerned about patchy support for a library such as Socket.IO, consider building your app using raw HTTP.
