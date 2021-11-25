# Jersey NPM and Code reuse code along

This is code along from the npm lesson. In the lesson we cover npm, package.json, dependencies and scripts, node_modules and three third part packages.

## Links & Packages used

- [npm](https://www.npmjs.com/)
- [Canvas Confetti](https://www.npmjs.com/search?q=canvas%20confetti)
- [SASS](https://www.npmjs.com/package/sass)
- [Chart JS](https://www.npmjs.com/package/chart.js)

## Setup

Clone the repo

```bash
git clone https://github.com/nology-tech/jersey-code-reuse-lesson.git
cd jersey-code-reuse-lesson
```

Install the dependencies the project needs.

```bash
npm install
```

## Commands

- `npm init` -> creates a package.json in your project
- `npm install package-name` or `npm i package-name` -> adds a package to your project and updates your package.json **dependencies**. The package will be in your node_modules folder.
- `npm install --save-dev package-name` -> adds a package to your project and updates your package.json **dev dependencies** .
- `npm run script-name` -> will run the script you have added to your package.json

## Webpack & Deployment

### Webpack

You will have to re-organize your project, create a src folder.

Move .html, .js and .scss files and folders into the src folder.

Add webpack and webpack cli as a devDependency.

```bash
npm install --save-dev webpack webpack-cli
```

Create a `webpack.config.js` file in the root of your directory.

```js
// webpack.config.js
module.exports = {
  mode: "development", //
  entry: "./src/main.js", // This is whatever your main js file is called
};
```

Add a new script to your package.json

- `"build": "webpack"`
- This will use webpack to bundle your .js code into a dist folder.

This will only target .js files though so we need to set it up to bundle up our .html files and also compile and bundle our .scss files.

### HTML

```bash
npm install --save-dev html-loader html-webpack-plugin
```

With the dependencies installed you will need to update your webpack.config.js.

- You need to require the html web pack plugin and save it to a variable.
- You need to add the module and plugins keys
- Module has a key of rules which is an array of objects
  - Each objects has a test key to match the files you want. e.g `/\.html$/` is a regex expression that matches any files that end with .html
  - The use key is what you want to do when you have a match.
- Plugins is an array of plugins you want to use

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  module: {
    rules: [{ test: /\.html$/, use: { loader: "html-loader", options: { minimize: true } } }],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

### SASS/SCSS

```bash
npm install --save-dev css-loader sass-loader style-loader
```

How you link styles will be slightly different now. All your styles will be bundled in with your js.

You will need to import your styles into your src/main.js file.

```js
// main.js
import "./scss/main.scss";
```

With the dependencies installed you will need to update your webpack.config.js.

In the modules.rules array add a new object. This will test for files ending in .scss and will use the dependencies just added in a certain order.

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.html$/, use: { loader: "html-loader", options: { minimize: true } } },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

## Dev server

Lets add a development server as well why not?

This is allow us to write code and see it bundled in realtime.

```bash
npm install --save-dev webpack-dev-server
```

Add a new script to the package.json

- `"start": "webpack serve"`
- This will open up your dev server

With the dependencies installed and script written you will need to update your webpack.config.js.

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.html$/, use: { loader: "html-loader", options: { minimize: true } } },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

## ADDING GITHUB PAGES

npm install --save-dev gh-pages
