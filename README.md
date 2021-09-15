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
git clone
cd
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
