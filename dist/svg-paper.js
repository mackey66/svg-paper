(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SvgPaper"] = factory();
	else
		root["SvgPaper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/adjust-text.js":
/*!*******************************!*\
  !*** ./js/src/adjust-text.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (selector, config) {
  var paperPixelRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var $this = document.querySelector(selector);
  if (!$this) {
    return;
  }

  // shrink text element to specified width
  if (!!config['textLength']) {
    // for firefox
    // @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientWidth
    $this.style.display = 'block';
    if ($this.getBoundingClientRect().width * paperPixelRatio > config.textLength) {
      $this.querySelector('tspan').setAttribute('textLength', config.textLength);
      $this.querySelector('tspan').setAttribute('lengthAdjust', 'spacingAndGlyphs');

      // for firefox
      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=890692
      $this.setAttribute('textLength', config.textLength);
      $this.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    }
  }

  // alignment
  if (!!config['text-anchor'] && config['text-anchor'] !== 'start') {
    var w = parseFloat(config['textLength']);
    var x = 0;
    var y = 0;
    if ($this.getAttribute('transform')) {
      x = parseFloat($this.getAttribute('transform').match(/translate\((\S+) .+\)/)[1]);
      y = parseFloat($this.getAttribute('transform').match(/translate\(\S+ (.+)\)/)[1]);
    }
    if (config['text-anchor'] === 'middle') {
      $this.setAttribute('transform', "translate(".concat(x + w / 2, " ").concat(y, ")"));
    }
    if (config['text-anchor'] === 'end') {
      $this.setAttribute('transform', "translate(".concat(x + w, " ").concat(y, ")"));
    }
    $this.setAttribute('text-anchor', config['text-anchor']);
  }
});

/***/ }),

/***/ "./js/src/adjust-textarea.js":
/*!***********************************!*\
  !*** ./js/src/adjust-textarea.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/split-string-by-width */ "./js/src/utility/split-string-by-width.js");
/* harmony import */ var _utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/fix-text-transform */ "./js/src/utility/fix-text-transform.js");




/* harmony default export */ __webpack_exports__["default"] = (function (textSvg, textContent, width, height) {
  var lineHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.2;
  var paddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
  var paddingY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.5;
  var nowrap = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  if (!textSvg.match(new RegExp('<text [^>]*font-size="\\d+"[^>]*><tspan( [^>]*>|>)[^<>]*</tspan></text>'))) {
    console.error('Invalid svg string of text element', textSvg);
    return textSvg;
  }
  var originalFontSize = parseInt(textSvg.match(/.+font-size="(\d+)".+/)[1]);
  var fontSize = originalFontSize;

  // find the right-size font-size
  var physicalLines = textContent.split("\n");
  var logicalLines = [];
  var _loop = function _loop() {
    var maxRows = Math.floor((height - 2 * fontSize * paddingY) / (fontSize * lineHeight));
    var maxColumns = Math.floor((width - 2 * fontSize * paddingX) / fontSize); // doesn't care about proportional font

    if (nowrap) {
      logicalLines = physicalLines;
    } else {
      logicalLines = [];
      physicalLines.forEach(function (line) {
        logicalLines = logicalLines.concat(Object(_utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(line, maxColumns * 2)); // 2 single-byte characters can be placed in 1 column
      });
    }
    if (logicalLines.length > maxRows) {
      fontSize *= 0.95;
    } else {
      return 1; // break
    }
  };
  while (true) {
    if (_loop()) break;
  }

  // raise y-coordinate up because y-coordinate of <text transform="translate(x y)"> or <tspan y=""> is on lower base of text object
  var adjustY = fontSize - originalFontSize;
  var adjustedTextSvg = Object(_utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg);
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('<tspan(.|\\s)+</text>'), '');
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('font-size="\\d+"'), "font-size=\"".concat(fontSize, "\""));
  adjustedTextSvg += '{tspan}</text>';
  var tspan = '';
  var x = fontSize * paddingX;
  logicalLines.forEach(function (line, i) {
    var y = adjustY + fontSize * (paddingY + i * lineHeight);
    tspan += "<tspan x=\"".concat(x, "\" y=\"").concat(y, "\">").concat(line, "</tspan>");
  });
  adjustedTextSvg = adjustedTextSvg.replace('{tspan}', tspan);
  return adjustedTextSvg;
});

/***/ }),

