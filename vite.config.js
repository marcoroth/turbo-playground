const path = require('path');

export default {
  resolve: {
    alias: {
      '@hotwired/turbo': path.resolve(__dirname, '../dist/turbo.es2017-esm.js')
    }
  }
}
