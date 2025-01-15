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
  }
};
