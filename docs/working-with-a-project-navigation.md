---
id: working-with-a-project-navigation
title: Navigation
---

You can use this command to create a navigator. Anoa uses [React Navigation 2.x](https://reactnavigation.org/docs/en/2.x/getting-started.html) library for this supports.

```bash
$ anoa nav` or `$ anoa n
```

Select the type of navigator you would like to use:

```bash
$ anoa nav
? Type of navigator:
  Stack Navigator
  Switch Navigator
  Drawer Navigator
  Bottom Tab Navigator
> Material Top Tab Navigator
```

Now select the screen for this navigator will be rendered to:

```bash
$ anoa nav
? Type of navigator: Material Top Tab Navigator
? Attach this navigator to:
  CompletedTaskListScreen [completed-task-list]
> MainScreen [main]
  TodoListScreen [todo-list]
```

For example if you choose `MainScreen [main]`, then this action will generates
navigator component on the file named `nav.tsx` under `src/views/screens/main` folder.

Then, anoa asks you whether you want to render this navigator directly or not:

```bash
$ anoa nav
? Type of navigator: Material Top Tab Navigator
? Attach this navigator to: MainScreen [main]
? Replace MainScreen render function? (Y/n)
```

If you choose [Y], then your `render` function in `MainScreen` component will become:

```typescript
public render() {
  return (
    <View style={{ flex: 1 }}>
      <MainScreenNav />
    </View>
  )
}
```

Otherwise you should do it manually.

Next, is to define the routes of navigator. You just need to select screens as part of routes component.
Anoa uses component name as a route path name.

```bash
$ anoa nav
? Type of navigator: Material Top Tab Navigator
? Attach this navigator to: MainScreen [main]
? Replace MainScreen render function? true
? Routes to:
 (*) CompletedTaskListScreen [completed-task-list]
>(*) TodoListScreen [todo-list]
```

Lastly, let's define the initial route name:

```bash
$ anoa nav
? Type of navigator: Material Top Tab Navigator
? What screen should this navigator belongs to? MainScreen [main]
? Replace MainScreen render function? true
? Routes to: CompletedTaskListScreen [completed-task-list], TodoListScreen [todo-list]
? Initial Route Name (Use arrow keys)
  CompletedTaskList
> TodoList
```

At the very first time you add navigator in your project, anoa will installs `react-navigation` and `@types/react-navigation` packages from npm.

```bash
/ Adding anoa, react-navigation@2.18.2...
```

Done! Based on example case above, now you can modify `index.tsx` and `nav.tsx` file under `/srv/views/screen/main` folder as if needed.

**index.tsx**

```typescript
import React from 'react'
import { View } from 'react-native'
import { MainScreenNav } from './nav'
import { MainScreenProps } from './props'

export class MainScreen extends React.Component<MainScreenProps> {
  constructor(props: MainScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <MainScreenNav />
      </View>
    )
  }
}
```

**nav.tsx**

```typescript
import { createMaterialTopTabNavigator } from 'react-navigation'
import { CompletedTaskListScreen } from '../completed-task-list'
import { TodoListScreen } from '../todo-list'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    CompletedTaskList: {
      screen: CompletedTaskListScreen,
      navigationOptions: {
        title: 'Completed Task List'
      }
    },
    TodoList: {
      screen: TodoListScreen,
      navigationOptions: {
        title: 'Todo List'
      }
    }
  },
  {
    initialRouteName: 'TodoList'
  }
)
```