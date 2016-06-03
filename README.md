# Polymer TypeScript Simple Demo

A demo showing side-by-side comparisons of pure Polymer sites with their Polymer-TypeScript counterparts.

This assumes you've already installed NodeJS and Bower, as well as Polymer CLI and TypeScript node modules.

bower.json and tsconfig.json files are already present, so all that's required is to install the bower components and transpile .ts files.


# Installation
In each site folder, install the bower components:
```
bower install
```

In each -ts site folder, transpile TypeScript .ts files:
```
tsc
```

# Start the Web Server
```
polymer serve
```