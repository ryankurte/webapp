# Progressive React Web App Example

An example / attempt at building a [progressive web app](https://developers.google.com/web/progressive-web-apps/) using [react](https://facebook.github.io/react/) and [webpack](https://webpack.github.io/).


## Usage

This depends on nodejs to install/build all the things. A [makefile](makefile) is included providing helpers for common operations.

Webpack configurations are split for [development](webpack.config.js) and [production](webpack.production.config.js).

The web application manifest is included from [manifest.json](manifest.json).


### Development

1. `make install` to install dependencies
2. `make build` to run webpack and build the app
3. `make serve` to start a local development server
4. Open the local server in a web browser (or use `make open`)

The local server uses webpack-dev-server so will automatically rebuild the app when changes are detected.

### Deployment

`make minified` builds minified production files

## Directories

- [html](/html) contains html source files
- [jsx](/jsx) contains jsx source files


