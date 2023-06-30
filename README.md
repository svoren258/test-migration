# Monorepo of the migration plugin

## Pre-condition Verdaccio

If you want to test locally, you can use a local registry for testing https://verdaccio.org/docs/installation

Install verdaccio:
```
$ npm install --location=global verdaccio
$ verdaccio
```
Set registry to local:
```
$ npm set registry http://localhost:4873/ --location project
$ npm adduser --registry http://localhost:4873
```
Login or add user:
```
$ npm login
OR
$ npm adduser --registry http://localhost:4873
```

Don't forget to revert when you are done:
```
$ npm config set registry https://registry.npmjs.org/
```

## Setup
### Plugin Workspace Creation
```bash
$ npx create-nx-workspace@latest test-migration
$ cd test-migration
$ npm install @nx/plugin --save
```
Generate the plugin library:
```bash
$ npx nx g @nx/plugin:plugin nx-plugin --publishable
```
Publish the plugin:
```
$ npx nx publish nx-plugin --ver=1.0.0 --tag=latest
```

### Target Workspace
Install the plugin:
```
$ npm install @test-migration/nx-plugin --save
```

## Create Migrations

### Plugin Workspace Creation
Generate a migration in the nx-plugin
```bash
$ npx nx g migration my-migration --project=nx-plugin --packageVersion=1.1.0
```

Publish a new version of the plugin:
```
$ npx nx publish nx-plugin --ver=1.1.0 --tag=latest
```

### Target Workspace
Start migration:
```
$ npx nx migrate @test-migration/nx-plugin@latest
```
Apply the migration:
```
$ npx nx migrate --run-migrations --if-exists
```

## Implement Migration
https://nx.dev/plugins/recipes/migration-generators#update-package.json-dependencies
