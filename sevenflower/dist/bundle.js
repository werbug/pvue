/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var common = __webpack_require__(5);
	var html = __webpack_require__(6);
	
	common.render(html);
	
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var common = {
	  render: function render(str) {
	    var body = document.body;
	    body.innerHTML = str + body.innerHTML;
	  }
	};
	
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\" id=\"m-index\">		<header>		<ul>			<li>				<a href=\"#\">七彩鲜花</a>			</li>			<li class=\"yo-ico\">&#xe60b;</li>		</ul>	</header>	<div id=\"search\">		<a href=\"javascript:;\">在线咨询</a>		<form>			<input type=\"search\" placeholder=\"点击输入搜索内容\"/>			<i class=\"yo-ico\">&#xe634;</i>		</form>			</div>	<div id = \"contentWrapper\">	<div id=\"banner\" class=\"swiper-container\">		<!-- 内容 -->	    <div class=\"swiper-wrapper\">		    <div class=\"swiper-slide swiper-lazy\" data-background=\"/images/m_banner1.jpg\">		    			    	<!-- 延迟加载 -->		    	<div class=\"swiper-lazy-preloader\"></div>		    </div>		    <div class=\"swiper-slide swiper-lazy\" data-background=\"/images/m_banner2.jpg\">						    	<div class=\"swiper-lazy-preloader\"></div>		    </div>						<div class=\"swiper-slide swiper-lazy\" data-background=\"/images/m_banner3.jpg\">						    	<div class=\"swiper-lazy-preloader\"></div>		    </div>						<div class=\"swiper-slide swiper-lazy\" data-background=\"/images/m_banner4.jpg\">						    	<div class=\"swiper-lazy-preloader\"></div>		   </div>		   	    </div>	    		<!-- 分页 -->	    <div class=\"swiper-pagination\"></div>	</div><!--banner end-->	<nav>		<ul>			<li>				<img alt=\"\" src=\"./images/nav_cake.png\" />				<p>蛋糕</p>			</li>			<li>				<img alt=\"\" src=\"./images/nav_flower.png\" />				<p>鲜花</p>			</li>			<li>				<img alt=\"\" src=\"./images/nav_lmzh.png\" />				<p>浪漫组合</p>			</li>			<li>				<img alt=\"\" src=\"./images/nav_more.png\" />				<p>更多</p>			</li>		</ul>				<div class=\"navlistwrapper\">			<div>				<i class=\"yo-ico\">&#xe601;</i>				<b>订单去哪了</b>			</div>			<div>				<i class=\"yo-ico\">&#xe681;</i>				<b>400-658-1777</b>			</div>			<div>				<i class=\"yo-ico\">&#xe602;</i>				<b>在线咨询</b>			</div>			<div>				<i class=\"yo-ico\">&#xe617;</i>				<b>QQ:138010778</b>			</div>		</div>			</nav>		<section>		<div class=\"content_title\">			<span>A</span>			<b>热卖推荐</b>			<strong>更多>></strong>		</div>				<ul>			<li v-for=\"item in list\">				<i><img :src=\"item.imgSrc\" /></i>				<b>{{item.title}}</b>				<p>{{item.info}}</p>				<div>					<strong>{{item.price}}</strong>					<i class=\"yo-ico cart\">&#xe600;</i>					<span>购买</span>				</div>							</li>		</ul>					</section>	</div><!--contentWrapper end-->	<footer>		<ul>			<li class=\"active\">				<i class=\"yo-ico\">&#xe629;</i>				<b>首页</b>			</li>			<li>				<i class=\"yo-ico\">&#xe610;</i>				<b>分类</b>			</li>			<li>				<i class=\"yo-ico\">&#xe600;</i>				<b>购物车</b>			</li>			<li>				<i class=\"yo-ico\">&#xe607;</i>				<b>我的七彩</b>			</li>			<li>				<i class=\"yo-ico\">&#xe67e;</i>				<b>帮助中心</b>			</li>		</ul>	</footer></div>"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Vue = __webpack_require__(8);
	var Swiper = __webpack_require__(9);
	
	new Vue({
			el: '#m-index',
			data: {
					list: []
			},
	
			mounted: function mounted() {
					var _this = this;
	
					fetch('/api/indexlist').then(function (response) {
							return response.json();
					}).then(function (res) {
							_this.list = res;
					}).catch(function (e) {
							return console.log("Oops, error", e);
					});
			}
	});
	
	//banner
	var mySwiper = new Swiper('#banner', {
			autoplay: 5000, //可选选项，自动滑动
			initialSlide: 0, //初始索引
			direction: 'horizontal', //滑动方向水平|垂直vertical
			speed: 300, //滑动速度，滑动开始到结束的时间
			autoplayDisableOnInteraction: false, //手滑后自动播放不停止
			autoplayStopOnLast: false, //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
			grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
			setWrapperSize: true, //开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
			virtualTranslate: false, //true：Swiper不会移动
			roundLengths: true, //true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
			autoHeight: true, //true时，wrapper和container会随着当前slide的高度而发生变化
			pagination: '.swiper-pagination', //分页
			paginationHide: false, //true隐藏分页器
			paginationType: 'bullets', //分页器样式类型:‘bullets’  圆点（默认）‘fraction’  分式 ‘progress’  进度条‘custom’ 自定义
			paginationClickable: true, //true时，点击分页器的指示点分页器会控制Swiper切换
			lazyLoading: true, //true开启图片延迟加载
			lazyLoadingInPrevNext: true, //将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
			lazyLoadingInPrevNextAmount: 2, //默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片。
			loop: true, //循环
			freeMode: false
	}); //mySwiper end

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * Vue.js v2.1.8
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
	})(undefined, function () {
	  'use strict';
	
	  /*  */
	
	  /**
	   * Convert a value to a string that is actually rendered.
	   */
	
	  function _toString(val) {
	    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
	  }
	
	  /**
	   * Convert a input value to a number for persistence.
	   * If the conversion fails, return original string.
	   */
	  function toNumber(val) {
	    var n = parseFloat(val, 10);
	    return n || n === 0 ? n : val;
	  }
	
	  /**
	   * Make a map and return a function for checking if a key
	   * is in that map.
	   */
	  function makeMap(str, expectsLowerCase) {
	    var map = Object.create(null);
	    var list = str.split(',');
	    for (var i = 0; i < list.length; i++) {
	      map[list[i]] = true;
	    }
	    return expectsLowerCase ? function (val) {
	      return map[val.toLowerCase()];
	    } : function (val) {
	      return map[val];
	    };
	  }
	
	  /**
	   * Check if a tag is a built-in tag.
	   */
	  var isBuiltInTag = makeMap('slot,component', true);
	
	  /**
	   * Remove an item from an array
	   */
	  function remove$1(arr, item) {
	    if (arr.length) {
	      var index = arr.indexOf(item);
	      if (index > -1) {
	        return arr.splice(index, 1);
	      }
	    }
	  }
	
	  /**
	   * Check whether the object has the property.
	   */
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  function hasOwn(obj, key) {
	    return hasOwnProperty.call(obj, key);
	  }
	
	  /**
	   * Check if value is primitive
	   */
	  function isPrimitive(value) {
	    return typeof value === 'string' || typeof value === 'number';
	  }
	
	  /**
	   * Create a cached version of a pure function.
	   */
	  function cached(fn) {
	    var cache = Object.create(null);
	    return function cachedFn(str) {
	      var hit = cache[str];
	      return hit || (cache[str] = fn(str));
	    };
	  }
	
	  /**
	   * Camelize a hyphen-delmited string.
	   */
	  var camelizeRE = /-(\w)/g;
	  var camelize = cached(function (str) {
	    return str.replace(camelizeRE, function (_, c) {
	      return c ? c.toUpperCase() : '';
	    });
	  });
	
	  /**
	   * Capitalize a string.
	   */
	  var capitalize = cached(function (str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  });
	
	  /**
	   * Hyphenate a camelCase string.
	   */
	  var hyphenateRE = /([^-])([A-Z])/g;
	  var hyphenate = cached(function (str) {
	    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	  });
	
	  /**
	   * Simple bind, faster than native
	   */
	  function bind$1(fn, ctx) {
	    function boundFn(a) {
	      var l = arguments.length;
	      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	    }
	    // record original fn length
	    boundFn._length = fn.length;
	    return boundFn;
	  }
	
	  /**
	   * Convert an Array-like object to a real Array.
	   */
	  function toArray(list, start) {
	    start = start || 0;
	    var i = list.length - start;
	    var ret = new Array(i);
	    while (i--) {
	      ret[i] = list[i + start];
	    }
	    return ret;
	  }
	
	  /**
	   * Mix properties into target object.
	   */
	  function extend(to, _from) {
	    for (var key in _from) {
	      to[key] = _from[key];
	    }
	    return to;
	  }
	
	  /**
	   * Quick object check - this is primarily used to tell
	   * Objects from primitive values when we know the value
	   * is a JSON-compliant type.
	   */
	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }
	
	  /**
	   * Strict object type check. Only returns true
	   * for plain JavaScript objects.
	   */
	  var toString = Object.prototype.toString;
	  var OBJECT_STRING = '[object Object]';
	  function isPlainObject(obj) {
	    return toString.call(obj) === OBJECT_STRING;
	  }
	
	  /**
	   * Merge an Array of Objects into a single Object.
	   */
	  function toObject(arr) {
	    var res = {};
	    for (var i = 0; i < arr.length; i++) {
	      if (arr[i]) {
	        extend(res, arr[i]);
	      }
	    }
	    return res;
	  }
	
	  /**
	   * Perform no operation.
	   */
	  function noop() {}
	
	  /**
	   * Always return false.
	   */
	  var no = function no() {
	    return false;
	  };
	
	  /**
	   * Return same value
	   */
	  var identity = function identity(_) {
	    return _;
	  };
	
	  /**
	   * Generate a static keys string from compiler modules.
	   */
	  function genStaticKeys(modules) {
	    return modules.reduce(function (keys, m) {
	      return keys.concat(m.staticKeys || []);
	    }, []).join(',');
	  }
	
	  /**
	   * Check if two values are loosely equal - that is,
	   * if they are plain objects, do they have the same shape?
	   */
	  function looseEqual(a, b) {
	    var isObjectA = isObject(a);
	    var isObjectB = isObject(b);
	    if (isObjectA && isObjectB) {
	      return JSON.stringify(a) === JSON.stringify(b);
	    } else if (!isObjectA && !isObjectB) {
	      return String(a) === String(b);
	    } else {
	      return false;
	    }
	  }
	
	  function looseIndexOf(arr, val) {
	    for (var i = 0; i < arr.length; i++) {
	      if (looseEqual(arr[i], val)) {
	        return i;
	      }
	    }
	    return -1;
	  }
	
	  /*  */
	
	  var config = {
	    /**
	     * Option merge strategies (used in core/util/options)
	     */
	    optionMergeStrategies: Object.create(null),
	
	    /**
	     * Whether to suppress warnings.
	     */
	    silent: false,
	
	    /**
	     * Whether to enable devtools
	     */
	    devtools: "development" !== 'production',
	
	    /**
	     * Error handler for watcher errors
	     */
	    errorHandler: null,
	
	    /**
	     * Ignore certain custom elements
	     */
	    ignoredElements: [],
	
	    /**
	     * Custom user key aliases for v-on
	     */
	    keyCodes: Object.create(null),
	
	    /**
	     * Check if a tag is reserved so that it cannot be registered as a
	     * component. This is platform-dependent and may be overwritten.
	     */
	    isReservedTag: no,
	
	    /**
	     * Check if a tag is an unknown element.
	     * Platform-dependent.
	     */
	    isUnknownElement: no,
	
	    /**
	     * Get the namespace of an element
	     */
	    getTagNamespace: noop,
	
	    /**
	     * Parse the real tag name for the specific platform.
	     */
	    parsePlatformTagName: identity,
	
	    /**
	     * Check if an attribute must be bound using property, e.g. value
	     * Platform-dependent.
	     */
	    mustUseProp: no,
	
	    /**
	     * List of asset types that a component can own.
	     */
	    _assetTypes: ['component', 'directive', 'filter'],
	
	    /**
	     * List of lifecycle hooks.
	     */
	    _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],
	
	    /**
	     * Max circular updates allowed in a scheduler flush cycle.
	     */
	    _maxUpdateCount: 100
	  };
	
	  /*  */
	
	  /**
	   * Check if a string starts with $ or _
	   */
	  function isReserved(str) {
	    var c = (str + '').charCodeAt(0);
	    return c === 0x24 || c === 0x5F;
	  }
	
	  /**
	   * Define a property.
	   */
	  function def(obj, key, val, enumerable) {
	    Object.defineProperty(obj, key, {
	      value: val,
	      enumerable: !!enumerable,
	      writable: true,
	      configurable: true
	    });
	  }
	
	  /**
	   * Parse simple path.
	   */
	  var bailRE = /[^\w.$]/;
	  function parsePath(path) {
	    if (bailRE.test(path)) {
	      return;
	    } else {
	      var segments = path.split('.');
	      return function (obj) {
	        for (var i = 0; i < segments.length; i++) {
	          if (!obj) {
	            return;
	          }
	          obj = obj[segments[i]];
	        }
	        return obj;
	      };
	    }
	  }
	
	  /*  */
	  /* globals MutationObserver */
	
	  // can we use __proto__?
	  var hasProto = '__proto__' in {};
	
	  // Browser environment sniffing
	  var inBrowser = typeof window !== 'undefined';
	  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	  var isIE = UA && /msie|trident/.test(UA);
	  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	  var isEdge = UA && UA.indexOf('edge/') > 0;
	  var isAndroid = UA && UA.indexOf('android') > 0;
	  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	  // this needs to be lazy-evaled because vue may be required before
	  // vue-server-renderer can set VUE_ENV
	  var _isServer;
	  var isServerRendering = function isServerRendering() {
	    if (_isServer === undefined) {
	      /* istanbul ignore if */
	      if (!inBrowser && typeof global !== 'undefined') {
	        // detect presence of vue-server-renderer and avoid
	        // Webpack shimming the process
	        _isServer = global['process'].env.VUE_ENV === 'server';
	      } else {
	        _isServer = false;
	      }
	    }
	    return _isServer;
	  };
	
	  // detect devtools
	  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	  /* istanbul ignore next */
	  function isNative(Ctor) {
	    return (/native code/.test(Ctor.toString())
	    );
	  }
	
	  /**
	   * Defer a task to execute it asynchronously.
	   */
	  var nextTick = function () {
	    var callbacks = [];
	    var pending = false;
	    var timerFunc;
	
	    function nextTickHandler() {
	      pending = false;
	      var copies = callbacks.slice(0);
	      callbacks.length = 0;
	      for (var i = 0; i < copies.length; i++) {
	        copies[i]();
	      }
	    }
	
	    // the nextTick behavior leverages the microtask queue, which can be accessed
	    // via either native Promise.then or MutationObserver.
	    // MutationObserver has wider support, however it is seriously bugged in
	    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	    // completely stops working after triggering a few times... so, if native
	    // Promise is available, we will use it:
	    /* istanbul ignore if */
	    if (typeof Promise !== 'undefined' && isNative(Promise)) {
	      var p = Promise.resolve();
	      var logError = function logError(err) {
	        console.error(err);
	      };
	      timerFunc = function timerFunc() {
	        p.then(nextTickHandler).catch(logError);
	        // in problematic UIWebViews, Promise.then doesn't completely break, but
	        // it can get stuck in a weird state where callbacks are pushed into the
	        // microtask queue but the queue isn't being flushed, until the browser
	        // needs to do some other work, e.g. handle a timer. Therefore we can
	        // "force" the microtask queue to be flushed by adding an empty timer.
	        if (isIOS) {
	          setTimeout(noop);
	        }
	      };
	    } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]')) {
	      // use MutationObserver where native Promise is not available,
	      // e.g. PhantomJS IE11, iOS7, Android 4.4
	      var counter = 1;
	      var observer = new MutationObserver(nextTickHandler);
	      var textNode = document.createTextNode(String(counter));
	      observer.observe(textNode, {
	        characterData: true
	      });
	      timerFunc = function timerFunc() {
	        counter = (counter + 1) % 2;
	        textNode.data = String(counter);
	      };
	    } else {
	      // fallback to setTimeout
	      /* istanbul ignore next */
	      timerFunc = function timerFunc() {
	        setTimeout(nextTickHandler, 0);
	      };
	    }
	
	    return function queueNextTick(cb, ctx) {
	      var _resolve;
	      callbacks.push(function () {
	        if (cb) {
	          cb.call(ctx);
	        }
	        if (_resolve) {
	          _resolve(ctx);
	        }
	      });
	      if (!pending) {
	        pending = true;
	        timerFunc();
	      }
	      if (!cb && typeof Promise !== 'undefined') {
	        return new Promise(function (resolve) {
	          _resolve = resolve;
	        });
	      }
	    };
	  }();
	
	  var _Set;
	  /* istanbul ignore if */
	  if (typeof Set !== 'undefined' && isNative(Set)) {
	    // use native Set when available.
	    _Set = Set;
	  } else {
	    // a non-standard Set polyfill that only works with primitive keys.
	    _Set = function () {
	      function Set() {
	        this.set = Object.create(null);
	      }
	      Set.prototype.has = function has(key) {
	        return this.set[key] === true;
	      };
	      Set.prototype.add = function add(key) {
	        this.set[key] = true;
	      };
	      Set.prototype.clear = function clear() {
	        this.set = Object.create(null);
	      };
	
	      return Set;
	    }();
	  }
	
	  var warn = noop;
	  var formatComponentName;
	
	  {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function warn(msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
	      }
	    };
	
	    formatComponentName = function formatComponentName(vm) {
	      if (vm.$root === vm) {
	        return 'root instance';
	      }
	      var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
	      return (name ? "component <" + name + ">" : "anonymous component") + (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : '');
	    };
	
	    var formatLocation = function formatLocation(str) {
	      if (str === 'anonymous component') {
	        str += " - use the \"name\" option for better debugging messages.";
	      }
	      return "\n(found in " + str + ")";
	    };
	  }
	
	  /*  */
	
	  var uid$1 = 0;
	
	  /**
	   * A dep is an observable that can have multiple
	   * directives subscribing to it.
	   */
	  var Dep = function Dep() {
	    this.id = uid$1++;
	    this.subs = [];
	  };
	
	  Dep.prototype.addSub = function addSub(sub) {
	    this.subs.push(sub);
	  };
	
	  Dep.prototype.removeSub = function removeSub(sub) {
	    remove$1(this.subs, sub);
	  };
	
	  Dep.prototype.depend = function depend() {
	    if (Dep.target) {
	      Dep.target.addDep(this);
	    }
	  };
	
	  Dep.prototype.notify = function notify() {
	    // stablize the subscriber list first
	    var subs = this.subs.slice();
	    for (var i = 0, l = subs.length; i < l; i++) {
	      subs[i].update();
	    }
	  };
	
	  // the current target watcher being evaluated.
	  // this is globally unique because there could be only one
	  // watcher being evaluated at any time.
	  Dep.target = null;
	  var targetStack = [];
	
	  function pushTarget(_target) {
	    if (Dep.target) {
	      targetStack.push(Dep.target);
	    }
	    Dep.target = _target;
	  }
	
	  function popTarget() {
	    Dep.target = targetStack.pop();
	  }
	
	  /*
	   * not type checking this file because flow doesn't play well with
	   * dynamically accessing methods on Array prototype
	   */
	
	  var arrayProto = Array.prototype;
	  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	    // cache original method
	    var original = arrayProto[method];
	    def(arrayMethods, method, function mutator() {
	      var arguments$1 = arguments;
	
	      // avoid leaking arguments:
	      // http://jsperf.com/closure-with-arguments
	      var i = arguments.length;
	      var args = new Array(i);
	      while (i--) {
	        args[i] = arguments$1[i];
	      }
	      var result = original.apply(this, args);
	      var ob = this.__ob__;
	      var inserted;
	      switch (method) {
	        case 'push':
	          inserted = args;
	          break;
	        case 'unshift':
	          inserted = args;
	          break;
	        case 'splice':
	          inserted = args.slice(2);
	          break;
	      }
	      if (inserted) {
	        ob.observeArray(inserted);
	      }
	      // notify change
	      ob.dep.notify();
	      return result;
	    });
	  });
	
	  /*  */
	
	  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	  /**
	   * By default, when a reactive property is set, the new value is
	   * also converted to become reactive. However when passing down props,
	   * we don't want to force conversion because the value may be a nested value
	   * under a frozen data structure. Converting it would defeat the optimization.
	   */
	  var observerState = {
	    shouldConvert: true,
	    isSettingProps: false
	  };
	
	  /**
	   * Observer class that are attached to each observed
	   * object. Once attached, the observer converts target
	   * object's property keys into getter/setters that
	   * collect dependencies and dispatches updates.
	   */
	  var Observer = function Observer(value) {
	    this.value = value;
	    this.dep = new Dep();
	    this.vmCount = 0;
	    def(value, '__ob__', this);
	    if (Array.isArray(value)) {
	      var augment = hasProto ? protoAugment : copyAugment;
	      augment(value, arrayMethods, arrayKeys);
	      this.observeArray(value);
	    } else {
	      this.walk(value);
	    }
	  };
	
	  /**
	   * Walk through each property and convert them into
	   * getter/setters. This method should only be called when
	   * value type is Object.
	   */
	  Observer.prototype.walk = function walk(obj) {
	    var keys = Object.keys(obj);
	    for (var i = 0; i < keys.length; i++) {
	      defineReactive$$1(obj, keys[i], obj[keys[i]]);
	    }
	  };
	
	  /**
	   * Observe a list of Array items.
	   */
	  Observer.prototype.observeArray = function observeArray(items) {
	    for (var i = 0, l = items.length; i < l; i++) {
	      observe(items[i]);
	    }
	  };
	
	  // helpers
	
	  /**
	   * Augment an target Object or Array by intercepting
	   * the prototype chain using __proto__
	   */
	  function protoAugment(target, src) {
	    /* eslint-disable no-proto */
	    target.__proto__ = src;
	    /* eslint-enable no-proto */
	  }
	
	  /**
	   * Augment an target Object or Array by defining
	   * hidden properties.
	   */
	  /* istanbul ignore next */
	  function copyAugment(target, src, keys) {
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      def(target, key, src[key]);
	    }
	  }
	
	  /**
	   * Attempt to create an observer instance for a value,
	   * returns the new observer if successfully observed,
	   * or the existing observer if the value already has one.
	   */
	  function observe(value, asRootData) {
	    if (!isObject(value)) {
	      return;
	    }
	    var ob;
	    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	      ob = value.__ob__;
	    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	      ob = new Observer(value);
	    }
	    if (asRootData && ob) {
	      ob.vmCount++;
	    }
	    return ob;
	  }
	
	  /**
	   * Define a reactive property on an Object.
	   */
	  function defineReactive$$1(obj, key, val, customSetter) {
	    var dep = new Dep();
	
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	
	    // cater for pre-defined getter/setters
	    var getter = property && property.get;
	    var setter = property && property.set;
	
	    var childOb = observe(val);
	    Object.defineProperty(obj, key, {
	      enumerable: true,
	      configurable: true,
	      get: function reactiveGetter() {
	        var value = getter ? getter.call(obj) : val;
	        if (Dep.target) {
	          dep.depend();
	          if (childOb) {
	            childOb.dep.depend();
	          }
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	        return value;
	      },
	      set: function reactiveSetter(newVal) {
	        var value = getter ? getter.call(obj) : val;
	        /* eslint-disable no-self-compare */
	        if (newVal === value || newVal !== newVal && value !== value) {
	          return;
	        }
	        /* eslint-enable no-self-compare */
	        if ("development" !== 'production' && customSetter) {
	          customSetter();
	        }
	        if (setter) {
	          setter.call(obj, newVal);
	        } else {
	          val = newVal;
	        }
	        childOb = observe(newVal);
	        dep.notify();
	      }
	    });
	  }
	
	  /**
	   * Set a property on an object. Adds the new property and
	   * triggers change notification if the property doesn't
	   * already exist.
	   */
	  function set$1(obj, key, val) {
	    if (Array.isArray(obj)) {
	      obj.length = Math.max(obj.length, key);
	      obj.splice(key, 1, val);
	      return val;
	    }
	    if (hasOwn(obj, key)) {
	      obj[key] = val;
	      return;
	    }
	    var ob = obj.__ob__;
	    if (obj._isVue || ob && ob.vmCount) {
	      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
	      return;
	    }
	    if (!ob) {
	      obj[key] = val;
	      return;
	    }
	    defineReactive$$1(ob.value, key, val);
	    ob.dep.notify();
	    return val;
	  }
	
	  /**
	   * Delete a property and trigger change if necessary.
	   */
	  function del(obj, key) {
	    var ob = obj.__ob__;
	    if (obj._isVue || ob && ob.vmCount) {
	      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
	      return;
	    }
	    if (!hasOwn(obj, key)) {
	      return;
	    }
	    delete obj[key];
	    if (!ob) {
	      return;
	    }
	    ob.dep.notify();
	  }
	
	  /**
	   * Collect dependencies on array elements when the array is touched, since
	   * we cannot intercept array element access like property getters.
	   */
	  function dependArray(value) {
	    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	      e = value[i];
	      e && e.__ob__ && e.__ob__.dep.depend();
	      if (Array.isArray(e)) {
	        dependArray(e);
	      }
	    }
	  }
	
	  /*  */
	
	  /**
	   * Option overwriting strategies are functions that handle
	   * how to merge a parent option value and a child option
	   * value into the final value.
	   */
	  var strats = config.optionMergeStrategies;
	
	  /**
	   * Options with restrictions
	   */
	  {
	    strats.el = strats.propsData = function (parent, child, vm, key) {
	      if (!vm) {
	        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
	      }
	      return defaultStrat(parent, child);
	    };
	  }
	
	  /**
	   * Helper that recursively merges two data objects together.
	   */
	  function mergeData(to, from) {
	    if (!from) {
	      return to;
	    }
	    var key, toVal, fromVal;
	    var keys = Object.keys(from);
	    for (var i = 0; i < keys.length; i++) {
	      key = keys[i];
	      toVal = to[key];
	      fromVal = from[key];
	      if (!hasOwn(to, key)) {
	        set$1(to, key, fromVal);
	      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	        mergeData(toVal, fromVal);
	      }
	    }
	    return to;
	  }
	
	  /**
	   * Data
	   */
	  strats.data = function (parentVal, childVal, vm) {
	    if (!vm) {
	      // in a Vue.extend merge, both should be functions
	      if (!childVal) {
	        return parentVal;
	      }
	      if (typeof childVal !== 'function') {
	        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	        return parentVal;
	      }
	      if (!parentVal) {
	        return childVal;
	      }
	      // when parentVal & childVal are both present,
	      // we need to return a function that returns the
	      // merged result of both functions... no need to
	      // check if parentVal is a function here because
	      // it has to be a function to pass previous merges.
	      return function mergedDataFn() {
	        return mergeData(childVal.call(this), parentVal.call(this));
	      };
	    } else if (parentVal || childVal) {
	      return function mergedInstanceDataFn() {
	        // instance merge
	        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	        if (instanceData) {
	          return mergeData(instanceData, defaultData);
	        } else {
	          return defaultData;
	        }
	      };
	    }
	  };
	
	  /**
	   * Hooks and param attributes are merged as arrays.
	   */
	  function mergeHook(parentVal, childVal) {
	    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
	  }
	
	  config._lifecycleHooks.forEach(function (hook) {
	    strats[hook] = mergeHook;
	  });
	
	  /**
	   * Assets
	   *
	   * When a vm is present (instance creation), we need to do
	   * a three-way merge between constructor options, instance
	   * options and parent options.
	   */
	  function mergeAssets(parentVal, childVal) {
	    var res = Object.create(parentVal || null);
	    return childVal ? extend(res, childVal) : res;
	  }
	
	  config._assetTypes.forEach(function (type) {
	    strats[type + 's'] = mergeAssets;
	  });
	
	  /**
	   * Watchers.
	   *
	   * Watchers hashes should not overwrite one
	   * another, so we merge them as arrays.
	   */
	  strats.watch = function (parentVal, childVal) {
	    /* istanbul ignore if */
	    if (!childVal) {
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    var ret = {};
	    extend(ret, parentVal);
	    for (var key in childVal) {
	      var parent = ret[key];
	      var child = childVal[key];
	      if (parent && !Array.isArray(parent)) {
	        parent = [parent];
	      }
	      ret[key] = parent ? parent.concat(child) : [child];
	    }
	    return ret;
	  };
	
	  /**
	   * Other object hashes.
	   */
	  strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	    if (!childVal) {
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    var ret = Object.create(null);
	    extend(ret, parentVal);
	    extend(ret, childVal);
	    return ret;
	  };
	
	  /**
	   * Default strategy.
	   */
	  var defaultStrat = function defaultStrat(parentVal, childVal) {
	    return childVal === undefined ? parentVal : childVal;
	  };
	
	  /**
	   * Validate component names
	   */
	  function checkComponents(options) {
	    for (var key in options.components) {
	      var lower = key.toLowerCase();
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	      }
	    }
	  }
	
	  /**
	   * Ensure all props option syntax are normalized into the
	   * Object-based format.
	   */
	  function normalizeProps(options) {
	    var props = options.props;
	    if (!props) {
	      return;
	    }
	    var res = {};
	    var i, val, name;
	    if (Array.isArray(props)) {
	      i = props.length;
	      while (i--) {
	        val = props[i];
	        if (typeof val === 'string') {
	          name = camelize(val);
	          res[name] = { type: null };
	        } else {
	          warn('props must be strings when using array syntax.');
	        }
	      }
	    } else if (isPlainObject(props)) {
	      for (var key in props) {
	        val = props[key];
	        name = camelize(key);
	        res[name] = isPlainObject(val) ? val : { type: val };
	      }
	    }
	    options.props = res;
	  }
	
	  /**
	   * Normalize raw function directives into object format.
	   */
	  function normalizeDirectives(options) {
	    var dirs = options.directives;
	    if (dirs) {
	      for (var key in dirs) {
	        var def = dirs[key];
	        if (typeof def === 'function') {
	          dirs[key] = { bind: def, update: def };
	        }
	      }
	    }
	  }
	
	  /**
	   * Merge two option objects into a new one.
	   * Core utility used in both instantiation and inheritance.
	   */
	  function mergeOptions(parent, child, vm) {
	    {
	      checkComponents(child);
	    }
	    normalizeProps(child);
	    normalizeDirectives(child);
	    var extendsFrom = child.extends;
	    if (extendsFrom) {
	      parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
	    }
	    if (child.mixins) {
	      for (var i = 0, l = child.mixins.length; i < l; i++) {
	        var mixin = child.mixins[i];
	        if (mixin.prototype instanceof Vue$3) {
	          mixin = mixin.options;
	        }
	        parent = mergeOptions(parent, mixin, vm);
	      }
	    }
	    var options = {};
	    var key;
	    for (key in parent) {
	      mergeField(key);
	    }
	    for (key in child) {
	      if (!hasOwn(parent, key)) {
	        mergeField(key);
	      }
	    }
	    function mergeField(key) {
	      var strat = strats[key] || defaultStrat;
	      options[key] = strat(parent[key], child[key], vm, key);
	    }
	    return options;
	  }
	
	  /**
	   * Resolve an asset.
	   * This function is used because child instances need access
	   * to assets defined in its ancestor chain.
	   */
	  function resolveAsset(options, type, id, warnMissing) {
	    /* istanbul ignore if */
	    if (typeof id !== 'string') {
	      return;
	    }
	    var assets = options[type];
	    // check local registration variations first
	    if (hasOwn(assets, id)) {
	      return assets[id];
	    }
	    var camelizedId = camelize(id);
	    if (hasOwn(assets, camelizedId)) {
	      return assets[camelizedId];
	    }
	    var PascalCaseId = capitalize(camelizedId);
	    if (hasOwn(assets, PascalCaseId)) {
	      return assets[PascalCaseId];
	    }
	    // fallback to prototype chain
	    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	    if ("development" !== 'production' && warnMissing && !res) {
	      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	    }
	    return res;
	  }
	
	  /*  */
	
	  function validateProp(key, propOptions, propsData, vm) {
	    var prop = propOptions[key];
	    var absent = !hasOwn(propsData, key);
	    var value = propsData[key];
	    // handle boolean props
	    if (isType(Boolean, prop.type)) {
	      if (absent && !hasOwn(prop, 'default')) {
	        value = false;
	      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	        value = true;
	      }
	    }
	    // check default value
	    if (value === undefined) {
	      value = getPropDefaultValue(vm, prop, key);
	      // since the default value is a fresh copy,
	      // make sure to observe it.
	      var prevShouldConvert = observerState.shouldConvert;
	      observerState.shouldConvert = true;
	      observe(value);
	      observerState.shouldConvert = prevShouldConvert;
	    }
	    {
	      assertProp(prop, key, value, vm, absent);
	    }
	    return value;
	  }
	
	  /**
	   * Get the default value of a prop.
	   */
	  function getPropDefaultValue(vm, prop, key) {
	    // no default, return undefined
	    if (!hasOwn(prop, 'default')) {
	      return undefined;
	    }
	    var def = prop.default;
	    // warn against non-factory defaults for Object & Array
	    if (isObject(def)) {
	      "development" !== 'production' && warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	    }
	    // the raw prop value was also undefined from previous render,
	    // return previous default value to avoid unnecessary watcher trigger
	    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm[key] !== undefined) {
	      return vm[key];
	    }
	    // call factory function for non-Function types
	    return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
	  }
	
	  /**
	   * Assert whether a prop is valid.
	   */
	  function assertProp(prop, name, value, vm, absent) {
	    if (prop.required && absent) {
	      warn('Missing required prop: "' + name + '"', vm);
	      return;
	    }
	    if (value == null && !prop.required) {
	      return;
	    }
	    var type = prop.type;
	    var valid = !type || type === true;
	    var expectedTypes = [];
	    if (type) {
	      if (!Array.isArray(type)) {
	        type = [type];
	      }
	      for (var i = 0; i < type.length && !valid; i++) {
	        var assertedType = assertType(value, type[i]);
	        expectedTypes.push(assertedType.expectedType || '');
	        valid = assertedType.valid;
	      }
	    }
	    if (!valid) {
	      warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
	      return;
	    }
	    var validator = prop.validator;
	    if (validator) {
	      if (!validator(value)) {
	        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
	      }
	    }
	  }
	
	  /**
	   * Assert the type of a value
	   */
	  function assertType(value, type) {
	    var valid;
	    var expectedType = getType(type);
	    if (expectedType === 'String') {
	      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
	    } else if (expectedType === 'Number') {
	      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
	    } else if (expectedType === 'Boolean') {
	      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
	    } else if (expectedType === 'Function') {
	      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
	    } else if (expectedType === 'Object') {
	      valid = isPlainObject(value);
	    } else if (expectedType === 'Array') {
	      valid = Array.isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	    return {
	      valid: valid,
	      expectedType: expectedType
	    };
	  }
	
	  /**
	   * Use function string name to check built-in types,
	   * because a simple equality check will fail when running
	   * across different vms / iframes.
	   */
	  function getType(fn) {
	    var match = fn && fn.toString().match(/^\s*function (\w+)/);
	    return match && match[1];
	  }
	
	  function isType(type, fn) {
	    if (!Array.isArray(fn)) {
	      return getType(fn) === getType(type);
	    }
	    for (var i = 0, len = fn.length; i < len; i++) {
	      if (getType(fn[i]) === getType(type)) {
	        return true;
	      }
	    }
	    /* istanbul ignore next */
	    return false;
	  }
	
	  var util = Object.freeze({
	    defineReactive: defineReactive$$1,
	    _toString: _toString,
	    toNumber: toNumber,
	    makeMap: makeMap,
	    isBuiltInTag: isBuiltInTag,
	    remove: remove$1,
	    hasOwn: hasOwn,
	    isPrimitive: isPrimitive,
	    cached: cached,
	    camelize: camelize,
	    capitalize: capitalize,
	    hyphenate: hyphenate,
	    bind: bind$1,
	    toArray: toArray,
	    extend: extend,
	    isObject: isObject,
	    isPlainObject: isPlainObject,
	    toObject: toObject,
	    noop: noop,
	    no: no,
	    identity: identity,
	    genStaticKeys: genStaticKeys,
	    looseEqual: looseEqual,
	    looseIndexOf: looseIndexOf,
	    isReserved: isReserved,
	    def: def,
	    parsePath: parsePath,
	    hasProto: hasProto,
	    inBrowser: inBrowser,
	    UA: UA,
	    isIE: isIE,
	    isIE9: isIE9,
	    isEdge: isEdge,
	    isAndroid: isAndroid,
	    isIOS: isIOS,
	    isServerRendering: isServerRendering,
	    devtools: devtools,
	    nextTick: nextTick,
	    get _Set() {
	      return _Set;
	    },
	    mergeOptions: mergeOptions,
	    resolveAsset: resolveAsset,
	    get warn() {
	      return warn;
	    },
	    get formatComponentName() {
	      return formatComponentName;
	    },
	    validateProp: validateProp
	  });
	
	  /* not type checking this file because flow doesn't play well with Proxy */
	
	  var initProxy;
	
	  {
	    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
	    );
	
	    var warnNonPresent = function warnNonPresent(target, key) {
	      warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
	    };
	
	    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);
	
	    if (hasProxy) {
	      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	      config.keyCodes = new Proxy(config.keyCodes, {
	        set: function set(target, key, value) {
	          if (isBuiltInModifier(key)) {
	            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
	            return false;
	          } else {
	            target[key] = value;
	            return true;
	          }
	        }
	      });
	    }
	
	    var hasHandler = {
	      has: function has(target, key) {
	        var has = key in target;
	        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	        if (!has && !isAllowed) {
	          warnNonPresent(target, key);
	        }
	        return has || !isAllowed;
	      }
	    };
	
	    var getHandler = {
	      get: function get(target, key) {
	        if (typeof key === 'string' && !(key in target)) {
	          warnNonPresent(target, key);
	        }
	        return target[key];
	      }
	    };
	
	    initProxy = function initProxy(vm) {
	      if (hasProxy) {
	        // determine which proxy handler to use
	        var options = vm.$options;
	        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
	        vm._renderProxy = new Proxy(vm, handlers);
	      } else {
	        vm._renderProxy = vm;
	      }
	    };
	  }
	
	  /*  */
	
	  var queue = [];
	  var has$1 = {};
	  var circular = {};
	  var waiting = false;
	  var flushing = false;
	  var index = 0;
	
	  /**
	   * Reset the scheduler's state.
	   */
	  function resetSchedulerState() {
	    queue.length = 0;
	    has$1 = {};
	    {
	      circular = {};
	    }
	    waiting = flushing = false;
	  }
	
	  /**
	   * Flush both queues and run the watchers.
	   */
	  function flushSchedulerQueue() {
	    flushing = true;
	
	    // Sort queue before flush.
	    // This ensures that:
	    // 1. Components are updated from parent to child. (because parent is always
	    //    created before the child)
	    // 2. A component's user watchers are run before its render watcher (because
	    //    user watchers are created before the render watcher)
	    // 3. If a component is destroyed during a parent component's watcher run,
	    //    its watchers can be skipped.
	    queue.sort(function (a, b) {
	      return a.id - b.id;
	    });
	
	    // do not cache length because more watchers might be pushed
	    // as we run existing watchers
	    for (index = 0; index < queue.length; index++) {
	      var watcher = queue[index];
	      var id = watcher.id;
	      has$1[id] = null;
	      watcher.run();
	      // in dev build, check and stop circular updates.
	      if ("development" !== 'production' && has$1[id] != null) {
	        circular[id] = (circular[id] || 0) + 1;
	        if (circular[id] > config._maxUpdateCount) {
	          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
	          break;
	        }
	      }
	    }
	
	    // devtool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	
	    resetSchedulerState();
	  }
	
	  /**
	   * Push a watcher into the watcher queue.
	   * Jobs with duplicate IDs will be skipped unless it's
	   * pushed when the queue is being flushed.
	   */
	  function queueWatcher(watcher) {
	    var id = watcher.id;
	    if (has$1[id] == null) {
	      has$1[id] = true;
	      if (!flushing) {
	        queue.push(watcher);
	      } else {
	        // if already flushing, splice the watcher based on its id
	        // if already past its id, it will be run next immediately.
	        var i = queue.length - 1;
	        while (i >= 0 && queue[i].id > watcher.id) {
	          i--;
	        }
	        queue.splice(Math.max(i, index) + 1, 0, watcher);
	      }
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushSchedulerQueue);
	      }
	    }
	  }
	
	  /*  */
	
	  var uid$2 = 0;
	
	  /**
	   * A watcher parses an expression, collects dependencies,
	   * and fires callback when the expression value changes.
	   * This is used for both the $watch() api and directives.
	   */
	  var Watcher = function Watcher(vm, expOrFn, cb, options) {
	    this.vm = vm;
	    vm._watchers.push(this);
	    // options
	    if (options) {
	      this.deep = !!options.deep;
	      this.user = !!options.user;
	      this.lazy = !!options.lazy;
	      this.sync = !!options.sync;
	    } else {
	      this.deep = this.user = this.lazy = this.sync = false;
	    }
	    this.cb = cb;
	    this.id = ++uid$2; // uid for batching
	    this.active = true;
	    this.dirty = this.lazy; // for lazy watchers
	    this.deps = [];
	    this.newDeps = [];
	    this.depIds = new _Set();
	    this.newDepIds = new _Set();
	    this.expression = expOrFn.toString();
	    // parse expression for getter
	    if (typeof expOrFn === 'function') {
	      this.getter = expOrFn;
	    } else {
	      this.getter = parsePath(expOrFn);
	      if (!this.getter) {
	        this.getter = function () {};
	        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	      }
	    }
	    this.value = this.lazy ? undefined : this.get();
	  };
	
	  /**
	   * Evaluate the getter, and re-collect dependencies.
	   */
	  Watcher.prototype.get = function get() {
	    pushTarget(this);
	    var value = this.getter.call(this.vm, this.vm);
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	    return value;
	  };
	
	  /**
	   * Add a dependency to this directive.
	   */
	  Watcher.prototype.addDep = function addDep(dep) {
	    var id = dep.id;
	    if (!this.newDepIds.has(id)) {
	      this.newDepIds.add(id);
	      this.newDeps.push(dep);
	      if (!this.depIds.has(id)) {
	        dep.addSub(this);
	      }
	    }
	  };
	
	  /**
	   * Clean up for dependency collection.
	   */
	  Watcher.prototype.cleanupDeps = function cleanupDeps() {
	    var this$1 = this;
	
	    var i = this.deps.length;
	    while (i--) {
	      var dep = this$1.deps[i];
	      if (!this$1.newDepIds.has(dep.id)) {
	        dep.removeSub(this$1);
	      }
	    }
	    var tmp = this.depIds;
	    this.depIds = this.newDepIds;
	    this.newDepIds = tmp;
	    this.newDepIds.clear();
	    tmp = this.deps;
	    this.deps = this.newDeps;
	    this.newDeps = tmp;
	    this.newDeps.length = 0;
	  };
	
	  /**
	   * Subscriber interface.
	   * Will be called when a dependency changes.
	   */
	  Watcher.prototype.update = function update() {
	    /* istanbul ignore else */
	    if (this.lazy) {
	      this.dirty = true;
	    } else if (this.sync) {
	      this.run();
	    } else {
	      queueWatcher(this);
	    }
	  };
	
	  /**
	   * Scheduler job interface.
	   * Will be called by the scheduler.
	   */
	  Watcher.prototype.run = function run() {
	    if (this.active) {
	      var value = this.get();
	      if (value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) || this.deep) {
	        // set new value
	        var oldValue = this.value;
	        this.value = value;
	        if (this.user) {
	          try {
	            this.cb.call(this.vm, value, oldValue);
	          } catch (e) {
	            /* istanbul ignore else */
	            if (config.errorHandler) {
	              config.errorHandler.call(null, e, this.vm);
	            } else {
	              "development" !== 'production' && warn("Error in watcher \"" + this.expression + "\"", this.vm);
	              throw e;
	            }
	          }
	        } else {
	          this.cb.call(this.vm, value, oldValue);
	        }
	      }
	    }
	  };
	
	  /**
	   * Evaluate the value of the watcher.
	   * This only gets called for lazy watchers.
	   */
	  Watcher.prototype.evaluate = function evaluate() {
	    this.value = this.get();
	    this.dirty = false;
	  };
	
	  /**
	   * Depend on all deps collected by this watcher.
	   */
	  Watcher.prototype.depend = function depend() {
	    var this$1 = this;
	
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].depend();
	    }
	  };
	
	  /**
	   * Remove self from all dependencies' subscriber list.
	   */
	  Watcher.prototype.teardown = function teardown() {
	    var this$1 = this;
	
	    if (this.active) {
	      // remove self from vm's watcher list
	      // this is a somewhat expensive operation so we skip it
	      // if the vm is being destroyed.
	      if (!this.vm._isBeingDestroyed) {
	        remove$1(this.vm._watchers, this);
	      }
	      var i = this.deps.length;
	      while (i--) {
	        this$1.deps[i].removeSub(this$1);
	      }
	      this.active = false;
	    }
	  };
	
	  /**
	   * Recursively traverse an object to evoke all converted
	   * getters, so that every nested property inside the object
	   * is collected as a "deep" dependency.
	   */
	  var seenObjects = new _Set();
	  function traverse(val) {
	    seenObjects.clear();
	    _traverse(val, seenObjects);
	  }
	
	  function _traverse(val, seen) {
	    var i, keys;
	    var isA = Array.isArray(val);
	    if (!isA && !isObject(val) || !Object.isExtensible(val)) {
	      return;
	    }
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      }
	      seen.add(depId);
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        _traverse(val[i], seen);
	      }
	    } else {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        _traverse(val[keys[i]], seen);
	      }
	    }
	  }
	
	  /*  */
	
	  function initState(vm) {
	    vm._watchers = [];
	    var opts = vm.$options;
	    if (opts.props) {
	      initProps(vm, opts.props);
	    }
	    if (opts.methods) {
	      initMethods(vm, opts.methods);
	    }
	    if (opts.data) {
	      initData(vm);
	    } else {
	      observe(vm._data = {}, true /* asRootData */);
	    }
	    if (opts.computed) {
	      initComputed(vm, opts.computed);
	    }
	    if (opts.watch) {
	      initWatch(vm, opts.watch);
	    }
	  }
	
	  var isReservedProp = { key: 1, ref: 1, slot: 1 };
	
	  function initProps(vm, props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function loop(i) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        if (isReservedProp[key]) {
	          warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
	        }
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
	          }
	        });
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) {
	      loop(i);
	    }observerState.shouldConvert = true;
	  }
	
	  function initData(vm) {
	    var data = vm.$options.data;
	    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
	    if (!isPlainObject(data)) {
	      data = {};
	      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
	    }
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var props = vm.$options.props;
	    var i = keys.length;
	    while (i--) {
	      if (props && hasOwn(props, keys[i])) {
	        "development" !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
	      } else {
	        proxy(vm, keys[i]);
	      }
	    }
	    // observe data
	    observe(data, true /* asRootData */);
	  }
	
	  var computedSharedDefinition = {
	    enumerable: true,
	    configurable: true,
	    get: noop,
	    set: noop
	  };
	
	  function initComputed(vm, computed) {
	    for (var key in computed) {
	      /* istanbul ignore if */
	      if ("development" !== 'production' && key in vm) {
	        warn("existing instance property \"" + key + "\" will be " + "overwritten by a computed property with the same name.", vm);
	      }
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind$1(userDef.get, vm) : noop;
	        computedSharedDefinition.set = userDef.set ? bind$1(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, noop, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  function initMethods(vm, methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if ("development" !== 'production' && methods[key] == null) {
	        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
	      }
	    }
	  }
	
	  function initWatch(vm, watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	
	  function createWatcher(vm, key, handler) {
	    var options;
	    if (isPlainObject(handler)) {
	      options = handler;
	      handler = handler.handler;
	    }
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	    }
	    vm.$watch(key, handler, options);
	  }
	
	  function stateMixin(Vue) {
	    // flow somehow has problems with directly declared definition object
	    // when using Object.defineProperty, so we have to procedurally build up
	    // the object here.
	    var dataDef = {};
	    dataDef.get = function () {
	      return this._data;
	    };
	    {
	      dataDef.set = function (newData) {
	        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
	      };
	    }
	    Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	    Vue.prototype.$set = set$1;
	    Vue.prototype.$delete = del;
	
	    Vue.prototype.$watch = function (expOrFn, cb, options) {
	      var vm = this;
	      options = options || {};
	      options.user = true;
	      var watcher = new Watcher(vm, expOrFn, cb, options);
	      if (options.immediate) {
	        cb.call(vm, watcher.value);
	      }
	      return function unwatchFn() {
	        watcher.teardown();
	      };
	    };
	  }
	
	  function proxy(vm, key) {
	    if (!isReserved(key)) {
	      Object.defineProperty(vm, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return vm._data[key];
	        },
	        set: function proxySetter(val) {
	          vm._data[key] = val;
	        }
	      });
	    }
	  }
	
	  /*  */
	
	  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
	    this.tag = tag;
	    this.data = data;
	    this.children = children;
	    this.text = text;
	    this.elm = elm;
	    this.ns = undefined;
	    this.context = context;
	    this.functionalContext = undefined;
	    this.key = data && data.key;
	    this.componentOptions = componentOptions;
	    this.child = undefined;
	    this.parent = undefined;
	    this.raw = false;
	    this.isStatic = false;
	    this.isRootInsert = true;
	    this.isComment = false;
	    this.isCloned = false;
	    this.isOnce = false;
	  };
	
	  var createEmptyVNode = function createEmptyVNode() {
	    var node = new VNode();
	    node.text = '';
	    node.isComment = true;
	    return node;
	  };
	
	  function createTextVNode(val) {
	    return new VNode(undefined, undefined, undefined, String(val));
	  }
	
	  // optimized shallow clone
	  // used for static nodes and slot nodes because they may be reused across
	  // multiple renders, cloning them avoids errors when DOM manipulations rely
	  // on their elm reference.
	  function cloneVNode(vnode) {
	    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
	    cloned.ns = vnode.ns;
	    cloned.isStatic = vnode.isStatic;
	    cloned.key = vnode.key;
	    cloned.isCloned = true;
	    return cloned;
	  }
	
	  function cloneVNodes(vnodes) {
	    var res = new Array(vnodes.length);
	    for (var i = 0; i < vnodes.length; i++) {
	      res[i] = cloneVNode(vnodes[i]);
	    }
	    return res;
	  }
	
	  /*  */
	
	  function mergeVNodeHook(def, hookKey, hook, key) {
	    key = key + hookKey;
	    var injectedHash = def.__injected || (def.__injected = {});
	    if (!injectedHash[key]) {
	      injectedHash[key] = true;
	      var oldHook = def[hookKey];
	      if (oldHook) {
	        def[hookKey] = function () {
	          oldHook.apply(this, arguments);
	          hook.apply(this, arguments);
	        };
	      } else {
	        def[hookKey] = hook;
	      }
	    }
	  }
	
	  /*  */
	
	  function updateListeners(on, oldOn, add, remove$$1, vm) {
	    var name, cur, old, fn, event, capture, once;
	    for (name in on) {
	      cur = on[name];
	      old = oldOn[name];
	      if (!cur) {
	        "development" !== 'production' && warn("Invalid handler for event \"" + name + "\": got " + String(cur), vm);
	      } else if (!old) {
	        once = name.charAt(0) === '~'; // Prefixed last, checked first
	        event = once ? name.slice(1) : name;
	        capture = event.charAt(0) === '!';
	        event = capture ? event.slice(1) : event;
	        if (Array.isArray(cur)) {
	          add(event, cur.invoker = arrInvoker(cur), once, capture);
	        } else {
	          if (!cur.invoker) {
	            fn = cur;
	            cur = on[name] = {};
	            cur.fn = fn;
	            cur.invoker = fnInvoker(cur);
	          }
	          add(event, cur.invoker, once, capture);
	        }
	      } else if (cur !== old) {
	        if (Array.isArray(old)) {
	          old.length = cur.length;
	          for (var i = 0; i < old.length; i++) {
	            old[i] = cur[i];
	          }
	          on[name] = old;
	        } else {
	          old.fn = cur;
	          on[name] = old;
	        }
	      }
	    }
	    for (name in oldOn) {
	      if (!on[name]) {
	        once = name.charAt(0) === '~'; // Prefixed last, checked first
	        event = once ? name.slice(1) : name;
	        capture = event.charAt(0) === '!';
	        event = capture ? event.slice(1) : event;
	        remove$$1(event, oldOn[name].invoker, capture);
	      }
	    }
	  }
	
	  function arrInvoker(arr) {
	    return function (ev) {
	      var arguments$1 = arguments;
	
	      var single = arguments.length === 1;
	      for (var i = 0; i < arr.length; i++) {
	        single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	      }
	    };
	  }
	
	  function fnInvoker(o) {
	    return function (ev) {
	      var single = arguments.length === 1;
	      single ? o.fn(ev) : o.fn.apply(null, arguments);
	    };
	  }
	
	  /*  */
	
	  // The template compiler attempts to minimize the need for normalization by
	  // statically analyzing the template at compile time.
	  //
	  // For plain HTML markup, normalization can be completely skipped because the
	  // generated render function is guaranteed to return Array<VNode>. There are
	  // two cases where extra normalization is needed:
	
	  // 1. When the children contains components - because a functional component
	  // may return an Array instead of a single root. In this case, just a simple
	  // nomralization is needed - if any child is an Array, we flatten the whole
	  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	  // because functional components already normalize their own children.
	  function simpleNormalizeChildren(children) {
	    for (var i = 0; i < children.length; i++) {
	      if (Array.isArray(children[i])) {
	        return Array.prototype.concat.apply([], children);
	      }
	    }
	    return children;
	  }
	
	  // 2. When the children contains constrcuts that always generated nested Arrays,
	  // e.g. <template>, <slot>, v-for, or when the children is provided by user
	  // with hand-written render functions / JSX. In such cases a full normalization
	  // is needed to cater to all possible types of children values.
	  function normalizeChildren(children) {
	    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
	  }
	
	  function normalizeArrayChildren(children, nestedIndex) {
	    var res = [];
	    var i, c, last;
	    for (i = 0; i < children.length; i++) {
	      c = children[i];
	      if (c == null || typeof c === 'boolean') {
	        continue;
	      }
	      last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else {
	        if (c.text && last && last.text) {
	          res[res.length - 1] = createTextVNode(last.text + c.text);
	        } else {
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res;
	  }
	
	  /*  */
	
	  function getFirstComponentChild(children) {
	    return children && children.filter(function (c) {
	      return c && c.componentOptions;
	    })[0];
	  }
	
	  /*  */
	
	  function initEvents(vm) {
	    vm._events = Object.create(null);
	    vm._hasHookEvent = false;
	    // init parent attached events
	    var listeners = vm.$options._parentListeners;
	    if (listeners) {
	      updateComponentListeners(vm, listeners);
	    }
	  }
	
	  var target;
	
	  function add$1(event, fn, once) {
	    if (once) {
	      target.$once(event, fn);
	    } else {
	      target.$on(event, fn);
	    }
	  }
	
	  function remove$2(event, fn) {
	    target.$off(event, fn);
	  }
	
	  function updateComponentListeners(vm, listeners, oldListeners) {
	    target = vm;
	    updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	  }
	
	  function eventsMixin(Vue) {
	    var hookRE = /^hook:/;
	    Vue.prototype.$on = function (event, fn) {
	      var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	      return vm;
	    };
	
	    Vue.prototype.$once = function (event, fn) {
	      var vm = this;
	      function on() {
	        vm.$off(event, on);
	        fn.apply(vm, arguments);
	      }
	      on.fn = fn;
	      vm.$on(event, on);
	      return vm;
	    };
	
	    Vue.prototype.$off = function (event, fn) {
	      var vm = this;
	      // all
	      if (!arguments.length) {
	        vm._events = Object.create(null);
	        return vm;
	      }
	      // specific event
	      var cbs = vm._events[event];
	      if (!cbs) {
	        return vm;
	      }
	      if (arguments.length === 1) {
	        vm._events[event] = null;
	        return vm;
	      }
	      // specific handler
	      var cb;
	      var i = cbs.length;
	      while (i--) {
	        cb = cbs[i];
	        if (cb === fn || cb.fn === fn) {
	          cbs.splice(i, 1);
	          break;
	        }
	      }
	      return vm;
	    };
	
	    Vue.prototype.$emit = function (event) {
	      var vm = this;
	      var cbs = vm._events[event];
	      if (cbs) {
	        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	        var args = toArray(arguments, 1);
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i].apply(vm, args);
	        }
	      }
	      return vm;
	    };
	  }
	
	  /*  */
	
	  var activeInstance = null;
	
	  function initLifecycle(vm) {
	    var options = vm.$options;
	
	    // locate first non-abstract parent
	    var parent = options.parent;
	    if (parent && !options.abstract) {
	      while (parent.$options.abstract && parent.$parent) {
	        parent = parent.$parent;
	      }
	      parent.$children.push(vm);
	    }
	
	    vm.$parent = parent;
	    vm.$root = parent ? parent.$root : vm;
	
	    vm.$children = [];
	    vm.$refs = {};
	
	    vm._watcher = null;
	    vm._inactive = false;
	    vm._isMounted = false;
	    vm._isDestroyed = false;
	    vm._isBeingDestroyed = false;
	  }
	
	  function lifecycleMixin(Vue) {
	    Vue.prototype._mount = function (el, hydrating) {
	      var vm = this;
	      vm.$el = el;
	      if (!vm.$options.render) {
	        vm.$options.render = createEmptyVNode;
	        {
	          /* istanbul ignore if */
	          if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	            warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
	          } else {
	            warn('Failed to mount component: template or render function not defined.', vm);
	          }
	        }
	      }
	      callHook(vm, 'beforeMount');
	      vm._watcher = new Watcher(vm, function () {
	        vm._update(vm._render(), hydrating);
	      }, noop);
	      hydrating = false;
	      // manually mounted instance, call mounted on self
	      // mounted is called for render-created child components in its inserted hook
	      if (vm.$vnode == null) {
	        vm._isMounted = true;
	        callHook(vm, 'mounted');
	      }
	      return vm;
	    };
	
	    Vue.prototype._update = function (vnode, hydrating) {
	      var vm = this;
	      if (vm._isMounted) {
	        callHook(vm, 'beforeUpdate');
	      }
	      var prevEl = vm.$el;
	      var prevVnode = vm._vnode;
	      var prevActiveInstance = activeInstance;
	      activeInstance = vm;
	      vm._vnode = vnode;
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      if (!prevVnode) {
	        // initial render
	        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
	        , vm.$options._parentElm, vm.$options._refElm);
	      } else {
	        // updates
	        vm.$el = vm.__patch__(prevVnode, vnode);
	      }
	      activeInstance = prevActiveInstance;
	      // update __vue__ reference
	      if (prevEl) {
	        prevEl.__vue__ = null;
	      }
	      if (vm.$el) {
	        vm.$el.__vue__ = vm;
	      }
	      // if parent is an HOC, update its $el as well
	      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	        vm.$parent.$el = vm.$el;
	      }
	      if (vm._isMounted) {
	        callHook(vm, 'updated');
	      }
	    };
	
	    Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
	      var vm = this;
	      var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	      vm.$options._parentVnode = parentVnode;
	      vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	      if (vm._vnode) {
	        // update child tree's parent
	        vm._vnode.parent = parentVnode;
	      }
	      vm.$options._renderChildren = renderChildren;
	      // update props
	      if (propsData && vm.$options.props) {
	        observerState.shouldConvert = false;
	        {
	          observerState.isSettingProps = true;
	        }
	        var propKeys = vm.$options._propKeys || [];
	        for (var i = 0; i < propKeys.length; i++) {
	          var key = propKeys[i];
	          vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	        }
	        observerState.shouldConvert = true;
	        {
	          observerState.isSettingProps = false;
	        }
	        vm.$options.propsData = propsData;
	      }
	      // update listeners
	      if (listeners) {
	        var oldListeners = vm.$options._parentListeners;
	        vm.$options._parentListeners = listeners;
	        updateComponentListeners(vm, listeners, oldListeners);
	      }
	      // resolve slots + force update if has children
	      if (hasChildren) {
	        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	        vm.$forceUpdate();
	      }
	    };
	
	    Vue.prototype.$forceUpdate = function () {
	      var vm = this;
	      if (vm._watcher) {
	        vm._watcher.update();
	      }
	    };
	
	    Vue.prototype.$destroy = function () {
	      var vm = this;
	      if (vm._isBeingDestroyed) {
	        return;
	      }
	      callHook(vm, 'beforeDestroy');
	      vm._isBeingDestroyed = true;
	      // remove self from parent
	      var parent = vm.$parent;
	      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	        remove$1(parent.$children, vm);
	      }
	      // teardown watchers
	      if (vm._watcher) {
	        vm._watcher.teardown();
	      }
	      var i = vm._watchers.length;
	      while (i--) {
	        vm._watchers[i].teardown();
	      }
	      // remove reference from data ob
	      // frozen object may not have observer.
	      if (vm._data.__ob__) {
	        vm._data.__ob__.vmCount--;
	      }
	      // call the last hook...
	      vm._isDestroyed = true;
	      callHook(vm, 'destroyed');
	      // turn off all instance listeners.
	      vm.$off();
	      // remove __vue__ reference
	      if (vm.$el) {
	        vm.$el.__vue__ = null;
	      }
	      // invoke destroy hooks on current rendered tree
	      vm.__patch__(vm._vnode, null);
	    };
	  }
	
	  function callHook(vm, hook) {
	    var handlers = vm.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(vm);
	      }
	    }
	    if (vm._hasHookEvent) {
	      vm.$emit('hook:' + hook);
	    }
	  }
	
	  /*  */
	
	  var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	  var hooksToMerge = Object.keys(hooks);
	
	  function createComponent(Ctor, data, context, children, tag) {
	    if (!Ctor) {
	      return;
	    }
	
	    var baseCtor = context.$options._base;
	    if (isObject(Ctor)) {
	      Ctor = baseCtor.extend(Ctor);
	    }
	
	    if (typeof Ctor !== 'function') {
	      {
	        warn("Invalid Component definition: " + String(Ctor), context);
	      }
	      return;
	    }
	
	    // async component
	    if (!Ctor.cid) {
	      if (Ctor.resolved) {
	        Ctor = Ctor.resolved;
	      } else {
	        Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	          // it's ok to queue this on every render because
	          // $forceUpdate is buffered by the scheduler.
	          context.$forceUpdate();
	        });
	        if (!Ctor) {
	          // return nothing if this is indeed an async component
	          // wait for the callback to trigger parent update.
	          return;
	        }
	      }
	    }
	
	    // resolve constructor options in case global mixins are applied after
	    // component constructor creation
	    resolveConstructorOptions(Ctor);
	
	    data = data || {};
	
	    // extract props
	    var propsData = extractProps(data, Ctor);
	
	    // functional component
	    if (Ctor.options.functional) {
	      return createFunctionalComponent(Ctor, propsData, data, context, children);
	    }
	
	    // extract listeners, since these needs to be treated as
	    // child component listeners instead of DOM listeners
	    var listeners = data.on;
	    // replace with listeners with .native modifier
	    data.on = data.nativeOn;
	
	    if (Ctor.options.abstract) {
	      // abstract components do not keep anything
	      // other than props & listeners
	      data = {};
	    }
	
	    // merge component management hooks onto the placeholder node
	    mergeHooks(data);
	
	    // return a placeholder vnode
	    var name = Ctor.options.name || tag;
	    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
	    return vnode;
	  }
	
	  function createFunctionalComponent(Ctor, propsData, data, context, children) {
	    var props = {};
	    var propOptions = Ctor.options.props;
	    if (propOptions) {
	      for (var key in propOptions) {
	        props[key] = validateProp(key, propOptions, propsData);
	      }
	    }
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    var _context = Object.create(context);
	    var h = function h(a, b, c, d) {
	      return createElement(_context, a, b, c, d, true);
	    };
	    var vnode = Ctor.options.render.call(null, h, {
	      props: props,
	      data: data,
	      parent: context,
	      children: children,
	      slots: function slots() {
	        return resolveSlots(children, context);
	      }
	    });
	    if (vnode instanceof VNode) {
	      vnode.functionalContext = context;
	      if (data.slot) {
	        (vnode.data || (vnode.data = {})).slot = data.slot;
	      }
	    }
	    return vnode;
	  }
	
	  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm, refElm) {
	    var vnodeComponentOptions = vnode.componentOptions;
	    var options = {
	      _isComponent: true,
	      parent: parent,
	      propsData: vnodeComponentOptions.propsData,
	      _componentTag: vnodeComponentOptions.tag,
	      _parentVnode: vnode,
	      _parentListeners: vnodeComponentOptions.listeners,
	      _renderChildren: vnodeComponentOptions.children,
	      _parentElm: parentElm || null,
	      _refElm: refElm || null
	    };
	    // check inline-template render functions
	    var inlineTemplate = vnode.data.inlineTemplate;
	    if (inlineTemplate) {
	      options.render = inlineTemplate.render;
	      options.staticRenderFns = inlineTemplate.staticRenderFns;
	    }
	    return new vnodeComponentOptions.Ctor(options);
	  }
	
	  function init(vnode, hydrating, parentElm, refElm) {
	    if (!vnode.child || vnode.child._isDestroyed) {
	      var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    } else if (vnode.data.keepAlive) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      prepatch(mountedNode, mountedNode);
	    }
	  }
	
	  function prepatch(oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.child = oldVnode.child;
	    child._updateFromParent(options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	    );
	  }
	
	  function insert(vnode) {
	    if (!vnode.child._isMounted) {
	      vnode.child._isMounted = true;
	      callHook(vnode.child, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      vnode.child._inactive = false;
	      callHook(vnode.child, 'activated');
	    }
	  }
	
	  function destroy$1(vnode) {
	    if (!vnode.child._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        vnode.child.$destroy();
	      } else {
	        vnode.child._inactive = true;
	        callHook(vnode.child, 'deactivated');
	      }
	    }
	  }
	
	  function resolveAsyncComponent(factory, baseCtor, cb) {
	    if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb);
	    } else {
	      factory.requested = true;
	      var cbs = factory.pendingCallbacks = [cb];
	      var sync = true;
	
	      var resolve = function resolve(res) {
	        if (isObject(res)) {
	          res = baseCtor.extend(res);
	        }
	        // cache resolved
	        factory.resolved = res;
	        // invoke callbacks only if this is not a synchronous resolve
	        // (async resolves are shimmed as synchronous during SSR)
	        if (!sync) {
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }
	      };
	
	      var reject = function reject(reason) {
	        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
	      };
	
	      var res = factory(resolve, reject);
	
	      // handle promise
	      if (res && typeof res.then === 'function' && !factory.resolved) {
	        res.then(resolve, reject);
	      }
	
	      sync = false;
	      // return in case resolved synchronously
	      return factory.resolved;
	    }
	  }
	
	  function extractProps(data, Ctor) {
	    // we are only extracting raw values here.
	    // validation and default values are handled in the child
	    // component itself.
	    var propOptions = Ctor.options.props;
	    if (!propOptions) {
	      return;
	    }
	    var res = {};
	    var attrs = data.attrs;
	    var props = data.props;
	    var domProps = data.domProps;
	    if (attrs || props || domProps) {
	      for (var key in propOptions) {
	        var altKey = hyphenate(key);
	        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
	      }
	    }
	    return res;
	  }
	
	  function checkProp(res, hash, key, altKey, preserve) {
	    if (hash) {
	      if (hasOwn(hash, key)) {
	        res[key] = hash[key];
	        if (!preserve) {
	          delete hash[key];
	        }
	        return true;
	      } else if (hasOwn(hash, altKey)) {
	        res[key] = hash[altKey];
	        if (!preserve) {
	          delete hash[altKey];
	        }
	        return true;
	      }
	    }
	    return false;
	  }
	
	  function mergeHooks(data) {
	    if (!data.hook) {
	      data.hook = {};
	    }
	    for (var i = 0; i < hooksToMerge.length; i++) {
	      var key = hooksToMerge[i];
	      var fromParent = data.hook[key];
	      var ours = hooks[key];
	      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	    }
	  }
	
	  function mergeHook$1(one, two) {
	    return function (a, b, c, d) {
	      one(a, b, c, d);
	      two(a, b, c, d);
	    };
	  }
	
	  /*  */
	
	  var SIMPLE_NORMALIZE = 1;
	  var ALWAYS_NORMALIZE = 2;
	
	  // wrapper function for providing a more flexible interface
	  // without getting yelled at by flow
	  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
	    if (Array.isArray(data) || isPrimitive(data)) {
	      normalizationType = children;
	      children = data;
	      data = undefined;
	    }
	    if (alwaysNormalize) {
	      normalizationType = ALWAYS_NORMALIZE;
	    }
	    return _createElement(context, tag, data, children, normalizationType);
	  }
	
	  function _createElement(context, tag, data, children, normalizationType) {
	    if (data && data.__ob__) {
	      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
	      return createEmptyVNode();
	    }
	    if (!tag) {
	      // in case of component :is set to falsy value
	      return createEmptyVNode();
	    }
	    // support single function children as default scoped slot
	    if (Array.isArray(children) && typeof children[0] === 'function') {
	      data = data || {};
	      data.scopedSlots = { default: children[0] };
	      children.length = 0;
	    }
	    if (normalizationType === ALWAYS_NORMALIZE) {
	      children = normalizeChildren(children);
	    } else if (normalizationType === SIMPLE_NORMALIZE) {
	      children = simpleNormalizeChildren(children);
	    }
	    var vnode, ns;
	    if (typeof tag === 'string') {
	      var Ctor;
	      ns = config.getTagNamespace(tag);
	      if (config.isReservedTag(tag)) {
	        // platform built-in elements
	        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
	      } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
	        // component
	        vnode = createComponent(Ctor, data, context, children, tag);
	      } else {
	        // unknown or unlisted namespaced elements
	        // check at runtime because it may get assigned a namespace when its
	        // parent normalizes children
	        vnode = new VNode(tag, data, children, undefined, undefined, context);
	      }
	    } else {
	      // direct component options / constructor
	      vnode = createComponent(tag, data, context, children);
	    }
	    if (vnode) {
	      if (ns) {
	        applyNS(vnode, ns);
	      }
	      return vnode;
	    } else {
	      return createEmptyVNode();
	    }
	  }
	
	  function applyNS(vnode, ns) {
	    vnode.ns = ns;
	    if (vnode.tag === 'foreignObject') {
	      // use default namespace inside foreignObject
	      return;
	    }
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        var child = vnode.children[i];
	        if (child.tag && !child.ns) {
	          applyNS(child, ns);
	        }
	      }
	    }
	  }
	
	  /*  */
	
	  function initRender(vm) {
	    vm.$vnode = null; // the placeholder node in parent tree
	    vm._vnode = null; // the root of the child tree
	    vm._staticTrees = null;
	    var parentVnode = vm.$options._parentVnode;
	    var renderContext = parentVnode && parentVnode.context;
	    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	    vm.$scopedSlots = {};
	    // bind the createElement fn to this instance
	    // so that we get proper render context inside it.
	    // args order: tag, data, children, normalizationType, alwaysNormalize
	    // internal version is used by render functions compiled from templates
	    vm._c = function (a, b, c, d) {
	      return createElement(vm, a, b, c, d, false);
	    };
	    // normalization is always applied for the public version, used in
	    // user-written render functions.
	    vm.$createElement = function (a, b, c, d) {
	      return createElement(vm, a, b, c, d, true);
	    };
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  }
	
	  function renderMixin(Vue) {
	    Vue.prototype.$nextTick = function (fn) {
	      return nextTick(fn, this);
	    };
	
	    Vue.prototype._render = function () {
	      var vm = this;
	      var ref = vm.$options;
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      var _parentVnode = ref._parentVnode;
	
	      if (vm._isMounted) {
	        // clone slot nodes on re-renders
	        for (var key in vm.$slots) {
	          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	        }
	      }
	
	      if (_parentVnode && _parentVnode.data.scopedSlots) {
	        vm.$scopedSlots = _parentVnode.data.scopedSlots;
	      }
	
	      if (staticRenderFns && !vm._staticTrees) {
	        vm._staticTrees = [];
	      }
	      // set parent vnode. this allows render functions to have access
	      // to the data on the placeholder node.
	      vm.$vnode = _parentVnode;
	      // render self
	      var vnode;
	      try {
	        vnode = render.call(vm._renderProxy, vm.$createElement);
	      } catch (e) {
	        /* istanbul ignore else */
	        if (config.errorHandler) {
	          config.errorHandler.call(null, e, vm);
	        } else {
	          {
	            warn("Error when rendering " + formatComponentName(vm) + ":");
	          }
	          throw e;
	        }
	        // return previous vnode to prevent render error causing blank component
	        vnode = vm._vnode;
	      }
	      // return empty vnode in case the render function errored out
	      if (!(vnode instanceof VNode)) {
	        if ("development" !== 'production' && Array.isArray(vnode)) {
	          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
	        }
	        vnode = createEmptyVNode();
	      }
	      // set parent
	      vnode.parent = _parentVnode;
	      return vnode;
	    };
	
	    // toString for mustaches
	    Vue.prototype._s = _toString;
	    // convert text to vnode
	    Vue.prototype._v = createTextVNode;
	    // number conversion
	    Vue.prototype._n = toNumber;
	    // empty vnode
	    Vue.prototype._e = createEmptyVNode;
	    // loose equal
	    Vue.prototype._q = looseEqual;
	    // loose indexOf
	    Vue.prototype._i = looseIndexOf;
	
	    // render static tree by index
	    Vue.prototype._m = function renderStatic(index, isInFor) {
	      var tree = this._staticTrees[index];
	      // if has already-rendered static tree and not inside v-for,
	      // we can reuse the same tree by doing a shallow clone.
	      if (tree && !isInFor) {
	        return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
	      }
	      // otherwise, render a fresh tree.
	      tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	      markStatic(tree, "__static__" + index, false);
	      return tree;
	    };
	
	    // mark node as static (v-once)
	    Vue.prototype._o = function markOnce(tree, index, key) {
	      markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
	      return tree;
	    };
	
	    function markStatic(tree, key, isOnce) {
	      if (Array.isArray(tree)) {
	        for (var i = 0; i < tree.length; i++) {
	          if (tree[i] && typeof tree[i] !== 'string') {
	            markStaticNode(tree[i], key + "_" + i, isOnce);
	          }
	        }
	      } else {
	        markStaticNode(tree, key, isOnce);
	      }
	    }
	
	    function markStaticNode(node, key, isOnce) {
	      node.isStatic = true;
	      node.key = key;
	      node.isOnce = isOnce;
	    }
	
	    // filter resolution helper
	    Vue.prototype._f = function resolveFilter(id) {
	      return resolveAsset(this.$options, 'filters', id, true) || identity;
	    };
	
	    // render v-for
	    Vue.prototype._l = function renderList(val, render) {
	      var ret, i, l, keys, key;
	      if (Array.isArray(val) || typeof val === 'string') {
	        ret = new Array(val.length);
	        for (i = 0, l = val.length; i < l; i++) {
	          ret[i] = render(val[i], i);
	        }
	      } else if (typeof val === 'number') {
	        ret = new Array(val);
	        for (i = 0; i < val; i++) {
	          ret[i] = render(i + 1, i);
	        }
	      } else if (isObject(val)) {
	        keys = Object.keys(val);
	        ret = new Array(keys.length);
	        for (i = 0, l = keys.length; i < l; i++) {
	          key = keys[i];
	          ret[i] = render(val[key], key, i);
	        }
	      }
	      return ret;
	    };
	
	    // renderSlot
	    Vue.prototype._t = function (name, fallback, props, bindObject) {
	      var scopedSlotFn = this.$scopedSlots[name];
	      if (scopedSlotFn) {
	        // scoped slot
	        props = props || {};
	        if (bindObject) {
	          extend(props, bindObject);
	        }
	        return scopedSlotFn(props) || fallback;
	      } else {
	        var slotNodes = this.$slots[name];
	        // warn duplicate slot usage
	        if (slotNodes && "development" !== 'production') {
	          slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
	          slotNodes._rendered = true;
	        }
	        return slotNodes || fallback;
	      }
	    };
	
	    // apply v-bind object
	    Vue.prototype._b = function bindProps(data, tag, value, asProp) {
	      if (value) {
	        if (!isObject(value)) {
	          "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
	        } else {
	          if (Array.isArray(value)) {
	            value = toObject(value);
	          }
	          for (var key in value) {
	            if (key === 'class' || key === 'style') {
	              data[key] = value[key];
	            } else {
	              var hash = asProp || config.mustUseProp(tag, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
	              hash[key] = value[key];
	            }
	          }
	        }
	      }
	      return data;
	    };
	
	    // check v-on keyCodes
	    Vue.prototype._k = function checkKeyCodes(eventKeyCode, key, builtInAlias) {
	      var keyCodes = config.keyCodes[key] || builtInAlias;
	      if (Array.isArray(keyCodes)) {
	        return keyCodes.indexOf(eventKeyCode) === -1;
	      } else {
	        return keyCodes !== eventKeyCode;
	      }
	    };
	  }
	
	  function resolveSlots(children, context) {
	    var slots = {};
	    if (!children) {
	      return slots;
	    }
	    var defaultSlot = [];
	    var name, child;
	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      // named slots should only be respected if the vnode was rendered in the
	      // same context.
	      if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
	        var slot = slots[name] || (slots[name] = []);
	        if (child.tag === 'template') {
	          slot.push.apply(slot, child.children);
	        } else {
	          slot.push(child);
	        }
	      } else {
	        defaultSlot.push(child);
	      }
	    }
	    // ignore single whitespace
	    if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
	      slots.default = defaultSlot;
	    }
	    return slots;
	  }
	
	  /*  */
	
	  var uid = 0;
	
	  function initMixin(Vue) {
	    Vue.prototype._init = function (options) {
	      var vm = this;
	      // a uid
	      vm._uid = uid++;
	      // a flag to avoid this being observed
	      vm._isVue = true;
	      // merge options
	      if (options && options._isComponent) {
	        // optimize internal component instantiation
	        // since dynamic options merging is pretty slow, and none of the
	        // internal component options needs special treatment.
	        initInternalComponent(vm, options);
	      } else {
	        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
	      }
	      /* istanbul ignore else */
	      {
	        initProxy(vm);
	      }
	      // expose real self
	      vm._self = vm;
	      initLifecycle(vm);
	      initEvents(vm);
	      callHook(vm, 'beforeCreate');
	      initState(vm);
	      callHook(vm, 'created');
	      initRender(vm);
	    };
	  }
	
	  function initInternalComponent(vm, options) {
	    var opts = vm.$options = Object.create(vm.constructor.options);
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent;
	    opts.propsData = options.propsData;
	    opts._parentVnode = options._parentVnode;
	    opts._parentListeners = options._parentListeners;
	    opts._renderChildren = options._renderChildren;
	    opts._componentTag = options._componentTag;
	    opts._parentElm = options._parentElm;
	    opts._refElm = options._refElm;
	    if (options.render) {
	      opts.render = options.render;
	      opts.staticRenderFns = options.staticRenderFns;
	    }
	  }
	
	  function resolveConstructorOptions(Ctor) {
	    var options = Ctor.options;
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options;
	      var cachedSuperOptions = Ctor.superOptions;
	      var extendOptions = Ctor.extendOptions;
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions;
	        extendOptions.render = options.render;
	        extendOptions.staticRenderFns = options.staticRenderFns;
	        extendOptions._scopeId = options._scopeId;
	        options = Ctor.options = mergeOptions(superOptions, extendOptions);
	        if (options.name) {
	          options.components[options.name] = Ctor;
	        }
	      }
	    }
	    return options;
	  }
	
	  function Vue$3(options) {
	    if ("development" !== 'production' && !(this instanceof Vue$3)) {
	      warn('Vue is a constructor and should be called with the `new` keyword');
	    }
	    this._init(options);
	  }
	
	  initMixin(Vue$3);
	  stateMixin(Vue$3);
	  eventsMixin(Vue$3);
	  lifecycleMixin(Vue$3);
	  renderMixin(Vue$3);
	
	  /*  */
	
	  function initUse(Vue) {
	    Vue.use = function (plugin) {
	      /* istanbul ignore if */
	      if (plugin.installed) {
	        return;
	      }
	      // additional parameters
	      var args = toArray(arguments, 1);
	      args.unshift(this);
	      if (typeof plugin.install === 'function') {
	        plugin.install.apply(plugin, args);
	      } else {
	        plugin.apply(null, args);
	      }
	      plugin.installed = true;
	      return this;
	    };
	  }
	
	  /*  */
	
	  function initMixin$1(Vue) {
	    Vue.mixin = function (mixin) {
	      this.options = mergeOptions(this.options, mixin);
	    };
	  }
	
	  /*  */
	
	  function initExtend(Vue) {
	    /**
	     * Each instance constructor, including Vue, has a unique
	     * cid. This enables us to create wrapped "child
	     * constructors" for prototypal inheritance and cache them.
	     */
	    Vue.cid = 0;
	    var cid = 1;
	
	    /**
	     * Class inheritance
	     */
	    Vue.extend = function (extendOptions) {
	      extendOptions = extendOptions || {};
	      var Super = this;
	      var SuperId = Super.cid;
	      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	      if (cachedCtors[SuperId]) {
	        return cachedCtors[SuperId];
	      }
	      var name = extendOptions.name || Super.options.name;
	      {
	        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
	        }
	      }
	      var Sub = function VueComponent(options) {
	        this._init(options);
	      };
	      Sub.prototype = Object.create(Super.prototype);
	      Sub.prototype.constructor = Sub;
	      Sub.cid = cid++;
	      Sub.options = mergeOptions(Super.options, extendOptions);
	      Sub['super'] = Super;
	      // allow further extension/mixin/plugin usage
	      Sub.extend = Super.extend;
	      Sub.mixin = Super.mixin;
	      Sub.use = Super.use;
	      // create asset registers, so extended classes
	      // can have their private assets too.
	      config._assetTypes.forEach(function (type) {
	        Sub[type] = Super[type];
	      });
	      // enable recursive self-lookup
	      if (name) {
	        Sub.options.components[name] = Sub;
	      }
	      // keep a reference to the super options at extension time.
	      // later at instantiation we can check if Super's options have
	      // been updated.
	      Sub.superOptions = Super.options;
	      Sub.extendOptions = extendOptions;
	      // cache constructor
	      cachedCtors[SuperId] = Sub;
	      return Sub;
	    };
	  }
	
	  /*  */
	
	  function initAssetRegisters(Vue) {
	    /**
	     * Create asset registration methods.
	     */
	    config._assetTypes.forEach(function (type) {
	      Vue[type] = function (id, definition) {
	        if (!definition) {
	          return this.options[type + 's'][id];
	        } else {
	          /* istanbul ignore if */
	          {
	            if (type === 'component' && config.isReservedTag(id)) {
	              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	            }
	          }
	          if (type === 'component' && isPlainObject(definition)) {
	            definition.name = definition.name || id;
	            definition = this.options._base.extend(definition);
	          }
	          if (type === 'directive' && typeof definition === 'function') {
	            definition = { bind: definition, update: definition };
	          }
	          this.options[type + 's'][id] = definition;
	          return definition;
	        }
	      };
	    });
	  }
	
	  /*  */
	
	  var patternTypes = [String, RegExp];
	
	  function matches(pattern, name) {
	    if (typeof pattern === 'string') {
	      return pattern.split(',').indexOf(name) > -1;
	    } else {
	      return pattern.test(name);
	    }
	  }
	
	  var KeepAlive = {
	    name: 'keep-alive',
	    abstract: true,
	    props: {
	      include: patternTypes,
	      exclude: patternTypes
	    },
	    created: function created() {
	      this.cache = Object.create(null);
	    },
	    render: function render() {
	      var vnode = getFirstComponentChild(this.$slots.default);
	      if (vnode && vnode.componentOptions) {
	        var opts = vnode.componentOptions;
	        // check pattern
	        var name = opts.Ctor.options.name || opts.tag;
	        if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
	          return vnode;
	        }
	        var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? "::" + opts.tag : '') : vnode.key;
	        if (this.cache[key]) {
	          vnode.child = this.cache[key].child;
	        } else {
	          this.cache[key] = vnode;
	        }
	        vnode.data.keepAlive = true;
	      }
	      return vnode;
	    },
	    destroyed: function destroyed() {
	      var this$1 = this;
	
	      for (var key in this.cache) {
	        var vnode = this$1.cache[key];
	        callHook(vnode.child, 'deactivated');
	        vnode.child.$destroy();
	      }
	    }
	  };
	
	  var builtInComponents = {
	    KeepAlive: KeepAlive
	  };
	
	  /*  */
	
	  function initGlobalAPI(Vue) {
	    // config
	    var configDef = {};
	    configDef.get = function () {
	      return config;
	    };
	    {
	      configDef.set = function () {
	        warn('Do not replace the Vue.config object, set individual fields instead.');
	      };
	    }
	    Object.defineProperty(Vue, 'config', configDef);
	    Vue.util = util;
	    Vue.set = set$1;
	    Vue.delete = del;
	    Vue.nextTick = nextTick;
	
	    Vue.options = Object.create(null);
	    config._assetTypes.forEach(function (type) {
	      Vue.options[type + 's'] = Object.create(null);
	    });
	
	    // this is used to identify the "base" constructor to extend all plain-object
	    // components with in Weex's multi-instance scenarios.
	    Vue.options._base = Vue;
	
	    extend(Vue.options.components, builtInComponents);
	
	    initUse(Vue);
	    initMixin$1(Vue);
	    initExtend(Vue);
	    initAssetRegisters(Vue);
	  }
	
	  initGlobalAPI(Vue$3);
	
	  Object.defineProperty(Vue$3.prototype, '$isServer', {
	    get: isServerRendering
	  });
	
	  Vue$3.version = '2.1.8';
	
	  /*  */
	
	  // attributes that should be using props for binding
	  var acceptValue = makeMap('input,textarea,option,select');
	  var mustUseProp = function mustUseProp(tag, attr) {
	    return attr === 'value' && acceptValue(tag) || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
	  };
	
	  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
	
	  var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	  var isXlink = function isXlink(name) {
	    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
	  };
	
	  var getXlinkProp = function getXlinkProp(name) {
	    return isXlink(name) ? name.slice(6, name.length) : '';
	  };
	
	  var isFalsyAttrValue = function isFalsyAttrValue(val) {
	    return val == null || val === false;
	  };
	
	  /*  */
	
	  function genClassForVnode(vnode) {
	    var data = vnode.data;
	    var parentNode = vnode;
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data) {
	        data = mergeClassData(childNode.data, data);
	      }
	    }
	    while (parentNode = parentNode.parent) {
	      if (parentNode.data) {
	        data = mergeClassData(data, parentNode.data);
	      }
	    }
	    return genClassFromData(data);
	  }
	
	  function mergeClassData(child, parent) {
	    return {
	      staticClass: concat(child.staticClass, parent.staticClass),
	      class: child.class ? [child.class, parent.class] : parent.class
	    };
	  }
	
	  function genClassFromData(data) {
	    var dynamicClass = data.class;
	    var staticClass = data.staticClass;
	    if (staticClass || dynamicClass) {
	      return concat(staticClass, stringifyClass(dynamicClass));
	    }
	    /* istanbul ignore next */
	    return '';
	  }
	
	  function concat(a, b) {
	    return a ? b ? a + ' ' + b : a : b || '';
	  }
	
	  function stringifyClass(value) {
	    var res = '';
	    if (!value) {
	      return res;
	    }
	    if (typeof value === 'string') {
	      return value;
	    }
	    if (Array.isArray(value)) {
	      var stringified;
	      for (var i = 0, l = value.length; i < l; i++) {
	        if (value[i]) {
	          if (stringified = stringifyClass(value[i])) {
	            res += stringified + ' ';
	          }
	        }
	      }
	      return res.slice(0, -1);
	    }
	    if (isObject(value)) {
	      for (var key in value) {
	        if (value[key]) {
	          res += key + ' ';
	        }
	      }
	      return res.slice(0, -1);
	    }
	    /* istanbul ignore next */
	    return res;
	  }
	
	  /*  */
	
	  var namespaceMap = {
	    svg: 'http://www.w3.org/2000/svg',
	    math: 'http://www.w3.org/1998/Math/MathML'
	  };
	
	  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');
	
	  // this map is intentionally selective, only covering SVG elements that may
	  // contain child elements.
	  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' + 'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
	
	  var isPreTag = function isPreTag(tag) {
	    return tag === 'pre';
	  };
	
	  var isReservedTag = function isReservedTag(tag) {
	    return isHTMLTag(tag) || isSVG(tag);
	  };
	
	  function getTagNamespace(tag) {
	    if (isSVG(tag)) {
	      return 'svg';
	    }
	    // basic support for MathML
	    // note it doesn't support other MathML elements being component roots
	    if (tag === 'math') {
	      return 'math';
	    }
	  }
	
	  var unknownElementCache = Object.create(null);
	  function isUnknownElement(tag) {
	    /* istanbul ignore if */
	    if (!inBrowser) {
	      return true;
	    }
	    if (isReservedTag(tag)) {
	      return false;
	    }
	    tag = tag.toLowerCase();
	    /* istanbul ignore if */
	    if (unknownElementCache[tag] != null) {
	      return unknownElementCache[tag];
	    }
	    var el = document.createElement(tag);
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
	    }
	  }
	
	  /*  */
	
	  /**
	   * Query an element selector if it's not an element already.
	   */
	  function query(el) {
	    if (typeof el === 'string') {
	      var selector = el;
	      el = document.querySelector(el);
	      if (!el) {
	        "development" !== 'production' && warn('Cannot find element: ' + selector);
	        return document.createElement('div');
	      }
	    }
	    return el;
	  }
	
	  /*  */
	
	  function createElement$1(tagName, vnode) {
	    var elm = document.createElement(tagName);
	    if (tagName !== 'select') {
	      return elm;
	    }
	    if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	      elm.setAttribute('multiple', 'multiple');
	    }
	    return elm;
	  }
	
	  function createElementNS(namespace, tagName) {
	    return document.createElementNS(namespaceMap[namespace], tagName);
	  }
	
	  function createTextNode(text) {
	    return document.createTextNode(text);
	  }
	
	  function createComment(text) {
	    return document.createComment(text);
	  }
	
	  function insertBefore(parentNode, newNode, referenceNode) {
	    parentNode.insertBefore(newNode, referenceNode);
	  }
	
	  function removeChild(node, child) {
	    node.removeChild(child);
	  }
	
	  function appendChild(node, child) {
	    node.appendChild(child);
	  }
	
	  function parentNode(node) {
	    return node.parentNode;
	  }
	
	  function nextSibling(node) {
	    return node.nextSibling;
	  }
	
	  function tagName(node) {
	    return node.tagName;
	  }
	
	  function setTextContent(node, text) {
	    node.textContent = text;
	  }
	
	  function setAttribute(node, key, val) {
	    node.setAttribute(key, val);
	  }
	
	  var nodeOps = Object.freeze({
	    createElement: createElement$1,
	    createElementNS: createElementNS,
	    createTextNode: createTextNode,
	    createComment: createComment,
	    insertBefore: insertBefore,
	    removeChild: removeChild,
	    appendChild: appendChild,
	    parentNode: parentNode,
	    nextSibling: nextSibling,
	    tagName: tagName,
	    setTextContent: setTextContent,
	    setAttribute: setAttribute
	  });
	
	  /*  */
	
	  var ref = {
	    create: function create(_, vnode) {
	      registerRef(vnode);
	    },
	    update: function update(oldVnode, vnode) {
	      if (oldVnode.data.ref !== vnode.data.ref) {
	        registerRef(oldVnode, true);
	        registerRef(vnode);
	      }
	    },
	    destroy: function destroy(vnode) {
	      registerRef(vnode, true);
	    }
	  };
	
	  function registerRef(vnode, isRemoval) {
	    var key = vnode.data.ref;
	    if (!key) {
	      return;
	    }
	
	    var vm = vnode.context;
	    var ref = vnode.child || vnode.elm;
	    var refs = vm.$refs;
	    if (isRemoval) {
	      if (Array.isArray(refs[key])) {
	        remove$1(refs[key], ref);
	      } else if (refs[key] === ref) {
	        refs[key] = undefined;
	      }
	    } else {
	      if (vnode.data.refInFor) {
	        if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	          refs[key].push(ref);
	        } else {
	          refs[key] = [ref];
	        }
	      } else {
	        refs[key] = ref;
	      }
	    }
	  }
	
	  /**
	   * Virtual DOM patching algorithm based on Snabbdom by
	   * Simon Friis Vindum (@paldepind)
	   * Licensed under the MIT License
	   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	   *
	   * modified by Evan You (@yyx990803)
	   *
	  
	  /*
	   * Not type-checking this because this file is perf-critical and the cost
	   * of making flow understand it is not worth it.
	   */
	
	  var emptyNode = new VNode('', {}, []);
	
	  var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	  function isUndef(s) {
	    return s == null;
	  }
	
	  function isDef(s) {
	    return s != null;
	  }
	
	  function sameVnode(vnode1, vnode2) {
	    return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
	  }
	
	  function createKeyToOldIdx(children, beginIdx, endIdx) {
	    var i, key;
	    var map = {};
	    for (i = beginIdx; i <= endIdx; ++i) {
	      key = children[i].key;
	      if (isDef(key)) {
	        map[key] = i;
	      }
	    }
	    return map;
	  }
	
	  function createPatchFunction(backend) {
	    var i, j;
	    var cbs = {};
	
	    var modules = backend.modules;
	    var nodeOps = backend.nodeOps;
	
	    for (i = 0; i < hooks$1.length; ++i) {
	      cbs[hooks$1[i]] = [];
	      for (j = 0; j < modules.length; ++j) {
	        if (modules[j][hooks$1[i]] !== undefined) {
	          cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
	        }
	      }
	    }
	
	    function emptyNodeAt(elm) {
	      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
	    }
	
	    function createRmCb(childElm, listeners) {
	      function remove$$1() {
	        if (--remove$$1.listeners === 0) {
	          removeNode(childElm);
	        }
	      }
	      remove$$1.listeners = listeners;
	      return remove$$1;
	    }
	
	    function removeNode(el) {
	      var parent = nodeOps.parentNode(el);
	      // element may have already been removed due to v-html / v-text
	      if (parent) {
	        nodeOps.removeChild(parent, el);
	      }
	    }
	
	    var inPre = 0;
	    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	      vnode.isRootInsert = !nested; // for transition enter check
	      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	        return;
	      }
	
	      var data = vnode.data;
	      var children = vnode.children;
	      var tag = vnode.tag;
	      if (isDef(tag)) {
	        {
	          if (data && data.pre) {
	            inPre++;
	          }
	          if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
	            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
	          }
	        }
	        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
	        setScope(vnode);
	
	        /* istanbul ignore if */
	        {
	          createChildren(vnode, children, insertedVnodeQueue);
	          if (isDef(data)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	          }
	          insert(parentElm, vnode.elm, refElm);
	        }
	
	        if ("development" !== 'production' && data && data.pre) {
	          inPre--;
	        }
	      } else if (vnode.isComment) {
	        vnode.elm = nodeOps.createComment(vnode.text);
	        insert(parentElm, vnode.elm, refElm);
	      } else {
	        vnode.elm = nodeOps.createTextNode(vnode.text);
	        insert(parentElm, vnode.elm, refElm);
	      }
	    }
	
	    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	      var i = vnode.data;
	      if (isDef(i)) {
	        var isReactivated = isDef(vnode.child) && i.keepAlive;
	        if (isDef(i = i.hook) && isDef(i = i.init)) {
	          i(vnode, false /* hydrating */, parentElm, refElm);
	        }
	        // after calling the init hook, if the vnode is a child component
	        // it should've created a child instance and mounted it. the child
	        // component also has set the placeholder vnode's elm.
	        // in that case we can just return the element and be done.
	        if (isDef(vnode.child)) {
	          initComponent(vnode, insertedVnodeQueue);
	          if (isReactivated) {
	            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	          }
	          return true;
	        }
	      }
	    }
	
	    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	      var i;
	      // hack for #4339: a reactivated component with inner transition
	      // does not trigger because the inner node's created hooks are not called
	      // again. It's not ideal to involve module-specific logic in here but
	      // there doesn't seem to be a better way to do it.
	      var innerNode = vnode;
	      while (innerNode.child) {
	        innerNode = innerNode.child._vnode;
	        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	          for (i = 0; i < cbs.activate.length; ++i) {
	            cbs.activate[i](emptyNode, innerNode);
	          }
	          insertedVnodeQueue.push(innerNode);
	          break;
	        }
	      }
	      // unlike a newly created component,
	      // a reactivated keep-alive component doesn't insert itself
	      insert(parentElm, vnode.elm, refElm);
	    }
	
	    function insert(parent, elm, ref) {
	      if (parent) {
	        if (ref) {
	          nodeOps.insertBefore(parent, elm, ref);
	        } else {
	          nodeOps.appendChild(parent, elm);
	        }
	      }
	    }
	
	    function createChildren(vnode, children, insertedVnodeQueue) {
	      if (Array.isArray(children)) {
	        for (var i = 0; i < children.length; ++i) {
	          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	        }
	      } else if (isPrimitive(vnode.text)) {
	        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	      }
	    }
	
	    function isPatchable(vnode) {
	      while (vnode.child) {
	        vnode = vnode.child._vnode;
	      }
	      return isDef(vnode.tag);
	    }
	
	    function invokeCreateHooks(vnode, insertedVnodeQueue) {
	      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	        cbs.create[i$1](emptyNode, vnode);
	      }
	      i = vnode.data.hook; // Reuse variable
	      if (isDef(i)) {
	        if (i.create) {
	          i.create(emptyNode, vnode);
	        }
	        if (i.insert) {
	          insertedVnodeQueue.push(vnode);
	        }
	      }
	    }
	
	    function initComponent(vnode, insertedVnodeQueue) {
	      if (vnode.data.pendingInsert) {
	        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      }
	      vnode.elm = vnode.child.$el;
	      if (isPatchable(vnode)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	        setScope(vnode);
	      } else {
	        // empty component root.
	        // skip all element-related modules except for ref (#3455)
	        registerRef(vnode);
	        // make sure to invoke the insert hook
	        insertedVnodeQueue.push(vnode);
	      }
	    }
	
	    // set scope id attribute for scoped CSS.
	    // this is implemented as a special case to avoid the overhead
	    // of going through the normal attribute patching process.
	    function setScope(vnode) {
	      var i;
	      if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	        nodeOps.setAttribute(vnode.elm, i, '');
	      }
	      if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
	        nodeOps.setAttribute(vnode.elm, i, '');
	      }
	    }
	
	    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	      for (; startIdx <= endIdx; ++startIdx) {
	        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	      }
	    }
	
	    function invokeDestroyHook(vnode) {
	      var i, j;
	      var data = vnode.data;
	      if (isDef(data)) {
	        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
	          i(vnode);
	        }
	        for (i = 0; i < cbs.destroy.length; ++i) {
	          cbs.destroy[i](vnode);
	        }
	      }
	      if (isDef(i = vnode.children)) {
	        for (j = 0; j < vnode.children.length; ++j) {
	          invokeDestroyHook(vnode.children[j]);
	        }
	      }
	    }
	
	    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	      for (; startIdx <= endIdx; ++startIdx) {
	        var ch = vnodes[startIdx];
	        if (isDef(ch)) {
	          if (isDef(ch.tag)) {
	            removeAndInvokeRemoveHook(ch);
	            invokeDestroyHook(ch);
	          } else {
	            // Text node
	            removeNode(ch.elm);
	          }
	        }
	      }
	    }
	
	    function removeAndInvokeRemoveHook(vnode, rm) {
	      if (rm || isDef(vnode.data)) {
	        var listeners = cbs.remove.length + 1;
	        if (!rm) {
	          // directly removing
	          rm = createRmCb(vnode.elm, listeners);
	        } else {
	          // we have a recursively passed down rm callback
	          // increase the listeners count
	          rm.listeners += listeners;
	        }
	        // recursively invoke hooks on child component root node
	        if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	          removeAndInvokeRemoveHook(i, rm);
	        }
	        for (i = 0; i < cbs.remove.length; ++i) {
	          cbs.remove[i](vnode, rm);
	        }
	        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	          i(vnode, rm);
	        } else {
	          rm();
	        }
	      } else {
	        removeNode(vnode.elm);
	      }
	    }
	
	    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	      var oldStartIdx = 0;
	      var newStartIdx = 0;
	      var oldEndIdx = oldCh.length - 1;
	      var oldStartVnode = oldCh[0];
	      var oldEndVnode = oldCh[oldEndIdx];
	      var newEndIdx = newCh.length - 1;
	      var newStartVnode = newCh[0];
	      var newEndVnode = newCh[newEndIdx];
	      var oldKeyToIdx, idxInOld, elmToMove, refElm;
	
	      // removeOnly is a special flag used only by <transition-group>
	      // to ensure removed elements stay in correct relative positions
	      // during leaving transitions
	      var canMove = !removeOnly;
	
	      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	        if (isUndef(oldStartVnode)) {
	          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	        } else if (isUndef(oldEndVnode)) {
	          oldEndVnode = oldCh[--oldEndIdx];
	        } else if (sameVnode(oldStartVnode, newStartVnode)) {
	          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	          oldStartVnode = oldCh[++oldStartIdx];
	          newStartVnode = newCh[++newStartIdx];
	        } else if (sameVnode(oldEndVnode, newEndVnode)) {
	          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	          oldEndVnode = oldCh[--oldEndIdx];
	          newEndVnode = newCh[--newEndIdx];
	        } else if (sameVnode(oldStartVnode, newEndVnode)) {
	          // Vnode moved right
	          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	          oldStartVnode = oldCh[++oldStartIdx];
	          newEndVnode = newCh[--newEndIdx];
	        } else if (sameVnode(oldEndVnode, newStartVnode)) {
	          // Vnode moved left
	          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	          oldEndVnode = oldCh[--oldEndIdx];
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          if (isUndef(oldKeyToIdx)) {
	            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	          }
	          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	          if (isUndef(idxInOld)) {
	            // New element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            elmToMove = oldCh[idxInOld];
	            /* istanbul ignore if */
	            if ("development" !== 'production' && !elmToMove) {
	              warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
	            }
	            if (sameVnode(elmToMove, newStartVnode)) {
	              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	              oldCh[idxInOld] = undefined;
	              canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	              newStartVnode = newCh[++newStartIdx];
	            } else {
	              // same key but different element. treat as new element
	              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	              newStartVnode = newCh[++newStartIdx];
	            }
	          }
	        }
	      }
	      if (oldStartIdx > oldEndIdx) {
	        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	      } else if (newStartIdx > newEndIdx) {
	        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	      }
	    }
	
	    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	      if (oldVnode === vnode) {
	        return;
	      }
	      // reuse element for static trees.
	      // note we only do this if the vnode is cloned -
	      // if the new node is not cloned it means the render functions have been
	      // reset by the hot-reload-api and we need to do a proper re-render.
	      if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
	        vnode.elm = oldVnode.elm;
	        vnode.child = oldVnode.child;
	        return;
	      }
	      var i;
	      var data = vnode.data;
	      var hasData = isDef(data);
	      if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	        i(oldVnode, vnode);
	      }
	      var elm = vnode.elm = oldVnode.elm;
	      var oldCh = oldVnode.children;
	      var ch = vnode.children;
	      if (hasData && isPatchable(vnode)) {
	        for (i = 0; i < cbs.update.length; ++i) {
	          cbs.update[i](oldVnode, vnode);
	        }
	        if (isDef(i = data.hook) && isDef(i = i.update)) {
	          i(oldVnode, vnode);
	        }
	      }
	      if (isUndef(vnode.text)) {
	        if (isDef(oldCh) && isDef(ch)) {
	          if (oldCh !== ch) {
	            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
	          }
	        } else if (isDef(ch)) {
	          if (isDef(oldVnode.text)) {
	            nodeOps.setTextContent(elm, '');
	          }
	          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	        } else if (isDef(oldCh)) {
	          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	        } else if (isDef(oldVnode.text)) {
	          nodeOps.setTextContent(elm, '');
	        }
	      } else if (oldVnode.text !== vnode.text) {
	        nodeOps.setTextContent(elm, vnode.text);
	      }
	      if (hasData) {
	        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
	          i(oldVnode, vnode);
	        }
	      }
	    }
	
	    function invokeInsertHook(vnode, queue, initial) {
	      // delay insert hooks for component root nodes, invoke them after the
	      // element is really inserted
	      if (initial && vnode.parent) {
	        vnode.parent.data.pendingInsert = queue;
	      } else {
	        for (var i = 0; i < queue.length; ++i) {
	          queue[i].data.hook.insert(queue[i]);
	        }
	      }
	    }
	
	    var bailed = false;
	    // list of modules that can skip create hook during hydration because they
	    // are already rendered on the client or has no need for initialization
	    var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');
	
	    // Note: this is a browser-only function so we can assume elms are DOM nodes.
	    function hydrate(elm, vnode, insertedVnodeQueue) {
	      {
	        if (!assertNodeMatch(elm, vnode)) {
	          return false;
	        }
	      }
	      vnode.elm = elm;
	      var tag = vnode.tag;
	      var data = vnode.data;
	      var children = vnode.children;
	      if (isDef(data)) {
	        if (isDef(i = data.hook) && isDef(i = i.init)) {
	          i(vnode, true /* hydrating */);
	        }
	        if (isDef(i = vnode.child)) {
	          // child component. it should have hydrated its own tree.
	          initComponent(vnode, insertedVnodeQueue);
	          return true;
	        }
	      }
	      if (isDef(tag)) {
	        if (isDef(children)) {
	          // empty element, allow client to pick up and populate children
	          if (!elm.hasChildNodes()) {
	            createChildren(vnode, children, insertedVnodeQueue);
	          } else {
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break;
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
	                bailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false;
	            }
	          }
	        }
	        if (isDef(data)) {
	          for (var key in data) {
	            if (!isRenderedModule(key)) {
	              invokeCreateHooks(vnode, insertedVnodeQueue);
	              break;
	            }
	          }
	        }
	      } else if (elm.data !== vnode.text) {
	        elm.data = vnode.text;
	      }
	      return true;
	    }
	
	    function assertNodeMatch(node, vnode) {
	      if (vnode.tag) {
	        return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
	      } else {
	        return node.nodeType === (vnode.isComment ? 8 : 3);
	      }
	    }
	
	    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	      if (!vnode) {
	        if (oldVnode) {
	          invokeDestroyHook(oldVnode);
	        }
	        return;
	      }
	
	      var elm, parent;
	      var isInitialPatch = false;
	      var insertedVnodeQueue = [];
	
	      if (!oldVnode) {
	        // empty mount (likely as component), create new root element
	        isInitialPatch = true;
	        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	      } else {
	        var isRealElement = isDef(oldVnode.nodeType);
	        if (!isRealElement && sameVnode(oldVnode, vnode)) {
	          // patch existing root node
	          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	        } else {
	          if (isRealElement) {
	            // mounting to a real element
	            // check if this is server-rendered content and if we can perform
	            // a successful hydration.
	            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	              oldVnode.removeAttribute('server-rendered');
	              hydrating = true;
	            }
	            if (hydrating) {
	              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	                invokeInsertHook(vnode, insertedVnodeQueue, true);
	                return oldVnode;
	              } else {
	                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
	              }
	            }
	            // either not server-rendered, or hydration failed.
	            // create an empty node and replace it
	            oldVnode = emptyNodeAt(oldVnode);
	          }
	          // replacing existing element
	          elm = oldVnode.elm;
	          parent = nodeOps.parentNode(elm);
	          createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));
	
	          if (vnode.parent) {
	            // component root element replaced.
	            // update parent placeholder node element, recursively
	            var ancestor = vnode.parent;
	            while (ancestor) {
	              ancestor.elm = vnode.elm;
	              ancestor = ancestor.parent;
	            }
	            if (isPatchable(vnode)) {
	              for (var i = 0; i < cbs.create.length; ++i) {
	                cbs.create[i](emptyNode, vnode.parent);
	              }
	            }
	          }
	
	          if (parent !== null) {
	            removeVnodes(parent, [oldVnode], 0, 0);
	          } else if (isDef(oldVnode.tag)) {
	            invokeDestroyHook(oldVnode);
	          }
	        }
	      }
	
	      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	      return vnode.elm;
	    };
	  }
	
	  /*  */
	
	  var directives = {
	    create: updateDirectives,
	    update: updateDirectives,
	    destroy: function unbindDirectives(vnode) {
	      updateDirectives(vnode, emptyNode);
	    }
	  };
	
	  function updateDirectives(oldVnode, vnode) {
	    if (oldVnode.data.directives || vnode.data.directives) {
	      _update(oldVnode, vnode);
	    }
	  }
	
	  function _update(oldVnode, vnode) {
	    var isCreate = oldVnode === emptyNode;
	    var isDestroy = vnode === emptyNode;
	    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	    var dirsWithInsert = [];
	    var dirsWithPostpatch = [];
	
	    var key, oldDir, dir;
	    for (key in newDirs) {
	      oldDir = oldDirs[key];
	      dir = newDirs[key];
	      if (!oldDir) {
	        // new directive, bind
	        callHook$1(dir, 'bind', vnode, oldVnode);
	        if (dir.def && dir.def.inserted) {
	          dirsWithInsert.push(dir);
	        }
	      } else {
	        // existing directive, update
	        dir.oldValue = oldDir.value;
	        callHook$1(dir, 'update', vnode, oldVnode);
	        if (dir.def && dir.def.componentUpdated) {
	          dirsWithPostpatch.push(dir);
	        }
	      }
	    }
	
	    if (dirsWithInsert.length) {
	      var callInsert = function callInsert() {
	        for (var i = 0; i < dirsWithInsert.length; i++) {
	          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	        }
	      };
	      if (isCreate) {
	        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	      } else {
	        callInsert();
	      }
	    }
	
	    if (dirsWithPostpatch.length) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	        for (var i = 0; i < dirsWithPostpatch.length; i++) {
	          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	        }
	      }, 'dir-postpatch');
	    }
	
	    if (!isCreate) {
	      for (key in oldDirs) {
	        if (!newDirs[key]) {
	          // no longer present, unbind
	          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	        }
	      }
	    }
	  }
	
	  var emptyModifiers = Object.create(null);
	
	  function normalizeDirectives$1(dirs, vm) {
	    var res = Object.create(null);
	    if (!dirs) {
	      return res;
	    }
	    var i, dir;
	    for (i = 0; i < dirs.length; i++) {
	      dir = dirs[i];
	      if (!dir.modifiers) {
	        dir.modifiers = emptyModifiers;
	      }
	      res[getRawDirName(dir)] = dir;
	      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	    }
	    return res;
	  }
	
	  function getRawDirName(dir) {
	    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
	  }
	
	  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
	    var fn = dir.def && dir.def[hook];
	    if (fn) {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    }
	  }
	
	  var baseModules = [ref, directives];
	
	  /*  */
	
	  function updateAttrs(oldVnode, vnode) {
	    if (!oldVnode.data.attrs && !vnode.data.attrs) {
	      return;
	    }
	    var key, cur, old;
	    var elm = vnode.elm;
	    var oldAttrs = oldVnode.data.attrs || {};
	    var attrs = vnode.data.attrs || {};
	    // clone observed objects, as the user probably wants to mutate it
	    if (attrs.__ob__) {
	      attrs = vnode.data.attrs = extend({}, attrs);
	    }
	
	    for (key in attrs) {
	      cur = attrs[key];
	      old = oldAttrs[key];
	      if (old !== cur) {
	        setAttr(elm, key, cur);
	      }
	    }
	    // #4391: in IE9, setting type can reset value for input[type=radio]
	    /* istanbul ignore if */
	    if (isIE9 && attrs.value !== oldAttrs.value) {
	      setAttr(elm, 'value', attrs.value);
	    }
	    for (key in oldAttrs) {
	      if (attrs[key] == null) {
	        if (isXlink(key)) {
	          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	        } else if (!isEnumeratedAttr(key)) {
	          elm.removeAttribute(key);
	        }
	      }
	    }
	  }
	
	  function setAttr(el, key, value) {
	    if (isBooleanAttr(key)) {
	      // set attribute for blank value
	      // e.g. <option disabled>Select one</option>
	      if (isFalsyAttrValue(value)) {
	        el.removeAttribute(key);
	      } else {
	        el.setAttribute(key, key);
	      }
	    } else if (isEnumeratedAttr(key)) {
	      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	    } else if (isXlink(key)) {
	      if (isFalsyAttrValue(value)) {
	        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else {
	        el.setAttributeNS(xlinkNS, key, value);
	      }
	    } else {
	      if (isFalsyAttrValue(value)) {
	        el.removeAttribute(key);
	      } else {
	        el.setAttribute(key, value);
	      }
	    }
	  }
	
	  var attrs = {
	    create: updateAttrs,
	    update: updateAttrs
	  };
	
	  /*  */
	
	  function updateClass(oldVnode, vnode) {
	    var el = vnode.elm;
	    var data = vnode.data;
	    var oldData = oldVnode.data;
	    if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
	      return;
	    }
	
	    var cls = genClassForVnode(vnode);
	
	    // handle transition classes
	    var transitionClass = el._transitionClasses;
	    if (transitionClass) {
	      cls = concat(cls, stringifyClass(transitionClass));
	    }
	
	    // set the class
	    if (cls !== el._prevClass) {
	      el.setAttribute('class', cls);
	      el._prevClass = cls;
	    }
	  }
	
	  var klass = {
	    create: updateClass,
	    update: updateClass
	  };
	
	  /*  */
	
	  var target$1;
	
	  function add$2(event, _handler, once, capture) {
	    if (once) {
	      var oldHandler = _handler;
	      _handler = function handler(ev) {
	        remove$3(event, _handler, capture);
	        arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
	      };
	    }
	    target$1.addEventListener(event, _handler, capture);
	  }
	
	  function remove$3(event, handler, capture) {
	    target$1.removeEventListener(event, handler, capture);
	  }
	
	  function updateDOMListeners(oldVnode, vnode) {
	    if (!oldVnode.data.on && !vnode.data.on) {
	      return;
	    }
	    var on = vnode.data.on || {};
	    var oldOn = oldVnode.data.on || {};
	    target$1 = vnode.elm;
	    updateListeners(on, oldOn, add$2, remove$3, vnode.context);
	  }
	
	  var events = {
	    create: updateDOMListeners,
	    update: updateDOMListeners
	  };
	
	  /*  */
	
	  function updateDOMProps(oldVnode, vnode) {
	    if (!oldVnode.data.domProps && !vnode.data.domProps) {
	      return;
	    }
	    var key, cur;
	    var elm = vnode.elm;
	    var oldProps = oldVnode.data.domProps || {};
	    var props = vnode.data.domProps || {};
	    // clone observed objects, as the user probably wants to mutate it
	    if (props.__ob__) {
	      props = vnode.data.domProps = extend({}, props);
	    }
	
	    for (key in oldProps) {
	      if (props[key] == null) {
	        elm[key] = '';
	      }
	    }
	    for (key in props) {
	      cur = props[key];
	      // ignore children if the node has textContent or innerHTML,
	      // as these will throw away existing DOM nodes and cause removal errors
	      // on subsequent patches (#3360)
	      if (key === 'textContent' || key === 'innerHTML') {
	        if (vnode.children) {
	          vnode.children.length = 0;
	        }
	        if (cur === oldProps[key]) {
	          continue;
	        }
	      }
	      // #4521: if a click event triggers update before the change event is
	      // dispatched on a checkbox/radio input, the input's checked state will
	      // be reset and fail to trigger another update.
	      /* istanbul ignore next */
	      if (key === 'checked' && !isDirty(elm, cur)) {
	        continue;
	      }
	      if (key === 'value') {
	        // store value as _value as well since
	        // non-string values will be stringified
	        elm._value = cur;
	        // avoid resetting cursor position when value is the same
	        var strCur = cur == null ? '' : String(cur);
	        if (shouldUpdateValue(elm, vnode, strCur)) {
	          elm.value = strCur;
	        }
	      } else {
	        elm[key] = cur;
	      }
	    }
	  }
	
	  // check platforms/web/util/attrs.js acceptValue
	
	
	  function shouldUpdateValue(elm, vnode, checkVal) {
	    if (!elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(vnode, checkVal))) {
	      return true;
	    }
	    return false;
	  }
	
	  function isDirty(elm, checkVal) {
	    return document.activeElement !== elm && elm.value !== checkVal;
	  }
	
	  function isInputChanged(vnode, newVal) {
	    var value = vnode.elm.value;
	    var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	    if (modifiers && modifiers.number || vnode.elm.type === 'number') {
	      return toNumber(value) !== toNumber(newVal);
	    }
	    if (modifiers && modifiers.trim) {
	      return value.trim() !== newVal.trim();
	    }
	    return value !== newVal;
	  }
	
	  var domProps = {
	    create: updateDOMProps,
	    update: updateDOMProps
	  };
	
	  /*  */
	
	  var parseStyleText = cached(function (cssText) {
	    var res = {};
	    var listDelimiter = /;(?![^(]*\))/g;
	    var propertyDelimiter = /:(.+)/;
	    cssText.split(listDelimiter).forEach(function (item) {
	      if (item) {
	        var tmp = item.split(propertyDelimiter);
	        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	      }
	    });
	    return res;
	  });
	
	  // merge static and dynamic style data on the same vnode
	  function normalizeStyleData(data) {
	    var style = normalizeStyleBinding(data.style);
	    // static style is pre-processed into an object during compilation
	    // and is always a fresh object, so it's safe to merge into it
	    return data.staticStyle ? extend(data.staticStyle, style) : style;
	  }
	
	  // normalize possible array / string values into Object
	  function normalizeStyleBinding(bindingStyle) {
	    if (Array.isArray(bindingStyle)) {
	      return toObject(bindingStyle);
	    }
	    if (typeof bindingStyle === 'string') {
	      return parseStyleText(bindingStyle);
	    }
	    return bindingStyle;
	  }
	
	  /**
	   * parent component style should be after child's
	   * so that parent component's style could override it
	   */
	  function getStyle(vnode, checkChild) {
	    var res = {};
	    var styleData;
	
	    if (checkChild) {
	      var childNode = vnode;
	      while (childNode.child) {
	        childNode = childNode.child._vnode;
	        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	          extend(res, styleData);
	        }
	      }
	    }
	
	    if (styleData = normalizeStyleData(vnode.data)) {
	      extend(res, styleData);
	    }
	
	    var parentNode = vnode;
	    while (parentNode = parentNode.parent) {
	      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	        extend(res, styleData);
	      }
	    }
	    return res;
	  }
	
	  /*  */
	
	  var cssVarRE = /^--/;
	  var importantRE = /\s*!important$/;
	  var setProp = function setProp(el, name, val) {
	    /* istanbul ignore if */
	    if (cssVarRE.test(name)) {
	      el.style.setProperty(name, val);
	    } else if (importantRE.test(val)) {
	      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	    } else {
	      el.style[normalize(name)] = val;
	    }
	  };
	
	  var prefixes = ['Webkit', 'Moz', 'ms'];
	
	  var testEl;
	  var normalize = cached(function (prop) {
	    testEl = testEl || document.createElement('div');
	    prop = camelize(prop);
	    if (prop !== 'filter' && prop in testEl.style) {
	      return prop;
	    }
	    var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	    for (var i = 0; i < prefixes.length; i++) {
	      var prefixed = prefixes[i] + upper;
	      if (prefixed in testEl.style) {
	        return prefixed;
	      }
	    }
	  });
	
	  function updateStyle(oldVnode, vnode) {
	    var data = vnode.data;
	    var oldData = oldVnode.data;
	
	    if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
	      return;
	    }
	
	    var cur, name;
	    var el = vnode.elm;
	    var oldStaticStyle = oldVnode.data.staticStyle;
	    var oldStyleBinding = oldVnode.data.style || {};
	
	    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	    var oldStyle = oldStaticStyle || oldStyleBinding;
	
	    var style = normalizeStyleBinding(vnode.data.style) || {};
	
	    vnode.data.style = style.__ob__ ? extend({}, style) : style;
	
	    var newStyle = getStyle(vnode, true);
	
	    for (name in oldStyle) {
	      if (newStyle[name] == null) {
	        setProp(el, name, '');
	      }
	    }
	    for (name in newStyle) {
	      cur = newStyle[name];
	      if (cur !== oldStyle[name]) {
	        // ie9 setting to null has no effect, must use empty string
	        setProp(el, name, cur == null ? '' : cur);
	      }
	    }
	  }
	
	  var style = {
	    create: updateStyle,
	    update: updateStyle
	  };
	
	  /*  */
	
	  /**
	   * Add class with compatibility for SVG since classList is not supported on
	   * SVG elements in IE
	   */
	  function addClass(el, cls) {
	    /* istanbul ignore if */
	    if (!cls || !cls.trim()) {
	      return;
	    }
	
	    /* istanbul ignore else */
	    if (el.classList) {
	      if (cls.indexOf(' ') > -1) {
	        cls.split(/\s+/).forEach(function (c) {
	          return el.classList.add(c);
	        });
	      } else {
	        el.classList.add(cls);
	      }
	    } else {
	      var cur = ' ' + el.getAttribute('class') + ' ';
	      if (cur.indexOf(' ' + cls + ' ') < 0) {
	        el.setAttribute('class', (cur + cls).trim());
	      }
	    }
	  }
	
	  /**
	   * Remove class with compatibility for SVG since classList is not supported on
	   * SVG elements in IE
	   */
	  function removeClass(el, cls) {
	    /* istanbul ignore if */
	    if (!cls || !cls.trim()) {
	      return;
	    }
	
	    /* istanbul ignore else */
	    if (el.classList) {
	      if (cls.indexOf(' ') > -1) {
	        cls.split(/\s+/).forEach(function (c) {
	          return el.classList.remove(c);
	        });
	      } else {
	        el.classList.remove(cls);
	      }
	    } else {
	      var cur = ' ' + el.getAttribute('class') + ' ';
	      var tar = ' ' + cls + ' ';
	      while (cur.indexOf(tar) >= 0) {
	        cur = cur.replace(tar, ' ');
	      }
	      el.setAttribute('class', cur.trim());
	    }
	  }
	
	  /*  */
	
	  var hasTransition = inBrowser && !isIE9;
	  var TRANSITION = 'transition';
	  var ANIMATION = 'animation';
	
	  // Transition property/event sniffing
	  var transitionProp = 'transition';
	  var transitionEndEvent = 'transitionend';
	  var animationProp = 'animation';
	  var animationEndEvent = 'animationend';
	  if (hasTransition) {
	    /* istanbul ignore if */
	    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
	      transitionProp = 'WebkitTransition';
	      transitionEndEvent = 'webkitTransitionEnd';
	    }
	    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
	      animationProp = 'WebkitAnimation';
	      animationEndEvent = 'webkitAnimationEnd';
	    }
	  }
	
	  var raf = inBrowser && window.requestAnimationFrame || setTimeout;
	  function nextFrame(fn) {
	    raf(function () {
	      raf(fn);
	    });
	  }
	
	  function addTransitionClass(el, cls) {
	    (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	    addClass(el, cls);
	  }
	
	  function removeTransitionClass(el, cls) {
	    if (el._transitionClasses) {
	      remove$1(el._transitionClasses, cls);
	    }
	    removeClass(el, cls);
	  }
	
	  function whenTransitionEnds(el, expectedType, cb) {
	    var ref = getTransitionInfo(el, expectedType);
	    var type = ref.type;
	    var timeout = ref.timeout;
	    var propCount = ref.propCount;
	    if (!type) {
	      return cb();
	    }
	    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	    var ended = 0;
	    var end = function end() {
	      el.removeEventListener(event, onEnd);
	      cb();
	    };
	    var onEnd = function onEnd(e) {
	      if (e.target === el) {
	        if (++ended >= propCount) {
	          end();
	        }
	      }
	    };
	    setTimeout(function () {
	      if (ended < propCount) {
	        end();
	      }
	    }, timeout + 1);
	    el.addEventListener(event, onEnd);
	  }
	
	  var transformRE = /\b(transform|all)(,|$)/;
	
	  function getTransitionInfo(el, expectedType) {
	    var styles = window.getComputedStyle(el);
	    var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	    var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	    var animationDelays = styles[animationProp + 'Delay'].split(', ');
	    var animationDurations = styles[animationProp + 'Duration'].split(', ');
	    var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	    var type;
	    var timeout = 0;
	    var propCount = 0;
	    /* istanbul ignore if */
	    if (expectedType === TRANSITION) {
	      if (transitionTimeout > 0) {
	        type = TRANSITION;
	        timeout = transitionTimeout;
	        propCount = transitionDurations.length;
	      }
	    } else if (expectedType === ANIMATION) {
	      if (animationTimeout > 0) {
	        type = ANIMATION;
	        timeout = animationTimeout;
	        propCount = animationDurations.length;
	      }
	    } else {
	      timeout = Math.max(transitionTimeout, animationTimeout);
	      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
	      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	    }
	    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
	    return {
	      type: type,
	      timeout: timeout,
	      propCount: propCount,
	      hasTransform: hasTransform
	    };
	  }
	
	  function getTimeout(delays, durations) {
	    /* istanbul ignore next */
	    while (delays.length < durations.length) {
	      delays = delays.concat(delays);
	    }
	
	    return Math.max.apply(null, durations.map(function (d, i) {
	      return toMs(d) + toMs(delays[i]);
	    }));
	  }
	
	  function toMs(s) {
	    return Number(s.slice(0, -1)) * 1000;
	  }
	
	  /*  */
	
	  function enter(vnode, toggleDisplay) {
	    var el = vnode.elm;
	
	    // call leave callback now
	    if (el._leaveCb) {
	      el._leaveCb.cancelled = true;
	      el._leaveCb();
	    }
	
	    var data = resolveTransition(vnode.data.transition);
	    if (!data) {
	      return;
	    }
	
	    /* istanbul ignore if */
	    if (el._enterCb || el.nodeType !== 1) {
	      return;
	    }
	
	    var css = data.css;
	    var type = data.type;
	    var enterClass = data.enterClass;
	    var enterToClass = data.enterToClass;
	    var enterActiveClass = data.enterActiveClass;
	    var appearClass = data.appearClass;
	    var appearToClass = data.appearToClass;
	    var appearActiveClass = data.appearActiveClass;
	    var beforeEnter = data.beforeEnter;
	    var enter = data.enter;
	    var afterEnter = data.afterEnter;
	    var enterCancelled = data.enterCancelled;
	    var beforeAppear = data.beforeAppear;
	    var appear = data.appear;
	    var afterAppear = data.afterAppear;
	    var appearCancelled = data.appearCancelled;
	
	    // activeInstance will always be the <transition> component managing this
	    // transition. One edge case to check is when the <transition> is placed
	    // as the root node of a child component. In that case we need to check
	    // <transition>'s parent for appear check.
	    var context = activeInstance;
	    var transitionNode = activeInstance.$vnode;
	    while (transitionNode && transitionNode.parent) {
	      transitionNode = transitionNode.parent;
	      context = transitionNode.context;
	    }
	
	    var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	    if (isAppear && !appear && appear !== '') {
	      return;
	    }
	
	    var startClass = isAppear ? appearClass : enterClass;
	    var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	    var toClass = isAppear ? appearToClass : enterToClass;
	    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
	    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
	    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
	    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
	
	    var expectsCSS = css !== false && !isIE9;
	    var userWantsControl = enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	    var cb = el._enterCb = once(function () {
	      if (expectsCSS) {
	        removeTransitionClass(el, toClass);
	        removeTransitionClass(el, activeClass);
	      }
	      if (cb.cancelled) {
	        if (expectsCSS) {
	          removeTransitionClass(el, startClass);
	        }
	        enterCancelledHook && enterCancelledHook(el);
	      } else {
	        afterEnterHook && afterEnterHook(el);
	      }
	      el._enterCb = null;
	    });
	
	    if (!vnode.data.show) {
	      // remove pending leave element on enter by injecting an insert hook
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	        var parent = el.parentNode;
	        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	        if (pendingNode && pendingNode.context === vnode.context && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	          pendingNode.elm._leaveCb();
	        }
	        enterHook && enterHook(el, cb);
	      }, 'transition-insert');
	    }
	
	    // start enter transition
	    beforeEnterHook && beforeEnterHook(el);
	    if (expectsCSS) {
	      addTransitionClass(el, startClass);
	      addTransitionClass(el, activeClass);
	      nextFrame(function () {
	        addTransitionClass(el, toClass);
	        removeTransitionClass(el, startClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	
	    if (vnode.data.show) {
	      toggleDisplay && toggleDisplay();
	      enterHook && enterHook(el, cb);
	    }
	
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	
	  function leave(vnode, rm) {
	    var el = vnode.elm;
	
	    // call enter callback now
	    if (el._enterCb) {
	      el._enterCb.cancelled = true;
	      el._enterCb();
	    }
	
	    var data = resolveTransition(vnode.data.transition);
	    if (!data) {
	      return rm();
	    }
	
	    /* istanbul ignore if */
	    if (el._leaveCb || el.nodeType !== 1) {
	      return;
	    }
	
	    var css = data.css;
	    var type = data.type;
	    var leaveClass = data.leaveClass;
	    var leaveToClass = data.leaveToClass;
	    var leaveActiveClass = data.leaveActiveClass;
	    var beforeLeave = data.beforeLeave;
	    var leave = data.leave;
	    var afterLeave = data.afterLeave;
	    var leaveCancelled = data.leaveCancelled;
	    var delayLeave = data.delayLeave;
	
	    var expectsCSS = css !== false && !isIE9;
	    var userWantsControl = leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	    var cb = el._leaveCb = once(function () {
	      if (el.parentNode && el.parentNode._pending) {
	        el.parentNode._pending[vnode.key] = null;
	      }
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveActiveClass);
	      }
	      if (cb.cancelled) {
	        if (expectsCSS) {
	          removeTransitionClass(el, leaveClass);
	        }
	        leaveCancelled && leaveCancelled(el);
	      } else {
	        rm();
	        afterLeave && afterLeave(el);
	      }
	      el._leaveCb = null;
	    });
	
	    if (delayLeave) {
	      delayLeave(performLeave);
	    } else {
	      performLeave();
	    }
	
	    function performLeave() {
	      // the delayed leave may have already been cancelled
	      if (cb.cancelled) {
	        return;
	      }
	      // record leaving element
	      if (!vnode.data.show) {
	        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	      }
	      beforeLeave && beforeLeave(el);
	      if (expectsCSS) {
	        addTransitionClass(el, leaveClass);
	        addTransitionClass(el, leaveActiveClass);
	        nextFrame(function () {
	          addTransitionClass(el, leaveToClass);
	          removeTransitionClass(el, leaveClass);
	          if (!cb.cancelled && !userWantsControl) {
	            whenTransitionEnds(el, type, cb);
	          }
	        });
	      }
	      leave && leave(el, cb);
	      if (!expectsCSS && !userWantsControl) {
	        cb();
	      }
	    }
	  }
	
	  function resolveTransition(def$$1) {
	    if (!def$$1) {
	      return;
	    }
	    /* istanbul ignore else */
	    if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
	      var res = {};
	      if (def$$1.css !== false) {
	        extend(res, autoCssTransition(def$$1.name || 'v'));
	      }
	      extend(res, def$$1);
	      return res;
	    } else if (typeof def$$1 === 'string') {
	      return autoCssTransition(def$$1);
	    }
	  }
	
	  var autoCssTransition = cached(function (name) {
	    return {
	      enterClass: name + "-enter",
	      leaveClass: name + "-leave",
	      appearClass: name + "-enter",
	      enterToClass: name + "-enter-to",
	      leaveToClass: name + "-leave-to",
	      appearToClass: name + "-enter-to",
	      enterActiveClass: name + "-enter-active",
	      leaveActiveClass: name + "-leave-active",
	      appearActiveClass: name + "-enter-active"
	    };
	  });
	
	  function once(fn) {
	    var called = false;
	    return function () {
	      if (!called) {
	        called = true;
	        fn();
	      }
	    };
	  }
	
	  function _enter(_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  }
	
	  var transition = inBrowser ? {
	    create: _enter,
	    activate: _enter,
	    remove: function remove(vnode, rm) {
	      /* istanbul ignore else */
	      if (!vnode.data.show) {
	        leave(vnode, rm);
	      } else {
	        rm();
	      }
	    }
	  } : {};
	
	  var platformModules = [attrs, klass, events, domProps, style, transition];
	
	  /*  */
	
	  // the directive module should be applied last, after all
	  // built-in modules have been applied.
	  var modules = platformModules.concat(baseModules);
	
	  var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	  /**
	   * Not type checking this file because flow doesn't like attaching
	   * properties to Elements.
	   */
	
	  var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;
	
	  /* istanbul ignore if */
	  if (isIE9) {
	    // http://www.matts411.com/post/internet-explorer-9-oninput/
	    document.addEventListener('selectionchange', function () {
	      var el = document.activeElement;
	      if (el && el.vmodel) {
	        trigger(el, 'input');
	      }
	    });
	  }
	
	  var model = {
	    inserted: function inserted(el, binding, vnode) {
	      {
	        if (!modelableTagRE.test(vnode.tag)) {
	          warn("v-model is not supported on element type: <" + vnode.tag + ">. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
	        }
	      }
	      if (vnode.tag === 'select') {
	        var cb = function cb() {
	          setSelected(el, binding, vnode.context);
	        };
	        cb();
	        /* istanbul ignore if */
	        if (isIE || isEdge) {
	          setTimeout(cb, 0);
	        }
	      } else if (vnode.tag === 'textarea' || el.type === 'text') {
	        el._vModifiers = binding.modifiers;
	        if (!binding.modifiers.lazy) {
	          if (!isAndroid) {
	            el.addEventListener('compositionstart', onCompositionStart);
	            el.addEventListener('compositionend', onCompositionEnd);
	          }
	          /* istanbul ignore if */
	          if (isIE9) {
	            el.vmodel = true;
	          }
	        }
	      }
	    },
	    componentUpdated: function componentUpdated(el, binding, vnode) {
	      if (vnode.tag === 'select') {
	        setSelected(el, binding, vnode.context);
	        // in case the options rendered by v-for have changed,
	        // it's possible that the value is out-of-sync with the rendered options.
	        // detect such cases and filter out values that no longer has a matching
	        // option in the DOM.
	        var needReset = el.multiple ? binding.value.some(function (v) {
	          return hasNoMatchingOption(v, el.options);
	        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  };
	
	  function setSelected(el, binding, vm) {
	    var value = binding.value;
	    var isMultiple = el.multiple;
	    if (isMultiple && !Array.isArray(value)) {
	      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
	      return;
	    }
	    var selected, option;
	    for (var i = 0, l = el.options.length; i < l; i++) {
	      option = el.options[i];
	      if (isMultiple) {
	        selected = looseIndexOf(value, getValue(option)) > -1;
	        if (option.selected !== selected) {
	          option.selected = selected;
	        }
	      } else {
	        if (looseEqual(getValue(option), value)) {
	          if (el.selectedIndex !== i) {
	            el.selectedIndex = i;
	          }
	          return;
	        }
	      }
	    }
	    if (!isMultiple) {
	      el.selectedIndex = -1;
	    }
	  }
	
	  function hasNoMatchingOption(value, options) {
	    for (var i = 0, l = options.length; i < l; i++) {
	      if (looseEqual(getValue(options[i]), value)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  function getValue(option) {
	    return '_value' in option ? option._value : option.value;
	  }
	
	  function onCompositionStart(e) {
	    e.target.composing = true;
	  }
	
	  function onCompositionEnd(e) {
	    e.target.composing = false;
	    trigger(e.target, 'input');
	  }
	
	  function trigger(el, type) {
	    var e = document.createEvent('HTMLEvents');
	    e.initEvent(type, true, true);
	    el.dispatchEvent(e);
	  }
	
	  /*  */
	
	  // recursively search for possible transition defined inside the component root
	  function locateNode(vnode) {
	    return vnode.child && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.child._vnode) : vnode;
	  }
	
	  var show = {
	    bind: function bind(el, ref, vnode) {
	      var value = ref.value;
	
	      vnode = locateNode(vnode);
	      var transition = vnode.data && vnode.data.transition;
	      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
	      if (value && transition && !isIE9) {
	        vnode.data.show = true;
	        enter(vnode, function () {
	          el.style.display = originalDisplay;
	        });
	      } else {
	        el.style.display = value ? originalDisplay : 'none';
	      }
	    },
	
	    update: function update(el, ref, vnode) {
	      var value = ref.value;
	      var oldValue = ref.oldValue;
	
	      /* istanbul ignore if */
	      if (value === oldValue) {
	        return;
	      }
	      vnode = locateNode(vnode);
	      var transition = vnode.data && vnode.data.transition;
	      if (transition && !isIE9) {
	        vnode.data.show = true;
	        if (value) {
	          enter(vnode, function () {
	            el.style.display = el.__vOriginalDisplay;
	          });
	        } else {
	          leave(vnode, function () {
	            el.style.display = 'none';
	          });
	        }
	      } else {
	        el.style.display = value ? el.__vOriginalDisplay : 'none';
	      }
	    },
	
	    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
	      if (!isDestroy) {
	        el.style.display = el.__vOriginalDisplay;
	      }
	    }
	  };
	
	  var platformDirectives = {
	    model: model,
	    show: show
	  };
	
	  /*  */
	
	  // Provides transition support for a single element/component.
	  // supports transition mode (out-in / in-out)
	
	  var transitionProps = {
	    name: String,
	    appear: Boolean,
	    css: Boolean,
	    mode: String,
	    type: String,
	    enterClass: String,
	    leaveClass: String,
	    enterToClass: String,
	    leaveToClass: String,
	    enterActiveClass: String,
	    leaveActiveClass: String,
	    appearClass: String,
	    appearActiveClass: String,
	    appearToClass: String
	  };
	
	  // in case the child is also an abstract component, e.g. <keep-alive>
	  // we want to recursively retrieve the real component to be rendered
	  function getRealChild(vnode) {
	    var compOptions = vnode && vnode.componentOptions;
	    if (compOptions && compOptions.Ctor.options.abstract) {
	      return getRealChild(getFirstComponentChild(compOptions.children));
	    } else {
	      return vnode;
	    }
	  }
	
	  function extractTransitionData(comp) {
	    var data = {};
	    var options = comp.$options;
	    // props
	    for (var key in options.propsData) {
	      data[key] = comp[key];
	    }
	    // events.
	    // extract listeners and pass them directly to the transition methods
	    var listeners = options._parentListeners;
	    for (var key$1 in listeners) {
	      data[camelize(key$1)] = listeners[key$1].fn;
	    }
	    return data;
	  }
	
	  function placeholder(h, rawChild) {
	    return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
	    );
	  }
	
	  function hasParentTransition(vnode) {
	    while (vnode = vnode.parent) {
	      if (vnode.data.transition) {
	        return true;
	      }
	    }
	  }
	
	  function isSameChild(child, oldChild) {
	    return oldChild.key === child.key && oldChild.tag === child.tag;
	  }
	
	  var Transition = {
	    name: 'transition',
	    props: transitionProps,
	    abstract: true,
	    render: function render(h) {
	      var this$1 = this;
	
	      var children = this.$slots.default;
	      if (!children) {
	        return;
	      }
	
	      // filter out text nodes (possible whitespaces)
	      children = children.filter(function (c) {
	        return c.tag;
	      });
	      /* istanbul ignore if */
	      if (!children.length) {
	        return;
	      }
	
	      // warn multiple elements
	      if ("development" !== 'production' && children.length > 1) {
	        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
	      }
	
	      var mode = this.mode;
	
	      // warn invalid mode
	      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
	        warn('invalid <transition> mode: ' + mode, this.$parent);
	      }
	
	      var rawChild = children[0];
	
	      // if this is a component root node and the component's
	      // parent container node also has transition, skip.
	      if (hasParentTransition(this.$vnode)) {
	        return rawChild;
	      }
	
	      // apply transition data to child
	      // use getRealChild() to ignore abstract components e.g. keep-alive
	      var child = getRealChild(rawChild);
	      /* istanbul ignore if */
	      if (!child) {
	        return rawChild;
	      }
	
	      if (this._leaving) {
	        return placeholder(h, rawChild);
	      }
	
	      var key = child.key = child.key == null || child.isStatic ? "__v" + (child.tag + this._uid) + "__" : child.key;
	      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	      var oldRawChild = this._vnode;
	      var oldChild = getRealChild(oldRawChild);
	
	      // mark v-show
	      // so that the transition module can hand over the control to the directive
	      if (child.data.directives && child.data.directives.some(function (d) {
	        return d.name === 'show';
	      })) {
	        child.data.show = true;
	      }
	
	      if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
	        // replace old child transition data with fresh one
	        // important for dynamic transitions!
	        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
	        // handle transition mode
	        if (mode === 'out-in') {
	          // return placeholder node and queue update when leave finishes
	          this._leaving = true;
	          mergeVNodeHook(oldData, 'afterLeave', function () {
	            this$1._leaving = false;
	            this$1.$forceUpdate();
	          }, key);
	          return placeholder(h, rawChild);
	        } else if (mode === 'in-out') {
	          var delayedLeave;
	          var performLeave = function performLeave() {
	            delayedLeave();
	          };
	          mergeVNodeHook(data, 'afterEnter', performLeave, key);
	          mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	            delayedLeave = leave;
	          }, key);
	        }
	      }
	
	      return rawChild;
	    }
	  };
	
	  /*  */
	
	  // Provides transition support for list items.
	  // supports move transitions using the FLIP technique.
	
	  // Because the vdom's children update algorithm is "unstable" - i.e.
	  // it doesn't guarantee the relative positioning of removed elements,
	  // we force transition-group to update its children into two passes:
	  // in the first pass, we remove all nodes that need to be removed,
	  // triggering their leaving transition; in the second pass, we insert/move
	  // into the final disired state. This way in the second pass removed
	  // nodes will remain where they should be.
	
	  var props = extend({
	    tag: String,
	    moveClass: String
	  }, transitionProps);
	
	  delete props.mode;
	
	  var TransitionGroup = {
	    props: props,
	
	    render: function render(h) {
	      var tag = this.tag || this.$vnode.data.tag || 'span';
	      var map = Object.create(null);
	      var prevChildren = this.prevChildren = this.children;
	      var rawChildren = this.$slots.default || [];
	      var children = this.children = [];
	      var transitionData = extractTransitionData(this);
	
	      for (var i = 0; i < rawChildren.length; i++) {
	        var c = rawChildren[i];
	        if (c.tag) {
	          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	            children.push(c);
	            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
	          } else {
	            var opts = c.componentOptions;
	            var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
	            warn("<transition-group> children must be keyed: <" + name + ">");
	          }
	        }
	      }
	
	      if (prevChildren) {
	        var kept = [];
	        var removed = [];
	        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	          var c$1 = prevChildren[i$1];
	          c$1.data.transition = transitionData;
	          c$1.data.pos = c$1.elm.getBoundingClientRect();
	          if (map[c$1.key]) {
	            kept.push(c$1);
	          } else {
	            removed.push(c$1);
	          }
	        }
	        this.kept = h(tag, null, kept);
	        this.removed = removed;
	      }
	
	      return h(tag, null, children);
	    },
	
	    beforeUpdate: function beforeUpdate() {
	      // force removing pass
	      this.__patch__(this._vnode, this.kept, false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	      );
	      this._vnode = this.kept;
	    },
	
	    updated: function updated() {
	      var children = this.prevChildren;
	      var moveClass = this.moveClass || (this.name || 'v') + '-move';
	      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	        return;
	      }
	
	      // we divide the work into three loops to avoid mixing DOM reads and writes
	      // in each iteration - which helps prevent layout thrashing.
	      children.forEach(callPendingCbs);
	      children.forEach(recordPosition);
	      children.forEach(applyTranslation);
	
	      // force reflow to put everything in position
	      var f = document.body.offsetHeight; // eslint-disable-line
	
	      children.forEach(function (c) {
	        if (c.data.moved) {
	          var el = c.elm;
	          var s = el.style;
	          addTransitionClass(el, moveClass);
	          s.transform = s.WebkitTransform = s.transitionDuration = '';
	          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
	            if (!e || /transform$/.test(e.propertyName)) {
	              el.removeEventListener(transitionEndEvent, cb);
	              el._moveCb = null;
	              removeTransitionClass(el, moveClass);
	            }
	          });
	        }
	      });
	    },
	
	    methods: {
	      hasMove: function hasMove(el, moveClass) {
	        /* istanbul ignore if */
	        if (!hasTransition) {
	          return false;
	        }
	        if (this._hasMove != null) {
	          return this._hasMove;
	        }
	        addTransitionClass(el, moveClass);
	        var info = getTransitionInfo(el);
	        removeTransitionClass(el, moveClass);
	        return this._hasMove = info.hasTransform;
	      }
	    }
	  };
	
	  function callPendingCbs(c) {
	    /* istanbul ignore if */
	    if (c.elm._moveCb) {
	      c.elm._moveCb();
	    }
	    /* istanbul ignore if */
	    if (c.elm._enterCb) {
	      c.elm._enterCb();
	    }
	  }
	
	  function recordPosition(c) {
	    c.data.newPos = c.elm.getBoundingClientRect();
	  }
	
	  function applyTranslation(c) {
	    var oldPos = c.data.pos;
	    var newPos = c.data.newPos;
	    var dx = oldPos.left - newPos.left;
	    var dy = oldPos.top - newPos.top;
	    if (dx || dy) {
	      c.data.moved = true;
	      var s = c.elm.style;
	      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	      s.transitionDuration = '0s';
	    }
	  }
	
	  var platformComponents = {
	    Transition: Transition,
	    TransitionGroup: TransitionGroup
	  };
	
	  /*  */
	
	  // install platform specific utils
	  Vue$3.config.isUnknownElement = isUnknownElement;
	  Vue$3.config.isReservedTag = isReservedTag;
	  Vue$3.config.getTagNamespace = getTagNamespace;
	  Vue$3.config.mustUseProp = mustUseProp;
	
	  // install platform runtime directives & components
	  extend(Vue$3.options.directives, platformDirectives);
	  extend(Vue$3.options.components, platformComponents);
	
	  // install platform patch function
	  Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;
	
	  // wrap mount
	  Vue$3.prototype.$mount = function (el, hydrating) {
	    el = el && inBrowser ? query(el) : undefined;
	    return this._mount(el, hydrating);
	  };
	
	  if ("development" !== 'production' && inBrowser && typeof console !== 'undefined') {
	    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
	  }
	
	  // devtools global hook
	  /* istanbul ignore next */
	  setTimeout(function () {
	    if (config.devtools) {
	      if (devtools) {
	        devtools.emit('init', Vue$3);
	      } else if ("development" !== 'production' && inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	      }
	    }
	  }, 0);
	
	  /*  */
	
	  // check whether current browser encodes a char inside attribute values
	  function shouldDecode(content, encoded) {
	    var div = document.createElement('div');
	    div.innerHTML = "<div a=\"" + content + "\">";
	    return div.innerHTML.indexOf(encoded) > 0;
	  }
	
	  // #3663
	  // IE encodes newlines inside attribute values while other browsers don't
	  var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	  /*  */
	
	  var decoder;
	
	  function decode(html) {
	    decoder = decoder || document.createElement('div');
	    decoder.innerHTML = html;
	    return decoder.textContent;
	  }
	
	  /*  */
	
	  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);
	
	  // Elements that you can, intentionally, leave open
	  // (and which close themselves)
	  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);
	
	  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);
	
	  /**
	   * Not type-checking this file because it's mostly vendor code.
	   */
	
	  /*!
	   * HTML Parser By John Resig (ejohn.org)
	   * Modified by Juriy "kangax" Zaytsev
	   * Original code by Erik Arvidsson, Mozilla Public License
	   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	   */
	
	  // Regular Expressions for parsing tags and attributes
	  var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	  var singleAttrAssign = /(?:=)/;
	  var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source];
	  var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');
	
	  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	  // but for Vue templates we can enforce a simple charset
	  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	  var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	  var startTagOpen = new RegExp('^<' + qnameCapture);
	  var startTagClose = /^\s*(\/?)>/;
	  var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	  var doctype = /^<!DOCTYPE [^>]+>/i;
	  var comment = /^<!--/;
	  var conditionalComment = /^<!\[/;
	
	  var IS_REGEX_CAPTURING_BROKEN = false;
	  'x'.replace(/x(.)?/g, function (m, g) {
	    IS_REGEX_CAPTURING_BROKEN = g === '';
	  });
	
	  // Special Elements (can contain anything)
	  var isScriptOrStyle = makeMap('script,style', true);
	  var hasLang = function hasLang(attr) {
	    return attr.name === 'lang' && attr.value !== 'html';
	  };
	  var isSpecialTag = function isSpecialTag(tag, isSFC, stack) {
	    if (isScriptOrStyle(tag)) {
	      return true;
	    }
	    if (isSFC && stack.length === 1) {
	      // top-level template that has no pre-processor
	      if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	        return false;
	      } else {
	        return true;
	      }
	    }
	    return false;
	  };
	
	  var reCache = {};
	
	  var ltRE = /&lt;/g;
	  var gtRE = /&gt;/g;
	  var nlRE = /&#10;/g;
	  var ampRE = /&amp;/g;
	  var quoteRE = /&quot;/g;
	
	  function decodeAttr(value, shouldDecodeNewlines) {
	    if (shouldDecodeNewlines) {
	      value = value.replace(nlRE, '\n');
	    }
	    return value.replace(ltRE, '<').replace(gtRE, '>').replace(ampRE, '&').replace(quoteRE, '"');
	  }
	
	  function parseHTML(html, options) {
	    var stack = [];
	    var expectHTML = options.expectHTML;
	    var isUnaryTag$$1 = options.isUnaryTag || no;
	    var index = 0;
	    var last, lastTag;
	    while (html) {
	      last = html;
	      // Make sure we're not in a script or style element
	      if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	        var textEnd = html.indexOf('<');
	        if (textEnd === 0) {
	          // Comment:
	          if (comment.test(html)) {
	            var commentEnd = html.indexOf('-->');
	
	            if (commentEnd >= 0) {
	              advance(commentEnd + 3);
	              continue;
	            }
	          }
	
	          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	          if (conditionalComment.test(html)) {
	            var conditionalEnd = html.indexOf(']>');
	
	            if (conditionalEnd >= 0) {
	              advance(conditionalEnd + 2);
	              continue;
	            }
	          }
	
	          // Doctype:
	          var doctypeMatch = html.match(doctype);
	          if (doctypeMatch) {
	            advance(doctypeMatch[0].length);
	            continue;
	          }
	
	          // End tag:
	          var endTagMatch = html.match(endTag);
	          if (endTagMatch) {
	            var curIndex = index;
	            advance(endTagMatch[0].length);
	            parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	            continue;
	          }
	
	          // Start tag:
	          var startTagMatch = parseStartTag();
	          if (startTagMatch) {
	            handleStartTag(startTagMatch);
	            continue;
	          }
	        }
	
	        var text = void 0,
	            rest$1 = void 0,
	            next = void 0;
	        if (textEnd > 0) {
	          rest$1 = html.slice(textEnd);
	          while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
	            // < in plain text, be forgiving and treat it as text
	            next = rest$1.indexOf('<', 1);
	            if (next < 0) {
	              break;
	            }
	            textEnd += next;
	            rest$1 = html.slice(textEnd);
	          }
	          text = html.substring(0, textEnd);
	          advance(textEnd);
	        }
	
	        if (textEnd < 0) {
	          text = html;
	          html = '';
	        }
	
	        if (options.chars && text) {
	          options.chars(text);
	        }
	      } else {
	        var stackedTag = lastTag.toLowerCase();
	        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	        var endTagLength = 0;
	        var rest = html.replace(reStackedTag, function (all, text, endTag) {
	          endTagLength = endTag.length;
	          if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	          }
	          if (options.chars) {
	            options.chars(text);
	          }
	          return '';
	        });
	        index += html.length - rest.length;
	        html = rest;
	        parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	      }
	
	      if (html === last && options.chars) {
	        options.chars(html);
	        break;
	      }
	    }
	
	    // Clean up any remaining tags
	    parseEndTag();
	
	    function advance(n) {
	      index += n;
	      html = html.substring(n);
	    }
	
	    function parseStartTag() {
	      var start = html.match(startTagOpen);
	      if (start) {
	        var match = {
	          tagName: start[1],
	          attrs: [],
	          start: index
	        };
	        advance(start[0].length);
	        var end, attr;
	        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	          advance(attr[0].length);
	          match.attrs.push(attr);
	        }
	        if (end) {
	          match.unarySlash = end[1];
	          advance(end[0].length);
	          match.end = index;
	          return match;
	        }
	      }
	    }
	
	    function handleStartTag(match) {
	      var tagName = match.tagName;
	      var unarySlash = match.unarySlash;
	
	      if (expectHTML) {
	        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	          parseEndTag('', lastTag);
	        }
	        if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	          parseEndTag('', tagName);
	        }
	      }
	
	      var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	      var l = match.attrs.length;
	      var attrs = new Array(l);
	      for (var i = 0; i < l; i++) {
	        var args = match.attrs[i];
	        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	          if (args[3] === '') {
	            delete args[3];
	          }
	          if (args[4] === '') {
	            delete args[4];
	          }
	          if (args[5] === '') {
	            delete args[5];
	          }
	        }
	        var value = args[3] || args[4] || args[5] || '';
	        attrs[i] = {
	          name: args[1],
	          value: decodeAttr(value, options.shouldDecodeNewlines)
	        };
	      }
	
	      if (!unary) {
	        stack.push({ tag: tagName, attrs: attrs });
	        lastTag = tagName;
	        unarySlash = '';
	      }
	
	      if (options.start) {
	        options.start(tagName, attrs, unary, match.start, match.end);
	      }
	    }
	
	    function parseEndTag(tag, tagName, start, end) {
	      var pos;
	      if (start == null) {
	        start = index;
	      }
	      if (end == null) {
	        end = index;
	      }
	
	      // Find the closest opened tag of the same type
	      if (tagName) {
	        var needle = tagName.toLowerCase();
	        for (pos = stack.length - 1; pos >= 0; pos--) {
	          if (stack[pos].tag.toLowerCase() === needle) {
	            break;
	          }
	        }
	      } else {
	        // If no tag name is provided, clean shop
	        pos = 0;
	      }
	
	      if (pos >= 0) {
	        // Close all the open elements, up the stack
	        for (var i = stack.length - 1; i >= pos; i--) {
	          if (options.end) {
	            options.end(stack[i].tag, start, end);
	          }
	        }
	
	        // Remove the open elements from the stack
	        stack.length = pos;
	        lastTag = pos && stack[pos - 1].tag;
	      } else if (tagName.toLowerCase() === 'br') {
	        if (options.start) {
	          options.start(tagName, [], true, start, end);
	        }
	      } else if (tagName.toLowerCase() === 'p') {
	        if (options.start) {
	          options.start(tagName, [], false, start, end);
	        }
	        if (options.end) {
	          options.end(tagName, start, end);
	        }
	      }
	    }
	  }
	
	  /*  */
	
	  function parseFilters(exp) {
	    var inSingle = false;
	    var inDouble = false;
	    var inTemplateString = false;
	    var inRegex = false;
	    var curly = 0;
	    var square = 0;
	    var paren = 0;
	    var lastFilterIndex = 0;
	    var c, prev, i, expression, filters;
	
	    for (i = 0; i < exp.length; i++) {
	      prev = c;
	      c = exp.charCodeAt(i);
	      if (inSingle) {
	        if (c === 0x27 && prev !== 0x5C) {
	          inSingle = false;
	        }
	      } else if (inDouble) {
	        if (c === 0x22 && prev !== 0x5C) {
	          inDouble = false;
	        }
	      } else if (inTemplateString) {
	        if (c === 0x60 && prev !== 0x5C) {
	          inTemplateString = false;
	        }
	      } else if (inRegex) {
	        if (c === 0x2f && prev !== 0x5C) {
	          inRegex = false;
	        }
	      } else if (c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
	        if (expression === undefined) {
	          // first filter, end of expression
	          lastFilterIndex = i + 1;
	          expression = exp.slice(0, i).trim();
	        } else {
	          pushFilter();
	        }
	      } else {
	        switch (c) {
	          case 0x22:
	            inDouble = true;break; // "
	          case 0x27:
	            inSingle = true;break; // '
	          case 0x60:
	            inTemplateString = true;break; // `
	          case 0x28:
	            paren++;break; // (
	          case 0x29:
	            paren--;break; // )
	          case 0x5B:
	            square++;break; // [
	          case 0x5D:
	            square--;break; // ]
	          case 0x7B:
	            curly++;break; // {
	          case 0x7D:
	            curly--;break; // }
	        }
	        if (c === 0x2f) {
	          // /
	          var j = i - 1;
	          var p = void 0;
	          // find first non-whitespace prev char
	          for (; j >= 0; j--) {
	            p = exp.charAt(j);
	            if (p !== ' ') {
	              break;
	            }
	          }
	          if (!p || !/[\w$]/.test(p)) {
	            inRegex = true;
	          }
	        }
	      }
	    }
	
	    if (expression === undefined) {
	      expression = exp.slice(0, i).trim();
	    } else if (lastFilterIndex !== 0) {
	      pushFilter();
	    }
	
	    function pushFilter() {
	      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	      lastFilterIndex = i + 1;
	    }
	
	    if (filters) {
	      for (i = 0; i < filters.length; i++) {
	        expression = wrapFilter(expression, filters[i]);
	      }
	    }
	
	    return expression;
	  }
	
	  function wrapFilter(exp, filter) {
	    var i = filter.indexOf('(');
	    if (i < 0) {
	      // _f: resolveFilter
	      return "_f(\"" + filter + "\")(" + exp + ")";
	    } else {
	      var name = filter.slice(0, i);
	      var args = filter.slice(i + 1);
	      return "_f(\"" + name + "\")(" + exp + "," + args;
	    }
	  }
	
	  /*  */
	
	  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	  var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;
	
	  var buildRegex = cached(function (delimiters) {
	    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
	  });
	
	  function parseText(text, delimiters) {
	    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	    if (!tagRE.test(text)) {
	      return;
	    }
	    var tokens = [];
	    var lastIndex = tagRE.lastIndex = 0;
	    var match, index;
	    while (match = tagRE.exec(text)) {
	      index = match.index;
	      // push text token
	      if (index > lastIndex) {
	        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	      }
	      // tag token
	      var exp = parseFilters(match[1].trim());
	      tokens.push("_s(" + exp + ")");
	      lastIndex = index + match[0].length;
	    }
	    if (lastIndex < text.length) {
	      tokens.push(JSON.stringify(text.slice(lastIndex)));
	    }
	    return tokens.join('+');
	  }
	
	  /*  */
	
	  function baseWarn(msg) {
	    console.error("[Vue parser]: " + msg);
	  }
	
	  function pluckModuleFunction(modules, key) {
	    return modules ? modules.map(function (m) {
	      return m[key];
	    }).filter(function (_) {
	      return _;
	    }) : [];
	  }
	
	  function addProp(el, name, value) {
	    (el.props || (el.props = [])).push({ name: name, value: value });
	  }
	
	  function addAttr(el, name, value) {
	    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	  }
	
	  function addDirective(el, name, rawName, value, arg, modifiers) {
	    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	  }
	
	  function addHandler(el, name, value, modifiers, important) {
	    // check capture modifier
	    if (modifiers && modifiers.capture) {
	      delete modifiers.capture;
	      name = '!' + name; // mark the event as captured
	    }
	    if (modifiers && modifiers.once) {
	      delete modifiers.once;
	      name = '~' + name; // mark the event as once
	    }
	    var events;
	    if (modifiers && modifiers.native) {
	      delete modifiers.native;
	      events = el.nativeEvents || (el.nativeEvents = {});
	    } else {
	      events = el.events || (el.events = {});
	    }
	    var newHandler = { value: value, modifiers: modifiers };
	    var handlers = events[name];
	    /* istanbul ignore if */
	    if (Array.isArray(handlers)) {
	      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	    } else if (handlers) {
	      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	    } else {
	      events[name] = newHandler;
	    }
	  }
	
	  function getBindingAttr(el, name, getStatic) {
	    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
	    if (dynamicValue != null) {
	      return parseFilters(dynamicValue);
	    } else if (getStatic !== false) {
	      var staticValue = getAndRemoveAttr(el, name);
	      if (staticValue != null) {
	        return JSON.stringify(staticValue);
	      }
	    }
	  }
	
	  function getAndRemoveAttr(el, name) {
	    var val;
	    if ((val = el.attrsMap[name]) != null) {
	      var list = el.attrsList;
	      for (var i = 0, l = list.length; i < l; i++) {
	        if (list[i].name === name) {
	          list.splice(i, 1);
	          break;
	        }
	      }
	    }
	    return val;
	  }
	
	  var len;
	  var str;
	  var chr;
	  var index$1;
	  var expressionPos;
	  var expressionEndPos;
	
	  /**
	   * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	   *
	   * for loop possible cases:
	   *
	   * - test
	   * - test[idx]
	   * - test[test1[idx]]
	   * - test["a"][idx]
	   * - xxx.test[a[a].test1[idx]]
	   * - test.xxx.a["asa"][test1[idx]]
	   *
	   */
	
	  function parseModel(val) {
	    str = val;
	    len = str.length;
	    index$1 = expressionPos = expressionEndPos = 0;
	
	    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	      return {
	        exp: val,
	        idx: null
	      };
	    }
	
	    while (!eof()) {
	      chr = next();
	      /* istanbul ignore if */
	      if (isStringStart(chr)) {
	        parseString(chr);
	      } else if (chr === 0x5B) {
	        parseBracket(chr);
	      }
	    }
	
	    return {
	      exp: val.substring(0, expressionPos),
	      idx: val.substring(expressionPos + 1, expressionEndPos)
	    };
	  }
	
	  function next() {
	    return str.charCodeAt(++index$1);
	  }
	
	  function eof() {
	    return index$1 >= len;
	  }
	
	  function isStringStart(chr) {
	    return chr === 0x22 || chr === 0x27;
	  }
	
	  function parseBracket(chr) {
	    var inBracket = 1;
	    expressionPos = index$1;
	    while (!eof()) {
	      chr = next();
	      if (isStringStart(chr)) {
	        parseString(chr);
	        continue;
	      }
	      if (chr === 0x5B) {
	        inBracket++;
	      }
	      if (chr === 0x5D) {
	        inBracket--;
	      }
	      if (inBracket === 0) {
	        expressionEndPos = index$1;
	        break;
	      }
	    }
	  }
	
	  function parseString(chr) {
	    var stringQuote = chr;
	    while (!eof()) {
	      chr = next();
	      if (chr === stringQuote) {
	        break;
	      }
	    }
	  }
	
	  /*  */
	
	  var dirRE = /^v-|^@|^:/;
	  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	  var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	  var bindRE = /^:|^v-bind:/;
	  var onRE = /^@|^v-on:/;
	  var argRE = /:(.*)$/;
	  var modifierRE = /\.[^.]+/g;
	
	  var decodeHTMLCached = cached(decode);
	
	  // configurable state
	  var warn$1;
	  var platformGetTagNamespace;
	  var platformMustUseProp;
	  var platformIsPreTag;
	  var preTransforms;
	  var transforms;
	  var postTransforms;
	  var delimiters;
	
	  /**
	   * Convert HTML string to AST.
	   */
	  function parse(template, options) {
	    warn$1 = options.warn || baseWarn;
	    platformGetTagNamespace = options.getTagNamespace || no;
	    platformMustUseProp = options.mustUseProp || no;
	    platformIsPreTag = options.isPreTag || no;
	    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	    transforms = pluckModuleFunction(options.modules, 'transformNode');
	    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	    delimiters = options.delimiters;
	    var stack = [];
	    var preserveWhitespace = options.preserveWhitespace !== false;
	    var root;
	    var currentParent;
	    var inVPre = false;
	    var inPre = false;
	    var warned = false;
	    parseHTML(template, {
	      expectHTML: options.expectHTML,
	      isUnaryTag: options.isUnaryTag,
	      shouldDecodeNewlines: options.shouldDecodeNewlines,
	      start: function start(tag, attrs, unary) {
	        // check namespace.
	        // inherit parent ns if there is one
	        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
	
	        // handle IE svg bug
	        /* istanbul ignore if */
	        if (isIE && ns === 'svg') {
	          attrs = guardIESVGBug(attrs);
	        }
	
	        var element = {
	          type: 1,
	          tag: tag,
	          attrsList: attrs,
	          attrsMap: makeAttrsMap(attrs),
	          parent: currentParent,
	          children: []
	        };
	        if (ns) {
	          element.ns = ns;
	        }
	
	        if (isForbiddenTag(element) && !isServerRendering()) {
	          element.forbidden = true;
	          "development" !== 'production' && warn$1('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
	        }
	
	        // apply pre-transforms
	        for (var i = 0; i < preTransforms.length; i++) {
	          preTransforms[i](element, options);
	        }
	
	        if (!inVPre) {
	          processPre(element);
	          if (element.pre) {
	            inVPre = true;
	          }
	        }
	        if (platformIsPreTag(element.tag)) {
	          inPre = true;
	        }
	        if (inVPre) {
	          processRawAttrs(element);
	        } else {
	          processFor(element);
	          processIf(element);
	          processOnce(element);
	          processKey(element);
	
	          // determine whether this is a plain element after
	          // removing structural attributes
	          element.plain = !element.key && !attrs.length;
	
	          processRef(element);
	          processSlot(element);
	          processComponent(element);
	          for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	            transforms[i$1](element, options);
	          }
	          processAttrs(element);
	        }
	
	        function checkRootConstraints(el) {
	          if ("development" !== 'production' && !warned) {
	            if (el.tag === 'slot' || el.tag === 'template') {
	              warned = true;
	              warn$1("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes:\n' + template);
	            }
	            if (el.attrsMap.hasOwnProperty('v-for')) {
	              warned = true;
	              warn$1('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements:\n' + template);
	            }
	          }
	        }
	
	        // tree management
	        if (!root) {
	          root = element;
	          checkRootConstraints(root);
	        } else if (!stack.length) {
	          // allow root elements with v-if, v-else-if and v-else
	          if (root.if && (element.elseif || element.else)) {
	            checkRootConstraints(element);
	            addIfCondition(root, {
	              exp: element.elseif,
	              block: element
	            });
	          } else if ("development" !== 'production' && !warned) {
	            warned = true;
	            warn$1("Component template should contain exactly one root element:" + "\n\n" + template + "\n\n" + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
	          }
	        }
	        if (currentParent && !element.forbidden) {
	          if (element.elseif || element.else) {
	            processIfConditions(element, currentParent);
	          } else if (element.slotScope) {
	            // scoped slot
	            currentParent.plain = false;
	            var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	          } else {
	            currentParent.children.push(element);
	            element.parent = currentParent;
	          }
	        }
	        if (!unary) {
	          currentParent = element;
	          stack.push(element);
	        }
	        // apply post-transforms
	        for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	          postTransforms[i$2](element, options);
	        }
	      },
	
	      end: function end() {
	        // remove trailing whitespace
	        var element = stack[stack.length - 1];
	        var lastNode = element.children[element.children.length - 1];
	        if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	          element.children.pop();
	        }
	        // pop stack
	        stack.length -= 1;
	        currentParent = stack[stack.length - 1];
	        // check pre state
	        if (element.pre) {
	          inVPre = false;
	        }
	        if (platformIsPreTag(element.tag)) {
	          inPre = false;
	        }
	      },
	
	      chars: function chars(text) {
	        if (!currentParent) {
	          if ("development" !== 'production' && !warned && text === template) {
	            warned = true;
	            warn$1('Component template requires a root element, rather than just text:\n\n' + template);
	          }
	          return;
	        }
	        // IE textarea placeholder bug
	        /* istanbul ignore if */
	        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
	          return;
	        }
	        var children = currentParent.children;
	        text = inPre || text.trim() ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && children.length ? ' ' : '';
	        if (text) {
	          var expression;
	          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	            children.push({
	              type: 2,
	              expression: expression,
	              text: text
	            });
	          } else if (text !== ' ' || children[children.length - 1].text !== ' ') {
	            currentParent.children.push({
	              type: 3,
	              text: text
	            });
	          }
	        }
	      }
	    });
	    return root;
	  }
	
	  function processPre(el) {
	    if (getAndRemoveAttr(el, 'v-pre') != null) {
	      el.pre = true;
	    }
	  }
	
	  function processRawAttrs(el) {
	    var l = el.attrsList.length;
	    if (l) {
	      var attrs = el.attrs = new Array(l);
	      for (var i = 0; i < l; i++) {
	        attrs[i] = {
	          name: el.attrsList[i].name,
	          value: JSON.stringify(el.attrsList[i].value)
	        };
	      }
	    } else if (!el.pre) {
	      // non root node in pre blocks with no attributes
	      el.plain = true;
	    }
	  }
	
	  function processKey(el) {
	    var exp = getBindingAttr(el, 'key');
	    if (exp) {
	      if ("development" !== 'production' && el.tag === 'template') {
	        warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	      }
	      el.key = exp;
	    }
	  }
	
	  function processRef(el) {
	    var ref = getBindingAttr(el, 'ref');
	    if (ref) {
	      el.ref = ref;
	      el.refInFor = checkInFor(el);
	    }
	  }
	
	  function processFor(el) {
	    var exp;
	    if (exp = getAndRemoveAttr(el, 'v-for')) {
	      var inMatch = exp.match(forAliasRE);
	      if (!inMatch) {
	        "development" !== 'production' && warn$1("Invalid v-for expression: " + exp);
	        return;
	      }
	      el.for = inMatch[2].trim();
	      var alias = inMatch[1].trim();
	      var iteratorMatch = alias.match(forIteratorRE);
	      if (iteratorMatch) {
	        el.alias = iteratorMatch[1].trim();
	        el.iterator1 = iteratorMatch[2].trim();
	        if (iteratorMatch[3]) {
	          el.iterator2 = iteratorMatch[3].trim();
	        }
	      } else {
	        el.alias = alias;
	      }
	    }
	  }
	
	  function processIf(el) {
	    var exp = getAndRemoveAttr(el, 'v-if');
	    if (exp) {
	      el.if = exp;
	      addIfCondition(el, {
	        exp: exp,
	        block: el
	      });
	    } else {
	      if (getAndRemoveAttr(el, 'v-else') != null) {
	        el.else = true;
	      }
	      var elseif = getAndRemoveAttr(el, 'v-else-if');
	      if (elseif) {
	        el.elseif = elseif;
	      }
	    }
	  }
	
	  function processIfConditions(el, parent) {
	    var prev = findPrevElement(parent.children);
	    if (prev && prev.if) {
	      addIfCondition(prev, {
	        exp: el.elseif,
	        block: el
	      });
	    } else {
	      warn$1("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
	    }
	  }
	
	  function findPrevElement(children) {
	    var i = children.length;
	    while (i--) {
	      if (children[i].type === 1) {
	        return children[i];
	      } else {
	        if ("development" !== 'production' && children[i].text !== ' ') {
	          warn$1("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
	        }
	        children.pop();
	      }
	    }
	  }
	
	  function addIfCondition(el, condition) {
	    if (!el.ifConditions) {
	      el.ifConditions = [];
	    }
	    el.ifConditions.push(condition);
	  }
	
	  function processOnce(el) {
	    var once = getAndRemoveAttr(el, 'v-once');
	    if (once != null) {
	      el.once = true;
	    }
	  }
	
	  function processSlot(el) {
	    if (el.tag === 'slot') {
	      el.slotName = getBindingAttr(el, 'name');
	      if ("development" !== 'production' && el.key) {
	        warn$1("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
	      }
	    } else {
	      var slotTarget = getBindingAttr(el, 'slot');
	      if (slotTarget) {
	        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	      }
	      if (el.tag === 'template') {
	        el.slotScope = getAndRemoveAttr(el, 'scope');
	      }
	    }
	  }
	
	  function processComponent(el) {
	    var binding;
	    if (binding = getBindingAttr(el, 'is')) {
	      el.component = binding;
	    }
	    if (getAndRemoveAttr(el, 'inline-template') != null) {
	      el.inlineTemplate = true;
	    }
	  }
	
	  function processAttrs(el) {
	    var list = el.attrsList;
	    var i, l, name, rawName, value, arg, modifiers, isProp;
	    for (i = 0, l = list.length; i < l; i++) {
	      name = rawName = list[i].name;
	      value = list[i].value;
	      if (dirRE.test(name)) {
	        // mark element as dynamic
	        el.hasBindings = true;
	        // modifiers
	        modifiers = parseModifiers(name);
	        if (modifiers) {
	          name = name.replace(modifierRE, '');
	        }
	        if (bindRE.test(name)) {
	          // v-bind
	          name = name.replace(bindRE, '');
	          value = parseFilters(value);
	          isProp = false;
	          if (modifiers) {
	            if (modifiers.prop) {
	              isProp = true;
	              name = camelize(name);
	              if (name === 'innerHtml') {
	                name = 'innerHTML';
	              }
	            }
	            if (modifiers.camel) {
	              name = camelize(name);
	            }
	          }
	          if (isProp || platformMustUseProp(el.tag, name)) {
	            addProp(el, name, value);
	          } else {
	            addAttr(el, name, value);
	          }
	        } else if (onRE.test(name)) {
	          // v-on
	          name = name.replace(onRE, '');
	          addHandler(el, name, value, modifiers);
	        } else {
	          // normal directives
	          name = name.replace(dirRE, '');
	          // parse arg
	          var argMatch = name.match(argRE);
	          if (argMatch && (arg = argMatch[1])) {
	            name = name.slice(0, -(arg.length + 1));
	          }
	          addDirective(el, name, rawName, value, arg, modifiers);
	          if ("development" !== 'production' && name === 'model') {
	            checkForAliasModel(el, value);
	          }
	        }
	      } else {
	        // literal attribute
	        {
	          var expression = parseText(value, delimiters);
	          if (expression) {
	            warn$1(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
	          }
	        }
	        addAttr(el, name, JSON.stringify(value));
	        // #4530 also bind special attributes as props even if they are static
	        // so that patches between dynamic/static are consistent
	        if (platformMustUseProp(el.tag, name)) {
	          if (name === 'value') {
	            addProp(el, name, JSON.stringify(value));
	          } else {
	            addProp(el, name, 'true');
	          }
	        }
	      }
	    }
	  }
	
	  function checkInFor(el) {
	    var parent = el;
	    while (parent) {
	      if (parent.for !== undefined) {
	        return true;
	      }
	      parent = parent.parent;
	    }
	    return false;
	  }
	
	  function parseModifiers(name) {
	    var match = name.match(modifierRE);
	    if (match) {
	      var ret = {};
	      match.forEach(function (m) {
	        ret[m.slice(1)] = true;
	      });
	      return ret;
	    }
	  }
	
	  function makeAttrsMap(attrs) {
	    var map = {};
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	        warn$1('duplicate attribute: ' + attrs[i].name);
	      }
	      map[attrs[i].name] = attrs[i].value;
	    }
	    return map;
	  }
	
	  function isForbiddenTag(el) {
	    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
	  }
	
	  var ieNSBug = /^xmlns:NS\d+/;
	  var ieNSPrefix = /^NS\d+:/;
	
	  /* istanbul ignore next */
	  function guardIESVGBug(attrs) {
	    var res = [];
	    for (var i = 0; i < attrs.length; i++) {
	      var attr = attrs[i];
	      if (!ieNSBug.test(attr.name)) {
	        attr.name = attr.name.replace(ieNSPrefix, '');
	        res.push(attr);
	      }
	    }
	    return res;
	  }
	
	  function checkForAliasModel(el, value) {
	    var _el = el;
	    while (_el) {
	      if (_el.for && _el.alias === value) {
	        warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
	      }
	      _el = _el.parent;
	    }
	  }
	
	  /*  */
	
	  var isStaticKey;
	  var isPlatformReservedTag;
	
	  var genStaticKeysCached = cached(genStaticKeys$1);
	
	  /**
	   * Goal of the optimizer: walk the generated template AST tree
	   * and detect sub-trees that are purely static, i.e. parts of
	   * the DOM that never needs to change.
	   *
	   * Once we detect these sub-trees, we can:
	   *
	   * 1. Hoist them into constants, so that we no longer need to
	   *    create fresh nodes for them on each re-render;
	   * 2. Completely skip them in the patching process.
	   */
	  function optimize(root, options) {
	    if (!root) {
	      return;
	    }
	    isStaticKey = genStaticKeysCached(options.staticKeys || '');
	    isPlatformReservedTag = options.isReservedTag || no;
	    // first pass: mark all non-static nodes.
	    markStatic(root);
	    // second pass: mark static roots.
	    markStaticRoots(root, false);
	  }
	
	  function genStaticKeys$1(keys) {
	    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
	  }
	
	  function markStatic(node) {
	    node.static = isStatic(node);
	    if (node.type === 1) {
	      // do not make component slot content static. this avoids
	      // 1. components not able to mutate slot nodes
	      // 2. static slot content fails for hot-reloading
	      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
	        return;
	      }
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        var child = node.children[i];
	        markStatic(child);
	        if (!child.static) {
	          node.static = false;
	        }
	      }
	    }
	  }
	
	  function markStaticRoots(node, isInFor) {
	    if (node.type === 1) {
	      if (node.static || node.once) {
	        node.staticInFor = isInFor;
	      }
	      // For a node to qualify as a static root, it should have children that
	      // are not just static text. Otherwise the cost of hoisting out will
	      // outweigh the benefits and it's better off to just always render it fresh.
	      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
	        node.staticRoot = true;
	        return;
	      } else {
	        node.staticRoot = false;
	      }
	      if (node.children) {
	        for (var i = 0, l = node.children.length; i < l; i++) {
	          markStaticRoots(node.children[i], isInFor || !!node.for);
	        }
	      }
	      if (node.ifConditions) {
	        walkThroughConditionsBlocks(node.ifConditions, isInFor);
	      }
	    }
	  }
	
	  function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
	    for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	      markStaticRoots(conditionBlocks[i].block, isInFor);
	    }
	  }
	
	  function isStatic(node) {
	    if (node.type === 2) {
	      // expression
	      return false;
	    }
	    if (node.type === 3) {
	      // text
	      return true;
	    }
	    return !!(node.pre || !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
	  }
	
	  function isDirectChildOfTemplateFor(node) {
	    while (node.parent) {
	      node = node.parent;
	      if (node.tag !== 'template') {
	        return false;
	      }
	      if (node.for) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  /*  */
	
	  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
	
	  // keyCode aliases
	  var keyCodes = {
	    esc: 27,
	    tab: 9,
	    enter: 13,
	    space: 32,
	    up: 38,
	    left: 37,
	    right: 39,
	    down: 40,
	    'delete': [8, 46]
	  };
	
	  var modifierCode = {
	    stop: '$event.stopPropagation();',
	    prevent: '$event.preventDefault();',
	    self: 'if($event.target !== $event.currentTarget)return;',
	    ctrl: 'if(!$event.ctrlKey)return;',
	    shift: 'if(!$event.shiftKey)return;',
	    alt: 'if(!$event.altKey)return;',
	    meta: 'if(!$event.metaKey)return;'
	  };
	
	  function genHandlers(events, native) {
	    var res = native ? 'nativeOn:{' : 'on:{';
	    for (var name in events) {
	      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
	    }
	    return res.slice(0, -1) + '}';
	  }
	
	  function genHandler(name, handler) {
	    if (!handler) {
	      return 'function(){}';
	    } else if (Array.isArray(handler)) {
	      return "[" + handler.map(function (handler) {
	        return genHandler(name, handler);
	      }).join(',') + "]";
	    } else if (!handler.modifiers) {
	      return fnExpRE.test(handler.value) || simplePathRE.test(handler.value) ? handler.value : "function($event){" + handler.value + "}";
	    } else {
	      var code = '';
	      var keys = [];
	      for (var key in handler.modifiers) {
	        if (modifierCode[key]) {
	          code += modifierCode[key];
	        } else {
	          keys.push(key);
	        }
	      }
	      if (keys.length) {
	        code = genKeyFilter(keys) + code;
	      }
	      var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
	      return 'function($event){' + code + handlerCode + '}';
	    }
	  }
	
	  function genKeyFilter(keys) {
	    return "if(" + keys.map(genFilterCode).join('&&') + ")return;";
	  }
	
	  function genFilterCode(key) {
	    var keyVal = parseInt(key, 10);
	    if (keyVal) {
	      return "$event.keyCode!==" + keyVal;
	    }
	    var alias = keyCodes[key];
	    return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
	  }
	
	  /*  */
	
	  function bind$2(el, dir) {
	    el.wrapData = function (code) {
	      return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
	    };
	  }
	
	  /*  */
	
	  var baseDirectives = {
	    bind: bind$2,
	    cloak: noop
	  };
	
	  /*  */
	
	  // configurable state
	  var warn$2;
	  var transforms$1;
	  var dataGenFns;
	  var platformDirectives$1;
	  var isPlatformReservedTag$1;
	  var staticRenderFns;
	  var onceCount;
	  var currentOptions;
	
	  function generate(ast, options) {
	    // save previous staticRenderFns so generate calls can be nested
	    var prevStaticRenderFns = staticRenderFns;
	    var currentStaticRenderFns = staticRenderFns = [];
	    var prevOnceCount = onceCount;
	    onceCount = 0;
	    currentOptions = options;
	    warn$2 = options.warn || baseWarn;
	    transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	    dataGenFns = pluckModuleFunction(options.modules, 'genData');
	    platformDirectives$1 = options.directives || {};
	    isPlatformReservedTag$1 = options.isReservedTag || no;
	    var code = ast ? genElement(ast) : '_c("div")';
	    staticRenderFns = prevStaticRenderFns;
	    onceCount = prevOnceCount;
	    return {
	      render: "with(this){return " + code + "}",
	      staticRenderFns: currentStaticRenderFns
	    };
	  }
	
	  function genElement(el) {
	    if (el.staticRoot && !el.staticProcessed) {
	      return genStatic(el);
	    } else if (el.once && !el.onceProcessed) {
	      return genOnce(el);
	    } else if (el.for && !el.forProcessed) {
	      return genFor(el);
	    } else if (el.if && !el.ifProcessed) {
	      return genIf(el);
	    } else if (el.tag === 'template' && !el.slotTarget) {
	      return genChildren(el) || 'void 0';
	    } else if (el.tag === 'slot') {
	      return genSlot(el);
	    } else {
	      // component or element
	      var code;
	      if (el.component) {
	        code = genComponent(el.component, el);
	      } else {
	        var data = el.plain ? undefined : genData(el);
	
	        var children = el.inlineTemplate ? null : genChildren(el, true);
	        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
	      }
	      // module transforms
	      for (var i = 0; i < transforms$1.length; i++) {
	        code = transforms$1[i](el, code);
	      }
	      return code;
	    }
	  }
	
	  // hoist static sub-trees out
	  function genStatic(el) {
	    el.staticProcessed = true;
	    staticRenderFns.push("with(this){return " + genElement(el) + "}");
	    return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
	  }
	
	  // v-once
	  function genOnce(el) {
	    el.onceProcessed = true;
	    if (el.if && !el.ifProcessed) {
	      return genIf(el);
	    } else if (el.staticInFor) {
	      var key = '';
	      var parent = el.parent;
	      while (parent) {
	        if (parent.for) {
	          key = parent.key;
	          break;
	        }
	        parent = parent.parent;
	      }
	      if (!key) {
	        "development" !== 'production' && warn$2("v-once can only be used inside v-for that is keyed. ");
	        return genElement(el);
	      }
	      return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
	    } else {
	      return genStatic(el);
	    }
	  }
	
	  function genIf(el) {
	    el.ifProcessed = true; // avoid recursion
	    return genIfConditions(el.ifConditions.slice());
	  }
	
	  function genIfConditions(conditions) {
	    if (!conditions.length) {
	      return '_e()';
	    }
	
	    var condition = conditions.shift();
	    if (condition.exp) {
	      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
	    } else {
	      return "" + genTernaryExp(condition.block);
	    }
	
	    // v-if with v-once should generate code like (a)?_m(0):_m(1)
	    function genTernaryExp(el) {
	      return el.once ? genOnce(el) : genElement(el);
	    }
	  }
	
	  function genFor(el) {
	    var exp = el.for;
	    var alias = el.alias;
	    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
	    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
	    el.forProcessed = true; // avoid recursion
	    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
	  }
	
	  function genData(el) {
	    var data = '{';
	
	    // directives first.
	    // directives may mutate the el's other properties before they are generated.
	    var dirs = genDirectives(el);
	    if (dirs) {
	      data += dirs + ',';
	    }
	
	    // key
	    if (el.key) {
	      data += "key:" + el.key + ",";
	    }
	    // ref
	    if (el.ref) {
	      data += "ref:" + el.ref + ",";
	    }
	    if (el.refInFor) {
	      data += "refInFor:true,";
	    }
	    // pre
	    if (el.pre) {
	      data += "pre:true,";
	    }
	    // record original tag name for components using "is" attribute
	    if (el.component) {
	      data += "tag:\"" + el.tag + "\",";
	    }
	    // module data generation functions
	    for (var i = 0; i < dataGenFns.length; i++) {
	      data += dataGenFns[i](el);
	    }
	    // attributes
	    if (el.attrs) {
	      data += "attrs:{" + genProps(el.attrs) + "},";
	    }
	    // DOM props
	    if (el.props) {
	      data += "domProps:{" + genProps(el.props) + "},";
	    }
	    // event handlers
	    if (el.events) {
	      data += genHandlers(el.events) + ",";
	    }
	    if (el.nativeEvents) {
	      data += genHandlers(el.nativeEvents, true) + ",";
	    }
	    // slot target
	    if (el.slotTarget) {
	      data += "slot:" + el.slotTarget + ",";
	    }
	    // scoped slots
	    if (el.scopedSlots) {
	      data += genScopedSlots(el.scopedSlots) + ",";
	    }
	    // inline-template
	    if (el.inlineTemplate) {
	      var inlineTemplate = genInlineTemplate(el);
	      if (inlineTemplate) {
	        data += inlineTemplate + ",";
	      }
	    }
	    data = data.replace(/,$/, '') + '}';
	    // v-bind data wrap
	    if (el.wrapData) {
	      data = el.wrapData(data);
	    }
	    return data;
	  }
	
	  function genDirectives(el) {
	    var dirs = el.directives;
	    if (!dirs) {
	      return;
	    }
	    var res = 'directives:[';
	    var hasRuntime = false;
	    var i, l, dir, needRuntime;
	    for (i = 0, l = dirs.length; i < l; i++) {
	      dir = dirs[i];
	      needRuntime = true;
	      var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	      if (gen) {
	        // compile-time directive that manipulates AST.
	        // returns true if it also needs a runtime counterpart.
	        needRuntime = !!gen(el, dir, warn$2);
	      }
	      if (needRuntime) {
	        hasRuntime = true;
	        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
	      }
	    }
	    if (hasRuntime) {
	      return res.slice(0, -1) + ']';
	    }
	  }
	
	  function genInlineTemplate(el) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
	        return "function(){" + code + "}";
	      }).join(',') + "]}";
	    }
	  }
	
	  function genScopedSlots(slots) {
	    return "scopedSlots:{" + Object.keys(slots).map(function (key) {
	      return genScopedSlot(key, slots[key]);
	    }).join(',') + "}";
	  }
	
	  function genScopedSlot(key, el) {
	    return key + ":function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}";
	  }
	
	  function genChildren(el, checkSkip) {
	    var children = el.children;
	    if (children.length) {
	      var el$1 = children[0];
	      // optimize single v-for
	      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
	        return genElement(el$1);
	      }
	      var normalizationType = getNormalizationType(children);
	      return "[" + children.map(genNode).join(',') + "]" + (checkSkip ? normalizationType ? "," + normalizationType : '' : '');
	    }
	  }
	
	  // determine the normalization needed for the children array.
	  // 0: no normalization needed
	  // 1: simple normalization needed (possible 1-level deep nested array)
	  // 2: full normalization needed
	  function getNormalizationType(children) {
	    var res = 0;
	    for (var i = 0; i < children.length; i++) {
	      var el = children[i];
	      if (needsNormalization(el) || el.if && el.ifConditions.some(function (c) {
	        return needsNormalization(c.block);
	      })) {
	        res = 2;
	        break;
	      }
	      if (maybeComponent(el) || el.if && el.ifConditions.some(function (c) {
	        return maybeComponent(c.block);
	      })) {
	        res = 1;
	      }
	    }
	    return res;
	  }
	
	  function needsNormalization(el) {
	    return el.for || el.tag === 'template' || el.tag === 'slot';
	  }
	
	  function maybeComponent(el) {
	    return el.type === 1 && !isPlatformReservedTag$1(el.tag);
	  }
	
	  function genNode(node) {
	    if (node.type === 1) {
	      return genElement(node);
	    } else {
	      return genText(node);
	    }
	  }
	
	  function genText(text) {
	    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
	  }
	
	  function genSlot(el) {
	    var slotName = el.slotName || '"default"';
	    var children = genChildren(el);
	    var res = "_t(" + slotName + (children ? "," + children : '');
	    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
	      return camelize(a.name) + ":" + a.value;
	    }).join(',') + "}";
	    var bind$$1 = el.attrsMap['v-bind'];
	    if ((attrs || bind$$1) && !children) {
	      res += ",null";
	    }
	    if (attrs) {
	      res += "," + attrs;
	    }
	    if (bind$$1) {
	      res += (attrs ? '' : ',null') + "," + bind$$1;
	    }
	    return res + ')';
	  }
	
	  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
	  function genComponent(componentName, el) {
	    var children = el.inlineTemplate ? null : genChildren(el, true);
	    return "_c(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
	  }
	
	  function genProps(props) {
	    var res = '';
	    for (var i = 0; i < props.length; i++) {
	      var prop = props[i];
	      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
	    }
	    return res.slice(0, -1);
	  }
	
	  // #3895, #4268
	  function transformSpecialNewlines(text) {
	    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
	  }
	
	  /*  */
	
	  /**
	   * Compile a template.
	   */
	  function compile$1(template, options) {
	    var ast = parse(template.trim(), options);
	    optimize(ast, options);
	    var code = generate(ast, options);
	    return {
	      ast: ast,
	      render: code.render,
	      staticRenderFns: code.staticRenderFns
	    };
	  }
	
	  /*  */
	
	  // operators like typeof, instanceof and in are allowed
	  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');
	  // check valid identifier for v-for
	  var identRE = /[A-Za-z_$][\w$]*/;
	  // strip strings in expressions
	  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	  // detect problematic expressions in a template
	  function detectErrors(ast) {
	    var errors = [];
	    if (ast) {
	      checkNode(ast, errors);
	    }
	    return errors;
	  }
	
	  function checkNode(node, errors) {
	    if (node.type === 1) {
	      for (var name in node.attrsMap) {
	        if (dirRE.test(name)) {
	          var value = node.attrsMap[name];
	          if (value) {
	            if (name === 'v-for') {
	              checkFor(node, "v-for=\"" + value + "\"", errors);
	            } else {
	              checkExpression(value, name + "=\"" + value + "\"", errors);
	            }
	          }
	        }
	      }
	      if (node.children) {
	        for (var i = 0; i < node.children.length; i++) {
	          checkNode(node.children[i], errors);
	        }
	      }
	    } else if (node.type === 2) {
	      checkExpression(node.expression, node.text, errors);
	    }
	  }
	
	  function checkFor(node, text, errors) {
	    checkExpression(node.for || '', text, errors);
	    checkIdentifier(node.alias, 'v-for alias', text, errors);
	    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	  }
	
	  function checkIdentifier(ident, type, text, errors) {
	    if (typeof ident === 'string' && !identRE.test(ident)) {
	      errors.push("- invalid " + type + " \"" + ident + "\" in expression: " + text);
	    }
	  }
	
	  function checkExpression(exp, text, errors) {
	    try {
	      new Function("return " + exp);
	    } catch (e) {
	      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	      if (keywordMatch) {
	        errors.push("- avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text);
	      } else {
	        errors.push("- invalid expression: " + text);
	      }
	    }
	  }
	
	  /*  */
	
	  function transformNode(el, options) {
	    var warn = options.warn || baseWarn;
	    var staticClass = getAndRemoveAttr(el, 'class');
	    if ("development" !== 'production' && staticClass) {
	      var expression = parseText(staticClass, options.delimiters);
	      if (expression) {
	        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
	      }
	    }
	    if (staticClass) {
	      el.staticClass = JSON.stringify(staticClass);
	    }
	    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	    if (classBinding) {
	      el.classBinding = classBinding;
	    }
	  }
	
	  function genData$1(el) {
	    var data = '';
	    if (el.staticClass) {
	      data += "staticClass:" + el.staticClass + ",";
	    }
	    if (el.classBinding) {
	      data += "class:" + el.classBinding + ",";
	    }
	    return data;
	  }
	
	  var klass$1 = {
	    staticKeys: ['staticClass'],
	    transformNode: transformNode,
	    genData: genData$1
	  };
	
	  /*  */
	
	  function transformNode$1(el, options) {
	    var warn = options.warn || baseWarn;
	    var staticStyle = getAndRemoveAttr(el, 'style');
	    if (staticStyle) {
	      /* istanbul ignore if */
	      {
	        var expression = parseText(staticStyle, options.delimiters);
	        if (expression) {
	          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
	        }
	      }
	      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	    }
	
	    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	    if (styleBinding) {
	      el.styleBinding = styleBinding;
	    }
	  }
	
	  function genData$2(el) {
	    var data = '';
	    if (el.staticStyle) {
	      data += "staticStyle:" + el.staticStyle + ",";
	    }
	    if (el.styleBinding) {
	      data += "style:(" + el.styleBinding + "),";
	    }
	    return data;
	  }
	
	  var style$1 = {
	    staticKeys: ['staticStyle'],
	    transformNode: transformNode$1,
	    genData: genData$2
	  };
	
	  var modules$1 = [klass$1, style$1];
	
	  /*  */
	
	  var warn$3;
	
	  function model$1(el, dir, _warn) {
	    warn$3 = _warn;
	    var value = dir.value;
	    var modifiers = dir.modifiers;
	    var tag = el.tag;
	    var type = el.attrsMap.type;
	    {
	      var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	      if (tag === 'input' && dynamicType) {
	        warn$3("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
	      }
	    }
	    if (tag === 'select') {
	      genSelect(el, value, modifiers);
	    } else if (tag === 'input' && type === 'checkbox') {
	      genCheckboxModel(el, value, modifiers);
	    } else if (tag === 'input' && type === 'radio') {
	      genRadioModel(el, value, modifiers);
	    } else {
	      genDefaultModel(el, value, modifiers);
	    }
	    // ensure runtime directive metadata
	    return true;
	  }
	
	  function genCheckboxModel(el, value, modifiers) {
	    if ("development" !== 'production' && el.attrsMap.checked != null) {
	      warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
	    }
	    var number = modifiers && modifiers.number;
	    var valueBinding = getBindingAttr(el, 'value') || 'null';
	    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
	    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
	  }
	
	  function genRadioModel(el, value, modifiers) {
	    if ("development" !== 'production' && el.attrsMap.checked != null) {
	      warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
	    }
	    var number = modifiers && modifiers.number;
	    var valueBinding = getBindingAttr(el, 'value') || 'null';
	    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
	    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
	    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	  }
	
	  function genDefaultModel(el, value, modifiers) {
	    {
	      if (el.tag === 'input' && el.attrsMap.value) {
	        warn$3("<" + el.tag + " v-model=\"" + value + "\" value=\"" + el.attrsMap.value + "\">:\n" + 'inline value attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	      }
	      if (el.tag === 'textarea' && el.children.length) {
	        warn$3("<textarea v-model=\"" + value + "\">:\n" + 'inline content inside <textarea> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	      }
	    }
	
	    var type = el.attrsMap.type;
	    var ref = modifiers || {};
	    var lazy = ref.lazy;
	    var number = ref.number;
	    var trim = ref.trim;
	    var event = lazy || isIE && type === 'range' ? 'change' : 'input';
	    var needCompositionGuard = !lazy && type !== 'range';
	    var isNative = el.tag === 'input' || el.tag === 'textarea';
	
	    var valueExpression = isNative ? "$event.target.value" + (trim ? '.trim()' : '') : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	    valueExpression = number || type === 'number' ? "_n(" + valueExpression + ")" : valueExpression;
	
	    var code = genAssignmentCode(value, valueExpression);
	    if (isNative && needCompositionGuard) {
	      code = "if($event.target.composing)return;" + code;
	    }
	
	    // inputs with type="file" are read only and setting the input's
	    // value will throw an error.
	    if ("development" !== 'production' && type === 'file') {
	      warn$3("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
	    }
	
	    addProp(el, 'value', isNative ? "_s(" + value + ")" : "(" + value + ")");
	    addHandler(el, event, code, null, true);
	    if (trim || number || type === 'number') {
	      addHandler(el, 'blur', '$forceUpdate()');
	    }
	  }
	
	  function genSelect(el, value, modifiers) {
	    {
	      el.children.some(checkOptionWarning);
	    }
	
	    var number = modifiers && modifiers.number;
	    var assignment = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})" + (el.attrsMap.multiple == null ? '[0]' : '');
	
	    var code = genAssignmentCode(value, assignment);
	    addHandler(el, 'change', code, null, true);
	  }
	
	  function checkOptionWarning(option) {
	    if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
	      warn$3("<select v-model=\"" + option.parent.attrsMap['v-model'] + "\">:\n" + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	      return true;
	    }
	    return false;
	  }
	
	  function genAssignmentCode(value, assignment) {
	    var modelRs = parseModel(value);
	    if (modelRs.idx === null) {
	      return value + "=" + assignment;
	    } else {
	      return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
	    }
	  }
	
	  /*  */
	
	  function text(el, dir) {
	    if (dir.value) {
	      addProp(el, 'textContent', "_s(" + dir.value + ")");
	    }
	  }
	
	  /*  */
	
	  function html(el, dir) {
	    if (dir.value) {
	      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
	    }
	  }
	
	  var directives$1 = {
	    model: model$1,
	    text: text,
	    html: html
	  };
	
	  /*  */
	
	  var cache = Object.create(null);
	
	  var baseOptions = {
	    expectHTML: true,
	    modules: modules$1,
	    staticKeys: genStaticKeys(modules$1),
	    directives: directives$1,
	    isReservedTag: isReservedTag,
	    isUnaryTag: isUnaryTag,
	    mustUseProp: mustUseProp,
	    getTagNamespace: getTagNamespace,
	    isPreTag: isPreTag
	  };
	
	  function compile$$1(template, options) {
	    options = options ? extend(extend({}, baseOptions), options) : baseOptions;
	    return compile$1(template, options);
	  }
	
	  function compileToFunctions(template, options, vm) {
	    var _warn = options && options.warn || warn;
	    // detect possible CSP restriction
	    /* istanbul ignore if */
	    {
	      try {
	        new Function('return 1');
	      } catch (e) {
	        if (e.toString().match(/unsafe-eval|CSP/)) {
	          _warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
	        }
	      }
	    }
	    var key = options && options.delimiters ? String(options.delimiters) + template : template;
	    if (cache[key]) {
	      return cache[key];
	    }
	    var res = {};
	    var compiled = compile$$1(template, options);
	    res.render = makeFunction(compiled.render);
	    var l = compiled.staticRenderFns.length;
	    res.staticRenderFns = new Array(l);
	    for (var i = 0; i < l; i++) {
	      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	    }
	    {
	      if (res.render === noop || res.staticRenderFns.some(function (fn) {
	        return fn === noop;
	      })) {
	        _warn("failed to compile template:\n\n" + template + "\n\n" + detectErrors(compiled.ast).join('\n') + '\n\n', vm);
	      }
	    }
	    return cache[key] = res;
	  }
	
	  function makeFunction(code) {
	    try {
	      return new Function(code);
	    } catch (e) {
	      return noop;
	    }
	  }
	
	  /*  */
	
	  var idToTemplate = cached(function (id) {
	    var el = query(id);
	    return el && el.innerHTML;
	  });
	
	  var mount = Vue$3.prototype.$mount;
	  Vue$3.prototype.$mount = function (el, hydrating) {
	    el = el && query(el);
	
	    /* istanbul ignore if */
	    if (el === document.body || el === document.documentElement) {
	      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
	      return this;
	    }
	
	    var options = this.$options;
	    // resolve template/el and convert to render function
	    if (!options.render) {
	      var template = options.template;
	      if (template) {
	        if (typeof template === 'string') {
	          if (template.charAt(0) === '#') {
	            template = idToTemplate(template);
	            /* istanbul ignore if */
	            if ("development" !== 'production' && !template) {
	              warn("Template element not found or is empty: " + options.template, this);
	            }
	          }
	        } else if (template.nodeType) {
	          template = template.innerHTML;
	        } else {
	          {
	            warn('invalid template option:' + template, this);
	          }
	          return this;
	        }
	      } else if (el) {
	        template = getOuterHTML(el);
	      }
	      if (template) {
	        var ref = compileToFunctions(template, {
	          warn: warn,
	          shouldDecodeNewlines: shouldDecodeNewlines,
	          delimiters: options.delimiters
	        }, this);
	        var render = ref.render;
	        var staticRenderFns = ref.staticRenderFns;
	        options.render = render;
	        options.staticRenderFns = staticRenderFns;
	      }
	    }
	    return mount.call(this, el, hydrating);
	  };
	
	  /**
	   * Get outerHTML of elements, taking care
	   * of SVG elements in IE as well.
	   */
	  function getOuterHTML(el) {
	    if (el.outerHTML) {
	      return el.outerHTML;
	    } else {
	      var container = document.createElement('div');
	      container.appendChild(el.cloneNode(true));
	      return container.innerHTML;
	    }
	  }
	
	  Vue$3.compile = compileToFunctions;
	
	  return Vue$3;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Swiper 3.4.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: December 13, 2016
	 */
	(function () {
	    'use strict';
	
	    var $;
	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function Swiper(container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);
	
	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeMomentumVelocityRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows: true
	            },
	            flip: {
	                slideShadows: true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Zoom
	            zoom: false,
	            zoomMax: 3,
	            zoomMin: 1,
	            zoomToggle: true,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            mousewheelEventsTarged: 'container',
	            // Hash Navigation
	            hashnav: false,
	            hashnavWatchState: false,
	            // History
	            history: false,
	            // Commong Nav State
	            replaceState: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            touchReleaseOnEdges: false,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            normalizeSlideIndex: true,
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // Passive Listeners
	            passiveListeners: true,
	            // NS
	            containerModifierClass: 'swiper-container-', // NEW
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	            slidePrevClass: 'swiper-slide-prev',
	            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            paginationClickableClass: 'swiper-pagination-clickable', // NEW
	            paginationModifierClass: 'swiper-pagination-', // NEW
	            lazyLoadingClass: 'swiper-lazy',
	            lazyStatusLoadingClass: 'swiper-lazy-loading',
	            lazyStatusLoadedClass: 'swiper-lazy-loaded',
	            lazyPreloaderClass: 'swiper-lazy-preloader',
	            notificationClass: 'swiper-notification',
	            preloaderClass: 'preloader',
	            zoomContainerClass: 'swiper-zoom-container',
	
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (_typeof(params[param]) === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || typeof Dom7 !== 'undefined' && params[param] instanceof Dom7 || typeof jQuery !== 'undefined' && params[param] instanceof jQuery)) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            } else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            } else if (_typeof(params[def]) === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	
	        // Swiper
	        var s = this;
	
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            } else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [],
	                point;
	            for (point in s.params.breakpoints) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && breakPointsParams.slidesPerView !== s.params.slidesPerView;
	                for (var param in breakPointsParams) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if (needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	
	        s.classNames.push(s.params.containerModifierClass + s.params.direction);
	
	        if (s.params.freeMode) {
	            s.classNames.push(s.params.containerModifierClass + 'free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push(s.params.containerModifierClass + 'autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Max resistance when touchReleaseOnEdges
	        if (s.params.touchReleaseOnEdges) {
	            s.params.resistanceRatio = 0;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push(s.params.containerModifierClass + '3d');
	            } else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push(s.params.containerModifierClass + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
	            } else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push(s.params.containerModifierClass + 'rtl');
	        }
	
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push(s.params.containerModifierClass + 'multirow');
	        }
	
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push(s.params.containerModifierClass + 'android');
	        }
	
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	
	        // Translate
	        s.translate = 0;
	
	        // Progress
	        s.progress = 0;
	
	        // Velocity
	        s.velocity = 0;
	
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	            if (s.params.grabCursor) s.unsetGrabCursor();
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	            if (s.params.grabCursor) s.setGrabCursor();
	        };
	
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        s.setGrabCursor = function (moving) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	            s.container[0].style.cursor = moving ? 'grabbing' : 'grab';
	        };
	        s.unsetGrabCursor = function () {
	            s.container[0].style.cursor = '';
	        };
	        if (s.params.grabCursor) {
	            s.setGrabCursor();
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	
	        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
	            var image;
	            function onReady() {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (sizes) {
	                        image.sizes = sizes;
	                    }
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	            } else {
	                //image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null || !s) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'), s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset'), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
	            }
	        };
	
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            var autoplayDelay = s.params.autoplay;
	            var activeSlide = s.slides.eq(s.activeIndex);
	            if (activeSlide.attr('data-swiper-autoplay')) {
	                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
	            }
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                } else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    } else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        } else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, autoplayDelay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            } else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    } else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return -s.snapGrid[0];
	        };
	        s.maxTranslate = function () {
	            return -s.snapGrid[s.snapGrid.length - 1];
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            var activeSlides = [];
	            var newHeight = 0;
	            var i;
	
	            // Find slides currently in view
	            if (s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
	                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
	                    var index = s.activeIndex + i;
	                    if (index > s.slides.length) break;
	                    activeSlides.push(s.slides.eq(index)[0]);
	                }
	            } else {
	                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
	            }
	
	            // Find new height from heighest slide in view
	            for (i = 0; i < activeSlides.length; i++) {
	                if (typeof activeSlides[i] !== 'undefined') {
	                    var height = activeSlides[i].offsetHeight;
	                    newHeight = height > newHeight ? height : newHeight;
	                }
	            }
	
	            // Update Height
	            if (newHeight) s.wrapper.css('height', newHeight + 'px');
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            } else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            } else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({ marginLeft: '', marginTop: '' });else s.slides.css({ marginRight: '', marginBottom: '' });
	
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                } else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide.css({
	                            '-webkit-box-ordinal-group': newSlideOrderIndex,
	                            '-moz-box-ordinal-group': newSlideOrderIndex,
	                            '-ms-flex-order': newSlideOrderIndex,
	                            '-webkit-order': newSlideOrderIndex,
	                            'order': newSlideOrderIndex
	                        });
	                    } else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide.css('margin-' + (s.isHorizontal() ? 'top' : 'left'), row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px').attr('data-swiper-column', column).attr('data-swiper-row', row);
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                } else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    } else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                } else {
	                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	
	                s.virtualSize += slideSize + spaceBetween;
	
	                prevSlideSize = slideSize;
	
	                index++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	
	            if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
	            }
	
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({ marginLeft: spaceBetween + 'px' });else s.slides.css({ marginRight: spaceBetween + 'px' });
	                } else s.slides.css({ marginBottom: spaceBetween + 'px' });
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	
	        /*=========================
	          Dynamic Slides Per View
	          ===========================*/
	        s.currentSlidesPerView = function () {
	            var spv = 1,
	                i,
	                j;
	            if (s.params.centeredSlides) {
	                var size = s.slides[s.activeIndex].swiperSlideSize;
	                var breakLoop;
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slides[i] && !breakLoop) {
	                        size += s.slides[i].swiperSlideSize;
	                        spv++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	                for (j = s.activeIndex - 1; j >= 0; j--) {
	                    if (s.slides[j] && !breakLoop) {
	                        size += s.slides[j].swiperSlideSize;
	                        spv++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	            } else {
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
	                        spv++;
	                    }
	                }
	            }
	            return spv;
	        };
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible = slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            } else {
	                s.progress = (translate - s.minTranslate()) / translatesDiff;
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                } else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if (s.params.normalizeSlideIndex) {
	                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            }
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	            // if (- translate >= s.slidesGrid[i]) {
	            // newActiveIndex = i;
	            // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	            s.updateRealIndex();
	        };
	        s.updateRealIndex = function () {
	            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
	        };
	
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	            }
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                nextSlide = s.slides.eq(0);
	                nextSlide.addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                prevSlide = s.slides.eq(-1);
	                prevSlide.addClass(s.params.slidePrevClass);
	            }
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	            }
	
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                } else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    } else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    } else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    } else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    } else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
	                        } else {
	                            paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    } else {
	                        paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    } else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            if (!s) return;
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                var translate = s.rtl ? -s.translate : s.translate;
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                } else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    } else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            } else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            } else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                } else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	
	        /*=========================
	          Events
	          ===========================*/
	
	        //Define Touch Events
	        s.touchEventsDesktop = { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
	        if (window.navigator.pointerEnabled) s.touchEventsDesktop = { start: 'pointerdown', move: 'pointermove', end: 'pointerup' };else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = { start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp' };
	        s.touchEvents = {
	            start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : s.touchEventsDesktop.start,
	            move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
	            end: s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
	        };
	
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	
	            var moveCapture = s.params.nested ? true : false;
	
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            } else {
	                if (s.support.touch) {
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
	                }
	                if (params.simulateTouch && !s.device.ios && !s.device.android || params.simulateTouch && !s.support.touch && s.device.ios) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                } else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            } else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides,
	                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
	                    if (s.params.centeredSlides) {
	                        if (slideToIndex < s.loopedSlides - slidesPerView / 2 || slideToIndex > s.slides.length - s.loopedSlides + slidesPerView / 2) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        } else {
	                            s.slideTo(slideToIndex);
	                        }
	                    } else {
	                        if (slideToIndex > s.slides.length - slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        } else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                } else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	
	        // Form elements to match
	        formElements = 'input, select, textarea, button, video',
	
	        // Last click time
	        lastClickTime = Date.now(),
	            clickTimeout,
	
	        //Velocities
	        velocities = [],
	            allowMomentumBounce;
	
	        // Animating Flag
	        s.animating = false;
	
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
	                if (!s.isHorizontal()) {
	                    // Vertical
	                    if (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate() || s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate()) {
	                        return;
	                    }
	                } else {
	                    if (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate() || s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate()) {
	                        return;
	                    }
	                }
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle;
	                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
	                    isScrolling = false;
	                } else {
	                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : 90 - touchAngle > s.params.touchAngle;
	                }
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling) {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    } else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                    s.setGrabCursor(true);
	                }
	            }
	            isMoved = true;
	
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	
	            var disableParentSwiper = true;
	            if (diff > 0 && currentTranslate > s.minTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                } else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	
	            if (!s.params.followFinger) return;
	
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: new window.Date().getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                s.setGrabCursor(false);
	            }
	
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && touchEndTime - lastClickTime > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	                }
	                if (timeDiff < 300 && touchEndTime - lastClickTime < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            } else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                } else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    } else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(),
	                            velocityEvent = velocities.pop();
	
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || new window.Date().getTime() - lastMoveEvent.time > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
	
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = -newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        } else {
	                            newPosition = s.maxTranslate();
	                        }
	                    } else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        } else {
	                            newPosition = s.minTranslate();
	                        }
	                    } else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = -newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        } else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    } else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	
	            // Find current slide
	            var i,
	                stopIndex = 0,
	                groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                } else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > 1 - s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
	                }
	            } else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	
	            var translate = -s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                } else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	
	            // Normalize slideIndex
	            if (s.params.normalizeSlideIndex) {
	                for (var i = 0; i < s.slidesGrid.length; i++) {
	                    if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                        slideIndex = i;
	                    }
	                }
	            }
	
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex) return false;
	            }
	
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	            s.updateRealIndex();
	            if (s.rtl && -translate === s.translate || !s.rtl && translate === s.translate) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	
	            if (speed === 0 || s.browser.lteIE9) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            } else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	            }
	
	            return true;
	        };
	
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    } else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    } else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.history && s.history) {
	                s.history.setHistory(s.params.history, s.activeIndex);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	
	        s.disableTouchControl = function () {
	            s.params.onlyExternal = true;
	            return true;
	        };
	        s.enableTouchControl = function () {
	            s.params.onlyExternal = false;
	            return true;
	        };
	
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0,
	                y = 0,
	                z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            } else {
	                y = translate;
	            }
	
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	
	            s.translate = s.isHorizontal() ? x : y;
	
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            } else {
	                progress = (translate - s.minTranslate()) / translatesDiff;
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function (a) {
	                        return a.replace(',', '.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            } else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	                    //Normal Browsers
	                    else curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	                    //Normal Browsers
	                    else curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	
	            // Observe container
	            initObserver(s.container[0], { childList: false });
	
	            // Observe wrapper
	            initObserver(s.wrapper[0], { attributes: false });
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	
	            if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	
	            var prependSlides = [],
	                appendSlides = [],
	                i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if (s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2) {
	                    newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                    newIndex = newIndex + s.loopedSlides;
	                    s.slideTo(newIndex, 0, false, true);
	                }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            } else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            } else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if ((typeof slidesIndexes === 'undefined' ? 'undefined' : _typeof(slidesIndexes)) === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            } else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	
	            if (s.params.loop) {
	                s.createLoop();
	            }
	
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            } else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	
	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function setTranslate() {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide.css({
	                            opacity: slideOpacity
	                        }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function setTranslate() {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        } else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	
	                        slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function setTranslate() {
	                    var wrapperRotate = 0,
	                        cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({ height: s.width + 'px' });
	                        } else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0,
	                            ty = 0,
	                            tz = 0;
	                        if (i % 4 === 0) {
	                            tx = -round * 4 * s.size;
	                            tz = 0;
	                        } else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = -round * 4 * s.size;
	                        } else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        } else if ((i - 3) % 4 === 0) {
	                            tx = -s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        '-moz-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        '-ms-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        'transform-origin': '50% 50% -' + s.size / 2 + 'px'
	                    });
	
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + -s.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + s.params.cube.shadowScale + ')');
	                        } else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + -s.height / 2 / scale2 + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = s.isSafari || s.isUiWebView ? -s.size / 2 : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function setTranslate() {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * offsetMultiplier;
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * offsetMultiplier : 0;
	
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };
	
	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function loadImageInSlide(index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	
	                var slide = s.slides.eq(index);
	                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
	                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass(s.params.lazyStatusLoadingClass);
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset'),
	                        sizes = _img.attr('data-sizes');
	                    s.loadImage(_img[0], src || background, srcset, sizes, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        } else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (sizes) {
	                                _img.attr('sizes', sizes);
	                                _img.removeAttr('data-sizes');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	                        }
	
	                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
	                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            } else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	            },
	            load: function load() {
	                var i;
	                var slidesPerView = s.params.slidesPerView;
	                if (slidesPerView === 'auto') {
	                    slidesPerView = 0;
	                }
	                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                } else {
	                    if (slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    } else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (slidesPerView > 1 || s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    } else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function onTransitionStart() {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function onTransitionEnd() {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	
	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function setDragPosition(e) {
	                var sb = s.scrollbar;
	                var x = 0,
	                    y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
	                var position = pointerPosition - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                } else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function dragStart(e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function dragMove(e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function dragEnd(e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            draggableEvents: function () {
	                if (s.params.simulateTouch === false && !s.support.touch) return s.touchEventsDesktop;else return s.touchEvents;
	            }(),
	            enableDraggable: function enableDraggable() {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
	                $(target).on(sb.draggableEvents.move, sb.dragMove);
	                $(target).on(sb.draggableEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function disableDraggable() {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(s.draggableEvents.start, sb.dragStart);
	                $(target).off(s.draggableEvents.move, sb.dragMove);
	                $(target).off(s.draggableEvents.end, sb.dragEnd);
	            },
	            set: function set() {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                } else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                } else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function setTranslate() {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    } else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                } else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    } else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + newPos + 'px, 0, 0)');
	                    } else {
	                        sb.drag.transform('translateX(' + newPos + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                } else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + newPos + 'px, 0)');
	                    } else {
	                        sb.drag.transform('translateY(' + newPos + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function setTransition(duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };
	
	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function LinearSpline(x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	
	                var binarySearch = function () {
	                    var maxIndex, minIndex, guess;
	                    return function (array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1) {
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        }return maxIndex;
	                    };
	                }();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function getInterpolateFunction(c) {
	                if (!s.controller.spline) s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function setTranslate(translate, byController) {
	                var controlled = s.params.control;
	                var multiplier, controlledTranslate;
	                function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	
	                    if (!controlledTranslate || s.params.controlBy === 'container') {
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	                }
	                if (s.isArray(controlled)) {
	                    for (var i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTranslate(controlled[i]);
	                        }
	                    }
	                } else if (controlled instanceof Swiper && byController !== controlled) {
	
	                    setControlledTranslate(controlled);
	                }
	            },
	            setTransition: function setTransition(duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function () {
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                } else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };
	
	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            onHashCange: function onHashCange(e, a) {
	                var newHash = document.location.hash.replace('#', '');
	                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
	                if (newHash !== activeSlideHash) {
	                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + newHash + '"]').index());
	                }
	            },
	            attachEvents: function attachEvents(detach) {
	                var action = detach ? 'off' : 'on';
	                $(window)[action]('hashchange', s.hashnav.onHashCange);
	            },
	            setHash: function setHash() {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                if (s.params.replaceState && window.history && window.history.replaceState) {
	                    window.history.replaceState(null, null, '#' + s.slides.eq(s.activeIndex).attr('data-hash') || '');
	                } else {
	                    var slide = s.slides.eq(s.activeIndex);
	                    var hash = slide.attr('data-hash') || slide.attr('data-history');
	                    document.location.hash = hash || '';
	                }
	            },
	            init: function init() {
	                if (!s.params.hashnav || s.params.history) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (!hash) return;
	                var speed = 0;
	                for (var i = 0, length = s.slides.length; i < length; i++) {
	                    var slide = s.slides.eq(i);
	                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                        var index = slide.index();
	                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                    }
	                }
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
	            },
	            destroy: function destroy() {
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          History Api with fallback to Hashnav
	          ===========================*/
	        s.history = {
	            init: function init() {
	                if (!s.params.history) return;
	                if (!window.history || !window.history.pushState) {
	                    s.params.history = false;
	                    s.params.hashnav = true;
	                    return;
	                }
	                s.history.initialized = true;
	                this.paths = this.getPathValues();
	                if (!this.paths.key && !this.paths.value) return;
	                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
	                if (!s.params.replaceState) {
	                    window.addEventListener('popstate', this.setHistoryPopState);
	                }
	            },
	            setHistoryPopState: function setHistoryPopState() {
	                s.history.paths = s.history.getPathValues();
	                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
	            },
	            getPathValues: function getPathValues() {
	                var pathArray = window.location.pathname.slice(1).split('/');
	                var total = pathArray.length;
	                var key = pathArray[total - 2];
	                var value = pathArray[total - 1];
	                return { key: key, value: value };
	            },
	            setHistory: function setHistory(key, index) {
	                if (!s.history.initialized || !s.params.history) return;
	                var slide = s.slides.eq(index);
	                var value = this.slugify(slide.attr('data-history'));
	                if (!window.location.pathname.includes(key)) {
	                    value = key + '/' + value;
	                }
	                if (s.params.replaceState) {
	                    window.history.replaceState(null, null, value);
	                } else {
	                    window.history.pushState(null, null, value);
	                }
	            },
	            slugify: function slugify(text) {
	                return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
	            },
	            scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
	                if (value) {
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHistory = this.slugify(slide.attr('data-history'));
	                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, runCallbacks);
	                        }
	                    }
	                } else {
	                    s.slideTo(0, speed, runCallbacks);
	                }
	            }
	        };
	
	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
	                        inView = true;
	                    }
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                }
	                if (kc === 39 && !s.rtl || kc === 37 && s.rtl) s.slideNext();
	                if (kc === 37 && !s.rtl || kc === 39 && s.rtl) s.slidePrev();
	            } else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	
	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: new window.Date().getTime()
	        };
	        if (s.params.mousewheelControl) {
	            /**
	             * The best combination if you prefer spinX + spinY normalization.  It favors
	             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	             * 'wheel' event, making spin speed determination impossible.
	             */
	            s.mousewheel.event = navigator.userAgent.indexOf('firefox') > -1 ? 'DOMMouseScroll' : isEventSupported() ? 'wheel' : 'mousewheel';
	        }
	
	        function isEventSupported() {
	            var eventName = 'onwheel';
	            var isSupported = eventName in document;
	
	            if (!isSupported) {
	                var element = document.createElement('div');
	                element.setAttribute(eventName, 'return;');
	                isSupported = typeof element[eventName] === 'function';
	            }
	
	            if (!isSupported && document.implementation && document.implementation.hasFeature &&
	            // always returns true in newer browsers as per the standard.
	            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	            document.implementation.hasFeature('', '') !== true) {
	                // This is the only way to test support for the `wheel` event in IE9+.
	                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	            }
	
	            return isSupported;
	        }
	
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	
	            var data = normalizeWheel(e);
	
	            if (s.params.mousewheelForceToAxis) {
	                if (s.isHorizontal()) {
	                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;else return;
	                } else {
	                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;else return;
	                }
	            } else {
	                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
	            }
	
	            if (delta === 0) return;
	
	            if (s.params.mousewheelInvert) delta = -delta;
	
	            if (!s.params.freeMode) {
	                if (new window.Date().getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) {
	                            s.slideNext();
	                            s.emit('onScroll', s, e);
	                        } else if (s.params.mousewheelReleaseOnEdges) return true;
	                    } else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
	                            s.slidePrev();
	                            s.emit('onScroll', s, e);
	                        } else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = new window.Date().getTime();
	            } else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                } else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	                // Emit event
	                s.emit('onScroll', s, e);
	
	                // Stop autoplay
	                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
	
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	
	            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	
	        /**
	         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	         * complicated, thus this doc is long and (hopefully) detailed enough to answer
	         * your questions.
	         *
	         * If you need to react to the mouse wheel in a predictable way, this code is
	         * like your bestest friend. * hugs *
	         *
	         * As of today, there are 4 DOM event types you can listen to:
	         *
	         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	         *
	         * So what to do?  The is the best:
	         *
	         *   normalizeWheel.getEventType();
	         *
	         * In your event callback, use this code to get sane interpretation of the
	         * deltas.  This code will return an object with properties:
	         *
	         *   spinX   -- normalized spin speed (use for zoom) - x plane
	         *   spinY   -- " - y plane
	         *   pixelX  -- normalized distance (to pixels) - x plane
	         *   pixelY  -- " - y plane
	         *
	         * Wheel values are provided by the browser assuming you are using the wheel to
	         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	         * significantly on different platforms and browsers, forgetting that you can
	         * scroll at different speeds.  Some devices (like trackpads) emit more events
	         * at smaller increments with fine granularity, and some emit massive jumps with
	         * linear speed or acceleration.
	         *
	         * This code does its best to normalize the deltas for you:
	         *
	         *   - spin is trying to normalize how far the wheel was spun (or trackpad
	         *     dragged).  This is super useful for zoom support where you want to
	         *     throw away the chunky scroll steps on the PC and make those equal to
	         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	         *     resolve a single slow step on a wheel to 1.
	         *
	         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	         *     get the crazy differences between browsers, but at least it'll be in
	         *     pixels!
	         *
	         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	         *     should translate to positive value zooming IN, negative zooming OUT.
	         *     This matches the newer 'wheel' event.
	         *
	         * Why are there spinX, spinY (or pixels)?
	         *
	         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	         *     with a mouse.  It results in side-scrolling in the browser by default.
	         *
	         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	         *
	         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	         *     probably is by browsers in conjunction with fancy 3D controllers .. but
	         *     you know.
	         *
	         * Implementation info:
	         *
	         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	         * average mouse:
	         *
	         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	         *
	         * On the trackpad:
	         *
	         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	         *
	         * On other/older browsers.. it's more complicated as there can be multiple and
	         * also missing delta values.
	         *
	         * The 'wheel' event is more standard:
	         *
	         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	         *
	         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	         * backward compatibility with older events.  Those other values help us
	         * better normalize spin speed.  Example of what the browsers provide:
	         *
	         *                          | event.wheelDelta | event.detail
	         *        ------------------+------------------+--------------
	         *          Safari v5/OS X  |       -120       |       0
	         *          Safari v5/Win7  |       -120       |       0
	         *         Chrome v17/OS X  |       -120       |       0
	         *         Chrome v17/Win7  |       -120       |       0
	         *                IE9/Win7  |       -120       |   undefined
	         *         Firefox v4/OS X  |     undefined    |       1
	         *         Firefox v4/Win7  |     undefined    |       3
	         *
	         */
	        function normalizeWheel( /*object*/event) /*object*/{
	            // Reasonable defaults
	            var PIXEL_STEP = 10;
	            var LINE_HEIGHT = 40;
	            var PAGE_HEIGHT = 800;
	
	            var sX = 0,
	                sY = 0,
	                // spinX, spinY
	            pX = 0,
	                pY = 0; // pixelX, pixelY
	
	            // Legacy
	            if ('detail' in event) {
	                sY = event.detail;
	            }
	            if ('wheelDelta' in event) {
	                sY = -event.wheelDelta / 120;
	            }
	            if ('wheelDeltaY' in event) {
	                sY = -event.wheelDeltaY / 120;
	            }
	            if ('wheelDeltaX' in event) {
	                sX = -event.wheelDeltaX / 120;
	            }
	
	            // side scrolling on FF with DOMMouseScroll
	            if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
	                sX = sY;
	                sY = 0;
	            }
	
	            pX = sX * PIXEL_STEP;
	            pY = sY * PIXEL_STEP;
	
	            if ('deltaY' in event) {
	                pY = event.deltaY;
	            }
	            if ('deltaX' in event) {
	                pX = event.deltaX;
	            }
	
	            if ((pX || pY) && event.deltaMode) {
	                if (event.deltaMode === 1) {
	                    // delta in LINE units
	                    pX *= LINE_HEIGHT;
	                    pY *= LINE_HEIGHT;
	                } else {
	                    // delta in PAGE units
	                    pX *= PAGE_HEIGHT;
	                    pY *= PAGE_HEIGHT;
	                }
	            }
	
	            // Fall-back if spin cannot be determined
	            if (pX && !sX) {
	                sX = pX < 1 ? -1 : 1;
	            }
	            if (pY && !sY) {
	                sY = pY < 1 ? -1 : 1;
	            }
	
	            return {
	                spinX: sX,
	                spinY: sY,
	                pixelX: pX,
	                pixelY: pY
	            };
	        }
	
	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            } else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                } else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	
	            if (pX.indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            } else {
	                pX = pX * progress * rtlFactor + 'px';
	            }
	            if (pY.indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            } else {
	                pY = pY * progress + 'px';
	            }
	
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function setTranslate() {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                    setParallaxTransform(this, s.progress);
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function setTransition(duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	
	        /*=========================
	          Zoom
	          ===========================*/
	        s.zoom = {
	            // "Global" Props
	            scale: 1,
	            currentScale: 1,
	            isScaling: false,
	            gesture: {
	                slide: undefined,
	                slideWidth: undefined,
	                slideHeight: undefined,
	                image: undefined,
	                imageWrap: undefined,
	                zoomMax: s.params.zoomMax
	            },
	            image: {
	                isTouched: undefined,
	                isMoved: undefined,
	                currentX: undefined,
	                currentY: undefined,
	                minX: undefined,
	                minY: undefined,
	                maxX: undefined,
	                maxY: undefined,
	                width: undefined,
	                height: undefined,
	                startX: undefined,
	                startY: undefined,
	                touchesStart: {},
	                touchesCurrent: {}
	            },
	            velocity: {
	                x: undefined,
	                y: undefined,
	                prevPositionX: undefined,
	                prevPositionY: undefined,
	                prevTime: undefined
	            },
	            // Calc Scale From Multi-touches
	            getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
	                if (e.targetTouches.length < 2) return 1;
	                var x1 = e.targetTouches[0].pageX,
	                    y1 = e.targetTouches[0].pageY,
	                    x2 = e.targetTouches[1].pageX,
	                    y2 = e.targetTouches[1].pageY;
	                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	                return distance;
	            },
	            // Events
	            onGestureStart: function onGestureStart(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.slide || !z.gesture.slide.length) {
	                    z.gesture.slide = $(this);
	                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (z.gesture.imageWrap.length === 0) {
	                        z.gesture.image = undefined;
	                        return;
	                    }
	                }
	                z.gesture.image.transition(0);
	                z.isScaling = true;
	            },
	            onGestureChange: function onGestureChange(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (s.support.gestures) {
	                    z.scale = e.scale * z.currentScale;
	                } else {
	                    z.scale = z.gesture.scaleMove / z.gesture.scaleStart * z.currentScale;
	                }
	                if (z.scale > z.gesture.zoomMax) {
	                    z.scale = z.gesture.zoomMax - 1 + Math.pow(z.scale - z.gesture.zoomMax + 1, 0.5);
	                }
	                if (z.scale < s.params.zoomMin) {
	                    z.scale = s.params.zoomMin + 1 - Math.pow(s.params.zoomMin - z.scale + 1, 0.5);
	                }
	                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
	            },
	            onGestureEnd: function onGestureEnd(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
	                        return;
	                    }
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
	                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                z.currentScale = z.scale;
	                z.isScaling = false;
	                if (z.scale === 1) z.gesture.slide = undefined;
	            },
	            onTouchStart: function onTouchStart(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (z.image.isTouched) return;
	                if (s.device.os === 'android') e.preventDefault();
	                z.image.isTouched = true;
	                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	            },
	            onTouchMove: function onTouchMove(e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                s.allowClick = false;
	                if (!z.image.isTouched || !z.gesture.slide) return;
	
	                if (!z.image.isMoved) {
	                    z.image.width = z.gesture.image[0].offsetWidth;
	                    z.image.height = z.gesture.image[0].offsetHeight;
	                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
	                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
	                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
	                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
	                    z.gesture.imageWrap.transition(0);
	                    if (s.rtl) z.image.startX = -z.image.startX;
	                    if (s.rtl) z.image.startY = -z.image.startY;
	                }
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	
	                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
	
	                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
	                z.image.maxY = -z.image.minY;
	
	                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	
	                if (!z.image.isMoved && !z.isScaling) {
	                    if (s.isHorizontal() && Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x || Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x) {
	                        z.image.isTouched = false;
	                        return;
	                    } else if (!s.isHorizontal() && Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y || Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                }
	                e.preventDefault();
	                e.stopPropagation();
	
	                z.image.isMoved = true;
	                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
	                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
	
	                if (z.image.currentX < z.image.minX) {
	                    z.image.currentX = z.image.minX + 1 - Math.pow(z.image.minX - z.image.currentX + 1, 0.8);
	                }
	                if (z.image.currentX > z.image.maxX) {
	                    z.image.currentX = z.image.maxX - 1 + Math.pow(z.image.currentX - z.image.maxX + 1, 0.8);
	                }
	
	                if (z.image.currentY < z.image.minY) {
	                    z.image.currentY = z.image.minY + 1 - Math.pow(z.image.minY - z.image.currentY + 1, 0.8);
	                }
	                if (z.image.currentY > z.image.maxY) {
	                    z.image.currentY = z.image.maxY - 1 + Math.pow(z.image.currentY - z.image.maxY + 1, 0.8);
	                }
	
	                //Velocity
	                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
	                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
	                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
	                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
	                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
	                z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                z.velocity.prevTime = Date.now();
	
	                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTouchEnd: function onTouchEnd(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (!z.image.isTouched || !z.image.isMoved) {
	                    z.image.isTouched = false;
	                    z.image.isMoved = false;
	                    return;
	                }
	                z.image.isTouched = false;
	                z.image.isMoved = false;
	                var momentumDurationX = 300;
	                var momentumDurationY = 300;
	                var momentumDistanceX = z.velocity.x * momentumDurationX;
	                var newPositionX = z.image.currentX + momentumDistanceX;
	                var momentumDistanceY = z.velocity.y * momentumDurationY;
	                var newPositionY = z.image.currentY + momentumDistanceY;
	
	                //Fix duration
	                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
	                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
	                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
	
	                z.image.currentX = newPositionX;
	                z.image.currentY = newPositionY;
	
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
	                z.image.maxY = -z.image.minY;
	                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
	                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
	
	                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTransitionEnd: function onTransitionEnd(s) {
	                var z = s.zoom;
	                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
	                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
	                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
	                    z.scale = z.currentScale = 1;
	                }
	            },
	            // Toggle Zoom
	            toggleZoom: function toggleZoom(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.slide) {
	                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	
	                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
	
	                if (typeof z.image.touchesStart.x === 'undefined' && e) {
	                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	                } else {
	                    touchX = z.image.touchesStart.x;
	                    touchY = z.image.touchesStart.y;
	                }
	
	                if (z.scale && z.scale !== 1) {
	                    // Zoom Out
	                    z.scale = z.currentScale = 1;
	                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.slide = undefined;
	                } else {
	                    // Zoom In
	                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (e) {
	                        slideWidth = z.gesture.slide[0].offsetWidth;
	                        slideHeight = z.gesture.slide[0].offsetHeight;
	                        offsetX = z.gesture.slide.offset().left;
	                        offsetY = z.gesture.slide.offset().top;
	                        diffX = offsetX + slideWidth / 2 - touchX;
	                        diffY = offsetY + slideHeight / 2 - touchY;
	
	                        imageWidth = z.gesture.image[0].offsetWidth;
	                        imageHeight = z.gesture.image[0].offsetHeight;
	                        scaledWidth = imageWidth * z.scale;
	                        scaledHeight = imageHeight * z.scale;
	
	                        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
	                        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
	                        translateMaxX = -translateMinX;
	                        translateMaxY = -translateMinY;
	
	                        translateX = diffX * z.scale;
	                        translateY = diffY * z.scale;
	
	                        if (translateX < translateMinX) {
	                            translateX = translateMinX;
	                        }
	                        if (translateX > translateMaxX) {
	                            translateX = translateMaxX;
	                        }
	
	                        if (translateY < translateMinY) {
	                            translateY = translateMinY;
	                        }
	                        if (translateY > translateMaxY) {
	                            translateY = translateMaxY;
	                        }
	                    } else {
	                        translateX = 0;
	                        translateY = 0;
	                    }
	                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                }
	            },
	            // Attach/Detach Events
	            attachEvents: function attachEvents(detach) {
	                var action = detach ? 'off' : 'on';
	
	                if (s.params.zoom) {
	                    var target = s.slides;
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
	                    // Scale image
	                    if (s.support.gestures) {
	                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
	                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
	                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
	                    } else if (s.touchEvents.start === 'touchstart') {
	                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
	                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
	                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
	                    }
	
	                    // Move image
	                    s[action]('touchStart', s.zoom.onTouchStart);
	                    s.slides.each(function (index, slide) {
	                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
	                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
	                        }
	                    });
	                    s[action]('touchEnd', s.zoom.onTouchEnd);
	
	                    // Scale Out
	                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
	                    if (s.params.zoomToggle) {
	                        s.on('doubleTap', s.zoom.toggleZoom);
	                    }
	                }
	            },
	            init: function init() {
	                s.zoom.attachEvents();
	            },
	            destroy: function destroy() {
	                s.zoom.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };
	
	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName(eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                } else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {};
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function _handler() {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };
	
	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function makeFocusable($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function addRole($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	
	            addLabel: function addLabel($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	
	            disable: function disable($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	
	            enable: function enable($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	
	            onEnterKey: function onEnterKey(event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    } else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                } else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    } else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	
	            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
	
	            notify: function notify(message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function init() {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function initPagination() {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function destroy() {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	
	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            } else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.zoom && s.zoom) {
	                s.zoom.init();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
	            if (s.params.hashnavReplaceState) {
	                s.params.replaceState = s.params.hashnavReplaceState;
	            }
	            if (s.params.history) {
	                if (s.history) s.history.init();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	
	            // Wrapper
	            s.wrapper.removeAttr('style');
	
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
	            }
	
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	
	            // Destroy zoom
	            if (s.params.zoom && s.zoom) {
	                s.zoom.destroy();
	            }
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Delete history popstate
	            if (s.params.history && !s.params.replaceState) {
	                window.removeEventListener('popstate', s.history.setHistoryPopState);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.destroy();
	            }
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	
	        s.init();
	
	        // Return swiper instance
	        return s;
	    };
	
	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: function () {
	            var ua = window.navigator.userAgent.toLowerCase();
	            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
	        }(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
	        isArray: function isArray(arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
	            lteIE9: function () {
	                // create temporary DIV
	                var div = document.createElement('div');
	                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
	                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
	                // return true / false value based on what will browser render
	                return div.getElementsByTagName('i').length === 1;
	            }()
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: function () {
	            var ua = window.navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        }(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch: window.Modernizr && Modernizr.touch === true || function () {
	                return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	            }(),
	
	            transforms3d: window.Modernizr && Modernizr.csstransforms3d === true || function () {
	                var div = document.createElement('div').style;
	                return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
	            }(),
	
	            flexbox: function () {
	                var div = document.createElement('div').style;
	                var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            }(),
	
	            observer: function () {
	                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
	            }(),
	
	            passiveListener: function () {
	                var supportsPassive = false;
	                try {
	                    var opts = Object.defineProperty({}, 'passive', {
	                        get: function get() {
	                            supportsPassive = true;
	                        }
	                    });
	                    window.addEventListener('testPassiveListener', null, opts);
	                } catch (e) {}
	                return supportsPassive;
	            }(),
	
	            gestures: function () {
	                return 'ongesturestart' in window;
	            }()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	
	    /*===========================
	    Dom7 Library
	    ===========================*/
	    var Dom7 = function () {
	        var Dom7 = function Dom7(arr) {
	            var _this = this,
	                i = 0;
	            // Create array-like object
	            for (i = 0; i < arr.length; i++) {
	                _this[i] = arr[i];
	            }
	            _this.length = arr.length;
	            // Return collection with methods
	            return this;
	        };
	        var $ = function $(selector, context) {
	            var arr = [],
	                i = 0;
	            if (selector && !context) {
	                if (selector instanceof Dom7) {
	                    return selector;
	                }
	            }
	            if (selector) {
	                // String
	                if (typeof selector === 'string') {
	                    var els,
	                        tempParent,
	                        html = selector.trim();
	                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	                        var toCreate = 'div';
	                        if (html.indexOf('<li') === 0) toCreate = 'ul';
	                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	                        if (html.indexOf('<option') === 0) toCreate = 'select';
	                        tempParent = document.createElement(toCreate);
	                        tempParent.innerHTML = selector;
	                        for (i = 0; i < tempParent.childNodes.length; i++) {
	                            arr.push(tempParent.childNodes[i]);
	                        }
	                    } else {
	                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	                            // Pure ID selector
	                            els = [document.getElementById(selector.split('#')[1])];
	                        } else {
	                            // Other selectors
	                            els = (context || document).querySelectorAll(selector);
	                        }
	                        for (i = 0; i < els.length; i++) {
	                            if (els[i]) arr.push(els[i]);
	                        }
	                    }
	                }
	                // Node/element
	                else if (selector.nodeType || selector === window || selector === document) {
	                        arr.push(selector);
	                    }
	                    //Array of elements or instance of Dom
	                    else if (selector.length > 0 && selector[0].nodeType) {
	                            for (i = 0; i < selector.length; i++) {
	                                arr.push(selector[i]);
	                            }
	                        }
	            }
	            return new Dom7(arr);
	        };
	        Dom7.prototype = {
	            // Classes and attriutes
	            addClass: function addClass(className) {
	                if (typeof className === 'undefined') {
	                    return this;
	                }
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.add(classes[i]);
	                    }
	                }
	                return this;
	            },
	            removeClass: function removeClass(className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.remove(classes[i]);
	                    }
	                }
	                return this;
	            },
	            hasClass: function hasClass(className) {
	                if (!this[0]) return false;else return this[0].classList.contains(className);
	            },
	            toggleClass: function toggleClass(className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.toggle(classes[i]);
	                    }
	                }
	                return this;
	            },
	            attr: function attr(attrs, value) {
	                if (arguments.length === 1 && typeof attrs === 'string') {
	                    // Get attr
	                    if (this[0]) return this[0].getAttribute(attrs);else return undefined;
	                } else {
	                    // Set attrs
	                    for (var i = 0; i < this.length; i++) {
	                        if (arguments.length === 2) {
	                            // String
	                            this[i].setAttribute(attrs, value);
	                        } else {
	                            // Object
	                            for (var attrName in attrs) {
	                                this[i][attrName] = attrs[attrName];
	                                this[i].setAttribute(attrName, attrs[attrName]);
	                            }
	                        }
	                    }
	                    return this;
	                }
	            },
	            removeAttr: function removeAttr(attr) {
	                for (var i = 0; i < this.length; i++) {
	                    this[i].removeAttribute(attr);
	                }
	                return this;
	            },
	            data: function data(key, value) {
	                if (typeof value === 'undefined') {
	                    // Get value
	                    if (this[0]) {
	                        var dataKey = this[0].getAttribute('data-' + key);
	                        if (dataKey) return dataKey;else if (this[0].dom7ElementDataStorage && key in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[key];else return undefined;
	                    } else return undefined;
	                } else {
	                    // Set value
	                    for (var i = 0; i < this.length; i++) {
	                        var el = this[i];
	                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	                        el.dom7ElementDataStorage[key] = value;
	                    }
	                    return this;
	                }
	            },
	            // Transforms
	            transform: function transform(_transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = _transform;
	                }
	                return this;
	            },
	            transition: function transition(duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            },
	            //Events
	            on: function on(eventName, targetSelector, listener, capture) {
	                function handleLiveEvent(e) {
	                    var target = e.target;
	                    if ($(target).is(targetSelector)) listener.call(target, e);else {
	                        var parents = $(target).parents();
	                        for (var k = 0; k < parents.length; k++) {
	                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
	                        }
	                    }
	                }
	                var events = eventName.split(' ');
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof targetSelector === 'function' || targetSelector === false) {
	                        // Usual events
	                        if (typeof targetSelector === 'function') {
	                            listener = arguments[1];
	                            capture = arguments[2] || false;
	                        }
	                        for (j = 0; j < events.length; j++) {
	                            this[i].addEventListener(events[j], listener, capture);
	                        }
	                    } else {
	                        //Live events
	                        for (j = 0; j < events.length; j++) {
	                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
	                            this[i].dom7LiveListeners.push({ listener: listener, liveListener: handleLiveEvent });
	                            this[i].addEventListener(events[j], handleLiveEvent, capture);
	                        }
	                    }
	                }
	
	                return this;
	            },
	            off: function off(eventName, targetSelector, listener, capture) {
	                var events = eventName.split(' ');
	                for (var i = 0; i < events.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        if (typeof targetSelector === 'function' || targetSelector === false) {
	                            // Usual events
	                            if (typeof targetSelector === 'function') {
	                                listener = arguments[1];
	                                capture = arguments[2] || false;
	                            }
	                            this[j].removeEventListener(events[i], listener, capture);
	                        } else {
	                            // Live event
	                            if (this[j].dom7LiveListeners) {
	                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
	                                    if (this[j].dom7LiveListeners[k].listener === listener) {
	                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            once: function once(eventName, targetSelector, listener, capture) {
	                var dom = this;
	                if (typeof targetSelector === 'function') {
	                    targetSelector = false;
	                    listener = arguments[1];
	                    capture = arguments[2];
	                }
	                function proxy(e) {
	                    listener(e);
	                    dom.off(eventName, targetSelector, proxy, capture);
	                }
	                dom.on(eventName, targetSelector, proxy, capture);
	            },
	            trigger: function trigger(eventName, eventData) {
	                for (var i = 0; i < this.length; i++) {
	                    var evt;
	                    try {
	                        evt = new window.CustomEvent(eventName, { detail: eventData, bubbles: true, cancelable: true });
	                    } catch (e) {
	                        evt = document.createEvent('Event');
	                        evt.initEvent(eventName, true, true);
	                        evt.detail = eventData;
	                    }
	                    this[i].dispatchEvent(evt);
	                }
	                return this;
	            },
	            transitionEnd: function transitionEnd(callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i,
	                    j,
	                    dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            },
	            // Sizing/Styles
	            width: function width() {
	                if (this[0] === window) {
	                    return window.innerWidth;
	                } else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('width'));
	                    } else {
	                        return null;
	                    }
	                }
	            },
	            outerWidth: function outerWidth(includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
	                } else return null;
	            },
	            height: function height() {
	                if (this[0] === window) {
	                    return window.innerHeight;
	                } else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('height'));
	                    } else {
	                        return null;
	                    }
	                }
	            },
	            outerHeight: function outerHeight(includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;
	                } else return null;
	            },
	            offset: function offset() {
	                if (this.length > 0) {
	                    var el = this[0];
	                    var box = el.getBoundingClientRect();
	                    var body = document.body;
	                    var clientTop = el.clientTop || body.clientTop || 0;
	                    var clientLeft = el.clientLeft || body.clientLeft || 0;
	                    var scrollTop = window.pageYOffset || el.scrollTop;
	                    var scrollLeft = window.pageXOffset || el.scrollLeft;
	                    return {
	                        top: box.top + scrollTop - clientTop,
	                        left: box.left + scrollLeft - clientLeft
	                    };
	                } else {
	                    return null;
	                }
	            },
	            css: function css(props, value) {
	                var i;
	                if (arguments.length === 1) {
	                    if (typeof props === 'string') {
	                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
	                    } else {
	                        for (i = 0; i < this.length; i++) {
	                            for (var prop in props) {
	                                this[i].style[prop] = props[prop];
	                            }
	                        }
	                        return this;
	                    }
	                }
	                if (arguments.length === 2 && typeof props === 'string') {
	                    for (i = 0; i < this.length; i++) {
	                        this[i].style[props] = value;
	                    }
	                    return this;
	                }
	                return this;
	            },
	
	            //Dom manipulation
	            each: function each(callback) {
	                for (var i = 0; i < this.length; i++) {
	                    callback.call(this[i], i, this[i]);
	                }
	                return this;
	            },
	            html: function html(_html) {
	                if (typeof _html === 'undefined') {
	                    return this[0] ? this[0].innerHTML : undefined;
	                } else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].innerHTML = _html;
	                    }
	                    return this;
	                }
	            },
	            text: function text(_text) {
	                if (typeof _text === 'undefined') {
	                    if (this[0]) {
	                        return this[0].textContent.trim();
	                    } else return null;
	                } else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].textContent = _text;
	                    }
	                    return this;
	                }
	            },
	            is: function is(selector) {
	                if (!this[0]) return false;
	                var compareWith, i;
	                if (typeof selector === 'string') {
	                    var el = this[0];
	                    if (el === document) return selector === document;
	                    if (el === window) return selector === window;
	
	                    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);else {
	                        compareWith = $(selector);
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                } else if (selector === document) return this[0] === document;else if (selector === window) return this[0] === window;else {
	                    if (selector.nodeType || selector instanceof Dom7) {
	                        compareWith = selector.nodeType ? [selector] : selector;
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                    return false;
	                }
	            },
	            index: function index() {
	                if (this[0]) {
	                    var child = this[0];
	                    var i = 0;
	                    while ((child = child.previousSibling) !== null) {
	                        if (child.nodeType === 1) i++;
	                    }
	                    return i;
	                } else return undefined;
	            },
	            eq: function eq(index) {
	                if (typeof index === 'undefined') return this;
	                var length = this.length;
	                var returnIndex;
	                if (index > length - 1) {
	                    return new Dom7([]);
	                }
	                if (index < 0) {
	                    returnIndex = length + index;
	                    if (returnIndex < 0) return new Dom7([]);else return new Dom7([this[returnIndex]]);
	                }
	                return new Dom7([this[index]]);
	            },
	            append: function append(newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        while (tempDiv.firstChild) {
	                            this[i].appendChild(tempDiv.firstChild);
	                        }
	                    } else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].appendChild(newChild[j]);
	                        }
	                    } else {
	                        this[i].appendChild(newChild);
	                    }
	                }
	                return this;
	            },
	            prepend: function prepend(newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
	                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	                        }
	                        // this[i].insertAdjacentHTML('afterbegin', newChild);
	                    } else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	                        }
	                    } else {
	                        this[i].insertBefore(newChild, this[i].childNodes[0]);
	                    }
	                }
	                return this;
	            },
	            insertBefore: function insertBefore(selector) {
	                var before = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (before.length === 1) {
	                        before[0].parentNode.insertBefore(this[i], before[0]);
	                    } else if (before.length > 1) {
	                        for (var j = 0; j < before.length; j++) {
	                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
	                        }
	                    }
	                }
	            },
	            insertAfter: function insertAfter(selector) {
	                var after = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (after.length === 1) {
	                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
	                    } else if (after.length > 1) {
	                        for (var j = 0; j < after.length; j++) {
	                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
	                        }
	                    }
	                }
	            },
	            next: function next(selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
	                    } else {
	                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
	                    }
	                } else return new Dom7([]);
	            },
	            nextAll: function nextAll(selector) {
	                var nextEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.nextElementSibling) {
	                    var next = el.nextElementSibling;
	                    if (selector) {
	                        if ($(next).is(selector)) nextEls.push(next);
	                    } else nextEls.push(next);
	                    el = next;
	                }
	                return new Dom7(nextEls);
	            },
	            prev: function prev(selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
	                    } else {
	                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
	                    }
	                } else return new Dom7([]);
	            },
	            prevAll: function prevAll(selector) {
	                var prevEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.previousElementSibling) {
	                    var prev = el.previousElementSibling;
	                    if (selector) {
	                        if ($(prev).is(selector)) prevEls.push(prev);
	                    } else prevEls.push(prev);
	                    el = prev;
	                }
	                return new Dom7(prevEls);
	            },
	            parent: function parent(selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    if (selector) {
	                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	                    } else {
	                        parents.push(this[i].parentNode);
	                    }
	                }
	                return $($.unique(parents));
	            },
	            parents: function parents(selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    var parent = this[i].parentNode;
	                    while (parent) {
	                        if (selector) {
	                            if ($(parent).is(selector)) parents.push(parent);
	                        } else {
	                            parents.push(parent);
	                        }
	                        parent = parent.parentNode;
	                    }
	                }
	                return $($.unique(parents));
	            },
	            find: function find(selector) {
	                var foundElements = [];
	                for (var i = 0; i < this.length; i++) {
	                    var found = this[i].querySelectorAll(selector);
	                    for (var j = 0; j < found.length; j++) {
	                        foundElements.push(found[j]);
	                    }
	                }
	                return new Dom7(foundElements);
	            },
	            children: function children(selector) {
	                var children = [];
	                for (var i = 0; i < this.length; i++) {
	                    var childNodes = this[i].childNodes;
	
	                    for (var j = 0; j < childNodes.length; j++) {
	                        if (!selector) {
	                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	                        } else {
	                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
	                        }
	                    }
	                }
	                return new Dom7($.unique(children));
	            },
	            remove: function remove() {
	                for (var i = 0; i < this.length; i++) {
	                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	                }
	                return this;
	            },
	            add: function add() {
	                var dom = this;
	                var i, j;
	                for (i = 0; i < arguments.length; i++) {
	                    var toAdd = $(arguments[i]);
	                    for (j = 0; j < toAdd.length; j++) {
	                        dom[dom.length] = toAdd[j];
	                        dom.length++;
	                    }
	                }
	                return dom;
	            }
	        };
	        $.fn = Dom7.prototype;
	        $.unique = function (arr) {
	            var unique = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
	            }
	            return unique;
	        };
	
	        return $;
	    }();
	
	    /*===========================
	     Get Dom libraries
	     ===========================*/
	    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
	    for (var i = 0; i < swiperDomPlugins.length; i++) {
	        if (window[swiperDomPlugins[i]]) {
	            addLibraryPlugin(window[swiperDomPlugins[i]]);
	        }
	    }
	    // Required DOM Plugins
	    var domLib;
	    if (typeof Dom7 === 'undefined') {
	        domLib = window.Dom7 || window.Zepto || window.jQuery;
	    } else {
	        domLib = Dom7;
	    }
	
	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i,
	                    j,
	                    dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	        if (!('outerWidth' in domLib.fn)) {
	            domLib.fn.outerWidth = function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
	                } else return null;
	            };
	        }
	    }
	
	    window.Swiper = Swiper;
	})();
	/*===========================
	Swiper AMD Export
	===========================*/
	if (true) {
	    module.exports = window.Swiper;
	} else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	
	        return window.Swiper;
	    });
	}
	//# sourceMappingURL=maps/swiper.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map