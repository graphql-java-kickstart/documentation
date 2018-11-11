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
    if (this.el_.children.length > 1) {
      this.el_.children[1].style.webkitOverflowScrolling = "";
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZhZGRjZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFibGVPZkNvbnRlbnRzL1RhYmxlT2ZDb250ZW50cy5qc3giXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4IiwiZmV0Y2giLCJiaW5kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsImkiLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwib25sb2FkIiwicmVzcG9uc2UiLCJvbmVycm9yIiwic2VuZCIsImJvZHkiLCJhbGwiLCJoZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VVUkwiLCJjbG9uZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJqc29uIiwidGhlbiIsIkpTT04iLCJwYXJzZSIsImJsb2IiLCJCbG9iIiwiZW50cmllcyIsImdldCIsIm4iLCJoYXMiLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJNYXRlcmlhbCIsIkV2ZW50IiwiSFRNTEVsZW1lbnQiLCJGYXN0Q2xpY2siLCJhdHRhY2giLCJNb2Rlcm5penIiLCJhZGRUZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ0YWJsZXMiLCJ3cmFwIiwidGFibGUiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDbGlwYm9hcmQiLCJpc1N1cHBvcnRlZCIsImJsb2NrcyIsImJsb2NrIiwiaWQiLCJidXR0b24iLCJwYXJlbnQiLCJjb3B5Iiwib24iLCJtZXNzYWdlIiwiYWN0aW9uIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhclNlbGVjdGlvbiIsImRhdGFzZXQiLCJtZFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJkZXRhaWxzIiwic3VtbWFyeSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyaW5nIiwiSFRNTERldGFpbHNFbGVtZW50IiwibG9jIiwiaW9zIiwic2Nyb2xsYWJsZSIsIml0ZW0iLCJ0b3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJIZWFkZXIiLCJTaGFkb3ciLCJUaXRsZSIsIlRhYnMiLCJUb2dnbGUiLCJNYXRjaE1lZGlhIiwiU2lkZWJhciIsIlBvc2l0aW9uIiwiVGFibGVPZkNvbnRlbnRzIiwicmVuZGVyIiwiYmx1ciIsIk5hdiIsIkJsdXIiLCJjb2xsYXBzaWJsZXMiLCJjb2xsYXBzZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJDb2xsYXBzZSIsIlNjcm9sbGluZyIsIlNlYXJjaCIsIkxvY2siLCJSZXN1bHQiLCJiYXNlIiwiZGF0YSIsIm1hcCIsImRvYyIsInBlcm1hbGluayIsInF1ZXJ5IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwidG9nZ2xlIiwiY2hlY2tlZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkhUTUxMaW5rRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsIkhUTUxBbmNob3JFbGVtZW50IiwibWRTb3VyY2UiLCJTb3VyY2UiLCJBZGFwdGVyIiwiR2l0SHViIiwic291cmNlcyIsIlJlcG9zaXRvcnkiLCJzb3VyY2UiLCJmYWN0cyIsImFwcCIsImNlIiwiY2FuY2VsYWJsZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFcnJvciIsInBhcmFtcyIsImV2dCIsIm9yaWdQcmV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInNldFRpbWVvdXRGdW5jIiwibm9vcCIsImZuIiwidGhpc0FyZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlIiwicmV0IiwibmV3VmFsdWUiLCJmaW5hbGUiLCJfdW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJsZW4iLCJIYW5kbGVyIiwiZG9uZSIsInJlYXNvbiIsImV4IiwicHJvbSIsImNvbnN0cnVjdG9yIiwicHJvbWlzZUZpbmFsbHkiLCJhcnIiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic2NvcGUiLCJnbG9iYWwiLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJ0YXNrIiwicnVuIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJwcm9jZXNzIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImZpbmFsbHlDb25zdHJ1Y3RvciIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImwiLCJjIiwiZCIsImdldHRlciIsIm8iLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX19lc01vZHVsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwibW9kIiwic2VsZWN0IiwiY2xpcGJvYXJkQWN0aW9uIiwiX3NlbGVjdCIsIl9zZWxlY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJDbGlwYm9hcmRBY3Rpb24iLCJyZXNvbHZlT3B0aW9ucyIsImluaXRTZWxlY3Rpb24iLCJjb250YWluZXIiLCJlbWl0dGVyIiwic2VsZWN0ZWRUZXh0Iiwic2VsZWN0RmFrZSIsInNlbGVjdFRhcmdldCIsIl90aGlzIiwiaXNSVEwiLCJyZW1vdmVGYWtlIiwiZmFrZUhhbmRsZXJDYWxsYmFjayIsImZha2VIYW5kbGVyIiwiZmFrZUVsZW0iLCJzdHlsZSIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsInBvc2l0aW9uIiwieVBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJjb3B5VGV4dCIsInN1Y2NlZWRlZCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlUmVzdWx0IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZGVzdHJveSIsInNldCIsIl9hY3Rpb24iLCJub2RlVHlwZSIsIl90YXJnZXQiLCJpcyIsImRlbGVnYXRlIiwidHlwZSIsInN0cmluZyIsImxpc3Rlbk5vZGUiLCJub2RlTGlzdCIsImxpc3Rlbk5vZGVMaXN0IiwibGlzdGVuU2VsZWN0b3IiLCJzZWxlY3RvciIsIkUiLCJjdHgiLCJsaXN0ZW5lciIsIl8iLCJldnRBcnIiLCJldnRzIiwibGl2ZUV2ZW50cyIsInRpbnlFbWl0dGVyIiwiZ29vZExpc3RlbmVyIiwiY2xpcGJvYXJkIiwiX2NsaXBib2FyZEFjdGlvbiIsIl90aW55RW1pdHRlciIsIl9nb29kTGlzdGVuZXIiLCJfY2xpcGJvYXJkQWN0aW9uMiIsIl90aW55RW1pdHRlcjIiLCJfZ29vZExpc3RlbmVyMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfRW1pdHRlciIsImxpc3RlbkNsaWNrIiwiZGVmYXVsdEFjdGlvbiIsImRlZmF1bHRUYXJnZXQiLCJkZWZhdWx0VGV4dCIsIl90aGlzMiIsIm9uQ2xpY2siLCJkZWxlZ2F0ZVRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsImFjdGlvbnMiLCJzdXBwb3J0IiwicXVlcnlDb21tYW5kU3VwcG9ydGVkIiwic3VmZml4IiwiZWxlbWVudCIsImF0dHJpYnV0ZSIsIkRPQ1VNRU5UX05PREVfVFlQRSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwicHJvdG8iLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwiX2RlbGVnYXRlIiwidXNlQ2FwdHVyZSIsImxpc3RlbmVyRm4iLCJlbGVtZW50cyIsIlN0cmluZyIsIm5vZGVOYW1lIiwiaXNSZWFkT25seSIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJsYXllciIsIm9sZE9uQ2xpY2siLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsInRhcERlbGF5IiwidGFwVGltZW91dCIsIm5vdE5lZWRlZCIsImNvbnRleHQiLCJtZXRob2RzIiwiZGV2aWNlSXNBbmRyb2lkIiwib25Nb3VzZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJjYXB0dXJlIiwicm12IiwiaGlqYWNrZWQiLCJhZHYiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJvbmNsaWNrIiwiZGV2aWNlSXNXaW5kb3dzUGhvbmUiLCJkZXZpY2VJc0lPUyIsInRlc3QiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm5lZWRzRm9jdXMiLCJyZWFkT25seSIsInNlbmRDbGljayIsImNsaWNrRXZlbnQiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwiaW5pdE1vdXNlRXZlbnQiLCJkZXRlcm1pbmVFdmVudFR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZm9yd2FyZGVkVG91Y2hFdmVudCIsInRhZ05hbWUiLCJ1cGRhdGVTY3JvbGxQYXJlbnQiLCJzY3JvbGxQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZmFzdENsaWNrU2Nyb2xsUGFyZW50IiwiY29udGFpbnMiLCJmYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wIiwiZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCIsImV2ZW50VGFyZ2V0IiwiVEVYVF9OT0RFIiwidGFyZ2V0VG91Y2hlcyIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJ0aW1lU3RhbXAiLCJwYWdlWCIsInBhZ2VZIiwibGFzdENsaWNrVGltZSIsInRvdWNoSGFzTW92ZWQiLCJib3VuZGFyeSIsImFicyIsImZpbmRDb250cm9sIiwibGFiZWxFbGVtZW50IiwiY29udHJvbCIsImh0bWxGb3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsInBlcm1pdHRlZCIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0IiwiZXhlYyIsInNjcm9sbFdpZHRoIiwib3V0ZXJXaWR0aCIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaEFjdGlvbiIsIm1xIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbml0IiwiaW5kZXhfIiwib2Zmc2V0XyIsImRpcl8iLCJhbmNob3JzXyIsInJlZHVjZSIsImFuY2hvcnMiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJtYWluIiwid2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJ0b2dnbGVzIiwicGFuZSIsIm5leHRFbGVtZW50U2libGluZyIsImxvY2tfIiwic2Nyb2xsVG8iLCJlc2NhcGVIVE1MIiwiY3JlYXRlVGV4dE5vZGUiLCJ0cnVuY2F0ZSIsImxpc3QiLCJkYXRhXyIsIm1ldGFfIiwibGlzdF8iLCJtZXNzYWdlXyIsInBsYWNlaG9sZGVyIiwibm9uZSIsIm9uZSIsIm90aGVyIiwidG9rZW5pemVyIiwibHVuciIsInNlcGFyYXRvciIsImxhbmdfIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGFuZyIsInRyaW0iLCJkb2NzXyIsImRvY3MiLCJwYXRoIiwiY29udGVudHMiLCJjaGFyIiwiTWFwIiwic3RhY2tfIiwiZmlsdGVycyIsInRyaW1tZXIiLCJzdG9wV29yZEZpbHRlciIsInBpcGVsaW5lIiwicmVzdWx0IiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJzcGxpY2UiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsIm1hdGNoT3BlcmF0b3JzUmUiLCJzdHIiLCJidWlsZGVyIiwiQnVpbGRlciIsInN0ZW1tZXIiLCJzZWFyY2hQaXBlbGluZSIsImJ1aWxkIiwidXRpbHMiLCJhc1N0cmluZyIsIkZpZWxkUmVmIiwiZG9jUmVmIiwiZmllbGROYW1lIiwic3RyaW5nVmFsdWUiLCJfc3RyaW5nVmFsdWUiLCJqb2luZXIiLCJmcm9tU3RyaW5nIiwiZmllbGRSZWYiLCJTZXQiLCJjb21wbGV0ZSIsImludGVyc2VjdCIsInVuaW9uIiwiZW1wdHkiLCJhIiwiYiIsImludGVyc2VjdGlvbiIsImlkZiIsInBvc3RpbmciLCJkb2N1bWVudENvdW50IiwiZG9jdW1lbnRzV2l0aFRlcm0iLCJ4IiwibG9nIiwiVG9rZW4iLCJtZXRhZGF0YSIsInQiLCJ0b2tlbnMiLCJzbGljZUVuZCIsInNsaWNlU3RhcnQiLCJjaGFyQXQiLCJzbGljZUxlbmd0aCIsInRva2VuTWV0YWRhdGEiLCJQaXBlbGluZSIsIl9zdGFjayIsInJlZ2lzdGVyZWRGdW5jdGlvbnMiLCJyZWdpc3RlckZ1bmN0aW9uIiwid2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkIiwiaXNSZWdpc3RlcmVkIiwibG9hZCIsInNlcmlhbGlzZWQiLCJmbk5hbWUiLCJmbnMiLCJhZnRlciIsImV4aXN0aW5nRm4iLCJuZXdGbiIsInBvcyIsImJlZm9yZSIsInN0YWNrTGVuZ3RoIiwibWVtbyIsImoiLCJrIiwicnVuU3RyaW5nIiwidG9KU09OIiwiVmVjdG9yIiwiX21hZ25pdHVkZSIsInBvc2l0aW9uRm9ySW5kZXgiLCJzdGFydCIsInBpdm90UG9pbnQiLCJmbG9vciIsInBpdm90SW5kZXgiLCJpbnNlcnQiLCJpbnNlcnRJZHgiLCJ1cHNlcnQiLCJtYWduaXR1ZGUiLCJzdW1PZlNxdWFyZXMiLCJlbGVtZW50c0xlbmd0aCIsInNxcnQiLCJkb3QiLCJvdGhlclZlY3RvciIsImRvdFByb2R1Y3QiLCJhTGVuIiwiYkxlbiIsImFWYWwiLCJiVmFsIiwic2ltaWxhcml0eSIsInRvQXJyYXkiLCJvdXRwdXQiLCJzdGVwMmxpc3QiLCJzdGVwM2xpc3QiLCJ2IiwiQyIsIlYiLCJtZ3IwIiwibWVxMSIsIm1ncjEiLCJzX3YiLCJyZV9tZ3IwIiwicmVfbWdyMSIsInJlX21lcTEiLCJyZV9zX3YiLCJyZV8xYSIsInJlMl8xYSIsInJlXzFiIiwicmUyXzFiIiwicmVfMWJfMiIsInJlMl8xYl8yIiwicmUzXzFiXzIiLCJyZTRfMWJfMiIsInJlXzFjIiwicmVfMiIsInJlXzMiLCJyZV80IiwicmUyXzQiLCJyZV81IiwicmVfNV8xIiwicmUzXzUiLCJwb3J0ZXJTdGVtbWVyIiwidyIsInN0ZW0iLCJmaXJzdGNoIiwicmUiLCJyZTIiLCJyZTMiLCJyZTQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImZwIiwiZ2VuZXJhdGVTdG9wV29yZEZpbHRlciIsInN0b3BXb3JkcyIsIndvcmRzIiwic3RvcFdvcmQiLCJUb2tlblNldCIsImZpbmFsIiwiZWRnZXMiLCJfbmV4dElkIiwiZnJvbUFycmF5IiwiZmluaXNoIiwiZnJvbUNsYXVzZSIsImNsYXVzZSIsImZyb21GdXp6eVN0cmluZyIsImVkaXREaXN0YW5jZSIsInN0YWNrIiwiZWRpdHNSZW1haW5pbmciLCJmcmFtZSIsInBvcCIsIm5vRWRpdE5vZGUiLCJkZWxldGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiaW5zZXJ0aW9uTm9kZSIsImNoYXJBIiwiY2hhckIiLCJ0cmFuc3Bvc2VOb2RlIiwibmV4dCIsInByZWZpeCIsImVkZ2UiLCJfc3RyIiwic29ydCIsInFOb2RlIiwicUVkZ2VzIiwicUxlbiIsIm5FZGdlcyIsIm5MZW4iLCJxIiwicUVkZ2UiLCJuRWRnZSIsInByZXZpb3VzV29yZCIsInVuY2hlY2tlZE5vZGVzIiwibWluaW1pemVkTm9kZXMiLCJ3b3JkIiwiY29tbW9uUHJlZml4IiwibWluaW1pemUiLCJjaGlsZCIsIm5leHROb2RlIiwiZG93blRvIiwiY2hpbGRLZXkiLCJJbmRleCIsImF0dHJzIiwiaW52ZXJ0ZWRJbmRleCIsImZpZWxkVmVjdG9ycyIsInRva2VuU2V0IiwiZmllbGRzIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJwYXJzZXIiLCJRdWVyeVBhcnNlciIsIm1hdGNoaW5nRmllbGRzIiwicXVlcnlWZWN0b3JzIiwidGVybUZpZWxkQ2FjaGUiLCJyZXF1aXJlZE1hdGNoZXMiLCJwcm9oaWJpdGVkTWF0Y2hlcyIsImNsYXVzZXMiLCJ0ZXJtcyIsImNsYXVzZU1hdGNoZXMiLCJ1c2VQaXBlbGluZSIsInRlcm1Ub2tlblNldCIsImV4cGFuZGVkVGVybXMiLCJwcmVzZW5jZSIsIlJFUVVJUkVEIiwiZXhwYW5kZWRUZXJtIiwidGVybUluZGV4IiwiX2luZGV4IiwiZmllbGRQb3N0aW5nIiwibWF0Y2hpbmdEb2N1bWVudFJlZnMiLCJ0ZXJtRmllbGQiLCJtYXRjaGluZ0RvY3VtZW50c1NldCIsIlBST0hJQklURUQiLCJtYXRjaGluZ0RvY3VtZW50UmVmIiwibWF0Y2hpbmdGaWVsZFJlZiIsImZpZWxkTWF0Y2giLCJNYXRjaERhdGEiLCJhbGxSZXF1aXJlZE1hdGNoZXMiLCJhbGxQcm9oaWJpdGVkTWF0Y2hlcyIsIm1hdGNoaW5nRmllbGRSZWZzIiwicmVzdWx0cyIsImlzTmVnYXRlZCIsImZpZWxkVmVjdG9yIiwic2NvcmUiLCJkb2NNYXRjaCIsIm1hdGNoRGF0YSIsImNvbWJpbmUiLCJzZXJpYWxpemVkSW5kZXgiLCJzZXJpYWxpemVkVmVjdG9ycyIsInNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4IiwidG9rZW5TZXRCdWlsZGVyIiwidHVwbGUiLCJfcmVmIiwiX2ZpZWxkcyIsIl9kb2N1bWVudHMiLCJmaWVsZFRlcm1GcmVxdWVuY2llcyIsImZpZWxkTGVuZ3RocyIsIl9iIiwiX2sxIiwibWV0YWRhdGFXaGl0ZWxpc3QiLCJhdHRyaWJ1dGVzIiwiUmFuZ2VFcnJvciIsIm51bWJlciIsImsxIiwiZXh0cmFjdG9yIiwiZmllbGRUZXJtcyIsIm1ldGFkYXRhS2V5IiwiY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyIsImZpZWxkUmVmcyIsIm51bWJlck9mRmllbGRzIiwiYWNjdW11bGF0b3IiLCJkb2N1bWVudHNXaXRoRmllbGQiLCJhdmVyYWdlRmllbGRMZW5ndGgiLCJjcmVhdGVGaWVsZFZlY3RvcnMiLCJmaWVsZFJlZnNMZW5ndGgiLCJ0ZXJtSWRmQ2FjaGUiLCJmaWVsZExlbmd0aCIsInRlcm1GcmVxdWVuY2llcyIsInRlcm1zTGVuZ3RoIiwiZmllbGRCb29zdCIsImRvY0Jvb3N0IiwidGYiLCJzY29yZVdpdGhQcmVjaXNpb24iLCJyb3VuZCIsImNyZWF0ZVRva2VuU2V0IiwidW5zaGlmdCIsImNsb25lZE1ldGFkYXRhIiwibWV0YWRhdGFLZXlzIiwib3RoZXJNYXRjaERhdGEiLCJhbGxGaWVsZHMiLCJOT05FIiwiTEVBRElORyIsIk9QVElPTkFMIiwiUXVlcnlQYXJzZUVycm9yIiwiUXVlcnlMZXhlciIsImxleGVtZXMiLCJlc2NhcGVDaGFyUG9zaXRpb25zIiwic3RhdGUiLCJsZXhUZXh0Iiwic2xpY2VTdHJpbmciLCJzdWJTbGljZXMiLCJqb2luIiwiZXNjYXBlQ2hhcmFjdGVyIiwiRU9TIiwiaWdub3JlIiwiYmFja3VwIiwiYWNjZXB0RGlnaXRSdW4iLCJjaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtb3JlIiwiRklFTEQiLCJURVJNIiwiRURJVF9ESVNUQU5DRSIsIkJPT1NUIiwiUFJFU0VOQ0UiLCJsZXhGaWVsZCIsImxleGVyIiwibGV4VGVybSIsImxleEVkaXREaXN0YW5jZSIsImxleEJvb3N0IiwibGV4RU9TIiwidGVybVNlcGFyYXRvciIsImN1cnJlbnRDbGF1c2UiLCJsZXhlbWVJZHgiLCJwYXJzZUNsYXVzZSIsInBlZWtMZXhlbWUiLCJjb25zdW1lTGV4ZW1lIiwibGV4ZW1lIiwibmV4dENsYXVzZSIsImNvbXBsZXRlZENsYXVzZSIsInBhcnNlUHJlc2VuY2UiLCJwYXJzZUZpZWxkIiwicGFyc2VUZXJtIiwiZXJyb3JNZXNzYWdlIiwibmV4dExleGVtZSIsInBvc3NpYmxlRmllbGRzIiwiZiIsInBhcnNlRWRpdERpc3RhbmNlIiwicGFyc2VCb29zdCIsImlzTmFOIiwicGFyZW50XyIsInBhZF8iLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJsZSIsImlubmVySGVpZ2h0IiwiYm91bmRzIiwiYm90dG9tIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiZXhwaXJlcyIsInRvRml4ZWQiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImNvbnZlcnRlciIsImRlZmF1bHRzIiwiRGF0ZSIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwic3RyaW5naWZ5Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJzdHJpbmdpZmllZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiY29va2llIiwiY29va2llcyIsInJkZWNvZGUiLCJwYXJ0cyIsInJlYWQiLCJ3aXRoQ29udmVydGVyIiwiZmFjdCIsInRvTGV2ZWwiLCJ0b0l0ZW0iLCJsZXZlbCIsInRvSXRlbXMiLCJuZXh0V2l0aExvd2VyTGV2ZWwiLCJ0b1RPQyIsImlkeCIsInRvYyIsInRvY0l0ZW0iLCJUb2NJdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0FBSUE7a0JBQ2UsU0FBVTs7QUFFdkI7Ozs7Ozs7OztBQVNBQSxlQVh1Qix5QkFXVEMsR0FYUyxFQVdKQyxVQVhJLEVBV3FCO0FBQzFDLFFBQU1DLEtBQUtDLFNBQVNKLGFBQVQsQ0FBdUJDLEdBQXZCLENBQVg7O0FBRUE7QUFDQSxRQUFJQyxVQUFKLEVBQ0VHLE1BQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QkMsT0FBT0MsSUFBUCxDQUFZUixVQUFaLENBQTdCLEVBQXNELGdCQUFRO0FBQzVEQyxTQUFHUSxZQUFILENBQWdCQyxJQUFoQixFQUFzQlYsV0FBV1UsSUFBWCxDQUF0QjtBQUNELEtBRkQ7O0FBSUY7QUFDQSxRQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixRQUFTO0FBQ2pDUixZQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJNLEtBQTdCLEVBQW9DLGdCQUFROztBQUUxQztBQUNBLFlBQUksT0FBT0MsSUFBUCxLQUFnQixRQUFoQixJQUNBLE9BQU9BLElBQVAsS0FBZ0IsUUFEcEIsRUFDOEI7QUFDNUJaLGFBQUdhLFdBQUgsSUFBa0JELElBQWxCOztBQUVGO0FBQ0MsU0FMRCxNQUtPLElBQUlWLE1BQU1ZLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQzlCRiw0QkFBa0JFLElBQWxCOztBQUVGO0FBQ0MsU0FKTSxNQUlBLElBQUksT0FBT0EsS0FBS0csTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUM3Q2YsYUFBR2dCLFNBQUgsSUFBZ0JKLEtBQUtHLE1BQXJCOztBQUVGO0FBQ0MsU0FKTSxNQUlBLElBQUlILGdCQUFnQkssSUFBcEIsRUFBMEI7QUFDL0JqQixhQUFHa0IsV0FBSCxDQUFlTixJQUFmO0FBQ0Q7QUFDRixPQW5CRDtBQW9CRCxLQXJCRDs7QUF1QkE7O0FBakMwQyxzQ0FBVk8sUUFBVTtBQUFWQSxjQUFVO0FBQUE7O0FBa0MxQ1Qsc0JBQWtCUyxRQUFsQjtBQUNBLFdBQU9uQixFQUFQO0FBQ0Q7QUEvQ3NCLEM7Ozs7Ozs7Ozs7OztBQzNCekIsSUFBSW9CLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJOLENBQWpCLEM7Ozs7Ozs7Ozs7QUNwQkEsSUFBSU8sUUFBUSxPQUFPQyxLQUFQLElBQWMsVUFBZCxHQUEyQkEsTUFBTUMsSUFBTixFQUEzQixHQUEwQyxVQUFTQyxHQUFULEVBQWNDLE9BQWQsRUFBdUI7QUFDNUVBLFdBQVVBLFdBQVcsRUFBckI7QUFDQSxRQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM5QyxNQUFJQyxVQUFVLElBQUlDLGNBQUosRUFBZDs7QUFFQUQsVUFBUUUsSUFBUixDQUFhTixRQUFRTyxNQUFSLElBQWtCLEtBQS9CLEVBQXNDUixHQUF0QyxFQUEyQyxJQUEzQzs7QUFFQSxPQUFLLElBQUlTLENBQVQsSUFBY1IsUUFBUVMsT0FBdEIsRUFBK0I7QUFDOUJMLFdBQVFNLGdCQUFSLENBQXlCRixDQUF6QixFQUE0QlIsUUFBUVMsT0FBUixDQUFnQkQsQ0FBaEIsQ0FBNUI7QUFDQTs7QUFFREosVUFBUU8sZUFBUixHQUEwQlgsUUFBUVksV0FBUixJQUFxQixTQUEvQzs7QUFFQVIsVUFBUVMsTUFBUixHQUFpQixZQUFZO0FBQzVCWCxXQUFRWSxVQUFSO0FBQ0EsR0FGRDs7QUFJQVYsVUFBUVcsT0FBUixHQUFrQlosTUFBbEI7O0FBRUFDLFVBQVFZLElBQVIsQ0FBYWhCLFFBQVFpQixJQUFSLElBQWdCLElBQTdCOztBQUVBLFdBQVNILFFBQVQsR0FBb0I7QUFDbkIsT0FBSXRDLFFBQU8sRUFBWDtBQUFBLE9BQ0MwQyxNQUFNLEVBRFA7QUFBQSxPQUVDVCxVQUFVLEVBRlg7QUFBQSxPQUdDVSxNQUhEOztBQUtBZixXQUFRZ0IscUJBQVIsR0FBZ0NDLE9BQWhDLENBQXdDLDhCQUF4QyxFQUF3RSxVQUFVQyxDQUFWLEVBQWFDLEdBQWIsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ2hHaEQsVUFBS2lELElBQUwsQ0FBVUYsTUFBTUEsSUFBSUcsV0FBSixFQUFoQjtBQUNBUixRQUFJTyxJQUFKLENBQVMsQ0FBQ0YsR0FBRCxFQUFNQyxLQUFOLENBQVQ7QUFDQUwsYUFBU1YsUUFBUWMsR0FBUixDQUFUO0FBQ0FkLFlBQVFjLEdBQVIsSUFBZUosU0FBVUEsU0FBUyxHQUFULEdBQWVLLEtBQXpCLEdBQWtDQSxLQUFqRDtBQUNBLElBTEQ7O0FBT0EsVUFBTztBQUNORyxRQUFJLENBQUN2QixRQUFRd0IsTUFBUixHQUFlLEdBQWYsR0FBbUIsQ0FBcEIsS0FBMEIsQ0FEeEIsRUFDNEI7QUFDbENBLFlBQVF4QixRQUFRd0IsTUFGVjtBQUdOQyxnQkFBWXpCLFFBQVF5QixVQUhkO0FBSU45QixTQUFLSyxRQUFRMEIsV0FKUDtBQUtOQyxXQUFPakIsUUFMRDtBQU1Oa0IsVUFBTSxnQkFBWTtBQUFFLFlBQU8vQixRQUFRQyxPQUFSLENBQWdCRSxRQUFRNkIsWUFBeEIsQ0FBUDtBQUErQyxLQU43RDtBQU9OQyxVQUFNLGdCQUFZO0FBQUUsWUFBT2pDLFFBQVFDLE9BQVIsQ0FBZ0JFLFFBQVE2QixZQUF4QixFQUFzQ0UsSUFBdEMsQ0FBMkNDLEtBQUtDLEtBQWhELENBQVA7QUFBZ0UsS0FQOUU7QUFRTkMsVUFBTSxnQkFBWTtBQUFFLFlBQU9yQyxRQUFRQyxPQUFSLENBQWdCLElBQUlxQyxJQUFKLENBQVMsQ0FBQ25DLFFBQVFVLFFBQVQsQ0FBVCxDQUFoQixDQUFQO0FBQXVELEtBUnJFO0FBU05MLGFBQVM7QUFDUmpDLFdBQU0sZ0JBQVk7QUFBRSxhQUFPQSxLQUFQO0FBQWMsTUFEMUI7QUFFUmdFLGNBQVMsbUJBQVk7QUFBRSxhQUFPdEIsR0FBUDtBQUFhLE1BRjVCO0FBR1J1QixVQUFLLGFBQVVDLENBQVYsRUFBYTtBQUFFLGFBQU9qQyxRQUFRaUMsRUFBRWhCLFdBQUYsRUFBUixDQUFQO0FBQWtDLE1BSDlDO0FBSVJpQixVQUFLLGFBQVVELENBQVYsRUFBYTtBQUFFLGFBQU9BLEVBQUVoQixXQUFGLE1BQW1CakIsT0FBMUI7QUFBb0M7QUFKaEQ7QUFUSCxJQUFQO0FBZ0JBO0FBQ0QsRUFqRE0sQ0FBUDtBQWtEQSxDQXBERDs7a0JBc0RlYixLO0FBQ2Ysc0M7Ozs7OztBQ3ZEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQmdELFE7O0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxvQkFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUE7O0FBQ2hDLFNBQUtDLElBQUwsR0FBWTdFLE1BQU1DLFNBQU4sQ0FBZ0I2RSxLQUFoQixDQUFzQjNFLElBQXRCLENBQ1QsT0FBT3VFLEdBQVAsS0FBZSxRQUFoQixHQUNJM0UsU0FBU2dGLGdCQUFULENBQTBCTCxHQUExQixDQURKLEdBRUksR0FBR00sTUFBSCxDQUFVTixHQUFWLENBSE0sQ0FBWjs7QUFLQTtBQUNBLFNBQUtPLFFBQUwsR0FBZ0IsT0FBT0wsT0FBUCxLQUFtQixVQUFuQixHQUNaLEVBQUVNLFFBQVFOLE9BQVYsRUFEWSxHQUVaQSxPQUZKOztBQUlBO0FBQ0EsU0FBS08sT0FBTCxHQUFlLEdBQUdILE1BQUgsQ0FBVUwsTUFBVixDQUFmO0FBQ0EsU0FBS1MsT0FBTCxHQUFlO0FBQUEsYUFBTSxNQUFLSCxRQUFMLENBQWNDLE1BQWQsQ0FBcUJHLEVBQXJCLENBQU47QUFBQSxLQUFmO0FBQ0Q7O0FBRUQ7Ozs7O3FCQUdBQyxNLHFCQUFTO0FBQUE7O0FBQ1AsU0FBS1QsSUFBTCxDQUFVM0UsT0FBVixDQUFrQixjQUFNO0FBQ3RCLGFBQUtpRixPQUFMLENBQWFqRixPQUFiLENBQXFCLGlCQUFTO0FBQzVCSixXQUFHeUYsZ0JBQUgsQ0FBb0JDLEtBQXBCLEVBQTJCLE9BQUtKLE9BQWhDLEVBQXlDLEtBQXpDO0FBQ0QsT0FGRDtBQUdELEtBSkQ7O0FBTUE7QUFDQSxRQUFJLE9BQU8sS0FBS0gsUUFBTCxDQUFjUSxLQUFyQixLQUErQixVQUFuQyxFQUNFLEtBQUtSLFFBQUwsQ0FBY1EsS0FBZDtBQUNILEc7O0FBRUQ7Ozs7O3FCQUdBQyxRLHVCQUFXO0FBQUE7O0FBQ1QsU0FBS2IsSUFBTCxDQUFVM0UsT0FBVixDQUFrQixjQUFNO0FBQ3RCLGFBQUtpRixPQUFMLENBQWFqRixPQUFiLENBQXFCLGlCQUFTO0FBQzVCSixXQUFHNkYsbUJBQUgsQ0FBdUJILEtBQXZCLEVBQThCLE9BQUtKLE9BQW5DO0FBQ0QsT0FGRDtBQUdELEtBSkQ7O0FBTUE7QUFDQSxRQUFJLE9BQU8sS0FBS0gsUUFBTCxDQUFjVyxLQUFyQixLQUErQixVQUFuQyxFQUNFLEtBQUtYLFFBQUwsQ0FBY1csS0FBZDtBQUNILEc7Ozs7O2tCQTdEa0JuQixROzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFFQTs7OztBQU9BOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBbkQsT0FBT1EsT0FBUCxHQUFpQlIsT0FBT1EsT0FBUCxJQUFrQkEseUJBQW5DOztBQUVBOzs7O0FBVkE7Ozs7QUFtQkE7Ozs7QUFJQTs7Ozs7OztBQU9BLElBQU0rRCxZQUFZLFNBQVpBLFNBQVksTUFBTztBQUN2QixNQUFNQyxPQUFPL0YsU0FBU2dHLGlCQUFULFdBQW1DM0MsR0FBbkMsRUFBMEMsQ0FBMUMsQ0FBYjtBQUNBLE1BQUksRUFBRTBDLGdCQUFnQkUsZUFBbEIsQ0FBSixFQUNFLE1BQU0sSUFBSUMsY0FBSixFQUFOO0FBQ0YsU0FBT0gsS0FBS0ksT0FBWjtBQUNELENBTEQ7O0FBT0E7Ozs7QUFJQTs7Ozs7QUFLQSxTQUFTQyxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUFFOztBQUU1QjtBQUNBLE1BQUlDLG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0QjFFLFFBQTVCLEVBQXNDLGtCQUF0QyxFQUEwRCxZQUFNO0FBQzlELFFBQUksRUFBRUEsU0FBUytDLElBQVQsWUFBeUJ5RCxXQUEzQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQU8sd0JBQVVDLE1BQVYsQ0FBaUIxRyxTQUFTK0MsSUFBMUI7O0FBRUE7QUFDQTRELGNBQVVDLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUIsWUFBTTtBQUM3QixhQUFPLENBQUMsQ0FBQ0MsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIscUJBQTFCLENBQVQ7QUFDRCxLQUZEOztBQUlBO0FBQ0EsUUFBTUMsU0FBU2hILFNBQVNnRixnQkFBVCxDQUEwQixvQkFBMUIsQ0FBZixDQWI4RCxDQWFjO0FBQzVFL0UsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCNEcsTUFBN0IsRUFBcUMsaUJBQVM7QUFDNUMsVUFBTUMsT0FDSjtBQUFBO0FBQUEsVUFBSyxTQUFNLHdCQUFYO0FBQ0UsbUNBQUssU0FBTSxtQkFBWDtBQURGLE9BREY7QUFLQSxVQUFJQyxNQUFNQyxXQUFWLEVBQXVCO0FBQ3JCRCxjQUFNRSxVQUFOLENBQWlCQyxZQUFqQixDQUE4QkosSUFBOUIsRUFBb0NDLE1BQU1DLFdBQTFDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELGNBQU1FLFVBQU4sQ0FBaUJuRyxXQUFqQixDQUE2QmdHLElBQTdCO0FBQ0Q7QUFDREEsV0FBSy9GLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxXQUFqQixDQUE2QmlHLEtBQTdCO0FBQ0QsS0FaRDs7QUFjQTtBQUNBLFFBQUlJLG9CQUFVQyxXQUFWLEVBQUosRUFBNkI7QUFDM0IsVUFBTUMsU0FBU3hILFNBQVNnRixnQkFBVCxDQUEwQiwrQkFBMUIsQ0FBZjtBQUNBL0UsWUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCb0gsTUFBN0IsRUFBcUMsVUFBQ0MsS0FBRCxFQUFRL0YsS0FBUixFQUFrQjtBQUNyRCxZQUFNZ0csaUJBQWVoRyxLQUFyQjs7QUFFQTtBQUNBLFlBQU1pRyxTQUNKO0FBQUE7QUFBQSxZQUFRLFNBQU0sY0FBZCxFQUE2QixPQUFPN0IsVUFBVSxnQkFBVixDQUFwQztBQUNFLDJDQUEyQjRCLEVBQTNCLGVBQXVDQSxFQUF2QyxVQURGO0FBRUUsc0NBQU0sU0FBTSx1QkFBWjtBQUZGLFNBREY7O0FBT0E7QUFDQSxZQUFNRSxTQUFTSCxNQUFNTCxVQUFyQjtBQUNBUSxlQUFPRixFQUFQLEdBQVlBLEVBQVo7QUFDQUUsZUFBT1AsWUFBUCxDQUFvQk0sTUFBcEIsRUFBNEJGLEtBQTVCO0FBQ0QsT0FmRDs7QUFpQkE7QUFDQSxVQUFNSSxPQUFPLElBQUlQLG1CQUFKLENBQWMsZUFBZCxDQUFiOztBQUVBO0FBQ0FPLFdBQUtDLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLGtCQUFVO0FBQzNCLFlBQU1DLFVBQVVDLE9BQU9DLE9BQVAsQ0FBZUMsYUFBZixDQUE2Qix3QkFBN0IsQ0FBaEI7QUFDQSxZQUFJLEVBQUVILG1CQUFtQnZCLFdBQXJCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjs7QUFFRjtBQUNBOEIsZUFBT0csY0FBUDtBQUNBLFlBQUlKLFFBQVFLLE9BQVIsQ0FBZ0JDLE9BQXBCLEVBQ0VDLGFBQWFDLFNBQVNSLFFBQVFLLE9BQVIsQ0FBZ0JDLE9BQXpCLEVBQWtDLEVBQWxDLENBQWI7O0FBRUY7QUFDQU4sZ0JBQVFTLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QjtBQUNBVixnQkFBUWhILFNBQVIsR0FBb0IrRSxVQUFVLGtCQUFWLENBQXBCOztBQUVBO0FBQ0FpQyxnQkFBUUssT0FBUixDQUFnQkMsT0FBaEIsR0FBMEJLLFdBQVcsWUFBTTtBQUN6Q1gsa0JBQVFTLFNBQVIsQ0FBa0JHLE1BQWxCLENBQXlCLCtCQUF6QjtBQUNBWixrQkFBUUssT0FBUixDQUFnQkMsT0FBaEIsR0FBMEIsRUFBMUI7QUFDRCxTQUh5QixFQUd2QixJQUh1QixFQUdqQk8sUUFIaUIsRUFBMUI7QUFJRCxPQW5CRDtBQW9CRDs7QUFFRDtBQUNBLFFBQUksQ0FBQ2pDLFVBQVVrQyxPQUFmLEVBQXdCO0FBQ3RCLFVBQU1yQixVQUFTeEgsU0FBU2dGLGdCQUFULENBQTBCLG1CQUExQixDQUFmO0FBQ0EvRSxZQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJvSCxPQUE3QixFQUFxQyxtQkFBVztBQUM5Q3NCLGdCQUFRdEQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsY0FBTTtBQUN0QyxjQUFNcUQsVUFBVXZELEdBQUd5RCxNQUFILENBQVUzQixVQUExQjtBQUNBLGNBQUl5QixRQUFRRyxZQUFSLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDaENILG9CQUFRSSxlQUFSLENBQXdCLE1BQXhCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xKLG9CQUFRdEksWUFBUixDQUFxQixNQUFyQixFQUE2QixFQUE3QjtBQUNEO0FBQ0YsU0FQRDtBQVFELE9BVEQ7QUFVRDs7QUFFRDtBQUNBLFFBQU1zSSxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixVQUFJN0ksU0FBU2tKLFFBQVQsQ0FBa0JDLElBQXRCLEVBQTRCO0FBQzFCLFlBQU1wSixLQUFLQyxTQUFTb0osY0FBVCxDQUF3QnBKLFNBQVNrSixRQUFULENBQWtCQyxJQUFsQixDQUF1QkUsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBeEIsQ0FBWDtBQUNBLFlBQUksQ0FBQ3RKLEVBQUwsRUFDRTs7QUFFRjtBQUNBLFlBQUk2SCxTQUFTN0gsR0FBR3FILFVBQWhCO0FBQ0EsZUFBT1EsVUFBVSxFQUFFQSxrQkFBa0IwQixrQkFBcEIsQ0FBakI7QUFDRTFCLG1CQUFTQSxPQUFPUixVQUFoQjtBQURGLFNBUDBCLENBVTFCO0FBQ0EsWUFBSVEsVUFBVSxDQUFDQSxPQUFPeEYsSUFBdEIsRUFBNEI7QUFDMUJ3RixpQkFBT3hGLElBQVAsR0FBYyxJQUFkOztBQUVBO0FBQ0EsY0FBTW1ILE1BQU1MLFNBQVNDLElBQXJCO0FBQ0FELG1CQUFTQyxJQUFULEdBQWdCLEdBQWhCO0FBQ0FELG1CQUFTQyxJQUFULEdBQWdCSSxHQUFoQjtBQUNEO0FBQ0Y7QUFDRixLQXJCRDtBQXNCQWhJLFdBQU9pRSxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ3FELE9BQXRDO0FBQ0FBOztBQUVBO0FBQ0EsUUFBSWxDLFVBQVU2QyxHQUFkLEVBQW1CO0FBQ2pCLFVBQU1DLGFBQWF6SixTQUFTZ0YsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQW5CO0FBQ0EvRSxZQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJxSixVQUE3QixFQUF5QyxnQkFBUTtBQUMvQ0MsYUFBS2xFLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DLFlBQU07QUFDeEMsY0FBTW1FLE1BQU1ELEtBQUtFLFNBQWpCOztBQUVBO0FBQ0EsY0FBSUQsUUFBUSxDQUFaLEVBQWU7QUFDYkQsaUJBQUtFLFNBQUwsR0FBaUIsQ0FBakI7O0FBRUE7QUFDRCxXQUpELE1BSU8sSUFBSUQsTUFBTUQsS0FBS0csWUFBWCxLQUE0QkgsS0FBS0ksWUFBckMsRUFBbUQ7QUFDeERKLGlCQUFLRSxTQUFMLEdBQWlCRCxNQUFNLENBQXZCO0FBQ0Q7QUFDRixTQVhEO0FBWUQsT0FiRDtBQWNEO0FBQ0YsR0FySUQsRUFxSUdwRSxNQXJJSDs7QUF1SUE7QUFDQSxNQUFJZSxtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEJuRCxNQUE1QixFQUFvQyxDQUNsQyxRQURrQyxFQUN4QixRQUR3QixFQUNkLG1CQURjLENBQXBDLEVBRUcsSUFBSStFLG1CQUFTeUQsTUFBVCxDQUFnQkMsTUFBcEIsQ0FDRCwrQkFEQyxFQUVELDRCQUZDLENBRkgsRUFLRXpFLE1BTEY7O0FBT0E7QUFDQSxNQUFJZSxtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEJuRCxNQUE1QixFQUFvQyxDQUNsQyxRQURrQyxFQUN4QixRQUR3QixFQUNkLG1CQURjLENBQXBDLEVBRUcsSUFBSStFLG1CQUFTeUQsTUFBVCxDQUFnQkUsS0FBcEIsQ0FDRCwyQkFEQyxFQUVELGdCQUZDLENBRkgsRUFLRTFFLE1BTEY7O0FBT0E7QUFDQSxNQUFJdkYsU0FBU2tJLGFBQVQsQ0FBdUIsMEJBQXZCLENBQUosRUFDRSxJQUFJNUIsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCbkQsTUFBNUIsRUFBb0MsQ0FDbEMsUUFEa0MsRUFDeEIsUUFEd0IsRUFDZCxtQkFEYyxDQUFwQyxFQUVHLElBQUkrRSxtQkFBUzRELElBQVQsQ0FBY0MsTUFBbEIsQ0FBeUIsMEJBQXpCLENBRkgsRUFFeUQ1RSxNQUZ6RDs7QUFJRjtBQUNBLE1BQUl2RixTQUFTa0ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBSixFQUNFLElBQUk1QixtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEJuRCxNQUE1QixFQUFvQyxDQUNsQyxRQURrQyxFQUN4QixRQUR3QixFQUNkLG1CQURjLENBQXBDLEVBRUcsSUFBSStFLG1CQUFTNEQsSUFBVCxDQUFjQyxNQUFsQixDQUF5QiwwQkFBekIsQ0FGSCxFQUV5RDVFLE1BRnpEOztBQUlGO0FBQ0EsTUFBSWUsbUJBQVNDLEtBQVQsQ0FBZTZELFVBQW5CLENBQThCLHFCQUE5QixFQUNFLElBQUk5RCxtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEJuRCxNQUE1QixFQUFvQyxDQUNsQyxRQURrQyxFQUN4QixRQUR3QixFQUNkLG1CQURjLENBQXBDLEVBRUcsSUFBSStFLG1CQUFTK0QsT0FBVCxDQUFpQkMsUUFBckIsQ0FDRCxnQ0FEQyxFQUVELDRCQUZDLENBRkgsQ0FERjs7QUFPQTtBQUNBLE1BQUl0SyxTQUFTa0ksYUFBVCxDQUF1Qix5QkFBdkIsQ0FBSixFQUNFLElBQUk1QixtQkFBU0MsS0FBVCxDQUFlNkQsVUFBbkIsQ0FBOEIsb0JBQTlCLEVBQ0UsSUFBSTlELG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0Qm5ELE1BQTVCLEVBQW9DLENBQ2xDLFFBRGtDLEVBQ3hCLFFBRHdCLEVBQ2QsbUJBRGMsQ0FBcEMsRUFFRyxJQUFJK0UsbUJBQVMrRCxPQUFULENBQWlCQyxRQUFyQixDQUNELHlCQURDLEVBRUQsNEJBRkMsQ0FGSCxDQURGOztBQU9GO0FBQ0FoRSxxQkFBU2lFLGVBQVQsQ0FBeUJDLE1BQXpCLENBQWdDLFlBQWhDO0FBQ0EsTUFBTUMsT0FBTyxJQUFJbkUsbUJBQVNvRSxHQUFULENBQWFDLElBQWpCLENBQXNCLGdDQUF0QixDQUFiOztBQUVBO0FBQ0EsTUFBSXJFLG1CQUFTQyxLQUFULENBQWU2RCxVQUFuQixDQUE4QixvQkFBOUIsRUFDRSxJQUFJOUQsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCbkQsTUFBNUIsRUFBb0MsUUFBcEMsRUFBOENrSixJQUE5QyxDQURGOztBQUdBO0FBQ0EsTUFBTUcsZUFDSjVLLFNBQVNnRixnQkFBVCxDQUEwQixpQ0FBMUIsQ0FERjtBQUVBL0UsUUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCd0ssWUFBN0IsRUFBMkMsb0JBQVk7QUFDckQsUUFBSXRFLG1CQUFTQyxLQUFULENBQWU2RCxVQUFuQixDQUE4QixxQkFBOUIsRUFDRSxJQUFJOUQsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCbUcsU0FBU0Msc0JBQXJDLEVBQTZELE9BQTdELEVBQ0UsSUFBSXhFLG1CQUFTb0UsR0FBVCxDQUFhSyxRQUFqQixDQUEwQkYsUUFBMUIsQ0FERixDQURGO0FBR0QsR0FKRDs7QUFNQTtBQUNBLE1BQUl2RSxtQkFBU0MsS0FBVCxDQUFlNkQsVUFBbkIsQ0FBOEIscUJBQTlCLEVBQ0UsSUFBSTlELG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUNFLGlEQURGLEVBQ3FELFFBRHJELEVBRUUsSUFBSTRCLG1CQUFTb0UsR0FBVCxDQUFhTSxTQUFqQixDQUEyQixvQ0FBM0IsQ0FGRixDQURGOztBQUtBO0FBQ0EsTUFBSWhMLFNBQVNrSSxhQUFULENBQXVCLDRCQUF2QixDQUFKLEVBQTBEOztBQUV4RDtBQUNBLFFBQUk1QixtQkFBU0MsS0FBVCxDQUFlNkQsVUFBbkIsQ0FBOEIsb0JBQTlCLEVBQ0UsSUFBSTlELG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0Qix5QkFBNUIsRUFBdUQsUUFBdkQsRUFDRSxJQUFJNEIsbUJBQVMyRSxNQUFULENBQWdCQyxJQUFwQixDQUF5Qix5QkFBekIsQ0FERixDQURGOztBQUlBO0FBQ0EsUUFBSTVFLG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0QiwyQkFBNUIsRUFBeUQsQ0FDdkQsT0FEdUQsRUFDOUMsT0FEOEMsRUFDckMsUUFEcUMsQ0FBekQsRUFFRyxJQUFJNEIsbUJBQVMyRSxNQUFULENBQWdCRSxNQUFwQixDQUEyQiw0QkFBM0IsRUFBeUQsWUFBTTtBQUNoRSxhQUFPeEosTUFBUzBFLE9BQU94RSxHQUFQLENBQVd1SixJQUFwQixrQkFBdUM7QUFDNUMxSSxxQkFBYTtBQUQrQixPQUF2QyxFQUVKdUIsSUFGSSxDQUVDO0FBQUEsZUFBWXJCLFNBQVNvQixJQUFULEVBQVo7QUFBQSxPQUZELEVBR0pDLElBSEksQ0FHQyxnQkFBUTtBQUNaLGVBQU9vSCxLQUFLQyxHQUFMLENBQVMsZUFBTztBQUNyQkMsY0FBSXJDLFFBQUosUUFBa0JxQyxJQUFJQyxTQUF0QjtBQUNBLGlCQUFPRCxHQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQsT0FSSSxDQUFQO0FBU0QsS0FWRSxDQUZILEVBWUloRyxNQVpKOztBQWNBO0FBQ0EsUUFBSWUsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCLDJCQUE1QixFQUF5RCxPQUF6RCxFQUFrRSxZQUFNO0FBQ3RFZ0UsaUJBQVcsWUFBTTtBQUNmLFlBQU0rQyxRQUFRekwsU0FBU2tJLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWQ7QUFDQSxZQUFJLEVBQUV1RCxpQkFBaUJDLGdCQUFuQixDQUFKLEVBQ0UsTUFBTSxJQUFJeEYsY0FBSixFQUFOO0FBQ0Z1RixjQUFNRSxLQUFOO0FBQ0QsT0FMRCxFQUtHLEVBTEg7QUFNRCxLQVBELEVBT0dwRyxNQVBIOztBQVNBO0FBQ0EsUUFBSWUsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCLHlCQUE1QixFQUF1RCxRQUF2RCxFQUFpRSxjQUFNO0FBQ3JFZ0UsaUJBQVcsa0JBQVU7QUFDbkIsWUFBSSxFQUFFa0Qsa0JBQWtCRixnQkFBcEIsQ0FBSixFQUNFLE1BQU0sSUFBSXhGLGNBQUosRUFBTjtBQUNGLFlBQUkwRixPQUFPQyxPQUFYLEVBQW9CO0FBQ2xCLGNBQU1KLFFBQVF6TCxTQUFTa0ksYUFBVCxDQUF1QiwyQkFBdkIsQ0FBZDtBQUNBLGNBQUksRUFBRXVELGlCQUFpQkMsZ0JBQW5CLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47QUFDRnVGLGdCQUFNRSxLQUFOO0FBQ0Q7QUFDRixPQVRELEVBU0csR0FUSCxFQVNRckcsR0FBR3lELE1BVFg7QUFVRCxLQVhELEVBV0d4RCxNQVhIOztBQWFBO0FBQ0EsUUFBSWUsbUJBQVNDLEtBQVQsQ0FBZTZELFVBQW5CLENBQThCLG9CQUE5QixFQUNFLElBQUk5RCxtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEIsMkJBQTVCLEVBQXlELE9BQXpELEVBQWtFLFlBQU07QUFDdEUsVUFBTWtILFNBQVM1TCxTQUFTa0ksYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZjtBQUNBLFVBQUksRUFBRTBELGtCQUFrQkYsZ0JBQXBCLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47QUFDRixVQUFJLENBQUMwRixPQUFPQyxPQUFaLEVBQXFCO0FBQ25CRCxlQUFPQyxPQUFQLEdBQWlCLElBQWpCO0FBQ0FELGVBQU9FLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixRQUFoQixDQUFyQjtBQUNEO0FBQ0YsS0FSRCxDQURGOztBQVdBLHFDQTFEd0QsQ0EwRHRCO0FBQ2xDLFFBQUl6RixtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEJuRCxNQUE1QixFQUFvQyxTQUFwQyxFQUErQyxjQUFNO0FBQXlCO0FBQzVFLFVBQU1xSyxTQUFTNUwsU0FBU2tJLGFBQVQsQ0FBdUIseUJBQXZCLENBQWY7QUFDQSxVQUFJLEVBQUUwRCxrQkFBa0JGLGdCQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJeEYsY0FBSixFQUFOO0FBQ0YsVUFBTXVGLFFBQVF6TCxTQUFTa0ksYUFBVCxDQUF1QiwyQkFBdkIsQ0FBZDtBQUNBLFVBQUksRUFBRXVELGlCQUFpQkMsZ0JBQW5CLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47O0FBRUY7QUFDQSxVQUFJWixHQUFHMEcsT0FBSCxJQUFjMUcsR0FBRzJHLE9BQXJCLEVBQ0U7O0FBRUY7QUFDQSxVQUFJTCxPQUFPQyxPQUFYLEVBQW9COztBQUVsQjtBQUNBLFlBQUl2RyxHQUFHNEcsT0FBSCxLQUFlLEVBQW5CLEVBQXVCO0FBQ3JCLGNBQUlULFVBQVV6TCxTQUFTbU0sYUFBdkIsRUFBc0M7QUFDcEM3RyxlQUFHOEcsY0FBSDs7QUFFQTtBQUNBLGdCQUFNVCxRQUFRM0wsU0FBU2tJLGFBQVQsQ0FDWix5REFEWSxDQUFkO0FBRUEsZ0JBQUl5RCxpQkFBaUJVLGVBQXJCLEVBQXNDO0FBQ3BDOUsscUJBQU8ySCxRQUFQLEdBQWtCeUMsTUFBTVcsWUFBTixDQUFtQixNQUFuQixDQUFsQjs7QUFFQTtBQUNBVixxQkFBT0MsT0FBUCxHQUFpQixLQUFqQjtBQUNBRCxxQkFBT0UsYUFBUCxDQUFxQixJQUFJQyxXQUFKLENBQWdCLFFBQWhCLENBQXJCO0FBQ0FOLG9CQUFNaEIsSUFBTjtBQUNEO0FBQ0Y7O0FBRUg7QUFDQyxTQWxCRCxNQWtCTyxJQUFJbkYsR0FBRzRHLE9BQUgsS0FBZSxDQUFmLElBQW9CNUcsR0FBRzRHLE9BQUgsS0FBZSxFQUF2QyxFQUEyQztBQUNoRE4saUJBQU9DLE9BQVAsR0FBaUIsS0FBakI7QUFDQUQsaUJBQU9FLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixRQUFoQixDQUFyQjtBQUNBTixnQkFBTWhCLElBQU47O0FBRUY7QUFDQyxTQU5NLE1BTUEsSUFBSSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZOEIsT0FBWixDQUFvQmpILEdBQUc0RyxPQUF2QixNQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQ2pELGNBQUlULFVBQVV6TCxTQUFTbU0sYUFBdkIsRUFDRVYsTUFBTUUsS0FBTjs7QUFFSjtBQUNDLFNBTE0sTUFLQSxJQUFJLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU1ksT0FBVCxDQUFpQmpILEdBQUc0RyxPQUFwQixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQzlDLGNBQU03SSxNQUFNaUMsR0FBRzRHLE9BQWY7O0FBRUE7QUFDQSxjQUFNTSxRQUFRdk0sTUFBTUMsU0FBTixDQUFnQjZFLEtBQWhCLENBQXNCM0UsSUFBdEIsQ0FDWkosU0FBU2dGLGdCQUFULENBQ0UsOERBREYsQ0FEWSxDQUFkOztBQUlBO0FBQ0EsY0FBTTJHLFNBQVFhLE1BQU1DLElBQU4sQ0FBVyxnQkFBUTtBQUMvQixnQkFBSSxFQUFFQyxnQkFBZ0JsRyxXQUFsQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixtQkFBT3dHLEtBQUt0RSxPQUFMLENBQWF1RSxPQUFiLEtBQXlCLFFBQWhDO0FBQ0QsV0FKYSxDQUFkO0FBS0EsY0FBSWhCLE1BQUosRUFDRUEsT0FBTXZELE9BQU4sQ0FBY3VFLE9BQWQsR0FBd0IsRUFBeEI7O0FBRUY7QUFDQSxjQUFNakwsUUFBUWtMLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FDeEJMLE1BQU1ELE9BQU4sQ0FBY1osTUFBZCxJQUF1QmEsTUFBTU0sTUFBN0IsSUFBdUN6SixRQUFRLEVBQVIsR0FBYSxDQUFDLENBQWQsR0FBa0IsQ0FBQyxDQUExRCxDQUR3QixJQUV0Qm1KLE1BQU1NLE1BRkksQ0FBZDs7QUFJQTtBQUNBLGNBQUlOLE1BQU05SyxLQUFOLENBQUosRUFBa0I7QUFDaEI4SyxrQkFBTTlLLEtBQU4sRUFBYTBHLE9BQWIsQ0FBcUJ1RSxPQUFyQixHQUErQixRQUEvQjtBQUNBSCxrQkFBTTlLLEtBQU4sRUFBYWlLLEtBQWI7QUFDRDs7QUFFRDtBQUNBckcsYUFBRzhHLGNBQUg7QUFDQTlHLGFBQUd5SCxlQUFIOztBQUVBO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUVIO0FBQ0MsT0FyRUQsTUFxRU8sSUFBSS9NLFNBQVNtTSxhQUFULElBQTBCLENBQUNuTSxTQUFTbU0sYUFBVCxDQUF1QmEsSUFBdEQsRUFBNEQ7O0FBRWpFO0FBQ0EsWUFBSTFILEdBQUc0RyxPQUFILEtBQWUsRUFBZixJQUFxQjVHLEdBQUc0RyxPQUFILEtBQWUsRUFBeEMsRUFBNEM7QUFDMUNULGdCQUFNRSxLQUFOO0FBQ0FyRyxhQUFHOEcsY0FBSDtBQUNEO0FBQ0Y7QUFDRixLQTFGRCxFQTBGRzdHLE1BMUZIOztBQTRGQTtBQUNBLFFBQUllLG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0Qm5ELE1BQTVCLEVBQW9DLFVBQXBDLEVBQWdELFlBQU07QUFDcEQsVUFBTXFLLFNBQVM1TCxTQUFTa0ksYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZjtBQUNBLFVBQUksRUFBRTBELGtCQUFrQkYsZ0JBQXBCLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47QUFDRixVQUFJMEYsT0FBT0MsT0FBWCxFQUFvQjtBQUNsQixZQUFNSixRQUFRekwsU0FBU2tJLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWQ7QUFDQSxZQUFJLEVBQUV1RCxpQkFBaUJDLGdCQUFuQixDQUFKLEVBQ0UsTUFBTSxJQUFJeEYsY0FBSixFQUFOO0FBQ0YsWUFBSXVGLFVBQVV6TCxTQUFTbU0sYUFBdkIsRUFDRVYsTUFBTUUsS0FBTjtBQUNIO0FBQ0YsS0FYRCxFQVdHcEcsTUFYSDtBQVlEOztBQUVEO0FBQ0EsTUFBSWUsbUJBQVNDLEtBQVQsQ0FBZTdCLFFBQW5CLENBQTRCMUUsU0FBUytDLElBQXJDLEVBQTJDLFNBQTNDLEVBQXNELGNBQU07QUFDMUQsUUFBSXVDLEdBQUc0RyxPQUFILEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsVUFBTWUsU0FBU2pOLFNBQVNnRixnQkFBVCxDQUNiLG1FQURhLENBQWY7QUFFQS9FLFlBQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QjZNLE1BQTdCLEVBQXFDLGlCQUFTO0FBQzVDLFlBQUlDLE1BQU1yRCxZQUFWLEVBQ0VxRCxNQUFNQyxRQUFOLEdBQWlCLENBQWpCO0FBQ0gsT0FIRDtBQUlEO0FBQ0YsR0FURCxFQVNHNUgsTUFUSDs7QUFXQTtBQUNBLE1BQUllLG1CQUFTQyxLQUFULENBQWU3QixRQUFuQixDQUE0QjFFLFNBQVMrQyxJQUFyQyxFQUEyQyxXQUEzQyxFQUF3RCxZQUFNO0FBQzVELFFBQU1rSyxTQUFTak4sU0FBU2dGLGdCQUFULENBQ2Isd0RBRGEsQ0FBZjtBQUVBL0UsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCNk0sTUFBN0IsRUFBcUMsaUJBQVM7QUFDNUNDLFlBQU1qRSxlQUFOLENBQXNCLFVBQXRCO0FBQ0QsS0FGRDtBQUdELEdBTkQsRUFNRzFELE1BTkg7O0FBUUF2RixXQUFTK0MsSUFBVCxDQUFjeUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1QyxRQUFJeEYsU0FBUytDLElBQVQsQ0FBY3FGLE9BQWQsQ0FBc0J1RSxPQUF0QixLQUFrQyxTQUF0QyxFQUNFM00sU0FBUytDLElBQVQsQ0FBY3FGLE9BQWQsQ0FBc0J1RSxPQUF0QixHQUFnQyxFQUFoQztBQUNILEdBSEQ7O0FBS0E7QUFDQSxNQUFJckcsbUJBQVNDLEtBQVQsQ0FBZTZELFVBQW5CLENBQThCLG9CQUE5QixFQUNFLElBQUk5RCxtQkFBU0MsS0FBVCxDQUFlN0IsUUFBbkIsQ0FBNEIsNENBQTVCLEVBQ0UsT0FERixFQUNXLFlBQU07QUFDYixRQUFNa0gsU0FBUzVMLFNBQVNrSSxhQUFULENBQXVCLHlCQUF2QixDQUFmO0FBQ0EsUUFBSSxFQUFFMEQsa0JBQWtCRixnQkFBcEIsQ0FBSixFQUNFLE1BQU0sSUFBSXhGLGNBQUosRUFBTjtBQUNGLFFBQUkwRixPQUFPQyxPQUFYLEVBQW9CO0FBQ2xCRCxhQUFPQyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FELGFBQU9FLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixRQUFoQixDQUFyQjtBQUNEO0FBQ0YsR0FUSCxDQURGOztBQVlBO0FBWkEsR0FhQyxDQUFDLFlBQU07QUFDTixRQUFNaE0sS0FBS0MsU0FBU2tJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVg7QUFDQSxRQUFJLENBQUNuSSxFQUFMLEVBQ0UsT0FBT2dDLDBCQUFRQyxPQUFSLENBQWdCLEVBQWhCLENBQVAsQ0FERixLQUVLLElBQUksRUFBRWpDLGNBQWNxTixpQkFBaEIsQ0FBSixFQUNILE1BQU0sSUFBSWxILGNBQUosRUFBTjtBQUNGLFlBQVFuRyxHQUFHcUksT0FBSCxDQUFXaUYsUUFBbkI7QUFDRSxXQUFLLFFBQUw7QUFBZSxlQUFPLElBQUkvRyxtQkFBU2dILE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXdCQyxNQUE1QixDQUFtQ3pOLEVBQW5DLEVBQXVDNEIsS0FBdkMsRUFBUDtBQUNmO0FBQVMsZUFBT0ksMEJBQVFDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUZYOztBQUtGO0FBQ0MsR0FaQSxJQVlJaUMsSUFaSixDQVlTLGlCQUFTO0FBQ2pCLFFBQU13SixVQUFVek4sU0FBU2dGLGdCQUFULENBQTBCLGtCQUExQixDQUFoQjtBQUNBL0UsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCcU4sT0FBN0IsRUFBc0Msa0JBQVU7QUFDOUMsVUFBSW5ILG1CQUFTZ0gsTUFBVCxDQUFnQkksVUFBcEIsQ0FBK0JDLE1BQS9CLEVBQ0d2SCxVQURILENBQ2N3SCxLQURkO0FBRUQsS0FIRDtBQUlELEdBbEJBO0FBbUJGOztBQUVEOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNO0FBQ1Z6SDtBQURVLENBQVo7O1FBS0V5SCxHLEdBQUFBLEc7Ozs7Ozs7QUN2Z0JGLGlCQUFpQixxQkFBdUIsdUM7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG9DOzs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixvQzs7Ozs7O0FDQXhDLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNWLE1BQUksT0FBT3RNLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakM7QUFDRDs7QUFFRCxNQUFJO0FBQ0YsUUFBSXVNLEtBQUssSUFBSXZNLE9BQU93SyxXQUFYLENBQXVCLE1BQXZCLEVBQStCLEVBQUVnQyxZQUFZLElBQWQsRUFBL0IsQ0FBVDtBQUNBRCxPQUFHMUIsY0FBSDtBQUNBLFFBQUkwQixHQUFHRSxnQkFBSCxLQUF3QixJQUE1QixFQUFrQztBQUNoQztBQUNBO0FBQ0EsWUFBTSxJQUFJQyxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FSRCxDQVFFLE9BQU8zTSxDQUFQLEVBQVU7QUFDVixRQUFJeUssY0FBYyxTQUFkQSxXQUFjLENBQVN0RyxLQUFULEVBQWdCeUksTUFBaEIsRUFBd0I7QUFDeEMsVUFBSUMsR0FBSixFQUFTQyxXQUFUO0FBQ0FGLGVBQVNBLFVBQVU7QUFDakJHLGlCQUFTLEtBRFE7QUFFakJOLG9CQUFZLEtBRks7QUFHakJPLGdCQUFRQztBQUhTLE9BQW5COztBQU1BSixZQUFNbk8sU0FBU3dPLFdBQVQsQ0FBcUIsYUFBckIsQ0FBTjtBQUNBTCxVQUFJTSxlQUFKLENBQ0VoSixLQURGLEVBRUV5SSxPQUFPRyxPQUZULEVBR0VILE9BQU9ILFVBSFQsRUFJRUcsT0FBT0ksTUFKVDtBQU1BRixvQkFBY0QsSUFBSS9CLGNBQWxCO0FBQ0ErQixVQUFJL0IsY0FBSixHQUFxQixZQUFXO0FBQzlCZ0Msb0JBQVloTyxJQUFaLENBQWlCLElBQWpCO0FBQ0EsWUFBSTtBQUNGQyxpQkFBT3FPLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLEVBQWdEO0FBQzlDbkssaUJBQUssZUFBVztBQUNkLHFCQUFPLElBQVA7QUFDRDtBQUg2QyxXQUFoRDtBQUtELFNBTkQsQ0FNRSxPQUFPakQsQ0FBUCxFQUFVO0FBQ1YsZUFBSzBNLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0Q7QUFDRixPQVhEO0FBWUEsYUFBT0csR0FBUDtBQUNELEtBN0JEOztBQStCQXBDLGdCQUFZN0wsU0FBWixHQUF3QnFCLE9BQU9nRixLQUFQLENBQWFyRyxTQUFyQztBQUNBcUIsV0FBT3dLLFdBQVAsR0FBcUJBLFdBQXJCLENBakNVLENBaUN3QjtBQUNuQztBQUNGLENBaERELEk7Ozs7Ozs7OztBQ05BLElBQUksQ0FBQ3hLLE9BQU9JLEtBQVosRUFBbUJKLE9BQU9JLEtBQVAsR0FBZWdOLG1CQUFPQSxDQUFDLENBQVIsRUFBYUMsT0FBYixJQUF3QkQsbUJBQU9BLENBQUMsQ0FBUixDQUF2QyxDOzs7Ozs7Ozs7Ozs7O0FDQW5COzs7Ozs7QUFFQTtBQUNBO0FBQ0EsSUFBSUUsaUJBQWlCbkcsVUFBckI7O0FBRUEsU0FBU29HLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEI7QUFDQSxTQUFTbE4sSUFBVCxDQUFjbU4sRUFBZCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDekIsU0FBTyxZQUFXO0FBQ2hCRCxPQUFHRSxLQUFILENBQVNELE9BQVQsRUFBa0JFLFNBQWxCO0FBQ0QsR0FGRDtBQUdEOztBQUVEOzs7O0FBSUEsU0FBU25OLE9BQVQsQ0FBaUJnTixFQUFqQixFQUFxQjtBQUNuQixNQUFJLEVBQUUsZ0JBQWdCaE4sT0FBbEIsQ0FBSixFQUNFLE1BQU0sSUFBSW9OLFNBQUosQ0FBYyxzQ0FBZCxDQUFOO0FBQ0YsTUFBSSxPQUFPSixFQUFQLEtBQWMsVUFBbEIsRUFBOEIsTUFBTSxJQUFJSSxTQUFKLENBQWMsZ0JBQWQsQ0FBTjtBQUM5QjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0E7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0E7QUFDQSxPQUFLQyxNQUFMLEdBQWNmLFNBQWQ7QUFDQTtBQUNBLE9BQUtnQixVQUFMLEdBQWtCLEVBQWxCOztBQUVBQyxZQUFVVCxFQUFWLEVBQWMsSUFBZDtBQUNEOztBQUVELFNBQVNVLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCQyxRQUF0QixFQUFnQztBQUM5QixTQUFPRCxLQUFLTixNQUFMLEtBQWdCLENBQXZCLEVBQTBCO0FBQ3hCTSxXQUFPQSxLQUFLSixNQUFaO0FBQ0Q7QUFDRCxNQUFJSSxLQUFLTixNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTSxTQUFLSCxVQUFMLENBQWdCaE0sSUFBaEIsQ0FBcUJvTSxRQUFyQjtBQUNBO0FBQ0Q7QUFDREQsT0FBS0wsUUFBTCxHQUFnQixJQUFoQjtBQUNBdE4sVUFBUTZOLFlBQVIsQ0FBcUIsWUFBVztBQUM5QixRQUFJQyxLQUFLSCxLQUFLTixNQUFMLEtBQWdCLENBQWhCLEdBQW9CTyxTQUFTRyxXQUE3QixHQUEyQ0gsU0FBU0ksVUFBN0Q7QUFDQSxRQUFJRixPQUFPLElBQVgsRUFBaUI7QUFDZixPQUFDSCxLQUFLTixNQUFMLEtBQWdCLENBQWhCLEdBQW9CcE4sT0FBcEIsR0FBOEJDLE1BQS9CLEVBQXVDME4sU0FBU0ssT0FBaEQsRUFBeUROLEtBQUtKLE1BQTlEO0FBQ0E7QUFDRDtBQUNELFFBQUlXLEdBQUo7QUFDQSxRQUFJO0FBQ0ZBLFlBQU1KLEdBQUdILEtBQUtKLE1BQVIsQ0FBTjtBQUNELEtBRkQsQ0FFRSxPQUFPaE8sQ0FBUCxFQUFVO0FBQ1ZXLGFBQU8wTixTQUFTSyxPQUFoQixFQUF5QjFPLENBQXpCO0FBQ0E7QUFDRDtBQUNEVSxZQUFRMk4sU0FBU0ssT0FBakIsRUFBMEJDLEdBQTFCO0FBQ0QsR0FkRDtBQWVEOztBQUVELFNBQVNqTyxPQUFULENBQWlCME4sSUFBakIsRUFBdUJRLFFBQXZCLEVBQWlDO0FBQy9CLE1BQUk7QUFDRjtBQUNBLFFBQUlBLGFBQWFSLElBQWpCLEVBQ0UsTUFBTSxJQUFJUCxTQUFKLENBQWMsMkNBQWQsQ0FBTjtBQUNGLFFBQ0VlLGFBQ0MsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUFwQixJQUFnQyxPQUFPQSxRQUFQLEtBQW9CLFVBRHJELENBREYsRUFHRTtBQUNBLFVBQUlqTSxPQUFPaU0sU0FBU2pNLElBQXBCO0FBQ0EsVUFBSWlNLG9CQUFvQm5PLE9BQXhCLEVBQWlDO0FBQy9CMk4sYUFBS04sTUFBTCxHQUFjLENBQWQ7QUFDQU0sYUFBS0osTUFBTCxHQUFjWSxRQUFkO0FBQ0FDLGVBQU9ULElBQVA7QUFDQTtBQUNELE9BTEQsTUFLTyxJQUFJLE9BQU96TCxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQ3JDdUwsa0JBQVU1TixLQUFLcUMsSUFBTCxFQUFXaU0sUUFBWCxDQUFWLEVBQWdDUixJQUFoQztBQUNBO0FBQ0Q7QUFDRjtBQUNEQSxTQUFLTixNQUFMLEdBQWMsQ0FBZDtBQUNBTSxTQUFLSixNQUFMLEdBQWNZLFFBQWQ7QUFDQUMsV0FBT1QsSUFBUDtBQUNELEdBdEJELENBc0JFLE9BQU9wTyxDQUFQLEVBQVU7QUFDVlcsV0FBT3lOLElBQVAsRUFBYXBPLENBQWI7QUFDRDtBQUNGOztBQUVELFNBQVNXLE1BQVQsQ0FBZ0J5TixJQUFoQixFQUFzQlEsUUFBdEIsRUFBZ0M7QUFDOUJSLE9BQUtOLE1BQUwsR0FBYyxDQUFkO0FBQ0FNLE9BQUtKLE1BQUwsR0FBY1ksUUFBZDtBQUNBQyxTQUFPVCxJQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsTUFBVCxDQUFnQlQsSUFBaEIsRUFBc0I7QUFDcEIsTUFBSUEsS0FBS04sTUFBTCxLQUFnQixDQUFoQixJQUFxQk0sS0FBS0gsVUFBTCxDQUFnQnpDLE1BQWhCLEtBQTJCLENBQXBELEVBQXVEO0FBQ3JEL0ssWUFBUTZOLFlBQVIsQ0FBcUIsWUFBVztBQUM5QixVQUFJLENBQUNGLEtBQUtMLFFBQVYsRUFBb0I7QUFDbEJ0TixnQkFBUXFPLHFCQUFSLENBQThCVixLQUFLSixNQUFuQztBQUNEO0FBQ0YsS0FKRDtBQUtEOztBQUVELE9BQUssSUFBSWhOLElBQUksQ0FBUixFQUFXK04sTUFBTVgsS0FBS0gsVUFBTCxDQUFnQnpDLE1BQXRDLEVBQThDeEssSUFBSStOLEdBQWxELEVBQXVEL04sR0FBdkQsRUFBNEQ7QUFDMURtTixXQUFPQyxJQUFQLEVBQWFBLEtBQUtILFVBQUwsQ0FBZ0JqTixDQUFoQixDQUFiO0FBQ0Q7QUFDRG9OLE9BQUtILFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBU2UsT0FBVCxDQUFpQlIsV0FBakIsRUFBOEJDLFVBQTlCLEVBQTBDQyxPQUExQyxFQUFtRDtBQUNqRCxPQUFLRixXQUFMLEdBQW1CLE9BQU9BLFdBQVAsS0FBdUIsVUFBdkIsR0FBb0NBLFdBQXBDLEdBQWtELElBQXJFO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixPQUFPQSxVQUFQLEtBQXNCLFVBQXRCLEdBQW1DQSxVQUFuQyxHQUFnRCxJQUFsRTtBQUNBLE9BQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTUixTQUFULENBQW1CVCxFQUFuQixFQUF1QlcsSUFBdkIsRUFBNkI7QUFDM0IsTUFBSWEsT0FBTyxLQUFYO0FBQ0EsTUFBSTtBQUNGeEIsT0FDRSxVQUFTekwsS0FBVCxFQUFnQjtBQUNkLFVBQUlpTixJQUFKLEVBQVU7QUFDVkEsYUFBTyxJQUFQO0FBQ0F2TyxjQUFRME4sSUFBUixFQUFjcE0sS0FBZDtBQUNELEtBTEgsRUFNRSxVQUFTa04sTUFBVCxFQUFpQjtBQUNmLFVBQUlELElBQUosRUFBVTtBQUNWQSxhQUFPLElBQVA7QUFDQXRPLGFBQU95TixJQUFQLEVBQWFjLE1BQWI7QUFDRCxLQVZIO0FBWUQsR0FiRCxDQWFFLE9BQU9DLEVBQVAsRUFBVztBQUNYLFFBQUlGLElBQUosRUFBVTtBQUNWQSxXQUFPLElBQVA7QUFDQXRPLFdBQU95TixJQUFQLEVBQWFlLEVBQWI7QUFDRDtBQUNGOztBQUVEMU8sUUFBUTdCLFNBQVIsQ0FBa0IsT0FBbEIsSUFBNkIsVUFBUzZQLFVBQVQsRUFBcUI7QUFDaEQsU0FBTyxLQUFLOUwsSUFBTCxDQUFVLElBQVYsRUFBZ0I4TCxVQUFoQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQWhPLFFBQVE3QixTQUFSLENBQWtCK0QsSUFBbEIsR0FBeUIsVUFBUzZMLFdBQVQsRUFBc0JDLFVBQXRCLEVBQWtDO0FBQ3pEO0FBQ0EsTUFBSVcsT0FBTyxJQUFJLEtBQUtDLFdBQVQsQ0FBcUI3QixJQUFyQixDQUFYOztBQUVBVyxTQUFPLElBQVAsRUFBYSxJQUFJYSxPQUFKLENBQVlSLFdBQVosRUFBeUJDLFVBQXpCLEVBQXFDVyxJQUFyQyxDQUFiO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBTkQ7O0FBUUEzTyxRQUFRN0IsU0FBUixDQUFrQixTQUFsQixJQUErQjBRLGlCQUEvQjs7QUFFQTdPLFFBQVFpQixHQUFSLEdBQWMsVUFBUzZOLEdBQVQsRUFBYztBQUMxQixTQUFPLElBQUk5TyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0MsUUFBSSxDQUFDNE8sR0FBRCxJQUFRLE9BQU9BLElBQUkvRCxNQUFYLEtBQXNCLFdBQWxDLEVBQ0UsTUFBTSxJQUFJcUMsU0FBSixDQUFjLDhCQUFkLENBQU47QUFDRixRQUFJMkIsT0FBTzdRLE1BQU1DLFNBQU4sQ0FBZ0I2RSxLQUFoQixDQUFzQjNFLElBQXRCLENBQTJCeVEsR0FBM0IsQ0FBWDtBQUNBLFFBQUlDLEtBQUtoRSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCLE9BQU85SyxRQUFRLEVBQVIsQ0FBUDtBQUN2QixRQUFJK08sWUFBWUQsS0FBS2hFLE1BQXJCOztBQUVBLGFBQVNrRSxHQUFULENBQWExTyxDQUFiLEVBQWdCMk8sR0FBaEIsRUFBcUI7QUFDbkIsVUFBSTtBQUNGLFlBQUlBLFFBQVEsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQWYsSUFBMkIsT0FBT0EsR0FBUCxLQUFlLFVBQWxELENBQUosRUFBbUU7QUFDakUsY0FBSWhOLE9BQU9nTixJQUFJaE4sSUFBZjtBQUNBLGNBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QkEsaUJBQUs3RCxJQUFMLENBQ0U2USxHQURGLEVBRUUsVUFBU0EsR0FBVCxFQUFjO0FBQ1pELGtCQUFJMU8sQ0FBSixFQUFPMk8sR0FBUDtBQUNELGFBSkgsRUFLRWhQLE1BTEY7QUFPQTtBQUNEO0FBQ0Y7QUFDRDZPLGFBQUt4TyxDQUFMLElBQVUyTyxHQUFWO0FBQ0EsWUFBSSxFQUFFRixTQUFGLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCL08sa0JBQVE4TyxJQUFSO0FBQ0Q7QUFDRixPQWxCRCxDQWtCRSxPQUFPTCxFQUFQLEVBQVc7QUFDWHhPLGVBQU93TyxFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFLLElBQUluTyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3TyxLQUFLaEUsTUFBekIsRUFBaUN4SyxHQUFqQyxFQUFzQztBQUNwQzBPLFVBQUkxTyxDQUFKLEVBQU93TyxLQUFLeE8sQ0FBTCxDQUFQO0FBQ0Q7QUFDRixHQWxDTSxDQUFQO0FBbUNELENBcENEOztBQXNDQVAsUUFBUUMsT0FBUixHQUFrQixVQUFTc0IsS0FBVCxFQUFnQjtBQUNoQyxNQUFJQSxTQUFTLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBMUIsSUFBc0NBLE1BQU1xTixXQUFOLEtBQXNCNU8sT0FBaEUsRUFBeUU7QUFDdkUsV0FBT3VCLEtBQVA7QUFDRDs7QUFFRCxTQUFPLElBQUl2QixPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQjtBQUNuQ0EsWUFBUXNCLEtBQVI7QUFDRCxHQUZNLENBQVA7QUFHRCxDQVJEOztBQVVBdkIsUUFBUUUsTUFBUixHQUFpQixVQUFTcUIsS0FBVCxFQUFnQjtBQUMvQixTQUFPLElBQUl2QixPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0NBLFdBQU9xQixLQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7QUFNQXZCLFFBQVFtUCxJQUFSLEdBQWUsVUFBU0MsTUFBVCxFQUFpQjtBQUM5QixTQUFPLElBQUlwUCxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0MsU0FBSyxJQUFJSyxJQUFJLENBQVIsRUFBVytOLE1BQU1jLE9BQU9yRSxNQUE3QixFQUFxQ3hLLElBQUkrTixHQUF6QyxFQUE4Qy9OLEdBQTlDLEVBQW1EO0FBQ2pENk8sYUFBTzdPLENBQVAsRUFBVTJCLElBQVYsQ0FBZWpDLE9BQWYsRUFBd0JDLE1BQXhCO0FBQ0Q7QUFDRixHQUpNLENBQVA7QUFLRCxDQU5EOztBQVFBO0FBQ0FGLFFBQVE2TixZQUFSLEdBQ0csT0FBT3dCLFlBQVAsS0FBd0IsVUFBeEIsSUFDQyxVQUFTckMsRUFBVCxFQUFhO0FBQ1hxQyxlQUFhckMsRUFBYjtBQUNELENBSEgsSUFJQSxVQUFTQSxFQUFULEVBQWE7QUFDWEYsaUJBQWVFLEVBQWYsRUFBbUIsQ0FBbkI7QUFDRCxDQVBIOztBQVNBaE4sUUFBUXFPLHFCQUFSLEdBQWdDLFNBQVNBLHFCQUFULENBQStCaUIsR0FBL0IsRUFBb0M7QUFDbEUsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUF0QyxFQUErQztBQUM3Q0EsWUFBUUMsSUFBUixDQUFhLHVDQUFiLEVBQXNERixHQUF0RCxFQUQ2QyxDQUNlO0FBQzdEO0FBQ0YsQ0FKRDs7a0JBTWV0UCxPOzs7Ozs7Ozs7O0FDL09mLElBQUl5UCxRQUFTLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQWxDLElBQ0MsT0FBTy9CLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBRGhDLElBRUFuTyxNQUZaO0FBR0EsSUFBSTBOLFFBQVE3TixTQUFTbEIsU0FBVCxDQUFtQitPLEtBQS9COztBQUVBOztBQUVBeE4sUUFBUWlILFVBQVIsR0FBcUIsWUFBVztBQUM5QixTQUFPLElBQUlnSixPQUFKLENBQVl6QyxNQUFNN08sSUFBTixDQUFXc0ksVUFBWCxFQUF1QjhJLEtBQXZCLEVBQThCdEMsU0FBOUIsQ0FBWixFQUFzRDVHLFlBQXRELENBQVA7QUFDRCxDQUZEO0FBR0E3RyxRQUFRa1EsV0FBUixHQUFzQixZQUFXO0FBQy9CLFNBQU8sSUFBSUQsT0FBSixDQUFZekMsTUFBTTdPLElBQU4sQ0FBV3VSLFdBQVgsRUFBd0JILEtBQXhCLEVBQStCdEMsU0FBL0IsQ0FBWixFQUF1RDBDLGFBQXZELENBQVA7QUFDRCxDQUZEO0FBR0FuUSxRQUFRNkcsWUFBUixHQUNBN0csUUFBUW1RLGFBQVIsR0FBd0IsVUFBU0MsT0FBVCxFQUFrQjtBQUN4QyxNQUFJQSxPQUFKLEVBQWE7QUFDWEEsWUFBUUMsS0FBUjtBQUNEO0FBQ0YsQ0FMRDs7QUFPQSxTQUFTSixPQUFULENBQWlCaEssRUFBakIsRUFBcUJxSyxPQUFyQixFQUE4QjtBQUM1QixPQUFLQyxHQUFMLEdBQVd0SyxFQUFYO0FBQ0EsT0FBS3VLLFFBQUwsR0FBZ0JGLE9BQWhCO0FBQ0Q7QUFDREwsUUFBUXhSLFNBQVIsQ0FBa0JnUyxLQUFsQixHQUEwQlIsUUFBUXhSLFNBQVIsQ0FBa0JpUyxHQUFsQixHQUF3QixZQUFXLENBQUUsQ0FBL0Q7QUFDQVQsUUFBUXhSLFNBQVIsQ0FBa0I0UixLQUFsQixHQUEwQixZQUFXO0FBQ25DLE9BQUtHLFFBQUwsQ0FBYzdSLElBQWQsQ0FBbUJvUixLQUFuQixFQUEwQixLQUFLUSxHQUEvQjtBQUNELENBRkQ7O0FBSUE7QUFDQXZRLFFBQVEyUSxNQUFSLEdBQWlCLFVBQVMxSSxJQUFULEVBQWUySSxLQUFmLEVBQXNCO0FBQ3JDL0osZUFBYW9CLEtBQUs0SSxjQUFsQjtBQUNBNUksT0FBSzZJLFlBQUwsR0FBb0JGLEtBQXBCO0FBQ0QsQ0FIRDs7QUFLQTVRLFFBQVErUSxRQUFSLEdBQW1CLFVBQVM5SSxJQUFULEVBQWU7QUFDaENwQixlQUFhb0IsS0FBSzRJLGNBQWxCO0FBQ0E1SSxPQUFLNkksWUFBTCxHQUFvQixDQUFDLENBQXJCO0FBQ0QsQ0FIRDs7QUFLQTlRLFFBQVFnUixZQUFSLEdBQXVCaFIsUUFBUWlSLE1BQVIsR0FBaUIsVUFBU2hKLElBQVQsRUFBZTtBQUNyRHBCLGVBQWFvQixLQUFLNEksY0FBbEI7O0FBRUEsTUFBSUQsUUFBUTNJLEtBQUs2SSxZQUFqQjtBQUNBLE1BQUlGLFNBQVMsQ0FBYixFQUFnQjtBQUNkM0ksU0FBSzRJLGNBQUwsR0FBc0I1SixXQUFXLFNBQVNpSyxTQUFULEdBQXFCO0FBQ3BELFVBQUlqSixLQUFLa0osVUFBVCxFQUNFbEosS0FBS2tKLFVBQUw7QUFDSCxLQUhxQixFQUduQlAsS0FIbUIsQ0FBdEI7QUFJRDtBQUNGLENBVkQ7O0FBWUE7QUFDQTFELG1CQUFPQSxDQUFDLEVBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDQWxOLFFBQVEyUCxZQUFSLEdBQXdCLE9BQU8xQixJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxLQUFLMEIsWUFBckMsSUFDQyxPQUFPSyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPTCxZQUR6QyxJQUVDLGFBQVEsVUFBS0EsWUFGckM7QUFHQTNQLFFBQVFvUixjQUFSLEdBQTBCLE9BQU9uRCxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxLQUFLbUQsY0FBckMsSUFDQyxPQUFPcEIsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT29CLGNBRHpDLElBRUMsYUFBUSxVQUFLQSxjQUZ2QyxDOzs7Ozs7Ozs7O0FDNURDLFdBQVVwQixNQUFWLEVBQWtCbEQsU0FBbEIsRUFBNkI7QUFDMUI7O0FBRUEsUUFBSWtELE9BQU9MLFlBQVgsRUFBeUI7QUFDckI7QUFDSDs7QUFFRCxRQUFJMEIsYUFBYSxDQUFqQixDQVAwQixDQU9OO0FBQ3BCLFFBQUlDLGdCQUFnQixFQUFwQjtBQUNBLFFBQUlDLHdCQUF3QixLQUE1QjtBQUNBLFFBQUl6SCxNQUFNa0csT0FBT3pSLFFBQWpCO0FBQ0EsUUFBSWlULGlCQUFKOztBQUVBLGFBQVM3QixZQUFULENBQXNCOEIsUUFBdEIsRUFBZ0M7QUFDOUI7QUFDQSxZQUFJLE9BQU9BLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbENBLHVCQUFXLElBQUk5UixRQUFKLENBQWEsS0FBSzhSLFFBQWxCLENBQVg7QUFDRDtBQUNEO0FBQ0EsWUFBSXBDLE9BQU8sSUFBSTdRLEtBQUosQ0FBVWlQLFVBQVVwQyxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFDQSxhQUFLLElBQUl4SyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3TyxLQUFLaEUsTUFBekIsRUFBaUN4SyxHQUFqQyxFQUFzQztBQUNsQ3dPLGlCQUFLeE8sQ0FBTCxJQUFVNE0sVUFBVTVNLElBQUksQ0FBZCxDQUFWO0FBQ0g7QUFDRDtBQUNBLFlBQUk2USxPQUFPLEVBQUVELFVBQVVBLFFBQVosRUFBc0JwQyxNQUFNQSxJQUE1QixFQUFYO0FBQ0FpQyxzQkFBY0QsVUFBZCxJQUE0QkssSUFBNUI7QUFDQUYsMEJBQWtCSCxVQUFsQjtBQUNBLGVBQU9BLFlBQVA7QUFDRDs7QUFFRCxhQUFTRCxjQUFULENBQXdCcEQsTUFBeEIsRUFBZ0M7QUFDNUIsZUFBT3NELGNBQWN0RCxNQUFkLENBQVA7QUFDSDs7QUFFRCxhQUFTMkQsR0FBVCxDQUFhRCxJQUFiLEVBQW1CO0FBQ2YsWUFBSUQsV0FBV0MsS0FBS0QsUUFBcEI7QUFDQSxZQUFJcEMsT0FBT3FDLEtBQUtyQyxJQUFoQjtBQUNBLGdCQUFRQSxLQUFLaEUsTUFBYjtBQUNBLGlCQUFLLENBQUw7QUFDSW9HO0FBQ0E7QUFDSixpQkFBSyxDQUFMO0FBQ0lBLHlCQUFTcEMsS0FBSyxDQUFMLENBQVQ7QUFDQTtBQUNKLGlCQUFLLENBQUw7QUFDSW9DLHlCQUFTcEMsS0FBSyxDQUFMLENBQVQsRUFBa0JBLEtBQUssQ0FBTCxDQUFsQjtBQUNBO0FBQ0osaUJBQUssQ0FBTDtBQUNJb0MseUJBQVNwQyxLQUFLLENBQUwsQ0FBVCxFQUFrQkEsS0FBSyxDQUFMLENBQWxCLEVBQTJCQSxLQUFLLENBQUwsQ0FBM0I7QUFDQTtBQUNKO0FBQ0lvQyx5QkFBU2pFLEtBQVQsQ0FBZVYsU0FBZixFQUEwQnVDLElBQTFCO0FBQ0E7QUFmSjtBQWlCSDs7QUFFRCxhQUFTdUMsWUFBVCxDQUFzQjVELE1BQXRCLEVBQThCO0FBQzFCO0FBQ0E7QUFDQSxZQUFJdUQscUJBQUosRUFBMkI7QUFDdkI7QUFDQTtBQUNBdEssdUJBQVcySyxZQUFYLEVBQXlCLENBQXpCLEVBQTRCNUQsTUFBNUI7QUFDSCxTQUpELE1BSU87QUFDSCxnQkFBSTBELE9BQU9KLGNBQWN0RCxNQUFkLENBQVg7QUFDQSxnQkFBSTBELElBQUosRUFBVTtBQUNOSCx3Q0FBd0IsSUFBeEI7QUFDQSxvQkFBSTtBQUNBSSx3QkFBSUQsSUFBSjtBQUNILGlCQUZELFNBRVU7QUFDTk4sbUNBQWVwRCxNQUFmO0FBQ0F1RCw0Q0FBd0IsS0FBeEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRCxhQUFTTSw2QkFBVCxHQUF5QztBQUNyQ0wsNEJBQW9CLDJCQUFTeEQsTUFBVCxFQUFpQjtBQUNqQzhELG9CQUFRQyxRQUFSLENBQWlCLFlBQVk7QUFBRUgsNkJBQWE1RCxNQUFiO0FBQXVCLGFBQXREO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVNnRSxpQkFBVCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0EsWUFBSWhDLE9BQU9pQyxXQUFQLElBQXNCLENBQUNqQyxPQUFPa0MsYUFBbEMsRUFBaUQ7QUFDN0MsZ0JBQUlDLDRCQUE0QixJQUFoQztBQUNBLGdCQUFJQyxlQUFlcEMsT0FBT3FDLFNBQTFCO0FBQ0FyQyxtQkFBT3FDLFNBQVAsR0FBbUIsWUFBVztBQUMxQkYsNENBQTRCLEtBQTVCO0FBQ0gsYUFGRDtBQUdBbkMsbUJBQU9pQyxXQUFQLENBQW1CLEVBQW5CLEVBQXVCLEdBQXZCO0FBQ0FqQyxtQkFBT3FDLFNBQVAsR0FBbUJELFlBQW5CO0FBQ0EsbUJBQU9ELHlCQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFTRyxnQ0FBVCxHQUE0QztBQUN4QztBQUNBO0FBQ0E7O0FBRUEsWUFBSUMsZ0JBQWdCLGtCQUFrQnBILEtBQUtxSCxNQUFMLEVBQWxCLEdBQWtDLEdBQXREO0FBQ0EsWUFBSUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFTek8sS0FBVCxFQUFnQjtBQUNsQyxnQkFBSUEsTUFBTWtJLE1BQU4sS0FBaUI4RCxNQUFqQixJQUNBLE9BQU9oTSxNQUFNNEYsSUFBYixLQUFzQixRQUR0QixJQUVBNUYsTUFBTTRGLElBQU4sQ0FBV2tCLE9BQVgsQ0FBbUJ5SCxhQUFuQixNQUFzQyxDQUYxQyxFQUU2QztBQUN6Q1gsNkJBQWEsQ0FBQzVOLE1BQU00RixJQUFOLENBQVd0RyxLQUFYLENBQWlCaVAsY0FBY2xILE1BQS9CLENBQWQ7QUFDSDtBQUNKLFNBTkQ7O0FBUUEsWUFBSTJFLE9BQU9qTSxnQkFBWCxFQUE2QjtBQUN6QmlNLG1CQUFPak0sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMwTyxlQUFuQyxFQUFvRCxLQUFwRDtBQUNILFNBRkQsTUFFTztBQUNIekMsbUJBQU8wQyxXQUFQLENBQW1CLFdBQW5CLEVBQWdDRCxlQUFoQztBQUNIOztBQUVEakIsNEJBQW9CLDJCQUFTeEQsTUFBVCxFQUFpQjtBQUNqQ2dDLG1CQUFPaUMsV0FBUCxDQUFtQk0sZ0JBQWdCdkUsTUFBbkMsRUFBMkMsR0FBM0M7QUFDSCxTQUZEO0FBR0g7O0FBRUQsYUFBUzJFLG1DQUFULEdBQStDO0FBQzNDLFlBQUlDLFVBQVUsSUFBSUMsY0FBSixFQUFkO0FBQ0FELGdCQUFRRSxLQUFSLENBQWNULFNBQWQsR0FBMEIsVUFBU3JPLEtBQVQsRUFBZ0I7QUFDdEMsZ0JBQUlnSyxTQUFTaEssTUFBTTRGLElBQW5CO0FBQ0FnSSx5QkFBYTVELE1BQWI7QUFDSCxTQUhEOztBQUtBd0QsNEJBQW9CLDJCQUFTeEQsTUFBVCxFQUFpQjtBQUNqQzRFLG9CQUFRRyxLQUFSLENBQWNkLFdBQWQsQ0FBMEJqRSxNQUExQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTZ0YscUNBQVQsR0FBaUQ7QUFDN0MsWUFBSUMsT0FBT25KLElBQUlvSixlQUFmO0FBQ0ExQiw0QkFBb0IsMkJBQVN4RCxNQUFULEVBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBSW1GLFNBQVNySixJQUFJM0wsYUFBSixDQUFrQixRQUFsQixDQUFiO0FBQ0FnVixtQkFBT0Msa0JBQVAsR0FBNEIsWUFBWTtBQUNwQ3hCLDZCQUFhNUQsTUFBYjtBQUNBbUYsdUJBQU9DLGtCQUFQLEdBQTRCLElBQTVCO0FBQ0FILHFCQUFLSSxXQUFMLENBQWlCRixNQUFqQjtBQUNBQSx5QkFBUyxJQUFUO0FBQ0gsYUFMRDtBQU1BRixpQkFBS3pULFdBQUwsQ0FBaUIyVCxNQUFqQjtBQUNILFNBWEQ7QUFZSDs7QUFFRCxhQUFTRywrQkFBVCxHQUEyQztBQUN2QzlCLDRCQUFvQiwyQkFBU3hELE1BQVQsRUFBaUI7QUFDakMvRyx1QkFBVzJLLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEI1RCxNQUE1QjtBQUNILFNBRkQ7QUFHSDs7QUFFRDtBQUNBLFFBQUl1RixXQUFXM1UsT0FBTzRVLGNBQVAsSUFBeUI1VSxPQUFPNFUsY0FBUCxDQUFzQnhELE1BQXRCLENBQXhDO0FBQ0F1RCxlQUFXQSxZQUFZQSxTQUFTdE0sVUFBckIsR0FBa0NzTSxRQUFsQyxHQUE2Q3ZELE1BQXhEOztBQUVBO0FBQ0EsUUFBSSxHQUFHN0ksUUFBSCxDQUFZeEksSUFBWixDQUFpQnFSLE9BQU84QixPQUF4QixNQUFxQyxrQkFBekMsRUFBNkQ7QUFDekQ7QUFDQUQ7QUFFSCxLQUpELE1BSU8sSUFBSUcsbUJBQUosRUFBeUI7QUFDNUI7QUFDQU07QUFFSCxLQUpNLE1BSUEsSUFBSXRDLE9BQU82QyxjQUFYLEVBQTJCO0FBQzlCO0FBQ0FGO0FBRUgsS0FKTSxNQUlBLElBQUk3SSxPQUFPLHdCQUF3QkEsSUFBSTNMLGFBQUosQ0FBa0IsUUFBbEIsQ0FBbkMsRUFBZ0U7QUFDbkU7QUFDQTZVO0FBRUgsS0FKTSxNQUlBO0FBQ0g7QUFDQU07QUFDSDs7QUFFREMsYUFBUzVELFlBQVQsR0FBd0JBLFlBQXhCO0FBQ0E0RCxhQUFTbkMsY0FBVCxHQUEwQkEsY0FBMUI7QUFDSCxDQXpMQSxFQXlMQyxPQUFPbkQsSUFBUCxLQUFnQixXQUFoQixHQUE4QixPQUFPK0IsTUFBUCxLQUFrQixXQUFsQixlQUF1Q0EsTUFBckUsR0FBOEUvQixJQXpML0UsQ0FBRCxDOzs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFJNkQsVUFBVS9SLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSXlULGdCQUFKO0FBQ0EsSUFBSUMsa0JBQUo7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsVUFBTSxJQUFJbkgsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDSDtBQUNELFNBQVNvSCxtQkFBVCxHQUFnQztBQUM1QixVQUFNLElBQUlwSCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIO0FBQ0EsYUFBWTtBQUNULFFBQUk7QUFDQSxZQUFJLE9BQU92RixVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ2xDd00sK0JBQW1CeE0sVUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSHdNLCtCQUFtQkUsZ0JBQW5CO0FBQ0g7QUFDSixLQU5ELENBTUUsT0FBTzlULENBQVAsRUFBVTtBQUNSNFQsMkJBQW1CRSxnQkFBbkI7QUFDSDtBQUNELFFBQUk7QUFDQSxZQUFJLE9BQU85TSxZQUFQLEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3BDNk0saUNBQXFCN00sWUFBckI7QUFDSCxTQUZELE1BRU87QUFDSDZNLGlDQUFxQkUsbUJBQXJCO0FBQ0g7QUFDSixLQU5ELENBTUUsT0FBTy9ULENBQVAsRUFBVTtBQUNSNlQsNkJBQXFCRSxtQkFBckI7QUFDSDtBQUNKLENBbkJBLEdBQUQ7QUFvQkEsU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDckIsUUFBSUwscUJBQXFCeE0sVUFBekIsRUFBcUM7QUFDakM7QUFDQSxlQUFPQSxXQUFXNk0sR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0g7QUFDRDtBQUNBLFFBQUksQ0FBQ0wscUJBQXFCRSxnQkFBckIsSUFBeUMsQ0FBQ0YsZ0JBQTNDLEtBQWdFeE0sVUFBcEUsRUFBZ0Y7QUFDNUV3TSwyQkFBbUJ4TSxVQUFuQjtBQUNBLGVBQU9BLFdBQVc2TSxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9MLGlCQUFpQkssR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFNalUsQ0FBTixFQUFRO0FBQ04sWUFBSTtBQUNBO0FBQ0EsbUJBQU80VCxpQkFBaUI5VSxJQUFqQixDQUFzQixJQUF0QixFQUE0Qm1WLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSCxTQUhELENBR0UsT0FBTWpVLENBQU4sRUFBUTtBQUNOO0FBQ0EsbUJBQU80VCxpQkFBaUI5VSxJQUFqQixDQUFzQixJQUF0QixFQUE0Qm1WLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSDtBQUNKO0FBR0o7QUFDRCxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUM3QixRQUFJTix1QkFBdUI3TSxZQUEzQixFQUF5QztBQUNyQztBQUNBLGVBQU9BLGFBQWFtTixNQUFiLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDTix1QkFBdUJFLG1CQUF2QixJQUE4QyxDQUFDRixrQkFBaEQsS0FBdUU3TSxZQUEzRSxFQUF5RjtBQUNyRjZNLDZCQUFxQjdNLFlBQXJCO0FBQ0EsZUFBT0EsYUFBYW1OLE1BQWIsQ0FBUDtBQUNIO0FBQ0QsUUFBSTtBQUNBO0FBQ0EsZUFBT04sbUJBQW1CTSxNQUFuQixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU9uVSxDQUFQLEVBQVM7QUFDUCxZQUFJO0FBQ0E7QUFDQSxtQkFBTzZULG1CQUFtQi9VLElBQW5CLENBQXdCLElBQXhCLEVBQThCcVYsTUFBOUIsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFPblUsQ0FBUCxFQUFTO0FBQ1A7QUFDQTtBQUNBLG1CQUFPNlQsbUJBQW1CL1UsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJxVixNQUE5QixDQUFQO0FBQ0g7QUFDSjtBQUlKO0FBQ0QsSUFBSUMsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsV0FBVyxLQUFmO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGFBQWEsQ0FBQyxDQUFsQjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0gsUUFBRCxJQUFhLENBQUNDLFlBQWxCLEVBQWdDO0FBQzVCO0FBQ0g7QUFDREQsZUFBVyxLQUFYO0FBQ0EsUUFBSUMsYUFBYTlJLE1BQWpCLEVBQXlCO0FBQ3JCNEksZ0JBQVFFLGFBQWEzUSxNQUFiLENBQW9CeVEsS0FBcEIsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIRyxxQkFBYSxDQUFDLENBQWQ7QUFDSDtBQUNELFFBQUlILE1BQU01SSxNQUFWLEVBQWtCO0FBQ2RpSjtBQUNIO0FBQ0o7O0FBRUQsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQixRQUFJSixRQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0QsUUFBSTlELFVBQVV5RCxXQUFXUSxlQUFYLENBQWQ7QUFDQUgsZUFBVyxJQUFYOztBQUVBLFFBQUl0RixNQUFNcUYsTUFBTTVJLE1BQWhCO0FBQ0EsV0FBTXVELEdBQU4sRUFBVztBQUNQdUYsdUJBQWVGLEtBQWY7QUFDQUEsZ0JBQVEsRUFBUjtBQUNBLGVBQU8sRUFBRUcsVUFBRixHQUFleEYsR0FBdEIsRUFBMkI7QUFDdkIsZ0JBQUl1RixZQUFKLEVBQWtCO0FBQ2RBLDZCQUFhQyxVQUFiLEVBQXlCekMsR0FBekI7QUFDSDtBQUNKO0FBQ0R5QyxxQkFBYSxDQUFDLENBQWQ7QUFDQXhGLGNBQU1xRixNQUFNNUksTUFBWjtBQUNIO0FBQ0Q4SSxtQkFBZSxJQUFmO0FBQ0FELGVBQVcsS0FBWDtBQUNBSCxvQkFBZ0IzRCxPQUFoQjtBQUNIOztBQUVEMEIsUUFBUUMsUUFBUixHQUFtQixVQUFVK0IsR0FBVixFQUFlO0FBQzlCLFFBQUl6RSxPQUFPLElBQUk3USxLQUFKLENBQVVpUCxVQUFVcEMsTUFBVixHQUFtQixDQUE3QixDQUFYO0FBQ0EsUUFBSW9DLFVBQVVwQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLGFBQUssSUFBSXhLLElBQUksQ0FBYixFQUFnQkEsSUFBSTRNLFVBQVVwQyxNQUE5QixFQUFzQ3hLLEdBQXRDLEVBQTJDO0FBQ3ZDd08saUJBQUt4TyxJQUFJLENBQVQsSUFBYzRNLFVBQVU1TSxDQUFWLENBQWQ7QUFDSDtBQUNKO0FBQ0RvVCxVQUFNblMsSUFBTixDQUFXLElBQUl5UyxJQUFKLENBQVNULEdBQVQsRUFBY3pFLElBQWQsQ0FBWDtBQUNBLFFBQUk0RSxNQUFNNUksTUFBTixLQUFpQixDQUFqQixJQUFzQixDQUFDNkksUUFBM0IsRUFBcUM7QUFDakNMLG1CQUFXUyxVQUFYO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0EsU0FBU0MsSUFBVCxDQUFjVCxHQUFkLEVBQW1CVSxLQUFuQixFQUEwQjtBQUN0QixTQUFLVixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLVSxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNERCxLQUFLOVYsU0FBTCxDQUFla1QsR0FBZixHQUFxQixZQUFZO0FBQzdCLFNBQUttQyxHQUFMLENBQVN0RyxLQUFULENBQWUsSUFBZixFQUFxQixLQUFLZ0gsS0FBMUI7QUFDSCxDQUZEO0FBR0ExQyxRQUFRMkMsS0FBUixHQUFnQixTQUFoQjtBQUNBM0MsUUFBUTRDLE9BQVIsR0FBa0IsSUFBbEI7QUFDQTVDLFFBQVE2QyxHQUFSLEdBQWMsRUFBZDtBQUNBN0MsUUFBUThDLElBQVIsR0FBZSxFQUFmO0FBQ0E5QyxRQUFRK0MsT0FBUixHQUFrQixFQUFsQixDLENBQXNCO0FBQ3RCL0MsUUFBUWdELFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsU0FBU3pILElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEJ5RSxRQUFRekwsRUFBUixHQUFhZ0gsSUFBYjtBQUNBeUUsUUFBUWlELFdBQVIsR0FBc0IxSCxJQUF0QjtBQUNBeUUsUUFBUWtELElBQVIsR0FBZTNILElBQWY7QUFDQXlFLFFBQVFtRCxHQUFSLEdBQWM1SCxJQUFkO0FBQ0F5RSxRQUFRb0QsY0FBUixHQUF5QjdILElBQXpCO0FBQ0F5RSxRQUFRcUQsa0JBQVIsR0FBNkI5SCxJQUE3QjtBQUNBeUUsUUFBUXNELElBQVIsR0FBZS9ILElBQWY7QUFDQXlFLFFBQVF1RCxlQUFSLEdBQTBCaEksSUFBMUI7QUFDQXlFLFFBQVF3RCxtQkFBUixHQUE4QmpJLElBQTlCOztBQUVBeUUsUUFBUXlELFNBQVIsR0FBb0IsVUFBVUMsSUFBVixFQUFnQjtBQUFFLFdBQU8sRUFBUDtBQUFXLENBQWpEOztBQUVBMUQsUUFBUTJELE9BQVIsR0FBa0IsVUFBVUQsSUFBVixFQUFnQjtBQUM5QixVQUFNLElBQUloSixLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNILENBRkQ7O0FBSUFzRixRQUFRNEQsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBNUQsUUFBUTZELEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSXBKLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBc0YsUUFBUStELEtBQVIsR0FBZ0IsWUFBVztBQUFFLFdBQU8sQ0FBUDtBQUFXLENBQXhDLEM7Ozs7Ozs7Ozs7QUN2TEE7OztBQUdBLFNBQVNDLGtCQUFULENBQTRCckUsUUFBNUIsRUFBc0M7QUFDcEMsTUFBSXZDLGNBQWMsS0FBS0EsV0FBdkI7QUFDQSxTQUFPLEtBQUsxTSxJQUFMLENBQ0wsVUFBU1gsS0FBVCxFQUFnQjtBQUNkLFdBQU9xTixZQUFZM08sT0FBWixDQUFvQmtSLFVBQXBCLEVBQWdDalAsSUFBaEMsQ0FBcUMsWUFBVztBQUNyRCxhQUFPWCxLQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FMSSxFQU1MLFVBQVNrTixNQUFULEVBQWlCO0FBQ2YsV0FBT0csWUFBWTNPLE9BQVosQ0FBb0JrUixVQUFwQixFQUFnQ2pQLElBQWhDLENBQXFDLFlBQVc7QUFDckQsYUFBTzBNLFlBQVkxTyxNQUFaLENBQW1CdU8sTUFBbkIsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBVkksQ0FBUDtBQVlEOztrQkFFYytHLGtCOzs7Ozs7Ozs7OztBQ25CZjs7Ozs7O0FBTUEsQ0FBQyxTQUFTQyxnQ0FBVCxDQUEwQ0MsSUFBMUMsRUFBZ0RDLE9BQWhELEVBQXlEO0FBQ3pELFFBQUcsaUNBQU9qVyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLGlDQUFPRCxNQUFQLE9BQWtCLFFBQXBELEVBQ0NBLE9BQU9DLE9BQVAsR0FBaUJpVyxTQUFqQixDQURELEtBRUssSUFBRyxJQUFILEVBQ0pDLGlDQUFPLEVBQVAsb0NBQVdELE9BQVg7QUFBQTtBQUFBO0FBQUEscUdBREksS0FFQSxJQUFHLFFBQU9qVyxPQUFQLDBDQUFPQSxPQUFQLE9BQW1CLFFBQXRCLEVBQ0pBLFFBQVEsYUFBUixJQUF5QmlXLFNBQXpCLENBREksS0FHSkQsS0FBSyxhQUFMLElBQXNCQyxTQUF0QjtBQUNELENBVEQsYUFTUyxZQUFXO0FBQ3BCLFdBQU8sU0FBVSxVQUFTRSxPQUFULEVBQWtCO0FBQUU7QUFDckMsb0JBRG1DLENBQ3pCO0FBQ1Ysb0JBQVUsSUFBSUMsbUJBQW1CLEVBQXZCO0FBQ1Y7QUFDQSxvQkFKbUMsQ0FJekI7QUFDVixvQkFBVSxTQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7QUFDakQ7QUFDQSx3QkFGaUQsQ0FFdEM7QUFDWCx3QkFBVyxJQUFHRixpQkFBaUJFLFFBQWpCLENBQUgsRUFBK0I7QUFDMUMsNEJBQVksT0FBT0YsaUJBQWlCRSxRQUFqQixFQUEyQnRXLE9BQWxDO0FBQ1o7QUFBWTtBQUNaLHdCQU5pRCxDQU10QztBQUNYLHdCQUFXLElBQUlELFNBQVNxVyxpQkFBaUJFLFFBQWpCLElBQTZCO0FBQ3JELDRCQUFZelYsR0FBR3lWLFFBRHNDO0FBRXJELDRCQUFZQyxHQUFHLEtBRnNDO0FBR3JELDRCQUFZdlcsU0FBUztBQUNyQiw0QkFKcUQsRUFBMUM7QUFLWDtBQUNBLHdCQWJpRCxDQWF0QztBQUNYLHdCQUFXbVcsUUFBUUcsUUFBUixFQUFrQjNYLElBQWxCLENBQXVCb0IsT0FBT0MsT0FBOUIsRUFBdUNELE1BQXZDLEVBQStDQSxPQUFPQyxPQUF0RCxFQUErRHFXLG1CQUEvRDtBQUNYO0FBQ0Esd0JBaEJpRCxDQWdCdEM7QUFDWCx3QkFBV3RXLE9BQU93VyxDQUFQLEdBQVcsSUFBWDtBQUNYO0FBQ0Esd0JBbkJpRCxDQW1CdEM7QUFDWCx3QkFBVyxPQUFPeFcsT0FBT0MsT0FBZDtBQUNYO0FBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBN0JtQyxDQTZCekI7QUFDVixvQkFBVXFXLG9CQUFvQjFVLENBQXBCLEdBQXdCd1UsT0FBeEI7QUFDVjtBQUNBLG9CQWhDbUMsQ0FnQ3pCO0FBQ1Ysb0JBQVVFLG9CQUFvQkcsQ0FBcEIsR0FBd0JKLGdCQUF4QjtBQUNWO0FBQ0Esb0JBbkNtQyxDQW1DekI7QUFDVixvQkFBVUMsb0JBQW9CeFYsQ0FBcEIsR0FBd0IsVUFBU2dCLEtBQVQsRUFBZ0I7QUFBRSx1QkFBT0EsS0FBUDtBQUFlLGFBQXpEO0FBQ1Y7QUFDQSxvQkF0Q21DLENBc0N6QjtBQUNWLG9CQUFVd1Usb0JBQW9CSSxDQUFwQixHQUF3QixVQUFTelcsT0FBVCxFQUFrQndWLElBQWxCLEVBQXdCa0IsTUFBeEIsRUFBZ0M7QUFDbEUsd0JBQVcsSUFBRyxDQUFDTCxvQkFBb0JNLENBQXBCLENBQXNCM1csT0FBdEIsRUFBK0J3VixJQUEvQixDQUFKLEVBQTBDO0FBQ3JELDRCQUFZNVcsT0FBT3FPLGNBQVAsQ0FBc0JqTixPQUF0QixFQUErQndWLElBQS9CLEVBQXFDO0FBQ2pELGdDQUFhb0IsY0FBYyxLQURzQjtBQUVqRCxnQ0FBYUMsWUFBWSxJQUZ3QjtBQUdqRCxnQ0FBYS9ULEtBQUs0VDtBQUNsQixnQ0FKaUQsRUFBckM7QUFLWjtBQUFZO0FBQ1o7QUFBVyxhQVJEO0FBU1Y7QUFDQSxvQkFqRG1DLENBaUR6QjtBQUNWLG9CQUFVTCxvQkFBb0J0VCxDQUFwQixHQUF3QixVQUFTaEQsTUFBVCxFQUFpQjtBQUNuRCx3QkFBVyxJQUFJMlcsU0FBUzNXLFVBQVVBLE9BQU8rVyxVQUFqQjtBQUN4Qix3QkFBWSxTQUFTQyxVQUFULEdBQXNCO0FBQUUsMkJBQU9oWCxPQUFPLFNBQVAsQ0FBUDtBQUEyQixpQkFEdkM7QUFFeEIsd0JBQVksU0FBU2lYLGdCQUFULEdBQTRCO0FBQUUsMkJBQU9qWCxNQUFQO0FBQWdCLGlCQUYvQztBQUdYLHdCQUFXc1csb0JBQW9CSSxDQUFwQixDQUFzQkMsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUNBLE1BQW5DO0FBQ1gsd0JBQVcsT0FBT0EsTUFBUDtBQUNYO0FBQVcsYUFORDtBQU9WO0FBQ0Esb0JBMURtQyxDQTBEekI7QUFDVixvQkFBVUwsb0JBQW9CTSxDQUFwQixHQUF3QixVQUFTTSxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUFFLHVCQUFPdFksT0FBT0gsU0FBUCxDQUFpQjBZLGNBQWpCLENBQWdDeFksSUFBaEMsQ0FBcUNzWSxNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBUDtBQUFnRSxhQUFySDtBQUNWO0FBQ0Esb0JBN0RtQyxDQTZEekI7QUFDVixvQkFBVWIsb0JBQW9CZSxDQUFwQixHQUF3QixFQUF4QjtBQUNWO0FBQ0Esb0JBaEVtQyxDQWdFekI7QUFDVixvQkFBVSxPQUFPZixvQkFBb0JBLG9CQUFvQmdCLENBQXBCLEdBQXdCLENBQTVDLENBQVA7QUFDVjtBQUFVLFNBbEVNO0FBbUVoQjtBQUNBLGdCQUFVO0FBQ1Y7QUFDQSxhQUFPLFVBQVN0WCxNQUFULEVBQWlCQyxPQUFqQixFQUEwQnFXLG1CQUExQixFQUErQzs7QUFFdEQsZ0JBQUlpQiw4QkFBSixFQUFvQ0MsNEJBQXBDLEVBQWtFQyw2QkFBbEUsQ0FBZ0csQ0FBQyxVQUFVeEgsTUFBVixFQUFrQmlHLE9BQWxCLEVBQTJCO0FBQ3hILG9CQUFJLElBQUosRUFBVTtBQUNOLHNCQUFFc0IsK0JBQStCLENBQUN4WCxNQUFELEVBQVNzVyxvQkFBb0IsQ0FBcEIsQ0FBVCxDQUEvQixFQUFpRWlCLGlDQUFrQ3JCLE9BQW5HLEVBQ051QixnQ0FBaUMsT0FBT0YsOEJBQVAsS0FBMEMsVUFBMUMsR0FDaENBLCtCQUErQjlKLEtBQS9CLENBQXFDeE4sT0FBckMsRUFBOEN1WCw0QkFBOUMsQ0FEZ0MsR0FDK0NELDhCQUYxRSxFQUdORSxrQ0FBa0MxSyxTQUFsQyxLQUFnRC9NLE9BQU9DLE9BQVAsR0FBaUJ3WCw2QkFBakUsQ0FISTtBQUlILGlCQUxELE1BS08sSUFBSSxPQUFPeFgsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUN2Q2lXLDRCQUFRbFcsTUFBUixFQUFnQm1OLFFBQVEsUUFBUixDQUFoQjtBQUNILGlCQUZNLE1BRUE7QUFDSCx3QkFBSXVLLE1BQU07QUFDTnpYLGlDQUFTO0FBREgscUJBQVY7QUFHQWlXLDRCQUFRd0IsR0FBUixFQUFhekgsT0FBTzBILE1BQXBCO0FBQ0ExSCwyQkFBTzJILGVBQVAsR0FBeUJGLElBQUl6WCxPQUE3QjtBQUNIO0FBQ0osYUFmK0YsRUFlN0YsSUFmNkYsRUFldkYsVUFBVUQsTUFBVixFQUFrQjZYLE9BQWxCLEVBQTJCO0FBQ2hDOztBQUVBLG9CQUFJQyxXQUFXQyx1QkFBdUJGLE9BQXZCLENBQWY7O0FBRUEseUJBQVNFLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQztBQUNqQywyQkFBT0EsT0FBT0EsSUFBSWpCLFVBQVgsR0FBd0JpQixHQUF4QixHQUE4QjtBQUNqQzVLLGlDQUFTNEs7QUFEd0IscUJBQXJDO0FBR0g7O0FBRUQsb0JBQUlDLFVBQVUsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxTQUFPQSxPQUFPQyxRQUFkLE1BQTJCLFFBQTNELEdBQXNFLFVBQVVILEdBQVYsRUFBZTtBQUMvRixrQ0FBY0EsR0FBZCwwQ0FBY0EsR0FBZDtBQUNILGlCQUZhLEdBRVYsVUFBVUEsR0FBVixFQUFlO0FBQ2YsMkJBQU9BLE9BQU8sT0FBT0UsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0YsSUFBSTdJLFdBQUosS0FBb0IrSSxNQUEzRCxJQUFxRUYsUUFBUUUsT0FBT3haLFNBQXBGLEdBQWdHLFFBQWhHLFVBQWtIc1osR0FBbEgsMENBQWtIQSxHQUFsSCxDQUFQO0FBQ0gsaUJBSkQ7O0FBTUEseUJBQVNJLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUM1Qyx3QkFBSSxFQUFFRCxvQkFBb0JDLFdBQXRCLENBQUosRUFBd0M7QUFDcEMsOEJBQU0sSUFBSTNLLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQ0g7QUFDSjs7QUFFRCxvQkFBSTRLLGVBQWUsWUFBWTtBQUMzQiw2QkFBU0MsZ0JBQVQsQ0FBMEJqUixNQUExQixFQUFrQ2tSLEtBQWxDLEVBQXlDO0FBQ3JDLDZCQUFLLElBQUkzWCxJQUFJLENBQWIsRUFBZ0JBLElBQUkyWCxNQUFNbk4sTUFBMUIsRUFBa0N4SyxHQUFsQyxFQUF1QztBQUNuQyxnQ0FBSTRYLGFBQWFELE1BQU0zWCxDQUFOLENBQWpCO0FBQ0E0WCx1Q0FBVzVCLFVBQVgsR0FBd0I0QixXQUFXNUIsVUFBWCxJQUF5QixLQUFqRDtBQUNBNEIsdUNBQVc3QixZQUFYLEdBQTBCLElBQTFCO0FBQ0EsZ0NBQUksV0FBVzZCLFVBQWYsRUFBMkJBLFdBQVdDLFFBQVgsR0FBc0IsSUFBdEI7QUFDM0I5WixtQ0FBT3FPLGNBQVAsQ0FBc0IzRixNQUF0QixFQUE4Qm1SLFdBQVc3VyxHQUF6QyxFQUE4QzZXLFVBQTlDO0FBQ0g7QUFDSjs7QUFFRCwyQkFBTyxVQUFVSixXQUFWLEVBQXVCTSxVQUF2QixFQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFDbkQsNEJBQUlELFVBQUosRUFBZ0JKLGlCQUFpQkYsWUFBWTVaLFNBQTdCLEVBQXdDa2EsVUFBeEM7QUFDaEIsNEJBQUlDLFdBQUosRUFBaUJMLGlCQUFpQkYsV0FBakIsRUFBOEJPLFdBQTlCO0FBQ2pCLCtCQUFPUCxXQUFQO0FBQ0gscUJBSkQ7QUFLSCxpQkFoQmtCLEVBQW5COztBQWtCQSxvQkFBSVEsa0JBQWtCLFlBQVk7QUFDOUI7OztBQUdBLDZCQUFTQSxlQUFULENBQXlCeFksT0FBekIsRUFBa0M7QUFDOUI4WCx3Q0FBZ0IsSUFBaEIsRUFBc0JVLGVBQXRCOztBQUVBLDZCQUFLQyxjQUFMLENBQW9CelksT0FBcEI7QUFDQSw2QkFBSzBZLGFBQUw7QUFDSDs7QUFFRDs7Ozs7QUFNQVQsaUNBQWFPLGVBQWIsRUFBOEIsQ0FBQztBQUMzQmpYLDZCQUFLLGdCQURzQjtBQUUzQkMsK0JBQU8sU0FBU2lYLGNBQVQsR0FBMEI7QUFDN0IsZ0NBQUl6WSxVQUFVb04sVUFBVXBDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JvQyxVQUFVLENBQVYsTUFBaUJYLFNBQXpDLEdBQXFEVyxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBbEY7O0FBRUEsaUNBQUtsSCxNQUFMLEdBQWNsRyxRQUFRa0csTUFBdEI7QUFDQSxpQ0FBS3lTLFNBQUwsR0FBaUIzWSxRQUFRMlksU0FBekI7QUFDQSxpQ0FBS0MsT0FBTCxHQUFlNVksUUFBUTRZLE9BQXZCO0FBQ0EsaUNBQUszUixNQUFMLEdBQWNqSCxRQUFRaUgsTUFBdEI7QUFDQSxpQ0FBS2pGLElBQUwsR0FBWWhDLFFBQVFnQyxJQUFwQjtBQUNBLGlDQUFLbUUsT0FBTCxHQUFlbkcsUUFBUW1HLE9BQXZCOztBQUVBLGlDQUFLMFMsWUFBTCxHQUFvQixFQUFwQjtBQUNIO0FBYjBCLHFCQUFELEVBYzNCO0FBQ0N0WCw2QkFBSyxlQUROO0FBRUNDLCtCQUFPLFNBQVNrWCxhQUFULEdBQXlCO0FBQzVCLGdDQUFJLEtBQUsxVyxJQUFULEVBQWU7QUFDWCxxQ0FBSzhXLFVBQUw7QUFDSCw2QkFGRCxNQUVPLElBQUksS0FBSzdSLE1BQVQsRUFBaUI7QUFDcEIscUNBQUs4UixZQUFMO0FBQ0g7QUFDSjtBQVJGLHFCQWQyQixFQXVCM0I7QUFDQ3hYLDZCQUFLLFlBRE47QUFFQ0MsK0JBQU8sU0FBU3NYLFVBQVQsR0FBc0I7QUFDekIsZ0NBQUlFLFFBQVEsSUFBWjs7QUFFQSxnQ0FBSUMsUUFBUS9hLFNBQVMyVSxlQUFULENBQXlCckksWUFBekIsQ0FBc0MsS0FBdEMsS0FBZ0QsS0FBNUQ7O0FBRUEsaUNBQUswTyxVQUFMOztBQUVBLGlDQUFLQyxtQkFBTCxHQUEyQixZQUFZO0FBQ25DLHVDQUFPSCxNQUFNRSxVQUFOLEVBQVA7QUFDSCw2QkFGRDtBQUdBLGlDQUFLRSxXQUFMLEdBQW1CLEtBQUtULFNBQUwsQ0FBZWpWLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLEtBQUt5VixtQkFBOUMsS0FBc0UsSUFBekY7O0FBRUEsaUNBQUtFLFFBQUwsR0FBZ0JuYixTQUFTSixhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0E7QUFDQSxpQ0FBS3ViLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsTUFBL0I7QUFDQTtBQUNBLGlDQUFLRixRQUFMLENBQWNDLEtBQWQsQ0FBb0JFLE1BQXBCLEdBQTZCLEdBQTdCO0FBQ0EsaUNBQUtILFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkcsT0FBcEIsR0FBOEIsR0FBOUI7QUFDQSxpQ0FBS0osUUFBTCxDQUFjQyxLQUFkLENBQW9CSSxNQUFwQixHQUE2QixHQUE3QjtBQUNBO0FBQ0EsaUNBQUtMLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkssUUFBcEIsR0FBK0IsVUFBL0I7QUFDQSxpQ0FBS04sUUFBTCxDQUFjQyxLQUFkLENBQW9CTCxRQUFRLE9BQVIsR0FBa0IsTUFBdEMsSUFBZ0QsU0FBaEQ7QUFDQTtBQUNBLGdDQUFJVyxZQUFZbmEsT0FBT29hLFdBQVAsSUFBc0IzYixTQUFTMlUsZUFBVCxDQUF5Qi9LLFNBQS9EO0FBQ0EsaUNBQUt1UixRQUFMLENBQWNDLEtBQWQsQ0FBb0J6UixHQUFwQixHQUEwQitSLFlBQVksSUFBdEM7O0FBRUEsaUNBQUtQLFFBQUwsQ0FBYzVhLFlBQWQsQ0FBMkIsVUFBM0IsRUFBdUMsRUFBdkM7QUFDQSxpQ0FBSzRhLFFBQUwsQ0FBYzdYLEtBQWQsR0FBc0IsS0FBS1EsSUFBM0I7O0FBRUEsaUNBQUsyVyxTQUFMLENBQWV4WixXQUFmLENBQTJCLEtBQUtrYSxRQUFoQzs7QUFFQSxpQ0FBS1IsWUFBTCxHQUFvQixDQUFDLEdBQUdyQixTQUFTMUssT0FBYixFQUFzQixLQUFLdU0sUUFBM0IsQ0FBcEI7QUFDQSxpQ0FBS1MsUUFBTDtBQUNIO0FBbkNGLHFCQXZCMkIsRUEyRDNCO0FBQ0N2WSw2QkFBSyxZQUROO0FBRUNDLCtCQUFPLFNBQVMwWCxVQUFULEdBQXNCO0FBQ3pCLGdDQUFJLEtBQUtFLFdBQVQsRUFBc0I7QUFDbEIscUNBQUtULFNBQUwsQ0FBZTdVLG1CQUFmLENBQW1DLE9BQW5DLEVBQTRDLEtBQUtxVixtQkFBakQ7QUFDQSxxQ0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLHFDQUFLRCxtQkFBTCxHQUEyQixJQUEzQjtBQUNIOztBQUVELGdDQUFJLEtBQUtFLFFBQVQsRUFBbUI7QUFDZixxQ0FBS1YsU0FBTCxDQUFlM0YsV0FBZixDQUEyQixLQUFLcUcsUUFBaEM7QUFDQSxxQ0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNIO0FBQ0o7QUFiRixxQkEzRDJCLEVBeUUzQjtBQUNDOVgsNkJBQUssY0FETjtBQUVDQywrQkFBTyxTQUFTdVgsWUFBVCxHQUF3QjtBQUMzQixpQ0FBS0YsWUFBTCxHQUFvQixDQUFDLEdBQUdyQixTQUFTMUssT0FBYixFQUFzQixLQUFLN0YsTUFBM0IsQ0FBcEI7QUFDQSxpQ0FBSzZTLFFBQUw7QUFDSDtBQUxGLHFCQXpFMkIsRUErRTNCO0FBQ0N2WSw2QkFBSyxVQUROO0FBRUNDLCtCQUFPLFNBQVNzWSxRQUFULEdBQW9CO0FBQ3ZCLGdDQUFJQyxZQUFZLEtBQUssQ0FBckI7O0FBRUEsZ0NBQUk7QUFDQUEsNENBQVk3YixTQUFTOGIsV0FBVCxDQUFxQixLQUFLOVQsTUFBMUIsQ0FBWjtBQUNILDZCQUZELENBRUUsT0FBT3FKLEdBQVAsRUFBWTtBQUNWd0ssNENBQVksS0FBWjtBQUNIOztBQUVELGlDQUFLRSxZQUFMLENBQWtCRixTQUFsQjtBQUNIO0FBWkYscUJBL0UyQixFQTRGM0I7QUFDQ3hZLDZCQUFLLGNBRE47QUFFQ0MsK0JBQU8sU0FBU3lZLFlBQVQsQ0FBc0JGLFNBQXRCLEVBQWlDO0FBQ3BDLGlDQUFLbkIsT0FBTCxDQUFhN0QsSUFBYixDQUFrQmdGLFlBQVksU0FBWixHQUF3QixPQUExQyxFQUFtRDtBQUMvQzdULHdDQUFRLEtBQUtBLE1BRGtDO0FBRS9DbEUsc0NBQU0sS0FBSzZXLFlBRm9DO0FBRy9DMVMseUNBQVMsS0FBS0EsT0FIaUM7QUFJL0NFLGdEQUFnQixLQUFLQSxjQUFMLENBQW9CdkcsSUFBcEIsQ0FBeUIsSUFBekI7QUFKK0IsNkJBQW5EO0FBTUg7QUFURixxQkE1RjJCLEVBc0czQjtBQUNDeUIsNkJBQUssZ0JBRE47QUFFQ0MsK0JBQU8sU0FBUzZFLGNBQVQsR0FBMEI7QUFDN0IsZ0NBQUksS0FBS0YsT0FBVCxFQUFrQjtBQUNkLHFDQUFLQSxPQUFMLENBQWEwRCxLQUFiO0FBQ0g7O0FBRURwSyxtQ0FBT3lhLFlBQVAsR0FBc0JDLGVBQXRCO0FBQ0g7QUFSRixxQkF0RzJCLEVBK0czQjtBQUNDNVksNkJBQUssU0FETjtBQUVDQywrQkFBTyxTQUFTNFksT0FBVCxHQUFtQjtBQUN0QixpQ0FBS2xCLFVBQUw7QUFDSDtBQUpGLHFCQS9HMkIsRUFvSDNCO0FBQ0MzWCw2QkFBSyxRQUROO0FBRUM4WSw2QkFBSyxTQUFTQSxHQUFULEdBQWU7QUFDaEIsZ0NBQUluVSxTQUFTa0gsVUFBVXBDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JvQyxVQUFVLENBQVYsTUFBaUJYLFNBQXpDLEdBQXFEVyxVQUFVLENBQVYsQ0FBckQsR0FBb0UsTUFBakY7O0FBRUEsaUNBQUtrTixPQUFMLEdBQWVwVSxNQUFmOztBQUVBLGdDQUFJLEtBQUtvVSxPQUFMLEtBQWlCLE1BQWpCLElBQTJCLEtBQUtBLE9BQUwsS0FBaUIsS0FBaEQsRUFBdUQ7QUFDbkQsc0NBQU0sSUFBSW5PLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7QUFDSix5QkFWRjtBQVdDMUosNkJBQUssU0FBU0EsR0FBVCxHQUFlO0FBQ2hCLG1DQUFPLEtBQUs2WCxPQUFaO0FBQ0g7QUFiRixxQkFwSDJCLEVBa0kzQjtBQUNDL1ksNkJBQUssUUFETjtBQUVDOFksNkJBQUssU0FBU0EsR0FBVCxDQUFhcFQsTUFBYixFQUFxQjtBQUN0QixnQ0FBSUEsV0FBV3dGLFNBQWYsRUFBMEI7QUFDdEIsb0NBQUl4RixVQUFVLENBQUMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQyxXQUFoQyxHQUE4QzBRLFFBQVExUSxNQUFSLENBQS9DLE1BQW9FLFFBQTlFLElBQTBGQSxPQUFPc1QsUUFBUCxLQUFvQixDQUFsSCxFQUFxSDtBQUNqSCx3Q0FBSSxLQUFLclUsTUFBTCxLQUFnQixNQUFoQixJQUEwQmUsT0FBT0MsWUFBUCxDQUFvQixVQUFwQixDQUE5QixFQUErRDtBQUMzRCw4Q0FBTSxJQUFJaUYsS0FBSixDQUFVLG1GQUFWLENBQU47QUFDSDs7QUFFRCx3Q0FBSSxLQUFLakcsTUFBTCxLQUFnQixLQUFoQixLQUEwQmUsT0FBT0MsWUFBUCxDQUFvQixVQUFwQixLQUFtQ0QsT0FBT0MsWUFBUCxDQUFvQixVQUFwQixDQUE3RCxDQUFKLEVBQW1HO0FBQy9GLDhDQUFNLElBQUlpRixLQUFKLENBQVUsd0dBQVYsQ0FBTjtBQUNIOztBQUVELHlDQUFLcU8sT0FBTCxHQUFldlQsTUFBZjtBQUNILGlDQVZELE1BVU87QUFDSCwwQ0FBTSxJQUFJa0YsS0FBSixDQUFVLDZDQUFWLENBQU47QUFDSDtBQUNKO0FBQ0oseUJBbEJGO0FBbUJDMUosNkJBQUssU0FBU0EsR0FBVCxHQUFlO0FBQ2hCLG1DQUFPLEtBQUsrWCxPQUFaO0FBQ0g7QUFyQkYscUJBbEkyQixDQUE5Qjs7QUEwSkEsMkJBQU9oQyxlQUFQO0FBQ0gsaUJBNUtxQixFQUF0Qjs7QUE4S0E5WSx1QkFBT0MsT0FBUCxHQUFpQjZZLGVBQWpCO0FBQ0gsYUF2TytGOztBQXlPaEc7QUFBTyxTQTdPRztBQThPVjtBQUNBLGFBQU8sVUFBUzlZLE1BQVQsRUFBaUJDLE9BQWpCLEVBQTBCcVcsbUJBQTFCLEVBQStDOztBQUV0RCxnQkFBSXlFLEtBQUt6RSxvQkFBb0IsQ0FBcEIsQ0FBVDtBQUNBLGdCQUFJMEUsV0FBVzFFLG9CQUFvQixDQUFwQixDQUFmOztBQUVBOzs7Ozs7Ozs7QUFTQSxxQkFBU3ZTLE1BQVQsQ0FBZ0J3RCxNQUFoQixFQUF3QjBULElBQXhCLEVBQThCdkosUUFBOUIsRUFBd0M7QUFDcEMsb0JBQUksQ0FBQ25LLE1BQUQsSUFBVyxDQUFDMFQsSUFBWixJQUFvQixDQUFDdkosUUFBekIsRUFBbUM7QUFDL0IsMEJBQU0sSUFBSWpGLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQ3NPLEdBQUdHLE1BQUgsQ0FBVUQsSUFBVixDQUFMLEVBQXNCO0FBQ2xCLDBCQUFNLElBQUl0TixTQUFKLENBQWMsa0NBQWQsQ0FBTjtBQUNIOztBQUVELG9CQUFJLENBQUNvTixHQUFHeE4sRUFBSCxDQUFNbUUsUUFBTixDQUFMLEVBQXNCO0FBQ2xCLDBCQUFNLElBQUkvRCxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUNIOztBQUVELG9CQUFJb04sR0FBRzViLElBQUgsQ0FBUW9JLE1BQVIsQ0FBSixFQUFxQjtBQUNqQiwyQkFBTzRULFdBQVc1VCxNQUFYLEVBQW1CMFQsSUFBbkIsRUFBeUJ2SixRQUF6QixDQUFQO0FBQ0gsaUJBRkQsTUFHSyxJQUFJcUosR0FBR0ssUUFBSCxDQUFZN1QsTUFBWixDQUFKLEVBQXlCO0FBQzFCLDJCQUFPOFQsZUFBZTlULE1BQWYsRUFBdUIwVCxJQUF2QixFQUE2QnZKLFFBQTdCLENBQVA7QUFDSCxpQkFGSSxNQUdBLElBQUlxSixHQUFHRyxNQUFILENBQVUzVCxNQUFWLENBQUosRUFBdUI7QUFDeEIsMkJBQU8rVCxlQUFlL1QsTUFBZixFQUF1QjBULElBQXZCLEVBQTZCdkosUUFBN0IsQ0FBUDtBQUNILGlCQUZJLE1BR0E7QUFDRCwwQkFBTSxJQUFJL0QsU0FBSixDQUFjLDJFQUFkLENBQU47QUFDSDtBQUNKOztBQUVEOzs7Ozs7Ozs7QUFTQSxxQkFBU3dOLFVBQVQsQ0FBb0JoYyxJQUFwQixFQUEwQjhiLElBQTFCLEVBQWdDdkosUUFBaEMsRUFBMEM7QUFDdEN2UyxxQkFBSzZFLGdCQUFMLENBQXNCaVgsSUFBdEIsRUFBNEJ2SixRQUE1Qjs7QUFFQSx1QkFBTztBQUNIZ0osNkJBQVMsbUJBQVc7QUFDaEJ2Yiw2QkFBS2lGLG1CQUFMLENBQXlCNlcsSUFBekIsRUFBK0J2SixRQUEvQjtBQUNIO0FBSEUsaUJBQVA7QUFLSDs7QUFFRDs7Ozs7Ozs7O0FBU0EscUJBQVMySixjQUFULENBQXdCRCxRQUF4QixFQUFrQ0gsSUFBbEMsRUFBd0N2SixRQUF4QyxFQUFrRDtBQUM5Q2pULHNCQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJ3YyxRQUE3QixFQUF1QyxVQUFTamMsSUFBVCxFQUFlO0FBQ2xEQSx5QkFBSzZFLGdCQUFMLENBQXNCaVgsSUFBdEIsRUFBNEJ2SixRQUE1QjtBQUNILGlCQUZEOztBQUlBLHVCQUFPO0FBQ0hnSiw2QkFBUyxtQkFBVztBQUNoQmpjLDhCQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJ3YyxRQUE3QixFQUF1QyxVQUFTamMsSUFBVCxFQUFlO0FBQ2xEQSxpQ0FBS2lGLG1CQUFMLENBQXlCNlcsSUFBekIsRUFBK0J2SixRQUEvQjtBQUNILHlCQUZEO0FBR0g7QUFMRSxpQkFBUDtBQU9IOztBQUVEOzs7Ozs7Ozs7QUFTQSxxQkFBUzRKLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDTixJQUFsQyxFQUF3Q3ZKLFFBQXhDLEVBQWtEO0FBQzlDLHVCQUFPc0osU0FBU3hjLFNBQVMrQyxJQUFsQixFQUF3QmdhLFFBQXhCLEVBQWtDTixJQUFsQyxFQUF3Q3ZKLFFBQXhDLENBQVA7QUFDSDs7QUFFRDFSLG1CQUFPQyxPQUFQLEdBQWlCOEQsTUFBakI7O0FBR0E7QUFBTyxTQWxWRztBQW1WVjtBQUNBLGFBQU8sVUFBUy9ELE1BQVQsRUFBaUJDLE9BQWpCLEVBQTBCOztBQUVqQyxxQkFBU3ViLENBQVQsR0FBYztBQUNaO0FBQ0E7QUFDRDs7QUFFREEsY0FBRTljLFNBQUYsR0FBYztBQUNaNEgsb0JBQUksWUFBVW1QLElBQVYsRUFBZ0IvRCxRQUFoQixFQUEwQitKLEdBQTFCLEVBQStCO0FBQ2pDLHdCQUFJM2IsSUFBSSxLQUFLQSxDQUFMLEtBQVcsS0FBS0EsQ0FBTCxHQUFTLEVBQXBCLENBQVI7O0FBRUEscUJBQUNBLEVBQUUyVixJQUFGLE1BQVkzVixFQUFFMlYsSUFBRixJQUFVLEVBQXRCLENBQUQsRUFBNEIxVCxJQUE1QixDQUFpQztBQUMvQndMLDRCQUFJbUUsUUFEMkI7QUFFL0IrSiw2QkFBS0E7QUFGMEIscUJBQWpDOztBQUtBLDJCQUFPLElBQVA7QUFDRCxpQkFWVzs7QUFZWnhHLHNCQUFNLGNBQVVRLElBQVYsRUFBZ0IvRCxRQUFoQixFQUEwQitKLEdBQTFCLEVBQStCO0FBQ25DLHdCQUFJdk4sT0FBTyxJQUFYO0FBQ0EsNkJBQVN3TixRQUFULEdBQXFCO0FBQ25CeE4sNkJBQUtnSCxHQUFMLENBQVNPLElBQVQsRUFBZWlHLFFBQWY7QUFDQWhLLGlDQUFTakUsS0FBVCxDQUFlZ08sR0FBZixFQUFvQi9OLFNBQXBCO0FBQ0Q7O0FBRURnTyw2QkFBU0MsQ0FBVCxHQUFhakssUUFBYjtBQUNBLDJCQUFPLEtBQUtwTCxFQUFMLENBQVFtUCxJQUFSLEVBQWNpRyxRQUFkLEVBQXdCRCxHQUF4QixDQUFQO0FBQ0QsaUJBckJXOztBQXVCWnBHLHNCQUFNLGNBQVVJLElBQVYsRUFBZ0I7QUFDcEIsd0JBQUk1TCxPQUFPLEdBQUd0RyxLQUFILENBQVMzRSxJQUFULENBQWM4TyxTQUFkLEVBQXlCLENBQXpCLENBQVg7QUFDQSx3QkFBSWtPLFNBQVMsQ0FBQyxDQUFDLEtBQUs5YixDQUFMLEtBQVcsS0FBS0EsQ0FBTCxHQUFTLEVBQXBCLENBQUQsRUFBMEIyVixJQUExQixLQUFtQyxFQUFwQyxFQUF3Q2xTLEtBQXhDLEVBQWI7QUFDQSx3QkFBSXpDLElBQUksQ0FBUjtBQUNBLHdCQUFJK04sTUFBTStNLE9BQU90USxNQUFqQjs7QUFFQSx5QkFBS3hLLENBQUwsRUFBUUEsSUFBSStOLEdBQVosRUFBaUIvTixHQUFqQixFQUFzQjtBQUNwQjhhLCtCQUFPOWEsQ0FBUCxFQUFVeU0sRUFBVixDQUFhRSxLQUFiLENBQW1CbU8sT0FBTzlhLENBQVAsRUFBVTJhLEdBQTdCLEVBQWtDNVIsSUFBbEM7QUFDRDs7QUFFRCwyQkFBTyxJQUFQO0FBQ0QsaUJBbENXOztBQW9DWnFMLHFCQUFLLGFBQVVPLElBQVYsRUFBZ0IvRCxRQUFoQixFQUEwQjtBQUM3Qix3QkFBSTVSLElBQUksS0FBS0EsQ0FBTCxLQUFXLEtBQUtBLENBQUwsR0FBUyxFQUFwQixDQUFSO0FBQ0Esd0JBQUkrYixPQUFPL2IsRUFBRTJWLElBQUYsQ0FBWDtBQUNBLHdCQUFJcUcsYUFBYSxFQUFqQjs7QUFFQSx3QkFBSUQsUUFBUW5LLFFBQVosRUFBc0I7QUFDcEIsNkJBQUssSUFBSTVRLElBQUksQ0FBUixFQUFXK04sTUFBTWdOLEtBQUt2USxNQUEzQixFQUFtQ3hLLElBQUkrTixHQUF2QyxFQUE0Qy9OLEdBQTVDLEVBQWlEO0FBQy9DLGdDQUFJK2EsS0FBSy9hLENBQUwsRUFBUXlNLEVBQVIsS0FBZW1FLFFBQWYsSUFBMkJtSyxLQUFLL2EsQ0FBTCxFQUFReU0sRUFBUixDQUFXb08sQ0FBWCxLQUFpQmpLLFFBQWhELEVBQ0VvSyxXQUFXL1osSUFBWCxDQUFnQjhaLEtBQUsvYSxDQUFMLENBQWhCO0FBQ0g7QUFDRjs7QUFFRDtBQUNBO0FBQ0E7O0FBRUNnYiwrQkFBV3hRLE1BQVosR0FDSXhMLEVBQUUyVixJQUFGLElBQVVxRyxVQURkLEdBRUksT0FBT2hjLEVBQUUyVixJQUFGLENBRlg7O0FBSUEsMkJBQU8sSUFBUDtBQUNEO0FBekRXLGFBQWQ7O0FBNERBelYsbUJBQU9DLE9BQVAsR0FBaUJ1YixDQUFqQjs7QUFHQTtBQUFPLFNBMVpHO0FBMlpWO0FBQ0EsYUFBTyxVQUFTeGIsTUFBVCxFQUFpQkMsT0FBakIsRUFBMEJxVyxtQkFBMUIsRUFBK0M7O0FBRXRELGdCQUFJaUIsOEJBQUosRUFBb0NDLDRCQUFwQyxFQUFrRUMsNkJBQWxFLENBQWdHLENBQUMsVUFBVXhILE1BQVYsRUFBa0JpRyxPQUFsQixFQUEyQjtBQUN4SCxvQkFBSSxJQUFKLEVBQVU7QUFDTixzQkFBRXNCLCtCQUErQixDQUFDeFgsTUFBRCxFQUFTc1csb0JBQW9CLENBQXBCLENBQVQsRUFBaUNBLG9CQUFvQixDQUFwQixDQUFqQyxFQUF5REEsb0JBQW9CLENBQXBCLENBQXpELENBQS9CLEVBQWlIaUIsaUNBQWtDckIsT0FBbkosRUFDTnVCLGdDQUFpQyxPQUFPRiw4QkFBUCxLQUEwQyxVQUExQyxHQUNoQ0EsK0JBQStCOUosS0FBL0IsQ0FBcUN4TixPQUFyQyxFQUE4Q3VYLDRCQUE5QyxDQURnQyxHQUMrQ0QsOEJBRjFFLEVBR05FLGtDQUFrQzFLLFNBQWxDLEtBQWdEL00sT0FBT0MsT0FBUCxHQUFpQndYLDZCQUFqRSxDQUhJO0FBSUgsaUJBTEQsTUFLTyxJQUFJLE9BQU94WCxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ3ZDaVcsNEJBQVFsVyxNQUFSLEVBQWdCbU4sUUFBUSxvQkFBUixDQUFoQixFQUErQ0EsUUFBUSxjQUFSLENBQS9DLEVBQXdFQSxRQUFRLGVBQVIsQ0FBeEU7QUFDSCxpQkFGTSxNQUVBO0FBQ0gsd0JBQUl1SyxNQUFNO0FBQ056WCxpQ0FBUztBQURILHFCQUFWO0FBR0FpVyw0QkFBUXdCLEdBQVIsRUFBYXpILE9BQU8ySCxlQUFwQixFQUFxQzNILE9BQU84TCxXQUE1QyxFQUF5RDlMLE9BQU8rTCxZQUFoRTtBQUNBL0wsMkJBQU9nTSxTQUFQLEdBQW1CdkUsSUFBSXpYLE9BQXZCO0FBQ0g7QUFDSixhQWYrRixFQWU3RixJQWY2RixFQWV2RixVQUFVRCxNQUFWLEVBQWtCa2MsZ0JBQWxCLEVBQW9DQyxZQUFwQyxFQUFrREMsYUFBbEQsRUFBaUU7QUFDdEU7O0FBRUEsb0JBQUlDLG9CQUFvQnRFLHVCQUF1Qm1FLGdCQUF2QixDQUF4Qjs7QUFFQSxvQkFBSUksZ0JBQWdCdkUsdUJBQXVCb0UsWUFBdkIsQ0FBcEI7O0FBRUEsb0JBQUlJLGlCQUFpQnhFLHVCQUF1QnFFLGFBQXZCLENBQXJCOztBQUVBLHlCQUFTckUsc0JBQVQsQ0FBZ0NDLEdBQWhDLEVBQXFDO0FBQ2pDLDJCQUFPQSxPQUFPQSxJQUFJakIsVUFBWCxHQUF3QmlCLEdBQXhCLEdBQThCO0FBQ2pDNUssaUNBQVM0SztBQUR3QixxQkFBckM7QUFHSDs7QUFFRCxvQkFBSUMsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLFNBQU9BLE9BQU9DLFFBQWQsTUFBMkIsUUFBM0QsR0FBc0UsVUFBVUgsR0FBVixFQUFlO0FBQy9GLGtDQUFjQSxHQUFkLDBDQUFjQSxHQUFkO0FBQ0gsaUJBRmEsR0FFVixVQUFVQSxHQUFWLEVBQWU7QUFDZiwyQkFBT0EsT0FBTyxPQUFPRSxNQUFQLEtBQWtCLFVBQXpCLElBQXVDRixJQUFJN0ksV0FBSixLQUFvQitJLE1BQTNELElBQXFFRixRQUFRRSxPQUFPeFosU0FBcEYsR0FBZ0csUUFBaEcsVUFBa0hzWixHQUFsSCwwQ0FBa0hBLEdBQWxILENBQVA7QUFDSCxpQkFKRDs7QUFNQSx5QkFBU0ksZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzVDLHdCQUFJLEVBQUVELG9CQUFvQkMsV0FBdEIsQ0FBSixFQUF3QztBQUNwQyw4QkFBTSxJQUFJM0ssU0FBSixDQUFjLG1DQUFkLENBQU47QUFDSDtBQUNKOztBQUVELG9CQUFJNEssZUFBZSxZQUFZO0FBQzNCLDZCQUFTQyxnQkFBVCxDQUEwQmpSLE1BQTFCLEVBQWtDa1IsS0FBbEMsRUFBeUM7QUFDckMsNkJBQUssSUFBSTNYLElBQUksQ0FBYixFQUFnQkEsSUFBSTJYLE1BQU1uTixNQUExQixFQUFrQ3hLLEdBQWxDLEVBQXVDO0FBQ25DLGdDQUFJNFgsYUFBYUQsTUFBTTNYLENBQU4sQ0FBakI7QUFDQTRYLHVDQUFXNUIsVUFBWCxHQUF3QjRCLFdBQVc1QixVQUFYLElBQXlCLEtBQWpEO0FBQ0E0Qix1Q0FBVzdCLFlBQVgsR0FBMEIsSUFBMUI7QUFDQSxnQ0FBSSxXQUFXNkIsVUFBZixFQUEyQkEsV0FBV0MsUUFBWCxHQUFzQixJQUF0QjtBQUMzQjlaLG1DQUFPcU8sY0FBUCxDQUFzQjNGLE1BQXRCLEVBQThCbVIsV0FBVzdXLEdBQXpDLEVBQThDNlcsVUFBOUM7QUFDSDtBQUNKOztBQUVELDJCQUFPLFVBQVVKLFdBQVYsRUFBdUJNLFVBQXZCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUNuRCw0QkFBSUQsVUFBSixFQUFnQkosaUJBQWlCRixZQUFZNVosU0FBN0IsRUFBd0NrYSxVQUF4QztBQUNoQiw0QkFBSUMsV0FBSixFQUFpQkwsaUJBQWlCRixXQUFqQixFQUE4Qk8sV0FBOUI7QUFDakIsK0JBQU9QLFdBQVA7QUFDSCxxQkFKRDtBQUtILGlCQWhCa0IsRUFBbkI7O0FBa0JBLHlCQUFTa0UsMEJBQVQsQ0FBb0N0TyxJQUFwQyxFQUEwQ3RQLElBQTFDLEVBQWdEO0FBQzVDLHdCQUFJLENBQUNzUCxJQUFMLEVBQVc7QUFDUCw4QkFBTSxJQUFJeEosY0FBSixDQUFtQiwyREFBbkIsQ0FBTjtBQUNIOztBQUVELDJCQUFPOUYsU0FBUyxRQUFPQSxJQUFQLDBDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCLE9BQU9BLElBQVAsS0FBZ0IsVUFBckQsSUFBbUVBLElBQW5FLEdBQTBFc1AsSUFBakY7QUFDSDs7QUFFRCx5QkFBU3VPLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5QztBQUNyQyx3QkFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQXRCLElBQW9DQSxlQUFlLElBQXZELEVBQTZEO0FBQ3pELDhCQUFNLElBQUloUCxTQUFKLENBQWMscUVBQW9FZ1AsVUFBcEUsMENBQW9FQSxVQUFwRSxFQUFkLENBQU47QUFDSDs7QUFFREQsNkJBQVNoZSxTQUFULEdBQXFCRyxPQUFPK2QsTUFBUCxDQUFjRCxjQUFjQSxXQUFXamUsU0FBdkMsRUFBa0Q7QUFDbkV5USxxQ0FBYTtBQUNUck4sbUNBQU80YSxRQURFO0FBRVQ1Rix3Q0FBWSxLQUZIO0FBR1Q2QixzQ0FBVSxJQUhEO0FBSVQ5QiwwQ0FBYztBQUpMO0FBRHNELHFCQUFsRCxDQUFyQjtBQVFBLHdCQUFJOEYsVUFBSixFQUFnQjlkLE9BQU9nZSxjQUFQLEdBQXdCaGUsT0FBT2dlLGNBQVAsQ0FBc0JILFFBQXRCLEVBQWdDQyxVQUFoQyxDQUF4QixHQUFzRUQsU0FBU0ksU0FBVCxHQUFxQkgsVUFBM0Y7QUFDbkI7O0FBRUQsb0JBQUk3VyxZQUFZLFVBQVVpWCxRQUFWLEVBQW9CO0FBQ2hDTiw4QkFBVTNXLFNBQVYsRUFBcUJpWCxRQUFyQjs7QUFFQTs7OztBQUlBLDZCQUFTalgsU0FBVCxDQUFtQlcsT0FBbkIsRUFBNEJuRyxPQUE1QixFQUFxQztBQUNqQzhYLHdDQUFnQixJQUFoQixFQUFzQnRTLFNBQXRCOztBQUVBLDRCQUFJd1QsUUFBUWtELDJCQUEyQixJQUEzQixFQUFpQyxDQUFDMVcsVUFBVWdYLFNBQVYsSUFBdUJqZSxPQUFPNFUsY0FBUCxDQUFzQjNOLFNBQXRCLENBQXhCLEVBQTBEbEgsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBakMsQ0FBWjs7QUFFQTBhLDhCQUFNUCxjQUFOLENBQXFCelksT0FBckI7QUFDQWdaLDhCQUFNMEQsV0FBTixDQUFrQnZXLE9BQWxCO0FBQ0EsK0JBQU82UyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7OztBQU9BZixpQ0FBYXpTLFNBQWIsRUFBd0IsQ0FBQztBQUNyQmpFLDZCQUFLLGdCQURnQjtBQUVyQkMsK0JBQU8sU0FBU2lYLGNBQVQsR0FBMEI7QUFDN0IsZ0NBQUl6WSxVQUFVb04sVUFBVXBDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JvQyxVQUFVLENBQVYsTUFBaUJYLFNBQXpDLEdBQXFEVyxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBbEY7O0FBRUEsaUNBQUtsSCxNQUFMLEdBQWMsT0FBT2xHLFFBQVFrRyxNQUFmLEtBQTBCLFVBQTFCLEdBQXVDbEcsUUFBUWtHLE1BQS9DLEdBQXdELEtBQUt5VyxhQUEzRTtBQUNBLGlDQUFLMVYsTUFBTCxHQUFjLE9BQU9qSCxRQUFRaUgsTUFBZixLQUEwQixVQUExQixHQUF1Q2pILFFBQVFpSCxNQUEvQyxHQUF3RCxLQUFLMlYsYUFBM0U7QUFDQSxpQ0FBSzVhLElBQUwsR0FBWSxPQUFPaEMsUUFBUWdDLElBQWYsS0FBd0IsVUFBeEIsR0FBcUNoQyxRQUFRZ0MsSUFBN0MsR0FBb0QsS0FBSzZhLFdBQXJFO0FBQ0EsaUNBQUtsRSxTQUFMLEdBQWlCaEIsUUFBUTNYLFFBQVEyWSxTQUFoQixNQUErQixRQUEvQixHQUEwQzNZLFFBQVEyWSxTQUFsRCxHQUE4RHphLFNBQVMrQyxJQUF4RjtBQUNIO0FBVG9CLHFCQUFELEVBVXJCO0FBQ0NNLDZCQUFLLGFBRE47QUFFQ0MsK0JBQU8sU0FBU2tiLFdBQVQsQ0FBcUJ2VyxPQUFyQixFQUE4QjtBQUNqQyxnQ0FBSTJXLFNBQVMsSUFBYjs7QUFFQSxpQ0FBSzFCLFFBQUwsR0FBZ0IsQ0FBQyxHQUFHYSxlQUFlblAsT0FBbkIsRUFBNEIzRyxPQUE1QixFQUFxQyxPQUFyQyxFQUE4QyxVQUFVM0csQ0FBVixFQUFhO0FBQ3ZFLHVDQUFPc2QsT0FBT0MsT0FBUCxDQUFldmQsQ0FBZixDQUFQO0FBQ0gsNkJBRmUsQ0FBaEI7QUFHSDtBQVJGLHFCQVZxQixFQW1CckI7QUFDQytCLDZCQUFLLFNBRE47QUFFQ0MsK0JBQU8sU0FBU3ViLE9BQVQsQ0FBaUJ2ZCxDQUFqQixFQUFvQjtBQUN2QixnQ0FBSTJHLFVBQVUzRyxFQUFFd2QsY0FBRixJQUFvQnhkLEVBQUV5ZCxhQUFwQzs7QUFFQSxnQ0FBSSxLQUFLM0YsZUFBVCxFQUEwQjtBQUN0QixxQ0FBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNIOztBQUVELGlDQUFLQSxlQUFMLEdBQXVCLElBQUl5RSxrQkFBa0JqUCxPQUF0QixDQUE4QjtBQUNqRDVHLHdDQUFRLEtBQUtBLE1BQUwsQ0FBWUMsT0FBWixDQUR5QztBQUVqRGMsd0NBQVEsS0FBS0EsTUFBTCxDQUFZZCxPQUFaLENBRnlDO0FBR2pEbkUsc0NBQU0sS0FBS0EsSUFBTCxDQUFVbUUsT0FBVixDQUgyQztBQUlqRHdTLDJDQUFXLEtBQUtBLFNBSmlDO0FBS2pEeFMseUNBQVNBLE9BTHdDO0FBTWpEeVMseUNBQVM7QUFOd0MsNkJBQTlCLENBQXZCO0FBUUg7QUFqQkYscUJBbkJxQixFQXFDckI7QUFDQ3JYLDZCQUFLLGVBRE47QUFFQ0MsK0JBQU8sU0FBU21iLGFBQVQsQ0FBdUJ4VyxPQUF2QixFQUFnQztBQUNuQyxtQ0FBTytXLGtCQUFrQixRQUFsQixFQUE0Qi9XLE9BQTVCLENBQVA7QUFDSDtBQUpGLHFCQXJDcUIsRUEwQ3JCO0FBQ0M1RSw2QkFBSyxlQUROO0FBRUNDLCtCQUFPLFNBQVNvYixhQUFULENBQXVCelcsT0FBdkIsRUFBZ0M7QUFDbkMsZ0NBQUk4VSxXQUFXaUMsa0JBQWtCLFFBQWxCLEVBQTRCL1csT0FBNUIsQ0FBZjs7QUFFQSxnQ0FBSThVLFFBQUosRUFBYztBQUNWLHVDQUFPL2MsU0FBU2tJLGFBQVQsQ0FBdUI2VSxRQUF2QixDQUFQO0FBQ0g7QUFDSjtBQVJGLHFCQTFDcUIsRUFtRHJCO0FBQ0MxWiw2QkFBSyxhQUROO0FBRUNDLCtCQUFPLFNBQVNxYixXQUFULENBQXFCMVcsT0FBckIsRUFBOEI7QUFDakMsbUNBQU8rVyxrQkFBa0IsTUFBbEIsRUFBMEIvVyxPQUExQixDQUFQO0FBQ0g7QUFKRixxQkFuRHFCLEVBd0RyQjtBQUNDNUUsNkJBQUssU0FETjtBQUVDQywrQkFBTyxTQUFTNFksT0FBVCxHQUFtQjtBQUN0QixpQ0FBS2dCLFFBQUwsQ0FBY2hCLE9BQWQ7O0FBRUEsZ0NBQUksS0FBSzlDLGVBQVQsRUFBMEI7QUFDdEIscUNBQUtBLGVBQUwsQ0FBcUI4QyxPQUFyQjtBQUNBLHFDQUFLOUMsZUFBTCxHQUF1QixJQUF2QjtBQUNIO0FBQ0o7QUFURixxQkF4RHFCLENBQXhCLEVBa0VJLENBQUM7QUFDRC9WLDZCQUFLLGFBREo7QUFFREMsK0JBQU8sU0FBU2lFLFdBQVQsR0FBdUI7QUFDMUIsZ0NBQUlTLFNBQVNrSCxVQUFVcEMsTUFBVixHQUFtQixDQUFuQixJQUF3Qm9DLFVBQVUsQ0FBVixNQUFpQlgsU0FBekMsR0FBcURXLFVBQVUsQ0FBVixDQUFyRCxHQUFvRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBQWpGOztBQUVBLGdDQUFJK1AsVUFBVSxPQUFPalgsTUFBUCxLQUFrQixRQUFsQixHQUE2QixDQUFDQSxNQUFELENBQTdCLEdBQXdDQSxNQUF0RDtBQUNBLGdDQUFJa1gsVUFBVSxDQUFDLENBQUNsZixTQUFTbWYscUJBQXpCOztBQUVBRixvQ0FBUTllLE9BQVIsQ0FBZ0IsVUFBVTZILE1BQVYsRUFBa0I7QUFDOUJrWCwwQ0FBVUEsV0FBVyxDQUFDLENBQUNsZixTQUFTbWYscUJBQVQsQ0FBK0JuWCxNQUEvQixDQUF2QjtBQUNILDZCQUZEOztBQUlBLG1DQUFPa1gsT0FBUDtBQUNIO0FBYkEscUJBQUQsQ0FsRUo7O0FBa0ZBLDJCQUFPNVgsU0FBUDtBQUNILGlCQTNHZSxDQTJHZHdXLGNBQWNsUCxPQTNHQSxDQUFoQjs7QUE2R0E7Ozs7O0FBS0EseUJBQVNvUSxpQkFBVCxDQUEyQkksTUFBM0IsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQ3hDLHdCQUFJQyxZQUFZLG9CQUFvQkYsTUFBcEM7O0FBRUEsd0JBQUksQ0FBQ0MsUUFBUXJXLFlBQVIsQ0FBcUJzVyxTQUFyQixDQUFMLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBRUQsMkJBQU9ELFFBQVEvUyxZQUFSLENBQXFCZ1QsU0FBckIsQ0FBUDtBQUNIOztBQUVEOWQsdUJBQU9DLE9BQVAsR0FBaUI2RixTQUFqQjtBQUNILGFBak4rRjs7QUFtTmhHO0FBQU8sU0FqbkJHO0FBa25CVjtBQUNBLGFBQU8sVUFBUzlGLE1BQVQsRUFBaUJDLE9BQWpCLEVBQTBCOztBQUVqQyxnQkFBSThkLHFCQUFxQixDQUF6Qjs7QUFFQTs7O0FBR0EsZ0JBQUksT0FBT0MsT0FBUCxLQUFtQixXQUFuQixJQUFrQyxDQUFDQSxRQUFRdGYsU0FBUixDQUFrQnVmLE9BQXpELEVBQWtFO0FBQzlELG9CQUFJQyxRQUFRRixRQUFRdGYsU0FBcEI7O0FBRUF3ZixzQkFBTUQsT0FBTixHQUFnQkMsTUFBTUMsZUFBTixJQUNBRCxNQUFNRSxrQkFETixJQUVBRixNQUFNRyxpQkFGTixJQUdBSCxNQUFNSSxnQkFITixJQUlBSixNQUFNSyxxQkFKdEI7QUFLSDs7QUFFRDs7Ozs7OztBQU9BLHFCQUFTQyxPQUFULENBQWtCWCxPQUFsQixFQUEyQnRDLFFBQTNCLEVBQXFDO0FBQ2pDLHVCQUFPc0MsV0FBV0EsUUFBUWhELFFBQVIsS0FBcUJrRCxrQkFBdkMsRUFBMkQ7QUFDdkQsd0JBQUksT0FBT0YsUUFBUUksT0FBZixLQUEyQixVQUEzQixJQUNBSixRQUFRSSxPQUFSLENBQWdCMUMsUUFBaEIsQ0FESixFQUMrQjtBQUM3QiwrQkFBT3NDLE9BQVA7QUFDRDtBQUNEQSw4QkFBVUEsUUFBUWpZLFVBQWxCO0FBQ0g7QUFDSjs7QUFFRDVGLG1CQUFPQyxPQUFQLEdBQWlCdWUsT0FBakI7O0FBR0E7QUFBTyxTQXhwQkc7QUF5cEJWO0FBQ0EsYUFBTyxVQUFTeGUsTUFBVCxFQUFpQkMsT0FBakIsRUFBMEJxVyxtQkFBMUIsRUFBK0M7O0FBRXRELGdCQUFJa0ksVUFBVWxJLG9CQUFvQixDQUFwQixDQUFkOztBQUVBOzs7Ozs7Ozs7O0FBVUEscUJBQVNtSSxTQUFULENBQW1CWixPQUFuQixFQUE0QnRDLFFBQTVCLEVBQXNDTixJQUF0QyxFQUE0Q3ZKLFFBQTVDLEVBQXNEZ04sVUFBdEQsRUFBa0U7QUFDOUQsb0JBQUlDLGFBQWFqRCxTQUFTak8sS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCLENBQWpCOztBQUVBbVEsd0JBQVE3WixnQkFBUixDQUF5QmlYLElBQXpCLEVBQStCMEQsVUFBL0IsRUFBMkNELFVBQTNDOztBQUVBLHVCQUFPO0FBQ0hoRSw2QkFBUyxtQkFBVztBQUNoQm1ELGdDQUFRelosbUJBQVIsQ0FBNEI2VyxJQUE1QixFQUFrQzBELFVBQWxDLEVBQThDRCxVQUE5QztBQUNIO0FBSEUsaUJBQVA7QUFLSDs7QUFFRDs7Ozs7Ozs7OztBQVVBLHFCQUFTMUQsUUFBVCxDQUFrQjRELFFBQWxCLEVBQTRCckQsUUFBNUIsRUFBc0NOLElBQXRDLEVBQTRDdkosUUFBNUMsRUFBc0RnTixVQUF0RCxFQUFrRTtBQUM5RDtBQUNBLG9CQUFJLE9BQU9FLFNBQVM1YSxnQkFBaEIsS0FBcUMsVUFBekMsRUFBcUQ7QUFDakQsMkJBQU95YSxVQUFVaFIsS0FBVixDQUFnQixJQUFoQixFQUFzQkMsU0FBdEIsQ0FBUDtBQUNIOztBQUVEO0FBQ0Esb0JBQUksT0FBT3VOLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDNUI7QUFDQTtBQUNBLDJCQUFPd0QsVUFBVXJlLElBQVYsQ0FBZSxJQUFmLEVBQXFCNUIsUUFBckIsRUFBK0JpUCxLQUEvQixDQUFxQyxJQUFyQyxFQUEyQ0MsU0FBM0MsQ0FBUDtBQUNIOztBQUVEO0FBQ0Esb0JBQUksT0FBT2tSLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLCtCQUFXcGdCLFNBQVNnRixnQkFBVCxDQUEwQm9iLFFBQTFCLENBQVg7QUFDSDs7QUFFRDtBQUNBLHVCQUFPbmdCLE1BQU1DLFNBQU4sQ0FBZ0JvTCxHQUFoQixDQUFvQmxMLElBQXBCLENBQXlCZ2dCLFFBQXpCLEVBQW1DLFVBQVVmLE9BQVYsRUFBbUI7QUFDekQsMkJBQU9ZLFVBQVVaLE9BQVYsRUFBbUJ0QyxRQUFuQixFQUE2Qk4sSUFBN0IsRUFBbUN2SixRQUFuQyxFQUE2Q2dOLFVBQTdDLENBQVA7QUFDSCxpQkFGTSxDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7OztBQVNBLHFCQUFTaEQsUUFBVCxDQUFrQm1DLE9BQWxCLEVBQTJCdEMsUUFBM0IsRUFBcUNOLElBQXJDLEVBQTJDdkosUUFBM0MsRUFBcUQ7QUFDakQsdUJBQU8sVUFBUzVSLENBQVQsRUFBWTtBQUNmQSxzQkFBRXdkLGNBQUYsR0FBbUJrQixRQUFRMWUsRUFBRXlILE1BQVYsRUFBa0JnVSxRQUFsQixDQUFuQjs7QUFFQSx3QkFBSXpiLEVBQUV3ZCxjQUFOLEVBQXNCO0FBQ2xCNUwsaUNBQVM5UyxJQUFULENBQWNpZixPQUFkLEVBQXVCL2QsQ0FBdkI7QUFDSDtBQUNKLGlCQU5EO0FBT0g7O0FBRURFLG1CQUFPQyxPQUFQLEdBQWlCK2EsUUFBakI7O0FBR0E7QUFBTyxTQTV1Qkc7QUE2dUJWO0FBQ0EsYUFBTyxVQUFTaGIsTUFBVCxFQUFpQkMsT0FBakIsRUFBMEI7O0FBRWpDOzs7Ozs7QUFNQUEsb0JBQVFkLElBQVIsR0FBZSxVQUFTMkMsS0FBVCxFQUFnQjtBQUMzQix1QkFBT0EsVUFBVWlMLFNBQVYsSUFDQWpMLGlCQUFpQmtELFdBRGpCLElBRUFsRCxNQUFNK1ksUUFBTixLQUFtQixDQUYxQjtBQUdILGFBSkQ7O0FBTUE7Ozs7OztBQU1BNWEsb0JBQVFtYixRQUFSLEdBQW1CLFVBQVN0WixLQUFULEVBQWdCO0FBQy9CLG9CQUFJbVosT0FBT3BjLE9BQU9ILFNBQVAsQ0FBaUIwSSxRQUFqQixDQUEwQnhJLElBQTFCLENBQStCa0QsS0FBL0IsQ0FBWDs7QUFFQSx1QkFBT0EsVUFBVWlMLFNBQVYsS0FDQ2tPLFNBQVMsbUJBQVQsSUFBZ0NBLFNBQVMseUJBRDFDLEtBRUMsWUFBWW5aLEtBRmIsS0FHQ0EsTUFBTXdKLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JyTCxRQUFRZCxJQUFSLENBQWEyQyxNQUFNLENBQU4sQ0FBYixDQUh2QixDQUFQO0FBSUgsYUFQRDs7QUFTQTs7Ozs7O0FBTUE3QixvQkFBUWliLE1BQVIsR0FBaUIsVUFBU3BaLEtBQVQsRUFBZ0I7QUFDN0IsdUJBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUNBQSxpQkFBaUIrYyxNQUR4QjtBQUVILGFBSEQ7O0FBS0E7Ozs7OztBQU1BNWUsb0JBQVFzTixFQUFSLEdBQWEsVUFBU3pMLEtBQVQsRUFBZ0I7QUFDekIsb0JBQUltWixPQUFPcGMsT0FBT0gsU0FBUCxDQUFpQjBJLFFBQWpCLENBQTBCeEksSUFBMUIsQ0FBK0JrRCxLQUEvQixDQUFYOztBQUVBLHVCQUFPbVosU0FBUyxtQkFBaEI7QUFDSCxhQUpEOztBQU9BO0FBQU8sU0FueUJHO0FBb3lCVjtBQUNBLGFBQU8sVUFBU2piLE1BQVQsRUFBaUJDLE9BQWpCLEVBQTBCOztBQUVqQyxxQkFBUzBYLE1BQVQsQ0FBZ0JrRyxPQUFoQixFQUF5QjtBQUNyQixvQkFBSTFFLFlBQUo7O0FBRUEsb0JBQUkwRSxRQUFRaUIsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUMvQmpCLDRCQUFRMVQsS0FBUjs7QUFFQWdQLG1DQUFlMEUsUUFBUS9iLEtBQXZCO0FBQ0gsaUJBSkQsTUFLSyxJQUFJK2IsUUFBUWlCLFFBQVIsS0FBcUIsT0FBckIsSUFBZ0NqQixRQUFRaUIsUUFBUixLQUFxQixVQUF6RCxFQUFxRTtBQUN0RSx3QkFBSUMsYUFBYWxCLFFBQVFyVyxZQUFSLENBQXFCLFVBQXJCLENBQWpCOztBQUVBLHdCQUFJLENBQUN1WCxVQUFMLEVBQWlCO0FBQ2JsQixnQ0FBUTllLFlBQVIsQ0FBcUIsVUFBckIsRUFBaUMsRUFBakM7QUFDSDs7QUFFRDhlLDRCQUFRbEcsTUFBUjtBQUNBa0csNEJBQVFtQixpQkFBUixDQUEwQixDQUExQixFQUE2Qm5CLFFBQVEvYixLQUFSLENBQWN3SixNQUEzQzs7QUFFQSx3QkFBSSxDQUFDeVQsVUFBTCxFQUFpQjtBQUNibEIsZ0NBQVFwVyxlQUFSLENBQXdCLFVBQXhCO0FBQ0g7O0FBRUQwUixtQ0FBZTBFLFFBQVEvYixLQUF2QjtBQUNILGlCQWZJLE1BZ0JBO0FBQ0Qsd0JBQUkrYixRQUFRclcsWUFBUixDQUFxQixpQkFBckIsQ0FBSixFQUE2QztBQUN6Q3FXLGdDQUFRMVQsS0FBUjtBQUNIOztBQUVELHdCQUFJOFUsWUFBWWxmLE9BQU95YSxZQUFQLEVBQWhCO0FBQ0Esd0JBQUkwRSxRQUFRMWdCLFNBQVMyZ0IsV0FBVCxFQUFaOztBQUVBRCwwQkFBTUUsa0JBQU4sQ0FBeUJ2QixPQUF6QjtBQUNBb0IsOEJBQVV4RSxlQUFWO0FBQ0F3RSw4QkFBVUksUUFBVixDQUFtQkgsS0FBbkI7O0FBRUEvRixtQ0FBZThGLFVBQVU3WCxRQUFWLEVBQWY7QUFDSDs7QUFFRCx1QkFBTytSLFlBQVA7QUFDSDs7QUFFRG5aLG1CQUFPQyxPQUFQLEdBQWlCMFgsTUFBakI7O0FBR0E7QUFBTyxTQXAxQkc7QUFxMUJWLGdCQXo1QmdCO0FBQWhCO0FBMDVCQyxDQXA2QkQsRTs7Ozs7Ozs7OztBQ05BM1gsT0FBT0MsT0FBUCxHQUFpQixVQUFTRCxNQUFULEVBQWlCO0FBQ2pDLEtBQUcsQ0FBQ0EsT0FBT3NmLGVBQVgsRUFBNEI7QUFDM0J0ZixTQUFPdWYsU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7QUFDQXZmLFNBQU93ZixLQUFQLEdBQWUsRUFBZjtBQUNBO0FBQ0EsTUFBRyxDQUFDeGYsT0FBT04sUUFBWCxFQUFxQk0sT0FBT04sUUFBUCxHQUFrQixFQUFsQjtBQUNyQmIsU0FBT3FPLGNBQVAsQ0FBc0JsTixNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUN2QzhXLGVBQVksSUFEMkI7QUFFdkMvVCxRQUFLLGVBQVc7QUFDZixXQUFPL0MsT0FBT3dXLENBQWQ7QUFDQTtBQUpzQyxHQUF4QztBQU1BM1gsU0FBT3FPLGNBQVAsQ0FBc0JsTixNQUF0QixFQUE4QixJQUE5QixFQUFvQztBQUNuQzhXLGVBQVksSUFEdUI7QUFFbkMvVCxRQUFLLGVBQVc7QUFDZixXQUFPL0MsT0FBT2MsQ0FBZDtBQUNBO0FBSmtDLEdBQXBDO0FBTUFkLFNBQU9zZixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7QUFDRCxRQUFPdGYsTUFBUDtBQUNBLENBckJELEM7Ozs7Ozs7Ozs7O0FDQUEsQ0FBRSxhQUFZO0FBQ2I7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFHQTs7Ozs7Ozs7QUFPQSxVQUFTaUYsU0FBVCxDQUFtQndhLEtBQW5CLEVBQTBCbmYsT0FBMUIsRUFBbUM7QUFDbEMsTUFBSW9mLFVBQUo7O0FBRUFwZixZQUFVQSxXQUFXLEVBQXJCOztBQUVBOzs7OztBQUtBLE9BQUtxZixhQUFMLEdBQXFCLEtBQXJCOztBQUdBOzs7OztBQUtBLE9BQUtDLGtCQUFMLEdBQTBCLENBQTFCOztBQUdBOzs7OztBQUtBLE9BQUtDLGFBQUwsR0FBcUIsSUFBckI7O0FBR0E7Ozs7O0FBS0EsT0FBS0MsV0FBTCxHQUFtQixDQUFuQjs7QUFHQTs7Ozs7QUFLQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5COztBQUdBOzs7OztBQUtBLE9BQUtDLG1CQUFMLEdBQTJCLENBQTNCOztBQUdBOzs7OztBQUtBLE9BQUtDLGFBQUwsR0FBcUIzZixRQUFRMmYsYUFBUixJQUF5QixFQUE5Qzs7QUFHQTs7Ozs7QUFLQSxPQUFLUixLQUFMLEdBQWFBLEtBQWI7O0FBRUE7Ozs7O0FBS0EsT0FBS1MsUUFBTCxHQUFnQjVmLFFBQVE0ZixRQUFSLElBQW9CLEdBQXBDOztBQUVBOzs7OztBQUtBLE9BQUtDLFVBQUwsR0FBa0I3ZixRQUFRNmYsVUFBUixJQUFzQixHQUF4Qzs7QUFFQSxNQUFJbGIsVUFBVW1iLFNBQVYsQ0FBb0JYLEtBQXBCLENBQUosRUFBZ0M7QUFDL0I7QUFDQTs7QUFFRDtBQUNBLFdBQVNyZixJQUFULENBQWNTLE1BQWQsRUFBc0J3ZixPQUF0QixFQUErQjtBQUM5QixVQUFPLFlBQVc7QUFBRSxXQUFPeGYsT0FBTzRNLEtBQVAsQ0FBYTRTLE9BQWIsRUFBc0IzUyxTQUF0QixDQUFQO0FBQTBDLElBQTlEO0FBQ0E7O0FBR0QsTUFBSTRTLFVBQVUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixjQUF2QixFQUF1QyxhQUF2QyxFQUFzRCxZQUF0RCxFQUFvRSxlQUFwRSxDQUFkO0FBQ0EsTUFBSUQsVUFBVSxJQUFkO0FBQ0EsT0FBSyxJQUFJdmYsSUFBSSxDQUFSLEVBQVcwVixJQUFJOEosUUFBUWhWLE1BQTVCLEVBQW9DeEssSUFBSTBWLENBQXhDLEVBQTJDMVYsR0FBM0MsRUFBZ0Q7QUFDL0N1ZixXQUFRQyxRQUFReGYsQ0FBUixDQUFSLElBQXNCVixLQUFLaWdCLFFBQVFDLFFBQVF4ZixDQUFSLENBQVIsQ0FBTCxFQUEwQnVmLE9BQTFCLENBQXRCO0FBQ0E7O0FBRUQ7QUFDQSxNQUFJRSxlQUFKLEVBQXFCO0FBQ3BCZCxTQUFNemIsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsS0FBS3djLE9BQXpDLEVBQWtELElBQWxEO0FBQ0FmLFNBQU16YixnQkFBTixDQUF1QixXQUF2QixFQUFvQyxLQUFLd2MsT0FBekMsRUFBa0QsSUFBbEQ7QUFDQWYsU0FBTXpiLGdCQUFOLENBQXVCLFNBQXZCLEVBQWtDLEtBQUt3YyxPQUF2QyxFQUFnRCxJQUFoRDtBQUNBOztBQUVEZixRQUFNemIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsS0FBS3FaLE9BQXJDLEVBQThDLElBQTlDO0FBQ0FvQyxRQUFNemIsZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUMsS0FBS3ljLFlBQTFDLEVBQXdELEtBQXhEO0FBQ0FoQixRQUFNemIsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsS0FBSzBjLFdBQXpDLEVBQXNELEtBQXREO0FBQ0FqQixRQUFNemIsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUMsS0FBSzJjLFVBQXhDLEVBQW9ELEtBQXBEO0FBQ0FsQixRQUFNemIsZ0JBQU4sQ0FBdUIsYUFBdkIsRUFBc0MsS0FBSzRjLGFBQTNDLEVBQTBELEtBQTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUksQ0FBQzdiLE1BQU1yRyxTQUFOLENBQWdCbWlCLHdCQUFyQixFQUErQztBQUM5Q3BCLFNBQU1yYixtQkFBTixHQUE0QixVQUFTNlcsSUFBVCxFQUFldkosUUFBZixFQUF5Qm9QLE9BQXpCLEVBQWtDO0FBQzdELFFBQUlDLE1BQU12aEIsS0FBS2QsU0FBTCxDQUFlMEYsbUJBQXpCO0FBQ0EsUUFBSTZXLFNBQVMsT0FBYixFQUFzQjtBQUNyQjhGLFNBQUluaUIsSUFBSixDQUFTNmdCLEtBQVQsRUFBZ0J4RSxJQUFoQixFQUFzQnZKLFNBQVNzUCxRQUFULElBQXFCdFAsUUFBM0MsRUFBcURvUCxPQUFyRDtBQUNBLEtBRkQsTUFFTztBQUNOQyxTQUFJbmlCLElBQUosQ0FBUzZnQixLQUFULEVBQWdCeEUsSUFBaEIsRUFBc0J2SixRQUF0QixFQUFnQ29QLE9BQWhDO0FBQ0E7QUFDRCxJQVBEOztBQVNBckIsU0FBTXpiLGdCQUFOLEdBQXlCLFVBQVNpWCxJQUFULEVBQWV2SixRQUFmLEVBQXlCb1AsT0FBekIsRUFBa0M7QUFDMUQsUUFBSUcsTUFBTXpoQixLQUFLZCxTQUFMLENBQWVzRixnQkFBekI7QUFDQSxRQUFJaVgsU0FBUyxPQUFiLEVBQXNCO0FBQ3JCZ0csU0FBSXJpQixJQUFKLENBQVM2Z0IsS0FBVCxFQUFnQnhFLElBQWhCLEVBQXNCdkosU0FBU3NQLFFBQVQsS0FBc0J0UCxTQUFTc1AsUUFBVCxHQUFvQixVQUFTL2MsS0FBVCxFQUFnQjtBQUMvRSxVQUFJLENBQUNBLE1BQU1pZCxrQkFBWCxFQUErQjtBQUM5QnhQLGdCQUFTek4sS0FBVDtBQUNBO0FBQ0QsTUFKcUIsQ0FBdEIsRUFJSTZjLE9BSko7QUFLQSxLQU5ELE1BTU87QUFDTkcsU0FBSXJpQixJQUFKLENBQVM2Z0IsS0FBVCxFQUFnQnhFLElBQWhCLEVBQXNCdkosUUFBdEIsRUFBZ0NvUCxPQUFoQztBQUNBO0FBQ0QsSUFYRDtBQVlBOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQUksT0FBT3JCLE1BQU0wQixPQUFiLEtBQXlCLFVBQTdCLEVBQXlDOztBQUV4QztBQUNBO0FBQ0F6QixnQkFBYUQsTUFBTTBCLE9BQW5CO0FBQ0ExQixTQUFNemIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQ3liLGVBQVd6YixLQUFYO0FBQ0EsSUFGRCxFQUVHLEtBRkg7QUFHQXdiLFNBQU0wQixPQUFOLEdBQWdCLElBQWhCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7QUFLQSxLQUFJQyx1QkFBdUIvYixVQUFVQyxTQUFWLENBQW9CeUYsT0FBcEIsQ0FBNEIsZUFBNUIsS0FBZ0QsQ0FBM0U7O0FBRUE7Ozs7O0FBS0EsS0FBSXdWLGtCQUFrQmxiLFVBQVVDLFNBQVYsQ0FBb0J5RixPQUFwQixDQUE0QixTQUE1QixJQUF5QyxDQUF6QyxJQUE4QyxDQUFDcVcsb0JBQXJFOztBQUdBOzs7OztBQUtBLEtBQUlDLGNBQWMsaUJBQWlCQyxJQUFqQixDQUFzQmpjLFVBQVVDLFNBQWhDLEtBQThDLENBQUM4YixvQkFBakU7O0FBR0E7Ozs7O0FBS0EsS0FBSUcsZUFBZUYsZUFBZ0IsZUFBRCxDQUFrQkMsSUFBbEIsQ0FBdUJqYyxVQUFVQyxTQUFqQyxDQUFsQzs7QUFHQTs7Ozs7QUFLQSxLQUFJa2MsMkJBQTJCSCxlQUFnQixhQUFELENBQWdCQyxJQUFoQixDQUFxQmpjLFVBQVVDLFNBQS9CLENBQTlDOztBQUVBOzs7OztBQUtBLEtBQUltYyx1QkFBdUJwYyxVQUFVQyxTQUFWLENBQW9CeUYsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FBakU7O0FBRUE7Ozs7OztBQU1BOUYsV0FBVXZHLFNBQVYsQ0FBb0JnakIsVUFBcEIsR0FBaUMsVUFBU25hLE1BQVQsRUFBaUI7QUFDakQsVUFBUUEsT0FBT3VYLFFBQVAsQ0FBZ0I5YyxXQUFoQixFQUFSOztBQUVBO0FBQ0EsUUFBSyxRQUFMO0FBQ0EsUUFBSyxRQUFMO0FBQ0EsUUFBSyxVQUFMO0FBQ0MsUUFBSXVGLE9BQU9vYSxRQUFYLEVBQXFCO0FBQ3BCLFlBQU8sSUFBUDtBQUNBOztBQUVEO0FBQ0QsUUFBSyxPQUFMOztBQUVDO0FBQ0EsUUFBS04sZUFBZTlaLE9BQU8wVCxJQUFQLEtBQWdCLE1BQWhDLElBQTJDMVQsT0FBT29hLFFBQXRELEVBQWdFO0FBQy9ELFlBQU8sSUFBUDtBQUNBOztBQUVEO0FBQ0QsUUFBSyxPQUFMO0FBQ0EsUUFBSyxRQUFMLENBcEJBLENBb0JlO0FBQ2YsUUFBSyxPQUFMO0FBQ0MsV0FBTyxJQUFQO0FBdEJEOztBQXlCQSxTQUFRLGlCQUFELENBQW1CTCxJQUFuQixDQUF3Qi9aLE9BQU9xYSxTQUEvQjtBQUFQO0FBQ0EsRUEzQkQ7O0FBOEJBOzs7Ozs7QUFNQTNjLFdBQVV2RyxTQUFWLENBQW9CbWpCLFVBQXBCLEdBQWlDLFVBQVN0YSxNQUFULEVBQWlCO0FBQ2pELFVBQVFBLE9BQU91WCxRQUFQLENBQWdCOWMsV0FBaEIsRUFBUjtBQUNBLFFBQUssVUFBTDtBQUNDLFdBQU8sSUFBUDtBQUNELFFBQUssUUFBTDtBQUNDLFdBQU8sQ0FBQ3VlLGVBQVI7QUFDRCxRQUFLLE9BQUw7QUFDQyxZQUFRaFosT0FBTzBULElBQWY7QUFDQSxVQUFLLFFBQUw7QUFDQSxVQUFLLFVBQUw7QUFDQSxVQUFLLE1BQUw7QUFDQSxVQUFLLE9BQUw7QUFDQSxVQUFLLE9BQUw7QUFDQSxVQUFLLFFBQUw7QUFDQyxhQUFPLEtBQVA7QUFQRDs7QUFVQTtBQUNBLFdBQU8sQ0FBQzFULE9BQU9vYSxRQUFSLElBQW9CLENBQUNwYSxPQUFPdWEsUUFBbkM7QUFDRDtBQUNDLFdBQVEsaUJBQUQsQ0FBbUJSLElBQW5CLENBQXdCL1osT0FBT3FhLFNBQS9CO0FBQVA7QUFuQkQ7QUFxQkEsRUF0QkQ7O0FBeUJBOzs7Ozs7QUFNQTNjLFdBQVV2RyxTQUFWLENBQW9CcWpCLFNBQXBCLEdBQWdDLFVBQVNsQyxhQUFULEVBQXdCNWIsS0FBeEIsRUFBK0I7QUFDOUQsTUFBSStkLFVBQUosRUFBZ0JDLEtBQWhCOztBQUVBO0FBQ0EsTUFBSXpqQixTQUFTbU0sYUFBVCxJQUEwQm5NLFNBQVNtTSxhQUFULEtBQTJCa1YsYUFBekQsRUFBd0U7QUFDdkVyaEIsWUFBU21NLGFBQVQsQ0FBdUIxQixJQUF2QjtBQUNBOztBQUVEZ1osVUFBUWhlLE1BQU1pZSxjQUFOLENBQXFCLENBQXJCLENBQVI7O0FBRUE7QUFDQUYsZUFBYXhqQixTQUFTd08sV0FBVCxDQUFxQixhQUFyQixDQUFiO0FBQ0FnVixhQUFXRyxjQUFYLENBQTBCLEtBQUtDLGtCQUFMLENBQXdCdkMsYUFBeEIsQ0FBMUIsRUFBa0UsSUFBbEUsRUFBd0UsSUFBeEUsRUFBOEU5ZixNQUE5RSxFQUFzRixDQUF0RixFQUF5RmtpQixNQUFNSSxPQUEvRixFQUF3R0osTUFBTUssT0FBOUcsRUFBdUhMLE1BQU1NLE9BQTdILEVBQXNJTixNQUFNTyxPQUE1SSxFQUFxSixLQUFySixFQUE0SixLQUE1SixFQUFtSyxLQUFuSyxFQUEwSyxLQUExSyxFQUFpTCxDQUFqTCxFQUFvTCxJQUFwTDtBQUNBUixhQUFXUyxtQkFBWCxHQUFpQyxJQUFqQztBQUNBNUMsZ0JBQWN2VixhQUFkLENBQTRCMFgsVUFBNUI7QUFDQSxFQWZEOztBQWlCQS9jLFdBQVV2RyxTQUFWLENBQW9CMGpCLGtCQUFwQixHQUF5QyxVQUFTdkMsYUFBVCxFQUF3Qjs7QUFFaEU7QUFDQSxNQUFJVSxtQkFBbUJWLGNBQWM2QyxPQUFkLENBQXNCMWdCLFdBQXRCLE9BQXdDLFFBQS9ELEVBQXlFO0FBQ3hFLFVBQU8sV0FBUDtBQUNBOztBQUVELFNBQU8sT0FBUDtBQUNBLEVBUkQ7O0FBV0E7OztBQUdBaUQsV0FBVXZHLFNBQVYsQ0FBb0J5TCxLQUFwQixHQUE0QixVQUFTMFYsYUFBVCxFQUF3QjtBQUNuRCxNQUFJdlUsTUFBSjs7QUFFQTtBQUNBLE1BQUkrVixlQUFleEIsY0FBY2IsaUJBQTdCLElBQWtEYSxjQUFjNUUsSUFBZCxDQUFtQmxRLE9BQW5CLENBQTJCLE1BQTNCLE1BQXVDLENBQXpGLElBQThGOFUsY0FBYzVFLElBQWQsS0FBdUIsTUFBckgsSUFBK0g0RSxjQUFjNUUsSUFBZCxLQUF1QixPQUExSixFQUFtSztBQUNsSzNQLFlBQVN1VSxjQUFjL2QsS0FBZCxDQUFvQndKLE1BQTdCO0FBQ0F1VSxpQkFBY2IsaUJBQWQsQ0FBZ0MxVCxNQUFoQyxFQUF3Q0EsTUFBeEM7QUFDQSxHQUhELE1BR087QUFDTnVVLGlCQUFjMVYsS0FBZDtBQUNBO0FBQ0QsRUFWRDs7QUFhQTs7Ozs7QUFLQWxGLFdBQVV2RyxTQUFWLENBQW9CaWtCLGtCQUFwQixHQUF5QyxVQUFTOUMsYUFBVCxFQUF3QjtBQUNoRSxNQUFJK0MsWUFBSixFQUFrQkMsYUFBbEI7O0FBRUFELGlCQUFlL0MsY0FBY2lELHFCQUE3Qjs7QUFFQTtBQUNBO0FBQ0EsTUFBSSxDQUFDRixZQUFELElBQWlCLENBQUNBLGFBQWFHLFFBQWIsQ0FBc0JsRCxhQUF0QixDQUF0QixFQUE0RDtBQUMzRGdELG1CQUFnQmhELGFBQWhCO0FBQ0EsTUFBRztBQUNGLFFBQUlnRCxjQUFjdmEsWUFBZCxHQUE2QnVhLGNBQWN4YSxZQUEvQyxFQUE2RDtBQUM1RHVhLG9CQUFlQyxhQUFmO0FBQ0FoRCxtQkFBY2lELHFCQUFkLEdBQXNDRCxhQUF0QztBQUNBO0FBQ0E7O0FBRURBLG9CQUFnQkEsY0FBY0EsYUFBOUI7QUFDQSxJQVJELFFBUVNBLGFBUlQ7QUFTQTs7QUFFRDtBQUNBLE1BQUlELFlBQUosRUFBa0I7QUFDakJBLGdCQUFhSSxzQkFBYixHQUFzQ0osYUFBYXhhLFNBQW5EO0FBQ0E7QUFDRCxFQXhCRDs7QUEyQkE7Ozs7QUFJQW5ELFdBQVV2RyxTQUFWLENBQW9CdWtCLCtCQUFwQixHQUFzRCxVQUFTQyxXQUFULEVBQXNCOztBQUUzRTtBQUNBLE1BQUlBLFlBQVlySSxRQUFaLEtBQXlCcmIsS0FBSzJqQixTQUFsQyxFQUE2QztBQUM1QyxVQUFPRCxZQUFZdGQsVUFBbkI7QUFDQTs7QUFFRCxTQUFPc2QsV0FBUDtBQUNBLEVBUkQ7O0FBV0E7Ozs7OztBQU1BamUsV0FBVXZHLFNBQVYsQ0FBb0IraEIsWUFBcEIsR0FBbUMsVUFBU3hjLEtBQVQsRUFBZ0I7QUFDbEQsTUFBSTRiLGFBQUosRUFBbUJvQyxLQUFuQixFQUEwQmhELFNBQTFCOztBQUVBO0FBQ0EsTUFBSWhiLE1BQU1tZixhQUFOLENBQW9COVgsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUR1VSxrQkFBZ0IsS0FBS29ELCtCQUFMLENBQXFDaGYsTUFBTXNELE1BQTNDLENBQWhCO0FBQ0EwYSxVQUFRaGUsTUFBTW1mLGFBQU4sQ0FBb0IsQ0FBcEIsQ0FBUjs7QUFFQSxNQUFJL0IsV0FBSixFQUFpQjs7QUFFaEI7QUFDQXBDLGVBQVlsZixPQUFPeWEsWUFBUCxFQUFaO0FBQ0EsT0FBSXlFLFVBQVVvRSxVQUFWLElBQXdCLENBQUNwRSxVQUFVcUUsV0FBdkMsRUFBb0Q7QUFDbkQsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsT0FBSSxDQUFDL0IsWUFBTCxFQUFtQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUlVLE1BQU1zQixVQUFOLElBQW9CdEIsTUFBTXNCLFVBQU4sS0FBcUIsS0FBS3ZELG1CQUFsRCxFQUF1RTtBQUN0RS9iLFdBQU0yRyxjQUFOO0FBQ0EsWUFBTyxLQUFQO0FBQ0E7O0FBRUQsU0FBS29WLG1CQUFMLEdBQTJCaUMsTUFBTXNCLFVBQWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtaLGtCQUFMLENBQXdCOUMsYUFBeEI7QUFDQTtBQUNEOztBQUVELE9BQUtGLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxPQUFLQyxrQkFBTCxHQUEwQjNiLE1BQU11ZixTQUFoQztBQUNBLE9BQUszRCxhQUFMLEdBQXFCQSxhQUFyQjs7QUFFQSxPQUFLQyxXQUFMLEdBQW1CbUMsTUFBTXdCLEtBQXpCO0FBQ0EsT0FBSzFELFdBQUwsR0FBbUJrQyxNQUFNeUIsS0FBekI7O0FBRUE7QUFDQSxNQUFLemYsTUFBTXVmLFNBQU4sR0FBa0IsS0FBS0csYUFBeEIsR0FBeUMsS0FBS3pELFFBQWxELEVBQTREO0FBQzNEamMsU0FBTTJHLGNBQU47QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQTNERDs7QUE4REE7Ozs7OztBQU1BM0YsV0FBVXZHLFNBQVYsQ0FBb0JrbEIsYUFBcEIsR0FBb0MsVUFBUzNmLEtBQVQsRUFBZ0I7QUFDbkQsTUFBSWdlLFFBQVFoZSxNQUFNaWUsY0FBTixDQUFxQixDQUFyQixDQUFaO0FBQUEsTUFBcUMyQixXQUFXLEtBQUs1RCxhQUFyRDs7QUFFQSxNQUFJN1UsS0FBSzBZLEdBQUwsQ0FBUzdCLE1BQU13QixLQUFOLEdBQWMsS0FBSzNELFdBQTVCLElBQTJDK0QsUUFBM0MsSUFBdUR6WSxLQUFLMFksR0FBTCxDQUFTN0IsTUFBTXlCLEtBQU4sR0FBYyxLQUFLM0QsV0FBNUIsSUFBMkM4RCxRQUF0RyxFQUFnSDtBQUMvRyxVQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFPLEtBQVA7QUFDQSxFQVJEOztBQVdBOzs7Ozs7QUFNQTVlLFdBQVV2RyxTQUFWLENBQW9CZ2lCLFdBQXBCLEdBQWtDLFVBQVN6YyxLQUFULEVBQWdCO0FBQ2pELE1BQUksQ0FBQyxLQUFLMGIsYUFBVixFQUF5QjtBQUN4QixVQUFPLElBQVA7QUFDQTs7QUFFRDtBQUNBLE1BQUksS0FBS0UsYUFBTCxLQUF1QixLQUFLb0QsK0JBQUwsQ0FBcUNoZixNQUFNc0QsTUFBM0MsQ0FBdkIsSUFBNkUsS0FBS3FjLGFBQUwsQ0FBbUIzZixLQUFuQixDQUFqRixFQUE0RztBQUMzRyxRQUFLMGIsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFFBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQVpEOztBQWVBOzs7Ozs7QUFNQTVhLFdBQVV2RyxTQUFWLENBQW9CcWxCLFdBQXBCLEdBQWtDLFVBQVNDLFlBQVQsRUFBdUI7O0FBRXhEO0FBQ0EsTUFBSUEsYUFBYUMsT0FBYixLQUF5QmxYLFNBQTdCLEVBQXdDO0FBQ3ZDLFVBQU9pWCxhQUFhQyxPQUFwQjtBQUNBOztBQUVEO0FBQ0EsTUFBSUQsYUFBYUUsT0FBakIsRUFBMEI7QUFDekIsVUFBTzFsQixTQUFTb0osY0FBVCxDQUF3Qm9jLGFBQWFFLE9BQXJDLENBQVA7QUFDQTs7QUFFRDtBQUNBO0FBQ0EsU0FBT0YsYUFBYXRkLGFBQWIsQ0FBMkIscUZBQTNCLENBQVA7QUFDQSxFQWZEOztBQWtCQTs7Ozs7O0FBTUF6QixXQUFVdkcsU0FBVixDQUFvQmlpQixVQUFwQixHQUFpQyxVQUFTMWMsS0FBVCxFQUFnQjtBQUNoRCxNQUFJa2dCLFVBQUo7QUFBQSxNQUFnQnZFLGtCQUFoQjtBQUFBLE1BQW9Dd0UsYUFBcEM7QUFBQSxNQUFtRHhCLFlBQW5EO0FBQUEsTUFBaUVYLEtBQWpFO0FBQUEsTUFBd0VwQyxnQkFBZ0IsS0FBS0EsYUFBN0Y7O0FBRUEsTUFBSSxDQUFDLEtBQUtGLGFBQVYsRUFBeUI7QUFDeEIsVUFBTyxJQUFQO0FBQ0E7O0FBRUQ7QUFDQSxNQUFLMWIsTUFBTXVmLFNBQU4sR0FBa0IsS0FBS0csYUFBeEIsR0FBeUMsS0FBS3pELFFBQWxELEVBQTREO0FBQzNELFFBQUttRSxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBS3BnQixNQUFNdWYsU0FBTixHQUFrQixLQUFLNUQsa0JBQXhCLEdBQThDLEtBQUtPLFVBQXZELEVBQW1FO0FBQ2xFLFVBQU8sSUFBUDtBQUNBOztBQUVEO0FBQ0EsT0FBS2tFLGVBQUwsR0FBdUIsS0FBdkI7O0FBRUEsT0FBS1YsYUFBTCxHQUFxQjFmLE1BQU11ZixTQUEzQjs7QUFFQTVELHVCQUFxQixLQUFLQSxrQkFBMUI7QUFDQSxPQUFLRCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsT0FBS0Msa0JBQUwsR0FBMEIsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJNEIsd0JBQUosRUFBOEI7QUFDN0JTLFdBQVFoZSxNQUFNaWUsY0FBTixDQUFxQixDQUFyQixDQUFSOztBQUVBO0FBQ0FyQyxtQkFBZ0JyaEIsU0FBUzhsQixnQkFBVCxDQUEwQnJDLE1BQU13QixLQUFOLEdBQWMxakIsT0FBT3drQixXQUEvQyxFQUE0RHRDLE1BQU15QixLQUFOLEdBQWMzakIsT0FBT29hLFdBQWpGLEtBQWlHMEYsYUFBakg7QUFDQUEsaUJBQWNpRCxxQkFBZCxHQUFzQyxLQUFLakQsYUFBTCxDQUFtQmlELHFCQUF6RDtBQUNBOztBQUVEc0Isa0JBQWdCdkUsY0FBYzZDLE9BQWQsQ0FBc0IxZ0IsV0FBdEIsRUFBaEI7QUFDQSxNQUFJb2lCLGtCQUFrQixPQUF0QixFQUErQjtBQUM5QkQsZ0JBQWEsS0FBS0osV0FBTCxDQUFpQmxFLGFBQWpCLENBQWI7QUFDQSxPQUFJc0UsVUFBSixFQUFnQjtBQUNmLFNBQUtoYSxLQUFMLENBQVcwVixhQUFYO0FBQ0EsUUFBSVUsZUFBSixFQUFxQjtBQUNwQixZQUFPLEtBQVA7QUFDQTs7QUFFRFYsb0JBQWdCc0UsVUFBaEI7QUFDQTtBQUNELEdBVkQsTUFVTyxJQUFJLEtBQUt0QyxVQUFMLENBQWdCaEMsYUFBaEIsQ0FBSixFQUFvQzs7QUFFMUM7QUFDQTtBQUNBLE9BQUs1YixNQUFNdWYsU0FBTixHQUFrQjVELGtCQUFuQixHQUF5QyxHQUF6QyxJQUFpRHlCLGVBQWV0aEIsT0FBT29JLEdBQVAsS0FBZXBJLE1BQTlCLElBQXdDcWtCLGtCQUFrQixPQUEvRyxFQUF5SDtBQUN4SCxTQUFLdkUsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQU8sS0FBUDtBQUNBOztBQUVELFFBQUsxVixLQUFMLENBQVcwVixhQUFYO0FBQ0EsUUFBS2tDLFNBQUwsQ0FBZWxDLGFBQWYsRUFBOEI1YixLQUE5Qjs7QUFFQTtBQUNBO0FBQ0EsT0FBSSxDQUFDb2QsV0FBRCxJQUFnQitDLGtCQUFrQixRQUF0QyxFQUFnRDtBQUMvQyxTQUFLdkUsYUFBTCxHQUFxQixJQUFyQjtBQUNBNWIsVUFBTTJHLGNBQU47QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQTs7QUFFRCxNQUFJeVcsZUFBZSxDQUFDRSxZQUFwQixFQUFrQzs7QUFFakM7QUFDQTtBQUNBcUIsa0JBQWUvQyxjQUFjaUQscUJBQTdCO0FBQ0EsT0FBSUYsZ0JBQWdCQSxhQUFhSSxzQkFBYixLQUF3Q0osYUFBYXhhLFNBQXpFLEVBQW9GO0FBQ25GLFdBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLE1BQUksQ0FBQyxLQUFLc1osVUFBTCxDQUFnQjdCLGFBQWhCLENBQUwsRUFBcUM7QUFDcEM1YixTQUFNMkcsY0FBTjtBQUNBLFFBQUttWCxTQUFMLENBQWVsQyxhQUFmLEVBQThCNWIsS0FBOUI7QUFDQTs7QUFFRCxTQUFPLEtBQVA7QUFDQSxFQXpGRDs7QUE0RkE7Ozs7O0FBS0FnQixXQUFVdkcsU0FBVixDQUFvQmtpQixhQUFwQixHQUFvQyxZQUFXO0FBQzlDLE9BQUtqQixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsT0FBS0UsYUFBTCxHQUFxQixJQUFyQjtBQUNBLEVBSEQ7O0FBTUE7Ozs7OztBQU1BNWEsV0FBVXZHLFNBQVYsQ0FBb0I4aEIsT0FBcEIsR0FBOEIsVUFBU3ZjLEtBQVQsRUFBZ0I7O0FBRTdDO0FBQ0EsTUFBSSxDQUFDLEtBQUs0YixhQUFWLEVBQXlCO0FBQ3hCLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk1YixNQUFNd2UsbUJBQVYsRUFBK0I7QUFDOUIsVUFBTyxJQUFQO0FBQ0E7O0FBRUQ7QUFDQSxNQUFJLENBQUN4ZSxNQUFNc0ksVUFBWCxFQUF1QjtBQUN0QixVQUFPLElBQVA7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFJLENBQUMsS0FBS21WLFVBQUwsQ0FBZ0IsS0FBSzdCLGFBQXJCLENBQUQsSUFBd0MsS0FBS3dFLGVBQWpELEVBQWtFOztBQUVqRTtBQUNBLE9BQUlwZ0IsTUFBTTRjLHdCQUFWLEVBQW9DO0FBQ25DNWMsVUFBTTRjLHdCQUFOO0FBQ0EsSUFGRCxNQUVPOztBQUVOO0FBQ0E1YyxVQUFNaWQsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTs7QUFFRDtBQUNBamQsU0FBTXNILGVBQU47QUFDQXRILFNBQU0yRyxjQUFOOztBQUVBLFVBQU8sS0FBUDtBQUNBOztBQUVEO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUF2Q0Q7O0FBMENBOzs7Ozs7OztBQVFBM0YsV0FBVXZHLFNBQVYsQ0FBb0IyZSxPQUFwQixHQUE4QixVQUFTcFosS0FBVCxFQUFnQjtBQUM3QyxNQUFJdWdCLFNBQUo7O0FBRUE7QUFDQSxNQUFJLEtBQUs3RSxhQUFULEVBQXdCO0FBQ3ZCLFFBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxRQUFLRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsVUFBTyxJQUFQO0FBQ0E7O0FBRUQ7QUFDQSxNQUFJMWIsTUFBTXNELE1BQU4sQ0FBYTBULElBQWIsS0FBc0IsUUFBdEIsSUFBa0NoWCxNQUFNNkksTUFBTixLQUFpQixDQUF2RCxFQUEwRDtBQUN6RCxVQUFPLElBQVA7QUFDQTs7QUFFRDBYLGNBQVksS0FBS2hFLE9BQUwsQ0FBYXZjLEtBQWIsQ0FBWjs7QUFFQTtBQUNBLE1BQUksQ0FBQ3VnQixTQUFMLEVBQWdCO0FBQ2YsUUFBSzNFLGFBQUwsR0FBcUIsSUFBckI7QUFDQTs7QUFFRDtBQUNBLFNBQU8yRSxTQUFQO0FBQ0EsRUF4QkQ7O0FBMkJBOzs7OztBQUtBdmYsV0FBVXZHLFNBQVYsQ0FBb0JnYyxPQUFwQixHQUE4QixZQUFXO0FBQ3hDLE1BQUkrRSxRQUFRLEtBQUtBLEtBQWpCOztBQUVBLE1BQUljLGVBQUosRUFBcUI7QUFDcEJkLFNBQU1yYixtQkFBTixDQUEwQixXQUExQixFQUF1QyxLQUFLb2MsT0FBNUMsRUFBcUQsSUFBckQ7QUFDQWYsU0FBTXJiLG1CQUFOLENBQTBCLFdBQTFCLEVBQXVDLEtBQUtvYyxPQUE1QyxFQUFxRCxJQUFyRDtBQUNBZixTQUFNcmIsbUJBQU4sQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS29jLE9BQTFDLEVBQW1ELElBQW5EO0FBQ0E7O0FBRURmLFFBQU1yYixtQkFBTixDQUEwQixPQUExQixFQUFtQyxLQUFLaVosT0FBeEMsRUFBaUQsSUFBakQ7QUFDQW9DLFFBQU1yYixtQkFBTixDQUEwQixZQUExQixFQUF3QyxLQUFLcWMsWUFBN0MsRUFBMkQsS0FBM0Q7QUFDQWhCLFFBQU1yYixtQkFBTixDQUEwQixXQUExQixFQUF1QyxLQUFLc2MsV0FBNUMsRUFBeUQsS0FBekQ7QUFDQWpCLFFBQU1yYixtQkFBTixDQUEwQixVQUExQixFQUFzQyxLQUFLdWMsVUFBM0MsRUFBdUQsS0FBdkQ7QUFDQWxCLFFBQU1yYixtQkFBTixDQUEwQixhQUExQixFQUF5QyxLQUFLd2MsYUFBOUMsRUFBNkQsS0FBN0Q7QUFDQSxFQWREOztBQWlCQTs7Ozs7QUFLQTNiLFdBQVVtYixTQUFWLEdBQXNCLFVBQVNYLEtBQVQsRUFBZ0I7QUFDckMsTUFBSWdGLFlBQUo7QUFDQSxNQUFJQyxhQUFKO0FBQ0EsTUFBSUMsaUJBQUo7QUFDQSxNQUFJQyxjQUFKOztBQUVBO0FBQ0EsTUFBSSxPQUFPN2tCLE9BQU84a0IsWUFBZCxLQUErQixXQUFuQyxFQUFnRDtBQUMvQyxVQUFPLElBQVA7QUFDQTs7QUFFRDtBQUNBSCxrQkFBZ0IsQ0FBQyxDQUFDLG1CQUFtQkksSUFBbkIsQ0FBd0J6ZixVQUFVQyxTQUFsQyxLQUFnRCxHQUFFLENBQUYsQ0FBakQsRUFBdUQsQ0FBdkQsQ0FBakI7O0FBRUEsTUFBSW9mLGFBQUosRUFBbUI7O0FBRWxCLE9BQUluRSxlQUFKLEVBQXFCO0FBQ3BCa0UsbUJBQWVqbUIsU0FBU2tJLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O0FBRUEsUUFBSStkLFlBQUosRUFBa0I7QUFDakI7QUFDQSxTQUFJQSxhQUFhOWYsT0FBYixDQUFxQm9HLE9BQXJCLENBQTZCLGtCQUE3QixNQUFxRCxDQUFDLENBQTFELEVBQTZEO0FBQzVELGFBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDQSxTQUFJMlosZ0JBQWdCLEVBQWhCLElBQXNCbG1CLFNBQVMyVSxlQUFULENBQXlCNFIsV0FBekIsSUFBd0NobEIsT0FBT2lsQixVQUF6RSxFQUFxRjtBQUNwRixhQUFPLElBQVA7QUFDQTtBQUNEOztBQUVGO0FBQ0MsSUFmRCxNQWVPO0FBQ04sV0FBTyxJQUFQO0FBQ0E7QUFDRDs7QUFFRCxNQUFJdkQsb0JBQUosRUFBMEI7QUFDekJrRCx1QkFBb0J0ZixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQiw2QkFBMUIsQ0FBcEI7O0FBRUE7QUFDQTtBQUNBLE9BQUlvZixrQkFBa0IsQ0FBbEIsS0FBd0IsRUFBeEIsSUFBOEJBLGtCQUFrQixDQUFsQixLQUF3QixDQUExRCxFQUE2RDtBQUM1REYsbUJBQWVqbUIsU0FBU2tJLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O0FBRUEsUUFBSStkLFlBQUosRUFBa0I7QUFDakI7QUFDQSxTQUFJQSxhQUFhOWYsT0FBYixDQUFxQm9HLE9BQXJCLENBQTZCLGtCQUE3QixNQUFxRCxDQUFDLENBQTFELEVBQTZEO0FBQzVELGFBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDQSxTQUFJdk0sU0FBUzJVLGVBQVQsQ0FBeUI0UixXQUF6QixJQUF3Q2hsQixPQUFPaWxCLFVBQW5ELEVBQStEO0FBQzlELGFBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVEO0FBQ0EsTUFBSXZGLE1BQU03RixLQUFOLENBQVlxTCxhQUFaLEtBQThCLE1BQTlCLElBQXdDeEYsTUFBTTdGLEtBQU4sQ0FBWXNMLFdBQVosS0FBNEIsY0FBeEUsRUFBd0Y7QUFDdkYsVUFBTyxJQUFQO0FBQ0E7O0FBRUQ7QUFDQU4sbUJBQWlCLENBQUMsQ0FBQyxvQkFBb0JFLElBQXBCLENBQXlCemYsVUFBVUMsU0FBbkMsS0FBaUQsR0FBRSxDQUFGLENBQWxELEVBQXdELENBQXhELENBQWxCOztBQUVBLE1BQUlzZixrQkFBa0IsRUFBdEIsRUFBMEI7QUFDekI7O0FBRUFILGtCQUFlam1CLFNBQVNrSSxhQUFULENBQXVCLHFCQUF2QixDQUFmO0FBQ0EsT0FBSStkLGlCQUFpQkEsYUFBYTlmLE9BQWIsQ0FBcUJvRyxPQUFyQixDQUE2QixrQkFBN0IsTUFBcUQsQ0FBQyxDQUF0RCxJQUEyRHZNLFNBQVMyVSxlQUFULENBQXlCNFIsV0FBekIsSUFBd0NobEIsT0FBT2lsQixVQUEzSCxDQUFKLEVBQTRJO0FBQzNJLFdBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLE1BQUl2RixNQUFNN0YsS0FBTixDQUFZc0wsV0FBWixLQUE0QixNQUE1QixJQUFzQ3pGLE1BQU03RixLQUFOLENBQVlzTCxXQUFaLEtBQTRCLGNBQXRFLEVBQXNGO0FBQ3JGLFVBQU8sSUFBUDtBQUNBOztBQUVELFNBQU8sS0FBUDtBQUNBLEVBakZEOztBQW9GQTs7Ozs7O0FBTUFqZ0IsV0FBVUMsTUFBVixHQUFtQixVQUFTdWEsS0FBVCxFQUFnQm5mLE9BQWhCLEVBQXlCO0FBQzNDLFNBQU8sSUFBSTJFLFNBQUosQ0FBY3dhLEtBQWQsRUFBcUJuZixPQUFyQixDQUFQO0FBQ0EsRUFGRDs7QUFLQSxLQUFJLGVBQWtCLFVBQWxCLElBQWdDLFFBQU82VixzQkFBUCxNQUFzQixRQUF0RCxJQUFrRUEsc0JBQXRFLEVBQWtGOztBQUVqRjtBQUNBQSxxQ0FBTyxZQUFXO0FBQ2pCLFVBQU9sUixTQUFQO0FBQ0EsR0FGRDtBQUFBO0FBR0EsRUFORCxNQU1PLElBQUksT0FBT2pGLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9DLE9BQTVDLEVBQXFEO0FBQzNERCxTQUFPQyxPQUFQLEdBQWlCZ0YsVUFBVUMsTUFBM0I7QUFDQWxGLFNBQU9DLE9BQVAsQ0FBZWdGLFNBQWYsR0FBMkJBLFNBQTNCO0FBQ0EsRUFITSxNQUdBO0FBQ05sRixTQUFPa0YsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQTtBQUNELENBeDBCQyxHQUFELEM7Ozs7Ozs7Ozs7O0FDc0JEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQW1DZTtBQUNiRix3QkFEYTtBQUVid0QsMEJBRmE7QUFHYlcsb0JBSGE7QUFJYk8sMEJBSmE7QUFLYlosNEJBTGE7QUFNYmlELDBCQU5hO0FBT2JwRCxzQkFQYTtBQVFiSztBQVJhLEM7Ozs7Ozs7Ozs7O0FDYmY7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlO0FBQ2I3Riw4QkFEYTtBQUViMEY7QUFGYSxDOzs7Ozs7Ozs7OztBQ1BmOzs7Ozs7MEpBdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JrQzs7QUFFbEM7Ozs7SUFJcUJBLFU7O0FBRW5COzs7Ozs7Ozs7Ozs7O0FBYUEsb0JBQVlxQixLQUFaLEVBQW1CeVIsUUFBbkIsRUFBNkI7QUFBQTs7QUFDM0IsT0FBS2hZLFFBQUwsR0FBZ0IsY0FBTTtBQUNwQixRQUFJeWhCLEdBQUdsSCxPQUFQLEVBQ0V2QyxTQUFTM1gsTUFBVCxHQURGLEtBR0UyWCxTQUFTdlgsUUFBVDtBQUNILEdBTEQ7O0FBT0E7QUFDQSxNQUFNaWhCLFFBQVFybEIsT0FBT3NsQixVQUFQLENBQWtCcGIsS0FBbEIsQ0FBZDtBQUNBbWIsUUFBTXBRLFdBQU4sQ0FBa0IsS0FBS3RSLFFBQXZCOztBQUVBO0FBQ0EsT0FBS0EsUUFBTCxDQUFjMGhCLEtBQWQ7QUFDRCxDOztrQkE3QmtCeGMsVTs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlO0FBQ2JKLDBCQURhO0FBRWJDO0FBRmEsQzs7Ozs7Ozs7Ozs7OztBQzdCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkQsTTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7QUFhQSxrQkFBWWpLLEVBQVosRUFBZ0JrRCxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixRQUFJa1AsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDTkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURNLEdBRU5BLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlM0wsV0FBakIsS0FDQSxFQUFFMkwsSUFBSS9LLFVBQUosWUFBMEJaLFdBQTVCLENBREosRUFFRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUs0Z0IsR0FBTCxHQUFXM1UsSUFBSS9LLFVBQWY7O0FBRUE7QUFDQStLLFVBQU8sT0FBT2xQLE1BQVAsS0FBa0IsUUFBbkIsR0FDRmpELFNBQVNrSSxhQUFULENBQXVCakYsTUFBdkIsQ0FERSxHQUVGQSxNQUZKO0FBR0EsUUFBSSxFQUFFa1AsZUFBZTNMLFdBQWpCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUs2Z0IsT0FBTCxHQUFlNVUsR0FBZjs7QUFFQTtBQUNBLFNBQUs2VSxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7O0FBRUQ7Ozs7O21CQUdBdmhCLEssb0JBQVE7QUFDTixRQUFJd2hCLFVBQVUsS0FBS0osR0FBbkI7QUFDQSxXQUFRSSxVQUFVQSxRQUFRcGMsc0JBQTFCLEVBQW1EO0FBQ2pELFVBQUksRUFBRW9jLG1CQUFtQjFnQixXQUFyQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixXQUFLOGdCLE9BQUwsSUFBZ0JFLFFBQVFyZCxZQUF4QjtBQUNEO0FBQ0QsU0FBSzFFLE1BQUw7QUFDRCxHOztBQUVEOzs7Ozs7O21CQUtBQSxNLG1CQUFPRyxFLEVBQUk7QUFDVCxRQUFJQSxPQUFPQSxHQUFHbVgsSUFBSCxLQUFZLFFBQVosSUFBd0JuWCxHQUFHbVgsSUFBSCxLQUFZLG1CQUEzQyxDQUFKLEVBQXFFO0FBQ25FLFdBQUt1SyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUt0aEIsS0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQU1nTixTQUFTblIsT0FBT29hLFdBQVAsSUFBc0IsS0FBS3FMLE9BQTFDO0FBQ0EsVUFBSXRVLFdBQVcsS0FBS3VVLE9BQXBCLEVBQ0UsS0FBS0YsT0FBTCxDQUFhM2UsT0FBYixDQUFxQnVFLE9BQXJCLEdBQStCLENBQUMsS0FBS3NhLE9BQUwsR0FBZXZVLE1BQWhCLElBQTBCLFFBQTFCLEdBQXFDLEVBQXBFO0FBQ0g7QUFDRixHOztBQUVEOzs7OzttQkFHQTdNLEssb0JBQVE7QUFDTixTQUFLa2hCLE9BQUwsQ0FBYTNlLE9BQWIsQ0FBcUJ1RSxPQUFyQixHQUErQixFQUEvQjtBQUNBLFNBQUtxYSxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0QsRzs7Ozs7a0JBekVrQmpkLE07Ozs7Ozs7Ozs7Ozs7QUMxQnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0lBSXFCQyxLOztBQUVuQjs7Ozs7Ozs7Ozs7O0FBWUEsaUJBQVlsSyxFQUFaLEVBQWdCa0QsTUFBaEIsRUFBd0I7QUFBQTs7QUFDdEIsUUFBSWtQLE1BQU8sT0FBT3BTLEVBQVAsS0FBYyxRQUFmLEdBQ05DLFNBQVNrSSxhQUFULENBQXVCbkksRUFBdkIsQ0FETSxHQUVOQSxFQUZKO0FBR0EsUUFBSSxFQUFFb1MsZUFBZTNMLFdBQWpCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUs0Z0IsR0FBTCxHQUFXM1UsR0FBWDs7QUFFQTtBQUNBQSxVQUFPLE9BQU9sUCxNQUFQLEtBQWtCLFFBQW5CLEdBQ0ZqRCxTQUFTa0ksYUFBVCxDQUF1QmpGLE1BQXZCLENBREUsR0FFRkEsTUFGSjtBQUdBLFFBQUksRUFBRWtQLGVBQWVnVixrQkFBakIsQ0FBSixFQUNFLE1BQU0sSUFBSWpoQixjQUFKLEVBQU47QUFDRixTQUFLNmdCLE9BQUwsR0FBZTVVLEdBQWY7O0FBRUE7QUFDQSxTQUFLOFUsT0FBTCxHQUFlLEtBQWY7QUFDRDs7QUFFRDs7Ozs7a0JBR0F2aEIsSyxvQkFBUTtBQUFBOztBQUNOekYsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUswbUIsR0FBTCxDQUFTNWxCLFFBQXRDLEVBQWdELGdCQUFRO0FBQW9CO0FBQzFFUCxXQUFLeWEsS0FBTCxDQUFXZ00sS0FBWCxHQUFzQixNQUFLTixHQUFMLENBQVNPLFdBQVQsR0FBdUIsRUFBN0M7QUFDRCxLQUZEO0FBR0QsRzs7QUFFRDs7Ozs7OztrQkFLQWxpQixNLG1CQUFPRyxFLEVBQUk7QUFBQTs7QUFDVCxRQUFNb04sU0FBU25SLE9BQU9vYSxXQUFQLElBQXNCLEtBQUtvTCxPQUFMLENBQWFPLFNBQWxEO0FBQ0EsUUFBSTVVLFdBQVcsS0FBS3VVLE9BQXBCLEVBQ0UsS0FBS0gsR0FBTCxDQUFTMWUsT0FBVCxDQUFpQnVFLE9BQWpCLEdBQTJCLENBQUMsS0FBS3NhLE9BQUwsR0FBZXZVLE1BQWhCLElBQTBCLFFBQTFCLEdBQXFDLEVBQWhFOztBQUVGO0FBQ0EsUUFBSXBOLEdBQUdtWCxJQUFILEtBQVksUUFBWixJQUF3Qm5YLEdBQUdtWCxJQUFILEtBQVksbUJBQXhDLEVBQTZEO0FBQzNEeGMsWUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUswbUIsR0FBTCxDQUFTNWxCLFFBQXRDLEVBQWdELGdCQUFRO0FBQ3REUCxhQUFLeWEsS0FBTCxDQUFXZ00sS0FBWCxHQUFzQixPQUFLTixHQUFMLENBQVNPLFdBQVQsR0FBdUIsRUFBN0M7QUFDRCxPQUZEO0FBR0Q7QUFFRixHOztBQUVEOzs7OztrQkFHQXhoQixLLG9CQUFRO0FBQ04sU0FBS2loQixHQUFMLENBQVMxZSxPQUFULENBQWlCdUUsT0FBakIsR0FBMkIsRUFBM0I7QUFDQSxTQUFLbWEsR0FBTCxDQUFTMUwsS0FBVCxDQUFlZ00sS0FBZixHQUF1QixFQUF2QjtBQUNBLFNBQUtILE9BQUwsR0FBZSxLQUFmO0FBQ0QsRzs7Ozs7a0JBckVrQmhkLEs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7a0JBSWU7QUFDYlUsc0JBRGE7QUFFYkksOEJBRmE7QUFHYkM7QUFIYSxDLEVBOUJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkwsSTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7QUFhQSxnQkFBWWhHLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLNGlCLElBQUwsQ0FBVTVpQixHQUFWO0FBQ0Q7O2lCQUVENGlCLEksaUJBQUs1aUIsRyxFQUFLO0FBQ1IsU0FBS0csSUFBTCxHQUFhLE9BQU9ILEdBQVAsS0FBZSxRQUFoQixHQUNSM0UsU0FBU2dGLGdCQUFULENBQTBCTCxHQUExQixDQURRLEdBRVJBLEdBRko7O0FBSUE7QUFDQSxTQUFLNmlCLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlbG1CLE9BQU9vYSxXQUF0Qjs7QUFFQTtBQUNBLFNBQUsrTCxJQUFMLEdBQVksS0FBWjs7QUFFQTtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsR0FBR0MsTUFBSCxDQUFVeG5CLElBQVYsQ0FBZSxLQUFLMEUsSUFBcEIsRUFBMEIsVUFBQytpQixPQUFELEVBQVU5bkIsRUFBVixFQUFpQjtBQUN6RCxhQUFPOG5CLFFBQVE1aUIsTUFBUixDQUNMakYsU0FBU29KLGNBQVQsQ0FBd0JySixHQUFHb0osSUFBSCxDQUFRRSxTQUFSLENBQWtCLENBQWxCLENBQXhCLEtBQWlELEVBRDVDLENBQVA7QUFFRCxLQUhlLEVBR2IsRUFIYSxDQUFoQjtBQUlELEc7O0FBRUQ7Ozs7O2lCQUdBM0QsSyxvQkFBUTtBQUNOLFNBQUtQLE1BQUw7QUFDRCxHOztBQUVEOzs7Ozs7OztpQkFNQUEsTSxxQkFBUztBQUNQLFFBQU0yaUIsU0FBU3ZtQixPQUFPb2EsV0FBdEI7QUFDQSxRQUFNdEUsTUFBTSxLQUFLb1EsT0FBTCxHQUFlSyxNQUFmLEdBQXdCLENBQXBDOztBQUVBOztBQUVBLFFBQUksS0FBS0osSUFBTCxLQUFjclEsR0FBbEIsRUFDRSxLQUFLbVEsTUFBTCxHQUFjblEsTUFDVixLQUFLbVEsTUFBTCxHQUFjLENBREosR0FFVixLQUFLQSxNQUFMLEdBQWMsS0FBSzFpQixJQUFMLENBQVVnSSxNQUFWLEdBQW1CLENBRnJDOztBQUlGO0FBQ0EsUUFBSSxLQUFLNmEsUUFBTCxDQUFjN2EsTUFBZCxLQUF5QixDQUE3QixFQUNFOztBQUVGO0FBQ0EsUUFBSSxLQUFLMmEsT0FBTCxJQUFnQkssTUFBcEIsRUFBNEI7QUFDMUIsV0FBSyxJQUFJeGxCLElBQUksS0FBS2tsQixNQUFMLEdBQWMsQ0FBM0IsRUFBOEJsbEIsSUFBSSxLQUFLd0MsSUFBTCxDQUFVZ0ksTUFBNUMsRUFBb0R4SyxHQUFwRCxFQUF5RDtBQUN2RCxZQUFJLEtBQUtxbEIsUUFBTCxDQUFjcmxCLENBQWQsRUFBaUJnbEIsU0FBakIsSUFBOEIsS0FBSyxFQUFuQyxLQUEwQ1EsTUFBOUMsRUFBc0Q7QUFDcEQsY0FBSXhsQixJQUFJLENBQVIsRUFDRSxLQUFLd0MsSUFBTCxDQUFVeEMsSUFBSSxDQUFkLEVBQWlCOEYsT0FBakIsQ0FBeUJ1RSxPQUF6QixHQUFtQyxNQUFuQztBQUNGLGVBQUs2YSxNQUFMLEdBQWNsbEIsQ0FBZDtBQUNELFNBSkQsTUFJTztBQUNMO0FBQ0Q7QUFDRjs7QUFFSDtBQUNDLEtBWkQsTUFZTztBQUNMLFdBQUssSUFBSUEsS0FBSSxLQUFLa2xCLE1BQWxCLEVBQTBCbGxCLE1BQUssQ0FBL0IsRUFBa0NBLElBQWxDLEVBQXVDO0FBQ3JDLFlBQUksS0FBS3FsQixRQUFMLENBQWNybEIsRUFBZCxFQUFpQmdsQixTQUFqQixJQUE4QixLQUFLLEVBQW5DLElBQXlDUSxNQUE3QyxFQUFxRDtBQUNuRCxjQUFJeGxCLEtBQUksQ0FBUixFQUNFLEtBQUt3QyxJQUFMLENBQVV4QyxLQUFJLENBQWQsRUFBaUI4RixPQUFqQixDQUF5QnVFLE9BQXpCLEdBQW1DLEVBQW5DO0FBQ0gsU0FIRCxNQUdPO0FBQ0wsZUFBSzZhLE1BQUwsR0FBY2xsQixFQUFkO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQSxTQUFLbWxCLE9BQUwsR0FBZUssTUFBZjtBQUNBLFNBQUtKLElBQUwsR0FBWXJRLEdBQVo7QUFDRCxHOztBQUVEOzs7OztpQkFHQXhSLEssb0JBQVE7QUFDTjVGLFVBQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QixLQUFLMEUsSUFBbEMsRUFBd0MsY0FBTTtBQUM1Qy9FLFNBQUdxSSxPQUFILENBQVd1RSxPQUFYLEdBQXFCLEVBQXJCO0FBQ0QsS0FGRDs7QUFJQTtBQUNBLFNBQUs2YSxNQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZWxtQixPQUFPb2EsV0FBdEI7QUFDRCxHOzs7OztrQkEzR2tCaFIsSTs7Ozs7Ozs7Ozs7OztBQzFCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7SUFJcUJJLFE7O0FBRW5COzs7Ozs7Ozs7QUFTQSxvQkFBWWhMLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNb1MsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlM0wsV0FBakIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsU0FBSzRnQixHQUFMLEdBQVczVSxHQUFYO0FBQ0Q7O0FBRUQ7Ozs7O3FCQUdBek0sSyxvQkFBUTtBQUNOLFFBQU13aEIsVUFBVSxLQUFLSixHQUFMLENBQVNpQixxQkFBVCxHQUFpQ0MsTUFBakQ7O0FBRUE7O0FBRUEsU0FBS2xCLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZTZNLE9BQWYsR0FBMEJmLFVBQVUsT0FBVixHQUFzQixNQUFoRDtBQUNBLFNBQUtKLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZThNLFFBQWYsR0FBMEJoQixVQUFVLFNBQVYsR0FBc0IsUUFBaEQ7QUFDRCxHOztBQUVEOzs7Ozs7Ozs7cUJBT0EvaEIsTSxxQkFBUztBQUFBOztBQUNQLFFBQU0raEIsVUFBVSxLQUFLSixHQUFMLENBQVNpQixxQkFBVCxHQUFpQ0MsTUFBakQ7O0FBRUE7QUFDQSxTQUFLbEIsR0FBTCxDQUFTMUwsS0FBVCxDQUFlNk0sT0FBZixHQUEwQixPQUExQjtBQUNBLFNBQUtuQixHQUFMLENBQVMxTCxLQUFULENBQWU4TSxRQUFmLEdBQTBCLEVBQTFCOztBQUVBO0FBQ0EsUUFBSWhCLE9BQUosRUFBYTtBQUNYLFdBQUtKLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZStNLFNBQWYsR0FBOEJqQixPQUE5QjtBQUNBa0IsNEJBQXNCLFlBQU07QUFDMUIsY0FBS3RCLEdBQUwsQ0FBU3ZtQixZQUFULENBQXNCLGVBQXRCLEVBQXVDLFNBQXZDO0FBQ0EsY0FBS3VtQixHQUFMLENBQVMxTCxLQUFULENBQWUrTSxTQUFmLEdBQTJCLEtBQTNCO0FBQ0QsT0FIRDs7QUFLRjtBQUNDLEtBUkQsTUFRTztBQUNMLFdBQUtyQixHQUFMLENBQVN2bUIsWUFBVCxDQUFzQixlQUF0QixFQUF1QyxRQUF2QztBQUNBLFdBQUt1bUIsR0FBTCxDQUFTMUwsS0FBVCxDQUFlK00sU0FBZixHQUEyQixFQUEzQjs7QUFFQTtBQUNBLFVBQU1ILFNBQVMsS0FBS2xCLEdBQUwsQ0FBU2lCLHFCQUFULEdBQWlDQyxNQUFoRDtBQUNBLFdBQUtsQixHQUFMLENBQVM3ZCxlQUFULENBQXlCLGVBQXpCOztBQUVBO0FBQ0EsV0FBSzZkLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZStNLFNBQWYsR0FBMkIsS0FBM0I7QUFDQUMsNEJBQXNCLFlBQU07QUFDMUIsY0FBS3RCLEdBQUwsQ0FBU3ZtQixZQUFULENBQXNCLGVBQXRCLEVBQXVDLFNBQXZDO0FBQ0EsY0FBS3VtQixHQUFMLENBQVMxTCxLQUFULENBQWUrTSxTQUFmLEdBQThCSCxNQUE5QjtBQUNELE9BSEQ7QUFJRDs7QUFFRDtBQUNBLFFBQU1LLE1BQU0sU0FBTkEsR0FBTSxLQUFNO0FBQ2hCLFVBQU10ZixTQUFTekQsR0FBR3lELE1BQWxCO0FBQ0EsVUFBSSxFQUFFQSxrQkFBa0J2QyxXQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQTZDLGFBQU9FLGVBQVAsQ0FBdUIsZUFBdkI7QUFDQUYsYUFBT3FTLEtBQVAsQ0FBYStNLFNBQWIsR0FBeUIsRUFBekI7O0FBRUE7O0FBRUFwZixhQUFPcVMsS0FBUCxDQUFhNk0sT0FBYixHQUF3QmYsVUFBVSxNQUFWLEdBQXFCLE9BQTdDO0FBQ0FuZSxhQUFPcVMsS0FBUCxDQUFhOE0sUUFBYixHQUF3QmhCLFVBQVUsUUFBVixHQUFxQixTQUE3Qzs7QUFFQTtBQUNBbmUsYUFBT25ELG1CQUFQLENBQTJCLGVBQTNCLEVBQTRDeWlCLEdBQTVDO0FBQ0QsS0FoQkQ7QUFpQkEsU0FBS3ZCLEdBQUwsQ0FBU3RoQixnQkFBVCxDQUEwQixlQUExQixFQUEyQzZpQixHQUEzQyxFQUFnRCxLQUFoRDtBQUNELEc7O0FBRUQ7Ozs7O3FCQUdBeGlCLEssb0JBQVE7QUFDTixTQUFLaWhCLEdBQUwsQ0FBUzFlLE9BQVQsQ0FBaUJ1RSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUttYSxHQUFMLENBQVMxTCxLQUFULENBQWUrTSxTQUFmLEdBQTJCLEVBQTNCO0FBQ0EsU0FBS3JCLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZTZNLE9BQWYsR0FBMkIsRUFBM0I7QUFDQSxTQUFLbkIsR0FBTCxDQUFTMUwsS0FBVCxDQUFlOE0sUUFBZixHQUEyQixFQUEzQjtBQUNELEc7Ozs7O2tCQXBHa0JuZCxROzs7Ozs7Ozs7Ozs7O0FDMUJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkMsUzs7QUFFbkI7Ozs7Ozs7OztBQVNBLHFCQUFZakwsRUFBWixFQUFnQjtBQUFBOztBQUNkLFFBQU1vUyxNQUFPLE9BQU9wUyxFQUFQLEtBQWMsUUFBZixHQUNSQyxTQUFTa0ksYUFBVCxDQUF1Qm5JLEVBQXZCLENBRFEsR0FFUkEsRUFGSjtBQUdBLFFBQUksRUFBRW9TLGVBQWUzTCxXQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixTQUFLNGdCLEdBQUwsR0FBVzNVLEdBQVg7QUFDRDs7QUFFRDs7Ozs7c0JBR0F6TSxLLG9CQUFROztBQUVOO0FBQ0EsUUFBTTRpQixPQUFPLEtBQUt4QixHQUFMLENBQVM1bEIsUUFBVCxDQUFrQixLQUFLNGxCLEdBQUwsQ0FBUzVsQixRQUFULENBQWtCNEwsTUFBbEIsR0FBMkIsQ0FBN0MsQ0FBYjtBQUNBd2IsU0FBS2xOLEtBQUwsQ0FBV21OLHVCQUFYLEdBQXFDLE9BQXJDOztBQUVBO0FBQ0EsUUFBTUMsVUFBVSxLQUFLMUIsR0FBTCxDQUFTOWhCLGdCQUFULENBQTBCLGtCQUExQixDQUFoQjtBQUNBL0UsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCb29CLE9BQTdCLEVBQXNDLGtCQUFVO0FBQzlDLFVBQUksRUFBRTVjLGtCQUFrQkYsZ0JBQXBCLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47QUFDRixVQUFJMEYsT0FBT0MsT0FBWCxFQUFvQjs7QUFFbEI7QUFDQSxZQUFJNGMsT0FBTzdjLE9BQU84YyxrQkFBbEI7QUFDQSxZQUFJLEVBQUVELGdCQUFnQmppQixXQUFsQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixlQUFPdWlCLEtBQUt2RSxPQUFMLEtBQWlCLEtBQWpCLElBQTBCdUUsS0FBS0Msa0JBQXRDO0FBQ0VELGlCQUFPQSxLQUFLQyxrQkFBWjtBQURGLFNBTmtCLENBU2xCO0FBQ0EsWUFBSSxFQUFFOWMsT0FBT3hFLFVBQVAsWUFBNkJaLFdBQS9CLEtBQ0EsRUFBRW9GLE9BQU94RSxVQUFQLENBQWtCQSxVQUFsQixZQUF3Q1osV0FBMUMsQ0FESixFQUVFLE1BQU0sSUFBSU4sY0FBSixFQUFOOztBQUVGO0FBQ0EsWUFBTTBCLFNBQVNnRSxPQUFPeEUsVUFBUCxDQUFrQkEsVUFBakM7QUFDQSxZQUFNMkIsU0FBUzBmLEtBQUt2bkIsUUFBTCxDQUFjdW5CLEtBQUt2bkIsUUFBTCxDQUFjNEwsTUFBZCxHQUF1QixDQUFyQyxDQUFmOztBQUVBO0FBQ0FsRixlQUFPd1QsS0FBUCxDQUFhbU4sdUJBQWIsR0FBdUMsRUFBdkM7QUFDQXhmLGVBQU9xUyxLQUFQLENBQWFtTix1QkFBYixHQUF1QyxPQUF2QztBQUNEO0FBQ0YsS0F6QkQ7QUEwQkQsRzs7QUFFRDs7Ozs7OztzQkFLQXBqQixNLG1CQUFPRyxFLEVBQUk7QUFDVCxRQUFNeUQsU0FBU3pELEdBQUd5RCxNQUFsQjtBQUNBLFFBQUksRUFBRUEsa0JBQWtCdkMsV0FBcEIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOOztBQUVGO0FBQ0EsUUFBSXVpQixPQUFPMWYsT0FBTzJmLGtCQUFsQjtBQUNBLFFBQUksRUFBRUQsZ0JBQWdCamlCLFdBQWxCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFdBQU91aUIsS0FBS3ZFLE9BQUwsS0FBaUIsS0FBakIsSUFBMEJ1RSxLQUFLQyxrQkFBdEM7QUFDRUQsYUFBT0EsS0FBS0Msa0JBQVo7QUFERixLQVRTLENBWVQ7QUFDQSxRQUFJLEVBQUUzZixPQUFPM0IsVUFBUCxZQUE2QlosV0FBL0IsS0FDQSxFQUFFdUMsT0FBTzNCLFVBQVAsQ0FBa0JBLFVBQWxCLFlBQXdDWixXQUExQyxDQURKLEVBRUUsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQSxRQUFNMEIsU0FBU21CLE9BQU8zQixVQUFQLENBQWtCQSxVQUFqQztBQUNBLFFBQU1zTCxTQUFTK1YsS0FBS3ZuQixRQUFMLENBQWN1bkIsS0FBS3ZuQixRQUFMLENBQWM0TCxNQUFkLEdBQXVCLENBQXJDLENBQWY7O0FBRUE7QUFDQWxGLFdBQU93VCxLQUFQLENBQWFtTix1QkFBYixHQUF1QyxFQUF2QztBQUNBN1YsV0FBTzBJLEtBQVAsQ0FBYW1OLHVCQUFiLEdBQXVDLEVBQXZDOztBQUVBO0FBQ0EsUUFBSSxDQUFDeGYsT0FBTzhDLE9BQVosRUFBcUI7QUFDbkIsVUFBTXdjLE1BQU0sU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLFlBQUlJLGdCQUFnQmppQixXQUFwQixFQUFpQztBQUMvQm9CLGlCQUFPd1QsS0FBUCxDQUFhbU4sdUJBQWIsR0FBdUMsT0FBdkM7QUFDQUUsZUFBSzdpQixtQkFBTCxDQUF5QixlQUF6QixFQUEwQ3lpQixHQUExQztBQUNEO0FBQ0YsT0FMRDtBQU1BSSxXQUFLampCLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDNmlCLEdBQXZDLEVBQTRDLEtBQTVDO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJdGYsT0FBTzhDLE9BQVgsRUFBb0I7QUFDbEIsVUFBTXdjLE9BQU0sU0FBTkEsSUFBTSxHQUFNO0FBQ2hCLFlBQUlJLGdCQUFnQmppQixXQUFwQixFQUFpQztBQUMvQmtNLGlCQUFPMEksS0FBUCxDQUFhbU4sdUJBQWIsR0FBdUMsT0FBdkM7QUFDQUUsZUFBSzdpQixtQkFBTCxDQUF5QixlQUF6QixFQUEwQ3lpQixJQUExQztBQUNEO0FBQ0YsT0FMRDtBQU1BSSxXQUFLampCLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDNmlCLElBQXZDLEVBQTRDLEtBQTVDO0FBQ0Q7QUFDRixHOztBQUVEOzs7OztzQkFHQXhpQixLLG9CQUFROztBQUVOO0FBQ0EsUUFBSSxLQUFLaWhCLEdBQUwsQ0FBUzVsQixRQUFULENBQWtCNEwsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDaEMsV0FBS2dhLEdBQUwsQ0FBUzVsQixRQUFULENBQWtCLENBQWxCLEVBQXFCa2EsS0FBckIsQ0FBMkJtTix1QkFBM0IsR0FBcUQsRUFBckQ7QUFDRDs7QUFFRDtBQUNBLFFBQU1DLFVBQVUsS0FBSzFCLEdBQUwsQ0FBUzloQixnQkFBVCxDQUEwQixrQkFBMUIsQ0FBaEI7QUFDQS9FLFVBQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2Qm9vQixPQUE3QixFQUFzQyxrQkFBVTtBQUM5QyxVQUFJLEVBQUU1YyxrQkFBa0JGLGdCQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJeEYsY0FBSixFQUFOO0FBQ0YsVUFBSTBGLE9BQU9DLE9BQVgsRUFBb0I7O0FBRWxCO0FBQ0EsWUFBSTRjLE9BQU83YyxPQUFPOGMsa0JBQWxCO0FBQ0EsWUFBSSxFQUFFRCxnQkFBZ0JqaUIsV0FBbEIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsZUFBT3VpQixLQUFLdkUsT0FBTCxLQUFpQixLQUFqQixJQUEwQnVFLEtBQUtDLGtCQUF0QztBQUNFRCxpQkFBT0EsS0FBS0Msa0JBQVo7QUFERixTQU5rQixDQVNsQjtBQUNBLFlBQUksRUFBRTljLE9BQU94RSxVQUFQLFlBQTZCWixXQUEvQixLQUNBLEVBQUVvRixPQUFPeEUsVUFBUCxDQUFrQkEsVUFBbEIsWUFBd0NaLFdBQTFDLENBREosRUFFRSxNQUFNLElBQUlOLGNBQUosRUFBTjs7QUFFRjtBQUNBLFlBQU0wQixTQUFTZ0UsT0FBT3hFLFVBQVAsQ0FBa0JBLFVBQWpDO0FBQ0EsWUFBTXNMLFNBQVMrVixLQUFLdm5CLFFBQUwsQ0FBY3VuQixLQUFLdm5CLFFBQUwsQ0FBYzRMLE1BQWQsR0FBdUIsQ0FBckMsQ0FBZjs7QUFFQTtBQUNBbEYsZUFBT3dULEtBQVAsQ0FBYW1OLHVCQUFiLEdBQXVDLEVBQXZDO0FBQ0E3VixlQUFPMEksS0FBUCxDQUFhbU4sdUJBQWIsR0FBdUMsRUFBdkM7QUFDRDtBQUNGLEtBekJEO0FBMEJELEc7Ozs7O2tCQXRKa0J2ZCxTOzs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2QmU7QUFDYkUsc0JBRGE7QUFFYkM7QUFGYSxDOzs7Ozs7Ozs7Ozs7O0FDN0JmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0lBSXFCRCxJOztBQUVuQjs7Ozs7Ozs7Ozs7QUFXQSxnQkFBWW5MLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNb1MsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlekcsZ0JBQWpCLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47QUFDRixTQUFLNGdCLEdBQUwsR0FBVzNVLEdBQVg7O0FBRUE7QUFDQSxRQUFJLENBQUNuUyxTQUFTK0MsSUFBZCxFQUNFLE1BQU0sSUFBSW1ELGNBQUosRUFBTjtBQUNGLFNBQUt5aUIsS0FBTCxHQUFhM29CLFNBQVMrQyxJQUF0QjtBQUNEOztBQUVEOzs7OztpQkFHQTJDLEssb0JBQVE7QUFDTixTQUFLUCxNQUFMO0FBQ0QsRzs7QUFFRDs7Ozs7aUJBR0FBLE0scUJBQVM7QUFBQTs7QUFFUDtBQUNBLFFBQUksS0FBSzJoQixHQUFMLENBQVNqYixPQUFiLEVBQXNCO0FBQ3BCLFdBQUs0YixPQUFMLEdBQWVsbUIsT0FBT29hLFdBQXRCOztBQUVBO0FBQ0FqVCxpQkFBVyxZQUFNO0FBQ2ZuSCxlQUFPcW5CLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7O0FBRUE7QUFDQSxZQUFJLE1BQUs5QixHQUFMLENBQVNqYixPQUFiLEVBQXNCO0FBQ3BCLGdCQUFLOGMsS0FBTCxDQUFXdmdCLE9BQVgsQ0FBbUJ1RSxPQUFuQixHQUE2QixNQUE3QjtBQUNEO0FBQ0YsT0FQRCxFQU9HLEdBUEg7O0FBU0Y7QUFDQyxLQWRELE1BY087QUFDTCxXQUFLZ2MsS0FBTCxDQUFXdmdCLE9BQVgsQ0FBbUJ1RSxPQUFuQixHQUE2QixFQUE3Qjs7QUFFQTs7QUFFQWpFLGlCQUFXLFlBQU07QUFDZixZQUFJLE9BQU8sTUFBSytlLE9BQVosS0FBd0IsV0FBNUIsRUFDRWxtQixPQUFPcW5CLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsTUFBS25CLE9BQXhCO0FBQ0gsT0FIRCxFQUdHLEdBSEg7QUFJRDtBQUNGLEc7O0FBRUQ7Ozs7O2lCQUdBNWhCLEssb0JBQVE7QUFDTixRQUFJLEtBQUs4aUIsS0FBTCxDQUFXdmdCLE9BQVgsQ0FBbUJ1RSxPQUFuQixLQUErQixNQUFuQyxFQUNFcEwsT0FBT3FuQixRQUFQLENBQWdCLENBQWhCLEVBQW1CLEtBQUtuQixPQUF4QjtBQUNGLFNBQUtrQixLQUFMLENBQVd2Z0IsT0FBWCxDQUFtQnVFLE9BQW5CLEdBQTZCLEVBQTdCO0FBQ0QsRzs7Ozs7a0JBekVrQnpCLEk7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7OzswSkF2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBWUEsSUFBTTJkLGFBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ3pCLE1BQUkva0IsT0FBTzlELFNBQVM4b0IsY0FBVCxDQUF3QnBVLElBQXhCLENBQVg7QUFDQSxNQUFJbUUsSUFBSTdZLFNBQVNKLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUjtBQUNBaVosSUFBRTVYLFdBQUYsQ0FBYzZDLElBQWQ7QUFDQSxTQUFPK1UsRUFBRTlYLFNBQVQ7QUFDRCxDQUxEOztBQU9BOzs7Ozs7Ozs7OztBQVdBLElBQU1nb0IsV0FBVyxTQUFYQSxRQUFXLENBQUNyTSxNQUFELEVBQVNsWSxDQUFULEVBQWU7QUFDOUIsTUFBSWxDLElBQUlrQyxDQUFSO0FBQ0EsTUFBSWtZLE9BQU81UCxNQUFQLEdBQWdCeEssQ0FBcEIsRUFBdUI7QUFDckIsV0FBT29hLE9BQU9wYSxDQUFQLE1BQWMsR0FBZCxJQUFxQixFQUFFQSxDQUFGLEdBQU0sQ0FBbEM7QUFDQSxXQUFVb2EsT0FBT3JULFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IvRyxDQUFwQixDQUFWO0FBQ0Q7QUFDRCxTQUFPb2EsTUFBUDtBQUNELENBUEQ7O0FBU0E7Ozs7Ozs7QUFPQSxJQUFNNVcsWUFBWSxTQUFaQSxTQUFZLE1BQU87QUFDdkIsTUFBTUMsT0FBTy9GLFNBQVNnRyxpQkFBVCxXQUFtQzNDLEdBQW5DLEVBQTBDLENBQTFDLENBQWI7QUFDQSxNQUFJLEVBQUUwQyxnQkFBZ0JFLGVBQWxCLENBQUosRUFDRSxNQUFNLElBQUlDLGNBQUosRUFBTjtBQUNGLFNBQU9ILEtBQUtJLE9BQVo7QUFDRCxDQUxEOztBQU9BOzs7O0lBSXFCZ0YsTTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsa0JBQVlwTCxFQUFaLEVBQWdCc0wsSUFBaEIsRUFBc0I7QUFBQTs7QUFDcEIsUUFBTThHLE1BQU8sT0FBT3BTLEVBQVAsS0FBYyxRQUFmLEdBQ1JDLFNBQVNrSSxhQUFULENBQXVCbkksRUFBdkIsQ0FEUSxHQUVSQSxFQUZKO0FBR0EsUUFBSSxFQUFFb1MsZUFBZTNMLFdBQWpCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUs0Z0IsR0FBTCxHQUFXM1UsR0FBWDs7QUFFQTs7QUFSb0IsZ0NBU0NsUyxNQUFNQyxTQUFOLENBQWdCNkUsS0FBaEIsQ0FBc0IzRSxJQUF0QixDQUEyQixLQUFLMG1CLEdBQUwsQ0FBUzVsQixRQUFwQyxDQVREO0FBQUEsUUFTYjZFLElBVGE7QUFBQSxRQVNQaWpCLElBVE87O0FBV3BCOzs7QUFDQSxTQUFLQyxLQUFMLEdBQWE1ZCxJQUFiO0FBQ0EsU0FBSzZkLEtBQUwsR0FBYW5qQixJQUFiO0FBQ0EsU0FBS29qQixLQUFMLEdBQWFILElBQWI7O0FBRUE7QUFDQSxTQUFLSSxRQUFMLEdBQWdCO0FBQ2RDLG1CQUFhLEtBQUtILEtBQUwsQ0FBV3RvQixXQURWO0FBRWQwb0IsWUFBTXhqQixVQUFVLG9CQUFWLENBRlE7QUFHZHlqQixXQUFLempCLFVBQVUsbUJBQVYsQ0FIUztBQUlkMGpCLGFBQU8xakIsVUFBVSxxQkFBVjs7QUFHVDtBQVBnQixLQUFoQixDQVFBLElBQU0yakIsWUFBWTNqQixVQUFVLGtCQUFWLENBQWxCO0FBQ0EsUUFBSTJqQixVQUFVM2MsTUFBZCxFQUNFNGMsK0JBQUtELFNBQUwsQ0FBZUUsU0FBZixHQUEyQkYsU0FBM0I7O0FBRUY7QUFDQSxTQUFLRyxLQUFMLEdBQWE5akIsVUFBVSxpQkFBVixFQUE2QitqQixLQUE3QixDQUFtQyxHQUFuQyxFQUNWQyxNQURVLENBQ0hDLE9BREcsRUFFVnplLEdBRlUsQ0FFTjtBQUFBLGFBQVEwZSxLQUFLQyxJQUFMLEVBQVI7QUFBQSxLQUZNLENBQWI7QUFHRDs7QUFFRDs7Ozs7OzttQkFLQTlrQixNLG1CQUFPRyxFLEVBQUk7QUFBQTs7QUFFVDtBQUNBLFFBQUlBLEdBQUdtWCxJQUFILEtBQVksT0FBWixJQUF1QixDQUFDLEtBQUsrSyxNQUFqQyxFQUF5Qzs7QUFFdkM7QUFDQSxVQUFNRCxPQUFPLFNBQVBBLElBQU8sT0FBUTs7QUFFbkI7QUFDQSxjQUFLMkMsS0FBTCxHQUFhN2UsS0FBS3VjLE1BQUwsQ0FBWSxVQUFDdUMsSUFBRCxFQUFPNWUsR0FBUCxFQUFlO0FBQUEsb0NBQ2pCQSxJQUFJckMsUUFBSixDQUFhMmdCLEtBQWIsQ0FBbUIsR0FBbkIsQ0FEaUI7QUFBQSxjQUMvQk8sSUFEK0I7QUFBQSxjQUN6QmpoQixJQUR5Qjs7QUFHdEM7OztBQUNBb0MsY0FBSTJLLEtBQUosR0FBWTJTLFdBQVd0ZCxJQUFJMkssS0FBZixDQUFaO0FBQ0EzSyxjQUFJekgsSUFBSixHQUFZK2tCLFdBQVd0ZCxJQUFJOGUsUUFBZixDQUFaOztBQUVBO0FBQ0EsY0FBSWxoQixJQUFKLEVBQVU7QUFDUm9DLGdCQUFJM0QsTUFBSixHQUFhdWlCLEtBQUs1bEIsR0FBTCxDQUFTNmxCLElBQVQsQ0FBYjs7QUFFQTtBQUNBLGdCQUFJN2UsSUFBSTNELE1BQUosSUFBYyxDQUFDMkQsSUFBSTNELE1BQUosQ0FBVzJJLElBQTlCLEVBQW9DO0FBQ2xDaEYsa0JBQUkzRCxNQUFKLENBQVdzTyxLQUFYLEdBQW1CM0ssSUFBSTJLLEtBQXZCO0FBQ0EzSyxrQkFBSTNELE1BQUosQ0FBVzlELElBQVgsR0FBbUJ5SCxJQUFJOGUsUUFBdkI7QUFDQTllLGtCQUFJM0QsTUFBSixDQUFXMkksSUFBWCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQWhGLGNBQUl6SCxJQUFKLEdBQVd5SCxJQUFJekgsSUFBSixDQUNSWCxPQURRLENBQ0EsS0FEQSxFQUNPLEdBRFAsRUFDMEI7QUFEMUIsV0FFUkEsT0FGUSxDQUVBLE1BRkEsRUFFUSxHQUZSLEVBRTBCO0FBRjFCLFdBR1JBLE9BSFEsQ0FHQSxnQkFIQSxFQUcwQjtBQUNqQyxvQkFBQ2dhLENBQUQsRUFBSW1OLElBQUo7QUFBQSxtQkFBYUEsSUFBYjtBQUFBLFdBSk8sQ0FBWDs7QUFNQTtBQUNBLGNBQUksQ0FBQy9lLElBQUkzRCxNQUFMLElBQWUyRCxJQUFJM0QsTUFBSixDQUFXc08sS0FBWCxLQUFxQjNLLElBQUkySyxLQUE1QyxFQUNFaVUsS0FBS2hPLEdBQUwsQ0FBUzVRLElBQUlyQyxRQUFiLEVBQXVCcUMsR0FBdkI7QUFDRixpQkFBTzRlLElBQVA7QUFDRCxTQTlCWSxFQThCVixJQUFJSSxHQUFKLEVBOUJVLENBQWI7O0FBZ0NBO0FBQ0EsWUFBTUosT0FBTyxNQUFLRCxLQUFsQjtBQUFBLFlBQ01GLE9BQU8sTUFBS0osS0FEbEI7O0FBR0E7QUFDQSxjQUFLWSxNQUFMLEdBQWMsRUFBZDtBQUNBLGNBQUtoRCxNQUFMLEdBQWMsb0NBQUssWUFBVztBQUFBO0FBQUE7O0FBQzVCLGNBQU1pRCxVQUFVO0FBQ2QsdUNBQTJCZiwrQkFBS2dCLE9BRGxCO0FBRWQseUNBQTZCaEIsK0JBQUtpQjs7QUFHcEM7QUFMZ0IsV0FBaEIsQ0FNQSxJQUFNQyxXQUFXdnFCLE9BQU9DLElBQVAsQ0FBWW1xQixPQUFaLEVBQXFCN0MsTUFBckIsQ0FBNEIsVUFBQ2lELE1BQUQsRUFBUzVULElBQVQsRUFBa0I7QUFDN0QsZ0JBQUksQ0FBQ25SLFVBQVVtUixJQUFWLEVBQWdCbFEsS0FBaEIsQ0FBc0IsVUFBdEIsQ0FBTCxFQUNFOGpCLE9BQU90bkIsSUFBUCxDQUFZa25CLFFBQVF4VCxJQUFSLENBQVo7QUFDRixtQkFBTzRULE1BQVA7QUFDRCxXQUpnQixFQUlkLEVBSmMsQ0FBakI7O0FBTUE7QUFDQSxlQUFLRCxRQUFMLENBQWMva0IsS0FBZDtBQUNBLGNBQUkra0IsUUFBSixFQUNFLGtCQUFLQSxRQUFMLEVBQWNuaUIsR0FBZCxrQkFBcUJtaUIsUUFBckI7O0FBRUY7QUFDQSxjQUFJWixLQUFLbGQsTUFBTCxLQUFnQixDQUFoQixJQUFxQmtkLEtBQUssQ0FBTCxNQUFZLElBQWpDLElBQXlDTiwrQkFBS00sS0FBSyxDQUFMLENBQUwsQ0FBN0MsRUFBNEQ7QUFDMUQsaUJBQUtjLEdBQUwsQ0FBU3BCLCtCQUFLTSxLQUFLLENBQUwsQ0FBTCxDQUFUO0FBQ0QsV0FGRCxNQUVPLElBQUlBLEtBQUtsZCxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDMUIsaUJBQUtnZSxHQUFMLENBQVNwQiwrQkFBS3FCLGFBQUwsdUNBQXNCZixJQUF0QixDQUFUO0FBQ0Q7O0FBRUQ7QUFDQSxlQUFLZ0IsS0FBTCxDQUFXLE9BQVgsRUFBb0IsRUFBRUMsT0FBTyxFQUFULEVBQXBCO0FBQ0EsZUFBS0QsS0FBTCxDQUFXLE1BQVg7QUFDQSxlQUFLQSxLQUFMLENBQVcsTUFBWDtBQUNBLGVBQUtBLEtBQUwsQ0FBVyxZQUFYO0FBQ0EsZUFBSzdZLEdBQUwsQ0FBUyxVQUFUOztBQUVBO0FBQ0FnWSxlQUFLaHFCLE9BQUwsQ0FBYTtBQUFBLG1CQUFPLE9BQUtzSSxHQUFMLENBQVM4QyxHQUFULENBQVA7QUFBQSxXQUFiO0FBQ0QsU0FsQ2EsQ0FBZDs7QUFvQ0E7QUFDQSxZQUFNa1AsWUFBWSxNQUFLcU0sR0FBTCxDQUFTMWYsVUFBM0I7QUFDQSxZQUFJLEVBQUVxVCxxQkFBcUJqVSxXQUF2QixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRnVVLGtCQUFValYsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsWUFBTTtBQUN6QyxpQkFBTyxNQUFLZ2xCLE1BQUwsQ0FBWTFkLE1BQVosSUFBc0IyTixVQUFVN1EsU0FBVixHQUN6QjZRLFVBQVU1USxZQURlLElBQ0M0USxVQUFVM1EsWUFBVixHQUF5QixFQUR2RDtBQUVFLGtCQUFLMGdCLE1BQUwsQ0FBWVUsTUFBWixDQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQi9xQixPQUExQixDQUFrQztBQUFBLHFCQUFVcUssUUFBVjtBQUFBLGFBQWxDO0FBRkY7QUFHRCxTQUpEO0FBS0QsT0F0RkQ7QUF1RkE7O0FBRUE7QUFDQTlCLGlCQUFXLFlBQU07QUFDZixlQUFPLE9BQU8sTUFBS3VnQixLQUFaLEtBQXNCLFVBQXRCLEdBQ0gsTUFBS0EsS0FBTCxHQUFhaGxCLElBQWIsQ0FBa0JzakIsSUFBbEIsQ0FERyxHQUVIQSxLQUFLLE1BQUswQixLQUFWLENBRko7QUFHRCxPQUpELEVBSUcsR0FKSDs7QUFNRjtBQUNDLEtBcEdELE1Bb0dPLElBQUkzakIsR0FBR21YLElBQUgsS0FBWSxPQUFaLElBQXVCblgsR0FBR21YLElBQUgsS0FBWSxPQUF2QyxFQUFnRDtBQUNyRCxVQUFNMVQsU0FBU3pELEdBQUd5RCxNQUFsQjtBQUNBLFVBQUksRUFBRUEsa0JBQWtCMkMsZ0JBQXBCLENBQUosRUFDRSxNQUFNLElBQUl4RixjQUFKLEVBQU47O0FBRUY7QUFDQSxVQUFJLENBQUMsS0FBS3NoQixNQUFOLElBQWdCemUsT0FBT3pGLEtBQVAsS0FBaUIsS0FBSzZuQixNQUExQyxFQUNFOztBQUVGO0FBQ0EsYUFBTyxLQUFLaEMsS0FBTCxDQUFXaUMsVUFBbEI7QUFDRSxhQUFLakMsS0FBTCxDQUFXclUsV0FBWCxDQUF1QixLQUFLcVUsS0FBTCxDQUFXaUMsVUFBbEM7QUFERixPQVZxRCxDQWFyRDtBQUNBLFdBQUtELE1BQUwsR0FBY3BpQixPQUFPekYsS0FBckI7QUFDQSxVQUFJLEtBQUs2bkIsTUFBTCxDQUFZcmUsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixhQUFLb2MsS0FBTCxDQUFXdG9CLFdBQVgsR0FBeUIsS0FBS3dvQixRQUFMLENBQWNDLFdBQXZDO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLFVBQU13QixTQUFTLEtBQUtyRDs7QUFFbEI7QUFGYSxPQUdaL2IsS0FIWSxDQUdOLGlCQUFTO0FBQ2QsY0FBSzBmLE1BQUwsQ0FBWTNuQixXQUFaLEdBQTBCcW1CLEtBQTFCLENBQWdDLEdBQWhDLEVBQ0dDLE1BREgsQ0FDVUMsT0FEVixFQUVHNXBCLE9BRkgsQ0FFVyxnQkFBUTtBQUNmc0wsZ0JBQU00ZixJQUFOLENBQVdBLElBQVgsRUFBaUIsRUFBRUMsVUFBVTVCLCtCQUFLNkIsS0FBTCxDQUFXRCxRQUFYLENBQW9CRSxRQUFoQyxFQUFqQjtBQUNELFNBSkg7QUFLRCxPQVRZOztBQVdiO0FBWGEsT0FZWjVELE1BWlksQ0FZTCxVQUFDNkQsS0FBRCxFQUFRL2hCLElBQVIsRUFBaUI7QUFDdkIsWUFBTTZCLE1BQU0sTUFBSzJlLEtBQUwsQ0FBVzNsQixHQUFYLENBQWVtRixLQUFLeUksR0FBcEIsQ0FBWjtBQUNBLFlBQUk1RyxJQUFJM0QsTUFBUixFQUFnQjtBQUNkLGNBQU11SyxNQUFNNUcsSUFBSTNELE1BQUosQ0FBV3NCLFFBQXZCO0FBQ0F1aUIsZ0JBQU10UCxHQUFOLENBQVVoSyxHQUFWLEVBQWUsQ0FBQ3NaLE1BQU1sbkIsR0FBTixDQUFVNE4sR0FBVixLQUFrQixFQUFuQixFQUF1QmxOLE1BQXZCLENBQThCeUUsSUFBOUIsQ0FBZjtBQUNELFNBSEQsTUFHTztBQUNMLGNBQU15SSxPQUFNNUcsSUFBSXJDLFFBQWhCO0FBQ0F1aUIsZ0JBQU10UCxHQUFOLENBQVVoSyxJQUFWLEVBQWdCc1osTUFBTWxuQixHQUFOLENBQVU0TixJQUFWLEtBQWtCLEVBQWxDO0FBQ0Q7QUFDRCxlQUFPc1osS0FBUDtBQUNELE9BdEJZLEVBc0JWLElBQUlsQixHQUFKLEVBdEJVLENBQWY7O0FBd0JBO0FBQ0EsVUFBTTllLFFBQVEsa0NBQU8sS0FBSzBmLE1BQUwsQ0FBWWxCLElBQVosRUFBUCxFQUEyQjltQixPQUEzQixDQUNaLElBQUl1b0IsTUFBSixDQUFXaEMsK0JBQUtELFNBQUwsQ0FBZUUsU0FBMUIsRUFBcUMsS0FBckMsQ0FEWSxFQUNpQyxHQURqQyxDQUFkO0FBRUEsVUFBTTVpQixRQUNKLElBQUkya0IsTUFBSixTQUFpQmhDLCtCQUFLRCxTQUFMLENBQWVFLFNBQWhDLFVBQThDbGUsS0FBOUMsUUFBd0QsS0FBeEQsQ0FERjtBQUVBLFVBQU1rZ0IsWUFBWSxTQUFaQSxTQUFZLENBQUN4TyxDQUFELEVBQUl3TSxTQUFKLEVBQWVpQyxLQUFmO0FBQUEsZUFDYmpDLFNBRGEsWUFDR2lDLEtBREg7QUFBQSxPQUFsQjs7QUFHQTtBQUNBLFdBQUtwQixNQUFMLEdBQWMsRUFBZDtBQUNBSyxhQUFPMXFCLE9BQVAsQ0FBZSxVQUFDc3JCLEtBQUQsRUFBUXRaLEdBQVIsRUFBZ0I7QUFBQTs7QUFDN0IsWUFBTTVHLE1BQU0sTUFBSzJlLEtBQUwsQ0FBVzNsQixHQUFYLENBQWU0TixHQUFmLENBQVo7O0FBRUE7QUFDQSxZQUFNMFosVUFDSjtBQUFBO0FBQUEsWUFBSSxTQUFNLHdCQUFWO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBTXRnQixJQUFJckMsUUFBYixFQUF1QixPQUFPcUMsSUFBSTJLLEtBQWxDO0FBQ0UsdUJBQU0sd0JBRFIsRUFDaUMsVUFBUyxJQUQxQztBQUVFO0FBQUE7QUFBQSxnQkFBUyxTQUFNLGlFQUFmO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFNBQU0seUJBQVY7QUFDRyxrQkFBRXBWLFFBQVF5SyxJQUFJMkssS0FBSixDQUFVL1MsT0FBVixDQUFrQjRELEtBQWxCLEVBQXlCNGtCLFNBQXpCLENBQVY7QUFESCxlQUZGO0FBS0dwZ0Isa0JBQUl6SCxJQUFKLENBQVNnSixNQUFULEdBQ0M7QUFBQTtBQUFBLGtCQUFHLFNBQU0sMEJBQVQ7QUFDRyxrQkFBRWhNLFFBQVF5SyxJQUFJekgsSUFBSixDQUFTWCxPQUFULENBQWlCNEQsS0FBakIsRUFBd0I0a0IsU0FBeEIsQ0FBVjtBQURILGVBREQsR0FHUTtBQVJYO0FBRkY7QUFERixTQURGOztBQWtCQTtBQUNBLFlBQU1HLFdBQVdMLE1BQU1uZ0IsR0FBTixDQUFVLGdCQUFRO0FBQ2pDLGlCQUFPLFlBQU07QUFDWCxnQkFBTXlnQixVQUFVLE1BQUs3QixLQUFMLENBQVczbEIsR0FBWCxDQUFlbUYsS0FBS3lJLEdBQXBCLENBQWhCO0FBQ0EwWixvQkFBUTVxQixXQUFSLENBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQU04cUIsUUFBUTdpQixRQUFqQixFQUEyQixPQUFPNmlCLFFBQVE3VixLQUExQztBQUNFLHlCQUFNLHdCQURSLEVBQ2lDLGVBQVksUUFEN0M7QUFFRSwwQkFBUyxJQUZYO0FBR0U7QUFBQTtBQUFBLGtCQUFTLFNBQU0sMkJBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUksU0FBTSx5QkFBVjtBQUNHLG9CQUFFcFYsUUFBUWlyQixRQUFRN1YsS0FBUixDQUFjL1MsT0FBZCxDQUFzQjRELEtBQXRCLEVBQTZCNGtCLFNBQTdCLENBQVY7QUFESCxpQkFERjtBQUlHSSx3QkFBUWpvQixJQUFSLENBQWFnSixNQUFiLEdBQ0M7QUFBQTtBQUFBLG9CQUFHLFNBQU0sMEJBQVQ7QUFDRyxvQkFBRWhNLFFBQVFpb0IsU0FDVGdELFFBQVFqb0IsSUFBUixDQUFhWCxPQUFiLENBQXFCNEQsS0FBckIsRUFBNEI0a0IsU0FBNUIsQ0FEUyxFQUMrQixHQUQvQjtBQUFWO0FBREgsaUJBREQsR0FLUTtBQVRYO0FBSEYsYUFERjtBQWlCRCxXQW5CRDtBQW9CRCxTQXJCZ0IsQ0FBakI7O0FBdUJBO0FBQ0EseUJBQUtuQixNQUFMLEVBQVlqbkIsSUFBWixpQkFBaUI7QUFBQSxpQkFBTSxNQUFLNGxCLEtBQUwsQ0FBV2xvQixXQUFYLENBQXVCNHFCLE9BQXZCLENBQU47QUFBQSxTQUFqQixTQUEyREMsUUFBM0Q7QUFDRCxPQWhERDs7QUFrREE7QUFDQSxVQUFNclIsWUFBWSxLQUFLcU0sR0FBTCxDQUFTMWYsVUFBM0I7QUFDQSxVQUFJLEVBQUVxVCxxQkFBcUJqVSxXQUF2QixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixhQUFPLEtBQUtza0IsTUFBTCxDQUFZMWQsTUFBWixJQUNIMk4sVUFBVTVRLFlBQVYsSUFBMEI0USxVQUFVM1EsWUFBVixHQUF5QixFQUR2RDtBQUVHLGFBQUswZ0IsTUFBTCxDQUFZd0IsS0FBWixFQUFEO0FBRkYsT0E3R3FELENBaUhyRDtBQUNBLFVBQU1uRSxVQUFVLEtBQUtzQixLQUFMLENBQVdua0IsZ0JBQVgsQ0FBNEIsc0JBQTVCLENBQWhCO0FBQ0EvRSxZQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJ5bkIsT0FBN0IsRUFBc0Msa0JBQVU7QUFDOUMsU0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQjFuQixPQUFyQixDQUE2QixrQkFBVTtBQUNyQzhyQixpQkFBT3ptQixnQkFBUCxDQUF3QndDLE1BQXhCLEVBQWdDLGVBQU87QUFDckMsZ0JBQUlBLFdBQVcsU0FBWCxJQUF3QmtrQixJQUFJaGdCLE9BQUosS0FBZ0IsRUFBNUMsRUFDRTs7QUFFRjtBQUNBLGdCQUFNTixTQUFTNUwsU0FBU2tJLGFBQVQsQ0FBdUIseUJBQXZCLENBQWY7QUFDQSxnQkFBSSxFQUFFMEQsa0JBQWtCRixnQkFBcEIsQ0FBSixFQUNFLE1BQU0sSUFBSXhGLGNBQUosRUFBTjtBQUNGLGdCQUFJMEYsT0FBT0MsT0FBWCxFQUFvQjtBQUNsQkQscUJBQU9DLE9BQVAsR0FBaUIsS0FBakI7QUFDQUQscUJBQU9FLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixRQUFoQixDQUFyQjtBQUNEOztBQUVEOztBQUVBbWdCLGdCQUFJOWYsY0FBSjtBQUNBMUQsdUJBQVcsWUFBTTtBQUNmMUksdUJBQVNrSixRQUFULENBQWtCaWpCLElBQWxCLEdBQXlCRixPQUFPRSxJQUFoQztBQUNELGFBRkQsRUFFRyxHQUZIO0FBR0QsV0FuQkQ7QUFvQkQsU0FyQkQ7QUFzQkQsT0F2QkQ7O0FBeUJBO0FBQ0EsY0FBUXRCLE9BQU91QixJQUFmO0FBQ0UsYUFBSyxDQUFMO0FBQ0UsZUFBS2xELEtBQUwsQ0FBV3RvQixXQUFYLEdBQXlCLEtBQUt3b0IsUUFBTCxDQUFjRSxJQUF2QztBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0UsZUFBS0osS0FBTCxDQUFXdG9CLFdBQVgsR0FBeUIsS0FBS3dvQixRQUFMLENBQWNHLEdBQXZDO0FBQ0E7QUFDRjtBQUNFLGVBQUtMLEtBQUwsQ0FBV3RvQixXQUFYLEdBQ0UsS0FBS3dvQixRQUFMLENBQWNJLEtBQWQsQ0FBb0JybUIsT0FBcEIsQ0FBNEIsR0FBNUIsRUFBaUMwbkIsT0FBT3VCLElBQXhDLENBREY7QUFSSjtBQVdEO0FBQ0YsRzs7Ozs7a0JBN1RrQmpoQixNOzs7Ozs7OztBQ3RGUjs7QUFFYixJQUFJa2hCLG1CQUFtQixxQkFBdkI7O0FBRUE3cUIsT0FBT0MsT0FBUCxHQUFpQixVQUFVNnFCLEdBQVYsRUFBZTtBQUMvQixLQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUM1QixRQUFNLElBQUluZCxTQUFKLENBQWMsbUJBQWQsQ0FBTjtBQUNBOztBQUVELFFBQU9tZCxJQUFJbnBCLE9BQUosQ0FBWWtwQixnQkFBWixFQUE4QixNQUE5QixDQUFQO0FBQ0EsQ0FORCxDOzs7Ozs7QUNKQSxnRkFBa0MsbUJBQU8sQ0FBQyxFQUE2RyxFOzs7Ozs7Ozs7Ozs7QUNBdko7Ozs7OztBQU1BLENBQUMsQ0FBQyxZQUFVOztBQUVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLE1BQUkzQyxPQUFPLFNBQVBBLElBQU8sQ0FBVXJqQixNQUFWLEVBQWtCO0FBQzNCLFFBQUlrbUIsVUFBVSxJQUFJN0MsS0FBSzhDLE9BQVQsRUFBZDs7QUFFQUQsWUFBUTNCLFFBQVIsQ0FBaUJuaUIsR0FBakIsQ0FDRWloQixLQUFLZ0IsT0FEUCxFQUVFaEIsS0FBS2lCLGNBRlAsRUFHRWpCLEtBQUsrQyxPQUhQOztBQU1BRixZQUFRRyxjQUFSLENBQXVCamtCLEdBQXZCLENBQ0VpaEIsS0FBSytDLE9BRFA7O0FBSUFwbUIsV0FBT2pHLElBQVAsQ0FBWW1zQixPQUFaLEVBQXFCQSxPQUFyQjtBQUNBLFdBQU9BLFFBQVFJLEtBQVIsRUFBUDtBQUNELEdBZkQ7O0FBaUJBakQsT0FBS3BULE9BQUwsR0FBZSxPQUFmO0FBQ0E7Ozs7O0FBS0E7Ozs7QUFJQW9ULE9BQUtrRCxLQUFMLEdBQWEsRUFBYjs7QUFFQTs7Ozs7OztBQU9BbEQsT0FBS2tELEtBQUwsQ0FBV3JiLElBQVgsR0FBbUIsVUFBVUUsTUFBVixFQUFrQjtBQUNuQztBQUNBLFdBQU8sVUFBVTFKLE9BQVYsRUFBbUI7QUFDeEIsVUFBSTBKLE9BQU9ILE9BQVAsSUFBa0JBLFFBQVFDLElBQTlCLEVBQW9DO0FBQ2xDRCxnQkFBUUMsSUFBUixDQUFheEosT0FBYjtBQUNEO0FBQ0YsS0FKRDtBQUtBO0FBQ0QsR0FSaUIsQ0FRZixJQVJlLENBQWxCOztBQVVBOzs7Ozs7Ozs7OztBQVdBMmhCLE9BQUtrRCxLQUFMLENBQVdDLFFBQVgsR0FBc0IsVUFBVXJULEdBQVYsRUFBZTtBQUNuQyxRQUFJQSxRQUFRLEtBQUssQ0FBYixJQUFrQkEsUUFBUSxJQUE5QixFQUFvQztBQUNsQyxhQUFPLEVBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPQSxJQUFJNVEsUUFBSixFQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOGdCLE9BQUtrRCxLQUFMLENBQVcvb0IsS0FBWCxHQUFtQixVQUFVMlYsR0FBVixFQUFlO0FBQ2hDLFFBQUlBLFFBQVEsSUFBUixJQUFnQkEsUUFBUWpMLFNBQTVCLEVBQXVDO0FBQ3JDLGFBQU9pTCxHQUFQO0FBQ0Q7O0FBRUQsUUFBSTNWLFFBQVF4RCxPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUFBLFFBQ0k5ZCxPQUFPRCxPQUFPQyxJQUFQLENBQVlrWixHQUFaLENBRFg7O0FBR0EsU0FBSyxJQUFJbFgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaEMsS0FBS3dNLE1BQXpCLEVBQWlDeEssR0FBakMsRUFBc0M7QUFDcEMsVUFBSWUsTUFBTS9DLEtBQUtnQyxDQUFMLENBQVY7QUFBQSxVQUNJMk8sTUFBTXVJLElBQUluVyxHQUFKLENBRFY7O0FBR0EsVUFBSXBELE1BQU1ZLE9BQU4sQ0FBY29RLEdBQWQsQ0FBSixFQUF3QjtBQUN0QnBOLGNBQU1SLEdBQU4sSUFBYTROLElBQUlsTSxLQUFKLEVBQWI7QUFDQTtBQUNEOztBQUVELFVBQUksT0FBT2tNLEdBQVAsS0FBZSxRQUFmLElBQ0EsT0FBT0EsR0FBUCxLQUFlLFFBRGYsSUFFQSxPQUFPQSxHQUFQLEtBQWUsU0FGbkIsRUFFOEI7QUFDNUJwTixjQUFNUixHQUFOLElBQWE0TixHQUFiO0FBQ0E7QUFDRDs7QUFFRCxZQUFNLElBQUk5QixTQUFKLENBQWMsdURBQWQsQ0FBTjtBQUNEOztBQUVELFdBQU90TCxLQUFQO0FBQ0QsR0E1QkQ7QUE2QkE2bEIsT0FBS29ELFFBQUwsR0FBZ0IsVUFBVUMsTUFBVixFQUFrQkMsU0FBbEIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQ3hELFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0UsWUFBTCxHQUFvQkQsV0FBcEI7QUFDRCxHQUpEOztBQU1BdkQsT0FBS29ELFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixHQUF2Qjs7QUFFQXpELE9BQUtvRCxRQUFMLENBQWNNLFVBQWQsR0FBMkIsVUFBVXRVLENBQVYsRUFBYTtBQUN0QyxRQUFJdFUsSUFBSXNVLEVBQUV2TSxPQUFGLENBQVVtZCxLQUFLb0QsUUFBTCxDQUFjSyxNQUF4QixDQUFSOztBQUVBLFFBQUkzb0IsTUFBTSxDQUFDLENBQVgsRUFBYztBQUNaLFlBQU0sNEJBQU47QUFDRDs7QUFFRCxRQUFJNm9CLFdBQVd2VSxFQUFFL1QsS0FBRixDQUFRLENBQVIsRUFBV1AsQ0FBWCxDQUFmO0FBQUEsUUFDSXVvQixTQUFTalUsRUFBRS9ULEtBQUYsQ0FBUVAsSUFBSSxDQUFaLENBRGI7O0FBR0EsV0FBTyxJQUFJa2xCLEtBQUtvRCxRQUFULENBQW1CQyxNQUFuQixFQUEyQk0sUUFBM0IsRUFBcUN2VSxDQUFyQyxDQUFQO0FBQ0QsR0FYRDs7QUFhQTRRLE9BQUtvRCxRQUFMLENBQWM1c0IsU0FBZCxDQUF3QjBJLFFBQXhCLEdBQW1DLFlBQVk7QUFDN0MsUUFBSSxLQUFLc2tCLFlBQUwsSUFBcUIzZSxTQUF6QixFQUFvQztBQUNsQyxXQUFLMmUsWUFBTCxHQUFvQixLQUFLRixTQUFMLEdBQWlCdEQsS0FBS29ELFFBQUwsQ0FBY0ssTUFBL0IsR0FBd0MsS0FBS0osTUFBakU7QUFDRDs7QUFFRCxXQUFPLEtBQUtHLFlBQVo7QUFDRCxHQU5EO0FBT0E7Ozs7O0FBS0E7Ozs7O0FBS0F4RCxPQUFLNEQsR0FBTCxHQUFXLFVBQVVsTixRQUFWLEVBQW9CO0FBQzdCLFNBQUtBLFFBQUwsR0FBZ0IvZixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBaEI7O0FBRUEsUUFBSWdDLFFBQUosRUFBYztBQUNaLFdBQUt0VCxNQUFMLEdBQWNzVCxTQUFTdFQsTUFBdkI7O0FBRUEsV0FBSyxJQUFJeEssSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt3SyxNQUF6QixFQUFpQ3hLLEdBQWpDLEVBQXNDO0FBQ3BDLGFBQUs4ZCxRQUFMLENBQWNBLFNBQVM5ZCxDQUFULENBQWQsSUFBNkIsSUFBN0I7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLFdBQUt3SyxNQUFMLEdBQWMsQ0FBZDtBQUNEO0FBQ0YsR0FaRDs7QUFjQTs7Ozs7OztBQU9BNGMsT0FBSzRELEdBQUwsQ0FBU0MsUUFBVCxHQUFvQjtBQUNsQkMsZUFBVyxtQkFBVWhFLEtBQVYsRUFBaUI7QUFDMUIsYUFBT0EsS0FBUDtBQUNELEtBSGlCOztBQUtsQmlFLFdBQU8sZUFBVWpFLEtBQVYsRUFBaUI7QUFDdEIsYUFBT0EsS0FBUDtBQUNELEtBUGlCOztBQVNsQmpGLGNBQVUsb0JBQVk7QUFDcEIsYUFBTyxJQUFQO0FBQ0Q7O0FBR0g7Ozs7Ozs7QUFkb0IsR0FBcEIsQ0FxQkFtRixLQUFLNEQsR0FBTCxDQUFTSSxLQUFULEdBQWlCO0FBQ2ZGLGVBQVcscUJBQVk7QUFDckIsYUFBTyxJQUFQO0FBQ0QsS0FIYzs7QUFLZkMsV0FBTyxlQUFVakUsS0FBVixFQUFpQjtBQUN0QixhQUFPQSxLQUFQO0FBQ0QsS0FQYzs7QUFTZmpGLGNBQVUsb0JBQVk7QUFDcEIsYUFBTyxLQUFQO0FBQ0Q7O0FBR0g7Ozs7OztBQWRpQixHQUFqQixDQW9CQW1GLEtBQUs0RCxHQUFMLENBQVNwdEIsU0FBVCxDQUFtQnFrQixRQUFuQixHQUE4QixVQUFVN0wsTUFBVixFQUFrQjtBQUM5QyxXQUFPLENBQUMsQ0FBQyxLQUFLMEgsUUFBTCxDQUFjMUgsTUFBZCxDQUFUO0FBQ0QsR0FGRDs7QUFJQTs7Ozs7Ozs7QUFRQWdSLE9BQUs0RCxHQUFMLENBQVNwdEIsU0FBVCxDQUFtQnN0QixTQUFuQixHQUErQixVQUFVaEUsS0FBVixFQUFpQjtBQUM5QyxRQUFJbUUsQ0FBSjtBQUFBLFFBQU9DLENBQVA7QUFBQSxRQUFVeE4sUUFBVjtBQUFBLFFBQW9CeU4sZUFBZSxFQUFuQzs7QUFFQSxRQUFJckUsVUFBVUUsS0FBSzRELEdBQUwsQ0FBU0MsUUFBdkIsRUFBaUM7QUFDL0IsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBSS9ELFVBQVVFLEtBQUs0RCxHQUFMLENBQVNJLEtBQXZCLEVBQThCO0FBQzVCLGFBQU9sRSxLQUFQO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLMWMsTUFBTCxHQUFjMGMsTUFBTTFjLE1BQXhCLEVBQWdDO0FBQzlCNmdCLFVBQUksSUFBSjtBQUNBQyxVQUFJcEUsS0FBSjtBQUNELEtBSEQsTUFHTztBQUNMbUUsVUFBSW5FLEtBQUo7QUFDQW9FLFVBQUksSUFBSjtBQUNEOztBQUVEeE4sZUFBVy9mLE9BQU9DLElBQVAsQ0FBWXF0QixFQUFFdk4sUUFBZCxDQUFYOztBQUVBLFNBQUssSUFBSTlkLElBQUksQ0FBYixFQUFnQkEsSUFBSThkLFNBQVN0VCxNQUE3QixFQUFxQ3hLLEdBQXJDLEVBQTBDO0FBQ3hDLFVBQUkrYyxVQUFVZSxTQUFTOWQsQ0FBVCxDQUFkO0FBQ0EsVUFBSStjLFdBQVd1TyxFQUFFeE4sUUFBakIsRUFBMkI7QUFDekJ5TixxQkFBYXRxQixJQUFiLENBQWtCOGIsT0FBbEI7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBSXFLLEtBQUs0RCxHQUFULENBQWNPLFlBQWQsQ0FBUDtBQUNELEdBN0JEOztBQStCQTs7Ozs7OztBQU9BbkUsT0FBSzRELEdBQUwsQ0FBU3B0QixTQUFULENBQW1CdXRCLEtBQW5CLEdBQTJCLFVBQVVqRSxLQUFWLEVBQWlCO0FBQzFDLFFBQUlBLFVBQVVFLEtBQUs0RCxHQUFMLENBQVNDLFFBQXZCLEVBQWlDO0FBQy9CLGFBQU83RCxLQUFLNEQsR0FBTCxDQUFTQyxRQUFoQjtBQUNEOztBQUVELFFBQUkvRCxVQUFVRSxLQUFLNEQsR0FBTCxDQUFTSSxLQUF2QixFQUE4QjtBQUM1QixhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPLElBQUloRSxLQUFLNEQsR0FBVCxDQUFhanRCLE9BQU9DLElBQVAsQ0FBWSxLQUFLOGYsUUFBakIsRUFBMkJuYixNQUEzQixDQUFrQzVFLE9BQU9DLElBQVAsQ0FBWWtwQixNQUFNcEosUUFBbEIsQ0FBbEMsQ0FBYixDQUFQO0FBQ0QsR0FWRDtBQVdBOzs7Ozs7OztBQVFBc0osT0FBS29FLEdBQUwsR0FBVyxVQUFVQyxPQUFWLEVBQW1CQyxhQUFuQixFQUFrQztBQUMzQyxRQUFJQyxvQkFBb0IsQ0FBeEI7O0FBRUEsU0FBSyxJQUFJakIsU0FBVCxJQUFzQmUsT0FBdEIsRUFBK0I7QUFDN0IsVUFBSWYsYUFBYSxRQUFqQixFQUEyQixTQURFLENBQ087QUFDcENpQiwyQkFBcUI1dEIsT0FBT0MsSUFBUCxDQUFZeXRCLFFBQVFmLFNBQVIsQ0FBWixFQUFnQ2xnQixNQUFyRDtBQUNEOztBQUVELFFBQUlvaEIsSUFBSSxDQUFDRixnQkFBZ0JDLGlCQUFoQixHQUFvQyxHQUFyQyxLQUE2Q0Esb0JBQW9CLEdBQWpFLENBQVI7O0FBRUEsV0FBT3JoQixLQUFLdWhCLEdBQUwsQ0FBUyxJQUFJdmhCLEtBQUswWSxHQUFMLENBQVM0SSxDQUFULENBQWIsQ0FBUDtBQUNELEdBWEQ7O0FBYUE7Ozs7Ozs7O0FBUUF4RSxPQUFLMEUsS0FBTCxHQUFhLFVBQVU5QixHQUFWLEVBQWUrQixRQUFmLEVBQXlCO0FBQ3BDLFNBQUsvQixHQUFMLEdBQVdBLE9BQU8sRUFBbEI7QUFDQSxTQUFLK0IsUUFBTCxHQUFnQkEsWUFBWSxFQUE1QjtBQUNELEdBSEQ7O0FBS0E7Ozs7O0FBS0EzRSxPQUFLMEUsS0FBTCxDQUFXbHVCLFNBQVgsQ0FBcUIwSSxRQUFyQixHQUFnQyxZQUFZO0FBQzFDLFdBQU8sS0FBSzBqQixHQUFaO0FBQ0QsR0FGRDs7QUFJQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBV0E1QyxPQUFLMEUsS0FBTCxDQUFXbHVCLFNBQVgsQ0FBcUJpRixNQUFyQixHQUE4QixVQUFVNEosRUFBVixFQUFjO0FBQzFDLFNBQUt1ZCxHQUFMLEdBQVd2ZCxHQUFHLEtBQUt1ZCxHQUFSLEVBQWEsS0FBSytCLFFBQWxCLENBQVg7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUtBOzs7Ozs7O0FBT0EzRSxPQUFLMEUsS0FBTCxDQUFXbHVCLFNBQVgsQ0FBcUIyRCxLQUFyQixHQUE2QixVQUFVa0wsRUFBVixFQUFjO0FBQ3pDQSxTQUFLQSxNQUFNLFVBQVUrSixDQUFWLEVBQWE7QUFBRSxhQUFPQSxDQUFQO0FBQVUsS0FBcEM7QUFDQSxXQUFPLElBQUk0USxLQUFLMEUsS0FBVCxDQUFnQnJmLEdBQUcsS0FBS3VkLEdBQVIsRUFBYSxLQUFLK0IsUUFBbEIsQ0FBaEIsRUFBNkMsS0FBS0EsUUFBbEQsQ0FBUDtBQUNELEdBSEQ7QUFJQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBM0UsT0FBS0QsU0FBTCxHQUFpQixVQUFValEsR0FBVixFQUFlNlUsUUFBZixFQUF5QjtBQUN4QyxRQUFJN1UsT0FBTyxJQUFQLElBQWVBLE9BQU9qTCxTQUExQixFQUFxQztBQUNuQyxhQUFPLEVBQVA7QUFDRDs7QUFFRCxRQUFJdE8sTUFBTVksT0FBTixDQUFjMlksR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGFBQU9BLElBQUlsTyxHQUFKLENBQVEsVUFBVWdqQixDQUFWLEVBQWE7QUFDMUIsZUFBTyxJQUFJNUUsS0FBSzBFLEtBQVQsQ0FDTDFFLEtBQUtrRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0J5QixDQUFwQixFQUF1QjlxQixXQUF2QixFQURLLEVBRUxrbUIsS0FBS2tELEtBQUwsQ0FBVy9vQixLQUFYLENBQWlCd3FCLFFBQWpCLENBRkssQ0FBUDtBQUlELE9BTE0sQ0FBUDtBQU1EOztBQUVELFFBQUkvQixNQUFNOVMsSUFBSTVRLFFBQUosR0FBZXFoQixJQUFmLEdBQXNCem1CLFdBQXRCLEVBQVY7QUFBQSxRQUNJNk0sTUFBTWljLElBQUl4ZixNQURkO0FBQUEsUUFFSXloQixTQUFTLEVBRmI7O0FBSUEsU0FBSyxJQUFJQyxXQUFXLENBQWYsRUFBa0JDLGFBQWEsQ0FBcEMsRUFBdUNELFlBQVluZSxHQUFuRCxFQUF3RG1lLFVBQXhELEVBQW9FO0FBQ2xFLFVBQUlsRSxPQUFPZ0MsSUFBSW9DLE1BQUosQ0FBV0YsUUFBWCxDQUFYO0FBQUEsVUFDSUcsY0FBY0gsV0FBV0MsVUFEN0I7O0FBR0EsVUFBS25FLEtBQUt2akIsS0FBTCxDQUFXMmlCLEtBQUtELFNBQUwsQ0FBZUUsU0FBMUIsS0FBd0M2RSxZQUFZbmUsR0FBekQsRUFBK0Q7O0FBRTdELFlBQUlzZSxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQUlDLGdCQUFnQmxGLEtBQUtrRCxLQUFMLENBQVcvb0IsS0FBWCxDQUFpQndxQixRQUFqQixLQUE4QixFQUFsRDtBQUNBTyx3QkFBYyxVQUFkLElBQTRCLENBQUNILFVBQUQsRUFBYUUsV0FBYixDQUE1QjtBQUNBQyx3QkFBYyxPQUFkLElBQXlCTCxPQUFPemhCLE1BQWhDOztBQUVBeWhCLGlCQUFPaHJCLElBQVAsQ0FDRSxJQUFJbW1CLEtBQUswRSxLQUFULENBQ0U5QixJQUFJdm5CLEtBQUosQ0FBVTBwQixVQUFWLEVBQXNCRCxRQUF0QixDQURGLEVBRUVJLGFBRkYsQ0FERjtBQU1EOztBQUVESCxxQkFBYUQsV0FBVyxDQUF4QjtBQUNEO0FBRUY7O0FBRUQsV0FBT0QsTUFBUDtBQUNELEdBM0NEOztBQTZDQTs7Ozs7OztBQU9BN0UsT0FBS0QsU0FBTCxDQUFlRSxTQUFmLEdBQTJCLFNBQTNCO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBRCxPQUFLbUYsUUFBTCxHQUFnQixZQUFZO0FBQzFCLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0QsR0FGRDs7QUFJQXBGLE9BQUttRixRQUFMLENBQWNFLG1CQUFkLEdBQW9DMXVCLE9BQU8rZCxNQUFQLENBQWMsSUFBZCxDQUFwQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7Ozs7Ozs7Ozs7QUFZQXNMLE9BQUttRixRQUFMLENBQWNHLGdCQUFkLEdBQWlDLFVBQVVqZ0IsRUFBVixFQUFjN0IsS0FBZCxFQUFxQjtBQUNwRCxRQUFJQSxTQUFTLEtBQUs2aEIsbUJBQWxCLEVBQXVDO0FBQ3JDckYsV0FBS2tELEtBQUwsQ0FBV3JiLElBQVgsQ0FBZ0IsK0NBQStDckUsS0FBL0Q7QUFDRDs7QUFFRDZCLE9BQUc3QixLQUFILEdBQVdBLEtBQVg7QUFDQXdjLFNBQUttRixRQUFMLENBQWNFLG1CQUFkLENBQWtDaGdCLEdBQUc3QixLQUFyQyxJQUE4QzZCLEVBQTlDO0FBQ0QsR0FQRDs7QUFTQTs7Ozs7O0FBTUEyYSxPQUFLbUYsUUFBTCxDQUFjSSwyQkFBZCxHQUE0QyxVQUFVbGdCLEVBQVYsRUFBYztBQUN4RCxRQUFJbWdCLGVBQWVuZ0IsR0FBRzdCLEtBQUgsSUFBYTZCLEdBQUc3QixLQUFILElBQVksS0FBSzZoQixtQkFBakQ7O0FBRUEsUUFBSSxDQUFDRyxZQUFMLEVBQW1CO0FBQ2pCeEYsV0FBS2tELEtBQUwsQ0FBV3JiLElBQVgsQ0FBZ0IsaUdBQWhCLEVBQW1IeEMsRUFBbkg7QUFDRDtBQUNGLEdBTkQ7O0FBUUE7Ozs7Ozs7Ozs7QUFVQTJhLE9BQUttRixRQUFMLENBQWNNLElBQWQsR0FBcUIsVUFBVUMsVUFBVixFQUFzQjtBQUN6QyxRQUFJeEUsV0FBVyxJQUFJbEIsS0FBS21GLFFBQVQsRUFBZjs7QUFFQU8sZUFBV2p2QixPQUFYLENBQW1CLFVBQVVrdkIsTUFBVixFQUFrQjtBQUNuQyxVQUFJdGdCLEtBQUsyYSxLQUFLbUYsUUFBTCxDQUFjRSxtQkFBZCxDQUFrQ00sTUFBbEMsQ0FBVDs7QUFFQSxVQUFJdGdCLEVBQUosRUFBUTtBQUNONmIsaUJBQVNuaUIsR0FBVCxDQUFhc0csRUFBYjtBQUNELE9BRkQsTUFFTztBQUNMLGNBQU0sSUFBSWQsS0FBSixDQUFVLHdDQUF3Q29oQixNQUFsRCxDQUFOO0FBQ0Q7QUFDRixLQVJEOztBQVVBLFdBQU96RSxRQUFQO0FBQ0QsR0FkRDs7QUFnQkE7Ozs7Ozs7QUFPQWxCLE9BQUttRixRQUFMLENBQWMzdUIsU0FBZCxDQUF3QnVJLEdBQXhCLEdBQThCLFlBQVk7QUFDeEMsUUFBSTZtQixNQUFNcnZCLE1BQU1DLFNBQU4sQ0FBZ0I2RSxLQUFoQixDQUFzQjNFLElBQXRCLENBQTJCOE8sU0FBM0IsQ0FBVjs7QUFFQW9nQixRQUFJbnZCLE9BQUosQ0FBWSxVQUFVNE8sRUFBVixFQUFjO0FBQ3hCMmEsV0FBS21GLFFBQUwsQ0FBY0ksMkJBQWQsQ0FBMENsZ0IsRUFBMUM7QUFDQSxXQUFLK2YsTUFBTCxDQUFZdnJCLElBQVosQ0FBaUJ3TCxFQUFqQjtBQUNELEtBSEQsRUFHRyxJQUhIO0FBSUQsR0FQRDs7QUFTQTs7Ozs7Ozs7O0FBU0EyYSxPQUFLbUYsUUFBTCxDQUFjM3VCLFNBQWQsQ0FBd0JxdkIsS0FBeEIsR0FBZ0MsVUFBVUMsVUFBVixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0QvRixTQUFLbUYsUUFBTCxDQUFjSSwyQkFBZCxDQUEwQ1EsS0FBMUM7O0FBRUEsUUFBSUMsTUFBTSxLQUFLWixNQUFMLENBQVl2aUIsT0FBWixDQUFvQmlqQixVQUFwQixDQUFWO0FBQ0EsUUFBSUUsT0FBTyxDQUFDLENBQVosRUFBZTtBQUNiLFlBQU0sSUFBSXpoQixLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUVEeWhCLFVBQU1BLE1BQU0sQ0FBWjtBQUNBLFNBQUtaLE1BQUwsQ0FBWTVELE1BQVosQ0FBbUJ3RSxHQUFuQixFQUF3QixDQUF4QixFQUEyQkQsS0FBM0I7QUFDRCxHQVZEOztBQVlBOzs7Ozs7Ozs7QUFTQS9GLE9BQUttRixRQUFMLENBQWMzdUIsU0FBZCxDQUF3Qnl2QixNQUF4QixHQUFpQyxVQUFVSCxVQUFWLEVBQXNCQyxLQUF0QixFQUE2QjtBQUM1RC9GLFNBQUttRixRQUFMLENBQWNJLDJCQUFkLENBQTBDUSxLQUExQzs7QUFFQSxRQUFJQyxNQUFNLEtBQUtaLE1BQUwsQ0FBWXZpQixPQUFaLENBQW9CaWpCLFVBQXBCLENBQVY7QUFDQSxRQUFJRSxPQUFPLENBQUMsQ0FBWixFQUFlO0FBQ2IsWUFBTSxJQUFJemhCLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBSzZnQixNQUFMLENBQVk1RCxNQUFaLENBQW1Cd0UsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkJELEtBQTNCO0FBQ0QsR0FURDs7QUFXQTs7Ozs7QUFLQS9GLE9BQUttRixRQUFMLENBQWMzdUIsU0FBZCxDQUF3QnlJLE1BQXhCLEdBQWlDLFVBQVVvRyxFQUFWLEVBQWM7QUFDN0MsUUFBSTJnQixNQUFNLEtBQUtaLE1BQUwsQ0FBWXZpQixPQUFaLENBQW9Cd0MsRUFBcEIsQ0FBVjtBQUNBLFFBQUkyZ0IsT0FBTyxDQUFDLENBQVosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsU0FBS1osTUFBTCxDQUFZNUQsTUFBWixDQUFtQndFLEdBQW5CLEVBQXdCLENBQXhCO0FBQ0QsR0FQRDs7QUFTQTs7Ozs7OztBQU9BaEcsT0FBS21GLFFBQUwsQ0FBYzN1QixTQUFkLENBQXdCa1QsR0FBeEIsR0FBOEIsVUFBVW1iLE1BQVYsRUFBa0I7QUFDOUMsUUFBSXFCLGNBQWMsS0FBS2QsTUFBTCxDQUFZaGlCLE1BQTlCOztBQUVBLFNBQUssSUFBSXhLLElBQUksQ0FBYixFQUFnQkEsSUFBSXN0QixXQUFwQixFQUFpQ3R0QixHQUFqQyxFQUFzQztBQUNwQyxVQUFJeU0sS0FBSyxLQUFLK2YsTUFBTCxDQUFZeHNCLENBQVosQ0FBVDtBQUNBLFVBQUl1dEIsT0FBTyxFQUFYOztBQUVBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdkIsT0FBT3poQixNQUEzQixFQUFtQ2dqQixHQUFuQyxFQUF3QztBQUN0QyxZQUFJakYsU0FBUzliLEdBQUd3ZixPQUFPdUIsQ0FBUCxDQUFILEVBQWNBLENBQWQsRUFBaUJ2QixNQUFqQixDQUFiOztBQUVBLFlBQUkxRCxXQUFXLEtBQUssQ0FBaEIsSUFBcUJBLFdBQVcsRUFBcEMsRUFBd0M7O0FBRXhDLFlBQUk1cUIsTUFBTVksT0FBTixDQUFjZ3FCLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixlQUFLLElBQUlrRixJQUFJLENBQWIsRUFBZ0JBLElBQUlsRixPQUFPL2QsTUFBM0IsRUFBbUNpakIsR0FBbkMsRUFBd0M7QUFDdENGLGlCQUFLdHNCLElBQUwsQ0FBVXNuQixPQUFPa0YsQ0FBUCxDQUFWO0FBQ0Q7QUFDRixTQUpELE1BSU87QUFDTEYsZUFBS3RzQixJQUFMLENBQVVzbkIsTUFBVjtBQUNEO0FBQ0Y7O0FBRUQwRCxlQUFTc0IsSUFBVDtBQUNEOztBQUVELFdBQU90QixNQUFQO0FBQ0QsR0F6QkQ7O0FBMkJBOzs7Ozs7Ozs7O0FBVUE3RSxPQUFLbUYsUUFBTCxDQUFjM3VCLFNBQWQsQ0FBd0I4dkIsU0FBeEIsR0FBb0MsVUFBVTFELEdBQVYsRUFBZStCLFFBQWYsRUFBeUI7QUFDM0QsUUFBSXpDLFFBQVEsSUFBSWxDLEtBQUswRSxLQUFULENBQWdCOUIsR0FBaEIsRUFBcUIrQixRQUFyQixDQUFaOztBQUVBLFdBQU8sS0FBS2piLEdBQUwsQ0FBUyxDQUFDd1ksS0FBRCxDQUFULEVBQWtCdGdCLEdBQWxCLENBQXNCLFVBQVVnakIsQ0FBVixFQUFhO0FBQ3hDLGFBQU9BLEVBQUUxbEIsUUFBRixFQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FORDs7QUFRQTs7OztBQUlBOGdCLE9BQUttRixRQUFMLENBQWMzdUIsU0FBZCxDQUF3QjJGLEtBQXhCLEdBQWdDLFlBQVk7QUFDMUMsU0FBS2lwQixNQUFMLEdBQWMsRUFBZDtBQUNELEdBRkQ7O0FBSUE7Ozs7Ozs7QUFPQXBGLE9BQUttRixRQUFMLENBQWMzdUIsU0FBZCxDQUF3Qit2QixNQUF4QixHQUFpQyxZQUFZO0FBQzNDLFdBQU8sS0FBS25CLE1BQUwsQ0FBWXhqQixHQUFaLENBQWdCLFVBQVV5RCxFQUFWLEVBQWM7QUFDbkMyYSxXQUFLbUYsUUFBTCxDQUFjSSwyQkFBZCxDQUEwQ2xnQixFQUExQzs7QUFFQSxhQUFPQSxHQUFHN0IsS0FBVjtBQUNELEtBSk0sQ0FBUDtBQUtELEdBTkQ7QUFPQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQXdjLE9BQUt3RyxNQUFMLEdBQWMsVUFBVTlQLFFBQVYsRUFBb0I7QUFDaEMsU0FBSytQLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLL1AsUUFBTCxHQUFnQkEsWUFBWSxFQUE1QjtBQUNELEdBSEQ7O0FBTUE7Ozs7Ozs7Ozs7QUFVQXNKLE9BQUt3RyxNQUFMLENBQVlod0IsU0FBWixDQUFzQmt3QixnQkFBdEIsR0FBeUMsVUFBVTF1QixLQUFWLEVBQWlCO0FBQ3hEO0FBQ0EsUUFBSSxLQUFLMGUsUUFBTCxDQUFjdFQsTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUM3QixhQUFPLENBQVA7QUFDRDs7QUFFRCxRQUFJdWpCLFFBQVEsQ0FBWjtBQUFBLFFBQ0loSSxNQUFNLEtBQUtqSSxRQUFMLENBQWN0VCxNQUFkLEdBQXVCLENBRGpDO0FBQUEsUUFFSTZoQixjQUFjdEcsTUFBTWdJLEtBRnhCO0FBQUEsUUFHSUMsYUFBYTFqQixLQUFLMmpCLEtBQUwsQ0FBVzVCLGNBQWMsQ0FBekIsQ0FIakI7QUFBQSxRQUlJNkIsYUFBYSxLQUFLcFEsUUFBTCxDQUFja1EsYUFBYSxDQUEzQixDQUpqQjs7QUFNQSxXQUFPM0IsY0FBYyxDQUFyQixFQUF3QjtBQUN0QixVQUFJNkIsYUFBYTl1QixLQUFqQixFQUF3QjtBQUN0QjJ1QixnQkFBUUMsVUFBUjtBQUNEOztBQUVELFVBQUlFLGFBQWE5dUIsS0FBakIsRUFBd0I7QUFDdEIybUIsY0FBTWlJLFVBQU47QUFDRDs7QUFFRCxVQUFJRSxjQUFjOXVCLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRURpdEIsb0JBQWN0RyxNQUFNZ0ksS0FBcEI7QUFDQUMsbUJBQWFELFFBQVF6akIsS0FBSzJqQixLQUFMLENBQVc1QixjQUFjLENBQXpCLENBQXJCO0FBQ0E2QixtQkFBYSxLQUFLcFEsUUFBTCxDQUFja1EsYUFBYSxDQUEzQixDQUFiO0FBQ0Q7O0FBRUQsUUFBSUUsY0FBYzl1QixLQUFsQixFQUF5QjtBQUN2QixhQUFPNHVCLGFBQWEsQ0FBcEI7QUFDRDs7QUFFRCxRQUFJRSxhQUFhOXVCLEtBQWpCLEVBQXdCO0FBQ3RCLGFBQU80dUIsYUFBYSxDQUFwQjtBQUNEOztBQUVELFFBQUlFLGFBQWE5dUIsS0FBakIsRUFBd0I7QUFDdEIsYUFBTyxDQUFDNHVCLGFBQWEsQ0FBZCxJQUFtQixDQUExQjtBQUNEO0FBQ0YsR0F6Q0Q7O0FBMkNBOzs7Ozs7Ozs7QUFTQTVHLE9BQUt3RyxNQUFMLENBQVlod0IsU0FBWixDQUFzQnV3QixNQUF0QixHQUErQixVQUFVQyxTQUFWLEVBQXFCemYsR0FBckIsRUFBMEI7QUFDdkQsU0FBSzBmLE1BQUwsQ0FBWUQsU0FBWixFQUF1QnpmLEdBQXZCLEVBQTRCLFlBQVk7QUFDdEMsWUFBTSxpQkFBTjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BOzs7Ozs7OztBQVFBeVksT0FBS3dHLE1BQUwsQ0FBWWh3QixTQUFaLENBQXNCeXdCLE1BQXRCLEdBQStCLFVBQVVELFNBQVYsRUFBcUJ6ZixHQUFyQixFQUEwQmxDLEVBQTFCLEVBQThCO0FBQzNELFNBQUtvaEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFFBQUkxVSxXQUFXLEtBQUsyVSxnQkFBTCxDQUFzQk0sU0FBdEIsQ0FBZjs7QUFFQSxRQUFJLEtBQUt0USxRQUFMLENBQWMzRSxRQUFkLEtBQTJCaVYsU0FBL0IsRUFBMEM7QUFDeEMsV0FBS3RRLFFBQUwsQ0FBYzNFLFdBQVcsQ0FBekIsSUFBOEIxTSxHQUFHLEtBQUtxUixRQUFMLENBQWMzRSxXQUFXLENBQXpCLENBQUgsRUFBZ0N4SyxHQUFoQyxDQUE5QjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUttUCxRQUFMLENBQWM4SyxNQUFkLENBQXFCelAsUUFBckIsRUFBK0IsQ0FBL0IsRUFBa0NpVixTQUFsQyxFQUE2Q3pmLEdBQTdDO0FBQ0Q7QUFDRixHQVREOztBQVdBOzs7OztBQUtBeVksT0FBS3dHLE1BQUwsQ0FBWWh3QixTQUFaLENBQXNCMHdCLFNBQXRCLEdBQWtDLFlBQVk7QUFDNUMsUUFBSSxLQUFLVCxVQUFULEVBQXFCLE9BQU8sS0FBS0EsVUFBWjs7QUFFckIsUUFBSVUsZUFBZSxDQUFuQjtBQUFBLFFBQ0lDLGlCQUFpQixLQUFLMVEsUUFBTCxDQUFjdFQsTUFEbkM7O0FBR0EsU0FBSyxJQUFJeEssSUFBSSxDQUFiLEVBQWdCQSxJQUFJd3VCLGNBQXBCLEVBQW9DeHVCLEtBQUssQ0FBekMsRUFBNEM7QUFDMUMsVUFBSTJPLE1BQU0sS0FBS21QLFFBQUwsQ0FBYzlkLENBQWQsQ0FBVjtBQUNBdXVCLHNCQUFnQjVmLE1BQU1BLEdBQXRCO0FBQ0Q7O0FBRUQsV0FBTyxLQUFLa2YsVUFBTCxHQUFrQnZqQixLQUFLbWtCLElBQUwsQ0FBVUYsWUFBVixDQUF6QjtBQUNELEdBWkQ7O0FBY0E7Ozs7OztBQU1BbkgsT0FBS3dHLE1BQUwsQ0FBWWh3QixTQUFaLENBQXNCOHdCLEdBQXRCLEdBQTRCLFVBQVVDLFdBQVYsRUFBdUI7QUFDakQsUUFBSUMsYUFBYSxDQUFqQjtBQUFBLFFBQ0l2RCxJQUFJLEtBQUt2TixRQURiO0FBQUEsUUFDdUJ3TixJQUFJcUQsWUFBWTdRLFFBRHZDO0FBQUEsUUFFSStRLE9BQU94RCxFQUFFN2dCLE1BRmI7QUFBQSxRQUVxQnNrQixPQUFPeEQsRUFBRTlnQixNQUY5QjtBQUFBLFFBR0l1a0IsT0FBTyxDQUhYO0FBQUEsUUFHY0MsT0FBTyxDQUhyQjtBQUFBLFFBSUlodkIsSUFBSSxDQUpSO0FBQUEsUUFJV3d0QixJQUFJLENBSmY7O0FBTUEsV0FBT3h0QixJQUFJNnVCLElBQUosSUFBWXJCLElBQUlzQixJQUF2QixFQUE2QjtBQUMzQkMsYUFBTzFELEVBQUVyckIsQ0FBRixDQUFQLEVBQWFndkIsT0FBTzFELEVBQUVrQyxDQUFGLENBQXBCO0FBQ0EsVUFBSXVCLE9BQU9DLElBQVgsRUFBaUI7QUFDZmh2QixhQUFLLENBQUw7QUFDRCxPQUZELE1BRU8sSUFBSSt1QixPQUFPQyxJQUFYLEVBQWlCO0FBQ3RCeEIsYUFBSyxDQUFMO0FBQ0QsT0FGTSxNQUVBLElBQUl1QixRQUFRQyxJQUFaLEVBQWtCO0FBQ3ZCSixzQkFBY3ZELEVBQUVyckIsSUFBSSxDQUFOLElBQVdzckIsRUFBRWtDLElBQUksQ0FBTixDQUF6QjtBQUNBeHRCLGFBQUssQ0FBTDtBQUNBd3RCLGFBQUssQ0FBTDtBQUNEO0FBQ0Y7O0FBRUQsV0FBT29CLFVBQVA7QUFDRCxHQXJCRDs7QUF1QkE7Ozs7Ozs7QUFPQXhILE9BQUt3RyxNQUFMLENBQVlod0IsU0FBWixDQUFzQnF4QixVQUF0QixHQUFtQyxVQUFVTixXQUFWLEVBQXVCO0FBQ3hELFdBQU8sS0FBS0QsR0FBTCxDQUFTQyxXQUFULElBQXdCLEtBQUtMLFNBQUwsRUFBeEIsSUFBNEMsQ0FBbkQ7QUFDRCxHQUZEOztBQUlBOzs7OztBQUtBbEgsT0FBS3dHLE1BQUwsQ0FBWWh3QixTQUFaLENBQXNCc3hCLE9BQXRCLEdBQWdDLFlBQVk7QUFDMUMsUUFBSUMsU0FBUyxJQUFJeHhCLEtBQUosQ0FBVyxLQUFLbWdCLFFBQUwsQ0FBY3RULE1BQWQsR0FBdUIsQ0FBbEMsQ0FBYjs7QUFFQSxTQUFLLElBQUl4SyxJQUFJLENBQVIsRUFBV3d0QixJQUFJLENBQXBCLEVBQXVCeHRCLElBQUksS0FBSzhkLFFBQUwsQ0FBY3RULE1BQXpDLEVBQWlEeEssS0FBSyxDQUFMLEVBQVF3dEIsR0FBekQsRUFBOEQ7QUFDNUQyQixhQUFPM0IsQ0FBUCxJQUFZLEtBQUsxUCxRQUFMLENBQWM5ZCxDQUFkLENBQVo7QUFDRDs7QUFFRCxXQUFPbXZCLE1BQVA7QUFDRCxHQVJEOztBQVVBOzs7OztBQUtBL0gsT0FBS3dHLE1BQUwsQ0FBWWh3QixTQUFaLENBQXNCK3ZCLE1BQXRCLEdBQStCLFlBQVk7QUFDekMsV0FBTyxLQUFLN1AsUUFBWjtBQUNELEdBRkQ7QUFHQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFXQXNKLE9BQUsrQyxPQUFMLEdBQWdCLFlBQVU7QUFDeEIsUUFBSWlGLFlBQVk7QUFDWixpQkFBWSxLQURBO0FBRVosZ0JBQVcsTUFGQztBQUdaLGNBQVMsTUFIRztBQUlaLGNBQVMsTUFKRztBQUtaLGNBQVMsS0FMRztBQU1aLGFBQVEsS0FOSTtBQU9aLGNBQVMsSUFQRztBQVFaLGVBQVUsS0FSRTtBQVNaLGFBQVEsR0FUSTtBQVVaLGVBQVUsS0FWRTtBQVdaLGlCQUFZLEtBWEE7QUFZWixlQUFVLEtBWkU7QUFhWixjQUFTLEtBYkc7QUFjWixlQUFVLElBZEU7QUFlWixpQkFBWSxLQWZBO0FBZ0JaLGlCQUFZLEtBaEJBO0FBaUJaLGlCQUFZLEtBakJBO0FBa0JaLGVBQVUsSUFsQkU7QUFtQlosZUFBVSxLQW5CRTtBQW9CWixnQkFBVyxLQXBCQztBQXFCWixjQUFTO0FBckJHLEtBQWhCO0FBQUEsUUF3QkVDLFlBQVk7QUFDVixlQUFVLElBREE7QUFFVixlQUFVLEVBRkE7QUFHVixlQUFVLElBSEE7QUFJVixlQUFVLElBSkE7QUFLVixjQUFTLElBTEM7QUFNVixhQUFRLEVBTkU7QUFPVixjQUFTO0FBUEMsS0F4QmQ7QUFBQSxRQWtDRTFaLElBQUksVUFsQ047QUFBQSxRQWtDMkI7QUFDekIyWixRQUFJLFVBbkNOO0FBQUEsUUFtQzJCO0FBQ3pCQyxRQUFJNVosSUFBSSxZQXBDVjtBQUFBLFFBb0MyQjtBQUN6QjZaLFFBQUlGLElBQUksVUFyQ1Y7QUFBQSxRQXFDMkI7O0FBRXpCRyxXQUFPLE9BQU9GLENBQVAsR0FBVyxJQUFYLEdBQWtCQyxDQUFsQixHQUFzQkQsQ0F2Qy9CO0FBQUEsUUF1Q2dEO0FBQzlDRyxXQUFPLE9BQU9ILENBQVAsR0FBVyxJQUFYLEdBQWtCQyxDQUFsQixHQUFzQkQsQ0FBdEIsR0FBMEIsR0FBMUIsR0FBZ0NDLENBQWhDLEdBQW9DLEtBeEM3QztBQUFBLFFBd0NxRDtBQUNuREcsV0FBTyxPQUFPSixDQUFQLEdBQVcsSUFBWCxHQUFrQkMsQ0FBbEIsR0FBc0JELENBQXRCLEdBQTBCQyxDQUExQixHQUE4QkQsQ0F6Q3ZDO0FBQUEsUUF5Q2dEO0FBQzlDSyxVQUFNLE9BQU9MLENBQVAsR0FBVyxJQUFYLEdBQWtCRCxDQTFDMUIsQ0FEd0IsQ0EyQ3VCOztBQUUvQyxRQUFJTyxVQUFVLElBQUl6RyxNQUFKLENBQVdxRyxJQUFYLENBQWQ7QUFDQSxRQUFJSyxVQUFVLElBQUkxRyxNQUFKLENBQVd1RyxJQUFYLENBQWQ7QUFDQSxRQUFJSSxVQUFVLElBQUkzRyxNQUFKLENBQVdzRyxJQUFYLENBQWQ7QUFDQSxRQUFJTSxTQUFTLElBQUk1RyxNQUFKLENBQVd3RyxHQUFYLENBQWI7O0FBRUEsUUFBSUssUUFBUSxpQkFBWjtBQUNBLFFBQUlDLFNBQVMsZ0JBQWI7QUFDQSxRQUFJQyxRQUFRLFlBQVo7QUFDQSxRQUFJQyxTQUFTLGlCQUFiO0FBQ0EsUUFBSUMsVUFBVSxJQUFkO0FBQ0EsUUFBSUMsV0FBVyxhQUFmO0FBQ0EsUUFBSUMsV0FBVyxJQUFJbkgsTUFBSixDQUFXLG9CQUFYLENBQWY7QUFDQSxRQUFJb0gsV0FBVyxJQUFJcEgsTUFBSixDQUFXLE1BQU1tRyxDQUFOLEdBQVVELENBQVYsR0FBYyxjQUF6QixDQUFmOztBQUVBLFFBQUltQixRQUFRLGtCQUFaO0FBQ0EsUUFBSUMsT0FBTywwSUFBWDs7QUFFQSxRQUFJQyxPQUFPLGdEQUFYOztBQUVBLFFBQUlDLE9BQU8scUZBQVg7QUFDQSxRQUFJQyxRQUFRLG1CQUFaOztBQUVBLFFBQUlDLE9BQU8sVUFBWDtBQUNBLFFBQUlDLFNBQVMsS0FBYjtBQUNBLFFBQUlDLFFBQVEsSUFBSTVILE1BQUosQ0FBVyxNQUFNbUcsQ0FBTixHQUFVRCxDQUFWLEdBQWMsY0FBekIsQ0FBWjs7QUFFQSxRQUFJMkIsZ0JBQWdCLFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQzVDLFVBQUlDLElBQUosRUFDRXJVLE1BREYsRUFFRXNVLE9BRkYsRUFHRUMsRUFIRixFQUlFQyxHQUpGLEVBS0VDLEdBTEYsRUFNRUMsR0FORjs7QUFRQSxVQUFJTixFQUFFMW1CLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQUUsZUFBTzBtQixDQUFQO0FBQVc7O0FBRS9CRSxnQkFBVUYsRUFBRU8sTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQVY7QUFDQSxVQUFJTCxXQUFXLEdBQWYsRUFBb0I7QUFDbEJGLFlBQUlFLFFBQVFNLFdBQVIsS0FBd0JSLEVBQUVPLE1BQUYsQ0FBUyxDQUFULENBQTVCO0FBQ0Q7O0FBRUQ7QUFDQUosV0FBS3BCLEtBQUw7QUFDQXFCLFlBQU1wQixNQUFOOztBQUVBLFVBQUltQixHQUFHN1EsSUFBSCxDQUFRMFEsQ0FBUixDQUFKLEVBQWdCO0FBQUVBLFlBQUlBLEVBQUVyd0IsT0FBRixDQUFVd3dCLEVBQVYsRUFBYSxNQUFiLENBQUo7QUFBMkIsT0FBN0MsTUFDSyxJQUFJQyxJQUFJOVEsSUFBSixDQUFTMFEsQ0FBVCxDQUFKLEVBQWlCO0FBQUVBLFlBQUlBLEVBQUVyd0IsT0FBRixDQUFVeXdCLEdBQVYsRUFBYyxNQUFkLENBQUo7QUFBNEI7O0FBRXBEO0FBQ0FELFdBQUtsQixLQUFMO0FBQ0FtQixZQUFNbEIsTUFBTjtBQUNBLFVBQUlpQixHQUFHN1EsSUFBSCxDQUFRMFEsQ0FBUixDQUFKLEVBQWdCO0FBQ2QsWUFBSVMsS0FBS04sR0FBR3JOLElBQUgsQ0FBUWtOLENBQVIsQ0FBVDtBQUNBRyxhQUFLeEIsT0FBTDtBQUNBLFlBQUl3QixHQUFHN1EsSUFBSCxDQUFRbVIsR0FBRyxDQUFILENBQVIsQ0FBSixFQUFvQjtBQUNsQk4sZUFBS2hCLE9BQUw7QUFDQWEsY0FBSUEsRUFBRXJ3QixPQUFGLENBQVV3d0IsRUFBVixFQUFhLEVBQWIsQ0FBSjtBQUNEO0FBQ0YsT0FQRCxNQU9PLElBQUlDLElBQUk5USxJQUFKLENBQVMwUSxDQUFULENBQUosRUFBaUI7QUFDdEIsWUFBSVMsS0FBS0wsSUFBSXROLElBQUosQ0FBU2tOLENBQVQsQ0FBVDtBQUNBQyxlQUFPUSxHQUFHLENBQUgsQ0FBUDtBQUNBTCxjQUFNdEIsTUFBTjtBQUNBLFlBQUlzQixJQUFJOVEsSUFBSixDQUFTMlEsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCRCxjQUFJQyxJQUFKO0FBQ0FHLGdCQUFNaEIsUUFBTjtBQUNBaUIsZ0JBQU1oQixRQUFOO0FBQ0FpQixnQkFBTWhCLFFBQU47QUFDQSxjQUFJYyxJQUFJOVEsSUFBSixDQUFTMFEsQ0FBVCxDQUFKLEVBQWlCO0FBQUVBLGdCQUFJQSxJQUFJLEdBQVI7QUFBYyxXQUFqQyxNQUNLLElBQUlLLElBQUkvUSxJQUFKLENBQVMwUSxDQUFULENBQUosRUFBaUI7QUFBRUcsaUJBQUtoQixPQUFMLENBQWNhLElBQUlBLEVBQUVyd0IsT0FBRixDQUFVd3dCLEVBQVYsRUFBYSxFQUFiLENBQUo7QUFBdUIsV0FBeEQsTUFDQSxJQUFJRyxJQUFJaFIsSUFBSixDQUFTMFEsQ0FBVCxDQUFKLEVBQWlCO0FBQUVBLGdCQUFJQSxJQUFJLEdBQVI7QUFBYztBQUN2QztBQUNGOztBQUVEO0FBQ0FHLFdBQUtaLEtBQUw7QUFDQSxVQUFJWSxHQUFHN1EsSUFBSCxDQUFRMFEsQ0FBUixDQUFKLEVBQWdCO0FBQ2QsWUFBSVMsS0FBS04sR0FBR3JOLElBQUgsQ0FBUWtOLENBQVIsQ0FBVDtBQUNBQyxlQUFPUSxHQUFHLENBQUgsQ0FBUDtBQUNBVCxZQUFJQyxPQUFPLEdBQVg7QUFDRDs7QUFFRDtBQUNBRSxXQUFLWCxJQUFMO0FBQ0EsVUFBSVcsR0FBRzdRLElBQUgsQ0FBUTBRLENBQVIsQ0FBSixFQUFnQjtBQUNkLFlBQUlTLEtBQUtOLEdBQUdyTixJQUFILENBQVFrTixDQUFSLENBQVQ7QUFDQUMsZUFBT1EsR0FBRyxDQUFILENBQVA7QUFDQTdVLGlCQUFTNlUsR0FBRyxDQUFILENBQVQ7QUFDQU4sYUFBS3hCLE9BQUw7QUFDQSxZQUFJd0IsR0FBRzdRLElBQUgsQ0FBUTJRLElBQVIsQ0FBSixFQUFtQjtBQUNqQkQsY0FBSUMsT0FBTy9CLFVBQVV0UyxNQUFWLENBQVg7QUFDRDtBQUNGOztBQUVEO0FBQ0F1VSxXQUFLVixJQUFMO0FBQ0EsVUFBSVUsR0FBRzdRLElBQUgsQ0FBUTBRLENBQVIsQ0FBSixFQUFnQjtBQUNkLFlBQUlTLEtBQUtOLEdBQUdyTixJQUFILENBQVFrTixDQUFSLENBQVQ7QUFDQUMsZUFBT1EsR0FBRyxDQUFILENBQVA7QUFDQTdVLGlCQUFTNlUsR0FBRyxDQUFILENBQVQ7QUFDQU4sYUFBS3hCLE9BQUw7QUFDQSxZQUFJd0IsR0FBRzdRLElBQUgsQ0FBUTJRLElBQVIsQ0FBSixFQUFtQjtBQUNqQkQsY0FBSUMsT0FBTzlCLFVBQVV2UyxNQUFWLENBQVg7QUFDRDtBQUNGOztBQUVEO0FBQ0F1VSxXQUFLVCxJQUFMO0FBQ0FVLFlBQU1ULEtBQU47QUFDQSxVQUFJUSxHQUFHN1EsSUFBSCxDQUFRMFEsQ0FBUixDQUFKLEVBQWdCO0FBQ2QsWUFBSVMsS0FBS04sR0FBR3JOLElBQUgsQ0FBUWtOLENBQVIsQ0FBVDtBQUNBQyxlQUFPUSxHQUFHLENBQUgsQ0FBUDtBQUNBTixhQUFLdkIsT0FBTDtBQUNBLFlBQUl1QixHQUFHN1EsSUFBSCxDQUFRMlEsSUFBUixDQUFKLEVBQW1CO0FBQ2pCRCxjQUFJQyxJQUFKO0FBQ0Q7QUFDRixPQVBELE1BT08sSUFBSUcsSUFBSTlRLElBQUosQ0FBUzBRLENBQVQsQ0FBSixFQUFpQjtBQUN0QixZQUFJUyxLQUFLTCxJQUFJdE4sSUFBSixDQUFTa04sQ0FBVCxDQUFUO0FBQ0FDLGVBQU9RLEdBQUcsQ0FBSCxJQUFRQSxHQUFHLENBQUgsQ0FBZjtBQUNBTCxjQUFNeEIsT0FBTjtBQUNBLFlBQUl3QixJQUFJOVEsSUFBSixDQUFTMlEsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCRCxjQUFJQyxJQUFKO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBRSxXQUFLUCxJQUFMO0FBQ0EsVUFBSU8sR0FBRzdRLElBQUgsQ0FBUTBRLENBQVIsQ0FBSixFQUFnQjtBQUNkLFlBQUlTLEtBQUtOLEdBQUdyTixJQUFILENBQVFrTixDQUFSLENBQVQ7QUFDQUMsZUFBT1EsR0FBRyxDQUFILENBQVA7QUFDQU4sYUFBS3ZCLE9BQUw7QUFDQXdCLGNBQU12QixPQUFOO0FBQ0F3QixjQUFNUCxLQUFOO0FBQ0EsWUFBSUssR0FBRzdRLElBQUgsQ0FBUTJRLElBQVIsS0FBa0JHLElBQUk5USxJQUFKLENBQVMyUSxJQUFULEtBQWtCLENBQUVJLElBQUkvUSxJQUFKLENBQVMyUSxJQUFULENBQTFDLEVBQTREO0FBQzFERCxjQUFJQyxJQUFKO0FBQ0Q7QUFDRjs7QUFFREUsV0FBS04sTUFBTDtBQUNBTyxZQUFNeEIsT0FBTjtBQUNBLFVBQUl1QixHQUFHN1EsSUFBSCxDQUFRMFEsQ0FBUixLQUFjSSxJQUFJOVEsSUFBSixDQUFTMFEsQ0FBVCxDQUFsQixFQUErQjtBQUM3QkcsYUFBS2hCLE9BQUw7QUFDQWEsWUFBSUEsRUFBRXJ3QixPQUFGLENBQVV3d0IsRUFBVixFQUFhLEVBQWIsQ0FBSjtBQUNEOztBQUVEOztBQUVBLFVBQUlELFdBQVcsR0FBZixFQUFvQjtBQUNsQkYsWUFBSUUsUUFBUWx3QixXQUFSLEtBQXdCZ3dCLEVBQUVPLE1BQUYsQ0FBUyxDQUFULENBQTVCO0FBQ0Q7O0FBRUQsYUFBT1AsQ0FBUDtBQUNELEtBOUhEOztBQWdJQSxXQUFPLFVBQVU1SCxLQUFWLEVBQWlCO0FBQ3RCLGFBQU9BLE1BQU16bUIsTUFBTixDQUFhb3VCLGFBQWIsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQTFNYyxFQUFmOztBQTRNQTdKLE9BQUttRixRQUFMLENBQWNHLGdCQUFkLENBQStCdEYsS0FBSytDLE9BQXBDLEVBQTZDLFNBQTdDO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFhQS9DLE9BQUt3SyxzQkFBTCxHQUE4QixVQUFVQyxTQUFWLEVBQXFCO0FBQ2pELFFBQUlDLFFBQVFELFVBQVV2TSxNQUFWLENBQWlCLFVBQVVpSSxJQUFWLEVBQWdCd0UsUUFBaEIsRUFBMEI7QUFDckR4RSxXQUFLd0UsUUFBTCxJQUFpQkEsUUFBakI7QUFDQSxhQUFPeEUsSUFBUDtBQUNELEtBSFcsRUFHVCxFQUhTLENBQVo7O0FBS0EsV0FBTyxVQUFVakUsS0FBVixFQUFpQjtBQUN0QixVQUFJQSxTQUFTd0ksTUFBTXhJLE1BQU1oakIsUUFBTixFQUFOLE1BQTRCZ2pCLE1BQU1oakIsUUFBTixFQUF6QyxFQUEyRCxPQUFPZ2pCLEtBQVA7QUFDNUQsS0FGRDtBQUdELEdBVEQ7O0FBV0E7Ozs7Ozs7Ozs7Ozs7QUFhQWxDLE9BQUtpQixjQUFMLEdBQXNCakIsS0FBS3dLLHNCQUFMLENBQTRCLENBQ2hELEdBRGdELEVBRWhELE1BRmdELEVBR2hELE9BSGdELEVBSWhELFFBSmdELEVBS2hELE9BTGdELEVBTWhELEtBTmdELEVBT2hELFFBUGdELEVBUWhELE1BUmdELEVBU2hELElBVGdELEVBVWhELE9BVmdELEVBV2hELElBWGdELEVBWWhELEtBWmdELEVBYWhELEtBYmdELEVBY2hELEtBZGdELEVBZWhELElBZmdELEVBZ0JoRCxJQWhCZ0QsRUFpQmhELElBakJnRCxFQWtCaEQsU0FsQmdELEVBbUJoRCxNQW5CZ0QsRUFvQmhELEtBcEJnRCxFQXFCaEQsSUFyQmdELEVBc0JoRCxLQXRCZ0QsRUF1QmhELFFBdkJnRCxFQXdCaEQsT0F4QmdELEVBeUJoRCxNQXpCZ0QsRUEwQmhELEtBMUJnRCxFQTJCaEQsSUEzQmdELEVBNEJoRCxNQTVCZ0QsRUE2QmhELFFBN0JnRCxFQThCaEQsTUE5QmdELEVBK0JoRCxNQS9CZ0QsRUFnQ2hELE9BaENnRCxFQWlDaEQsS0FqQ2dELEVBa0NoRCxNQWxDZ0QsRUFtQ2hELEtBbkNnRCxFQW9DaEQsS0FwQ2dELEVBcUNoRCxLQXJDZ0QsRUFzQ2hELEtBdENnRCxFQXVDaEQsTUF2Q2dELEVBd0NoRCxJQXhDZ0QsRUF5Q2hELEtBekNnRCxFQTBDaEQsTUExQ2dELEVBMkNoRCxLQTNDZ0QsRUE0Q2hELEtBNUNnRCxFQTZDaEQsS0E3Q2dELEVBOENoRCxTQTlDZ0QsRUErQ2hELEdBL0NnRCxFQWdEaEQsSUFoRGdELEVBaURoRCxJQWpEZ0QsRUFrRGhELE1BbERnRCxFQW1EaEQsSUFuRGdELEVBb0RoRCxJQXBEZ0QsRUFxRGhELEtBckRnRCxFQXNEaEQsTUF0RGdELEVBdURoRCxPQXZEZ0QsRUF3RGhELEtBeERnRCxFQXlEaEQsTUF6RGdELEVBMERoRCxRQTFEZ0QsRUEyRGhELEtBM0RnRCxFQTREaEQsSUE1RGdELEVBNkRoRCxPQTdEZ0QsRUE4RGhELE1BOURnRCxFQStEaEQsTUEvRGdELEVBZ0VoRCxJQWhFZ0QsRUFpRWhELFNBakVnRCxFQWtFaEQsSUFsRWdELEVBbUVoRCxLQW5FZ0QsRUFvRWhELEtBcEVnRCxFQXFFaEQsSUFyRWdELEVBc0VoRCxLQXRFZ0QsRUF1RWhELE9BdkVnRCxFQXdFaEQsSUF4RWdELEVBeUVoRCxNQXpFZ0QsRUEwRWhELElBMUVnRCxFQTJFaEQsT0EzRWdELEVBNEVoRCxLQTVFZ0QsRUE2RWhELEtBN0VnRCxFQThFaEQsUUE5RWdELEVBK0VoRCxNQS9FZ0QsRUFnRmhELEtBaEZnRCxFQWlGaEQsTUFqRmdELEVBa0ZoRCxLQWxGZ0QsRUFtRmhELFFBbkZnRCxFQW9GaEQsT0FwRmdELEVBcUZoRCxJQXJGZ0QsRUFzRmhELE1BdEZnRCxFQXVGaEQsTUF2RmdELEVBd0ZoRCxNQXhGZ0QsRUF5RmhELEtBekZnRCxFQTBGaEQsT0ExRmdELEVBMkZoRCxNQTNGZ0QsRUE0RmhELE1BNUZnRCxFQTZGaEQsT0E3RmdELEVBOEZoRCxPQTlGZ0QsRUErRmhELE1BL0ZnRCxFQWdHaEQsTUFoR2dELEVBaUdoRCxLQWpHZ0QsRUFrR2hELElBbEdnRCxFQW1HaEQsS0FuR2dELEVBb0doRCxNQXBHZ0QsRUFxR2hELElBckdnRCxFQXNHaEQsT0F0R2dELEVBdUdoRCxLQXZHZ0QsRUF3R2hELElBeEdnRCxFQXlHaEQsTUF6R2dELEVBMEdoRCxNQTFHZ0QsRUEyR2hELE1BM0dnRCxFQTRHaEQsT0E1R2dELEVBNkdoRCxPQTdHZ0QsRUE4R2hELE9BOUdnRCxFQStHaEQsS0EvR2dELEVBZ0hoRCxNQWhIZ0QsRUFpSGhELEtBakhnRCxFQWtIaEQsTUFsSGdELEVBbUhoRCxNQW5IZ0QsRUFvSGhELE9BcEhnRCxFQXFIaEQsS0FySGdELEVBc0hoRCxLQXRIZ0QsRUF1SGhELE1BdkhnRCxDQUE1QixDQUF0Qjs7QUEwSEF4SyxPQUFLbUYsUUFBTCxDQUFjRyxnQkFBZCxDQUErQnRGLEtBQUtpQixjQUFwQyxFQUFvRCxnQkFBcEQ7QUFDQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUFqQixPQUFLZ0IsT0FBTCxHQUFlLFVBQVVrQixLQUFWLEVBQWlCO0FBQzlCLFdBQU9BLE1BQU16bUIsTUFBTixDQUFhLFVBQVUyVCxDQUFWLEVBQWE7QUFDL0IsYUFBT0EsRUFBRTNWLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLEVBQWxCLEVBQXNCQSxPQUF0QixDQUE4QixNQUE5QixFQUFzQyxFQUF0QyxDQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FKRDs7QUFNQXVtQixPQUFLbUYsUUFBTCxDQUFjRyxnQkFBZCxDQUErQnRGLEtBQUtnQixPQUFwQyxFQUE2QyxTQUE3QztBQUNBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkFoQixPQUFLNEssUUFBTCxHQUFnQixZQUFZO0FBQzFCLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLOXNCLEVBQUwsR0FBVWdpQixLQUFLNEssUUFBTCxDQUFjRyxPQUF4QjtBQUNBL0ssU0FBSzRLLFFBQUwsQ0FBY0csT0FBZCxJQUF5QixDQUF6QjtBQUNELEdBTEQ7O0FBT0E7Ozs7Ozs7O0FBUUEvSyxPQUFLNEssUUFBTCxDQUFjRyxPQUFkLEdBQXdCLENBQXhCOztBQUVBOzs7Ozs7O0FBT0EvSyxPQUFLNEssUUFBTCxDQUFjSSxTQUFkLEdBQTBCLFVBQVU3akIsR0FBVixFQUFlO0FBQ3ZDLFFBQUkwYixVQUFVLElBQUk3QyxLQUFLNEssUUFBTCxDQUFjOUgsT0FBbEIsRUFBZDs7QUFFQSxTQUFLLElBQUlscUIsSUFBSSxDQUFSLEVBQVcrTixNQUFNUSxJQUFJL0QsTUFBMUIsRUFBa0N4SyxJQUFJK04sR0FBdEMsRUFBMkMvTixHQUEzQyxFQUFnRDtBQUM5Q2lxQixjQUFRa0UsTUFBUixDQUFlNWYsSUFBSXZPLENBQUosQ0FBZjtBQUNEOztBQUVEaXFCLFlBQVFvSSxNQUFSO0FBQ0EsV0FBT3BJLFFBQVE5VSxJQUFmO0FBQ0QsR0FURDs7QUFXQTs7Ozs7Ozs7O0FBU0FpUyxPQUFLNEssUUFBTCxDQUFjTSxVQUFkLEdBQTJCLFVBQVVDLE1BQVYsRUFBa0I7QUFDM0MsUUFBSSxrQkFBa0JBLE1BQXRCLEVBQThCO0FBQzVCLGFBQU9uTCxLQUFLNEssUUFBTCxDQUFjUSxlQUFkLENBQThCRCxPQUFPeEosSUFBckMsRUFBMkN3SixPQUFPRSxZQUFsRCxDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT3JMLEtBQUs0SyxRQUFMLENBQWNsSCxVQUFkLENBQXlCeUgsT0FBT3hKLElBQWhDLENBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBUUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBM0IsT0FBSzRLLFFBQUwsQ0FBY1EsZUFBZCxHQUFnQyxVQUFVeEksR0FBVixFQUFleUksWUFBZixFQUE2QjtBQUMzRCxRQUFJdGQsT0FBTyxJQUFJaVMsS0FBSzRLLFFBQVQsRUFBWDs7QUFFQSxRQUFJVSxRQUFRLENBQUM7QUFDWHIwQixZQUFNOFcsSUFESztBQUVYd2Qsc0JBQWdCRixZQUZMO0FBR1h6SSxXQUFLQTtBQUhNLEtBQUQsQ0FBWjs7QUFNQSxXQUFPMEksTUFBTWxvQixNQUFiLEVBQXFCO0FBQ25CLFVBQUlvb0IsUUFBUUYsTUFBTUcsR0FBTixFQUFaOztBQUVBO0FBQ0EsVUFBSUQsTUFBTTVJLEdBQU4sQ0FBVXhmLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsWUFBSXdkLE9BQU80SyxNQUFNNUksR0FBTixDQUFVb0MsTUFBVixDQUFpQixDQUFqQixDQUFYO0FBQUEsWUFDSTBHLFVBREo7O0FBR0EsWUFBSTlLLFFBQVE0SyxNQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUF2QixFQUE4QjtBQUM1QlksdUJBQWFGLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQVgsQ0FBaUJsSyxJQUFqQixDQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0w4Syx1QkFBYSxJQUFJMUwsS0FBSzRLLFFBQVQsRUFBYjtBQUNBWSxnQkFBTXYwQixJQUFOLENBQVc2ekIsS0FBWCxDQUFpQmxLLElBQWpCLElBQXlCOEssVUFBekI7QUFDRDs7QUFFRCxZQUFJRixNQUFNNUksR0FBTixDQUFVeGYsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QnNvQixxQkFBV2IsS0FBWCxHQUFtQixJQUFuQjtBQUNEOztBQUVEUyxjQUFNenhCLElBQU4sQ0FBVztBQUNUNUMsZ0JBQU15MEIsVUFERztBQUVUSCwwQkFBZ0JDLE1BQU1ELGNBRmI7QUFHVDNJLGVBQUs0SSxNQUFNNUksR0FBTixDQUFVdm5CLEtBQVYsQ0FBZ0IsQ0FBaEI7QUFISSxTQUFYO0FBS0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsVUFBSW13QixNQUFNRCxjQUFOLEdBQXVCLENBQXZCLElBQTRCQyxNQUFNNUksR0FBTixDQUFVeGYsTUFBVixHQUFtQixDQUFuRCxFQUFzRDtBQUNwRCxZQUFJd2QsT0FBTzRLLE1BQU01SSxHQUFOLENBQVVvQyxNQUFWLENBQWlCLENBQWpCLENBQVg7QUFBQSxZQUNJMkcsWUFESjs7QUFHQSxZQUFJL0ssUUFBUTRLLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQXZCLEVBQThCO0FBQzVCYSx5QkFBZUgsTUFBTXYwQixJQUFOLENBQVc2ekIsS0FBWCxDQUFpQmxLLElBQWpCLENBQWY7QUFDRCxTQUZELE1BRU87QUFDTCtLLHlCQUFlLElBQUkzTCxLQUFLNEssUUFBVCxFQUFmO0FBQ0FZLGdCQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUFYLENBQWlCbEssSUFBakIsSUFBeUIrSyxZQUF6QjtBQUNEOztBQUVELFlBQUlILE1BQU01SSxHQUFOLENBQVV4ZixNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCdW9CLHVCQUFhZCxLQUFiLEdBQXFCLElBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xTLGdCQUFNenhCLElBQU4sQ0FBVztBQUNUNUMsa0JBQU0wMEIsWUFERztBQUVUSiw0QkFBZ0JDLE1BQU1ELGNBQU4sR0FBdUIsQ0FGOUI7QUFHVDNJLGlCQUFLNEksTUFBTTVJLEdBQU4sQ0FBVXZuQixLQUFWLENBQWdCLENBQWhCO0FBSEksV0FBWDtBQUtEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLFVBQUltd0IsTUFBTUQsY0FBTixHQUF1QixDQUF2QixJQUE0QkMsTUFBTTVJLEdBQU4sQ0FBVXhmLE1BQVYsSUFBb0IsQ0FBcEQsRUFBdUQ7QUFDckRvb0IsY0FBTXYwQixJQUFOLENBQVc0ekIsS0FBWCxHQUFtQixJQUFuQjtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFVBQUlXLE1BQU1ELGNBQU4sR0FBdUIsQ0FBdkIsSUFBNEJDLE1BQU01SSxHQUFOLENBQVV4ZixNQUFWLElBQW9CLENBQXBELEVBQXVEO0FBQ3JELFlBQUksT0FBT29vQixNQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUF0QixFQUE2QjtBQUMzQixjQUFJYyxtQkFBbUJKLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQVgsQ0FBaUIsR0FBakIsQ0FBdkI7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJYyxtQkFBbUIsSUFBSTVMLEtBQUs0SyxRQUFULEVBQXZCO0FBQ0FZLGdCQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUFYLENBQWlCLEdBQWpCLElBQXdCYyxnQkFBeEI7QUFDRDs7QUFFRCxZQUFJSixNQUFNNUksR0FBTixDQUFVeGYsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QndvQiwyQkFBaUJmLEtBQWpCLEdBQXlCLElBQXpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xTLGdCQUFNenhCLElBQU4sQ0FBVztBQUNUNUMsa0JBQU0yMEIsZ0JBREc7QUFFVEwsNEJBQWdCQyxNQUFNRCxjQUFOLEdBQXVCLENBRjlCO0FBR1QzSSxpQkFBSzRJLE1BQU01SSxHQUFOLENBQVV2bkIsS0FBVixDQUFnQixDQUFoQjtBQUhJLFdBQVg7QUFLRDtBQUNGOztBQUVEO0FBQ0E7QUFDQSxVQUFJbXdCLE1BQU1ELGNBQU4sR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsWUFBSSxPQUFPQyxNQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUF0QixFQUE2QjtBQUMzQixjQUFJZSxnQkFBZ0JMLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQVgsQ0FBaUIsR0FBakIsQ0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJZSxnQkFBZ0IsSUFBSTdMLEtBQUs0SyxRQUFULEVBQXBCO0FBQ0FZLGdCQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUFYLENBQWlCLEdBQWpCLElBQXdCZSxhQUF4QjtBQUNEOztBQUVELFlBQUlMLE1BQU01SSxHQUFOLENBQVV4ZixNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCeW9CLHdCQUFjaEIsS0FBZCxHQUFzQixJQUF0QjtBQUNELFNBRkQsTUFFTztBQUNMUyxnQkFBTXp4QixJQUFOLENBQVc7QUFDVDVDLGtCQUFNNDBCLGFBREc7QUFFVE4sNEJBQWdCQyxNQUFNRCxjQUFOLEdBQXVCLENBRjlCO0FBR1QzSSxpQkFBSzRJLE1BQU01STtBQUhGLFdBQVg7QUFLRDtBQUNGOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFVBQUk0SSxNQUFNRCxjQUFOLEdBQXVCLENBQXZCLElBQTRCQyxNQUFNNUksR0FBTixDQUFVeGYsTUFBVixHQUFtQixDQUFuRCxFQUFzRDtBQUNwRCxZQUFJMG9CLFFBQVFOLE1BQU01SSxHQUFOLENBQVVvQyxNQUFWLENBQWlCLENBQWpCLENBQVo7QUFBQSxZQUNJK0csUUFBUVAsTUFBTTVJLEdBQU4sQ0FBVW9DLE1BQVYsQ0FBaUIsQ0FBakIsQ0FEWjtBQUFBLFlBRUlnSCxhQUZKOztBQUlBLFlBQUlELFNBQVNQLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQXhCLEVBQStCO0FBQzdCa0IsMEJBQWdCUixNQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUFYLENBQWlCaUIsS0FBakIsQ0FBaEI7QUFDRCxTQUZELE1BRU87QUFDTEMsMEJBQWdCLElBQUloTSxLQUFLNEssUUFBVCxFQUFoQjtBQUNBWSxnQkFBTXYwQixJQUFOLENBQVc2ekIsS0FBWCxDQUFpQmlCLEtBQWpCLElBQTBCQyxhQUExQjtBQUNEOztBQUVELFlBQUlSLE1BQU01SSxHQUFOLENBQVV4ZixNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCNG9CLHdCQUFjbkIsS0FBZCxHQUFzQixJQUF0QjtBQUNELFNBRkQsTUFFTztBQUNMUyxnQkFBTXp4QixJQUFOLENBQVc7QUFDVDVDLGtCQUFNKzBCLGFBREc7QUFFVFQsNEJBQWdCQyxNQUFNRCxjQUFOLEdBQXVCLENBRjlCO0FBR1QzSSxpQkFBS2tKLFFBQVFOLE1BQU01SSxHQUFOLENBQVV2bkIsS0FBVixDQUFnQixDQUFoQjtBQUhKLFdBQVg7QUFLRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBTzBTLElBQVA7QUFDRCxHQXpJRDs7QUEySUE7Ozs7Ozs7Ozs7QUFVQWlTLE9BQUs0SyxRQUFMLENBQWNsSCxVQUFkLEdBQTJCLFVBQVVkLEdBQVYsRUFBZTtBQUN4QyxRQUFJM3JCLE9BQU8sSUFBSStvQixLQUFLNEssUUFBVCxFQUFYO0FBQUEsUUFDSTdjLE9BQU85VyxJQURYOztBQUdBOzs7Ozs7OztBQVFBLFNBQUssSUFBSTJCLElBQUksQ0FBUixFQUFXK04sTUFBTWljLElBQUl4ZixNQUExQixFQUFrQ3hLLElBQUkrTixHQUF0QyxFQUEyQy9OLEdBQTNDLEVBQWdEO0FBQzlDLFVBQUlnb0IsT0FBT2dDLElBQUlocUIsQ0FBSixDQUFYO0FBQUEsVUFDSWl5QixRQUFTanlCLEtBQUsrTixNQUFNLENBRHhCOztBQUdBLFVBQUlpYSxRQUFRLEdBQVosRUFBaUI7QUFDZjNwQixhQUFLNnpCLEtBQUwsQ0FBV2xLLElBQVgsSUFBbUIzcEIsSUFBbkI7QUFDQUEsYUFBSzR6QixLQUFMLEdBQWFBLEtBQWI7QUFFRCxPQUpELE1BSU87QUFDTCxZQUFJb0IsT0FBTyxJQUFJak0sS0FBSzRLLFFBQVQsRUFBWDtBQUNBcUIsYUFBS3BCLEtBQUwsR0FBYUEsS0FBYjs7QUFFQTV6QixhQUFLNnpCLEtBQUwsQ0FBV2xLLElBQVgsSUFBbUJxTCxJQUFuQjtBQUNBaDFCLGVBQU9nMUIsSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBT2xlLElBQVA7QUFDRCxHQTlCRDs7QUFnQ0E7Ozs7OztBQU1BaVMsT0FBSzRLLFFBQUwsQ0FBY3AwQixTQUFkLENBQXdCc3hCLE9BQXhCLEdBQWtDLFlBQVk7QUFDNUMsUUFBSTRDLFFBQVEsRUFBWjs7QUFFQSxRQUFJWSxRQUFRLENBQUM7QUFDWFksY0FBUSxFQURHO0FBRVhqMUIsWUFBTTtBQUZLLEtBQUQsQ0FBWjs7QUFLQSxXQUFPcTBCLE1BQU1sb0IsTUFBYixFQUFxQjtBQUNuQixVQUFJb29CLFFBQVFGLE1BQU1HLEdBQU4sRUFBWjtBQUFBLFVBQ0lYLFFBQVFuMEIsT0FBT0MsSUFBUCxDQUFZNDBCLE1BQU12MEIsSUFBTixDQUFXNnpCLEtBQXZCLENBRFo7QUFBQSxVQUVJbmtCLE1BQU1ta0IsTUFBTTFuQixNQUZoQjs7QUFJQSxVQUFJb29CLE1BQU12MEIsSUFBTixDQUFXNHpCLEtBQWYsRUFBc0I7QUFDcEI7Ozs7QUFJQVcsY0FBTVUsTUFBTixDQUFhbEgsTUFBYixDQUFvQixDQUFwQjtBQUNBMEYsY0FBTTd3QixJQUFOLENBQVcyeEIsTUFBTVUsTUFBakI7QUFDRDs7QUFFRCxXQUFLLElBQUl0ekIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK04sR0FBcEIsRUFBeUIvTixHQUF6QixFQUE4QjtBQUM1QixZQUFJdXpCLE9BQU9yQixNQUFNbHlCLENBQU4sQ0FBWDs7QUFFQTB5QixjQUFNenhCLElBQU4sQ0FBVztBQUNUcXlCLGtCQUFRVixNQUFNVSxNQUFOLENBQWEzd0IsTUFBYixDQUFvQjR3QixJQUFwQixDQURDO0FBRVRsMUIsZ0JBQU11MEIsTUFBTXYwQixJQUFOLENBQVc2ekIsS0FBWCxDQUFpQnFCLElBQWpCO0FBRkcsU0FBWDtBQUlEO0FBQ0Y7O0FBRUQsV0FBT3pCLEtBQVA7QUFDRCxHQWpDRDs7QUFtQ0E7Ozs7Ozs7Ozs7QUFVQTFLLE9BQUs0SyxRQUFMLENBQWNwMEIsU0FBZCxDQUF3QjBJLFFBQXhCLEdBQW1DLFlBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSSxLQUFLa3RCLElBQVQsRUFBZTtBQUNiLGFBQU8sS0FBS0EsSUFBWjtBQUNEOztBQUVELFFBQUl4SixNQUFNLEtBQUtpSSxLQUFMLEdBQWEsR0FBYixHQUFtQixHQUE3QjtBQUFBLFFBQ0l0bkIsU0FBUzVNLE9BQU9DLElBQVAsQ0FBWSxLQUFLazBCLEtBQWpCLEVBQXdCdUIsSUFBeEIsRUFEYjtBQUFBLFFBRUkxbEIsTUFBTXBELE9BQU9ILE1BRmpCOztBQUlBLFNBQUssSUFBSXhLLElBQUksQ0FBYixFQUFnQkEsSUFBSStOLEdBQXBCLEVBQXlCL04sR0FBekIsRUFBOEI7QUFDNUIsVUFBSTRLLFFBQVFELE9BQU8zSyxDQUFQLENBQVo7QUFBQSxVQUNJM0IsT0FBTyxLQUFLNnpCLEtBQUwsQ0FBV3RuQixLQUFYLENBRFg7O0FBR0FvZixZQUFNQSxNQUFNcGYsS0FBTixHQUFjdk0sS0FBSytHLEVBQXpCO0FBQ0Q7O0FBRUQsV0FBTzRrQixHQUFQO0FBQ0QsR0F6QkQ7O0FBMkJBOzs7Ozs7Ozs7O0FBVUE1QyxPQUFLNEssUUFBTCxDQUFjcDBCLFNBQWQsQ0FBd0JzdEIsU0FBeEIsR0FBb0MsVUFBVUksQ0FBVixFQUFhO0FBQy9DLFFBQUk2RCxTQUFTLElBQUkvSCxLQUFLNEssUUFBVCxFQUFiO0FBQUEsUUFDSVksUUFBUTNtQixTQURaOztBQUdBLFFBQUl5bUIsUUFBUSxDQUFDO0FBQ1hnQixhQUFPcEksQ0FESTtBQUVYNkQsY0FBUUEsTUFGRztBQUdYOXdCLFlBQU07QUFISyxLQUFELENBQVo7O0FBTUEsV0FBT3EwQixNQUFNbG9CLE1BQWIsRUFBcUI7QUFDbkJvb0IsY0FBUUYsTUFBTUcsR0FBTixFQUFSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBSWMsU0FBUzUxQixPQUFPQyxJQUFQLENBQVk0MEIsTUFBTWMsS0FBTixDQUFZeEIsS0FBeEIsQ0FBYjtBQUFBLFVBQ0kwQixPQUFPRCxPQUFPbnBCLE1BRGxCO0FBQUEsVUFFSXFwQixTQUFTOTFCLE9BQU9DLElBQVAsQ0FBWTQwQixNQUFNdjBCLElBQU4sQ0FBVzZ6QixLQUF2QixDQUZiO0FBQUEsVUFHSTRCLE9BQU9ELE9BQU9ycEIsTUFIbEI7O0FBS0EsV0FBSyxJQUFJdXBCLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsSUFBcEIsRUFBMEJHLEdBQTFCLEVBQStCO0FBQzdCLFlBQUlDLFFBQVFMLE9BQU9JLENBQVAsQ0FBWjs7QUFFQSxhQUFLLElBQUk3eEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNHhCLElBQXBCLEVBQTBCNXhCLEdBQTFCLEVBQStCO0FBQzdCLGNBQUkreEIsUUFBUUosT0FBTzN4QixDQUFQLENBQVo7O0FBRUEsY0FBSSt4QixTQUFTRCxLQUFULElBQWtCQSxTQUFTLEdBQS9CLEVBQW9DO0FBQ2xDLGdCQUFJMzFCLE9BQU91MEIsTUFBTXYwQixJQUFOLENBQVc2ekIsS0FBWCxDQUFpQitCLEtBQWpCLENBQVg7QUFBQSxnQkFDSVAsUUFBUWQsTUFBTWMsS0FBTixDQUFZeEIsS0FBWixDQUFrQjhCLEtBQWxCLENBRFo7QUFBQSxnQkFFSS9CLFFBQVE1ekIsS0FBSzR6QixLQUFMLElBQWN5QixNQUFNekIsS0FGaEM7QUFBQSxnQkFHSW9CLE9BQU9wbkIsU0FIWDs7QUFLQSxnQkFBSWdvQixTQUFTckIsTUFBTXpELE1BQU4sQ0FBYStDLEtBQTFCLEVBQWlDO0FBQy9CO0FBQ0E7QUFDQTtBQUNBbUIscUJBQU9ULE1BQU16RCxNQUFOLENBQWErQyxLQUFiLENBQW1CK0IsS0FBbkIsQ0FBUDtBQUNBWixtQkFBS3BCLEtBQUwsR0FBYW9CLEtBQUtwQixLQUFMLElBQWNBLEtBQTNCO0FBRUQsYUFQRCxNQU9PO0FBQ0w7QUFDQTtBQUNBO0FBQ0FvQixxQkFBTyxJQUFJak0sS0FBSzRLLFFBQVQsRUFBUDtBQUNBcUIsbUJBQUtwQixLQUFMLEdBQWFBLEtBQWI7QUFDQVcsb0JBQU16RCxNQUFOLENBQWErQyxLQUFiLENBQW1CK0IsS0FBbkIsSUFBNEJaLElBQTVCO0FBQ0Q7O0FBRURYLGtCQUFNenhCLElBQU4sQ0FBVztBQUNUeXlCLHFCQUFPQSxLQURFO0FBRVR2RSxzQkFBUWtFLElBRkM7QUFHVGgxQixvQkFBTUE7QUFIRyxhQUFYO0FBS0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsV0FBTzh3QixNQUFQO0FBQ0QsR0E3REQ7QUE4REEvSCxPQUFLNEssUUFBTCxDQUFjOUgsT0FBZCxHQUF3QixZQUFZO0FBQ2xDLFNBQUtnSyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBSy9lLElBQUwsR0FBWSxJQUFJaVMsS0FBSzRLLFFBQVQsRUFBWjtBQUNBLFNBQUttQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNELEdBTEQ7O0FBT0FoTixPQUFLNEssUUFBTCxDQUFjOUgsT0FBZCxDQUFzQnRzQixTQUF0QixDQUFnQ3V3QixNQUFoQyxHQUF5QyxVQUFVa0csSUFBVixFQUFnQjtBQUN2RCxRQUFJaDJCLElBQUo7QUFBQSxRQUNJaTJCLGVBQWUsQ0FEbkI7O0FBR0EsUUFBSUQsT0FBTyxLQUFLSCxZQUFoQixFQUE4QjtBQUM1QixZQUFNLElBQUl2b0IsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDRDs7QUFFRCxTQUFLLElBQUkzTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlxMEIsS0FBSzdwQixNQUFULElBQW1CeEssSUFBSSxLQUFLazBCLFlBQUwsQ0FBa0IxcEIsTUFBekQsRUFBaUV4SyxHQUFqRSxFQUFzRTtBQUNwRSxVQUFJcTBCLEtBQUtyMEIsQ0FBTCxLQUFXLEtBQUtrMEIsWUFBTCxDQUFrQmwwQixDQUFsQixDQUFmLEVBQXFDO0FBQ3JDczBCO0FBQ0Q7O0FBRUQsU0FBS0MsUUFBTCxDQUFjRCxZQUFkOztBQUVBLFFBQUksS0FBS0gsY0FBTCxDQUFvQjNwQixNQUFwQixJQUE4QixDQUFsQyxFQUFxQztBQUNuQ25NLGFBQU8sS0FBSzhXLElBQVo7QUFDRCxLQUZELE1BRU87QUFDTDlXLGFBQU8sS0FBSzgxQixjQUFMLENBQW9CLEtBQUtBLGNBQUwsQ0FBb0IzcEIsTUFBcEIsR0FBNkIsQ0FBakQsRUFBb0RncUIsS0FBM0Q7QUFDRDs7QUFFRCxTQUFLLElBQUl4MEIsSUFBSXMwQixZQUFiLEVBQTJCdDBCLElBQUlxMEIsS0FBSzdwQixNQUFwQyxFQUE0Q3hLLEdBQTVDLEVBQWlEO0FBQy9DLFVBQUl5MEIsV0FBVyxJQUFJck4sS0FBSzRLLFFBQVQsRUFBZjtBQUFBLFVBQ0loSyxPQUFPcU0sS0FBS3IwQixDQUFMLENBRFg7O0FBR0EzQixXQUFLNnpCLEtBQUwsQ0FBV2xLLElBQVgsSUFBbUJ5TSxRQUFuQjs7QUFFQSxXQUFLTixjQUFMLENBQW9CbHpCLElBQXBCLENBQXlCO0FBQ3ZCcUUsZ0JBQVFqSCxJQURlO0FBRXZCMnBCLGNBQU1BLElBRmlCO0FBR3ZCd00sZUFBT0M7QUFIZ0IsT0FBekI7O0FBTUFwMkIsYUFBT28yQixRQUFQO0FBQ0Q7O0FBRURwMkIsU0FBSzR6QixLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtpQyxZQUFMLEdBQW9CRyxJQUFwQjtBQUNELEdBdENEOztBQXdDQWpOLE9BQUs0SyxRQUFMLENBQWM5SCxPQUFkLENBQXNCdHNCLFNBQXRCLENBQWdDeTBCLE1BQWhDLEdBQXlDLFlBQVk7QUFDbkQsU0FBS2tDLFFBQUwsQ0FBYyxDQUFkO0FBQ0QsR0FGRDs7QUFJQW5OLE9BQUs0SyxRQUFMLENBQWM5SCxPQUFkLENBQXNCdHNCLFNBQXRCLENBQWdDMjJCLFFBQWhDLEdBQTJDLFVBQVVHLE1BQVYsRUFBa0I7QUFDM0QsU0FBSyxJQUFJMTBCLElBQUksS0FBS20wQixjQUFMLENBQW9CM3BCLE1BQXBCLEdBQTZCLENBQTFDLEVBQTZDeEssS0FBSzAwQixNQUFsRCxFQUEwRDEwQixHQUExRCxFQUErRDtBQUM3RCxVQUFJM0IsT0FBTyxLQUFLODFCLGNBQUwsQ0FBb0JuMEIsQ0FBcEIsQ0FBWDtBQUFBLFVBQ0kyMEIsV0FBV3QyQixLQUFLbTJCLEtBQUwsQ0FBV2x1QixRQUFYLEVBRGY7O0FBR0EsVUFBSXF1QixZQUFZLEtBQUtQLGNBQXJCLEVBQXFDO0FBQ25DLzFCLGFBQUtpSCxNQUFMLENBQVk0c0IsS0FBWixDQUFrQjd6QixLQUFLMnBCLElBQXZCLElBQStCLEtBQUtvTSxjQUFMLENBQW9CTyxRQUFwQixDQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0E7QUFDQXQyQixhQUFLbTJCLEtBQUwsQ0FBV2hCLElBQVgsR0FBa0JtQixRQUFsQjs7QUFFQSxhQUFLUCxjQUFMLENBQW9CTyxRQUFwQixJQUFnQ3QyQixLQUFLbTJCLEtBQXJDO0FBQ0Q7O0FBRUQsV0FBS0wsY0FBTCxDQUFvQnRCLEdBQXBCO0FBQ0Q7QUFDRixHQWpCRDtBQWtCQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQXpMLE9BQUt3TixLQUFMLEdBQWEsVUFBVUMsS0FBVixFQUFpQjtBQUM1QixTQUFLQyxhQUFMLEdBQXFCRCxNQUFNQyxhQUEzQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JGLE1BQU1FLFlBQTFCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkgsTUFBTUcsUUFBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE1BQU1JLE1BQXBCO0FBQ0EsU0FBSzNNLFFBQUwsR0FBZ0J1TSxNQUFNdk0sUUFBdEI7QUFDRCxHQU5EOztBQVFBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQTs7Ozs7Ozs7Ozs7OztBQWFBbEIsT0FBS3dOLEtBQUwsQ0FBV2gzQixTQUFYLENBQXFCczNCLE1BQXJCLEdBQThCLFVBQVVDLFdBQVYsRUFBdUI7QUFDbkQsV0FBTyxLQUFLaHNCLEtBQUwsQ0FBVyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2pDLFVBQUlpc0IsU0FBUyxJQUFJaE8sS0FBS2lPLFdBQVQsQ0FBcUJGLFdBQXJCLEVBQWtDaHNCLEtBQWxDLENBQWI7QUFDQWlzQixhQUFPdnpCLEtBQVA7QUFDRCxLQUhNLENBQVA7QUFJRCxHQUxEOztBQU9BOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQXVsQixPQUFLd04sS0FBTCxDQUFXaDNCLFNBQVgsQ0FBcUJ1TCxLQUFyQixHQUE2QixVQUFVc0QsRUFBVixFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFJdEQsUUFBUSxJQUFJaWUsS0FBSzZCLEtBQVQsQ0FBZSxLQUFLZ00sTUFBcEIsQ0FBWjtBQUFBLFFBQ0lLLGlCQUFpQnYzQixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FEckI7QUFBQSxRQUVJeVosZUFBZXgzQixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FGbkI7QUFBQSxRQUdJMFosaUJBQWlCejNCLE9BQU8rZCxNQUFQLENBQWMsSUFBZCxDQUhyQjtBQUFBLFFBSUkyWixrQkFBa0IxM0IsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBSnRCO0FBQUEsUUFLSTRaLG9CQUFvQjMzQixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FMeEI7O0FBT0E7Ozs7O0FBS0EsU0FBSyxJQUFJOWIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtpMUIsTUFBTCxDQUFZenFCLE1BQWhDLEVBQXdDeEssR0FBeEMsRUFBNkM7QUFDM0N1MUIsbUJBQWEsS0FBS04sTUFBTCxDQUFZajFCLENBQVosQ0FBYixJQUErQixJQUFJb25CLEtBQUt3RyxNQUFULEVBQS9CO0FBQ0Q7O0FBRURuaEIsT0FBRzNPLElBQUgsQ0FBUXFMLEtBQVIsRUFBZUEsS0FBZjs7QUFFQSxTQUFLLElBQUluSixJQUFJLENBQWIsRUFBZ0JBLElBQUltSixNQUFNd3NCLE9BQU4sQ0FBY25yQixNQUFsQyxFQUEwQ3hLLEdBQTFDLEVBQStDO0FBQzdDOzs7Ozs7OztBQVFBLFVBQUl1eUIsU0FBU3BwQixNQUFNd3NCLE9BQU4sQ0FBYzMxQixDQUFkLENBQWI7QUFBQSxVQUNJNDFCLFFBQVEsSUFEWjtBQUFBLFVBRUlDLGdCQUFnQnpPLEtBQUs0RCxHQUFMLENBQVNDLFFBRjdCOztBQUlBLFVBQUlzSCxPQUFPdUQsV0FBWCxFQUF3QjtBQUN0QkYsZ0JBQVEsS0FBS3ROLFFBQUwsQ0FBY29GLFNBQWQsQ0FBd0I2RSxPQUFPeEosSUFBL0IsRUFBcUM7QUFDM0NrTSxrQkFBUTFDLE9BQU8wQztBQUQ0QixTQUFyQyxDQUFSO0FBR0QsT0FKRCxNQUlPO0FBQ0xXLGdCQUFRLENBQUNyRCxPQUFPeEosSUFBUixDQUFSO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJam9CLElBQUksQ0FBYixFQUFnQkEsSUFBSTgwQixNQUFNcHJCLE1BQTFCLEVBQWtDMUosR0FBbEMsRUFBdUM7QUFDckMsWUFBSWlvQixPQUFPNk0sTUFBTTkwQixDQUFOLENBQVg7O0FBRUE7Ozs7OztBQU1BeXhCLGVBQU94SixJQUFQLEdBQWNBLElBQWQ7O0FBRUE7Ozs7O0FBS0EsWUFBSWdOLGVBQWUzTyxLQUFLNEssUUFBTCxDQUFjTSxVQUFkLENBQXlCQyxNQUF6QixDQUFuQjtBQUFBLFlBQ0l5RCxnQkFBZ0IsS0FBS2hCLFFBQUwsQ0FBYzlKLFNBQWQsQ0FBd0I2SyxZQUF4QixFQUFzQzdHLE9BQXRDLEVBRHBCOztBQUdBOzs7Ozs7QUFNQSxZQUFJOEcsY0FBY3hyQixNQUFkLEtBQXlCLENBQXpCLElBQThCK25CLE9BQU8wRCxRQUFQLEtBQW9CN08sS0FBSzZCLEtBQUwsQ0FBV2dOLFFBQVgsQ0FBb0JDLFFBQTFFLEVBQW9GO0FBQ2xGLGVBQUssSUFBSXpJLElBQUksQ0FBYixFQUFnQkEsSUFBSThFLE9BQU8wQyxNQUFQLENBQWN6cUIsTUFBbEMsRUFBMENpakIsR0FBMUMsRUFBK0M7QUFDN0MsZ0JBQUkvRSxRQUFRNkosT0FBTzBDLE1BQVAsQ0FBY3hILENBQWQsQ0FBWjtBQUNBZ0ksNEJBQWdCL00sS0FBaEIsSUFBeUJ0QixLQUFLNEQsR0FBTCxDQUFTSSxLQUFsQztBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJb0MsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0ksY0FBY3hyQixNQUFsQyxFQUEwQ2dqQixHQUExQyxFQUErQztBQUM3Qzs7OztBQUlBLGNBQUkySSxlQUFlSCxjQUFjeEksQ0FBZCxDQUFuQjtBQUFBLGNBQ0kvQixVQUFVLEtBQUtxSixhQUFMLENBQW1CcUIsWUFBbkIsQ0FEZDtBQUFBLGNBRUlDLFlBQVkzSyxRQUFRNEssTUFGeEI7O0FBSUEsZUFBSyxJQUFJNUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJOEUsT0FBTzBDLE1BQVAsQ0FBY3pxQixNQUFsQyxFQUEwQ2lqQixHQUExQyxFQUErQztBQUM3Qzs7Ozs7Ozs7QUFRQSxnQkFBSS9FLFFBQVE2SixPQUFPMEMsTUFBUCxDQUFjeEgsQ0FBZCxDQUFaO0FBQUEsZ0JBQ0k2SSxlQUFlN0ssUUFBUS9DLEtBQVIsQ0FEbkI7QUFBQSxnQkFFSTZOLHVCQUF1Qng0QixPQUFPQyxJQUFQLENBQVlzNEIsWUFBWixDQUYzQjtBQUFBLGdCQUdJRSxZQUFZTCxlQUFlLEdBQWYsR0FBcUJ6TixLQUhyQztBQUFBLGdCQUlJK04sdUJBQXVCLElBQUlyUCxLQUFLNEQsR0FBVCxDQUFhdUwsb0JBQWIsQ0FKM0I7O0FBTUE7Ozs7O0FBS0EsZ0JBQUloRSxPQUFPMEQsUUFBUCxJQUFtQjdPLEtBQUs2QixLQUFMLENBQVdnTixRQUFYLENBQW9CQyxRQUEzQyxFQUFxRDtBQUNuREwsOEJBQWdCQSxjQUFjMUssS0FBZCxDQUFvQnNMLG9CQUFwQixDQUFoQjs7QUFFQSxrQkFBSWhCLGdCQUFnQi9NLEtBQWhCLE1BQTJCemMsU0FBL0IsRUFBMEM7QUFDeEN3cEIsZ0NBQWdCL00sS0FBaEIsSUFBeUJ0QixLQUFLNEQsR0FBTCxDQUFTQyxRQUFsQztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7O0FBS0EsZ0JBQUlzSCxPQUFPMEQsUUFBUCxJQUFtQjdPLEtBQUs2QixLQUFMLENBQVdnTixRQUFYLENBQW9CUyxVQUEzQyxFQUF1RDtBQUNyRCxrQkFBSWhCLGtCQUFrQmhOLEtBQWxCLE1BQTZCemMsU0FBakMsRUFBNEM7QUFDMUN5cEIsa0NBQWtCaE4sS0FBbEIsSUFBMkJ0QixLQUFLNEQsR0FBTCxDQUFTSSxLQUFwQztBQUNEOztBQUVEc0ssZ0NBQWtCaE4sS0FBbEIsSUFBMkJnTixrQkFBa0JoTixLQUFsQixFQUF5QnlDLEtBQXpCLENBQStCc0wsb0JBQS9CLENBQTNCOztBQUVBOzs7OztBQUtBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQWxCLHlCQUFhN00sS0FBYixFQUFvQjJGLE1BQXBCLENBQTJCK0gsU0FBM0IsRUFBc0M3RCxPQUFPNUosS0FBN0MsRUFBb0QsVUFBVTBDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUFFLHFCQUFPRCxJQUFJQyxDQUFYO0FBQWMsYUFBcEY7O0FBRUE7Ozs7QUFJQSxnQkFBSWtLLGVBQWVnQixTQUFmLENBQUosRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxpQkFBSyxJQUFJOWdCLElBQUksQ0FBYixFQUFnQkEsSUFBSTZnQixxQkFBcUIvckIsTUFBekMsRUFBaURrTCxHQUFqRCxFQUFzRDtBQUNwRDs7Ozs7O0FBTUEsa0JBQUlpaEIsc0JBQXNCSixxQkFBcUI3Z0IsQ0FBckIsQ0FBMUI7QUFBQSxrQkFDSWtoQixtQkFBbUIsSUFBSXhQLEtBQUtvRCxRQUFULENBQW1CbU0sbUJBQW5CLEVBQXdDak8sS0FBeEMsQ0FEdkI7QUFBQSxrQkFFSXFELFdBQVd1SyxhQUFhSyxtQkFBYixDQUZmO0FBQUEsa0JBR0lFLFVBSEo7O0FBS0Esa0JBQUksQ0FBQ0EsYUFBYXZCLGVBQWVzQixnQkFBZixDQUFkLE1BQW9EM3FCLFNBQXhELEVBQW1FO0FBQ2pFcXBCLCtCQUFlc0IsZ0JBQWYsSUFBbUMsSUFBSXhQLEtBQUswUCxTQUFULENBQW9CWCxZQUFwQixFQUFrQ3pOLEtBQWxDLEVBQXlDcUQsUUFBekMsQ0FBbkM7QUFDRCxlQUZELE1BRU87QUFDTDhLLDJCQUFXMXdCLEdBQVgsQ0FBZWd3QixZQUFmLEVBQTZCek4sS0FBN0IsRUFBb0NxRCxRQUFwQztBQUNEO0FBRUY7O0FBRUR5SiwyQkFBZWdCLFNBQWYsSUFBNEIsSUFBNUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7OztBQU1BLFVBQUlqRSxPQUFPMEQsUUFBUCxLQUFvQjdPLEtBQUs2QixLQUFMLENBQVdnTixRQUFYLENBQW9CQyxRQUE1QyxFQUFzRDtBQUNwRCxhQUFLLElBQUl6SSxJQUFJLENBQWIsRUFBZ0JBLElBQUk4RSxPQUFPMEMsTUFBUCxDQUFjenFCLE1BQWxDLEVBQTBDaWpCLEdBQTFDLEVBQStDO0FBQzdDLGNBQUkvRSxRQUFRNkosT0FBTzBDLE1BQVAsQ0FBY3hILENBQWQsQ0FBWjtBQUNBZ0ksMEJBQWdCL00sS0FBaEIsSUFBeUIrTSxnQkFBZ0IvTSxLQUFoQixFQUF1QndDLFNBQXZCLENBQWlDMkssYUFBakMsQ0FBekI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7O0FBS0EsUUFBSWtCLHFCQUFxQjNQLEtBQUs0RCxHQUFMLENBQVNDLFFBQWxDO0FBQUEsUUFDSStMLHVCQUF1QjVQLEtBQUs0RCxHQUFMLENBQVNJLEtBRHBDOztBQUdBLFNBQUssSUFBSXByQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2kxQixNQUFMLENBQVl6cUIsTUFBaEMsRUFBd0N4SyxHQUF4QyxFQUE2QztBQUMzQyxVQUFJMG9CLFFBQVEsS0FBS3VNLE1BQUwsQ0FBWWoxQixDQUFaLENBQVo7O0FBRUEsVUFBSXkxQixnQkFBZ0IvTSxLQUFoQixDQUFKLEVBQTRCO0FBQzFCcU8sNkJBQXFCQSxtQkFBbUI3TCxTQUFuQixDQUE2QnVLLGdCQUFnQi9NLEtBQWhCLENBQTdCLENBQXJCO0FBQ0Q7O0FBRUQsVUFBSWdOLGtCQUFrQmhOLEtBQWxCLENBQUosRUFBOEI7QUFDNUJzTywrQkFBdUJBLHFCQUFxQjdMLEtBQXJCLENBQTJCdUssa0JBQWtCaE4sS0FBbEIsQ0FBM0IsQ0FBdkI7QUFDRDtBQUNGOztBQUVELFFBQUl1TyxvQkFBb0JsNUIsT0FBT0MsSUFBUCxDQUFZczNCLGNBQVosQ0FBeEI7QUFBQSxRQUNJNEIsVUFBVSxFQURkO0FBQUEsUUFFSS9aLFVBQVVwZixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FGZDs7QUFJQTs7Ozs7Ozs7OztBQVVBLFFBQUkzUyxNQUFNZ3VCLFNBQU4sRUFBSixFQUF1QjtBQUNyQkYsMEJBQW9CbDVCLE9BQU9DLElBQVAsQ0FBWSxLQUFLKzJCLFlBQWpCLENBQXBCOztBQUVBLFdBQUssSUFBSS8wQixJQUFJLENBQWIsRUFBZ0JBLElBQUlpM0Isa0JBQWtCenNCLE1BQXRDLEVBQThDeEssR0FBOUMsRUFBbUQ7QUFDakQsWUFBSTQyQixtQkFBbUJLLGtCQUFrQmozQixDQUFsQixDQUF2QjtBQUNBLFlBQUkrcUIsV0FBVzNELEtBQUtvRCxRQUFMLENBQWNNLFVBQWQsQ0FBeUI4TCxnQkFBekIsQ0FBZjtBQUNBdEIsdUJBQWVzQixnQkFBZixJQUFtQyxJQUFJeFAsS0FBSzBQLFNBQVQsRUFBbkM7QUFDRDtBQUNGOztBQUVELFNBQUssSUFBSTkyQixJQUFJLENBQWIsRUFBZ0JBLElBQUlpM0Isa0JBQWtCenNCLE1BQXRDLEVBQThDeEssR0FBOUMsRUFBbUQ7QUFDakQ7Ozs7Ozs7O0FBUUEsVUFBSStxQixXQUFXM0QsS0FBS29ELFFBQUwsQ0FBY00sVUFBZCxDQUF5Qm1NLGtCQUFrQmozQixDQUFsQixDQUF6QixDQUFmO0FBQUEsVUFDSXlxQixTQUFTTSxTQUFTTixNQUR0Qjs7QUFHQSxVQUFJLENBQUNzTSxtQkFBbUI5VSxRQUFuQixDQUE0QndJLE1BQTVCLENBQUwsRUFBMEM7QUFDeEM7QUFDRDs7QUFFRCxVQUFJdU0scUJBQXFCL1UsUUFBckIsQ0FBOEJ3SSxNQUE5QixDQUFKLEVBQTJDO0FBQ3pDO0FBQ0Q7O0FBRUQsVUFBSTJNLGNBQWMsS0FBS3JDLFlBQUwsQ0FBa0JoSyxRQUFsQixDQUFsQjtBQUFBLFVBQ0lzTSxRQUFROUIsYUFBYXhLLFNBQVNMLFNBQXRCLEVBQWlDdUUsVUFBakMsQ0FBNENtSSxXQUE1QyxDQURaO0FBQUEsVUFFSUUsUUFGSjs7QUFJQSxVQUFJLENBQUNBLFdBQVduYSxRQUFRc04sTUFBUixDQUFaLE1BQWlDeGUsU0FBckMsRUFBZ0Q7QUFDOUNxckIsaUJBQVNELEtBQVQsSUFBa0JBLEtBQWxCO0FBQ0FDLGlCQUFTQyxTQUFULENBQW1CQyxPQUFuQixDQUEyQmxDLGVBQWV2SyxRQUFmLENBQTNCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBSXRtQixRQUFRO0FBQ1ZvTCxlQUFLNGEsTUFESztBQUVWNE0saUJBQU9BLEtBRkc7QUFHVkUscUJBQVdqQyxlQUFldkssUUFBZjtBQUhELFNBQVo7QUFLQTVOLGdCQUFRc04sTUFBUixJQUFrQmhtQixLQUFsQjtBQUNBeXlCLGdCQUFRajJCLElBQVIsQ0FBYXdELEtBQWI7QUFDRDtBQUNGOztBQUVEOzs7QUFHQSxXQUFPeXlCLFFBQVF6RCxJQUFSLENBQWEsVUFBVXBJLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNsQyxhQUFPQSxFQUFFK0wsS0FBRixHQUFVaE0sRUFBRWdNLEtBQW5CO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0ExUkQ7O0FBNFJBOzs7Ozs7OztBQVFBalEsT0FBS3dOLEtBQUwsQ0FBV2gzQixTQUFYLENBQXFCK3ZCLE1BQXJCLEdBQThCLFlBQVk7QUFDeEMsUUFBSW1ILGdCQUFnQi8yQixPQUFPQyxJQUFQLENBQVksS0FBSzgyQixhQUFqQixFQUNqQnJCLElBRGlCLEdBRWpCenFCLEdBRmlCLENBRWIsVUFBVStmLElBQVYsRUFBZ0I7QUFDbkIsYUFBTyxDQUFDQSxJQUFELEVBQU8sS0FBSytMLGFBQUwsQ0FBbUIvTCxJQUFuQixDQUFQLENBQVA7QUFDRCxLQUppQixFQUlmLElBSmUsQ0FBcEI7O0FBTUEsUUFBSWdNLGVBQWVoM0IsT0FBT0MsSUFBUCxDQUFZLEtBQUsrMkIsWUFBakIsRUFDaEIvckIsR0FEZ0IsQ0FDWixVQUFVNkcsR0FBVixFQUFlO0FBQ2xCLGFBQU8sQ0FBQ0EsR0FBRCxFQUFNLEtBQUtrbEIsWUFBTCxDQUFrQmxsQixHQUFsQixFQUF1QjhkLE1BQXZCLEVBQU4sQ0FBUDtBQUNELEtBSGdCLEVBR2QsSUFIYyxDQUFuQjs7QUFLQSxXQUFPO0FBQ0wzWixlQUFTb1QsS0FBS3BULE9BRFQ7QUFFTGloQixjQUFRLEtBQUtBLE1BRlI7QUFHTEYsb0JBQWNBLFlBSFQ7QUFJTEQscUJBQWVBLGFBSlY7QUFLTHhNLGdCQUFVLEtBQUtBLFFBQUwsQ0FBY3FGLE1BQWQ7QUFMTCxLQUFQO0FBT0QsR0FuQkQ7O0FBcUJBOzs7Ozs7QUFNQXZHLE9BQUt3TixLQUFMLENBQVcvSCxJQUFYLEdBQWtCLFVBQVU0SyxlQUFWLEVBQTJCO0FBQzNDLFFBQUk1QyxRQUFRLEVBQVo7QUFBQSxRQUNJRSxlQUFlLEVBRG5CO0FBQUEsUUFFSTJDLG9CQUFvQkQsZ0JBQWdCMUMsWUFGeEM7QUFBQSxRQUdJRCxnQkFBZ0IvMkIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBSHBCO0FBQUEsUUFJSTZiLDBCQUEwQkYsZ0JBQWdCM0MsYUFKOUM7QUFBQSxRQUtJOEMsa0JBQWtCLElBQUl4USxLQUFLNEssUUFBTCxDQUFjOUgsT0FBbEIsRUFMdEI7QUFBQSxRQU1JNUIsV0FBV2xCLEtBQUttRixRQUFMLENBQWNNLElBQWQsQ0FBbUI0SyxnQkFBZ0JuUCxRQUFuQyxDQU5mOztBQVFBLFFBQUltUCxnQkFBZ0J6akIsT0FBaEIsSUFBMkJvVCxLQUFLcFQsT0FBcEMsRUFBNkM7QUFDM0NvVCxXQUFLa0QsS0FBTCxDQUFXcmIsSUFBWCxDQUFnQiw4RUFBOEVtWSxLQUFLcFQsT0FBbkYsR0FBNkYscUNBQTdGLEdBQXFJeWpCLGdCQUFnQnpqQixPQUFySixHQUErSixHQUEvSztBQUNEOztBQUVELFNBQUssSUFBSWhVLElBQUksQ0FBYixFQUFnQkEsSUFBSTAzQixrQkFBa0JsdEIsTUFBdEMsRUFBOEN4SyxHQUE5QyxFQUFtRDtBQUNqRCxVQUFJNjNCLFFBQVFILGtCQUFrQjEzQixDQUFsQixDQUFaO0FBQUEsVUFDSTZQLE1BQU1nb0IsTUFBTSxDQUFOLENBRFY7QUFBQSxVQUVJL1osV0FBVytaLE1BQU0sQ0FBTixDQUZmOztBQUlBOUMsbUJBQWFsbEIsR0FBYixJQUFvQixJQUFJdVgsS0FBS3dHLE1BQVQsQ0FBZ0I5UCxRQUFoQixDQUFwQjtBQUNEOztBQUVELFNBQUssSUFBSTlkLElBQUksQ0FBYixFQUFnQkEsSUFBSTIzQix3QkFBd0JudEIsTUFBNUMsRUFBb0R4SyxHQUFwRCxFQUF5RDtBQUN2RCxVQUFJNjNCLFFBQVFGLHdCQUF3QjMzQixDQUF4QixDQUFaO0FBQUEsVUFDSStvQixPQUFPOE8sTUFBTSxDQUFOLENBRFg7QUFBQSxVQUVJcE0sVUFBVW9NLE1BQU0sQ0FBTixDQUZkOztBQUlBRCxzQkFBZ0J6SixNQUFoQixDQUF1QnBGLElBQXZCO0FBQ0ErTCxvQkFBYy9MLElBQWQsSUFBc0IwQyxPQUF0QjtBQUNEOztBQUVEbU0sb0JBQWdCdkYsTUFBaEI7O0FBRUF3QyxVQUFNSSxNQUFOLEdBQWV3QyxnQkFBZ0J4QyxNQUEvQjs7QUFFQUosVUFBTUUsWUFBTixHQUFxQkEsWUFBckI7QUFDQUYsVUFBTUMsYUFBTixHQUFzQkEsYUFBdEI7QUFDQUQsVUFBTUcsUUFBTixHQUFpQjRDLGdCQUFnQnppQixJQUFqQztBQUNBMGYsVUFBTXZNLFFBQU4sR0FBaUJBLFFBQWpCOztBQUVBLFdBQU8sSUFBSWxCLEtBQUt3TixLQUFULENBQWVDLEtBQWYsQ0FBUDtBQUNELEdBeENEO0FBeUNBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkF6TixPQUFLOEMsT0FBTCxHQUFlLFlBQVk7QUFDekIsU0FBSzROLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlaDZCLE9BQU8rZCxNQUFQLENBQWMsSUFBZCxDQUFmO0FBQ0EsU0FBS2tjLFVBQUwsR0FBa0JqNkIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS2daLGFBQUwsR0FBcUIvMkIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQXJCO0FBQ0EsU0FBS21jLG9CQUFMLEdBQTRCLEVBQTVCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUsvUSxTQUFMLEdBQWlCQyxLQUFLRCxTQUF0QjtBQUNBLFNBQUttQixRQUFMLEdBQWdCLElBQUlsQixLQUFLbUYsUUFBVCxFQUFoQjtBQUNBLFNBQUtuQyxjQUFMLEdBQXNCLElBQUloRCxLQUFLbUYsUUFBVCxFQUF0QjtBQUNBLFNBQUtiLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxTQUFLeU0sRUFBTCxHQUFVLElBQVY7QUFDQSxTQUFLQyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUtoQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS2lDLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0QsR0FmRDs7QUFpQkE7Ozs7Ozs7Ozs7OztBQVlBalIsT0FBSzhDLE9BQUwsQ0FBYXRzQixTQUFiLENBQXVCaVMsR0FBdkIsR0FBNkIsVUFBVUEsR0FBVixFQUFlO0FBQzFDLFNBQUtpb0IsSUFBTCxHQUFZam9CLEdBQVo7QUFDRCxHQUZEOztBQUlBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkF1WCxPQUFLOEMsT0FBTCxDQUFhdHNCLFNBQWIsQ0FBdUI4cUIsS0FBdkIsR0FBK0IsVUFBVWdDLFNBQVYsRUFBcUI0TixVQUFyQixFQUFpQztBQUM5RCxRQUFJLEtBQUs5WCxJQUFMLENBQVVrSyxTQUFWLENBQUosRUFBMEI7QUFDeEIsWUFBTSxJQUFJNk4sVUFBSixDQUFnQixZQUFZN04sU0FBWixHQUF3QixrQ0FBeEMsQ0FBTjtBQUNEOztBQUVELFNBQUtxTixPQUFMLENBQWFyTixTQUFiLElBQTBCNE4sY0FBYyxFQUF4QztBQUNELEdBTkQ7O0FBUUE7Ozs7Ozs7O0FBUUFsUixPQUFLOEMsT0FBTCxDQUFhdHNCLFNBQWIsQ0FBdUIwdEIsQ0FBdkIsR0FBMkIsVUFBVWtOLE1BQVYsRUFBa0I7QUFDM0MsUUFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ2QsV0FBS0wsRUFBTCxHQUFVLENBQVY7QUFDRCxLQUZELE1BRU8sSUFBSUssU0FBUyxDQUFiLEVBQWdCO0FBQ3JCLFdBQUtMLEVBQUwsR0FBVSxDQUFWO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsV0FBS0EsRUFBTCxHQUFVSyxNQUFWO0FBQ0Q7QUFDRixHQVJEOztBQVVBOzs7Ozs7O0FBT0FwUixPQUFLOEMsT0FBTCxDQUFhdHNCLFNBQWIsQ0FBdUI2NkIsRUFBdkIsR0FBNEIsVUFBVUQsTUFBVixFQUFrQjtBQUM1QyxTQUFLSixHQUFMLEdBQVdJLE1BQVg7QUFDRCxHQUZEOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQXBSLE9BQUs4QyxPQUFMLENBQWF0c0IsU0FBYixDQUF1QnVJLEdBQXZCLEdBQTZCLFVBQVU4QyxHQUFWLEVBQWVxdkIsVUFBZixFQUEyQjtBQUN0RCxRQUFJN04sU0FBU3hoQixJQUFJLEtBQUs2dUIsSUFBVCxDQUFiO0FBQUEsUUFDSTdDLFNBQVNsM0IsT0FBT0MsSUFBUCxDQUFZLEtBQUsrNUIsT0FBakIsQ0FEYjs7QUFHQSxTQUFLQyxVQUFMLENBQWdCdk4sTUFBaEIsSUFBMEI2TixjQUFjLEVBQXhDO0FBQ0EsU0FBSzVNLGFBQUwsSUFBc0IsQ0FBdEI7O0FBRUEsU0FBSyxJQUFJMXJCLElBQUksQ0FBYixFQUFnQkEsSUFBSWkxQixPQUFPenFCLE1BQTNCLEVBQW1DeEssR0FBbkMsRUFBd0M7QUFDdEMsVUFBSTBxQixZQUFZdUssT0FBT2oxQixDQUFQLENBQWhCO0FBQUEsVUFDSTA0QixZQUFZLEtBQUtYLE9BQUwsQ0FBYXJOLFNBQWIsRUFBd0JnTyxTQUR4QztBQUFBLFVBRUloUSxRQUFRZ1EsWUFBWUEsVUFBVXp2QixHQUFWLENBQVosR0FBNkJBLElBQUl5aEIsU0FBSixDQUZ6QztBQUFBLFVBR0l1QixTQUFTLEtBQUs5RSxTQUFMLENBQWV1QixLQUFmLEVBQXNCO0FBQzdCdU0sZ0JBQVEsQ0FBQ3ZLLFNBQUQ7QUFEcUIsT0FBdEIsQ0FIYjtBQUFBLFVBTUlrTCxRQUFRLEtBQUt0TixRQUFMLENBQWN4WCxHQUFkLENBQWtCbWIsTUFBbEIsQ0FOWjtBQUFBLFVBT0lsQixXQUFXLElBQUkzRCxLQUFLb0QsUUFBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLFNBQTNCLENBUGY7QUFBQSxVQVFJaU8sYUFBYTU2QixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FSakI7O0FBVUEsV0FBS21jLG9CQUFMLENBQTBCbE4sUUFBMUIsSUFBc0M0TixVQUF0QztBQUNBLFdBQUtULFlBQUwsQ0FBa0JuTixRQUFsQixJQUE4QixDQUE5Qjs7QUFFQTtBQUNBLFdBQUttTixZQUFMLENBQWtCbk4sUUFBbEIsS0FBK0I2SyxNQUFNcHJCLE1BQXJDOztBQUVBO0FBQ0EsV0FBSyxJQUFJZ2pCLElBQUksQ0FBYixFQUFnQkEsSUFBSW9JLE1BQU1wckIsTUFBMUIsRUFBa0NnakIsR0FBbEMsRUFBdUM7QUFDckMsWUFBSXpFLE9BQU82TSxNQUFNcEksQ0FBTixDQUFYOztBQUVBLFlBQUltTCxXQUFXNVAsSUFBWCxLQUFvQjljLFNBQXhCLEVBQW1DO0FBQ2pDMHNCLHFCQUFXNVAsSUFBWCxJQUFtQixDQUFuQjtBQUNEOztBQUVENFAsbUJBQVc1UCxJQUFYLEtBQW9CLENBQXBCOztBQUVBO0FBQ0E7QUFDQSxZQUFJLEtBQUsrTCxhQUFMLENBQW1CL0wsSUFBbkIsS0FBNEI5YyxTQUFoQyxFQUEyQztBQUN6QyxjQUFJd2YsVUFBVTF0QixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBZDtBQUNBMlAsa0JBQVEsUUFBUixJQUFvQixLQUFLMkssU0FBekI7QUFDQSxlQUFLQSxTQUFMLElBQWtCLENBQWxCOztBQUVBLGVBQUssSUFBSTNJLElBQUksQ0FBYixFQUFnQkEsSUFBSXdILE9BQU96cUIsTUFBM0IsRUFBbUNpakIsR0FBbkMsRUFBd0M7QUFDdENoQyxvQkFBUXdKLE9BQU94SCxDQUFQLENBQVIsSUFBcUIxdkIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQXJCO0FBQ0Q7O0FBRUQsZUFBS2daLGFBQUwsQ0FBbUIvTCxJQUFuQixJQUEyQjBDLE9BQTNCO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFJLEtBQUtxSixhQUFMLENBQW1CL0wsSUFBbkIsRUFBeUIyQixTQUF6QixFQUFvQ0QsTUFBcEMsS0FBK0N4ZSxTQUFuRCxFQUE4RDtBQUM1RCxlQUFLNm9CLGFBQUwsQ0FBbUIvTCxJQUFuQixFQUF5QjJCLFNBQXpCLEVBQW9DRCxNQUFwQyxJQUE4QzFzQixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBOUM7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsYUFBSyxJQUFJcEcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsyaUIsaUJBQUwsQ0FBdUI3dEIsTUFBM0MsRUFBbURrTCxHQUFuRCxFQUF3RDtBQUN0RCxjQUFJa2pCLGNBQWMsS0FBS1AsaUJBQUwsQ0FBdUIzaUIsQ0FBdkIsQ0FBbEI7QUFBQSxjQUNJcVcsV0FBV2hELEtBQUtnRCxRQUFMLENBQWM2TSxXQUFkLENBRGY7O0FBR0EsY0FBSSxLQUFLOUQsYUFBTCxDQUFtQi9MLElBQW5CLEVBQXlCMkIsU0FBekIsRUFBb0NELE1BQXBDLEVBQTRDbU8sV0FBNUMsS0FBNEQzc0IsU0FBaEUsRUFBMkU7QUFDekUsaUJBQUs2b0IsYUFBTCxDQUFtQi9MLElBQW5CLEVBQXlCMkIsU0FBekIsRUFBb0NELE1BQXBDLEVBQTRDbU8sV0FBNUMsSUFBMkQsRUFBM0Q7QUFDRDs7QUFFRCxlQUFLOUQsYUFBTCxDQUFtQi9MLElBQW5CLEVBQXlCMkIsU0FBekIsRUFBb0NELE1BQXBDLEVBQTRDbU8sV0FBNUMsRUFBeUQzM0IsSUFBekQsQ0FBOEQ4cUIsUUFBOUQ7QUFDRDtBQUNGO0FBRUY7QUFDRixHQXBFRDs7QUFzRUE7Ozs7O0FBS0EzRSxPQUFLOEMsT0FBTCxDQUFhdHNCLFNBQWIsQ0FBdUJpN0IsNEJBQXZCLEdBQXNELFlBQVk7O0FBRWhFLFFBQUlDLFlBQVkvNkIsT0FBT0MsSUFBUCxDQUFZLEtBQUtrNkIsWUFBakIsQ0FBaEI7QUFBQSxRQUNJYSxpQkFBaUJELFVBQVV0dUIsTUFEL0I7QUFBQSxRQUVJd3VCLGNBQWMsRUFGbEI7QUFBQSxRQUdJQyxxQkFBcUIsRUFIekI7O0FBS0EsU0FBSyxJQUFJajVCLElBQUksQ0FBYixFQUFnQkEsSUFBSSs0QixjQUFwQixFQUFvQy80QixHQUFwQyxFQUF5QztBQUN2QyxVQUFJK3FCLFdBQVczRCxLQUFLb0QsUUFBTCxDQUFjTSxVQUFkLENBQXlCZ08sVUFBVTk0QixDQUFWLENBQXpCLENBQWY7QUFBQSxVQUNJMG9CLFFBQVFxQyxTQUFTTCxTQURyQjs7QUFHQXVPLHlCQUFtQnZRLEtBQW5CLE1BQThCdVEsbUJBQW1CdlEsS0FBbkIsSUFBNEIsQ0FBMUQ7QUFDQXVRLHlCQUFtQnZRLEtBQW5CLEtBQTZCLENBQTdCOztBQUVBc1Esa0JBQVl0USxLQUFaLE1BQXVCc1EsWUFBWXRRLEtBQVosSUFBcUIsQ0FBNUM7QUFDQXNRLGtCQUFZdFEsS0FBWixLQUFzQixLQUFLd1AsWUFBTCxDQUFrQm5OLFFBQWxCLENBQXRCO0FBQ0Q7O0FBRUQsUUFBSWtLLFNBQVNsM0IsT0FBT0MsSUFBUCxDQUFZLEtBQUsrNUIsT0FBakIsQ0FBYjs7QUFFQSxTQUFLLElBQUkvM0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaTFCLE9BQU96cUIsTUFBM0IsRUFBbUN4SyxHQUFuQyxFQUF3QztBQUN0QyxVQUFJMHFCLFlBQVl1SyxPQUFPajFCLENBQVAsQ0FBaEI7QUFDQWc1QixrQkFBWXRPLFNBQVosSUFBeUJzTyxZQUFZdE8sU0FBWixJQUF5QnVPLG1CQUFtQnZPLFNBQW5CLENBQWxEO0FBQ0Q7O0FBRUQsU0FBS3dPLGtCQUFMLEdBQTBCRixXQUExQjtBQUNELEdBMUJEOztBQTRCQTs7Ozs7QUFLQTVSLE9BQUs4QyxPQUFMLENBQWF0c0IsU0FBYixDQUF1QnU3QixrQkFBdkIsR0FBNEMsWUFBWTtBQUN0RCxRQUFJcEUsZUFBZSxFQUFuQjtBQUFBLFFBQ0krRCxZQUFZLzZCLE9BQU9DLElBQVAsQ0FBWSxLQUFLaTZCLG9CQUFqQixDQURoQjtBQUFBLFFBRUltQixrQkFBa0JOLFVBQVV0dUIsTUFGaEM7QUFBQSxRQUdJNnVCLGVBQWV0N0IsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBSG5COztBQUtBLFNBQUssSUFBSTliLElBQUksQ0FBYixFQUFnQkEsSUFBSW81QixlQUFwQixFQUFxQ3A1QixHQUFyQyxFQUEwQztBQUN4QyxVQUFJK3FCLFdBQVczRCxLQUFLb0QsUUFBTCxDQUFjTSxVQUFkLENBQXlCZ08sVUFBVTk0QixDQUFWLENBQXpCLENBQWY7QUFBQSxVQUNJMHFCLFlBQVlLLFNBQVNMLFNBRHpCO0FBQUEsVUFFSTRPLGNBQWMsS0FBS3BCLFlBQUwsQ0FBa0JuTixRQUFsQixDQUZsQjtBQUFBLFVBR0lxTSxjQUFjLElBQUloUSxLQUFLd0csTUFBVCxFQUhsQjtBQUFBLFVBSUkyTCxrQkFBa0IsS0FBS3RCLG9CQUFMLENBQTBCbE4sUUFBMUIsQ0FKdEI7QUFBQSxVQUtJNkssUUFBUTczQixPQUFPQyxJQUFQLENBQVl1N0IsZUFBWixDQUxaO0FBQUEsVUFNSUMsY0FBYzVELE1BQU1wckIsTUFOeEI7O0FBU0EsVUFBSWl2QixhQUFhLEtBQUsxQixPQUFMLENBQWFyTixTQUFiLEVBQXdCL0IsS0FBeEIsSUFBaUMsQ0FBbEQ7QUFBQSxVQUNJK1EsV0FBVyxLQUFLMUIsVUFBTCxDQUFnQmpOLFNBQVNOLE1BQXpCLEVBQWlDOUIsS0FBakMsSUFBMEMsQ0FEekQ7O0FBR0EsV0FBSyxJQUFJNkUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ00sV0FBcEIsRUFBaUNoTSxHQUFqQyxFQUFzQztBQUNwQyxZQUFJekUsT0FBTzZNLE1BQU1wSSxDQUFOLENBQVg7QUFBQSxZQUNJbU0sS0FBS0osZ0JBQWdCeFEsSUFBaEIsQ0FEVDtBQUFBLFlBRUlxTixZQUFZLEtBQUt0QixhQUFMLENBQW1CL0wsSUFBbkIsRUFBeUJzTixNQUZ6QztBQUFBLFlBR0k3SyxHQUhKO0FBQUEsWUFHUzZMLEtBSFQ7QUFBQSxZQUdnQnVDLGtCQUhoQjs7QUFLQSxZQUFJUCxhQUFhdFEsSUFBYixNQUF1QjljLFNBQTNCLEVBQXNDO0FBQ3BDdWYsZ0JBQU1wRSxLQUFLb0UsR0FBTCxDQUFTLEtBQUtzSixhQUFMLENBQW1CL0wsSUFBbkIsQ0FBVCxFQUFtQyxLQUFLMkMsYUFBeEMsQ0FBTjtBQUNBMk4sdUJBQWF0USxJQUFiLElBQXFCeUMsR0FBckI7QUFDRCxTQUhELE1BR087QUFDTEEsZ0JBQU02TixhQUFhdFEsSUFBYixDQUFOO0FBQ0Q7O0FBRURzTyxnQkFBUTdMLE9BQU8sQ0FBQyxLQUFLNE0sR0FBTCxHQUFXLENBQVosSUFBaUJ1QixFQUF4QixLQUErQixLQUFLdkIsR0FBTCxJQUFZLElBQUksS0FBS0QsRUFBVCxHQUFjLEtBQUtBLEVBQUwsSUFBV21CLGNBQWMsS0FBS0osa0JBQUwsQ0FBd0J4TyxTQUF4QixDQUF6QixDQUExQixJQUEwRmlQLEVBQXpILENBQVI7QUFDQXRDLGlCQUFTb0MsVUFBVDtBQUNBcEMsaUJBQVNxQyxRQUFUO0FBQ0FFLDZCQUFxQnR2QixLQUFLdXZCLEtBQUwsQ0FBV3hDLFFBQVEsSUFBbkIsSUFBMkIsSUFBaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFELG9CQUFZakosTUFBWixDQUFtQmlJLFNBQW5CLEVBQThCd0Qsa0JBQTlCO0FBQ0Q7O0FBRUQ3RSxtQkFBYWhLLFFBQWIsSUFBeUJxTSxXQUF6QjtBQUNEOztBQUVELFNBQUtyQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNELEdBbEREOztBQW9EQTs7Ozs7QUFLQTNOLE9BQUs4QyxPQUFMLENBQWF0c0IsU0FBYixDQUF1Qms4QixjQUF2QixHQUF3QyxZQUFZO0FBQ2xELFNBQUs5RSxRQUFMLEdBQWdCNU4sS0FBSzRLLFFBQUwsQ0FBY0ksU0FBZCxDQUNkcjBCLE9BQU9DLElBQVAsQ0FBWSxLQUFLODJCLGFBQWpCLEVBQWdDckIsSUFBaEMsRUFEYyxDQUFoQjtBQUdELEdBSkQ7O0FBTUE7Ozs7Ozs7O0FBUUFyTSxPQUFLOEMsT0FBTCxDQUFhdHNCLFNBQWIsQ0FBdUJ5c0IsS0FBdkIsR0FBK0IsWUFBWTtBQUN6QyxTQUFLd08sNEJBQUw7QUFDQSxTQUFLTSxrQkFBTDtBQUNBLFNBQUtXLGNBQUw7O0FBRUEsV0FBTyxJQUFJMVMsS0FBS3dOLEtBQVQsQ0FBZTtBQUNwQkUscUJBQWUsS0FBS0EsYUFEQTtBQUVwQkMsb0JBQWMsS0FBS0EsWUFGQztBQUdwQkMsZ0JBQVUsS0FBS0EsUUFISztBQUlwQkMsY0FBUWwzQixPQUFPQyxJQUFQLENBQVksS0FBSys1QixPQUFqQixDQUpZO0FBS3BCelAsZ0JBQVUsS0FBSzhCO0FBTEssS0FBZixDQUFQO0FBT0QsR0FaRDs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7QUFjQWhELE9BQUs4QyxPQUFMLENBQWF0c0IsU0FBYixDQUF1QjRxQixHQUF2QixHQUE2QixVQUFVL2IsRUFBVixFQUFjO0FBQ3pDLFFBQUkrQixPQUFPN1EsTUFBTUMsU0FBTixDQUFnQjZFLEtBQWhCLENBQXNCM0UsSUFBdEIsQ0FBMkI4TyxTQUEzQixFQUFzQyxDQUF0QyxDQUFYO0FBQ0E0QixTQUFLdXJCLE9BQUwsQ0FBYSxJQUFiO0FBQ0F0dEIsT0FBR0UsS0FBSCxDQUFTLElBQVQsRUFBZTZCLElBQWY7QUFDRCxHQUpEO0FBS0E7Ozs7Ozs7Ozs7OztBQVlBNFksT0FBSzBQLFNBQUwsR0FBaUIsVUFBVS9OLElBQVYsRUFBZ0JMLEtBQWhCLEVBQXVCcUQsUUFBdkIsRUFBaUM7QUFDaEQsUUFBSWlPLGlCQUFpQmo4QixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBckI7QUFBQSxRQUNJbWUsZUFBZWw4QixPQUFPQyxJQUFQLENBQVkrdEIsWUFBWSxFQUF4QixDQURuQjs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBSyxJQUFJL3JCLElBQUksQ0FBYixFQUFnQkEsSUFBSWk2QixhQUFhenZCLE1BQWpDLEVBQXlDeEssR0FBekMsRUFBOEM7QUFDNUMsVUFBSWUsTUFBTWs1QixhQUFhajZCLENBQWIsQ0FBVjtBQUNBZzZCLHFCQUFlajVCLEdBQWYsSUFBc0JnckIsU0FBU2hyQixHQUFULEVBQWMwQixLQUFkLEVBQXRCO0FBQ0Q7O0FBRUQsU0FBS3NwQixRQUFMLEdBQWdCaHVCLE9BQU8rZCxNQUFQLENBQWMsSUFBZCxDQUFoQjs7QUFFQSxRQUFJaU4sU0FBUzljLFNBQWIsRUFBd0I7QUFDdEIsV0FBSzhmLFFBQUwsQ0FBY2hELElBQWQsSUFBc0JockIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQXRCO0FBQ0EsV0FBS2lRLFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLElBQTZCc1IsY0FBN0I7QUFDRDtBQUNGLEdBcEJEOztBQXNCQTs7Ozs7Ozs7O0FBU0E1UyxPQUFLMFAsU0FBTCxDQUFlbDVCLFNBQWYsQ0FBeUI0NUIsT0FBekIsR0FBbUMsVUFBVTBDLGNBQVYsRUFBMEI7QUFDM0QsUUFBSXRFLFFBQVE3M0IsT0FBT0MsSUFBUCxDQUFZazhCLGVBQWVuTyxRQUEzQixDQUFaOztBQUVBLFNBQUssSUFBSS9yQixJQUFJLENBQWIsRUFBZ0JBLElBQUk0MUIsTUFBTXByQixNQUExQixFQUFrQ3hLLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUkrb0IsT0FBTzZNLE1BQU01MUIsQ0FBTixDQUFYO0FBQUEsVUFDSWkxQixTQUFTbDNCLE9BQU9DLElBQVAsQ0FBWWs4QixlQUFlbk8sUUFBZixDQUF3QmhELElBQXhCLENBQVosQ0FEYjs7QUFHQSxVQUFJLEtBQUtnRCxRQUFMLENBQWNoRCxJQUFkLEtBQXVCOWMsU0FBM0IsRUFBc0M7QUFDcEMsYUFBSzhmLFFBQUwsQ0FBY2hELElBQWQsSUFBc0JockIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQXRCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJMFIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJeUgsT0FBT3pxQixNQUEzQixFQUFtQ2dqQixHQUFuQyxFQUF3QztBQUN0QyxZQUFJOUUsUUFBUXVNLE9BQU96SCxDQUFQLENBQVo7QUFBQSxZQUNJeHZCLE9BQU9ELE9BQU9DLElBQVAsQ0FBWWs4QixlQUFlbk8sUUFBZixDQUF3QmhELElBQXhCLEVBQThCTCxLQUE5QixDQUFaLENBRFg7O0FBR0EsWUFBSSxLQUFLcUQsUUFBTCxDQUFjaEQsSUFBZCxFQUFvQkwsS0FBcEIsS0FBOEJ6YyxTQUFsQyxFQUE2QztBQUMzQyxlQUFLOGYsUUFBTCxDQUFjaEQsSUFBZCxFQUFvQkwsS0FBcEIsSUFBNkIzcUIsT0FBTytkLE1BQVAsQ0FBYyxJQUFkLENBQTdCO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJMlIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJenZCLEtBQUt3TSxNQUF6QixFQUFpQ2lqQixHQUFqQyxFQUFzQztBQUNwQyxjQUFJMXNCLE1BQU0vQyxLQUFLeXZCLENBQUwsQ0FBVjs7QUFFQSxjQUFJLEtBQUsxQixRQUFMLENBQWNoRCxJQUFkLEVBQW9CTCxLQUFwQixFQUEyQjNuQixHQUEzQixLQUFtQ2tMLFNBQXZDLEVBQWtEO0FBQ2hELGlCQUFLOGYsUUFBTCxDQUFjaEQsSUFBZCxFQUFvQkwsS0FBcEIsRUFBMkIzbkIsR0FBM0IsSUFBa0NtNUIsZUFBZW5PLFFBQWYsQ0FBd0JoRCxJQUF4QixFQUE4QkwsS0FBOUIsRUFBcUMzbkIsR0FBckMsQ0FBbEM7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS2dyQixRQUFMLENBQWNoRCxJQUFkLEVBQW9CTCxLQUFwQixFQUEyQjNuQixHQUEzQixJQUFrQyxLQUFLZ3JCLFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLEVBQTJCM25CLEdBQTNCLEVBQWdDNEIsTUFBaEMsQ0FBdUN1M0IsZUFBZW5PLFFBQWYsQ0FBd0JoRCxJQUF4QixFQUE4QkwsS0FBOUIsRUFBcUMzbkIsR0FBckMsQ0FBdkMsQ0FBbEM7QUFDRDtBQUVGO0FBQ0Y7QUFDRjtBQUNGLEdBL0JEOztBQWlDQTs7Ozs7OztBQU9BcW1CLE9BQUswUCxTQUFMLENBQWVsNUIsU0FBZixDQUF5QnVJLEdBQXpCLEdBQStCLFVBQVU0aUIsSUFBVixFQUFnQkwsS0FBaEIsRUFBdUJxRCxRQUF2QixFQUFpQztBQUM5RCxRQUFJLEVBQUVoRCxRQUFRLEtBQUtnRCxRQUFmLENBQUosRUFBOEI7QUFDNUIsV0FBS0EsUUFBTCxDQUFjaEQsSUFBZCxJQUFzQmhyQixPQUFPK2QsTUFBUCxDQUFjLElBQWQsQ0FBdEI7QUFDQSxXQUFLaVEsUUFBTCxDQUFjaEQsSUFBZCxFQUFvQkwsS0FBcEIsSUFBNkJxRCxRQUE3QjtBQUNBO0FBQ0Q7O0FBRUQsUUFBSSxFQUFFckQsU0FBUyxLQUFLcUQsUUFBTCxDQUFjaEQsSUFBZCxDQUFYLENBQUosRUFBcUM7QUFDbkMsV0FBS2dELFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLElBQTZCcUQsUUFBN0I7QUFDQTtBQUNEOztBQUVELFFBQUlrTyxlQUFlbDhCLE9BQU9DLElBQVAsQ0FBWSt0QixRQUFaLENBQW5COztBQUVBLFNBQUssSUFBSS9yQixJQUFJLENBQWIsRUFBZ0JBLElBQUlpNkIsYUFBYXp2QixNQUFqQyxFQUF5Q3hLLEdBQXpDLEVBQThDO0FBQzVDLFVBQUllLE1BQU1rNUIsYUFBYWo2QixDQUFiLENBQVY7O0FBRUEsVUFBSWUsT0FBTyxLQUFLZ3JCLFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLENBQVgsRUFBdUM7QUFDckMsYUFBS3FELFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLEVBQTJCM25CLEdBQTNCLElBQWtDLEtBQUtnckIsUUFBTCxDQUFjaEQsSUFBZCxFQUFvQkwsS0FBcEIsRUFBMkIzbkIsR0FBM0IsRUFBZ0M0QixNQUFoQyxDQUF1Q29wQixTQUFTaHJCLEdBQVQsQ0FBdkMsQ0FBbEM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZ3JCLFFBQUwsQ0FBY2hELElBQWQsRUFBb0JMLEtBQXBCLEVBQTJCM25CLEdBQTNCLElBQWtDZ3JCLFNBQVNockIsR0FBVCxDQUFsQztBQUNEO0FBQ0Y7QUFDRixHQXZCRDtBQXdCQTs7Ozs7Ozs7Ozs7QUFXQXFtQixPQUFLNkIsS0FBTCxHQUFhLFVBQVVrUixTQUFWLEVBQXFCO0FBQ2hDLFNBQUt4RSxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUt3RSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNELEdBSEQ7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQS9TLE9BQUs2QixLQUFMLENBQVdELFFBQVgsR0FBc0IsSUFBSWpMLE1BQUosQ0FBWSxHQUFaLENBQXRCO0FBQ0FxSixPQUFLNkIsS0FBTCxDQUFXRCxRQUFYLENBQW9Cb1IsSUFBcEIsR0FBMkIsQ0FBM0I7QUFDQWhULE9BQUs2QixLQUFMLENBQVdELFFBQVgsQ0FBb0JxUixPQUFwQixHQUE4QixDQUE5QjtBQUNBalQsT0FBSzZCLEtBQUwsQ0FBV0QsUUFBWCxDQUFvQkUsUUFBcEIsR0FBK0IsQ0FBL0I7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E5QixPQUFLNkIsS0FBTCxDQUFXZ04sUUFBWCxHQUFzQjtBQUNwQjs7O0FBR0FxRSxjQUFVLENBSlU7O0FBTXBCOzs7O0FBSUFwRSxjQUFVLENBVlU7O0FBWXBCOzs7O0FBSUFRLGdCQUFZOztBQUdkOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7QUFoQ3NCLEdBQXRCLENBMENBdFAsS0FBSzZCLEtBQUwsQ0FBV3JyQixTQUFYLENBQXFCMjBCLE1BQXJCLEdBQThCLFVBQVVBLE1BQVYsRUFBa0I7QUFDOUMsUUFBSSxFQUFFLFlBQVlBLE1BQWQsQ0FBSixFQUEyQjtBQUN6QkEsYUFBTzBDLE1BQVAsR0FBZ0IsS0FBS2tGLFNBQXJCO0FBQ0Q7O0FBRUQsUUFBSSxFQUFFLFdBQVc1SCxNQUFiLENBQUosRUFBMEI7QUFDeEJBLGFBQU81SixLQUFQLEdBQWUsQ0FBZjtBQUNEOztBQUVELFFBQUksRUFBRSxpQkFBaUI0SixNQUFuQixDQUFKLEVBQWdDO0FBQzlCQSxhQUFPdUQsV0FBUCxHQUFxQixJQUFyQjtBQUNEOztBQUVELFFBQUksRUFBRSxjQUFjdkQsTUFBaEIsQ0FBSixFQUE2QjtBQUMzQkEsYUFBT3ZKLFFBQVAsR0FBa0I1QixLQUFLNkIsS0FBTCxDQUFXRCxRQUFYLENBQW9Cb1IsSUFBdEM7QUFDRDs7QUFFRCxRQUFLN0gsT0FBT3ZKLFFBQVAsR0FBa0I1QixLQUFLNkIsS0FBTCxDQUFXRCxRQUFYLENBQW9CcVIsT0FBdkMsSUFBb0Q5SCxPQUFPeEosSUFBUCxDQUFZcUQsTUFBWixDQUFtQixDQUFuQixLQUF5QmhGLEtBQUs2QixLQUFMLENBQVdELFFBQTVGLEVBQXVHO0FBQ3JHdUosYUFBT3hKLElBQVAsR0FBYyxNQUFNd0osT0FBT3hKLElBQTNCO0FBQ0Q7O0FBRUQsUUFBS3dKLE9BQU92SixRQUFQLEdBQWtCNUIsS0FBSzZCLEtBQUwsQ0FBV0QsUUFBWCxDQUFvQkUsUUFBdkMsSUFBcURxSixPQUFPeEosSUFBUCxDQUFZdG1CLEtBQVosQ0FBa0IsQ0FBQyxDQUFuQixLQUF5QjJrQixLQUFLNkIsS0FBTCxDQUFXRCxRQUE3RixFQUF3RztBQUN0R3VKLGFBQU94SixJQUFQLEdBQWMsS0FBS3dKLE9BQU94SixJQUFaLEdBQW1CLEdBQWpDO0FBQ0Q7O0FBRUQsUUFBSSxFQUFFLGNBQWN3SixNQUFoQixDQUFKLEVBQTZCO0FBQzNCQSxhQUFPMEQsUUFBUCxHQUFrQjdPLEtBQUs2QixLQUFMLENBQVdnTixRQUFYLENBQW9CcUUsUUFBdEM7QUFDRDs7QUFFRCxTQUFLM0UsT0FBTCxDQUFhMTBCLElBQWIsQ0FBa0JzeEIsTUFBbEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsR0FoQ0Q7O0FBa0NBOzs7Ozs7O0FBT0FuTCxPQUFLNkIsS0FBTCxDQUFXcnJCLFNBQVgsQ0FBcUJ1NUIsU0FBckIsR0FBaUMsWUFBWTtBQUMzQyxTQUFLLElBQUluM0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsyMUIsT0FBTCxDQUFhbnJCLE1BQWpDLEVBQXlDeEssR0FBekMsRUFBOEM7QUFDNUMsVUFBSSxLQUFLMjFCLE9BQUwsQ0FBYTMxQixDQUFiLEVBQWdCaTJCLFFBQWhCLElBQTRCN08sS0FBSzZCLEtBQUwsQ0FBV2dOLFFBQVgsQ0FBb0JTLFVBQXBELEVBQWdFO0FBQzlELGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0FSRDs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkF0UCxPQUFLNkIsS0FBTCxDQUFXcnJCLFNBQVgsQ0FBcUJtckIsSUFBckIsR0FBNEIsVUFBVUEsSUFBVixFQUFnQnZwQixPQUFoQixFQUF5QjtBQUNuRCxRQUFJN0IsTUFBTVksT0FBTixDQUFjd3FCLElBQWQsQ0FBSixFQUF5QjtBQUN2QkEsV0FBS2xyQixPQUFMLENBQWEsVUFBVW11QixDQUFWLEVBQWE7QUFBRSxhQUFLakQsSUFBTCxDQUFVaUQsQ0FBVixFQUFhNUUsS0FBS2tELEtBQUwsQ0FBVy9vQixLQUFYLENBQWlCL0IsT0FBakIsQ0FBYjtBQUF5QyxPQUFyRSxFQUF1RSxJQUF2RTtBQUNBLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUkreUIsU0FBUy95QixXQUFXLEVBQXhCO0FBQ0EreUIsV0FBT3hKLElBQVAsR0FBY0EsS0FBS3ppQixRQUFMLEVBQWQ7O0FBRUEsU0FBS2lzQixNQUFMLENBQVlBLE1BQVo7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsR0FaRDtBQWFBbkwsT0FBS21ULGVBQUwsR0FBdUIsVUFBVTkwQixPQUFWLEVBQW1Cc29CLEtBQW5CLEVBQTBCaEksR0FBMUIsRUFBK0I7QUFDcEQsU0FBS3BSLElBQUwsR0FBWSxpQkFBWjtBQUNBLFNBQUtsUCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLc29CLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtoSSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxHQUxEOztBQU9BcUIsT0FBS21ULGVBQUwsQ0FBcUIzOEIsU0FBckIsR0FBaUMsSUFBSStOLEtBQUosRUFBakM7QUFDQXliLE9BQUtvVCxVQUFMLEdBQWtCLFVBQVV4USxHQUFWLEVBQWU7QUFDL0IsU0FBS3lRLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS3pRLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUt4ZixNQUFMLEdBQWN3ZixJQUFJeGYsTUFBbEI7QUFDQSxTQUFLNGlCLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS1csS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLMk0sbUJBQUwsR0FBMkIsRUFBM0I7QUFDRCxHQVBEOztBQVNBdFQsT0FBS29ULFVBQUwsQ0FBZ0I1OEIsU0FBaEIsQ0FBMEJrVCxHQUExQixHQUFnQyxZQUFZO0FBQzFDLFFBQUk2cEIsUUFBUXZULEtBQUtvVCxVQUFMLENBQWdCSSxPQUE1Qjs7QUFFQSxXQUFPRCxLQUFQLEVBQWM7QUFDWkEsY0FBUUEsTUFBTSxJQUFOLENBQVI7QUFDRDtBQUNGLEdBTkQ7O0FBUUF2VCxPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQmk5QixXQUExQixHQUF3QyxZQUFZO0FBQ2xELFFBQUlDLFlBQVksRUFBaEI7QUFBQSxRQUNJM08sYUFBYSxLQUFLNEIsS0FEdEI7QUFBQSxRQUVJN0IsV0FBVyxLQUFLa0IsR0FGcEI7O0FBSUEsU0FBSyxJQUFJcHRCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLMDZCLG1CQUFMLENBQXlCbHdCLE1BQTdDLEVBQXFEeEssR0FBckQsRUFBMEQ7QUFDeERrc0IsaUJBQVcsS0FBS3dPLG1CQUFMLENBQXlCMTZCLENBQXpCLENBQVg7QUFDQTg2QixnQkFBVTc1QixJQUFWLENBQWUsS0FBSytvQixHQUFMLENBQVN2bkIsS0FBVCxDQUFlMHBCLFVBQWYsRUFBMkJELFFBQTNCLENBQWY7QUFDQUMsbUJBQWFELFdBQVcsQ0FBeEI7QUFDRDs7QUFFRDRPLGNBQVU3NUIsSUFBVixDQUFlLEtBQUsrb0IsR0FBTCxDQUFTdm5CLEtBQVQsQ0FBZTBwQixVQUFmLEVBQTJCLEtBQUtpQixHQUFoQyxDQUFmO0FBQ0EsU0FBS3NOLG1CQUFMLENBQXlCbHdCLE1BQXpCLEdBQWtDLENBQWxDOztBQUVBLFdBQU9zd0IsVUFBVUMsSUFBVixDQUFlLEVBQWYsQ0FBUDtBQUNELEdBZkQ7O0FBaUJBM1QsT0FBS29ULFVBQUwsQ0FBZ0I1OEIsU0FBaEIsQ0FBMEIyVyxJQUExQixHQUFpQyxVQUFVNEYsSUFBVixFQUFnQjtBQUMvQyxTQUFLc2dCLE9BQUwsQ0FBYXg1QixJQUFiLENBQWtCO0FBQ2hCa1osWUFBTUEsSUFEVTtBQUVoQjZQLFdBQUssS0FBSzZRLFdBQUwsRUFGVztBQUdoQjlNLGFBQU8sS0FBS0EsS0FISTtBQUloQmhJLFdBQUssS0FBS3FIO0FBSk0sS0FBbEI7O0FBT0EsU0FBS1csS0FBTCxHQUFhLEtBQUtYLEdBQWxCO0FBQ0QsR0FURDs7QUFXQWhHLE9BQUtvVCxVQUFMLENBQWdCNThCLFNBQWhCLENBQTBCbzlCLGVBQTFCLEdBQTRDLFlBQVk7QUFDdEQsU0FBS04sbUJBQUwsQ0FBeUJ6NUIsSUFBekIsQ0FBOEIsS0FBS21zQixHQUFMLEdBQVcsQ0FBekM7QUFDQSxTQUFLQSxHQUFMLElBQVksQ0FBWjtBQUNELEdBSEQ7O0FBS0FoRyxPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQnkxQixJQUExQixHQUFpQyxZQUFZO0FBQzNDLFFBQUksS0FBS2pHLEdBQUwsSUFBWSxLQUFLNWlCLE1BQXJCLEVBQTZCO0FBQzNCLGFBQU80YyxLQUFLb1QsVUFBTCxDQUFnQlMsR0FBdkI7QUFDRDs7QUFFRCxRQUFJalQsT0FBTyxLQUFLZ0MsR0FBTCxDQUFTb0MsTUFBVCxDQUFnQixLQUFLZ0IsR0FBckIsQ0FBWDtBQUNBLFNBQUtBLEdBQUwsSUFBWSxDQUFaO0FBQ0EsV0FBT3BGLElBQVA7QUFDRCxHQVJEOztBQVVBWixPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQmtuQixLQUExQixHQUFrQyxZQUFZO0FBQzVDLFdBQU8sS0FBS3NJLEdBQUwsR0FBVyxLQUFLVyxLQUF2QjtBQUNELEdBRkQ7O0FBSUEzRyxPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQnM5QixNQUExQixHQUFtQyxZQUFZO0FBQzdDLFFBQUksS0FBS25OLEtBQUwsSUFBYyxLQUFLWCxHQUF2QixFQUE0QjtBQUMxQixXQUFLQSxHQUFMLElBQVksQ0FBWjtBQUNEOztBQUVELFNBQUtXLEtBQUwsR0FBYSxLQUFLWCxHQUFsQjtBQUNELEdBTkQ7O0FBUUFoRyxPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQnU5QixNQUExQixHQUFtQyxZQUFZO0FBQzdDLFNBQUsvTixHQUFMLElBQVksQ0FBWjtBQUNELEdBRkQ7O0FBSUFoRyxPQUFLb1QsVUFBTCxDQUFnQjU4QixTQUFoQixDQUEwQnc5QixjQUExQixHQUEyQyxZQUFZO0FBQ3JELFFBQUlwVCxJQUFKLEVBQVVxVCxRQUFWOztBQUVBLE9BQUc7QUFDRHJULGFBQU8sS0FBS3FMLElBQUwsRUFBUDtBQUNBZ0ksaUJBQVdyVCxLQUFLc1QsVUFBTCxDQUFnQixDQUFoQixDQUFYO0FBQ0QsS0FIRCxRQUdTRCxXQUFXLEVBQVgsSUFBaUJBLFdBQVcsRUFIckM7O0FBS0EsUUFBSXJULFFBQVFaLEtBQUtvVCxVQUFMLENBQWdCUyxHQUE1QixFQUFpQztBQUMvQixXQUFLRSxNQUFMO0FBQ0Q7QUFDRixHQVhEOztBQWFBL1QsT0FBS29ULFVBQUwsQ0FBZ0I1OEIsU0FBaEIsQ0FBMEIyOUIsSUFBMUIsR0FBaUMsWUFBWTtBQUMzQyxXQUFPLEtBQUtuTyxHQUFMLEdBQVcsS0FBSzVpQixNQUF2QjtBQUNELEdBRkQ7O0FBSUE0YyxPQUFLb1QsVUFBTCxDQUFnQlMsR0FBaEIsR0FBc0IsS0FBdEI7QUFDQTdULE9BQUtvVCxVQUFMLENBQWdCZ0IsS0FBaEIsR0FBd0IsT0FBeEI7QUFDQXBVLE9BQUtvVCxVQUFMLENBQWdCaUIsSUFBaEIsR0FBdUIsTUFBdkI7QUFDQXJVLE9BQUtvVCxVQUFMLENBQWdCa0IsYUFBaEIsR0FBZ0MsZUFBaEM7QUFDQXRVLE9BQUtvVCxVQUFMLENBQWdCbUIsS0FBaEIsR0FBd0IsT0FBeEI7QUFDQXZVLE9BQUtvVCxVQUFMLENBQWdCb0IsUUFBaEIsR0FBMkIsVUFBM0I7O0FBRUF4VSxPQUFLb1QsVUFBTCxDQUFnQnFCLFFBQWhCLEdBQTJCLFVBQVVDLEtBQVYsRUFBaUI7QUFDMUNBLFVBQU1YLE1BQU47QUFDQVcsVUFBTXZuQixJQUFOLENBQVc2UyxLQUFLb1QsVUFBTCxDQUFnQmdCLEtBQTNCO0FBQ0FNLFVBQU1aLE1BQU47QUFDQSxXQUFPOVQsS0FBS29ULFVBQUwsQ0FBZ0JJLE9BQXZCO0FBQ0QsR0FMRDs7QUFPQXhULE9BQUtvVCxVQUFMLENBQWdCdUIsT0FBaEIsR0FBMEIsVUFBVUQsS0FBVixFQUFpQjtBQUN6QyxRQUFJQSxNQUFNaFgsS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNyQmdYLFlBQU1YLE1BQU47QUFDQVcsWUFBTXZuQixJQUFOLENBQVc2UyxLQUFLb1QsVUFBTCxDQUFnQmlCLElBQTNCO0FBQ0Q7O0FBRURLLFVBQU1aLE1BQU47O0FBRUEsUUFBSVksTUFBTVAsSUFBTixFQUFKLEVBQWtCO0FBQ2hCLGFBQU9uVSxLQUFLb1QsVUFBTCxDQUFnQkksT0FBdkI7QUFDRDtBQUNGLEdBWEQ7O0FBYUF4VCxPQUFLb1QsVUFBTCxDQUFnQndCLGVBQWhCLEdBQWtDLFVBQVVGLEtBQVYsRUFBaUI7QUFDakRBLFVBQU1aLE1BQU47QUFDQVksVUFBTVYsY0FBTjtBQUNBVSxVQUFNdm5CLElBQU4sQ0FBVzZTLEtBQUtvVCxVQUFMLENBQWdCa0IsYUFBM0I7QUFDQSxXQUFPdFUsS0FBS29ULFVBQUwsQ0FBZ0JJLE9BQXZCO0FBQ0QsR0FMRDs7QUFPQXhULE9BQUtvVCxVQUFMLENBQWdCeUIsUUFBaEIsR0FBMkIsVUFBVUgsS0FBVixFQUFpQjtBQUMxQ0EsVUFBTVosTUFBTjtBQUNBWSxVQUFNVixjQUFOO0FBQ0FVLFVBQU12bkIsSUFBTixDQUFXNlMsS0FBS29ULFVBQUwsQ0FBZ0JtQixLQUEzQjtBQUNBLFdBQU92VSxLQUFLb1QsVUFBTCxDQUFnQkksT0FBdkI7QUFDRCxHQUxEOztBQU9BeFQsT0FBS29ULFVBQUwsQ0FBZ0IwQixNQUFoQixHQUF5QixVQUFVSixLQUFWLEVBQWlCO0FBQ3hDLFFBQUlBLE1BQU1oWCxLQUFOLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCZ1gsWUFBTXZuQixJQUFOLENBQVc2UyxLQUFLb1QsVUFBTCxDQUFnQmlCLElBQTNCO0FBQ0Q7QUFDRixHQUpEOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXJVLE9BQUtvVCxVQUFMLENBQWdCMkIsYUFBaEIsR0FBZ0MvVSxLQUFLRCxTQUFMLENBQWVFLFNBQS9DOztBQUVBRCxPQUFLb1QsVUFBTCxDQUFnQkksT0FBaEIsR0FBMEIsVUFBVWtCLEtBQVYsRUFBaUI7QUFDekMsV0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFJOVQsT0FBTzhULE1BQU16SSxJQUFOLEVBQVg7O0FBRUEsVUFBSXJMLFFBQVFaLEtBQUtvVCxVQUFMLENBQWdCUyxHQUE1QixFQUFpQztBQUMvQixlQUFPN1QsS0FBS29ULFVBQUwsQ0FBZ0IwQixNQUF2QjtBQUNEOztBQUVEO0FBQ0EsVUFBSWxVLEtBQUtzVCxVQUFMLENBQWdCLENBQWhCLEtBQXNCLEVBQTFCLEVBQThCO0FBQzVCUSxjQUFNZCxlQUFOO0FBQ0E7QUFDRDs7QUFFRCxVQUFJaFQsUUFBUSxHQUFaLEVBQWlCO0FBQ2YsZUFBT1osS0FBS29ULFVBQUwsQ0FBZ0JxQixRQUF2QjtBQUNEOztBQUVELFVBQUk3VCxRQUFRLEdBQVosRUFBaUI7QUFDZjhULGNBQU1YLE1BQU47QUFDQSxZQUFJVyxNQUFNaFgsS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNyQmdYLGdCQUFNdm5CLElBQU4sQ0FBVzZTLEtBQUtvVCxVQUFMLENBQWdCaUIsSUFBM0I7QUFDRDtBQUNELGVBQU9yVSxLQUFLb1QsVUFBTCxDQUFnQndCLGVBQXZCO0FBQ0Q7O0FBRUQsVUFBSWhVLFFBQVEsR0FBWixFQUFpQjtBQUNmOFQsY0FBTVgsTUFBTjtBQUNBLFlBQUlXLE1BQU1oWCxLQUFOLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCZ1gsZ0JBQU12bkIsSUFBTixDQUFXNlMsS0FBS29ULFVBQUwsQ0FBZ0JpQixJQUEzQjtBQUNEO0FBQ0QsZUFBT3JVLEtBQUtvVCxVQUFMLENBQWdCeUIsUUFBdkI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxVQUFJalUsUUFBUSxHQUFSLElBQWU4VCxNQUFNaFgsS0FBTixPQUFrQixDQUFyQyxFQUF3QztBQUN0Q2dYLGNBQU12bkIsSUFBTixDQUFXNlMsS0FBS29ULFVBQUwsQ0FBZ0JvQixRQUEzQjtBQUNBLGVBQU94VSxLQUFLb1QsVUFBTCxDQUFnQkksT0FBdkI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxVQUFJNVMsUUFBUSxHQUFSLElBQWU4VCxNQUFNaFgsS0FBTixPQUFrQixDQUFyQyxFQUF3QztBQUN0Q2dYLGNBQU12bkIsSUFBTixDQUFXNlMsS0FBS29ULFVBQUwsQ0FBZ0JvQixRQUEzQjtBQUNBLGVBQU94VSxLQUFLb1QsVUFBTCxDQUFnQkksT0FBdkI7QUFDRDs7QUFFRCxVQUFJNVMsS0FBS3ZqQixLQUFMLENBQVcyaUIsS0FBS29ULFVBQUwsQ0FBZ0IyQixhQUEzQixDQUFKLEVBQStDO0FBQzdDLGVBQU8vVSxLQUFLb1QsVUFBTCxDQUFnQnVCLE9BQXZCO0FBQ0Q7QUFDRjtBQUNGLEdBdEREOztBQXdEQTNVLE9BQUtpTyxXQUFMLEdBQW1CLFVBQVVyTCxHQUFWLEVBQWU3Z0IsS0FBZixFQUFzQjtBQUN2QyxTQUFLMnlCLEtBQUwsR0FBYSxJQUFJMVUsS0FBS29ULFVBQVQsQ0FBcUJ4USxHQUFyQixDQUFiO0FBQ0EsU0FBSzdnQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLaXpCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0QsR0FMRDs7QUFPQWpWLE9BQUtpTyxXQUFMLENBQWlCejNCLFNBQWpCLENBQTJCaUUsS0FBM0IsR0FBbUMsWUFBWTtBQUM3QyxTQUFLaTZCLEtBQUwsQ0FBV2hyQixHQUFYO0FBQ0EsU0FBSzJwQixPQUFMLEdBQWUsS0FBS3FCLEtBQUwsQ0FBV3JCLE9BQTFCOztBQUVBLFFBQUlFLFFBQVF2VCxLQUFLaU8sV0FBTCxDQUFpQmlILFdBQTdCOztBQUVBLFdBQU8zQixLQUFQLEVBQWM7QUFDWkEsY0FBUUEsTUFBTSxJQUFOLENBQVI7QUFDRDs7QUFFRCxXQUFPLEtBQUt4eEIsS0FBWjtBQUNELEdBWEQ7O0FBYUFpZSxPQUFLaU8sV0FBTCxDQUFpQnozQixTQUFqQixDQUEyQjIrQixVQUEzQixHQUF3QyxZQUFZO0FBQ2xELFdBQU8sS0FBSzlCLE9BQUwsQ0FBYSxLQUFLNEIsU0FBbEIsQ0FBUDtBQUNELEdBRkQ7O0FBSUFqVixPQUFLaU8sV0FBTCxDQUFpQnozQixTQUFqQixDQUEyQjQrQixhQUEzQixHQUEyQyxZQUFZO0FBQ3JELFFBQUlDLFNBQVMsS0FBS0YsVUFBTCxFQUFiO0FBQ0EsU0FBS0YsU0FBTCxJQUFrQixDQUFsQjtBQUNBLFdBQU9JLE1BQVA7QUFDRCxHQUpEOztBQU1BclYsT0FBS2lPLFdBQUwsQ0FBaUJ6M0IsU0FBakIsQ0FBMkI4K0IsVUFBM0IsR0FBd0MsWUFBWTtBQUNsRCxRQUFJQyxrQkFBa0IsS0FBS1AsYUFBM0I7QUFDQSxTQUFLanpCLEtBQUwsQ0FBV29wQixNQUFYLENBQWtCb0ssZUFBbEI7QUFDQSxTQUFLUCxhQUFMLEdBQXFCLEVBQXJCO0FBQ0QsR0FKRDs7QUFNQWhWLE9BQUtpTyxXQUFMLENBQWlCaUgsV0FBakIsR0FBK0IsVUFBVWxILE1BQVYsRUFBa0I7QUFDL0MsUUFBSXFILFNBQVNySCxPQUFPbUgsVUFBUCxFQUFiOztBQUVBLFFBQUlFLFVBQVV4d0IsU0FBZCxFQUF5QjtBQUN2QjtBQUNEOztBQUVELFlBQVF3d0IsT0FBT3RpQixJQUFmO0FBQ0UsV0FBS2lOLEtBQUtvVCxVQUFMLENBQWdCb0IsUUFBckI7QUFDRSxlQUFPeFUsS0FBS2lPLFdBQUwsQ0FBaUJ1SCxhQUF4QjtBQUNGLFdBQUt4VixLQUFLb1QsVUFBTCxDQUFnQmdCLEtBQXJCO0FBQ0UsZUFBT3BVLEtBQUtpTyxXQUFMLENBQWlCd0gsVUFBeEI7QUFDRixXQUFLelYsS0FBS29ULFVBQUwsQ0FBZ0JpQixJQUFyQjtBQUNFLGVBQU9yVSxLQUFLaU8sV0FBTCxDQUFpQnlILFNBQXhCO0FBQ0Y7QUFDRSxZQUFJQyxlQUFlLDhDQUE4Q04sT0FBT3RpQixJQUF4RTs7QUFFQSxZQUFJc2lCLE9BQU96UyxHQUFQLENBQVd4ZixNQUFYLElBQXFCLENBQXpCLEVBQTRCO0FBQzFCdXlCLDBCQUFnQixrQkFBa0JOLE9BQU96UyxHQUF6QixHQUErQixHQUEvQztBQUNEOztBQUVELGNBQU0sSUFBSTVDLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NOLE9BQU8xTyxLQUEvQyxFQUFzRDBPLE9BQU8xVyxHQUE3RCxDQUFOO0FBZEo7QUFnQkQsR0F2QkQ7O0FBeUJBcUIsT0FBS2lPLFdBQUwsQ0FBaUJ1SCxhQUFqQixHQUFpQyxVQUFVeEgsTUFBVixFQUFrQjtBQUNqRCxRQUFJcUgsU0FBU3JILE9BQU9vSCxhQUFQLEVBQWI7O0FBRUEsUUFBSUMsVUFBVXh3QixTQUFkLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsWUFBUXd3QixPQUFPelMsR0FBZjtBQUNFLFdBQUssR0FBTDtBQUNFb0wsZUFBT2dILGFBQVAsQ0FBcUJuRyxRQUFyQixHQUFnQzdPLEtBQUs2QixLQUFMLENBQVdnTixRQUFYLENBQW9CUyxVQUFwRDtBQUNBO0FBQ0YsV0FBSyxHQUFMO0FBQ0V0QixlQUFPZ0gsYUFBUCxDQUFxQm5HLFFBQXJCLEdBQWdDN08sS0FBSzZCLEtBQUwsQ0FBV2dOLFFBQVgsQ0FBb0JDLFFBQXBEO0FBQ0E7QUFDRjtBQUNFLFlBQUk2RyxlQUFlLG9DQUFvQ04sT0FBT3pTLEdBQTNDLEdBQWlELEdBQXBFO0FBQ0EsY0FBTSxJQUFJNUMsS0FBS21ULGVBQVQsQ0FBMEJ3QyxZQUExQixFQUF3Q04sT0FBTzFPLEtBQS9DLEVBQXNEME8sT0FBTzFXLEdBQTdELENBQU47QUFUSjs7QUFZQSxRQUFJaVgsYUFBYTVILE9BQU9tSCxVQUFQLEVBQWpCOztBQUVBLFFBQUlTLGNBQWMvd0IsU0FBbEIsRUFBNkI7QUFDM0IsVUFBSTh3QixlQUFlLHdDQUFuQjtBQUNBLFlBQU0sSUFBSTNWLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NOLE9BQU8xTyxLQUEvQyxFQUFzRDBPLE9BQU8xVyxHQUE3RCxDQUFOO0FBQ0Q7O0FBRUQsWUFBUWlYLFdBQVc3aUIsSUFBbkI7QUFDRSxXQUFLaU4sS0FBS29ULFVBQUwsQ0FBZ0JnQixLQUFyQjtBQUNFLGVBQU9wVSxLQUFLaU8sV0FBTCxDQUFpQndILFVBQXhCO0FBQ0YsV0FBS3pWLEtBQUtvVCxVQUFMLENBQWdCaUIsSUFBckI7QUFDRSxlQUFPclUsS0FBS2lPLFdBQUwsQ0FBaUJ5SCxTQUF4QjtBQUNGO0FBQ0UsWUFBSUMsZUFBZSxxQ0FBcUNDLFdBQVc3aUIsSUFBaEQsR0FBdUQsR0FBMUU7QUFDQSxjQUFNLElBQUlpTixLQUFLbVQsZUFBVCxDQUEwQndDLFlBQTFCLEVBQXdDQyxXQUFXalAsS0FBbkQsRUFBMERpUCxXQUFXalgsR0FBckUsQ0FBTjtBQVBKO0FBU0QsR0FuQ0Q7O0FBcUNBcUIsT0FBS2lPLFdBQUwsQ0FBaUJ3SCxVQUFqQixHQUE4QixVQUFVekgsTUFBVixFQUFrQjtBQUM5QyxRQUFJcUgsU0FBU3JILE9BQU9vSCxhQUFQLEVBQWI7O0FBRUEsUUFBSUMsVUFBVXh3QixTQUFkLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsUUFBSW1wQixPQUFPanNCLEtBQVAsQ0FBYWd4QixTQUFiLENBQXVCbHdCLE9BQXZCLENBQStCd3lCLE9BQU96UyxHQUF0QyxLQUE4QyxDQUFDLENBQW5ELEVBQXNEO0FBQ3BELFVBQUlpVCxpQkFBaUI3SCxPQUFPanNCLEtBQVAsQ0FBYWd4QixTQUFiLENBQXVCbnhCLEdBQXZCLENBQTJCLFVBQVVrMEIsQ0FBVixFQUFhO0FBQUUsZUFBTyxNQUFNQSxDQUFOLEdBQVUsR0FBakI7QUFBc0IsT0FBaEUsRUFBa0VuQyxJQUFsRSxDQUF1RSxJQUF2RSxDQUFyQjtBQUFBLFVBQ0lnQyxlQUFlLHlCQUF5Qk4sT0FBT3pTLEdBQWhDLEdBQXNDLHNCQUF0QyxHQUErRGlULGNBRGxGOztBQUdBLFlBQU0sSUFBSTdWLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NOLE9BQU8xTyxLQUEvQyxFQUFzRDBPLE9BQU8xVyxHQUE3RCxDQUFOO0FBQ0Q7O0FBRURxUCxXQUFPZ0gsYUFBUCxDQUFxQm5ILE1BQXJCLEdBQThCLENBQUN3SCxPQUFPelMsR0FBUixDQUE5Qjs7QUFFQSxRQUFJZ1QsYUFBYTVILE9BQU9tSCxVQUFQLEVBQWpCOztBQUVBLFFBQUlTLGNBQWMvd0IsU0FBbEIsRUFBNkI7QUFDM0IsVUFBSTh3QixlQUFlLCtCQUFuQjtBQUNBLFlBQU0sSUFBSTNWLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NOLE9BQU8xTyxLQUEvQyxFQUFzRDBPLE9BQU8xVyxHQUE3RCxDQUFOO0FBQ0Q7O0FBRUQsWUFBUWlYLFdBQVc3aUIsSUFBbkI7QUFDRSxXQUFLaU4sS0FBS29ULFVBQUwsQ0FBZ0JpQixJQUFyQjtBQUNFLGVBQU9yVSxLQUFLaU8sV0FBTCxDQUFpQnlILFNBQXhCO0FBQ0Y7QUFDRSxZQUFJQyxlQUFlLDRCQUE0QkMsV0FBVzdpQixJQUF2QyxHQUE4QyxHQUFqRTtBQUNBLGNBQU0sSUFBSWlOLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NDLFdBQVdqUCxLQUFuRCxFQUEwRGlQLFdBQVdqWCxHQUFyRSxDQUFOO0FBTEo7QUFPRCxHQTlCRDs7QUFnQ0FxQixPQUFLaU8sV0FBTCxDQUFpQnlILFNBQWpCLEdBQTZCLFVBQVUxSCxNQUFWLEVBQWtCO0FBQzdDLFFBQUlxSCxTQUFTckgsT0FBT29ILGFBQVAsRUFBYjs7QUFFQSxRQUFJQyxVQUFVeHdCLFNBQWQsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRG1wQixXQUFPZ0gsYUFBUCxDQUFxQnJULElBQXJCLEdBQTRCMFQsT0FBT3pTLEdBQVAsQ0FBVzlvQixXQUFYLEVBQTVCOztBQUVBLFFBQUl1N0IsT0FBT3pTLEdBQVAsQ0FBVy9mLE9BQVgsQ0FBbUIsR0FBbkIsS0FBMkIsQ0FBQyxDQUFoQyxFQUFtQztBQUNqQ21yQixhQUFPZ0gsYUFBUCxDQUFxQnRHLFdBQXJCLEdBQW1DLEtBQW5DO0FBQ0Q7O0FBRUQsUUFBSWtILGFBQWE1SCxPQUFPbUgsVUFBUCxFQUFqQjs7QUFFQSxRQUFJUyxjQUFjL3dCLFNBQWxCLEVBQTZCO0FBQzNCbXBCLGFBQU9zSCxVQUFQO0FBQ0E7QUFDRDs7QUFFRCxZQUFRTSxXQUFXN2lCLElBQW5CO0FBQ0UsV0FBS2lOLEtBQUtvVCxVQUFMLENBQWdCaUIsSUFBckI7QUFDRXJHLGVBQU9zSCxVQUFQO0FBQ0EsZUFBT3RWLEtBQUtpTyxXQUFMLENBQWlCeUgsU0FBeEI7QUFDRixXQUFLMVYsS0FBS29ULFVBQUwsQ0FBZ0JnQixLQUFyQjtBQUNFcEcsZUFBT3NILFVBQVA7QUFDQSxlQUFPdFYsS0FBS2lPLFdBQUwsQ0FBaUJ3SCxVQUF4QjtBQUNGLFdBQUt6VixLQUFLb1QsVUFBTCxDQUFnQmtCLGFBQXJCO0FBQ0UsZUFBT3RVLEtBQUtpTyxXQUFMLENBQWlCOEgsaUJBQXhCO0FBQ0YsV0FBSy9WLEtBQUtvVCxVQUFMLENBQWdCbUIsS0FBckI7QUFDRSxlQUFPdlUsS0FBS2lPLFdBQUwsQ0FBaUIrSCxVQUF4QjtBQUNGLFdBQUtoVyxLQUFLb1QsVUFBTCxDQUFnQm9CLFFBQXJCO0FBQ0V4RyxlQUFPc0gsVUFBUDtBQUNBLGVBQU90VixLQUFLaU8sV0FBTCxDQUFpQnVILGFBQXhCO0FBQ0Y7QUFDRSxZQUFJRyxlQUFlLDZCQUE2QkMsV0FBVzdpQixJQUF4QyxHQUErQyxHQUFsRTtBQUNBLGNBQU0sSUFBSWlOLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NDLFdBQVdqUCxLQUFuRCxFQUEwRGlQLFdBQVdqWCxHQUFyRSxDQUFOO0FBaEJKO0FBa0JELEdBdENEOztBQXdDQXFCLE9BQUtpTyxXQUFMLENBQWlCOEgsaUJBQWpCLEdBQXFDLFVBQVUvSCxNQUFWLEVBQWtCO0FBQ3JELFFBQUlxSCxTQUFTckgsT0FBT29ILGFBQVAsRUFBYjs7QUFFQSxRQUFJQyxVQUFVeHdCLFNBQWQsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFJd21CLGVBQWV4c0IsU0FBU3cyQixPQUFPelMsR0FBaEIsRUFBcUIsRUFBckIsQ0FBbkI7O0FBRUEsUUFBSXFULE1BQU01SyxZQUFOLENBQUosRUFBeUI7QUFDdkIsVUFBSXNLLGVBQWUsK0JBQW5CO0FBQ0EsWUFBTSxJQUFJM1YsS0FBS21ULGVBQVQsQ0FBMEJ3QyxZQUExQixFQUF3Q04sT0FBTzFPLEtBQS9DLEVBQXNEME8sT0FBTzFXLEdBQTdELENBQU47QUFDRDs7QUFFRHFQLFdBQU9nSCxhQUFQLENBQXFCM0osWUFBckIsR0FBb0NBLFlBQXBDOztBQUVBLFFBQUl1SyxhQUFhNUgsT0FBT21ILFVBQVAsRUFBakI7O0FBRUEsUUFBSVMsY0FBYy93QixTQUFsQixFQUE2QjtBQUMzQm1wQixhQUFPc0gsVUFBUDtBQUNBO0FBQ0Q7O0FBRUQsWUFBUU0sV0FBVzdpQixJQUFuQjtBQUNFLFdBQUtpTixLQUFLb1QsVUFBTCxDQUFnQmlCLElBQXJCO0FBQ0VyRyxlQUFPc0gsVUFBUDtBQUNBLGVBQU90VixLQUFLaU8sV0FBTCxDQUFpQnlILFNBQXhCO0FBQ0YsV0FBSzFWLEtBQUtvVCxVQUFMLENBQWdCZ0IsS0FBckI7QUFDRXBHLGVBQU9zSCxVQUFQO0FBQ0EsZUFBT3RWLEtBQUtpTyxXQUFMLENBQWlCd0gsVUFBeEI7QUFDRixXQUFLelYsS0FBS29ULFVBQUwsQ0FBZ0JrQixhQUFyQjtBQUNFLGVBQU90VSxLQUFLaU8sV0FBTCxDQUFpQjhILGlCQUF4QjtBQUNGLFdBQUsvVixLQUFLb1QsVUFBTCxDQUFnQm1CLEtBQXJCO0FBQ0UsZUFBT3ZVLEtBQUtpTyxXQUFMLENBQWlCK0gsVUFBeEI7QUFDRixXQUFLaFcsS0FBS29ULFVBQUwsQ0FBZ0JvQixRQUFyQjtBQUNFeEcsZUFBT3NILFVBQVA7QUFDQSxlQUFPdFYsS0FBS2lPLFdBQUwsQ0FBaUJ1SCxhQUF4QjtBQUNGO0FBQ0UsWUFBSUcsZUFBZSw2QkFBNkJDLFdBQVc3aUIsSUFBeEMsR0FBK0MsR0FBbEU7QUFDQSxjQUFNLElBQUlpTixLQUFLbVQsZUFBVCxDQUEwQndDLFlBQTFCLEVBQXdDQyxXQUFXalAsS0FBbkQsRUFBMERpUCxXQUFXalgsR0FBckUsQ0FBTjtBQWhCSjtBQWtCRCxHQXpDRDs7QUEyQ0FxQixPQUFLaU8sV0FBTCxDQUFpQitILFVBQWpCLEdBQThCLFVBQVVoSSxNQUFWLEVBQWtCO0FBQzlDLFFBQUlxSCxTQUFTckgsT0FBT29ILGFBQVAsRUFBYjs7QUFFQSxRQUFJQyxVQUFVeHdCLFNBQWQsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFJMGMsUUFBUTFpQixTQUFTdzJCLE9BQU96UyxHQUFoQixFQUFxQixFQUFyQixDQUFaOztBQUVBLFFBQUlxVCxNQUFNMVUsS0FBTixDQUFKLEVBQWtCO0FBQ2hCLFVBQUlvVSxlQUFlLHVCQUFuQjtBQUNBLFlBQU0sSUFBSTNWLEtBQUttVCxlQUFULENBQTBCd0MsWUFBMUIsRUFBd0NOLE9BQU8xTyxLQUEvQyxFQUFzRDBPLE9BQU8xVyxHQUE3RCxDQUFOO0FBQ0Q7O0FBRURxUCxXQUFPZ0gsYUFBUCxDQUFxQnpULEtBQXJCLEdBQTZCQSxLQUE3Qjs7QUFFQSxRQUFJcVUsYUFBYTVILE9BQU9tSCxVQUFQLEVBQWpCOztBQUVBLFFBQUlTLGNBQWMvd0IsU0FBbEIsRUFBNkI7QUFDM0JtcEIsYUFBT3NILFVBQVA7QUFDQTtBQUNEOztBQUVELFlBQVFNLFdBQVc3aUIsSUFBbkI7QUFDRSxXQUFLaU4sS0FBS29ULFVBQUwsQ0FBZ0JpQixJQUFyQjtBQUNFckcsZUFBT3NILFVBQVA7QUFDQSxlQUFPdFYsS0FBS2lPLFdBQUwsQ0FBaUJ5SCxTQUF4QjtBQUNGLFdBQUsxVixLQUFLb1QsVUFBTCxDQUFnQmdCLEtBQXJCO0FBQ0VwRyxlQUFPc0gsVUFBUDtBQUNBLGVBQU90VixLQUFLaU8sV0FBTCxDQUFpQndILFVBQXhCO0FBQ0YsV0FBS3pWLEtBQUtvVCxVQUFMLENBQWdCa0IsYUFBckI7QUFDRSxlQUFPdFUsS0FBS2lPLFdBQUwsQ0FBaUI4SCxpQkFBeEI7QUFDRixXQUFLL1YsS0FBS29ULFVBQUwsQ0FBZ0JtQixLQUFyQjtBQUNFLGVBQU92VSxLQUFLaU8sV0FBTCxDQUFpQitILFVBQXhCO0FBQ0YsV0FBS2hXLEtBQUtvVCxVQUFMLENBQWdCb0IsUUFBckI7QUFDRXhHLGVBQU9zSCxVQUFQO0FBQ0EsZUFBT3RWLEtBQUtpTyxXQUFMLENBQWlCdUgsYUFBeEI7QUFDRjtBQUNFLFlBQUlHLGVBQWUsNkJBQTZCQyxXQUFXN2lCLElBQXhDLEdBQStDLEdBQWxFO0FBQ0EsY0FBTSxJQUFJaU4sS0FBS21ULGVBQVQsQ0FBMEJ3QyxZQUExQixFQUF3Q0MsV0FBV2pQLEtBQW5ELEVBQTBEaVAsV0FBV2pYLEdBQXJFLENBQU47QUFoQko7QUFrQkQ7O0FBRUM7Ozs7QUEzQ0YsR0ErQ0ksV0FBVTVRLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3pCLFFBQUksSUFBSixFQUFnRDtBQUM5QztBQUNBQywwQ0FBT0QsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsS0FIRCxNQUdPLElBQUksUUFBT2pXLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBdkIsRUFBaUM7QUFDdEM7Ozs7O0FBS0FELGFBQU9DLE9BQVAsR0FBaUJpVyxTQUFqQjtBQUNELEtBUE0sTUFPQTtBQUNMO0FBQ0FELFdBQUtpUyxJQUFMLEdBQVloUyxTQUFaO0FBQ0Q7QUFDRixHQWZDLEVBZUEsSUFmQSxFQWVNLFlBQVk7QUFDbEI7Ozs7O0FBS0EsV0FBT2dTLElBQVA7QUFDRCxHQXRCQyxDQUFEO0FBdUJGLENBcjVHQSxJOzs7Ozs7Ozs7OztBQ2dCRDs7Ozs7O0FBRUE7Ozs7a0JBSWU7QUFDYnBmO0FBRGEsQyxFQTVCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7SUFJcUJBLFE7O0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxvQkFBWXZLLEVBQVosRUFBZ0JrRCxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixRQUFJa1AsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDTkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURNLEdBRU5BLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlM0wsV0FBakIsS0FDQSxFQUFFMkwsSUFBSS9LLFVBQUosWUFBMEJaLFdBQTVCLENBREosRUFFRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUs0Z0IsR0FBTCxHQUFXM1UsR0FBWDtBQUNBLFNBQUt5dEIsT0FBTCxHQUFlenRCLElBQUkvSyxVQUFuQjs7QUFFQTtBQUNBK0ssVUFBTyxPQUFPbFAsTUFBUCxLQUFrQixRQUFuQixHQUNGakQsU0FBU2tJLGFBQVQsQ0FBdUJqRixNQUF2QixDQURFLEdBRUZBLE1BRko7QUFHQSxRQUFJLEVBQUVrUCxlQUFlM0wsV0FBakIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsU0FBSzZnQixPQUFMLEdBQWU1VSxHQUFmOztBQUVBO0FBQ0EsU0FBSzZVLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBSzZZLElBQUwsR0FBWXQrQixPQUFPdStCLGdCQUFQLENBQXdCLEtBQUsvWSxPQUE3QixFQUFzQ3RMLFFBQXRDLEtBQW1ELE9BQS9EO0FBQ0Q7O0FBRUQ7Ozs7O3FCQUdBL1YsSyxvQkFBUTtBQUNOLFFBQU1pRSxNQUFNMUosTUFBTUMsU0FBTixDQUFnQjBuQixNQUFoQixDQUF1QnhuQixJQUF2QixDQUNWLEtBQUt3L0IsT0FBTCxDQUFhMStCLFFBREgsRUFDYSxVQUFDNG1CLE1BQUQsRUFBU2dQLEtBQVQsRUFBbUI7QUFDeEMsYUFBT2xxQixLQUFLQyxHQUFMLENBQVNpYixNQUFULEVBQWlCZ1AsTUFBTXhQLFNBQXZCLENBQVA7QUFDRCxLQUhTLEVBR1AsQ0FITyxDQUFaOztBQUtBO0FBQ0EsU0FBS0csT0FBTCxHQUFlOWQsT0FBTyxLQUFLazJCLElBQUwsR0FBWSxLQUFLOVksT0FBTCxDQUFhbGQsWUFBekIsR0FBd0MsQ0FBL0MsQ0FBZjtBQUNBLFNBQUsxRSxNQUFMO0FBQ0QsRzs7QUFFRDs7Ozs7Ozs7Ozs7OztxQkFXQUEsTSxtQkFBT0csRSxFQUFJO0FBQ1QsUUFBTXdpQixTQUFVdm1CLE9BQU9vYSxXQUF2QjtBQUNBLFFBQU1va0IsVUFBVXgrQixPQUFPeStCLFdBQXZCOztBQUVBO0FBQ0EsUUFBSTE2QixNQUFNQSxHQUFHbVgsSUFBSCxLQUFZLFFBQXRCLEVBQ0UsS0FBSy9XLEtBQUw7O0FBRUY7O0FBRUEsUUFBTXU2QixTQUFTO0FBQ2J0MkIsV0FBSyxLQUFLazJCLElBQUwsR0FBWSxLQUFLOVksT0FBTCxDQUFhbGQsWUFBekIsR0FBd0MsQ0FEaEM7QUFFYnEyQixjQUFRLEtBQUtOLE9BQUwsQ0FBYXRZLFNBQWIsR0FBeUIsS0FBS3NZLE9BQUwsQ0FBYS8xQjs7QUFHaEQ7QUFMZSxLQUFmLENBTUEsSUFBTW1lLFNBQVMrWCxVQUFVRSxPQUFPdDJCLEdBQWpCLEdBQ0FpRCxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUs0YSxPQUFMLEdBQWVLLE1BQTNCLENBREEsR0FFQWxiLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVlpYixTQUFTaVksT0FBVCxHQUFtQkUsT0FBT0MsTUFBdEMsQ0FGZjs7QUFJQTtBQUNBLFFBQUlsWSxXQUFXLEtBQUtoQixPQUFwQixFQUNFLEtBQUtGLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZTRNLE1BQWYsSUFBMkIsS0FBS2hCLE9BQUwsR0FBZWdCLE1BQTFDOztBQUVGO0FBQ0EsUUFBSUYsVUFBVSxLQUFLTCxPQUFuQixFQUE0QjtBQUMxQixVQUFJLEtBQUtYLEdBQUwsQ0FBUzFlLE9BQVQsQ0FBaUJ1RSxPQUFqQixLQUE2QixNQUFqQyxFQUNFLEtBQUttYSxHQUFMLENBQVMxZSxPQUFULENBQWlCdUUsT0FBakIsR0FBMkIsTUFBM0I7O0FBRUo7QUFDQyxLQUxELE1BS08sSUFBSSxLQUFLbWEsR0FBTCxDQUFTMWUsT0FBVCxDQUFpQnVFLE9BQWpCLEtBQTZCLE1BQWpDLEVBQXlDO0FBQzlDLFdBQUttYSxHQUFMLENBQVMxZSxPQUFULENBQWlCdUUsT0FBakIsR0FBMkIsRUFBM0I7QUFDRDtBQUNGLEc7O0FBRUQ7Ozs7O3FCQUdBOUcsSyxvQkFBUTtBQUNOLFNBQUtpaEIsR0FBTCxDQUFTMWUsT0FBVCxDQUFpQnVFLE9BQWpCLEdBQTJCLEVBQTNCO0FBQ0EsU0FBS21hLEdBQUwsQ0FBUzFMLEtBQVQsQ0FBZTRNLE1BQWYsR0FBd0IsRUFBeEI7QUFDQSxTQUFLaEIsT0FBTCxHQUFlLENBQWY7QUFDRCxHOzs7OztrQkEzR2tCMWMsUTs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlO0FBQ2JpRCw0QkFEYTtBQUViRztBQUZhLEM7Ozs7Ozs7Ozs7O0FDUGY7Ozs7OztBQUVBOzs7O2tCQUllO0FBQ2JGO0FBRGEsQyxFQTVCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NCQTs7Ozs7Ozs7OzsrZUF0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7SUFJcUJBLE07OztBQUVuQjs7Ozs7Ozs7O0FBU0Esa0JBQVl6TixFQUFaLEVBQWdCO0FBQUE7O0FBR2Q7O0FBSGMsaURBQ2QscUJBQU1BLEVBQU4sQ0FEYzs7QUFLZCxRQUFNMGYsVUFBVSx3Q0FDYjZHLElBRGEsQ0FDUixNQUFLNlosS0FERyxDQUFoQjtBQUVBLFFBQUkxZ0IsV0FBV0EsUUFBUTNTLE1BQVIsS0FBbUIsQ0FBbEMsRUFBcUM7QUFBQSxVQUMxQnN6QixJQUQwQixHQUNaM2dCLE9BRFk7QUFBQSxVQUNwQnhJLElBRG9CLEdBQ1p3SSxPQURZOztBQUduQzs7QUFDQSxZQUFLMGdCLEtBQUwscUNBQTZDQyxJQUE3QztBQUNBLFlBQUtDLEtBQUwsR0FBYXBwQixJQUFiO0FBQ0Q7QUFiYTtBQWNmOztBQUVEOzs7Ozs7O21CQUtBcXBCLE0scUJBQVM7QUFBQTs7QUFDUCxRQUFNQyxXQUFXLFNBQVhBLFFBQVcsR0FBYztBQUFBLFVBQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDN0IsYUFBTzcrQixNQUFTLE9BQUt3K0IsS0FBZCwwQkFBd0NLLElBQXhDLEVBQ0p2OEIsSUFESSxDQUNDO0FBQUEsZUFBWXJCLFNBQVNvQixJQUFULEVBQVo7QUFBQSxPQURELEVBRUpDLElBRkksQ0FFQyxnQkFBUTtBQUNaLFlBQUksRUFBRW9ILGdCQUFnQnBMLEtBQWxCLENBQUosRUFDRSxNQUFNLElBQUlrUCxTQUFKLEVBQU47O0FBRUY7QUFDQSxZQUFJLE9BQUtreEIsS0FBVCxFQUFnQjtBQUNkLGNBQU1JLE9BQU9wMUIsS0FBS29CLElBQUwsQ0FBVTtBQUFBLG1CQUFRL0MsS0FBS3VOLElBQUwsS0FBYyxPQUFLb3BCLEtBQTNCO0FBQUEsV0FBVixDQUFiO0FBQ0EsY0FBSSxDQUFDSSxJQUFELElBQVNwMUIsS0FBS3lCLE1BQUwsS0FBZ0IsRUFBN0IsRUFDRSxPQUFPeXpCLFNBQVNDLE9BQU8sQ0FBaEIsQ0FBUDs7QUFFRjtBQUNBLGlCQUFPQyxPQUNILENBQ0csT0FBS0MsT0FBTCxDQUFhRCxLQUFLRSxnQkFBbEIsQ0FESCxhQUVHLE9BQUtELE9BQUwsQ0FBYUQsS0FBS0csV0FBbEIsQ0FGSCxZQURHLEdBS0gsRUFMSjs7QUFPRjtBQUNDLFNBZEQsTUFjTztBQUNMLGlCQUFPLENBQ0Z2MUIsS0FBS3lCLE1BREgsbUJBQVA7QUFHRDtBQUNGLE9BMUJJLENBQVA7QUEyQkQsS0E1QkQ7O0FBOEJBO0FBQ0EsV0FBT3l6QixVQUFQO0FBQ0QsRzs7O0VBakVpQ00sa0I7O2tCQUFmcnpCLE07Ozs7Ozs7Ozs7O0FDTnJCOzs7Ozs7MEpBdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7O0lBSXFCcXpCLFE7O0FBRW5COzs7Ozs7Ozs7OztBQVdBLG9CQUFZOWdDLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNb1MsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlL0UsaUJBQWpCLENBQUosRUFDRSxNQUFNLElBQUlsSCxjQUFKLEVBQU47QUFDRixTQUFLNGdCLEdBQUwsR0FBVzNVLEdBQVg7O0FBRUE7QUFDQSxTQUFLZ3VCLEtBQUwsR0FBYSxLQUFLclosR0FBTCxDQUFTcUYsSUFBdEI7QUFDQSxTQUFLMlUsS0FBTCxHQUFhLEtBQUtDLEtBQUwsQ0FBVyxLQUFLWixLQUFoQixDQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUJBS0F4K0IsSyxvQkFBUTtBQUFBOztBQUNOLFdBQU8sSUFBSUksT0FBSixDQUFZLG1CQUFXO0FBQzVCLFVBQU1pL0IsU0FBU0MsbUJBQVFDLE9BQVIsQ0FBbUIsTUFBS0osS0FBeEIsbUJBQWY7QUFDQSxVQUFJLE9BQU9FLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNoL0IsZ0JBQVFnL0IsTUFBUjs7QUFFRjs7QUFFQyxPQUxELE1BS087QUFDTCxjQUFLVixNQUFMLEdBQWNyOEIsSUFBZCxDQUFtQixnQkFBUTtBQUN6Qmc5Qiw2QkFBUTlrQixHQUFSLENBQWUsTUFBSzJrQixLQUFwQixvQkFBMEN6MUIsSUFBMUMsRUFBZ0QsRUFBRTgxQixTQUFTLElBQUksRUFBZixFQUFoRDtBQUNBbi9CLGtCQUFRcUosSUFBUjtBQUNELFNBSEQ7QUFJRDtBQUNGLEtBYk0sQ0FBUDtBQWNELEc7O0FBRUQ7Ozs7Ozs7cUJBS0FpMUIsTSxxQkFBUztBQUNQLFVBQU0sSUFBSXJ5QixLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNELEc7O0FBRUQ7Ozs7Ozs7O3FCQU1BeXlCLE8sb0JBQVE1RixNLEVBQVE7QUFDZCxRQUFJQSxTQUFTLEtBQWIsRUFDRSxPQUFVLENBQUNBLFNBQVMsSUFBVixFQUFnQnNHLE9BQWhCLENBQXdCLENBQXhCLENBQVYsT0FERixLQUVLLElBQUl0RyxTQUFTLElBQWIsRUFDSCxPQUFVLENBQUNBLFNBQVMsSUFBVixFQUFnQnNHLE9BQWhCLENBQXdCLENBQXhCLENBQVY7QUFDRixnQkFBVXRHLE1BQVY7QUFDRCxHOztBQUVEOzs7Ozs7Ozs7O3FCQVFBaUcsSyxrQkFBTXpVLEcsRUFBSztBQUNULFFBQUluakIsT0FBTyxDQUFYO0FBQ0EsUUFBSW1qQixJQUFJeGYsTUFBSixLQUFlLENBQW5CLEVBQXNCLE9BQU8zRCxJQUFQO0FBQ3RCLFNBQUssSUFBSTdHLElBQUksQ0FBUixFQUFXK04sTUFBTWljLElBQUl4ZixNQUExQixFQUFrQ3hLLElBQUkrTixHQUF0QyxFQUEyQy9OLEdBQTNDLEVBQWdEO0FBQzlDNkcsYUFBUyxDQUFDQSxRQUFRLENBQVQsSUFBY0EsSUFBZixHQUF1Qm1qQixJQUFJc1IsVUFBSixDQUFldDdCLENBQWYsQ0FBL0I7QUFDQTZHLGNBQVEsQ0FBUixDQUY4QyxDQUVwQztBQUNYO0FBQ0QsV0FBT0EsSUFBUDtBQUNELEc7Ozs7O2tCQXZGa0IwM0IsUTs7Ozs7Ozs7Ozs7QUM1QnJCOzs7Ozs7O0FBT0EsQ0FBRSxXQUFVbnBCLE9BQVYsRUFBbUI7QUFDcEIsS0FBSTJwQiwyQkFBMkIsS0FBL0I7QUFDQSxLQUFJLElBQUosRUFBZ0Q7QUFDL0MxcEIsc0NBQU9ELE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBMnBCLDZCQUEyQixJQUEzQjtBQUNBO0FBQ0QsS0FBSSxnQ0FBTzUvQixPQUFQLE9BQW1CLFFBQXZCLEVBQWlDO0FBQ2hDRCxTQUFPQyxPQUFQLEdBQWlCaVcsU0FBakI7QUFDQTJwQiw2QkFBMkIsSUFBM0I7QUFDQTtBQUNELEtBQUksQ0FBQ0Esd0JBQUwsRUFBK0I7QUFDOUIsTUFBSUMsYUFBYS8vQixPQUFPMC9CLE9BQXhCO0FBQ0EsTUFBSU0sTUFBTWhnQyxPQUFPMC9CLE9BQVAsR0FBaUJ2cEIsU0FBM0I7QUFDQTZwQixNQUFJQyxVQUFKLEdBQWlCLFlBQVk7QUFDNUJqZ0MsVUFBTzAvQixPQUFQLEdBQWlCSyxVQUFqQjtBQUNBLFVBQU9DLEdBQVA7QUFDQSxHQUhEO0FBSUE7QUFDRCxDQWxCQyxFQWtCQSxZQUFZO0FBQ2IsVUFBU0UsTUFBVCxHQUFtQjtBQUNsQixNQUFJbi9CLElBQUksQ0FBUjtBQUNBLE1BQUl1b0IsU0FBUyxFQUFiO0FBQ0EsU0FBT3ZvQixJQUFJNE0sVUFBVXBDLE1BQXJCLEVBQTZCeEssR0FBN0IsRUFBa0M7QUFDakMsT0FBSXM0QixhQUFhMXJCLFVBQVc1TSxDQUFYLENBQWpCO0FBQ0EsUUFBSyxJQUFJZSxHQUFULElBQWdCdTNCLFVBQWhCLEVBQTRCO0FBQzNCL1AsV0FBT3huQixHQUFQLElBQWN1M0IsV0FBV3YzQixHQUFYLENBQWQ7QUFDQTtBQUNEO0FBQ0QsU0FBT3duQixNQUFQO0FBQ0E7O0FBRUQsVUFBU3RELElBQVQsQ0FBZW1hLFNBQWYsRUFBMEI7QUFDekIsV0FBU0gsR0FBVCxDQUFjbCtCLEdBQWQsRUFBbUJDLEtBQW5CLEVBQTBCczNCLFVBQTFCLEVBQXNDO0FBQ3JDLE9BQUkvUCxNQUFKO0FBQ0EsT0FBSSxPQUFPN3FCLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDcEM7QUFDQTs7QUFFRDs7QUFFQSxPQUFJa1AsVUFBVXBDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekI4dEIsaUJBQWE2RyxPQUFPO0FBQ25CclgsV0FBTTtBQURhLEtBQVAsRUFFVm1YLElBQUlJLFFBRk0sRUFFSS9HLFVBRkosQ0FBYjs7QUFJQSxRQUFJLE9BQU9BLFdBQVd1RyxPQUFsQixLQUE4QixRQUFsQyxFQUE0QztBQUMzQyxTQUFJQSxVQUFVLElBQUlTLElBQUosRUFBZDtBQUNBVCxhQUFRVSxlQUFSLENBQXdCVixRQUFRVyxlQUFSLEtBQTRCbEgsV0FBV3VHLE9BQVgsR0FBcUIsTUFBekU7QUFDQXZHLGdCQUFXdUcsT0FBWCxHQUFxQkEsT0FBckI7QUFDQTs7QUFFRDtBQUNBdkcsZUFBV3VHLE9BQVgsR0FBcUJ2RyxXQUFXdUcsT0FBWCxHQUFxQnZHLFdBQVd1RyxPQUFYLENBQW1CWSxXQUFuQixFQUFyQixHQUF3RCxFQUE3RTs7QUFFQSxRQUFJO0FBQ0hsWCxjQUFTM21CLEtBQUs4OUIsU0FBTCxDQUFlMStCLEtBQWYsQ0FBVDtBQUNBLFNBQUksVUFBVXdmLElBQVYsQ0FBZStILE1BQWYsQ0FBSixFQUE0QjtBQUMzQnZuQixjQUFRdW5CLE1BQVI7QUFDQTtBQUNELEtBTEQsQ0FLRSxPQUFPdnBCLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUksQ0FBQ29nQyxVQUFVTyxLQUFmLEVBQXNCO0FBQ3JCMytCLGFBQVE0K0IsbUJBQW1CN2hCLE9BQU8vYyxLQUFQLENBQW5CLEVBQ05ILE9BRE0sQ0FDRSwyREFERixFQUMrRGcvQixrQkFEL0QsQ0FBUjtBQUVBLEtBSEQsTUFHTztBQUNONytCLGFBQVFvK0IsVUFBVU8sS0FBVixDQUFnQjMrQixLQUFoQixFQUF1QkQsR0FBdkIsQ0FBUjtBQUNBOztBQUVEQSxVQUFNNitCLG1CQUFtQjdoQixPQUFPaGQsR0FBUCxDQUFuQixDQUFOO0FBQ0FBLFVBQU1BLElBQUlGLE9BQUosQ0FBWSwwQkFBWixFQUF3Q2cvQixrQkFBeEMsQ0FBTjtBQUNBOStCLFVBQU1BLElBQUlGLE9BQUosQ0FBWSxTQUFaLEVBQXVCaS9CLE1BQXZCLENBQU47O0FBRUEsUUFBSUMsd0JBQXdCLEVBQTVCOztBQUVBLFNBQUssSUFBSUMsYUFBVCxJQUEwQjFILFVBQTFCLEVBQXNDO0FBQ3JDLFNBQUksQ0FBQ0EsV0FBVzBILGFBQVgsQ0FBTCxFQUFnQztBQUMvQjtBQUNBO0FBQ0RELDhCQUF5QixPQUFPQyxhQUFoQztBQUNBLFNBQUkxSCxXQUFXMEgsYUFBWCxNQUE4QixJQUFsQyxFQUF3QztBQUN2QztBQUNBO0FBQ0RELDhCQUF5QixNQUFNekgsV0FBVzBILGFBQVgsQ0FBL0I7QUFDQTtBQUNELFdBQVF0aUMsU0FBU3VpQyxNQUFULEdBQWtCbC9CLE1BQU0sR0FBTixHQUFZQyxLQUFaLEdBQW9CKytCLHFCQUE5QztBQUNBOztBQUVEOztBQUVBLE9BQUksQ0FBQ2gvQixHQUFMLEVBQVU7QUFDVHduQixhQUFTLEVBQVQ7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxPQUFJMlgsVUFBVXhpQyxTQUFTdWlDLE1BQVQsR0FBa0J2aUMsU0FBU3VpQyxNQUFULENBQWdCMVksS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBbEIsR0FBZ0QsRUFBOUQ7QUFDQSxPQUFJNFksVUFBVSxrQkFBZDtBQUNBLE9BQUluZ0MsSUFBSSxDQUFSOztBQUVBLFVBQU9BLElBQUlrZ0MsUUFBUTExQixNQUFuQixFQUEyQnhLLEdBQTNCLEVBQWdDO0FBQy9CLFFBQUlvZ0MsUUFBUUYsUUFBUWxnQyxDQUFSLEVBQVd1bkIsS0FBWCxDQUFpQixHQUFqQixDQUFaO0FBQ0EsUUFBSTBZLFNBQVNHLE1BQU0zOUIsS0FBTixDQUFZLENBQVosRUFBZXM0QixJQUFmLENBQW9CLEdBQXBCLENBQWI7O0FBRUEsUUFBSSxDQUFDLEtBQUtyNUIsSUFBTixJQUFjdStCLE9BQU83VCxNQUFQLENBQWMsQ0FBZCxNQUFxQixHQUF2QyxFQUE0QztBQUMzQzZULGNBQVNBLE9BQU94OUIsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBQ0E7O0FBRUQsUUFBSTtBQUNILFNBQUlrUyxPQUFPeXJCLE1BQU0sQ0FBTixFQUFTdi9CLE9BQVQsQ0FBaUJzL0IsT0FBakIsRUFBMEJOLGtCQUExQixDQUFYO0FBQ0FJLGNBQVNiLFVBQVVpQixJQUFWLEdBQ1JqQixVQUFVaUIsSUFBVixDQUFlSixNQUFmLEVBQXVCdHJCLElBQXZCLENBRFEsR0FDdUJ5cUIsVUFBVWEsTUFBVixFQUFrQnRyQixJQUFsQixLQUMvQnNyQixPQUFPcC9CLE9BQVAsQ0FBZXMvQixPQUFmLEVBQXdCTixrQkFBeEIsQ0FGRDs7QUFJQSxTQUFJLEtBQUtuK0IsSUFBVCxFQUFlO0FBQ2QsVUFBSTtBQUNIdStCLGdCQUFTcitCLEtBQUtDLEtBQUwsQ0FBV28rQixNQUFYLENBQVQ7QUFDQSxPQUZELENBRUUsT0FBT2poQyxDQUFQLEVBQVUsQ0FBRTtBQUNkOztBQUVELFNBQUkrQixRQUFRNFQsSUFBWixFQUFrQjtBQUNqQjRULGVBQVMwWCxNQUFUO0FBQ0E7QUFDQTs7QUFFRCxTQUFJLENBQUNsL0IsR0FBTCxFQUFVO0FBQ1R3bkIsYUFBTzVULElBQVAsSUFBZXNyQixNQUFmO0FBQ0E7QUFDRCxLQXBCRCxDQW9CRSxPQUFPamhDLENBQVAsRUFBVSxDQUFFO0FBQ2Q7O0FBRUQsVUFBT3VwQixNQUFQO0FBQ0E7O0FBRUQwVyxNQUFJcGxCLEdBQUosR0FBVW9sQixHQUFWO0FBQ0FBLE1BQUloOUIsR0FBSixHQUFVLFVBQVVsQixHQUFWLEVBQWU7QUFDeEIsVUFBT2srQixJQUFJbmhDLElBQUosQ0FBU21oQyxHQUFULEVBQWNsK0IsR0FBZCxDQUFQO0FBQ0EsR0FGRDtBQUdBaytCLE1BQUlMLE9BQUosR0FBYyxZQUFZO0FBQ3pCLFVBQU9LLElBQUl0eUIsS0FBSixDQUFVO0FBQ2hCakwsVUFBTTtBQURVLElBQVYsRUFFSixHQUFHZSxLQUFILENBQVMzRSxJQUFULENBQWM4TyxTQUFkLENBRkksQ0FBUDtBQUdBLEdBSkQ7QUFLQXF5QixNQUFJSSxRQUFKLEdBQWUsRUFBZjs7QUFFQUosTUFBSTU0QixNQUFKLEdBQWEsVUFBVXRGLEdBQVYsRUFBZXUzQixVQUFmLEVBQTJCO0FBQ3ZDMkcsT0FBSWwrQixHQUFKLEVBQVMsRUFBVCxFQUFhbytCLE9BQU83RyxVQUFQLEVBQW1CO0FBQy9CdUcsYUFBUyxDQUFDO0FBRHFCLElBQW5CLENBQWI7QUFHQSxHQUpEOztBQU1BSSxNQUFJcUIsYUFBSixHQUFvQnJiLElBQXBCOztBQUVBLFNBQU9nYSxHQUFQO0FBQ0E7O0FBRUQsUUFBT2hhLEtBQUssWUFBWSxDQUFFLENBQW5CLENBQVA7QUFDQSxDQTdKQyxDQUFELEM7Ozs7Ozs7Ozs7Ozs7QUNQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQjdaLFU7O0FBRW5COzs7Ozs7Ozs7QUFTQSxzQkFBWTNOLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNb1MsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlM0wsV0FBakIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsU0FBSzRnQixHQUFMLEdBQVczVSxHQUFYO0FBQ0Q7O0FBRUQ7Ozs7Ozs7dUJBS0EvTCxVLHVCQUFXd0gsSyxFQUFPO0FBQ2hCLFFBQUlBLE1BQU1kLE1BQU4sSUFBZ0IsS0FBS2dhLEdBQUwsQ0FBUzVsQixRQUFULENBQWtCNEwsTUFBdEMsRUFDRSxLQUFLZ2EsR0FBTCxDQUFTNWxCLFFBQVQsQ0FBa0IsS0FBSzRsQixHQUFMLENBQVM1bEIsUUFBVCxDQUFrQjRMLE1BQWxCLEdBQTJCLENBQTdDLEVBQWdEN0wsV0FBaEQsQ0FDRTtBQUFBO0FBQUEsUUFBSSxTQUFNLGtCQUFWO0FBQ0cyTSxZQUFNdEMsR0FBTixDQUFVO0FBQUEsZUFBUTtBQUFBO0FBQUEsWUFBSSxTQUFNLGlCQUFWO0FBQTZCdTNCO0FBQTdCLFNBQVI7QUFBQSxPQUFWO0FBREgsS0FERjs7QUFNRjtBQUNBLFNBQUsvYixHQUFMLENBQVMxZSxPQUFULENBQWlCdUUsT0FBakIsR0FBMkIsTUFBM0I7QUFDRCxHOzs7OztrQkFuQ2tCZSxVOzs7Ozs7Ozs7Ozs7QUNKckI7Ozs7OztBQUVBOzs7O2tCQUllO0FBQ2J2RDtBQURhLEMsRUE1QmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0lBSXFCQSxNOztBQUVuQjs7Ozs7Ozs7Ozs7QUFXQSxrQkFBWXBLLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNb1MsTUFBTyxPQUFPcFMsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2tJLGFBQVQsQ0FBdUJuSSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUVvUyxlQUFlblIsSUFBakIsQ0FBSixFQUNFLE1BQU0sSUFBSWtGLGNBQUosRUFBTjtBQUNGLFNBQUs0Z0IsR0FBTCxHQUFXM1UsR0FBWDs7QUFFQTtBQUNBLFNBQUs4VSxPQUFMLEdBQWUsS0FBZjtBQUNEOztBQUVEOzs7OzttQkFHQTloQixNLHFCQUFTO0FBQ1AsUUFBTXVOLFNBQVNuUixPQUFPb2EsV0FBUCxJQUNiLEtBQUttTCxHQUFMLENBQVM1bEIsUUFBVCxDQUFrQixDQUFsQixFQUFxQm9tQixTQUFyQixJQUFrQyxJQUFJLEVBQXRDLENBREYsQ0FETyxDQUVxRTtBQUM1RSxRQUFJNVUsV0FBVyxLQUFLdVUsT0FBcEIsRUFDRSxLQUFLSCxHQUFMLENBQVMxZSxPQUFULENBQWlCdUUsT0FBakIsR0FBMkIsQ0FBQyxLQUFLc2EsT0FBTCxHQUFldlUsTUFBaEIsSUFBMEIsUUFBMUIsR0FBcUMsRUFBaEU7QUFDSCxHOztBQUVEOzs7OzttQkFHQTdNLEssb0JBQVE7QUFDTixTQUFLaWhCLEdBQUwsQ0FBUzFlLE9BQVQsQ0FBaUJ1RSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUtzYSxPQUFMLEdBQWUsS0FBZjtBQUNELEc7Ozs7O2tCQXpDa0I5YyxNOzs7Ozs7Ozs7OztBQzFCckI7Ozs7OztrQkFFZTtBQUNiSztBQURhLEM7Ozs7Ozs7Ozs7QUNGZixJQUFNczRCLFVBQVUsU0FBVkEsT0FBVSxDQUFDNWUsT0FBRCxFQUFhO0FBQzNCLFNBQU9BLFFBQVEvZ0IsT0FBUixDQUFnQixLQUFoQixFQUFzQixFQUF0QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNNC9CLFNBQVMsU0FBVEEsTUFBUyxDQUFDaGpDLEVBQUQsRUFBUTtBQUNyQixTQUFPLEVBQUVBLElBQUlBLEVBQU4sRUFBVWlqQyxPQUFPRixRQUFRL2lDLEdBQUdta0IsT0FBWCxDQUFqQixFQUFzQ2hqQixVQUFVLEVBQWhELEVBQVA7QUFDRCxDQUZEOztBQUlBLElBQU0raEMsVUFBVSxTQUFWQSxPQUFVLENBQUN0K0IsR0FBRCxFQUFTO0FBQ3ZCLFNBQU8sR0FBR2lqQixNQUFILENBQVV4bkIsSUFBVixDQUFldUUsR0FBZixFQUFvQixVQUFDOG1CLEtBQUQsRUFBUTFyQixFQUFSO0FBQUEsV0FBZTByQixNQUFNeG1CLE1BQU4sQ0FBYTg5QixPQUFPaGpDLEVBQVAsQ0FBYixDQUFmO0FBQUEsR0FBcEIsRUFBNkQsRUFBN0QsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTW1qQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDeDVCLElBQUQsRUFBTytoQixLQUFQLEVBQWlCO0FBQzFDQSxRQUFNN0QsTUFBTjtBQUNELENBRkQ7O0FBSUEsSUFBTXViLFFBQVEsU0FBUkEsS0FBUSxDQUFDMVgsS0FBRCxFQUFvQjtBQUFBLE1BQVoyWCxHQUFZLHVFQUFOLENBQU07O0FBQ2hDLE1BQUlsYyxVQUFVLElBQWQ7QUFDQSxNQUFJbWMsTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJL2dDLElBQUk4Z0MsR0FBYixFQUFrQjlnQyxJQUFJbXBCLE1BQU0zZSxNQUE1QixFQUFvQ3hLLEdBQXBDLEVBQXlDO0FBQ3ZDLFFBQU1xekIsT0FBT2xLLE1BQU1ucEIsQ0FBTixDQUFiO0FBQ0EsUUFBSTRrQixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCQSxnQkFBVXlPLElBQVY7QUFDRCxLQUZELE1BRU8sSUFBSXpPLFFBQVE4YixLQUFSLEtBQWtCck4sS0FBS3FOLEtBQTNCLEVBQWtDO0FBQ3ZDSyxVQUFJOS9CLElBQUosQ0FBUzJqQixPQUFUO0FBQ0FBLGdCQUFVeU8sSUFBVjtBQUNELEtBSE0sTUFHQSxJQUFJek8sUUFBUThiLEtBQVIsR0FBZ0JyTixLQUFLcU4sS0FBekIsRUFBZ0M7QUFDckNLLFVBQUk5L0IsSUFBSixDQUFTMmpCLE9BQVQ7QUFDQSxhQUFPbWMsR0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJbmMsUUFBUThiLEtBQVIsR0FBZ0JyTixLQUFLcU4sS0FBekIsRUFBZ0M7QUFDckM5YixjQUFRaG1CLFFBQVIsR0FBbUJpaUMsTUFBTTFYLEtBQU4sRUFBYW5wQixDQUFiLENBQW5CO0FBQ0FBLFdBQUs0a0IsUUFBUWhtQixRQUFSLENBQWlCNEwsTUFBakIsR0FBMEIsQ0FBL0I7QUFDQXUyQixVQUFJOS9CLElBQUosQ0FBUzJqQixPQUFUO0FBQ0FBLGdCQUFVLElBQVY7QUFDRDtBQUNGO0FBQ0QsTUFBSUEsWUFBWSxJQUFoQixFQUFzQjtBQUNwQm1jLFFBQUk5L0IsSUFBSixDQUFTMmpCLE9BQVQ7QUFDRDtBQUNELFNBQU9tYyxHQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQU03NEIsU0FBUyxTQUFUQSxNQUFTLENBQUN6SyxFQUFELEVBQVE7QUFDckIsTUFBTW9TLE1BQU8sT0FBT3BTLEVBQVAsS0FBYyxRQUFmLEdBQ1JDLFNBQVNrSSxhQUFULENBQXVCbkksRUFBdkIsQ0FEUSxHQUVSQSxFQUZKO0FBR0EsTUFBSSxFQUFFb1MsZUFBZTNMLFdBQWpCLENBQUosRUFDRTs7QUFFRixNQUFNN0IsTUFBUTNFLFNBQVNnRixnQkFBVCxDQUEwQixvQkFBMUIsQ0FBZDtBQUNBLE1BQU15bUIsUUFBUXdYLFFBQVF0K0IsR0FBUixDQUFkO0FBQ0EsTUFBTTArQixNQUFNRixNQUFNMVgsS0FBTixDQUFaO0FBQ0EsTUFBSTRYLElBQUl2MkIsTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRURxRixNQUFJbFIsV0FBSixDQUFnQjtBQUFBO0FBQUEsTUFBTyxTQUFNLGVBQWIsRUFBNkIsT0FBSSxPQUFqQztBQUFBO0FBQUEsR0FBaEI7QUFDQSxNQUFNK25CLE9BQU8sMEJBQUksU0FBTSxjQUFWLEVBQXlCLHlCQUF6QixHQUFiO0FBQ0E3VyxNQUFJbFIsV0FBSixDQUFnQituQixJQUFoQjtBQUNBLE9BQUssSUFBSTFtQixJQUFJLENBQWIsRUFBZ0JBLElBQUkrZ0MsSUFBSXYyQixNQUF4QixFQUFnQ3hLLEdBQWhDLEVBQXFDO0FBQ25DLFFBQU1naEMsVUFBVUQsSUFBSS9nQyxDQUFKLENBQWhCO0FBQ0EwbUIsU0FBSy9uQixXQUFMLENBQWlCc2lDLFFBQVFELE9BQVIsQ0FBakI7QUFDRDtBQUNGLENBckJEOztBQXVCQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0QsT0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUksU0FBTSxjQUFWO0FBQ0U7QUFBQTtBQUFBLFFBQUcsTUFBTSxNQUFNQSxRQUFRdmpDLEVBQVIsQ0FBVzJILEVBQTFCLEVBQThCLE9BQU80N0IsUUFBUXZqQyxFQUFSLENBQVcySCxFQUFoRCxFQUFvRCxTQUFNLGNBQTFEO0FBQ0s0N0IsY0FBUXZqQyxFQUFSLENBQVdnQjtBQURoQixLQURGO0FBS0d1aUMsWUFBUXBpQyxRQUFSLENBQWlCNEwsTUFBakIsR0FBMEIsQ0FBMUIsSUFDQztBQUFBO0FBQUEsUUFBSyxTQUFNLFFBQVg7QUFDRTtBQUFBO0FBQUEsVUFBSSxTQUFNLGNBQVY7QUFDR3cyQixnQkFBUXBpQyxRQUFSLENBQWlCb0ssR0FBakIsQ0FBcUI7QUFBQSxpQkFBU2k0QixRQUFRek0sS0FBUixDQUFUO0FBQUEsU0FBckI7QUFESDtBQURGO0FBTkosR0FEYztBQUFBLENBQWhCOztrQkFnQmV0c0IsTSIsImZpbGUiOiJqYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2YWRkY2ZmIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXHJcbmV4cG9ydCBkZWZhdWx0IC8qIEpTWCAqLyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBET00gbm9kZSBmcm9tIEpTWCdzIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRhZyBuYW1lXHJcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllc1xyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgeyBfX2h0bWw6IHN0cmluZyB9IHwgQXJyYXk8SFRNTEVsZW1lbnQ+Pn1cclxuICAgKiAgIGNoaWxkcmVuIC0gQ2hpbGQgbm9kZXNcclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTmF0aXZlIERPTSBub2RlXHJcbiAgICovXHJcbiAgY3JlYXRlRWxlbWVudCh0YWcsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG5cclxuICAgIC8qIFNldCBhbGwgcHJvcGVydGllcyAqL1xyXG4gICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoT2JqZWN0LmtleXMocHJvcGVydGllcyksIGF0dHIgPT4ge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wZXJ0aWVzW2F0dHJdKVxyXG4gICAgICB9KVxyXG5cclxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgKi9cclxuICAgIGNvbnN0IGl0ZXJhdGVDaGlsZE5vZGVzID0gbm9kZXMgPT4ge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBub2RlID0+IHtcclxuXHJcbiAgICAgICAgLyogRGlyZWN0bHkgYXBwZW5kIHRleHQgY29udGVudCAqL1xyXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgICAgICB0eXBlb2Ygbm9kZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgZWwudGV4dENvbnRlbnQgKz0gbm9kZVxyXG5cclxuICAgICAgICAvKiBSZWN1cnNlLCBpZiB3ZSBnb3QgYW4gYXJyYXkgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgICAgIGl0ZXJhdGVDaGlsZE5vZGVzKG5vZGUpXHJcblxyXG4gICAgICAgIC8qIEFwcGVuZCByYXcgSFRNTCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuX19odG1sICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgKz0gbm9kZS5fX2h0bWxcclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHJlZ3VsYXIgbm9kZXMgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBJdGVyYXRlIGNoaWxkIG5vZGVzIGFuZCByZXR1cm4gZWxlbWVudCAqL1xyXG4gICAgaXRlcmF0ZUNoaWxkTm9kZXMoY2hpbGRyZW4pXHJcbiAgICByZXR1cm4gZWxcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsInZhciBpbmRleCA9IHR5cGVvZiBmZXRjaD09J2Z1bmN0aW9uJyA/IGZldGNoLmJpbmQoKSA6IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdHJlcXVlc3Qub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnZ2V0JywgdXJsLCB0cnVlKTtcblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG5cdFx0XHRyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoaSwgb3B0aW9ucy5oZWFkZXJzW2ldKTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHM9PSdpbmNsdWRlJztcblxuXHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSgpKTtcblx0XHR9O1xuXG5cdFx0cmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuXG5cdFx0cmVxdWVzdC5zZW5kKG9wdGlvbnMuYm9keSB8fCBudWxsKTtcblxuXHRcdGZ1bmN0aW9uIHJlc3BvbnNlKCkge1xuXHRcdFx0dmFyIGtleXMgPSBbXSxcblx0XHRcdFx0YWxsID0gW10sXG5cdFx0XHRcdGhlYWRlcnMgPSB7fSxcblx0XHRcdFx0aGVhZGVyO1xuXG5cdFx0XHRyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSwgZnVuY3Rpb24gKG0sIGtleSwgdmFsdWUpIHtcblx0XHRcdFx0a2V5cy5wdXNoKGtleSA9IGtleS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdFx0YWxsLnB1c2goW2tleSwgdmFsdWVdKTtcblx0XHRcdFx0aGVhZGVyID0gaGVhZGVyc1trZXldO1xuXHRcdFx0XHRoZWFkZXJzW2tleV0gPSBoZWFkZXIgPyAoaGVhZGVyICsgXCIsXCIgKyB2YWx1ZSkgOiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvazogKHJlcXVlc3Quc3RhdHVzLzEwMHwwKSA9PSAyLFx0XHQvLyAyMDAtMjk5XG5cdFx0XHRcdHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcblx0XHRcdFx0dXJsOiByZXF1ZXN0LnJlc3BvbnNlVVJMLFxuXHRcdFx0XHRjbG9uZTogcmVzcG9uc2UsXG5cdFx0XHRcdHRleHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7IH0sXG5cdFx0XHRcdGpzb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkudGhlbihKU09OLnBhcnNlKTsgfSxcblx0XHRcdFx0YmxvYjogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtyZXF1ZXN0LnJlc3BvbnNlXSkpOyB9LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0a2V5czogZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5czsgfSxcblx0XHRcdFx0XHRlbnRyaWVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbGw7IH0sXG5cdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAobikgeyByZXR1cm4gaGVhZGVyc1tuLnRvTG93ZXJDYXNlKCldOyB9LFxuXHRcdFx0XHRcdGhhczogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4udG9Mb3dlckNhc2UoKSBpbiBoZWFkZXJzOyB9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5lcy5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL2Rpc3QvdW5mZXRjaC5lcy5qcyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdGVuZXIge1xyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmljIGV2ZW50IGxpc3RlbmVyXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PEV2ZW50VGFyZ2V0Pil9IGVsc18gLSBFdmVudCB0YXJnZXRzXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGhhbmRsZXJfLSBFdmVudCBoYW5kbGVyc1xyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gZXZlbnRzXyAtIEV2ZW50IG5hbWVzXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gdXBkYXRlXyAtIFVwZGF0ZSBoYW5kbGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gez8oc3RyaW5nfEV2ZW50VGFyZ2V0fE5vZGVMaXN0PEV2ZW50VGFyZ2V0Pil9IGVscyAtXHJcbiAgICogICBTZWxlY3RvciBvciBFdmVudCB0YXJnZXRzXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEFycmF5PHN0cmluZz4pfSBldmVudHMgLSBFdmVudCBuYW1lc1xyXG4gICAqIEBwYXJhbSB7KE9iamVjdHxGdW5jdGlvbil9IGhhbmRsZXIgLSBIYW5kbGVyIHRvIGJlIGludm9rZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbHMsIGV2ZW50cywgaGFuZGxlcikge1xyXG4gICAgdGhpcy5lbHNfID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpXHJcbiAgICAgICAgOiBbXS5jb25jYXQoZWxzKSlcclxuXHJcbiAgICAvKiBTZXQgaGFuZGxlciBhcyBmdW5jdGlvbiBvciBkaXJlY3RseSBhcyBvYmplY3QgKi9cclxuICAgIHRoaXMuaGFuZGxlcl8gPSB0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgID8geyB1cGRhdGU6IGhhbmRsZXIgfVxyXG4gICAgICA6IGhhbmRsZXJcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGV2ZW50IG5hbWVzIGFuZCB1cGRhdGUgaGFuZGxlciAqL1xyXG4gICAgdGhpcy5ldmVudHNfID0gW10uY29uY2F0KGV2ZW50cylcclxuICAgIHRoaXMudXBkYXRlXyA9IGV2ID0+IHRoaXMuaGFuZGxlcl8udXBkYXRlKGV2KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcclxuICAgKi9cclxuICBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIHRoaXMuZXZlbnRzXy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLnVwZGF0ZV8sIGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBFeGVjdXRlIHNldHVwIGhhbmRsZXIsIGlmIGltcGxlbWVudGVkICovXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcl8uc2V0dXAgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgdGhpcy5oYW5kbGVyXy5zZXR1cCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnJlZ2lzdGVyIGxpc3RlbmVyIGZvciBhbGwgcmVsZXZhbnQgZXZlbnRzXHJcbiAgICovXHJcbiAgdW5saXN0ZW4oKSB7XHJcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIHRoaXMuZXZlbnRzXy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLnVwZGF0ZV8pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgcmVzZXQgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyXy5yZXNldCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICB0aGlzLmhhbmRsZXJfLnJlc2V0KClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L0xpc3RlbmVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCJcclxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcIlxyXG5pbXBvcnQgXCIuLi9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2Z1wiXHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi5zY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUG9seWZpbGxzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmltcG9ydCBcImN1c3RvbS1ldmVudC1wb2x5ZmlsbFwiXHJcbmltcG9ydCBcInVuZmV0Y2gvcG9seWZpbGxcIlxyXG5cclxuaW1wb3J0IFByb21pc2UgZnJvbSBcInByb21pc2UtcG9seWZpbGxcIlxyXG53aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8IFByb21pc2VcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRGVwZW5kZW5jaWVzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmltcG9ydCBDbGlwYm9hcmQgZnJvbSBcImNsaXBib2FyZFwiXHJcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSBcImZhc3RjbGlja1wiXHJcblxyXG5pbXBvcnQgTWF0ZXJpYWwgZnJvbSBcIi4vY29tcG9uZW50cy9NYXRlcmlhbFwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZ1bmN0aW9uc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBtZXRhIHRhZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gTWV0YSBjb250ZW50IHZhbHVlXHJcbiAqL1xyXG5jb25zdCB0cmFuc2xhdGUgPSBrZXkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgbGFuZzoke2tleX1gKVswXVxyXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxyXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgcmV0dXJuIG1ldGEuY29udGVudFxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFwcGxpY2F0aW9uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIE1hdGVyaWFsIGZvciBNa0RvY3NcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoY29uZmlnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1zdHlsZVxyXG5cclxuICAvKiBJbml0aWFsaXplIE1vZGVybml6ciBhbmQgRmFzdENsaWNrICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCEoZG9jdW1lbnQuYm9keSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgLyogQXR0YWNoIEZhc3RDbGljayB0byBtaXRpZ2F0ZSAzMDBtcyBkZWxheSBvbiB0b3VjaCBkZXZpY2VzICovXHJcbiAgICBGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpXHJcblxyXG4gICAgLyogVGVzdCBmb3IgaU9TICovXHJcbiAgICBNb2Rlcm5penIuYWRkVGVzdChcImlvc1wiLCAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9nKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBXcmFwIGFsbCBkYXRhIHRhYmxlcyBmb3IgYmV0dGVyIG92ZXJmbG93IHNjcm9sbGluZyAqL1xyXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlOm5vdChbY2xhc3NdKVwiKSAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBKU1gsIHdlIHNob3VsZCByZW5hbWUgdGhlIGZpbGVcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGFibGVzLCB0YWJsZSA9PiB7XHJcbiAgICAgIGNvbnN0IHdyYXAgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3Njcm9sbHdyYXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10eXBlc2V0X190YWJsZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICAgIGlmICh0YWJsZS5uZXh0U2libGluZykge1xyXG4gICAgICAgIHRhYmxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXAsIHRhYmxlLm5leHRTaWJsaW5nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcClcclxuICAgICAgfVxyXG4gICAgICB3cmFwLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKHRhYmxlKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBDbGlwYm9hcmQgaW50ZWdyYXRpb24gKi9cclxuICAgIGlmIChDbGlwYm9hcmQuaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvZGVoaWxpdGUgPiBwcmUsIHByZSA+IGNvZGVcIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIChibG9jaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGBfX2NvZGVfJHtpbmRleH1gXHJcblxyXG4gICAgICAgIC8qIENyZWF0ZSBidXR0b24gd2l0aCBtZXNzYWdlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IChcclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZC1jbGlwYm9hcmRcIiB0aXRsZT17dHJhbnNsYXRlKFwiY2xpcGJvYXJkLmNvcHlcIil9XHJcbiAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17YCMke2lkfSBwcmUsICMke2lkfSBjb2RlYH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWQtY2xpcGJvYXJkX19tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvKiBMaW5rIHRvIGJsb2NrIGFuZCBpbnNlcnQgYnV0dG9uICovXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2sucGFyZW50Tm9kZVxyXG4gICAgICAgIHBhcmVudC5pZCA9IGlkXHJcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShidXR0b24sIGJsb2NrKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBDbGlwYm9hcmQgbGlzdGVuZXIgKi9cclxuICAgICAgY29uc3QgY29weSA9IG5ldyBDbGlwYm9hcmQoXCIubWQtY2xpcGJvYXJkXCIpXHJcblxyXG4gICAgICAvKiBTdWNjZXNzIGhhbmRsZXIgKi9cclxuICAgICAgY29weS5vbihcInN1Y2Nlc3NcIiwgYWN0aW9uID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYWN0aW9uLnRyaWdnZXIucXVlcnlTZWxlY3RvcihcIi5tZC1jbGlwYm9hcmRfX21lc3NhZ2VcIilcclxuICAgICAgICBpZiAoIShtZXNzYWdlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAgIC8qIENsZWFyIHNlbGVjdGlvbiBhbmQgcmVzZXQgZGVib3VuY2UgbG9naWMgKi9cclxuICAgICAgICBhY3Rpb24uY2xlYXJTZWxlY3Rpb24oKVxyXG4gICAgICAgIGlmIChtZXNzYWdlLmRhdGFzZXQubWRUaW1lcilcclxuICAgICAgICAgIGNsZWFyVGltZW91dChwYXJzZUludChtZXNzYWdlLmRhdGFzZXQubWRUaW1lciwgMTApKVxyXG5cclxuICAgICAgICAvKiBTZXQgbWVzc2FnZSBpbmRpY2F0aW5nIHN1Y2Nlc3MgYW5kIHNob3cgaXQgKi9cclxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZC1jbGlwYm9hcmRfX21lc3NhZ2UtLWFjdGl2ZVwiKVxyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gdHJhbnNsYXRlKFwiY2xpcGJvYXJkLmNvcGllZFwiKVxyXG5cclxuICAgICAgICAvKiBIaWRlIG1lc3NhZ2UgYWZ0ZXIgdHdvIHNlY29uZHMgKi9cclxuICAgICAgICBtZXNzYWdlLmRhdGFzZXQubWRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwibWQtY2xpcGJvYXJkX19tZXNzYWdlLS1hY3RpdmVcIilcclxuICAgICAgICAgIG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyID0gXCJcIlxyXG4gICAgICAgIH0sIDIwMDApLnRvU3RyaW5nKClcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQb2x5ZmlsbCBkZXRhaWxzL3N1bW1hcnkgZnVuY3Rpb25hbGl0eSAqL1xyXG4gICAgaWYgKCFNb2Rlcm5penIuZGV0YWlscykge1xyXG4gICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGV0YWlscyA+IHN1bW1hcnlcIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIHN1bW1hcnkgPT4ge1xyXG4gICAgICAgIHN1bW1hcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBldi50YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAgICAgaWYgKGRldGFpbHMuaGFzQXR0cmlidXRlKFwib3BlblwiKSkge1xyXG4gICAgICAgICAgICBkZXRhaWxzLnJlbW92ZUF0dHJpYnV0ZShcIm9wZW5cIilcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogT3BlbiBkZXRhaWxzIGFmdGVyIGFuY2hvciBqdW1wICovXHJcbiAgICBjb25zdCBkZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9jdW1lbnQubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpXHJcbiAgICAgICAgaWYgKCFlbClcclxuICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAvKiBXYWxrIHVwIGFzIGxvbmcgYXMgd2UncmUgbm90IGluIGEgZGV0YWlscyB0YWcgKi9cclxuICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxyXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRGV0YWlsc0VsZW1lbnQpKVxyXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuXHJcbiAgICAgICAgLyogSWYgdGhlcmUncyBhIGRldGFpbHMgdGFnLCBvcGVuIGl0ICovXHJcbiAgICAgICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Lm9wZW4pIHtcclxuICAgICAgICAgIHBhcmVudC5vcGVuID0gdHJ1ZVxyXG5cclxuICAgICAgICAgIC8qIEZvcmNlIHJlbG9hZCwgc28gdGhlIHZpZXdwb3J0IHJlcG9zaXRpb25zICovXHJcbiAgICAgICAgICBjb25zdCBsb2MgPSBsb2NhdGlvbi5oYXNoXHJcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gXCIgXCJcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBsb2NcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBkZXRhaWxzKVxyXG4gICAgZGV0YWlscygpXHJcblxyXG4gICAgLyogRm9yY2UgMXB4IHNjcm9sbCBvZmZzZXQgdG8gdHJpZ2dlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cclxuICAgIGlmIChNb2Rlcm5penIuaW9zKSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtc2Nyb2xsZml4XVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNjcm9sbGFibGUsIGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9wID0gaXRlbS5zY3JvbGxUb3BcclxuXHJcbiAgICAgICAgICAvKiBXZSdyZSBhdCB0aGUgdG9wIG9mIHRoZSBjb250YWluZXIgKi9cclxuICAgICAgICAgIGlmICh0b3AgPT09IDApIHtcclxuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSAxXHJcblxyXG4gICAgICAgICAgICAvKiBXZSdyZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIgKi9cclxuICAgICAgICAgIH0gZWxzZSBpZiAodG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgPT09IGl0ZW0uc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2Nyb2xsVG9wID0gdG9wIC0gMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBoZWFkZXIgc2hhZG93IHRvZ2dsZSAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gIF0sIG5ldyBNYXRlcmlhbC5IZWFkZXIuU2hhZG93KFxyXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9Y29udGFpbmVyXVwiLFxyXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKVxyXG4gICkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBoZWFkZXIgdGl0bGUgdG9nZ2xlICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5UaXRsZShcclxuICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXRpdGxlXVwiLFxyXG4gICAgXCIubWQtdHlwZXNldCBoMVwiKVxyXG4gICkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBoZXJvIHZpc2liaWxpdHkgdG9nZ2xlICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVyb11cIikpXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlRhYnMuVG9nZ2xlKFwiW2RhdGEtbWQtY29tcG9uZW50PWhlcm9dXCIpKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IHRhYnMgdmlzaWJpbGl0eSB0b2dnbGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD10YWJzXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuVGFicy5Ub2dnbGUoXCJbZGF0YS1tZC1jb21wb25lbnQ9dGFic11cIikpLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogc2lkZWJhciB3aXRoIG5hdmlnYXRpb24gKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMjBweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuU2lkZWJhci5Qb3NpdGlvbihcclxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl1cIixcclxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKSkpXHJcblxyXG4gIC8qIENvbXBvbmVudDogc2lkZWJhciB3aXRoIHRhYmxlIG9mIGNvbnRlbnRzIChtaXNzaW5nIG9uIDQwNCBwYWdlKSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY11cIikpXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY11cIixcclxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcclxuXHJcbiAgLyogTG9hZCB0YWJsZSBvZiBjb250ZW50cyAqL1xyXG4gIE1hdGVyaWFsLlRhYmxlT2ZDb250ZW50cy5yZW5kZXIoXCIjc2Nyb2xsc3B5XCIpXHJcbiAgY29uc3QgYmx1ciA9IG5ldyBNYXRlcmlhbC5OYXYuQmx1cihcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdIFtocmVmXVwiKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGxpbmsgYmx1cnJpbmcgZm9yIHRhYmxlIG9mIGNvbnRlbnRzICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwic2Nyb2xsXCIsIGJsdXIpKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGNvbGxhcHNpYmxlIGVsZW1lbnRzIGZvciBuYXZpZ2F0aW9uICovXHJcbiAgY29uc3QgY29sbGFwc2libGVzID1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1jb21wb25lbnQ9Y29sbGFwc2libGVdXCIpXHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjb2xsYXBzaWJsZXMsIGNvbGxhcHNlID0+IHtcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIyMHB4KVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoY29sbGFwc2UucHJldmlvdXNFbGVtZW50U2libGluZywgXCJjbGlja1wiLFxyXG4gICAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQ29sbGFwc2UoY29sbGFwc2UpKSlcclxuICB9KVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGFjdGl2ZSBwYW5lIG1vbml0b3IgZm9yIGlPUyBzY3JvbGxpbmcgZml4ZXMgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyMTlweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcclxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gW2RhdGEtbWQtdG9nZ2xlXVwiLCBcImNoYW5nZVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuTmF2LlNjcm9sbGluZyhcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBuYXZcIikpKVxyXG5cclxuICAvKiBJbml0aWFsaXplIHNlYXJjaCwgaWYgYXZhaWxhYmxlICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9c2VhcmNoXVwiKSkge1xyXG5cclxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIGJvZHkgbG9jayBmb3IgbW9iaWxlICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk1OXB4KVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLFxyXG4gICAgICAgIG5ldyBNYXRlcmlhbC5TZWFyY2guTG9jayhcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpKSlcclxuXHJcbiAgICAvKiBDb21wb25lbnQ6IHNlYXJjaCByZXN1bHRzICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFtcclxuICAgICAgXCJmb2N1c1wiLCBcImtleXVwXCIsIFwiY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5TZWFyY2guUmVzdWx0KFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc3VsdF1cIiwgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLnVybC5iYXNlfS9pbmRleC5qc29uYCwge1xyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgZG9jLmxvY2F0aW9uID0gYCR7ZG9jLnBlcm1hbGlua31gXHJcbiAgICAgICAgICAgIHJldHVybiBkb2NcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pKS5saXN0ZW4oKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBpbnB1dCBhZnRlciBmb3JtIHJlc2V0ICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzZXRdXCIsIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgfSwgMTApXHJcbiAgICB9KS5saXN0ZW4oKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBpbnB1dCBhZnRlciBvcGVuaW5nIHNlYXJjaCAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIiwgXCJjaGFuZ2VcIiwgZXYgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KHRvZ2dsZSA9PiB7XHJcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNDAwLCBldi50YXJnZXQpXHJcbiAgICB9KS5saXN0ZW4oKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBvcGVuIHNlYXJjaCBvbiBmb2N1cyAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcclxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiLCBcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmICghdG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGtleWJvYXJkIGhhbmRsZXJzICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcImtleWRvd25cIiwgZXYgPT4geyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNwbGl0IHVwIGludG8gY29tcG9uZW50IHRvIHJlZHVjZSBjb21wbGV4aXR5XHJcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxyXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgLyogQWJvcnQgaWYgbWV0YSBrZXkgKG1hY09TKSBvciBjdHJsIGtleSAoV2luZG93cykgaXMgcHJlc3NlZCAqL1xyXG4gICAgICBpZiAoZXYubWV0YUtleSB8fCBldi5jdHJsS2V5KVxyXG4gICAgICAgIHJldHVyblxyXG5cclxuICAgICAgLyogU2VhcmNoIGlzIG9wZW4gKi9cclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgIC8qIEVudGVyOiBwcmV2ZW50IGZvcm0gc3VibWlzc2lvbiAqL1xyXG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgaWYgKHF1ZXJ5ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgIC8qIEdvIHRvIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgbGluayAqL1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9c2VhcmNoXSBbaHJlZl1bZGF0YS1tZC1zdGF0ZT1hY3RpdmVdXCIpXHJcbiAgICAgICAgICAgIGlmIChmb2N1cyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGZvY3VzLmdldEF0dHJpYnV0ZShcImhyZWZcIilcclxuXHJcbiAgICAgICAgICAgICAgLyogQ2xvc2Ugc2VhcmNoICovXHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICAgICAgICBxdWVyeS5ibHVyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBFc2NhcGUgb3IgVGFiOiBjbG9zZSBzZWFyY2ggKi9cclxuICAgICAgICB9IGVsc2UgaWYgKGV2LmtleUNvZGUgPT09IDkgfHwgZXYua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICAgIHF1ZXJ5LmJsdXIoKVxyXG5cclxuICAgICAgICAvKiBIb3Jpem9udGFsIGFycm93cyBhbmQgYmFja3NwYWNlOiBmb2N1cyBpbnB1dCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoWzgsIDM3LCAzOV0uaW5kZXhPZihldi5rZXlDb2RlKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChxdWVyeSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcclxuICAgICAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG5cclxuICAgICAgICAvKiBWZXJ0aWNhbCBhcnJvd3M6IHNlbGVjdCBwcmV2aW91cyBvciBuZXh0IHNlYXJjaCByZXN1bHQgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKFszOCwgNDBdLmluZGV4T2YoZXYua2V5Q29kZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCBrZXkgPSBldi5rZXlDb2RlXHJcblxyXG4gICAgICAgICAgLyogUmV0cmlldmUgYWxsIHJlc3VsdHMgKi9cclxuICAgICAgICAgIGNvbnN0IGxpbmtzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldLCBbZGF0YS1tZC1jb21wb25lbnQ9c2VhcmNoXSBbaHJlZl1cIikpXHJcblxyXG4gICAgICAgICAgLyogUmV0cmlldmUgY3VycmVudCBhY3RpdmUvZm9jdXNlZCByZXN1bHQgKi9cclxuICAgICAgICAgIGNvbnN0IGZvY3VzID0gbGlua3MuZmluZChsaW5rID0+IHtcclxuICAgICAgICAgICAgaWYgKCEobGluayBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmsuZGF0YXNldC5tZFN0YXRlID09PSBcImFjdGl2ZVwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKGZvY3VzKVxyXG4gICAgICAgICAgICBmb2N1cy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcblxyXG4gICAgICAgICAgLyogQ2FsY3VsYXRlIGluZGV4IGRlcGVuZGluZyBvbiBkaXJlY3Rpb24sIGFkZCBsZW5ndGggdG8gZm9ybSByaW5nICovXHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGgubWF4KDAsIChcclxuICAgICAgICAgICAgbGlua3MuaW5kZXhPZihmb2N1cykgKyBsaW5rcy5sZW5ndGggKyAoa2V5ID09PSAzOCA/IC0xIDogKzEpXHJcbiAgICAgICAgICApICUgbGlua3MubGVuZ3RoKVxyXG5cclxuICAgICAgICAgIC8qIFNldCBhY3RpdmUgc3RhdGUgYW5kIGZvY3VzICovXHJcbiAgICAgICAgICBpZiAobGlua3NbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGxpbmtzW2luZGV4XS5kYXRhc2V0Lm1kU3RhdGUgPSBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIGxpbmtzW2luZGV4XS5mb2N1cygpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogUHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSAqL1xyXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgICAvKiBSZXR1cm4gZmFsc2UgcHJldmVudHMgdGhlIGN1cnNvciBwb3NpdGlvbiBmcm9tIGNoYW5naW5nICovXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBTZWFyY2ggaXMgY2xvc2VkIGFuZCB3ZSdyZSBub3QgaW5zaWRlIGEgZm9ybSAqL1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuZm9ybSkge1xyXG5cclxuICAgICAgICAvKiBGL1M6IE9wZW4gc2VhcmNoIGlmIG5vdCBpbiBpbnB1dCBmaWVsZCAqL1xyXG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSA3MCB8fCBldi5rZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgcXVlcnkgaWYgaW4gc2VhcmNoIGlzIG9wZW4gYW5kIGNoYXJhY3RlciBpcyB0eXBlZCAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJrZXlwcmVzc1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxyXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXHJcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgIH1cclxuICAgIH0pLmxpc3RlbigpXHJcbiAgfVxyXG5cclxuICAvKiBMaXN0ZW5lcjogaGFuZGxlIHRhYmJpbmcgY29udGV4dCBmb3IgYmV0dGVyIGFjY2Vzc2liaWxpdHkgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIGV2ID0+IHtcclxuICAgIGlmIChldi5rZXlDb2RlID09PSA5KSB7XHJcbiAgICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gLm1kLW5hdl9fbGlua1tmb3JdOm5vdChbdGFiaW5kZXhdKVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxhYmVscywgbGFiZWwgPT4ge1xyXG4gICAgICAgIGlmIChsYWJlbC5vZmZzZXRIZWlnaHQpXHJcbiAgICAgICAgICBsYWJlbC50YWJJbmRleCA9IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICAvKiBMaXN0ZW5lcjogcmVzZXQgdGFiYmluZyBiZWhhdmlvciAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW3RhYmluZGV4XVwiKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsYWJlbHMsIGxhYmVsID0+IHtcclxuICAgICAgbGFiZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiSW5kZXhcIilcclxuICAgIH0pXHJcbiAgfSkubGlzdGVuKClcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuZGF0YXNldC5tZFN0YXRlID09PSBcInRhYmJpbmdcIilcclxuICAgICAgZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgfSlcclxuXHJcbiAgLyogTGlzdGVuZXI6IGNsb3NlIGRyYXdlciB3aGVuIGFuY2hvciBsaW5rcyBhcmUgY2xpY2tlZCAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gW2hyZWZePScjJ11cIixcclxuICAgICAgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1kcmF3ZXJdXCIpXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG5cclxuICAvKiBSZXRyaWV2ZSBmYWN0cyBmb3IgdGhlIGdpdmVuIHJlcG9zaXRvcnkgdHlwZSAqL1xyXG4gIDsoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtc291cmNlXVwiKVxyXG4gICAgaWYgKCFlbClcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSlcclxuICAgIGVsc2UgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgc3dpdGNoIChlbC5kYXRhc2V0Lm1kU291cmNlKSB7XHJcbiAgICAgIGNhc2UgXCJnaXRodWJcIjogcmV0dXJuIG5ldyBNYXRlcmlhbC5Tb3VyY2UuQWRhcHRlci5HaXRIdWIoZWwpLmZldGNoKClcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSlcclxuICAgIH1cclxuXHJcbiAgLyogUmVuZGVyIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gKi9cclxuICB9KSgpLnRoZW4oZmFjdHMgPT4ge1xyXG4gICAgY29uc3Qgc291cmNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNvdXJjZXMsIHNvdXJjZSA9PiB7XHJcbiAgICAgIG5ldyBNYXRlcmlhbC5Tb3VyY2UuUmVwb3NpdG9yeShzb3VyY2UpXHJcbiAgICAgICAgLmluaXRpYWxpemUoZmFjdHMpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXhwb3J0c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBQcm92aWRlIHRoaXMgZm9yIGRvd253YXJkIGNvbXBhdGliaWxpdHkgZm9yIG5vdyAqL1xyXG5jb25zdCBhcHAgPSB7XHJcbiAgaW5pdGlhbGl6ZVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGFwcFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvYXBwbGljYXRpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9naXRodWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRodWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBQb2x5ZmlsbCBmb3IgY3JlYXRpbmcgQ3VzdG9tRXZlbnRzIG9uIElFOS8xMC8xMVxuXG4vLyBjb2RlIHB1bGxlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Q0dG9jY2hpbmkvY3VzdG9tZXZlbnQtcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXG4oZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGNlID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudCgndGVzdCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICBjZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAvLyBJRSBoYXMgcHJvYmxlbXMgd2l0aCAucHJldmVudERlZmF1bHQoKSBvbiBjdXN0b20gZXZlbnRzXG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMzQ5MTkxXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbihldmVudCwgcGFyYW1zKSB7XG4gICAgICB2YXIgZXZ0LCBvcmlnUHJldmVudDtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICAgIH07XG5cbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHBhcmFtcy5idWJibGVzLFxuICAgICAgICBwYXJhbXMuY2FuY2VsYWJsZSxcbiAgICAgICAgcGFyYW1zLmRldGFpbFxuICAgICAgKTtcbiAgICAgIG9yaWdQcmV2ZW50ID0gZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9yaWdQcmV2ZW50LmNhbGwodGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZWZhdWx0UHJldmVudGVkJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9O1xuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbiAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDsgLy8gZXhwb3NlIGRlZmluaXRpb24gdG8gd2luZG93XG4gIH1cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50LXBvbHlmaWxsL3BvbHlmaWxsLmpzIiwiaWYgKCF3aW5kb3cuZmV0Y2gpIHdpbmRvdy5mZXRjaCA9IHJlcXVpcmUoJy4nKS5kZWZhdWx0IHx8IHJlcXVpcmUoJy4nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzIiwiaW1wb3J0IHByb21pc2VGaW5hbGx5IGZyb20gJy4vZmluYWxseSc7XG5cbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFhcnIgfHwgdHlwZW9mIGFyci5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpO1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJnc1tpXSA9IHZhbDtcbiAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiZcbiAgICBmdW5jdGlvbihmbikge1xuICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9KSB8fFxuICBmdW5jdGlvbihmbikge1xuICAgIHNldFRpbWVvdXRGdW5jKGZuLCAwKTtcbiAgfTtcblxuUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xuICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2luZGV4LmpzIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvKipcbiAqIEB0aGlzIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBmaW5hbGx5Q29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluYWxseUNvbnN0cnVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2ZpbmFsbHkuanMiLCIvKiFcbiAqIGNsaXBib2FyZC5qcyB2Mi4wLjFcbiAqIGh0dHBzOi8vemVub3JvY2hhLmdpdGh1Yi5pby9jbGlwYm9hcmQuanNcbiAqIFxuICogTGljZW5zZWQgTUlUIMKpIFplbm8gUm9jaGFcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2xpcGJvYXJkSlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ2xpcGJvYXJkSlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbbW9kdWxlLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgnc2VsZWN0JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2QgPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmYWN0b3J5KG1vZCwgZ2xvYmFsLnNlbGVjdCk7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24gPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfc2VsZWN0KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIF9zZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VsZWN0KTtcblxuICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgdmFyIENsaXBib2FyZEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZEFjdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmluaXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkQWN0aW9uLCBbe1xuICAgICAgICAgICAga2V5OiAncmVzb2x2ZU9wdGlvbnMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIgPSBvcHRpb25zLmVtaXR0ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnaW5pdFNlbGVjdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmFrZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3NlbGVjdEZha2UnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdEZha2UoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBpc1JUTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09ICdydGwnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spIHx8IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBib3ggbW9kZWxcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZVtpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCddID0gJy05OTk5cHgnO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICAgICAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUudG9wID0geVBvc2l0aW9uICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnZhbHVlID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLmZha2VFbGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3JlbW92ZUZha2UnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZha2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWtlRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZha2VFbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdzZWxlY3RUYXJnZXQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdFRhcmdldCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdjb3B5VGV4dCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29weVRleHQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2NlZWRlZCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKHRoaXMuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQoc3VjY2VlZGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnaGFuZGxlUmVzdWx0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZXN1bHQoc3VjY2VlZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoc3VjY2VlZGVkID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogdGhpcy5jbGVhclNlbGVjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NsZWFyU2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnYWN0aW9uJyxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdjb3B5JztcblxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hY3Rpb24gIT09ICdjb3B5JyAmJiB0aGlzLl9hY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAndGFyZ2V0JyxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmICh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjb3B5JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY3V0JyAmJiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSB8fCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiB2YWx1ZSwgdXNlIGEgdmFsaWQgRWxlbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkQWN0aW9uO1xuICAgIH0oKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gQ2xpcGJvYXJkQWN0aW9uO1xufSk7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIGRlbGVnYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHBhcmFtcyBhbmQgY2FsbHMgdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lciBmdW5jdGlvbiBiYXNlZCBvbiBpdHMgdGFyZ2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0YXJnZXQgJiYgIXR5cGUgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLnN0cmluZyh0eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICghaXMuZm4oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChpcy5ub2RlKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGUodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLm5vZGVMaXN0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGVMaXN0KHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5zdHJpbmcodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuU2VsZWN0b3IodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBIVE1MIGVsZW1lbnRcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlKG5vZGUsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBsaXN0IG9mIEhUTUwgZWxlbWVudHNcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IG5vZGVMaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZUxpc3Qobm9kZUxpc3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIHNlbGVjdG9yXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5TZWxlY3RvcihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0ZW47XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFttb2R1bGUsIF9fd2VicGFja19yZXF1aXJlX18oMCksIF9fd2VicGFja19yZXF1aXJlX18oMiksIF9fd2VicGFja19yZXF1aXJlX18oMSldLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCcuL2NsaXBib2FyZC1hY3Rpb24nKSwgcmVxdWlyZSgndGlueS1lbWl0dGVyJyksIHJlcXVpcmUoJ2dvb2QtbGlzdGVuZXInKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uLCBnbG9iYWwudGlueUVtaXR0ZXIsIGdsb2JhbC5nb29kTGlzdGVuZXIpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX2NsaXBib2FyZEFjdGlvbiwgX3RpbnlFbWl0dGVyLCBfZ29vZExpc3RlbmVyKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIF9jbGlwYm9hcmRBY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpcGJvYXJkQWN0aW9uKTtcblxuICAgIHZhciBfdGlueUVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGlueUVtaXR0ZXIpO1xuXG4gICAgdmFyIF9nb29kTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZExpc3RlbmVyKTtcblxuICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgICAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gICAgfVxuXG4gICAgdmFyIENsaXBib2FyZCA9IGZ1bmN0aW9uIChfRW1pdHRlcikge1xuICAgICAgICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDbGlwYm9hcmQodHJpZ2dlciwgb3B0aW9ucykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDbGlwYm9hcmQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGlwYm9hcmQpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICAgICAgX3RoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIGlmIGF0dHJpYnV0ZXMgd291bGQgYmUgcmVzb2x2ZWQgdXNpbmcgaW50ZXJuYWwgc2V0dGVyIGZ1bmN0aW9uc1xuICAgICAgICAgKiBvciBjdXN0b20gZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmQsIFt7XG4gICAgICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5hY3Rpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmFjdGlvbiA6IHRoaXMuZGVmYXVsdEFjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBvcHRpb25zLnRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGFyZ2V0IDogdGhpcy5kZWZhdWx0VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRleHQgOiB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gX3R5cGVvZihvcHRpb25zLmNvbnRhaW5lcikgPT09ICdvYmplY3QnID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdsaXN0ZW5DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9ICgwLCBfZ29vZExpc3RlbmVyMi5kZWZhdWx0KSh0cmlnZ2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ29uQ2xpY2snLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlwYm9hcmRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbmV3IF9jbGlwYm9hcmRBY3Rpb24yLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uKHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXI6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdEFjdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCdhY3Rpb24nLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdFRhcmdldCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRhcmdldCh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0QXR0cmlidXRlVmFsdWUoJ3RhcmdldCcsIHRyaWdnZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRUZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCd0ZXh0JywgdHJpZ2dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlwYm9hcmRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XSwgW3tcbiAgICAgICAgICAgIGtleTogJ2lzU3VwcG9ydGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2NvcHknLCAnY3V0J107XG5cbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9ucyA9IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gW2FjdGlvbl0gOiBhY3Rpb247XG4gICAgICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtcblxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnQgPSBzdXBwb3J0ICYmICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmQ7XG4gICAgfShfdGlueUVtaXR0ZXIyLmRlZmF1bHQpO1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3VmZml4XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSAnZGF0YS1jbGlwYm9hcmQtJyArIHN1ZmZpeDtcblxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gQ2xpcGJvYXJkO1xufSk7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbG9zZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmICh0eXBlID09PSAnW29iamVjdCBOb2RlTGlzdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpXG4gICAgICAgICYmICgnbGVuZ3RoJyBpbiB2YWx1ZSlcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLmZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIHNlbGVjdChlbGVtZW50KSB7XG4gICAgdmFyIHNlbGVjdGVkVGV4dDtcblxuICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIHZhciBpc1JlYWRPbmx5ID0gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCI7KGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBAcHJlc2VydmUgRmFzdENsaWNrOiBwb2x5ZmlsbCB0byByZW1vdmUgY2xpY2sgZGVsYXlzIG9uIGJyb3dzZXJzIHdpdGggdG91Y2ggVUlzLlxuXHQgKlxuXHQgKiBAY29kaW5nc3RhbmRhcmQgZnRsYWJzLWpzdjJcblx0ICogQGNvcHlyaWdodCBUaGUgRmluYW5jaWFsIFRpbWVzIExpbWl0ZWQgW0FsbCBSaWdodHMgUmVzZXJ2ZWRdXG5cdCAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChzZWUgTElDRU5TRS50eHQpXG5cdCAqL1xuXG5cdC8qanNsaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblx0LypnbG9iYWwgZGVmaW5lLCBFdmVudCwgTm9kZSovXG5cblxuXHQvKipcblx0ICogSW5zdGFudGlhdGUgZmFzdC1jbGlja2luZyBsaXN0ZW5lcnMgb24gdGhlIHNwZWNpZmllZCBsYXllci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0ZnVuY3Rpb24gRmFzdENsaWNrKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0dmFyIG9sZE9uQ2xpY2s7XG5cblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZXRoZXIgYSBjbGljayBpcyBjdXJyZW50bHkgYmVpbmcgdHJhY2tlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGltZXN0YW1wIGZvciB3aGVuIGNsaWNrIHRyYWNraW5nIHN0YXJ0ZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBlbGVtZW50IGJlaW5nIHRyYWNrZWQgZm9yIGEgY2xpY2suXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFdmVudFRhcmdldFxuXHRcdCAqL1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFgtY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFggPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBZLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRZID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogSUQgb2YgdGhlIGxhc3QgdG91Y2gsIHJldHJpZXZlZCBmcm9tIFRvdWNoLmlkZW50aWZpZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUb3VjaG1vdmUgYm91bmRhcnksIGJleW9uZCB3aGljaCBhIGNsaWNrIHdpbGwgYmUgY2FuY2VsbGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaEJvdW5kYXJ5ID0gb3B0aW9ucy50b3VjaEJvdW5kYXJ5IHx8IDEwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgRmFzdENsaWNrIGxheWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRWxlbWVudFxuXHRcdCAqL1xuXHRcdHRoaXMubGF5ZXIgPSBsYXllcjtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtaW5pbXVtIHRpbWUgYmV0d2VlbiB0YXAodG91Y2hzdGFydCBhbmQgdG91Y2hlbmQpIGV2ZW50c1xuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBEZWxheSA9IG9wdGlvbnMudGFwRGVsYXkgfHwgMjAwO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1heGltdW0gdGltZSBmb3IgYSB0YXBcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwVGltZW91dCA9IG9wdGlvbnMudGFwVGltZW91dCB8fCA3MDA7XG5cblx0XHRpZiAoRmFzdENsaWNrLm5vdE5lZWRlZChsYXllcikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBBbmRyb2lkIGRvbid0IGhhdmUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0XHRmdW5jdGlvbiBiaW5kKG1ldGhvZCwgY29udGV4dCkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7IH07XG5cdFx0fVxuXG5cblx0XHR2YXIgbWV0aG9kcyA9IFsnb25Nb3VzZScsICdvbkNsaWNrJywgJ29uVG91Y2hTdGFydCcsICdvblRvdWNoTW92ZScsICdvblRvdWNoRW5kJywgJ29uVG91Y2hDYW5jZWwnXTtcblx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBtZXRob2RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0Y29udGV4dFttZXRob2RzW2ldXSA9IGJpbmQoY29udGV4dFttZXRob2RzW2ldXSwgY29udGV4dCk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzIGFzIHJlcXVpcmVkXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hDYW5jZWwsIGZhbHNlKTtcblxuXHRcdC8vIEhhY2sgaXMgcmVxdWlyZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdC8vIHdoaWNoIGlzIGhvdyBGYXN0Q2xpY2sgbm9ybWFsbHkgc3RvcHMgY2xpY2sgZXZlbnRzIGJ1YmJsaW5nIHRvIGNhbGxiYWNrcyByZWdpc3RlcmVkIG9uIHRoZSBGYXN0Q2xpY2tcblx0XHQvLyBsYXllciB3aGVuIHRoZXkgYXJlIGNhbmNlbGxlZC5cblx0XHRpZiAoIUV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXHRcdFx0XHR2YXIgcm12ID0gTm9kZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdjbGljaycpIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2suaGlqYWNrZWQgfHwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXHRcdFx0XHR2YXIgYWR2ID0gTm9kZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdjbGljaycpIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2suaGlqYWNrZWQgfHwgKGNhbGxiYWNrLmhpamFja2VkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdGlmICghZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSwgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIGhhbmRsZXIgaXMgYWxyZWFkeSBkZWNsYXJlZCBpbiB0aGUgZWxlbWVudCdzIG9uY2xpY2sgYXR0cmlidXRlLCBpdCB3aWxsIGJlIGZpcmVkIGJlZm9yZVxuXHRcdC8vIEZhc3RDbGljaydzIG9uQ2xpY2sgaGFuZGxlci4gRml4IHRoaXMgYnkgcHVsbGluZyBvdXQgdGhlIHVzZXItZGVmaW5lZCBoYW5kbGVyIGZ1bmN0aW9uIGFuZFxuXHRcdC8vIGFkZGluZyBpdCBhcyBsaXN0ZW5lci5cblx0XHRpZiAodHlwZW9mIGxheWVyLm9uY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblxuXHRcdFx0Ly8gQW5kcm9pZCBicm93c2VyIG9uIGF0IGxlYXN0IDMuMiByZXF1aXJlcyBhIG5ldyByZWZlcmVuY2UgdG8gdGhlIGZ1bmN0aW9uIGluIGxheWVyLm9uY2xpY2tcblx0XHRcdC8vIC0gdGhlIG9sZCBvbmUgd29uJ3Qgd29yayBpZiBwYXNzZWQgdG8gYWRkRXZlbnRMaXN0ZW5lciBkaXJlY3RseS5cblx0XHRcdG9sZE9uQ2xpY2sgPSBsYXllci5vbmNsaWNrO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRvbGRPbkNsaWNrKGV2ZW50KTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdGxheWVyLm9uY2xpY2sgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIFdpbmRvd3MgUGhvbmUgOC4xIGZha2VzIHVzZXIgYWdlbnQgc3RyaW5nIHRvIGxvb2sgbGlrZSBBbmRyb2lkIGFuZCBpUGhvbmUuXG5cdCpcblx0KiBAdHlwZSBib29sZWFuXG5cdCovXG5cdHZhciBkZXZpY2VJc1dpbmRvd3NQaG9uZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgUGhvbmVcIikgPj0gMDtcblxuXHQvKipcblx0ICogQW5kcm9pZCByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNBbmRyb2lkID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwICYmICFkZXZpY2VJc1dpbmRvd3NQaG9uZTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TID0gL2lQKGFkfGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFkZXZpY2VJc1dpbmRvd3NQaG9uZTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgNCByZXF1aXJlcyBhbiBleGNlcHRpb24gZm9yIHNlbGVjdCBlbGVtZW50cy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TNCA9IGRldmljZUlzSU9TICYmICgvT1MgNF9cXGQoX1xcZCk/LykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgNi4wLTcuKiByZXF1aXJlcyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gYmUgbWFudWFsbHkgZGVyaXZlZFxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyBbNi03XV9cXGQvKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cdC8qKlxuXHQgKiBCbGFja0JlcnJ5IHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0JsYWNrQmVycnkxMCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQkIxMCcpID4gMDtcblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgbmF0aXZlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBuZWVkcyBhIG5hdGl2ZSBjbGlja1xuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0NsaWNrID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayB0byBkaXNhYmxlZCBpbnB1dHMgKGlzc3VlICM2Milcblx0XHRjYXNlICdidXR0b24nOlxuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0aWYgKHRhcmdldC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXG5cdFx0XHQvLyBGaWxlIGlucHV0cyBuZWVkIHJlYWwgY2xpY2tzIG9uIGlPUyA2IGR1ZSB0byBhIGJyb3dzZXIgYnVnIChpc3N1ZSAjNjgpXG5cdFx0XHRpZiAoKGRldmljZUlzSU9TICYmIHRhcmdldC50eXBlID09PSAnZmlsZScpIHx8IHRhcmdldC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbGFiZWwnOlxuXHRcdGNhc2UgJ2lmcmFtZSc6IC8vIGlPUzggaG9tZXNjcmVlbiBhcHBzIGNhbiBwcmV2ZW50IGV2ZW50cyBidWJibGluZyBpbnRvIGZyYW1lc1xuXHRcdGNhc2UgJ3ZpZGVvJzpcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAoL1xcYm5lZWRzY2xpY2tcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIGNhbGwgdG8gZm9jdXMgdG8gc2ltdWxhdGUgY2xpY2sgaW50byBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCByZXF1aXJlcyBhIGNhbGwgdG8gZm9jdXMgdG8gc2ltdWxhdGUgbmF0aXZlIGNsaWNrLlxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0ZvY3VzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gIWRldmljZUlzQW5kcm9pZDtcblx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRzd2l0Y2ggKHRhcmdldC50eXBlKSB7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0Y2FzZSAnZmlsZSc6XG5cdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5vIHBvaW50IGluIGF0dGVtcHRpbmcgdG8gZm9jdXMgZGlzYWJsZWQgaW5wdXRzXG5cdFx0XHRyZXR1cm4gIXRhcmdldC5kaXNhYmxlZCAmJiAhdGFyZ2V0LnJlYWRPbmx5O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKC9cXGJuZWVkc2ZvY3VzXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogU2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnNlbmRDbGljayA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQsIGV2ZW50KSB7XG5cdFx0dmFyIGNsaWNrRXZlbnQsIHRvdWNoO1xuXG5cdFx0Ly8gT24gc29tZSBBbmRyb2lkIGRldmljZXMgYWN0aXZlRWxlbWVudCBuZWVkcyB0byBiZSBibHVycmVkIG90aGVyd2lzZSB0aGUgc3ludGhldGljIGNsaWNrIHdpbGwgaGF2ZSBubyBlZmZlY3QgKCMyNClcblx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblx0XHR9XG5cblx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0Ly8gU3ludGhlc2lzZSBhIGNsaWNrIGV2ZW50LCB3aXRoIGFuIGV4dHJhIGF0dHJpYnV0ZSBzbyBpdCBjYW4gYmUgdHJhY2tlZFxuXHRcdGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcblx0XHRjbGlja0V2ZW50LmluaXRNb3VzZUV2ZW50KHRoaXMuZGV0ZXJtaW5lRXZlbnRUeXBlKHRhcmdldEVsZW1lbnQpLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsIHRvdWNoLnNjcmVlblgsIHRvdWNoLnNjcmVlblksIHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcblx0XHRjbGlja0V2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQgPSB0cnVlO1xuXHRcdHRhcmdldEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcblx0fTtcblxuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmRldGVybWluZUV2ZW50VHlwZSA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblxuXHRcdC8vSXNzdWUgIzE1OTogQW5kcm9pZCBDaHJvbWUgU2VsZWN0IEJveCBkb2VzIG5vdCBvcGVuIHdpdGggYSBzeW50aGV0aWMgY2xpY2sgZXZlbnRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkICYmIHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuXHRcdFx0cmV0dXJuICdtb3VzZWRvd24nO1xuXHRcdH1cblxuXHRcdHJldHVybiAnY2xpY2snO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0Ly8gSXNzdWUgIzE2MDogb24gaU9TIDcsIHNvbWUgaW5wdXQgZWxlbWVudHMgKGUuZy4gZGF0ZSBkYXRldGltZSBtb250aCkgdGhyb3cgYSB2YWd1ZSBUeXBlRXJyb3Igb24gc2V0U2VsZWN0aW9uUmFuZ2UuIFRoZXNlIGVsZW1lbnRzIGRvbid0IGhhdmUgYW4gaW50ZWdlciB2YWx1ZSBmb3IgdGhlIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgcHJvcGVydGllcywgYnV0IHVuZm9ydHVuYXRlbHkgdGhhdCBjYW4ndCBiZSB1c2VkIGZvciBkZXRlY3Rpb24gYmVjYXVzZSBhY2Nlc3NpbmcgdGhlIHByb3BlcnRpZXMgYWxzbyB0aHJvd3MgYSBUeXBlRXJyb3IuIEp1c3QgY2hlY2sgdGhlIHR5cGUgaW5zdGVhZC4gRmlsZWQgYXMgQXBwbGUgYnVnICMxNTEyMjcyNC5cblx0XHRpZiAoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSAmJiB0YXJnZXRFbGVtZW50LnR5cGUuaW5kZXhPZignZGF0ZScpICE9PSAwICYmIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3RpbWUnICYmIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ21vbnRoJykge1xuXHRcdFx0bGVuZ3RoID0gdGFyZ2V0RWxlbWVudC52YWx1ZS5sZW5ndGg7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGxlbmd0aCwgbGVuZ3RoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciBhbmQgaWYgc28sIHNldCBhIGZsYWcgb24gaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS51cGRhdGVTY3JvbGxQYXJlbnQgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIHNjcm9sbFBhcmVudCwgcGFyZW50RWxlbWVudDtcblxuXHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXG5cdFx0Ly8gQXR0ZW1wdCB0byBkaXNjb3ZlciB3aGV0aGVyIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBjb250YWluZWQgd2l0aGluIGEgc2Nyb2xsYWJsZSBsYXllci4gUmUtY2hlY2sgaWYgdGhlXG5cdFx0Ly8gdGFyZ2V0IGVsZW1lbnQgd2FzIG1vdmVkIHRvIGFub3RoZXIgcGFyZW50LlxuXHRcdGlmICghc2Nyb2xsUGFyZW50IHx8ICFzY3JvbGxQYXJlbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpIHtcblx0XHRcdHBhcmVudEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRpZiAocGFyZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgPiBwYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuXHRcdFx0XHRcdHNjcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH0gd2hpbGUgKHBhcmVudEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdC8vIEFsd2F5cyB1cGRhdGUgdGhlIHNjcm9sbCB0b3AgdHJhY2tlciBpZiBwb3NzaWJsZS5cblx0XHRpZiAoc2Nyb2xsUGFyZW50KSB7XG5cdFx0XHRzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCA9IHNjcm9sbFBhcmVudC5zY3JvbGxUb3A7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IHRhcmdldEVsZW1lbnRcblx0ICogQHJldHVybnMge0VsZW1lbnR8RXZlbnRUYXJnZXR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQgPSBmdW5jdGlvbihldmVudFRhcmdldCkge1xuXG5cdFx0Ly8gT24gc29tZSBvbGRlciBicm93c2VycyAobm90YWJseSBTYWZhcmkgb24gaU9TIDQuMSAtIHNlZSBpc3N1ZSAjNTYpIHRoZSBldmVudCB0YXJnZXQgbWF5IGJlIGEgdGV4dCBub2RlLlxuXHRcdGlmIChldmVudFRhcmdldC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcblx0XHRcdHJldHVybiBldmVudFRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudFRhcmdldDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBzdGFydCwgcmVjb3JkIHRoZSBwb3NpdGlvbiBhbmQgc2Nyb2xsIG9mZnNldC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRhcmdldEVsZW1lbnQsIHRvdWNoLCBzZWxlY3Rpb247XG5cblx0XHQvLyBJZ25vcmUgbXVsdGlwbGUgdG91Y2hlcywgb3RoZXJ3aXNlIHBpbmNoLXRvLXpvb20gaXMgcHJldmVudGVkIGlmIGJvdGggZmluZ2VycyBhcmUgb24gdGhlIEZhc3RDbGljayBlbGVtZW50IChpc3N1ZSAjMTExKS5cblx0XHRpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0YXJnZXRFbGVtZW50ID0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdFx0dG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xuXG5cdFx0aWYgKGRldmljZUlzSU9TKSB7XG5cblx0XHRcdC8vIE9ubHkgdHJ1c3RlZCBldmVudHMgd2lsbCBkZXNlbGVjdCB0ZXh0IG9uIGlPUyAoaXNzdWUgIzQ5KVxuXHRcdFx0c2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdFx0aWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ICYmICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdFx0Ly8gV2VpcmQgdGhpbmdzIGhhcHBlbiBvbiBpT1Mgd2hlbiBhbiBhbGVydCBvciBjb25maXJtIGRpYWxvZyBpcyBvcGVuZWQgZnJvbSBhIGNsaWNrIGV2ZW50IGNhbGxiYWNrIChpc3N1ZSAjMjMpOlxuXHRcdFx0XHQvLyB3aGVuIHRoZSB1c2VyIG5leHQgdGFwcyBhbnl3aGVyZSBlbHNlIG9uIHRoZSBwYWdlLCBuZXcgdG91Y2hzdGFydCBhbmQgdG91Y2hlbmQgZXZlbnRzIGFyZSBkaXNwYXRjaGVkXG5cdFx0XHRcdC8vIHdpdGggdGhlIHNhbWUgaWRlbnRpZmllciBhcyB0aGUgdG91Y2ggZXZlbnQgdGhhdCBwcmV2aW91c2x5IHRyaWdnZXJlZCB0aGUgY2xpY2sgdGhhdCB0cmlnZ2VyZWQgdGhlIGFsZXJ0LlxuXHRcdFx0XHQvLyBTYWRseSwgdGhlcmUgaXMgYW4gaXNzdWUgb24gaU9TIDQgdGhhdCBjYXVzZXMgc29tZSBub3JtYWwgdG91Y2ggZXZlbnRzIHRvIGhhdmUgdGhlIHNhbWUgaWRlbnRpZmllciBhcyBhblxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBwcmVjZWVkaW5nIHRvdWNoIGV2ZW50IChpc3N1ZSAjNTIpLCBzbyB0aGlzIGZpeCBpcyB1bmF2YWlsYWJsZSBvbiB0aGF0IHBsYXRmb3JtLlxuXHRcdFx0XHQvLyBJc3N1ZSAxMjA6IHRvdWNoLmlkZW50aWZpZXIgaXMgMCB3aGVuIENocm9tZSBkZXYgdG9vbHMgJ0VtdWxhdGUgdG91Y2ggZXZlbnRzJyBpcyBzZXQgd2l0aCBhbiBpT1MgZGV2aWNlIFVBIHN0cmluZyxcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGFsbCB0b3VjaCBldmVudHMgdG8gYmUgaWdub3JlZC4gQXMgdGhpcyBibG9jayBvbmx5IGFwcGxpZXMgdG8gaU9TLCBhbmQgaU9TIGlkZW50aWZpZXJzIGFyZSBhbHdheXMgbG9uZyxcblx0XHRcdFx0Ly8gcmFuZG9tIGludGVnZXJzLCBpdCdzIHNhZmUgdG8gdG8gY29udGludWUgaWYgdGhlIGlkZW50aWZpZXIgaXMgMCBoZXJlLlxuXHRcdFx0XHRpZiAodG91Y2guaWRlbnRpZmllciAmJiB0b3VjaC5pZGVudGlmaWVyID09PSB0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyICh1c2luZyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIGFuZDpcblx0XHRcdFx0Ly8gMSkgdGhlIHVzZXIgZG9lcyBhIGZsaW5nIHNjcm9sbCBvbiB0aGUgc2Nyb2xsYWJsZSBsYXllclxuXHRcdFx0XHQvLyAyKSB0aGUgdXNlciBzdG9wcyB0aGUgZmxpbmcgc2Nyb2xsIHdpdGggYW5vdGhlciB0YXBcblx0XHRcdFx0Ly8gdGhlbiB0aGUgZXZlbnQudGFyZ2V0IG9mIHRoZSBsYXN0ICd0b3VjaGVuZCcgZXZlbnQgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB1bmRlciB0aGUgdXNlcidzIGZpbmdlclxuXHRcdFx0XHQvLyB3aGVuIHRoZSBmbGluZyBzY3JvbGwgd2FzIHN0YXJ0ZWQsIGNhdXNpbmcgRmFzdENsaWNrIHRvIHNlbmQgYSBjbGljayBldmVudCB0byB0aGF0IGxheWVyIC0gdW5sZXNzIGEgY2hlY2tcblx0XHRcdFx0Ly8gaXMgbWFkZSB0byBlbnN1cmUgdGhhdCBhIHBhcmVudCBsYXllciB3YXMgbm90IHNjcm9sbGVkIGJlZm9yZSBzZW5kaW5nIGEgc3ludGhldGljIGNsaWNrIChpc3N1ZSAjNDIpLlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNjcm9sbFBhcmVudCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSB0cnVlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gZXZlbnQudGltZVN0YW1wO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gdG91Y2gucGFnZVg7XG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IHRvdWNoLnBhZ2VZO1xuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEJhc2VkIG9uIGEgdG91Y2htb3ZlIGV2ZW50IG9iamVjdCwgY2hlY2sgd2hldGhlciB0aGUgdG91Y2ggaGFzIG1vdmVkIHBhc3QgYSBib3VuZGFyeSBzaW5jZSBpdCBzdGFydGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudG91Y2hIYXNNb3ZlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sIGJvdW5kYXJ5ID0gdGhpcy50b3VjaEJvdW5kYXJ5O1xuXG5cdFx0aWYgKE1hdGguYWJzKHRvdWNoLnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgPiBib3VuZGFyeSB8fCBNYXRoLmFicyh0b3VjaC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpID4gYm91bmRhcnkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGxhc3QgcG9zaXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSB0b3VjaCBoYXMgbW92ZWQsIGNhbmNlbCB0aGUgY2xpY2sgdHJhY2tpbmdcblx0XHRpZiAodGhpcy50YXJnZXRFbGVtZW50ICE9PSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KSB8fCB0aGlzLnRvdWNoSGFzTW92ZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQXR0ZW1wdCB0byBmaW5kIHRoZSBsYWJlbGxlZCBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbGFiZWwgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxIVE1MTGFiZWxFbGVtZW50fSBsYWJlbEVsZW1lbnRcblx0ICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZmluZENvbnRyb2wgPSBmdW5jdGlvbihsYWJlbEVsZW1lbnQpIHtcblxuXHRcdC8vIEZhc3QgcGF0aCBmb3IgbmV3ZXIgYnJvd3NlcnMgc3VwcG9ydGluZyB0aGUgSFRNTDUgY29udHJvbCBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50LmNvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5jb250cm9sO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBicm93c2VycyB1bmRlciB0ZXN0IHRoYXQgc3VwcG9ydCB0b3VjaCBldmVudHMgYWxzbyBzdXBwb3J0IHRoZSBIVE1MNSBodG1sRm9yIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuaHRtbEZvcikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsRWxlbWVudC5odG1sRm9yKTtcblx0XHR9XG5cblx0XHQvLyBJZiBubyBmb3IgYXR0cmlidXRlIGV4aXN0cywgYXR0ZW1wdCB0byByZXRyaWV2ZSB0aGUgZmlyc3QgbGFiZWxsYWJsZSBkZXNjZW5kYW50IGVsZW1lbnRcblx0XHQvLyB0aGUgbGlzdCBvZiB3aGljaCBpcyBkZWZpbmVkIGhlcmU6IGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGFiZWxcblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCBrZXlnZW4sIG1ldGVyLCBvdXRwdXQsIHByb2dyZXNzLCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggZW5kLCBkZXRlcm1pbmUgd2hldGhlciB0byBzZW5kIGEgY2xpY2sgZXZlbnQgYXQgb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBmb3JFbGVtZW50LCB0cmFja2luZ0NsaWNrU3RhcnQsIHRhcmdldFRhZ05hbWUsIHNjcm9sbFBhcmVudCwgdG91Y2gsIHRhcmdldEVsZW1lbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQ7XG5cblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5KSB7XG5cdFx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0KSA+IHRoaXMudGFwVGltZW91dCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUmVzZXQgdG8gcHJldmVudCB3cm9uZyBjbGljayBjYW5jZWwgb24gaW5wdXQgKGlzc3VlICMxNTYpLlxuXHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gZmFsc2U7XG5cblx0XHR0aGlzLmxhc3RDbGlja1RpbWUgPSBldmVudC50aW1lU3RhbXA7XG5cblx0XHR0cmFja2luZ0NsaWNrU3RhcnQgPSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydDtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IDA7XG5cblx0XHQvLyBPbiBzb21lIGlPUyBkZXZpY2VzLCB0aGUgdGFyZ2V0RWxlbWVudCBzdXBwbGllZCB3aXRoIHRoZSBldmVudCBpcyBpbnZhbGlkIGlmIHRoZSBsYXllclxuXHRcdC8vIGlzIHBlcmZvcm1pbmcgYSB0cmFuc2l0aW9uIG9yIHNjcm9sbCwgYW5kIGhhcyB0byBiZSByZS1kZXRlY3RlZCBtYW51YWxseS4gTm90ZSB0aGF0XG5cdFx0Ly8gZm9yIHRoaXMgdG8gZnVuY3Rpb24gY29ycmVjdGx5LCBpdCBtdXN0IGJlIGNhbGxlZCAqYWZ0ZXIqIHRoZSBldmVudCB0YXJnZXQgaXMgY2hlY2tlZCFcblx0XHQvLyBTZWUgaXNzdWUgIzU3OyBhbHNvIGZpbGVkIGFzIHJkYXI6Ly8xMzA0ODU4OSAuXG5cdFx0aWYgKGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCkge1xuXHRcdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdFx0Ly8gSW4gY2VydGFpbiBjYXNlcyBhcmd1bWVudHMgb2YgZWxlbWVudEZyb21Qb2ludCBjYW4gYmUgbmVnYXRpdmUsIHNvIHByZXZlbnQgc2V0dGluZyB0YXJnZXRFbGVtZW50IHRvIG51bGxcblx0XHRcdHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgfHwgdGFyZ2V0RWxlbWVudDtcblx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gdGhpcy50YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHR9XG5cblx0XHR0YXJnZXRUYWdOYW1lID0gdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKHRhcmdldFRhZ05hbWUgPT09ICdsYWJlbCcpIHtcblx0XHRcdGZvckVsZW1lbnQgPSB0aGlzLmZpbmRDb250cm9sKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0aWYgKGZvckVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5mb2N1cyh0YXJnZXRFbGVtZW50KTtcblx0XHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQgPSBmb3JFbGVtZW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5uZWVkc0ZvY3VzKHRhcmdldEVsZW1lbnQpKSB7XG5cblx0XHRcdC8vIENhc2UgMTogSWYgdGhlIHRvdWNoIHN0YXJ0ZWQgYSB3aGlsZSBhZ28gKGJlc3QgZ3Vlc3MgaXMgMTAwbXMgYmFzZWQgb24gdGVzdHMgZm9yIGlzc3VlICMzNikgdGhlbiBmb2N1cyB3aWxsIGJlIHRyaWdnZXJlZCBhbnl3YXkuIFJldHVybiBlYXJseSBhbmQgdW5zZXQgdGhlIHRhcmdldCBlbGVtZW50IHJlZmVyZW5jZSBzbyB0aGF0IHRoZSBzdWJzZXF1ZW50IGNsaWNrIHdpbGwgYmUgYWxsb3dlZCB0aHJvdWdoLlxuXHRcdFx0Ly8gQ2FzZSAyOiBXaXRob3V0IHRoaXMgZXhjZXB0aW9uIGZvciBpbnB1dCBlbGVtZW50cyB0YXBwZWQgd2hlbiB0aGUgZG9jdW1lbnQgaXMgY29udGFpbmVkIGluIGFuIGlmcmFtZSwgdGhlbiBhbnkgaW5wdXR0ZWQgdGV4dCB3b24ndCBiZSB2aXNpYmxlIGV2ZW4gdGhvdWdoIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgaXMgdXBkYXRlZCBhcyB0aGUgdXNlciB0eXBlcyAoaXNzdWUgIzM3KS5cblx0XHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdHJhY2tpbmdDbGlja1N0YXJ0KSA+IDEwMCB8fCAoZGV2aWNlSXNJT1MgJiYgd2luZG93LnRvcCAhPT0gd2luZG93ICYmIHRhcmdldFRhZ05hbWUgPT09ICdpbnB1dCcpKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5mb2N1cyh0YXJnZXRFbGVtZW50KTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblxuXHRcdFx0Ly8gU2VsZWN0IGVsZW1lbnRzIG5lZWQgdGhlIGV2ZW50IHRvIGdvIHRocm91Z2ggb24gaU9TIDQsIG90aGVyd2lzZSB0aGUgc2VsZWN0b3IgbWVudSB3b24ndCBvcGVuLlxuXHRcdFx0Ly8gQWxzbyB0aGlzIGJyZWFrcyBvcGVuaW5nIHNlbGVjdHMgd2hlbiBWb2ljZU92ZXIgaXMgYWN0aXZlIG9uIGlPUzYsIGlPUzcgKGFuZCBwb3NzaWJseSBvdGhlcnMpXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TIHx8IHRhcmdldFRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MgJiYgIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIGV2ZW50IGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBjb250YWluZWQgd2l0aGluIGEgcGFyZW50IGxheWVyIHRoYXQgd2FzIHNjcm9sbGVkXG5cdFx0XHQvLyBhbmQgdGhpcyB0YXAgaXMgYmVpbmcgdXNlZCB0byBzdG9wIHRoZSBzY3JvbGxpbmcgKHVzdWFsbHkgaW5pdGlhdGVkIGJ5IGEgZmxpbmcgLSBpc3N1ZSAjNDIpLlxuXHRcdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0XHRpZiAoc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wICE9PSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgdGhlIGFjdHVhbCBjbGljayBmcm9tIGdvaW5nIHRob3VnaCAtIHVubGVzcyB0aGUgdGFyZ2V0IG5vZGUgaXMgbWFya2VkIGFzIHJlcXVpcmluZ1xuXHRcdC8vIHJlYWwgY2xpY2tzIG9yIGlmIGl0IGlzIGluIHRoZSB3aGl0ZWxpc3QgaW4gd2hpY2ggY2FzZSBvbmx5IG5vbi1wcm9ncmFtbWF0aWMgY2xpY2tzIGFyZSBwZXJtaXR0ZWQuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGFyZ2V0RWxlbWVudCkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGNhbmNlbCwgc3RvcCB0cmFja2luZyB0aGUgY2xpY2suXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgbW91c2UgZXZlbnRzIHdoaWNoIHNob3VsZCBiZSBwZXJtaXR0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vbk1vdXNlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdC8vIElmIGEgdGFyZ2V0IGVsZW1lbnQgd2FzIG5ldmVyIHNldCAoYmVjYXVzZSBhIHRvdWNoIGV2ZW50IHdhcyBuZXZlciBmaXJlZCkgYWxsb3cgdGhlIGV2ZW50XG5cdFx0aWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcm9ncmFtbWF0aWNhbGx5IGdlbmVyYXRlZCBldmVudHMgdGFyZ2V0aW5nIGEgc3BlY2lmaWMgZWxlbWVudCBzaG91bGQgYmUgcGVybWl0dGVkXG5cdFx0aWYgKCFldmVudC5jYW5jZWxhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBEZXJpdmUgYW5kIGNoZWNrIHRoZSB0YXJnZXQgZWxlbWVudCB0byBzZWUgd2hldGhlciB0aGUgbW91c2UgZXZlbnQgbmVlZHMgdG8gYmUgcGVybWl0dGVkO1xuXHRcdC8vIHVubGVzcyBleHBsaWNpdGx5IGVuYWJsZWQsIHByZXZlbnQgbm9uLXRvdWNoIGNsaWNrIGV2ZW50cyBmcm9tIHRyaWdnZXJpbmcgYWN0aW9ucyxcblx0XHQvLyB0byBwcmV2ZW50IGdob3N0L2RvdWJsZWNsaWNrcy5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0aGlzLnRhcmdldEVsZW1lbnQpIHx8IHRoaXMuY2FuY2VsTmV4dENsaWNrKSB7XG5cblx0XHRcdC8vIFByZXZlbnQgYW55IHVzZXItYWRkZWQgbGlzdGVuZXJzIGRlY2xhcmVkIG9uIEZhc3RDbGljayBlbGVtZW50IGZyb20gYmVpbmcgZmlyZWQuXG5cdFx0XHRpZiAoZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJ0IG9mIHRoZSBoYWNrIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHRcdFx0ZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FuY2VsIHRoZSBldmVudFxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG1vdXNlIGV2ZW50IGlzIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiBhY3R1YWwgY2xpY2tzLCBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGEgdG91Y2gtZ2VuZXJhdGVkIGNsaWNrLCBhIGNsaWNrIGFjdGlvbiBvY2N1cnJpbmdcblx0ICogbmF0dXJhbGx5IGFmdGVyIGEgZGVsYXkgYWZ0ZXIgYSB0b3VjaCAod2hpY2ggbmVlZHMgdG8gYmUgY2FuY2VsbGVkIHRvIGF2b2lkIGR1cGxpY2F0aW9uKSwgb3Jcblx0ICogYW4gYWN0dWFsIGNsaWNrIHdoaWNoIHNob3VsZCBiZSBwZXJtaXR0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgcGVybWl0dGVkO1xuXG5cdFx0Ly8gSXQncyBwb3NzaWJsZSBmb3IgYW5vdGhlciBGYXN0Q2xpY2stbGlrZSBsaWJyYXJ5IGRlbGl2ZXJlZCB3aXRoIHRoaXJkLXBhcnR5IGNvZGUgdG8gZmlyZSBhIGNsaWNrIGV2ZW50IGJlZm9yZSBGYXN0Q2xpY2sgZG9lcyAoaXNzdWUgIzQ0KS4gSW4gdGhhdCBjYXNlLCBzZXQgdGhlIGNsaWNrLXRyYWNraW5nIGZsYWcgYmFjayB0byBmYWxzZSBhbmQgcmV0dXJuIGVhcmx5LiBUaGlzIHdpbGwgY2F1c2Ugb25Ub3VjaEVuZCB0byByZXR1cm4gZWFybHkuXG5cdFx0aWYgKHRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gVmVyeSBvZGQgYmVoYXZpb3VyIG9uIGlPUyAoaXNzdWUgIzE4KTogaWYgYSBzdWJtaXQgZWxlbWVudCBpcyBwcmVzZW50IGluc2lkZSBhIGZvcm0gYW5kIHRoZSB1c2VyIGhpdHMgZW50ZXIgaW4gdGhlIGlPUyBzaW11bGF0b3Igb3IgY2xpY2tzIHRoZSBHbyBidXR0b24gb24gdGhlIHBvcC11cCBPUyBrZXlib2FyZCB0aGUgYSBraW5kIG9mICdmYWtlJyBjbGljayBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aXRoIHRoZSBzdWJtaXQtdHlwZSBpbnB1dCBlbGVtZW50IGFzIHRoZSB0YXJnZXQuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiBldmVudC5kZXRhaWwgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHBlcm1pdHRlZCA9IHRoaXMub25Nb3VzZShldmVudCk7XG5cblx0XHQvLyBPbmx5IHVuc2V0IHRhcmdldEVsZW1lbnQgaWYgdGhlIGNsaWNrIGlzIG5vdCBwZXJtaXR0ZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2hlY2sgZm9yICF0YXJnZXRFbGVtZW50IGluIG9uTW91c2UgZmFpbHMgYW5kIHRoZSBicm93c2VyJ3MgY2xpY2sgZG9lc24ndCBnbyB0aHJvdWdoLlxuXHRcdGlmICghcGVybWl0dGVkKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIElmIGNsaWNrcyBhcmUgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiBwZXJtaXR0ZWQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBGYXN0Q2xpY2sncyBldmVudCBsaXN0ZW5lcnMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGxheWVyID0gdGhpcy5sYXllcjtcblxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciBGYXN0Q2xpY2sgaXMgbmVlZGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICovXG5cdEZhc3RDbGljay5ub3ROZWVkZWQgPSBmdW5jdGlvbihsYXllcikge1xuXHRcdHZhciBtZXRhVmlld3BvcnQ7XG5cdFx0dmFyIGNocm9tZVZlcnNpb247XG5cdFx0dmFyIGJsYWNrYmVycnlWZXJzaW9uO1xuXHRcdHZhciBmaXJlZm94VmVyc2lvbjtcblxuXHRcdC8vIERldmljZXMgdGhhdCBkb24ndCBzdXBwb3J0IHRvdWNoIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hyb21lIHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGNocm9tZVZlcnNpb24gPSArKC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChjaHJvbWVWZXJzaW9uKSB7XG5cblx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyBDaHJvbWUgb24gQW5kcm9pZCB3aXRoIHVzZXItc2NhbGFibGU9XCJub1wiIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICM4OSlcblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENocm9tZSAzMiBhbmQgYWJvdmUgd2l0aCB3aWR0aD1kZXZpY2Utd2lkdGggb3IgbGVzcyBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdFx0XHRcdGlmIChjaHJvbWVWZXJzaW9uID4gMzEgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hyb21lIGRlc2t0b3AgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzE1KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzQmxhY2tCZXJyeTEwKSB7XG5cdFx0XHRibGFja2JlcnJ5VmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oWzAtOV0qKVxcLihbMC05XSopLyk7XG5cblx0XHRcdC8vIEJsYWNrQmVycnkgMTAuMysgZG9lcyBub3QgcmVxdWlyZSBGYXN0Y2xpY2sgbGlicmFyeS5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mdGxhYnMvZmFzdGNsaWNrL2lzc3Vlcy8yNTFcblx0XHRcdGlmIChibGFja2JlcnJ5VmVyc2lvblsxXSA+PSAxMCAmJiBibGFja2JlcnJ5VmVyc2lvblsyXSA+PSAzKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gdXNlci1zY2FsYWJsZT1ubyBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gd2lkdGg9ZGV2aWNlLXdpZHRoIChvciBsZXNzIHRoYW4gZGV2aWNlLXdpZHRoKSBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTAgd2l0aCAtbXMtdG91Y2gtYWN0aW9uOiBub25lIG9yIG1hbmlwdWxhdGlvbiwgd2hpY2ggZGlzYWJsZXMgZG91YmxlLXRhcC10by16b29tIChpc3N1ZSAjOTcpXG5cdFx0aWYgKGxheWVyLnN0eWxlLm1zVG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEZpcmVmb3ggdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0ZmlyZWZveFZlcnNpb24gPSArKC9GaXJlZm94XFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoZmlyZWZveFZlcnNpb24gPj0gMjcpIHtcblx0XHRcdC8vIEZpcmVmb3ggMjcrIGRvZXMgbm90IGhhdmUgdGFwIGRlbGF5IGlmIHRoZSBjb250ZW50IGlzIG5vdCB6b29tYWJsZSAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjg5NlxuXG5cdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cdFx0XHRpZiAobWV0YVZpZXdwb3J0ICYmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMTogcHJlZml4ZWQgLW1zLXRvdWNoLWFjdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBpdCdzIHJlY29tZW5kZWQgdG8gdXNlIG5vbi1wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0Ly8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3dpbmRvd3MvYXBwcy9IaDc2NzMxMy5hc3B4XG5cdFx0aWYgKGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogRmFjdG9yeSBtZXRob2QgZm9yIGNyZWF0aW5nIGEgRmFzdENsaWNrIG9iamVjdFxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdEZhc3RDbGljay5hdHRhY2ggPSBmdW5jdGlvbihsYXllciwgb3B0aW9ucykge1xuXHRcdHJldHVybiBuZXcgRmFzdENsaWNrKGxheWVyLCBvcHRpb25zKTtcblx0fTtcblxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIEZhc3RDbGljaztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRmFzdENsaWNrLmF0dGFjaDtcblx0XHRtb2R1bGUuZXhwb3J0cy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkZhc3RDbGljayA9IEZhc3RDbGljaztcblx0fVxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYXN0Y2xpY2svbGliL2Zhc3RjbGljay5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vTWF0ZXJpYWwvRXZlbnRcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL01hdGVyaWFsL0hlYWRlclwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTWF0ZXJpYWwvTmF2XCJcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9NYXRlcmlhbC9TZWFyY2hcIlxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9NYXRlcmlhbC9TaWRlYmFyXCJcclxuaW1wb3J0IFNvdXJjZSBmcm9tIFwiLi9NYXRlcmlhbC9Tb3VyY2VcIlxyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi9NYXRlcmlhbC9UYWJzXCJcclxuaW1wb3J0IFRhYmxlT2ZDb250ZW50cyBmcm9tIFwiLi9NYXRlcmlhbC9UYWJsZU9mQ29udGVudHNcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEV2ZW50LFxyXG4gIEhlYWRlcixcclxuICBOYXYsXHJcbiAgU2VhcmNoLFxyXG4gIFNpZGViYXIsXHJcbiAgU291cmNlLFxyXG4gIFRhYnMsXHJcbiAgVGFibGVPZkNvbnRlbnRzXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBMaXN0ZW5lciBmcm9tIFwiLi9FdmVudC9MaXN0ZW5lclwiXHJcbmltcG9ydCBNYXRjaE1lZGlhIGZyb20gXCIuL0V2ZW50L01hdGNoTWVkaWFcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIExpc3RlbmVyLFxyXG4gIE1hdGNoTWVkaWFcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0xpc3RlbmVyXCIgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaE1lZGlhIHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWVkaWEgcXVlcnkgbGlzdGVuZXJcclxuICAgKlxyXG4gICAqIFRoaXMgY2xhc3MgbGlzdGVucyBmb3Igc3RhdGUgY2hhbmdlcyBvZiBtZWRpYSBxdWVyaWVzIGFuZCBhdXRvbWF0aWNhbGx5XHJcbiAgICogc3dpdGNoZXMgdGhlIGdpdmVuIGxpc3RlbmVycyBvbiBvciBvZmYuXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGhhbmRsZXJfIC0gTWVkaWEgcXVlcnkgZXZlbnQgaGFuZGxlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gTWVkaWEgcXVlcnkgdG8gdGVzdCBmb3JcclxuICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciAtIEV2ZW50IGxpc3RlbmVyXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocXVlcnksIGxpc3RlbmVyKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJfID0gbXEgPT4ge1xyXG4gICAgICBpZiAobXEubWF0Y2hlcylcclxuICAgICAgICBsaXN0ZW5lci5saXN0ZW4oKVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbGlzdGVuZXIudW5saXN0ZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgbWVkaWEgcXVlcnkgbGlzdGVuZXIgKi9cclxuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpXHJcbiAgICBtZWRpYS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZXJfKVxyXG5cclxuICAgIC8qIEFsd2F5cyBjaGVjayBhdCBpbml0aWFsaXphdGlvbiAqL1xyXG4gICAgdGhpcy5oYW5kbGVyXyhtZWRpYSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFNoYWRvdyBmcm9tIFwiLi9IZWFkZXIvU2hhZG93XCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL0hlYWRlci9UaXRsZVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgU2hhZG93LFxyXG4gIFRpdGxlXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWRvdyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgb3IgaGlkZSBoZWFkZXIgc2hhZG93IGRlcGVuZGluZyBvbiBwYWdlIHktb2Zmc2V0XHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIENvbnRlbnQgY29udGFpbmVyXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRfIC0gT2Zmc2V0IGhlaWdodCBvZiBwcmV2aW91cyBub2Rlc1xyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIEhlYWRlciBzaGFkb3cgc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwsIGhlYWRlcikge1xyXG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgIShyZWYucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZi5wYXJlbnROb2RlXHJcblxyXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXHJcbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcclxuICAgICAgOiBoZWFkZXJcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGhlaWdodCBhbmQgc3RhdGUgKi9cclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgdG90YWwgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuZWxfXHJcbiAgICB3aGlsZSAoKGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpKSB7XHJcbiAgICAgIGlmICghKGN1cnJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIHRoaXMuaGVpZ2h0XyArPSBjdXJyZW50Lm9mZnNldEhlaWdodFxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNoYWRvdyBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBFdmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG4gICAgaWYgKGV2ICYmIChldi50eXBlID09PSBcInJlc2l6ZVwiIHx8IGV2LnR5cGUgPT09IFwib3JpZW50YXRpb25jaGFuZ2VcIikpIHtcclxuICAgICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgICB0aGlzLnNldHVwKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PSB0aGlzLmhlaWdodF9cclxuICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxyXG4gICAgICAgIHRoaXMuaGVhZGVyXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwic2hhZG93XCIgOiBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBzaGFkb3cgc3RhdGVcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuaGVhZGVyXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogU3dhcCBoZWFkZXIgdGl0bGUgdG9waWNzIHdoZW4gaGVhZGVyIGlzIHNjcm9sbGVkIHBhc3RcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gRWxlbWVudFxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBUaXRsZSBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEhlYWRpbmdFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwsIGhlYWRlcikge1xyXG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXHJcbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcclxuICAgICAgOiBoZWFkZXJcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBzdGF0ZSAqL1xyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRpdGxlIHN0YXRlXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuLCBub2RlID0+IHsgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdXNlIGNoaWxkTm9kZXMgaGVyZSBmb3IgSUU/XHJcbiAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aXRsZSBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBFdmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG4gICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVhZGVyXy5vZmZzZXRUb3BcclxuICAgIGlmIChhY3RpdmUgIT09IHRoaXMuYWN0aXZlXylcclxuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG5cclxuICAgIC8qIEhhY2s6IGluZHVjZSBlbGxpcHNpcyBvbiB0b3BpY3MgKi9cclxuICAgIGlmIChldi50eXBlID09PSBcInJlc2l6ZVwiIHx8IGV2LnR5cGUgPT09IFwib3JpZW50YXRpb25jaGFuZ2VcIikge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuLCBub2RlID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5lbF8ub2Zmc2V0V2lkdGggLSAyMH1weGBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0aXRsZSBzdGF0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUud2lkdGggPSBcIlwiXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBCbHVyIGZyb20gXCIuL05hdi9CbHVyXCJcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCIuL05hdi9Db2xsYXBzZVwiXHJcbmltcG9ydCBTY3JvbGxpbmcgZnJvbSBcIi4vTmF2L1Njcm9sbGluZ1wiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgQmx1cixcclxuICBDb2xsYXBzZSxcclxuICBTY3JvbGxpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2LmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1ciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJsdXIgbGlua3Mgd2l0aGluIHRoZSB0YWJsZSBvZiBjb250ZW50cyBhYm92ZSBjdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtOb2RlTGlzdDxIVE1MRWxlbWVudD59IGVsc18gLSBUYWJsZSBvZiBjb250ZW50cyBsaW5rc1xyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8SFRNTEVsZW1lbnQ+fSBhbmNob3JzXyAtIFJlZmVyZW5jZWQgYW5jaG9yIG5vZGVzXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4XyAtIEN1cnJlbnQgbGluayBpbmRleFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBkaXJfIC0gU2Nyb2xsIGRpcmVjdGlvbiBjaGFuZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xOb2RlTGlzdDxIVE1MRWxlbWVudD4pfSBlbHMgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxzKSB7XHJcbiAgICB0aGlzLmluaXQoZWxzKVxyXG4gIH1cclxuXHJcbiAgaW5pdChlbHMpIHtcclxuICAgIHRoaXMuZWxzXyA9ICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxyXG4gICAgICA6IGVsc1xyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cclxuICAgIHRoaXMuaW5kZXhfID0gMFxyXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgLyogTmVjZXNzYXJ5IHN0YXRlIHRvIGNvcnJlY3RseSByZXNldCB0aGUgaW5kZXggKi9cclxuICAgIHRoaXMuZGlyXyA9IGZhbHNlXHJcblxyXG4gICAgLyogSW5kZXggYW5jaG9yIG5vZGUgb2Zmc2V0cyBmb3IgZmFzdCBsb29rdXAgKi9cclxuICAgIHRoaXMuYW5jaG9yc18gPSBbXS5yZWR1Y2UuY2FsbCh0aGlzLmVsc18sIChhbmNob3JzLCBlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gYW5jaG9ycy5jb25jYXQoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaGFzaC5zdWJzdHJpbmcoMSkpIHx8IFtdKVxyXG4gICAgfSwgW10pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYmx1ciBzdGF0ZXNcclxuICAgKlxyXG4gICAqIERlZHVjdCB0aGUgc3RhdGljIG9mZnNldCBvZiB0aGUgaGVhZGVyICg1NnB4KSBhbmQgc2lkZWJhciBvZmZzZXQgKDI0cHgpLFxyXG4gICAqIHNlZSBfcGVybWFsaW5rcy5zY3NzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgY29uc3QgZGlyID0gdGhpcy5vZmZzZXRfIC0gb2Zmc2V0IDwgMFxyXG5cclxuICAgIC8qIEhhY2s6IHJlc2V0IGluZGV4IGlmIGRpcmVjdGlvbiBjaGFuZ2VkIHRvIGNhdGNoIHZlcnkgZmFzdCBzY3JvbGxpbmcsXHJcbiAgICAgICBiZWNhdXNlIG90aGVyd2lzZSB3ZSB3b3VsZCBoYXZlIHRvIHJlZ2lzdGVyIGEgdGltZXIgYW5kIHRoYXQgc3Vja3MgKi9cclxuICAgIGlmICh0aGlzLmRpcl8gIT09IGRpcilcclxuICAgICAgdGhpcy5pbmRleF8gPSBkaXJcclxuICAgICAgICA/IHRoaXMuaW5kZXhfID0gMFxyXG4gICAgICAgIDogdGhpcy5pbmRleF8gPSB0aGlzLmVsc18ubGVuZ3RoIC0gMVxyXG5cclxuICAgIC8qIEV4aXQgd2hlbiB0aGVyZSBhcmUgbm8gYW5jaG9ycyAqL1xyXG4gICAgaWYgKHRoaXMuYW5jaG9yc18ubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm5cclxuXHJcbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIGRvd24gKi9cclxuICAgIGlmICh0aGlzLm9mZnNldF8gPD0gb2Zmc2V0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XyArIDE7IGkgPCB0aGlzLmVsc18ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPD0gb2Zmc2V0KSB7XHJcbiAgICAgICAgICBpZiAoaSA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJibHVyXCJcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgdXAgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XzsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPiBvZmZzZXQpIHtcclxuICAgICAgICAgIGlmIChpID4gMClcclxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1lbWJlciBjdXJyZW50IG9mZnNldCBhbmQgZGlyZWN0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbiAqL1xyXG4gICAgdGhpcy5vZmZzZXRfID0gb2Zmc2V0XHJcbiAgICB0aGlzLmRpcl8gPSBkaXJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxzXywgZWwgPT4ge1xyXG4gICAgICBlbC5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFJlc2V0IGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXHJcbiAgICB0aGlzLmluZGV4XyAgPSAwXHJcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2Uge1xyXG5cclxuICAvKipcclxuICAgKiBFeHBhbmQgb3IgY29sbGFwc2UgbmF2aWdhdGlvbiBvbiB0b2dnbGVcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBvdmVyZmxvdyBhbmQgZGlzcGxheSBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG5cclxuICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcImJsb2NrXCIgICA6IFwibm9uZVwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGUgZXhwYW5kIGFuZCBjb2xsYXBzZSBzbW9vdGhseVxyXG4gICAqXHJcbiAgICogSW50ZXJuZXQgRXhwbG9yZXIgMTEgaXMgdmVyeSBzbG93IGF0IHJlY29nbml6aW5nIGNoYW5nZXMgb24gdGhlIGRhdGFzZXRcclxuICAgKiB3aGljaCByZXN1bHRzIGluIHRoZSBtZW51IG5vdCBleHBhbmRpbmcgb3IgY29sbGFwc2luZyBwcm9wZXJseS4gVEhlcmVmb3JlLFxyXG4gICAqIGZvciByZWFzb25zIG9mIGNvbXBhdGliaWxpdHksIHRoZSBhdHRyaWJ1dGUgYWNjZXNzb3JzIGFyZSB1c2VkLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyB0byBDU1MgZGVmYXVsdHMgKi9cclxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gXCJibG9ja1wiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcclxuXHJcbiAgICAvKiBFeHBhbmRlZCwgc28gY29sbGFwc2UgKi9cclxuICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2N1cnJlbnR9cHhgXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgLyogQ29sbGFwc2VkLCBzbyBleHBhbmQgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJleHBhbmRcIilcclxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxyXG5cclxuICAgICAgLyogUmVhZCBoZWlnaHQgYW5kIHVuc2V0IHBzZXVkby10b2dnbGVkIHN0YXRlICovXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICB0aGlzLmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcblxyXG4gICAgICAvKiBTZXQgaW5pdGlhbCBzdGF0ZSBhbmQgYW5pbWF0ZSAqL1xyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoZWlnaHR9cHhgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIHN0YXRlIG9uIGVuZCBvZiB0cmFuc2l0aW9uICovXHJcbiAgICBjb25zdCBlbmQgPSBldiA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBSZXNldCBoZWlnaHQgYW5kIHN0YXRlICovXHJcbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcbiAgICAgIHRhcmdldC5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcblxyXG4gICAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcIm5vbmVcIiAgIDogXCJibG9ja1wiXHJcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcclxuXHJcbiAgICAgIC8qIE9ubHkgZmlyZSBvbmNlLCBzbyBkaXJlY3RseSByZW1vdmUgZXZlbnQgbGlzdGVuZXIgKi9cclxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgIH1cclxuICAgIHRoaXMuZWxfLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBoZWlnaHQgYW5kIHBzZXVkby10b2dnbGVkIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICAgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyAgPSBcIlwiXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxpbmcge1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHRoZSBjdXJyZW50IGFjdGl2ZSBwYW5lIChmb3IgaU9TKVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBQcmltYXJ5IG5hdmlnYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCBwYW5lc1xyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG5cclxuICAgIC8qIEluaXRpYWxseSBzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xyXG4gICAgY29uc3QgbWFpbiA9IHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcbiAgICBtYWluLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcblxyXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICAvKiBGaW5kIGN1cnJlbnQgYW5kIHBhcmVudCBsaXN0IGVsZW1lbnRzICovXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xyXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhY3RpdmUgcGFuZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gQ2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICBsZXQgcGFuZSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgaWYgKCEodGFyZ2V0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcblxyXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBwYXJlbnQgcGFuZSAqL1xyXG4gICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gYWN0aXZlIHBhbmUgKi9cclxuICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgcGFuZXNcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXHJcbiAgICBpZiAodGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblsxXS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXHJcbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cclxuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xyXG5cclxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExvY2sgZnJvbSBcIi4vU2VhcmNoL0xvY2tcIlxyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1NlYXJjaC9SZXN1bHRcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIExvY2ssXHJcbiAgUmVzdWx0XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2sge1xyXG5cclxuICAvKipcclxuICAgKiBMb2NrIGJvZHkgZm9yIGZ1bGwtc2NyZWVuIHNlYXJjaCBtb2RhbFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR9IGVsXyAtIExvY2sgdG9nZ2xlXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbG9ja18gLSBFbGVtZW50IHRvIGxvY2sgKGRvY3VtZW50IGJvZHkpXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBlbGVtZW50IHRvIGxvY2sgKD0gYm9keSkgKi9cclxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmxvY2tfID0gZG9jdW1lbnQuYm9keVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIC8qIEVudGVyaW5nIHNlYXJjaCBtb2RlICovXHJcbiAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgICAgIC8qIFNjcm9sbCB0byB0b3AgYWZ0ZXIgdHJhbnNpdGlvbiwgdG8gb21pdCBmbGlja2VyaW5nICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG5cclxuICAgICAgICAvKiBMb2NrIGJvZHkgYWZ0ZXIgZmluaXNoaW5nIHRyYW5zaXRpb24gKi9cclxuICAgICAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNDAwKVxyXG5cclxuICAgIC8qIEV4aXRpbmcgc2VhcmNoIG1vZGUgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG5cclxuICAgICAgLyogU2Nyb2xsIHRvIGZvcm1lciBwb3NpdGlvbiwgYnV0IHdhaXQgZm9yIDEwMG1zIHRvIHByZXZlbnQgZmxhc2hlcyBvblxyXG4gICAgICAgICBpT1MuIEEgc2hvcnQgdGltZW91dCBzZWVtcyB0byBkbyB0aGUgdHJpY2sgKi9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9mZnNldF8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIHBhZ2UgeS1vZmZzZXRcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIGlmICh0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJsb2NrXCIpXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXHJcbiAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBlc2NhcGUgZnJvbSBcImVzY2FwZS1zdHJpbmctcmVnZXhwXCJcclxuaW1wb3J0IGx1bnIgZnJvbSBcImV4cG9zZS1sb2FkZXI/bHVuciFsdW5yXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBFc2NhcGUgSFRNTCBzdHJpbmdzXHJcbiAqXHJcbiAqIERvY3VtZW50YXRpb24gbWF5IGNvbnRhaW4gY29kZSBKYXZhU2NyaXB0IGNvZGUgc25pcHBldHMgd2hpY2ggd291bGQgZ2V0XHJcbiAqIGV4ZWN1dGVkIHdoZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIGFzIHBsYWluIEhUTUwuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3F1aWRmdW5rL21rZG9jcy1tYXRlcmlhbC9pc3N1ZXMvOTA2XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmdcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIEhUTUwgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBlc2NhcGVIVE1MID0gaHRtbCA9PiB7XHJcbiAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sKTtcclxuICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIHJldHVybiBwLmlubmVySFRNTDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRydW5jYXRlIGEgc3RyaW5nIGFmdGVyIHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVyXHJcbiAqXHJcbiAqIFRoaXMgaXMgbm90IGEgcmVhc29uYWJsZSBhcHByb2FjaCwgc2luY2UgdGhlIHN1bW1hcmllcyBraW5kIG9mIHN1Y2suIEl0XHJcbiAqIHdvdWxkIGJlIGJldHRlciB0byBjcmVhdGUgc29tZXRoaW5nIG1vcmUgaW50ZWxsaWdlbnQsIGhpZ2hsaWdodGluZyB0aGVcclxuICogc2VhcmNoIG9jY3VycmVuY2VzIGFuZCBtYWtpbmcgYSBiZXR0ZXIgc3VtbWFyeSBvdXQgb2YgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBTdHJpbmcgdG8gYmUgdHJ1bmNhdGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gTnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogQHJldHVybiB7c3RyaW5nfSBUcnVuY2F0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0cnVuY2F0ZSA9IChzdHJpbmcsIG4pID0+IHtcclxuICBsZXQgaSA9IG5cclxuICBpZiAoc3RyaW5nLmxlbmd0aCA+IGkpIHtcclxuICAgIHdoaWxlIChzdHJpbmdbaV0gIT09IFwiIFwiICYmIC0taSA+IDApO1xyXG4gICAgcmV0dXJuIGAke3N0cmluZy5zdWJzdHJpbmcoMCwgaSl9Li4uYFxyXG4gIH1cclxuICByZXR1cm4gc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcclxuICovXHJcbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXHJcbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICByZXR1cm4gbWV0YS5jb250ZW50XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBzZWFyY2ggYW5kIHVwZGF0ZSByZXN1bHRzIG9uIGtleWJvYXJkIGV2ZW50c1xyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTZWFyY2ggcmVzdWx0IGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PE9iamVjdD58RnVuY3Rpb24pfSBkYXRhXyAtIFJhdyBkb2N1bWVudCBkYXRhXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRvY3NfIC0gSW5kZXhlZCBkb2N1bWVudHNcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBtZXRhXyAtIFNlYXJjaCBtZXRhIGluZm9ybWF0aW9uXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbGlzdF8gLSBTZWFyY2ggcmVzdWx0IGxpc3RcclxuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IGxhbmdfIC0gU2VhcmNoIGxhbmd1YWdlc1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtZXNzYWdlXyAtIFNlYXJjaCByZXN1bHQgbWVzc2FnZXNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gaW5kZXhfIC0gU2VhcmNoIGluZGV4XHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxGdW5jdGlvbj59IHN0YWNrXyAtIFNlYXJjaCByZXN1bHQgc3RhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWVfIC0gTGFzdCBpbnB1dCB2YWx1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YSAtIEZ1bmN0aW9uIHByb3ZpZGluZyBkYXRhIG9yIGFycmF5XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwsIGRhdGEpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgbWV0YWRhdGEgYW5kIGxpc3QgZWxlbWVudCAqL1xyXG4gICAgY29uc3QgW21ldGEsIGxpc3RdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4pXHJcblxyXG4gICAgLyogU2V0IGRhdGEsIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnRzICovXHJcbiAgICB0aGlzLmRhdGFfID0gZGF0YVxyXG4gICAgdGhpcy5tZXRhXyA9IG1ldGFcclxuICAgIHRoaXMubGlzdF8gPSBsaXN0XHJcblxyXG4gICAgLyogTG9hZCBtZXNzYWdlcyBmb3IgbWV0YWRhdGEgZGlzcGxheSAqL1xyXG4gICAgdGhpcy5tZXNzYWdlXyA9IHtcclxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMubWV0YV8udGV4dENvbnRlbnQsXHJcbiAgICAgIG5vbmU6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQubm9uZVwiKSxcclxuICAgICAgb25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm9uZVwiKSxcclxuICAgICAgb3RoZXI6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQub3RoZXJcIilcclxuICAgIH1cclxuXHJcbiAgICAvKiBPdmVycmlkZSB0b2tlbml6ZXIgc2VwYXJhdG9yLCBpZiBnaXZlbiAqL1xyXG4gICAgY29uc3QgdG9rZW5pemVyID0gdHJhbnNsYXRlKFwic2VhcmNoLnRva2VuaXplclwiKVxyXG4gICAgaWYgKHRva2VuaXplci5sZW5ndGgpXHJcbiAgICAgIGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IHRva2VuaXplclxyXG5cclxuICAgIC8qIExvYWQgc2VhcmNoIGxhbmd1YWdlcyAqL1xyXG4gICAgdGhpcy5sYW5nXyA9IHRyYW5zbGF0ZShcInNlYXJjaC5sYW5ndWFnZVwiKS5zcGxpdChcIixcIilcclxuICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAubWFwKGxhbmcgPT4gbGFuZy50cmltKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2VhcmNoIHJlc3VsdHNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gSW5wdXQgb3IgZm9jdXMgZXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGluZGV4LCBpZiB0aGlzIGhhcyBub3QgYmUgZG9uZSB5ZXQgKi9cclxuICAgIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgJiYgIXRoaXMuaW5kZXhfKSB7XHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4ICovXHJcbiAgICAgIGNvbnN0IGluaXQgPSBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgLyogUHJlcHJvY2VzcyBhbmQgaW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cyAqL1xyXG4gICAgICAgIHRoaXMuZG9jc18gPSBkYXRhLnJlZHVjZSgoZG9jcywgZG9jKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbcGF0aCwgaGFzaF0gPSBkb2MubG9jYXRpb24uc3BsaXQoXCIjXCIpXHJcblxyXG4gICAgICAgICAgLyogRXNjYXBlIEhUTUwgKi9cclxuICAgICAgICAgIGRvYy50aXRsZSA9IGVzY2FwZUhUTUwoZG9jLnRpdGxlKVxyXG4gICAgICAgICAgZG9jLnRleHQgID0gZXNjYXBlSFRNTChkb2MuY29udGVudHMpXHJcblxyXG4gICAgICAgICAgLyogQXNzb2NpYXRlIHNlY3Rpb24gd2l0aCBwYXJlbnQgZG9jdW1lbnQgKi9cclxuICAgICAgICAgIGlmIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGRvYy5wYXJlbnQgPSBkb2NzLmdldChwYXRoKVxyXG5cclxuICAgICAgICAgICAgLyogT3ZlcnJpZGUgcGFnZSB0aXRsZSB3aXRoIGRvY3VtZW50IHRpdGxlIGlmIGZpcnN0IHNlY3Rpb24gKi9cclxuICAgICAgICAgICAgaWYgKGRvYy5wYXJlbnQgJiYgIWRvYy5wYXJlbnQuZG9uZSkge1xyXG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQudGl0bGUgPSBkb2MudGl0bGVcclxuICAgICAgICAgICAgICBkb2MucGFyZW50LnRleHQgID0gZG9jLmNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC5kb25lICA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFNvbWUgY2xlYW51cCBvbiB0aGUgdGV4dCAqL1xyXG4gICAgICAgICAgZG9jLnRleHQgPSBkb2MudGV4dFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csIFwiIFwiKSAgICAgICAgICAgICAgIC8qIFJlbW92ZSBuZXdsaW5lcyAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgICAgICAgICAgICAgIC8qIENvbXBhY3Qgd2hpdGVzcGFjZSAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKyhbLC46OyE/XSkvZywgICAgICAgICAvKiBDb3JyZWN0IHB1bmN0dWF0aW9uICovXHJcbiAgICAgICAgICAgICAgKF8sIGNoYXIpID0+IGNoYXIpXHJcblxyXG4gICAgICAgICAgLyogSW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cywgYnV0IHNraXAgdG9wLWxldmVsIGhlYWRsaW5lICovXHJcbiAgICAgICAgICBpZiAoIWRvYy5wYXJlbnQgfHwgZG9jLnBhcmVudC50aXRsZSAhPT0gZG9jLnRpdGxlKVxyXG4gICAgICAgICAgICBkb2NzLnNldChkb2MubG9jYXRpb24sIGRvYylcclxuICAgICAgICAgIHJldHVybiBkb2NzXHJcbiAgICAgICAgfSwgbmV3IE1hcClcclxuXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXHJcbiAgICAgICAgY29uc3QgZG9jcyA9IHRoaXMuZG9jc18sXHJcbiAgICAgICAgICAgICAgbGFuZyA9IHRoaXMubGFuZ19cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIHN0YWNrIGFuZCBpbmRleCAqL1xyXG4gICAgICAgIHRoaXMuc3RhY2tfID0gW11cclxuICAgICAgICB0aGlzLmluZGV4XyA9IGx1bnIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS50cmltbWVyXCI6IGx1bnIudHJpbW1lcixcclxuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUuc3RvcHdvcmRzXCI6IGx1bnIuc3RvcFdvcmRGaWx0ZXJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBEaXNhYmxlIHN0b3Agd29yZHMgZmlsdGVyIGFuZCB0cmltbWVyLCBpZiBkZXNpcmVkICovXHJcbiAgICAgICAgICBjb25zdCBwaXBlbGluZSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnJlZHVjZSgocmVzdWx0LCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNsYXRlKG5hbWUpLm1hdGNoKC9eZmFsc2UkL2kpKVxyXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcnNbbmFtZV0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICAgIC8qIFJlbW92ZSBzdGVtbWVyLCBhcyBpdCBjcmlwcGxlcyBzZWFyY2ggZXhwZXJpZW5jZSAqL1xyXG4gICAgICAgICAgdGhpcy5waXBlbGluZS5yZXNldCgpXHJcbiAgICAgICAgICBpZiAocGlwZWxpbmUpXHJcbiAgICAgICAgICAgIHRoaXMucGlwZWxpbmUuYWRkKC4uLnBpcGVsaW5lKVxyXG5cclxuICAgICAgICAgIC8qIFNldCB1cCBhbHRlcm5hdGUgc2VhcmNoIGxhbmd1YWdlcyAqL1xyXG4gICAgICAgICAgaWYgKGxhbmcubGVuZ3RoID09PSAxICYmIGxhbmdbMF0gIT09IFwiZW5cIiAmJiBsdW5yW2xhbmdbMF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnJbbGFuZ1swXV0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxhbmcubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yLm11bHRpTGFuZ3VhZ2UoLi4ubGFuZykpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSW5kZXggZmllbGRzICovXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGl0bGVcIiwgeyBib29zdDogMTAgfSlcclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGFnc1wiKVxyXG4gICAgICAgICAgdGhpcy5maWVsZChcImNhdGVnb3JpZXNcIilcclxuICAgICAgICAgIHRoaXMucmVmKFwibG9jYXRpb25cIilcclxuXHJcbiAgICAgICAgICAvKiBJbmRleCBkb2N1bWVudHMgKi9cclxuICAgICAgICAgIGRvY3MuZm9yRWFjaChkb2MgPT4gdGhpcy5hZGQoZG9jKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIGZvciBsYXp5IHJlbmRlcmluZyAqL1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcclxuICAgICAgICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmIGNvbnRhaW5lci5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIDE2KVxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrXy5zcGxpY2UoMCwgMTApLmZvckVhY2gocmVuZGVyID0+IHJlbmRlcigpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHJcbiAgICAgIC8qIEluaXRpYWxpemUgaW5kZXggYWZ0ZXIgc2hvcnQgdGltZW91dCB0byBhY2NvdW50IGZvciB0cmFuc2l0aW9uICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhXyA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICA/IHRoaXMuZGF0YV8oKS50aGVuKGluaXQpXHJcbiAgICAgICAgICA6IGluaXQodGhpcy5kYXRhXylcclxuICAgICAgfSwgMjUwKVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgc2VhcmNoIG9uIG5ldyBpbnB1dCBldmVudCAqL1xyXG4gICAgfSBlbHNlIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgfHwgZXYudHlwZSA9PT0gXCJrZXl1cFwiKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgIC8qIEFib3J0IGVhcmx5LCBpZiBpbmRleCBpcyBub3QgYnVpbGQgb3IgaW5wdXQgaGFzbid0IGNoYW5nZWQgKi9cclxuICAgICAgaWYgKCF0aGlzLmluZGV4XyB8fCB0YXJnZXQudmFsdWUgPT09IHRoaXMudmFsdWVfKVxyXG4gICAgICAgIHJldHVyblxyXG5cclxuICAgICAgLyogQ2xlYXIgY3VycmVudCBsaXN0ICovXHJcbiAgICAgIHdoaWxlICh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgdGhpcy5saXN0Xy5yZW1vdmVDaGlsZCh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXHJcblxyXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgc2VhcmNoIGlucHV0IGlzIGVtcHR5ICovXHJcbiAgICAgIHRoaXMudmFsdWVfID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgIGlmICh0aGlzLnZhbHVlXy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5wbGFjZWhvbGRlclxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBQZXJmb3JtIHNlYXJjaCBvbiBpbmRleCBhbmQgZ3JvdXAgc2VjdGlvbnMgYnkgZG9jdW1lbnQgKi9cclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pbmRleF9cclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHRyYWlsaW5nIHdpbGRjYXJkIHRvIGFsbCB0ZXJtcyBmb3IgcHJlZml4IHF1ZXJ5aW5nICovXHJcbiAgICAgICAgLnF1ZXJ5KHF1ZXJ5ID0+IHtcclxuICAgICAgICAgIHRoaXMudmFsdWVfLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgcXVlcnkudGVybSh0ZXJtLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogUHJvY2VzcyBxdWVyeSByZXN1bHRzICovXHJcbiAgICAgICAgLnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KGl0ZW0ucmVmKVxyXG4gICAgICAgICAgaWYgKGRvYy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jLnBhcmVudC5sb2NhdGlvblxyXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pLmNvbmNhdChpdGVtKSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5sb2NhdGlvblxyXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICAgICAgfSwgbmV3IE1hcClcclxuXHJcbiAgICAgIC8qIEFzc2VtYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nICovXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZXNjYXBlKHRoaXMudmFsdWVfLnRyaW0oKSkucmVwbGFjZShcclxuICAgICAgICBuZXcgUmVnRXhwKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciwgXCJpbWdcIiksIFwifFwiKVxyXG4gICAgICBjb25zdCBtYXRjaCA9XHJcbiAgICAgICAgbmV3IFJlZ0V4cChgKF58JHtsdW5yLnRva2VuaXplci5zZXBhcmF0b3J9KSgke3F1ZXJ5fSlgLCBcImltZ1wiKVxyXG4gICAgICBjb25zdCBoaWdobGlnaHQgPSAoXywgc2VwYXJhdG9yLCB0b2tlbikgPT5cclxuICAgICAgICBgJHtzZXBhcmF0b3J9PGVtPiR7dG9rZW59PC9lbT5gXHJcblxyXG4gICAgICAvKiBSZXNldCBzdGFjayBhbmQgcmVuZGVyIHJlc3VsdHMgKi9cclxuICAgICAgdGhpcy5zdGFja18gPSBbXVxyXG4gICAgICByZXN1bHQuZm9yRWFjaCgoaXRlbXMsIHJlZikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KHJlZilcclxuXHJcbiAgICAgICAgLyogUmVuZGVyIGFydGljbGUgKi9cclxuICAgICAgICBjb25zdCBhcnRpY2xlID0gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtkb2MubG9jYXRpb259IHRpdGxlPXtkb2MudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIG1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGUtLWRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IGRvYy50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAge2RvYy50ZXh0Lmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGVhc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvKiBSZW5kZXIgc2VjdGlvbnMgZm9yIGFydGljbGUgKi9cclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcclxuICAgICAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICA8YSBocmVmPXtzZWN0aW9uLmxvY2F0aW9ufSB0aXRsZT17c2VjdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIGRhdGEtbWQtcmVsPVwiYW5jaG9yXCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogc2VjdGlvbi50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRleHQubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiB0cnVuY2F0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCksIDQwMClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiA6IHt9fVxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIFB1c2ggYXJ0aWNsZXMgYW5kIHNlY3Rpb24gcmVuZGVyZXJzIG9udG8gc3RhY2sgKi9cclxuICAgICAgICB0aGlzLnN0YWNrXy5wdXNoKCgpID0+IHRoaXMubGlzdF8uYXBwZW5kQ2hpbGQoYXJ0aWNsZSksIC4uLnNlY3Rpb25zKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLyogR3JhZHVhbGx5IGFkZCByZXN1bHRzIGFzIGxvbmcgYXMgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIGdyb3dzICovXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcclxuICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmXHJcbiAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcclxuICAgICAgICAodGhpcy5zdGFja18uc2hpZnQoKSkoKVxyXG5cclxuICAgICAgLyogQmluZCBjbGljayBoYW5kbGVycyBmb3IgYW5jaG9ycyAqL1xyXG4gICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5saXN0Xy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtcmVsPWFuY2hvcl1cIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhbmNob3JzLCBhbmNob3IgPT4ge1xyXG4gICAgICAgIFtcImNsaWNrXCIsIFwia2V5ZG93blwiXS5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2MiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwia2V5ZG93blwiICYmIGV2Mi5rZXlDb2RlICE9PSAxMylcclxuICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIEhhY2s6IHByZXZlbnQgZGVmYXVsdCwgYXMgdGhlIG5hdmlnYXRpb24gbmVlZHMgdG8gYmUgZGVsYXllZCBkdWVcclxuICAgICAgICAgICAgICAgdG8gdGhlIHNlYXJjaCBib2R5IGxvY2sgb24gbW9iaWxlICovXHJcbiAgICAgICAgICAgIGV2Mi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZlxyXG4gICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBVcGRhdGUgc2VhcmNoIG1ldGFkYXRhICovXHJcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNpemUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5ub25lXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLm9uZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZV8ub3RoZXIucmVwbGFjZShcIiNcIiwgcmVzdWx0LnNpemUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRyZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wibHVuclwiXSA9IHJlcXVpcmUoXCItIUQ6XFxcXFNjb3Bpc3RvXFxcXERldmVsb3BtZW50XFxcXGh1Z29cXFxcaHVnby1tYXRlcmlhbC1kb2NzXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIS5cXFxcbHVuci5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyP2x1bnIhLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWRcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbHVuciAtIGh0dHA6Ly9sdW5yanMuY29tIC0gQSBiaXQgbGlrZSBTb2xyLCBidXQgbXVjaCBzbWFsbGVyIGFuZCBub3QgYXMgYnJpZ2h0IC0gMi4zLjVcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbjsoZnVuY3Rpb24oKXtcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb25maWd1cmluZyBhbmQgY29uc3RydWN0aW5nXG4gKiBhIG5ldyBsdW5yIEluZGV4LlxuICpcbiAqIEEgbHVuci5CdWlsZGVyIGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHRoZSBwaXBlbGluZSBzZXR1cFxuICogd2l0aCBhIHRyaW1tZXIsIHN0b3Agd29yZCBmaWx0ZXIgYW5kIHN0ZW1tZXIuXG4gKlxuICogVGhpcyBidWlsZGVyIG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBjb25maWd1cmF0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciwgYWxsb3dpbmcgdGhlIGxpc3Qgb2YgZmllbGRzXG4gKiBhbmQgb3RoZXIgYnVpbGRlciBwYXJhbWV0ZXJzIHRvIGJlIGN1c3RvbWlzZWQuXG4gKlxuICogQWxsIGRvY3VtZW50cyBfbXVzdF8gYmUgYWRkZWQgd2l0aGluIHRoZSBwYXNzZWQgY29uZmlnIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgaWR4ID0gbHVucihmdW5jdGlvbiAoKSB7XG4gKiAgIHRoaXMuZmllbGQoJ3RpdGxlJylcbiAqICAgdGhpcy5maWVsZCgnYm9keScpXG4gKiAgIHRoaXMucmVmKCdpZCcpXG4gKlxuICogICBkb2N1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gKiAgICAgdGhpcy5hZGQoZG9jKVxuICogICB9LCB0aGlzKVxuICogfSlcbiAqXG4gKiBAc2VlIHtAbGluayBsdW5yLkJ1aWxkZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQHNlZSB7QGxpbmsgbHVuci50cmltbWVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdG9wV29yZEZpbHRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RlbW1lcn1cbiAqIEBuYW1lc3BhY2Uge2Z1bmN0aW9ufSBsdW5yXG4gKi9cbnZhciBsdW5yID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLkJ1aWxkZXJcblxuICBidWlsZGVyLnBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnRyaW1tZXIsXG4gICAgbHVuci5zdG9wV29yZEZpbHRlcixcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGJ1aWxkZXIuc2VhcmNoUGlwZWxpbmUuYWRkKFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgY29uZmlnLmNhbGwoYnVpbGRlciwgYnVpbGRlcilcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKVxufVxuXG5sdW5yLnZlcnNpb24gPSBcIjIuMy41XCJcbi8qIVxuICogbHVuci51dGlsc1xuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgY29udGFpbmluZyB1dGlscyBmb3IgdGhlIHJlc3Qgb2YgdGhlIGx1bnIgbGlicmFyeVxuICogQG5hbWVzcGFjZSBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMgPSB7fVxuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHByaW50ZWQuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICogQGZ1bmN0aW9uXG4gKi9cbmx1bnIudXRpbHMud2FybiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKGdsb2JhbC5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufSkodGhpcylcblxuLyoqXG4gKiBDb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiB0aGUgZW1wdHkgc3RyaW5nLCBpbiBhbGwgb3RoZXIgY2FzZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiBgdG9TdHJpbmdgIG9uIHRoZSBwYXNzZWQgb2JqZWN0IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7QW55fSBvYmogVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICovXG5sdW5yLnV0aWxzLmFzU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSB2b2lkIDAgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqLnRvU3RyaW5nKClcbiAgfVxufVxuXG4vKipcbiAqIENsb25lcyBhbiBvYmplY3QuXG4gKlxuICogV2lsbCBjcmVhdGUgYSBjb3B5IG9mIGFuIGV4aXN0aW5nIG9iamVjdCBzdWNoIHRoYXQgYW55IG11dGF0aW9uc1xuICogb24gdGhlIGNvcHkgY2Fubm90IGFmZmVjdCB0aGUgb3JpZ2luYWwuXG4gKlxuICogT25seSBzaGFsbG93IG9iamVjdHMgYXJlIHN1cHBvcnRlZCwgcGFzc2luZyBhIG5lc3RlZCBvYmplY3QgdG8gdGhpc1xuICogZnVuY3Rpb24gd2lsbCBjYXVzZSBhIFR5cGVFcnJvci5cbiAqXG4gKiBPYmplY3RzIHdpdGggcHJpbWl0aXZlcywgYW5kIGFycmF5cyBvZiBwcmltaXRpdmVzIGFyZSBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybiB7T2JqZWN0fSBhIGNsb25lIG9mIHRoZSBwYXNzZWQgb2JqZWN0LlxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIGEgbmVzdGVkIG9iamVjdCBpcyBwYXNzZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqL1xubHVuci51dGlscy5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIHZhciBjbG9uZSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldLFxuICAgICAgICB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbC5zbGljZSgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNsb25lIGlzIG5vdCBkZWVwIGFuZCBkb2VzIG5vdCBzdXBwb3J0IG5lc3RlZCBvYmplY3RzXCIpXG4gIH1cblxuICByZXR1cm4gY2xvbmVcbn1cbmx1bnIuRmllbGRSZWYgPSBmdW5jdGlvbiAoZG9jUmVmLCBmaWVsZE5hbWUsIHN0cmluZ1ZhbHVlKSB7XG4gIHRoaXMuZG9jUmVmID0gZG9jUmVmXG4gIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lXG4gIHRoaXMuX3N0cmluZ1ZhbHVlID0gc3RyaW5nVmFsdWVcbn1cblxubHVuci5GaWVsZFJlZi5qb2luZXIgPSBcIi9cIlxuXG5sdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICB2YXIgbiA9IHMuaW5kZXhPZihsdW5yLkZpZWxkUmVmLmpvaW5lcilcblxuICBpZiAobiA9PT0gLTEpIHtcbiAgICB0aHJvdyBcIm1hbGZvcm1lZCBmaWVsZCByZWYgc3RyaW5nXCJcbiAgfVxuXG4gIHZhciBmaWVsZFJlZiA9IHMuc2xpY2UoMCwgbiksXG4gICAgICBkb2NSZWYgPSBzLnNsaWNlKG4gKyAxKVxuXG4gIHJldHVybiBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZFJlZiwgcylcbn1cblxubHVuci5GaWVsZFJlZi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9zdHJpbmdWYWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuZmllbGROYW1lICsgbHVuci5GaWVsZFJlZi5qb2luZXIgKyB0aGlzLmRvY1JlZlxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX3N0cmluZ1ZhbHVlXG59XG4vKiFcbiAqIGx1bnIuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIGx1bnIgc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlNldCA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLmVsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmIChlbGVtZW50cykge1xuICAgIHRoaXMubGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHNbZWxlbWVudHNbaV1dID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxufVxuXG4vKipcbiAqIEEgY29tcGxldGUgc2V0IHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEByZWFkb25seVxuICogQHR5cGUge2x1bnIuU2V0fVxuICovXG5sdW5yLlNldC5jb21wbGV0ZSA9IHtcbiAgaW50ZXJzZWN0OiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICB1bmlvbjogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH0sXG5cbiAgY29udGFpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogQW4gZW1wdHkgc2V0IHRoYXQgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmVtcHR5ID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSBPYmplY3Qgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBzZXQgaXMgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqL1xubHVuci5TZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICByZXR1cm4gISF0aGlzLmVsZW1lbnRzW29iamVjdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb250YWluaW5nIG9ubHkgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIHByZXNlbnQgaW4gYm90aFxuICogdGhpcyBzZXQgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIGludGVyc2VjdCB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybnMge2x1bnIuU2V0fSBhIG5ldyBzZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgdmFyIGEsIGIsIGVsZW1lbnRzLCBpbnRlcnNlY3Rpb24gPSBbXVxuXG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuY29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiBvdGhlclxuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoIDwgb3RoZXIubGVuZ3RoKSB7XG4gICAgYSA9IHRoaXNcbiAgICBiID0gb3RoZXJcbiAgfSBlbHNlIHtcbiAgICBhID0gb3RoZXJcbiAgICBiID0gdGhpc1xuICB9XG5cbiAgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhhLmVsZW1lbnRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldXG4gICAgaWYgKGVsZW1lbnQgaW4gYi5lbGVtZW50cykge1xuICAgICAgaW50ZXJzZWN0aW9uLnB1c2goZWxlbWVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0IChpbnRlcnNlY3Rpb24pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBzZXQgY29tYmluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuU2V0fSBvdGhlciAtIHNldCB0byB1bmlvbiB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybiB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSB1bmlvbiBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqL1xuXG5sdW5yLlNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiBsdW5yLlNldC5jb21wbGV0ZVxuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0KE9iamVjdC5rZXlzKHRoaXMuZWxlbWVudHMpLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlci5lbGVtZW50cykpKVxufVxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgaW52ZXJzZSBkb2N1bWVudCBmcmVxdWVuY3kgZm9yXG4gKiBhIHBvc3RpbmcuIFRoaXMgaXMgc2hhcmVkIGJldHdlZW4gdGhlIGJ1aWxkZXIgYW5kIHRoZSBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zdGluZyAtIFRoZSBwb3N0aW5nIGZvciBhIGdpdmVuIHRlcm1cbiAqIEBwYXJhbSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMuXG4gKi9cbmx1bnIuaWRmID0gZnVuY3Rpb24gKHBvc3RpbmcsIGRvY3VtZW50Q291bnQpIHtcbiAgdmFyIGRvY3VtZW50c1dpdGhUZXJtID0gMFxuXG4gIGZvciAodmFyIGZpZWxkTmFtZSBpbiBwb3N0aW5nKSB7XG4gICAgaWYgKGZpZWxkTmFtZSA9PSAnX2luZGV4JykgY29udGludWUgLy8gSWdub3JlIHRoZSB0ZXJtIGluZGV4LCBpdHMgbm90IGEgZmllbGRcbiAgICBkb2N1bWVudHNXaXRoVGVybSArPSBPYmplY3Qua2V5cyhwb3N0aW5nW2ZpZWxkTmFtZV0pLmxlbmd0aFxuICB9XG5cbiAgdmFyIHggPSAoZG9jdW1lbnRDb3VudCAtIGRvY3VtZW50c1dpdGhUZXJtICsgMC41KSAvIChkb2N1bWVudHNXaXRoVGVybSArIDAuNSlcblxuICByZXR1cm4gTWF0aC5sb2coMSArIE1hdGguYWJzKHgpKVxufVxuXG4vKipcbiAqIEEgdG9rZW4gd3JhcHMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0b2tlblxuICogYXMgaXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlIHRleHQgcHJvY2Vzc2luZyBwaXBlbGluZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyPScnXSAtIFRoZSBzdHJpbmcgdG9rZW4gYmVpbmcgd3JhcHBlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGE9e31dIC0gTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cbmx1bnIuVG9rZW4gPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB0aGlzLnN0ciA9IHN0ciB8fCBcIlwiXG4gIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCB7fVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRva2VuIHN0cmluZyB0aGF0IGlzIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBvYmplY3QuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnN0clxufVxuXG4vKipcbiAqIEEgdG9rZW4gdXBkYXRlIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB1cGRhdGluZyBvciBvcHRpb25hbGx5XG4gKiB3aGVuIGNsb25pbmcgYSB0b2tlbi5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuLlxuICogQHBhcmFtIHtPYmplY3R9IG1ldGFkYXRhIC0gQWxsIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5cbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gdGhlIHdyYXBwZWQgc3RyaW5nIHRva2VuLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAqICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpXG4gKiB9KVxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSB0b2tlbiBzdHJpbmcuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuc3RyID0gZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdG9rZW4uIE9wdGlvbmFsbHkgYSBmdW5jdGlvbiBjYW4gYmVcbiAqIGFwcGxpZWQgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IFtmbl0gLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgY2xvbmVkIHRva2VuLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuID0gZm4gfHwgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgfVxuICByZXR1cm4gbmV3IGx1bnIuVG9rZW4gKGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKSwgdGhpcy5tZXRhZGF0YSlcbn1cbi8qIVxuICogbHVuci50b2tlbml6ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBhIHN0cmluZyBpbnRvIHRva2VucyByZWFkeSB0byBiZSBpbnNlcnRlZCBpbnRvXG4gKiB0aGUgc2VhcmNoIGluZGV4LiBVc2VzIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgIHRvIHNwbGl0IHN0cmluZ3MsIGNoYW5nZVxuICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIGhvdyBzdHJpbmdzIGFyZSBzcGxpdCBpbnRvIHRva2Vucy5cbiAqXG4gKiBUaGlzIHRva2VuaXplciB3aWxsIGNvbnZlcnQgaXRzIHBhcmFtZXRlciB0byBhIHN0cmluZyBieSBjYWxsaW5nIGB0b1N0cmluZ2AgYW5kXG4gKiB0aGVuIHdpbGwgc3BsaXQgdGhpcyBzdHJpbmcgb24gdGhlIGNoYXJhY3RlciBpbiBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYC5cbiAqIEFycmF5cyB3aWxsIGhhdmUgdGhlaXIgZWxlbWVudHMgY29udmVydGVkIHRvIHN0cmluZ3MgYW5kIHdyYXBwZWQgaW4gYSBsdW5yLlRva2VuLlxuICpcbiAqIE9wdGlvbmFsIG1ldGFkYXRhIGNhbiBiZSBwYXNzZWQgdG8gdGhlIHRva2VuaXplciwgdGhpcyBtZXRhZGF0YSB3aWxsIGJlIGNsb25lZCBhbmRcbiAqIGFkZGVkIGFzIG1ldGFkYXRhIHRvIGV2ZXJ5IHRva2VuIHRoYXQgaXMgY3JlYXRlZCBmcm9tIHRoZSBvYmplY3QgdG8gYmUgdG9rZW5pemVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IGludG8gdG9rZW5zXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggZXZlcnkgdG9rZW5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuW119XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnRva2VuaXplciA9IGZ1bmN0aW9uIChvYmosIG1ldGFkYXRhKSB7XG4gIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBuZXcgbHVuci5Ub2tlbihcbiAgICAgICAgbHVuci51dGlscy5hc1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICB2YXIgc3RyID0gb2JqLnRvU3RyaW5nKCkudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoLFxuICAgICAgdG9rZW5zID0gW11cblxuICBmb3IgKHZhciBzbGljZUVuZCA9IDAsIHNsaWNlU3RhcnQgPSAwOyBzbGljZUVuZCA8PSBsZW47IHNsaWNlRW5kKyspIHtcbiAgICB2YXIgY2hhciA9IHN0ci5jaGFyQXQoc2xpY2VFbmQpLFxuICAgICAgICBzbGljZUxlbmd0aCA9IHNsaWNlRW5kIC0gc2xpY2VTdGFydFxuXG4gICAgaWYgKChjaGFyLm1hdGNoKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcikgfHwgc2xpY2VFbmQgPT0gbGVuKSkge1xuXG4gICAgICBpZiAoc2xpY2VMZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0b2tlbk1ldGFkYXRhID0gbHVuci51dGlscy5jbG9uZShtZXRhZGF0YSkgfHwge31cbiAgICAgICAgdG9rZW5NZXRhZGF0YVtcInBvc2l0aW9uXCJdID0gW3NsaWNlU3RhcnQsIHNsaWNlTGVuZ3RoXVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wiaW5kZXhcIl0gPSB0b2tlbnMubGVuZ3RoXG5cbiAgICAgICAgdG9rZW5zLnB1c2goXG4gICAgICAgICAgbmV3IGx1bnIuVG9rZW4gKFxuICAgICAgICAgICAgc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSxcbiAgICAgICAgICAgIHRva2VuTWV0YWRhdGFcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc2xpY2VTdGFydCA9IHNsaWNlRW5kICsgMVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIFRoZSBzZXBhcmF0b3IgdXNlZCB0byBzcGxpdCBhIHN0cmluZyBpbnRvIHRva2Vucy4gT3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZlxuICogYGx1bnIudG9rZW5pemVyYCBiZWhhdmlvdXIgd2hlbiB0b2tlbml6aW5nIHN0cmluZ3MuIEJ5IGRlZmF1bHQgdGhpcyBzcGxpdHMgb24gd2hpdGVzcGFjZSBhbmQgaHlwaGVucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2VlIGx1bnIudG9rZW5pemVyXG4gKi9cbmx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IC9bXFxzXFwtXSsvXG4vKiFcbiAqIGx1bnIuUGlwZWxpbmVcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuUGlwZWxpbmVzIG1haW50YWluIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYmUgYXBwbGllZCB0byBhbGxcbiAqIHRva2VucyBpbiBkb2N1bWVudHMgZW50ZXJpbmcgdGhlIHNlYXJjaCBpbmRleCBhbmQgcXVlcmllcyBiZWluZyByYW4gYWdhaW5zdFxuICogdGhlIGluZGV4LlxuICpcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXggY3JlYXRlZCB3aXRoIHRoZSBsdW5yIHNob3J0Y3V0IHdpbGwgY29udGFpbiBhXG4gKiBwaXBlbGluZSB3aXRoIGEgc3RvcCB3b3JkIGZpbHRlciBhbmQgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLiBFeHRyYVxuICogZnVuY3Rpb25zIGNhbiBiZSBhZGRlZCBiZWZvcmUgb3IgYWZ0ZXIgZWl0aGVyIG9mIHRoZXNlIGZ1bmN0aW9ucyBvciB0aGVzZVxuICogZGVmYXVsdCBmdW5jdGlvbnMgY2FuIGJlIHJlbW92ZWQuXG4gKlxuICogV2hlbiBydW4gdGhlIHBpcGVsaW5lIHdpbGwgY2FsbCBlYWNoIGZ1bmN0aW9uIGluIHR1cm4sIHBhc3NpbmcgYSB0b2tlbiwgdGhlXG4gKiBpbmRleCBvZiB0aGF0IHRva2VuIGluIHRoZSBvcmlnaW5hbCBsaXN0IG9mIGFsbCB0b2tlbnMgYW5kIGZpbmFsbHkgYSBsaXN0IG9mXG4gKiBhbGwgdGhlIG9yaWdpbmFsIHRva2Vucy5cbiAqXG4gKiBUaGUgb3V0cHV0IG9mIGZ1bmN0aW9ucyBpbiB0aGUgcGlwZWxpbmUgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIG5leHQgZnVuY3Rpb25cbiAqIGluIHRoZSBwaXBlbGluZS4gVG8gZXhjbHVkZSBhIHRva2VuIGZyb20gZW50ZXJpbmcgdGhlIGluZGV4IHRoZSBmdW5jdGlvblxuICogc2hvdWxkIHJldHVybiB1bmRlZmluZWQsIHRoZSByZXN0IG9mIHRoZSBwaXBlbGluZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aFxuICogdGhpcyB0b2tlbi5cbiAqXG4gKiBGb3Igc2VyaWFsaXNhdGlvbiBvZiBwaXBlbGluZXMgdG8gd29yaywgYWxsIGZ1bmN0aW9ucyB1c2VkIGluIGFuIGluc3RhbmNlIG9mXG4gKiBhIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIHdpdGggbHVuci5QaXBlbGluZS4gUmVnaXN0ZXJlZCBmdW5jdGlvbnMgY2FuXG4gKiB0aGVuIGJlIGxvYWRlZC4gSWYgdHJ5aW5nIHRvIGxvYWQgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRoYXQgdXNlcyBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIG5vdCByZWdpc3RlcmVkIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIElmIG5vdCBwbGFubmluZyBvbiBzZXJpYWxpc2luZyB0aGUgcGlwZWxpbmUgdGhlbiByZWdpc3RlcmluZyBwaXBlbGluZSBmdW5jdGlvbnNcbiAqIGlzIG5vdCBuZWNlc3NhcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuUGlwZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gbWFwcyBsdW5yLlRva2VuIHRvIGx1bnIuVG9rZW4uIEEgbHVuci5Ub2tlbiBjb250YWlucyB0aGUgdG9rZW5cbiAqIHN0cmluZyBhcyB3ZWxsIGFzIGFsbCBrbm93biBtZXRhZGF0YS4gQSBwaXBlbGluZSBmdW5jdGlvbiBjYW4gbXV0YXRlIHRoZSB0b2tlbiBzdHJpbmdcbiAqIG9yIG11dGF0ZSAob3IgYWRkKSBtZXRhZGF0YSBmb3IgYSBnaXZlbiB0b2tlbi5cbiAqXG4gKiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBpbmRpY2F0ZSB0aGF0IHRoZSBwYXNzZWQgdG9rZW4gc2hvdWxkIGJlIGRpc2NhcmRlZCBieSByZXR1cm5pbmdcbiAqIG51bGwuIFRoaXMgdG9rZW4gd2lsbCBub3QgYmUgcGFzc2VkIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgd2lsbCBub3QgYmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBNdWx0aXBsZSB0b2tlbnMgY2FuIGJlIHJldHVybmVkIGJ5IHJldHVybmluZyBhbiBhcnJheSBvZiB0b2tlbnMuIEVhY2ggdG9rZW4gd2lsbCBiZSBwYXNzZWRcbiAqIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgYWxsIHdpbGwgcmV0dXJuZWQgdG9rZW5zIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEFueSBudW1iZXIgb2YgcGlwZWxpbmUgZnVuY3Rpb25zIG1heSBiZSBjaGFpbmVkIHRvZ2V0aGVyIHVzaW5nIGEgbHVuci5QaXBlbGluZS5cbiAqXG4gKiBAaW50ZXJmYWNlIGx1bnIuUGlwZWxpbmVGdW5jdGlvblxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gZnJvbSB0aGUgZG9jdW1lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGkgLSBUaGUgaW5kZXggb2YgdGhpcyB0b2tlbiBpbiB0aGUgY29tcGxldGUgbGlzdCBvZiB0b2tlbnMgZm9yIHRoaXMgZG9jdW1lbnQvZmllbGQuXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5bXX0gdG9rZW5zIC0gQWxsIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEByZXR1cm5zIHsoP2x1bnIuVG9rZW58bHVuci5Ub2tlbltdKX1cbiAqL1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gd2l0aCB0aGUgcGlwZWxpbmUuXG4gKlxuICogRnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIGlmIHRoZSBwaXBlbGluZVxuICogbmVlZHMgdG8gYmUgc2VyaWFsaXNlZCwgb3IgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIG5lZWRzIHRvIGJlIGxvYWRlZC5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGZ1bmN0aW9uIGRvZXMgbm90IGFkZCBpdCB0byBhIHBpcGVsaW5lLCBmdW5jdGlvbnMgbXVzdCBzdGlsbCBiZVxuICogYWRkZWQgdG8gaW5zdGFuY2VzIG9mIHRoZSBwaXBlbGluZSBmb3IgdGhlbSB0byBiZSB1c2VkIHdoZW4gcnVubmluZyBhIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgLSBUaGUgbGFiZWwgdG8gcmVnaXN0ZXIgdGhpcyBmdW5jdGlvbiB3aXRoXG4gKi9cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgbGFiZWwpIHtcbiAgaWYgKGxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucykge1xuICAgIGx1bnIudXRpbHMud2FybignT3ZlcndyaXRpbmcgZXhpc3RpbmcgcmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGxhYmVsKVxuICB9XG5cbiAgZm4ubGFiZWwgPSBsYWJlbFxuICBsdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnNbZm4ubGFiZWxdID0gZm5cbn1cblxuLyoqXG4gKiBXYXJucyBpZiB0aGUgZnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgYXMgYSBQaXBlbGluZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yLlxuICogQHByaXZhdGVcbiAqL1xubHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGlzUmVnaXN0ZXJlZCA9IGZuLmxhYmVsICYmIChmbi5sYWJlbCBpbiB0aGlzLnJlZ2lzdGVyZWRGdW5jdGlvbnMpXG5cbiAgaWYgKCFpc1JlZ2lzdGVyZWQpIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oJ0Z1bmN0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggcGlwZWxpbmUuIFRoaXMgbWF5IGNhdXNlIHByb2JsZW1zIHdoZW4gc2VyaWFsaXNpbmcgdGhlIGluZGV4LlxcbicsIGZuKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGlzZWQgcGlwZWxpbmUuXG4gKlxuICogQWxsIGZ1bmN0aW9ucyB0byBiZSBsb2FkZWQgbXVzdCBhbHJlYWR5IGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLlxuICogSWYgYW55IGZ1bmN0aW9uIGZyb20gdGhlIHNlcmlhbGlzZWQgZGF0YSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB0aGVuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXNlZCAtIFRoZSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5QaXBlbGluZS5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGlzZWQpIHtcbiAgdmFyIHBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcblxuICBzZXJpYWxpc2VkLmZvckVhY2goZnVuY3Rpb24gKGZuTmFtZSkge1xuICAgIHZhciBmbiA9IGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbk5hbWVdXG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHBpcGVsaW5lLmFkZChmbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbG9hZCB1bnJlZ2lzdGVyZWQgZnVuY3Rpb246ICcgKyBmbk5hbWUpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBwaXBlbGluZVxufVxuXG4vKipcbiAqIEFkZHMgbmV3IGZ1bmN0aW9ucyB0byB0aGUgZW5kIG9mIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb25bXX0gZnVuY3Rpb25zIC0gQW55IG51bWJlciBvZiBmdW5jdGlvbnMgdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuICAgIHRoaXMuX3N0YWNrLnB1c2goZm4pXG4gIH0sIHRoaXMpXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBhZnRlciBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChleGlzdGluZ0ZuLCBuZXdGbikge1xuICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChuZXdGbilcblxuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihleGlzdGluZ0ZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBleGlzdGluZ0ZuJylcbiAgfVxuXG4gIHBvcyA9IHBvcyArIDFcbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBiZWZvcmUgYSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZVxuICogcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBleGlzdGluZ0ZuIC0gQSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBuZXdGbiAtIFRoZSBuZXcgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhIGZ1bmN0aW9uIGZyb20gdGhlIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcmVtb3ZlIGZyb20gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDEpXG59XG5cbi8qKlxuICogUnVucyB0aGUgY3VycmVudCBsaXN0IG9mIGZ1bmN0aW9ucyB0aGF0IG1ha2UgdXAgdGhlIHBpcGVsaW5lIGFnYWluc3QgdGhlXG4gKiBwYXNzZWQgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VucyBUaGUgdG9rZW5zIHRvIHJ1biB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRva2Vucykge1xuICB2YXIgc3RhY2tMZW5ndGggPSB0aGlzLl9zdGFjay5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9zdGFja1tpXVxuICAgIHZhciBtZW1vID0gW11cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdG9rZW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZm4odG9rZW5zW2pdLCBqLCB0b2tlbnMpXG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCB8fCByZXN1bHQgPT09ICcnKSBjb250aW51ZVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcmVzdWx0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgbWVtby5wdXNoKHJlc3VsdFtrXSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2tlbnMgPSBtZW1vXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBwYXNzaW5nIGEgc3RyaW5nIHRocm91Z2ggYSBwaXBlbGluZSBhbmQgZ2V0dGluZ1xuICogc3RyaW5ncyBvdXQuIFRoaXMgbWV0aG9kIHRha2VzIGNhcmUgb2Ygd3JhcHBpbmcgdGhlIHBhc3NlZCBzdHJpbmcgaW4gYVxuICogdG9rZW4gYW5kIG1hcHBpbmcgdGhlIHJlc3VsdGluZyB0b2tlbnMgYmFjayB0byBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHBhc3MgdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHRva2VuXG4gKiBwYXNzZWQgdG8gdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW5TdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB2YXIgdG9rZW4gPSBuZXcgbHVuci5Ub2tlbiAoc3RyLCBtZXRhZGF0YSlcblxuICByZXR1cm4gdGhpcy5ydW4oW3Rva2VuXSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKVxuICB9KVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgcGlwZWxpbmUgYnkgcmVtb3ZpbmcgYW55IGV4aXN0aW5nIHByb2Nlc3NvcnMuXG4gKlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGlwZWxpbmUgcmVhZHkgZm9yIHNlcmlhbGlzYXRpb24uXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhY2subWFwKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuXG4gICAgcmV0dXJuIGZuLmxhYmVsXG4gIH0pXG59XG4vKiFcbiAqIGx1bnIuVmVjdG9yXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHZlY3RvciBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgdmVjdG9yIHNwYWNlIG9mIGRvY3VtZW50cyBhbmQgcXVlcmllcy4gVGhlc2VcbiAqIHZlY3RvcnMgc3VwcG9ydCBvcGVyYXRpb25zIHRvIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHR3byBkb2N1bWVudHMgb3JcbiAqIGEgZG9jdW1lbnQgYW5kIGEgcXVlcnkuXG4gKlxuICogTm9ybWFsbHkgbm8gcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgZm9yIGluaXRpYWxpemluZyBhIHZlY3RvciwgYnV0IGluIHRoZSBjYXNlIG9mXG4gKiBsb2FkaW5nIGEgcHJldmlvdXNseSBkdW1wZWQgdmVjdG9yIHRoZSByYXcgZWxlbWVudHMgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyB2ZWN0b3JzIGFyZSBpbXBsZW1lbnRlZCB3aXRoIGEgZmxhdCBhcnJheSwgd2hlcmUgYW4gZWxlbWVudHNcbiAqIGluZGV4IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGl0cyB2YWx1ZS4gRS5nLiBbaW5kZXgsIHZhbHVlLCBpbmRleCwgdmFsdWVdLiBUaGlzXG4gKiBhbGxvd3MgdGhlIHVuZGVybHlpbmcgYXJyYXkgdG8gYmUgYXMgc3BhcnNlIGFzIHBvc3NpYmxlIGFuZCBzdGlsbCBvZmZlciBkZWNlbnRcbiAqIHBlcmZvcm1hbmNlIHdoZW4gYmVpbmcgdXNlZCBmb3IgdmVjdG9yIGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyW119IFtlbGVtZW50c10gLSBUaGUgZmxhdCBsaXN0IG9mIGVsZW1lbnQgaW5kZXggYW5kIGVsZW1lbnQgdmFsdWUgcGFpcnMuXG4gKi9cbmx1bnIuVmVjdG9yID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzIHx8IFtdXG59XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbiB3aXRoaW4gdGhlIHZlY3RvciB0byBpbnNlcnQgYSBnaXZlbiBpbmRleC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBieSBpbnNlcnQgYW5kIHVwc2VydC4gSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZSBpbmRleGVzIHRoZW5cbiAqIHRoZSBwb3NpdGlvbiBpcyByZXR1cm5lZCBhcyBpZiB0aGUgdmFsdWUgZm9yIHRoYXQgaW5kZXggd2VyZSB0byBiZSB1cGRhdGVkLCBidXQgaXRcbiAqIGlzIHRoZSBjYWxsZXJzIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBkdXBsaWNhdGUgYXQgdGhhdCBpbmRleFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnBvc2l0aW9uRm9ySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgLy8gRm9yIGFuIGVtcHR5IHZlY3RvciB0aGUgdHVwbGUgY2FuIGJlIGluc2VydGVkIGF0IHRoZSBiZWdpbm5pbmdcbiAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdmFyIHN0YXJ0ID0gMCxcbiAgICAgIGVuZCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMixcbiAgICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnQsXG4gICAgICBwaXZvdFBvaW50ID0gTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpLFxuICAgICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG5cbiAgd2hpbGUgKHNsaWNlTGVuZ3RoID4gMSkge1xuICAgIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHN0YXJ0ID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICAgIGVuZCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0XG4gICAgcGl2b3RQb2ludCA9IHN0YXJ0ICsgTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpXG4gICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgIHJldHVybiAocGl2b3RQb2ludCArIDEpICogMlxuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhbiBlbGVtZW50IGF0IGFuIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIERvZXMgbm90IGFsbG93IGR1cGxpY2F0ZXMsIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBlbnRyeVxuICogZm9yIHRoaXMgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCkge1xuICB0aGlzLnVwc2VydChpbnNlcnRJZHgsIHZhbCwgZnVuY3Rpb24gKCkge1xuICAgIHRocm93IFwiZHVwbGljYXRlIGluZGV4XCJcbiAgfSlcbn1cblxuLyoqXG4gKiBJbnNlcnRzIG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBmb3IgdXBkYXRlcywgdGhlIGV4aXN0aW5nIHZhbHVlIGFuZCB0aGVcbiAqIHJlcXVlc3RlZCB2YWx1ZSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50c1xuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudXBzZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsLCBmbikge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHZhciBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25Gb3JJbmRleChpbnNlcnRJZHgpXG5cbiAgaWYgKHRoaXMuZWxlbWVudHNbcG9zaXRpb25dID09IGluc2VydElkeCkge1xuICAgIHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSA9IGZuKHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSwgdmFsKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAwLCBpbnNlcnRJZHgsIHZhbClcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fbWFnbml0dWRlKSByZXR1cm4gdGhpcy5fbWFnbml0dWRlXG5cbiAgdmFyIHN1bU9mU3F1YXJlcyA9IDAsXG4gICAgICBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBlbGVtZW50c0xlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuZWxlbWVudHNbaV1cbiAgICBzdW1PZlNxdWFyZXMgKz0gdmFsICogdmFsXG4gIH1cblxuICByZXR1cm4gdGhpcy5fbWFnbml0dWRlID0gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcylcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgdmVjdG9yIHRvIGNvbXB1dGUgdGhlIGRvdCBwcm9kdWN0IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHZhciBkb3RQcm9kdWN0ID0gMCxcbiAgICAgIGEgPSB0aGlzLmVsZW1lbnRzLCBiID0gb3RoZXJWZWN0b3IuZWxlbWVudHMsXG4gICAgICBhTGVuID0gYS5sZW5ndGgsIGJMZW4gPSBiLmxlbmd0aCxcbiAgICAgIGFWYWwgPSAwLCBiVmFsID0gMCxcbiAgICAgIGkgPSAwLCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYUxlbiAmJiBqIDwgYkxlbikge1xuICAgIGFWYWwgPSBhW2ldLCBiVmFsID0gYltqXVxuICAgIGlmIChhVmFsIDwgYlZhbCkge1xuICAgICAgaSArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID4gYlZhbCkge1xuICAgICAgaiArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID09IGJWYWwpIHtcbiAgICAgIGRvdFByb2R1Y3QgKz0gYVtpICsgMV0gKiBiW2ogKyAxXVxuICAgICAgaSArPSAyXG4gICAgICBqICs9IDJcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG90UHJvZHVjdFxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgb3RoZXIgdmVjdG9yIHRvIGNhbGN1bGF0ZSB0aGVcbiAqIHNpbWlsYXJpdHkgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5zaW1pbGFyaXR5ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmRvdChvdGhlclZlY3RvcikgLyB0aGlzLm1hZ25pdHVkZSgpIHx8IDBcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdmVjdG9yIHRvIGFuIGFycmF5IG9mIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5ICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIpXG5cbiAgZm9yICh2YXIgaSA9IDEsIGogPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMiwgaisrKSB7XG4gICAgb3V0cHV0W2pdID0gdGhpcy5lbGVtZW50c1tpXVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEEgSlNPTiBzZXJpYWxpemFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVsZW1lbnRzXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiBsdW5yLnN0ZW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbSAtIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpbi9Qb3J0ZXJTdGVtbWVyL2pzLnR4dFxuICovXG5cbi8qKlxuICogbHVuci5zdGVtbWVyIGlzIGFuIGVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lciwgdGhpcyBpcyBhIEphdmFTY3JpcHRcbiAqIGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb3J0ZXJTdGVtbWVyIHRha2VuIGZyb20gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBUaGUgc3RyaW5nIHRvIHN0ZW1cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqIEBmdW5jdGlvblxuICovXG5sdW5yLnN0ZW1tZXIgPSAoZnVuY3Rpb24oKXtcbiAgdmFyIHN0ZXAybGlzdCA9IHtcbiAgICAgIFwiYXRpb25hbFwiIDogXCJhdGVcIixcbiAgICAgIFwidGlvbmFsXCIgOiBcInRpb25cIixcbiAgICAgIFwiZW5jaVwiIDogXCJlbmNlXCIsXG4gICAgICBcImFuY2lcIiA6IFwiYW5jZVwiLFxuICAgICAgXCJpemVyXCIgOiBcIml6ZVwiLFxuICAgICAgXCJibGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImFsbGlcIiA6IFwiYWxcIixcbiAgICAgIFwiZW50bGlcIiA6IFwiZW50XCIsXG4gICAgICBcImVsaVwiIDogXCJlXCIsXG4gICAgICBcIm91c2xpXCIgOiBcIm91c1wiLFxuICAgICAgXCJpemF0aW9uXCIgOiBcIml6ZVwiLFxuICAgICAgXCJhdGlvblwiIDogXCJhdGVcIixcbiAgICAgIFwiYXRvclwiIDogXCJhdGVcIixcbiAgICAgIFwiYWxpc21cIiA6IFwiYWxcIixcbiAgICAgIFwiaXZlbmVzc1wiIDogXCJpdmVcIixcbiAgICAgIFwiZnVsbmVzc1wiIDogXCJmdWxcIixcbiAgICAgIFwib3VzbmVzc1wiIDogXCJvdXNcIixcbiAgICAgIFwiYWxpdGlcIiA6IFwiYWxcIixcbiAgICAgIFwiaXZpdGlcIiA6IFwiaXZlXCIsXG4gICAgICBcImJpbGl0aVwiIDogXCJibGVcIixcbiAgICAgIFwibG9naVwiIDogXCJsb2dcIlxuICAgIH0sXG5cbiAgICBzdGVwM2xpc3QgPSB7XG4gICAgICBcImljYXRlXCIgOiBcImljXCIsXG4gICAgICBcImF0aXZlXCIgOiBcIlwiLFxuICAgICAgXCJhbGl6ZVwiIDogXCJhbFwiLFxuICAgICAgXCJpY2l0aVwiIDogXCJpY1wiLFxuICAgICAgXCJpY2FsXCIgOiBcImljXCIsXG4gICAgICBcImZ1bFwiIDogXCJcIixcbiAgICAgIFwibmVzc1wiIDogXCJcIlxuICAgIH0sXG5cbiAgICBjID0gXCJbXmFlaW91XVwiLCAgICAgICAgICAvLyBjb25zb25hbnRcbiAgICB2ID0gXCJbYWVpb3V5XVwiLCAgICAgICAgICAvLyB2b3dlbFxuICAgIEMgPSBjICsgXCJbXmFlaW91eV0qXCIsICAgIC8vIGNvbnNvbmFudCBzZXF1ZW5jZVxuICAgIFYgPSB2ICsgXCJbYWVpb3VdKlwiLCAgICAgIC8vIHZvd2VsIHNlcXVlbmNlXG5cbiAgICBtZ3IwID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDLCAgICAgICAgICAgICAgIC8vIFtDXVZDLi4uIGlzIG0+MFxuICAgIG1lcTEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBcIihcIiArIFYgKyBcIik/JFwiLCAgLy8gW0NdVkNbVl0gaXMgbT0xXG4gICAgbWdyMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFYgKyBDLCAgICAgICAvLyBbQ11WQ1ZDLi4uIGlzIG0+MVxuICAgIHNfdiA9IFwiXihcIiArIEMgKyBcIik/XCIgKyB2OyAgICAgICAgICAgICAgICAgICAvLyB2b3dlbCBpbiBzdGVtXG5cbiAgdmFyIHJlX21ncjAgPSBuZXcgUmVnRXhwKG1ncjApO1xuICB2YXIgcmVfbWdyMSA9IG5ldyBSZWdFeHAobWdyMSk7XG4gIHZhciByZV9tZXExID0gbmV3IFJlZ0V4cChtZXExKTtcbiAgdmFyIHJlX3NfdiA9IG5ldyBSZWdFeHAoc192KTtcblxuICB2YXIgcmVfMWEgPSAvXiguKz8pKHNzfGkpZXMkLztcbiAgdmFyIHJlMl8xYSA9IC9eKC4rPykoW15zXSlzJC87XG4gIHZhciByZV8xYiA9IC9eKC4rPyllZWQkLztcbiAgdmFyIHJlMl8xYiA9IC9eKC4rPykoZWR8aW5nKSQvO1xuICB2YXIgcmVfMWJfMiA9IC8uJC87XG4gIHZhciByZTJfMWJfMiA9IC8oYXR8Ymx8aXopJC87XG4gIHZhciByZTNfMWJfMiA9IG5ldyBSZWdFeHAoXCIoW15hZWlvdXlsc3pdKVxcXFwxJFwiKTtcbiAgdmFyIHJlNF8xYl8yID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHJlXzFjID0gL14oLis/W15hZWlvdV0peSQvO1xuICB2YXIgcmVfMiA9IC9eKC4rPykoYXRpb25hbHx0aW9uYWx8ZW5jaXxhbmNpfGl6ZXJ8YmxpfGFsbGl8ZW50bGl8ZWxpfG91c2xpfGl6YXRpb258YXRpb258YXRvcnxhbGlzbXxpdmVuZXNzfGZ1bG5lc3N8b3VzbmVzc3xhbGl0aXxpdml0aXxiaWxpdGl8bG9naSkkLztcblxuICB2YXIgcmVfMyA9IC9eKC4rPykoaWNhdGV8YXRpdmV8YWxpemV8aWNpdGl8aWNhbHxmdWx8bmVzcykkLztcblxuICB2YXIgcmVfNCA9IC9eKC4rPykoYWx8YW5jZXxlbmNlfGVyfGljfGFibGV8aWJsZXxhbnR8ZW1lbnR8bWVudHxlbnR8b3V8aXNtfGF0ZXxpdGl8b3VzfGl2ZXxpemUpJC87XG4gIHZhciByZTJfNCA9IC9eKC4rPykoc3x0KShpb24pJC87XG5cbiAgdmFyIHJlXzUgPSAvXiguKz8pZSQvO1xuICB2YXIgcmVfNV8xID0gL2xsJC87XG4gIHZhciByZTNfNSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciBwb3J0ZXJTdGVtbWVyID0gZnVuY3Rpb24gcG9ydGVyU3RlbW1lcih3KSB7XG4gICAgdmFyIHN0ZW0sXG4gICAgICBzdWZmaXgsXG4gICAgICBmaXJzdGNoLFxuICAgICAgcmUsXG4gICAgICByZTIsXG4gICAgICByZTMsXG4gICAgICByZTQ7XG5cbiAgICBpZiAody5sZW5ndGggPCAzKSB7IHJldHVybiB3OyB9XG5cbiAgICBmaXJzdGNoID0gdy5zdWJzdHIoMCwxKTtcbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9VcHBlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMWFcbiAgICByZSA9IHJlXzFhXG4gICAgcmUyID0gcmUyXzFhO1xuXG4gICAgaWYgKHJlLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZSxcIiQxJDJcIik7IH1cbiAgICBlbHNlIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlMixcIiQxJDJcIik7IH1cblxuICAgIC8vIFN0ZXAgMWJcbiAgICByZSA9IHJlXzFiO1xuICAgIHJlMiA9IHJlMl8xYjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KGZwWzFdKSkge1xuICAgICAgICByZSA9IHJlXzFiXzI7XG4gICAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZTIgPSByZV9zX3Y7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICAgIHJlMiA9IHJlMl8xYl8yO1xuICAgICAgICByZTMgPSByZTNfMWJfMjtcbiAgICAgICAgcmU0ID0gcmU0XzFiXzI7XG4gICAgICAgIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlMy50ZXN0KHcpKSB7IHJlID0gcmVfMWJfMjsgdyA9IHcucmVwbGFjZShyZSxcIlwiKTsgfVxuICAgICAgICBlbHNlIGlmIChyZTQudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYyAtIHJlcGxhY2Ugc3VmZml4IHkgb3IgWSBieSBpIGlmIHByZWNlZGVkIGJ5IGEgbm9uLXZvd2VsIHdoaWNoIGlzIG5vdCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkIChzbyBjcnkgLT4gY3JpLCBieSAtPiBieSwgc2F5IC0+IHNheSlcbiAgICByZSA9IHJlXzFjO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgdyA9IHN0ZW0gKyBcImlcIjtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDJcbiAgICByZSA9IHJlXzI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDJsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAzXG4gICAgcmUgPSByZV8zO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAzbGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNFxuICAgIHJlID0gcmVfNDtcbiAgICByZTIgPSByZTJfNDtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdICsgZnBbMl07XG4gICAgICByZTIgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNVxuICAgIHJlID0gcmVfNTtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIHJlMiA9IHJlX21lcTE7XG4gICAgICByZTMgPSByZTNfNTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pIHx8IChyZTIudGVzdChzdGVtKSAmJiAhKHJlMy50ZXN0KHN0ZW0pKSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmUgPSByZV81XzE7XG4gICAgcmUyID0gcmVfbWdyMTtcbiAgICBpZiAocmUudGVzdCh3KSAmJiByZTIudGVzdCh3KSkge1xuICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgdHVybiBpbml0aWFsIFkgYmFjayB0byB5XG5cbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9Mb3dlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiB3O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udXBkYXRlKHBvcnRlclN0ZW1tZXIpO1xuICB9XG59KSgpO1xuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdGVtbWVyLCAnc3RlbW1lcicpXG4vKiFcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciBidWlsZHMgYSBzdG9wV29yZEZpbHRlciBmdW5jdGlvbiBmcm9tIHRoZSBwcm92aWRlZFxuICogbGlzdCBvZiBzdG9wIHdvcmRzLlxuICpcbiAqIFRoZSBidWlsdCBpbiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGJ1aWx0IHVzaW5nIHRoaXMgZ2VuZXJhdG9yIGFuZCBjYW4gYmUgdXNlZFxuICogdG8gZ2VuZXJhdGUgY3VzdG9tIHN0b3BXb3JkRmlsdGVycyBmb3IgYXBwbGljYXRpb25zIG9yIG5vbiBFbmdsaXNoIGxhbmd1YWdlcy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICogQHNlZSBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKi9cbmx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciA9IGZ1bmN0aW9uIChzdG9wV29yZHMpIHtcbiAgdmFyIHdvcmRzID0gc3RvcFdvcmRzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgc3RvcFdvcmQpIHtcbiAgICBtZW1vW3N0b3BXb3JkXSA9IHN0b3BXb3JkXG4gICAgcmV0dXJuIG1lbW9cbiAgfSwge30pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICh0b2tlbiAmJiB3b3Jkc1t0b2tlbi50b1N0cmluZygpXSAhPT0gdG9rZW4udG9TdHJpbmcoKSkgcmV0dXJuIHRva2VuXG4gIH1cbn1cblxuLyoqXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RvcCB3b3JkIGxpc3QgZmlsdGVyLCBhbnkgd29yZHNcbiAqIGNvbnRhaW5lZCBpbiB0aGUgbGlzdCB3aWxsIG5vdCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgZmlsdGVyLlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGUgUGlwZWxpbmUuIElmIHRoZSB0b2tlbiBkb2VzIG5vdCBwYXNzIHRoZVxuICogZmlsdGVyIHRoZW4gdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtcyB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIHRvIGNoZWNrIGZvciBiZWluZyBhIHN0b3Agd29yZC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5zdG9wV29yZEZpbHRlciA9IGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlcihbXG4gICdhJyxcbiAgJ2FibGUnLFxuICAnYWJvdXQnLFxuICAnYWNyb3NzJyxcbiAgJ2FmdGVyJyxcbiAgJ2FsbCcsXG4gICdhbG1vc3QnLFxuICAnYWxzbycsXG4gICdhbScsXG4gICdhbW9uZycsXG4gICdhbicsXG4gICdhbmQnLFxuICAnYW55JyxcbiAgJ2FyZScsXG4gICdhcycsXG4gICdhdCcsXG4gICdiZScsXG4gICdiZWNhdXNlJyxcbiAgJ2JlZW4nLFxuICAnYnV0JyxcbiAgJ2J5JyxcbiAgJ2NhbicsXG4gICdjYW5ub3QnLFxuICAnY291bGQnLFxuICAnZGVhcicsXG4gICdkaWQnLFxuICAnZG8nLFxuICAnZG9lcycsXG4gICdlaXRoZXInLFxuICAnZWxzZScsXG4gICdldmVyJyxcbiAgJ2V2ZXJ5JyxcbiAgJ2ZvcicsXG4gICdmcm9tJyxcbiAgJ2dldCcsXG4gICdnb3QnLFxuICAnaGFkJyxcbiAgJ2hhcycsXG4gICdoYXZlJyxcbiAgJ2hlJyxcbiAgJ2hlcicsXG4gICdoZXJzJyxcbiAgJ2hpbScsXG4gICdoaXMnLFxuICAnaG93JyxcbiAgJ2hvd2V2ZXInLFxuICAnaScsXG4gICdpZicsXG4gICdpbicsXG4gICdpbnRvJyxcbiAgJ2lzJyxcbiAgJ2l0JyxcbiAgJ2l0cycsXG4gICdqdXN0JyxcbiAgJ2xlYXN0JyxcbiAgJ2xldCcsXG4gICdsaWtlJyxcbiAgJ2xpa2VseScsXG4gICdtYXknLFxuICAnbWUnLFxuICAnbWlnaHQnLFxuICAnbW9zdCcsXG4gICdtdXN0JyxcbiAgJ215JyxcbiAgJ25laXRoZXInLFxuICAnbm8nLFxuICAnbm9yJyxcbiAgJ25vdCcsXG4gICdvZicsXG4gICdvZmYnLFxuICAnb2Z0ZW4nLFxuICAnb24nLFxuICAnb25seScsXG4gICdvcicsXG4gICdvdGhlcicsXG4gICdvdXInLFxuICAnb3duJyxcbiAgJ3JhdGhlcicsXG4gICdzYWlkJyxcbiAgJ3NheScsXG4gICdzYXlzJyxcbiAgJ3NoZScsXG4gICdzaG91bGQnLFxuICAnc2luY2UnLFxuICAnc28nLFxuICAnc29tZScsXG4gICd0aGFuJyxcbiAgJ3RoYXQnLFxuICAndGhlJyxcbiAgJ3RoZWlyJyxcbiAgJ3RoZW0nLFxuICAndGhlbicsXG4gICd0aGVyZScsXG4gICd0aGVzZScsXG4gICd0aGV5JyxcbiAgJ3RoaXMnLFxuICAndGlzJyxcbiAgJ3RvJyxcbiAgJ3RvbycsXG4gICd0d2FzJyxcbiAgJ3VzJyxcbiAgJ3dhbnRzJyxcbiAgJ3dhcycsXG4gICd3ZScsXG4gICd3ZXJlJyxcbiAgJ3doYXQnLFxuICAnd2hlbicsXG4gICd3aGVyZScsXG4gICd3aGljaCcsXG4gICd3aGlsZScsXG4gICd3aG8nLFxuICAnd2hvbScsXG4gICd3aHknLFxuICAnd2lsbCcsXG4gICd3aXRoJyxcbiAgJ3dvdWxkJyxcbiAgJ3lldCcsXG4gICd5b3UnLFxuICAneW91cidcbl0pXG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0b3BXb3JkRmlsdGVyLCAnc3RvcFdvcmRGaWx0ZXInKVxuLyohXG4gKiBsdW5yLnRyaW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIudHJpbW1lciBpcyBhIHBpcGVsaW5lIGZ1bmN0aW9uIGZvciB0cmltbWluZyBub24gd29yZFxuICogY2hhcmFjdGVycyBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0b2tlbnMgYmVmb3JlIHRoZXlcbiAqIGVudGVyIHRoZSBpbmRleC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG1heSBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbiBsYXRpblxuICogY2hhcmFjdGVycyBhbmQgc2hvdWxkIGVpdGhlciBiZSByZW1vdmVkIG9yIGFkYXB0ZWQgZm9yIHVzZVxuICogd2l0aCBsYW5ndWFnZXMgd2l0aCBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKi9cbmx1bnIudHJpbW1lciA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxcVysvLCAnJykucmVwbGFjZSgvXFxXKyQvLCAnJylcbiAgfSlcbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIudHJpbW1lciwgJ3RyaW1tZXInKVxuLyohXG4gKiBsdW5yLlRva2VuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHRva2VuIHNldCBpcyB1c2VkIHRvIHN0b3JlIHRoZSB1bmlxdWUgbGlzdCBvZiBhbGwgdG9rZW5zXG4gKiB3aXRoaW4gYW4gaW5kZXguIFRva2VuIHNldHMgYXJlIGFsc28gdXNlZCB0byByZXByZXNlbnQgYW5cbiAqIGluY29taW5nIHF1ZXJ5IHRvIHRoZSBpbmRleCwgdGhpcyBxdWVyeSB0b2tlbiBzZXQgYW5kIGluZGV4XG4gKiB0b2tlbiBzZXQgYXJlIHRoZW4gaW50ZXJzZWN0ZWQgdG8gZmluZCB3aGljaCB0b2tlbnMgdG8gbG9va1xuICogdXAgaW4gdGhlIGludmVydGVkIGluZGV4LlxuICpcbiAqIEEgdG9rZW4gc2V0IGNhbiBob2xkIG11bHRpcGxlIHRva2VucywgYXMgaW4gdGhlIGNhc2Ugb2YgdGhlXG4gKiBpbmRleCB0b2tlbiBzZXQsIG9yIGl0IGNhbiBob2xkIGEgc2luZ2xlIHRva2VuIGFzIGluIHRoZVxuICogY2FzZSBvZiBhIHNpbXBsZSBxdWVyeSB0b2tlbiBzZXQuXG4gKlxuICogQWRkaXRpb25hbGx5IHRva2VuIHNldHMgYXJlIHVzZWQgdG8gcGVyZm9ybSB3aWxkY2FyZCBtYXRjaGluZy5cbiAqIExlYWRpbmcsIGNvbnRhaW5lZCBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzIGFyZSBzdXBwb3J0ZWQsIGFuZFxuICogZnJvbSB0aGlzIGVkaXQgZGlzdGFuY2UgbWF0Y2hpbmcgY2FuIGFsc28gYmUgcHJvdmlkZWQuXG4gKlxuICogVG9rZW4gc2V0cyBhcmUgaW1wbGVtZW50ZWQgYXMgYSBtaW5pbWFsIGZpbml0ZSBzdGF0ZSBhdXRvbWF0YSxcbiAqIHdoZXJlIGJvdGggY29tbW9uIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBhcmUgc2hhcmVkIGJldHdlZW4gdG9rZW5zLlxuICogVGhpcyBoZWxwcyB0byByZWR1Y2UgdGhlIHNwYWNlIHVzZWQgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHNldC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5Ub2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5maW5hbCA9IGZhbHNlXG4gIHRoaXMuZWRnZXMgPSB7fVxuICB0aGlzLmlkID0gbHVuci5Ub2tlblNldC5fbmV4dElkXG4gIGx1bnIuVG9rZW5TZXQuX25leHRJZCArPSAxXG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIG5leHQsIGF1dG8gaW5jcmVtZW50LCBpZGVudGlmaWVyIHRvIGFzc2lnblxuICogdG8gYSBuZXcgdG9rZW5TZXQuXG4gKlxuICogVG9rZW5TZXRzIHJlcXVpcmUgYSB1bmlxdWUgaWRlbnRpZmllciB0byBiZSBjb3JyZWN0bHkgbWluaW1pc2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuVG9rZW5TZXQuX25leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gc29ydGVkIGFycmF5IG9mIHdvcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyciAtIEEgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MgdG8gY3JlYXRlIHRoZSBzZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBpbnB1dCBhcnJheSBpcyBub3Qgc29ydGVkLlxuICovXG5sdW5yLlRva2VuU2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1aWxkZXIuaW5zZXJ0KGFycltpXSlcbiAgfVxuXG4gIGJ1aWxkZXIuZmluaXNoKClcbiAgcmV0dXJuIGJ1aWxkZXIucm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgZnJvbSBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNsYXVzZSAtIEEgc2luZ2xlIGNsYXVzZSBmcm9tIGx1bnIuUXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhdXNlLnRlcm0gLSBUaGUgcXVlcnkgY2xhdXNlIHRlcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gW2NsYXVzZS5lZGl0RGlzdGFuY2VdIC0gVGhlIG9wdGlvbmFsIGVkaXQgZGlzdGFuY2UgZm9yIHRoZSB0ZXJtLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCdlZGl0RGlzdGFuY2UnIGluIGNsYXVzZSkge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyhjbGF1c2UudGVybSwgY2xhdXNlLmVkaXREaXN0YW5jZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tU3RyaW5nKGNsYXVzZS50ZXJtKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCByZXByZXNlbnRpbmcgYSBzaW5nbGUgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWRcbiAqIGVkaXQgZGlzdGFuY2UuXG4gKlxuICogSW5zZXJ0aW9ucywgZGVsZXRpb25zLCBzdWJzdGl0dXRpb25zIGFuZCB0cmFuc3Bvc2l0aW9ucyBhcmUgZWFjaFxuICogdHJlYXRlZCBhcyBhbiBlZGl0IGRpc3RhbmNlIG9mIDEuXG4gKlxuICogSW5jcmVhc2luZyB0aGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHdpbGwgaGF2ZSBhIGRyYW1hdGljIGltcGFjdFxuICogb24gdGhlIHBlcmZvcm1hbmNlIG9mIGJvdGggY3JlYXRpbmcgYW5kIGludGVyc2VjdGluZyB0aGVzZSBUb2tlblNldHMuXG4gKiBJdCBpcyBhZHZpc2VkIHRvIGtlZXAgdGhlIGVkaXQgZGlzdGFuY2UgbGVzcyB0aGFuIDMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0b2tlbiBzZXQgZnJvbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlZGl0RGlzdGFuY2UgLSBUaGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHRvIG1hdGNoLlxuICogQHJldHVybnMge2x1bnIuVmVjdG9yfVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIGVkaXREaXN0YW5jZSkge1xuICB2YXIgcm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBub2RlOiByb290LFxuICAgIGVkaXRzUmVtYWluaW5nOiBlZGl0RGlzdGFuY2UsXG4gICAgc3RyOiBzdHJcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIG5vIGVkaXRcbiAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBub0VkaXROb2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gbm9FZGl0Tm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIG5vRWRpdE5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBub2RlOiBub0VkaXROb2RlLFxuICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcsXG4gICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBkZWxldGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBkZWxldGUgaW4gdGhlIHN0cmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICBkZWxldGlvbk5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gZGVsZXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogZGVsZXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGp1c3QgcmVtb3ZpbmcgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gdGhlIHN0clxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICBmcmFtZS5ub2RlLmZpbmFsID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHN1YnN0aXR1dGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgc3Vic3RpdHV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIHN1YnN0aXR1dGVcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IHN1YnN0aXR1dGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdWJzdGl0dXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogc3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gaW5zZXJ0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gaW5zZXJ0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGluc2VydGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBpbnNlcnRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0cmFuc3Bvc2l0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSB0cmFuc3Bvc2l0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgdGhlcmUgYXJlIGVub3VnaCBjaGFyYWN0ZXJzIHRvIHRyYW5zcG9zZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyQSA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgY2hhckIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIHRyYW5zcG9zZU5vZGVcblxuICAgICAgaWYgKGNoYXJCIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyQl0gPSB0cmFuc3Bvc2VOb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHRyYW5zcG9zZU5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGNoYXJBICsgZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgZnJvbSBhIHN0cmluZy5cbiAqXG4gKiBUaGUgc3RyaW5nIG1heSBjb250YWluIG9uZSBvciBtb3JlIHdpbGRjYXJkIGNoYXJhY3RlcnMgKCopXG4gKiB0aGF0IHdpbGwgYWxsb3cgd2lsZGNhcmQgbWF0Y2hpbmcgd2hlbiBpbnRlcnNlY3Rpbmcgd2l0aFxuICogYW5vdGhlciBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgYSBUb2tlblNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIG5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIHJvb3QgPSBub2RlXG5cbiAgLypcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgY2hhcmFjdGVycyB3aXRoaW4gdGhlIHBhc3NlZCBzdHJpbmdcbiAgICogYXBwZW5kaW5nIGEgbm9kZSBmb3IgZWFjaCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIFdoZW4gYSB3aWxkY2FyZCBjaGFyYWN0ZXIgaXMgZm91bmQgdGhlbiBhIHNlbGZcbiAgICogcmVmZXJlbmNpbmcgZWRnZSBpcyBpbnRyb2R1Y2VkIHRvIGNvbnRpbnVhbGx5IG1hdGNoXG4gICAqIGFueSBudW1iZXIgb2YgYW55IGNoYXJhY3RlcnMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHJbaV0sXG4gICAgICAgIGZpbmFsID0gKGkgPT0gbGVuIC0gMSlcblxuICAgIGlmIChjaGFyID09IFwiKlwiKSB7XG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbm9kZVxuICAgICAgbm9kZS5maW5hbCA9IGZpbmFsXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG5cbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0XG4gICAgICBub2RlID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhpcyBUb2tlblNldCBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdvcmRzID0gW11cblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHByZWZpeDogXCJcIixcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpLFxuICAgICAgICBlZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBsZW4gPSBlZGdlcy5sZW5ndGhcblxuICAgIGlmIChmcmFtZS5ub2RlLmZpbmFsKSB7XG4gICAgICAvKiBJbiBTYWZhcmksIGF0IHRoaXMgcG9pbnQgdGhlIHByZWZpeCBpcyBzb21ldGltZXMgY29ycnVwdGVkLCBzZWU6XG4gICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vb2xpdmVybm4vbHVuci5qcy9pc3N1ZXMvMjc5IENhbGxpbmcgYW55XG4gICAgICAgKiBTdHJpbmcucHJvdG90eXBlIG1ldGhvZCBmb3JjZXMgU2FmYXJpIHRvIFwiY2FzdFwiIHRoaXMgc3RyaW5nIHRvIHdoYXRcbiAgICAgICAqIGl0J3Mgc3VwcG9zZWQgdG8gYmUsIGZpeGluZyB0aGUgYnVnLiAqL1xuICAgICAgZnJhbWUucHJlZml4LmNoYXJBdCgwKVxuICAgICAgd29yZHMucHVzaChmcmFtZS5wcmVmaXgpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGVkZ2UgPSBlZGdlc1tpXVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgcHJlZml4OiBmcmFtZS5wcmVmaXguY29uY2F0KGVkZ2UpLFxuICAgICAgICBub2RlOiBmcmFtZS5ub2RlLmVkZ2VzW2VkZ2VdXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3b3Jkc1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYWxsb3cgVG9rZW5TZXRzIHRvIGJlIHVzZWQgYXMga2V5c1xuICogaW4gb2JqZWN0cywgbGFyZ2VseSB0byBhaWQgdGhlIGNvbnN0cnVjdGlvbiBhbmQgbWluaW1pc2F0aW9uXG4gKiBvZiBhIFRva2VuU2V0LiBBcyBzdWNoIGl0IGlzIG5vdCBkZXNpZ25lZCB0byBiZSBhIGh1bWFuXG4gKiBmcmllbmRseSByZXByZXNlbnRhdGlvbiBvZiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE5PVEU6IFVzaW5nIE9iamVjdC5rZXlzIGhlcmUgYXMgdGhpcy5lZGdlcyBpcyB2ZXJ5IGxpa2VseVxuICAvLyB0byBlbnRlciAnaGFzaC1tb2RlJyB3aXRoIG1hbnkga2V5cyBiZWluZyBhZGRlZFxuICAvL1xuICAvLyBhdm9pZGluZyBhIGZvci1pbiBsb29wIGhlcmUgYXMgaXQgbGVhZHMgdG8gdGhlIGZ1bmN0aW9uXG4gIC8vIGJlaW5nIGRlLW9wdGltaXNlZCAoYXQgbGVhc3QgaW4gVjgpLiBGcm9tIHNvbWUgc2ltcGxlXG4gIC8vIGJlbmNobWFya3MgdGhlIHBlcmZvcm1hbmNlIGlzIGNvbXBhcmFibGUsIGJ1dCBhbGxvd2luZ1xuICAvLyBWOCB0byBvcHRpbWl6ZSBtYXkgbWVhbiBlYXN5IHBlcmZvcm1hbmNlIHdpbnMgaW4gdGhlIGZ1dHVyZS5cblxuICBpZiAodGhpcy5fc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0clxuICB9XG5cbiAgdmFyIHN0ciA9IHRoaXMuZmluYWwgPyAnMScgOiAnMCcsXG4gICAgICBsYWJlbHMgPSBPYmplY3Qua2V5cyh0aGlzLmVkZ2VzKS5zb3J0KCksXG4gICAgICBsZW4gPSBsYWJlbHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsYWJlbCA9IGxhYmVsc1tpXSxcbiAgICAgICAgbm9kZSA9IHRoaXMuZWRnZXNbbGFiZWxdXG5cbiAgICBzdHIgPSBzdHIgKyBsYWJlbCArIG5vZGUuaWRcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IFRva2VuU2V0IHRoYXQgaXMgdGhlIGludGVyc2VjdGlvbiBvZlxuICogdGhpcyBUb2tlblNldCBhbmQgdGhlIHBhc3NlZCBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGludGVyc2VjdGlvbiB3aWxsIHRha2UgaW50byBhY2NvdW50IGFueSB3aWxkY2FyZHNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYiAtIEFuIG90aGVyIFRva2VuU2V0IHRvIGludGVyc2VjdCB3aXRoLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChiKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIGZyYW1lID0gdW5kZWZpbmVkXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBxTm9kZTogYixcbiAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIE5PVEU6IEFzIHdpdGggdGhlICN0b1N0cmluZyBtZXRob2QsIHdlIGFyZSB1c2luZ1xuICAgIC8vIE9iamVjdC5rZXlzIGFuZCBhIGZvciBsb29wIGluc3RlYWQgb2YgYSBmb3ItaW4gbG9vcFxuICAgIC8vIGFzIGJvdGggb2YgdGhlc2Ugb2JqZWN0cyBlbnRlciAnaGFzaCcgbW9kZSwgY2F1c2luZ1xuICAgIC8vIHRoZSBmdW5jdGlvbiB0byBiZSBkZS1vcHRpbWlzZWQgaW4gVjhcbiAgICB2YXIgcUVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUucU5vZGUuZWRnZXMpLFxuICAgICAgICBxTGVuID0gcUVkZ2VzLmxlbmd0aCxcbiAgICAgICAgbkVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIG5MZW4gPSBuRWRnZXMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBxID0gMDsgcSA8IHFMZW47IHErKykge1xuICAgICAgdmFyIHFFZGdlID0gcUVkZ2VzW3FdXG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbkxlbjsgbisrKSB7XG4gICAgICAgIHZhciBuRWRnZSA9IG5FZGdlc1tuXVxuXG4gICAgICAgIGlmIChuRWRnZSA9PSBxRWRnZSB8fCBxRWRnZSA9PSAnKicpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbbkVkZ2VdLFxuICAgICAgICAgICAgICBxTm9kZSA9IGZyYW1lLnFOb2RlLmVkZ2VzW3FFZGdlXSxcbiAgICAgICAgICAgICAgZmluYWwgPSBub2RlLmZpbmFsICYmIHFOb2RlLmZpbmFsLFxuICAgICAgICAgICAgICBuZXh0ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICBpZiAobkVkZ2UgaW4gZnJhbWUub3V0cHV0LmVkZ2VzKSB7XG4gICAgICAgICAgICAvLyBhbiBlZGdlIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGNoYXJhY3RlclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBjcmVhdGUgYSBuZXcgbm9kZSwganVzdCBzZXQgdGhlIGZpbmFsaXR5XG4gICAgICAgICAgICAvLyBiaXQgdW5sZXNzIHRoaXMgbm9kZSBpcyBhbHJlYWR5IGZpbmFsXG4gICAgICAgICAgICBuZXh0ID0gZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXVxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IG5leHQuZmluYWwgfHwgZmluYWxcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlZGdlIGV4aXN0cyB5ZXQsIG11c3QgY3JlYXRlIG9uZVxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmaW5hbGl0eSBiaXQgYW5kIGluc2VydCBpdFxuICAgICAgICAgICAgLy8gaW50byB0aGUgb3V0cHV0XG4gICAgICAgICAgICBuZXh0ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBmaW5hbFxuICAgICAgICAgICAgZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXSA9IG5leHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgIHFOb2RlOiBxTm9kZSxcbiAgICAgICAgICAgIG91dHB1dDogbmV4dCxcbiAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxubHVuci5Ub2tlblNldC5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnByZXZpb3VzV29yZCA9IFwiXCJcbiAgdGhpcy5yb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgdGhpcy51bmNoZWNrZWROb2RlcyA9IFtdXG4gIHRoaXMubWluaW1pemVkTm9kZXMgPSB7fVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gIHZhciBub2RlLFxuICAgICAgY29tbW9uUHJlZml4ID0gMFxuXG4gIGlmICh3b3JkIDwgdGhpcy5wcmV2aW91c1dvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IgKFwiT3V0IG9mIG9yZGVyIHdvcmQgaW5zZXJ0aW9uXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmQubGVuZ3RoICYmIGkgPCB0aGlzLnByZXZpb3VzV29yZC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh3b3JkW2ldICE9IHRoaXMucHJldmlvdXNXb3JkW2ldKSBicmVha1xuICAgIGNvbW1vblByZWZpeCsrXG4gIH1cblxuICB0aGlzLm1pbmltaXplKGNvbW1vblByZWZpeClcblxuICBpZiAodGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIG5vZGUgPSB0aGlzLnJvb3RcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1t0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDFdLmNoaWxkXG4gIH1cblxuICBmb3IgKHZhciBpID0gY29tbW9uUHJlZml4OyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgICBjaGFyID0gd29yZFtpXVxuXG4gICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHROb2RlXG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnB1c2goe1xuICAgICAgcGFyZW50OiBub2RlLFxuICAgICAgY2hhcjogY2hhcixcbiAgICAgIGNoaWxkOiBuZXh0Tm9kZVxuICAgIH0pXG5cbiAgICBub2RlID0gbmV4dE5vZGVcbiAgfVxuXG4gIG5vZGUuZmluYWwgPSB0cnVlXG4gIHRoaXMucHJldmlvdXNXb3JkID0gd29yZFxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5taW5pbWl6ZSgwKVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLm1pbmltaXplID0gZnVuY3Rpb24gKGRvd25Ubykge1xuICBmb3IgKHZhciBpID0gdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxOyBpID49IGRvd25UbzsgaS0tKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW2ldLFxuICAgICAgICBjaGlsZEtleSA9IG5vZGUuY2hpbGQudG9TdHJpbmcoKVxuXG4gICAgaWYgKGNoaWxkS2V5IGluIHRoaXMubWluaW1pemVkTm9kZXMpIHtcbiAgICAgIG5vZGUucGFyZW50LmVkZ2VzW25vZGUuY2hhcl0gPSB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWNoZSB0aGUga2V5IGZvciB0aGlzIG5vZGUgc2luY2VcbiAgICAgIC8vIHdlIGtub3cgaXQgY2FuJ3QgY2hhbmdlIGFueW1vcmVcbiAgICAgIG5vZGUuY2hpbGQuX3N0ciA9IGNoaWxkS2V5XG5cbiAgICAgIHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldID0gbm9kZS5jaGlsZFxuICAgIH1cblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucG9wKClcbiAgfVxufVxuLyohXG4gKiBsdW5yLkluZGV4XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBbiBpbmRleCBjb250YWlucyB0aGUgYnVpbHQgaW5kZXggb2YgYWxsIGRvY3VtZW50cyBhbmQgcHJvdmlkZXMgYSBxdWVyeSBpbnRlcmZhY2VcbiAqIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBVc3VhbGx5IGluc3RhbmNlcyBvZiBsdW5yLkluZGV4IHdpbGwgbm90IGJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb25zdHJ1Y3RvciwgaW5zdGVhZFxuICogbHVuci5CdWlsZGVyIHNob3VsZCBiZSB1c2VkIHRvIGNvbnN0cnVjdCBuZXcgaW5kZXhlcywgb3IgbHVuci5JbmRleC5sb2FkIHNob3VsZCBiZVxuICogdXNlZCB0byBsb2FkIHByZXZpb3VzbHkgYnVpbHQgYW5kIHNlcmlhbGl6ZWQgaW5kZXhlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIFRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBidWlsdCBzZWFyY2ggaW5kZXguXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMuaW52ZXJ0ZWRJbmRleCAtIEFuIGluZGV4IG9mIHRlcm0vZmllbGQgdG8gZG9jdW1lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBsdW5yLlZlY3Rvcj59IGF0dHJzLmZpZWxkVmVjdG9ycyAtIEZpZWxkIHZlY3RvcnNcbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYXR0cnMudG9rZW5TZXQgLSBBbiBzZXQgb2YgYWxsIGNvcnB1cyB0b2tlbnMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhdHRycy5maWVsZHMgLSBUaGUgbmFtZXMgb2YgaW5kZXhlZCBkb2N1bWVudCBmaWVsZHMuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmV9IGF0dHJzLnBpcGVsaW5lIC0gVGhlIHBpcGVsaW5lIHRvIHVzZSBmb3Igc2VhcmNoIHRlcm1zLlxuICovXG5sdW5yLkluZGV4ID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IGF0dHJzLmludmVydGVkSW5kZXhcbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBhdHRycy5maWVsZFZlY3RvcnNcbiAgdGhpcy50b2tlblNldCA9IGF0dHJzLnRva2VuU2V0XG4gIHRoaXMuZmllbGRzID0gYXR0cnMuZmllbGRzXG4gIHRoaXMucGlwZWxpbmUgPSBhdHRycy5waXBlbGluZVxufVxuXG4vKipcbiAqIEEgcmVzdWx0IGNvbnRhaW5zIGRldGFpbHMgb2YgYSBkb2N1bWVudCBtYXRjaGluZyBhIHNlYXJjaCBxdWVyeS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IGx1bnIuSW5kZXh+UmVzdWx0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVmIC0gVGhlIHJlZmVyZW5jZSBvZiB0aGUgZG9jdW1lbnQgdGhpcyByZXN1bHQgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY29yZSAtIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSByZXByZXNlbnRpbmcgaG93IHNpbWlsYXIgdGhpcyBkb2N1bWVudCBpcyB0byB0aGUgcXVlcnkuXG4gKiBAcHJvcGVydHkge2x1bnIuTWF0Y2hEYXRhfSBtYXRjaERhdGEgLSBDb250YWlucyBtZXRhZGF0YSBhYm91dCB0aGlzIG1hdGNoIGluY2x1ZGluZyB3aGljaCB0ZXJtKHMpIGNhdXNlZCB0aGUgbWF0Y2guXG4gKi9cblxuLyoqXG4gKiBBbHRob3VnaCBsdW5yIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBxdWVyaWVzIHVzaW5nIGx1bnIuUXVlcnksIGl0IGFsc28gcHJvdmlkZXMgYSBzaW1wbGVcbiAqIHF1ZXJ5IGxhbmd1YWdlIHdoaWNoIGl0c2VsZiBpcyBwYXJzZWQgaW50byBhbiBpbnN0YW5jZSBvZiBsdW5yLlF1ZXJ5LlxuICpcbiAqIEZvciBwcm9ncmFtbWF0aWNhbGx5IGJ1aWxkaW5nIHF1ZXJpZXMgaXQgaXMgYWR2aXNlZCB0byBkaXJlY3RseSB1c2UgbHVuci5RdWVyeSwgdGhlIHF1ZXJ5IGxhbmd1YWdlXG4gKiBpcyBiZXN0IHVzZWQgZm9yIGh1bWFuIGVudGVyZWQgdGV4dCByYXRoZXIgdGhhbiBwcm9ncmFtIGdlbmVyYXRlZCB0ZXh0LlxuICpcbiAqIEF0IGl0cyBzaW1wbGVzdCBxdWVyaWVzIGNhbiBqdXN0IGJlIGEgc2luZ2xlIHRlcm0sIGUuZy4gYGhlbGxvYCwgbXVsdGlwbGUgdGVybXMgYXJlIGFsc28gc3VwcG9ydGVkXG4gKiBhbmQgd2lsbCBiZSBjb21iaW5lZCB3aXRoIE9SLCBlLmcgYGhlbGxvIHdvcmxkYCB3aWxsIG1hdGNoIGRvY3VtZW50cyB0aGF0IGNvbnRhaW4gZWl0aGVyICdoZWxsbydcbiAqIG9yICd3b3JsZCcsIHRob3VnaCB0aG9zZSB0aGF0IGNvbnRhaW4gYm90aCB3aWxsIHJhbmsgaGlnaGVyIGluIHRoZSByZXN1bHRzLlxuICpcbiAqIFdpbGRjYXJkcyBjYW4gYmUgaW5jbHVkZWQgaW4gdGVybXMgdG8gbWF0Y2ggb25lIG9yIG1vcmUgdW5zcGVjaWZpZWQgY2hhcmFjdGVycywgdGhlc2Ugd2lsZGNhcmRzIGNhblxuICogYmUgaW5zZXJ0ZWQgYW55d2hlcmUgd2l0aGluIHRoZSB0ZXJtLCBhbmQgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBjYW4gZXhpc3QgaW4gYSBzaW5nbGUgdGVybS4gQWRkaW5nXG4gKiB3aWxkY2FyZHMgd2lsbCBpbmNyZWFzZSB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyB0aGF0IHdpbGwgYmUgZm91bmQgYnV0IGNhbiBhbHNvIGhhdmUgYSBuZWdhdGl2ZVxuICogaW1wYWN0IG9uIHF1ZXJ5IHBlcmZvcm1hbmNlLCBlc3BlY2lhbGx5IHdpdGggd2lsZGNhcmRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSB0ZXJtLlxuICpcbiAqIFRlcm1zIGNhbiBiZSByZXN0cmljdGVkIHRvIHNwZWNpZmljIGZpZWxkcywgZS5nLiBgdGl0bGU6aGVsbG9gLCBvbmx5IGRvY3VtZW50cyB3aXRoIHRoZSB0ZXJtXG4gKiBoZWxsbyBpbiB0aGUgdGl0bGUgZmllbGQgd2lsbCBtYXRjaCB0aGlzIHF1ZXJ5LiBVc2luZyBhIGZpZWxkIG5vdCBwcmVzZW50IGluIHRoZSBpbmRleCB3aWxsIGxlYWRcbiAqIHRvIGFuIGVycm9yIGJlaW5nIHRocm93bi5cbiAqXG4gKiBNb2RpZmllcnMgY2FuIGFsc28gYmUgYWRkZWQgdG8gdGVybXMsIGx1bnIgc3VwcG9ydHMgZWRpdCBkaXN0YW5jZSBhbmQgYm9vc3QgbW9kaWZpZXJzIG9uIHRlcm1zLiBBIHRlcm1cbiAqIGJvb3N0IHdpbGwgbWFrZSBkb2N1bWVudHMgbWF0Y2hpbmcgdGhhdCB0ZXJtIHNjb3JlIGhpZ2hlciwgZS5nLiBgZm9vXjVgLiBFZGl0IGRpc3RhbmNlIGlzIGFsc28gc3VwcG9ydGVkXG4gKiB0byBwcm92aWRlIGZ1enp5IG1hdGNoaW5nLCBlLmcuICdoZWxsb34yJyB3aWxsIG1hdGNoIGRvY3VtZW50cyB3aXRoIGhlbGxvIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyLlxuICogQXZvaWQgbGFyZ2UgdmFsdWVzIGZvciBlZGl0IGRpc3RhbmNlIHRvIGltcHJvdmUgcXVlcnkgcGVyZm9ybWFuY2UuXG4gKlxuICogRWFjaCB0ZXJtIGFsc28gc3VwcG9ydHMgYSBwcmVzZW5jZSBtb2RpZmllci4gQnkgZGVmYXVsdCBhIHRlcm0ncyBwcmVzZW5jZSBpbiBkb2N1bWVudCBpcyBvcHRpb25hbCwgaG93ZXZlclxuICogdGhpcyBjYW4gYmUgY2hhbmdlZCB0byBlaXRoZXIgcmVxdWlyZWQgb3IgcHJvaGliaXRlZC4gRm9yIGEgdGVybSdzIHByZXNlbmNlIHRvIGJlIHJlcXVpcmVkIGluIGEgZG9jdW1lbnQgdGhlXG4gKiB0ZXJtIHNob3VsZCBiZSBwcmVmaXhlZCB3aXRoIGEgJysnLCBlLmcuIGArZm9vIGJhcmAgaXMgYSBzZWFyY2ggZm9yIGRvY3VtZW50cyB0aGF0IG11c3QgY29udGFpbiAnZm9vJyBhbmRcbiAqIG9wdGlvbmFsbHkgY29udGFpbiAnYmFyJy4gQ29udmVyc2VseSBhIGxlYWRpbmcgJy0nIHNldHMgdGhlIHRlcm1zIHByZXNlbmNlIHRvIHByb2hpYml0ZWQsIGkuZS4gaXQgbXVzdCBub3RcbiAqIGFwcGVhciBpbiBhIGRvY3VtZW50LCBlLmcuIGAtZm9vIGJhcmAgaXMgYSBzZWFyY2ggZm9yIGRvY3VtZW50cyB0aGF0IGRvIG5vdCBjb250YWluICdmb28nIGJ1dCBtYXkgY29udGFpbiAnYmFyJy5cbiAqXG4gKiBUbyBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoZSBiYWNrc2xhc2ggY2hhcmFjdGVyICdcXCcgY2FuIGJlIHVzZWQsIHRoaXMgYWxsb3dzIHNlYXJjaGVzIHRvIGluY2x1ZGVcbiAqIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBjb25zaWRlcmVkIG1vZGlmaWVycywgZS5nLiBgZm9vXFx+MmAgd2lsbCBzZWFyY2ggZm9yIGEgdGVybSBcImZvb34yXCIgaW5zdGVhZFxuICogb2YgYXR0ZW1wdGluZyB0byBhcHBseSBhIGJvb3N0IG9mIDIgdG8gdGhlIHNlYXJjaCB0ZXJtIFwiZm9vXCIuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ30gbHVuci5JbmRleH5RdWVyeVN0cmluZ1xuICogQGV4YW1wbGUgPGNhcHRpb24+U2ltcGxlIHNpbmdsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPk11bHRpcGxlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsbyB3b3JsZFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSBzY29wZWQgdG8gYSBmaWVsZDwvY2FwdGlvbj5cbiAqIHRpdGxlOmhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYSBib29zdCBvZiAxMDwvY2FwdGlvbj5cbiAqIGhlbGxvXjEwXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyPC9jYXB0aW9uPlxuICogaGVsbG9+MlxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybXMgd2l0aCBwcmVzZW5jZSBtb2RpZmllcnM8L2NhcHRpb24+XG4gKiAtZm9vICtiYXIgYmF6XG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNlYXJjaCBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyBsdW5yIHF1ZXJ5IHN5bnRheC5cbiAqXG4gKiBSZXN1bHRzIHdpbGwgYmUgcmV0dXJuZWQgc29ydGVkIGJ5IHRoZWlyIHNjb3JlLCB0aGUgbW9zdCByZWxldmFudCByZXN1bHRzXG4gKiB3aWxsIGJlIHJldHVybmVkIGZpcnN0LiAgRm9yIGRldGFpbHMgb24gaG93IHRoZSBzY29yZSBpcyBjYWxjdWxhdGVkLCBwbGVhc2Ugc2VlXG4gKiB0aGUge0BsaW5rIGh0dHBzOi8vbHVucmpzLmNvbS9ndWlkZXMvc2VhcmNoaW5nLmh0bWwjc2NvcmluZ3xndWlkZX0uXG4gKlxuICogRm9yIG1vcmUgcHJvZ3JhbW1hdGljIHF1ZXJ5aW5nIHVzZSBsdW5yLkluZGV4I3F1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5RdWVyeVN0cmluZ30gcXVlcnlTdHJpbmcgLSBBIHN0cmluZyBjb250YWluaW5nIGEgbHVuciBxdWVyeS5cbiAqIEB0aHJvd3Mge2x1bnIuUXVlcnlQYXJzZUVycm9yfSBJZiB0aGUgcGFzc2VkIHF1ZXJ5IHN0cmluZyBjYW5ub3QgYmUgcGFyc2VkLlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZykge1xuICByZXR1cm4gdGhpcy5xdWVyeShmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VyID0gbmV3IGx1bnIuUXVlcnlQYXJzZXIocXVlcnlTdHJpbmcsIHF1ZXJ5KVxuICAgIHBhcnNlci5wYXJzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBxdWVyeSBidWlsZGVyIGNhbGxiYWNrIHByb3ZpZGVzIGEgcXVlcnkgb2JqZWN0IHRvIGJlIHVzZWQgdG8gZXhwcmVzc1xuICogdGhlIHF1ZXJ5IHRvIHBlcmZvcm0gb24gdGhlIGluZGV4LlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlclxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fSBxdWVyeSAtIFRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdXAuXG4gKiBAdGhpcyBsdW5yLlF1ZXJ5XG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHF1ZXJ5IGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIHRoZSB5aWVsZGVkIGx1bnIuUXVlcnkgb2JqZWN0LlxuICpcbiAqIElmIHBlcmZvcm1pbmcgcHJvZ3JhbW1hdGljIHF1ZXJpZXMgYWdhaW5zdCB0aGUgaW5kZXgsIHRoaXMgbWV0aG9kIGlzIHByZWZlcnJlZFxuICogb3ZlciBsdW5yLkluZGV4I3NlYXJjaCBzbyBhcyB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBxdWVyeSBwYXJzaW5nIG92ZXJoZWFkLlxuICpcbiAqIEEgcXVlcnkgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBleHByZXNzIHRoZSBxdWVyeSB0byBiZSBydW4gYWdhaW5zdCB0aGUgaW5kZXguXG4gKlxuICogTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgZnVuY3Rpb24gdGFrZXMgYSBjYWxsYmFjayBwYXJhbWV0ZXIgaXQgaXMgX25vdF8gYW5cbiAqIGFzeW5jaHJvbm91cyBvcGVyYXRpb24sIHRoZSBjYWxsYmFjayBpcyBqdXN0IHlpZWxkZWQgYSBxdWVyeSBvYmplY3QgdG8gYmVcbiAqIGN1c3RvbWl6ZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlcn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBidWlsZCB0aGUgcXVlcnkuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gZm9yIGVhY2ggcXVlcnkgY2xhdXNlXG4gIC8vICogcHJvY2VzcyB0ZXJtc1xuICAvLyAqIGV4cGFuZCB0ZXJtcyBmcm9tIHRva2VuIHNldFxuICAvLyAqIGZpbmQgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YVxuICAvLyAqIGdldCBkb2N1bWVudCB2ZWN0b3JzXG4gIC8vICogc2NvcmUgZG9jdW1lbnRzXG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGx1bnIuUXVlcnkodGhpcy5maWVsZHMpLFxuICAgICAgbWF0Y2hpbmdGaWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcXVlcnlWZWN0b3JzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHRlcm1GaWVsZENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHJlcXVpcmVkTWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBwcm9oaWJpdGVkTWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAvKlxuICAgKiBUbyBzdXBwb3J0IGZpZWxkIGxldmVsIGJvb3N0cyBhIHF1ZXJ5IHZlY3RvciBpcyBjcmVhdGVkIHBlclxuICAgKiBmaWVsZC4gQW4gZW1wdHkgdmVjdG9yIGlzIGVhZ2VybHkgY3JlYXRlZCB0byBzdXBwb3J0IG5lZ2F0ZWRcbiAgICogcXVlcmllcy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBxdWVyeVZlY3RvcnNbdGhpcy5maWVsZHNbaV1dID0gbmV3IGx1bnIuVmVjdG9yXG4gIH1cblxuICBmbi5jYWxsKHF1ZXJ5LCBxdWVyeSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJ5LmNsYXVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIFVubGVzcyB0aGUgcGlwZWxpbmUgaGFzIGJlZW4gZGlzYWJsZWQgZm9yIHRoaXMgdGVybSwgd2hpY2ggaXNcbiAgICAgKiB0aGUgY2FzZSBmb3IgdGVybXMgd2l0aCB3aWxkY2FyZHMsIHdlIG5lZWQgdG8gcGFzcyB0aGUgY2xhdXNlXG4gICAgICogdGVybSB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuIEEgcGlwZWxpbmUgcmV0dXJucyBhbiBhcnJheVxuICAgICAqIG9mIHByb2Nlc3NlZCB0ZXJtcy4gUGlwZWxpbmUgZnVuY3Rpb25zIG1heSBleHBhbmQgdGhlIHBhc3NlZFxuICAgICAqIHRlcm0sIHdoaWNoIG1lYW5zIHdlIG1heSBlbmQgdXAgcGVyZm9ybWluZyBtdWx0aXBsZSBpbmRleCBsb29rdXBzXG4gICAgICogZm9yIGEgc2luZ2xlIHF1ZXJ5IHRlcm0uXG4gICAgICovXG4gICAgdmFyIGNsYXVzZSA9IHF1ZXJ5LmNsYXVzZXNbaV0sXG4gICAgICAgIHRlcm1zID0gbnVsbCxcbiAgICAgICAgY2xhdXNlTWF0Y2hlcyA9IGx1bnIuU2V0LmNvbXBsZXRlXG5cbiAgICBpZiAoY2xhdXNlLnVzZVBpcGVsaW5lKSB7XG4gICAgICB0ZXJtcyA9IHRoaXMucGlwZWxpbmUucnVuU3RyaW5nKGNsYXVzZS50ZXJtLCB7XG4gICAgICAgIGZpZWxkczogY2xhdXNlLmZpZWxkc1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybXMgPSBbY2xhdXNlLnRlcm1dXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCB0ZXJtcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1ttXVxuXG4gICAgICAvKlxuICAgICAgICogRWFjaCB0ZXJtIHJldHVybmVkIGZyb20gdGhlIHBpcGVsaW5lIG5lZWRzIHRvIHVzZSB0aGUgc2FtZSBxdWVyeVxuICAgICAgICogY2xhdXNlIG9iamVjdCwgZS5nLiB0aGUgc2FtZSBib29zdCBhbmQgb3IgZWRpdCBkaXN0YW5jZS4gVGhlXG4gICAgICAgKiBzaW1wbGVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byByZS11c2UgdGhlIGNsYXVzZSBvYmplY3QgYnV0IG11dGF0ZVxuICAgICAgICogaXRzIHRlcm0gcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGNsYXVzZS50ZXJtID0gdGVybVxuXG4gICAgICAvKlxuICAgICAgICogRnJvbSB0aGUgdGVybSBpbiB0aGUgY2xhdXNlIHdlIGNyZWF0ZSBhIHRva2VuIHNldCB3aGljaCB3aWxsIHRoZW5cbiAgICAgICAqIGJlIHVzZWQgdG8gaW50ZXJzZWN0IHRoZSBpbmRleGVzIHRva2VuIHNldCB0byBnZXQgYSBsaXN0IG9mIHRlcm1zXG4gICAgICAgKiB0byBsb29rdXAgaW4gdGhlIGludmVydGVkIGluZGV4XG4gICAgICAgKi9cbiAgICAgIHZhciB0ZXJtVG9rZW5TZXQgPSBsdW5yLlRva2VuU2V0LmZyb21DbGF1c2UoY2xhdXNlKSxcbiAgICAgICAgICBleHBhbmRlZFRlcm1zID0gdGhpcy50b2tlblNldC5pbnRlcnNlY3QodGVybVRva2VuU2V0KS50b0FycmF5KClcblxuICAgICAgLypcbiAgICAgICAqIElmIGEgdGVybSBtYXJrZWQgYXMgcmVxdWlyZWQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRva2VuU2V0IGl0IGlzXG4gICAgICAgKiBpbXBvc3NpYmxlIGZvciB0aGUgc2VhcmNoIHRvIHJldHVybiBhbnkgbWF0Y2hlcy4gV2Ugc2V0IGFsbCB0aGUgZmllbGRcbiAgICAgICAqIHNjb3BlZCByZXF1aXJlZCBtYXRjaGVzIHNldCB0byBlbXB0eSBhbmQgc3RvcCBleGFtaW5pbmcgYW55IGZ1cnRoZXJcbiAgICAgICAqIGNsYXVzZXMuXG4gICAgICAgKi9cbiAgICAgIGlmIChleHBhbmRlZFRlcm1zLmxlbmd0aCA9PT0gMCAmJiBjbGF1c2UucHJlc2VuY2UgPT09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXVxuICAgICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5lbXB0eVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleHBhbmRlZFRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEZvciBlYWNoIHRlcm0gZ2V0IHRoZSBwb3N0aW5nIGFuZCB0ZXJtSW5kZXgsIHRoaXMgaXMgcmVxdWlyZWQgZm9yXG4gICAgICAgICAqIGJ1aWxkaW5nIHRoZSBxdWVyeSB2ZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZXhwYW5kZWRUZXJtID0gZXhwYW5kZWRUZXJtc1tqXSxcbiAgICAgICAgICAgIHBvc3RpbmcgPSB0aGlzLmludmVydGVkSW5kZXhbZXhwYW5kZWRUZXJtXSxcbiAgICAgICAgICAgIHRlcm1JbmRleCA9IHBvc3RpbmcuX2luZGV4XG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBGb3IgZWFjaCBmaWVsZCB0aGF0IHRoaXMgcXVlcnkgdGVybSBpcyBzY29wZWQgYnkgKGJ5IGRlZmF1bHRcbiAgICAgICAgICAgKiBhbGwgZmllbGRzIGFyZSBpbiBzY29wZSkgd2UgbmVlZCB0byBnZXQgYWxsIHRoZSBkb2N1bWVudCByZWZzXG4gICAgICAgICAgICogdGhhdCBoYXZlIHRoaXMgdGVybSBpbiB0aGF0IGZpZWxkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogVGhlIHBvc3RpbmcgaXMgdGhlIGVudHJ5IGluIHRoZSBpbnZlcnRlZEluZGV4IGZvciB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiB0ZXJtIGZyb20gYWJvdmUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXSxcbiAgICAgICAgICAgICAgZmllbGRQb3N0aW5nID0gcG9zdGluZ1tmaWVsZF0sXG4gICAgICAgICAgICAgIG1hdGNoaW5nRG9jdW1lbnRSZWZzID0gT2JqZWN0LmtleXMoZmllbGRQb3N0aW5nKSxcbiAgICAgICAgICAgICAgdGVybUZpZWxkID0gZXhwYW5kZWRUZXJtICsgXCIvXCIgKyBmaWVsZCxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudHNTZXQgPSBuZXcgbHVuci5TZXQobWF0Y2hpbmdEb2N1bWVudFJlZnMpXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIGlmIHRoZSBwcmVzZW5jZSBvZiB0aGlzIHRlcm0gaXMgcmVxdWlyZWQgZW5zdXJlIHRoYXQgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogZG9jdW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgc2V0IG9mIHJlcXVpcmVkIG1hdGNoZXMgZm9yIHRoaXMgY2xhdXNlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICAgICAgICBjbGF1c2VNYXRjaGVzID0gY2xhdXNlTWF0Y2hlcy51bmlvbihtYXRjaGluZ0RvY3VtZW50c1NldClcblxuICAgICAgICAgICAgaWYgKHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuY29tcGxldGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIGlmIHRoZSBwcmVzZW5jZSBvZiB0aGlzIHRlcm0gaXMgcHJvaGliaXRlZCBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiBkb2N1bWVudHMgYXJlIGFkZGVkIHRvIHRoZSBzZXQgb2YgcHJvaGliaXRlZCBtYXRjaGVzIGZvciB0aGlzIGZpZWxkLFxuICAgICAgICAgICAqIGNyZWF0aW5nIHRoYXQgc2V0IGlmIGl0IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRCkge1xuICAgICAgICAgICAgaWYgKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmVtcHR5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9IHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXS51bmlvbihtYXRjaGluZ0RvY3VtZW50c1NldClcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFByb2hpYml0ZWQgbWF0Y2hlcyBzaG91bGQgbm90IGJlIHBhcnQgb2YgdGhlIHF1ZXJ5IHZlY3RvciB1c2VkIGZvclxuICAgICAgICAgICAgICogc2ltaWxhcml0eSBzY29yaW5nIGFuZCBubyBtZXRhZGF0YSBzaG91bGQgYmUgZXh0cmFjdGVkIHNvIHdlIGNvbnRpbnVlXG4gICAgICAgICAgICAgKiB0byB0aGUgbmV4dCBmaWVsZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogVGhlIHF1ZXJ5IGZpZWxkIHZlY3RvciBpcyBwb3B1bGF0ZWQgdXNpbmcgdGhlIHRlcm1JbmRleCBmb3VuZCBmb3JcbiAgICAgICAgICAgKiB0aGUgdGVybSBhbmQgYSB1bml0IHZhbHVlIHdpdGggdGhlIGFwcHJvcHJpYXRlIGJvb3N0IGFwcGxpZWQuXG4gICAgICAgICAgICogVXNpbmcgdXBzZXJ0IGJlY2F1c2UgdGhlcmUgY291bGQgYWxyZWFkeSBiZSBhbiBlbnRyeSBpbiB0aGUgdmVjdG9yXG4gICAgICAgICAgICogZm9yIHRoZSB0ZXJtIHdlIGFyZSB3b3JraW5nIHdpdGguIEluIHRoYXQgY2FzZSB3ZSBqdXN0IGFkZCB0aGUgc2NvcmVzXG4gICAgICAgICAgICogdG9nZXRoZXIuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcXVlcnlWZWN0b3JzW2ZpZWxkXS51cHNlcnQodGVybUluZGV4LCBjbGF1c2UuYm9vc3QsIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYiB9KVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgd2UndmUgYWxyZWFkeSBzZWVuIHRoaXMgdGVybSwgZmllbGQgY29tYm8gdGhlbiB3ZSd2ZSBhbHJlYWR5IGNvbGxlY3RlZFxuICAgICAgICAgICAqIHRoZSBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhLCBubyBuZWVkIHRvIGdvIHRocm91Z2ggYWxsIHRoYXQgYWdhaW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAodGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IG1hdGNoaW5nRG9jdW1lbnRSZWZzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogQWxsIG1ldGFkYXRhIGZvciB0aGlzIHRlcm0vZmllbGQvZG9jdW1lbnQgdHJpcGxlXG4gICAgICAgICAgICAgKiBhcmUgdGhlbiBleHRyYWN0ZWQgYW5kIGNvbGxlY3RlZCBpbnRvIGFuIGluc3RhbmNlXG4gICAgICAgICAgICAgKiBvZiBsdW5yLk1hdGNoRGF0YSByZWFkeSB0byBiZSByZXR1cm5lZCBpbiB0aGUgcXVlcnlcbiAgICAgICAgICAgICAqIHJlc3VsdHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRG9jdW1lbnRSZWYgPSBtYXRjaGluZ0RvY3VtZW50UmVmc1tsXSxcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkUmVmID0gbmV3IGx1bnIuRmllbGRSZWYgKG1hdGNoaW5nRG9jdW1lbnRSZWYsIGZpZWxkKSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IGZpZWxkUG9zdGluZ1ttYXRjaGluZ0RvY3VtZW50UmVmXSxcbiAgICAgICAgICAgICAgICBmaWVsZE1hdGNoXG5cbiAgICAgICAgICAgIGlmICgoZmllbGRNYXRjaCA9IG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdID0gbmV3IGx1bnIuTWF0Y2hEYXRhIChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpZWxkTWF0Y2guYWRkKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBwcmVzZW5jZSB3YXMgcmVxdWlyZWQgd2UgbmVlZCB0byB1cGRhdGUgdGhlIHJlcXVpcmVkTWF0Y2hlcyBmaWVsZCBzZXRzLlxuICAgICAqIFdlIGRvIHRoaXMgYWZ0ZXIgYWxsIGZpZWxkcyBmb3IgdGhlIHRlcm0gaGF2ZSBjb2xsZWN0ZWQgdGhlaXIgbWF0Y2hlcyBiZWNhdXNlXG4gICAgICogdGhlIGNsYXVzZSB0ZXJtcyBwcmVzZW5jZSBpcyByZXF1aXJlZCBpbiBfYW55XyBvZiB0aGUgZmllbGRzIG5vdCBfYWxsXyBvZiB0aGVcbiAgICAgKiBmaWVsZHMuXG4gICAgICovXG4gICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba11cbiAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0uaW50ZXJzZWN0KGNsYXVzZU1hdGNoZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE5lZWQgdG8gY29tYmluZSB0aGUgZmllbGQgc2NvcGVkIHJlcXVpcmVkIGFuZCBwcm9oaWJpdGVkXG4gICAqIG1hdGNoaW5nIGRvY3VtZW50cyBpbnRvIGEgZ2xvYmFsIHNldCBvZiByZXF1aXJlZCBhbmQgcHJvaGliaXRlZFxuICAgKiBtYXRjaGVzXG4gICAqL1xuICB2YXIgYWxsUmVxdWlyZWRNYXRjaGVzID0gbHVuci5TZXQuY29tcGxldGUsXG4gICAgICBhbGxQcm9oaWJpdGVkTWF0Y2hlcyA9IGx1bnIuU2V0LmVtcHR5XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldXG5cbiAgICBpZiAocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSkge1xuICAgICAgYWxsUmVxdWlyZWRNYXRjaGVzID0gYWxsUmVxdWlyZWRNYXRjaGVzLmludGVyc2VjdChyZXF1aXJlZE1hdGNoZXNbZmllbGRdKVxuICAgIH1cblxuICAgIGlmIChwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0pIHtcbiAgICAgIGFsbFByb2hpYml0ZWRNYXRjaGVzID0gYWxsUHJvaGliaXRlZE1hdGNoZXMudW5pb24ocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdKVxuICAgIH1cbiAgfVxuXG4gIHZhciBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKG1hdGNoaW5nRmllbGRzKSxcbiAgICAgIHJlc3VsdHMgPSBbXSxcbiAgICAgIG1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgLypcbiAgICogSWYgdGhlIHF1ZXJ5IGlzIG5lZ2F0ZWQgKGNvbnRhaW5zIG9ubHkgcHJvaGliaXRlZCB0ZXJtcylcbiAgICogd2UgbmVlZCB0byBnZXQgX2FsbF8gZmllbGRSZWZzIGN1cnJlbnRseSBleGlzdGluZyBpbiB0aGVcbiAgICogaW5kZXguIFRoaXMgaXMgb25seSBkb25lIHdoZW4gd2Uga25vdyB0aGF0IHRoZSBxdWVyeSBpc1xuICAgKiBlbnRpcmVseSBwcm9oaWJpdGVkIHRlcm1zIHRvIGF2b2lkIGFueSBjb3N0IG9mIGdldHRpbmcgYWxsXG4gICAqIGZpZWxkUmVmcyB1bm5lY2Vzc2FyaWx5LlxuICAgKlxuICAgKiBBZGRpdGlvbmFsbHksIGJsYW5rIE1hdGNoRGF0YSBtdXN0IGJlIGNyZWF0ZWQgdG8gY29ycmVjdGx5XG4gICAqIHBvcHVsYXRlIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgaWYgKHF1ZXJ5LmlzTmVnYXRlZCgpKSB7XG4gICAgbWF0Y2hpbmdGaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVmVjdG9ycylcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtYXRjaGluZ0ZpZWxkUmVmID0gbWF0Y2hpbmdGaWVsZFJlZnNbaV1cbiAgICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhtYXRjaGluZ0ZpZWxkUmVmKVxuICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGFcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRmllbGRSZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBDdXJyZW50bHkgd2UgaGF2ZSBkb2N1bWVudCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgcXVlcnksIGJ1dCB3ZVxuICAgICAqIG5lZWQgdG8gcmV0dXJuIGRvY3VtZW50cy4gVGhlIG1hdGNoRGF0YSBhbmQgc2NvcmVzIGFyZSBjb21iaW5lZFxuICAgICAqIGZyb20gbXVsdGlwbGUgZmllbGRzIGJlbG9uZ2luZyB0byB0aGUgc2FtZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIFNjb3JlcyBhcmUgY2FsY3VsYXRlZCBieSBmaWVsZCwgdXNpbmcgdGhlIHF1ZXJ5IHZlY3RvcnMgY3JlYXRlZFxuICAgICAqIGFib3ZlLCBhbmQgY29tYmluZWQgaW50byBhIGZpbmFsIGRvY3VtZW50IHNjb3JlIHVzaW5nIGFkZGl0aW9uLlxuICAgICAqL1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhtYXRjaGluZ0ZpZWxkUmVmc1tpXSksXG4gICAgICAgIGRvY1JlZiA9IGZpZWxkUmVmLmRvY1JlZlxuXG4gICAgaWYgKCFhbGxSZXF1aXJlZE1hdGNoZXMuY29udGFpbnMoZG9jUmVmKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoYWxsUHJvaGliaXRlZE1hdGNoZXMuY29udGFpbnMoZG9jUmVmKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgZmllbGRWZWN0b3IgPSB0aGlzLmZpZWxkVmVjdG9yc1tmaWVsZFJlZl0sXG4gICAgICAgIHNjb3JlID0gcXVlcnlWZWN0b3JzW2ZpZWxkUmVmLmZpZWxkTmFtZV0uc2ltaWxhcml0eShmaWVsZFZlY3RvciksXG4gICAgICAgIGRvY01hdGNoXG5cbiAgICBpZiAoKGRvY01hdGNoID0gbWF0Y2hlc1tkb2NSZWZdKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2NNYXRjaC5zY29yZSArPSBzY29yZVxuICAgICAgZG9jTWF0Y2gubWF0Y2hEYXRhLmNvbWJpbmUobWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2ggPSB7XG4gICAgICAgIHJlZjogZG9jUmVmLFxuICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgIG1hdGNoRGF0YTogbWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdXG4gICAgICB9XG4gICAgICBtYXRjaGVzW2RvY1JlZl0gPSBtYXRjaFxuICAgICAgcmVzdWx0cy5wdXNoKG1hdGNoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFNvcnQgdGhlIHJlc3VsdHMgb2JqZWN0cyBieSBzY29yZSwgaGlnaGVzdCBmaXJzdC5cbiAgICovXG4gIHJldHVybiByZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmVcbiAgfSlcbn1cblxuLyoqXG4gKiBQcmVwYXJlcyB0aGUgaW5kZXggZm9yIEpTT04gc2VyaWFsaXphdGlvbi5cbiAqXG4gKiBUaGUgc2NoZW1hIGZvciB0aGlzIEpTT04gYmxvYiB3aWxsIGJlIGRlc2NyaWJlZCBpbiBhXG4gKiBzZXBhcmF0ZSBKU09OIHNjaGVtYSBmaWxlLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGludmVydGVkSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmludmVydGVkSW5kZXgpXG4gICAgLnNvcnQoKVxuICAgIC5tYXAoZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgIHJldHVybiBbdGVybSwgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dXVxuICAgIH0sIHRoaXMpXG5cbiAgdmFyIGZpZWxkVmVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuICAgIC5tYXAoZnVuY3Rpb24gKHJlZikge1xuICAgICAgcmV0dXJuIFtyZWYsIHRoaXMuZmllbGRWZWN0b3JzW3JlZl0udG9KU09OKCldXG4gICAgfSwgdGhpcylcblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246IGx1bnIudmVyc2lvbixcbiAgICBmaWVsZHM6IHRoaXMuZmllbGRzLFxuICAgIGZpZWxkVmVjdG9yczogZmllbGRWZWN0b3JzLFxuICAgIGludmVydGVkSW5kZXg6IGludmVydGVkSW5kZXgsXG4gICAgcGlwZWxpbmU6IHRoaXMucGlwZWxpbmUudG9KU09OKClcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXplZEluZGV4IC0gQSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuSW5kZXgubG9hZCA9IGZ1bmN0aW9uIChzZXJpYWxpemVkSW5kZXgpIHtcbiAgdmFyIGF0dHJzID0ge30sXG4gICAgICBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIHNlcmlhbGl6ZWRWZWN0b3JzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkVmVjdG9ycyxcbiAgICAgIGludmVydGVkSW5kZXggPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgc2VyaWFsaXplZEludmVydGVkSW5kZXggPSBzZXJpYWxpemVkSW5kZXguaW52ZXJ0ZWRJbmRleCxcbiAgICAgIHRva2VuU2V0QnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXIsXG4gICAgICBwaXBlbGluZSA9IGx1bnIuUGlwZWxpbmUubG9hZChzZXJpYWxpemVkSW5kZXgucGlwZWxpbmUpXG5cbiAgaWYgKHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICE9IGx1bnIudmVyc2lvbikge1xuICAgIGx1bnIudXRpbHMud2FybihcIlZlcnNpb24gbWlzbWF0Y2ggd2hlbiBsb2FkaW5nIHNlcmlhbGlzZWQgaW5kZXguIEN1cnJlbnQgdmVyc2lvbiBvZiBsdW5yICdcIiArIGx1bnIudmVyc2lvbiArIFwiJyBkb2VzIG5vdCBtYXRjaCBzZXJpYWxpemVkIGluZGV4ICdcIiArIHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICsgXCInXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRWZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gc2VyaWFsaXplZFZlY3RvcnNbaV0sXG4gICAgICAgIHJlZiA9IHR1cGxlWzBdLFxuICAgICAgICBlbGVtZW50cyA9IHR1cGxlWzFdXG5cbiAgICBmaWVsZFZlY3RvcnNbcmVmXSA9IG5ldyBsdW5yLlZlY3RvcihlbGVtZW50cylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEludmVydGVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleFtpXSxcbiAgICAgICAgdGVybSA9IHR1cGxlWzBdLFxuICAgICAgICBwb3N0aW5nID0gdHVwbGVbMV1cblxuICAgIHRva2VuU2V0QnVpbGRlci5pbnNlcnQodGVybSlcbiAgICBpbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICB9XG5cbiAgdG9rZW5TZXRCdWlsZGVyLmZpbmlzaCgpXG5cbiAgYXR0cnMuZmllbGRzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkc1xuXG4gIGF0dHJzLmZpZWxkVmVjdG9ycyA9IGZpZWxkVmVjdG9yc1xuICBhdHRycy5pbnZlcnRlZEluZGV4ID0gaW52ZXJ0ZWRJbmRleFxuICBhdHRycy50b2tlblNldCA9IHRva2VuU2V0QnVpbGRlci5yb290XG4gIGF0dHJzLnBpcGVsaW5lID0gcGlwZWxpbmVcblxuICByZXR1cm4gbmV3IGx1bnIuSW5kZXgoYXR0cnMpXG59XG4vKiFcbiAqIGx1bnIuQnVpbGRlclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5CdWlsZGVyIHBlcmZvcm1zIGluZGV4aW5nIG9uIGEgc2V0IG9mIGRvY3VtZW50cyBhbmRcbiAqIHJldHVybnMgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggcmVhZHkgZm9yIHF1ZXJ5aW5nLlxuICpcbiAqIEFsbCBjb25maWd1cmF0aW9uIG9mIHRoZSBpbmRleCBpcyBkb25lIHZpYSB0aGUgYnVpbGRlciwgdGhlXG4gKiBmaWVsZHMgdG8gaW5kZXgsIHRoZSBkb2N1bWVudCByZWZlcmVuY2UsIHRoZSB0ZXh0IHByb2Nlc3NpbmdcbiAqIHBpcGVsaW5lIGFuZCBkb2N1bWVudCBzY29yaW5nIHBhcmFtZXRlcnMgYXJlIGFsbCBzZXQgb24gdGhlXG4gKiBidWlsZGVyIGJlZm9yZSBpbmRleGluZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBfcmVmIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCByZWZlcmVuY2UgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBfZmllbGRzIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCBmaWVsZHMgdG8gaW5kZXguXG4gKiBAcHJvcGVydHkge29iamVjdH0gaW52ZXJ0ZWRJbmRleCAtIFRoZSBpbnZlcnRlZCBpbmRleCBtYXBzIHRlcm1zIHRvIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudFRlcm1GcmVxdWVuY2llcyAtIEtlZXBzIHRyYWNrIG9mIGRvY3VtZW50IHRlcm0gZnJlcXVlbmNpZXMuXG4gKiBAcHJvcGVydHkge29iamVjdH0gZG9jdW1lbnRMZW5ndGhzIC0gS2VlcHMgdHJhY2sgb2YgdGhlIGxlbmd0aCBvZiBkb2N1bWVudHMgYWRkZWQgdG8gdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtsdW5yLnRva2VuaXplcn0gdG9rZW5pemVyIC0gRnVuY3Rpb24gZm9yIHNwbGl0dGluZyBzdHJpbmdzIGludG8gdG9rZW5zIGZvciBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gcGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgcGVyZm9ybXMgdGV4dCBwcm9jZXNzaW5nIG9uIHRva2VucyBiZWZvcmUgaW5kZXhpbmcuXG4gKiBAcHJvcGVydHkge2x1bnIuUGlwZWxpbmV9IHNlYXJjaFBpcGVsaW5lIC0gQSBwaXBlbGluZSBmb3IgcHJvY2Vzc2luZyBzZWFyY2ggdGVybXMgYmVmb3JlIHF1ZXJ5aW5nIHRoZSBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gS2VlcHMgdHJhY2sgb2YgdGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMgaW5kZXhlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfYiAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgZmllbGQgbGVuZ3RoIG5vcm1hbGl6YXRpb24sIHNldHRpbmcgdGhpcyB0byAwIGRpc2FibGVkIG5vcm1hbGl6YXRpb24sIDEgZnVsbHkgbm9ybWFsaXplcyBmaWVsZCBsZW5ndGhzLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAwLjc1LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9rMSAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgaG93IHF1aWNrbHkgYW4gaW5jcmVhc2UgaW4gdGVybSBmcmVxdWVuY3kgcmVzdWx0cyBpbiB0ZXJtIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGVybUluZGV4IC0gQSBjb3VudGVyIGluY3JlbWVudGVkIGZvciBlYWNoIHVuaXF1ZSB0ZXJtLCB1c2VkIHRvIGlkZW50aWZ5IGEgdGVybXMgcG9zaXRpb24gaW4gdGhlIHZlY3RvciBzcGFjZS5cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IG1ldGFkYXRhV2hpdGVsaXN0IC0gQSBsaXN0IG9mIG1ldGFkYXRhIGtleXMgdGhhdCBoYXZlIGJlZW4gd2hpdGVsaXN0ZWQgZm9yIGVudHJ5IGluIHRoZSBpbmRleC5cbiAqL1xubHVuci5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9yZWYgPSBcImlkXCJcbiAgdGhpcy5fZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLl9kb2N1bWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyA9IHt9XG4gIHRoaXMuZmllbGRMZW5ndGhzID0ge31cbiAgdGhpcy50b2tlbml6ZXIgPSBsdW5yLnRva2VuaXplclxuICB0aGlzLnBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5zZWFyY2hQaXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG4gIHRoaXMuZG9jdW1lbnRDb3VudCA9IDBcbiAgdGhpcy5fYiA9IDAuNzVcbiAgdGhpcy5fazEgPSAxLjJcbiAgdGhpcy50ZXJtSW5kZXggPSAwXG4gIHRoaXMubWV0YWRhdGFXaGl0ZWxpc3QgPSBbXVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGRvY3VtZW50IGZpZWxkIHVzZWQgYXMgdGhlIGRvY3VtZW50IHJlZmVyZW5jZS4gRXZlcnkgZG9jdW1lbnQgbXVzdCBoYXZlIHRoaXMgZmllbGQuXG4gKiBUaGUgdHlwZSBvZiB0aGlzIGZpZWxkIGluIHRoZSBkb2N1bWVudCBzaG91bGQgYmUgYSBzdHJpbmcsIGlmIGl0IGlzIG5vdCBhIHN0cmluZyBpdCB3aWxsIGJlXG4gKiBjb2VyY2VkIGludG8gYSBzdHJpbmcgYnkgY2FsbGluZyB0b1N0cmluZy5cbiAqXG4gKiBUaGUgZGVmYXVsdCByZWYgaXMgJ2lkJy5cbiAqXG4gKiBUaGUgcmVmIHNob3VsZCBfbm90XyBiZSBjaGFuZ2VkIGR1cmluZyBpbmRleGluZywgaXQgc2hvdWxkIGJlIHNldCBiZWZvcmUgYW55IGRvY3VtZW50cyBhcmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC4gQ2hhbmdpbmcgaXQgZHVyaW5nIGluZGV4aW5nIGNhbiBsZWFkIHRvIGluY29uc2lzdGVudCByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSBUaGUgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIGZpZWxkIGluIHRoZSBkb2N1bWVudC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHRoaXMuX3JlZiA9IHJlZlxufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGV4dHJhY3QgYSBmaWVsZCBmcm9tIGEgZG9jdW1lbnQuXG4gKlxuICogTHVuciBleHBlY3RzIGEgZmllbGQgdG8gYmUgYXQgdGhlIHRvcCBsZXZlbCBvZiBhIGRvY3VtZW50LCBpZiBob3dldmVyIHRoZSBmaWVsZFxuICogaXMgZGVlcGx5IG5lc3RlZCB3aXRoaW4gYSBkb2N1bWVudCBhbiBleHRyYWN0b3IgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZXh0cmFjdFxuICogdGhlIHJpZ2h0IGZpZWxkIGZvciBpbmRleGluZy5cbiAqXG4gKiBAY2FsbGJhY2sgZmllbGRFeHRyYWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgYmVpbmcgYWRkZWQgdG8gdGhlIGluZGV4LlxuICogQHJldHVybnMgez8oc3RyaW5nfG9iamVjdHxvYmplY3RbXSl9IG9iaiAtIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluZGV4ZWQgZm9yIHRoaXMgZmllbGQuXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeHRyYWN0aW5nIGEgbmVzdGVkIGZpZWxkPC9jYXB0aW9uPlxuICogZnVuY3Rpb24gKGRvYykgeyByZXR1cm4gZG9jLm5lc3RlZC5maWVsZCB9XG4gKi9cblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgdG8gdGhlIGxpc3Qgb2YgZG9jdW1lbnQgZmllbGRzIHRoYXQgd2lsbCBiZSBpbmRleGVkLiBFdmVyeSBkb2N1bWVudCBiZWluZ1xuICogaW5kZXhlZCBzaG91bGQgaGF2ZSB0aGlzIGZpZWxkLiBOdWxsIHZhbHVlcyBmb3IgdGhpcyBmaWVsZCBpbiBpbmRleGVkIGRvY3VtZW50cyB3aWxsXG4gKiBub3QgY2F1c2UgZXJyb3JzIGJ1dCB3aWxsIGxpbWl0IHRoZSBjaGFuY2Ugb2YgdGhhdCBkb2N1bWVudCBiZWluZyByZXRyaWV2ZWQgYnkgc2VhcmNoZXMuXG4gKlxuICogQWxsIGZpZWxkcyBzaG91bGQgYmUgYWRkZWQgYmVmb3JlIGFkZGluZyBkb2N1bWVudHMgdG8gdGhlIGluZGV4LiBBZGRpbmcgZmllbGRzIGFmdGVyXG4gKiBhIGRvY3VtZW50IGhhcyBiZWVuIGluZGV4ZWQgd2lsbCBoYXZlIG5vIGVmZmVjdCBvbiBhbHJlYWR5IGluZGV4ZWQgZG9jdW1lbnRzLlxuICpcbiAqIEZpZWxkcyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBUaGlzIGFsbG93cyB0ZXJtcyB3aXRoaW4gdGhhdCBmaWVsZCB0byBoYXZlIG1vcmVcbiAqIGltcG9ydGFuY2Ugd2hlbiByYW5raW5nIHNlYXJjaCByZXN1bHRzLiBVc2UgYSBmaWVsZCBib29zdCB0byBzcGVjaWZ5IHRoYXQgbWF0Y2hlcyB3aXRoaW5cbiAqIG9uZSBmaWVsZCBhcmUgbW9yZSBpbXBvcnRhbnQgdGhhbiBvdGhlciBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9mIGEgZmllbGQgdG8gaW5kZXggaW4gYWxsIGRvY3VtZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBmaWVsZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtmaWVsZEV4dHJhY3Rvcn0gW2F0dHJpYnV0ZXMuZXh0cmFjdG9yXSAtIEZ1bmN0aW9uIHRvIGV4dHJhY3QgYSBmaWVsZCBmcm9tIGEgZG9jdW1lbnQuXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmaWVsZE5hbWUgY2Fubm90IGNvbnRhaW4gdW5zdXBwb3J0ZWQgY2hhcmFjdGVycyAnLydcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uIChmaWVsZE5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKC9cXC8vLnRlc3QoZmllbGROYW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yIChcIkZpZWxkICdcIiArIGZpZWxkTmFtZSArIFwiJyBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlciAnLydcIilcbiAgfVxuXG4gIHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdID0gYXR0cmlidXRlcyB8fCB7fVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRvIHR1bmUgdGhlIGFtb3VudCBvZiBmaWVsZCBsZW5ndGggbm9ybWFsaXNhdGlvbiB0aGF0IGlzIGFwcGxpZWQgd2hlblxuICogY2FsY3VsYXRpbmcgcmVsZXZhbmNlIHNjb3Jlcy4gQSB2YWx1ZSBvZiAwIHdpbGwgY29tcGxldGVseSBkaXNhYmxlIGFueSBub3JtYWxpc2F0aW9uXG4gKiBhbmQgYSB2YWx1ZSBvZiAxIHdpbGwgZnVsbHkgbm9ybWFsaXNlIGZpZWxkIGxlbmd0aHMuIFRoZSBkZWZhdWx0IGlzIDAuNzUuIFZhbHVlcyBvZiBiXG4gKiB3aWxsIGJlIGNsYW1wZWQgdG8gdGhlIHJhbmdlIDAgLSAxLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGlzIHR1bmluZyBwYXJhbWV0ZXIuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYiA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA8IDApIHtcbiAgICB0aGlzLl9iID0gMFxuICB9IGVsc2UgaWYgKG51bWJlciA+IDEpIHtcbiAgICB0aGlzLl9iID0gMVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2IgPSBudW1iZXJcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRoYXQgY29udHJvbHMgdGhlIHNwZWVkIGF0IHdoaWNoIGEgcmlzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm1cbiAqIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuIFNldHRpbmcgdGhpcyB0byBhIGhpZ2hlciB2YWx1ZSB3aWxsIGdpdmVcbiAqIHNsb3dlciBzYXR1cmF0aW9uIGxldmVscywgYSBsb3dlciB2YWx1ZSB3aWxsIHJlc3VsdCBpbiBxdWlja2VyIHNhdHVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5rMSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgdGhpcy5fazEgPSBudW1iZXJcbn1cblxuLyoqXG4gKiBBZGRzIGEgZG9jdW1lbnQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEJlZm9yZSBhZGRpbmcgZmllbGRzIHRvIHRoZSBpbmRleCB0aGUgaW5kZXggc2hvdWxkIGhhdmUgYmVlbiBmdWxseSBzZXR1cCwgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIHJlZiBhbmQgYWxsIGZpZWxkcyB0byBpbmRleCBhbHJlYWR5IGhhdmluZyBiZWVuIHNwZWNpZmllZC5cbiAqXG4gKiBUaGUgZG9jdW1lbnQgbXVzdCBoYXZlIGEgZmllbGQgbmFtZSBhcyBzcGVjaWZpZWQgYnkgdGhlIHJlZiAoYnkgZGVmYXVsdCB0aGlzIGlzICdpZCcpIGFuZFxuICogaXQgc2hvdWxkIGhhdmUgYWxsIGZpZWxkcyBkZWZpbmVkIGZvciBpbmRleGluZywgdGhvdWdoIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdFxuICogY2F1c2UgZXJyb3JzLlxuICpcbiAqIEVudGlyZSBkb2N1bWVudHMgY2FuIGJlIGJvb3N0ZWQgYXQgYnVpbGQgdGltZS4gQXBwbHlpbmcgYSBib29zdCB0byBhIGRvY3VtZW50IGluZGljYXRlcyB0aGF0XG4gKiB0aGlzIGRvY3VtZW50IHNob3VsZCByYW5rIGhpZ2hlciBpbiBzZWFyY2ggcmVzdWx0cyB0aGFuIG90aGVyIGRvY3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZG9jIC0gVGhlIGRvY3VtZW50IHRvIGFkZCB0byB0aGUgaW5kZXguXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAtIE9wdGlvbmFsIGF0dHJpYnV0ZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZG9jdW1lbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2F0dHJpYnV0ZXMuYm9vc3Q9MV0gLSBCb29zdCBhcHBsaWVkIHRvIGFsbCB0ZXJtcyB3aXRoaW4gdGhpcyBkb2N1bWVudC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZG9jLCBhdHRyaWJ1dGVzKSB7XG4gIHZhciBkb2NSZWYgPSBkb2NbdGhpcy5fcmVmXSxcbiAgICAgIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcylcblxuICB0aGlzLl9kb2N1bWVudHNbZG9jUmVmXSA9IGF0dHJpYnV0ZXMgfHwge31cbiAgdGhpcy5kb2N1bWVudENvdW50ICs9IDFcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZHNbaV0sXG4gICAgICAgIGV4dHJhY3RvciA9IHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdLmV4dHJhY3RvcixcbiAgICAgICAgZmllbGQgPSBleHRyYWN0b3IgPyBleHRyYWN0b3IoZG9jKSA6IGRvY1tmaWVsZE5hbWVdLFxuICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VuaXplcihmaWVsZCwge1xuICAgICAgICAgIGZpZWxkczogW2ZpZWxkTmFtZV1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW4odG9rZW5zKSxcbiAgICAgICAgZmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZE5hbWUpLFxuICAgICAgICBmaWVsZFRlcm1zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gICAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llc1tmaWVsZFJlZl0gPSBmaWVsZFRlcm1zXG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdID0gMFxuXG4gICAgLy8gc3RvcmUgdGhlIGxlbmd0aCBvZiB0aGlzIGZpZWxkIGZvciB0aGlzIGRvY3VtZW50XG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdICs9IHRlcm1zLmxlbmd0aFxuXG4gICAgLy8gY2FsY3VsYXRlIHRlcm0gZnJlcXVlbmNpZXMgZm9yIHRoaXMgZmllbGRcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdXG5cbiAgICAgIGlmIChmaWVsZFRlcm1zW3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICBmaWVsZFRlcm1zW3Rlcm1dID0gMFxuICAgICAgfVxuXG4gICAgICBmaWVsZFRlcm1zW3Rlcm1dICs9IDFcblxuICAgICAgLy8gYWRkIHRvIGludmVydGVkIGluZGV4XG4gICAgICAvLyBjcmVhdGUgYW4gaW5pdGlhbCBwb3N0aW5nIGlmIG9uZSBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgcG9zdGluZyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgcG9zdGluZ1tcIl9pbmRleFwiXSA9IHRoaXMudGVybUluZGV4XG4gICAgICAgIHRoaXMudGVybUluZGV4ICs9IDFcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHBvc3RpbmdbZmllbGRzW2tdXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9IHBvc3RpbmdcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuIGVudHJ5IGZvciB0aGlzIHRlcm0vZmllbGROYW1lL2RvY1JlZiB0byB0aGUgaW52ZXJ0ZWRJbmRleFxuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIGFsbCB3aGl0ZWxpc3RlZCBtZXRhZGF0YSBhYm91dCB0aGlzIHRva2VuIGluIHRoZVxuICAgICAgLy8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdC5sZW5ndGg7IGwrKykge1xuICAgICAgICB2YXIgbWV0YWRhdGFLZXkgPSB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0W2xdLFxuICAgICAgICAgICAgbWV0YWRhdGEgPSB0ZXJtLm1ldGFkYXRhW21ldGFkYXRhS2V5XVxuXG4gICAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XS5wdXNoKG1ldGFkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYXZlcmFnZSBkb2N1bWVudCBsZW5ndGggZm9yIHRoaXMgaW5kZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRMZW5ndGhzKSxcbiAgICAgIG51bWJlck9mRmllbGRzID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIGFjY3VtdWxhdG9yID0ge30sXG4gICAgICBkb2N1bWVudHNXaXRoRmllbGQgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZGaWVsZHM7IGkrKykge1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhmaWVsZFJlZnNbaV0pLFxuICAgICAgICBmaWVsZCA9IGZpZWxkUmVmLmZpZWxkTmFtZVxuXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSB8fCAoZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSA9IDApXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSArPSAxXG5cbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gfHwgKGFjY3VtdWxhdG9yW2ZpZWxkXSA9IDApXG4gICAgYWNjdW11bGF0b3JbZmllbGRdICs9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXVxuICB9XG5cbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZHNbaV1cbiAgICBhY2N1bXVsYXRvcltmaWVsZE5hbWVdID0gYWNjdW11bGF0b3JbZmllbGROYW1lXSAvIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZE5hbWVdXG4gIH1cblxuICB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aCA9IGFjY3VtdWxhdG9yXG59XG5cbi8qKlxuICogQnVpbGRzIGEgdmVjdG9yIHNwYWNlIG1vZGVsIG9mIGV2ZXJ5IGRvY3VtZW50IHVzaW5nIGx1bnIuVmVjdG9yXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVGaWVsZFZlY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgZmllbGRSZWZzTGVuZ3RoID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIHRlcm1JZGZDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkUmVmc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkTmFtZSA9IGZpZWxkUmVmLmZpZWxkTmFtZSxcbiAgICAgICAgZmllbGRMZW5ndGggPSB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0sXG4gICAgICAgIGZpZWxkVmVjdG9yID0gbmV3IGx1bnIuVmVjdG9yLFxuICAgICAgICB0ZXJtRnJlcXVlbmNpZXMgPSB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSxcbiAgICAgICAgdGVybXMgPSBPYmplY3Qua2V5cyh0ZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgICB0ZXJtc0xlbmd0aCA9IHRlcm1zLmxlbmd0aFxuXG5cbiAgICB2YXIgZmllbGRCb29zdCA9IHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdLmJvb3N0IHx8IDEsXG4gICAgICAgIGRvY0Jvb3N0ID0gdGhpcy5fZG9jdW1lbnRzW2ZpZWxkUmVmLmRvY1JlZl0uYm9vc3QgfHwgMVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZXJtc0xlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdLFxuICAgICAgICAgIHRmID0gdGVybUZyZXF1ZW5jaWVzW3Rlcm1dLFxuICAgICAgICAgIHRlcm1JbmRleCA9IHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXS5faW5kZXgsXG4gICAgICAgICAgaWRmLCBzY29yZSwgc2NvcmVXaXRoUHJlY2lzaW9uXG5cbiAgICAgIGlmICh0ZXJtSWRmQ2FjaGVbdGVybV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZGYgPSBsdW5yLmlkZih0aGlzLmludmVydGVkSW5kZXhbdGVybV0sIHRoaXMuZG9jdW1lbnRDb3VudClcbiAgICAgICAgdGVybUlkZkNhY2hlW3Rlcm1dID0gaWRmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZGYgPSB0ZXJtSWRmQ2FjaGVbdGVybV1cbiAgICAgIH1cblxuICAgICAgc2NvcmUgPSBpZGYgKiAoKHRoaXMuX2sxICsgMSkgKiB0ZikgLyAodGhpcy5fazEgKiAoMSAtIHRoaXMuX2IgKyB0aGlzLl9iICogKGZpZWxkTGVuZ3RoIC8gdGhpcy5hdmVyYWdlRmllbGRMZW5ndGhbZmllbGROYW1lXSkpICsgdGYpXG4gICAgICBzY29yZSAqPSBmaWVsZEJvb3N0XG4gICAgICBzY29yZSAqPSBkb2NCb29zdFxuICAgICAgc2NvcmVXaXRoUHJlY2lzaW9uID0gTWF0aC5yb3VuZChzY29yZSAqIDEwMDApIC8gMTAwMFxuICAgICAgLy8gQ29udmVydHMgMS4yMzQ1Njc4OSB0byAxLjIzNC5cbiAgICAgIC8vIFJlZHVjaW5nIHRoZSBwcmVjaXNpb24gc28gdGhhdCB0aGUgdmVjdG9ycyB0YWtlIHVwIGxlc3NcbiAgICAgIC8vIHNwYWNlIHdoZW4gc2VyaWFsaXNlZC4gRG9pbmcgaXQgbm93IHNvIHRoYXQgdGhleSBiZWhhdmVcbiAgICAgIC8vIHRoZSBzYW1lIGJlZm9yZSBhbmQgYWZ0ZXIgc2VyaWFsaXNhdGlvbi4gQWxzbywgdGhpcyBpc1xuICAgICAgLy8gdGhlIGZhc3Rlc3QgYXBwcm9hY2ggdG8gcmVkdWNpbmcgYSBudW1iZXIncyBwcmVjaXNpb24gaW5cbiAgICAgIC8vIEphdmFTY3JpcHQuXG5cbiAgICAgIGZpZWxkVmVjdG9yLmluc2VydCh0ZXJtSW5kZXgsIHNjb3JlV2l0aFByZWNpc2lvbilcbiAgICB9XG5cbiAgICBmaWVsZFZlY3RvcnNbZmllbGRSZWZdID0gZmllbGRWZWN0b3JcbiAgfVxuXG4gIHRoaXMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBvZiBhbGwgdG9rZW5zIGluIHRoZSBpbmRleCB1c2luZyBsdW5yLlRva2VuU2V0XG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVUb2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy50b2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUFycmF5KFxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleCkuc29ydCgpXG4gIClcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGluZGV4LCBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBsdW5yLkluZGV4LlxuICpcbiAqIFRoaXMgY29tcGxldGVzIHRoZSBpbmRleGluZyBwcm9jZXNzIGFuZCBzaG91bGQgb25seSBiZSBjYWxsZWRcbiAqIG9uY2UgYWxsIGRvY3VtZW50cyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMoKVxuICB0aGlzLmNyZWF0ZUZpZWxkVmVjdG9ycygpXG4gIHRoaXMuY3JlYXRlVG9rZW5TZXQoKVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleCh7XG4gICAgaW52ZXJ0ZWRJbmRleDogdGhpcy5pbnZlcnRlZEluZGV4LFxuICAgIGZpZWxkVmVjdG9yczogdGhpcy5maWVsZFZlY3RvcnMsXG4gICAgdG9rZW5TZXQ6IHRoaXMudG9rZW5TZXQsXG4gICAgZmllbGRzOiBPYmplY3Qua2V5cyh0aGlzLl9maWVsZHMpLFxuICAgIHBpcGVsaW5lOiB0aGlzLnNlYXJjaFBpcGVsaW5lXG4gIH0pXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBsdWdpbiB0byB0aGUgaW5kZXggYnVpbGRlci5cbiAqXG4gKiBBIHBsdWdpbiBpcyBhIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKiBQbHVnaW5zIGNhbiBiZSB1c2VkIHRvIGN1c3RvbWlzZSBvciBleHRlbmQgdGhlIGJlaGF2aW91ciBvZiB0aGUgaW5kZXhcbiAqIGluIHNvbWUgd2F5LiBBIHBsdWdpbiBpcyBqdXN0IGEgZnVuY3Rpb24sIHRoYXQgZW5jYXBzdWxhdGVkIHRoZSBjdXN0b21cbiAqIGJlaGF2aW91ciB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gYnVpbGRpbmcgdGhlIGluZGV4LlxuICpcbiAqIFRoZSBwbHVnaW4gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgYXJndW1lbnQsIGFkZGl0aW9uYWxcbiAqIGFyZ3VtZW50cyBjYW4gYWxzbyBiZSBwYXNzZWQgd2hlbiBjYWxsaW5nIHVzZS4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpbiBUaGUgcGx1Z2luIHRvIGFwcGx5LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgYXJncy51bnNoaWZ0KHRoaXMpXG4gIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG59XG4vKipcbiAqIENvbnRhaW5zIGFuZCBjb2xsZWN0cyBtZXRhZGF0YSBhYm91dCBhIG1hdGNoaW5nIGRvY3VtZW50LlxuICogQSBzaW5nbGUgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgaXMgcmV0dXJuZWQgYXMgcGFydCBvZiBldmVyeVxuICogbHVuci5JbmRleH5SZXN1bHQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICogQHByb3BlcnR5IHtvYmplY3R9IG1ldGFkYXRhIC0gQSBjbG9uZWQgY29sbGVjdGlvbiBvZiBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YSA9IGZ1bmN0aW9uICh0ZXJtLCBmaWVsZCwgbWV0YWRhdGEpIHtcbiAgdmFyIGNsb25lZE1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhIHx8IHt9KVxuXG4gIC8vIENsb25pbmcgdGhlIG1ldGFkYXRhIHRvIHByZXZlbnQgdGhlIG9yaWdpbmFsXG4gIC8vIGJlaW5nIG11dGF0ZWQgZHVyaW5nIG1hdGNoIGRhdGEgY29tYmluYXRpb24uXG4gIC8vIE1ldGFkYXRhIGlzIGtlcHQgaW4gYW4gYXJyYXkgd2l0aGluIHRoZSBpbnZlcnRlZFxuICAvLyBpbmRleCBzbyBjbG9uaW5nIHRoZSBkYXRhIGNhbiBiZSBkb25lIHdpdGhcbiAgLy8gQXJyYXkjc2xpY2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhZGF0YUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbWV0YWRhdGFLZXlzW2ldXG4gICAgY2xvbmVkTWV0YWRhdGFba2V5XSA9IG1ldGFkYXRhW2tleV0uc2xpY2UoKVxuICB9XG5cbiAgdGhpcy5tZXRhZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBpZiAodGVybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IGNsb25lZE1ldGFkYXRhXG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aWxsIGJlIGNyZWF0ZWQgZm9yIGV2ZXJ5IHRlcm0gdGhhdCBtYXRjaGVzIGFcbiAqIGRvY3VtZW50LiBIb3dldmVyIG9ubHkgb25lIGluc3RhbmNlIGlzIHJlcXVpcmVkIGluIGEgbHVuci5JbmRleH5SZXN1bHQuIFRoaXNcbiAqIG1ldGhvZCBjb21iaW5lcyBtZXRhZGF0YSBmcm9tIGFub3RoZXIgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgd2l0aCB0aGlzXG4gKiBvYmplY3RzIG1ldGFkYXRhLlxuICpcbiAqIEBwYXJhbSB7bHVuci5NYXRjaERhdGF9IG90aGVyTWF0Y2hEYXRhIC0gQW5vdGhlciBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhIHRvIG1lcmdlIHdpdGggdGhpcyBvbmUuXG4gKiBAc2VlIHtAbGluayBsdW5yLkluZGV4flJlc3VsdH1cbiAqL1xubHVuci5NYXRjaERhdGEucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAob3RoZXJNYXRjaERhdGEpIHtcbiAgdmFyIHRlcm1zID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0ZXJtID0gdGVybXNbaV0sXG4gICAgICAgIGZpZWxkcyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dKVxuXG4gICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmllbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbal0sXG4gICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSlcblxuICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdXG5cbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgbWV0YWRhdGEgZm9yIGEgdGVybS9maWVsZCBwYWlyIHRvIHRoaXMgaW5zdGFuY2Ugb2YgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICBpZiAoISh0ZXJtIGluIHRoaXMubWV0YWRhdGEpKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IG1ldGFkYXRhXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIShmaWVsZCBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dKSkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBtZXRhZGF0YUtleXMgPSBPYmplY3Qua2V5cyhtZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cblxuICAgIGlmIChrZXkgaW4gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0pIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldLmNvbmNhdChtZXRhZGF0YVtrZXldKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gbWV0YWRhdGFba2V5XVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBIGx1bnIuUXVlcnkgcHJvdmlkZXMgYSBwcm9ncmFtbWF0aWMgd2F5IG9mIGRlZmluaW5nIHF1ZXJpZXMgdG8gYmUgcGVyZm9ybWVkXG4gKiBhZ2FpbnN0IGEge0BsaW5rIGx1bnIuSW5kZXh9LlxuICpcbiAqIFByZWZlciBjb25zdHJ1Y3RpbmcgYSBsdW5yLlF1ZXJ5IHVzaW5nIHRoZSB7QGxpbmsgbHVuci5JbmRleCNxdWVyeX0gbWV0aG9kXG4gKiBzbyB0aGUgcXVlcnkgb2JqZWN0IGlzIHByZS1pbml0aWFsaXplZCB3aXRoIHRoZSByaWdodCBpbmRleCBmaWVsZHMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJvcGVydHkge2x1bnIuUXVlcnl+Q2xhdXNlW119IGNsYXVzZXMgLSBBbiBhcnJheSBvZiBxdWVyeSBjbGF1c2VzLlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gYWxsRmllbGRzIC0gQW4gYXJyYXkgb2YgYWxsIGF2YWlsYWJsZSBmaWVsZHMgaW4gYSBsdW5yLkluZGV4LlxuICovXG5sdW5yLlF1ZXJ5ID0gZnVuY3Rpb24gKGFsbEZpZWxkcykge1xuICB0aGlzLmNsYXVzZXMgPSBbXVxuICB0aGlzLmFsbEZpZWxkcyA9IGFsbEZpZWxkc1xufVxuXG4vKipcbiAqIENvbnN0YW50cyBmb3IgaW5kaWNhdGluZyB3aGF0IGtpbmQgb2YgYXV0b21hdGljIHdpbGRjYXJkIGluc2VydGlvbiB3aWxsIGJlIHVzZWQgd2hlbiBjb25zdHJ1Y3RpbmcgYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogVGhpcyBhbGxvd3Mgd2lsZGNhcmRzIHRvIGJlIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHRlcm0gd2l0aG91dCBoYXZpbmcgdG8gbWFudWFsbHkgZG8gYW55IHN0cmluZ1xuICogY29uY2F0ZW5hdGlvbi5cbiAqXG4gKiBUaGUgd2lsZGNhcmQgY29uc3RhbnRzIGNhbiBiZSBiaXR3aXNlIGNvbWJpbmVkIHRvIHNlbGVjdCBib3RoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBkZWZhdWx0XG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTk9ORSAtIFRoZSB0ZXJtIHdpbGwgaGF2ZSBubyB3aWxkY2FyZHMgaW5zZXJ0ZWQsIHRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3VyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTEVBRElORyAtIFByZXBlbmQgdGhlIHRlcm0gd2l0aCBhIHdpbGRjYXJkLCB1bmxlc3MgYSBsZWFkaW5nIHdpbGRjYXJkIGFscmVhZHkgZXhpc3RzXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuVFJBSUxJTkcgLSBBcHBlbmQgYSB3aWxkY2FyZCB0byB0aGUgdGVybSwgdW5sZXNzIGEgdHJhaWxpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7XG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcgfCBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICovXG5cbmx1bnIuUXVlcnkud2lsZGNhcmQgPSBuZXcgU3RyaW5nIChcIipcIilcbmx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORSA9IDBcbmx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyA9IDFcbmx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgPSAyXG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBwcmVzZW5jZSBhIHRlcm0gbXVzdCBoYXZlIGluIG1hdGNoaW5nIGRvY3VtZW50cy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjdGVybVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIHJlcXVpcmVkIHByZXNlbmNlPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywgeyBwcmVzZW5jZTogbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCB9KVxuICovXG5sdW5yLlF1ZXJ5LnByZXNlbmNlID0ge1xuICAvKipcbiAgICogVGVybSdzIHByZXNlbmNlIGluIGEgZG9jdW1lbnQgaXMgb3B0aW9uYWwsIHRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBPUFRJT05BTDogMSxcblxuICAvKipcbiAgICogVGVybSdzIHByZXNlbmNlIGluIGEgZG9jdW1lbnQgaXMgcmVxdWlyZWQsIGRvY3VtZW50cyB0aGF0IGRvIG5vdCBjb250YWluXG4gICAqIHRoaXMgdGVybSB3aWxsIG5vdCBiZSByZXR1cm5lZC5cbiAgICovXG4gIFJFUVVJUkVEOiAyLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBwcm9oaWJpdGVkLCBkb2N1bWVudHMgdGhhdCBkbyBjb250YWluXG4gICAqIHRoaXMgdGVybSB3aWxsIG5vdCBiZSByZXR1cm5lZC5cbiAgICovXG4gIFBST0hJQklURUQ6IDNcbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBjbGF1c2UgaW4gYSB7QGxpbmsgbHVuci5RdWVyeX0gY29udGFpbnMgYSB0ZXJtIGFuZCBkZXRhaWxzIG9uIGhvdyB0b1xuICogbWF0Y2ggdGhhdCB0ZXJtIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGZpZWxkcyAtIFRoZSBmaWVsZHMgaW4gYW4gaW5kZXggdGhpcyBjbGF1c2Ugc2hvdWxkIGJlIG1hdGNoZWQgYWdhaW5zdC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYm9vc3Q9MV0gLSBBbnkgYm9vc3QgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB3aGVuIG1hdGNoaW5nIHRoaXMgY2xhdXNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlZGl0RGlzdGFuY2VdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSBmdXp6eSBtYXRjaGluZyBhcHBsaWVkLCBhbmQgaG93IGZ1enp5IHRoZSBtYXRjaCBzaG91bGQgYmUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt1c2VQaXBlbGluZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWxkY2FyZD1sdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkVdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSB3aWxkY2FyZHMgYXBwZW5kZWQgb3IgcHJlcGVuZGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwcmVzZW5jZT1sdW5yLlF1ZXJ5LnByZXNlbmNlLk9QVElPTkFMXSAtIFRoZSB0ZXJtcyBwcmVzZW5jZSBpbiBhbnkgbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICovXG5cbi8qKlxuICogQWRkcyBhIHtAbGluayBsdW5yLlF1ZXJ5fkNsYXVzZX0gdG8gdGhpcyBxdWVyeS5cbiAqXG4gKiBVbmxlc3MgdGhlIGNsYXVzZSBjb250YWlucyB0aGUgZmllbGRzIHRvIGJlIG1hdGNoZWQgYWxsIGZpZWxkcyB3aWxsIGJlIG1hdGNoZWQuIEluIGFkZGl0aW9uXG4gKiBhIGRlZmF1bHQgYm9vc3Qgb2YgMSBpcyBhcHBsaWVkIHRvIHRoZSBjbGF1c2UuXG4gKlxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fkNsYXVzZX0gY2xhdXNlIC0gVGhlIGNsYXVzZSB0byBhZGQgdG8gdGhpcyBxdWVyeS5cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEByZXR1cm5zIHtsdW5yLlF1ZXJ5fVxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS5jbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICghKCdmaWVsZHMnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UuZmllbGRzID0gdGhpcy5hbGxGaWVsZHNcbiAgfVxuXG4gIGlmICghKCdib29zdCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5ib29zdCA9IDFcbiAgfVxuXG4gIGlmICghKCd1c2VQaXBlbGluZScgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS51c2VQaXBlbGluZSA9IHRydWVcbiAgfVxuXG4gIGlmICghKCd3aWxkY2FyZCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS53aWxkY2FyZCA9IGx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcpICYmIChjbGF1c2UudGVybS5jaGFyQXQoMCkgIT0gbHVuci5RdWVyeS53aWxkY2FyZCkpIHtcbiAgICBjbGF1c2UudGVybSA9IFwiKlwiICsgY2xhdXNlLnRlcm1cbiAgfVxuXG4gIGlmICgoY2xhdXNlLndpbGRjYXJkICYgbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORykgJiYgKGNsYXVzZS50ZXJtLnNsaWNlKC0xKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCJcIiArIGNsYXVzZS50ZXJtICsgXCIqXCJcbiAgfVxuXG4gIGlmICghKCdwcmVzZW5jZScgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxcbiAgfVxuXG4gIHRoaXMuY2xhdXNlcy5wdXNoKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEEgbmVnYXRlZCBxdWVyeSBpcyBvbmUgaW4gd2hpY2ggZXZlcnkgY2xhdXNlIGhhcyBhIHByZXNlbmNlIG9mXG4gKiBwcm9oaWJpdGVkLiBUaGVzZSBxdWVyaWVzIHJlcXVpcmUgc29tZSBzcGVjaWFsIHByb2Nlc3NpbmcgdG8gcmV0dXJuXG4gKiB0aGUgZXhwZWN0ZWQgcmVzdWx0cy5cbiAqXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmlzTmVnYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsYXVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jbGF1c2VzW2ldLnByZXNlbmNlICE9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBBZGRzIGEgdGVybSB0byB0aGUgY3VycmVudCBxdWVyeSwgdW5kZXIgdGhlIGNvdmVycyB0aGlzIHdpbGwgY3JlYXRlIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfVxuICogdG8gdGhlIGxpc3Qgb2YgY2xhdXNlcyB0aGF0IG1ha2UgdXAgdGhpcyBxdWVyeS5cbiAqXG4gKiBUaGUgdGVybSBpcyB1c2VkIGFzIGlzLCBpLmUuIG5vIHRva2VuaXphdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBieSB0aGlzIG1ldGhvZC4gSW5zdGVhZCBjb252ZXJzaW9uXG4gKiB0byBhIHRva2VuIG9yIHRva2VuLWxpa2Ugc3RyaW5nIHNob3VsZCBiZSBkb25lIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLlxuICpcbiAqIFRoZSB0ZXJtIHdpbGwgYmUgY29udmVydGVkIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYC4gTXVsdGlwbGUgdGVybXMgY2FuIGJlIHBhc3NlZCBhcyBhblxuICogYXJyYXksIGVhY2ggdGVybSBpbiB0aGUgYXJyYXkgd2lsbCBzaGFyZSB0aGUgc2FtZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fG9iamVjdFtdfSB0ZXJtIC0gVGhlIHRlcm0ocykgdG8gYWRkIHRvIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIGFkZCB0byB0aGUgcXVlcnkgY2xhdXNlLlxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5PC9jYXB0aW9uPlxuICogcXVlcnkudGVybShcImZvb1wiKVxuICogQGV4YW1wbGUgPGNhcHRpb24+YWRkaW5nIGEgc2luZ2xlIHRlcm0gdG8gYSBxdWVyeSBhbmQgc3BlY2lmeWluZyBzZWFyY2ggZmllbGRzLCB0ZXJtIGJvb3N0IGFuZCBhdXRvbWF0aWMgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIsIHtcbiAqICAgZmllbGRzOiBbXCJ0aXRsZVwiXSxcbiAqICAgYm9vc3Q6IDEwLFxuICogICB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElOR1xuICogfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnVzaW5nIGx1bnIudG9rZW5pemVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gdG9rZW5zIGJlZm9yZSB1c2luZyB0aGVtIGFzIHRlcm1zPC9jYXB0aW9uPlxuICogcXVlcnkudGVybShsdW5yLnRva2VuaXplcihcImZvbyBiYXJcIikpXG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLnRlcm0gPSBmdW5jdGlvbiAodGVybSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0ZXJtKSkge1xuICAgIHRlcm0uZm9yRWFjaChmdW5jdGlvbiAodCkgeyB0aGlzLnRlcm0odCwgbHVuci51dGlscy5jbG9uZShvcHRpb25zKSkgfSwgdGhpcylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdmFyIGNsYXVzZSA9IG9wdGlvbnMgfHwge31cbiAgY2xhdXNlLnRlcm0gPSB0ZXJtLnRvU3RyaW5nKClcblxuICB0aGlzLmNsYXVzZShjbGF1c2UpXG5cbiAgcmV0dXJuIHRoaXNcbn1cbmx1bnIuUXVlcnlQYXJzZUVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHN0YXJ0LCBlbmQpIHtcbiAgdGhpcy5uYW1lID0gXCJRdWVyeVBhcnNlRXJyb3JcIlxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gIHRoaXMuc3RhcnQgPSBzdGFydFxuICB0aGlzLmVuZCA9IGVuZFxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3Jcbmx1bnIuUXVlcnlMZXhlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdGhpcy5sZXhlbWVzID0gW11cbiAgdGhpcy5zdHIgPSBzdHJcbiAgdGhpcy5sZW5ndGggPSBzdHIubGVuZ3RoXG4gIHRoaXMucG9zID0gMFxuICB0aGlzLnN0YXJ0ID0gMFxuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMgPSBbXVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeUxleGVyLmxleFRleHRcblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5zbGljZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN1YlNsaWNlcyA9IFtdLFxuICAgICAgc2xpY2VTdGFydCA9IHRoaXMuc3RhcnQsXG4gICAgICBzbGljZUVuZCA9IHRoaXMucG9zXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzbGljZUVuZCA9IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9uc1tpXVxuICAgIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSlcbiAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gIH1cblxuICBzdWJTbGljZXMucHVzaCh0aGlzLnN0ci5zbGljZShzbGljZVN0YXJ0LCB0aGlzLnBvcykpXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGggPSAwXG5cbiAgcmV0dXJuIHN1YlNsaWNlcy5qb2luKCcnKVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICB0aGlzLmxleGVtZXMucHVzaCh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzdHI6IHRoaXMuc2xpY2VTdHJpbmcoKSxcbiAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICBlbmQ6IHRoaXMucG9zXG4gIH0pXG5cbiAgdGhpcy5zdGFydCA9IHRoaXMucG9zXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZXNjYXBlQ2hhcmFjdGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMucHVzaCh0aGlzLnBvcyAtIDEpXG4gIHRoaXMucG9zICs9IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLkVPU1xuICB9XG5cbiAgdmFyIGNoYXIgPSB0aGlzLnN0ci5jaGFyQXQodGhpcy5wb3MpXG4gIHRoaXMucG9zICs9IDFcbiAgcmV0dXJuIGNoYXJcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIC0gdGhpcy5zdGFydFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmlnbm9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3RhcnQgPT0gdGhpcy5wb3MpIHtcbiAgICB0aGlzLnBvcyArPSAxXG4gIH1cblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5iYWNrdXAgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9zIC09IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5hY2NlcHREaWdpdFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoYXIsIGNoYXJDb2RlXG5cbiAgZG8ge1xuICAgIGNoYXIgPSB0aGlzLm5leHQoKVxuICAgIGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApXG4gIH0gd2hpbGUgKGNoYXJDb2RlID4gNDcgJiYgY2hhckNvZGUgPCA1OClcblxuICBpZiAoY2hhciAhPSBsdW5yLlF1ZXJ5TGV4ZXIuRU9TKSB7XG4gICAgdGhpcy5iYWNrdXAoKVxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUubW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIDwgdGhpcy5sZW5ndGhcbn1cblxubHVuci5RdWVyeUxleGVyLkVPUyA9ICdFT1MnXG5sdW5yLlF1ZXJ5TGV4ZXIuRklFTEQgPSAnRklFTEQnXG5sdW5yLlF1ZXJ5TGV4ZXIuVEVSTSA9ICdURVJNJ1xubHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UgPSAnRURJVF9ESVNUQU5DRSdcbmx1bnIuUXVlcnlMZXhlci5CT09TVCA9ICdCT09TVCdcbmx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRSA9ICdQUkVTRU5DRSdcblxubHVuci5RdWVyeUxleGVyLmxleEZpZWxkID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmJhY2t1cCgpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkZJRUxEKVxuICBsZXhlci5pZ25vcmUoKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleFRlcm0gPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAxKSB7XG4gICAgbGV4ZXIuYmFja3VwKClcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG5cbiAgbGV4ZXIuaWdub3JlKClcblxuICBpZiAobGV4ZXIubW9yZSgpKSB7XG4gICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4Qm9vc3QgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuaWdub3JlKClcbiAgbGV4ZXIuYWNjZXB0RGlnaXRSdW4oKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5CT09TVClcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhFT1MgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgfVxufVxuXG4vLyBUaGlzIG1hdGNoZXMgdGhlIHNlcGFyYXRvciB1c2VkIHdoZW4gdG9rZW5pc2luZyBmaWVsZHNcbi8vIHdpdGhpbiBhIGRvY3VtZW50LiBUaGVzZSBzaG91bGQgbWF0Y2ggb3RoZXJ3aXNlIGl0IGlzXG4vLyBub3QgcG9zc2libGUgdG8gc2VhcmNoIGZvciBzb21lIHRva2VucyB3aXRoaW4gYSBkb2N1bWVudC5cbi8vXG4vLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3Igb24gdGhlXG4vLyB0b2tlbml6ZXIgc28gaXQgX21pZ2h0XyBjbGFzaCB3aXRoIGFueSBvdGhlciBvZiB0aGUgc3BlY2lhbFxuLy8gY2hhcmFjdGVycyBhbHJlYWR5IHVzZWQgd2l0aGluIHRoZSBzZWFyY2ggc3RyaW5nLCBlLmcuIDouXG4vL1xuLy8gVGhpcyBtZWFucyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgc2VwYXJhdG9yIGluXG4vLyBzdWNoIGEgd2F5IHRoYXQgbWFrZXMgc29tZSB3b3JkcyB1bnNlYXJjaGFibGUgdXNpbmcgYSBzZWFyY2hcbi8vIHN0cmluZy5cbmx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yID0gbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yXG5cbmx1bnIuUXVlcnlMZXhlci5sZXhUZXh0ID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGNoYXIgPSBsZXhlci5uZXh0KClcblxuICAgIGlmIChjaGFyID09IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RU9TXG4gICAgfVxuXG4gICAgLy8gRXNjYXBlIGNoYXJhY3RlciBpcyAnXFwnXG4gICAgaWYgKGNoYXIuY2hhckNvZGVBdCgwKSA9PSA5Mikge1xuICAgICAgbGV4ZXIuZXNjYXBlQ2hhcmFjdGVyKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCI6XCIpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGRcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIn5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFZGl0RGlzdGFuY2VcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIl5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhCb29zdFxuICAgIH1cblxuICAgIC8vIFwiK1wiIGluZGljYXRlcyB0ZXJtIHByZXNlbmNlIGlzIHJlcXVpcmVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIitcIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiK1wiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgLy8gXCItXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcHJvaGliaXRlZFxuICAgIC8vIGNoZWNraW5nIGZvciBsZW5ndGggdG8gZW5zdXJlIHRoYXQgb25seVxuICAgIC8vIGxlYWRpbmcgXCItXCIgYXJlIGNvbnNpZGVyZWRcbiAgICBpZiAoY2hhciA9PSBcIi1cIiAmJiBsZXhlci53aWR0aCgpID09PSAxKSB7XG4gICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRSlcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuICAgIH1cblxuICAgIGlmIChjaGFyLm1hdGNoKGx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yKSkge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXJtXG4gICAgfVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIgPSBmdW5jdGlvbiAoc3RyLCBxdWVyeSkge1xuICB0aGlzLmxleGVyID0gbmV3IGx1bnIuUXVlcnlMZXhlciAoc3RyKVxuICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgdGhpcy5jdXJyZW50Q2xhdXNlID0ge31cbiAgdGhpcy5sZXhlbWVJZHggPSAwXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxleGVyLnJ1bigpXG4gIHRoaXMubGV4ZW1lcyA9IHRoaXMubGV4ZXIubGV4ZW1lc1xuXG4gIHZhciBzdGF0ZSA9IGx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2VcblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cblxuICByZXR1cm4gdGhpcy5xdWVyeVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5wZWVrTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZXhlbWVzW3RoaXMubGV4ZW1lSWR4XVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5jb25zdW1lTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGV4ZW1lID0gdGhpcy5wZWVrTGV4ZW1lKClcbiAgdGhpcy5sZXhlbWVJZHggKz0gMVxuICByZXR1cm4gbGV4ZW1lXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLm5leHRDbGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21wbGV0ZWRDbGF1c2UgPSB0aGlzLmN1cnJlbnRDbGF1c2VcbiAgdGhpcy5xdWVyeS5jbGF1c2UoY29tcGxldGVkQ2xhdXNlKVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQ2xhdXNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGxleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RlZCBlaXRoZXIgYSBmaWVsZCBvciBhIHRlcm0sIGZvdW5kIFwiICsgbGV4ZW1lLnR5cGVcblxuICAgICAgaWYgKGxleGVtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJ1wiXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGxleGVtZS5zdHIpIHtcbiAgICBjYXNlIFwiLVwiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlBST0hJQklURURcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcIitcIjpcbiAgICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwidW5yZWNvZ25pc2VkIHByZXNlbmNlIG9wZXJhdG9yJ1wiICsgbGV4ZW1lLnN0ciArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0gb3IgZmllbGQsIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0gb3IgZmllbGQsIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5pbmRleE9mKGxleGVtZS5zdHIpID09IC0xKSB7XG4gICAgdmFyIHBvc3NpYmxlRmllbGRzID0gcGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5tYXAoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIFwiJ1wiICsgZiArIFwiJ1wiIH0pLmpvaW4oJywgJyksXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IFwidW5yZWNvZ25pc2VkIGZpZWxkICdcIiArIGxleGVtZS5zdHIgKyBcIicsIHBvc3NpYmxlIGZpZWxkczogXCIgKyBwb3NzaWJsZUZpZWxkc1xuXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmZpZWxkcyA9IFtsZXhlbWUuc3RyXVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCBub3RoaW5nXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS50ZXJtID0gbGV4ZW1lLnN0ci50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGxleGVtZS5zdHIuaW5kZXhPZihcIipcIikgIT0gLTEpIHtcbiAgICBwYXJzZXIuY3VycmVudENsYXVzZS51c2VQaXBlbGluZSA9IGZhbHNlXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBlZGl0RGlzdGFuY2UgPSBwYXJzZUludChsZXhlbWUuc3RyLCAxMClcblxuICBpZiAoaXNOYU4oZWRpdERpc3RhbmNlKSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImVkaXQgZGlzdGFuY2UgbXVzdCBiZSBudW1lcmljXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZWRpdERpc3RhbmNlID0gZWRpdERpc3RhbmNlXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3QgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBib29zdCA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihib29zdCkpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJib29zdCBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5ib29zdCA9IGJvb3N0XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG4gIC8qKlxuICAgKiBleHBvcnQgdGhlIG1vZHVsZSB2aWEgQU1ELCBDb21tb25KUyBvciBhcyBhIGJyb3dzZXIgZ2xvYmFsXG4gICAqIEV4cG9ydCBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG4gICAqL1xuICA7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgZGVmaW5lKGZhY3RvcnkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8qKlxuICAgICAgICogTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgKiBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICogbGlrZSBOb2RlLlxuICAgICAgICovXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgcm9vdC5sdW5yID0gZmFjdG9yeSgpXG4gICAgfVxuICB9KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBKdXN0IHJldHVybiBhIHZhbHVlIHRvIGRlZmluZSB0aGUgbW9kdWxlIGV4cG9ydC5cbiAgICAgKiBUaGlzIGV4YW1wbGUgcmV0dXJucyBhbiBvYmplY3QsIGJ1dCB0aGUgbW9kdWxlXG4gICAgICogY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICByZXR1cm4gbHVuclxuICB9KSlcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi9TaWRlYmFyL1Bvc2l0aW9uXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQb3NpdGlvblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TaWRlYmFyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgc2lkZWJhcnMgdG8gbG9ja2VkIHN0YXRlIGFuZCBsaW1pdCBoZWlnaHQgdG8gcGFyZW50IG5vZGVcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gU2lkZWJhclxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHBhcmVudF8gLSBTaWRlYmFyIGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XyAtIEN1cnJlbnQgc2lkZWJhciBoZWlnaHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcGFkXyAtIFBhZCB3aGVuIGhlYWRlciBpcyBmaXhlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgICB0aGlzLnBhcmVudF8gPSByZWYucGFyZW50Tm9kZVxyXG5cclxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xyXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXHJcbiAgICAgIDogaGVhZGVyXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBjdXJyZW50IGhlaWdodCBhbmQgdGVzdCB3aGV0aGVyIGhlYWRlciBpcyBmaXhlZCAqL1xyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5wYWRfID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5oZWFkZXJfKS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHNpZGViYXIgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGNvbnN0IHRvcCA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcclxuICAgICAgdGhpcy5wYXJlbnRfLmNoaWxkcmVuLCAob2Zmc2V0LCBjaGlsZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChvZmZzZXQsIGNoaWxkLm9mZnNldFRvcClcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAvKiBTZXQgbG9jayBvZmZzZXQgZm9yIGVsZW1lbnQgd2l0aCBsYXJnZXN0IHRvcCBvZmZzZXQgKi9cclxuICAgIHRoaXMub2Zmc2V0XyA9IHRvcCAtICh0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMClcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBsb2NrZWQgc3RhdGUgYW5kIGhlaWdodFxyXG4gICAqXHJcbiAgICogVGhlIGlubmVyIGhlaWdodCBvZiB0aGUgd2luZG93ICg9IHRoZSB2aXNpYmxlIGFyZWEpIGlzIHRoZSBtYXhpbXVtXHJcbiAgICogcG9zc2libGUgaGVpZ2h0IGZvciB0aGUgc3RyZXRjaGluZyBzaWRlYmFyLiBUaGlzIGhlaWdodCBtdXN0IGJlIGRlZHVjdGVkXHJcbiAgICogYnkgdGhlIGhlaWdodCBvZiB0aGUgZml4ZWQgaGVhZGVyICg1NnB4KS4gRGVwZW5kaW5nIG9uIHRoZSBwYWdlIHktb2Zmc2V0LFxyXG4gICAqIHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzaWRlYmFyIG11c3QgYmUgdGFrZW4gaW50byBhY2NvdW50LCBhcyB3ZWxsIGFzIHRoZVxyXG4gICAqIGNhc2Ugd2hlcmUgdGhlIHdpbmRvdyBpcyBzY3JvbGxlZCBiZXlvbmQgdGhlIHNpZGViYXIgY29udGFpbmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudD99IGV2IC0gRXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuICAgIGNvbnN0IG9mZnNldCAgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgICAvKiBVcGRhdGUgb2Zmc2V0LCBpbiBjYXNlIHdpbmRvdyBpcyByZXNpemVkICovXHJcbiAgICBpZiAoZXYgJiYgZXYudHlwZSA9PT0gXCJyZXNpemVcIilcclxuICAgICAgdGhpcy5zZXR1cCgpXHJcblxyXG4gICAgLyogU2V0IGJvdW5kcyBvZiBzaWRlYmFyIGNvbnRhaW5lciAtIG11c3QgYmUgY2FsY3VsYXRlZCBvbiBldmVyeSBydW4sIGFzXHJcbiAgICAgICB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IG1pZ2h0IGNoYW5nZSBkdWUgdG8gbG9hZGluZyBpbWFnZXMgZXRjLiAqL1xyXG4gICAgY29uc3QgYm91bmRzID0ge1xyXG4gICAgICB0b3A6IHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwLFxyXG4gICAgICBib3R0b206IHRoaXMucGFyZW50Xy5vZmZzZXRUb3AgKyB0aGlzLnBhcmVudF8ub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ2FsY3VsYXRlIG5ldyBvZmZzZXQgYW5kIGhlaWdodCAqL1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdmlzaWJsZSAtIGJvdW5kcy50b3BcclxuICAgICAgICAgICAgICAgICAtIE1hdGgubWF4KDAsIHRoaXMub2Zmc2V0XyAtIG9mZnNldClcclxuICAgICAgICAgICAgICAgICAtIE1hdGgubWF4KDAsIG9mZnNldCArIHZpc2libGUgLSBib3VuZHMuYm90dG9tKVxyXG5cclxuICAgIC8qIElmIGhlaWdodCBjaGFuZ2VkLCB1cGRhdGUgZWxlbWVudCAqL1xyXG4gICAgaWYgKGhlaWdodCAhPT0gdGhpcy5oZWlnaHRfKVxyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodF8gPSBoZWlnaHR9cHhgXHJcblxyXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgbG9ja2VkLCBhcyB3ZSdyZSBiZWxvdyBwYXJlbnQgb2Zmc2V0ICovXHJcbiAgICBpZiAob2Zmc2V0ID49IHRoaXMub2Zmc2V0Xykge1xyXG4gICAgICBpZiAodGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlICE9PSBcImxvY2tcIilcclxuICAgICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxyXG5cclxuICAgIC8qIFNpZGViYXIgc2hvdWxkIGJlIHVubG9ja2VkLCBpZiBsb2NrZWQgKi9cclxuICAgIH0gZWxzZSBpZiAodGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID09PSBcImxvY2tcIikge1xyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIGhlaWdodFxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gXCJcIlxyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQWRhcHRlciBmcm9tIFwiLi9Tb3VyY2UvQWRhcHRlclwiXHJcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuL1NvdXJjZS9SZXBvc2l0b3J5XCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBBZGFwdGVyLFxyXG4gIFJlcG9zaXRvcnlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vQWRhcHRlci9HaXRIdWJcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEdpdEh1YlxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQWJzdHJhY3QgZnJvbSBcIi4vQWJzdHJhY3RcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWIgZXh0ZW5kcyBBYnN0cmFjdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVfIC0gTmFtZSBvZiB0aGUgcmVwb3NpdG9yeVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgc3VwZXIoZWwpXHJcblxyXG4gICAgLyogRXh0cmFjdCB1c2VyIChhbmQgcmVwb3NpdG9yeSBuYW1lKSBmcm9tIFVSTCwgYXMgd2UgaGF2ZSB0byBxdWVyeSBmb3IgYWxsXHJcbiAgICAgICByZXBvc2l0b3JpZXMsIHRvIG9taXQgNDA0IGVycm9ycyBmb3IgcHJpdmF0ZSByZXBvc2l0b3JpZXMgKi9cclxuICAgIGNvbnN0IG1hdGNoZXMgPSAvXi4rZ2l0aHViXFwuY29tXFwvKFteL10rKVxcLz8oW14vXSspPy4qJC9cclxuICAgICAgLmV4ZWModGhpcy5iYXNlXylcclxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIGNvbnN0IFssIHVzZXIsIG5hbWVdID0gbWF0Y2hlc1xyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBiYXNlIFVSTCBhbmQgcmVwb3NpdG9yeSBuYW1lICovXHJcbiAgICAgIHRoaXMuYmFzZV8gPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJ9L3JlcG9zYFxyXG4gICAgICB0aGlzLm5hbWVfID0gbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiBmcm9tIEdpdEh1YlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgZmFjdHNcclxuICAgKi9cclxuICBmZXRjaF8oKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlID0gMCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlX30/cGVyX3BhZ2U9MzAmcGFnZT0ke3BhZ2V9YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yXHJcblxyXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2Ygc3RhcnMgYW5kIGZvcmtzLCBpZiByZXBvc2l0b3J5IGlzIGdpdmVuICovXHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lXykge1xyXG4gICAgICAgICAgICBjb25zdCByZXBvID0gZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLm5hbWVfKVxyXG4gICAgICAgICAgICBpZiAoIXJlcG8gJiYgZGF0YS5sZW5ndGggPT09IDMwKVxyXG4gICAgICAgICAgICAgIHJldHVybiBwYWdpbmF0ZShwYWdlICsgMSlcclxuXHJcbiAgICAgICAgICAgIC8qIElmIHdlIGZvdW5kIGEgcmVwbywgZXh0cmFjdCB0aGUgZmFjdHMgKi9cclxuICAgICAgICAgICAgcmV0dXJuIHJlcG9cclxuICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLnN0YXJnYXplcnNfY291bnQpfSBTdGFyc2AsXHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5mb3Jrc19jb3VudCl9IEZvcmtzYFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICA6IFtdXHJcblxyXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2YgcmVwb3NpdG9yaWVzLCBvdGhlcndpc2UgKi9cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IFJlcG9zaXRvcmllc2BcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUGFnaW5hdGUgdGhyb3VnaCByZXBvcyAqL1xyXG4gICAgcmV0dXJuIHBhZ2luYXRlKClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0dpdEh1Yi5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3Qge1xyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEFuY2hvckVsZW1lbnR9IGVsXyAtIExpbmsgdG8gcmVwb3NpdG9yeVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBiYXNlXyAtIEFQSSBiYXNlIFVSTFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYWx0XyAtIFVuaXF1ZSBpZGVudGlmaWVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEFuY2hvckVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIGJhc2UgVVJMICovXHJcbiAgICB0aGlzLmJhc2VfID0gdGhpcy5lbF8uaHJlZlxyXG4gICAgdGhpcy5zYWx0XyA9IHRoaXMuaGFzaF8odGhpcy5iYXNlXylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSBDb29raWUgb3IgZmV0Y2ggZnJvbSByZXNwZWN0aXZlIEFQSVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgZmFjdHNcclxuICAgKi9cclxuICBmZXRjaCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgY2FjaGVkID0gQ29va2llcy5nZXRKU09OKGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWApXHJcbiAgICAgIGlmICh0eXBlb2YgY2FjaGVkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmVzb2x2ZShjYWNoZWQpXHJcblxyXG4gICAgICAvKiBJZiB0aGUgZGF0YSBpcyBub3QgY2FjaGVkIGluIGEgY29va2llLCBpbnZva2UgZmV0Y2ggYW5kIHNldFxyXG4gICAgICAgICBhIGNvb2tpZSB0aGF0IGF1dG9tYXRpY2FsbHkgZXhwaXJlcyBpbiAxNSBtaW51dGVzICovXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaF8oKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgQ29va2llcy5zZXQoYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYCwgZGF0YSwgeyBleHBpcmVzOiAxIC8gOTYgfSlcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWJzdHJhY3QgcHJpdmF0ZSBmdW5jdGlvbiB0aGF0IGZldGNoZXMgcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICovXHJcbiAgZmV0Y2hfKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZmV0Y2hfKCk6IE5vdCBpbXBsZW1lbnRlZFwiKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggc3VmZml4XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gTnVtYmVyIHRvIGZvcm1hdFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIG51bWJlclxyXG4gICAqL1xyXG4gIGZvcm1hdF8obnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID4gMTAwMDApXHJcbiAgICAgIHJldHVybiBgJHsobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgwKX1rYFxyXG4gICAgZWxzZSBpZiAobnVtYmVyID4gMTAwMClcclxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDEpfWtgXHJcbiAgICByZXR1cm4gYCR7bnVtYmVyfWBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpbXBsZSBoYXNoIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBUYWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc2MTY0ODQvMTA2NTU4NFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIElucHV0IHN0cmluZ1xyXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFzaGVkIHN0cmluZ1xyXG4gICAqL1xyXG4gIGhhc2hfKHN0cikge1xyXG4gICAgbGV0IGhhc2ggPSAwXHJcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpXHJcbiAgICAgIGhhc2ggfD0gMCAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNoXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gZmFsc2U7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdyaXRlXG5cblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0ZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cblx0XHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlYWRcblxuXHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0cmVzdWx0ID0ge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuXHRcdFx0Ly8gY2FsbGluZyBcImdldCgpXCJcblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZztcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29va2llID0gY29udmVydGVyLnJlYWQgP1xuXHRcdFx0XHRcdFx0Y29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBjb29raWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gY29va2llO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gYXBpO1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gYXBpLmNhbGwoYXBpLCBrZXkpO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gYXBpLmFwcGx5KHtcblx0XHRcdFx0anNvbjogdHJ1ZVxuXHRcdFx0fSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcblx0XHR9O1xuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGFwaShrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NpdG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSByZXBvc2l0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZhY3RzIC0gRmFjdHMgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBpbml0aWFsaXplKGZhY3RzKSB7XHJcbiAgICBpZiAoZmFjdHMubGVuZ3RoICYmIHRoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aClcclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibWQtc291cmNlX19mYWN0c1wiPlxyXG4gICAgICAgICAge2ZhY3RzLm1hcChmYWN0ID0+IDxsaSBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdFwiPntmYWN0fTwvbGk+KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApXHJcblxyXG4gICAgLyogRmluaXNoIHJlbmRlcmluZyB3aXRoIGFuaW1hdGlvbiAqL1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJkb25lXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RhYnMvVG9nZ2xlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBUb2dnbGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0YWJzIHZpc2liaWxpdHkgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIFRvZ2dsZSBwYWdlLXkgb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGFicyB2aXNpYmlsaXR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIE5vZGUpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBvZmZzZXQgYW5kIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHZpc2liaWxpdHlcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj1cclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bMF0ub2Zmc2V0VG9wICsgKDUgLSA0OCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBxdWljayBoYWNrIHRvIGVuYWJsZSBzYW1lIGhhbmRsaW5nIGZvciBoZXJvXHJcbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJoaWRkZW5cIiA6IFwiXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHZpc2liaWxpdHlcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzL1RvZ2dsZS5qcyIsImltcG9ydCByZW5kZXIgZnJvbSBcIi4vVGFibGVPZkNvbnRlbnRzL1RhYmxlT2ZDb250ZW50c1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcmVuZGVyXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50cy5qcyIsImNvbnN0IHRvTGV2ZWwgPSAodGFnTmFtZSkgPT4ge1xyXG4gIHJldHVybiB0YWdOYW1lLnJlcGxhY2UoL1xcRC9nLCcnKTtcclxufVxyXG5cclxuY29uc3QgdG9JdGVtID0gKGVsKSA9PiB7XHJcbiAgcmV0dXJuIHsgZWw6IGVsLCBsZXZlbDogdG9MZXZlbChlbC50YWdOYW1lKSwgY2hpbGRyZW46IFtdIH1cclxufVxyXG5cclxuY29uc3QgdG9JdGVtcyA9IChlbHMpID0+IHtcclxuICByZXR1cm4gW10ucmVkdWNlLmNhbGwoZWxzLCAoaXRlbXMsIGVsKSA9PiBpdGVtcy5jb25jYXQodG9JdGVtKGVsKSksIFtdKVxyXG59XHJcblxyXG5jb25zdCBuZXh0V2l0aExvd2VyTGV2ZWwgPSAoaXRlbSwgaXRlbXMpID0+IHtcclxuICBpdGVtcy5yZWR1Y2UoKVxyXG59XHJcblxyXG5jb25zdCB0b1RPQyA9IChpdGVtcywgaWR4ID0gMCkgPT4ge1xyXG4gIGxldCBjdXJyZW50ID0gbnVsbFxyXG4gIGxldCB0b2MgPSBbXVxyXG4gIGZvciAobGV0IGkgPSBpZHg7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV4dCA9IGl0ZW1zW2ldXHJcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICBjdXJyZW50ID0gbmV4dFxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmxldmVsID09PSBuZXh0LmxldmVsKSB7XHJcbiAgICAgIHRvYy5wdXNoKGN1cnJlbnQpXHJcbiAgICAgIGN1cnJlbnQgPSBuZXh0XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQubGV2ZWwgPiBuZXh0LmxldmVsKSB7XHJcbiAgICAgIHRvYy5wdXNoKGN1cnJlbnQpXHJcbiAgICAgIHJldHVybiB0b2NcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudC5sZXZlbCA8IG5leHQubGV2ZWwpIHtcclxuICAgICAgY3VycmVudC5jaGlsZHJlbiA9IHRvVE9DKGl0ZW1zLCBpKVxyXG4gICAgICBpICs9IGN1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMVxyXG4gICAgICB0b2MucHVzaChjdXJyZW50KVxyXG4gICAgICBjdXJyZW50ID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgdG9jLnB1c2goY3VycmVudClcclxuICB9XHJcbiAgcmV0dXJuIHRvY1xyXG59XHJcblxyXG5jb25zdCByZW5kZXIgPSAoZWwpID0+IHtcclxuICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgOiBlbFxyXG4gIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgIHJldHVyblxyXG5cclxuICBjb25zdCBlbHMgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMiwgaDMsIGg0LCBoNSwgaDZcIik7XHJcbiAgY29uc3QgaXRlbXMgPSB0b0l0ZW1zKGVscylcclxuICBjb25zdCB0b2MgPSB0b1RPQyhpdGVtcylcclxuICBpZiAodG9jLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZWYuYXBwZW5kQ2hpbGQoPGxhYmVsIGNsYXNzPVwibWQtbmF2X190aXRsZVwiIGZvcj1cIl9fdG9jXCI+VGFibGUgb2YgY29udGVudHM8L2xhYmVsPilcclxuICBjb25zdCBsaXN0ID0gPHVsIGNsYXNzPVwibWQtbmF2X19saXN0XCIgZGF0YS1tZC1zY3JvbGxmaXg+PC91bD5cclxuICByZWYuYXBwZW5kQ2hpbGQobGlzdClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvYy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9jSXRlbSA9IHRvY1tpXVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChUb2NJdGVtKHRvY0l0ZW0pKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVG9jSXRlbSA9ICh0b2NJdGVtKSA9PiAoXHJcbiAgPGxpIGNsYXNzPVwibWQtbmF2X19pdGVtXCI+XHJcbiAgICA8YSBocmVmPXtcIiNcIiArIHRvY0l0ZW0uZWwuaWR9IHRpdGxlPXt0b2NJdGVtLmVsLmlkfSBjbGFzcz1cIm1kLW5hdl9fbGlua1wiPlxyXG4gICAgICAgIHt0b2NJdGVtLmVsLmlubmVySFRNTH1cclxuICAgIDwvYT5cclxuXHJcbiAgICB7dG9jSXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuICAgICAgPG5hdiBjbGFzcz1cIm1kLW5hdlwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm1kLW5hdl9fbGlzdFwiPlxyXG4gICAgICAgICAge3RvY0l0ZW0uY2hpbGRyZW4ubWFwKGNoaWxkID0+IFRvY0l0ZW0oY2hpbGQpKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICl9XHJcbiAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJsZU9mQ29udGVudHMvVGFibGVPZkNvbnRlbnRzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=