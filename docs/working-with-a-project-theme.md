---
id: working-with-a-project-theme
title: Theme
---

## Create new theme

```bash
$ anoa view
? What would you like to do with view?
  Create new component
  Create new screen
  Create state interface for screen or component class
> Create new theme
```

or

```bash
$ anoa view theme
```

```bash
- Adding anoa-react-native-theme...
```

```bash
√ Required packages successfully added.
New theme was successfully created on 'src/views/styles/themes/base.ts'
```

Go to ... end create your theme for instance:

```ts
import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    spacing: {
      normal: 24
    },
    colors: {
      primary: '#007bff'
    }
  },
  vars => ({
    screenContainer: {
      flex: 1,
      padding: vars.spacing.normal,
      backgroundColor: vars.colors.primary
    }
  })
)
```

## Conect theme to view

```bash
$ anoa view 
```

or 

```bash
$ anoa view h
```

```bash
$ anoa view
? What would you like to do with view?
  Create new component
  Create new screen
  Create state interface for screen or component class
  Create new theme
> Connect theme to view (screen / component)
```

```bash
$ anoa view
? What would you like to do with view? Connect theme to view (screen / component)
? Select kind of view:
  Component
> Screen
```

```bash
$ anoa view
? What would you like to do with view? Connect theme to view (screen / component)
? Select kind of view: Screen
? Select the Screen:
  CompletedTaskListScreen [completed-task-list]
  MainScreen [main]
> TodoListScreen [todo-list]
```

```
Theme was successfully connected to TodoListScreen on 'src/views/screens/todo-list/index.tsx'.
Use const { theme } = this.props as Required<TodoListScreenProps> in the render function to access theme.
```