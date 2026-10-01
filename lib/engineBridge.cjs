'use strict';
// Loads the native mywebui_scada_engine addon. The napi-rs generated loader
// (native/index.js) resolves the correct binary per platform — locally the
// freshly built <name>.<triple>.node, and in a released install the matching
// optional platform package. This module is the ONLY place main.js loads the
// engine from, so the load path stays in one spot as distribution evolves.
// NOTE: consumers MUST require this with the explicit ".cjs" extension
// (require('.../lib/engineBridge.cjs')) — Node's CJS resolver never auto-appends .cjs.
const path = require('node:path');
module.exports = require(path.join(__dirname, '..', 'native', 'index.js'));
