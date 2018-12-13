---
id: working-with-a-project-view
title: View
---

We organize views in a project into **screens** and **components**.

## Screens

Screens are represents kind of container or we can call pages.

**Commands:**

`anoa view screen <screen-name>`

or

`anoa v s <screen-name>`

**Folder:**

`src/views/screens/<screen-name>`

## Components

Components are reusable/shared React components that can be used across multiple places inside application.

**Commands:**

`anoa view component <component-name>`

or

`anoa v c <component-name>`

**Folder:**

`src/views/components/<component-name>`

## Screen & Component Type

When you create whether a **screen** or **component**, you'll be asked about the type of component.
There are 3 types of screen or component you can use: **[Class Based](#class-based)**, **[Stateless](#stateless)** or **[Stateless Functional](#stateless-functional)**.

```bash
$ anoa view screen todoList
? Select screen type
> Class based screen
  Stateless screen
  Stateless functional screen
```

### Class Based

This will generates a React class based component. Using this type, you'll be asked whether you want to have a state in your component or not.

```bash
$ anoa view screen todoList
? Select screen type Class based screen
? Location /
? Do you want to have state in your screen? (Y/n)
```

If you choose **yes**, then it will generates an empty **state** interface and also `constructor` so you can initialize your component state here.

```typescript
import React from 'react'
import { Text, View } from 'react-native'
import { TodoListScreenProps } from './props'
import { TodoListScreenState } from './state'

export class TodoListScreen extends React.Component<
  TodoListScreenProps,
  TodoListScreenState
> {
  constructor(props: TodoListScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>TodoListScreen</Text>
      </View>
    )
  }
}
```

Otherwise:

```typescript
import React from 'react'
import { Text, View } from 'react-native'
import { TodoListScreenProps } from './props'

export class TodoListScreen extends React.Component<TodoListScreenProps> {
  constructor(props: TodoListScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View>
        <Text>TodoListScreen</Text>
      </View>
    )
  }
}
```

However you can create state later on by using this command:

```bash
$ anoa view state
? What kind of view would you like to have state on it?
  Component
> Screen
```

Following by selecting the screen you want to add state on it:

```bash
? Now select the Screen:
  CompletedTaskListScreen [completed-task-list]
  MainScreen [main]
> TodoListScreen [todo-list]
```

### Stateless

Use this type to generate a simple React component. That is a plain function which takes props as an argument and returns a React element.

```typescript
import React from 'react'
import { Text, View } from 'react-native'
import { TodoListScreenProps } from './props'

export function TodoListScreen(props: TodoListScreenProps) {
  return (
    <View>
      <Text>TodoListScreen</Text>
    </View>
  )
}
```

### Stateless Functional

Same as **[Stateless](#stateless)**, but this will generates an arrow function insted.

```typescript
import React from 'react'
import { Text, View } from 'react-native'
import { TodoListScreenProps } from './props'

export const TodoListScreen: React.SFC<TodoListScreenProps> = props => {
  return (
    <View>
      <Text>TodoListScreen</Text>
    </View>
  )
}
```
