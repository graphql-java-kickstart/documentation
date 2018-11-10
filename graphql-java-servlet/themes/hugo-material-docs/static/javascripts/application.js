(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var index = typeof fetch == 'function' ? fetch.bind() : function (url, options) {
	options = options || {};
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials == 'include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var _keys = [],
			    all = [],
			    headers = {},
			    header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				_keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? header + "," + value : value;
			});

			return {
				ok: (request.status / 100 | 0) == 2, // 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function text() {
					return Promise.resolve(request.responseText);
				},
				json: function json() {
					return Promise.resolve(request.responseText).then(JSON.parse);
				},
				blob: function blob() {
					return Promise.resolve(new Blob([request.response]));
				},
				headers: {
					keys: function keys() {
						return _keys;
					},
					entries: function entries() {
						return all;
					},
					get: function get(n) {
						return headers[n.toLowerCase()];
					},
					has: function has(n) {
						return n.toLowerCase() in headers;
					}
				}
			};
		}
	});
};

exports.default = index;
//# sourceMappingURL=unfetch.es.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

var _promisePolyfill = __webpack_require__(15);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(20);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(22);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(23);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  /* Component: sidebar with navigation */
  new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]")));

  /* Component: sidebar with table of contents (missing on 404 page) */
  if (document.querySelector("[data-md-component=toc]")) new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]")));

  /* Load table of contents */
  _Material2.default.TableOfContents.render("#scrollspy");
  var blur = new _Material2.default.Nav.Blur("[data-md-component=toc] [href]");

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", blur));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (doc) {
          doc.location = "" + doc.permalink;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function () {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function CustomEvent(event, params) {
      var evt, origPrevent;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      origPrevent = evt.preventDefault;
      evt.preventDefault = function () {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function get() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _finally = __webpack_require__(19);

var _finally2 = _interopRequireDefault(_finally);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
    if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally2.default;

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

exports.default = Promise;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
}

exports.default = finallyConstructor;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["ClipboardJS"] = factory();else root["ClipboardJS"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // identity function for calling harmony imports with the correct context
            /******/__webpack_require__.i = function (value) {
                return value;
            };
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== "undefined") {
                    factory(module, require('select'));
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod, global.select);
                    global.clipboardAction = mod.exports;
                }
            })(this, function (module, _select) {
                'use strict';

                var _select2 = _interopRequireDefault(_select);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var ClipboardAction = function () {
                    /**
                     * @param {Object} options
                     */
                    function ClipboardAction(options) {
                        _classCallCheck(this, ClipboardAction);

                        this.resolveOptions(options);
                        this.initSelection();
                    }

                    /**
                     * Defines base properties passed from constructor.
                     * @param {Object} options
                     */

                    _createClass(ClipboardAction, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = options.action;
                            this.container = options.container;
                            this.emitter = options.emitter;
                            this.target = options.target;
                            this.text = options.text;
                            this.trigger = options.trigger;

                            this.selectedText = '';
                        }
                    }, {
                        key: 'initSelection',
                        value: function initSelection() {
                            if (this.text) {
                                this.selectFake();
                            } else if (this.target) {
                                this.selectTarget();
                            }
                        }
                    }, {
                        key: 'selectFake',
                        value: function selectFake() {
                            var _this = this;

                            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                            this.removeFake();

                            this.fakeHandlerCallback = function () {
                                return _this.removeFake();
                            };
                            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                            this.fakeElem = document.createElement('textarea');
                            // Prevent zooming on iOS
                            this.fakeElem.style.fontSize = '12pt';
                            // Reset box model
                            this.fakeElem.style.border = '0';
                            this.fakeElem.style.padding = '0';
                            this.fakeElem.style.margin = '0';
                            // Move element out of screen horizontally
                            this.fakeElem.style.position = 'absolute';
                            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                            // Move element to the same position vertically
                            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = yPosition + 'px';

                            this.fakeElem.setAttribute('readonly', '');
                            this.fakeElem.value = this.text;

                            this.container.appendChild(this.fakeElem);

                            this.selectedText = (0, _select2.default)(this.fakeElem);
                            this.copyText();
                        }
                    }, {
                        key: 'removeFake',
                        value: function removeFake() {
                            if (this.fakeHandler) {
                                this.container.removeEventListener('click', this.fakeHandlerCallback);
                                this.fakeHandler = null;
                                this.fakeHandlerCallback = null;
                            }

                            if (this.fakeElem) {
                                this.container.removeChild(this.fakeElem);
                                this.fakeElem = null;
                            }
                        }
                    }, {
                        key: 'selectTarget',
                        value: function selectTarget() {
                            this.selectedText = (0, _select2.default)(this.target);
                            this.copyText();
                        }
                    }, {
                        key: 'copyText',
                        value: function copyText() {
                            var succeeded = void 0;

                            try {
                                succeeded = document.execCommand(this.action);
                            } catch (err) {
                                succeeded = false;
                            }

                            this.handleResult(succeeded);
                        }
                    }, {
                        key: 'handleResult',
                        value: function handleResult(succeeded) {
                            this.emitter.emit(succeeded ? 'success' : 'error', {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: 'clearSelection',
                        value: function clearSelection() {
                            if (this.trigger) {
                                this.trigger.focus();
                            }

                            window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: 'destroy',
                        value: function destroy() {
                            this.removeFake();
                        }
                    }, {
                        key: 'action',
                        set: function set() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                            this._action = action;

                            if (this._action !== 'copy' && this._action !== 'cut') {
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            }
                        },
                        get: function get() {
                            return this._action;
                        }
                    }, {
                        key: 'target',
                        set: function set(target) {
                            if (target !== undefined) {
                                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    }

                                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    }

                                    this._target = target;
                                } else {
                                    throw new Error('Invalid "target" value, use a valid Element');
                                }
                            }
                        },
                        get: function get() {
                            return this._target;
                        }
                    }]);

                    return ClipboardAction;
                }();

                module.exports = ClipboardAction;
            });

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            var is = __webpack_require__(6);
            var delegate = __webpack_require__(5);

            /**
             * Validates all params and calls the right
             * listener function based on its target type.
             *
             * @param {String|HTMLElement|HTMLCollection|NodeList} target
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listen(target, type, callback) {
                if (!target && !type && !callback) {
                    throw new Error('Missing required arguments');
                }

                if (!is.string(type)) {
                    throw new TypeError('Second argument must be a String');
                }

                if (!is.fn(callback)) {
                    throw new TypeError('Third argument must be a Function');
                }

                if (is.node(target)) {
                    return listenNode(target, type, callback);
                } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                } else {
                    throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                }
            }

            /**
             * Adds an event listener to a HTML element
             * and returns a remove listener function.
             *
             * @param {HTMLElement} node
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenNode(node, type, callback) {
                node.addEventListener(type, callback);

                return {
                    destroy: function destroy() {
                        node.removeEventListener(type, callback);
                    }
                };
            }

            /**
             * Add an event listener to a list of HTML elements
             * and returns a remove listener function.
             *
             * @param {NodeList|HTMLCollection} nodeList
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenNodeList(nodeList, type, callback) {
                Array.prototype.forEach.call(nodeList, function (node) {
                    node.addEventListener(type, callback);
                });

                return {
                    destroy: function destroy() {
                        Array.prototype.forEach.call(nodeList, function (node) {
                            node.removeEventListener(type, callback);
                        });
                    }
                };
            }

            /**
             * Add an event listener to a selector
             * and returns a remove listener function.
             *
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenSelector(selector, type, callback) {
                return delegate(document.body, selector, type, callback);
            }

            module.exports = listen;

            /***/
        },
        /* 2 */
        /***/function (module, exports) {

            function E() {
                // Keep this empty so it's easier to inherit from
                // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
            }

            E.prototype = {
                on: function on(name, callback, ctx) {
                    var e = this.e || (this.e = {});

                    (e[name] || (e[name] = [])).push({
                        fn: callback,
                        ctx: ctx
                    });

                    return this;
                },

                once: function once(name, callback, ctx) {
                    var self = this;
                    function listener() {
                        self.off(name, listener);
                        callback.apply(ctx, arguments);
                    };

                    listener._ = callback;
                    return this.on(name, listener, ctx);
                },

                emit: function emit(name) {
                    var data = [].slice.call(arguments, 1);
                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                    var i = 0;
                    var len = evtArr.length;

                    for (i; i < len; i++) {
                        evtArr[i].fn.apply(evtArr[i].ctx, data);
                    }

                    return this;
                },

                off: function off(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];

                    if (evts && callback) {
                        for (var i = 0, len = evts.length; i < len; i++) {
                            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                        }
                    }

                    // Remove event from queue to prevent memory leak
                    // Suggested by https://github.com/lazd
                    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                    liveEvents.length ? e[name] = liveEvents : delete e[name];

                    return this;
                }
            };

            module.exports = E;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== "undefined") {
                    factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
                    global.clipboard = mod.exports;
                }
            })(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
                'use strict';

                var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

                var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

                var _goodListener2 = _interopRequireDefault(_goodListener);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }

                    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
                    }

                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var Clipboard = function (_Emitter) {
                    _inherits(Clipboard, _Emitter);

                    /**
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     * @param {Object} options
                     */
                    function Clipboard(trigger, options) {
                        _classCallCheck(this, Clipboard);

                        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

                        _this.resolveOptions(options);
                        _this.listenClick(trigger);
                        return _this;
                    }

                    /**
                     * Defines if attributes would be resolved using internal setter functions
                     * or custom functions that were passed in the constructor.
                     * @param {Object} options
                     */

                    _createClass(Clipboard, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
                        }
                    }, {
                        key: 'listenClick',
                        value: function listenClick(trigger) {
                            var _this2 = this;

                            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                                return _this2.onClick(e);
                            });
                        }
                    }, {
                        key: 'onClick',
                        value: function onClick(e) {
                            var trigger = e.delegateTarget || e.currentTarget;

                            if (this.clipboardAction) {
                                this.clipboardAction = null;
                            }

                            this.clipboardAction = new _clipboardAction2.default({
                                action: this.action(trigger),
                                target: this.target(trigger),
                                text: this.text(trigger),
                                container: this.container,
                                trigger: trigger,
                                emitter: this
                            });
                        }
                    }, {
                        key: 'defaultAction',
                        value: function defaultAction(trigger) {
                            return getAttributeValue('action', trigger);
                        }
                    }, {
                        key: 'defaultTarget',
                        value: function defaultTarget(trigger) {
                            var selector = getAttributeValue('target', trigger);

                            if (selector) {
                                return document.querySelector(selector);
                            }
                        }
                    }, {
                        key: 'defaultText',
                        value: function defaultText(trigger) {
                            return getAttributeValue('text', trigger);
                        }
                    }, {
                        key: 'destroy',
                        value: function destroy() {
                            this.listener.destroy();

                            if (this.clipboardAction) {
                                this.clipboardAction.destroy();
                                this.clipboardAction = null;
                            }
                        }
                    }], [{
                        key: 'isSupported',
                        value: function isSupported() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                            var actions = typeof action === 'string' ? [action] : action;
                            var support = !!document.queryCommandSupported;

                            actions.forEach(function (action) {
                                support = support && !!document.queryCommandSupported(action);
                            });

                            return support;
                        }
                    }]);

                    return Clipboard;
                }(_tinyEmitter2.default);

                /**
                 * Helper function to retrieve attribute value.
                 * @param {String} suffix
                 * @param {Element} element
                 */
                function getAttributeValue(suffix, element) {
                    var attribute = 'data-clipboard-' + suffix;

                    if (!element.hasAttribute(attribute)) {
                        return;
                    }

                    return element.getAttribute(attribute);
                }

                module.exports = Clipboard;
            });

            /***/
        },
        /* 4 */
        /***/function (module, exports) {

            var DOCUMENT_NODE_TYPE = 9;

            /**
             * A polyfill for Element.matches()
             */
            if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                var proto = Element.prototype;

                proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
            }

            /**
             * Finds the closest parent that matches a selector.
             *
             * @param {Element} element
             * @param {String} selector
             * @return {Function}
             */
            function closest(element, selector) {
                while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (typeof element.matches === 'function' && element.matches(selector)) {
                        return element;
                    }
                    element = element.parentNode;
                }
            }

            module.exports = closest;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            var closest = __webpack_require__(4);

            /**
             * Delegates event to a selector.
             *
             * @param {Element} element
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @param {Boolean} useCapture
             * @return {Object}
             */
            function _delegate(element, selector, type, callback, useCapture) {
                var listenerFn = listener.apply(this, arguments);

                element.addEventListener(type, listenerFn, useCapture);

                return {
                    destroy: function destroy() {
                        element.removeEventListener(type, listenerFn, useCapture);
                    }
                };
            }

            /**
             * Delegates event to a selector.
             *
             * @param {Element|String|Array} [elements]
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @param {Boolean} useCapture
             * @return {Object}
             */
            function delegate(elements, selector, type, callback, useCapture) {
                // Handle the regular Element usage
                if (typeof elements.addEventListener === 'function') {
                    return _delegate.apply(null, arguments);
                }

                // Handle Element-less usage, it defaults to global delegation
                if (typeof type === 'function') {
                    // Use `document` as the first parameter, then apply arguments
                    // This is a short way to .unshift `arguments` without running into deoptimizations
                    return _delegate.bind(null, document).apply(null, arguments);
                }

                // Handle Selector-based usage
                if (typeof elements === 'string') {
                    elements = document.querySelectorAll(elements);
                }

                // Handle Array-like based usage
                return Array.prototype.map.call(elements, function (element) {
                    return _delegate(element, selector, type, callback, useCapture);
                });
            }

            /**
             * Finds closest match and invokes callback.
             *
             * @param {Element} element
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @return {Function}
             */
            function listener(element, selector, type, callback) {
                return function (e) {
                    e.delegateTarget = closest(e.target, selector);

                    if (e.delegateTarget) {
                        callback.call(element, e);
                    }
                };
            }

            module.exports = delegate;

            /***/
        },
        /* 6 */
        /***/function (module, exports) {

            /**
             * Check if argument is a HTML element.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.node = function (value) {
                return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
            };

            /**
             * Check if argument is a list of HTML elements.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.nodeList = function (value) {
                var type = Object.prototype.toString.call(value);

                return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
            };

            /**
             * Check if argument is a string.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.string = function (value) {
                return typeof value === 'string' || value instanceof String;
            };

            /**
             * Check if argument is a function.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.fn = function (value) {
                var type = Object.prototype.toString.call(value);

                return type === '[object Function]';
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports) {

            function select(element) {
                var selectedText;

                if (element.nodeName === 'SELECT') {
                    element.focus();

                    selectedText = element.value;
                } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                    var isReadOnly = element.hasAttribute('readonly');

                    if (!isReadOnly) {
                        element.setAttribute('readonly', '');
                    }

                    element.select();
                    element.setSelectionRange(0, element.value.length);

                    if (!isReadOnly) {
                        element.removeAttribute('readonly');
                    }

                    selectedText = element.value;
                } else {
                    if (element.hasAttribute('contenteditable')) {
                        element.focus();
                    }

                    var selection = window.getSelection();
                    var range = document.createRange();

                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);

                    selectedText = selection.toString();
                }

                return selectedText;
            }

            module.exports = select;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	'use strict';

	/**
  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * @codingstandard ftlabs-jsv2
  * @copyright The Financial Times Limited [All Rights Reserved]
  * @license MIT License (see LICENSE.txt)
  */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/

	/**
  * Instantiate fast-clicking listeners on the specified layer.
  *
  * @constructor
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */

	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
   * Whether a click is currently being tracked.
   *
   * @type boolean
   */
		this.trackingClick = false;

		/**
   * Timestamp for when click tracking started.
   *
   * @type number
   */
		this.trackingClickStart = 0;

		/**
   * The element being tracked for a click.
   *
   * @type EventTarget
   */
		this.targetElement = null;

		/**
   * X-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartX = 0;

		/**
   * Y-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartY = 0;

		/**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * @type number
   */
		this.lastTouchIdentifier = 0;

		/**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * @type number
   */
		this.touchBoundary = options.touchBoundary || 10;

		/**
   * The FastClick layer.
   *
   * @type Element
   */
		this.layer = layer;

		/**
   * The minimum time between tap(touchstart and touchend) events
   *
   * @type number
   */
		this.tapDelay = options.tapDelay || 200;

		/**
   * The maximum time for a tap
   *
   * @type number
   */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function () {
				return method.apply(context, arguments);
			};
		}

		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function (type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function (type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function (event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
 *
 * @type boolean
 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
  * Android requires exceptions.
  *
  * @type boolean
  */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	/**
  * iOS requires exceptions.
  *
  * @type boolean
  */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	/**
  * iOS 4 requires an exception for select elements.
  *
  * @type boolean
  */
	var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	/**
  * iOS 6.0-7.* requires the target element to be manually derived
  *
  * @type boolean
  */
	var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	/**
  * BlackBerry requires exceptions.
  *
  * @type boolean
  */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
  * Determine whether a given element requires a native click.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element needs a native click
  */
	FastClick.prototype.needsClick = function (target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if (deviceIsIOS && target.type === 'file' || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/.test(target.className)
		);
	};

	/**
  * Determine whether a given element requires a call to focus to simulate click into element.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
  */
	FastClick.prototype.needsFocus = function (target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/.test(target.className)
				);
		}
	};

	/**
  * Send a click event to the specified element.
  *
  * @param {EventTarget|Element} targetElement
  * @param {Event} event
  */
	FastClick.prototype.sendClick = function (targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function (targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};

	/**
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.focus = function (targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};

	/**
  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  *
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.updateScrollParent = function (targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};

	/**
  * @param {EventTarget} targetElement
  * @returns {Element|EventTarget}
  */
	FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};

	/**
  * On touch start, record the position and scroll offset.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchStart = function (event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};

	/**
  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.touchHasMoved = function (event) {
		var touch = event.changedTouches[0],
		    boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};

	/**
  * Update the last position.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchMove = function (event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};

	/**
  * Attempt to find the labelled control for the given label element.
  *
  * @param {EventTarget|HTMLLabelElement} labelElement
  * @returns {Element|null}
  */
	FastClick.prototype.findControl = function (labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};

	/**
  * On touch end, determine whether to send a click event at once.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchEnd = function (event) {
		var forElement,
		    trackingClickStart,
		    targetTagName,
		    scrollParent,
		    touch,
		    targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};

	/**
  * On touch cancel, stop tracking the click.
  *
  * @returns {void}
  */
	FastClick.prototype.onTouchCancel = function () {
		this.trackingClick = false;
		this.targetElement = null;
	};

	/**
  * Determine mouse events which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onMouse = function (event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};

	/**
  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  * an actual click which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onClick = function (event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};

	/**
  * Remove all FastClick's event listeners.
  *
  * @returns {void}
  */
	FastClick.prototype.destroy = function () {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};

	/**
  * Check whether FastClick is needed.
  *
  * @param {Element} layer The layer to listen on
  */
	FastClick.notNeeded = function (layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};

	/**
  * Factory method for creating a FastClick object
  *
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */
	FastClick.attach = function (layer, options) {
		return new FastClick(layer, options);
	};

	if ("function" === 'function' && _typeof(__webpack_require__(3)) === 'object' && __webpack_require__(3)) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
})();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(24);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(26);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(29);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(33);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(39);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(41);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(47);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TableOfContents = __webpack_require__(49);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default,
  TableOfContents: _TableOfContents2.default
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(4);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(25);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(4);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(27);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(28);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(30);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(31);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(32);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.init(els);
  }

  Blur.prototype.init = function init(els) {
    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  };

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(34);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(35);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(36);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(37);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Escape HTML strings
 *
 * Documentation may contain code JavaScript code snippets which would get
 * executed when inserted into the DOM as plain HTML.
 *
 * See https://github.com/squidfunk/mkdocs-material/issues/906
 *
 * @param {string} html - HTML string
 *
 * @return {string} Escaped HTML string
 */
var escapeHTML = function escapeHTML(html) {
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
};

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Escape HTML */


          doc.title = escapeHTML(doc.title);
          doc.text = escapeHTML(doc.contents);

          /* Associate section with parent document */
          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.contents;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.field("tags");
          this.field("categories");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article\r md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(38);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.5
 * Copyright (C) 2018 Oliver Nightingale
 * @license MIT
 */

;(function () {

  /**
   * A convenience function for configuring and constructing
   * a new lunr Index.
   *
   * A lunr.Builder instance is created and the pipeline setup
   * with a trimmer, stop word filter and stemmer.
   *
   * This builder object is yielded to the configuration function
   * that is passed as a parameter, allowing the list of fields
   * and other builder parameters to be customised.
   *
   * All documents _must_ be added within the passed config function.
   *
   * @example
   * var idx = lunr(function () {
   *   this.field('title')
   *   this.field('body')
   *   this.ref('id')
   *
   *   documents.forEach(function (doc) {
   *     this.add(doc)
   *   }, this)
   * })
   *
   * @see {@link lunr.Builder}
   * @see {@link lunr.Pipeline}
   * @see {@link lunr.trimmer}
   * @see {@link lunr.stopWordFilter}
   * @see {@link lunr.stemmer}
   * @namespace {function} lunr
   */
  var lunr = function lunr(config) {
    var builder = new lunr.Builder();

    builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);

    builder.searchPipeline.add(lunr.stemmer);

    config.call(builder, builder);
    return builder.build();
  };

  lunr.version = "2.3.5";
  /*!
   * lunr.utils
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A namespace containing utils for the rest of the lunr library
   * @namespace lunr.utils
   */
  lunr.utils = {};

  /**
   * Print a warning message to the console.
   *
   * @param {String} message The message to be printed.
   * @memberOf lunr.utils
   * @function
   */
  lunr.utils.warn = function (global) {
    /* eslint-disable no-console */
    return function (message) {
      if (global.console && console.warn) {
        console.warn(message);
      }
    };
    /* eslint-enable no-console */
  }(this);

  /**
   * Convert an object to a string.
   *
   * In the case of `null` and `undefined` the function returns
   * the empty string, in all other cases the result of calling
   * `toString` on the passed object is returned.
   *
   * @param {Any} obj The object to convert to a string.
   * @return {String} string representation of the passed object.
   * @memberOf lunr.utils
   */
  lunr.utils.asString = function (obj) {
    if (obj === void 0 || obj === null) {
      return "";
    } else {
      return obj.toString();
    }
  };

  /**
   * Clones an object.
   *
   * Will create a copy of an existing object such that any mutations
   * on the copy cannot affect the original.
   *
   * Only shallow objects are supported, passing a nested object to this
   * function will cause a TypeError.
   *
   * Objects with primitives, and arrays of primitives are supported.
   *
   * @param {Object} obj The object to clone.
   * @return {Object} a clone of the passed object.
   * @throws {TypeError} when a nested object is passed.
   * @memberOf Utils
   */
  lunr.utils.clone = function (obj) {
    if (obj === null || obj === undefined) {
      return obj;
    }

    var clone = Object.create(null),
        keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i],
          val = obj[key];

      if (Array.isArray(val)) {
        clone[key] = val.slice();
        continue;
      }

      if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
        clone[key] = val;
        continue;
      }

      throw new TypeError("clone is not deep and does not support nested objects");
    }

    return clone;
  };
  lunr.FieldRef = function (docRef, fieldName, stringValue) {
    this.docRef = docRef;
    this.fieldName = fieldName;
    this._stringValue = stringValue;
  };

  lunr.FieldRef.joiner = "/";

  lunr.FieldRef.fromString = function (s) {
    var n = s.indexOf(lunr.FieldRef.joiner);

    if (n === -1) {
      throw "malformed field ref string";
    }

    var fieldRef = s.slice(0, n),
        docRef = s.slice(n + 1);

    return new lunr.FieldRef(docRef, fieldRef, s);
  };

  lunr.FieldRef.prototype.toString = function () {
    if (this._stringValue == undefined) {
      this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef;
    }

    return this._stringValue;
  };
  /*!
   * lunr.Set
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A lunr set.
   *
   * @constructor
   */
  lunr.Set = function (elements) {
    this.elements = Object.create(null);

    if (elements) {
      this.length = elements.length;

      for (var i = 0; i < this.length; i++) {
        this.elements[elements[i]] = true;
      }
    } else {
      this.length = 0;
    }
  };

  /**
   * A complete set that contains all elements.
   *
   * @static
   * @readonly
   * @type {lunr.Set}
   */
  lunr.Set.complete = {
    intersect: function intersect(other) {
      return other;
    },

    union: function union(other) {
      return other;
    },

    contains: function contains() {
      return true;
    }

    /**
     * An empty set that contains no elements.
     *
     * @static
     * @readonly
     * @type {lunr.Set}
     */
  };lunr.Set.empty = {
    intersect: function intersect() {
      return this;
    },

    union: function union(other) {
      return other;
    },

    contains: function contains() {
      return false;
    }

    /**
     * Returns true if this set contains the specified object.
     *
     * @param {object} object - Object whose presence in this set is to be tested.
     * @returns {boolean} - True if this set contains the specified object.
     */
  };lunr.Set.prototype.contains = function (object) {
    return !!this.elements[object];
  };

  /**
   * Returns a new set containing only the elements that are present in both
   * this set and the specified set.
   *
   * @param {lunr.Set} other - set to intersect with this set.
   * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
   */

  lunr.Set.prototype.intersect = function (other) {
    var a,
        b,
        elements,
        intersection = [];

    if (other === lunr.Set.complete) {
      return this;
    }

    if (other === lunr.Set.empty) {
      return other;
    }

    if (this.length < other.length) {
      a = this;
      b = other;
    } else {
      a = other;
      b = this;
    }

    elements = Object.keys(a.elements);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element in b.elements) {
        intersection.push(element);
      }
    }

    return new lunr.Set(intersection);
  };

  /**
   * Returns a new set combining the elements of this and the specified set.
   *
   * @param {lunr.Set} other - set to union with this set.
   * @return {lunr.Set} a new set that is the union of this and the specified set.
   */

  lunr.Set.prototype.union = function (other) {
    if (other === lunr.Set.complete) {
      return lunr.Set.complete;
    }

    if (other === lunr.Set.empty) {
      return this;
    }

    return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)));
  };
  /**
   * A function to calculate the inverse document frequency for
   * a posting. This is shared between the builder and the index
   *
   * @private
   * @param {object} posting - The posting for a given term
   * @param {number} documentCount - The total number of documents.
   */
  lunr.idf = function (posting, documentCount) {
    var documentsWithTerm = 0;

    for (var fieldName in posting) {
      if (fieldName == '_index') continue; // Ignore the term index, its not a field
      documentsWithTerm += Object.keys(posting[fieldName]).length;
    }

    var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5);

    return Math.log(1 + Math.abs(x));
  };

  /**
   * A token wraps a string representation of a token
   * as it is passed through the text processing pipeline.
   *
   * @constructor
   * @param {string} [str=''] - The string token being wrapped.
   * @param {object} [metadata={}] - Metadata associated with this token.
   */
  lunr.Token = function (str, metadata) {
    this.str = str || "";
    this.metadata = metadata || {};
  };

  /**
   * Returns the token string that is being wrapped by this object.
   *
   * @returns {string}
   */
  lunr.Token.prototype.toString = function () {
    return this.str;
  };

  /**
   * A token update function is used when updating or optionally
   * when cloning a token.
   *
   * @callback lunr.Token~updateFunction
   * @param {string} str - The string representation of the token.
   * @param {Object} metadata - All metadata associated with this token.
   */

  /**
   * Applies the given function to the wrapped string token.
   *
   * @example
   * token.update(function (str, metadata) {
   *   return str.toUpperCase()
   * })
   *
   * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
   * @returns {lunr.Token}
   */
  lunr.Token.prototype.update = function (fn) {
    this.str = fn(this.str, this.metadata);
    return this;
  };

  /**
   * Creates a clone of this token. Optionally a function can be
   * applied to the cloned token.
   *
   * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
   * @returns {lunr.Token}
   */
  lunr.Token.prototype.clone = function (fn) {
    fn = fn || function (s) {
      return s;
    };
    return new lunr.Token(fn(this.str, this.metadata), this.metadata);
  };
  /*!
   * lunr.tokenizer
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A function for splitting a string into tokens ready to be inserted into
   * the search index. Uses `lunr.tokenizer.separator` to split strings, change
   * the value of this property to change how strings are split into tokens.
   *
   * This tokenizer will convert its parameter to a string by calling `toString` and
   * then will split this string on the character in `lunr.tokenizer.separator`.
   * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
   *
   * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
   * added as metadata to every token that is created from the object to be tokenized.
   *
   * @static
   * @param {?(string|object|object[])} obj - The object to convert into tokens
   * @param {?object} metadata - Optional metadata to associate with every token
   * @returns {lunr.Token[]}
   * @see {@link lunr.Pipeline}
   */
  lunr.tokenizer = function (obj, metadata) {
    if (obj == null || obj == undefined) {
      return [];
    }

    if (Array.isArray(obj)) {
      return obj.map(function (t) {
        return new lunr.Token(lunr.utils.asString(t).toLowerCase(), lunr.utils.clone(metadata));
      });
    }

    var str = obj.toString().trim().toLowerCase(),
        len = str.length,
        tokens = [];

    for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
      var char = str.charAt(sliceEnd),
          sliceLength = sliceEnd - sliceStart;

      if (char.match(lunr.tokenizer.separator) || sliceEnd == len) {

        if (sliceLength > 0) {
          var tokenMetadata = lunr.utils.clone(metadata) || {};
          tokenMetadata["position"] = [sliceStart, sliceLength];
          tokenMetadata["index"] = tokens.length;

          tokens.push(new lunr.Token(str.slice(sliceStart, sliceEnd), tokenMetadata));
        }

        sliceStart = sliceEnd + 1;
      }
    }

    return tokens;
  };

  /**
   * The separator used to split a string into tokens. Override this property to change the behaviour of
   * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
   *
   * @static
   * @see lunr.tokenizer
   */
  lunr.tokenizer.separator = /[\s\-]+/;
  /*!
   * lunr.Pipeline
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.Pipelines maintain an ordered list of functions to be applied to all
   * tokens in documents entering the search index and queries being ran against
   * the index.
   *
   * An instance of lunr.Index created with the lunr shortcut will contain a
   * pipeline with a stop word filter and an English language stemmer. Extra
   * functions can be added before or after either of these functions or these
   * default functions can be removed.
   *
   * When run the pipeline will call each function in turn, passing a token, the
   * index of that token in the original list of all tokens and finally a list of
   * all the original tokens.
   *
   * The output of functions in the pipeline will be passed to the next function
   * in the pipeline. To exclude a token from entering the index the function
   * should return undefined, the rest of the pipeline will not be called with
   * this token.
   *
   * For serialisation of pipelines to work, all functions used in an instance of
   * a pipeline should be registered with lunr.Pipeline. Registered functions can
   * then be loaded. If trying to load a serialised pipeline that uses functions
   * that are not registered an error will be thrown.
   *
   * If not planning on serialising the pipeline then registering pipeline functions
   * is not necessary.
   *
   * @constructor
   */
  lunr.Pipeline = function () {
    this._stack = [];
  };

  lunr.Pipeline.registeredFunctions = Object.create(null);

  /**
   * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
   * string as well as all known metadata. A pipeline function can mutate the token string
   * or mutate (or add) metadata for a given token.
   *
   * A pipeline function can indicate that the passed token should be discarded by returning
   * null. This token will not be passed to any downstream pipeline functions and will not be
   * added to the index.
   *
   * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
   * to any downstream pipeline functions and all will returned tokens will be added to the index.
   *
   * Any number of pipeline functions may be chained together using a lunr.Pipeline.
   *
   * @interface lunr.PipelineFunction
   * @param {lunr.Token} token - A token from the document being processed.
   * @param {number} i - The index of this token in the complete list of tokens for this document/field.
   * @param {lunr.Token[]} tokens - All tokens for this document/field.
   * @returns {(?lunr.Token|lunr.Token[])}
   */

  /**
   * Register a function with the pipeline.
   *
   * Functions that are used in the pipeline should be registered if the pipeline
   * needs to be serialised, or a serialised pipeline needs to be loaded.
   *
   * Registering a function does not add it to a pipeline, functions must still be
   * added to instances of the pipeline for them to be used when running a pipeline.
   *
   * @param {lunr.PipelineFunction} fn - The function to check for.
   * @param {String} label - The label to register this function with
   */
  lunr.Pipeline.registerFunction = function (fn, label) {
    if (label in this.registeredFunctions) {
      lunr.utils.warn('Overwriting existing registered function: ' + label);
    }

    fn.label = label;
    lunr.Pipeline.registeredFunctions[fn.label] = fn;
  };

  /**
   * Warns if the function is not registered as a Pipeline function.
   *
   * @param {lunr.PipelineFunction} fn - The function to check for.
   * @private
   */
  lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
    var isRegistered = fn.label && fn.label in this.registeredFunctions;

    if (!isRegistered) {
      lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn);
    }
  };

  /**
   * Loads a previously serialised pipeline.
   *
   * All functions to be loaded must already be registered with lunr.Pipeline.
   * If any function from the serialised data has not been registered then an
   * error will be thrown.
   *
   * @param {Object} serialised - The serialised pipeline to load.
   * @returns {lunr.Pipeline}
   */
  lunr.Pipeline.load = function (serialised) {
    var pipeline = new lunr.Pipeline();

    serialised.forEach(function (fnName) {
      var fn = lunr.Pipeline.registeredFunctions[fnName];

      if (fn) {
        pipeline.add(fn);
      } else {
        throw new Error('Cannot load unregistered function: ' + fnName);
      }
    });

    return pipeline;
  };

  /**
   * Adds new functions to the end of the pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
   */
  lunr.Pipeline.prototype.add = function () {
    var fns = Array.prototype.slice.call(arguments);

    fns.forEach(function (fn) {
      lunr.Pipeline.warnIfFunctionNotRegistered(fn);
      this._stack.push(fn);
    }, this);
  };

  /**
   * Adds a single function after a function that already exists in the
   * pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
   * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
   */
  lunr.Pipeline.prototype.after = function (existingFn, newFn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    var pos = this._stack.indexOf(existingFn);
    if (pos == -1) {
      throw new Error('Cannot find existingFn');
    }

    pos = pos + 1;
    this._stack.splice(pos, 0, newFn);
  };

  /**
   * Adds a single function before a function that already exists in the
   * pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
   * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
   */
  lunr.Pipeline.prototype.before = function (existingFn, newFn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    var pos = this._stack.indexOf(existingFn);
    if (pos == -1) {
      throw new Error('Cannot find existingFn');
    }

    this._stack.splice(pos, 0, newFn);
  };

  /**
   * Removes a function from the pipeline.
   *
   * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
   */
  lunr.Pipeline.prototype.remove = function (fn) {
    var pos = this._stack.indexOf(fn);
    if (pos == -1) {
      return;
    }

    this._stack.splice(pos, 1);
  };

  /**
   * Runs the current list of functions that make up the pipeline against the
   * passed tokens.
   *
   * @param {Array} tokens The tokens to run through the pipeline.
   * @returns {Array}
   */
  lunr.Pipeline.prototype.run = function (tokens) {
    var stackLength = this._stack.length;

    for (var i = 0; i < stackLength; i++) {
      var fn = this._stack[i];
      var memo = [];

      for (var j = 0; j < tokens.length; j++) {
        var result = fn(tokens[j], j, tokens);

        if (result === void 0 || result === '') continue;

        if (Array.isArray(result)) {
          for (var k = 0; k < result.length; k++) {
            memo.push(result[k]);
          }
        } else {
          memo.push(result);
        }
      }

      tokens = memo;
    }

    return tokens;
  };

  /**
   * Convenience method for passing a string through a pipeline and getting
   * strings out. This method takes care of wrapping the passed string in a
   * token and mapping the resulting tokens back to strings.
   *
   * @param {string} str - The string to pass through the pipeline.
   * @param {?object} metadata - Optional metadata to associate with the token
   * passed to the pipeline.
   * @returns {string[]}
   */
  lunr.Pipeline.prototype.runString = function (str, metadata) {
    var token = new lunr.Token(str, metadata);

    return this.run([token]).map(function (t) {
      return t.toString();
    });
  };

  /**
   * Resets the pipeline by removing any existing processors.
   *
   */
  lunr.Pipeline.prototype.reset = function () {
    this._stack = [];
  };

  /**
   * Returns a representation of the pipeline ready for serialisation.
   *
   * Logs a warning if the function has not been registered.
   *
   * @returns {Array}
   */
  lunr.Pipeline.prototype.toJSON = function () {
    return this._stack.map(function (fn) {
      lunr.Pipeline.warnIfFunctionNotRegistered(fn);

      return fn.label;
    });
  };
  /*!
   * lunr.Vector
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A vector is used to construct the vector space of documents and queries. These
   * vectors support operations to determine the similarity between two documents or
   * a document and a query.
   *
   * Normally no parameters are required for initializing a vector, but in the case of
   * loading a previously dumped vector the raw elements can be provided to the constructor.
   *
   * For performance reasons vectors are implemented with a flat array, where an elements
   * index is immediately followed by its value. E.g. [index, value, index, value]. This
   * allows the underlying array to be as sparse as possible and still offer decent
   * performance when being used for vector calculations.
   *
   * @constructor
   * @param {Number[]} [elements] - The flat list of element index and element value pairs.
   */
  lunr.Vector = function (elements) {
    this._magnitude = 0;
    this.elements = elements || [];
  };

  /**
   * Calculates the position within the vector to insert a given index.
   *
   * This is used internally by insert and upsert. If there are duplicate indexes then
   * the position is returned as if the value for that index were to be updated, but it
   * is the callers responsibility to check whether there is a duplicate at that index
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @returns {Number}
   */
  lunr.Vector.prototype.positionForIndex = function (index) {
    // For an empty vector the tuple can be inserted at the beginning
    if (this.elements.length == 0) {
      return 0;
    }

    var start = 0,
        end = this.elements.length / 2,
        sliceLength = end - start,
        pivotPoint = Math.floor(sliceLength / 2),
        pivotIndex = this.elements[pivotPoint * 2];

    while (sliceLength > 1) {
      if (pivotIndex < index) {
        start = pivotPoint;
      }

      if (pivotIndex > index) {
        end = pivotPoint;
      }

      if (pivotIndex == index) {
        break;
      }

      sliceLength = end - start;
      pivotPoint = start + Math.floor(sliceLength / 2);
      pivotIndex = this.elements[pivotPoint * 2];
    }

    if (pivotIndex == index) {
      return pivotPoint * 2;
    }

    if (pivotIndex > index) {
      return pivotPoint * 2;
    }

    if (pivotIndex < index) {
      return (pivotPoint + 1) * 2;
    }
  };

  /**
   * Inserts an element at an index within the vector.
   *
   * Does not allow duplicates, will throw an error if there is already an entry
   * for this index.
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @param {Number} val - The value to be inserted into the vector.
   */
  lunr.Vector.prototype.insert = function (insertIdx, val) {
    this.upsert(insertIdx, val, function () {
      throw "duplicate index";
    });
  };

  /**
   * Inserts or updates an existing index within the vector.
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @param {Number} val - The value to be inserted into the vector.
   * @param {function} fn - A function that is called for updates, the existing value and the
   * requested value are passed as arguments
   */
  lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
    this._magnitude = 0;
    var position = this.positionForIndex(insertIdx);

    if (this.elements[position] == insertIdx) {
      this.elements[position + 1] = fn(this.elements[position + 1], val);
    } else {
      this.elements.splice(position, 0, insertIdx, val);
    }
  };

  /**
   * Calculates the magnitude of this vector.
   *
   * @returns {Number}
   */
  lunr.Vector.prototype.magnitude = function () {
    if (this._magnitude) return this._magnitude;

    var sumOfSquares = 0,
        elementsLength = this.elements.length;

    for (var i = 1; i < elementsLength; i += 2) {
      var val = this.elements[i];
      sumOfSquares += val * val;
    }

    return this._magnitude = Math.sqrt(sumOfSquares);
  };

  /**
   * Calculates the dot product of this vector and another vector.
   *
   * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
   * @returns {Number}
   */
  lunr.Vector.prototype.dot = function (otherVector) {
    var dotProduct = 0,
        a = this.elements,
        b = otherVector.elements,
        aLen = a.length,
        bLen = b.length,
        aVal = 0,
        bVal = 0,
        i = 0,
        j = 0;

    while (i < aLen && j < bLen) {
      aVal = a[i], bVal = b[j];
      if (aVal < bVal) {
        i += 2;
      } else if (aVal > bVal) {
        j += 2;
      } else if (aVal == bVal) {
        dotProduct += a[i + 1] * b[j + 1];
        i += 2;
        j += 2;
      }
    }

    return dotProduct;
  };

  /**
   * Calculates the similarity between this vector and another vector.
   *
   * @param {lunr.Vector} otherVector - The other vector to calculate the
   * similarity with.
   * @returns {Number}
   */
  lunr.Vector.prototype.similarity = function (otherVector) {
    return this.dot(otherVector) / this.magnitude() || 0;
  };

  /**
   * Converts the vector to an array of the elements within the vector.
   *
   * @returns {Number[]}
   */
  lunr.Vector.prototype.toArray = function () {
    var output = new Array(this.elements.length / 2);

    for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
      output[j] = this.elements[i];
    }

    return output;
  };

  /**
   * A JSON serializable representation of the vector.
   *
   * @returns {Number[]}
   */
  lunr.Vector.prototype.toJSON = function () {
    return this.elements;
  };
  /* eslint-disable */
  /*!
   * lunr.stemmer
   * Copyright (C) 2018 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */

  /**
   * lunr.stemmer is an english language stemmer, this is a JavaScript
   * implementation of the PorterStemmer taken from http://tartarus.org/~martin
   *
   * @static
   * @implements {lunr.PipelineFunction}
   * @param {lunr.Token} token - The string to stem
   * @returns {lunr.Token}
   * @see {@link lunr.Pipeline}
   * @function
   */
  lunr.stemmer = function () {
    var step2list = {
      "ational": "ate",
      "tional": "tion",
      "enci": "ence",
      "anci": "ance",
      "izer": "ize",
      "bli": "ble",
      "alli": "al",
      "entli": "ent",
      "eli": "e",
      "ousli": "ous",
      "ization": "ize",
      "ation": "ate",
      "ator": "ate",
      "alism": "al",
      "iveness": "ive",
      "fulness": "ful",
      "ousness": "ous",
      "aliti": "al",
      "iviti": "ive",
      "biliti": "ble",
      "logi": "log"
    },
        step3list = {
      "icate": "ic",
      "ative": "",
      "alize": "al",
      "iciti": "ic",
      "ical": "ic",
      "ful": "",
      "ness": ""
    },
        c = "[^aeiou]",
        // consonant
    v = "[aeiouy]",
        // vowel
    C = c + "[^aeiouy]*",
        // consonant sequence
    V = v + "[aeiou]*",
        // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,
        // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",
        // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,
        // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v; // vowel in stem

    var re_mgr0 = new RegExp(mgr0);
    var re_mgr1 = new RegExp(mgr1);
    var re_meq1 = new RegExp(meq1);
    var re_s_v = new RegExp(s_v);

    var re_1a = /^(.+?)(ss|i)es$/;
    var re2_1a = /^(.+?)([^s])s$/;
    var re_1b = /^(.+?)eed$/;
    var re2_1b = /^(.+?)(ed|ing)$/;
    var re_1b_2 = /.$/;
    var re2_1b_2 = /(at|bl|iz)$/;
    var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
    var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    var re_1c = /^(.+?[^aeiou])y$/;
    var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

    var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

    var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    var re2_4 = /^(.+?)(s|t)(ion)$/;

    var re_5 = /^(.+?)e$/;
    var re_5_1 = /ll$/;
    var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    var porterStemmer = function porterStemmer(w) {
      var stem, suffix, firstch, re, re2, re3, re4;

      if (w.length < 3) {
        return w;
      }

      firstch = w.substr(0, 1);
      if (firstch == "y") {
        w = firstch.toUpperCase() + w.substr(1);
      }

      // Step 1a
      re = re_1a;
      re2 = re2_1a;

      if (re.test(w)) {
        w = w.replace(re, "$1$2");
      } else if (re2.test(w)) {
        w = w.replace(re2, "$1$2");
      }

      // Step 1b
      re = re_1b;
      re2 = re2_1b;
      if (re.test(w)) {
        var fp = re.exec(w);
        re = re_mgr0;
        if (re.test(fp[1])) {
          re = re_1b_2;
          w = w.replace(re, "");
        }
      } else if (re2.test(w)) {
        var fp = re2.exec(w);
        stem = fp[1];
        re2 = re_s_v;
        if (re2.test(stem)) {
          w = stem;
          re2 = re2_1b_2;
          re3 = re3_1b_2;
          re4 = re4_1b_2;
          if (re2.test(w)) {
            w = w + "e";
          } else if (re3.test(w)) {
            re = re_1b_2;w = w.replace(re, "");
          } else if (re4.test(w)) {
            w = w + "e";
          }
        }
      }

      // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
      re = re_1c;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        w = stem + "i";
      }

      // Step 2
      re = re_2;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
          w = stem + step2list[suffix];
        }
      }

      // Step 3
      re = re_3;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
          w = stem + step3list[suffix];
        }
      }

      // Step 4
      re = re_4;
      re2 = re2_4;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        if (re.test(stem)) {
          w = stem;
        }
      } else if (re2.test(w)) {
        var fp = re2.exec(w);
        stem = fp[1] + fp[2];
        re2 = re_mgr1;
        if (re2.test(stem)) {
          w = stem;
        }
      }

      // Step 5
      re = re_5;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        re2 = re_meq1;
        re3 = re3_5;
        if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
          w = stem;
        }
      }

      re = re_5_1;
      re2 = re_mgr1;
      if (re.test(w) && re2.test(w)) {
        re = re_1b_2;
        w = w.replace(re, "");
      }

      // and turn initial Y back to y

      if (firstch == "y") {
        w = firstch.toLowerCase() + w.substr(1);
      }

      return w;
    };

    return function (token) {
      return token.update(porterStemmer);
    };
  }();

  lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer');
  /*!
   * lunr.stopWordFilter
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
   * list of stop words.
   *
   * The built in lunr.stopWordFilter is built using this generator and can be used
   * to generate custom stopWordFilters for applications or non English languages.
   *
   * @function
   * @param {Array} token The token to pass through the filter
   * @returns {lunr.PipelineFunction}
   * @see lunr.Pipeline
   * @see lunr.stopWordFilter
   */
  lunr.generateStopWordFilter = function (stopWords) {
    var words = stopWords.reduce(function (memo, stopWord) {
      memo[stopWord] = stopWord;
      return memo;
    }, {});

    return function (token) {
      if (token && words[token.toString()] !== token.toString()) return token;
    };
  };

  /**
   * lunr.stopWordFilter is an English language stop word list filter, any words
   * contained in the list will not be passed through the filter.
   *
   * This is intended to be used in the Pipeline. If the token does not pass the
   * filter then undefined will be returned.
   *
   * @function
   * @implements {lunr.PipelineFunction}
   * @params {lunr.Token} token - A token to check for being a stop word.
   * @returns {lunr.Token}
   * @see {@link lunr.Pipeline}
   */
  lunr.stopWordFilter = lunr.generateStopWordFilter(['a', 'able', 'about', 'across', 'after', 'all', 'almost', 'also', 'am', 'among', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by', 'can', 'cannot', 'could', 'dear', 'did', 'do', 'does', 'either', 'else', 'ever', 'every', 'for', 'from', 'get', 'got', 'had', 'has', 'have', 'he', 'her', 'hers', 'him', 'his', 'how', 'however', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'just', 'least', 'let', 'like', 'likely', 'may', 'me', 'might', 'most', 'must', 'my', 'neither', 'no', 'nor', 'not', 'of', 'off', 'often', 'on', 'only', 'or', 'other', 'our', 'own', 'rather', 'said', 'say', 'says', 'she', 'should', 'since', 'so', 'some', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'tis', 'to', 'too', 'twas', 'us', 'wants', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'will', 'with', 'would', 'yet', 'you', 'your']);

  lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter');
  /*!
   * lunr.trimmer
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.trimmer is a pipeline function for trimming non word
   * characters from the beginning and end of tokens before they
   * enter the index.
   *
   * This implementation may not work correctly for non latin
   * characters and should either be removed or adapted for use
   * with languages with non-latin characters.
   *
   * @static
   * @implements {lunr.PipelineFunction}
   * @param {lunr.Token} token The token to pass through the filter
   * @returns {lunr.Token}
   * @see lunr.Pipeline
   */
  lunr.trimmer = function (token) {
    return token.update(function (s) {
      return s.replace(/^\W+/, '').replace(/\W+$/, '');
    });
  };

  lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
  /*!
   * lunr.TokenSet
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A token set is used to store the unique list of all tokens
   * within an index. Token sets are also used to represent an
   * incoming query to the index, this query token set and index
   * token set are then intersected to find which tokens to look
   * up in the inverted index.
   *
   * A token set can hold multiple tokens, as in the case of the
   * index token set, or it can hold a single token as in the
   * case of a simple query token set.
   *
   * Additionally token sets are used to perform wildcard matching.
   * Leading, contained and trailing wildcards are supported, and
   * from this edit distance matching can also be provided.
   *
   * Token sets are implemented as a minimal finite state automata,
   * where both common prefixes and suffixes are shared between tokens.
   * This helps to reduce the space used for storing the token set.
   *
   * @constructor
   */
  lunr.TokenSet = function () {
    this.final = false;
    this.edges = {};
    this.id = lunr.TokenSet._nextId;
    lunr.TokenSet._nextId += 1;
  };

  /**
   * Keeps track of the next, auto increment, identifier to assign
   * to a new tokenSet.
   *
   * TokenSets require a unique identifier to be correctly minimised.
   *
   * @private
   */
  lunr.TokenSet._nextId = 1;

  /**
   * Creates a TokenSet instance from the given sorted array of words.
   *
   * @param {String[]} arr - A sorted array of strings to create the set from.
   * @returns {lunr.TokenSet}
   * @throws Will throw an error if the input array is not sorted.
   */
  lunr.TokenSet.fromArray = function (arr) {
    var builder = new lunr.TokenSet.Builder();

    for (var i = 0, len = arr.length; i < len; i++) {
      builder.insert(arr[i]);
    }

    builder.finish();
    return builder.root;
  };

  /**
   * Creates a token set from a query clause.
   *
   * @private
   * @param {Object} clause - A single clause from lunr.Query.
   * @param {string} clause.term - The query clause term.
   * @param {number} [clause.editDistance] - The optional edit distance for the term.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.fromClause = function (clause) {
    if ('editDistance' in clause) {
      return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance);
    } else {
      return lunr.TokenSet.fromString(clause.term);
    }
  };

  /**
   * Creates a token set representing a single string with a specified
   * edit distance.
   *
   * Insertions, deletions, substitutions and transpositions are each
   * treated as an edit distance of 1.
   *
   * Increasing the allowed edit distance will have a dramatic impact
   * on the performance of both creating and intersecting these TokenSets.
   * It is advised to keep the edit distance less than 3.
   *
   * @param {string} str - The string to create the token set from.
   * @param {number} editDistance - The allowed edit distance to match.
   * @returns {lunr.Vector}
   */
  lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
    var root = new lunr.TokenSet();

    var stack = [{
      node: root,
      editsRemaining: editDistance,
      str: str
    }];

    while (stack.length) {
      var frame = stack.pop();

      // no edit
      if (frame.str.length > 0) {
        var char = frame.str.charAt(0),
            noEditNode;

        if (char in frame.node.edges) {
          noEditNode = frame.node.edges[char];
        } else {
          noEditNode = new lunr.TokenSet();
          frame.node.edges[char] = noEditNode;
        }

        if (frame.str.length == 1) {
          noEditNode.final = true;
        }

        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        });
      }

      // deletion
      // can only do a deletion if we have enough edits remaining
      // and if there are characters left to delete in the string
      if (frame.editsRemaining > 0 && frame.str.length > 1) {
        var char = frame.str.charAt(1),
            deletionNode;

        if (char in frame.node.edges) {
          deletionNode = frame.node.edges[char];
        } else {
          deletionNode = new lunr.TokenSet();
          frame.node.edges[char] = deletionNode;
        }

        if (frame.str.length <= 2) {
          deletionNode.final = true;
        } else {
          stack.push({
            node: deletionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str.slice(2)
          });
        }
      }

      // deletion
      // just removing the last character from the str
      if (frame.editsRemaining > 0 && frame.str.length == 1) {
        frame.node.final = true;
      }

      // substitution
      // can only do a substitution if we have enough edits remaining
      // and if there are characters left to substitute
      if (frame.editsRemaining > 0 && frame.str.length >= 1) {
        if ("*" in frame.node.edges) {
          var substitutionNode = frame.node.edges["*"];
        } else {
          var substitutionNode = new lunr.TokenSet();
          frame.node.edges["*"] = substitutionNode;
        }

        if (frame.str.length == 1) {
          substitutionNode.final = true;
        } else {
          stack.push({
            node: substitutionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str.slice(1)
          });
        }
      }

      // insertion
      // can only do insertion if there are edits remaining
      if (frame.editsRemaining > 0) {
        if ("*" in frame.node.edges) {
          var insertionNode = frame.node.edges["*"];
        } else {
          var insertionNode = new lunr.TokenSet();
          frame.node.edges["*"] = insertionNode;
        }

        if (frame.str.length == 0) {
          insertionNode.final = true;
        } else {
          stack.push({
            node: insertionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str
          });
        }
      }

      // transposition
      // can only do a transposition if there are edits remaining
      // and there are enough characters to transpose
      if (frame.editsRemaining > 0 && frame.str.length > 1) {
        var charA = frame.str.charAt(0),
            charB = frame.str.charAt(1),
            transposeNode;

        if (charB in frame.node.edges) {
          transposeNode = frame.node.edges[charB];
        } else {
          transposeNode = new lunr.TokenSet();
          frame.node.edges[charB] = transposeNode;
        }

        if (frame.str.length == 1) {
          transposeNode.final = true;
        } else {
          stack.push({
            node: transposeNode,
            editsRemaining: frame.editsRemaining - 1,
            str: charA + frame.str.slice(2)
          });
        }
      }
    }

    return root;
  };

  /**
   * Creates a TokenSet from a string.
   *
   * The string may contain one or more wildcard characters (*)
   * that will allow wildcard matching when intersecting with
   * another TokenSet.
   *
   * @param {string} str - The string to create a TokenSet from.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.fromString = function (str) {
    var node = new lunr.TokenSet(),
        root = node;

    /*
     * Iterates through all characters within the passed string
     * appending a node for each character.
     *
     * When a wildcard character is found then a self
     * referencing edge is introduced to continually match
     * any number of any characters.
     */
    for (var i = 0, len = str.length; i < len; i++) {
      var char = str[i],
          final = i == len - 1;

      if (char == "*") {
        node.edges[char] = node;
        node.final = final;
      } else {
        var next = new lunr.TokenSet();
        next.final = final;

        node.edges[char] = next;
        node = next;
      }
    }

    return root;
  };

  /**
   * Converts this TokenSet into an array of strings
   * contained within the TokenSet.
   *
   * @returns {string[]}
   */
  lunr.TokenSet.prototype.toArray = function () {
    var words = [];

    var stack = [{
      prefix: "",
      node: this
    }];

    while (stack.length) {
      var frame = stack.pop(),
          edges = Object.keys(frame.node.edges),
          len = edges.length;

      if (frame.node.final) {
        /* In Safari, at this point the prefix is sometimes corrupted, see:
         * https://github.com/olivernn/lunr.js/issues/279 Calling any
         * String.prototype method forces Safari to "cast" this string to what
         * it's supposed to be, fixing the bug. */
        frame.prefix.charAt(0);
        words.push(frame.prefix);
      }

      for (var i = 0; i < len; i++) {
        var edge = edges[i];

        stack.push({
          prefix: frame.prefix.concat(edge),
          node: frame.node.edges[edge]
        });
      }
    }

    return words;
  };

  /**
   * Generates a string representation of a TokenSet.
   *
   * This is intended to allow TokenSets to be used as keys
   * in objects, largely to aid the construction and minimisation
   * of a TokenSet. As such it is not designed to be a human
   * friendly representation of the TokenSet.
   *
   * @returns {string}
   */
  lunr.TokenSet.prototype.toString = function () {
    // NOTE: Using Object.keys here as this.edges is very likely
    // to enter 'hash-mode' with many keys being added
    //
    // avoiding a for-in loop here as it leads to the function
    // being de-optimised (at least in V8). From some simple
    // benchmarks the performance is comparable, but allowing
    // V8 to optimize may mean easy performance wins in the future.

    if (this._str) {
      return this._str;
    }

    var str = this.final ? '1' : '0',
        labels = Object.keys(this.edges).sort(),
        len = labels.length;

    for (var i = 0; i < len; i++) {
      var label = labels[i],
          node = this.edges[label];

      str = str + label + node.id;
    }

    return str;
  };

  /**
   * Returns a new TokenSet that is the intersection of
   * this TokenSet and the passed TokenSet.
   *
   * This intersection will take into account any wildcards
   * contained within the TokenSet.
   *
   * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.prototype.intersect = function (b) {
    var output = new lunr.TokenSet(),
        frame = undefined;

    var stack = [{
      qNode: b,
      output: output,
      node: this
    }];

    while (stack.length) {
      frame = stack.pop();

      // NOTE: As with the #toString method, we are using
      // Object.keys and a for loop instead of a for-in loop
      // as both of these objects enter 'hash' mode, causing
      // the function to be de-optimised in V8
      var qEdges = Object.keys(frame.qNode.edges),
          qLen = qEdges.length,
          nEdges = Object.keys(frame.node.edges),
          nLen = nEdges.length;

      for (var q = 0; q < qLen; q++) {
        var qEdge = qEdges[q];

        for (var n = 0; n < nLen; n++) {
          var nEdge = nEdges[n];

          if (nEdge == qEdge || qEdge == '*') {
            var node = frame.node.edges[nEdge],
                qNode = frame.qNode.edges[qEdge],
                final = node.final && qNode.final,
                next = undefined;

            if (nEdge in frame.output.edges) {
              // an edge already exists for this character
              // no need to create a new node, just set the finality
              // bit unless this node is already final
              next = frame.output.edges[nEdge];
              next.final = next.final || final;
            } else {
              // no edge exists yet, must create one
              // set the finality bit and insert it
              // into the output
              next = new lunr.TokenSet();
              next.final = final;
              frame.output.edges[nEdge] = next;
            }

            stack.push({
              qNode: qNode,
              output: next,
              node: node
            });
          }
        }
      }
    }

    return output;
  };
  lunr.TokenSet.Builder = function () {
    this.previousWord = "";
    this.root = new lunr.TokenSet();
    this.uncheckedNodes = [];
    this.minimizedNodes = {};
  };

  lunr.TokenSet.Builder.prototype.insert = function (word) {
    var node,
        commonPrefix = 0;

    if (word < this.previousWord) {
      throw new Error("Out of order word insertion");
    }

    for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
      if (word[i] != this.previousWord[i]) break;
      commonPrefix++;
    }

    this.minimize(commonPrefix);

    if (this.uncheckedNodes.length == 0) {
      node = this.root;
    } else {
      node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
    }

    for (var i = commonPrefix; i < word.length; i++) {
      var nextNode = new lunr.TokenSet(),
          char = word[i];

      node.edges[char] = nextNode;

      this.uncheckedNodes.push({
        parent: node,
        char: char,
        child: nextNode
      });

      node = nextNode;
    }

    node.final = true;
    this.previousWord = word;
  };

  lunr.TokenSet.Builder.prototype.finish = function () {
    this.minimize(0);
  };

  lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
    for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
      var node = this.uncheckedNodes[i],
          childKey = node.child.toString();

      if (childKey in this.minimizedNodes) {
        node.parent.edges[node.char] = this.minimizedNodes[childKey];
      } else {
        // Cache the key for this node since
        // we know it can't change anymore
        node.child._str = childKey;

        this.minimizedNodes[childKey] = node.child;
      }

      this.uncheckedNodes.pop();
    }
  };
  /*!
   * lunr.Index
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * An index contains the built index of all documents and provides a query interface
   * to the index.
   *
   * Usually instances of lunr.Index will not be created using this constructor, instead
   * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
   * used to load previously built and serialized indexes.
   *
   * @constructor
   * @param {Object} attrs - The attributes of the built search index.
   * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
   * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
   * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
   * @param {string[]} attrs.fields - The names of indexed document fields.
   * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
   */
  lunr.Index = function (attrs) {
    this.invertedIndex = attrs.invertedIndex;
    this.fieldVectors = attrs.fieldVectors;
    this.tokenSet = attrs.tokenSet;
    this.fields = attrs.fields;
    this.pipeline = attrs.pipeline;
  };

  /**
   * A result contains details of a document matching a search query.
   * @typedef {Object} lunr.Index~Result
   * @property {string} ref - The reference of the document this result represents.
   * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
   * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
   */

  /**
   * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
   * query language which itself is parsed into an instance of lunr.Query.
   *
   * For programmatically building queries it is advised to directly use lunr.Query, the query language
   * is best used for human entered text rather than program generated text.
   *
   * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
   * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
   * or 'world', though those that contain both will rank higher in the results.
   *
   * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
   * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
   * wildcards will increase the number of documents that will be found but can also have a negative
   * impact on query performance, especially with wildcards at the beginning of a term.
   *
   * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
   * hello in the title field will match this query. Using a field not present in the index will lead
   * to an error being thrown.
   *
   * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
   * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
   * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
   * Avoid large values for edit distance to improve query performance.
   *
   * Each term also supports a presence modifier. By default a term's presence in document is optional, however
   * this can be changed to either required or prohibited. For a term's presence to be required in a document the
   * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
   * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
   * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
   *
   * To escape special characters the backslash character '\' can be used, this allows searches to include
   * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
   * of attempting to apply a boost of 2 to the search term "foo".
   *
   * @typedef {string} lunr.Index~QueryString
   * @example <caption>Simple single term query</caption>
   * hello
   * @example <caption>Multiple term query</caption>
   * hello world
   * @example <caption>term scoped to a field</caption>
   * title:hello
   * @example <caption>term with a boost of 10</caption>
   * hello^10
   * @example <caption>term with an edit distance of 2</caption>
   * hello~2
   * @example <caption>terms with presence modifiers</caption>
   * -foo +bar baz
   */

  /**
   * Performs a search against the index using lunr query syntax.
   *
   * Results will be returned sorted by their score, the most relevant results
   * will be returned first.  For details on how the score is calculated, please see
   * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
   *
   * For more programmatic querying use lunr.Index#query.
   *
   * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
   * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
   * @returns {lunr.Index~Result[]}
   */
  lunr.Index.prototype.search = function (queryString) {
    return this.query(function (query) {
      var parser = new lunr.QueryParser(queryString, query);
      parser.parse();
    });
  };

  /**
   * A query builder callback provides a query object to be used to express
   * the query to perform on the index.
   *
   * @callback lunr.Index~queryBuilder
   * @param {lunr.Query} query - The query object to build up.
   * @this lunr.Query
   */

  /**
   * Performs a query against the index using the yielded lunr.Query object.
   *
   * If performing programmatic queries against the index, this method is preferred
   * over lunr.Index#search so as to avoid the additional query parsing overhead.
   *
   * A query object is yielded to the supplied function which should be used to
   * express the query to be run against the index.
   *
   * Note that although this function takes a callback parameter it is _not_ an
   * asynchronous operation, the callback is just yielded a query object to be
   * customized.
   *
   * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
   * @returns {lunr.Index~Result[]}
   */
  lunr.Index.prototype.query = function (fn) {
    // for each query clause
    // * process terms
    // * expand terms from token set
    // * find matching documents and metadata
    // * get document vectors
    // * score documents

    var query = new lunr.Query(this.fields),
        matchingFields = Object.create(null),
        queryVectors = Object.create(null),
        termFieldCache = Object.create(null),
        requiredMatches = Object.create(null),
        prohibitedMatches = Object.create(null);

    /*
     * To support field level boosts a query vector is created per
     * field. An empty vector is eagerly created to support negated
     * queries.
     */
    for (var i = 0; i < this.fields.length; i++) {
      queryVectors[this.fields[i]] = new lunr.Vector();
    }

    fn.call(query, query);

    for (var i = 0; i < query.clauses.length; i++) {
      /*
       * Unless the pipeline has been disabled for this term, which is
       * the case for terms with wildcards, we need to pass the clause
       * term through the search pipeline. A pipeline returns an array
       * of processed terms. Pipeline functions may expand the passed
       * term, which means we may end up performing multiple index lookups
       * for a single query term.
       */
      var clause = query.clauses[i],
          terms = null,
          clauseMatches = lunr.Set.complete;

      if (clause.usePipeline) {
        terms = this.pipeline.runString(clause.term, {
          fields: clause.fields
        });
      } else {
        terms = [clause.term];
      }

      for (var m = 0; m < terms.length; m++) {
        var term = terms[m];

        /*
         * Each term returned from the pipeline needs to use the same query
         * clause object, e.g. the same boost and or edit distance. The
         * simplest way to do this is to re-use the clause object but mutate
         * its term property.
         */
        clause.term = term;

        /*
         * From the term in the clause we create a token set which will then
         * be used to intersect the indexes token set to get a list of terms
         * to lookup in the inverted index
         */
        var termTokenSet = lunr.TokenSet.fromClause(clause),
            expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();

        /*
         * If a term marked as required does not exist in the tokenSet it is
         * impossible for the search to return any matches. We set all the field
         * scoped required matches set to empty and stop examining any further
         * clauses.
         */
        if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
          for (var k = 0; k < clause.fields.length; k++) {
            var field = clause.fields[k];
            requiredMatches[field] = lunr.Set.empty;
          }

          break;
        }

        for (var j = 0; j < expandedTerms.length; j++) {
          /*
           * For each term get the posting and termIndex, this is required for
           * building the query vector.
           */
          var expandedTerm = expandedTerms[j],
              posting = this.invertedIndex[expandedTerm],
              termIndex = posting._index;

          for (var k = 0; k < clause.fields.length; k++) {
            /*
             * For each field that this query term is scoped by (by default
             * all fields are in scope) we need to get all the document refs
             * that have this term in that field.
             *
             * The posting is the entry in the invertedIndex for the matching
             * term from above.
             */
            var field = clause.fields[k],
                fieldPosting = posting[field],
                matchingDocumentRefs = Object.keys(fieldPosting),
                termField = expandedTerm + "/" + field,
                matchingDocumentsSet = new lunr.Set(matchingDocumentRefs);

            /*
             * if the presence of this term is required ensure that the matching
             * documents are added to the set of required matches for this clause.
             *
             */
            if (clause.presence == lunr.Query.presence.REQUIRED) {
              clauseMatches = clauseMatches.union(matchingDocumentsSet);

              if (requiredMatches[field] === undefined) {
                requiredMatches[field] = lunr.Set.complete;
              }
            }

            /*
             * if the presence of this term is prohibited ensure that the matching
             * documents are added to the set of prohibited matches for this field,
             * creating that set if it does not yet exist.
             */
            if (clause.presence == lunr.Query.presence.PROHIBITED) {
              if (prohibitedMatches[field] === undefined) {
                prohibitedMatches[field] = lunr.Set.empty;
              }

              prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);

              /*
               * Prohibited matches should not be part of the query vector used for
               * similarity scoring and no metadata should be extracted so we continue
               * to the next field
               */
              continue;
            }

            /*
             * The query field vector is populated using the termIndex found for
             * the term and a unit value with the appropriate boost applied.
             * Using upsert because there could already be an entry in the vector
             * for the term we are working with. In that case we just add the scores
             * together.
             */
            queryVectors[field].upsert(termIndex, clause.boost, function (a, b) {
              return a + b;
            });

            /**
             * If we've already seen this term, field combo then we've already collected
             * the matching documents and metadata, no need to go through all that again
             */
            if (termFieldCache[termField]) {
              continue;
            }

            for (var l = 0; l < matchingDocumentRefs.length; l++) {
              /*
               * All metadata for this term/field/document triple
               * are then extracted and collected into an instance
               * of lunr.MatchData ready to be returned in the query
               * results
               */
              var matchingDocumentRef = matchingDocumentRefs[l],
                  matchingFieldRef = new lunr.FieldRef(matchingDocumentRef, field),
                  metadata = fieldPosting[matchingDocumentRef],
                  fieldMatch;

              if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
                matchingFields[matchingFieldRef] = new lunr.MatchData(expandedTerm, field, metadata);
              } else {
                fieldMatch.add(expandedTerm, field, metadata);
              }
            }

            termFieldCache[termField] = true;
          }
        }
      }

      /**
       * If the presence was required we need to update the requiredMatches field sets.
       * We do this after all fields for the term have collected their matches because
       * the clause terms presence is required in _any_ of the fields not _all_ of the
       * fields.
       */
      if (clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k];
          requiredMatches[field] = requiredMatches[field].intersect(clauseMatches);
        }
      }
    }

    /**
     * Need to combine the field scoped required and prohibited
     * matching documents into a global set of required and prohibited
     * matches
     */
    var allRequiredMatches = lunr.Set.complete,
        allProhibitedMatches = lunr.Set.empty;

    for (var i = 0; i < this.fields.length; i++) {
      var field = this.fields[i];

      if (requiredMatches[field]) {
        allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field]);
      }

      if (prohibitedMatches[field]) {
        allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]);
      }
    }

    var matchingFieldRefs = Object.keys(matchingFields),
        results = [],
        matches = Object.create(null);

    /*
     * If the query is negated (contains only prohibited terms)
     * we need to get _all_ fieldRefs currently existing in the
     * index. This is only done when we know that the query is
     * entirely prohibited terms to avoid any cost of getting all
     * fieldRefs unnecessarily.
     *
     * Additionally, blank MatchData must be created to correctly
     * populate the results.
     */
    if (query.isNegated()) {
      matchingFieldRefs = Object.keys(this.fieldVectors);

      for (var i = 0; i < matchingFieldRefs.length; i++) {
        var matchingFieldRef = matchingFieldRefs[i];
        var fieldRef = lunr.FieldRef.fromString(matchingFieldRef);
        matchingFields[matchingFieldRef] = new lunr.MatchData();
      }
    }

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      /*
       * Currently we have document fields that match the query, but we
       * need to return documents. The matchData and scores are combined
       * from multiple fields belonging to the same document.
       *
       * Scores are calculated by field, using the query vectors created
       * above, and combined into a final document score using addition.
       */
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
          docRef = fieldRef.docRef;

      if (!allRequiredMatches.contains(docRef)) {
        continue;
      }

      if (allProhibitedMatches.contains(docRef)) {
        continue;
      }

      var fieldVector = this.fieldVectors[fieldRef],
          score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
          docMatch;

      if ((docMatch = matches[docRef]) !== undefined) {
        docMatch.score += score;
        docMatch.matchData.combine(matchingFields[fieldRef]);
      } else {
        var match = {
          ref: docRef,
          score: score,
          matchData: matchingFields[fieldRef]
        };
        matches[docRef] = match;
        results.push(match);
      }
    }

    /*
     * Sort the results objects by score, highest first.
     */
    return results.sort(function (a, b) {
      return b.score - a.score;
    });
  };

  /**
   * Prepares the index for JSON serialization.
   *
   * The schema for this JSON blob will be described in a
   * separate JSON schema file.
   *
   * @returns {Object}
   */
  lunr.Index.prototype.toJSON = function () {
    var invertedIndex = Object.keys(this.invertedIndex).sort().map(function (term) {
      return [term, this.invertedIndex[term]];
    }, this);

    var fieldVectors = Object.keys(this.fieldVectors).map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()];
    }, this);

    return {
      version: lunr.version,
      fields: this.fields,
      fieldVectors: fieldVectors,
      invertedIndex: invertedIndex,
      pipeline: this.pipeline.toJSON()
    };
  };

  /**
   * Loads a previously serialized lunr.Index
   *
   * @param {Object} serializedIndex - A previously serialized lunr.Index
   * @returns {lunr.Index}
   */
  lunr.Index.load = function (serializedIndex) {
    var attrs = {},
        fieldVectors = {},
        serializedVectors = serializedIndex.fieldVectors,
        invertedIndex = Object.create(null),
        serializedInvertedIndex = serializedIndex.invertedIndex,
        tokenSetBuilder = new lunr.TokenSet.Builder(),
        pipeline = lunr.Pipeline.load(serializedIndex.pipeline);

    if (serializedIndex.version != lunr.version) {
      lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'");
    }

    for (var i = 0; i < serializedVectors.length; i++) {
      var tuple = serializedVectors[i],
          ref = tuple[0],
          elements = tuple[1];

      fieldVectors[ref] = new lunr.Vector(elements);
    }

    for (var i = 0; i < serializedInvertedIndex.length; i++) {
      var tuple = serializedInvertedIndex[i],
          term = tuple[0],
          posting = tuple[1];

      tokenSetBuilder.insert(term);
      invertedIndex[term] = posting;
    }

    tokenSetBuilder.finish();

    attrs.fields = serializedIndex.fields;

    attrs.fieldVectors = fieldVectors;
    attrs.invertedIndex = invertedIndex;
    attrs.tokenSet = tokenSetBuilder.root;
    attrs.pipeline = pipeline;

    return new lunr.Index(attrs);
  };
  /*!
   * lunr.Builder
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.Builder performs indexing on a set of documents and
   * returns instances of lunr.Index ready for querying.
   *
   * All configuration of the index is done via the builder, the
   * fields to index, the document reference, the text processing
   * pipeline and document scoring parameters are all set on the
   * builder before indexing.
   *
   * @constructor
   * @property {string} _ref - Internal reference to the document reference field.
   * @property {string[]} _fields - Internal reference to the document fields to index.
   * @property {object} invertedIndex - The inverted index maps terms to document fields.
   * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
   * @property {object} documentLengths - Keeps track of the length of documents added to the index.
   * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
   * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
   * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
   * @property {number} documentCount - Keeps track of the total number of documents indexed.
   * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
   * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
   * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
   * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
   */
  lunr.Builder = function () {
    this._ref = "id";
    this._fields = Object.create(null);
    this._documents = Object.create(null);
    this.invertedIndex = Object.create(null);
    this.fieldTermFrequencies = {};
    this.fieldLengths = {};
    this.tokenizer = lunr.tokenizer;
    this.pipeline = new lunr.Pipeline();
    this.searchPipeline = new lunr.Pipeline();
    this.documentCount = 0;
    this._b = 0.75;
    this._k1 = 1.2;
    this.termIndex = 0;
    this.metadataWhitelist = [];
  };

  /**
   * Sets the document field used as the document reference. Every document must have this field.
   * The type of this field in the document should be a string, if it is not a string it will be
   * coerced into a string by calling toString.
   *
   * The default ref is 'id'.
   *
   * The ref should _not_ be changed during indexing, it should be set before any documents are
   * added to the index. Changing it during indexing can lead to inconsistent results.
   *
   * @param {string} ref - The name of the reference field in the document.
   */
  lunr.Builder.prototype.ref = function (ref) {
    this._ref = ref;
  };

  /**
   * A function that is used to extract a field from a document.
   *
   * Lunr expects a field to be at the top level of a document, if however the field
   * is deeply nested within a document an extractor function can be used to extract
   * the right field for indexing.
   *
   * @callback fieldExtractor
   * @param {object} doc - The document being added to the index.
   * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
   * @example <caption>Extracting a nested field</caption>
   * function (doc) { return doc.nested.field }
   */

  /**
   * Adds a field to the list of document fields that will be indexed. Every document being
   * indexed should have this field. Null values for this field in indexed documents will
   * not cause errors but will limit the chance of that document being retrieved by searches.
   *
   * All fields should be added before adding documents to the index. Adding fields after
   * a document has been indexed will have no effect on already indexed documents.
   *
   * Fields can be boosted at build time. This allows terms within that field to have more
   * importance when ranking search results. Use a field boost to specify that matches within
   * one field are more important than other fields.
   *
   * @param {string} fieldName - The name of a field to index in all documents.
   * @param {object} attributes - Optional attributes associated with this field.
   * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
   * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
   * @throws {RangeError} fieldName cannot contain unsupported characters '/'
   */
  lunr.Builder.prototype.field = function (fieldName, attributes) {
    if (/\//.test(fieldName)) {
      throw new RangeError("Field '" + fieldName + "' contains illegal character '/'");
    }

    this._fields[fieldName] = attributes || {};
  };

  /**
   * A parameter to tune the amount of field length normalisation that is applied when
   * calculating relevance scores. A value of 0 will completely disable any normalisation
   * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
   * will be clamped to the range 0 - 1.
   *
   * @param {number} number - The value to set for this tuning parameter.
   */
  lunr.Builder.prototype.b = function (number) {
    if (number < 0) {
      this._b = 0;
    } else if (number > 1) {
      this._b = 1;
    } else {
      this._b = number;
    }
  };

  /**
   * A parameter that controls the speed at which a rise in term frequency results in term
   * frequency saturation. The default value is 1.2. Setting this to a higher value will give
   * slower saturation levels, a lower value will result in quicker saturation.
   *
   * @param {number} number - The value to set for this tuning parameter.
   */
  lunr.Builder.prototype.k1 = function (number) {
    this._k1 = number;
  };

  /**
   * Adds a document to the index.
   *
   * Before adding fields to the index the index should have been fully setup, with the document
   * ref and all fields to index already having been specified.
   *
   * The document must have a field name as specified by the ref (by default this is 'id') and
   * it should have all fields defined for indexing, though null or undefined values will not
   * cause errors.
   *
   * Entire documents can be boosted at build time. Applying a boost to a document indicates that
   * this document should rank higher in search results than other documents.
   *
   * @param {object} doc - The document to add to the index.
   * @param {object} attributes - Optional attributes associated with this document.
   * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
   */
  lunr.Builder.prototype.add = function (doc, attributes) {
    var docRef = doc[this._ref],
        fields = Object.keys(this._fields);

    this._documents[docRef] = attributes || {};
    this.documentCount += 1;

    for (var i = 0; i < fields.length; i++) {
      var fieldName = fields[i],
          extractor = this._fields[fieldName].extractor,
          field = extractor ? extractor(doc) : doc[fieldName],
          tokens = this.tokenizer(field, {
        fields: [fieldName]
      }),
          terms = this.pipeline.run(tokens),
          fieldRef = new lunr.FieldRef(docRef, fieldName),
          fieldTerms = Object.create(null);

      this.fieldTermFrequencies[fieldRef] = fieldTerms;
      this.fieldLengths[fieldRef] = 0;

      // store the length of this field for this document
      this.fieldLengths[fieldRef] += terms.length;

      // calculate term frequencies for this field
      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];

        if (fieldTerms[term] == undefined) {
          fieldTerms[term] = 0;
        }

        fieldTerms[term] += 1;

        // add to inverted index
        // create an initial posting if one doesn't exist
        if (this.invertedIndex[term] == undefined) {
          var posting = Object.create(null);
          posting["_index"] = this.termIndex;
          this.termIndex += 1;

          for (var k = 0; k < fields.length; k++) {
            posting[fields[k]] = Object.create(null);
          }

          this.invertedIndex[term] = posting;
        }

        // add an entry for this term/fieldName/docRef to the invertedIndex
        if (this.invertedIndex[term][fieldName][docRef] == undefined) {
          this.invertedIndex[term][fieldName][docRef] = Object.create(null);
        }

        // store all whitelisted metadata about this token in the
        // inverted index
        for (var l = 0; l < this.metadataWhitelist.length; l++) {
          var metadataKey = this.metadataWhitelist[l],
              metadata = term.metadata[metadataKey];

          if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
            this.invertedIndex[term][fieldName][docRef][metadataKey] = [];
          }

          this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
        }
      }
    }
  };

  /**
   * Calculates the average document length for this index
   *
   * @private
   */
  lunr.Builder.prototype.calculateAverageFieldLengths = function () {

    var fieldRefs = Object.keys(this.fieldLengths),
        numberOfFields = fieldRefs.length,
        accumulator = {},
        documentsWithField = {};

    for (var i = 0; i < numberOfFields; i++) {
      var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
          field = fieldRef.fieldName;

      documentsWithField[field] || (documentsWithField[field] = 0);
      documentsWithField[field] += 1;

      accumulator[field] || (accumulator[field] = 0);
      accumulator[field] += this.fieldLengths[fieldRef];
    }

    var fields = Object.keys(this._fields);

    for (var i = 0; i < fields.length; i++) {
      var fieldName = fields[i];
      accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
    }

    this.averageFieldLength = accumulator;
  };

  /**
   * Builds a vector space model of every document using lunr.Vector
   *
   * @private
   */
  lunr.Builder.prototype.createFieldVectors = function () {
    var fieldVectors = {},
        fieldRefs = Object.keys(this.fieldTermFrequencies),
        fieldRefsLength = fieldRefs.length,
        termIdfCache = Object.create(null);

    for (var i = 0; i < fieldRefsLength; i++) {
      var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
          fieldName = fieldRef.fieldName,
          fieldLength = this.fieldLengths[fieldRef],
          fieldVector = new lunr.Vector(),
          termFrequencies = this.fieldTermFrequencies[fieldRef],
          terms = Object.keys(termFrequencies),
          termsLength = terms.length;

      var fieldBoost = this._fields[fieldName].boost || 1,
          docBoost = this._documents[fieldRef.docRef].boost || 1;

      for (var j = 0; j < termsLength; j++) {
        var term = terms[j],
            tf = termFrequencies[term],
            termIndex = this.invertedIndex[term]._index,
            idf,
            score,
            scoreWithPrecision;

        if (termIdfCache[term] === undefined) {
          idf = lunr.idf(this.invertedIndex[term], this.documentCount);
          termIdfCache[term] = idf;
        } else {
          idf = termIdfCache[term];
        }

        score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf);
        score *= fieldBoost;
        score *= docBoost;
        scoreWithPrecision = Math.round(score * 1000) / 1000;
        // Converts 1.23456789 to 1.234.
        // Reducing the precision so that the vectors take up less
        // space when serialised. Doing it now so that they behave
        // the same before and after serialisation. Also, this is
        // the fastest approach to reducing a number's precision in
        // JavaScript.

        fieldVector.insert(termIndex, scoreWithPrecision);
      }

      fieldVectors[fieldRef] = fieldVector;
    }

    this.fieldVectors = fieldVectors;
  };

  /**
   * Creates a token set of all tokens in the index using lunr.TokenSet
   *
   * @private
   */
  lunr.Builder.prototype.createTokenSet = function () {
    this.tokenSet = lunr.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
  };

  /**
   * Builds the index, creating an instance of lunr.Index.
   *
   * This completes the indexing process and should only be called
   * once all documents have been added to the index.
   *
   * @returns {lunr.Index}
   */
  lunr.Builder.prototype.build = function () {
    this.calculateAverageFieldLengths();
    this.createFieldVectors();
    this.createTokenSet();

    return new lunr.Index({
      invertedIndex: this.invertedIndex,
      fieldVectors: this.fieldVectors,
      tokenSet: this.tokenSet,
      fields: Object.keys(this._fields),
      pipeline: this.searchPipeline
    });
  };

  /**
   * Applies a plugin to the index builder.
   *
   * A plugin is a function that is called with the index builder as its context.
   * Plugins can be used to customise or extend the behaviour of the index
   * in some way. A plugin is just a function, that encapsulated the custom
   * behaviour that should be applied when building the index.
   *
   * The plugin function will be called with the index builder as its argument, additional
   * arguments can also be passed when calling use. The function will be called
   * with the index builder as its context.
   *
   * @param {Function} plugin The plugin to apply.
   */
  lunr.Builder.prototype.use = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(this);
    fn.apply(this, args);
  };
  /**
   * Contains and collects metadata about a matching document.
   * A single instance of lunr.MatchData is returned as part of every
   * lunr.Index~Result.
   *
   * @constructor
   * @param {string} term - The term this match data is associated with
   * @param {string} field - The field in which the term was found
   * @param {object} metadata - The metadata recorded about this term in this field
   * @property {object} metadata - A cloned collection of metadata associated with this document.
   * @see {@link lunr.Index~Result}
   */
  lunr.MatchData = function (term, field, metadata) {
    var clonedMetadata = Object.create(null),
        metadataKeys = Object.keys(metadata || {});

    // Cloning the metadata to prevent the original
    // being mutated during match data combination.
    // Metadata is kept in an array within the inverted
    // index so cloning the data can be done with
    // Array#slice
    for (var i = 0; i < metadataKeys.length; i++) {
      var key = metadataKeys[i];
      clonedMetadata[key] = metadata[key].slice();
    }

    this.metadata = Object.create(null);

    if (term !== undefined) {
      this.metadata[term] = Object.create(null);
      this.metadata[term][field] = clonedMetadata;
    }
  };

  /**
   * An instance of lunr.MatchData will be created for every term that matches a
   * document. However only one instance is required in a lunr.Index~Result. This
   * method combines metadata from another instance of lunr.MatchData with this
   * objects metadata.
   *
   * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
   * @see {@link lunr.Index~Result}
   */
  lunr.MatchData.prototype.combine = function (otherMatchData) {
    var terms = Object.keys(otherMatchData.metadata);

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i],
          fields = Object.keys(otherMatchData.metadata[term]);

      if (this.metadata[term] == undefined) {
        this.metadata[term] = Object.create(null);
      }

      for (var j = 0; j < fields.length; j++) {
        var field = fields[j],
            keys = Object.keys(otherMatchData.metadata[term][field]);

        if (this.metadata[term][field] == undefined) {
          this.metadata[term][field] = Object.create(null);
        }

        for (var k = 0; k < keys.length; k++) {
          var key = keys[k];

          if (this.metadata[term][field][key] == undefined) {
            this.metadata[term][field][key] = otherMatchData.metadata[term][field][key];
          } else {
            this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
          }
        }
      }
    }
  };

  /**
   * Add metadata for a term/field pair to this instance of match data.
   *
   * @param {string} term - The term this match data is associated with
   * @param {string} field - The field in which the term was found
   * @param {object} metadata - The metadata recorded about this term in this field
   */
  lunr.MatchData.prototype.add = function (term, field, metadata) {
    if (!(term in this.metadata)) {
      this.metadata[term] = Object.create(null);
      this.metadata[term][field] = metadata;
      return;
    }

    if (!(field in this.metadata[term])) {
      this.metadata[term][field] = metadata;
      return;
    }

    var metadataKeys = Object.keys(metadata);

    for (var i = 0; i < metadataKeys.length; i++) {
      var key = metadataKeys[i];

      if (key in this.metadata[term][field]) {
        this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key]);
      } else {
        this.metadata[term][field][key] = metadata[key];
      }
    }
  };
  /**
   * A lunr.Query provides a programmatic way of defining queries to be performed
   * against a {@link lunr.Index}.
   *
   * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
   * so the query object is pre-initialized with the right index fields.
   *
   * @constructor
   * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
   * @property {string[]} allFields - An array of all available fields in a lunr.Index.
   */
  lunr.Query = function (allFields) {
    this.clauses = [];
    this.allFields = allFields;
  };

  /**
   * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
   *
   * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
   * concatenation.
   *
   * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
   *
   * @constant
   * @default
   * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
   * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
   * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
   * @see lunr.Query~Clause
   * @see lunr.Query#clause
   * @see lunr.Query#term
   * @example <caption>query term with trailing wildcard</caption>
   * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
   * @example <caption>query term with leading and trailing wildcard</caption>
   * query.term('foo', {
   *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
   * })
   */

  lunr.Query.wildcard = new String("*");
  lunr.Query.wildcard.NONE = 0;
  lunr.Query.wildcard.LEADING = 1;
  lunr.Query.wildcard.TRAILING = 2;

  /**
   * Constants for indicating what kind of presence a term must have in matching documents.
   *
   * @constant
   * @enum {number}
   * @see lunr.Query~Clause
   * @see lunr.Query#clause
   * @see lunr.Query#term
   * @example <caption>query term with required presence</caption>
   * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
   */
  lunr.Query.presence = {
    /**
     * Term's presence in a document is optional, this is the default value.
     */
    OPTIONAL: 1,

    /**
     * Term's presence in a document is required, documents that do not contain
     * this term will not be returned.
     */
    REQUIRED: 2,

    /**
     * Term's presence in a document is prohibited, documents that do contain
     * this term will not be returned.
     */
    PROHIBITED: 3

    /**
     * A single clause in a {@link lunr.Query} contains a term and details on how to
     * match that term against a {@link lunr.Index}.
     *
     * @typedef {Object} lunr.Query~Clause
     * @property {string[]} fields - The fields in an index this clause should be matched against.
     * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
     * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
     * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
     * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
     * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
     */

    /**
     * Adds a {@link lunr.Query~Clause} to this query.
     *
     * Unless the clause contains the fields to be matched all fields will be matched. In addition
     * a default boost of 1 is applied to the clause.
     *
     * @param {lunr.Query~Clause} clause - The clause to add to this query.
     * @see lunr.Query~Clause
     * @returns {lunr.Query}
     */
  };lunr.Query.prototype.clause = function (clause) {
    if (!('fields' in clause)) {
      clause.fields = this.allFields;
    }

    if (!('boost' in clause)) {
      clause.boost = 1;
    }

    if (!('usePipeline' in clause)) {
      clause.usePipeline = true;
    }

    if (!('wildcard' in clause)) {
      clause.wildcard = lunr.Query.wildcard.NONE;
    }

    if (clause.wildcard & lunr.Query.wildcard.LEADING && clause.term.charAt(0) != lunr.Query.wildcard) {
      clause.term = "*" + clause.term;
    }

    if (clause.wildcard & lunr.Query.wildcard.TRAILING && clause.term.slice(-1) != lunr.Query.wildcard) {
      clause.term = "" + clause.term + "*";
    }

    if (!('presence' in clause)) {
      clause.presence = lunr.Query.presence.OPTIONAL;
    }

    this.clauses.push(clause);

    return this;
  };

  /**
   * A negated query is one in which every clause has a presence of
   * prohibited. These queries require some special processing to return
   * the expected results.
   *
   * @returns boolean
   */
  lunr.Query.prototype.isNegated = function () {
    for (var i = 0; i < this.clauses.length; i++) {
      if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
        return false;
      }
    }

    return true;
  };

  /**
   * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
   * to the list of clauses that make up this query.
   *
   * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
   * to a token or token-like string should be done before calling this method.
   *
   * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
   * array, each term in the array will share the same options.
   *
   * @param {object|object[]} term - The term(s) to add to the query.
   * @param {object} [options] - Any additional properties to add to the query clause.
   * @returns {lunr.Query}
   * @see lunr.Query#clause
   * @see lunr.Query~Clause
   * @example <caption>adding a single term to a query</caption>
   * query.term("foo")
   * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
   * query.term("foo", {
   *   fields: ["title"],
   *   boost: 10,
   *   wildcard: lunr.Query.wildcard.TRAILING
   * })
   * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
   * query.term(lunr.tokenizer("foo bar"))
   */
  lunr.Query.prototype.term = function (term, options) {
    if (Array.isArray(term)) {
      term.forEach(function (t) {
        this.term(t, lunr.utils.clone(options));
      }, this);
      return this;
    }

    var clause = options || {};
    clause.term = term.toString();

    this.clause(clause);

    return this;
  };
  lunr.QueryParseError = function (message, start, end) {
    this.name = "QueryParseError";
    this.message = message;
    this.start = start;
    this.end = end;
  };

  lunr.QueryParseError.prototype = new Error();
  lunr.QueryLexer = function (str) {
    this.lexemes = [];
    this.str = str;
    this.length = str.length;
    this.pos = 0;
    this.start = 0;
    this.escapeCharPositions = [];
  };

  lunr.QueryLexer.prototype.run = function () {
    var state = lunr.QueryLexer.lexText;

    while (state) {
      state = state(this);
    }
  };

  lunr.QueryLexer.prototype.sliceString = function () {
    var subSlices = [],
        sliceStart = this.start,
        sliceEnd = this.pos;

    for (var i = 0; i < this.escapeCharPositions.length; i++) {
      sliceEnd = this.escapeCharPositions[i];
      subSlices.push(this.str.slice(sliceStart, sliceEnd));
      sliceStart = sliceEnd + 1;
    }

    subSlices.push(this.str.slice(sliceStart, this.pos));
    this.escapeCharPositions.length = 0;

    return subSlices.join('');
  };

  lunr.QueryLexer.prototype.emit = function (type) {
    this.lexemes.push({
      type: type,
      str: this.sliceString(),
      start: this.start,
      end: this.pos
    });

    this.start = this.pos;
  };

  lunr.QueryLexer.prototype.escapeCharacter = function () {
    this.escapeCharPositions.push(this.pos - 1);
    this.pos += 1;
  };

  lunr.QueryLexer.prototype.next = function () {
    if (this.pos >= this.length) {
      return lunr.QueryLexer.EOS;
    }

    var char = this.str.charAt(this.pos);
    this.pos += 1;
    return char;
  };

  lunr.QueryLexer.prototype.width = function () {
    return this.pos - this.start;
  };

  lunr.QueryLexer.prototype.ignore = function () {
    if (this.start == this.pos) {
      this.pos += 1;
    }

    this.start = this.pos;
  };

  lunr.QueryLexer.prototype.backup = function () {
    this.pos -= 1;
  };

  lunr.QueryLexer.prototype.acceptDigitRun = function () {
    var char, charCode;

    do {
      char = this.next();
      charCode = char.charCodeAt(0);
    } while (charCode > 47 && charCode < 58);

    if (char != lunr.QueryLexer.EOS) {
      this.backup();
    }
  };

  lunr.QueryLexer.prototype.more = function () {
    return this.pos < this.length;
  };

  lunr.QueryLexer.EOS = 'EOS';
  lunr.QueryLexer.FIELD = 'FIELD';
  lunr.QueryLexer.TERM = 'TERM';
  lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE';
  lunr.QueryLexer.BOOST = 'BOOST';
  lunr.QueryLexer.PRESENCE = 'PRESENCE';

  lunr.QueryLexer.lexField = function (lexer) {
    lexer.backup();
    lexer.emit(lunr.QueryLexer.FIELD);
    lexer.ignore();
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexTerm = function (lexer) {
    if (lexer.width() > 1) {
      lexer.backup();
      lexer.emit(lunr.QueryLexer.TERM);
    }

    lexer.ignore();

    if (lexer.more()) {
      return lunr.QueryLexer.lexText;
    }
  };

  lunr.QueryLexer.lexEditDistance = function (lexer) {
    lexer.ignore();
    lexer.acceptDigitRun();
    lexer.emit(lunr.QueryLexer.EDIT_DISTANCE);
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexBoost = function (lexer) {
    lexer.ignore();
    lexer.acceptDigitRun();
    lexer.emit(lunr.QueryLexer.BOOST);
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexEOS = function (lexer) {
    if (lexer.width() > 0) {
      lexer.emit(lunr.QueryLexer.TERM);
    }
  };

  // This matches the separator used when tokenising fields
  // within a document. These should match otherwise it is
  // not possible to search for some tokens within a document.
  //
  // It is possible for the user to change the separator on the
  // tokenizer so it _might_ clash with any other of the special
  // characters already used within the search string, e.g. :.
  //
  // This means that it is possible to change the separator in
  // such a way that makes some words unsearchable using a search
  // string.
  lunr.QueryLexer.termSeparator = lunr.tokenizer.separator;

  lunr.QueryLexer.lexText = function (lexer) {
    while (true) {
      var char = lexer.next();

      if (char == lunr.QueryLexer.EOS) {
        return lunr.QueryLexer.lexEOS;
      }

      // Escape character is '\'
      if (char.charCodeAt(0) == 92) {
        lexer.escapeCharacter();
        continue;
      }

      if (char == ":") {
        return lunr.QueryLexer.lexField;
      }

      if (char == "~") {
        lexer.backup();
        if (lexer.width() > 0) {
          lexer.emit(lunr.QueryLexer.TERM);
        }
        return lunr.QueryLexer.lexEditDistance;
      }

      if (char == "^") {
        lexer.backup();
        if (lexer.width() > 0) {
          lexer.emit(lunr.QueryLexer.TERM);
        }
        return lunr.QueryLexer.lexBoost;
      }

      // "+" indicates term presence is required
      // checking for length to ensure that only
      // leading "+" are considered
      if (char == "+" && lexer.width() === 1) {
        lexer.emit(lunr.QueryLexer.PRESENCE);
        return lunr.QueryLexer.lexText;
      }

      // "-" indicates term presence is prohibited
      // checking for length to ensure that only
      // leading "-" are considered
      if (char == "-" && lexer.width() === 1) {
        lexer.emit(lunr.QueryLexer.PRESENCE);
        return lunr.QueryLexer.lexText;
      }

      if (char.match(lunr.QueryLexer.termSeparator)) {
        return lunr.QueryLexer.lexTerm;
      }
    }
  };

  lunr.QueryParser = function (str, query) {
    this.lexer = new lunr.QueryLexer(str);
    this.query = query;
    this.currentClause = {};
    this.lexemeIdx = 0;
  };

  lunr.QueryParser.prototype.parse = function () {
    this.lexer.run();
    this.lexemes = this.lexer.lexemes;

    var state = lunr.QueryParser.parseClause;

    while (state) {
      state = state(this);
    }

    return this.query;
  };

  lunr.QueryParser.prototype.peekLexeme = function () {
    return this.lexemes[this.lexemeIdx];
  };

  lunr.QueryParser.prototype.consumeLexeme = function () {
    var lexeme = this.peekLexeme();
    this.lexemeIdx += 1;
    return lexeme;
  };

  lunr.QueryParser.prototype.nextClause = function () {
    var completedClause = this.currentClause;
    this.query.clause(completedClause);
    this.currentClause = {};
  };

  lunr.QueryParser.parseClause = function (parser) {
    var lexeme = parser.peekLexeme();

    if (lexeme == undefined) {
      return;
    }

    switch (lexeme.type) {
      case lunr.QueryLexer.PRESENCE:
        return lunr.QueryParser.parsePresence;
      case lunr.QueryLexer.FIELD:
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expected either a field or a term, found " + lexeme.type;

        if (lexeme.str.length >= 1) {
          errorMessage += " with value '" + lexeme.str + "'";
        }

        throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }
  };

  lunr.QueryParser.parsePresence = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    switch (lexeme.str) {
      case "-":
        parser.currentClause.presence = lunr.Query.presence.PROHIBITED;
        break;
      case "+":
        parser.currentClause.presence = lunr.Query.presence.REQUIRED;
        break;
      default:
        var errorMessage = "unrecognised presence operator'" + lexeme.str + "'";
        throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      var errorMessage = "expecting term or field, found nothing";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.FIELD:
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseField = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    if (parser.query.allFields.indexOf(lexeme.str) == -1) {
      var possibleFields = parser.query.allFields.map(function (f) {
        return "'" + f + "'";
      }).join(', '),
          errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields;

      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.fields = [lexeme.str];

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      var errorMessage = "expecting term, found nothing";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expecting term, found '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseTerm = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    parser.currentClause.term = lexeme.str.toLowerCase();

    if (lexeme.str.indexOf("*") != -1) {
      parser.currentClause.usePipeline = false;
    }

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseEditDistance = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    var editDistance = parseInt(lexeme.str, 10);

    if (isNaN(editDistance)) {
      var errorMessage = "edit distance must be numeric";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.editDistance = editDistance;

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseBoost = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    var boost = parseInt(lexeme.str, 10);

    if (isNaN(boost)) {
      var errorMessage = "boost must be numeric";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.boost = boost;

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  }

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory();
    } else {
      // Browser globals (root is window)
      root.lunr = factory();
    }
  })(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr;
  });
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(40);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(42);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(46);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(43);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(44);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(45);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (( false ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
})(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return document.cookie = key + '=' + value + stringifiedAttributes;
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(48);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TableOfContents = __webpack_require__(50);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: _TableOfContents2.default
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
var toLevel = function toLevel(tagName) {
  return tagName.replace(/\D/g, '');
};

var toItem = function toItem(el) {
  return { el: el, level: toLevel(el.tagName), children: [] };
};

var toItems = function toItems(els) {
  return [].reduce.call(els, function (items, el) {
    return items.concat(toItem(el));
  }, []);
};

var nextWithLowerLevel = function nextWithLowerLevel(item, items) {
  items.reduce();
};

var toTOC = function toTOC(items) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var current = null;
  var toc = [];
  for (var i = idx; i < items.length; i++) {
    var next = items[i];
    if (current === null) {
      current = next;
    } else if (current.level === next.level) {
      toc.push(current);
      current = next;
    } else if (current.level > next.level) {
      toc.push(current);
      return toc;
    } else if (current.level < next.level) {
      current.children = toTOC(items, i);
      i += current.children.length - 1;
      toc.push(current);
      current = null;
    }
  }
  if (current !== null) {
    toc.push(current);
  }
  return toc;
};

var render = function render(el) {
  var ref = typeof el === "string" ? document.querySelector(el) : el;
  if (!(ref instanceof HTMLElement)) return;

  var els = document.querySelectorAll("h2, h3, h4, h5, h6");
  var items = toItems(els);
  var toc = toTOC(items);
  if (toc.length == 0) {
    return;
  }

  ref.appendChild(JSX.createElement(
    "label",
    { "class": "md-nav__title", "for": "__toc" },
    "Table of contents"
  ));
  var list = JSX.createElement("ul", { "class": "md-nav__list", "data-md-scrollfix": true });
  ref.appendChild(list);
  for (var i = 0; i < toc.length; i++) {
    var tocItem = toc[i];
    list.appendChild(TocItem(tocItem));
  }
};

var TocItem = function TocItem(tocItem) {
  return JSX.createElement(
    "li",
    { "class": "md-nav__item" },
    JSX.createElement(
      "a",
      { href: "#" + tocItem.el.id, title: tocItem.el.id, "class": "md-nav__link" },
      tocItem.el.innerHTML
    ),
    tocItem.children.length > 0 && JSX.createElement(
      "nav",
      { "class": "md-nav" },
      JSX.createElement(
        "ul",
        { "class": "md-nav__list" },
        tocItem.children.map(function (child) {
          return TocItem(child);
        })
      )
    )
  );
};

exports.default = render;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTYyY2I3Y2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFibGVPZkNvbnRlbnRzL1RhYmxlT2ZDb250ZW50cy5qc3giXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4IiwiZmV0Y2giLCJiaW5kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsImkiLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwib25sb2FkIiwicmVzcG9uc2UiLCJvbmVycm9yIiwic2VuZCIsImJvZHkiLCJhbGwiLCJoZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VVUkwiLCJjbG9uZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJqc29uIiwidGhlbiIsIkpTT04iLCJwYXJzZSIsImJsb2IiLCJCbG9iIiwiZW50cmllcyIsImdldCIsIm4iLCJoYXMiLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJNYXRlcmlhbCIsIkV2ZW50IiwiSFRNTEVsZW1lbnQiLCJGYXN0Q2xpY2siLCJhdHRhY2giLCJNb2Rlcm5penIiLCJhZGRUZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ0YWJsZXMiLCJ3cmFwIiwidGFibGUiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDbGlwYm9hcmQiLCJpc1N1cHBvcnRlZCIsImJsb2NrcyIsImJsb2NrIiwiaWQiLCJidXR0b24iLCJwYXJlbnQiLCJjb3B5Iiwib24iLCJtZXNzYWdlIiwiYWN0aW9uIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhclNlbGVjdGlvbiIsImRhdGFzZXQiLCJtZFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJkZXRhaWxzIiwic3VtbWFyeSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyaW5nIiwiSFRNTERldGFpbHNFbGVtZW50IiwibG9jIiwiaW9zIiwic2Nyb2xsYWJsZSIsIml0ZW0iLCJ0b3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJIZWFkZXIiLCJTaGFkb3ciLCJUaXRsZSIsIlRhYnMiLCJUb2dnbGUiLCJNYXRjaE1lZGlhIiwiU2lkZWJhciIsIlBvc2l0aW9uIiwiVGFibGVPZkNvbnRlbnRzIiwicmVuZGVyIiwiYmx1ciIsIk5hdiIsIkJsdXIiLCJjb2xsYXBzaWJsZXMiLCJjb2xsYXBzZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJDb2xsYXBzZSIsIlNjcm9sbGluZyIsIlNlYXJjaCIsIkxvY2siLCJSZXN1bHQiLCJiYXNlIiwiZGF0YSIsIm1hcCIsImRvYyIsInBlcm1hbGluayIsInF1ZXJ5IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwidG9nZ2xlIiwiY2hlY2tlZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkhUTUxMaW5rRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsIkhUTUxBbmNob3JFbGVtZW50IiwibWRTb3VyY2UiLCJTb3VyY2UiLCJBZGFwdGVyIiwiR2l0SHViIiwic291cmNlcyIsIlJlcG9zaXRvcnkiLCJzb3VyY2UiLCJmYWN0cyIsImFwcCIsImNlIiwiY2FuY2VsYWJsZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFcnJvciIsInBhcmFtcyIsImV2dCIsIm9yaWdQcmV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInNldFRpbWVvdXRGdW5jIiwibm9vcCIsImZuIiwidGhpc0FyZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlIiwicmV0IiwibmV3VmFsdWUiLCJmaW5hbGUiLCJfdW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJsZW4iLCJIYW5kbGVyIiwiZG9uZSIsInJlYXNvbiIsImV4IiwicHJvbSIsImNvbnN0cnVjdG9yIiwicHJvbWlzZUZpbmFsbHkiLCJhcnIiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic2NvcGUiLCJnbG9iYWwiLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJ0YXNrIiwicnVuIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJwcm9jZXNzIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImZpbmFsbHlDb25zdHJ1Y3RvciIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImwiLCJjIiwiZCIsImdldHRlciIsIm8iLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX19lc01vZHVsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwibW9kIiwic2VsZWN0IiwiY2xpcGJvYXJkQWN0aW9uIiwiX3NlbGVjdCIsIl9zZWxlY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJDbGlwYm9hcmRBY3Rpb24iLCJyZXNvbHZlT3B0aW9ucyIsImluaXRTZWxlY3Rpb24iLCJjb250YWluZXIiLCJlbWl0dGVyIiwic2VsZWN0ZWRUZXh0Iiwic2VsZWN0RmFrZSIsInNlbGVjdFRhcmdldCIsIl90aGlzIiwiaXNSVEwiLCJyZW1vdmVGYWtlIiwiZmFrZUhhbmRsZXJDYWxsYmFjayIsImZha2VIYW5kbGVyIiwiZmFrZUVsZW0iLCJzdHlsZSIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsInBvc2l0aW9uIiwieVBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJjb3B5VGV4dCIsInN1Y2NlZWRlZCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlUmVzdWx0IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZGVzdHJveSIsInNldCIsIl9hY3Rpb24iLCJub2RlVHlwZSIsIl90YXJnZXQiLCJpcyIsImRlbGVnYXRlIiwidHlwZSIsInN0cmluZyIsImxpc3Rlbk5vZGUiLCJub2RlTGlzdCIsImxpc3Rlbk5vZGVMaXN0IiwibGlzdGVuU2VsZWN0b3IiLCJzZWxlY3RvciIsIkUiLCJjdHgiLCJsaXN0ZW5lciIsIl8iLCJldnRBcnIiLCJldnRzIiwibGl2ZUV2ZW50cyIsInRpbnlFbWl0dGVyIiwiZ29vZExpc3RlbmVyIiwiY2xpcGJvYXJkIiwiX2NsaXBib2FyZEFjdGlvbiIsIl90aW55RW1pdHRlciIsIl9nb29kTGlzdGVuZXIiLCJfY2xpcGJvYXJkQWN0aW9uMiIsIl90aW55RW1pdHRlcjIiLCJfZ29vZExpc3RlbmVyMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfRW1pdHRlciIsImxpc3RlbkNsaWNrIiwiZGVmYXVsdEFjdGlvbiIsImRlZmF1bHRUYXJnZXQiLCJkZWZhdWx0VGV4dCIsIl90aGlzMiIsIm9uQ2xpY2siLCJkZWxlZ2F0ZVRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsImFjdGlvbnMiLCJzdXBwb3J0IiwicXVlcnlDb21tYW5kU3VwcG9ydGVkIiwic3VmZml4IiwiZWxlbWVudCIsImF0dHJpYnV0ZSIsIkRPQ1VNRU5UX05PREVfVFlQRSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwicHJvdG8iLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwiX2RlbGVnYXRlIiwidXNlQ2FwdHVyZSIsImxpc3RlbmVyRm4iLCJlbGVtZW50cyIsIlN0cmluZyIsIm5vZGVOYW1lIiwiaXNSZWFkT25seSIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJsYXllciIsIm9sZE9uQ2xpY2siLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsInRhcERlbGF5IiwidGFwVGltZW91dCIsIm5vdE5lZWRlZCIsImNvbnRleHQiLCJtZXRob2RzIiwiZGV2aWNlSXNBbmRyb2lkIiwib25Nb3VzZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJjYXB0dXJlIiwicm12IiwiaGlqYWNrZWQiLCJhZHYiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJvbmNsaWNrIiwiZGV2aWNlSXNXaW5kb3dzUGhvbmUiLCJkZXZpY2VJc0lPUyIsInRlc3QiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm5lZWRzRm9jdXMiLCJyZWFkT25seSIsInNlbmRDbGljayIsImNsaWNrRXZlbnQiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwiaW5pdE1vdXNlRXZlbnQiLCJkZXRlcm1pbmVFdmVudFR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZm9yd2FyZGVkVG91Y2hFdmVudCIsInRhZ05hbWUiLCJ1cGRhdGVTY3JvbGxQYXJlbnQiLCJzY3JvbGxQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZmFzdENsaWNrU2Nyb2xsUGFyZW50IiwiY29udGFpbnMiLCJmYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wIiwiZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCIsImV2ZW50VGFyZ2V0IiwiVEVYVF9OT0RFIiwidGFyZ2V0VG91Y2hlcyIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJ0aW1lU3RhbXAiLCJwYWdlWCIsInBhZ2VZIiwibGFzdENsaWNrVGltZSIsInRvdWNoSGFzTW92ZWQiLCJib3VuZGFyeSIsImFicyIsImZpbmRDb250cm9sIiwibGFiZWxFbGVtZW50IiwiY29udHJvbCIsImh0bWxGb3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsInBlcm1pdHRlZCIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0IiwiZXhlYyIsInNjcm9sbFdpZHRoIiwib3V0ZXJXaWR0aCIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaEFjdGlvbiIsIm1xIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbml0IiwiaW5kZXhfIiwib2Zmc2V0XyIsImRpcl8iLCJhbmNob3JzXyIsInJlZHVjZSIsImFuY2hvcnMiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJtYWluIiwid2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJ0b2dnbGVzIiwicGFuZSIsIm5leHRFbGVtZW50U2libGluZyIsImxvY2tfIiwic2Nyb2xsVG8iLCJlc2NhcGVIVE1MIiwiY3JlYXRlVGV4dE5vZGUiLCJ0cnVuY2F0ZSIsImxpc3QiLCJkYXRhXyIsIm1ldGFfIiwibGlzdF8iLCJtZXNzYWdlXyIsInBsYWNlaG9sZGVyIiwibm9uZSIsIm9uZSIsIm90aGVyIiwidG9rZW5pemVyIiwibHVuciIsInNlcGFyYXRvciIsImxhbmdfIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGFuZyIsInRyaW0iLCJkb2NzXyIsImRvY3MiLCJwYXRoIiwiY29udGVudHMiLCJjaGFyIiwiTWFwIiwic3RhY2tfIiwiZmlsdGVycyIsInRyaW1tZXIiLCJzdG9wV29yZEZpbHRlciIsInBpcGVsaW5lIiwicmVzdWx0IiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJzcGxpY2UiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsIm1hdGNoT3BlcmF0b3JzUmUiLCJzdHIiLCJidWlsZGVyIiwiQnVpbGRlciIsInN0ZW1tZXIiLCJzZWFyY2hQaXBlbGluZSIsImJ1aWxkIiwidXRpbHMiLCJhc1N0cmluZyIsIkZpZWxkUmVmIiwiZG9jUmVmIiwiZmllbGROYW1lIiwic3RyaW5nVmFsdWUiLCJfc3RyaW5nVmFsdWUiLCJqb2luZXIiLCJmcm9tU3RyaW5nIiwiZmllbGRSZWYiLCJTZXQiLCJjb21wbGV0ZSIsImludGVyc2VjdCIsInVuaW9uIiwiZW1wdHkiLCJhIiwiYiIsImludGVyc2VjdGlvbiIsImlkZiIsInBvc3RpbmciLCJkb2N1bWVudENvdW50IiwiZG9jdW1lbnRzV2l0aFRlcm0iLCJ4IiwibG9nIiwiVG9rZW4iLCJtZXRhZGF0YSIsInQiLCJ0b2tlbnMiLCJzbGljZUVuZCIsInNsaWNlU3RhcnQiLCJjaGFyQXQiLCJzbGljZUxlbmd0aCIsInRva2VuTWV0YWRhdGEiLCJQaXBlbGluZSIsIl9zdGFjayIsInJlZ2lzdGVyZWRGdW5jdGlvbnMiLCJyZWdpc3RlckZ1bmN0aW9uIiwid2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkIiwiaXNSZWdpc3RlcmVkIiwibG9hZCIsInNlcmlhbGlzZWQiLCJmbk5hbWUiLCJmbnMiLCJhZnRlciIsImV4aXN0aW5nRm4iLCJuZXdGbiIsInBvcyIsImJlZm9yZSIsInN0YWNrTGVuZ3RoIiwibWVtbyIsImoiLCJrIiwicnVuU3RyaW5nIiwidG9KU09OIiwiVmVjdG9yIiwiX21hZ25pdHVkZSIsInBvc2l0aW9uRm9ySW5kZXgiLCJzdGFydCIsInBpdm90UG9pbnQiLCJmbG9vciIsInBpdm90SW5kZXgiLCJpbnNlcnQiLCJpbnNlcnRJZHgiLCJ1cHNlcnQiLCJtYWduaXR1ZGUiLCJzdW1PZlNxdWFyZXMiLCJlbGVtZW50c0xlbmd0aCIsInNxcnQiLCJkb3QiLCJvdGhlclZlY3RvciIsImRvdFByb2R1Y3QiLCJhTGVuIiwiYkxlbiIsImFWYWwiLCJiVmFsIiwic2ltaWxhcml0eSIsInRvQXJyYXkiLCJvdXRwdXQiLCJzdGVwMmxpc3QiLCJzdGVwM2xpc3QiLCJ2IiwiQyIsIlYiLCJtZ3IwIiwibWVxMSIsIm1ncjEiLCJzX3YiLCJyZV9tZ3IwIiwicmVfbWdyMSIsInJlX21lcTEiLCJyZV9zX3YiLCJyZV8xYSIsInJlMl8xYSIsInJlXzFiIiwicmUyXzFiIiwicmVfMWJfMiIsInJlMl8xYl8yIiwicmUzXzFiXzIiLCJyZTRfMWJfMiIsInJlXzFjIiwicmVfMiIsInJlXzMiLCJyZV80IiwicmUyXzQiLCJyZV81IiwicmVfNV8xIiwicmUzXzUiLCJwb3J0ZXJTdGVtbWVyIiwidyIsInN0ZW0iLCJmaXJzdGNoIiwicmUiLCJyZTIiLCJyZTMiLCJyZTQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImZwIiwiZ2VuZXJhdGVTdG9wV29yZEZpbHRlciIsInN0b3BXb3JkcyIsIndvcmRzIiwic3RvcFdvcmQiLCJUb2tlblNldCIsImZpbmFsIiwiZWRnZXMiLCJfbmV4dElkIiwiZnJvbUFycmF5IiwiZmluaXNoIiwiZnJvbUNsYXVzZSIsImNsYXVzZSIsImZyb21GdXp6eVN0cmluZyIsImVkaXREaXN0YW5jZSIsInN0YWNrIiwiZWRpdHNSZW1haW5pbmciLCJmcmFtZSIsInBvcCIsIm5vRWRpdE5vZGUiLCJkZWxldGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiaW5zZXJ0aW9uTm9kZSIsImNoYXJBIiwiY2hhckIiLCJ0cmFuc3Bvc2VOb2RlIiwibmV4dCIsInByZWZpeCIsImVkZ2UiLCJfc3RyIiwic29ydCIsInFOb2RlIiwicUVkZ2VzIiwicUxlbiIsIm5FZGdlcyIsIm5MZW4iLCJxIiwicUVkZ2UiLCJuRWRnZSIsInByZXZpb3VzV29yZCIsInVuY2hlY2tlZE5vZGVzIiwibWluaW1pemVkTm9kZXMiLCJ3b3JkIiwiY29tbW9uUHJlZml4IiwibWluaW1pemUiLCJjaGlsZCIsIm5leHROb2RlIiwiZG93blRvIiwiY2hpbGRLZXkiLCJJbmRleCIsImF0dHJzIiwiaW52ZXJ0ZWRJbmRleCIsImZpZWxkVmVjdG9ycyIsInRva2VuU2V0IiwiZmllbGRzIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJwYXJzZXIiLCJRdWVyeVBhcnNlciIsIm1hdGNoaW5nRmllbGRzIiwicXVlcnlWZWN0b3JzIiwidGVybUZpZWxkQ2FjaGUiLCJyZXF1aXJlZE1hdGNoZXMiLCJwcm9oaWJpdGVkTWF0Y2hlcyIsImNsYXVzZXMiLCJ0ZXJtcyIsImNsYXVzZU1hdGNoZXMiLCJ1c2VQaXBlbGluZSIsInRlcm1Ub2tlblNldCIsImV4cGFuZGVkVGVybXMiLCJwcmVzZW5jZSIsIlJFUVVJUkVEIiwiZXhwYW5kZWRUZXJtIiwidGVybUluZGV4IiwiX2luZGV4IiwiZmllbGRQb3N0aW5nIiwibWF0Y2hpbmdEb2N1bWVudFJlZnMiLCJ0ZXJtRmllbGQiLCJtYXRjaGluZ0RvY3VtZW50c1NldCIsIlBST0hJQklURUQiLCJtYXRjaGluZ0RvY3VtZW50UmVmIiwibWF0Y2hpbmdGaWVsZFJlZiIsImZpZWxkTWF0Y2giLCJNYXRjaERhdGEiLCJhbGxSZXF1aXJlZE1hdGNoZXMiLCJhbGxQcm9oaWJpdGVkTWF0Y2hlcyIsIm1hdGNoaW5nRmllbGRSZWZzIiwicmVzdWx0cyIsImlzTmVnYXRlZCIsImZpZWxkVmVjdG9yIiwic2NvcmUiLCJkb2NNYXRjaCIsIm1hdGNoRGF0YSIsImNvbWJpbmUiLCJzZXJpYWxpemVkSW5kZXgiLCJzZXJpYWxpemVkVmVjdG9ycyIsInNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4IiwidG9rZW5TZXRCdWlsZGVyIiwidHVwbGUiLCJfcmVmIiwiX2ZpZWxkcyIsIl9kb2N1bWVudHMiLCJmaWVsZFRlcm1GcmVxdWVuY2llcyIsImZpZWxkTGVuZ3RocyIsIl9iIiwiX2sxIiwibWV0YWRhdGFXaGl0ZWxpc3QiLCJhdHRyaWJ1dGVzIiwiUmFuZ2VFcnJvciIsIm51bWJlciIsImsxIiwiZXh0cmFjdG9yIiwiZmllbGRUZXJtcyIsIm1ldGFkYXRhS2V5IiwiY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyIsImZpZWxkUmVmcyIsIm51bWJlck9mRmllbGRzIiwiYWNjdW11bGF0b3IiLCJkb2N1bWVudHNXaXRoRmllbGQiLCJhdmVyYWdlRmllbGRMZW5ndGgiLCJjcmVhdGVGaWVsZFZlY3RvcnMiLCJmaWVsZFJlZnNMZW5ndGgiLCJ0ZXJtSWRmQ2FjaGUiLCJmaWVsZExlbmd0aCIsInRlcm1GcmVxdWVuY2llcyIsInRlcm1zTGVuZ3RoIiwiZmllbGRCb29zdCIsImRvY0Jvb3N0IiwidGYiLCJzY29yZVdpdGhQcmVjaXNpb24iLCJyb3VuZCIsImNyZWF0ZVRva2VuU2V0IiwidW5zaGlmdCIsImNsb25lZE1ldGFkYXRhIiwibWV0YWRhdGFLZXlzIiwib3RoZXJNYXRjaERhdGEiLCJhbGxGaWVsZHMiLCJOT05FIiwiTEVBRElORyIsIk9QVElPTkFMIiwiUXVlcnlQYXJzZUVycm9yIiwiUXVlcnlMZXhlciIsImxleGVtZXMiLCJlc2NhcGVDaGFyUG9zaXRpb25zIiwic3RhdGUiLCJsZXhUZXh0Iiwic2xpY2VTdHJpbmciLCJzdWJTbGljZXMiLCJqb2luIiwiZXNjYXBlQ2hhcmFjdGVyIiwiRU9TIiwiaWdub3JlIiwiYmFja3VwIiwiYWNjZXB0RGlnaXRSdW4iLCJjaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtb3JlIiwiRklFTEQiLCJURVJNIiwiRURJVF9ESVNUQU5DRSIsIkJPT1NUIiwiUFJFU0VOQ0UiLCJsZXhGaWVsZCIsImxleGVyIiwibGV4VGVybSIsImxleEVkaXREaXN0YW5jZSIsImxleEJvb3N0IiwibGV4RU9TIiwidGVybVNlcGFyYXRvciIsImN1cnJlbnRDbGF1c2UiLCJsZXhlbWVJZHgiLCJwYXJzZUNsYXVzZSIsInBlZWtMZXhlbWUiLCJjb25zdW1lTGV4ZW1lIiwibGV4ZW1lIiwibmV4dENsYXVzZSIsImNvbXBsZXRlZENsYXVzZSIsInBhcnNlUHJlc2VuY2UiLCJwYXJzZUZpZWxkIiwicGFyc2VUZXJtIiwiZXJyb3JNZXNzYWdlIiwibmV4dExleGVtZSIsInBvc3NpYmxlRmllbGRzIiwiZiIsInBhcnNlRWRpdERpc3RhbmNlIiwicGFyc2VCb29zdCIsImlzTmFOIiwicGFyZW50XyIsInBhZF8iLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJsZSIsImlubmVySGVpZ2h0IiwiYm91bmRzIiwiYm90dG9tIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiZXhwaXJlcyIsInRvRml4ZWQiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImNvbnZlcnRlciIsImRlZmF1bHRzIiwiRGF0ZSIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwic3RyaW5naWZ5Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJzdHJpbmdpZmllZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiY29va2llIiwiY29va2llcyIsInJkZWNvZGUiLCJwYXJ0cyIsInJlYWQiLCJ3aXRoQ29udmVydGVyIiwiZmFjdCIsInRvTGV2ZWwiLCJ0b0l0ZW0iLCJsZXZlbCIsInRvSXRlbXMiLCJuZXh0V2l0aExvd2VyTGV2ZWwiLCJ0b1RPQyIsImlkeCIsInRvYyIsInRvY0l0ZW0iLCJUb2NJdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2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QUEsQ0FBaEI7O2tCQWdCZXRzQixNIiwiZmlsZSI6ImphdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTYyY2I3Y2MiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgLyogSlNYICovIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmF0aXZlIERPTSBub2RlIGZyb20gSlNYJ3MgaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGFnIG5hbWVcclxuICAgKiBAcGFyYW0gez9PYmplY3R9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmcgfCBudW1iZXIgfCB7IF9faHRtbDogc3RyaW5nIH0gfCBBcnJheTxIVE1MRWxlbWVudD4+fVxyXG4gICAqICAgY2hpbGRyZW4gLSBDaGlsZCBub2Rlc1xyXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBOYXRpdmUgRE9NIG5vZGVcclxuICAgKi9cclxuICBjcmVhdGVFbGVtZW50KHRhZywgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXHJcblxyXG4gICAgLyogU2V0IGFsbCBwcm9wZXJ0aWVzICovXHJcbiAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgYXR0ciA9PiB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BlcnRpZXNbYXR0cl0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgLyogSXRlcmF0ZSBjaGlsZCBub2RlcyAqL1xyXG4gICAgY29uc3QgaXRlcmF0ZUNoaWxkTm9kZXMgPSBub2RlcyA9PiB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xyXG5cclxuICAgICAgICAvKiBEaXJlY3RseSBhcHBlbmQgdGV4dCBjb250ZW50ICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiBub2RlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICBlbC50ZXh0Q29udGVudCArPSBub2RlXHJcblxyXG4gICAgICAgIC8qIFJlY3Vyc2UsIGlmIHdlIGdvdCBhbiBhcnJheSAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgaXRlcmF0ZUNoaWxkTm9kZXMobm9kZSlcclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHJhdyBIVE1MICovXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5fX2h0bWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCArPSBub2RlLl9faHRtbFxyXG5cclxuICAgICAgICAvKiBBcHBlbmQgcmVndWxhciBub2RlcyAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgYW5kIHJldHVybiBlbGVtZW50ICovXHJcbiAgICBpdGVyYXRlQ2hpbGROb2RlcyhjaGlsZHJlbilcclxuICAgIHJldHVybiBlbFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3Byb3ZpZGVycy9qc3guanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwidmFyIGluZGV4ID0gdHlwZW9mIGZldGNoPT0nZnVuY3Rpb24nID8gZmV0Y2guYmluZCgpIDogZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0cmVxdWVzdC5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdnZXQnLCB1cmwsIHRydWUpO1xuXG5cdFx0Zm9yICh2YXIgaSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcblx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihpLCBvcHRpb25zLmhlYWRlcnNbaV0pO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscz09J2luY2x1ZGUnO1xuXG5cdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKCkpO1xuXHRcdH07XG5cblx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRyZXF1ZXN0LnNlbmQob3B0aW9ucy5ib2R5IHx8IG51bGwpO1xuXG5cdFx0ZnVuY3Rpb24gcmVzcG9uc2UoKSB7XG5cdFx0XHR2YXIga2V5cyA9IFtdLFxuXHRcdFx0XHRhbGwgPSBbXSxcblx0XHRcdFx0aGVhZGVycyA9IHt9LFxuXHRcdFx0XHRoZWFkZXI7XG5cblx0XHRcdHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLCBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRrZXlzLnB1c2goa2V5ID0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHRhbGwucHVzaChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0XHRoZWFkZXIgPSBoZWFkZXJzW2tleV07XG5cdFx0XHRcdGhlYWRlcnNba2V5XSA9IGhlYWRlciA/IChoZWFkZXIgKyBcIixcIiArIHZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9rOiAocmVxdWVzdC5zdGF0dXMvMTAwfDApID09IDIsXHRcdC8vIDIwMC0yOTlcblx0XHRcdFx0c3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuXHRcdFx0XHR1cmw6IHJlcXVlc3QucmVzcG9uc2VVUkwsXG5cdFx0XHRcdGNsb25lOiByZXNwb25zZSxcblx0XHRcdFx0dGV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTsgfSxcblx0XHRcdFx0anNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpOyB9LFxuXHRcdFx0XHRibG9iOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3JlcXVlc3QucmVzcG9uc2VdKSk7IH0sXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRrZXlzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzOyB9LFxuXHRcdFx0XHRcdGVudHJpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsbDsgfSxcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBoZWFkZXJzW24udG9Mb3dlckNhc2UoKV07IH0sXG5cdFx0XHRcdFx0aGFzOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpIGluIGhlYWRlcnM7IH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyaWMgZXZlbnQgbGlzdGVuZXJcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8RXZlbnRUYXJnZXQ+KX0gZWxzXyAtIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gaGFuZGxlcl8tIEV2ZW50IGhhbmRsZXJzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBldmVudHNfIC0gRXZlbnQgbmFtZXNcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1cGRhdGVfIC0gVXBkYXRlIGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7PyhzdHJpbmd8RXZlbnRUYXJnZXR8Tm9kZUxpc3Q8RXZlbnRUYXJnZXQ+KX0gZWxzIC1cclxuICAgKiAgIFNlbGVjdG9yIG9yIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8QXJyYXk8c3RyaW5nPil9IGV2ZW50cyAtIEV2ZW50IG5hbWVzXHJcbiAgICogQHBhcmFtIHsoT2JqZWN0fEZ1bmN0aW9uKX0gaGFuZGxlciAtIEhhbmRsZXIgdG8gYmUgaW52b2tlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVscywgZXZlbnRzLCBoYW5kbGVyKSB7XHJcbiAgICB0aGlzLmVsc18gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscylcclxuICAgICAgICA6IFtdLmNvbmNhdChlbHMpKVxyXG5cclxuICAgIC8qIFNldCBoYW5kbGVyIGFzIGZ1bmN0aW9uIG9yIGRpcmVjdGx5IGFzIG9iamVjdCAqL1xyXG4gICAgdGhpcy5oYW5kbGVyXyA9IHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyB7IHVwZGF0ZTogaGFuZGxlciB9XHJcbiAgICAgIDogaGFuZGxlclxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgZXZlbnQgbmFtZXMgYW5kIHVwZGF0ZSBoYW5kbGVyICovXHJcbiAgICB0aGlzLmV2ZW50c18gPSBbXS5jb25jYXQoZXZlbnRzKVxyXG4gICAgdGhpcy51cGRhdGVfID0gZXYgPT4gdGhpcy5oYW5kbGVyXy51cGRhdGUoZXYpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBsaXN0ZW5lciBmb3IgYWxsIHJlbGV2YW50IGV2ZW50c1xyXG4gICAqL1xyXG4gIGxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXywgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgc2V0dXAgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyXy5zZXR1cCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICB0aGlzLmhhbmRsZXJfLnNldHVwKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcclxuICAgKi9cclxuICB1bmxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXylcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLyogRXhlY3V0ZSByZXNldCBoYW5kbGVyLCBpZiBpbXBsZW1lbnRlZCAqL1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnJlc2V0ID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgIHRoaXMuaGFuZGxlcl8ucmVzZXQoKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcIlxyXG5pbXBvcnQgXCIuLi9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiXHJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCJcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3NcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQb2x5ZmlsbHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCJcclxuaW1wb3J0IFwidW5mZXRjaC9wb2x5ZmlsbFwiXHJcblxyXG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwicHJvbWlzZS1wb2x5ZmlsbFwiXHJcbndpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgUHJvbWlzZVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZXBlbmRlbmNpZXNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IENsaXBib2FyZCBmcm9tIFwiY2xpcGJvYXJkXCJcclxuaW1wb3J0IEZhc3RDbGljayBmcm9tIFwiZmFzdGNsaWNrXCJcclxuXHJcbmltcG9ydCBNYXRlcmlhbCBmcm9tIFwiLi9jb21wb25lbnRzL01hdGVyaWFsXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcclxuICovXHJcbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXHJcbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICByZXR1cm4gbWV0YS5jb250ZW50XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQXBwbGljYXRpb25cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgTWF0ZXJpYWwgZm9yIE1rRG9jc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLXN0eWxlXHJcblxyXG4gIC8qIEluaXRpYWxpemUgTW9kZXJuaXpyIGFuZCBGYXN0Q2xpY2sgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBpZiAoIShkb2N1bWVudC5ib2R5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAvKiBBdHRhY2ggRmFzdENsaWNrIHRvIG1pdGlnYXRlIDMwMG1zIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgKi9cclxuICAgIEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSlcclxuXHJcbiAgICAvKiBUZXN0IGZvciBpT1MgKi9cclxuICAgIE1vZGVybml6ci5hZGRUZXN0KFwiaW9zXCIsICgpID0+IHtcclxuICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFdyYXAgYWxsIGRhdGEgdGFibGVzIGZvciBiZXR0ZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGU6bm90KFtjbGFzc10pXCIpICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIEpTWCwgd2Ugc2hvdWxkIHJlbmFtZSB0aGUgZmlsZVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0YWJsZXMsIHRhYmxlID0+IHtcclxuICAgICAgY29uc3Qgd3JhcCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fc2Nyb2xsd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3RhYmxlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICAgaWYgKHRhYmxlLm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgdGFibGUubmV4dFNpYmxpbmcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwKVxyXG4gICAgICB9XHJcbiAgICAgIHdyYXAuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQodGFibGUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIENsaXBib2FyZCBpbnRlZ3JhdGlvbiAqL1xyXG4gICAgaWYgKENsaXBib2FyZC5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29kZWhpbGl0ZSA+IHByZSwgcHJlID4gY29kZVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2NrcywgKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gYF9fY29kZV8ke2luZGV4fWBcclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIGJ1dHRvbiB3aXRoIG1lc3NhZ2UgY29udGFpbmVyICovXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kLWNsaXBib2FyZFwiIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cclxuICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtgIyR7aWR9IHByZSwgIyR7aWR9IGNvZGVgfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1jbGlwYm9hcmRfX21lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8qIExpbmsgdG8gYmxvY2sgYW5kIGluc2VydCBidXR0b24gKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBibG9jay5wYXJlbnROb2RlXHJcbiAgICAgICAgcGFyZW50LmlkID0gaWRcclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgYmxvY2spXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIENsaXBib2FyZCBsaXN0ZW5lciAqL1xyXG4gICAgICBjb25zdCBjb3B5ID0gbmV3IENsaXBib2FyZChcIi5tZC1jbGlwYm9hcmRcIilcclxuXHJcbiAgICAgIC8qIFN1Y2Nlc3MgaGFuZGxlciAqL1xyXG4gICAgICBjb3B5Lm9uKFwic3VjY2Vzc1wiLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24udHJpZ2dlci5xdWVyeVNlbGVjdG9yKFwiLm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiKVxyXG4gICAgICAgIGlmICghKG1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgICAgLyogQ2xlYXIgc2VsZWN0aW9uIGFuZCByZXNldCBkZWJvdW5jZSBsb2dpYyAqL1xyXG4gICAgICAgIGFjdGlvbi5jbGVhclNlbGVjdGlvbigpXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyKVxyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHBhcnNlSW50KG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyLCAxMCkpXHJcblxyXG4gICAgICAgIC8qIFNldCBtZXNzYWdlIGluZGljYXRpbmcgc3VjY2VzcyBhbmQgc2hvdyBpdCAqL1xyXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSB0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29waWVkXCIpXHJcblxyXG4gICAgICAgIC8qIEhpZGUgbWVzc2FnZSBhZnRlciB0d28gc2Vjb25kcyAqL1xyXG4gICAgICAgIG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJtZC1jbGlwYm9hcmRfX21lc3NhZ2UtLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBcIlwiXHJcbiAgICAgICAgfSwgMjAwMCkudG9TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFBvbHlmaWxsIGRldGFpbHMvc3VtbWFyeSBmdW5jdGlvbmFsaXR5ICovXHJcbiAgICBpZiAoIU1vZGVybml6ci5kZXRhaWxzKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZXRhaWxzID4gc3VtbWFyeVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2Nrcywgc3VtbWFyeSA9PiB7XHJcbiAgICAgICAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGV2LnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICBpZiAoZGV0YWlscy5oYXNBdHRyaWJ1dGUoXCJvcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGRldGFpbHMucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBPcGVuIGRldGFpbHMgYWZ0ZXIgYW5jaG9yIGp1bXAgKi9cclxuICAgIGNvbnN0IGRldGFpbHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSlcclxuICAgICAgICBpZiAoIWVsKVxyXG4gICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIC8qIFdhbGsgdXAgYXMgbG9uZyBhcyB3ZSdyZSBub3QgaW4gYSBkZXRhaWxzIHRhZyAqL1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlXHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxEZXRhaWxzRWxlbWVudCkpXHJcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAvKiBJZiB0aGVyZSdzIGEgZGV0YWlscyB0YWcsIG9wZW4gaXQgKi9cclxuICAgICAgICBpZiAocGFyZW50ICYmICFwYXJlbnQub3Blbikge1xyXG4gICAgICAgICAgcGFyZW50Lm9wZW4gPSB0cnVlXHJcblxyXG4gICAgICAgICAgLyogRm9yY2UgcmVsb2FkLCBzbyB0aGUgdmlld3BvcnQgcmVwb3NpdGlvbnMgKi9cclxuICAgICAgICAgIGNvbnN0IGxvYyA9IGxvY2F0aW9uLmhhc2hcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBcIiBcIlxyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGxvY1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGRldGFpbHMpXHJcbiAgICBkZXRhaWxzKClcclxuXHJcbiAgICAvKiBGb3JjZSAxcHggc2Nyb2xsIG9mZnNldCB0byB0cmlnZ2VyIG92ZXJmbG93IHNjcm9sbGluZyAqL1xyXG4gICAgaWYgKE1vZGVybml6ci5pb3MpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zY3JvbGxmaXhdXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2Nyb2xsYWJsZSwgaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b3AgPSBpdGVtLnNjcm9sbFRvcFxyXG5cclxuICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSB0b3Agb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgaWYgKHRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IDFcclxuXHJcbiAgICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b3AgKyBpdGVtLm9mZnNldEhlaWdodCA9PT0gaXRlbS5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSB0b3AgLSAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciBzaGFkb3cgdG9nZ2xlICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5TaGFkb3coXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1jb250YWluZXJdXCIsXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciB0aXRsZSB0b2dnbGUgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICBdLCBuZXcgTWF0ZXJpYWwuSGVhZGVyLlRpdGxlKFxyXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dGl0bGVdXCIsXHJcbiAgICBcIi5tZC10eXBlc2V0IGgxXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlcm8gdmlzaWJpbGl0eSB0b2dnbGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuVGFicy5Ub2dnbGUoXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVyb11cIikpLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogdGFicyB2aXNpYmlsaXR5IHRvZ2dsZSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD10YWJzXVwiKSkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggbmF2aWdhdGlvbiAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIyMHB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXVwiLFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggdGFibGUgb2YgY29udGVudHMgKG1pc3Npbmcgb24gNDA0IHBhZ2UpICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXHJcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiLFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxyXG5cclxuICAvKiBMb2FkIHRhYmxlIG9mIGNvbnRlbnRzICovXHJcbiAgTWF0ZXJpYWwuVGFibGVPZkNvbnRlbnRzLnJlbmRlcihcIiNzY3JvbGxzcHlcIilcclxuICBjb25zdCBibHVyID0gbmV3IE1hdGVyaWFsLk5hdi5CbHVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY10gW2hyZWZdXCIpXHJcblxyXG4gIC8qIENvbXBvbmVudDogbGluayBibHVycmluZyBmb3IgdGFibGUgb2YgY29udGVudHMgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJzY3JvbGxcIiwgYmx1cikpXHJcblxyXG4gIC8qIENvbXBvbmVudDogY29sbGFwc2libGUgZWxlbWVudHMgZm9yIG5hdmlnYXRpb24gKi9cclxuICBjb25zdCBjb2xsYXBzaWJsZXMgPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLWNvbXBvbmVudD1jb2xsYXBzaWJsZV1cIilcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbGxhcHNpYmxlcywgY29sbGFwc2UgPT4ge1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihjb2xsYXBzZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcImNsaWNrXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLk5hdi5Db2xsYXBzZShjb2xsYXBzZSkpKVxyXG4gIH0pXHJcblxyXG4gIC8qIENvbXBvbmVudDogYWN0aXZlIHBhbmUgbW9uaXRvciBmb3IgaU9TIHNjcm9sbGluZyBmaXhlcyAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTIxOXB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbZGF0YS1tZC10b2dnbGVdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuU2Nyb2xsaW5nKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIG5hdlwiKSkpXHJcblxyXG4gIC8qIEluaXRpYWxpemUgc2VhcmNoLCBpZiBhdmFpbGFibGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdXCIpKSB7XHJcblxyXG4gICAgLyogQ29tcG9uZW50OiBzZWFyY2ggYm9keSBsb2NrIGZvciBtb2JpbGUgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLlNlYXJjaC5Mb2NrKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIikpKVxyXG5cclxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIHJlc3VsdHMgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIiwgW1xyXG4gICAgICBcImZvY3VzXCIsIFwia2V5dXBcIiwgXCJjaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNlYXJjaC5SZXN1bHQoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzdWx0XVwiLCAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgJHtjb25maWcudXJsLmJhc2V9L2luZGV4Lmpzb25gLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICBkb2MubG9jYXRpb24gPSBgJHtkb2MucGVybWFsaW5rfWBcclxuICAgICAgICAgICAgcmV0dXJuIGRvY1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSkpLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIGlucHV0IGFmdGVyIGZvcm0gcmVzZXQgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1yZXNldF1cIiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIGlucHV0IGFmdGVyIG9wZW5pbmcgc2VhcmNoICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLCBldiA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQodG9nZ2xlID0+IHtcclxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA0MDAsIGV2LnRhcmdldClcclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IG9wZW4gc2VhcmNoIG9uIGZvY3VzICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKCF0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjoga2V5Ym9hcmQgaGFuZGxlcnMgKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5ZG93blwiLCBldiA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BsaXQgdXAgaW50byBjb21wb25lbnQgdG8gcmVkdWNlIGNvbXBsZXhpdHlcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBBYm9ydCBpZiBtZXRhIGtleSAobWFjT1MpIG9yIGN0cmwga2V5IChXaW5kb3dzKSBpcyBwcmVzc2VkICovXHJcbiAgICAgIGlmIChldi5tZXRhS2V5IHx8IGV2LmN0cmxLZXkpXHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAvKiBTZWFyY2ggaXMgb3BlbiAqL1xyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRW50ZXI6IHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uICovXHJcbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBpZiAocXVlcnkgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgLyogR28gdG8gY3VycmVudCBhY3RpdmUvZm9jdXNlZCBsaW5rICovXHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVtkYXRhLW1kLXN0YXRlPWFjdGl2ZV1cIilcclxuICAgICAgICAgICAgaWYgKGZvY3VzIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZm9jdXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxyXG5cclxuICAgICAgICAgICAgICAvKiBDbG9zZSBzZWFyY2ggKi9cclxuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgICAgIHF1ZXJ5LmJsdXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEVzY2FwZSBvciBUYWI6IGNsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gOSB8fCBldi5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgcXVlcnkuYmx1cigpXHJcblxyXG4gICAgICAgIC8qIEhvcml6b250YWwgYXJyb3dzIGFuZCBiYWNrc3BhY2U6IGZvY3VzIGlucHV0ICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChbOCwgMzcsIDM5XS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHF1ZXJ5ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcblxyXG4gICAgICAgIC8qIFZlcnRpY2FsIGFycm93czogc2VsZWN0IHByZXZpb3VzIG9yIG5leHQgc2VhcmNoIHJlc3VsdCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoWzM4LCA0MF0uaW5kZXhPZihldi5rZXlDb2RlKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGV2LmtleUNvZGVcclxuXHJcbiAgICAgICAgICAvKiBSZXRyaWV2ZSBhbGwgcmVzdWx0cyAqL1xyXG4gICAgICAgICAgY29uc3QgbGlua3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV0sIFtkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVwiKSlcclxuXHJcbiAgICAgICAgICAvKiBSZXRyaWV2ZSBjdXJyZW50IGFjdGl2ZS9mb2N1c2VkIHJlc3VsdCAqL1xyXG4gICAgICAgICAgY29uc3QgZm9jdXMgPSBsaW5rcy5maW5kKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShsaW5rIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgICAgICByZXR1cm4gbGluay5kYXRhc2V0Lm1kU3RhdGUgPT09IFwiYWN0aXZlXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoZm9jdXMpXHJcbiAgICAgICAgICAgIGZvY3VzLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgICAvKiBDYWxjdWxhdGUgaW5kZXggZGVwZW5kaW5nIG9uIGRpcmVjdGlvbiwgYWRkIGxlbmd0aCB0byBmb3JtIHJpbmcgKi9cclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5tYXgoMCwgKFxyXG4gICAgICAgICAgICBsaW5rcy5pbmRleE9mKGZvY3VzKSArIGxpbmtzLmxlbmd0aCArIChrZXkgPT09IDM4ID8gLTEgOiArMSlcclxuICAgICAgICAgICkgJSBsaW5rcy5sZW5ndGgpXHJcblxyXG4gICAgICAgICAgLyogU2V0IGFjdGl2ZSBzdGF0ZSBhbmQgZm9jdXMgKi9cclxuICAgICAgICAgIGlmIChsaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmRhdGFzZXQubWRTdGF0ZSA9IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmZvY3VzKClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlICovXHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgIC8qIFJldHVybiBmYWxzZSBwcmV2ZW50cyB0aGUgY3Vyc29yIHBvc2l0aW9uIGZyb20gY2hhbmdpbmcgKi9cclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8qIFNlYXJjaCBpcyBjbG9zZWQgYW5kIHdlJ3JlIG5vdCBpbnNpZGUgYSBmb3JtICovXHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5mb3JtKSB7XHJcblxyXG4gICAgICAgIC8qIEYvUzogT3BlbiBzZWFyY2ggaWYgbm90IGluIGlucHV0IGZpZWxkICovXHJcbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDcwIHx8IGV2LmtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS5saXN0ZW4oKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBxdWVyeSBpZiBpbiBzZWFyY2ggaXMgb3BlbiBhbmQgY2hhcmFjdGVyIGlzIHR5cGVkICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcImtleXByZXNzXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmIChxdWVyeSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgfVxyXG4gICAgfSkubGlzdGVuKClcclxuICB9XHJcblxyXG4gIC8qIExpc3RlbmVyOiBoYW5kbGUgdGFiYmluZyBjb250ZXh0IGZvciBiZXR0ZXIgYWNjZXNzaWJpbGl0eSAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgZXYgPT4ge1xyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDkpIHtcclxuICAgICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW2Zvcl06bm90KFt0YWJpbmRleF0pXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XHJcbiAgICAgICAgaWYgKGxhYmVsLm9mZnNldEhlaWdodClcclxuICAgICAgICAgIGxhYmVsLnRhYkluZGV4ID0gMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pLmxpc3RlbigpXHJcblxyXG4gIC8qIExpc3RlbmVyOiByZXNldCB0YWJiaW5nIGJlaGF2aW9yICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbdGFiaW5kZXhdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxhYmVscywgbGFiZWwgPT4ge1xyXG4gICAgICBsYWJlbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiKVxyXG4gICAgfSlcclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm1kU3RhdGUgPT09IFwidGFiYmluZ1wiKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICB9KVxyXG5cclxuICAvKiBMaXN0ZW5lcjogY2xvc2UgZHJhd2VyIHdoZW4gYW5jaG9yIGxpbmtzIGFyZSBjbGlja2VkICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NTlweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbaHJlZl49JyMnXVwiLFxyXG4gICAgICBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPWRyYXdlcl1cIilcclxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkpXHJcblxyXG4gIC8qIFJldHJpZXZlIGZhY3RzIGZvciB0aGUgZ2l2ZW4gcmVwb3NpdG9yeSB0eXBlICovXHJcbiAgOygoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXHJcbiAgICBpZiAoIWVsKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKVxyXG4gICAgZWxzZSBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICBzd2l0Y2ggKGVsLmRhdGFzZXQubWRTb3VyY2UpIHtcclxuICAgICAgY2FzZSBcImdpdGh1YlwiOiByZXR1cm4gbmV3IE1hdGVyaWFsLlNvdXJjZS5BZGFwdGVyLkdpdEh1YihlbCkuZmV0Y2goKVxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKVxyXG4gICAgfVxyXG5cclxuICAvKiBSZW5kZXIgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiAqL1xyXG4gIH0pKCkudGhlbihmYWN0cyA9PiB7XHJcbiAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNvdXJjZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc291cmNlcywgc291cmNlID0+IHtcclxuICAgICAgbmV3IE1hdGVyaWFsLlNvdXJjZS5SZXBvc2l0b3J5KHNvdXJjZSlcclxuICAgICAgICAuaW5pdGlhbGl6ZShmYWN0cylcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHBvcnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIFByb3ZpZGUgdGhpcyBmb3IgZG93bndhcmQgY29tcGF0aWJpbGl0eSBmb3Igbm93ICovXHJcbmNvbnN0IGFwcCA9IHtcclxuICBpbml0aWFsaXplXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYXBwXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFBvbHlmaWxsIGZvciBjcmVhdGluZyBDdXN0b21FdmVudHMgb24gSUU5LzEwLzExXG5cbi8vIGNvZGUgcHVsbGVkIGZyb206XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZDR0b2NjaGluaS9jdXN0b21ldmVudC1wb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50I1BvbHlmaWxsXG5cbihmdW5jdGlvbigpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgY2UgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KCd0ZXN0JywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgIGNlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMzNDkxOTFcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHByZXZlbnQgZGVmYXVsdCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICAgICAgfTtcblxuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KFxuICAgICAgICBldmVudCxcbiAgICAgICAgcGFyYW1zLmJ1YmJsZXMsXG4gICAgICAgIHBhcmFtcy5jYW5jZWxhYmxlLFxuICAgICAgICBwYXJhbXMuZGV0YWlsXG4gICAgICApO1xuICAgICAgb3JpZ1ByZXZlbnQgPSBldnQucHJldmVudERlZmF1bHQ7XG4gICAgICBldnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb3JpZ1ByZXZlbnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH07XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbiAgfVxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jdXN0b20tZXZlbnQtcG9seWZpbGwvcG9seWZpbGwuanMiLCJpZiAoIXdpbmRvdy5mZXRjaCkgd2luZG93LmZldGNoID0gcmVxdWlyZSgnLicpLmRlZmF1bHQgfHwgcmVxdWlyZSgnLicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvcG9seWZpbGwuanMiLCJpbXBvcnQgcHJvbWlzZUZpbmFsbHkgZnJvbSAnLi9maW5hbGx5JztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAvKiogQHR5cGUgeyFudW1iZXJ9ICovXG4gIHRoaXMuX3N0YXRlID0gMDtcbiAgLyoqIEB0eXBlIHshYm9vbGVhbn0gKi9cbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xuICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgLyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cbiAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG4gIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xuICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgfVxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcbiAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldDtcbiAgICB0cnkge1xuICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICB0cnkge1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICBpZiAoXG4gICAgICBuZXdWYWx1ZSAmJlxuICAgICAgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICkge1xuICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGYuX3N0YXRlID0gMTtcbiAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZShzZWxmKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChzZWxmLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgc2VsZi5fc3RhdGUgPSAyO1xuICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcbiAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuICB9XG4gIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcbiAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBmbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3Qoc2VsZiwgZXgpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgdmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcbiAgcmV0dXJuIHByb207XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gcHJvbWlzZUZpbmFsbHk7XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5Jyk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgICBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuUHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi8qKlxuICogQHRoaXMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5hbGx5Q29uc3RydWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuMVxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFttb2R1bGUsIF9fd2VicGFja19yZXF1aXJlX18oNyldLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCdzZWxlY3QnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuc2VsZWN0KTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9zZWxlY3QpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX3NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZWxlY3QpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ2xpcGJvYXJkQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlciA9IG9wdGlvbnMuZW1pdHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0RmFrZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcbiAgICAgICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0udmFsdWUgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAncmVtb3ZlRmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5VGV4dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VlZGVkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChzdWNjZWVkZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdoYW5kbGVSZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY2xlYXJTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2NvcHknO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gJ2NvcHknICYmIHRoaXMuX2FjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG4gICAgfSgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG59KTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW21vZHVsZSwgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJy4vY2xpcGJvYXJkLWFjdGlvbicpLCByZXF1aXJlKCd0aW55LWVtaXR0ZXInKSwgcmVxdWlyZSgnZ29vZC1saXN0ZW5lcicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24sIGdsb2JhbC50aW55RW1pdHRlciwgZ2xvYmFsLmdvb2RMaXN0ZW5lcik7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfY2xpcGJvYXJkQWN0aW9uLCBfdGlueUVtaXR0ZXIsIF9nb29kTGlzdGVuZXIpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgdmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbiAgICB2YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICB9XG5cbiAgICB2YXIgQ2xpcGJvYXJkID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICAgICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2xpc3RlbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gKDAsIF9nb29kTGlzdGVuZXIyLmRlZmF1bHQpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0QWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdFRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLCBbe1xuICAgICAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcblxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZDtcbiAgICB9KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG59KTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIjsoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEBwcmVzZXJ2ZSBGYXN0Q2xpY2s6IHBvbHlmaWxsIHRvIHJlbW92ZSBjbGljayBkZWxheXMgb24gYnJvd3NlcnMgd2l0aCB0b3VjaCBVSXMuXG5cdCAqXG5cdCAqIEBjb2RpbmdzdGFuZGFyZCBmdGxhYnMtanN2MlxuXHQgKiBAY29weXJpZ2h0IFRoZSBGaW5hbmNpYWwgVGltZXMgTGltaXRlZCBbQWxsIFJpZ2h0cyBSZXNlcnZlZF1cblx0ICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKHNlZSBMSUNFTlNFLnR4dClcblx0ICovXG5cblx0Lypqc2xpbnQgYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUqL1xuXHQvKmdsb2JhbCBkZWZpbmUsIEV2ZW50LCBOb2RlKi9cblxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBmYXN0LWNsaWNraW5nIGxpc3RlbmVycyBvbiB0aGUgc3BlY2lmaWVkIGxheWVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRmdW5jdGlvbiBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpIHtcblx0XHR2YXIgb2xkT25DbGljaztcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciBhIGNsaWNrIGlzIGN1cnJlbnRseSBiZWluZyB0cmFja2VkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaW1lc3RhbXAgZm9yIHdoZW4gY2xpY2sgdHJhY2tpbmcgc3RhcnRlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVsZW1lbnQgYmVpbmcgdHJhY2tlZCBmb3IgYSBjbGljay5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEV2ZW50VGFyZ2V0XG5cdFx0ICovXG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWC1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFktY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBJRCBvZiB0aGUgbGFzdCB0b3VjaCwgcmV0cmlldmVkIGZyb20gVG91Y2guaWRlbnRpZmllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRvdWNobW92ZSBib3VuZGFyeSwgYmV5b25kIHdoaWNoIGEgY2xpY2sgd2lsbCBiZSBjYW5jZWxsZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoQm91bmRhcnkgPSBvcHRpb25zLnRvdWNoQm91bmRhcnkgfHwgMTA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBGYXN0Q2xpY2sgbGF5ZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5sYXllciA9IGxheWVyO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1pbmltdW0gdGltZSBiZXR3ZWVuIHRhcCh0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCkgZXZlbnRzXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcERlbGF5ID0gb3B0aW9ucy50YXBEZWxheSB8fCAyMDA7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWF4aW11bSB0aW1lIGZvciBhIHRhcFxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBUaW1lb3V0ID0gb3B0aW9ucy50YXBUaW1lb3V0IHx8IDcwMDtcblxuXHRcdGlmIChGYXN0Q2xpY2subm90TmVlZGVkKGxheWVyKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgaGF2ZSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuXHRcdGZ1bmN0aW9uIGJpbmQobWV0aG9kLCBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTsgfTtcblx0XHR9XG5cblxuXHRcdHZhciBtZXRob2RzID0gWydvbk1vdXNlJywgJ29uQ2xpY2snLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaENhbmNlbCddO1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRjb250ZXh0W21ldGhvZHNbaV1dID0gYmluZChjb250ZXh0W21ldGhvZHNbaV1dLCBjb250ZXh0KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnMgYXMgcmVxdWlyZWRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFjayBpcyByZXF1aXJlZCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0Ly8gd2hpY2ggaXMgaG93IEZhc3RDbGljayBub3JtYWxseSBzdG9wcyBjbGljayBldmVudHMgYnViYmxpbmcgdG8gY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhlIEZhc3RDbGlja1xuXHRcdC8vIGxheWVyIHdoZW4gdGhleSBhcmUgY2FuY2VsbGVkLlxuXHRcdGlmICghRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBybXYgPSBOb2RlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBhZHYgPSBOb2RlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCAoY2FsbGJhY2suaGlqYWNrZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYgKCFldmVudC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIElmIGEgaGFuZGxlciBpcyBhbHJlYWR5IGRlY2xhcmVkIGluIHRoZSBlbGVtZW50J3Mgb25jbGljayBhdHRyaWJ1dGUsIGl0IHdpbGwgYmUgZmlyZWQgYmVmb3JlXG5cdFx0Ly8gRmFzdENsaWNrJ3Mgb25DbGljayBoYW5kbGVyLiBGaXggdGhpcyBieSBwdWxsaW5nIG91dCB0aGUgdXNlci1kZWZpbmVkIGhhbmRsZXIgZnVuY3Rpb24gYW5kXG5cdFx0Ly8gYWRkaW5nIGl0IGFzIGxpc3RlbmVyLlxuXHRcdGlmICh0eXBlb2YgbGF5ZXIub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHQvLyBBbmRyb2lkIGJyb3dzZXIgb24gYXQgbGVhc3QgMy4yIHJlcXVpcmVzIGEgbmV3IHJlZmVyZW5jZSB0byB0aGUgZnVuY3Rpb24gaW4gbGF5ZXIub25jbGlja1xuXHRcdFx0Ly8gLSB0aGUgb2xkIG9uZSB3b24ndCB3b3JrIGlmIHBhc3NlZCB0byBhZGRFdmVudExpc3RlbmVyIGRpcmVjdGx5LlxuXHRcdFx0b2xkT25DbGljayA9IGxheWVyLm9uY2xpY2s7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdG9sZE9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0bGF5ZXIub25jbGljayA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogV2luZG93cyBQaG9uZSA4LjEgZmFrZXMgdXNlciBhZ2VudCBzdHJpbmcgdG8gbG9vayBsaWtlIEFuZHJvaWQgYW5kIGlQaG9uZS5cblx0KlxuXHQqIEB0eXBlIGJvb2xlYW5cblx0Ki9cblx0dmFyIGRldmljZUlzV2luZG93c1Bob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBQaG9uZVwiKSA+PSAwO1xuXG5cdC8qKlxuXHQgKiBBbmRyb2lkIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1MgPSAvaVAoYWR8aG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA0IHJlcXVpcmVzIGFuIGV4Y2VwdGlvbiBmb3Igc2VsZWN0IGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1M0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyA0X1xcZChfXFxkKT8vKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA2LjAtNy4qIHJlcXVpcmVzIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBtYW51YWxseSBkZXJpdmVkXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIFs2LTddX1xcZC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0LyoqXG5cdCAqIEJsYWNrQmVycnkgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQmxhY2tCZXJyeTEwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdCQjEwJykgPiAwO1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBuYXRpdmUgY2xpY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IG5lZWRzIGEgbmF0aXZlIGNsaWNrXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIHRvIGRpc2FibGVkIGlucHV0cyAoaXNzdWUgIzYyKVxuXHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdpbnB1dCc6XG5cblx0XHRcdC8vIEZpbGUgaW5wdXRzIG5lZWQgcmVhbCBjbGlja3Mgb24gaU9TIDYgZHVlIHRvIGEgYnJvd3NlciBidWcgKGlzc3VlICM2OClcblx0XHRcdGlmICgoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsYWJlbCc6XG5cdFx0Y2FzZSAnaWZyYW1lJzogLy8gaU9TOCBob21lc2NyZWVuIGFwcHMgY2FuIHByZXZlbnQgZXZlbnRzIGJ1YmJsaW5nIGludG8gZnJhbWVzXG5cdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgvXFxibmVlZHNjbGlja1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBjbGljayBpbnRvIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBuYXRpdmUgY2xpY2suXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzRm9jdXMgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAhZGV2aWNlSXNBbmRyb2lkO1xuXHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdHN3aXRjaCAodGFyZ2V0LnR5cGUpIHtcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdmaWxlJzpcblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gcG9pbnQgaW4gYXR0ZW1wdGluZyB0byBmb2N1cyBkaXNhYmxlZCBpbnB1dHNcblx0XHRcdHJldHVybiAhdGFyZ2V0LmRpc2FibGVkICYmICF0YXJnZXQucmVhZE9ubHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoL1xcYm5lZWRzZm9jdXNcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuc2VuZENsaWNrID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCwgZXZlbnQpIHtcblx0XHR2YXIgY2xpY2tFdmVudCwgdG91Y2g7XG5cblx0XHQvLyBPbiBzb21lIEFuZHJvaWQgZGV2aWNlcyBhY3RpdmVFbGVtZW50IG5lZWRzIHRvIGJlIGJsdXJyZWQgb3RoZXJ3aXNlIHRoZSBzeW50aGV0aWMgY2xpY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCAoIzI0KVxuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQpIHtcblx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdH1cblxuXHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBTeW50aGVzaXNlIGEgY2xpY2sgZXZlbnQsIHdpdGggYW4gZXh0cmEgYXR0cmlidXRlIHNvIGl0IGNhbiBiZSB0cmFja2VkXG5cdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodGhpcy5kZXRlcm1pbmVFdmVudFR5cGUodGFyZ2V0RWxlbWVudCksIHRydWUsIHRydWUsIHdpbmRvdywgMSwgdG91Y2guc2NyZWVuWCwgdG91Y2guc2NyZWVuWSwgdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRcdGNsaWNrRXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XG5cdFx0dGFyZ2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuXHR9O1xuXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGV0ZXJtaW5lRXZlbnRUeXBlID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXG5cdFx0Ly9Jc3N1ZSAjMTU5OiBBbmRyb2lkIENocm9tZSBTZWxlY3QgQm94IGRvZXMgbm90IG9wZW4gd2l0aCBhIHN5bnRoZXRpYyBjbGljayBldmVudFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQgJiYgdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ21vdXNlZG93bic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdjbGljayc7XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHQvLyBJc3N1ZSAjMTYwOiBvbiBpT1MgNywgc29tZSBpbnB1dCBlbGVtZW50cyAoZS5nLiBkYXRlIGRhdGV0aW1lIG1vbnRoKSB0aHJvdyBhIHZhZ3VlIFR5cGVFcnJvciBvbiBzZXRTZWxlY3Rpb25SYW5nZS4gVGhlc2UgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBpbnRlZ2VyIHZhbHVlIGZvciB0aGUgc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBwcm9wZXJ0aWVzLCBidXQgdW5mb3J0dW5hdGVseSB0aGF0IGNhbid0IGJlIHVzZWQgZm9yIGRldGVjdGlvbiBiZWNhdXNlIGFjY2Vzc2luZyB0aGUgcHJvcGVydGllcyBhbHNvIHRocm93cyBhIFR5cGVFcnJvci4gSnVzdCBjaGVjayB0aGUgdHlwZSBpbnN0ZWFkLiBGaWxlZCBhcyBBcHBsZSBidWcgIzE1MTIyNzI0LlxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiB0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlICYmIHRhcmdldEVsZW1lbnQudHlwZS5pbmRleE9mKCdkYXRlJykgIT09IDAgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAndGltZScgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnbW9udGgnKSB7XG5cdFx0XHRsZW5ndGggPSB0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcblx0XHRcdHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuZ3RoLCBsZW5ndGgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyIGFuZCBpZiBzbywgc2V0IGEgZmxhZyBvbiBpdC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgc2Nyb2xsUGFyZW50LCBwYXJlbnRFbGVtZW50O1xuXG5cdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cblx0XHQvLyBBdHRlbXB0IHRvIGRpc2NvdmVyIHdoZXRoZXIgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBzY3JvbGxhYmxlIGxheWVyLiBSZS1jaGVjayBpZiB0aGVcblx0XHQvLyB0YXJnZXQgZWxlbWVudCB3YXMgbW92ZWQgdG8gYW5vdGhlciBwYXJlbnQuXG5cdFx0aWYgKCFzY3JvbGxQYXJlbnQgfHwgIXNjcm9sbFBhcmVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0cGFyZW50RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0c2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fSB3aGlsZSAocGFyZW50RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWx3YXlzIHVwZGF0ZSB0aGUgc2Nyb2xsIHRvcCB0cmFja2VyIGlmIHBvc3NpYmxlLlxuXHRcdGlmIChzY3JvbGxQYXJlbnQpIHtcblx0XHRcdHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wID0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxFdmVudFRhcmdldH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCA9IGZ1bmN0aW9uKGV2ZW50VGFyZ2V0KSB7XG5cblx0XHQvLyBPbiBzb21lIG9sZGVyIGJyb3dzZXJzIChub3RhYmx5IFNhZmFyaSBvbiBpT1MgNC4xIC0gc2VlIGlzc3VlICM1NikgdGhlIGV2ZW50IHRhcmdldCBtYXkgYmUgYSB0ZXh0IG5vZGUuXG5cdFx0aWYgKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIGV2ZW50VGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50VGFyZ2V0O1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIHN0YXJ0LCByZWNvcmQgdGhlIHBvc2l0aW9uIGFuZCBzY3JvbGwgb2Zmc2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0RWxlbWVudCwgdG91Y2gsIHNlbGVjdGlvbjtcblxuXHRcdC8vIElnbm9yZSBtdWx0aXBsZSB0b3VjaGVzLCBvdGhlcndpc2UgcGluY2gtdG8tem9vbSBpcyBwcmV2ZW50ZWQgaWYgYm90aCBmaW5nZXJzIGFyZSBvbiB0aGUgRmFzdENsaWNrIGVsZW1lbnQgKGlzc3VlICMxMTEpLlxuXHRcdGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHR0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MpIHtcblxuXHRcdFx0Ly8gT25seSB0cnVzdGVkIGV2ZW50cyB3aWxsIGRlc2VsZWN0IHRleHQgb24gaU9TIChpc3N1ZSAjNDkpXG5cdFx0XHRzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0XHRpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0XHQvLyBXZWlyZCB0aGluZ3MgaGFwcGVuIG9uIGlPUyB3aGVuIGFuIGFsZXJ0IG9yIGNvbmZpcm0gZGlhbG9nIGlzIG9wZW5lZCBmcm9tIGEgY2xpY2sgZXZlbnQgY2FsbGJhY2sgKGlzc3VlICMyMyk6XG5cdFx0XHRcdC8vIHdoZW4gdGhlIHVzZXIgbmV4dCB0YXBzIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2UsIG5ldyB0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCBldmVudHMgYXJlIGRpc3BhdGNoZWRcblx0XHRcdFx0Ly8gd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIHRoZSB0b3VjaCBldmVudCB0aGF0IHByZXZpb3VzbHkgdHJpZ2dlcmVkIHRoZSBjbGljayB0aGF0IHRyaWdnZXJlZCB0aGUgYWxlcnQuXG5cdFx0XHRcdC8vIFNhZGx5LCB0aGVyZSBpcyBhbiBpc3N1ZSBvbiBpT1MgNCB0aGF0IGNhdXNlcyBzb21lIG5vcm1hbCB0b3VjaCBldmVudHMgdG8gaGF2ZSB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIGFuXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IHByZWNlZWRpbmcgdG91Y2ggZXZlbnQgKGlzc3VlICM1MiksIHNvIHRoaXMgZml4IGlzIHVuYXZhaWxhYmxlIG9uIHRoYXQgcGxhdGZvcm0uXG5cdFx0XHRcdC8vIElzc3VlIDEyMDogdG91Y2guaWRlbnRpZmllciBpcyAwIHdoZW4gQ2hyb21lIGRldiB0b29scyAnRW11bGF0ZSB0b3VjaCBldmVudHMnIGlzIHNldCB3aXRoIGFuIGlPUyBkZXZpY2UgVUEgc3RyaW5nLFxuXHRcdFx0XHQvLyB3aGljaCBjYXVzZXMgYWxsIHRvdWNoIGV2ZW50cyB0byBiZSBpZ25vcmVkLiBBcyB0aGlzIGJsb2NrIG9ubHkgYXBwbGllcyB0byBpT1MsIGFuZCBpT1MgaWRlbnRpZmllcnMgYXJlIGFsd2F5cyBsb25nLFxuXHRcdFx0XHQvLyByYW5kb20gaW50ZWdlcnMsIGl0J3Mgc2FmZSB0byB0byBjb250aW51ZSBpZiB0aGUgaWRlbnRpZmllciBpcyAwIGhlcmUuXG5cdFx0XHRcdGlmICh0b3VjaC5pZGVudGlmaWVyICYmIHRvdWNoLmlkZW50aWZpZXIgPT09IHRoaXMubGFzdFRvdWNoSWRlbnRpZmllcikge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgKHVzaW5nIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCkgYW5kOlxuXHRcdFx0XHQvLyAxKSB0aGUgdXNlciBkb2VzIGEgZmxpbmcgc2Nyb2xsIG9uIHRoZSBzY3JvbGxhYmxlIGxheWVyXG5cdFx0XHRcdC8vIDIpIHRoZSB1c2VyIHN0b3BzIHRoZSBmbGluZyBzY3JvbGwgd2l0aCBhbm90aGVyIHRhcFxuXHRcdFx0XHQvLyB0aGVuIHRoZSBldmVudC50YXJnZXQgb2YgdGhlIGxhc3QgJ3RvdWNoZW5kJyBldmVudCB3aWxsIGJlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHVuZGVyIHRoZSB1c2VyJ3MgZmluZ2VyXG5cdFx0XHRcdC8vIHdoZW4gdGhlIGZsaW5nIHNjcm9sbCB3YXMgc3RhcnRlZCwgY2F1c2luZyBGYXN0Q2xpY2sgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoYXQgbGF5ZXIgLSB1bmxlc3MgYSBjaGVja1xuXHRcdFx0XHQvLyBpcyBtYWRlIHRvIGVuc3VyZSB0aGF0IGEgcGFyZW50IGxheWVyIHdhcyBub3Qgc2Nyb2xsZWQgYmVmb3JlIHNlbmRpbmcgYSBzeW50aGV0aWMgY2xpY2sgKGlzc3VlICM0MikuXG5cdFx0XHRcdHRoaXMudXBkYXRlU2Nyb2xsUGFyZW50KHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IHRydWU7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSBldmVudC50aW1lU3RhbXA7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblxuXHRcdHRoaXMudG91Y2hTdGFydFggPSB0b3VjaC5wYWdlWDtcblx0XHR0aGlzLnRvdWNoU3RhcnRZID0gdG91Y2gucGFnZVk7XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQmFzZWQgb24gYSB0b3VjaG1vdmUgZXZlbnQgb2JqZWN0LCBjaGVjayB3aGV0aGVyIHRoZSB0b3VjaCBoYXMgbW92ZWQgcGFzdCBhIGJvdW5kYXJ5IHNpbmNlIGl0IHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSwgYm91bmRhcnkgPSB0aGlzLnRvdWNoQm91bmRhcnk7XG5cblx0XHRpZiAoTWF0aC5hYnModG91Y2gucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSA+IGJvdW5kYXJ5IHx8IE1hdGguYWJzKHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPiBib3VuZGFyeSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgbGFzdCBwb3NpdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCwgY2FuY2VsIHRoZSBjbGljayB0cmFja2luZ1xuXHRcdGlmICh0aGlzLnRhcmdldEVsZW1lbnQgIT09IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpIHx8IHRoaXMudG91Y2hIYXNNb3ZlZChldmVudCkpIHtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEhUTUxMYWJlbEVsZW1lbnR9IGxhYmVsRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5maW5kQ29udHJvbCA9IGZ1bmN0aW9uKGxhYmVsRWxlbWVudCkge1xuXG5cdFx0Ly8gRmFzdCBwYXRoIGZvciBuZXdlciBicm93c2VycyBzdXBwb3J0aW5nIHRoZSBIVE1MNSBjb250cm9sIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmNvbnRyb2w7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5odG1sRm9yKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxFbGVtZW50Lmh0bWxGb3IpO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGZvciBhdHRyaWJ1dGUgZXhpc3RzLCBhdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBmaXJzdCBsYWJlbGxhYmxlIGRlc2NlbmRhbnQgZWxlbWVudFxuXHRcdC8vIHRoZSBsaXN0IG9mIHdoaWNoIGlzIGRlZmluZWQgaGVyZTogaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNjYXRlZ29yeS1sYWJlbFxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGZvckVsZW1lbnQsIHRyYWNraW5nQ2xpY2tTdGFydCwgdGFyZ2V0VGFnTmFtZSwgc2Nyb2xsUGFyZW50LCB0b3VjaCwgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0RWxlbWVudDtcblxuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQpID4gdGhpcy50YXBUaW1lb3V0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0byBwcmV2ZW50IHdyb25nIGNsaWNrIGNhbmNlbCBvbiBpbnB1dCAoaXNzdWUgIzE1NikuXG5cdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSBmYWxzZTtcblxuXHRcdHRoaXMubGFzdENsaWNrVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdHRyYWNraW5nQ2xpY2tTdGFydCA9IHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0O1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXHRcdC8vIE9uIHNvbWUgaU9TIGRldmljZXMsIHRoZSB0YXJnZXRFbGVtZW50IHN1cHBsaWVkIHdpdGggdGhlIGV2ZW50IGlzIGludmFsaWQgaWYgdGhlIGxheWVyXG5cdFx0Ly8gaXMgcGVyZm9ybWluZyBhIHRyYW5zaXRpb24gb3Igc2Nyb2xsLCBhbmQgaGFzIHRvIGJlIHJlLWRldGVjdGVkIG1hbnVhbGx5LiBOb3RlIHRoYXRcblx0XHQvLyBmb3IgdGhpcyB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGl0IG11c3QgYmUgY2FsbGVkICphZnRlciogdGhlIGV2ZW50IHRhcmdldCBpcyBjaGVja2VkIVxuXHRcdC8vIFNlZSBpc3N1ZSAjNTc7IGFsc28gZmlsZWQgYXMgcmRhcjovLzEzMDQ4NTg5IC5cblx0XHRpZiAoZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0KSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0XHQvLyBJbiBjZXJ0YWluIGNhc2VzIGFyZ3VtZW50cyBvZiBlbGVtZW50RnJvbVBvaW50IGNhbiBiZSBuZWdhdGl2ZSwgc28gcHJldmVudCBzZXR0aW5nIHRhcmdldEVsZW1lbnQgdG8gbnVsbFxuXHRcdFx0dGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSB8fCB0YXJnZXRFbGVtZW50O1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdH1cblxuXHRcdHRhcmdldFRhZ05hbWUgPSB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGFyZ2V0VGFnTmFtZSA9PT0gJ2xhYmVsJykge1xuXHRcdFx0Zm9yRWxlbWVudCA9IHRoaXMuZmluZENvbnRyb2wodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRpZiAoZm9yRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGZvckVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLm5lZWRzRm9jdXModGFyZ2V0RWxlbWVudCkpIHtcblxuXHRcdFx0Ly8gQ2FzZSAxOiBJZiB0aGUgdG91Y2ggc3RhcnRlZCBhIHdoaWxlIGFnbyAoYmVzdCBndWVzcyBpcyAxMDBtcyBiYXNlZCBvbiB0ZXN0cyBmb3IgaXNzdWUgIzM2KSB0aGVuIGZvY3VzIHdpbGwgYmUgdHJpZ2dlcmVkIGFueXdheS4gUmV0dXJuIGVhcmx5IGFuZCB1bnNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgcmVmZXJlbmNlIHNvIHRoYXQgdGhlIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBiZSBhbGxvd2VkIHRocm91Z2guXG5cdFx0XHQvLyBDYXNlIDI6IFdpdGhvdXQgdGhpcyBleGNlcHRpb24gZm9yIGlucHV0IGVsZW1lbnRzIHRhcHBlZCB3aGVuIHRoZSBkb2N1bWVudCBpcyBjb250YWluZWQgaW4gYW4gaWZyYW1lLCB0aGVuIGFueSBpbnB1dHRlZCB0ZXh0IHdvbid0IGJlIHZpc2libGUgZXZlbiB0aG91Z2ggdGhlIHZhbHVlIGF0dHJpYnV0ZSBpcyB1cGRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzIChpc3N1ZSAjMzcpLlxuXHRcdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0cmFja2luZ0NsaWNrU3RhcnQpID4gMTAwIHx8IChkZXZpY2VJc0lPUyAmJiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgdGFyZ2V0VGFnTmFtZSA9PT0gJ2lucHV0JykpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXG5cdFx0XHQvLyBTZWxlY3QgZWxlbWVudHMgbmVlZCB0aGUgZXZlbnQgdG8gZ28gdGhyb3VnaCBvbiBpT1MgNCwgb3RoZXJ3aXNlIHRoZSBzZWxlY3RvciBtZW51IHdvbid0IG9wZW4uXG5cdFx0XHQvLyBBbHNvIHRoaXMgYnJlYWtzIG9wZW5pbmcgc2VsZWN0cyB3aGVuIFZvaWNlT3ZlciBpcyBhY3RpdmUgb24gaU9TNiwgaU9TNyAoYW5kIHBvc3NpYmx5IG90aGVycylcblx0XHRcdGlmICghZGV2aWNlSXNJT1MgfHwgdGFyZ2V0VGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiAhZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgZXZlbnQgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGF5ZXIgdGhhdCB3YXMgc2Nyb2xsZWRcblx0XHRcdC8vIGFuZCB0aGlzIHRhcCBpcyBiZWluZyB1c2VkIHRvIHN0b3AgdGhlIHNjcm9sbGluZyAodXN1YWxseSBpbml0aWF0ZWQgYnkgYSBmbGluZyAtIGlzc3VlICM0MikuXG5cdFx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHRcdGlmIChzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgIT09IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCB0aGUgYWN0dWFsIGNsaWNrIGZyb20gZ29pbmcgdGhvdWdoIC0gdW5sZXNzIHRoZSB0YXJnZXQgbm9kZSBpcyBtYXJrZWQgYXMgcmVxdWlyaW5nXG5cdFx0Ly8gcmVhbCBjbGlja3Mgb3IgaWYgaXQgaXMgaW4gdGhlIHdoaXRlbGlzdCBpbiB3aGljaCBjYXNlIG9ubHkgbm9uLXByb2dyYW1tYXRpYyBjbGlja3MgYXJlIHBlcm1pdHRlZC5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggY2FuY2VsLCBzdG9wIHRyYWNraW5nIHRoZSBjbGljay5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSBtb3VzZSBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uTW91c2UgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gSWYgYSB0YXJnZXQgZWxlbWVudCB3YXMgbmV2ZXIgc2V0IChiZWNhdXNlIGEgdG91Y2ggZXZlbnQgd2FzIG5ldmVyIGZpcmVkKSBhbGxvdyB0aGUgZXZlbnRcblx0XHRpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkIGV2ZW50cyB0YXJnZXRpbmcgYSBzcGVjaWZpYyBlbGVtZW50IHNob3VsZCBiZSBwZXJtaXR0ZWRcblx0XHRpZiAoIWV2ZW50LmNhbmNlbGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIERlcml2ZSBhbmQgY2hlY2sgdGhlIHRhcmdldCBlbGVtZW50IHRvIHNlZSB3aGV0aGVyIHRoZSBtb3VzZSBldmVudCBuZWVkcyB0byBiZSBwZXJtaXR0ZWQ7XG5cdFx0Ly8gdW5sZXNzIGV4cGxpY2l0bHkgZW5hYmxlZCwgcHJldmVudCBub24tdG91Y2ggY2xpY2sgZXZlbnRzIGZyb20gdHJpZ2dlcmluZyBhY3Rpb25zLFxuXHRcdC8vIHRvIHByZXZlbnQgZ2hvc3QvZG91YmxlY2xpY2tzLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRoaXMudGFyZ2V0RWxlbWVudCkgfHwgdGhpcy5jYW5jZWxOZXh0Q2xpY2spIHtcblxuXHRcdFx0Ly8gUHJldmVudCBhbnkgdXNlci1hZGRlZCBsaXN0ZW5lcnMgZGVjbGFyZWQgb24gRmFzdENsaWNrIGVsZW1lbnQgZnJvbSBiZWluZyBmaXJlZC5cblx0XHRcdGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhlIGhhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdFx0XHRldmVudC5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIGV2ZW50XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbW91c2UgZXZlbnQgaXMgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIGFjdHVhbCBjbGlja3MsIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSB0b3VjaC1nZW5lcmF0ZWQgY2xpY2ssIGEgY2xpY2sgYWN0aW9uIG9jY3VycmluZ1xuXHQgKiBuYXR1cmFsbHkgYWZ0ZXIgYSBkZWxheSBhZnRlciBhIHRvdWNoICh3aGljaCBuZWVkcyB0byBiZSBjYW5jZWxsZWQgdG8gYXZvaWQgZHVwbGljYXRpb24pLCBvclxuXHQgKiBhbiBhY3R1YWwgY2xpY2sgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBwZXJtaXR0ZWQ7XG5cblx0XHQvLyBJdCdzIHBvc3NpYmxlIGZvciBhbm90aGVyIEZhc3RDbGljay1saWtlIGxpYnJhcnkgZGVsaXZlcmVkIHdpdGggdGhpcmQtcGFydHkgY29kZSB0byBmaXJlIGEgY2xpY2sgZXZlbnQgYmVmb3JlIEZhc3RDbGljayBkb2VzIChpc3N1ZSAjNDQpLiBJbiB0aGF0IGNhc2UsIHNldCB0aGUgY2xpY2stdHJhY2tpbmcgZmxhZyBiYWNrIHRvIGZhbHNlIGFuZCByZXR1cm4gZWFybHkuIFRoaXMgd2lsbCBjYXVzZSBvblRvdWNoRW5kIHRvIHJldHVybiBlYXJseS5cblx0XHRpZiAodGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBWZXJ5IG9kZCBiZWhhdmlvdXIgb24gaU9TIChpc3N1ZSAjMTgpOiBpZiBhIHN1Ym1pdCBlbGVtZW50IGlzIHByZXNlbnQgaW5zaWRlIGEgZm9ybSBhbmQgdGhlIHVzZXIgaGl0cyBlbnRlciBpbiB0aGUgaU9TIHNpbXVsYXRvciBvciBjbGlja3MgdGhlIEdvIGJ1dHRvbiBvbiB0aGUgcG9wLXVwIE9TIGtleWJvYXJkIHRoZSBhIGtpbmQgb2YgJ2Zha2UnIGNsaWNrIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIHdpdGggdGhlIHN1Ym1pdC10eXBlIGlucHV0IGVsZW1lbnQgYXMgdGhlIHRhcmdldC5cblx0XHRpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnICYmIGV2ZW50LmRldGFpbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cGVybWl0dGVkID0gdGhpcy5vbk1vdXNlKGV2ZW50KTtcblxuXHRcdC8vIE9ubHkgdW5zZXQgdGFyZ2V0RWxlbWVudCBpZiB0aGUgY2xpY2sgaXMgbm90IHBlcm1pdHRlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBjaGVjayBmb3IgIXRhcmdldEVsZW1lbnQgaW4gb25Nb3VzZSBmYWlscyBhbmQgdGhlIGJyb3dzZXIncyBjbGljayBkb2Vzbid0IGdvIHRocm91Z2guXG5cdFx0aWYgKCFwZXJtaXR0ZWQpIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgY2xpY2tzIGFyZSBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHBlcm1pdHRlZDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIEZhc3RDbGljaydzIGV2ZW50IGxpc3RlbmVycy5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hDYW5jZWwsIGZhbHNlKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIEZhc3RDbGljayBpcyBuZWVkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKi9cblx0RmFzdENsaWNrLm5vdE5lZWRlZCA9IGZ1bmN0aW9uKGxheWVyKSB7XG5cdFx0dmFyIG1ldGFWaWV3cG9ydDtcblx0XHR2YXIgY2hyb21lVmVyc2lvbjtcblx0XHR2YXIgYmxhY2tiZXJyeVZlcnNpb247XG5cdFx0dmFyIGZpcmVmb3hWZXJzaW9uO1xuXG5cdFx0Ly8gRGV2aWNlcyB0aGF0IGRvbid0IHN1cHBvcnQgdG91Y2ggZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBDaHJvbWUgdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0Y2hyb21lVmVyc2lvbiA9ICsoL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGNocm9tZVZlcnNpb24pIHtcblxuXHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIENocm9tZSBvbiBBbmRyb2lkIHdpdGggdXNlci1zY2FsYWJsZT1cIm5vXCIgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzg5KVxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIDMyIGFuZCBhYm92ZSB3aXRoIHdpZHRoPWRldmljZS13aWR0aCBvciBsZXNzIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0XHRcdFx0aWYgKGNocm9tZVZlcnNpb24gPiAzMSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBDaHJvbWUgZGVza3RvcCBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjMTUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNCbGFja0JlcnJ5MTApIHtcblx0XHRcdGJsYWNrYmVycnlWZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhbMC05XSopXFwuKFswLTldKikvKTtcblxuXHRcdFx0Ly8gQmxhY2tCZXJyeSAxMC4zKyBkb2VzIG5vdCByZXF1aXJlIEZhc3RjbGljayBsaWJyYXJ5LlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2svaXNzdWVzLzI1MVxuXHRcdFx0aWYgKGJsYWNrYmVycnlWZXJzaW9uWzFdID49IDEwICYmIGJsYWNrYmVycnlWZXJzaW9uWzJdID49IDMpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyB1c2VyLXNjYWxhYmxlPW5vIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB3aWR0aD1kZXZpY2Utd2lkdGggKG9yIGxlc3MgdGhhbiBkZXZpY2Utd2lkdGgpIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMCB3aXRoIC1tcy10b3VjaC1hY3Rpb246IG5vbmUgb3IgbWFuaXB1bGF0aW9uLCB3aGljaCBkaXNhYmxlcyBkb3VibGUtdGFwLXRvLXpvb20gKGlzc3VlICM5Nylcblx0XHRpZiAobGF5ZXIuc3R5bGUubXNUb3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZWZveCB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRmaXJlZm94VmVyc2lvbiA9ICsoL0ZpcmVmb3hcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChmaXJlZm94VmVyc2lvbiA+PSAyNykge1xuXHRcdFx0Ly8gRmlyZWZveCAyNysgZG9lcyBub3QgaGF2ZSB0YXAgZGVsYXkgaWYgdGhlIGNvbnRlbnQgaXMgbm90IHpvb21hYmxlIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyODk2XG5cblx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblx0XHRcdGlmIChtZXRhVmlld3BvcnQgJiYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTExOiBwcmVmaXhlZCAtbXMtdG91Y2gtYWN0aW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIGl0J3MgcmVjb21lbmRlZCB0byB1c2Ugbm9uLXByZWZpeGVkIHZlcnNpb25cblx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvd2luZG93cy9hcHBzL0hoNzY3MzEzLmFzcHhcblx0XHRpZiAobGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBGYXN0Q2xpY2sgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0RmFzdENsaWNrLmF0dGFjaCA9IGZ1bmN0aW9uKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIG5ldyBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpO1xuXHR9O1xuXG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gRmFzdENsaWNrO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBGYXN0Q2xpY2suYXR0YWNoO1xuXHRcdG1vZHVsZS5leHBvcnRzLkZhc3RDbGljayA9IEZhc3RDbGljaztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9XG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9NYXRlcmlhbC9FdmVudFwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTWF0ZXJpYWwvSGVhZGVyXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9NYXRlcmlhbC9OYXZcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL01hdGVyaWFsL1NlYXJjaFwiXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL01hdGVyaWFsL1NpZGViYXJcIlxyXG5pbXBvcnQgU291cmNlIGZyb20gXCIuL01hdGVyaWFsL1NvdXJjZVwiXHJcbmltcG9ydCBUYWJzIGZyb20gXCIuL01hdGVyaWFsL1RhYnNcIlxyXG5pbXBvcnQgVGFibGVPZkNvbnRlbnRzIGZyb20gXCIuL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50c1wiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgRXZlbnQsXHJcbiAgSGVhZGVyLFxyXG4gIE5hdixcclxuICBTZWFyY2gsXHJcbiAgU2lkZWJhcixcclxuICBTb3VyY2UsXHJcbiAgVGFicyxcclxuICBUYWJsZU9mQ29udGVudHNcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0V2ZW50L0xpc3RlbmVyXCJcclxuaW1wb3J0IE1hdGNoTWVkaWEgZnJvbSBcIi4vRXZlbnQvTWF0Y2hNZWRpYVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgTGlzdGVuZXIsXHJcbiAgTWF0Y2hNZWRpYVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vTGlzdGVuZXJcIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoTWVkaWEge1xyXG5cclxuICAvKipcclxuICAgKiBNZWRpYSBxdWVyeSBsaXN0ZW5lclxyXG4gICAqXHJcbiAgICogVGhpcyBjbGFzcyBsaXN0ZW5zIGZvciBzdGF0ZSBjaGFuZ2VzIG9mIG1lZGlhIHF1ZXJpZXMgYW5kIGF1dG9tYXRpY2FsbHlcclxuICAgKiBzd2l0Y2hlcyB0aGUgZ2l2ZW4gbGlzdGVuZXJzIG9uIG9yIG9mZi5cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlcl8gLSBNZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBNZWRpYSBxdWVyeSB0byB0ZXN0IGZvclxyXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihxdWVyeSwgbGlzdGVuZXIpIHtcclxuICAgIHRoaXMuaGFuZGxlcl8gPSBtcSA9PiB7XHJcbiAgICAgIGlmIChtcS5tYXRjaGVzKVxyXG4gICAgICAgIGxpc3RlbmVyLmxpc3RlbigpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsaXN0ZW5lci51bmxpc3RlbigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBtZWRpYSBxdWVyeSBsaXN0ZW5lciAqL1xyXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSlcclxuICAgIG1lZGlhLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlcl8pXHJcblxyXG4gICAgLyogQWx3YXlzIGNoZWNrIGF0IGluaXRpYWxpemF0aW9uICovXHJcbiAgICB0aGlzLmhhbmRsZXJfKG1lZGlhKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTWF0Y2hNZWRpYS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgU2hhZG93IGZyb20gXCIuL0hlYWRlci9TaGFkb3dcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vSGVhZGVyL1RpdGxlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTaGFkb3csXHJcbiAgVGl0bGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZG93IHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBvciBoaWRlIGhlYWRlciBzaGFkb3cgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBPZmZzZXQgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gSGVhZGVyIHNoYWRvdyBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmLnBhcmVudE5vZGVcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0b3RhbCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5lbF9cclxuICAgIHdoaWxlICgoY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZykpIHtcclxuICAgICAgaWYgKCEoY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgdGhpcy5oZWlnaHRfICs9IGN1cnJlbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2hhZG93IHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBpZiAoZXYgJiYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSkge1xyXG4gICAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVpZ2h0X1xyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJzaGFkb3dcIiA6IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHNoYWRvdyBzdGF0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvU2hhZG93LmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUge1xyXG5cclxuICAvKipcclxuICAgKiBTd2FwIGhlYWRlciB0aXRsZSB0b3BpY3Mgd2hlbiBoZWFkZXIgaXMgc2Nyb2xsZWQgcGFzdFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBFbGVtZW50XHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIFRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MSGVhZGluZ0VsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGl0bGUgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4geyAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB1c2UgY2hpbGROb2RlcyBoZXJlIGZvciBJRT9cclxuICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWFkZXJfLm9mZnNldFRvcFxyXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcblxyXG4gICAgLyogSGFjazogaW5kdWNlIGVsbGlwc2lzIG9uIHRvcGljcyAqL1xyXG4gICAgaWYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRpdGxlIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS53aWR0aCA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvVGl0bGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJsdXIgZnJvbSBcIi4vTmF2L0JsdXJcIlxyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIi4vTmF2L0NvbGxhcHNlXCJcclxuaW1wb3J0IFNjcm9sbGluZyBmcm9tIFwiLi9OYXYvU2Nyb2xsaW5nXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBCbHVyLFxyXG4gIENvbGxhcHNlLFxyXG4gIFNjcm9sbGluZ1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQmx1ciBsaW5rcyB3aXRoaW4gdGhlIHRhYmxlIG9mIGNvbnRlbnRzIGFib3ZlIGN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge05vZGVMaXN0PEhUTUxFbGVtZW50Pn0gZWxzXyAtIFRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxIVE1MRWxlbWVudD59IGFuY2hvcnNfIC0gUmVmZXJlbmNlZCBhbmNob3Igbm9kZXNcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXhfIC0gQ3VycmVudCBsaW5rIGluZGV4XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRpcl8gLSBTY3JvbGwgZGlyZWN0aW9uIGNoYW5nZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfE5vZGVMaXN0PEhUTUxFbGVtZW50Pil9IGVscyAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbHMpIHtcclxuICAgIHRoaXMuaW5pdChlbHMpXHJcbiAgfVxyXG5cclxuICBpbml0KGVscykge1xyXG4gICAgdGhpcy5lbHNfID0gKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpXHJcbiAgICAgIDogZWxzXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBpbmRleCBhbmQgcGFnZSB5LW9mZnNldCAqL1xyXG4gICAgdGhpcy5pbmRleF8gPSAwXHJcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgICAvKiBOZWNlc3Nhcnkgc3RhdGUgdG8gY29ycmVjdGx5IHJlc2V0IHRoZSBpbmRleCAqL1xyXG4gICAgdGhpcy5kaXJfID0gZmFsc2VcclxuXHJcbiAgICAvKiBJbmRleCBhbmNob3Igbm9kZSBvZmZzZXRzIGZvciBmYXN0IGxvb2t1cCAqL1xyXG4gICAgdGhpcy5hbmNob3JzXyA9IFtdLnJlZHVjZS5jYWxsKHRoaXMuZWxzXywgKGFuY2hvcnMsIGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBhbmNob3JzLmNvbmNhdChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5oYXNoLnN1YnN0cmluZygxKSkgfHwgW10pXHJcbiAgICB9LCBbXSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYmx1ciBzdGF0ZXNcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBibHVyIHN0YXRlc1xyXG4gICAqXHJcbiAgICogRGVkdWN0IHRoZSBzdGF0aWMgb2Zmc2V0IG9mIHRoZSBoZWFkZXIgKDU2cHgpIGFuZCBzaWRlYmFyIG9mZnNldCAoMjRweCksXHJcbiAgICogc2VlIF9wZXJtYWxpbmtzLnNjc3MgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICBjb25zdCBkaXIgPSB0aGlzLm9mZnNldF8gLSBvZmZzZXQgPCAwXHJcblxyXG4gICAgLyogSGFjazogcmVzZXQgaW5kZXggaWYgZGlyZWN0aW9uIGNoYW5nZWQgdG8gY2F0Y2ggdmVyeSBmYXN0IHNjcm9sbGluZyxcclxuICAgICAgIGJlY2F1c2Ugb3RoZXJ3aXNlIHdlIHdvdWxkIGhhdmUgdG8gcmVnaXN0ZXIgYSB0aW1lciBhbmQgdGhhdCBzdWNrcyAqL1xyXG4gICAgaWYgKHRoaXMuZGlyXyAhPT0gZGlyKVxyXG4gICAgICB0aGlzLmluZGV4XyA9IGRpclxyXG4gICAgICAgID8gdGhpcy5pbmRleF8gPSAwXHJcbiAgICAgICAgOiB0aGlzLmluZGV4XyA9IHRoaXMuZWxzXy5sZW5ndGggLSAxXHJcblxyXG4gICAgLyogRXhpdCB3aGVuIHRoZXJlIGFyZSBubyBhbmNob3JzICovXHJcbiAgICBpZiAodGhpcy5hbmNob3JzXy5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVyblxyXG5cclxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgZG93biAqL1xyXG4gICAgaWYgKHRoaXMub2Zmc2V0XyA8PSBvZmZzZXQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXhfICsgMTsgaSA8IHRoaXMuZWxzXy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuY2hvcnNfW2ldLm9mZnNldFRvcCAtICg1NiArIDI0KSA8PSBvZmZzZXQpIHtcclxuICAgICAgICAgIGlmIChpID4gMClcclxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcImJsdXJcIlxyXG4gICAgICAgICAgdGhpcy5pbmRleF8gPSBpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgLyogU2Nyb2xsIGRpcmVjdGlvbiBpcyB1cCAqL1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXhfOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuY2hvcnNfW2ldLm9mZnNldFRvcCAtICg1NiArIDI0KSA+IG9mZnNldCkge1xyXG4gICAgICAgICAgaWYgKGkgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmVsc19baSAtIDFdLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pbmRleF8gPSBpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbWVtYmVyIGN1cnJlbnQgb2Zmc2V0IGFuZCBkaXJlY3Rpb24gZm9yIG5leHQgaXRlcmF0aW9uICovXHJcbiAgICB0aGlzLm9mZnNldF8gPSBvZmZzZXRcclxuICAgIHRoaXMuZGlyXyA9IGRpclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgYmx1ciBzdGF0ZXNcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbHNfLCBlbCA9PiB7XHJcbiAgICAgIGVsLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgLyogUmVzZXQgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cclxuICAgIHRoaXMuaW5kZXhfICA9IDBcclxuICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0JsdXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsYXBzZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cGFuZCBvciBjb2xsYXBzZSBuYXZpZ2F0aW9uIG9uIHRvZ2dsZVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBOYXZpZ2F0aW9uIGxpc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIG92ZXJmbG93IGFuZCBkaXNwbGF5IGZvciBhY2Nlc3NpYmlsaXR5XHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcblxyXG4gICAgLyogSGlkZGVuIGxpbmtzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlLCBzbyBoaWRlIHRoZW0gd2hlbiB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgaXMgY29sbGFwc2VkIGFuZCBzZXQgb3ZlcmZsb3cgc28gdGhlIG91dGxpbmUgaXMgbm90IGN1dCBvZmYgKi9cclxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gY3VycmVudCA/IFwiYmxvY2tcIiAgIDogXCJub25lXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ID0gY3VycmVudCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW5pbWF0ZSBleHBhbmQgYW5kIGNvbGxhcHNlIHNtb290aGx5XHJcbiAgICpcclxuICAgKiBJbnRlcm5ldCBFeHBsb3JlciAxMSBpcyB2ZXJ5IHNsb3cgYXQgcmVjb2duaXppbmcgY2hhbmdlcyBvbiB0aGUgZGF0YXNldFxyXG4gICAqIHdoaWNoIHJlc3VsdHMgaW4gdGhlIG1lbnUgbm90IGV4cGFuZGluZyBvciBjb2xsYXBzaW5nIHByb3Blcmx5LiBUSGVyZWZvcmUsXHJcbiAgICogZm9yIHJlYXNvbnMgb2YgY29tcGF0aWJpbGl0eSwgdGhlIGF0dHJpYnV0ZSBhY2Nlc3NvcnMgYXJlIHVzZWQuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG5cclxuICAgIC8qIFJlc2V0IG92ZXJmbG93IHRvIENTUyBkZWZhdWx0cyAqL1xyXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgPSBcImJsb2NrXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ID0gXCJcIlxyXG5cclxuICAgIC8qIEV4cGFuZGVkLCBzbyBjb2xsYXBzZSAqL1xyXG4gICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y3VycmVudH1weGBcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiYW5pbWF0ZVwiKVxyXG4gICAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgfSlcclxuXHJcbiAgICAvKiBDb2xsYXBzZWQsIHNvIGV4cGFuZCAqL1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImV4cGFuZFwiKVxyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcblxyXG4gICAgICAvKiBSZWFkIGhlaWdodCBhbmQgdW5zZXQgcHNldWRvLXRvZ2dsZWQgc3RhdGUgKi9cclxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICAgIHRoaXMuZWxfLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcclxuXHJcbiAgICAgIC8qIFNldCBpbml0aWFsIHN0YXRlIGFuZCBhbmltYXRlICovXHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiYW5pbWF0ZVwiKVxyXG4gICAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2hlaWdodH1weGBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgc3RhdGUgb24gZW5kIG9mIHRyYW5zaXRpb24gKi9cclxuICAgIGNvbnN0IGVuZCA9IGV2ID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XHJcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgIC8qIFJlc2V0IGhlaWdodCBhbmQgc3RhdGUgKi9cclxuICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcclxuICAgICAgdGFyZ2V0LnN0eWxlLm1heEhlaWdodCA9IFwiXCJcclxuXHJcbiAgICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgICAgaXMgY29sbGFwc2VkIGFuZCBzZXQgb3ZlcmZsb3cgc28gdGhlIG91dGxpbmUgaXMgbm90IGN1dCBvZmYgKi9cclxuICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgID0gY3VycmVudCA/IFwibm9uZVwiICAgOiBcImJsb2NrXCJcclxuICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gY3VycmVudCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxyXG5cclxuICAgICAgLyogT25seSBmaXJlIG9uY2UsIHNvIGRpcmVjdGx5IHJlbW92ZSBldmVudCBsaXN0ZW5lciAqL1xyXG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbF8uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGhlaWdodCBhbmQgcHNldWRvLXRvZ2dsZWQgc3RhdGVcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgICA9IFwiXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ICA9IFwiXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9Db2xsYXBzZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGluZyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gdGhlIGN1cnJlbnQgYWN0aXZlIHBhbmUgKGZvciBpT1MpXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFByaW1hcnkgbmF2aWdhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHBhbmVzXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcblxyXG4gICAgLyogSW5pdGlhbGx5IHNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXHJcbiAgICBjb25zdCBtYWluID0gdGhpcy5lbF8uY2hpbGRyZW5bdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuICAgIG1haW4uc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuXHJcbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXHJcbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cclxuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xyXG5cclxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAgIC8qIEZpbmQgY3VycmVudCBhbmQgcGFyZW50IGxpc3QgZWxlbWVudHMgKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGFjdGl2ZSBwYW5lc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBDaGFuZ2UgZXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cclxuICAgIGxldCBwYW5lID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXHJcbiAgICBpZiAoISh0YXJnZXQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICEodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgLyogRmluZCBwYXJlbnQgYW5kIGFjdGl2ZSBwYW5lcyAqL1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cclxuICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuXHJcbiAgICAvKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHBhcmVudCBwYW5lICovXHJcbiAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuICAgICAgICAgIHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBhY3RpdmUgcGFuZSAqL1xyXG4gICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuICAgICAgICAgIHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBwYW5lc1xyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG5cclxuICAgIC8qIFJlc2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBtYWluIHBhbmUgKi9cclxuICAgIHRoaXMuZWxfLmNoaWxkcmVuWzFdLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG5cclxuICAgIC8qIEZpbmQgYWxsIHRvZ2dsZXMgYW5kIGNoZWNrIHdoaWNoIG9uZSBpcyBhY3RpdmUgKi9cclxuICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLmVsXy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtdG9nZ2xlXVwiKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0b2dnbGVzLCB0b2dnbGUgPT4ge1xyXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xyXG4gICAgICAgIGxldCBwYW5lID0gdG9nZ2xlLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cclxuICAgICAgICBpZiAoISh0b2dnbGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICAgICAhKHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgICAgLyogRmluZCBwYXJlbnQgYW5kIGFjdGl2ZSBwYW5lcyAqL1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgICAgICBjb25zdCBhY3RpdmUgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cclxuICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L1Njcm9sbGluZy5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgTG9jayBmcm9tIFwiLi9TZWFyY2gvTG9ja1wiXHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vU2VhcmNoL1Jlc3VsdFwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgTG9jayxcclxuICBSZXN1bHRcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jayB7XHJcblxyXG4gIC8qKlxyXG4gICAqIExvY2sgYm9keSBmb3IgZnVsbC1zY3JlZW4gc2VhcmNoIG1vZGFsXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudH0gZWxfIC0gTG9jayB0b2dnbGVcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBsb2NrXyAtIEVsZW1lbnQgdG8gbG9jayAoZG9jdW1lbnQgYm9keSlcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIGVsZW1lbnQgdG8gbG9jayAoPSBib2R5KSAqL1xyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMubG9ja18gPSBkb2N1bWVudC5ib2R5XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCBsb2NrZWQgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBsb2NrZWQgc3RhdGVcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcblxyXG4gICAgLyogRW50ZXJpbmcgc2VhcmNoIG1vZGUgKi9cclxuICAgIGlmICh0aGlzLmVsXy5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG5cclxuICAgICAgLyogU2Nyb2xsIHRvIHRvcCBhZnRlciB0cmFuc2l0aW9uLCB0byBvbWl0IGZsaWNrZXJpbmcgKi9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcblxyXG4gICAgICAgIC8qIExvY2sgYm9keSBhZnRlciBmaW5pc2hpbmcgdHJhbnNpdGlvbiAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsXy5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA0MDApXHJcblxyXG4gICAgLyogRXhpdGluZyBzZWFyY2ggbW9kZSAqL1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcblxyXG4gICAgICAvKiBTY3JvbGwgdG8gZm9ybWVyIHBvc2l0aW9uLCBidXQgd2FpdCBmb3IgMTAwbXMgdG8gcHJldmVudCBmbGFzaGVzIG9uXHJcbiAgICAgICAgIGlPUy4gQSBzaG9ydCB0aW1lb3V0IHNlZW1zIHRvIGRvIHRoZSB0cmljayAqL1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2Zmc2V0XyAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXHJcbiAgICAgIH0sIDEwMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgcGFnZSB5LW9mZnNldFxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgaWYgKHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID09PSBcImxvY2tcIilcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMub2Zmc2V0XylcclxuICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IGVzY2FwZSBmcm9tIFwiZXNjYXBlLXN0cmluZy1yZWdleHBcIlxyXG5pbXBvcnQgbHVuciBmcm9tIFwiZXhwb3NlLWxvYWRlcj9sdW5yIWx1bnJcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGdW5jdGlvbnNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIEVzY2FwZSBIVE1MIHN0cmluZ3NcclxuICpcclxuICogRG9jdW1lbnRhdGlvbiBtYXkgY29udGFpbiBjb2RlIEphdmFTY3JpcHQgY29kZSBzbmlwcGV0cyB3aGljaCB3b3VsZCBnZXRcclxuICogZXhlY3V0ZWQgd2hlbiBpbnNlcnRlZCBpbnRvIHRoZSBET00gYXMgcGxhaW4gSFRNTC5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zcXVpZGZ1bmsvbWtkb2NzLW1hdGVyaWFsL2lzc3Vlcy85MDZcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZ1xyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgSFRNTCBzdHJpbmdcclxuICovXHJcbmNvbnN0IGVzY2FwZUhUTUwgPSBodG1sID0+IHtcclxuICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWwpO1xyXG4gIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgcmV0dXJuIHAuaW5uZXJIVE1MO1xyXG59XHJcblxyXG4vKipcclxuICogVHJ1bmNhdGUgYSBzdHJpbmcgYWZ0ZXIgdGhlIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJcclxuICpcclxuICogVGhpcyBpcyBub3QgYSByZWFzb25hYmxlIGFwcHJvYWNoLCBzaW5jZSB0aGUgc3VtbWFyaWVzIGtpbmQgb2Ygc3Vjay4gSXRcclxuICogd291bGQgYmUgYmV0dGVyIHRvIGNyZWF0ZSBzb21ldGhpbmcgbW9yZSBpbnRlbGxpZ2VudCwgaGlnaGxpZ2h0aW5nIHRoZVxyXG4gKiBzZWFyY2ggb2NjdXJyZW5jZXMgYW5kIG1ha2luZyBhIGJldHRlciBzdW1tYXJ5IG91dCBvZiBpdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFN0cmluZyB0byBiZSB0cnVuY2F0ZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBOdW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRydW5jYXRlZCBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRydW5jYXRlID0gKHN0cmluZywgbikgPT4ge1xyXG4gIGxldCBpID0gblxyXG4gIGlmIChzdHJpbmcubGVuZ3RoID4gaSkge1xyXG4gICAgd2hpbGUgKHN0cmluZ1tpXSAhPT0gXCIgXCIgJiYgLS1pID4gMCk7XHJcbiAgICByZXR1cm4gYCR7c3RyaW5nLnN1YnN0cmluZygwLCBpKX0uLi5gXHJcbiAgfVxyXG4gIHJldHVybiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgbWV0YSB0YWcgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXlcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIE1ldGEgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1ldGEgY29udGVudCB2YWx1ZVxyXG4gKi9cclxuY29uc3QgdHJhbnNsYXRlID0ga2V5ID0+IHtcclxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYGxhbmc6JHtrZXl9YClbMF1cclxuICBpZiAoIShtZXRhIGluc3RhbmNlb2YgSFRNTE1ldGFFbGVtZW50KSlcclxuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gIHJldHVybiBtZXRhLmNvbnRlbnRcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xyXG5cclxuICAvKipcclxuICAgKiBQZXJmb3JtIHNlYXJjaCBhbmQgdXBkYXRlIHJlc3VsdHMgb24ga2V5Ym9hcmQgZXZlbnRzXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFNlYXJjaCByZXN1bHQgY29udGFpbmVyXHJcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8T2JqZWN0PnxGdW5jdGlvbil9IGRhdGFfIC0gUmF3IGRvY3VtZW50IGRhdGFcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZG9jc18gLSBJbmRleGVkIGRvY3VtZW50c1xyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IG1ldGFfIC0gU2VhcmNoIG1ldGEgaW5mb3JtYXRpb25cclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBsaXN0XyAtIFNlYXJjaCByZXN1bHQgbGlzdFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gbGFuZ18gLSBTZWFyY2ggbGFuZ3VhZ2VzXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1lc3NhZ2VfIC0gU2VhcmNoIHJlc3VsdCBtZXNzYWdlc1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBpbmRleF8gLSBTZWFyY2ggaW5kZXhcclxuICAgKiBAcHJvcGVydHkge0FycmF5PEZ1bmN0aW9uPn0gc3RhY2tfIC0gU2VhcmNoIHJlc3VsdCBzdGFja1xyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZV8gLSBMYXN0IGlucHV0IHZhbHVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58RnVuY3Rpb24pfSBkYXRhIC0gRnVuY3Rpb24gcHJvdmlkaW5nIGRhdGEgb3IgYXJyYXlcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgZGF0YSkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBtZXRhZGF0YSBhbmQgbGlzdCBlbGVtZW50ICovXHJcbiAgICBjb25zdCBbbWV0YSwgbGlzdF0gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsXy5jaGlsZHJlbilcclxuXHJcbiAgICAvKiBTZXQgZGF0YSwgbWV0YWRhdGEgYW5kIGxpc3QgZWxlbWVudHMgKi9cclxuICAgIHRoaXMuZGF0YV8gPSBkYXRhXHJcbiAgICB0aGlzLm1ldGFfID0gbWV0YVxyXG4gICAgdGhpcy5saXN0XyA9IGxpc3RcclxuXHJcbiAgICAvKiBMb2FkIG1lc3NhZ2VzIGZvciBtZXRhZGF0YSBkaXNwbGF5ICovXHJcbiAgICB0aGlzLm1lc3NhZ2VfID0ge1xyXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5tZXRhXy50ZXh0Q29udGVudCxcclxuICAgICAgbm9uZTogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5ub25lXCIpLFxyXG4gICAgICBvbmU6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQub25lXCIpLFxyXG4gICAgICBvdGhlcjogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vdGhlclwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIE92ZXJyaWRlIHRva2VuaXplciBzZXBhcmF0b3IsIGlmIGdpdmVuICovXHJcbiAgICBjb25zdCB0b2tlbml6ZXIgPSB0cmFuc2xhdGUoXCJzZWFyY2gudG9rZW5pemVyXCIpXHJcbiAgICBpZiAodG9rZW5pemVyLmxlbmd0aClcclxuICAgICAgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gdG9rZW5pemVyXHJcblxyXG4gICAgLyogTG9hZCBzZWFyY2ggbGFuZ3VhZ2VzICovXHJcbiAgICB0aGlzLmxhbmdfID0gdHJhbnNsYXRlKFwic2VhcmNoLmxhbmd1YWdlXCIpLnNwbGl0KFwiLFwiKVxyXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgIC5tYXAobGFuZyA9PiBsYW5nLnRyaW0oKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzZWFyY2ggcmVzdWx0c1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBJbnB1dCBvciBmb2N1cyBldmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaW5kZXgsIGlmIHRoaXMgaGFzIG5vdCBiZSBkb25lIHlldCAqL1xyXG4gICAgaWYgKGV2LnR5cGUgPT09IFwiZm9jdXNcIiAmJiAhdGhpcy5pbmRleF8pIHtcclxuXHJcbiAgICAgIC8qIEluaXRpYWxpemUgaW5kZXggKi9cclxuICAgICAgY29uc3QgaW5pdCA9IGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAvKiBQcmVwcm9jZXNzIGFuZCBpbmRleCBzZWN0aW9ucyBhbmQgZG9jdW1lbnRzICovXHJcbiAgICAgICAgdGhpcy5kb2NzXyA9IGRhdGEucmVkdWNlKChkb2NzLCBkb2MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtwYXRoLCBoYXNoXSA9IGRvYy5sb2NhdGlvbi5zcGxpdChcIiNcIilcclxuXHJcbiAgICAgICAgICAvKiBFc2NhcGUgSFRNTCAqL1xyXG4gICAgICAgICAgZG9jLnRpdGxlID0gZXNjYXBlSFRNTChkb2MudGl0bGUpXHJcbiAgICAgICAgICBkb2MudGV4dCAgPSBlc2NhcGVIVE1MKGRvYy5jb250ZW50cylcclxuXHJcbiAgICAgICAgICAvKiBBc3NvY2lhdGUgc2VjdGlvbiB3aXRoIHBhcmVudCBkb2N1bWVudCAqL1xyXG4gICAgICAgICAgaWYgKGhhc2gpIHtcclxuICAgICAgICAgICAgZG9jLnBhcmVudCA9IGRvY3MuZ2V0KHBhdGgpXHJcblxyXG4gICAgICAgICAgICAvKiBPdmVycmlkZSBwYWdlIHRpdGxlIHdpdGggZG9jdW1lbnQgdGl0bGUgaWYgZmlyc3Qgc2VjdGlvbiAqL1xyXG4gICAgICAgICAgICBpZiAoZG9jLnBhcmVudCAmJiAhZG9jLnBhcmVudC5kb25lKSB7XHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC50aXRsZSA9IGRvYy50aXRsZVxyXG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQudGV4dCAgPSBkb2MuY29udGVudHNcclxuICAgICAgICAgICAgICBkb2MucGFyZW50LmRvbmUgID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogU29tZSBjbGVhbnVwIG9uIHRoZSB0ZXh0ICovXHJcbiAgICAgICAgICBkb2MudGV4dCA9IGRvYy50ZXh0XHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICAgICAgICAgICAgICAgLyogUmVtb3ZlIG5ld2xpbmVzICovXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKSAgICAgICAgICAgICAgLyogQ29tcGFjdCB3aGl0ZXNwYWNlICovXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrKFssLjo7IT9dKS9nLCAgICAgICAgIC8qIENvcnJlY3QgcHVuY3R1YXRpb24gKi9cclxuICAgICAgICAgICAgICAoXywgY2hhcikgPT4gY2hhcilcclxuXHJcbiAgICAgICAgICAvKiBJbmRleCBzZWN0aW9ucyBhbmQgZG9jdW1lbnRzLCBidXQgc2tpcCB0b3AtbGV2ZWwgaGVhZGxpbmUgKi9cclxuICAgICAgICAgIGlmICghZG9jLnBhcmVudCB8fCBkb2MucGFyZW50LnRpdGxlICE9PSBkb2MudGl0bGUpXHJcbiAgICAgICAgICAgIGRvY3Muc2V0KGRvYy5sb2NhdGlvbiwgZG9jKVxyXG4gICAgICAgICAgcmV0dXJuIGRvY3NcclxuICAgICAgICB9LCBuZXcgTWFwKVxyXG5cclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuICAgICAgICBjb25zdCBkb2NzID0gdGhpcy5kb2NzXyxcclxuICAgICAgICAgICAgICBsYW5nID0gdGhpcy5sYW5nX1xyXG5cclxuICAgICAgICAvKiBDcmVhdGUgc3RhY2sgYW5kIGluZGV4ICovXHJcbiAgICAgICAgdGhpcy5zdGFja18gPSBbXVxyXG4gICAgICAgIHRoaXMuaW5kZXhfID0gbHVucihmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIFwic2VhcmNoLnBpcGVsaW5lLnRyaW1tZXJcIjogbHVuci50cmltbWVyLFxyXG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS5zdG9wd29yZHNcIjogbHVuci5zdG9wV29yZEZpbHRlclxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIERpc2FibGUgc3RvcCB3b3JkcyBmaWx0ZXIgYW5kIHRyaW1tZXIsIGlmIGRlc2lyZWQgKi9cclxuICAgICAgICAgIGNvbnN0IHBpcGVsaW5lID0gT2JqZWN0LmtleXMoZmlsdGVycykucmVkdWNlKChyZXN1bHQsIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGUobmFtZSkubWF0Y2goL15mYWxzZSQvaSkpXHJcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlsdGVyc1tuYW1lXSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgICAgLyogUmVtb3ZlIHN0ZW1tZXIsIGFzIGl0IGNyaXBwbGVzIHNlYXJjaCBleHBlcmllbmNlICovXHJcbiAgICAgICAgICB0aGlzLnBpcGVsaW5lLnJlc2V0KClcclxuICAgICAgICAgIGlmIChwaXBlbGluZSlcclxuICAgICAgICAgICAgdGhpcy5waXBlbGluZS5hZGQoLi4ucGlwZWxpbmUpXHJcblxyXG4gICAgICAgICAgLyogU2V0IHVwIGFsdGVybmF0ZSBzZWFyY2ggbGFuZ3VhZ2VzICovXHJcbiAgICAgICAgICBpZiAobGFuZy5sZW5ndGggPT09IDEgJiYgbGFuZ1swXSAhPT0gXCJlblwiICYmIGx1bnJbbGFuZ1swXV0pIHtcclxuICAgICAgICAgICAgdGhpcy51c2UobHVucltsYW5nWzBdXSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGFuZy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnIubXVsdGlMYW5ndWFnZSguLi5sYW5nKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBJbmRleCBmaWVsZHMgKi9cclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0aXRsZVwiLCB7IGJvb3N0OiAxMCB9KVxyXG4gICAgICAgICAgdGhpcy5maWVsZChcInRleHRcIilcclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0YWdzXCIpXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwiY2F0ZWdvcmllc1wiKVxyXG4gICAgICAgICAgdGhpcy5yZWYoXCJsb2NhdGlvblwiKVxyXG5cclxuICAgICAgICAgIC8qIEluZGV4IGRvY3VtZW50cyAqL1xyXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKGRvYyA9PiB0aGlzLmFkZChkb2MpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgZm9yIGxhenkgcmVuZGVyaW5nICovXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbF8ucGFyZW50Tm9kZVxyXG4gICAgICAgIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgIHdoaWxlICh0aGlzLnN0YWNrXy5sZW5ndGggJiYgY29udGFpbmVyLnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodCA+PSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gMTYpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2tfLnNwbGljZSgwLCAxMCkuZm9yRWFjaChyZW5kZXIgPT4gcmVuZGVyKCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWludmFsaWQtdGhpcyAqL1xyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBpbmRleCBhZnRlciBzaG9ydCB0aW1lb3V0IHRvIGFjY291bnQgZm9yIHRyYW5zaXRpb24gKi9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmRhdGFfID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgID8gdGhpcy5kYXRhXygpLnRoZW4oaW5pdClcclxuICAgICAgICAgIDogaW5pdCh0aGlzLmRhdGFfKVxyXG4gICAgICB9LCAyNTApXHJcblxyXG4gICAgLyogRXhlY3V0ZSBzZWFyY2ggb24gbmV3IGlucHV0IGV2ZW50ICovXHJcbiAgICB9IGVsc2UgaWYgKGV2LnR5cGUgPT09IFwiZm9jdXNcIiB8fCBldi50eXBlID09PSBcImtleXVwXCIpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XHJcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgLyogQWJvcnQgZWFybHksIGlmIGluZGV4IGlzIG5vdCBidWlsZCBvciBpbnB1dCBoYXNuJ3QgY2hhbmdlZCAqL1xyXG4gICAgICBpZiAoIXRoaXMuaW5kZXhfIHx8IHRhcmdldC52YWx1ZSA9PT0gdGhpcy52YWx1ZV8pXHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAvKiBDbGVhciBjdXJyZW50IGxpc3QgKi9cclxuICAgICAgd2hpbGUgKHRoaXMubGlzdF8uZmlyc3RDaGlsZClcclxuICAgICAgICB0aGlzLmxpc3RfLnJlbW92ZUNoaWxkKHRoaXMubGlzdF8uZmlyc3RDaGlsZClcclxuXHJcbiAgICAgIC8qIEFib3J0IGVhcmx5LCBpZiBzZWFyY2ggaW5wdXQgaXMgZW1wdHkgKi9cclxuICAgICAgdGhpcy52YWx1ZV8gPSB0YXJnZXQudmFsdWVcclxuICAgICAgaWYgKHRoaXMudmFsdWVfLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLnBsYWNlaG9sZGVyXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFBlcmZvcm0gc2VhcmNoIG9uIGluZGV4IGFuZCBncm91cCBzZWN0aW9ucyBieSBkb2N1bWVudCAqL1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmluZGV4X1xyXG5cclxuICAgICAgICAvKiBBcHBlbmQgdHJhaWxpbmcgd2lsZGNhcmQgdG8gYWxsIHRlcm1zIGZvciBwcmVmaXggcXVlcnlpbmcgKi9cclxuICAgICAgICAucXVlcnkocXVlcnkgPT4ge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZV8udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCh0ZXJtID0+IHtcclxuICAgICAgICAgICAgICBxdWVyeS50ZXJtKHRlcm0sIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBQcm9jZXNzIHF1ZXJ5IHJlc3VsdHMgKi9cclxuICAgICAgICAucmVkdWNlKChpdGVtcywgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZG9jID0gdGhpcy5kb2NzXy5nZXQoaXRlbS5yZWYpXHJcbiAgICAgICAgICBpZiAoZG9jLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWYgPSBkb2MucGFyZW50LmxvY2F0aW9uXHJcbiAgICAgICAgICAgIGl0ZW1zLnNldChyZWYsIChpdGVtcy5nZXQocmVmKSB8fCBbXSkuY29uY2F0KGl0ZW0pKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jLmxvY2F0aW9uXHJcbiAgICAgICAgICAgIGl0ZW1zLnNldChyZWYsIChpdGVtcy5nZXQocmVmKSB8fCBbXSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXNcclxuICAgICAgICB9LCBuZXcgTWFwKVxyXG5cclxuICAgICAgLyogQXNzZW1ibGUgcmVndWxhciBleHByZXNzaW9ucyBmb3IgbWF0Y2hpbmcgKi9cclxuICAgICAgY29uc3QgcXVlcnkgPSBlc2NhcGUodGhpcy52YWx1ZV8udHJpbSgpKS5yZXBsYWNlKFxyXG4gICAgICAgIG5ldyBSZWdFeHAobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yLCBcImltZ1wiKSwgXCJ8XCIpXHJcbiAgICAgIGNvbnN0IG1hdGNoID1cclxuICAgICAgICBuZXcgUmVnRXhwKGAoXnwke2x1bnIudG9rZW5pemVyLnNlcGFyYXRvcn0pKCR7cXVlcnl9KWAsIFwiaW1nXCIpXHJcbiAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IChfLCBzZXBhcmF0b3IsIHRva2VuKSA9PlxyXG4gICAgICAgIGAke3NlcGFyYXRvcn08ZW0+JHt0b2tlbn08L2VtPmBcclxuXHJcbiAgICAgIC8qIFJlc2V0IHN0YWNrIGFuZCByZW5kZXIgcmVzdWx0cyAqL1xyXG4gICAgICB0aGlzLnN0YWNrXyA9IFtdXHJcbiAgICAgIHJlc3VsdC5mb3JFYWNoKChpdGVtcywgcmVmKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5kb2NzXy5nZXQocmVmKVxyXG5cclxuICAgICAgICAvKiBSZW5kZXIgYXJ0aWNsZSAqL1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSAoXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2RvYy5sb2NhdGlvbn0gdGl0bGU9e2RvYy50aXRsZX1cclxuICAgICAgICAgICAgICBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2xpbmtcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgbWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZS0tZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogZG9jLnRpdGxlLnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICB7ZG9jLnRleHQubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190ZWFzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IGRvYy50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPiA6IHt9fVxyXG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8qIFJlbmRlciBzZWN0aW9ucyBmb3IgYXJ0aWNsZSAqL1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZG9jc18uZ2V0KGl0ZW0ucmVmKVxyXG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3NlY3Rpb24ubG9jYXRpb259IHRpdGxlPXtzZWN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIgZGF0YS1tZC1yZWw9XCJhbmNob3JcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBzZWN0aW9uLnRpdGxlLnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGV4dC5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGVhc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IHRydW5jYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSwgNDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+IDoge319XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogUHVzaCBhcnRpY2xlcyBhbmQgc2VjdGlvbiByZW5kZXJlcnMgb250byBzdGFjayAqL1xyXG4gICAgICAgIHRoaXMuc3RhY2tfLnB1c2goKCkgPT4gdGhpcy5saXN0Xy5hcHBlbmRDaGlsZChhcnRpY2xlKSwgLi4uc2VjdGlvbnMpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBHcmFkdWFsbHkgYWRkIHJlc3VsdHMgYXMgbG9uZyBhcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgZ3Jvd3MgKi9cclxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbF8ucGFyZW50Tm9kZVxyXG4gICAgICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIHdoaWxlICh0aGlzLnN0YWNrXy5sZW5ndGggJiZcclxuICAgICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIDE2KVxyXG4gICAgICAgICh0aGlzLnN0YWNrXy5zaGlmdCgpKSgpXHJcblxyXG4gICAgICAvKiBCaW5kIGNsaWNrIGhhbmRsZXJzIGZvciBhbmNob3JzICovXHJcbiAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmxpc3RfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1yZWw9YW5jaG9yXVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFuY2hvcnMsIGFuY2hvciA9PiB7XHJcbiAgICAgICAgW1wiY2xpY2tcIiwgXCJrZXlkb3duXCJdLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXYyID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJrZXlkb3duXCIgJiYgZXYyLmtleUNvZGUgIT09IDEzKVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgLyogQ2xvc2Ugc2VhcmNoICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxyXG4gICAgICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogSGFjazogcHJldmVudCBkZWZhdWx0LCBhcyB0aGUgbmF2aWdhdGlvbiBuZWVkcyB0byBiZSBkZWxheWVkIGR1ZVxyXG4gICAgICAgICAgICAgICB0byB0aGUgc2VhcmNoIGJvZHkgbG9jayBvbiBtb2JpbGUgKi9cclxuICAgICAgICAgICAgZXYyLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmXHJcbiAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8qIFVwZGF0ZSBzZWFyY2ggbWV0YWRhdGEgKi9cclxuICAgICAgc3dpdGNoIChyZXN1bHQuc2l6ZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLm5vbmVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ub25lXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlXy5vdGhlci5yZXBsYWNlKFwiI1wiLCByZXN1bHQuc2l6ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL1Jlc3VsdC5qc3giLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2VzY2FwZS1zdHJpbmctcmVnZXhwL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJsdW5yXCJdID0gcmVxdWlyZShcIi0hRDpcXFxcU2NvcGlzdG9cXFxcRGV2ZWxvcG1lbnRcXFxcaHVnb1xcXFxodWdvLW1hdGVyaWFsLWRvY3NcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhLlxcXFxsdW5yLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXI/bHVuciEuL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMtZXhwb3NlZFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBsdW5yIC0gaHR0cDovL2x1bnJqcy5jb20gLSBBIGJpdCBsaWtlIFNvbHIsIGJ1dCBtdWNoIHNtYWxsZXIgYW5kIG5vdCBhcyBicmlnaHQgLSAyLjMuNVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuOyhmdW5jdGlvbigpe1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbmZpZ3VyaW5nIGFuZCBjb25zdHJ1Y3RpbmdcbiAqIGEgbmV3IGx1bnIgSW5kZXguXG4gKlxuICogQSBsdW5yLkJ1aWxkZXIgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBpcGVsaW5lIHNldHVwXG4gKiB3aXRoIGEgdHJpbW1lciwgc3RvcCB3b3JkIGZpbHRlciBhbmQgc3RlbW1lci5cbiAqXG4gKiBUaGlzIGJ1aWxkZXIgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIGNvbmZpZ3VyYXRpb24gZnVuY3Rpb25cbiAqIHRoYXQgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLCBhbGxvd2luZyB0aGUgbGlzdCBvZiBmaWVsZHNcbiAqIGFuZCBvdGhlciBidWlsZGVyIHBhcmFtZXRlcnMgdG8gYmUgY3VzdG9taXNlZC5cbiAqXG4gKiBBbGwgZG9jdW1lbnRzIF9tdXN0XyBiZSBhZGRlZCB3aXRoaW4gdGhlIHBhc3NlZCBjb25maWcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBpZHggPSBsdW5yKGZ1bmN0aW9uICgpIHtcbiAqICAgdGhpcy5maWVsZCgndGl0bGUnKVxuICogICB0aGlzLmZpZWxkKCdib2R5JylcbiAqICAgdGhpcy5yZWYoJ2lkJylcbiAqXG4gKiAgIGRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAqICAgICB0aGlzLmFkZChkb2MpXG4gKiAgIH0sIHRoaXMpXG4gKiB9KVxuICpcbiAqIEBzZWUge0BsaW5rIGx1bnIuQnVpbGRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAc2VlIHtAbGluayBsdW5yLnRyaW1tZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0b3BXb3JkRmlsdGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdGVtbWVyfVxuICogQG5hbWVzcGFjZSB7ZnVuY3Rpb259IGx1bnJcbiAqL1xudmFyIGx1bnIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuQnVpbGRlclxuXG4gIGJ1aWxkZXIucGlwZWxpbmUuYWRkKFxuICAgIGx1bnIudHJpbW1lcixcbiAgICBsdW5yLnN0b3BXb3JkRmlsdGVyLFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgYnVpbGRlci5zZWFyY2hQaXBlbGluZS5hZGQoXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBjb25maWcuY2FsbChidWlsZGVyLCBidWlsZGVyKVxuICByZXR1cm4gYnVpbGRlci5idWlsZCgpXG59XG5cbmx1bnIudmVyc2lvbiA9IFwiMi4zLjVcIlxuLyohXG4gKiBsdW5yLnV0aWxzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIG5hbWVzcGFjZSBjb250YWluaW5nIHV0aWxzIGZvciB0aGUgcmVzdCBvZiB0aGUgbHVuciBsaWJyYXJ5XG4gKiBAbmFtZXNwYWNlIGx1bnIudXRpbHNcbiAqL1xubHVuci51dGlscyA9IHt9XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgcHJpbnRlZC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKiBAZnVuY3Rpb25cbiAqL1xubHVuci51dGlscy53YXJuID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsLmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG59KSh0aGlzKVxuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgdGhlIGZ1bmN0aW9uIHJldHVybnNcbiAqIHRoZSBlbXB0eSBzdHJpbmcsIGluIGFsbCBvdGhlciBjYXNlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIGB0b1N0cmluZ2Agb24gdGhlIHBhc3NlZCBvYmplY3QgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtBbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFzc2VkIG9iamVjdC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMuYXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IHZvaWQgMCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKVxuICB9XG59XG5cbi8qKlxuICogQ2xvbmVzIGFuIG9iamVjdC5cbiAqXG4gKiBXaWxsIGNyZWF0ZSBhIGNvcHkgb2YgYW4gZXhpc3Rpbmcgb2JqZWN0IHN1Y2ggdGhhdCBhbnkgbXV0YXRpb25zXG4gKiBvbiB0aGUgY29weSBjYW5ub3QgYWZmZWN0IHRoZSBvcmlnaW5hbC5cbiAqXG4gKiBPbmx5IHNoYWxsb3cgb2JqZWN0cyBhcmUgc3VwcG9ydGVkLCBwYXNzaW5nIGEgbmVzdGVkIG9iamVjdCB0byB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGNhdXNlIGEgVHlwZUVycm9yLlxuICpcbiAqIE9iamVjdHMgd2l0aCBwcmltaXRpdmVzLCBhbmQgYXJyYXlzIG9mIHByaW1pdGl2ZXMgYXJlIHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IGEgY2xvbmUgb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZW4gYSBuZXN0ZWQgb2JqZWN0IGlzIHBhc3NlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICovXG5sdW5yLnV0aWxzLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmopXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV0sXG4gICAgICAgIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsLnNsaWNlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2xvbmUgaXMgbm90IGRlZXAgYW5kIGRvZXMgbm90IHN1cHBvcnQgbmVzdGVkIG9iamVjdHNcIilcbiAgfVxuXG4gIHJldHVybiBjbG9uZVxufVxubHVuci5GaWVsZFJlZiA9IGZ1bmN0aW9uIChkb2NSZWYsIGZpZWxkTmFtZSwgc3RyaW5nVmFsdWUpIHtcbiAgdGhpcy5kb2NSZWYgPSBkb2NSZWZcbiAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWVcbiAgdGhpcy5fc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZVxufVxuXG5sdW5yLkZpZWxkUmVmLmpvaW5lciA9IFwiL1wiXG5cbmx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gIHZhciBuID0gcy5pbmRleE9mKGx1bnIuRmllbGRSZWYuam9pbmVyKVxuXG4gIGlmIChuID09PSAtMSkge1xuICAgIHRocm93IFwibWFsZm9ybWVkIGZpZWxkIHJlZiBzdHJpbmdcIlxuICB9XG5cbiAgdmFyIGZpZWxkUmVmID0gcy5zbGljZSgwLCBuKSxcbiAgICAgIGRvY1JlZiA9IHMuc2xpY2UobiArIDEpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkUmVmLCBzKVxufVxuXG5sdW5yLkZpZWxkUmVmLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX3N0cmluZ1ZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5maWVsZE5hbWUgKyBsdW5yLkZpZWxkUmVmLmpvaW5lciArIHRoaXMuZG9jUmVmXG4gIH1cblxuICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWVcbn1cbi8qIVxuICogbHVuci5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgbHVuciBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuU2V0ID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuZWxlbWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgaWYgKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5sZW5ndGggPSBlbGVtZW50cy5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50c1tlbGVtZW50c1tpXV0gPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMubGVuZ3RoID0gMFxuICB9XG59XG5cbi8qKlxuICogQSBjb21wbGV0ZSBzZXQgdGhhdCBjb250YWlucyBhbGwgZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmNvbXBsZXRlID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbXB0eSBzZXQgdGhhdCBjb250YWlucyBubyBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcmVhZG9ubHlcbiAqIEB0eXBlIHtsdW5yLlNldH1cbiAqL1xubHVuci5TZXQuZW1wdHkgPSB7XG4gIGludGVyc2VjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgdW5pb246IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIE9iamVjdCB3aG9zZSBwcmVzZW5jZSBpbiB0aGlzIHNldCBpcyB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICovXG5sdW5yLlNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHJldHVybiAhIXRoaXMuZWxlbWVudHNbb2JqZWN0XVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgc2V0IGNvbnRhaW5pbmcgb25seSB0aGUgZWxlbWVudHMgdGhhdCBhcmUgcHJlc2VudCBpbiBib3RoXG4gKiB0aGlzIHNldCBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlNldH0gb3RoZXIgLSBzZXQgdG8gaW50ZXJzZWN0IHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJucyB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKi9cblxubHVuci5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgYSwgYiwgZWxlbWVudHMsIGludGVyc2VjdGlvbiA9IFtdXG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPCBvdGhlci5sZW5ndGgpIHtcbiAgICBhID0gdGhpc1xuICAgIGIgPSBvdGhlclxuICB9IGVsc2Uge1xuICAgIGEgPSBvdGhlclxuICAgIGIgPSB0aGlzXG4gIH1cblxuICBlbGVtZW50cyA9IE9iamVjdC5rZXlzKGEuZWxlbWVudHMpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV1cbiAgICBpZiAoZWxlbWVudCBpbiBiLmVsZW1lbnRzKSB7XG4gICAgICBpbnRlcnNlY3Rpb24ucHVzaChlbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQgKGludGVyc2VjdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb21iaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIHVuaW9uIHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJuIHtsdW5yLlNldH0gYSBuZXcgc2V0IHRoYXQgaXMgdGhlIHVuaW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIGx1bnIuU2V0LmNvbXBsZXRlXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQoT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyLmVsZW1lbnRzKSkpXG59XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBpbnZlcnNlIGRvY3VtZW50IGZyZXF1ZW5jeSBmb3JcbiAqIGEgcG9zdGluZy4gVGhpcyBpcyBzaGFyZWQgYmV0d2VlbiB0aGUgYnVpbGRlciBhbmQgdGhlIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3N0aW5nIC0gVGhlIHBvc3RpbmcgZm9yIGEgZ2l2ZW4gdGVybVxuICogQHBhcmFtIHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cy5cbiAqL1xubHVuci5pZGYgPSBmdW5jdGlvbiAocG9zdGluZywgZG9jdW1lbnRDb3VudCkge1xuICB2YXIgZG9jdW1lbnRzV2l0aFRlcm0gPSAwXG5cbiAgZm9yICh2YXIgZmllbGROYW1lIGluIHBvc3RpbmcpIHtcbiAgICBpZiAoZmllbGROYW1lID09ICdfaW5kZXgnKSBjb250aW51ZSAvLyBJZ25vcmUgdGhlIHRlcm0gaW5kZXgsIGl0cyBub3QgYSBmaWVsZFxuICAgIGRvY3VtZW50c1dpdGhUZXJtICs9IE9iamVjdC5rZXlzKHBvc3RpbmdbZmllbGROYW1lXSkubGVuZ3RoXG4gIH1cblxuICB2YXIgeCA9IChkb2N1bWVudENvdW50IC0gZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpIC8gKGRvY3VtZW50c1dpdGhUZXJtICsgMC41KVxuXG4gIHJldHVybiBNYXRoLmxvZygxICsgTWF0aC5hYnMoeCkpXG59XG5cbi8qKlxuICogQSB0b2tlbiB3cmFwcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRva2VuXG4gKiBhcyBpdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgdGV4dCBwcm9jZXNzaW5nIHBpcGVsaW5lLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtzdHI9JyddIC0gVGhlIHN0cmluZyB0b2tlbiBiZWluZyB3cmFwcGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YT17fV0gLSBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xubHVuci5Ub2tlbiA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHRoaXMuc3RyID0gc3RyIHx8IFwiXCJcbiAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IHt9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG9rZW4gc3RyaW5nIHRoYXQgaXMgYmVpbmcgd3JhcHBlZCBieSB0aGlzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyXG59XG5cbi8qKlxuICogQSB0b2tlbiB1cGRhdGUgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHVwZGF0aW5nIG9yIG9wdGlvbmFsbHlcbiAqIHdoZW4gY2xvbmluZyBhIHRva2VuLlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YWRhdGEgLSBBbGwgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byB0aGUgd3JhcHBlZCBzdHJpbmcgdG9rZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICogICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKClcbiAqIH0pXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHRva2VuIHN0cmluZy5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5zdHIgPSBmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB0b2tlbi4gT3B0aW9uYWxseSBhIGZ1bmN0aW9uIGNhbiBiZVxuICogYXBwbGllZCB0byB0aGUgY2xvbmVkIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gW2ZuXSAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4gPSBmbiB8fCBmdW5jdGlvbiAocykgeyByZXR1cm4gcyB9XG4gIHJldHVybiBuZXcgbHVuci5Ub2tlbiAoZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpLCB0aGlzLm1ldGFkYXRhKVxufVxuLyohXG4gKiBsdW5yLnRva2VuaXplclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3Igc3BsaXR0aW5nIGEgc3RyaW5nIGludG8gdG9rZW5zIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG9cbiAqIHRoZSBzZWFyY2ggaW5kZXguIFVzZXMgYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAgdG8gc3BsaXQgc3RyaW5ncywgY2hhbmdlXG4gKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgaG93IHN0cmluZ3MgYXJlIHNwbGl0IGludG8gdG9rZW5zLlxuICpcbiAqIFRoaXMgdG9rZW5pemVyIHdpbGwgY29udmVydCBpdHMgcGFyYW1ldGVyIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYCBhbmRcbiAqIHRoZW4gd2lsbCBzcGxpdCB0aGlzIHN0cmluZyBvbiB0aGUgY2hhcmFjdGVyIGluIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgLlxuICogQXJyYXlzIHdpbGwgaGF2ZSB0aGVpciBlbGVtZW50cyBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBhbmQgd3JhcHBlZCBpbiBhIGx1bnIuVG9rZW4uXG4gKlxuICogT3B0aW9uYWwgbWV0YWRhdGEgY2FuIGJlIHBhc3NlZCB0byB0aGUgdG9rZW5pemVyLCB0aGlzIG1ldGFkYXRhIHdpbGwgYmUgY2xvbmVkIGFuZFxuICogYWRkZWQgYXMgbWV0YWRhdGEgdG8gZXZlcnkgdG9rZW4gdGhhdCBpcyBjcmVhdGVkIGZyb20gdGhlIG9iamVjdCB0byBiZSB0b2tlbml6ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHs/KHN0cmluZ3xvYmplY3R8b2JqZWN0W10pfSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgaW50byB0b2tlbnNcbiAqIEBwYXJhbSB7P29iamVjdH0gbWV0YWRhdGEgLSBPcHRpb25hbCBtZXRhZGF0YSB0byBhc3NvY2lhdGUgd2l0aCBldmVyeSB0b2tlblxuICogQHJldHVybnMge2x1bnIuVG9rZW5bXX1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIudG9rZW5pemVyID0gZnVuY3Rpb24gKG9iaiwgbWV0YWRhdGEpIHtcbiAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG5ldyBsdW5yLlRva2VuKFxuICAgICAgICBsdW5yLnV0aWxzLmFzU3RyaW5nKHQpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGx1bnIudXRpbHMuY2xvbmUobWV0YWRhdGEpXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHZhciBzdHIgPSBvYmoudG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGgsXG4gICAgICB0b2tlbnMgPSBbXVxuXG4gIGZvciAodmFyIHNsaWNlRW5kID0gMCwgc2xpY2VTdGFydCA9IDA7IHNsaWNlRW5kIDw9IGxlbjsgc2xpY2VFbmQrKykge1xuICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChzbGljZUVuZCksXG4gICAgICAgIHNsaWNlTGVuZ3RoID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0XG5cbiAgICBpZiAoKGNoYXIubWF0Y2gobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yKSB8fCBzbGljZUVuZCA9PSBsZW4pKSB7XG5cbiAgICAgIGlmIChzbGljZUxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRva2VuTWV0YWRhdGEgPSBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKSB8fCB7fVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wicG9zaXRpb25cIl0gPSBbc2xpY2VTdGFydCwgc2xpY2VMZW5ndGhdXG4gICAgICAgIHRva2VuTWV0YWRhdGFbXCJpbmRleFwiXSA9IHRva2Vucy5sZW5ndGhcblxuICAgICAgICB0b2tlbnMucHVzaChcbiAgICAgICAgICBuZXcgbHVuci5Ub2tlbiAoXG4gICAgICAgICAgICBzdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpLFxuICAgICAgICAgICAgdG9rZW5NZXRhZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogVGhlIHNlcGFyYXRvciB1c2VkIHRvIHNwbGl0IGEgc3RyaW5nIGludG8gdG9rZW5zLiBPdmVycmlkZSB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mXG4gKiBgbHVuci50b2tlbml6ZXJgIGJlaGF2aW91ciB3aGVuIHRva2VuaXppbmcgc3RyaW5ncy4gQnkgZGVmYXVsdCB0aGlzIHNwbGl0cyBvbiB3aGl0ZXNwYWNlIGFuZCBoeXBoZW5zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzZWUgbHVuci50b2tlbml6ZXJcbiAqL1xubHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gL1tcXHNcXC1dKy9cbi8qIVxuICogbHVuci5QaXBlbGluZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5QaXBlbGluZXMgbWFpbnRhaW4gYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9ucyB0byBiZSBhcHBsaWVkIHRvIGFsbFxuICogdG9rZW5zIGluIGRvY3VtZW50cyBlbnRlcmluZyB0aGUgc2VhcmNoIGluZGV4IGFuZCBxdWVyaWVzIGJlaW5nIHJhbiBhZ2FpbnN0XG4gKiB0aGUgaW5kZXguXG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleCBjcmVhdGVkIHdpdGggdGhlIGx1bnIgc2hvcnRjdXQgd2lsbCBjb250YWluIGFcbiAqIHBpcGVsaW5lIHdpdGggYSBzdG9wIHdvcmQgZmlsdGVyIGFuZCBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIuIEV4dHJhXG4gKiBmdW5jdGlvbnMgY2FuIGJlIGFkZGVkIGJlZm9yZSBvciBhZnRlciBlaXRoZXIgb2YgdGhlc2UgZnVuY3Rpb25zIG9yIHRoZXNlXG4gKiBkZWZhdWx0IGZ1bmN0aW9ucyBjYW4gYmUgcmVtb3ZlZC5cbiAqXG4gKiBXaGVuIHJ1biB0aGUgcGlwZWxpbmUgd2lsbCBjYWxsIGVhY2ggZnVuY3Rpb24gaW4gdHVybiwgcGFzc2luZyBhIHRva2VuLCB0aGVcbiAqIGluZGV4IG9mIHRoYXQgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIGxpc3Qgb2YgYWxsIHRva2VucyBhbmQgZmluYWxseSBhIGxpc3Qgb2ZcbiAqIGFsbCB0aGUgb3JpZ2luYWwgdG9rZW5zLlxuICpcbiAqIFRoZSBvdXRwdXQgb2YgZnVuY3Rpb25zIGluIHRoZSBwaXBlbGluZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbmV4dCBmdW5jdGlvblxuICogaW4gdGhlIHBpcGVsaW5lLiBUbyBleGNsdWRlIGEgdG9rZW4gZnJvbSBlbnRlcmluZyB0aGUgaW5kZXggdGhlIGZ1bmN0aW9uXG4gKiBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCwgdGhlIHJlc3Qgb2YgdGhlIHBpcGVsaW5lIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoXG4gKiB0aGlzIHRva2VuLlxuICpcbiAqIEZvciBzZXJpYWxpc2F0aW9uIG9mIHBpcGVsaW5lcyB0byB3b3JrLCBhbGwgZnVuY3Rpb25zIHVzZWQgaW4gYW4gaW5zdGFuY2Ugb2ZcbiAqIGEgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLiBSZWdpc3RlcmVkIGZ1bmN0aW9ucyBjYW5cbiAqIHRoZW4gYmUgbG9hZGVkLiBJZiB0cnlpbmcgdG8gbG9hZCBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgdGhhdCB1c2VzIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgbm90IHJlZ2lzdGVyZWQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogSWYgbm90IHBsYW5uaW5nIG9uIHNlcmlhbGlzaW5nIHRoZSBwaXBlbGluZSB0aGVuIHJlZ2lzdGVyaW5nIHBpcGVsaW5lIGZ1bmN0aW9uc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5QaXBlbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBtYXBzIGx1bnIuVG9rZW4gdG8gbHVuci5Ub2tlbi4gQSBsdW5yLlRva2VuIGNvbnRhaW5zIHRoZSB0b2tlblxuICogc3RyaW5nIGFzIHdlbGwgYXMgYWxsIGtub3duIG1ldGFkYXRhLiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBtdXRhdGUgdGhlIHRva2VuIHN0cmluZ1xuICogb3IgbXV0YXRlIChvciBhZGQpIG1ldGFkYXRhIGZvciBhIGdpdmVuIHRva2VuLlxuICpcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIGluZGljYXRlIHRoYXQgdGhlIHBhc3NlZCB0b2tlbiBzaG91bGQgYmUgZGlzY2FyZGVkIGJ5IHJldHVybmluZ1xuICogbnVsbC4gVGhpcyB0b2tlbiB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCB3aWxsIG5vdCBiZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIE11bHRpcGxlIHRva2VucyBjYW4gYmUgcmV0dXJuZWQgYnkgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHRva2Vucy4gRWFjaCB0b2tlbiB3aWxsIGJlIHBhc3NlZFxuICogdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCBhbGwgd2lsbCByZXR1cm5lZCB0b2tlbnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQW55IG51bWJlciBvZiBwaXBlbGluZSBmdW5jdGlvbnMgbWF5IGJlIGNoYWluZWQgdG9nZXRoZXIgdXNpbmcgYSBsdW5yLlBpcGVsaW5lLlxuICpcbiAqIEBpbnRlcmZhY2UgbHVuci5QaXBlbGluZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiBmcm9tIHRoZSBkb2N1bWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCBvZiB0aGlzIHRva2VuIGluIHRoZSBjb21wbGV0ZSBsaXN0IG9mIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbltdfSB0b2tlbnMgLSBBbGwgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHJldHVybnMgeyg/bHVuci5Ub2tlbnxsdW5yLlRva2VuW10pfVxuICovXG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB3aXRoIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBGdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgaWYgdGhlIHBpcGVsaW5lXG4gKiBuZWVkcyB0byBiZSBzZXJpYWxpc2VkLCBvciBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgbmVlZHMgdG8gYmUgbG9hZGVkLlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gZG9lcyBub3QgYWRkIGl0IHRvIGEgcGlwZWxpbmUsIGZ1bmN0aW9ucyBtdXN0IHN0aWxsIGJlXG4gKiBhZGRlZCB0byBpbnN0YW5jZXMgb2YgdGhlIHBpcGVsaW5lIGZvciB0aGVtIHRvIGJlIHVzZWQgd2hlbiBydW5uaW5nIGEgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCAtIFRoZSBsYWJlbCB0byByZWdpc3RlciB0aGlzIGZ1bmN0aW9uIHdpdGhcbiAqL1xubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBsYWJlbCkge1xuICBpZiAobGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdPdmVyd3JpdGluZyBleGlzdGluZyByZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgbGFiZWwpXG4gIH1cblxuICBmbi5sYWJlbCA9IGxhYmVsXG4gIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbi5sYWJlbF0gPSBmblxufVxuXG4vKipcbiAqIFdhcm5zIGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIFBpcGVsaW5lIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgaXNSZWdpc3RlcmVkID0gZm4ubGFiZWwgJiYgKGZuLmxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucylcblxuICBpZiAoIWlzUmVnaXN0ZXJlZCkge1xuICAgIGx1bnIudXRpbHMud2FybignRnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBwaXBlbGluZS4gVGhpcyBtYXkgY2F1c2UgcHJvYmxlbXMgd2hlbiBzZXJpYWxpc2luZyB0aGUgaW5kZXguXFxuJywgZm4pXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXNlZCBwaXBlbGluZS5cbiAqXG4gKiBBbGwgZnVuY3Rpb25zIHRvIGJlIGxvYWRlZCBtdXN0IGFscmVhZHkgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuXG4gKiBJZiBhbnkgZnVuY3Rpb24gZnJvbSB0aGUgc2VyaWFsaXNlZCBkYXRhIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHRoZW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpc2VkIC0gVGhlIHNlcmlhbGlzZWQgcGlwZWxpbmUgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLlBpcGVsaW5lLmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXNlZCkge1xuICB2YXIgcGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuXG4gIHNlcmlhbGlzZWQuZm9yRWFjaChmdW5jdGlvbiAoZm5OYW1lKSB7XG4gICAgdmFyIGZuID0gbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuTmFtZV1cblxuICAgIGlmIChmbikge1xuICAgICAgcGlwZWxpbmUuYWRkKGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsb2FkIHVucmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGZuTmFtZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHBpcGVsaW5lXG59XG5cbi8qKlxuICogQWRkcyBuZXcgZnVuY3Rpb25zIHRvIHRoZSBlbmQgb2YgdGhlIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbltdfSBmdW5jdGlvbnMgLSBBbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG4gICAgdGhpcy5fc3RhY2sucHVzaChmbilcbiAgfSwgdGhpcylcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGFmdGVyIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgcG9zID0gcG9zICsgMVxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGJlZm9yZSBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgZnVuY3Rpb24gZnJvbSB0aGUgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihmbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMSlcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgbWFrZSB1cCB0aGUgcGlwZWxpbmUgYWdhaW5zdCB0aGVcbiAqIHBhc3NlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSB0b2tlbnMgdG8gcnVuIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciBzdGFja0xlbmd0aCA9IHRoaXMuX3N0YWNrLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tMZW5ndGg7IGkrKykge1xuICAgIHZhciBmbiA9IHRoaXMuX3N0YWNrW2ldXG4gICAgdmFyIG1lbW8gPSBbXVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbih0b2tlbnNbal0sIGosIHRva2VucylcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwIHx8IHJlc3VsdCA9PT0gJycpIGNvbnRpbnVlXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCByZXN1bHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBtZW1vLnB1c2gocmVzdWx0W2tdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2gocmVzdWx0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRva2VucyA9IG1lbW9cbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIHBhc3NpbmcgYSBzdHJpbmcgdGhyb3VnaCBhIHBpcGVsaW5lIGFuZCBnZXR0aW5nXG4gKiBzdHJpbmdzIG91dC4gVGhpcyBtZXRob2QgdGFrZXMgY2FyZSBvZiB3cmFwcGluZyB0aGUgcGFzc2VkIHN0cmluZyBpbiBhXG4gKiB0b2tlbiBhbmQgbWFwcGluZyB0aGUgcmVzdWx0aW5nIHRva2VucyBiYWNrIHRvIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gcGFzcyB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7P29iamVjdH0gbWV0YWRhdGEgLSBPcHRpb25hbCBtZXRhZGF0YSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgdG9rZW5cbiAqIHBhc3NlZCB0byB0aGUgcGlwZWxpbmUuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJ1blN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBsdW5yLlRva2VuIChzdHIsIG1ldGFkYXRhKVxuXG4gIHJldHVybiB0aGlzLnJ1bihbdG9rZW5dKS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC50b1N0cmluZygpXG4gIH0pXG59XG5cbi8qKlxuICogUmVzZXRzIHRoZSBwaXBlbGluZSBieSByZW1vdmluZyBhbnkgZXhpc3RpbmcgcHJvY2Vzc29ycy5cbiAqXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9zdGFjayA9IFtdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXBlbGluZSByZWFkeSBmb3Igc2VyaWFsaXNhdGlvbi5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9zdGFjay5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG5cbiAgICByZXR1cm4gZm4ubGFiZWxcbiAgfSlcbn1cbi8qIVxuICogbHVuci5WZWN0b3JcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdmVjdG9yIGlzIHVzZWQgdG8gY29uc3RydWN0IHRoZSB2ZWN0b3Igc3BhY2Ugb2YgZG9jdW1lbnRzIGFuZCBxdWVyaWVzLiBUaGVzZVxuICogdmVjdG9ycyBzdXBwb3J0IG9wZXJhdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIGRvY3VtZW50cyBvclxuICogYSBkb2N1bWVudCBhbmQgYSBxdWVyeS5cbiAqXG4gKiBOb3JtYWxseSBubyBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCBmb3IgaW5pdGlhbGl6aW5nIGEgdmVjdG9yLCBidXQgaW4gdGhlIGNhc2Ugb2ZcbiAqIGxvYWRpbmcgYSBwcmV2aW91c2x5IGR1bXBlZCB2ZWN0b3IgdGhlIHJhdyBlbGVtZW50cyBjYW4gYmUgcHJvdmlkZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIHZlY3RvcnMgYXJlIGltcGxlbWVudGVkIHdpdGggYSBmbGF0IGFycmF5LCB3aGVyZSBhbiBlbGVtZW50c1xuICogaW5kZXggaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgaXRzIHZhbHVlLiBFLmcuIFtpbmRleCwgdmFsdWUsIGluZGV4LCB2YWx1ZV0uIFRoaXNcbiAqIGFsbG93cyB0aGUgdW5kZXJseWluZyBhcnJheSB0byBiZSBhcyBzcGFyc2UgYXMgcG9zc2libGUgYW5kIHN0aWxsIG9mZmVyIGRlY2VudFxuICogcGVyZm9ybWFuY2Ugd2hlbiBiZWluZyB1c2VkIGZvciB2ZWN0b3IgY2FsY3VsYXRpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtOdW1iZXJbXX0gW2VsZW1lbnRzXSAtIFRoZSBmbGF0IGxpc3Qgb2YgZWxlbWVudCBpbmRleCBhbmQgZWxlbWVudCB2YWx1ZSBwYWlycy5cbiAqL1xubHVuci5WZWN0b3IgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHMgfHwgW11cbn1cblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBvc2l0aW9uIHdpdGhpbiB0aGUgdmVjdG9yIHRvIGluc2VydCBhIGdpdmVuIGluZGV4LlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IGluc2VydCBhbmQgdXBzZXJ0LiBJZiB0aGVyZSBhcmUgZHVwbGljYXRlIGluZGV4ZXMgdGhlblxuICogdGhlIHBvc2l0aW9uIGlzIHJldHVybmVkIGFzIGlmIHRoZSB2YWx1ZSBmb3IgdGhhdCBpbmRleCB3ZXJlIHRvIGJlIHVwZGF0ZWQsIGJ1dCBpdFxuICogaXMgdGhlIGNhbGxlcnMgcmVzcG9uc2liaWxpdHkgdG8gY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhIGR1cGxpY2F0ZSBhdCB0aGF0IGluZGV4XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUucG9zaXRpb25Gb3JJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAvLyBGb3IgYW4gZW1wdHkgdmVjdG9yIHRoZSB0dXBsZSBjYW4gYmUgaW5zZXJ0ZWQgYXQgdGhlIGJlZ2lubmluZ1xuICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICB2YXIgc3RhcnQgPSAwLFxuICAgICAgZW5kID0gdGhpcy5lbGVtZW50cy5sZW5ndGggLyAyLFxuICAgICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydCxcbiAgICAgIHBpdm90UG9pbnQgPSBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMiksXG4gICAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cblxuICB3aGlsZSAoc2xpY2VMZW5ndGggPiAxKSB7XG4gICAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgICAgc3RhcnQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgICAgZW5kID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnRcbiAgICBwaXZvdFBvaW50ID0gc3RhcnQgKyBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMilcbiAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgcmV0dXJuIChwaXZvdFBvaW50ICsgMSkgKiAyXG4gIH1cbn1cblxuLyoqXG4gKiBJbnNlcnRzIGFuIGVsZW1lbnQgYXQgYW4gaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogRG9lcyBub3QgYWxsb3cgZHVwbGljYXRlcywgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGVudHJ5XG4gKiBmb3IgdGhpcyBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsKSB7XG4gIHRoaXMudXBzZXJ0KGluc2VydElkeCwgdmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgXCJkdXBsaWNhdGUgaW5kZXhcIlxuICB9KVxufVxuXG4vKipcbiAqIEluc2VydHMgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGZvciB1cGRhdGVzLCB0aGUgZXhpc3RpbmcgdmFsdWUgYW5kIHRoZVxuICogcmVxdWVzdGVkIHZhbHVlIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS51cHNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwsIGZuKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdmFyIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkZvckluZGV4KGluc2VydElkeClcblxuICBpZiAodGhpcy5lbGVtZW50c1twb3NpdGlvbl0gPT0gaW5zZXJ0SWR4KSB7XG4gICAgdGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdID0gZm4odGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdLCB2YWwpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2UocG9zaXRpb24sIDAsIGluc2VydElkeCwgdmFsKVxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoaXMgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9tYWduaXR1ZGUpIHJldHVybiB0aGlzLl9tYWduaXR1ZGVcblxuICB2YXIgc3VtT2ZTcXVhcmVzID0gMCxcbiAgICAgIGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGVsZW1lbnRzTGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5lbGVtZW50c1tpXVxuICAgIHN1bU9mU3F1YXJlcyArPSB2YWwgKiB2YWxcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9tYWduaXR1ZGUgPSBNYXRoLnNxcnQoc3VtT2ZTcXVhcmVzKVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSB2ZWN0b3IgdG8gY29tcHV0ZSB0aGUgZG90IHByb2R1Y3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgdmFyIGRvdFByb2R1Y3QgPSAwLFxuICAgICAgYSA9IHRoaXMuZWxlbWVudHMsIGIgPSBvdGhlclZlY3Rvci5lbGVtZW50cyxcbiAgICAgIGFMZW4gPSBhLmxlbmd0aCwgYkxlbiA9IGIubGVuZ3RoLFxuICAgICAgYVZhbCA9IDAsIGJWYWwgPSAwLFxuICAgICAgaSA9IDAsIGogPSAwXG5cbiAgd2hpbGUgKGkgPCBhTGVuICYmIGogPCBiTGVuKSB7XG4gICAgYVZhbCA9IGFbaV0sIGJWYWwgPSBiW2pdXG4gICAgaWYgKGFWYWwgPCBiVmFsKSB7XG4gICAgICBpICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPiBiVmFsKSB7XG4gICAgICBqICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPT0gYlZhbCkge1xuICAgICAgZG90UHJvZHVjdCArPSBhW2kgKyAxXSAqIGJbaiArIDFdXG4gICAgICBpICs9IDJcbiAgICAgIGogKz0gMlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb3RQcm9kdWN0XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSBvdGhlciB2ZWN0b3IgdG8gY2FsY3VsYXRlIHRoZVxuICogc2ltaWxhcml0eSB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnNpbWlsYXJpdHkgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZG90KG90aGVyVmVjdG9yKSAvIHRoaXMubWFnbml0dWRlKCkgfHwgMFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB2ZWN0b3IgdG8gYW4gYXJyYXkgb2YgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkgKHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMilcblxuICBmb3IgKHZhciBpID0gMSwgaiA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSArPSAyLCBqKyspIHtcbiAgICBvdXRwdXRbal0gPSB0aGlzLmVsZW1lbnRzW2ldXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQSBKU09OIHNlcmlhbGl6YWJsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWxlbWVudHNcbn1cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKiFcbiAqIGx1bnIuc3RlbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICogSW5jbHVkZXMgY29kZSBmcm9tIC0gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluL1BvcnRlclN0ZW1tZXIvanMudHh0XG4gKi9cblxuLyoqXG4gKiBsdW5yLnN0ZW1tZXIgaXMgYW4gZW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLCB0aGlzIGlzIGEgSmF2YVNjcmlwdFxuICogaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvcnRlclN0ZW1tZXIgdGFrZW4gZnJvbSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIFRoZSBzdHJpbmcgdG8gc3RlbVxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQGZ1bmN0aW9uXG4gKi9cbmx1bnIuc3RlbW1lciA9IChmdW5jdGlvbigpe1xuICB2YXIgc3RlcDJsaXN0ID0ge1xuICAgICAgXCJhdGlvbmFsXCIgOiBcImF0ZVwiLFxuICAgICAgXCJ0aW9uYWxcIiA6IFwidGlvblwiLFxuICAgICAgXCJlbmNpXCIgOiBcImVuY2VcIixcbiAgICAgIFwiYW5jaVwiIDogXCJhbmNlXCIsXG4gICAgICBcIml6ZXJcIiA6IFwiaXplXCIsXG4gICAgICBcImJsaVwiIDogXCJibGVcIixcbiAgICAgIFwiYWxsaVwiIDogXCJhbFwiLFxuICAgICAgXCJlbnRsaVwiIDogXCJlbnRcIixcbiAgICAgIFwiZWxpXCIgOiBcImVcIixcbiAgICAgIFwib3VzbGlcIiA6IFwib3VzXCIsXG4gICAgICBcIml6YXRpb25cIiA6IFwiaXplXCIsXG4gICAgICBcImF0aW9uXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhdG9yXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhbGlzbVwiIDogXCJhbFwiLFxuICAgICAgXCJpdmVuZXNzXCIgOiBcIml2ZVwiLFxuICAgICAgXCJmdWxuZXNzXCIgOiBcImZ1bFwiLFxuICAgICAgXCJvdXNuZXNzXCIgOiBcIm91c1wiLFxuICAgICAgXCJhbGl0aVwiIDogXCJhbFwiLFxuICAgICAgXCJpdml0aVwiIDogXCJpdmVcIixcbiAgICAgIFwiYmlsaXRpXCIgOiBcImJsZVwiLFxuICAgICAgXCJsb2dpXCIgOiBcImxvZ1wiXG4gICAgfSxcblxuICAgIHN0ZXAzbGlzdCA9IHtcbiAgICAgIFwiaWNhdGVcIiA6IFwiaWNcIixcbiAgICAgIFwiYXRpdmVcIiA6IFwiXCIsXG4gICAgICBcImFsaXplXCIgOiBcImFsXCIsXG4gICAgICBcImljaXRpXCIgOiBcImljXCIsXG4gICAgICBcImljYWxcIiA6IFwiaWNcIixcbiAgICAgIFwiZnVsXCIgOiBcIlwiLFxuICAgICAgXCJuZXNzXCIgOiBcIlwiXG4gICAgfSxcblxuICAgIGMgPSBcIlteYWVpb3VdXCIsICAgICAgICAgIC8vIGNvbnNvbmFudFxuICAgIHYgPSBcIlthZWlvdXldXCIsICAgICAgICAgIC8vIHZvd2VsXG4gICAgQyA9IGMgKyBcIlteYWVpb3V5XSpcIiwgICAgLy8gY29uc29uYW50IHNlcXVlbmNlXG4gICAgViA9IHYgKyBcIlthZWlvdV0qXCIsICAgICAgLy8gdm93ZWwgc2VxdWVuY2VcblxuICAgIG1ncjAgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMsICAgICAgICAgICAgICAgLy8gW0NdVkMuLi4gaXMgbT4wXG4gICAgbWVxMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFwiKFwiICsgViArIFwiKT8kXCIsICAvLyBbQ11WQ1tWXSBpcyBtPTFcbiAgICBtZ3IxID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgViArIEMsICAgICAgIC8vIFtDXVZDVkMuLi4gaXMgbT4xXG4gICAgc192ID0gXCJeKFwiICsgQyArIFwiKT9cIiArIHY7ICAgICAgICAgICAgICAgICAgIC8vIHZvd2VsIGluIHN0ZW1cblxuICB2YXIgcmVfbWdyMCA9IG5ldyBSZWdFeHAobWdyMCk7XG4gIHZhciByZV9tZ3IxID0gbmV3IFJlZ0V4cChtZ3IxKTtcbiAgdmFyIHJlX21lcTEgPSBuZXcgUmVnRXhwKG1lcTEpO1xuICB2YXIgcmVfc192ID0gbmV3IFJlZ0V4cChzX3YpO1xuXG4gIHZhciByZV8xYSA9IC9eKC4rPykoc3N8aSllcyQvO1xuICB2YXIgcmUyXzFhID0gL14oLis/KShbXnNdKXMkLztcbiAgdmFyIHJlXzFiID0gL14oLis/KWVlZCQvO1xuICB2YXIgcmUyXzFiID0gL14oLis/KShlZHxpbmcpJC87XG4gIHZhciByZV8xYl8yID0gLy4kLztcbiAgdmFyIHJlMl8xYl8yID0gLyhhdHxibHxpeikkLztcbiAgdmFyIHJlM18xYl8yID0gbmV3IFJlZ0V4cChcIihbXmFlaW91eWxzel0pXFxcXDEkXCIpO1xuICB2YXIgcmU0XzFiXzIgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcmVfMWMgPSAvXiguKz9bXmFlaW91XSl5JC87XG4gIHZhciByZV8yID0gL14oLis/KShhdGlvbmFsfHRpb25hbHxlbmNpfGFuY2l8aXplcnxibGl8YWxsaXxlbnRsaXxlbGl8b3VzbGl8aXphdGlvbnxhdGlvbnxhdG9yfGFsaXNtfGl2ZW5lc3N8ZnVsbmVzc3xvdXNuZXNzfGFsaXRpfGl2aXRpfGJpbGl0aXxsb2dpKSQvO1xuXG4gIHZhciByZV8zID0gL14oLis/KShpY2F0ZXxhdGl2ZXxhbGl6ZXxpY2l0aXxpY2FsfGZ1bHxuZXNzKSQvO1xuXG4gIHZhciByZV80ID0gL14oLis/KShhbHxhbmNlfGVuY2V8ZXJ8aWN8YWJsZXxpYmxlfGFudHxlbWVudHxtZW50fGVudHxvdXxpc218YXRlfGl0aXxvdXN8aXZlfGl6ZSkkLztcbiAgdmFyIHJlMl80ID0gL14oLis/KShzfHQpKGlvbikkLztcblxuICB2YXIgcmVfNSA9IC9eKC4rPyllJC87XG4gIHZhciByZV81XzEgPSAvbGwkLztcbiAgdmFyIHJlM181ID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHBvcnRlclN0ZW1tZXIgPSBmdW5jdGlvbiBwb3J0ZXJTdGVtbWVyKHcpIHtcbiAgICB2YXIgc3RlbSxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIGZpcnN0Y2gsXG4gICAgICByZSxcbiAgICAgIHJlMixcbiAgICAgIHJlMyxcbiAgICAgIHJlNDtcblxuICAgIGlmICh3Lmxlbmd0aCA8IDMpIHsgcmV0dXJuIHc7IH1cblxuICAgIGZpcnN0Y2ggPSB3LnN1YnN0cigwLDEpO1xuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b1VwcGVyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYVxuICAgIHJlID0gcmVfMWFcbiAgICByZTIgPSByZTJfMWE7XG5cbiAgICBpZiAocmUudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlLFwiJDEkMlwiKTsgfVxuICAgIGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUyLFwiJDEkMlwiKTsgfVxuXG4gICAgLy8gU3RlcCAxYlxuICAgIHJlID0gcmVfMWI7XG4gICAgcmUyID0gcmUyXzFiO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3QoZnBbMV0pKSB7XG4gICAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlMiA9IHJlX3NfdjtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgICAgcmUyID0gcmUyXzFiXzI7XG4gICAgICAgIHJlMyA9IHJlM18xYl8yO1xuICAgICAgICByZTQgPSByZTRfMWJfMjtcbiAgICAgICAgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgICAgZWxzZSBpZiAocmUzLnRlc3QodykpIHsgcmUgPSByZV8xYl8yOyB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlNC50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDFjIC0gcmVwbGFjZSBzdWZmaXggeSBvciBZIGJ5IGkgaWYgcHJlY2VkZWQgYnkgYSBub24tdm93ZWwgd2hpY2ggaXMgbm90IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHdvcmQgKHNvIGNyeSAtPiBjcmksIGJ5IC0+IGJ5LCBzYXkgLT4gc2F5KVxuICAgIHJlID0gcmVfMWM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICB3ID0gc3RlbSArIFwiaVwiO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMlxuICAgIHJlID0gcmVfMjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwMmxpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDNcbiAgICByZSA9IHJlXzM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDNsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA0XG4gICAgcmUgPSByZV80O1xuICAgIHJlMiA9IHJlMl80O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV0gKyBmcFsyXTtcbiAgICAgIHJlMiA9IHJlX21ncjE7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA1XG4gICAgcmUgPSByZV81O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgcmUyID0gcmVfbWVxMTtcbiAgICAgIHJlMyA9IHJlM181O1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkgfHwgKHJlMi50ZXN0KHN0ZW0pICYmICEocmUzLnRlc3Qoc3RlbSkpKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZSA9IHJlXzVfMTtcbiAgICByZTIgPSByZV9tZ3IxO1xuICAgIGlmIChyZS50ZXN0KHcpICYmIHJlMi50ZXN0KHcpKSB7XG4gICAgICByZSA9IHJlXzFiXzI7XG4gICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgIH1cblxuICAgIC8vIGFuZCB0dXJuIGluaXRpYWwgWSBiYWNrIHRvIHlcblxuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b0xvd2VyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHc7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi51cGRhdGUocG9ydGVyU3RlbW1lcik7XG4gIH1cbn0pKCk7XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0ZW1tZXIsICdzdGVtbWVyJylcbi8qIVxuICogbHVuci5zdG9wV29yZEZpbHRlclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyIGJ1aWxkcyBhIHN0b3BXb3JkRmlsdGVyIGZ1bmN0aW9uIGZyb20gdGhlIHByb3ZpZGVkXG4gKiBsaXN0IG9mIHN0b3Agd29yZHMuXG4gKlxuICogVGhlIGJ1aWx0IGluIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYnVpbHQgdXNpbmcgdGhpcyBnZW5lcmF0b3IgYW5kIGNhbiBiZSB1c2VkXG4gKiB0byBnZW5lcmF0ZSBjdXN0b20gc3RvcFdvcmRGaWx0ZXJzIGZvciBhcHBsaWNhdGlvbnMgb3Igbm9uIEVuZ2xpc2ggbGFuZ3VhZ2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtBcnJheX0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKiBAc2VlIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqL1xubHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyID0gZnVuY3Rpb24gKHN0b3BXb3Jkcykge1xuICB2YXIgd29yZHMgPSBzdG9wV29yZHMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBzdG9wV29yZCkge1xuICAgIG1lbW9bc3RvcFdvcmRdID0gc3RvcFdvcmRcbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSlcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgaWYgKHRva2VuICYmIHdvcmRzW3Rva2VuLnRvU3RyaW5nKCldICE9PSB0b2tlbi50b1N0cmluZygpKSByZXR1cm4gdG9rZW5cbiAgfVxufVxuXG4vKipcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdG9wIHdvcmQgbGlzdCBmaWx0ZXIsIGFueSB3b3Jkc1xuICogY29udGFpbmVkIGluIHRoZSBsaXN0IHdpbGwgbm90IGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBmaWx0ZXIuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoZSBQaXBlbGluZS4gSWYgdGhlIHRva2VuIGRvZXMgbm90IHBhc3MgdGhlXG4gKiBmaWx0ZXIgdGhlbiB1bmRlZmluZWQgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW1zIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gdG8gY2hlY2sgZm9yIGJlaW5nIGEgc3RvcCB3b3JkLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnN0b3BXb3JkRmlsdGVyID0gbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyKFtcbiAgJ2EnLFxuICAnYWJsZScsXG4gICdhYm91dCcsXG4gICdhY3Jvc3MnLFxuICAnYWZ0ZXInLFxuICAnYWxsJyxcbiAgJ2FsbW9zdCcsXG4gICdhbHNvJyxcbiAgJ2FtJyxcbiAgJ2Ftb25nJyxcbiAgJ2FuJyxcbiAgJ2FuZCcsXG4gICdhbnknLFxuICAnYXJlJyxcbiAgJ2FzJyxcbiAgJ2F0JyxcbiAgJ2JlJyxcbiAgJ2JlY2F1c2UnLFxuICAnYmVlbicsXG4gICdidXQnLFxuICAnYnknLFxuICAnY2FuJyxcbiAgJ2Nhbm5vdCcsXG4gICdjb3VsZCcsXG4gICdkZWFyJyxcbiAgJ2RpZCcsXG4gICdkbycsXG4gICdkb2VzJyxcbiAgJ2VpdGhlcicsXG4gICdlbHNlJyxcbiAgJ2V2ZXInLFxuICAnZXZlcnknLFxuICAnZm9yJyxcbiAgJ2Zyb20nLFxuICAnZ2V0JyxcbiAgJ2dvdCcsXG4gICdoYWQnLFxuICAnaGFzJyxcbiAgJ2hhdmUnLFxuICAnaGUnLFxuICAnaGVyJyxcbiAgJ2hlcnMnLFxuICAnaGltJyxcbiAgJ2hpcycsXG4gICdob3cnLFxuICAnaG93ZXZlcicsXG4gICdpJyxcbiAgJ2lmJyxcbiAgJ2luJyxcbiAgJ2ludG8nLFxuICAnaXMnLFxuICAnaXQnLFxuICAnaXRzJyxcbiAgJ2p1c3QnLFxuICAnbGVhc3QnLFxuICAnbGV0JyxcbiAgJ2xpa2UnLFxuICAnbGlrZWx5JyxcbiAgJ21heScsXG4gICdtZScsXG4gICdtaWdodCcsXG4gICdtb3N0JyxcbiAgJ211c3QnLFxuICAnbXknLFxuICAnbmVpdGhlcicsXG4gICdubycsXG4gICdub3InLFxuICAnbm90JyxcbiAgJ29mJyxcbiAgJ29mZicsXG4gICdvZnRlbicsXG4gICdvbicsXG4gICdvbmx5JyxcbiAgJ29yJyxcbiAgJ290aGVyJyxcbiAgJ291cicsXG4gICdvd24nLFxuICAncmF0aGVyJyxcbiAgJ3NhaWQnLFxuICAnc2F5JyxcbiAgJ3NheXMnLFxuICAnc2hlJyxcbiAgJ3Nob3VsZCcsXG4gICdzaW5jZScsXG4gICdzbycsXG4gICdzb21lJyxcbiAgJ3RoYW4nLFxuICAndGhhdCcsXG4gICd0aGUnLFxuICAndGhlaXInLFxuICAndGhlbScsXG4gICd0aGVuJyxcbiAgJ3RoZXJlJyxcbiAgJ3RoZXNlJyxcbiAgJ3RoZXknLFxuICAndGhpcycsXG4gICd0aXMnLFxuICAndG8nLFxuICAndG9vJyxcbiAgJ3R3YXMnLFxuICAndXMnLFxuICAnd2FudHMnLFxuICAnd2FzJyxcbiAgJ3dlJyxcbiAgJ3dlcmUnLFxuICAnd2hhdCcsXG4gICd3aGVuJyxcbiAgJ3doZXJlJyxcbiAgJ3doaWNoJyxcbiAgJ3doaWxlJyxcbiAgJ3dobycsXG4gICd3aG9tJyxcbiAgJ3doeScsXG4gICd3aWxsJyxcbiAgJ3dpdGgnLFxuICAnd291bGQnLFxuICAneWV0JyxcbiAgJ3lvdScsXG4gICd5b3VyJ1xuXSlcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RvcFdvcmRGaWx0ZXIsICdzdG9wV29yZEZpbHRlcicpXG4vKiFcbiAqIGx1bnIudHJpbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci50cmltbWVyIGlzIGEgcGlwZWxpbmUgZnVuY3Rpb24gZm9yIHRyaW1taW5nIG5vbiB3b3JkXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIHRva2VucyBiZWZvcmUgdGhleVxuICogZW50ZXIgdGhlIGluZGV4LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gbWF5IG5vdCB3b3JrIGNvcnJlY3RseSBmb3Igbm9uIGxhdGluXG4gKiBjaGFyYWN0ZXJzIGFuZCBzaG91bGQgZWl0aGVyIGJlIHJlbW92ZWQgb3IgYWRhcHRlZCBmb3IgdXNlXG4gKiB3aXRoIGxhbmd1YWdlcyB3aXRoIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqL1xubHVuci50cmltbWVyID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxXKy8sICcnKS5yZXBsYWNlKC9cXFcrJC8sICcnKVxuICB9KVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci50cmltbWVyLCAndHJpbW1lcicpXG4vKiFcbiAqIGx1bnIuVG9rZW5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdG9rZW4gc2V0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIHVuaXF1ZSBsaXN0IG9mIGFsbCB0b2tlbnNcbiAqIHdpdGhpbiBhbiBpbmRleC4gVG9rZW4gc2V0cyBhcmUgYWxzbyB1c2VkIHRvIHJlcHJlc2VudCBhblxuICogaW5jb21pbmcgcXVlcnkgdG8gdGhlIGluZGV4LCB0aGlzIHF1ZXJ5IHRva2VuIHNldCBhbmQgaW5kZXhcbiAqIHRva2VuIHNldCBhcmUgdGhlbiBpbnRlcnNlY3RlZCB0byBmaW5kIHdoaWNoIHRva2VucyB0byBsb29rXG4gKiB1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXguXG4gKlxuICogQSB0b2tlbiBzZXQgY2FuIGhvbGQgbXVsdGlwbGUgdG9rZW5zLCBhcyBpbiB0aGUgY2FzZSBvZiB0aGVcbiAqIGluZGV4IHRva2VuIHNldCwgb3IgaXQgY2FuIGhvbGQgYSBzaW5nbGUgdG9rZW4gYXMgaW4gdGhlXG4gKiBjYXNlIG9mIGEgc2ltcGxlIHF1ZXJ5IHRva2VuIHNldC5cbiAqXG4gKiBBZGRpdGlvbmFsbHkgdG9rZW4gc2V0cyBhcmUgdXNlZCB0byBwZXJmb3JtIHdpbGRjYXJkIG1hdGNoaW5nLlxuICogTGVhZGluZywgY29udGFpbmVkIGFuZCB0cmFpbGluZyB3aWxkY2FyZHMgYXJlIHN1cHBvcnRlZCwgYW5kXG4gKiBmcm9tIHRoaXMgZWRpdCBkaXN0YW5jZSBtYXRjaGluZyBjYW4gYWxzbyBiZSBwcm92aWRlZC5cbiAqXG4gKiBUb2tlbiBzZXRzIGFyZSBpbXBsZW1lbnRlZCBhcyBhIG1pbmltYWwgZmluaXRlIHN0YXRlIGF1dG9tYXRhLFxuICogd2hlcmUgYm90aCBjb21tb24gcHJlZml4ZXMgYW5kIHN1ZmZpeGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0b2tlbnMuXG4gKiBUaGlzIGhlbHBzIHRvIHJlZHVjZSB0aGUgc3BhY2UgdXNlZCBmb3Igc3RvcmluZyB0aGUgdG9rZW4gc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZpbmFsID0gZmFsc2VcbiAgdGhpcy5lZGdlcyA9IHt9XG4gIHRoaXMuaWQgPSBsdW5yLlRva2VuU2V0Ll9uZXh0SWRcbiAgbHVuci5Ub2tlblNldC5fbmV4dElkICs9IDFcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgbmV4dCwgYXV0byBpbmNyZW1lbnQsIGlkZW50aWZpZXIgdG8gYXNzaWduXG4gKiB0byBhIG5ldyB0b2tlblNldC5cbiAqXG4gKiBUb2tlblNldHMgcmVxdWlyZSBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGJlIGNvcnJlY3RseSBtaW5pbWlzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5Ub2tlblNldC5fbmV4dElkID0gMVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBzb3J0ZWQgYXJyYXkgb2Ygd29yZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJyIC0gQSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncyB0byBjcmVhdGUgdGhlIHNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGlucHV0IGFycmF5IGlzIG5vdCBzb3J0ZWQuXG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXJcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnVpbGRlci5pbnNlcnQoYXJyW2ldKVxuICB9XG5cbiAgYnVpbGRlci5maW5pc2goKVxuICByZXR1cm4gYnVpbGRlci5yb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBmcm9tIGEgcXVlcnkgY2xhdXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhdXNlIC0gQSBzaW5nbGUgY2xhdXNlIGZyb20gbHVuci5RdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGF1c2UudGVybSAtIFRoZSBxdWVyeSBjbGF1c2UgdGVybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY2xhdXNlLmVkaXREaXN0YW5jZV0gLSBUaGUgb3B0aW9uYWwgZWRpdCBkaXN0YW5jZSBmb3IgdGhlIHRlcm0uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlID0gZnVuY3Rpb24gKGNsYXVzZSkge1xuICBpZiAoJ2VkaXREaXN0YW5jZScgaW4gY2xhdXNlKSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nKGNsYXVzZS50ZXJtLCBjbGF1c2UuZWRpdERpc3RhbmNlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21TdHJpbmcoY2xhdXNlLnRlcm0pXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IHJlcHJlc2VudGluZyBhIHNpbmdsZSBzdHJpbmcgd2l0aCBhIHNwZWNpZmllZFxuICogZWRpdCBkaXN0YW5jZS5cbiAqXG4gKiBJbnNlcnRpb25zLCBkZWxldGlvbnMsIHN1YnN0aXR1dGlvbnMgYW5kIHRyYW5zcG9zaXRpb25zIGFyZSBlYWNoXG4gKiB0cmVhdGVkIGFzIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMS5cbiAqXG4gKiBJbmNyZWFzaW5nIHRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2Ugd2lsbCBoYXZlIGEgZHJhbWF0aWMgaW1wYWN0XG4gKiBvbiB0aGUgcGVyZm9ybWFuY2Ugb2YgYm90aCBjcmVhdGluZyBhbmQgaW50ZXJzZWN0aW5nIHRoZXNlIFRva2VuU2V0cy5cbiAqIEl0IGlzIGFkdmlzZWQgdG8ga2VlcCB0aGUgZWRpdCBkaXN0YW5jZSBsZXNzIHRoYW4gMy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgdGhlIHRva2VuIHNldCBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGVkaXREaXN0YW5jZSAtIFRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2UgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7bHVuci5WZWN0b3J9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nID0gZnVuY3Rpb24gKHN0ciwgZWRpdERpc3RhbmNlKSB7XG4gIHZhciByb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIG5vZGU6IHJvb3QsXG4gICAgZWRpdHNSZW1haW5pbmc6IGVkaXREaXN0YW5jZSxcbiAgICBzdHI6IHN0clxuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gbm8gZWRpdFxuICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIG5vRWRpdE5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBub0VkaXROb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBub0VkaXROb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgbm9FZGl0Tm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIG5vZGU6IG5vRWRpdE5vZGUsXG4gICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyxcbiAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIGRlbGV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIGRlbGV0ZSBpbiB0aGUgc3RyaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIGRlbGV0aW9uTm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBkZWxldGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPD0gMikge1xuICAgICAgICBkZWxldGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBkZWxldGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8ganVzdCByZW1vdmluZyB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSB0aGUgc3RyXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgIGZyYW1lLm5vZGUuZmluYWwgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gc3Vic3RpdHV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBzdWJzdGl0dXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gc3Vic3RpdHV0ZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gc3Vic3RpdHV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBzdWJzdGl0dXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnNlcnRpb25cbiAgICAvLyBjYW4gb25seSBkbyBpbnNlcnRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBpbnNlcnRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5zZXJ0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGluc2VydGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0clxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRyYW5zcG9zaXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHRyYW5zcG9zaXRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCB0aGVyZSBhcmUgZW5vdWdoIGNoYXJhY3RlcnMgdG8gdHJhbnNwb3NlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXJBID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBjaGFyQiA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgdHJhbnNwb3NlTm9kZVxuXG4gICAgICBpZiAoY2hhckIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyQl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXSA9IHRyYW5zcG9zZU5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogdHJhbnNwb3NlTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogY2hhckEgKyBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIFRoZSBzdHJpbmcgbWF5IGNvbnRhaW4gb25lIG9yIG1vcmUgd2lsZGNhcmQgY2hhcmFjdGVycyAoKilcbiAqIHRoYXQgd2lsbCBhbGxvdyB3aWxkY2FyZCBtYXRjaGluZyB3aGVuIGludGVyc2VjdGluZyB3aXRoXG4gKiBhbm90aGVyIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSBhIFRva2VuU2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgbm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgcm9vdCA9IG5vZGVcblxuICAvKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBjaGFyYWN0ZXJzIHdpdGhpbiB0aGUgcGFzc2VkIHN0cmluZ1xuICAgKiBhcHBlbmRpbmcgYSBub2RlIGZvciBlYWNoIGNoYXJhY3Rlci5cbiAgICpcbiAgICogV2hlbiBhIHdpbGRjYXJkIGNoYXJhY3RlciBpcyBmb3VuZCB0aGVuIGEgc2VsZlxuICAgKiByZWZlcmVuY2luZyBlZGdlIGlzIGludHJvZHVjZWQgdG8gY29udGludWFsbHkgbWF0Y2hcbiAgICogYW55IG51bWJlciBvZiBhbnkgY2hhcmFjdGVycy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgY2hhciA9IHN0cltpXSxcbiAgICAgICAgZmluYWwgPSAoaSA9PSBsZW4gLSAxKVxuXG4gICAgaWYgKGNoYXIgPT0gXCIqXCIpIHtcbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBub2RlXG4gICAgICBub2RlLmZpbmFsID0gZmluYWxcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICBuZXh0LmZpbmFsID0gZmluYWxcblxuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHRcbiAgICAgIG5vZGUgPSBuZXh0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGlzIFRva2VuU2V0IGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd29yZHMgPSBbXVxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcHJlZml4OiBcIlwiLFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKCksXG4gICAgICAgIGVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIGxlbiA9IGVkZ2VzLmxlbmd0aFxuXG4gICAgaWYgKGZyYW1lLm5vZGUuZmluYWwpIHtcbiAgICAgIC8qIEluIFNhZmFyaSwgYXQgdGhpcyBwb2ludCB0aGUgcHJlZml4IGlzIHNvbWV0aW1lcyBjb3JydXB0ZWQsIHNlZTpcbiAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXJubi9sdW5yLmpzL2lzc3Vlcy8yNzkgQ2FsbGluZyBhbnlcbiAgICAgICAqIFN0cmluZy5wcm90b3R5cGUgbWV0aG9kIGZvcmNlcyBTYWZhcmkgdG8gXCJjYXN0XCIgdGhpcyBzdHJpbmcgdG8gd2hhdFxuICAgICAgICogaXQncyBzdXBwb3NlZCB0byBiZSwgZml4aW5nIHRoZSBidWcuICovXG4gICAgICBmcmFtZS5wcmVmaXguY2hhckF0KDApXG4gICAgICB3b3Jkcy5wdXNoKGZyYW1lLnByZWZpeClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldXG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBwcmVmaXg6IGZyYW1lLnByZWZpeC5jb25jYXQoZWRnZSksXG4gICAgICAgIG5vZGU6IGZyYW1lLm5vZGUuZWRnZXNbZWRnZV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdvcmRzXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBhbGxvdyBUb2tlblNldHMgdG8gYmUgdXNlZCBhcyBrZXlzXG4gKiBpbiBvYmplY3RzLCBsYXJnZWx5IHRvIGFpZCB0aGUgY29uc3RydWN0aW9uIGFuZCBtaW5pbWlzYXRpb25cbiAqIG9mIGEgVG9rZW5TZXQuIEFzIHN1Y2ggaXQgaXMgbm90IGRlc2lnbmVkIHRvIGJlIGEgaHVtYW5cbiAqIGZyaWVuZGx5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTk9URTogVXNpbmcgT2JqZWN0LmtleXMgaGVyZSBhcyB0aGlzLmVkZ2VzIGlzIHZlcnkgbGlrZWx5XG4gIC8vIHRvIGVudGVyICdoYXNoLW1vZGUnIHdpdGggbWFueSBrZXlzIGJlaW5nIGFkZGVkXG4gIC8vXG4gIC8vIGF2b2lkaW5nIGEgZm9yLWluIGxvb3AgaGVyZSBhcyBpdCBsZWFkcyB0byB0aGUgZnVuY3Rpb25cbiAgLy8gYmVpbmcgZGUtb3B0aW1pc2VkIChhdCBsZWFzdCBpbiBWOCkuIEZyb20gc29tZSBzaW1wbGVcbiAgLy8gYmVuY2htYXJrcyB0aGUgcGVyZm9ybWFuY2UgaXMgY29tcGFyYWJsZSwgYnV0IGFsbG93aW5nXG4gIC8vIFY4IHRvIG9wdGltaXplIG1heSBtZWFuIGVhc3kgcGVyZm9ybWFuY2Ugd2lucyBpbiB0aGUgZnV0dXJlLlxuXG4gIGlmICh0aGlzLl9zdHIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyXG4gIH1cblxuICB2YXIgc3RyID0gdGhpcy5maW5hbCA/ICcxJyA6ICcwJyxcbiAgICAgIGxhYmVscyA9IE9iamVjdC5rZXlzKHRoaXMuZWRnZXMpLnNvcnQoKSxcbiAgICAgIGxlbiA9IGxhYmVscy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGxhYmVsID0gbGFiZWxzW2ldLFxuICAgICAgICBub2RlID0gdGhpcy5lZGdlc1tsYWJlbF1cblxuICAgIHN0ciA9IHN0ciArIGxhYmVsICsgbm9kZS5pZFxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVG9rZW5TZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mXG4gKiB0aGlzIFRva2VuU2V0IGFuZCB0aGUgcGFzc2VkIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaW50ZXJzZWN0aW9uIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgYW55IHdpbGRjYXJkc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBiIC0gQW4gb3RoZXIgVG9rZW5TZXQgdG8gaW50ZXJzZWN0IHdpdGguXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgZnJhbWUgPSB1bmRlZmluZWRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHFOb2RlOiBiLFxuICAgIG91dHB1dDogb3V0cHV0LFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gTk9URTogQXMgd2l0aCB0aGUgI3RvU3RyaW5nIG1ldGhvZCwgd2UgYXJlIHVzaW5nXG4gICAgLy8gT2JqZWN0LmtleXMgYW5kIGEgZm9yIGxvb3AgaW5zdGVhZCBvZiBhIGZvci1pbiBsb29wXG4gICAgLy8gYXMgYm90aCBvZiB0aGVzZSBvYmplY3RzIGVudGVyICdoYXNoJyBtb2RlLCBjYXVzaW5nXG4gICAgLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGRlLW9wdGltaXNlZCBpbiBWOFxuICAgIHZhciBxRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5xTm9kZS5lZGdlcyksXG4gICAgICAgIHFMZW4gPSBxRWRnZXMubGVuZ3RoLFxuICAgICAgICBuRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbkxlbiA9IG5FZGdlcy5sZW5ndGhcblxuICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcUxlbjsgcSsrKSB7XG4gICAgICB2YXIgcUVkZ2UgPSBxRWRnZXNbcV1cblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBuTGVuOyBuKyspIHtcbiAgICAgICAgdmFyIG5FZGdlID0gbkVkZ2VzW25dXG5cbiAgICAgICAgaWYgKG5FZGdlID09IHFFZGdlIHx8IHFFZGdlID09ICcqJykge1xuICAgICAgICAgIHZhciBub2RlID0gZnJhbWUubm9kZS5lZGdlc1tuRWRnZV0sXG4gICAgICAgICAgICAgIHFOb2RlID0gZnJhbWUucU5vZGUuZWRnZXNbcUVkZ2VdLFxuICAgICAgICAgICAgICBmaW5hbCA9IG5vZGUuZmluYWwgJiYgcU5vZGUuZmluYWwsXG4gICAgICAgICAgICAgIG5leHQgPSB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChuRWRnZSBpbiBmcmFtZS5vdXRwdXQuZWRnZXMpIHtcbiAgICAgICAgICAgIC8vIGFuIGVkZ2UgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBub2RlLCBqdXN0IHNldCB0aGUgZmluYWxpdHlcbiAgICAgICAgICAgIC8vIGJpdCB1bmxlc3MgdGhpcyBub2RlIGlzIGFscmVhZHkgZmluYWxcbiAgICAgICAgICAgIG5leHQgPSBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdXG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gbmV4dC5maW5hbCB8fCBmaW5hbFxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVkZ2UgZXhpc3RzIHlldCwgbXVzdCBjcmVhdGUgb25lXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGZpbmFsaXR5IGJpdCBhbmQgaW5zZXJ0IGl0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBvdXRwdXRcbiAgICAgICAgICAgIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG4gICAgICAgICAgICBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdID0gbmV4dFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgcU5vZGU6IHFOb2RlLFxuICAgICAgICAgICAgb3V0cHV0OiBuZXh0LFxuICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJldmlvdXNXb3JkID0gXCJcIlxuICB0aGlzLnJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuICB0aGlzLnVuY2hlY2tlZE5vZGVzID0gW11cbiAgdGhpcy5taW5pbWl6ZWROb2RlcyA9IHt9XG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgdmFyIG5vZGUsXG4gICAgICBjb21tb25QcmVmaXggPSAwXG5cbiAgaWYgKHdvcmQgPCB0aGlzLnByZXZpb3VzV29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvciAoXCJPdXQgb2Ygb3JkZXIgd29yZCBpbnNlcnRpb25cIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZC5sZW5ndGggJiYgaSA8IHRoaXMucHJldmlvdXNXb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHdvcmRbaV0gIT0gdGhpcy5wcmV2aW91c1dvcmRbaV0pIGJyZWFrXG4gICAgY29tbW9uUHJlZml4KytcbiAgfVxuXG4gIHRoaXMubWluaW1pemUoY29tbW9uUHJlZml4KVxuXG4gIGlmICh0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgbm9kZSA9IHRoaXMucm9vdFxuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW3RoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMV0uY2hpbGRcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBjb21tb25QcmVmaXg7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5leHROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICAgIGNoYXIgPSB3b3JkW2ldXG5cbiAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dE5vZGVcblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucHVzaCh7XG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjaGFyOiBjaGFyLFxuICAgICAgY2hpbGQ6IG5leHROb2RlXG4gICAgfSlcblxuICAgIG5vZGUgPSBuZXh0Tm9kZVxuICB9XG5cbiAgbm9kZS5maW5hbCA9IHRydWVcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSB3b3JkXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1pbmltaXplKDApXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUubWluaW1pemUgPSBmdW5jdGlvbiAoZG93blRvKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gZG93blRvOyBpLS0pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbaV0sXG4gICAgICAgIGNoaWxkS2V5ID0gbm9kZS5jaGlsZC50b1N0cmluZygpXG5cbiAgICBpZiAoY2hpbGRLZXkgaW4gdGhpcy5taW5pbWl6ZWROb2Rlcykge1xuICAgICAgbm9kZS5wYXJlbnQuZWRnZXNbbm9kZS5jaGFyXSA9IHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhY2hlIHRoZSBrZXkgZm9yIHRoaXMgbm9kZSBzaW5jZVxuICAgICAgLy8gd2Uga25vdyBpdCBjYW4ndCBjaGFuZ2UgYW55bW9yZVxuICAgICAgbm9kZS5jaGlsZC5fc3RyID0gY2hpbGRLZXlcblxuICAgICAgdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV0gPSBub2RlLmNoaWxkXG4gICAgfVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wb3AoKVxuICB9XG59XG4vKiFcbiAqIGx1bnIuSW5kZXhcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEFuIGluZGV4IGNvbnRhaW5zIHRoZSBidWlsdCBpbmRleCBvZiBhbGwgZG9jdW1lbnRzIGFuZCBwcm92aWRlcyBhIHF1ZXJ5IGludGVyZmFjZVxuICogdG8gdGhlIGluZGV4LlxuICpcbiAqIFVzdWFsbHkgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggd2lsbCBub3QgYmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnN0cnVjdG9yLCBpbnN0ZWFkXG4gKiBsdW5yLkJ1aWxkZXIgc2hvdWxkIGJlIHVzZWQgdG8gY29uc3RydWN0IG5ldyBpbmRleGVzLCBvciBsdW5yLkluZGV4LmxvYWQgc2hvdWxkIGJlXG4gKiB1c2VkIHRvIGxvYWQgcHJldmlvdXNseSBidWlsdCBhbmQgc2VyaWFsaXplZCBpbmRleGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIC0gVGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGJ1aWx0IHNlYXJjaCBpbmRleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycy5pbnZlcnRlZEluZGV4IC0gQW4gaW5kZXggb2YgdGVybS9maWVsZCB0byBkb2N1bWVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGx1bnIuVmVjdG9yPn0gYXR0cnMuZmllbGRWZWN0b3JzIC0gRmllbGQgdmVjdG9yc1xuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBhdHRycy50b2tlblNldCAtIEFuIHNldCBvZiBhbGwgY29ycHVzIHRva2Vucy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dHJzLmZpZWxkcyAtIFRoZSBuYW1lcyBvZiBpbmRleGVkIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZX0gYXR0cnMucGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgdG8gdXNlIGZvciBzZWFyY2ggdGVybXMuXG4gKi9cbmx1bnIuSW5kZXggPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gYXR0cnMuaW52ZXJ0ZWRJbmRleFxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGF0dHJzLmZpZWxkVmVjdG9yc1xuICB0aGlzLnRva2VuU2V0ID0gYXR0cnMudG9rZW5TZXRcbiAgdGhpcy5maWVsZHMgPSBhdHRycy5maWVsZHNcbiAgdGhpcy5waXBlbGluZSA9IGF0dHJzLnBpcGVsaW5lXG59XG5cbi8qKlxuICogQSByZXN1bHQgY29udGFpbnMgZGV0YWlscyBvZiBhIGRvY3VtZW50IG1hdGNoaW5nIGEgc2VhcmNoIHF1ZXJ5LlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5JbmRleH5SZXN1bHRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWYgLSBUaGUgcmVmZXJlbmNlIG9mIHRoZSBkb2N1bWVudCB0aGlzIHJlc3VsdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjb3JlIC0gQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHJlcHJlc2VudGluZyBob3cgc2ltaWxhciB0aGlzIGRvY3VtZW50IGlzIHRvIHRoZSBxdWVyeS5cbiAqIEBwcm9wZXJ0eSB7bHVuci5NYXRjaERhdGF9IG1hdGNoRGF0YSAtIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IHRoaXMgbWF0Y2ggaW5jbHVkaW5nIHdoaWNoIHRlcm0ocykgY2F1c2VkIHRoZSBtYXRjaC5cbiAqL1xuXG4vKipcbiAqIEFsdGhvdWdoIGx1bnIgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHF1ZXJpZXMgdXNpbmcgbHVuci5RdWVyeSwgaXQgYWxzbyBwcm92aWRlcyBhIHNpbXBsZVxuICogcXVlcnkgbGFuZ3VhZ2Ugd2hpY2ggaXRzZWxmIGlzIHBhcnNlZCBpbnRvIGFuIGluc3RhbmNlIG9mIGx1bnIuUXVlcnkuXG4gKlxuICogRm9yIHByb2dyYW1tYXRpY2FsbHkgYnVpbGRpbmcgcXVlcmllcyBpdCBpcyBhZHZpc2VkIHRvIGRpcmVjdGx5IHVzZSBsdW5yLlF1ZXJ5LCB0aGUgcXVlcnkgbGFuZ3VhZ2VcbiAqIGlzIGJlc3QgdXNlZCBmb3IgaHVtYW4gZW50ZXJlZCB0ZXh0IHJhdGhlciB0aGFuIHByb2dyYW0gZ2VuZXJhdGVkIHRleHQuXG4gKlxuICogQXQgaXRzIHNpbXBsZXN0IHF1ZXJpZXMgY2FuIGp1c3QgYmUgYSBzaW5nbGUgdGVybSwgZS5nLiBgaGVsbG9gLCBtdWx0aXBsZSB0ZXJtcyBhcmUgYWxzbyBzdXBwb3J0ZWRcbiAqIGFuZCB3aWxsIGJlIGNvbWJpbmVkIHdpdGggT1IsIGUuZyBgaGVsbG8gd29ybGRgIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHRoYXQgY29udGFpbiBlaXRoZXIgJ2hlbGxvJ1xuICogb3IgJ3dvcmxkJywgdGhvdWdoIHRob3NlIHRoYXQgY29udGFpbiBib3RoIHdpbGwgcmFuayBoaWdoZXIgaW4gdGhlIHJlc3VsdHMuXG4gKlxuICogV2lsZGNhcmRzIGNhbiBiZSBpbmNsdWRlZCBpbiB0ZXJtcyB0byBtYXRjaCBvbmUgb3IgbW9yZSB1bnNwZWNpZmllZCBjaGFyYWN0ZXJzLCB0aGVzZSB3aWxkY2FyZHMgY2FuXG4gKiBiZSBpbnNlcnRlZCBhbnl3aGVyZSB3aXRoaW4gdGhlIHRlcm0sIGFuZCBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGNhbiBleGlzdCBpbiBhIHNpbmdsZSB0ZXJtLiBBZGRpbmdcbiAqIHdpbGRjYXJkcyB3aWxsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIHRoYXQgd2lsbCBiZSBmb3VuZCBidXQgY2FuIGFsc28gaGF2ZSBhIG5lZ2F0aXZlXG4gKiBpbXBhY3Qgb24gcXVlcnkgcGVyZm9ybWFuY2UsIGVzcGVjaWFsbHkgd2l0aCB3aWxkY2FyZHMgYXQgdGhlIGJlZ2lubmluZyBvZiBhIHRlcm0uXG4gKlxuICogVGVybXMgY2FuIGJlIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgZmllbGRzLCBlLmcuIGB0aXRsZTpoZWxsb2AsIG9ubHkgZG9jdW1lbnRzIHdpdGggdGhlIHRlcm1cbiAqIGhlbGxvIGluIHRoZSB0aXRsZSBmaWVsZCB3aWxsIG1hdGNoIHRoaXMgcXVlcnkuIFVzaW5nIGEgZmllbGQgbm90IHByZXNlbnQgaW4gdGhlIGluZGV4IHdpbGwgbGVhZFxuICogdG8gYW4gZXJyb3IgYmVpbmcgdGhyb3duLlxuICpcbiAqIE1vZGlmaWVycyBjYW4gYWxzbyBiZSBhZGRlZCB0byB0ZXJtcywgbHVuciBzdXBwb3J0cyBlZGl0IGRpc3RhbmNlIGFuZCBib29zdCBtb2RpZmllcnMgb24gdGVybXMuIEEgdGVybVxuICogYm9vc3Qgd2lsbCBtYWtlIGRvY3VtZW50cyBtYXRjaGluZyB0aGF0IHRlcm0gc2NvcmUgaGlnaGVyLCBlLmcuIGBmb29eNWAuIEVkaXQgZGlzdGFuY2UgaXMgYWxzbyBzdXBwb3J0ZWRcbiAqIHRvIHByb3ZpZGUgZnV6enkgbWF0Y2hpbmcsIGUuZy4gJ2hlbGxvfjInIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHdpdGggaGVsbG8gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDIuXG4gKiBBdm9pZCBsYXJnZSB2YWx1ZXMgZm9yIGVkaXQgZGlzdGFuY2UgdG8gaW1wcm92ZSBxdWVyeSBwZXJmb3JtYW5jZS5cbiAqXG4gKiBFYWNoIHRlcm0gYWxzbyBzdXBwb3J0cyBhIHByZXNlbmNlIG1vZGlmaWVyLiBCeSBkZWZhdWx0IGEgdGVybSdzIHByZXNlbmNlIGluIGRvY3VtZW50IGlzIG9wdGlvbmFsLCBob3dldmVyXG4gKiB0aGlzIGNhbiBiZSBjaGFuZ2VkIHRvIGVpdGhlciByZXF1aXJlZCBvciBwcm9oaWJpdGVkLiBGb3IgYSB0ZXJtJ3MgcHJlc2VuY2UgdG8gYmUgcmVxdWlyZWQgaW4gYSBkb2N1bWVudCB0aGVcbiAqIHRlcm0gc2hvdWxkIGJlIHByZWZpeGVkIHdpdGggYSAnKycsIGUuZy4gYCtmb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgbXVzdCBjb250YWluICdmb28nIGFuZFxuICogb3B0aW9uYWxseSBjb250YWluICdiYXInLiBDb252ZXJzZWx5IGEgbGVhZGluZyAnLScgc2V0cyB0aGUgdGVybXMgcHJlc2VuY2UgdG8gcHJvaGliaXRlZCwgaS5lLiBpdCBtdXN0IG5vdFxuICogYXBwZWFyIGluIGEgZG9jdW1lbnQsIGUuZy4gYC1mb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW4gJ2ZvbycgYnV0IG1heSBjb250YWluICdiYXInLlxuICpcbiAqIFRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGJhY2tzbGFzaCBjaGFyYWN0ZXIgJ1xcJyBjYW4gYmUgdXNlZCwgdGhpcyBhbGxvd3Mgc2VhcmNoZXMgdG8gaW5jbHVkZVxuICogY2hhcmFjdGVycyB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGNvbnNpZGVyZWQgbW9kaWZpZXJzLCBlLmcuIGBmb29cXH4yYCB3aWxsIHNlYXJjaCBmb3IgYSB0ZXJtIFwiZm9vfjJcIiBpbnN0ZWFkXG4gKiBvZiBhdHRlbXB0aW5nIHRvIGFwcGx5IGEgYm9vc3Qgb2YgMiB0byB0aGUgc2VhcmNoIHRlcm0gXCJmb29cIi5cbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBsdW5yLkluZGV4flF1ZXJ5U3RyaW5nXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5TaW1wbGUgc2luZ2xlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvIHdvcmxkXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHNjb3BlZCB0byBhIGZpZWxkPC9jYXB0aW9uPlxuICogdGl0bGU6aGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhIGJvb3N0IG9mIDEwPC9jYXB0aW9uPlxuICogaGVsbG9eMTBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDI8L2NhcHRpb24+XG4gKiBoZWxsb34yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtcyB3aXRoIHByZXNlbmNlIG1vZGlmaWVyczwvY2FwdGlvbj5cbiAqIC1mb28gK2JhciBiYXpcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc2VhcmNoIGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIGx1bnIgcXVlcnkgc3ludGF4LlxuICpcbiAqIFJlc3VsdHMgd2lsbCBiZSByZXR1cm5lZCBzb3J0ZWQgYnkgdGhlaXIgc2NvcmUsIHRoZSBtb3N0IHJlbGV2YW50IHJlc3VsdHNcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZmlyc3QuICBGb3IgZGV0YWlscyBvbiBob3cgdGhlIHNjb3JlIGlzIGNhbGN1bGF0ZWQsIHBsZWFzZSBzZWVcbiAqIHRoZSB7QGxpbmsgaHR0cHM6Ly9sdW5yanMuY29tL2d1aWRlcy9zZWFyY2hpbmcuaHRtbCNzY29yaW5nfGd1aWRlfS5cbiAqXG4gKiBGb3IgbW9yZSBwcm9ncmFtbWF0aWMgcXVlcnlpbmcgdXNlIGx1bnIuSW5kZXgjcXVlcnkuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4flF1ZXJ5U3RyaW5nfSBxdWVyeVN0cmluZyAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgYSBsdW5yIHF1ZXJ5LlxuICogQHRocm93cyB7bHVuci5RdWVyeVBhcnNlRXJyb3J9IElmIHRoZSBwYXNzZWQgcXVlcnkgc3RyaW5nIGNhbm5vdCBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiB0aGlzLnF1ZXJ5KGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBwYXJzZXIgPSBuZXcgbHVuci5RdWVyeVBhcnNlcihxdWVyeVN0cmluZywgcXVlcnkpXG4gICAgcGFyc2VyLnBhcnNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHF1ZXJ5IGJ1aWxkZXIgY2FsbGJhY2sgcHJvdmlkZXMgYSBxdWVyeSBvYmplY3QgdG8gYmUgdXNlZCB0byBleHByZXNzXG4gKiB0aGUgcXVlcnkgdG8gcGVyZm9ybSBvbiB0aGUgaW5kZXguXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuSW5kZXh+cXVlcnlCdWlsZGVyXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB1cC5cbiAqIEB0aGlzIGx1bnIuUXVlcnlcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgcXVlcnkgYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgdGhlIHlpZWxkZWQgbHVuci5RdWVyeSBvYmplY3QuXG4gKlxuICogSWYgcGVyZm9ybWluZyBwcm9ncmFtbWF0aWMgcXVlcmllcyBhZ2FpbnN0IHRoZSBpbmRleCwgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkXG4gKiBvdmVyIGx1bnIuSW5kZXgjc2VhcmNoIHNvIGFzIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIHF1ZXJ5IHBhcnNpbmcgb3ZlcmhlYWQuXG4gKlxuICogQSBxdWVyeSBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGV4cHJlc3MgdGhlIHF1ZXJ5IHRvIGJlIHJ1biBhZ2FpbnN0IHRoZSBpbmRleC5cbiAqXG4gKiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBmdW5jdGlvbiB0YWtlcyBhIGNhbGxiYWNrIHBhcmFtZXRlciBpdCBpcyBfbm90XyBhblxuICogYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgdGhlIGNhbGxiYWNrIGlzIGp1c3QgeWllbGRlZCBhIHF1ZXJ5IG9iamVjdCB0byBiZVxuICogY3VzdG9taXplZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+cXVlcnlCdWlsZGVyfSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGJ1aWxkIHRoZSBxdWVyeS5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBmb3IgZWFjaCBxdWVyeSBjbGF1c2VcbiAgLy8gKiBwcm9jZXNzIHRlcm1zXG4gIC8vICogZXhwYW5kIHRlcm1zIGZyb20gdG9rZW4gc2V0XG4gIC8vICogZmluZCBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhXG4gIC8vICogZ2V0IGRvY3VtZW50IHZlY3RvcnNcbiAgLy8gKiBzY29yZSBkb2N1bWVudHNcblxuICB2YXIgcXVlcnkgPSBuZXcgbHVuci5RdWVyeSh0aGlzLmZpZWxkcyksXG4gICAgICBtYXRjaGluZ0ZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBxdWVyeVZlY3RvcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgdGVybUZpZWxkQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcmVxdWlyZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHByb2hpYml0ZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIC8qXG4gICAqIFRvIHN1cHBvcnQgZmllbGQgbGV2ZWwgYm9vc3RzIGEgcXVlcnkgdmVjdG9yIGlzIGNyZWF0ZWQgcGVyXG4gICAqIGZpZWxkLiBBbiBlbXB0eSB2ZWN0b3IgaXMgZWFnZXJseSBjcmVhdGVkIHRvIHN1cHBvcnQgbmVnYXRlZFxuICAgKiBxdWVyaWVzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXJ5VmVjdG9yc1t0aGlzLmZpZWxkc1tpXV0gPSBuZXcgbHVuci5WZWN0b3JcbiAgfVxuXG4gIGZuLmNhbGwocXVlcnksIHF1ZXJ5KVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnkuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogVW5sZXNzIHRoZSBwaXBlbGluZSBoYXMgYmVlbiBkaXNhYmxlZCBmb3IgdGhpcyB0ZXJtLCB3aGljaCBpc1xuICAgICAqIHRoZSBjYXNlIGZvciB0ZXJtcyB3aXRoIHdpbGRjYXJkcywgd2UgbmVlZCB0byBwYXNzIHRoZSBjbGF1c2VcbiAgICAgKiB0ZXJtIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS4gQSBwaXBlbGluZSByZXR1cm5zIGFuIGFycmF5XG4gICAgICogb2YgcHJvY2Vzc2VkIHRlcm1zLiBQaXBlbGluZSBmdW5jdGlvbnMgbWF5IGV4cGFuZCB0aGUgcGFzc2VkXG4gICAgICogdGVybSwgd2hpY2ggbWVhbnMgd2UgbWF5IGVuZCB1cCBwZXJmb3JtaW5nIG11bHRpcGxlIGluZGV4IGxvb2t1cHNcbiAgICAgKiBmb3IgYSBzaW5nbGUgcXVlcnkgdGVybS5cbiAgICAgKi9cbiAgICB2YXIgY2xhdXNlID0gcXVlcnkuY2xhdXNlc1tpXSxcbiAgICAgICAgdGVybXMgPSBudWxsLFxuICAgICAgICBjbGF1c2VNYXRjaGVzID0gbHVuci5TZXQuY29tcGxldGVcblxuICAgIGlmIChjbGF1c2UudXNlUGlwZWxpbmUpIHtcbiAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW5TdHJpbmcoY2xhdXNlLnRlcm0sIHtcbiAgICAgICAgZmllbGRzOiBjbGF1c2UuZmllbGRzXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtcyA9IFtjbGF1c2UudGVybV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHRlcm1zLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW21dXG5cbiAgICAgIC8qXG4gICAgICAgKiBFYWNoIHRlcm0gcmV0dXJuZWQgZnJvbSB0aGUgcGlwZWxpbmUgbmVlZHMgdG8gdXNlIHRoZSBzYW1lIHF1ZXJ5XG4gICAgICAgKiBjbGF1c2Ugb2JqZWN0LCBlLmcuIHRoZSBzYW1lIGJvb3N0IGFuZCBvciBlZGl0IGRpc3RhbmNlLiBUaGVcbiAgICAgICAqIHNpbXBsZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIHJlLXVzZSB0aGUgY2xhdXNlIG9iamVjdCBidXQgbXV0YXRlXG4gICAgICAgKiBpdHMgdGVybSBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgY2xhdXNlLnRlcm0gPSB0ZXJtXG5cbiAgICAgIC8qXG4gICAgICAgKiBGcm9tIHRoZSB0ZXJtIGluIHRoZSBjbGF1c2Ugd2UgY3JlYXRlIGEgdG9rZW4gc2V0IHdoaWNoIHdpbGwgdGhlblxuICAgICAgICogYmUgdXNlZCB0byBpbnRlcnNlY3QgdGhlIGluZGV4ZXMgdG9rZW4gc2V0IHRvIGdldCBhIGxpc3Qgb2YgdGVybXNcbiAgICAgICAqIHRvIGxvb2t1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXhcbiAgICAgICAqL1xuICAgICAgdmFyIHRlcm1Ub2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZShjbGF1c2UpLFxuICAgICAgICAgIGV4cGFuZGVkVGVybXMgPSB0aGlzLnRva2VuU2V0LmludGVyc2VjdCh0ZXJtVG9rZW5TZXQpLnRvQXJyYXkoKVxuXG4gICAgICAvKlxuICAgICAgICogSWYgYSB0ZXJtIG1hcmtlZCBhcyByZXF1aXJlZCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdG9rZW5TZXQgaXQgaXNcbiAgICAgICAqIGltcG9zc2libGUgZm9yIHRoZSBzZWFyY2ggdG8gcmV0dXJuIGFueSBtYXRjaGVzLiBXZSBzZXQgYWxsIHRoZSBmaWVsZFxuICAgICAgICogc2NvcGVkIHJlcXVpcmVkIG1hdGNoZXMgc2V0IHRvIGVtcHR5IGFuZCBzdG9wIGV4YW1pbmluZyBhbnkgZnVydGhlclxuICAgICAgICogY2xhdXNlcy5cbiAgICAgICAqL1xuICAgICAgaWYgKGV4cGFuZGVkVGVybXMubGVuZ3RoID09PSAwICYmIGNsYXVzZS5wcmVzZW5jZSA9PT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdXG4gICAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmVtcHR5XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4cGFuZGVkVGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGVhY2ggdGVybSBnZXQgdGhlIHBvc3RpbmcgYW5kIHRlcm1JbmRleCwgdGhpcyBpcyByZXF1aXJlZCBmb3JcbiAgICAgICAgICogYnVpbGRpbmcgdGhlIHF1ZXJ5IHZlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBleHBhbmRlZFRlcm0gPSBleHBhbmRlZFRlcm1zW2pdLFxuICAgICAgICAgICAgcG9zdGluZyA9IHRoaXMuaW52ZXJ0ZWRJbmRleFtleHBhbmRlZFRlcm1dLFxuICAgICAgICAgICAgdGVybUluZGV4ID0gcG9zdGluZy5faW5kZXhcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIEZvciBlYWNoIGZpZWxkIHRoYXQgdGhpcyBxdWVyeSB0ZXJtIGlzIHNjb3BlZCBieSAoYnkgZGVmYXVsdFxuICAgICAgICAgICAqIGFsbCBmaWVsZHMgYXJlIGluIHNjb3BlKSB3ZSBuZWVkIHRvIGdldCBhbGwgdGhlIGRvY3VtZW50IHJlZnNcbiAgICAgICAgICAgKiB0aGF0IGhhdmUgdGhpcyB0ZXJtIGluIHRoYXQgZmllbGQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGUgcG9zdGluZyBpcyB0aGUgZW50cnkgaW4gdGhlIGludmVydGVkSW5kZXggZm9yIHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIHRlcm0gZnJvbSBhYm92ZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdLFxuICAgICAgICAgICAgICBmaWVsZFBvc3RpbmcgPSBwb3N0aW5nW2ZpZWxkXSxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudFJlZnMgPSBPYmplY3Qua2V5cyhmaWVsZFBvc3RpbmcpLFxuICAgICAgICAgICAgICB0ZXJtRmllbGQgPSBleHBhbmRlZFRlcm0gKyBcIi9cIiArIGZpZWxkLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50c1NldCA9IG5ldyBsdW5yLlNldChtYXRjaGluZ0RvY3VtZW50UmVmcylcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyByZXF1aXJlZCBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiBkb2N1bWVudHMgYXJlIGFkZGVkIHRvIHRoZSBzZXQgb2YgcmVxdWlyZWQgbWF0Y2hlcyBmb3IgdGhpcyBjbGF1c2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgICAgICAgIGNsYXVzZU1hdGNoZXMgPSBjbGF1c2VNYXRjaGVzLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICBpZiAocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5jb21wbGV0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyBwcm9oaWJpdGVkIGVuc3VyZSB0aGF0IHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIGRvY3VtZW50cyBhcmUgYWRkZWQgdG8gdGhlIHNldCBvZiBwcm9oaWJpdGVkIG1hdGNoZXMgZm9yIHRoaXMgZmllbGQsXG4gICAgICAgICAgICogY3JlYXRpbmcgdGhhdCBzZXQgaWYgaXQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICAgICAgICBpZiAocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuZW1wdHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogUHJvaGliaXRlZCBtYXRjaGVzIHNob3VsZCBub3QgYmUgcGFydCBvZiB0aGUgcXVlcnkgdmVjdG9yIHVzZWQgZm9yXG4gICAgICAgICAgICAgKiBzaW1pbGFyaXR5IHNjb3JpbmcgYW5kIG5vIG1ldGFkYXRhIHNob3VsZCBiZSBleHRyYWN0ZWQgc28gd2UgY29udGludWVcbiAgICAgICAgICAgICAqIHRvIHRoZSBuZXh0IGZpZWxkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUaGUgcXVlcnkgZmllbGQgdmVjdG9yIGlzIHBvcHVsYXRlZCB1c2luZyB0aGUgdGVybUluZGV4IGZvdW5kIGZvclxuICAgICAgICAgICAqIHRoZSB0ZXJtIGFuZCBhIHVuaXQgdmFsdWUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgYm9vc3QgYXBwbGllZC5cbiAgICAgICAgICAgKiBVc2luZyB1cHNlcnQgYmVjYXVzZSB0aGVyZSBjb3VsZCBhbHJlYWR5IGJlIGFuIGVudHJ5IGluIHRoZSB2ZWN0b3JcbiAgICAgICAgICAgKiBmb3IgdGhlIHRlcm0gd2UgYXJlIHdvcmtpbmcgd2l0aC4gSW4gdGhhdCBjYXNlIHdlIGp1c3QgYWRkIHRoZSBzY29yZXNcbiAgICAgICAgICAgKiB0b2dldGhlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBxdWVyeVZlY3RvcnNbZmllbGRdLnVwc2VydCh0ZXJtSW5kZXgsIGNsYXVzZS5ib29zdCwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiIH0pXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB0ZXJtLCBmaWVsZCBjb21ibyB0aGVuIHdlJ3ZlIGFscmVhZHkgY29sbGVjdGVkXG4gICAgICAgICAgICogdGhlIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGEsIG5vIG5lZWQgdG8gZ28gdGhyb3VnaCBhbGwgdGhhdCBhZ2FpblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbWF0Y2hpbmdEb2N1bWVudFJlZnMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBBbGwgbWV0YWRhdGEgZm9yIHRoaXMgdGVybS9maWVsZC9kb2N1bWVudCB0cmlwbGVcbiAgICAgICAgICAgICAqIGFyZSB0aGVuIGV4dHJhY3RlZCBhbmQgY29sbGVjdGVkIGludG8gYW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqIG9mIGx1bnIuTWF0Y2hEYXRhIHJlYWR5IHRvIGJlIHJldHVybmVkIGluIHRoZSBxdWVyeVxuICAgICAgICAgICAgICogcmVzdWx0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdEb2N1bWVudFJlZiA9IG1hdGNoaW5nRG9jdW1lbnRSZWZzW2xdLFxuICAgICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAobWF0Y2hpbmdEb2N1bWVudFJlZiwgZmllbGQpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gZmllbGRQb3N0aW5nW21hdGNoaW5nRG9jdW1lbnRSZWZdLFxuICAgICAgICAgICAgICAgIGZpZWxkTWF0Y2hcblxuICAgICAgICAgICAgaWYgKChmaWVsZE1hdGNoID0gbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGEgKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRNYXRjaC5hZGQoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByZXNlbmNlIHdhcyByZXF1aXJlZCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVxdWlyZWRNYXRjaGVzIGZpZWxkIHNldHMuXG4gICAgICogV2UgZG8gdGhpcyBhZnRlciBhbGwgZmllbGRzIGZvciB0aGUgdGVybSBoYXZlIGNvbGxlY3RlZCB0aGVpciBtYXRjaGVzIGJlY2F1c2VcbiAgICAgKiB0aGUgY2xhdXNlIHRlcm1zIHByZXNlbmNlIGlzIHJlcXVpcmVkIGluIF9hbnlfIG9mIHRoZSBmaWVsZHMgbm90IF9hbGxfIG9mIHRoZVxuICAgICAqIGZpZWxkcy5cbiAgICAgKi9cbiAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXVxuICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXS5pbnRlcnNlY3QoY2xhdXNlTWF0Y2hlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmVlZCB0byBjb21iaW5lIHRoZSBmaWVsZCBzY29wZWQgcmVxdWlyZWQgYW5kIHByb2hpYml0ZWRcbiAgICogbWF0Y2hpbmcgZG9jdW1lbnRzIGludG8gYSBnbG9iYWwgc2V0IG9mIHJlcXVpcmVkIGFuZCBwcm9oaWJpdGVkXG4gICAqIG1hdGNoZXNcbiAgICovXG4gIHZhciBhbGxSZXF1aXJlZE1hdGNoZXMgPSBsdW5yLlNldC5jb21wbGV0ZSxcbiAgICAgIGFsbFByb2hpYml0ZWRNYXRjaGVzID0gbHVuci5TZXQuZW1wdHlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV1cblxuICAgIGlmIChyZXF1aXJlZE1hdGNoZXNbZmllbGRdKSB7XG4gICAgICBhbGxSZXF1aXJlZE1hdGNoZXMgPSBhbGxSZXF1aXJlZE1hdGNoZXMuaW50ZXJzZWN0KHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuXG4gICAgaWYgKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSkge1xuICAgICAgYWxsUHJvaGliaXRlZE1hdGNoZXMgPSBhbGxQcm9oaWJpdGVkTWF0Y2hlcy51bmlvbihwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuICB9XG5cbiAgdmFyIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXMobWF0Y2hpbmdGaWVsZHMpLFxuICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgbWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAvKlxuICAgKiBJZiB0aGUgcXVlcnkgaXMgbmVnYXRlZCAoY29udGFpbnMgb25seSBwcm9oaWJpdGVkIHRlcm1zKVxuICAgKiB3ZSBuZWVkIHRvIGdldCBfYWxsXyBmaWVsZFJlZnMgY3VycmVudGx5IGV4aXN0aW5nIGluIHRoZVxuICAgKiBpbmRleC4gVGhpcyBpcyBvbmx5IGRvbmUgd2hlbiB3ZSBrbm93IHRoYXQgdGhlIHF1ZXJ5IGlzXG4gICAqIGVudGlyZWx5IHByb2hpYml0ZWQgdGVybXMgdG8gYXZvaWQgYW55IGNvc3Qgb2YgZ2V0dGluZyBhbGxcbiAgICogZmllbGRSZWZzIHVubmVjZXNzYXJpbHkuXG4gICAqXG4gICAqIEFkZGl0aW9uYWxseSwgYmxhbmsgTWF0Y2hEYXRhIG11c3QgYmUgY3JlYXRlZCB0byBjb3JyZWN0bHlcbiAgICogcG9wdWxhdGUgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBpZiAocXVlcnkuaXNOZWdhdGVkKCkpIHtcbiAgICBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1hdGNoaW5nRmllbGRSZWYgPSBtYXRjaGluZ0ZpZWxkUmVmc1tpXVxuICAgICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWYpXG4gICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIEN1cnJlbnRseSB3ZSBoYXZlIGRvY3VtZW50IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgYnV0IHdlXG4gICAgICogbmVlZCB0byByZXR1cm4gZG9jdW1lbnRzLiBUaGUgbWF0Y2hEYXRhIGFuZCBzY29yZXMgYXJlIGNvbWJpbmVkXG4gICAgICogZnJvbSBtdWx0aXBsZSBmaWVsZHMgYmVsb25naW5nIHRvIHRoZSBzYW1lIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogU2NvcmVzIGFyZSBjYWxjdWxhdGVkIGJ5IGZpZWxkLCB1c2luZyB0aGUgcXVlcnkgdmVjdG9ycyBjcmVhdGVkXG4gICAgICogYWJvdmUsIGFuZCBjb21iaW5lZCBpbnRvIGEgZmluYWwgZG9jdW1lbnQgc2NvcmUgdXNpbmcgYWRkaXRpb24uXG4gICAgICovXG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWZzW2ldKSxcbiAgICAgICAgZG9jUmVmID0gZmllbGRSZWYuZG9jUmVmXG5cbiAgICBpZiAoIWFsbFJlcXVpcmVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChhbGxQcm9oaWJpdGVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBmaWVsZFZlY3RvciA9IHRoaXMuZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSxcbiAgICAgICAgc2NvcmUgPSBxdWVyeVZlY3RvcnNbZmllbGRSZWYuZmllbGROYW1lXS5zaW1pbGFyaXR5KGZpZWxkVmVjdG9yKSxcbiAgICAgICAgZG9jTWF0Y2hcblxuICAgIGlmICgoZG9jTWF0Y2ggPSBtYXRjaGVzW2RvY1JlZl0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY01hdGNoLnNjb3JlICs9IHNjb3JlXG4gICAgICBkb2NNYXRjaC5tYXRjaERhdGEuY29tYmluZShtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcmVmOiBkb2NSZWYsXG4gICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgbWF0Y2hEYXRhOiBtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXNbZG9jUmVmXSA9IG1hdGNoXG4gICAgICByZXN1bHRzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU29ydCB0aGUgcmVzdWx0cyBvYmplY3RzIGJ5IHNjb3JlLCBoaWdoZXN0IGZpcnN0LlxuICAgKi9cbiAgcmV0dXJuIHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZVxuICB9KVxufVxuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBpbmRleCBmb3IgSlNPTiBzZXJpYWxpemF0aW9uLlxuICpcbiAqIFRoZSBzY2hlbWEgZm9yIHRoaXMgSlNPTiBibG9iIHdpbGwgYmUgZGVzY3JpYmVkIGluIGFcbiAqIHNlcGFyYXRlIEpTT04gc2NoZW1hIGZpbGUuXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleClcbiAgICAuc29ydCgpXG4gICAgLm1hcChmdW5jdGlvbiAodGVybSkge1xuICAgICAgcmV0dXJuIFt0ZXJtLCB0aGlzLmludmVydGVkSW5kZXhbdGVybV1dXG4gICAgfSwgdGhpcylcblxuICB2YXIgZmllbGRWZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG4gICAgLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gW3JlZiwgdGhpcy5maWVsZFZlY3RvcnNbcmVmXS50b0pTT04oKV1cbiAgICB9LCB0aGlzKVxuXG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogbHVuci52ZXJzaW9uLFxuICAgIGZpZWxkczogdGhpcy5maWVsZHMsXG4gICAgZmllbGRWZWN0b3JzOiBmaWVsZFZlY3RvcnMsXG4gICAgaW52ZXJ0ZWRJbmRleDogaW52ZXJ0ZWRJbmRleCxcbiAgICBwaXBlbGluZTogdGhpcy5waXBlbGluZS50b0pTT04oKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpemVkSW5kZXggLSBBIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5JbmRleC5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRJbmRleCkge1xuICB2YXIgYXR0cnMgPSB7fSxcbiAgICAgIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgc2VyaWFsaXplZFZlY3RvcnMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRWZWN0b3JzLFxuICAgICAgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleCA9IHNlcmlhbGl6ZWRJbmRleC5pbnZlcnRlZEluZGV4LFxuICAgICAgdG9rZW5TZXRCdWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlcixcbiAgICAgIHBpcGVsaW5lID0gbHVuci5QaXBlbGluZS5sb2FkKHNlcmlhbGl6ZWRJbmRleC5waXBlbGluZSlcblxuICBpZiAoc2VyaWFsaXplZEluZGV4LnZlcnNpb24gIT0gbHVuci52ZXJzaW9uKSB7XG4gICAgbHVuci51dGlscy53YXJuKFwiVmVyc2lvbiBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgc2VyaWFsaXNlZCBpbmRleC4gQ3VycmVudCB2ZXJzaW9uIG9mIGx1bnIgJ1wiICsgbHVuci52ZXJzaW9uICsgXCInIGRvZXMgbm90IG1hdGNoIHNlcmlhbGl6ZWQgaW5kZXggJ1wiICsgc2VyaWFsaXplZEluZGV4LnZlcnNpb24gKyBcIidcIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkVmVjdG9yc1tpXSxcbiAgICAgICAgcmVmID0gdHVwbGVbMF0sXG4gICAgICAgIGVsZW1lbnRzID0gdHVwbGVbMV1cblxuICAgIGZpZWxkVmVjdG9yc1tyZWZdID0gbmV3IGx1bnIuVmVjdG9yKGVsZW1lbnRzKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4W2ldLFxuICAgICAgICB0ZXJtID0gdHVwbGVbMF0sXG4gICAgICAgIHBvc3RpbmcgPSB0dXBsZVsxXVxuXG4gICAgdG9rZW5TZXRCdWlsZGVyLmluc2VydCh0ZXJtKVxuICAgIGludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gIH1cblxuICB0b2tlblNldEJ1aWxkZXIuZmluaXNoKClcblxuICBhdHRycy5maWVsZHMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRzXG5cbiAgYXR0cnMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG4gIGF0dHJzLmludmVydGVkSW5kZXggPSBpbnZlcnRlZEluZGV4XG4gIGF0dHJzLnRva2VuU2V0ID0gdG9rZW5TZXRCdWlsZGVyLnJvb3RcbiAgYXR0cnMucGlwZWxpbmUgPSBwaXBlbGluZVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleChhdHRycylcbn1cbi8qIVxuICogbHVuci5CdWlsZGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLkJ1aWxkZXIgcGVyZm9ybXMgaW5kZXhpbmcgb24gYSBzZXQgb2YgZG9jdW1lbnRzIGFuZFxuICogcmV0dXJucyBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCByZWFkeSBmb3IgcXVlcnlpbmcuXG4gKlxuICogQWxsIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluZGV4IGlzIGRvbmUgdmlhIHRoZSBidWlsZGVyLCB0aGVcbiAqIGZpZWxkcyB0byBpbmRleCwgdGhlIGRvY3VtZW50IHJlZmVyZW5jZSwgdGhlIHRleHQgcHJvY2Vzc2luZ1xuICogcGlwZWxpbmUgYW5kIGRvY3VtZW50IHNjb3JpbmcgcGFyYW1ldGVycyBhcmUgYWxsIHNldCBvbiB0aGVcbiAqIGJ1aWxkZXIgYmVmb3JlIGluZGV4aW5nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9yZWYgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHJlZmVyZW5jZSBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IF9maWVsZHMgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGZpZWxkcyB0byBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBpbnZlcnRlZEluZGV4IC0gVGhlIGludmVydGVkIGluZGV4IG1hcHMgdGVybXMgdG8gZG9jdW1lbnQgZmllbGRzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50VGVybUZyZXF1ZW5jaWVzIC0gS2VlcHMgdHJhY2sgb2YgZG9jdW1lbnQgdGVybSBmcmVxdWVuY2llcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudExlbmd0aHMgLSBLZWVwcyB0cmFjayBvZiB0aGUgbGVuZ3RoIG9mIGRvY3VtZW50cyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge2x1bnIudG9rZW5pemVyfSB0b2tlbml6ZXIgLSBGdW5jdGlvbiBmb3Igc3BsaXR0aW5nIHN0cmluZ3MgaW50byB0b2tlbnMgZm9yIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBwaXBlbGluZSAtIFRoZSBwaXBlbGluZSBwZXJmb3JtcyB0ZXh0IHByb2Nlc3Npbmcgb24gdG9rZW5zIGJlZm9yZSBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gc2VhcmNoUGlwZWxpbmUgLSBBIHBpcGVsaW5lIGZvciBwcm9jZXNzaW5nIHNlYXJjaCB0ZXJtcyBiZWZvcmUgcXVlcnlpbmcgdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBLZWVwcyB0cmFjayBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyBpbmRleGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9iIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBmaWVsZCBsZW5ndGggbm9ybWFsaXphdGlvbiwgc2V0dGluZyB0aGlzIHRvIDAgZGlzYWJsZWQgbm9ybWFsaXphdGlvbiwgMSBmdWxseSBub3JtYWxpemVzIGZpZWxkIGxlbmd0aHMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuNzUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2sxIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBob3cgcXVpY2tseSBhbiBpbmNyZWFzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm0gZnJlcXVlbmN5IHNhdHVyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0ZXJtSW5kZXggLSBBIGNvdW50ZXIgaW5jcmVtZW50ZWQgZm9yIGVhY2ggdW5pcXVlIHRlcm0sIHVzZWQgdG8gaWRlbnRpZnkgYSB0ZXJtcyBwb3NpdGlvbiBpbiB0aGUgdmVjdG9yIHNwYWNlLlxuICogQHByb3BlcnR5IHthcnJheX0gbWV0YWRhdGFXaGl0ZWxpc3QgLSBBIGxpc3Qgb2YgbWV0YWRhdGEga2V5cyB0aGF0IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCBmb3IgZW50cnkgaW4gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlZiA9IFwiaWRcIlxuICB0aGlzLl9maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX2RvY3VtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzID0ge31cbiAgdGhpcy5maWVsZExlbmd0aHMgPSB7fVxuICB0aGlzLnRva2VuaXplciA9IGx1bnIudG9rZW5pemVyXG4gIHRoaXMucGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLnNlYXJjaFBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5kb2N1bWVudENvdW50ID0gMFxuICB0aGlzLl9iID0gMC43NVxuICB0aGlzLl9rMSA9IDEuMlxuICB0aGlzLnRlcm1JbmRleCA9IDBcbiAgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdCA9IFtdXG59XG5cbi8qKlxuICogU2V0cyB0aGUgZG9jdW1lbnQgZmllbGQgdXNlZCBhcyB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLiBFdmVyeSBkb2N1bWVudCBtdXN0IGhhdmUgdGhpcyBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIHRoaXMgZmllbGQgaW4gdGhlIGRvY3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgaWYgaXQgaXMgbm90IGEgc3RyaW5nIGl0IHdpbGwgYmVcbiAqIGNvZXJjZWQgaW50byBhIHN0cmluZyBieSBjYWxsaW5nIHRvU3RyaW5nLlxuICpcbiAqIFRoZSBkZWZhdWx0IHJlZiBpcyAnaWQnLlxuICpcbiAqIFRoZSByZWYgc2hvdWxkIF9ub3RfIGJlIGNoYW5nZWQgZHVyaW5nIGluZGV4aW5nLCBpdCBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgZG9jdW1lbnRzIGFyZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LiBDaGFuZ2luZyBpdCBkdXJpbmcgaW5kZXhpbmcgY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW50IHJlc3VsdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiAtIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgZmllbGQgaW4gdGhlIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5fcmVmID0gcmVmXG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqXG4gKiBMdW5yIGV4cGVjdHMgYSBmaWVsZCB0byBiZSBhdCB0aGUgdG9wIGxldmVsIG9mIGEgZG9jdW1lbnQsIGlmIGhvd2V2ZXIgdGhlIGZpZWxkXG4gKiBpcyBkZWVwbHkgbmVzdGVkIHdpdGhpbiBhIGRvY3VtZW50IGFuIGV4dHJhY3RvciBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBleHRyYWN0XG4gKiB0aGUgcmlnaHQgZmllbGQgZm9yIGluZGV4aW5nLlxuICpcbiAqIEBjYWxsYmFjayBmaWVsZEV4dHJhY3RvclxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCBiZWluZyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcmV0dXJucyB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5kZXhlZCBmb3IgdGhpcyBmaWVsZC5cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV4dHJhY3RpbmcgYSBuZXN0ZWQgZmllbGQ8L2NhcHRpb24+XG4gKiBmdW5jdGlvbiAoZG9jKSB7IHJldHVybiBkb2MubmVzdGVkLmZpZWxkIH1cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGUgbGlzdCBvZiBkb2N1bWVudCBmaWVsZHMgdGhhdCB3aWxsIGJlIGluZGV4ZWQuIEV2ZXJ5IGRvY3VtZW50IGJlaW5nXG4gKiBpbmRleGVkIHNob3VsZCBoYXZlIHRoaXMgZmllbGQuIE51bGwgdmFsdWVzIGZvciB0aGlzIGZpZWxkIGluIGluZGV4ZWQgZG9jdW1lbnRzIHdpbGxcbiAqIG5vdCBjYXVzZSBlcnJvcnMgYnV0IHdpbGwgbGltaXQgdGhlIGNoYW5jZSBvZiB0aGF0IGRvY3VtZW50IGJlaW5nIHJldHJpZXZlZCBieSBzZWFyY2hlcy5cbiAqXG4gKiBBbGwgZmllbGRzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgYWRkaW5nIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIEFkZGluZyBmaWVsZHMgYWZ0ZXJcbiAqIGEgZG9jdW1lbnQgaGFzIGJlZW4gaW5kZXhlZCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIGFscmVhZHkgaW5kZXhlZCBkb2N1bWVudHMuXG4gKlxuICogRmllbGRzIGNhbiBiZSBib29zdGVkIGF0IGJ1aWxkIHRpbWUuIFRoaXMgYWxsb3dzIHRlcm1zIHdpdGhpbiB0aGF0IGZpZWxkIHRvIGhhdmUgbW9yZVxuICogaW1wb3J0YW5jZSB3aGVuIHJhbmtpbmcgc2VhcmNoIHJlc3VsdHMuIFVzZSBhIGZpZWxkIGJvb3N0IHRvIHNwZWNpZnkgdGhhdCBtYXRjaGVzIHdpdGhpblxuICogb25lIGZpZWxkIGFyZSBtb3JlIGltcG9ydGFudCB0aGFuIG90aGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb2YgYSBmaWVsZCB0byBpbmRleCBpbiBhbGwgZG9jdW1lbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPcHRpb25hbCBhdHRyaWJ1dGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IFthdHRyaWJ1dGVzLmJvb3N0PTFdIC0gQm9vc3QgYXBwbGllZCB0byBhbGwgdGVybXMgd2l0aGluIHRoaXMgZmllbGQuXG4gKiBAcGFyYW0ge2ZpZWxkRXh0cmFjdG9yfSBbYXR0cmlidXRlcy5leHRyYWN0b3JdIC0gRnVuY3Rpb24gdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZpZWxkTmFtZSBjYW5ub3QgY29udGFpbiB1bnN1cHBvcnRlZCBjaGFyYWN0ZXJzICcvJ1xuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXR0cmlidXRlcykge1xuICBpZiAoL1xcLy8udGVzdChmaWVsZE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IgKFwiRmllbGQgJ1wiICsgZmllbGROYW1lICsgXCInIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyICcvJ1wiKVxuICB9XG5cbiAgdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0gPSBhdHRyaWJ1dGVzIHx8IHt9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gdHVuZSB0aGUgYW1vdW50IG9mIGZpZWxkIGxlbmd0aCBub3JtYWxpc2F0aW9uIHRoYXQgaXMgYXBwbGllZCB3aGVuXG4gKiBjYWxjdWxhdGluZyByZWxldmFuY2Ugc2NvcmVzLiBBIHZhbHVlIG9mIDAgd2lsbCBjb21wbGV0ZWx5IGRpc2FibGUgYW55IG5vcm1hbGlzYXRpb25cbiAqIGFuZCBhIHZhbHVlIG9mIDEgd2lsbCBmdWxseSBub3JtYWxpc2UgZmllbGQgbGVuZ3Rocy4gVGhlIGRlZmF1bHQgaXMgMC43NS4gVmFsdWVzIG9mIGJcbiAqIHdpbGwgYmUgY2xhbXBlZCB0byB0aGUgcmFuZ2UgMCAtIDEuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5iID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHRoaXMuX2IgPSAwXG4gIH0gZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgIHRoaXMuX2IgPSAxXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYiA9IG51bWJlclxuICB9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdGhhdCBjb250cm9scyB0aGUgc3BlZWQgYXQgd2hpY2ggYSByaXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybVxuICogZnJlcXVlbmN5IHNhdHVyYXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi4gU2V0dGluZyB0aGlzIHRvIGEgaGlnaGVyIHZhbHVlIHdpbGwgZ2l2ZVxuICogc2xvd2VyIHNhdHVyYXRpb24gbGV2ZWxzLCBhIGxvd2VyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHF1aWNrZXIgc2F0dXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmsxID0gZnVuY3Rpb24gKG51bWJlcikge1xuICB0aGlzLl9rMSA9IG51bWJlclxufVxuXG4vKipcbiAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXguXG4gKlxuICogQmVmb3JlIGFkZGluZyBmaWVsZHMgdG8gdGhlIGluZGV4IHRoZSBpbmRleCBzaG91bGQgaGF2ZSBiZWVuIGZ1bGx5IHNldHVwLCB3aXRoIHRoZSBkb2N1bWVudFxuICogcmVmIGFuZCBhbGwgZmllbGRzIHRvIGluZGV4IGFscmVhZHkgaGF2aW5nIGJlZW4gc3BlY2lmaWVkLlxuICpcbiAqIFRoZSBkb2N1bWVudCBtdXN0IGhhdmUgYSBmaWVsZCBuYW1lIGFzIHNwZWNpZmllZCBieSB0aGUgcmVmIChieSBkZWZhdWx0IHRoaXMgaXMgJ2lkJykgYW5kXG4gKiBpdCBzaG91bGQgaGF2ZSBhbGwgZmllbGRzIGRlZmluZWQgZm9yIGluZGV4aW5nLCB0aG91Z2ggbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90XG4gKiBjYXVzZSBlcnJvcnMuXG4gKlxuICogRW50aXJlIGRvY3VtZW50cyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBBcHBseWluZyBhIGJvb3N0IHRvIGEgZG9jdW1lbnQgaW5kaWNhdGVzIHRoYXRcbiAqIHRoaXMgZG9jdW1lbnQgc2hvdWxkIHJhbmsgaGlnaGVyIGluIHNlYXJjaCByZXN1bHRzIHRoYW4gb3RoZXIgZG9jdW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgdG8gYWRkIHRvIHRoZSBpbmRleC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGRvY1JlZiA9IGRvY1t0aGlzLl9yZWZdLFxuICAgICAgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIHRoaXMuX2RvY3VtZW50c1tkb2NSZWZdID0gYXR0cmlidXRlcyB8fCB7fVxuICB0aGlzLmRvY3VtZW50Q291bnQgKz0gMVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXSxcbiAgICAgICAgZXh0cmFjdG9yID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uZXh0cmFjdG9yLFxuICAgICAgICBmaWVsZCA9IGV4dHJhY3RvciA/IGV4dHJhY3Rvcihkb2MpIDogZG9jW2ZpZWxkTmFtZV0sXG4gICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5pemVyKGZpZWxkLCB7XG4gICAgICAgICAgZmllbGRzOiBbZmllbGROYW1lXVxuICAgICAgICB9KSxcbiAgICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1bih0b2tlbnMpLFxuICAgICAgICBmaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkTmFtZSksXG4gICAgICAgIGZpZWxkVGVybXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSA9IGZpZWxkVGVybXNcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gPSAwXG5cbiAgICAvLyBzdG9yZSB0aGUgbGVuZ3RoIG9mIHRoaXMgZmllbGQgZm9yIHRoaXMgZG9jdW1lbnRcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gKz0gdGVybXMubGVuZ3RoXG5cbiAgICAvLyBjYWxjdWxhdGUgdGVybSBmcmVxdWVuY2llcyBmb3IgdGhpcyBmaWVsZFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal1cblxuICAgICAgaWYgKGZpZWxkVGVybXNbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpZWxkVGVybXNbdGVybV0gPSAwXG4gICAgICB9XG5cbiAgICAgIGZpZWxkVGVybXNbdGVybV0gKz0gMVxuXG4gICAgICAvLyBhZGQgdG8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIC8vIGNyZWF0ZSBhbiBpbml0aWFsIHBvc3RpbmcgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwb3N0aW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICBwb3N0aW5nW1wiX2luZGV4XCJdID0gdGhpcy50ZXJtSW5kZXhcbiAgICAgICAgdGhpcy50ZXJtSW5kZXggKz0gMVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcG9zdGluZ1tmaWVsZHNba11dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW4gZW50cnkgZm9yIHRoaXMgdGVybS9maWVsZE5hbWUvZG9jUmVmIHRvIHRoZSBpbnZlcnRlZEluZGV4XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgYWxsIHdoaXRlbGlzdGVkIG1ldGFkYXRhIGFib3V0IHRoaXMgdG9rZW4gaW4gdGhlXG4gICAgICAvLyBpbnZlcnRlZCBpbmRleFxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUtleSA9IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3RbbF0sXG4gICAgICAgICAgICBtZXRhZGF0YSA9IHRlcm0ubWV0YWRhdGFbbWV0YWRhdGFLZXldXG5cbiAgICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldLnB1c2gobWV0YWRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhdmVyYWdlIGRvY3VtZW50IGxlbmd0aCBmb3IgdGhpcyBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZExlbmd0aHMpLFxuICAgICAgbnVtYmVyT2ZGaWVsZHMgPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgYWNjdW11bGF0b3IgPSB7fSxcbiAgICAgIGRvY3VtZW50c1dpdGhGaWVsZCA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkZpZWxkczsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lXG5cbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdIHx8IChkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdID0gMClcbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdICs9IDFcblxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSB8fCAoYWNjdW11bGF0b3JbZmllbGRdID0gMClcbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gKz0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdXG4gIH1cblxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkTmFtZV0gPSBhY2N1bXVsYXRvcltmaWVsZE5hbWVdIC8gZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkTmFtZV1cbiAgfVxuXG4gIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoID0gYWNjdW11bGF0b3Jcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSB2ZWN0b3Igc3BhY2UgbW9kZWwgb2YgZXZlcnkgZG9jdW1lbnQgdXNpbmcgbHVuci5WZWN0b3JcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZUZpZWxkVmVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyksXG4gICAgICBmaWVsZFJlZnNMZW5ndGggPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgdGVybUlkZkNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRSZWZzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGROYW1lID0gZmllbGRSZWYuZmllbGROYW1lLFxuICAgICAgICBmaWVsZExlbmd0aCA9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSxcbiAgICAgICAgZmllbGRWZWN0b3IgPSBuZXcgbHVuci5WZWN0b3IsXG4gICAgICAgIHRlcm1GcmVxdWVuY2llcyA9IHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdLFxuICAgICAgICB0ZXJtcyA9IE9iamVjdC5rZXlzKHRlcm1GcmVxdWVuY2llcyksXG4gICAgICAgIHRlcm1zTGVuZ3RoID0gdGVybXMubGVuZ3RoXG5cblxuICAgIHZhciBmaWVsZEJvb3N0ID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uYm9vc3QgfHwgMSxcbiAgICAgICAgZG9jQm9vc3QgPSB0aGlzLl9kb2N1bWVudHNbZmllbGRSZWYuZG9jUmVmXS5ib29zdCB8fCAxXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zTGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal0sXG4gICAgICAgICAgdGYgPSB0ZXJtRnJlcXVlbmNpZXNbdGVybV0sXG4gICAgICAgICAgdGVybUluZGV4ID0gdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLl9pbmRleCxcbiAgICAgICAgICBpZGYsIHNjb3JlLCBzY29yZVdpdGhQcmVjaXNpb25cblxuICAgICAgaWYgKHRlcm1JZGZDYWNoZVt0ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkZiA9IGx1bnIuaWRmKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSwgdGhpcy5kb2N1bWVudENvdW50KVxuICAgICAgICB0ZXJtSWRmQ2FjaGVbdGVybV0gPSBpZGZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkZiA9IHRlcm1JZGZDYWNoZVt0ZXJtXVxuICAgICAgfVxuXG4gICAgICBzY29yZSA9IGlkZiAqICgodGhpcy5fazEgKyAxKSAqIHRmKSAvICh0aGlzLl9rMSAqICgxIC0gdGhpcy5fYiArIHRoaXMuX2IgKiAoZmllbGRMZW5ndGggLyB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aFtmaWVsZE5hbWVdKSkgKyB0ZilcbiAgICAgIHNjb3JlICo9IGZpZWxkQm9vc3RcbiAgICAgIHNjb3JlICo9IGRvY0Jvb3N0XG4gICAgICBzY29yZVdpdGhQcmVjaXNpb24gPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkgLyAxMDAwXG4gICAgICAvLyBDb252ZXJ0cyAxLjIzNDU2Nzg5IHRvIDEuMjM0LlxuICAgICAgLy8gUmVkdWNpbmcgdGhlIHByZWNpc2lvbiBzbyB0aGF0IHRoZSB2ZWN0b3JzIHRha2UgdXAgbGVzc1xuICAgICAgLy8gc3BhY2Ugd2hlbiBzZXJpYWxpc2VkLiBEb2luZyBpdCBub3cgc28gdGhhdCB0aGV5IGJlaGF2ZVxuICAgICAgLy8gdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlciBzZXJpYWxpc2F0aW9uLiBBbHNvLCB0aGlzIGlzXG4gICAgICAvLyB0aGUgZmFzdGVzdCBhcHByb2FjaCB0byByZWR1Y2luZyBhIG51bWJlcidzIHByZWNpc2lvbiBpblxuICAgICAgLy8gSmF2YVNjcmlwdC5cblxuICAgICAgZmllbGRWZWN0b3IuaW5zZXJ0KHRlcm1JbmRleCwgc2NvcmVXaXRoUHJlY2lzaW9uKVxuICAgIH1cblxuICAgIGZpZWxkVmVjdG9yc1tmaWVsZFJlZl0gPSBmaWVsZFZlY3RvclxuICB9XG5cbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IG9mIGFsbCB0b2tlbnMgaW4gdGhlIGluZGV4IHVzaW5nIGx1bnIuVG9rZW5TZXRcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZVRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQXJyYXkoXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KS5zb3J0KClcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgaW5kZXgsIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXguXG4gKlxuICogVGhpcyBjb21wbGV0ZXMgdGhlIGluZGV4aW5nIHByb2Nlc3MgYW5kIHNob3VsZCBvbmx5IGJlIGNhbGxlZFxuICogb25jZSBhbGwgZG9jdW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocygpXG4gIHRoaXMuY3JlYXRlRmllbGRWZWN0b3JzKClcbiAgdGhpcy5jcmVhdGVUb2tlblNldCgpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KHtcbiAgICBpbnZlcnRlZEluZGV4OiB0aGlzLmludmVydGVkSW5kZXgsXG4gICAgZmllbGRWZWN0b3JzOiB0aGlzLmZpZWxkVmVjdG9ycyxcbiAgICB0b2tlblNldDogdGhpcy50b2tlblNldCxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcyksXG4gICAgcGlwZWxpbmU6IHRoaXMuc2VhcmNoUGlwZWxpbmVcbiAgfSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGx1Z2luIHRvIHRoZSBpbmRleCBidWlsZGVyLlxuICpcbiAqIEEgcGx1Z2luIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqIFBsdWdpbnMgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXNlIG9yIGV4dGVuZCB0aGUgYmVoYXZpb3VyIG9mIHRoZSBpbmRleFxuICogaW4gc29tZSB3YXkuIEEgcGx1Z2luIGlzIGp1c3QgYSBmdW5jdGlvbiwgdGhhdCBlbmNhcHN1bGF0ZWQgdGhlIGN1c3RvbVxuICogYmVoYXZpb3VyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBidWlsZGluZyB0aGUgaW5kZXguXG4gKlxuICogVGhlIHBsdWdpbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBhcmd1bWVudCwgYWRkaXRpb25hbFxuICogYXJndW1lbnRzIGNhbiBhbHNvIGJlIHBhc3NlZCB3aGVuIGNhbGxpbmcgdXNlLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIFRoZSBwbHVnaW4gdG8gYXBwbHkuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgZm4uYXBwbHkodGhpcywgYXJncylcbn1cbi8qKlxuICogQ29udGFpbnMgYW5kIGNvbGxlY3RzIG1ldGFkYXRhIGFib3V0IGEgbWF0Y2hpbmcgZG9jdW1lbnQuXG4gKiBBIHNpbmdsZSBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSBpcyByZXR1cm5lZCBhcyBwYXJ0IG9mIGV2ZXJ5XG4gKiBsdW5yLkluZGV4flJlc3VsdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWV0YWRhdGEgLSBBIGNsb25lZCBjb2xsZWN0aW9uIG9mIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICB2YXIgY2xvbmVkTWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEgfHwge30pXG5cbiAgLy8gQ2xvbmluZyB0aGUgbWV0YWRhdGEgdG8gcHJldmVudCB0aGUgb3JpZ2luYWxcbiAgLy8gYmVpbmcgbXV0YXRlZCBkdXJpbmcgbWF0Y2ggZGF0YSBjb21iaW5hdGlvbi5cbiAgLy8gTWV0YWRhdGEgaXMga2VwdCBpbiBhbiBhcnJheSB3aXRoaW4gdGhlIGludmVydGVkXG4gIC8vIGluZGV4IHNvIGNsb25pbmcgdGhlIGRhdGEgY2FuIGJlIGRvbmUgd2l0aFxuICAvLyBBcnJheSNzbGljZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cbiAgICBjbG9uZWRNZXRhZGF0YVtrZXldID0gbWV0YWRhdGFba2V5XS5zbGljZSgpXG4gIH1cblxuICB0aGlzLm1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gY2xvbmVkTWV0YWRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpbGwgYmUgY3JlYXRlZCBmb3IgZXZlcnkgdGVybSB0aGF0IG1hdGNoZXMgYVxuICogZG9jdW1lbnQuIEhvd2V2ZXIgb25seSBvbmUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgaW4gYSBsdW5yLkluZGV4flJlc3VsdC4gVGhpc1xuICogbWV0aG9kIGNvbWJpbmVzIG1ldGFkYXRhIGZyb20gYW5vdGhlciBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aXRoIHRoaXNcbiAqIG9iamVjdHMgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHtsdW5yLk1hdGNoRGF0YX0gb3RoZXJNYXRjaERhdGEgLSBBbm90aGVyIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEgdG8gbWVyZ2Ugd2l0aCB0aGlzIG9uZS5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlck1hdGNoRGF0YSkge1xuICB2YXIgdGVybXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXSxcbiAgICAgICAgZmllbGRzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV0pXG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tqXSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdKVxuXG4gICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba11cblxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gb3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtZXRhZGF0YSBmb3IgYSB0ZXJtL2ZpZWxkIHBhaXIgdG8gdGhpcyBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIGlmICghKHRlcm0gaW4gdGhpcy5tZXRhZGF0YSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghKGZpZWxkIGluIHRoaXMubWV0YWRhdGFbdGVybV0pKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuXG4gICAgaWYgKGtleSBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG1ldGFkYXRhW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBtZXRhZGF0YVtrZXldXG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgbHVuci5RdWVyeSBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyB3YXkgb2YgZGVmaW5pbmcgcXVlcmllcyB0byBiZSBwZXJmb3JtZWRcbiAqIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogUHJlZmVyIGNvbnN0cnVjdGluZyBhIGx1bnIuUXVlcnkgdXNpbmcgdGhlIHtAbGluayBsdW5yLkluZGV4I3F1ZXJ5fSBtZXRob2RcbiAqIHNvIHRoZSBxdWVyeSBvYmplY3QgaXMgcHJlLWluaXRpYWxpemVkIHdpdGggdGhlIHJpZ2h0IGluZGV4IGZpZWxkcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7bHVuci5RdWVyeX5DbGF1c2VbXX0gY2xhdXNlcyAtIEFuIGFycmF5IG9mIHF1ZXJ5IGNsYXVzZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBhbGxGaWVsZHMgLSBBbiBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIGZpZWxkcyBpbiBhIGx1bnIuSW5kZXguXG4gKi9cbmx1bnIuUXVlcnkgPSBmdW5jdGlvbiAoYWxsRmllbGRzKSB7XG4gIHRoaXMuY2xhdXNlcyA9IFtdXG4gIHRoaXMuYWxsRmllbGRzID0gYWxsRmllbGRzXG59XG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBhdXRvbWF0aWMgd2lsZGNhcmQgaW5zZXJ0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB3aWxkY2FyZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgdGVybSB3aXRob3V0IGhhdmluZyB0byBtYW51YWxseSBkbyBhbnkgc3RyaW5nXG4gKiBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSB3aWxkY2FyZCBjb25zdGFudHMgY2FuIGJlIGJpdHdpc2UgY29tYmluZWQgdG8gc2VsZWN0IGJvdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGRlZmF1bHRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5OT05FIC0gVGhlIHRlcm0gd2lsbCBoYXZlIG5vIHdpbGRjYXJkcyBpbnNlcnRlZCwgdGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5MRUFESU5HIC0gUHJlcGVuZCB0aGUgdGVybSB3aXRoIGEgd2lsZGNhcmQsIHVubGVzcyBhIGxlYWRpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5UUkFJTElORyAtIEFwcGVuZCBhIHdpbGRjYXJkIHRvIHRoZSB0ZXJtLCB1bmxlc3MgYSB0cmFpbGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHtcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyB8IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cblxubHVuci5RdWVyeS53aWxkY2FyZCA9IG5ldyBTdHJpbmcgKFwiKlwiKVxubHVuci5RdWVyeS53aWxkY2FyZC5OT05FID0gMFxubHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HID0gMVxubHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyA9IDJcblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIHByZXNlbmNlIGEgdGVybSBtdXN0IGhhdmUgaW4gbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGVudW0ge251bWJlcn1cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggcmVxdWlyZWQgcHJlc2VuY2U8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHByZXNlbmNlOiBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEIH0pXG4gKi9cbmx1bnIuUXVlcnkucHJlc2VuY2UgPSB7XG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBvcHRpb25hbCwgdGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIE9QVElPTkFMOiAxLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyByZXF1aXJlZCwgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUkVRVUlSRUQ6IDIsXG5cbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIHByb2hpYml0ZWQsIGRvY3VtZW50cyB0aGF0IGRvIGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUFJPSElCSVRFRDogM1xufVxuXG4vKipcbiAqIEEgc2luZ2xlIGNsYXVzZSBpbiBhIHtAbGluayBsdW5yLlF1ZXJ5fSBjb250YWlucyBhIHRlcm0gYW5kIGRldGFpbHMgb24gaG93IHRvXG4gKiBtYXRjaCB0aGF0IHRlcm0gYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmllbGRzIC0gVGhlIGZpZWxkcyBpbiBhbiBpbmRleCB0aGlzIGNsYXVzZSBzaG91bGQgYmUgbWF0Y2hlZCBhZ2FpbnN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtib29zdD0xXSAtIEFueSBib29zdCB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gbWF0Y2hpbmcgdGhpcyBjbGF1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VkaXREaXN0YW5jZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIGZ1enp5IG1hdGNoaW5nIGFwcGxpZWQsIGFuZCBob3cgZnV6enkgdGhlIG1hdGNoIHNob3VsZCBiZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3VzZVBpcGVsaW5lXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpbGRjYXJkPWx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIHdpbGRjYXJkcyBhcHBlbmRlZCBvciBwcmVwZW5kZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZXNlbmNlPWx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxdIC0gVGhlIHRlcm1zIHByZXNlbmNlIGluIGFueSBtYXRjaGluZyBkb2N1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBBZGRzIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfSB0byB0aGlzIHF1ZXJ5LlxuICpcbiAqIFVubGVzcyB0aGUgY2xhdXNlIGNvbnRhaW5zIHRoZSBmaWVsZHMgdG8gYmUgbWF0Y2hlZCBhbGwgZmllbGRzIHdpbGwgYmUgbWF0Y2hlZC4gSW4gYWRkaXRpb25cbiAqIGEgZGVmYXVsdCBib29zdCBvZiAxIGlzIGFwcGxpZWQgdG8gdGhlIGNsYXVzZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl+Q2xhdXNlfSBjbGF1c2UgLSBUaGUgY2xhdXNlIHRvIGFkZCB0byB0aGlzIHF1ZXJ5LlxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCEoJ2ZpZWxkcycgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5maWVsZHMgPSB0aGlzLmFsbEZpZWxkc1xuICB9XG5cbiAgaWYgKCEoJ2Jvb3N0JyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmJvb3N0ID0gMVxuICB9XG5cbiAgaWYgKCEoJ3VzZVBpcGVsaW5lJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnVzZVBpcGVsaW5lID0gdHJ1ZVxuICB9XG5cbiAgaWYgKCEoJ3dpbGRjYXJkJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLndpbGRjYXJkID0gbHVuci5RdWVyeS53aWxkY2FyZC5OT05FXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORykgJiYgKGNsYXVzZS50ZXJtLmNoYXJBdCgwKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCIqXCIgKyBjbGF1c2UudGVybVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HKSAmJiAoY2xhdXNlLnRlcm0uc2xpY2UoLTEpICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIlwiICsgY2xhdXNlLnRlcm0gKyBcIipcIlxuICB9XG5cbiAgaWYgKCEoJ3ByZXNlbmNlJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5PUFRJT05BTFxuICB9XG5cbiAgdGhpcy5jbGF1c2VzLnB1c2goY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQSBuZWdhdGVkIHF1ZXJ5IGlzIG9uZSBpbiB3aGljaCBldmVyeSBjbGF1c2UgaGFzIGEgcHJlc2VuY2Ugb2ZcbiAqIHByb2hpYml0ZWQuIFRoZXNlIHF1ZXJpZXMgcmVxdWlyZSBzb21lIHNwZWNpYWwgcHJvY2Vzc2luZyB0byByZXR1cm5cbiAqIHRoZSBleHBlY3RlZCByZXN1bHRzLlxuICpcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuaXNOZWdhdGVkID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNsYXVzZXNbaV0ucHJlc2VuY2UgIT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSB0ZXJtIHRvIHRoZSBjdXJyZW50IHF1ZXJ5LCB1bmRlciB0aGUgY292ZXJzIHRoaXMgd2lsbCBjcmVhdGUgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9XG4gKiB0byB0aGUgbGlzdCBvZiBjbGF1c2VzIHRoYXQgbWFrZSB1cCB0aGlzIHF1ZXJ5LlxuICpcbiAqIFRoZSB0ZXJtIGlzIHVzZWQgYXMgaXMsIGkuZS4gbm8gdG9rZW5pemF0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIGJ5IHRoaXMgbWV0aG9kLiBJbnN0ZWFkIGNvbnZlcnNpb25cbiAqIHRvIGEgdG9rZW4gb3IgdG9rZW4tbGlrZSBzdHJpbmcgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gKlxuICogVGhlIHRlcm0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgLiBNdWx0aXBsZSB0ZXJtcyBjYW4gYmUgcGFzc2VkIGFzIGFuXG4gKiBhcnJheSwgZWFjaCB0ZXJtIGluIHRoZSBhcnJheSB3aWxsIHNoYXJlIHRoZSBzYW1lIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119IHRlcm0gLSBUaGUgdGVybShzKSB0byBhZGQgdG8gdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBxdWVyeSBjbGF1c2UuXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnk8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIpXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5IGFuZCBzcGVjaWZ5aW5nIHNlYXJjaCBmaWVsZHMsIHRlcm0gYm9vc3QgYW5kIGF1dG9tYXRpYyB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIiwge1xuICogICBmaWVsZHM6IFtcInRpdGxlXCJdLFxuICogICBib29zdDogMTAsXG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+dXNpbmcgbHVuci50b2tlbml6ZXIgdG8gY29udmVydCBhIHN0cmluZyB0byB0b2tlbnMgYmVmb3JlIHVzaW5nIHRoZW0gYXMgdGVybXM8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKGx1bnIudG9rZW5pemVyKFwiZm9vIGJhclwiKSlcbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUudGVybSA9IGZ1bmN0aW9uICh0ZXJtLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlcm0pKSB7XG4gICAgdGVybS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHRoaXMudGVybSh0LCBsdW5yLnV0aWxzLmNsb25lKG9wdGlvbnMpKSB9LCB0aGlzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgY2xhdXNlID0gb3B0aW9ucyB8fCB7fVxuICBjbGF1c2UudGVybSA9IHRlcm0udG9TdHJpbmcoKVxuXG4gIHRoaXMuY2xhdXNlKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxubHVuci5RdWVyeVBhcnNlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3RhcnQsIGVuZCkge1xuICB0aGlzLm5hbWUgPSBcIlF1ZXJ5UGFyc2VFcnJvclwiXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gIHRoaXMuZW5kID0gZW5kXG59XG5cbmx1bnIuUXVlcnlQYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxubHVuci5RdWVyeUxleGVyID0gZnVuY3Rpb24gKHN0cikge1xuICB0aGlzLmxleGVtZXMgPSBbXVxuICB0aGlzLnN0ciA9IHN0clxuICB0aGlzLmxlbmd0aCA9IHN0ci5sZW5ndGhcbiAgdGhpcy5wb3MgPSAwXG4gIHRoaXMuc3RhcnQgPSAwXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucyA9IFtdXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnNsaWNlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ViU2xpY2VzID0gW10sXG4gICAgICBzbGljZVN0YXJ0ID0gdGhpcy5zdGFydCxcbiAgICAgIHNsaWNlRW5kID0gdGhpcy5wb3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWNlRW5kID0gdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zW2ldXG4gICAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpKVxuICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgfVxuXG4gIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHRoaXMucG9zKSlcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aCA9IDBcblxuICByZXR1cm4gc3ViU2xpY2VzLmpvaW4oJycpXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHRoaXMubGV4ZW1lcy5wdXNoKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0cjogdGhpcy5zbGljZVN0cmluZygpLFxuICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgIGVuZDogdGhpcy5wb3NcbiAgfSlcblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lc2NhcGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5wdXNoKHRoaXMucG9zIC0gMSlcbiAgdGhpcy5wb3MgKz0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIuRU9TXG4gIH1cblxuICB2YXIgY2hhciA9IHRoaXMuc3RyLmNoYXJBdCh0aGlzLnBvcylcbiAgdGhpcy5wb3MgKz0gMVxuICByZXR1cm4gY2hhclxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgLSB0aGlzLnN0YXJ0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdGFydCA9PSB0aGlzLnBvcykge1xuICAgIHRoaXMucG9zICs9IDFcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmJhY2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb3MgLT0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmFjY2VwdERpZ2l0UnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhciwgY2hhckNvZGVcblxuICBkbyB7XG4gICAgY2hhciA9IHRoaXMubmV4dCgpXG4gICAgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgfSB3aGlsZSAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KVxuXG4gIGlmIChjaGFyICE9IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICB0aGlzLmJhY2t1cCgpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5tb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmxlbmd0aFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIuRU9TID0gJ0VPUydcbmx1bnIuUXVlcnlMZXhlci5GSUVMRCA9ICdGSUVMRCdcbmx1bnIuUXVlcnlMZXhlci5URVJNID0gJ1RFUk0nXG5sdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSA9ICdFRElUX0RJU1RBTkNFJ1xubHVuci5RdWVyeUxleGVyLkJPT1NUID0gJ0JPT1NUJ1xubHVuci5RdWVyeUxleGVyLlBSRVNFTkNFID0gJ1BSRVNFTkNFJ1xuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuYmFja3VwKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQpXG4gIGxleGVyLmlnbm9yZSgpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDEpIHtcbiAgICBsZXhlci5iYWNrdXAoKVxuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cblxuICBsZXhlci5pZ25vcmUoKVxuXG4gIGlmIChsZXhlci5tb3JlKCkpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSlcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhCb29zdCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkJPT1NUKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVPUyA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyB0aGUgc2VwYXJhdG9yIHVzZWQgd2hlbiB0b2tlbmlzaW5nIGZpZWxkc1xuLy8gd2l0aGluIGEgZG9jdW1lbnQuIFRoZXNlIHNob3VsZCBtYXRjaCBvdGhlcndpc2UgaXQgaXNcbi8vIG5vdCBwb3NzaWJsZSB0byBzZWFyY2ggZm9yIHNvbWUgdG9rZW5zIHdpdGhpbiBhIGRvY3VtZW50LlxuLy9cbi8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdXNlciB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBvbiB0aGVcbi8vIHRva2VuaXplciBzbyBpdCBfbWlnaHRfIGNsYXNoIHdpdGggYW55IG90aGVyIG9mIHRoZSBzcGVjaWFsXG4vLyBjaGFyYWN0ZXJzIGFscmVhZHkgdXNlZCB3aXRoaW4gdGhlIHNlYXJjaCBzdHJpbmcsIGUuZy4gOi5cbi8vXG4vLyBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3IgaW5cbi8vIHN1Y2ggYSB3YXkgdGhhdCBtYWtlcyBzb21lIHdvcmRzIHVuc2VhcmNoYWJsZSB1c2luZyBhIHNlYXJjaFxuLy8gc3RyaW5nLlxubHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IgPSBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JcblxubHVuci5RdWVyeUxleGVyLmxleFRleHQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY2hhciA9IGxleGVyLm5leHQoKVxuXG4gICAgaWYgKGNoYXIgPT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFT1NcbiAgICB9XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVyIGlzICdcXCdcbiAgICBpZiAoY2hhci5jaGFyQ29kZUF0KDApID09IDkyKSB7XG4gICAgICBsZXhlci5lc2NhcGVDaGFyYWN0ZXIoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIjpcIikge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZFxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiflwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiXlwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEJvb3N0XG4gICAgfVxuXG4gICAgLy8gXCIrXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcmVxdWlyZWRcbiAgICAvLyBjaGVja2luZyBmb3IgbGVuZ3RoIHRvIGVuc3VyZSB0aGF0IG9ubHlcbiAgICAvLyBsZWFkaW5nIFwiK1wiIGFyZSBjb25zaWRlcmVkXG4gICAgaWYgKGNoYXIgPT0gXCIrXCIgJiYgbGV4ZXIud2lkdGgoKSA9PT0gMSkge1xuICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgICB9XG5cbiAgICAvLyBcIi1cIiBpbmRpY2F0ZXMgdGVybSBwcmVzZW5jZSBpcyBwcm9oaWJpdGVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIi1cIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiLVwiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgaWYgKGNoYXIubWF0Y2gobHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRlcm1cbiAgICB9XG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIHF1ZXJ5KSB7XG4gIHRoaXMubGV4ZXIgPSBuZXcgbHVuci5RdWVyeUxleGVyIChzdHIpXG4gIHRoaXMucXVlcnkgPSBxdWVyeVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxuICB0aGlzLmxleGVtZUlkeCA9IDBcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV4ZXIucnVuKClcbiAgdGhpcy5sZXhlbWVzID0gdGhpcy5sZXhlci5sZXhlbWVzXG5cbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeVBhcnNlci5wYXJzZUNsYXVzZVxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnF1ZXJ5XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBlZWtMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxleGVtZXNbdGhpcy5sZXhlbWVJZHhdXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZXhlbWUgPSB0aGlzLnBlZWtMZXhlbWUoKVxuICB0aGlzLmxleGVtZUlkeCArPSAxXG4gIHJldHVybiBsZXhlbWVcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUubmV4dENsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbXBsZXRlZENsYXVzZSA9IHRoaXMuY3VycmVudENsYXVzZVxuICB0aGlzLnF1ZXJ5LmNsYXVzZShjb21wbGV0ZWRDbGF1c2UpXG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGVkIGVpdGhlciBhIGZpZWxkIG9yIGEgdGVybSwgZm91bmQgXCIgKyBsZXhlbWUudHlwZVxuXG4gICAgICBpZiAobGV4ZW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSAnXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnN0cikge1xuICAgIGNhc2UgXCItXCI6XG4gICAgICBwYXJzZXIuY3VycmVudENsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiK1wiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgcHJlc2VuY2Ugb3BlcmF0b3InXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwYXJzZXIucXVlcnkuYWxsRmllbGRzLmluZGV4T2YobGV4ZW1lLnN0cikgPT0gLTEpIHtcbiAgICB2YXIgcG9zc2libGVGaWVsZHMgPSBwYXJzZXIucXVlcnkuYWxsRmllbGRzLm1hcChmdW5jdGlvbiAoZikgeyByZXR1cm4gXCInXCIgKyBmICsgXCInXCIgfSkuam9pbignLCAnKSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgZmllbGQgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJywgcG9zc2libGUgZmllbGRzOiBcIiArIHBvc3NpYmxlRmllbGRzXG5cbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZmllbGRzID0gW2xleGVtZS5zdHJdXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLnRlcm0gPSBsZXhlbWUuc3RyLnRvTG93ZXJDYXNlKClcblxuICBpZiAobGV4ZW1lLnN0ci5pbmRleE9mKFwiKlwiKSAhPSAtMSkge1xuICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnVzZVBpcGVsaW5lID0gZmFsc2VcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVkaXREaXN0YW5jZSA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihlZGl0RGlzdGFuY2UpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZWRpdCBkaXN0YW5jZSBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5lZGl0RGlzdGFuY2UgPSBlZGl0RGlzdGFuY2VcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJvb3N0ID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGJvb3N0KSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImJvb3N0IG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmJvb3N0ID0gYm9vc3RcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbiAgLyoqXG4gICAqIGV4cG9ydCB0aGUgbW9kdWxlIHZpYSBBTUQsIENvbW1vbkpTIG9yIGFzIGEgYnJvd3NlciBnbG9iYWxcbiAgICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgICovXG4gIDsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoZmFjdG9yeSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLyoqXG4gICAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAqIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgKiBsaWtlIE5vZGUuXG4gICAgICAgKi9cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICByb290Lmx1bnIgPSBmYWN0b3J5KClcbiAgICB9XG4gIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAgKiBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJldHVybiBsdW5yXG4gIH0pKVxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuL1NpZGViYXIvUG9zaXRpb25cIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBvc2l0aW9uXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBzaWRlYmFycyB0byBsb2NrZWQgc3RhdGUgYW5kIGxpbWl0IGhlaWdodCB0byBwYXJlbnQgbm9kZVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTaWRlYmFyXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gcGFyZW50XyAtIFNpZGViYXIgY29udGFpbmVyXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRfIC0gQ3VycmVudCBzaWRlYmFyIGhlaWdodFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBwYWRfIC0gUGFkIHdoZW4gaGVhZGVyIGlzIGZpeGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcclxuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICEocmVmLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuICAgIHRoaXMucGFyZW50XyA9IHJlZi5wYXJlbnROb2RlXHJcblxyXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXHJcbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcclxuICAgICAgOiBoZWFkZXJcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGN1cnJlbnQgaGVpZ2h0IGFuZCB0ZXN0IHdoZXRoZXIgaGVhZGVyIGlzIGZpeGVkICovXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICB0aGlzLnBhZF8gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhlYWRlcl8pLnBvc2l0aW9uID09PSBcImZpeGVkXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgc2lkZWJhciBzdGF0ZVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgY29uc3QgdG9wID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxyXG4gICAgICB0aGlzLnBhcmVudF8uY2hpbGRyZW4sIChvZmZzZXQsIGNoaWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG9mZnNldCwgY2hpbGQub2Zmc2V0VG9wKVxyXG4gICAgICB9LCAwKVxyXG5cclxuICAgIC8qIFNldCBsb2NrIG9mZnNldCBmb3IgZWxlbWVudCB3aXRoIGxhcmdlc3QgdG9wIG9mZnNldCAqL1xyXG4gICAgdGhpcy5vZmZzZXRfID0gdG9wIC0gKHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwKVxyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XHJcbiAgICpcclxuICAgKiBUaGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSB3aW5kb3cgKD0gdGhlIHZpc2libGUgYXJlYSkgaXMgdGhlIG1heGltdW1cclxuICAgKiBwb3NzaWJsZSBoZWlnaHQgZm9yIHRoZSBzdHJldGNoaW5nIHNpZGViYXIuIFRoaXMgaGVpZ2h0IG11c3QgYmUgZGVkdWN0ZWRcclxuICAgKiBieSB0aGUgaGVpZ2h0IG9mIHRoZSBmaXhlZCBoZWFkZXIgKDU2cHgpLiBEZXBlbmRpbmcgb24gdGhlIHBhZ2UgeS1vZmZzZXQsXHJcbiAgICogdGhlIHRvcCBvZmZzZXQgb2YgdGhlIHNpZGViYXIgbXVzdCBiZSB0YWtlbiBpbnRvIGFjY291bnQsIGFzIHdlbGwgYXMgdGhlXHJcbiAgICogY2FzZSB3aGVyZSB0aGUgd2luZG93IGlzIHNjcm9sbGVkIGJleW9uZCB0aGUgc2lkZWJhciBjb250YWluZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50P30gZXYgLSBFdmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ICA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgIC8qIFVwZGF0ZSBvZmZzZXQsIGluIGNhc2Ugd2luZG93IGlzIHJlc2l6ZWQgKi9cclxuICAgIGlmIChldiAmJiBldi50eXBlID09PSBcInJlc2l6ZVwiKVxyXG4gICAgICB0aGlzLnNldHVwKClcclxuXHJcbiAgICAvKiBTZXQgYm91bmRzIG9mIHNpZGViYXIgY29udGFpbmVyIC0gbXVzdCBiZSBjYWxjdWxhdGVkIG9uIGV2ZXJ5IHJ1biwgYXNcclxuICAgICAgIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgbWlnaHQgY2hhbmdlIGR1ZSB0byBsb2FkaW5nIGltYWdlcyBldGMuICovXHJcbiAgICBjb25zdCBib3VuZHMgPSB7XHJcbiAgICAgIHRvcDogdGhpcy5wYWRfID8gdGhpcy5oZWFkZXJfLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgIGJvdHRvbTogdGhpcy5wYXJlbnRfLm9mZnNldFRvcCArIHRoaXMucGFyZW50Xy5vZmZzZXRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgbmV3IG9mZnNldCBhbmQgaGVpZ2h0ICovXHJcbiAgICBjb25zdCBoZWlnaHQgPSB2aXNpYmxlIC0gYm91bmRzLnRvcFxyXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgdGhpcy5vZmZzZXRfIC0gb2Zmc2V0KVxyXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgb2Zmc2V0ICsgdmlzaWJsZSAtIGJvdW5kcy5ib3R0b20pXHJcblxyXG4gICAgLyogSWYgaGVpZ2h0IGNoYW5nZWQsIHVwZGF0ZSBlbGVtZW50ICovXHJcbiAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodF8pXHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaGVpZ2h0XyA9IGhlaWdodH1weGBcclxuXHJcbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSBsb2NrZWQsIGFzIHdlJ3JlIGJlbG93IHBhcmVudCBvZmZzZXQgKi9cclxuICAgIGlmIChvZmZzZXQgPj0gdGhpcy5vZmZzZXRfKSB7XHJcbiAgICAgIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgIT09IFwibG9ja1wiKVxyXG4gICAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXHJcblxyXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgdW5sb2NrZWQsIGlmIGxvY2tlZCAqL1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKSB7XHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBcIlwiXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TaWRlYmFyL1Bvc2l0aW9uLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBBZGFwdGVyIGZyb20gXCIuL1NvdXJjZS9BZGFwdGVyXCJcclxuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSBcIi4vU291cmNlL1JlcG9zaXRvcnlcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEFkYXB0ZXIsXHJcbiAgUmVwb3NpdG9yeVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9BZGFwdGVyL0dpdEh1YlwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgR2l0SHViXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBBYnN0cmFjdCBmcm9tIFwiLi9BYnN0cmFjdFwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdEh1YiBleHRlbmRzIEFic3RyYWN0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiBmcm9tIEdpdEh1YlxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZV8gLSBOYW1lIG9mIHRoZSByZXBvc2l0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEFuY2hvckVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBzdXBlcihlbClcclxuXHJcbiAgICAvKiBFeHRyYWN0IHVzZXIgKGFuZCByZXBvc2l0b3J5IG5hbWUpIGZyb20gVVJMLCBhcyB3ZSBoYXZlIHRvIHF1ZXJ5IGZvciBhbGxcclxuICAgICAgIHJlcG9zaXRvcmllcywgdG8gb21pdCA0MDQgZXJyb3JzIGZvciBwcml2YXRlIHJlcG9zaXRvcmllcyAqL1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eLitnaXRodWJcXC5jb21cXC8oW14vXSspXFwvPyhbXi9dKyk/LiokL1xyXG4gICAgICAuZXhlYyh0aGlzLmJhc2VfKVxyXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgY29uc3QgWywgdXNlciwgbmFtZV0gPSBtYXRjaGVzXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGJhc2UgVVJMIGFuZCByZXBvc2l0b3J5IG5hbWUgKi9cclxuICAgICAgdGhpcy5iYXNlXyA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcn0vcmVwb3NgXHJcbiAgICAgIHRoaXMubmFtZV8gPSBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCByZWxldmFudCByZXBvc2l0b3J5IGluZm9ybWF0aW9uIGZyb20gR2l0SHViXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9taXNlIHJldHVybmluZyBhbiBhcnJheSBvZiBmYWN0c1xyXG4gICAqL1xyXG4gIGZldGNoXygpIHtcclxuICAgIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2UgPSAwKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VffT9wZXJfcGFnZT0zMCZwYWdlPSR7cGFnZX1gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3JcclxuXHJcbiAgICAgICAgICAvKiBEaXNwbGF5IG51bWJlciBvZiBzdGFycyBhbmQgZm9ya3MsIGlmIHJlcG9zaXRvcnkgaXMgZ2l2ZW4gKi9cclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVfKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcG8gPSBkYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMubmFtZV8pXHJcbiAgICAgICAgICAgIGlmICghcmVwbyAmJiBkYXRhLmxlbmd0aCA9PT0gMzApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhZ2luYXRlKHBhZ2UgKyAxKVxyXG5cclxuICAgICAgICAgICAgLyogSWYgd2UgZm91bmQgYSByZXBvLCBleHRyYWN0IHRoZSBmYWN0cyAqL1xyXG4gICAgICAgICAgICByZXR1cm4gcmVwb1xyXG4gICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXRfKHJlcG8uc3RhcmdhemVyc19jb3VudCl9IFN0YXJzYCxcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLmZvcmtzX2NvdW50KX0gRm9ya3NgXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIDogW11cclxuXHJcbiAgICAgICAgICAvKiBEaXNwbGF5IG51bWJlciBvZiByZXBvc2l0b3JpZXMsIG90aGVyd2lzZSAqL1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICBgJHtkYXRhLmxlbmd0aH0gUmVwb3NpdG9yaWVzYFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQYWdpbmF0ZSB0aHJvdWdoIHJlcG9zICovXHJcbiAgICByZXR1cm4gcGFnaW5hdGUoKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MQW5jaG9yRWxlbWVudH0gZWxfIC0gTGluayB0byByZXBvc2l0b3J5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJhc2VfIC0gQVBJIGJhc2UgVVJMXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbHRfIC0gVW5pcXVlIGlkZW50aWZpZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MQW5jaG9yRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgYmFzZSBVUkwgKi9cclxuICAgIHRoaXMuYmFzZV8gPSB0aGlzLmVsXy5ocmVmXHJcbiAgICB0aGlzLnNhbHRfID0gdGhpcy5oYXNoXyh0aGlzLmJhc2VfKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgZGF0YSBmcm9tIENvb2tpZSBvciBmZXRjaCBmcm9tIHJlc3BlY3RpdmUgQVBJXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9taXNlIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBmYWN0c1xyXG4gICAqL1xyXG4gIGZldGNoKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBjYWNoZWQgPSBDb29raWVzLmdldEpTT04oYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYClcclxuICAgICAgaWYgKHR5cGVvZiBjYWNoZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXNvbHZlKGNhY2hlZClcclxuXHJcbiAgICAgIC8qIElmIHRoZSBkYXRhIGlzIG5vdCBjYWNoZWQgaW4gYSBjb29raWUsIGludm9rZSBmZXRjaCBhbmQgc2V0XHJcbiAgICAgICAgIGEgY29va2llIHRoYXQgYXV0b21hdGljYWxseSBleHBpcmVzIGluIDE1IG1pbnV0ZXMgKi9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZldGNoXygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBDb29raWVzLnNldChgJHt0aGlzLnNhbHRffS5jYWNoZS1zb3VyY2VgLCBkYXRhLCB7IGV4cGlyZXM6IDEgLyA5NiB9KVxyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBYnN0cmFjdCBwcml2YXRlIGZ1bmN0aW9uIHRoYXQgZmV0Y2hlcyByZWxldmFudCByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKi9cclxuICBmZXRjaF8oKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZXRjaF8oKTogTm90IGltcGxlbWVudGVkXCIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBzdWZmaXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBOdW1iZXIgdG8gZm9ybWF0XHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgbnVtYmVyXHJcbiAgICovXHJcbiAgZm9ybWF0XyhudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIgPiAxMDAwMClcclxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDApfWtgXHJcbiAgICBlbHNlIGlmIChudW1iZXIgPiAxMDAwKVxyXG4gICAgICByZXR1cm4gYCR7KG51bWJlciAvIDEwMDApLnRvRml4ZWQoMSl9a2BcclxuICAgIHJldHVybiBgJHtudW1iZXJ9YFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2ltcGxlIGhhc2ggZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIFRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzYxNjQ4NC8xMDY1NTg0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gSW5wdXQgc3RyaW5nXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBIYXNoZWQgc3RyaW5nXHJcbiAgICovXHJcbiAgaGFzaF8oc3RyKSB7XHJcbiAgICBsZXQgaGFzaCA9IDBcclxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaFxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgc3RyLmNoYXJDb2RlQXQoaSlcclxuICAgICAgaGFzaCB8PSAwIC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc2hcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0Fic3RyYWN0LmpzIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZFxuXG5cdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRyZXN1bHQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG5cdFx0XHQvLyBjYWxsaW5nIFwiZ2V0KClcIlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5qc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVyIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gUmVwb3NpdG9yeSBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgdGhlIHJlcG9zaXRvcnlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZmFjdHMgLSBGYWN0cyB0byBiZSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIGluaXRpYWxpemUoZmFjdHMpIHtcclxuICAgIGlmIChmYWN0cy5sZW5ndGggJiYgdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblt0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZChcclxuICAgICAgICA8dWwgY2xhc3M9XCJtZC1zb3VyY2VfX2ZhY3RzXCI+XHJcbiAgICAgICAgICB7ZmFjdHMubWFwKGZhY3QgPT4gPGxpIGNsYXNzPVwibWQtc291cmNlX19mYWN0XCI+e2ZhY3R9PC9saT4pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIClcclxuXHJcbiAgICAvKiBGaW5pc2ggcmVuZGVyaW5nIHdpdGggYW5pbWF0aW9uICovXHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImRvbmVcIlxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL1JlcG9zaXRvcnkuanN4IiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vVGFicy9Ub2dnbGVcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFRvZ2dsZVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHRhYnMgdmlzaWJpbGl0eSBkZXBlbmRpbmcgb24gcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBDb250ZW50IGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gVG9nZ2xlIHBhZ2UteSBvZmZzZXRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBUYWJzIHZpc2liaWxpdHlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgTm9kZSkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIG9mZnNldCBhbmQgc3RhdGUgKi9cclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdmlzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PVxyXG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblswXS5vZmZzZXRUb3AgKyAoNSAtIDQ4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHF1aWNrIGhhY2sgdG8gZW5hYmxlIHNhbWUgaGFuZGxpbmcgZm9yIGhlcm9cclxuICAgIGlmIChhY3RpdmUgIT09IHRoaXMuYWN0aXZlXylcclxuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcImhpZGRlblwiIDogXCJcIlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgdmlzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMvVG9nZ2xlLmpzIiwiaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9UYWJsZU9mQ29udGVudHMvVGFibGVPZkNvbnRlbnRzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICByZW5kZXJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFibGVPZkNvbnRlbnRzLmpzIiwiY29uc3QgdG9MZXZlbCA9ICh0YWdOYW1lKSA9PiB7XHJcbiAgcmV0dXJuIHRhZ05hbWUucmVwbGFjZSgvXFxEL2csJycpO1xyXG59XHJcblxyXG5jb25zdCB0b0l0ZW0gPSAoZWwpID0+IHtcclxuICByZXR1cm4geyBlbDogZWwsIGxldmVsOiB0b0xldmVsKGVsLnRhZ05hbWUpLCBjaGlsZHJlbjogW10gfVxyXG59XHJcblxyXG5jb25zdCB0b0l0ZW1zID0gKGVscykgPT4ge1xyXG4gIHJldHVybiBbXS5yZWR1Y2UuY2FsbChlbHMsIChpdGVtcywgZWwpID0+IGl0ZW1zLmNvbmNhdCh0b0l0ZW0oZWwpKSwgW10pXHJcbn1cclxuXHJcbmNvbnN0IG5leHRXaXRoTG93ZXJMZXZlbCA9IChpdGVtLCBpdGVtcykgPT4ge1xyXG4gIGl0ZW1zLnJlZHVjZSgpXHJcbn1cclxuXHJcbmNvbnN0IHRvVE9DID0gKGl0ZW1zLCBpZHggPSAwKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnQgPSBudWxsXHJcbiAgbGV0IHRvYyA9IFtdXHJcbiAgZm9yIChsZXQgaSA9IGlkeDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gaXRlbXNbaV1cclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBuZXh0XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQubGV2ZWwgPT09IG5leHQubGV2ZWwpIHtcclxuICAgICAgdG9jLnB1c2goY3VycmVudClcclxuICAgICAgY3VycmVudCA9IG5leHRcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudC5sZXZlbCA+IG5leHQubGV2ZWwpIHtcclxuICAgICAgdG9jLnB1c2goY3VycmVudClcclxuICAgICAgcmV0dXJuIHRvY1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmxldmVsIDwgbmV4dC5sZXZlbCkge1xyXG4gICAgICBjdXJyZW50LmNoaWxkcmVuID0gdG9UT0MoaXRlbXMsIGkpXHJcbiAgICAgIGkgKz0gY3VycmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXHJcbiAgICAgIHRvYy5wdXNoKGN1cnJlbnQpXHJcbiAgICAgIGN1cnJlbnQgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChjdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICB0b2MucHVzaChjdXJyZW50KVxyXG4gIH1cclxuICByZXR1cm4gdG9jXHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlciA9IChlbCkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICA6IGVsXHJcbiAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgcmV0dXJuXHJcblxyXG4gIGNvbnN0IGVscyAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgyLCBoMywgaDQsIGg1LCBoNlwiKTtcclxuICBjb25zdCBpdGVtcyA9IHRvSXRlbXMoZWxzKVxyXG4gIGNvbnN0IHRvYyA9IHRvVE9DKGl0ZW1zKVxyXG4gIGlmICh0b2MubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlZi5hcHBlbmRDaGlsZCg8bGFiZWwgY2xhc3M9XCJtZC1uYXZfX3RpdGxlXCIgZm9yPVwiX190b2NcIj5UYWJsZSBvZiBjb250ZW50czwvbGFiZWw+KVxyXG4gIGNvbnN0IGxpc3QgPSA8dWwgY2xhc3M9XCJtZC1uYXZfX2xpc3RcIiBkYXRhLW1kLXNjcm9sbGZpeD48L3VsPlxyXG4gIHJlZi5hcHBlbmRDaGlsZChsaXN0KVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9jLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB0b2NJdGVtID0gdG9jW2ldXHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKFRvY0l0ZW0odG9jSXRlbSkpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUb2NJdGVtID0gKHRvY0l0ZW0pID0+IChcclxuICA8bGkgY2xhc3M9XCJtZC1uYXZfX2l0ZW1cIj5cclxuICAgIDxhIGhyZWY9e1wiI1wiICsgdG9jSXRlbS5lbC5pZH0gdGl0bGU9e3RvY0l0ZW0uZWwuaWR9IGNsYXNzPVwibWQtbmF2X19saW5rXCI+XHJcbiAgICAgICAge3RvY0l0ZW0uZWwuaW5uZXJIVE1MfVxyXG4gICAgPC9hPlxyXG5cclxuICAgIHt0b2NJdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICA8bmF2IGNsYXNzPVwibWQtbmF2XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibWQtbmF2X19saXN0XCI+XHJcbiAgICAgICAgICB7dG9jSXRlbS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gVG9jSXRlbShjaGlsZCkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKX1cclxuICA8L2xpPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50cy9UYWJsZU9mQ29udGVudHMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==