/***/ "./js/src/svg-paper.js":
/*!*****************************!*\
  !*** ./js/src/svg-paper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgPaper; });
/* harmony import */ var _adjust_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust-text */ "./js/src/adjust-text.js");
/* harmony import */ var _adjust_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust-textarea */ "./js/src/adjust-textarea.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SvgPaper = /*#__PURE__*/function () {
  function SvgPaper() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.paper svg';
    _classCallCheck(this, SvgPaper);
    if (!document.querySelector(selector)) {
      throw new Error('Invalid selector');
    }
    this.selector = selector;
    this.svg = document.querySelector(selector).outerHTML.replace(/[\r|\n]+/g, "\n");
    this.adjustTextQueries = [];
  }
  _createClass(SvgPaper, [{
    key: "replace",
    value: function replace(search, replacement) {
      if (search instanceof RegExp) {
        search = new RegExp(search.source, search.flags.replace(/g/g, '') + 'g');
      } else {
        search = search.replace(/[\r|\n]+/g, "\n");

        // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
        search = search.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
        search = new RegExp(search, 'g');
      }

      // cast to string
      replacement = replacement !== undefined && replacement !== null ? replacement + '' : '';
      replacement = replacement.replace(/[\r|\n]+/g, "\n");
      this.svg = this.svg.replace(search, replacement);
      return this;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(selector, property, value) {
      var doc = new DOMParser().parseFromString(this.svg, 'text/html');
      var textElement = doc.querySelector(selector);
      if (!textElement) {
        return this;
      }
      var textSvg = textElement.outerHTML;
      textElement.setAttribute(property, value);
      var replacedTextSvg = textElement.outerHTML;
      this.replace(textSvg, replacedTextSvg);
      return this;
    }
  }, {
    key: "adjustText",
    value: function adjustText(selector) {
      var textLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var textAnchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'start';
      this.adjustTextQueries.push({
        selector: selector,
        textLength: textLength,
        textAnchor: textAnchor
      });
      return this;
    }
  }, {
    key: "adjustTextarea",
    value: function adjustTextarea(selector, width, height) {
      var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.2;
      var paddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
      var paddingY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
      var nowrap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var doc = new DOMParser().parseFromString(this.svg, 'text/html');
      var textElement = doc.querySelector(selector);
      if (!textElement) {
        return this;
      }
      var textSvg = textElement.outerHTML;
      // SVGElement doesn't have innerText
      // @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement
      var textContent = textElement.innerHTML.replace(new RegExp('^<tspan[^>]*>([\\S|\\s]*)</tspan>$'), '$1');
      var adjustedTextSvg = Object(_adjust_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg, textContent, width, height, lineHeight, paddingX, paddingY, nowrap);
      this.replace(textSvg, adjustedTextSvg);
      return this;
    }
  }, {
    key: "apply",
    value: function apply() {
      var _this = this;
      if (this.svg !== document.querySelector(this.selector).outerHTML) {
        document.querySelector(this.selector).outerHTML = this.svg;
      }
      this.adjustTextQueries.forEach(function (query) {
        var _$svg$getAttribute$sp, _$svg$getAttribute;
        // if viewBox is specified, Element.clientWidth and Element.getBoundingClientRect() return different values
        //   clientWidth: ???
        //   getBoundingClientRect(): pure pixel value
        // so this library uses getBoundingClientRect() and pre-calculated ratio to specify the width of some elements
        // @see https://stackoverflow.com/questions/15335926/how-to-use-the-svg-viewbox-attribute
        var $svg = document.querySelector(_this.selector);
        var viewBoxWidth = (_$svg$getAttribute$sp = (_$svg$getAttribute = $svg.getAttribute('viewBox')) === null || _$svg$getAttribute === void 0 ? void 0 : _$svg$getAttribute.split(/ +/)[2]) !== null && _$svg$getAttribute$sp !== void 0 ? _$svg$getAttribute$sp : null;
        var paperPixelRatio = viewBoxWidth ? parseFloat(viewBoxWidth) / $svg.getBoundingClientRect().width : 1;
        Object(_adjust_text__WEBPACK_IMPORTED_MODULE_0__["default"])(query.selector, {
          textLength: query.textLength,
          'text-anchor': query.textAnchor
        }, paperPixelRatio);
      });

      // initialize
      this.svg = document.querySelector(this.selector).outerHTML;
      this.adjustTextQueries = [];
    }
  }]);
  return SvgPaper;
}();


/***/ }),

/***/ "./js/src/utility/fix-text-transform.js":
/*!**********************************************!*\
  !*** ./js/src/utility/fix-text-transform.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (textSvg) {
  var fixedTextSvg = textSvg;

  // if <text> doesn't have transform="translate(x y)", just add it with (0 0)
  if (!fixedTextSvg.match(/<text [^>]*transform="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([^>]*)>'), '<text$1 transform="translate(0 0)">');
  }

  // if <tspan> doesn't have x="" y="", just add it with x="0" y="0"
  if (!fixedTextSvg.match(/<tspan [^>]*x="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 x="0">');
  }
  if (!fixedTextSvg.match(/<tspan [^>]*y="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 y="0">');
  }

  // copy x from <tspan x=""> and add it to <text transform="translate(x y)">
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((\\S+)\\s+(.+)\\)"([^>]*)>\s*<tspan([^>]+)x="([^"]+)"'), '<text$1transform="translate(###$2+$6### $3)"$4><tspan$5x="0"');
  var expression1 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(###(.+)###.+\\)"'))[1];
  var x = expression1.match(/\d+\+\d+/) ? eval(expression1) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\(###.+###(.+)\\)"'), "<text$1transform=\"translate(".concat(x, "$2)\""));

  // copy y from <tspan y=""> and add it to <text transform="translate(x y)">
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)\\s+(\\S+)\\)"([^>]*)>\s*<tspan([^>]+)y="([^"]+)"'), '<text$1transform="translate($2 ###$3+$6###)"$4><tspan$5y="0"');
  var expression2 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(.+###(.+)###\\)"'))[1];
  var y = expression2.match(/\d+\+\d+/) ? eval(expression2) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)###.+###\\)"'), "<text$1transform=\"translate($2".concat(y, ")\""));
  return fixedTextSvg;
});

/***/ }),

/***/ "./js/src/utility/split-string-by-width.js":
/*!*************************************************!*\
  !*** ./js/src/utility/split-string-by-width.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-string-by-width */ "./js/src/utility/sub-string-by-width.js");

/* harmony default export */ __webpack_exports__["default"] = (function (string, width) {
  var splits = [];
  while (true) {
    var split = Object(_sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(string, 0, width);
    splits.push(split);
    string = string.replace(split, '');
    if (!string) {
      break;
    }
  }
  return splits;
});

/***/ }),

/***/ "./js/src/utility/sub-string-by-width.js":
/*!***********************************************!*\
  !*** ./js/src/utility/sub-string-by-width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-width */ "./node_modules/string-width/index.js");
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_width__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (string, start, width) {
  var currentWidth = 0;
  var subString = '';
  for (var i = start;; i++) {
    var _char = string.substr(i, 1);
    currentWidth += string_width__WEBPACK_IMPORTED_MODULE_0___default()(_char);
    if (currentWidth <= width && i <= string.length) {
      subString += _char;
    }
    if (currentWidth >= width || i >= string.length) {
      return subString;
    }
  }
});

/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$onlyFirst = _ref.onlyFirst,
    onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;
  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

/***/ }),

/***/ "./node_modules/emoji-regex/index.js":
/*!*******************************************!*\
  !*** ./node_modules/emoji-regex/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

/***/ }),

