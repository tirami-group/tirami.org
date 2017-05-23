/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v11.1.0 | (c) 2017 Chris Ferdinandi | GPL-3.0 License | http://github.com/cferdinandi/smooth-scroll */
!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t(e)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e);
}("undefined" != typeof global ? global : this.window || this.global, function (e) {
  "use strict";
  var t,
      n,
      o,
      r,
      a,
      i,
      c,
      l = {},
      s = "querySelector" in document && "addEventListener" in e,
      u = { selector: "[data-scroll]", ignore: "[data-scroll-ignore]", selectorHeader: null, speed: 500, offset: 0, easing: "easeInOutCubic", easingPatterns: {}, before: function () {}, after: function () {} },
      f = function () {
    var e = {},
        t = !1,
        n = 0,
        o = arguments.length;"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);for (; n < o; n++) {
      var r = arguments[n];!function (n) {
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = f(!0, e[o], n[o]) : e[o] = n[o]);
      }(r);
    }return e;
  },
      d = function (e) {
    return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
  },
      h = function (e, t) {
    for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;);return n > -1;
    }); e && e !== document; e = e.parentNode) if (e.matches(t)) return e;return null;
  },
      m = function (e) {
    "#" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), o = n.length, r = -1, a = "", i = n.charCodeAt(0); ++r < o;) {
      if (0 === (t = n.charCodeAt(r))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t >= 1 && t <= 31 || 127 == t || 0 === r && t >= 48 && t <= 57 || 1 === r && t >= 48 && t <= 57 && 45 === i ? a += "\\" + t.toString(16) + " " : a += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(r) : "\\" + n.charAt(r);
    }return "#" + a;
  },
      g = function (e, t) {
    var n;return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.easingPatterns[e.easing] && (n = e.easingPatterns[e.easing](t)), n || t;
  },
      p = function (e, t, n) {
    var o = 0;if (e.offsetParent) do {
      o += e.offsetTop, e = e.offsetParent;
    } while (e);return o = Math.max(o - t - n, 0), Math.min(o, y() - b());
  },
      b = function () {
    return Math.max(document.documentElement.clientHeight, e.innerHeight || 0);
  },
      y = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  },
      v = function (e) {
    return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {};
  },
      O = function (e) {
    return e ? d(e) + e.offsetTop : 0;
  },
      S = function (t, n, o) {
    o || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n));
  };l.animateScroll = function (n, o, i) {
    var l = v(o ? o.getAttribute("data-options") : null),
        s = f(t || u, i || {}, l),
        d = "[object Number]" === Object.prototype.toString.call(n),
        h = d || !n.tagName ? null : n;if (d || h) {
      var m = e.pageYOffset;s.selectorHeader && !r && (r = document.querySelector(s.selectorHeader)), a || (a = O(r));var b,
          E,
          I = d ? n : p(h, a, parseInt("function" == typeof s.offset ? s.offset() : s.offset, 10)),
          H = I - m,
          A = y(),
          j = 0,
          C = function (t, r, a) {
        var i = e.pageYOffset;(t == r || i == r || e.innerHeight + i >= A) && (clearInterval(a), S(n, r, d), s.after(n, o));
      },
          M = function () {
        j += 16, b = j / parseInt(s.speed, 10), b = b > 1 ? 1 : b, E = m + H * g(s, b), e.scrollTo(0, Math.floor(E)), C(E, I, c);
      };0 === e.pageYOffset && e.scrollTo(0, 0), s.before(n, o), function () {
        clearInterval(c), c = setInterval(M, 16);
      }();
    }
  };var E = function (t) {
    try {
      m(decodeURIComponent(e.location.hash));
    } catch (t) {
      m(e.location.hash);
    }n && (n.id = n.getAttribute("data-scroll-id"), l.animateScroll(n, o), n = null, o = null);
  },
      I = function (r) {
    if (0 === r.button && !r.metaKey && !r.ctrlKey && (o = h(r.target, t.selector)) && "a" === o.tagName.toLowerCase() && !h(r.target, t.ignore) && o.hostname === e.location.hostname && o.pathname === e.location.pathname && /#/.test(o.href)) {
      var a;try {
        a = m(decodeURIComponent(o.hash));
      } catch (e) {
        a = m(o.hash);
      }if ("#" === a) {
        r.preventDefault(), n = document.body;var i = n.id ? n.id : "smooth-scroll-top";return n.setAttribute("data-scroll-id", i), n.id = "", void (e.location.hash.substring(1) === i ? E() : e.location.hash = i);
      }n = document.querySelector(a), n && (n.setAttribute("data-scroll-id", n.id), n.id = "", o.hash === e.location.hash && (r.preventDefault(), E()));
    }
  },
      H = function (e) {
    i || (i = setTimeout(function () {
      i = null, a = O(r);
    }, 66));
  };return l.destroy = function () {
    t && (document.removeEventListener("click", I, !1), e.removeEventListener("resize", H, !1), t = null, n = null, o = null, r = null, a = null, i = null, c = null);
  }, l.init = function (n) {
    s && (l.destroy(), t = f(u, n || {}), r = t.selectorHeader ? document.querySelector(t.selectorHeader) : null, a = O(r), document.addEventListener("click", I, !1), e.addEventListener("hashchange", E, !1), r && e.addEventListener("resize", H, !1));
  }, l;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_main_scss__);



let scroll = __webpack_require__(0);
scroll.init();

/***/ })
/******/ ]);