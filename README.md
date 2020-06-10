# Command Bus, handler and DTO example

Dependencies Installation:
```bash
yarn install

//OR

npm install
```

Available commands(package.json):
```JSON
"scripts": {
    "build": "npm-run-all clean tsc",
    "dev": "npm-run-all build --parallel nodemon tsc:watch",
    "lint": "npm-run-all format eslint",
    "eslint": "eslint --fix --ext .js,.ts ./src",
    "clean": "rimraf dist",
    "tsc": "tsc",
    "tsc:watch": "tsc --watch",
    "format": "prettier --write --no-semi .",
    "nodemon": "nodemon --watch",
    "start": "node dist/index.js"
}
```