/***/ "./node_modules/is-fullwidth-code-point/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/is-fullwidth-code-point/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable yoda */


var isFullwidthCodePoint = function isFullwidthCodePoint(codePoint) {
  if (Number.isNaN(codePoint)) {
    return false;
  }

  // Code points are derived from:
  // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
  if (codePoint >= 0x1100 && (codePoint <= 0x115F ||
  // Hangul Jamo
  codePoint === 0x2329 ||
  // LEFT-POINTING ANGLE BRACKET
  codePoint === 0x232A ||
  // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F ||
  // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  0x3250 <= codePoint && codePoint <= 0x4DBF ||
  // CJK Unified Ideographs .. Yi Radicals
  0x4E00 <= codePoint && codePoint <= 0xA4C6 ||
  // Hangul Jamo Extended-A
  0xA960 <= codePoint && codePoint <= 0xA97C ||
  // Hangul Syllables
  0xAC00 <= codePoint && codePoint <= 0xD7A3 ||
  // CJK Compatibility Ideographs
  0xF900 <= codePoint && codePoint <= 0xFAFF ||
  // Vertical Forms
  0xFE10 <= codePoint && codePoint <= 0xFE19 ||
  // CJK Compatibility Forms .. Small Form Variants
  0xFE30 <= codePoint && codePoint <= 0xFE6B ||
  // Halfwidth and Fullwidth Forms
  0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 ||
  // Kana Supplement
  0x1B000 <= codePoint && codePoint <= 0x1B001 ||
  // Enclosed Ideographic Supplement
  0x1F200 <= codePoint && codePoint <= 0x1F251 ||
  // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  0x20000 <= codePoint && codePoint <= 0x3FFFD)) {
    return true;
  }
  return false;
};
module.exports = isFullwidthCodePoint;
module.exports["default"] = isFullwidthCodePoint;

/***/ }),

/***/ "./node_modules/string-width/index.js":
/*!********************************************!*\
  !*** ./node_modules/string-width/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");
var isFullwidthCodePoint = __webpack_require__(/*! is-fullwidth-code-point */ "./node_modules/is-fullwidth-code-point/index.js");
var emojiRegex = __webpack_require__(/*! emoji-regex */ "./node_modules/emoji-regex/index.js");
var stringWidth = function stringWidth(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return 0;
  }
  string = stripAnsi(string);
  if (string.length === 0) {
    return 0;
  }
  string = string.replace(emojiRegex(), '  ');
  var width = 0;
  for (var i = 0; i < string.length; i++) {
    var code = string.codePointAt(i);

    // Ignore control characters
    if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
      continue;
    }

    // Ignore combining characters
    if (code >= 0x300 && code <= 0x36F) {
      continue;
    }

    // Surrogates
    if (code > 0xFFFF) {
      i++;
    }
    width += isFullwidthCodePoint(code) ? 2 : 1;
  }
  return width;
};
module.exports = stringWidth;
// TODO: remove this in the next major version
module.exports["default"] = stringWidth;

/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");
module.exports = function (string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

/***/ }),

/***/ "./scss/svg-paper.scss":
/*!*****************************!*\
  !*** ./scss/svg-paper.scss ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./scss/svg-paper.scss ./js/src/svg-paper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scss/svg-paper.scss */"./scss/svg-paper.scss");
