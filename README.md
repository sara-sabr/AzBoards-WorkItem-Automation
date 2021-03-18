# Azure DevOps Extension - Boards - Work Item Automation

This extension enables the capability to update dependencies of work items.

Features:
- When a child changes state, see if we need to update the parent state.

## Prerequisites

Download and install the following tools

1. [Visual Studio Code](https://code.visualstudio.com/download)
2. [Firefox](https://www.mozilla.org/firefox/) (because the VS Code Debugger for Chrome extension [doesn't support iframes](https://github.com/microsoft/vscode-chrome-debug/issues/786) yet)
3. [Node12](https://nodejs.org/en/download/) (make sure its Node 12 and not > 12)
4. The [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug) VS Code extension
5. The [tfx-cli](https://www.npmjs.com/package/tfx-cli) npm package
6. The [webpack](https://www.npmjs.com/package/webpack) npm package
7. The [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) npm package

> If you would prefer not to install the npm packages globally, you can add them to devDependencies in your `package.json` file and invoke them with scripts. You can use the [package.json](./package.json) in this repo as a template for scripts and to ensure you have the correct versions of packages in your extension.

## Instructions

### Setup dependencies

```
npm install
```

### Preparing to publish (Local and PROD)

1. Follow [instructions](https://docs.microsoft.com/en-us/azure/devops/extend/publish/command-line?view=azure-devops)
    - Acquire a Personal Access Token (PAT)

### Developing Locally

Once your ready to test, perform the following:

1. Publish the package to the marketplace. You will be prompted for your PAT.
   ```npm run publish:dev```.
2. Bring up the local environment.
   ```npm run start:dev```
3. Open Firefox
4. Ensure you have installed your extension for your organization.
5. Browse to the project/organzation.

### Publishing Production

1. Publish the package to the marketplace. You will be prompted for your PAT.
   ```npm run publish```.

## Acknowledgements

This extension is based upon [Azure DevOps Extension Hot Reload and Debug
](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug) and [Azure DevOps Web Sample Extension
](https://github.com/microsoft/azure-devops-extension-sample).