---
id: getting-started-create-project
title: Create New Project
---

Creating new project is easily done by executing `anoa init <project-name>` command.

Example:

```bash
$ anoa init MyAwesomeApp
```

**Anoa** comes with 2 types of project:

```bash
? Select project type you would like to use: (Use arrow keys)
  React Native Init
  Expo
```

> You need **react-native-cli** installed globally for **React Native Init** project type and/or **expo-cli** for **Expo**.

Choose an appropriate project type for you and wait until the project is ready.

```bash
? Select project type you would like to use: React Native Init
| Creating MyAwesomeApp project...
```

On the background **anoa** executing whether **expo-cli** or **react-native-cli** based on choosen project type.
And when it's done **anoa** will generate the boilerplate.

Once you see this:

```bash
$ √ Yay! The MyAwesomeApp project is ready!
```

It's mean boilerplate is ready. Go the the project folder and run the project!