module.exports = __webpack_require__(/*! ./js/src/svg-paper.js */"./js/src/svg-paper.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9lbW9qaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9pcy1mdWxsd2lkdGgtY29kZS1wb2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpbmctd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL3Njc3Mvc3ZnLXBhcGVyLnNjc3M/ZjlkMiJdLCJuYW1lcyI6WyJzZWxlY3RvciIsImNvbmZpZyIsInBhcGVyUGl4ZWxSYXRpbyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIiR0aGlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ0ZXh0TGVuZ3RoIiwic2V0QXR0cmlidXRlIiwidyIsInBhcnNlRmxvYXQiLCJ4IiwieSIsImdldEF0dHJpYnV0ZSIsIm1hdGNoIiwiY29uY2F0IiwidGV4dFN2ZyIsInRleHRDb250ZW50IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJub3dyYXAiLCJSZWdFeHAiLCJjb25zb2xlIiwiZXJyb3IiLCJvcmlnaW5hbEZvbnRTaXplIiwicGFyc2VJbnQiLCJmb250U2l6ZSIsInBoeXNpY2FsTGluZXMiLCJzcGxpdCIsImxvZ2ljYWxMaW5lcyIsIl9sb29wIiwibWF4Um93cyIsIk1hdGgiLCJmbG9vciIsIm1heENvbHVtbnMiLCJmb3JFYWNoIiwibGluZSIsInNwbGl0U3RyaW5nQnlXaWR0aCIsImFkanVzdFkiLCJhZGp1c3RlZFRleHRTdmciLCJmaXhUZXh0VHJhbnNmb3JtIiwicmVwbGFjZSIsInRzcGFuIiwiaSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiciIsImUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJOdW1iZXIiLCJTdmdQYXBlciIsIkVycm9yIiwic3ZnIiwib3V0ZXJIVE1MIiwiYWRqdXN0VGV4dFF1ZXJpZXMiLCJ2YWx1ZSIsInNlYXJjaCIsInJlcGxhY2VtZW50Iiwic291cmNlIiwiZmxhZ3MiLCJwcm9wZXJ0eSIsImRvYyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInRleHRFbGVtZW50IiwicmVwbGFjZWRUZXh0U3ZnIiwiYWRqdXN0VGV4dCIsInRleHRBbmNob3IiLCJwdXNoIiwiYWRqdXN0VGV4dGFyZWEiLCJpbm5lckhUTUwiLCJhcHBseSIsIl90aGlzIiwicXVlcnkiLCJfJHN2ZyRnZXRBdHRyaWJ1dGUkc3AiLCJfJHN2ZyRnZXRBdHRyaWJ1dGUiLCIkc3ZnIiwidmlld0JveFdpZHRoIiwiZml4ZWRUZXh0U3ZnIiwiZXhwcmVzc2lvbjEiLCJldmFsIiwiZXhwcmVzc2lvbjIiLCJzdHJpbmciLCJzcGxpdHMiLCJzdWJTdHJpbmdCeVdpZHRoIiwic3RhcnQiLCJjdXJyZW50V2lkdGgiLCJzdWJTdHJpbmciLCJjaGFyIiwic3Vic3RyIiwic3RyaW5nV2lkdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX3JlZiIsIl9yZWYkb25seUZpcnN0Iiwib25seUZpcnN0IiwicGF0dGVybiIsImpvaW4iLCJpc0Z1bGx3aWR0aENvZGVQb2ludCIsImNvZGVQb2ludCIsImlzTmFOIiwic3RyaXBBbnNpIiwicmVxdWlyZSIsImVtb2ppUmVnZXgiLCJjb2RlIiwiY29kZVBvaW50QXQiLCJhbnNpUmVnZXgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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RTtJQUN2QyxJQUFNdUYsSUFBSSxHQUFHdEIsTUFBTSxDQUFDdUIsV0FBVyxDQUFDeEYsQ0FBQyxDQUFDOztJQUVsQztJQUNBLElBQUl1RixJQUFJLElBQUksSUFBSSxJQUFLQSxJQUFJLElBQUksSUFBSSxJQUFJQSxJQUFJLElBQUksSUFBSyxFQUFFO01BQ25EO0lBQ0Q7O0lBRUE7SUFDQSxJQUFJQSxJQUFJLElBQUksS0FBSyxJQUFJQSxJQUFJLElBQUksS0FBSyxFQUFFO01BQ25DO0lBQ0Q7O0lBRUE7SUFDQSxJQUFJQSxJQUFJLEdBQUcsTUFBTSxFQUFFO01BQ2xCdkYsQ0FBQyxFQUFFO0lBQ0o7SUFFQXZDLEtBQUssSUFBSXdILG9CQUFvQixDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUM1QztFQUVBLE9BQU85SCxLQUFLO0FBQ2IsQ0FBQztBQUVEaUgsTUFBTSxDQUFDQyxPQUFPLEdBQUdGLFdBQVc7QUFDNUI7QUFDQUMsTUFBTSxDQUFDQyxPQUFPLFdBQVEsR0FBR0YsV0FBVyxDOzs7Ozs7Ozs7Ozs7QUM5Q3ZCOztBQUNiLElBQU1nQixTQUFTLEdBQUdKLG1CQUFPLENBQUMsc0RBQVksQ0FBQztBQUV2Q1gsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBQVYsTUFBTTtFQUFBLE9BQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsR0FBR0EsTUFBTSxDQUFDbkUsT0FBTyxDQUFDMkYsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBR3hCLE1BQU07QUFBQSxFOzs7Ozs7Ozs7Ozs7QUNIaEc7QUFBQSIsImZpbGUiOiJzdmctcGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvciwgY29uZmlnLCBwYXBlclBpeGVsUmF0aW8gPSAxKSA9PiB7XG4gIGNvbnN0ICR0aGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuICBpZiAoISR0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBzaHJpbmsgdGV4dCBlbGVtZW50IHRvIHNwZWNpZmllZCB3aWR0aFxuICBpZiAoISFjb25maWdbJ3RleHRMZW5ndGgnXSkge1xuICAgIC8vIGZvciBmaXJlZm94XG4gICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGllbnRXaWR0aFxuICAgICR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBpZiAoJHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiBwYXBlclBpeGVsUmF0aW8gPiBjb25maWcudGV4dExlbmd0aCkge1xuICAgICAgJHRoaXMucXVlcnlTZWxlY3RvcigndHNwYW4nKS5zZXRBdHRyaWJ1dGUoJ3RleHRMZW5ndGgnLCBjb25maWcudGV4dExlbmd0aClcbiAgICAgICR0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RzcGFuJykuc2V0QXR0cmlidXRlKCdsZW5ndGhBZGp1c3QnLCAnc3BhY2luZ0FuZEdseXBocycpXG5cbiAgICAgIC8vIGZvciBmaXJlZm94XG4gICAgICAvLyBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg5MDY5MlxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0TGVuZ3RoJywgY29uZmlnLnRleHRMZW5ndGgpXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ2xlbmd0aEFkanVzdCcsICdzcGFjaW5nQW5kR2x5cGhzJylcbiAgICB9XG4gIH1cblxuICAvLyBhbGlnbm1lbnRcbiAgaWYgKCEhY29uZmlnWyd0ZXh0LWFuY2hvciddICYmIGNvbmZpZ1sndGV4dC1hbmNob3InXSAhPT0gJ3N0YXJ0Jykge1xuICAgIGNvbnN0IHcgPSBwYXJzZUZsb2F0KGNvbmZpZ1sndGV4dExlbmd0aCddKVxuICAgIGxldCB4ID0gMFxuICAgIGxldCB5ID0gMFxuICAgIGlmICgkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpKSB7XG4gICAgICB4ID0gcGFyc2VGbG9hdCgkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLm1hdGNoKC90cmFuc2xhdGVcXCgoXFxTKykgLitcXCkvKVsxXSlcbiAgICAgIHkgPSBwYXJzZUZsb2F0KCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykubWF0Y2goL3RyYW5zbGF0ZVxcKFxcUysgKC4rKVxcKS8pWzFdKVxuICAgIH1cblxuICAgIGlmIChjb25maWdbJ3RleHQtYW5jaG9yJ10gPT09ICdtaWRkbGUnKSB7XG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4ICsgKHcgLyAyKX0gJHt5fSlgKVxuICAgIH1cblxuICAgIGlmIChjb25maWdbJ3RleHQtYW5jaG9yJ10gPT09ICdlbmQnKSB7XG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4ICsgd30gJHt5fSlgKVxuICAgIH1cblxuICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCBjb25maWdbJ3RleHQtYW5jaG9yJ10pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgc3BsaXRTdHJpbmdCeVdpZHRoIGZyb20gJy4vdXRpbGl0eS9zcGxpdC1zdHJpbmctYnktd2lkdGgnXG5pbXBvcnQgZml4VGV4dFRyYW5zZm9ybSBmcm9tICcuL3V0aWxpdHkvZml4LXRleHQtdHJhbnNmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCAodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpID0+IHtcbiAgaWYgKCF0ZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0IFtePl0qZm9udC1zaXplPVwiXFxcXGQrXCJbXj5dKj48dHNwYW4oIFtePl0qPnw+KVtePD5dKjwvdHNwYW4+PC90ZXh0PicpKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc3ZnIHN0cmluZyBvZiB0ZXh0IGVsZW1lbnQnLCB0ZXh0U3ZnKVxuICAgIHJldHVybiB0ZXh0U3ZnXG4gIH1cblxuICBjb25zdCBvcmlnaW5hbEZvbnRTaXplID0gcGFyc2VJbnQodGV4dFN2Zy5tYXRjaCgvLitmb250LXNpemU9XCIoXFxkKylcIi4rLylbMV0pXG4gIGxldCBmb250U2l6ZSA9IG9yaWdpbmFsRm9udFNpemVcblxuICAvLyBmaW5kIHRoZSByaWdodC1zaXplIGZvbnQtc2l6ZVxuICBjb25zdCBwaHlzaWNhbExpbmVzID0gdGV4dENvbnRlbnQuc3BsaXQoXCJcXG5cIilcbiAgbGV0IGxvZ2ljYWxMaW5lcyA9IFtdXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbGV0IG1heFJvd3MgPSBNYXRoLmZsb29yKChoZWlnaHQgLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1kpKSAvIChmb250U2l6ZSAqIGxpbmVIZWlnaHQpKVxuICAgIGxldCBtYXhDb2x1bW5zID0gTWF0aC5mbG9vcigod2lkdGggLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1gpKSAvIGZvbnRTaXplKSAvLyBkb2Vzbid0IGNhcmUgYWJvdXQgcHJvcG9ydGlvbmFsIGZvbnRcblxuICAgIGlmIChub3dyYXApIHtcbiAgICAgIGxvZ2ljYWxMaW5lcyA9IHBoeXNpY2FsTGluZXNcbiAgICB9IGVsc2Uge1xuICAgICAgbG9naWNhbExpbmVzID0gW11cbiAgICAgIHBoeXNpY2FsTGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbG9naWNhbExpbmVzID0gbG9naWNhbExpbmVzLmNvbmNhdChzcGxpdFN0cmluZ0J5V2lkdGgobGluZSwgbWF4Q29sdW1ucyAqIDIpKSAvLyAyIHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMgY2FuIGJlIHBsYWNlZCBpbiAxIGNvbHVtblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobG9naWNhbExpbmVzLmxlbmd0aCA+IG1heFJvd3MpIHtcbiAgICAgIGZvbnRTaXplICo9IDAuOTVcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyByYWlzZSB5LWNvb3JkaW5hdGUgdXAgYmVjYXVzZSB5LWNvb3JkaW5hdGUgb2YgPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj4gb3IgPHRzcGFuIHk9XCJcIj4gaXMgb24gbG93ZXIgYmFzZSBvZiB0ZXh0IG9iamVjdFxuICBjb25zdCBhZGp1c3RZID0gZm9udFNpemUgLSBvcmlnaW5hbEZvbnRTaXplXG5cbiAgbGV0IGFkanVzdGVkVGV4dFN2ZyA9IGZpeFRleHRUcmFuc2Zvcm0odGV4dFN2ZylcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKC58XFxcXHMpKzwvdGV4dD4nKSwgJycpXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJ2ZvbnQtc2l6ZT1cIlxcXFxkK1wiJyksIGBmb250LXNpemU9XCIke2ZvbnRTaXplfVwiYClcbiAgYWRqdXN0ZWRUZXh0U3ZnICs9ICd7dHNwYW59PC90ZXh0PidcblxuICBsZXQgdHNwYW4gPSAnJ1xuICBjb25zdCB4ID0gZm9udFNpemUgKiBwYWRkaW5nWFxuICBsb2dpY2FsTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xuICAgIGNvbnN0IHkgPSBhZGp1c3RZICsgZm9udFNpemUgKiAocGFkZGluZ1kgKyAoaSAqIGxpbmVIZWlnaHQpKVxuICAgIHRzcGFuICs9IGA8dHNwYW4geD1cIiR7eH1cIiB5PVwiJHt5fVwiPiR7bGluZX08L3RzcGFuPmBcbiAgfSlcblxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZSgne3RzcGFufScsIHRzcGFuKVxuXG4gIHJldHVybiBhZGp1c3RlZFRleHRTdmdcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgYWRqdXN0VGV4dCBmcm9tICcuL2FkanVzdC10ZXh0J1xuaW1wb3J0IGFkanVzdFRleHRhcmVhIGZyb20gJy4vYWRqdXN0LXRleHRhcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmdQYXBlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJy5wYXBlciBzdmcnKSB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNlbGVjdG9yJylcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLm91dGVySFRNTC5yZXBsYWNlKC9bXFxyfFxcbl0rL2csIFwiXFxuXCIpXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcyA9IFtdXG4gIH1cblxuICByZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcbiAgICBpZiAoc2VhcmNoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBzZWFyY2ggPSBuZXcgUmVnRXhwKHNlYXJjaC5zb3VyY2UsIHNlYXJjaC5mbGFncy5yZXBsYWNlKC9nL2csICcnKSArICdnJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcblxuICAgICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjZXNjYXBpbmdcbiAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bLiorP149IToke30oKXxbXFxdXFwvXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgICBzZWFyY2ggPSBuZXcgUmVnRXhwKHNlYXJjaCwgJ2cnKVxuICAgIH1cblxuICAgIC8vIGNhc3QgdG8gc3RyaW5nXG4gICAgcmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudCAhPT0gdW5kZWZpbmVkICYmIHJlcGxhY2VtZW50ICE9PSBudWxsID8gcmVwbGFjZW1lbnQgKyAnJyA6ICcnXG5cbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcblxuICAgIHRoaXMuc3ZnID0gdGhpcy5zdmcucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnN2ZywgJ3RleHQvaHRtbCcpXG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBpZiAoIXRleHRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRTdmcgPSB0ZXh0RWxlbWVudC5vdXRlckhUTUxcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKVxuICAgIGNvbnN0IHJlcGxhY2VkVGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuICAgIHRoaXMucmVwbGFjZSh0ZXh0U3ZnLCByZXBsYWNlZFRleHRTdmcpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dChzZWxlY3RvciwgdGV4dExlbmd0aCA9IG51bGwsIHRleHRBbmNob3IgPSAnc3RhcnQnKSB7XG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcy5wdXNoKHtzZWxlY3RvciwgdGV4dExlbmd0aCwgdGV4dEFuY2hvcn0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dGFyZWEoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3ZnLCAndGV4dC9odG1sJylcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGlmICghdGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuICAgIC8vIFNWR0VsZW1lbnQgZG9lc24ndCBoYXZlIGlubmVyVGV4dFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NWR0VsZW1lbnRcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRleHRFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKG5ldyBSZWdFeHAoJ148dHNwYW5bXj5dKj4oW1xcXFxTfFxcXFxzXSopPC90c3Bhbj4kJyksICckMScpXG5cbiAgICBjb25zdCBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RUZXh0YXJlYSh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCwgcGFkZGluZ1gsIHBhZGRpbmdZLCBub3dyYXApXG5cbiAgICB0aGlzLnJlcGxhY2UodGV4dFN2ZywgYWRqdXN0ZWRUZXh0U3ZnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFwcGx5KCkge1xuICAgIGlmICh0aGlzLnN2ZyAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUwpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MID0gdGhpcy5zdmdcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzLmZvckVhY2gocXVlcnkgPT4ge1xuICAgICAgLy8gaWYgdmlld0JveCBpcyBzcGVjaWZpZWQsIEVsZW1lbnQuY2xpZW50V2lkdGggYW5kIEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgcmV0dXJuIGRpZmZlcmVudCB2YWx1ZXNcbiAgICAgIC8vICAgY2xpZW50V2lkdGg6ID8/P1xuICAgICAgLy8gICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKTogcHVyZSBwaXhlbCB2YWx1ZVxuICAgICAgLy8gc28gdGhpcyBsaWJyYXJ5IHVzZXMgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYW5kIHByZS1jYWxjdWxhdGVkIHJhdGlvIHRvIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHNvbWUgZWxlbWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTUzMzU5MjYvaG93LXRvLXVzZS10aGUtc3ZnLXZpZXdib3gtYXR0cmlidXRlXG4gICAgICBjb25zdCAkc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgICAgY29uc3Qgdmlld0JveFdpZHRoID0gJHN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKT8uc3BsaXQoLyArLylbMl0gPz8gbnVsbFxuICAgICAgY29uc3QgcGFwZXJQaXhlbFJhdGlvID0gdmlld0JveFdpZHRoID8gcGFyc2VGbG9hdCh2aWV3Qm94V2lkdGgpIC8gJHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDFcblxuICAgICAgYWRqdXN0VGV4dChxdWVyeS5zZWxlY3Rvciwge1xuICAgICAgICB0ZXh0TGVuZ3RoOiBxdWVyeS50ZXh0TGVuZ3RoLFxuICAgICAgICAndGV4dC1hbmNob3InOiBxdWVyeS50ZXh0QW5jaG9yLFxuICAgICAgfSwgcGFwZXJQaXhlbFJhdGlvKVxuICAgIH0pXG5cbiAgICAvLyBpbml0aWFsaXplXG4gICAgdGhpcy5zdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTFxuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMgPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAodGV4dFN2ZykgPT4ge1xuICBsZXQgZml4ZWRUZXh0U3ZnID0gdGV4dFN2Z1xuXG4gIC8vIGlmIDx0ZXh0PiBkb2Vzbid0IGhhdmUgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIiwganVzdCBhZGQgaXQgd2l0aCAoMCAwKVxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRleHQgW14+XSp0cmFuc2Zvcm09XCJbXlwiXSpcIltePl0qPi8pKSB7XG4gICAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW14+XSopPicpLCAnPHRleHQkMSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiPicpXG4gIH1cblxuICAvLyBpZiA8dHNwYW4+IGRvZXNuJ3QgaGF2ZSB4PVwiXCIgeT1cIlwiLCBqdXN0IGFkZCBpdCB3aXRoIHg9XCIwXCIgeT1cIjBcIlxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRzcGFuIFtePl0qeD1cIlteXCJdKlwiW14+XSo+LykpIHtcbiAgICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oW14+XSopPicpLCAnPHRzcGFuJDEgeD1cIjBcIj4nKVxuICB9XG4gIGlmICghZml4ZWRUZXh0U3ZnLm1hdGNoKC88dHNwYW4gW14+XSp5PVwiW15cIl0qXCJbXj5dKj4vKSkge1xuICAgIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0c3BhbihbXj5dKik+JyksICc8dHNwYW4kMSB5PVwiMFwiPicpXG4gIH1cblxuICAvLyBjb3B5IHggZnJvbSA8dHNwYW4geD1cIlwiPiBhbmQgYWRkIGl0IHRvIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCI+XG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoXFxcXFMrKVxcXFxzKyguKylcXFxcKVwiKFtePl0qKT5cXHMqPHRzcGFuKFtePl0rKXg9XCIoW15cIl0rKVwiJyksICc8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCMjIyQyKyQ2IyMjICQzKVwiJDQ+PHRzcGFuJDV4PVwiMFwiJylcbiAgY29uc3QgZXhwcmVzc2lvbjEgPSBmaXhlZFRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHRbXFxcXHNcXFxcU10rdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgjIyMoLispIyMjLitcXFxcKVwiJykpWzFdXG4gIGNvbnN0IHggPSBleHByZXNzaW9uMS5tYXRjaCgvXFxkK1xcK1xcZCsvKSA/IGV2YWwoZXhwcmVzc2lvbjEpIDogMFxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoIyMjLisjIyMoLispXFxcXClcIicpLCBgPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9JDIpXCJgKVxuXG4gIC8vIGNvcHkgeSBmcm9tIDx0c3BhbiB5PVwiXCI+IGFuZCBhZGQgaXQgdG8gPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj5cbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCguKylcXFxccysoXFxcXFMrKVxcXFwpXCIoW14+XSopPlxccyo8dHNwYW4oW14+XSspeT1cIihbXlwiXSspXCInKSwgJzx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJDIgIyMjJDMrJDYjIyMpXCIkND48dHNwYW4kNXk9XCIwXCInKVxuICBjb25zdCBleHByZXNzaW9uMiA9IGZpeGVkVGV4dFN2Zy5tYXRjaChuZXcgUmVnRXhwKCc8dGV4dFtcXFxcc1xcXFxTXSt0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKC4rIyMjKC4rKSMjI1xcXFwpXCInKSlbMV1cbiAgY29uc3QgeSA9IGV4cHJlc3Npb24yLm1hdGNoKC9cXGQrXFwrXFxkKy8pID8gZXZhbChleHByZXNzaW9uMikgOiAwXG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoLispIyMjLisjIyNcXFxcKVwiJyksIGA8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCQyJHt5fSlcImApXG5cbiAgcmV0dXJuIGZpeGVkVGV4dFN2Z1xufVxuIiwiaW1wb3J0IHN1YlN0cmluZ0J5V2lkdGggZnJvbSAnLi9zdWItc3RyaW5nLWJ5LXdpZHRoJ1xuXG5leHBvcnQgZGVmYXVsdCAoc3RyaW5nLCB3aWR0aCkgPT4ge1xuICBsZXQgc3BsaXRzID0gW11cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCBzcGxpdCA9IHN1YlN0cmluZ0J5V2lkdGgoc3RyaW5nLCAwLCB3aWR0aClcbiAgICBzcGxpdHMucHVzaChzcGxpdClcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShzcGxpdCwgJycpXG4gICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNwbGl0c1xufVxuIiwiaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgKHN0cmluZywgc3RhcnQsIHdpZHRoKSA9PiB7XG4gIGxldCBjdXJyZW50V2lkdGggPSAwXG4gIGxldCBzdWJTdHJpbmcgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgOyBpKyspIHtcbiAgICBjb25zdCBjaGFyID0gc3RyaW5nLnN1YnN0cihpLCAxKVxuICAgIGN1cnJlbnRXaWR0aCArPSBzdHJpbmdXaWR0aChjaGFyKVxuICAgIGlmIChjdXJyZW50V2lkdGggPD0gd2lkdGggJiYgaSA8PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICBzdWJTdHJpbmcgKz0gY2hhclxuICAgIH1cbiAgICBpZiAoY3VycmVudFdpZHRoID49IHdpZHRoIHx8IGkgPj0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHN1YlN0cmluZ1xuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHQnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KScsXG5cdFx0Jyg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnRxcnk9Pjx+XSkpJ1xuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG4gIHJldHVybiAvXFx1RDgzQ1xcdURGRjRcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyKD86XFx1REI0MFxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURCNDBcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQjQwXFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0Z8XFx1RDgzRFxcdURDNjgoPzpcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NcXHVERkZCfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY4fCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRnxcXHVEODNEW1xcdURDNjZcXHVEQzY3XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8KD86XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pXFx1RkUwRnxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpXFx1RDgzQ1xcdURGRkJ8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFxcdURDNDFcXHVGRTBGXFx1MjAwRFxcdUQ4M0RcXHVEREU4fFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKXwoPzooPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KVxcdUZFMEZ8XFx1RDgzRFxcdURDNkZ8XFx1RDgzRVtcXHVERDNDXFx1RERERVxcdUREREZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfFxcdTIwMERbXFx1MjY0MFxcdTI2NDJdKXxcXHVEODNDXFx1REZGNFxcdTIwMERcXHUyNjIwKVxcdUZFMEZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHVEODNDXFx1REYwOHxcXHVEODNEXFx1REMxNVxcdTIwMERcXHVEODNFXFx1RERCQXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N3xcXHVEODNDXFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzQ1xcdURERjZcXHVEODNDXFx1RERFNnxbI1xcKjAtOV1cXHVGRTBGXFx1MjBFM3xcXHVEODNDXFx1RERFNyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERjkoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXSl8XFx1RDgzQ1xcdURERUEoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXSl8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREY3KD86XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU2KD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXSl8XFx1RDgzQ1xcdURERjAoPzpcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUQoPzpcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV0pfFxcdUQ4M0NcXHVEREU5KD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERUMoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGOCg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVCKD86XFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddKXxcXHVEODNDXFx1RERGNSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERkIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdKXxcXHVEODNDXFx1RERGMyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXSl8XFx1RDgzQ1xcdURERTgoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGNVxcdURERjdcXHVEREZBLVxcdURERkZdKXxcXHVEODNDXFx1RERGMSg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXSl8XFx1RDgzQ1xcdURERkYoPzpcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ10pfFxcdUQ4M0NcXHVEREZDKD86XFx1RDgzQ1tcXHVEREVCXFx1RERGOF0pfFxcdUQ4M0NcXHVEREZBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUUoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVGKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjYxRFxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMlxcdURGQzddfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzBcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDQUFcXHVERDc0XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxQ1xcdUREMUVcXHVERDFGXFx1REQzMC1cXHVERDM2XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMi1cXHVEREQ1XSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI1RkVcXHUyNjE0XFx1MjYxNVxcdTI2NDgtXFx1MjY1M1xcdTI2N0ZcXHUyNjkzXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RjJcXHUyNkYzXFx1MjZGNVxcdTI2RkFcXHUyNkZEXFx1MjcwNVxcdTI3MEFcXHUyNzBCXFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY3Q1xcdURGN0UtXFx1REY5M1xcdURGQTAtXFx1REZDQVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjRcXHVERkY4LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQzNFXFx1REM0MFxcdURDNDItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREN0FcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREZCLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNDXFx1REVEMC1cXHVERUQyXFx1REVENVxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pfCg/OlsjXFwqMC05XFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0U5LVxcdTIzRjNcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkItXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYxRFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTItXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkM4XFx1MjZDRVxcdTI2Q0ZcXHUyNkQxXFx1MjZEM1xcdTI2RDRcXHUyNkU5XFx1MjZFQVxcdTI2RjAtXFx1MjZGNVxcdTI2RjctXFx1MjZGQVxcdTI2RkRcXHUyNzAyXFx1MjcwNVxcdTI3MDgtXFx1MjcwRFxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MjhcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc2M1xcdTI3NjRcXHUyNzk1LVxcdTI3OTdcXHUyN0ExXFx1MjdCMFxcdTI3QkZcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUwMlxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjFcXHVERjI0LVxcdURGOTNcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUUtXFx1REZGMFxcdURGRjMtXFx1REZGNVxcdURGRjctXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDRkRcXHVEQ0ZGLVxcdUREM0RcXHVERDQ5LVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDZGXFx1REQ3MFxcdURENzMtXFx1REQ3QVxcdUREODdcXHVERDhBLVxcdUREOERcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkEtXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0ItXFx1REVEMlxcdURFRDVcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVFQlxcdURFRUNcXHVERUYwXFx1REVGMy1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pXFx1RkUwRnwoPzpbXFx1MjYxRFxcdTI2RjlcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzItXFx1REZDNFxcdURGQzdcXHVERkNBLVxcdURGQ0NdfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2LVxcdURDNzhcXHVEQzdDXFx1REM4MS1cXHVEQzgzXFx1REM4NS1cXHVEQzg3XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3NFxcdURENzVcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0NS1cXHVERTQ3XFx1REU0Qi1cXHVERTRGXFx1REVBM1xcdURFQjQtXFx1REVCNlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDI2XFx1REQzMC1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERCNVxcdUREQjZcXHVEREI4XFx1RERCOVxcdUREQkJcXHVERENELVxcdUREQ0ZcXHVEREQxLVxcdURERERdKS9nO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoTnVtYmVyLmlzTmFOKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDb2RlIHBvaW50cyBhcmUgZGVyaXZlZCBmcm9tOlxuXHQvLyBodHRwOi8vd3d3LnVuaXgub3JnL1B1YmxpYy9VTklEQVRBL0Vhc3RBc2lhbldpZHRoLnR4dFxuXHRpZiAoXG5cdFx0Y29kZVBvaW50ID49IDB4MTEwMCAmJiAoXG5cdFx0XHRjb2RlUG9pbnQgPD0gMHgxMTVGIHx8IC8vIEhhbmd1bCBKYW1vXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyOSB8fCAvLyBMRUZULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzJBIHx8IC8vIFJJR0hULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdC8vIENKSyBSYWRpY2FscyBTdXBwbGVtZW50IC4uIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHNcblx0XHRcdCgweDJFODAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDMyNDcgJiYgY29kZVBvaW50ICE9PSAweDMwM0YpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzIC4uIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcblx0XHRcdCgweDMyNTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDREQkYpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIC4uIFlpIFJhZGljYWxzXG5cdFx0XHQoMHg0RTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBNEM2KSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQVxuXHRcdFx0KDB4QTk2MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTk3QykgfHxcblx0XHRcdC8vIEhhbmd1bCBTeWxsYWJsZXNcblx0XHRcdCgweEFDMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEQ3QTMpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBJZGVvZ3JhcGhzXG5cdFx0XHQoMHhGOTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGQUZGKSB8fFxuXHRcdFx0Ly8gVmVydGljYWwgRm9ybXNcblx0XHRcdCgweEZFMTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFMTkpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBGb3JtcyAuLiBTbWFsbCBGb3JtIFZhcmlhbnRzXG5cdFx0XHQoMHhGRTMwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTZCKSB8fFxuXHRcdFx0Ly8gSGFsZndpZHRoIGFuZCBGdWxsd2lkdGggRm9ybXNcblx0XHRcdCgweEZGMDEgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGNjApIHx8XG5cdFx0XHQoMHhGRkUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRkU2KSB8fFxuXHRcdFx0Ly8gS2FuYSBTdXBwbGVtZW50XG5cdFx0XHQoMHgxQjAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUIwMDEpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBJZGVvZ3JhcGhpYyBTdXBwbGVtZW50XG5cdFx0XHQoMHgxRjIwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUYyNTEpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBCIC4uIFRlcnRpYXJ5IElkZW9ncmFwaGljIFBsYW5lXG5cdFx0XHQoMHgyMDAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4M0ZGRkQpXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IHJlcXVpcmUoJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50Jyk7XG5jb25zdCBlbW9qaVJlZ2V4ID0gcmVxdWlyZSgnZW1vamktcmVnZXgnKTtcblxuY29uc3Qgc3RyaW5nV2lkdGggPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaXBBbnNpKHN0cmluZyk7XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGVtb2ppUmVnZXgoKSwgJyAgJyk7XG5cblx0bGV0IHdpZHRoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvZGUgPSBzdHJpbmcuY29kZVBvaW50QXQoaSk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPD0gMHgxRiB8fCAoY29kZSA+PSAweDdGICYmIGNvZGUgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlID49IDB4MzAwICYmIGNvZGUgPD0gMHgzNkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFN1cnJvZ2F0ZXNcblx0XHRpZiAoY29kZSA+IDB4RkZGRikge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGlzRnVsbHdpZHRoQ29kZVBvaW50KGNvZGUpID8gMiA6IDE7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1dpZHRoO1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ1dpZHRoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyA/IHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCgpLCAnJykgOiBzdHJpbmc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9