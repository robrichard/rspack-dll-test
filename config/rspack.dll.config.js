const rspack = require('@rspack/core');
const path = require('path');

module.exports = {
  entry: {
    main: './src/dllEntry.js',
  },
  plugins: [
    new rspack.DllPlugin({
      context: path.join(__dirname, '..'),
      format: true,
      path: path.join(__dirname, '..', 'dllManifest.json'),
      entryOnly: false,
      name: 'my_dll'
    })
  ]
};
