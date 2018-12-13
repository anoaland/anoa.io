---
id: getting-started-project-structure
title: Project Structure
---

Both of **Expo** and **React Native Init** project have same structure and pattern.

At the very beginning you `init` the project, **Anoa** will only generates a minimum project structure like so:

```bash
.
├── assets               (Project assets such as images and fonts)
├── src
│   ├── views            (Views & Themes)
│   │   ├── screens
│   │   │   ├── main     (Main screen view containing simple hello world view)
│   │   │   │   ├── index.tsx
│   │   │   │   ├── props.ts
│   ├── App.tsx           (Application root component)
├── index.js              (for React Native Init) / App.js (for Expo)
```

And after you play arround with the CLI you'll get something like this:

```bash
.
├── assets               (Project assets such as images and fonts)
├── src
│   ├── data             (SQLite repositories)
│   │   ├── models
│   │   ├── providers
│   ├── store            (All about Redux)
│   │   ├── actions
│   │   ├── reducers
│   ├── views            (Views & Themes)
│   │   ├── components
│   │   ├── screens
│   │   ├── styles
│   ├── App.tsx           (Application root component)
├── index.js              (for React Native Init) / App.js (for Expo)
```
