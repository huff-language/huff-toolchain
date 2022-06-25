require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 831:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(311)
const tc = __nccwpck_require__(961)
const path = __nccwpck_require__(17)
const { getDownloadObject } = __nccwpck_require__(125)

async function setup() {
  try {
    // Get version
    const version = core.getInput('version')

    // Download tarball
    const download = getDownloadObject(version)
    const pathToTarBall = await tc.downloadTool(download.url)

    // Extract the tarball onto host runner
    const extract = download.url.endsWith('.zip') ? tc.extractZip : tc.extractTar
    const pathToCLI = await extract(pathToTarBall)

    // Expose the tool
    core.addPath(path.join(pathToCLI, download.binPath))
  } catch (e) {
    core.setFailed(e)
  }
}

module.exports = setup

if (require.main === require.cache[eval('__filename')]) {
  setup()
}

/***/ }),

/***/ 125:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const os = __nccwpck_require__(37)

function mapArch (arch) {
  const mappings = {
    x32: '386',
    x64: 'amd64'
  }

  return mappings[arch] || arch
}

function normalizeVersionName (version) {
  return version.replace(/^nightly-[0-9a-f]{40}$/, 'nightly')
}

function getDownloadObject (version) {
  const platform = os.platform()
  const filename = `huff_${normalizeVersionName(version)}_${platform}_${mapArch(os.arch())}`
  const extension = platform === 'win32' ? 'zip' : 'tar.gz'
  const url = `https://github.com/huff-language/huff-rs/releases/download/${version}/${filename}.${extension}`

  return {
    url,
    binPath: '.'
  }
}

module.exports = {
  getDownloadObject
}

/***/ }),

/***/ 311:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 961:
/***/ ((module) => {

module.exports = eval("require")("@actions/tool-cache");


/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(831);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map