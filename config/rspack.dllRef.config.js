const rspack = require('@rspack/core');
const path = require('path');

module.exports = {
  entry: {
    main: './src/entry.js',
  },
  module: {
    parser: {
      javascript: {
          strictExportPresence: true,
      },
    }
  },
  plugins: [
    new rspack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../dllManifest.json'),
      sourceType: 'var',
    })
  ]
};
