const rspack = require('@rspack/core');
const path = require('path');

const libName = 'my_dll';

module.exports = {
  entry: {
    main: './src/dllEntry.js',
  },
  output: {
    filename: 'dll.js',
    library: `window.${libName}`,
    libraryTarget: 'assign',
  },
  mode: 'development',
  plugins: [
    new rspack.DllPlugin({
      context: path.join(__dirname, '..'),
      format: true,
      path: path.join(__dirname, '..', 'dllManifest.json'),
      entryOnly: false,
      name: libName
    })
  ]
};
