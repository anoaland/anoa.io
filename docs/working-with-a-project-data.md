---
id: working-with-a-project-data
title: Data
---

Anoa supports CLI to generate code to interact with SQLite Data Storage.

## Model / Entity / Table

Starting by creating a model or entity that represents SQLite table:

```bash
$ anoa data
? What would you like to do with store?
> Create new data model
  Create new data provider
```

For example I would like to have a `task` model:

```bash
$ anoa data
? What would you like to do with store? Create new data model
? Model name task
```

At the very first time you add new model, Anoa will install [`sqlite-ts`](https://github.com/budiadiono/sqlite-ts) package from npm.

```
/ Adding required packages...
```

And done:

```bash
$ anoa data
? What would you like to do with store? Create new data model
? Model name task
√ Required packages added.
A new model named Task was successfully created on src/data/models/task.ts
```

You can check your new model on `src/data/models/task.ts`:

```typescript
import { Column, Primary } from 'sqlite-ts'

export class Task {
  @Primary()
  id?: number = 0

  @Column('NVARCHAR')
  foo: string = ''
}
```

That was just dummy example model that you should modify it. For example:

```typescript
import { Column, Primary } from 'sqlite-ts'

export class Task {
  @Primary()
  id?: number = 0

  @Column('NVARCHAR')
  name: string = ''

  @Column('BOOLEAN')
  done: boolean = false
}
```

## Data provider

Provider is a set of methods that access the repositories.

```bash
$ anoa data
? What would you like to do with store?
  Create new data model
> Create new data provider
```

Let say I want to create a `Todo` data provider:

```bash
$ anoa data
? What would you like to do with store? Create new data provider
? Provider name todo
A new data provider named Todo was successfully created on src/data/providers/todo.ts
```

This action will generate new `Todo` provider on `src/data/providers/todo.ts`:

```typescript
import { Db } from 'sqlite-ts'
import { Models } from '..'

export class Todo {
  db: Db<Models>
  constructor(db: Db<Models>) {
    this.db = db
  }

  // TODO: add provider functions...
}
```

In this file you have `db` field represents the connected **SQLite Database**. This `db` field has `tables` field
that represents repositories based on the models you have. Here's the place you can access your repositories. 
Check this example bellow, that I modified my `Todo` provider:

```typescript
import { Db } from 'sqlite-ts'
import { Models } from '..'
import { Task } from '../models'

export class Todo {
  db: Db<Models>
  constructor(db: Db<Models>) {
    this.db = db
  }

  async addTask(name: string): Promise<Task> {
    const res = await this.db.tables.Task.insert({ name, done: false })
    return {
      id: res.insertId,
      name,
      done: false
    }
  }

  async changeTaskStatus(id: number, done: boolean) {
    await this.db.tables.Task.update({ done }).where(c => c.equals({ id }))
  }

  async getTasks(done: boolean): Promise<Task[]> {
    return this.db.tables.Task.select().where(c => c.equals({ done }))
  }
}
```

## AppData

At the very first time you add new data provider, anoa also generates **AppData** object in `src/data/index.ts`:

```typescript
import { SQLite } from 'expo'
import { Db, ExpoSQLiteDriver } from 'sqlite-ts'
import * as entities from './models'
import * as providers from './providers'

type TProviders = typeof providers
export type Models = typeof entities
export type Providers = { [K in keyof TProviders]: InstanceType<TProviders[K]> }

// @ts-ignore
export const AppData: Providers & { init: () => Promise<void> } = {
  init: async () => {
    const expoDb = SQLite.openDatabase('todo-app-db')

    const db = await Db.init({
      driver: new ExpoSQLiteDriver(expoDb),
      entities
    })

    for (const k of Object.keys(providers)) {
      // @ts-ignore
      AppData[k] = new providers[k](db)
    }
  }
}
```

This file may look slightly different when you choose **React Native Init** project type instead of **Expo**,
but resulting same object.

And also the `App.tsx` file is get modified as well. If you check on `prepare()` method:

```typescript
async prepare(): Promise<void> {
  await Asset.loadAsync(require('../assets/logo.png'))
  await AppStore.init()
  await AppData.init()
}
```

On the last line `await AppData.init()` was added to initialize database connection at the very first time app is running.



