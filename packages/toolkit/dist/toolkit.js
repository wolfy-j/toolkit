(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/toolkit", [], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/toolkit"] = factory();
	else
		root["SFToolkit"] = factory();
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/dist/core.js":
/*!****************************!*\
  !*** ../core/dist/core.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/axios/index.js":
      /*!**********************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/index.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./lib/axios */
        "../../node_modules/axios/lib/axios.js");
        /***/
      },

      /***/
      "../../node_modules/axios/lib/adapters/xhr.js":
      /*!*********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/adapters/xhr.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var settle = __webpack_require__(
        /*! ./../core/settle */
        "../../node_modules/axios/lib/core/settle.js");

        var buildURL = __webpack_require__(
        /*! ./../helpers/buildURL */
        "../../node_modules/axios/lib/helpers/buildURL.js");

        var buildFullPath = __webpack_require__(
        /*! ../core/buildFullPath */
        "../../node_modules/axios/lib/core/buildFullPath.js");

        var parseHeaders = __webpack_require__(
        /*! ./../helpers/parseHeaders */
        "../../node_modules/axios/lib/helpers/parseHeaders.js");

        var isURLSameOrigin = __webpack_require__(
        /*! ./../helpers/isURLSameOrigin */
        "../../node_modules/axios/lib/helpers/isURLSameOrigin.js");

        var createError = __webpack_require__(
        /*! ../core/createError */
        "../../node_modules/axios/lib/core/createError.js");

        module.exports = function xhrAdapter(config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;

            if (utils.isFormData(requestData)) {
              delete requestHeaders['Content-Type']; // Let the browser set it
            }

            var request = new XMLHttpRequest(); // HTTP basic authentication

            if (config.auth) {
              var username = config.auth.username || '';
              var password = config.auth.password || '';
              requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
            }

            var fullPath = buildFullPath(config.baseURL, config.url);
            request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

            request.timeout = config.timeout; // Listen for ready state

            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              } // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request


              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              } // Prepare the response


              var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
              var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
              var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
              };
              settle(resolve, reject, response); // Clean up request

              request = null;
            }; // Handle browser request cancellation (as opposed to a manual cancellation)


            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }

              reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Handle low level network errors


            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(createError('Network Error', config, null, request)); // Clean up request

              request = null;
            }; // Handle timeout


            request.ontimeout = function handleTimeout() {
              var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

              if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
              }

              reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.


            if (utils.isStandardBrowserEnv()) {
              var cookies = __webpack_require__(
              /*! ./../helpers/cookies */
              "../../node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


              var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

              if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
              }
            } // Add headers to the request


            if ('setRequestHeader' in request) {
              utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                  // Remove Content-Type if data is undefined
                  delete requestHeaders[key];
                } else {
                  // Otherwise add header to the request
                  request.setRequestHeader(key, val);
                }
              });
            } // Add withCredentials to request if needed


            if (!utils.isUndefined(config.withCredentials)) {
              request.withCredentials = !!config.withCredentials;
            } // Add responseType to request if needed


            if (config.responseType) {
              try {
                request.responseType = config.responseType;
              } catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config.responseType !== 'json') {
                  throw e;
                }
              }
            } // Handle progress if needed


            if (typeof config.onDownloadProgress === 'function') {
              request.addEventListener('progress', config.onDownloadProgress);
            } // Not all browsers support upload events


            if (typeof config.onUploadProgress === 'function' && request.upload) {
              request.upload.addEventListener('progress', config.onUploadProgress);
            }

            if (config.cancelToken) {
              // Handle cancellation
              config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                  return;
                }

                request.abort();
                reject(cancel); // Clean up request

                request = null;
              });
            }

            if (requestData === undefined) {
              requestData = null;
            } // Send the request


            request.send(requestData);
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/axios.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/axios.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./utils */
        "../../node_modules/axios/lib/utils.js");

        var bind = __webpack_require__(
        /*! ./helpers/bind */
        "../../node_modules/axios/lib/helpers/bind.js");

        var Axios = __webpack_require__(
        /*! ./core/Axios */
        "../../node_modules/axios/lib/core/Axios.js");

        var mergeConfig = __webpack_require__(
        /*! ./core/mergeConfig */
        "../../node_modules/axios/lib/core/mergeConfig.js");

        var defaults = __webpack_require__(
        /*! ./defaults */
        "../../node_modules/axios/lib/defaults.js");
        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         * @return {Axios} A new instance of Axios
         */


        function createInstance(defaultConfig) {
          var context = new Axios(defaultConfig);
          var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

          utils.extend(instance, Axios.prototype, context); // Copy context to instance

          utils.extend(instance, context);
          return instance;
        } // Create the default instance to be exported


        var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

        axios.Axios = Axios; // Factory for creating new instances

        axios.create = function create(instanceConfig) {
          return createInstance(mergeConfig(axios.defaults, instanceConfig));
        }; // Expose Cancel & CancelToken


        axios.Cancel = __webpack_require__(
        /*! ./cancel/Cancel */
        "../../node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__(
        /*! ./cancel/CancelToken */
        "../../node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__(
        /*! ./cancel/isCancel */
        "../../node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

        axios.all = function all(promises) {
          return Promise.all(promises);
        };

        axios.spread = __webpack_require__(
        /*! ./helpers/spread */
        "../../node_modules/axios/lib/helpers/spread.js");
        module.exports = axios; // Allow use of default import syntax in TypeScript

        module.exports.default = axios;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/Cancel.js":
      /*!**********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/Cancel.js ***!
        \**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * A `Cancel` is an object that is thrown when an operation is canceled.
         *
         * @class
         * @param {string=} message The message.
         */

        function Cancel(message) {
          this.message = message;
        }

        Cancel.prototype.toString = function toString() {
          return 'Cancel' + (this.message ? ': ' + this.message : '');
        };

        Cancel.prototype.__CANCEL__ = true;
        module.exports = Cancel;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/CancelToken.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/CancelToken.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var Cancel = __webpack_require__(
        /*! ./Cancel */
        "../../node_modules/axios/lib/cancel/Cancel.js");
        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @class
         * @param {Function} executor The executor function.
         */


        function CancelToken(executor) {
          if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
          }

          var resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          var token = this;
          executor(function cancel(message) {
            if (token.reason) {
              // Cancellation has already been requested
              return;
            }

            token.reason = new Cancel(message);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `Cancel` if cancellation has been requested.
         */


        CancelToken.prototype.throwIfRequested = function throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        };
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */


        CancelToken.source = function source() {
          var cancel;
          var token = new CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token: token,
            cancel: cancel
          };
        };

        module.exports = CancelToken;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/isCancel.js":
      /*!************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/isCancel.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = function isCancel(value) {
          return !!(value && value.__CANCEL__);
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/Axios.js":
      /*!*******************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/Axios.js ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var buildURL = __webpack_require__(
        /*! ../helpers/buildURL */
        "../../node_modules/axios/lib/helpers/buildURL.js");

        var InterceptorManager = __webpack_require__(
        /*! ./InterceptorManager */
        "../../node_modules/axios/lib/core/InterceptorManager.js");

        var dispatchRequest = __webpack_require__(
        /*! ./dispatchRequest */
        "../../node_modules/axios/lib/core/dispatchRequest.js");

        var mergeConfig = __webpack_require__(
        /*! ./mergeConfig */
        "../../node_modules/axios/lib/core/mergeConfig.js");
        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         */


        function Axios(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {Object} config The config specific for this request (merged with this.defaults)
         */


        Axios.prototype.request = function request(config) {
          /*eslint no-param-reassign:0*/
          // Allow for axios('example/url'[, config]) a la fetch API
          if (typeof config === 'string') {
            config = arguments[1] || {};
            config.url = arguments[0];
          } else {
            config = config || {};
          }

          config = mergeConfig(this.defaults, config); // Set config.method

          if (config.method) {
            config.method = config.method.toLowerCase();
          } else if (this.defaults.method) {
            config.method = this.defaults.method.toLowerCase();
          } else {
            config.method = 'get';
          } // Hook up interceptors middleware


          var chain = [dispatchRequest, undefined];
          var promise = Promise.resolve(config);
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
          });

          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }

          return promise;
        };

        Axios.prototype.getUri = function getUri(config) {
          config = mergeConfig(this.defaults, config);
          return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
        }; // Provide aliases for supported request methods


        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, config) {
            return this.request(utils.merge(config || {}, {
              method: method,
              url: url
            }));
          };
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, data, config) {
            return this.request(utils.merge(config || {}, {
              method: method,
              url: url,
              data: data
            }));
          };
        });
        module.exports = Axios;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/core/InterceptorManager.js":
      /*!********************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/InterceptorManager.js ***!
        \********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        function InterceptorManager() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */


        InterceptorManager.prototype.use = function use(fulfilled, rejected) {
          this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
          });
          return this.handlers.length - 1;
        };
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         */


        InterceptorManager.prototype.eject = function eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        };
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         */


        InterceptorManager.prototype.forEach = function forEach(fn) {
          utils.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        };

        module.exports = InterceptorManager;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/core/buildFullPath.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/buildFullPath.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isAbsoluteURL = __webpack_require__(
        /*! ../helpers/isAbsoluteURL */
        "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");

        var combineURLs = __webpack_require__(
        /*! ../helpers/combineURLs */
        "../../node_modules/axios/lib/helpers/combineURLs.js");
        /**
         * Creates a new URL by combining the baseURL with the requestedURL,
         * only when the requestedURL is not already an absolute URL.
         * If the requestURL is absolute, this function returns the requestedURL untouched.
         *
         * @param {string} baseURL The base URL
         * @param {string} requestedURL Absolute or relative URL to combine
         * @returns {string} The combined full path
         */


        module.exports = function buildFullPath(baseURL, requestedURL) {
          if (baseURL && !isAbsoluteURL(requestedURL)) {
            return combineURLs(baseURL, requestedURL);
          }

          return requestedURL;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/createError.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/createError.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var enhanceError = __webpack_require__(
        /*! ./enhanceError */
        "../../node_modules/axios/lib/core/enhanceError.js");
        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {Object} config The config.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         * @returns {Error} The created error.
         */


        module.exports = function createError(message, config, code, request, response) {
          var error = new Error(message);
          return enhanceError(error, config, code, request, response);
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/dispatchRequest.js":
      /*!*****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/dispatchRequest.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var transformData = __webpack_require__(
        /*! ./transformData */
        "../../node_modules/axios/lib/core/transformData.js");

        var isCancel = __webpack_require__(
        /*! ../cancel/isCancel */
        "../../node_modules/axios/lib/cancel/isCancel.js");

        var defaults = __webpack_require__(
        /*! ../defaults */
        "../../node_modules/axios/lib/defaults.js");
        /**
         * Throws a `Cancel` if cancellation has been requested.
         */


        function throwIfCancellationRequested(config) {
          if (config.cancelToken) {
            config.cancelToken.throwIfRequested();
          }
        }
        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         * @returns {Promise} The Promise to be fulfilled
         */


        module.exports = function dispatchRequest(config) {
          throwIfCancellationRequested(config); // Ensure headers exist

          config.headers = config.headers || {}; // Transform request data

          config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

          config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
          utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
            delete config.headers[method];
          });
          var adapter = config.adapter || defaults.adapter;
          return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config); // Transform response data

            response.data = transformData(response.data, response.headers, config.transformResponse);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config); // Transform response data

              if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
              }
            }

            return Promise.reject(reason);
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/enhanceError.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/enhanceError.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Update an Error with the specified config, error code, and response.
         *
         * @param {Error} error The error to update.
         * @param {Object} config The config.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         * @returns {Error} The error.
         */

        module.exports = function enhanceError(error, config, code, request, response) {
          error.config = config;

          if (code) {
            error.code = code;
          }

          error.request = request;
          error.response = response;
          error.isAxiosError = true;

          error.toJSON = function () {
            return {
              // Standard
              message: this.message,
              name: this.name,
              // Microsoft
              description: this.description,
              number: this.number,
              // Mozilla
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              // Axios
              config: this.config,
              code: this.code
            };
          };

          return error;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/mergeConfig.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/mergeConfig.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ../utils */
        "../../node_modules/axios/lib/utils.js");
        /**
         * Config-specific merge-function which creates a new config-object
         * by merging two configuration objects together.
         *
         * @param {Object} config1
         * @param {Object} config2
         * @returns {Object} New object resulting from merging config2 to config1
         */


        module.exports = function mergeConfig(config1, config2) {
          // eslint-disable-next-line no-param-reassign
          config2 = config2 || {};
          var config = {};
          var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
          var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
          var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
          utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
            if (typeof config2[prop] !== 'undefined') {
              config[prop] = config2[prop];
            }
          });
          utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
            if (utils.isObject(config2[prop])) {
              config[prop] = utils.deepMerge(config1[prop], config2[prop]);
            } else if (typeof config2[prop] !== 'undefined') {
              config[prop] = config2[prop];
            } else if (utils.isObject(config1[prop])) {
              config[prop] = utils.deepMerge(config1[prop]);
            } else if (typeof config1[prop] !== 'undefined') {
              config[prop] = config1[prop];
            }
          });
          utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
            if (typeof config2[prop] !== 'undefined') {
              config[prop] = config2[prop];
            } else if (typeof config1[prop] !== 'undefined') {
              config[prop] = config1[prop];
            }
          });
          var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
          var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
            return axiosKeys.indexOf(key) === -1;
          });
          utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
            if (typeof config2[prop] !== 'undefined') {
              config[prop] = config2[prop];
            } else if (typeof config1[prop] !== 'undefined') {
              config[prop] = config1[prop];
            }
          });
          return config;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/settle.js":
      /*!********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/settle.js ***!
        \********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var createError = __webpack_require__(
        /*! ./createError */
        "../../node_modules/axios/lib/core/createError.js");
        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         */


        module.exports = function settle(resolve, reject, response) {
          var validateStatus = response.config.validateStatus;

          if (!validateStatus || validateStatus(response.status)) {
            resolve(response);
          } else {
            reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
          }
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/transformData.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/transformData.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");
        /**
         * Transform the data for a request or a response
         *
         * @param {Object|String} data The data to be transformed
         * @param {Array} headers The headers for the request or response
         * @param {Array|Function} fns A single function or Array of functions
         * @returns {*} The resulting transformed data
         */


        module.exports = function transformData(data, headers, fns) {
          /*eslint no-param-reassign:0*/
          utils.forEach(fns, function transform(fn) {
            data = fn(data, headers);
          });
          return data;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/defaults.js":
      /*!*****************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/defaults.js ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (process) {
          var utils = __webpack_require__(
          /*! ./utils */
          "../../node_modules/axios/lib/utils.js");

          var normalizeHeaderName = __webpack_require__(
          /*! ./helpers/normalizeHeaderName */
          "../../node_modules/axios/lib/helpers/normalizeHeaderName.js");

          var DEFAULT_CONTENT_TYPE = {
            'Content-Type': 'application/x-www-form-urlencoded'
          };

          function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
              headers['Content-Type'] = value;
            }
          }

          function getDefaultAdapter() {
            var adapter;

            if (typeof XMLHttpRequest !== 'undefined') {
              // For browsers use XHR adapter
              adapter = __webpack_require__(
              /*! ./adapters/xhr */
              "../../node_modules/axios/lib/adapters/xhr.js");
            } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
              // For node use HTTP adapter
              adapter = __webpack_require__(
              /*! ./adapters/http */
              "../../node_modules/axios/lib/adapters/xhr.js");
            }

            return adapter;
          }

          var defaults = {
            adapter: getDefaultAdapter(),
            transformRequest: [function transformRequest(data, headers) {
              normalizeHeaderName(headers, 'Accept');
              normalizeHeaderName(headers, 'Content-Type');

              if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                return data;
              }

              if (utils.isArrayBufferView(data)) {
                return data.buffer;
              }

              if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
              }

              if (utils.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                return JSON.stringify(data);
              }

              return data;
            }],
            transformResponse: [function transformResponse(data) {
              /*eslint no-param-reassign:0*/
              if (typeof data === 'string') {
                try {
                  data = JSON.parse(data);
                } catch (e) {
                  /* Ignore */
                }
              }

              return data;
            }],

            /**
             * A timeout in milliseconds to abort a request. If set to 0 (default) a
             * timeout is not created.
             */
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            validateStatus: function validateStatus(status) {
              return status >= 200 && status < 300;
            }
          };
          defaults.headers = {
            common: {
              'Accept': 'application/json, text/plain, */*'
            }
          };
          utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
            defaults.headers[method] = {};
          });
          utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
          });
          module.exports = defaults;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__(
        /*! ./../../process/browser.js */
        "../../node_modules/process/browser.js"));
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/bind.js":
      /*!*********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/bind.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = function bind(fn, thisArg) {
          return function wrap() {
            var args = new Array(arguments.length);

            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i];
            }

            return fn.apply(thisArg, args);
          };
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/buildURL.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/buildURL.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        }
        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @returns {string} The formatted url
         */


        module.exports = function buildURL(url, params, paramsSerializer) {
          /*eslint no-param-reassign:0*/
          if (!params) {
            return url;
          }

          var serializedParams;

          if (paramsSerializer) {
            serializedParams = paramsSerializer(params);
          } else if (utils.isURLSearchParams(params)) {
            serializedParams = params.toString();
          } else {
            var parts = [];
            utils.forEach(params, function serialize(val, key) {
              if (val === null || typeof val === 'undefined') {
                return;
              }

              if (utils.isArray(val)) {
                key = key + '[]';
              } else {
                val = [val];
              }

              utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                  v = v.toISOString();
                } else if (utils.isObject(v)) {
                  v = JSON.stringify(v);
                }

                parts.push(encode(key) + '=' + encode(v));
              });
            });
            serializedParams = parts.join('&');
          }

          if (serializedParams) {
            var hashmarkIndex = url.indexOf('#');

            if (hashmarkIndex !== -1) {
              url = url.slice(0, hashmarkIndex);
            }

            url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
          }

          return url;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/combineURLs.js":
      /*!****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/combineURLs.js ***!
        \****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */

        module.exports = function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/cookies.js":
      /*!************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/cookies.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },
            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        }() : // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null;
            },
            remove: function remove() {}
          };
        }();
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
      /*!******************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
        \******************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */

        module.exports = function isAbsoluteURL(url) {
          // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
          // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
          // by any combination of letters, digits, plus, period, or hyphen.
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
      /*!********************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
        \********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;
          /**
          * Parse a URL to discover it's components
          *
          * @param {String} url The URL to be parsed
          * @returns {Object}
          */

          function resolveURL(url) {
            var href = url;

            if (msie) {
              // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);
          /**
          * Determine if a URL shares the same origin as the current location
          *
          * @param {String} requestURL The URL to test
          * @returns {boolean} True if URL shares the same origin, otherwise false
          */

          return function isURLSameOrigin(requestURL) {
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }() : // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }();
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/normalizeHeaderName.js":
      /*!************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
        \************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = function normalizeHeaderName(headers, normalizedName) {
          utils.forEach(headers, function processHeader(value, name) {
            if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
              headers[normalizedName] = value;
              delete headers[name];
            }
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/parseHeaders.js":
      /*!*****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/parseHeaders.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers


        var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} headers Headers needing to be parsed
         * @returns {Object} Headers parsed into an object
         */

        module.exports = function parseHeaders(headers) {
          var parsed = {};
          var key;
          var val;
          var i;

          if (!headers) {
            return parsed;
          }

          utils.forEach(headers.split('\n'), function parser(line) {
            i = line.indexOf(':');
            key = utils.trim(line.substr(0, i)).toLowerCase();
            val = utils.trim(line.substr(i + 1));

            if (key) {
              if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
              }

              if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
              } else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
              }
            }
          });
          return parsed;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/spread.js":
      /*!***********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/spread.js ***!
        \***********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         * @returns {Function}
         */

        module.exports = function spread(callback) {
          return function wrap(arr) {
            return callback.apply(null, arr);
          };
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/utils.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/utils.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var bind = __webpack_require__(
        /*! ./helpers/bind */
        "../../node_modules/axios/lib/helpers/bind.js");
        /*global toString:true*/
        // utils is a library of generic helper functions non-specific to axios


        var toString = Object.prototype.toString;
        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Array, otherwise false
         */

        function isArray(val) {
          return toString.call(val) === '[object Array]';
        }
        /**
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */


        function isUndefined(val) {
          return typeof val === 'undefined';
        }
        /**
         * Determine if a value is a Buffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Buffer, otherwise false
         */


        function isBuffer(val) {
          return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
        }
        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */


        function isArrayBuffer(val) {
          return toString.call(val) === '[object ArrayBuffer]';
        }
        /**
         * Determine if a value is a FormData
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an FormData, otherwise false
         */


        function isFormData(val) {
          return typeof FormData !== 'undefined' && val instanceof FormData;
        }
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */


        function isArrayBufferView(val) {
          var result;

          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && val.buffer instanceof ArrayBuffer;
          }

          return result;
        }
        /**
         * Determine if a value is a String
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a String, otherwise false
         */


        function isString(val) {
          return typeof val === 'string';
        }
        /**
         * Determine if a value is a Number
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Number, otherwise false
         */


        function isNumber(val) {
          return typeof val === 'number';
        }
        /**
         * Determine if a value is an Object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Object, otherwise false
         */


        function isObject(val) {
          return val !== null && typeof val === 'object';
        }
        /**
         * Determine if a value is a Date
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Date, otherwise false
         */


        function isDate(val) {
          return toString.call(val) === '[object Date]';
        }
        /**
         * Determine if a value is a File
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a File, otherwise false
         */


        function isFile(val) {
          return toString.call(val) === '[object File]';
        }
        /**
         * Determine if a value is a Blob
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Blob, otherwise false
         */


        function isBlob(val) {
          return toString.call(val) === '[object Blob]';
        }
        /**
         * Determine if a value is a Function
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */


        function isFunction(val) {
          return toString.call(val) === '[object Function]';
        }
        /**
         * Determine if a value is a Stream
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Stream, otherwise false
         */


        function isStream(val) {
          return isObject(val) && isFunction(val.pipe);
        }
        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */


        function isURLSearchParams(val) {
          return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
        }
        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         * @returns {String} The String freed of excess whitespace
         */


        function trim(str) {
          return str.replace(/^\s*/, '').replace(/\s*$/, '');
        }
        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  navigator.product -> 'ReactNative'
         * nativescript
         *  navigator.product -> 'NativeScript' or 'NS'
         */


        function isStandardBrowserEnv() {
          if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
            return false;
          }

          return typeof window !== 'undefined' && typeof document !== 'undefined';
        }
        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         */


        function forEach(obj, fn) {
          // Don't bother if no value provided
          if (obj === null || typeof obj === 'undefined') {
            return;
          } // Force an array if not already something iterable


          if (typeof obj !== 'object') {
            /*eslint no-param-reassign:0*/
            obj = [obj];
          }

          if (isArray(obj)) {
            // Iterate over array values
            for (var i = 0, l = obj.length; i < l; i++) {
              fn.call(null, obj[i], i, obj);
            }
          } else {
            // Iterate over object keys
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
              }
            }
          }
        }
        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         * @returns {Object} Result of all merge properties
         */


        function merge()
        /* obj1, obj2, obj3, ... */
        {
          var result = {};

          function assignValue(val, key) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
              result[key] = merge(result[key], val);
            } else {
              result[key] = val;
            }
          }

          for (var i = 0, l = arguments.length; i < l; i++) {
            forEach(arguments[i], assignValue);
          }

          return result;
        }
        /**
         * Function equal to merge with the difference being that no reference
         * to original objects is kept.
         *
         * @see merge
         * @param {Object} obj1 Object to merge
         * @returns {Object} Result of all merge properties
         */


        function deepMerge()
        /* obj1, obj2, obj3, ... */
        {
          var result = {};

          function assignValue(val, key) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
              result[key] = deepMerge(result[key], val);
            } else if (typeof val === 'object') {
              result[key] = deepMerge({}, val);
            } else {
              result[key] = val;
            }
          }

          for (var i = 0, l = arguments.length; i < l; i++) {
            forEach(arguments[i], assignValue);
          }

          return result;
        }
        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         * @return {Object} The resulting value of object a
         */


        function extend(a, b, thisArg) {
          forEach(b, function assignValue(val, key) {
            if (thisArg && typeof val === 'function') {
              a[key] = bind(val, thisArg);
            } else {
              a[key] = val;
            }
          });
          return a;
        }

        module.exports = {
          isArray: isArray,
          isArrayBuffer: isArrayBuffer,
          isBuffer: isBuffer,
          isFormData: isFormData,
          isArrayBufferView: isArrayBufferView,
          isString: isString,
          isNumber: isNumber,
          isObject: isObject,
          isUndefined: isUndefined,
          isDate: isDate,
          isFile: isFile,
          isBlob: isBlob,
          isFunction: isFunction,
          isStream: isStream,
          isURLSearchParams: isURLSearchParams,
          isStandardBrowserEnv: isStandardBrowserEnv,
          forEach: forEach,
          merge: merge,
          deepMerge: deepMerge,
          extend: extend,
          trim: trim
        };
        /***/
      },

      /***/
      "../../node_modules/process/browser.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/process/browser.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
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
          } // if setTimeout wasn't available but was latter defined


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
          } // if clearTimeout wasn't available but was latter defined


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
        }; // v8 likes predictible objects


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
        /***/

      },

      /***/
      "./src/core/Ajax.js":
      /*!**************************!*\
        !*** ./src/core/Ajax.js ***!
        \**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable no-console */

        /* eslint-disable no-param-reassign */

        /* eslint-disable max-len */

        /* eslint-disable func-names */
        const axios = __webpack_require__(
        /*! axios */
        "../../node_modules/axios/index.js"); // var tools = require("../helpers/tools");


        const Events = __webpack_require__(
        /*! ./Events */
        "./src/core/Events.js"); // const LikeFormData = require('../helpers/LikeFormData');

        /**
         * This is an Ajax transport.
         * Supports  XDomainRequest for old IE
         * @param {Object} [options]
         * @param {Object} [options.headers] Headers to add to the instance
         * @fires beforeSend event that will be performed before request is send. Event called with one parameter "options", that contains all variables for Ajax
         * @constructor
         */


        const Ajax = function (options) {
          this.currentRequests = 0;
          this.events = new Events(['beforeSend', 'load']);
          this.cancel = null;

          if (options && options.headers) {
            this.headers = Object.assign(this.headers, options.headers);
          }
        };
        /**
         * Default headers. You can overwrite it. Look at the event beforeSend
         * Please note that on XDomainRequest  we can't send any headers.
         * @type Object
         */


        Ajax.prototype.headers = {
          'X-Requested-With': 'XMLHttpRequest'
        };
        /**
         * Send ajax request to server
         * Will return promise or array with promise and XMLHttpRequest : {window.Promise|[window.Promise,XMLHttpRequest]}
         * @since 0.4.0
         * @param {Object} options object with options
         * @param {String} options.url url to send data
         * @param {Object|String} [options.data] data to send
         * @param {String} [options.method]
         * @param {Object} [options.headers] headers to add to the request
         * @param {Function} [options.onProgress] callback function on progress. Two callback options: current bytes sent,totalBytes
         * If tree then  [window.Promise, XMLHttpRequest ] will be returned
         * @return {Promise|Array}
         */

        Ajax.prototype.send = function (options) {
          const that = this; // TODO why we check here if data === null then reassign to null again?

          if (options.data === null || options.data === undefined || options.data === 'undefined') {
            options.data = null;
          }

          if (!options.method) {
            options.method = 'POST';
          }

          options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : { ...this.headers
          }; // eslint-disable-next-line prefer-destructuring

          const CancelToken = axios.CancelToken;
          const cancelSource = CancelToken.source();
          const config = {
            // `url` is the server URL that will be used for the request
            url: options.url,
            // `method` is the request method to be used when making the request
            method: options.method,
            // `headers` are custom headers to be sent
            headers: options.headers,
            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // When no `transformRequest` is set, must be of one of the following types:
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - Browser only: FormData, File, Blob
            // - Node only: Stream, Buffer
            data: options.data,
            // `onUploadProgress` allows handling of progress events for uploads
            onUploadProgress: progressEvent => {
              if (options.onProgress) {
                options.onProgress(progressEvent.loaded, progressEvent.total);
              }
            },
            // `cancelToken` specifies a cancel token that can be used to cancel the request
            // (see Cancellation section below for details)
            cancelToken: cancelSource.token
          };
          this.cancel = cancelSource.cancel;

          const wrapError = e => {
            e.isSFAjaxError = true; // Marks error that can have normal data inside

            return e;
          };

          const ajaxPromise = new Promise((resolve, reject) => {
            // Return a new promise.
            if (!options.url) {
              console.error('You should provide url');
              reject(new Error('You should provide url'));
            }

            that.currentRequests += 1;
            axios.request(config).then(response => {
              that.currentRequests -= 1;

              if (response.status) {
                if (response.status > 199 && response.status < 300) {
                  // 200-299
                  resolve(response);
                } else if (response.status > 399 && response.status < 600) {
                  // 400-599
                  reject(wrapError(response));
                } else {
                  console.error('unknown status %d. Rejecting', response.status);
                  reject(wrapError(response));
                }
              } else {
                reject(wrapError(response)); // reject with the status text
              }

              options.response = response;
              that.events.trigger('load', options); // for example - used to handle actions
            }).catch(error => {
              that.currentRequests -= 1;

              if (error.response) {
                reject(wrapError(error.response));
              } else {
                reject(error);
              }
            });
          });
          return ajaxPromise;
        };

        module.exports = Ajax;
        /***/
      },

      /***/
      "./src/core/BaseDOMConstructor.js":
      /*!****************************************!*\
        !*** ./src/core/BaseDOMConstructor.js ***!
        \****************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-prototype-builtins */
        // TODO: ?

        /* eslint-disable max-len */

        /* eslint-disable func-names */

        /**
         * This a base constructor (class) for any DOM based instance.
         * This constructor just grab all node attributes and generates options. All processed options stored at this.options
         * @example
         * We have html like this:
         * <div data-test="testValue" data-value="value123">.....</div>
         * this.options will be:
         * {
         *  test:"testValue",
         *  value:"value"
         * }
         * Note: data-test and data-value should be described in attributesToGrab
         * @constructor
         */
        const BaseDOMConstructor = function () {};
        /**
         * Init method. Call after construct instance
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         */


        BaseDOMConstructor.prototype.init = function (sf, node, options) {
          // TODO data-spiral-JSON
          this.sf = sf;
          this.node = node; // if (sf.options && sf.options.instances && sf.options.instances[this.name]) {
          //    options = Object.assign(options || {}, sf.options.instances[this.name]);
          // }

          this.options = Object.assign(this.grabOptions(node), options);
        };
        /**
         * This is a options to generate.
         * You should provide processor or value.
         * @type {Object}
         * @property {Object} propertyKey - object of property
         * @property {String} propertyKey.value - default value to return
         * @property {String} [propertyKey.domAttr] - dom attribute to grab data
         * @property {Function} [propertyKey.processor] -  processor to process data before return
         * @property {Object}  ... - Another object of one property
         * @type {{}}
         *  @example
         * "someAttribute": {// key
         *      value: true, //default Value
         *      domAttr: "data-some-attribute", // attribute from node to grab
         *      processor: function (node,val,self) { //processor to process values before return
         *          //some calculations
         *      return someValue;
         *      }
         *  },
         *  "anotherAttribute":{...},
         *  "..."
         *
         *  @example
         *  //return node as value
         *  "context": {
         *      "processor": function (node,val,key) { //processor
         *          return node;
         *      }
         *  },
         *  "Another-key":{...},
         *  "..."
         * @example
         * //Grab attribute "data-attribute" as "MyAttribute" if attribute not provided return "DefaultValue"
         * // Dom node <div data-attribute="someValue"></div>
         * "MyAttribute": {
         *      value: "DefaultValue",
         *      domAttr: "data-attribute"
         *  }
         *  //after processing we should have
         *  {"MyAttribute":"someValue"}
         *
         *  @example
         * //Grab attribute "data-attribute" as "MyAttribute" and return some value instead
         * //Dom node  <div data-attribute="someValue"></div>
         * "MyAttribute": {
         *      domAttr: "data-attribute",
         *      processor: function (node,val,self) {
         *          return val+"SomeCalculation";
         *      }
         *  }
         *  //after processing we should have
         *  {"MyAttribute":"someValueSomeCalculation"}
         *
         * @example
         * //return function as value
         * processAnswer: {
         *      "value": function (options) {
         *         return "someVal";
         *      }
         *  //after processing we should have
         *  {"processAnswer":function (options) {
         *         return "someVal";
         *      }
         *   }
         *
         * @example
         * //return init time as value
         * initTime: {
         *      "processor": function (node,val,self) {
         *         return new Date().getTime;
         *      }
         *  //after processing we should have
         *  {"initTime":1429808977404}
         * @example
         * //return other value instead of real one
         * processAnswer: {
         *      "processor": function (node,val,self) {
         *         return "someVal";
         *      }
         *  //after processing we should have
         *  {"processAnswer":"someVal"}
         */


        BaseDOMConstructor.prototype.optionsToGrab = {};
        /**
         * Grab all options that described in optionsToGrab
         * @param {Object} node domNode
         * @return {Object}
         */

        BaseDOMConstructor.prototype.grabOptions = function (node) {
          const options = {};
          let currentOptionValue;
          let currentOption; // for (const option in this.optionsToGrab) {

          Object.keys(this.optionsToGrab).forEach(option => {
            if (this.optionsToGrab.hasOwnProperty(option)) {
              currentOptionValue = null;

              if (this.optionsToGrab.hasOwnProperty(option)) {
                // if this is own option
                currentOption = this.optionsToGrab[option];

                if (currentOption.hasOwnProperty('value')) {
                  // we have default option. Let's grab it for first
                  currentOptionValue = currentOption.value;
                }

                if (this.sf.options.instances[this.name] && this.sf.options.instances[this.name].hasOwnProperty(option)) {
                  currentOptionValue = this.sf.options.instances[this.name][option];
                }

                if (currentOption.hasOwnProperty('domAttr') && node.attributes.hasOwnProperty(currentOption.domAttr)) {
                  // we can grab the attribute of node
                  currentOptionValue = node.attributes[currentOption.domAttr].value;
                }

                if (currentOption.hasOwnProperty('processor')) {
                  // we have processor. Let's execute it
                  currentOptionValue = currentOption.processor.call(this, node, currentOptionValue, currentOption);
                }

                if (currentOptionValue !== null) {
                  options[option] = currentOptionValue;
                }
              }
            }
          });
          return options;
        };

        module.exports = BaseDOMConstructor;
        /***/
      },

      /***/
      "./src/core/DomMutations.js":
      /*!**********************************!*\
        !*** ./src/core/DomMutations.js ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable max-len */

        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /**
         * Dom mutation. Listening to the DOM and add or remove instances based on classes.
         * @param {Object} instancesController  spiral instancesController.
         * @param {Function} instancesController.getClasses  get all registered modules classes.
         * @param {Function} instancesController.addInstance  add instance method.
         * @param {Function} instancesController.removeInstance  remove instance method
         * @constructor
         */
        const DomMutations = function (instancesController) {
          if (!instancesController) {
            console.error('You should provide instancesController  for DOM Mutation. Because DOM Mutation  should known all classes and');
            return;
          }

          if (!this.constructor) {
            console.error("Please call DomMutations with new  - 'new DomMutations()' ");
            return;
          }

          this.instancesController = instancesController;
          const config = {
            // config for MutationObserver
            attributes: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true,
            subtree: true,
            attributeOldValue: true,
            attributeFilter: ['class']
          };
          const that = this;
          this.observer = new MutationObserver(function () {
            // call function when dom mutated.
            // eslint-disable-next-line
            that.onDomMutate.apply(that, arguments);
          });
          this.observer.observe(document, config); // start observer
        };
        /**
         * When dom mutated this function id executed.
         * @param {Array} mutations array of mutations
         * @return {boolean}
         */


        DomMutations.prototype.onDomMutate = function (mutations) {
          const classArray = this.instancesController.getClasses(); // get all registered classes

          const classSelector = `.${classArray.join(',.')}`; // convert for querySelectorAll()

          if (classSelector.length === 1) {
            // if not registered any instanceTypes
            return false;
          }

          mutations.forEach(function (mutation) {
            // loop over mutation array
            switch (mutation.type) {
              case 'attributes':
                this.processMutationAttributes(mutation, classArray);
                break;

              case 'characterData':
                break;

              case 'childList':
                this.processMutationChildList(mutation.addedNodes, 'addInstance', classSelector, classArray);
                this.processMutationChildList(mutation.removedNodes, 'removeInstance', classSelector, classArray);
                break;

              case 'default':
              default:
                console.error('Something wrong. Contact tech support');
            }
          }, this);
          return true;
        };

        DomMutations.prototype.processMutationAttributes = function (mutation, classArray) {
          const that = this;
          const currentClasses = mutation.target.className.split(' ');
          const oldClasses = mutation.oldValue ? mutation.oldValue.split(' ') : [];
          const addedClasses = currentClasses.filter(val => oldClasses.indexOf(val) === -1);
          const removedClasses = oldClasses.filter(val => currentClasses.indexOf(val) === -1);
          const addedRegisteredClasses = addedClasses.filter(val => classArray.indexOf(val) !== -1);
          const removedRegisteredClasses = removedClasses.filter(val => classArray.indexOf(val) !== -1);
          removedRegisteredClasses.forEach(val => {
            that.instancesController.removeInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
          });
          addedRegisteredClasses.forEach(val => {
            that.instancesController.addInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
          });
        };
        /**
         * Process mutation on ChildList
         * @param {NodeList} nodesList array with nodes
         * @param {String} action action to call (add or remove nodes)
         * @param {String} classSelector - string selector for querySelectorAll
         * @param {Array} classArray - array of all registered classes
         */


        DomMutations.prototype.processMutationChildList = function (nodesList, action, classSelector, classArray) {
          const that = this;
          /**
             * Internal function for checking node class
             * @param {Object} node dom node
             */

          function checkNode(node) {
            classArray.forEach(className => {
              // loop over registered classes
              if (node.classList.contains(className)) {
                // if class match try to add or remove instance for this node
                that.instancesController[action](that.instancesController.getInstanceNameByCssClass(className), node);
              }
            });
          }

          [].forEach.call(nodesList, val => {
            // loop over mutation nodes
            if (val.nodeType !== 1 || val.nodeName === 'SCRIPT' || val.nodeName === 'LINK') {
              // do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
              return false;
            }

            checkNode(val); // check mutation node

            [].forEach.call(val.querySelectorAll(classSelector), checkNode); // query all nodes with required classes and check it

            return true;
          });
        };
        /**
         * Stop listening the dom changes
         */


        DomMutations.prototype.stopObserve = function () {
          this.observer.disconnect();
        };

        module.exports = DomMutations;
        /***/
      },

      /***/
      "./src/core/Events.js":
      /*!****************************!*\
        !*** ./src/core/Events.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-console */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable func-names */

        /**
         * Events system.
         * @param {Array} allowedEvents array of allowed events.
         * @constructs Events
         * @example
         * //allow to work with all events
         * var events = new Events();
         * events.on("myBestEvent",function(e){console.log(e)});
         * @example
         * //Allow to serve only limited events
         *  var events = new Events(["beforeSubmit","onDataReady"]);
         *  events.on("myBestEvent",function(e){console.log(e)});//will not works
         *  events.on("beforeSubmit",function(e){console.log(e)});//will work
         */
        const Events = function (allowedEvents) {
          this._storage = {};
          this._allowedEvents = allowedEvents;
        };
        /**
         * Add event(s)
         * @param {String} events event or space separated event list
         * @param {Function} callback callback function
         * @example
         * var events = new Events();
         * events.on("myBestEvent myBestEvent2 myBestEvent3",function(e){console.log(e)});
         * events.on("myBestEvent",function(e){console.log(e)});
         */


        Events.prototype.on = function (events, callback) {
          const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
          eventArr.forEach(function (event) {
            // event not inside allowed events
            if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {
              console.warn('Events. Try to register event %s, but event is not allowed', event);
              return;
            } // eslint-disable-next-line no-prototype-builtins


            if (!this._storage.hasOwnProperty(events)) {
              this._storage[event] = [];
            }

            this._storage[event].push(callback);
          }, this);
        };
        /**
         * Add action
         * @param {String} action
         * @param {Function} func
         * @deprecated  use "on" instead
         */


        Events.prototype.registerAction = Events.prototype.on;
        /**
         * remove event
         * @param {String} event
         * @param {Function} callback
         */

        Events.prototype.off = function () {
          // eslint-disable-next-line no-alert
          alert('You try to remove action. This part is incomplete'); // TODO
        };
        /**
         * Trigger event.
         * @param {String} event event name
         * @param {Object} [options] options to pass to the callback
         * @example
         * var events = new Events();
         * events.on("myBestEvent",function(e){console.log(e.bestKey)});
         * events.trigger("myBestEvent",{bestKey:42}); //will show in log
         */


        Events.prototype.trigger = function (event, options) {
          // event not inside allowed events
          if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {
            console.warn('Events. Try to trigger event %s, but event is not allowed', event);
            return;
          } // eslint-disable-next-line no-prototype-builtins


          if (this._storage.hasOwnProperty(event)) {
            for (let n = 0, l = this._storage[event].length; n < l; n += 1) {
              this._storage[event][n](options);
            }
          }
        };
        /**
         * Perform action
         * @param {String} action
         * @param {Object} [actionParams] object with all action data from server
         * @param {Object} [options] ajax options
         * @deprecated use "trigger" instead
         */


        Events.prototype.performAction = Events.prototype.trigger;
        module.exports = Events;
        /***/
      },

      /***/
      "./src/core/InstancesController.js":
      /*!*****************************************!*\
        !*** ./src/core/InstancesController.js ***!
        \*****************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-prototype-builtins */
        // TODO: ?

        /* eslint-disable no-param-reassign */

        /* eslint-disable max-len */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /**
         * Instance controller
         * @param {*} spiral
         * @constructor
         */
        const InstancesController = function (spiral) {
          this.spiral = spiral;

          if (!this.constructor) {
            console.error("Please call InstancesController with new  - 'new InstancesController()' ");
            return;
          }

          this._storage = {
            instancesConstructors: {
              cssClasses: {},
              jsConstructors: {}
            },
            addons: {},
            instances: {}
          }; // todo decide if we need this
          // ["onAddInstance", "onRemoveInstance"]
          // this.events = new spiral.modules.core.Events();
        };
        /**
         * Register new instance type
         * @param {Function} constructorFunction - constructor function of instance
         * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
         * controlled by DomMutation. But you still can use it from JS.
         * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
         */


        InstancesController.prototype.registerInstanceType = function (constructorFunction, cssClassName, isSkipInitialization) {
          const instanceName = constructorFunction.spiralFrameworkName || constructorFunction.prototype.name;

          if (!instanceName) {
            console.error('Instance constructor should have name inside it');
          } // eslint-disable-next-line no-prototype-builtins


          if (this._storage.instancesConstructors.jsConstructors.hasOwnProperty(instanceName)) {
            console.error("Instance Constructor for type '%s' already added. Skipping", instanceName);
            return;
          }

          if (cssClassName) {
            // add link (cssClassName->instanceName)
            this._storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
          }

          this._storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction; // if (this._storage.instancesConstructors.hasOwnProperty(className)){
          //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
          //    return;
          // }
          // this._storage.instancesConstructors[className] = {//init storage fields
          //    "typeName": constructorFunction.prototype.name,
          //    "constructor": constructorFunction
          // };

          this._storage.instances[instanceName] = [];

          if (!isSkipInitialization) {
            const nodes = document.getElementsByClassName(cssClassName); // init add nodes with this class

            for (let i = 0, max = nodes.length; i < max; i += 1) {
              this.addInstance(instanceName, nodes[i]);
            }
          }
        };
        /**
         * Old method to register instance type
         * @param {*} className
         * @param {*} constructorFunction
         * @param {*} isSkipInitialization
         * @return {*}
         * @deprecated
         */


        InstancesController.prototype.addInstanceType = function (className, constructorFunction, isSkipInitialization) {
          console.warn('addInstanceType is deprecated. Please use registerInstanceType instead');
          return this.registerInstanceType(constructorFunction, isSkipInitialization);
        };
        /**
         * Add instance
         * @param {String} instanceName - name of instance
         * @param {Object} node - dom node
         * @param {Object} [options] all options for send to the constructor
         * @return {boolean}
         */


        InstancesController.prototype.addInstance = function (instanceName, node, options) {
          const InstanceConstructor = this._storage.instancesConstructors.jsConstructors[instanceName];
          const isAlreadyAdded = this.getInstance(instanceName, node);

          if (!InstanceConstructor || isAlreadyAdded) {
            // if not found this type  or already added - return
            return false;
          }

          const instance = new InstanceConstructor(this.spiral, node, options);

          this._storage.instances[instanceName].push({
            // add new instance of this type
            node,
            instance
          }); // this.events.trigger("onAddInstance", instance);


          return instance;
        };
        /**
         * Remove instance.
         * @param {String} instanceName - name of instance class
         * @param {Object|String} node - dom node ID
         * @return {boolean}
         */


        InstancesController.prototype.removeInstance = function (instanceName, node) {
          const instanceObj = this.getInstance(instanceName, node, true);

          if (!instanceObj) {
            return false;
          }

          instanceObj.instance.die(); // avoid memory leak

          const key = this._storage.instances[instanceName].indexOf(instanceObj);

          if (key !== -1) {
            // remove key
            this._storage.instances[instanceName].splice(key, 1);
          }

          return true;
        };
        /**
         * Get instance. Return instance object of this dom node
         * @param {String} instanceName - name of instance
         * @param {Object|String} node - dom node o dome node ID
         * @param {boolean} [isReturnObject] - return object or instance
         * @return {boolean}
         */


        InstancesController.prototype.getInstance = function (instanceName, node, isReturnObject) {
          // TODO isReturnObject not needed. Refactor and remove
          const typeArr = this._storage.instances[instanceName];
          let ret = false;

          if (!typeArr) {
            return false;
          }

          node = node instanceof HTMLElement ? node : document.getElementById(node);

          if (!node) {
            return false;
          }

          for (let key = 0, l = typeArr.length; key < l; key += 1) {
            // iterate storage and try to find instance
            if (typeArr[key].node === node) {
              ret = isReturnObject ? typeArr[key] : typeArr[key].instance;
              break;
            }
          }

          return ret;
        };
        /**
         * Get instances. Return array of instances objects
         * @param {String} instanceName - name of instance
         * @return {array|boolean}
         */


        InstancesController.prototype.getInstances = function (instanceName) {
          return this._storage.instances[instanceName] || false;
        };
        /**
         * Register addon for instance
         * @param {Function|Object} addon
         * @param {String} instanceName name of instance to register addon
         * @param {String} addonType type of addon (message,fill,etc)
         * @param {String} addonName name of addon (spiral, bootstrap,etc)
         */


        InstancesController.prototype.registerAddon = function (addon, instanceName, addonType, addonName) {
          if (!this._storage.addons.hasOwnProperty(instanceName)) {
            this._storage.addons[instanceName] = {};
          }

          if (!this._storage.addons[instanceName].hasOwnProperty(addonType)) {
            this._storage.addons[instanceName][addonType] = {};
          }

          if (this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
            console.error('The %s addon type %s already registered for instance %s! Skipping registration.', addonName, addonType, instanceName);
            return;
          }

          this._storage.addons[instanceName][addonType][addonName] = addon;
        };
        /**
         * Get registered addon
         * @param {String} instanceName name of instance to register addon
         * @param {String} addonType type of addon (message,fill,etc)
         * @param {String} addonName name of addon (spiral, bootstrap,etc)
         * @return {*}
         */


        InstancesController.prototype.getInstanceAddon = function (instanceName, addonType, addonName) {
          if (!this._storage.addons.hasOwnProperty(instanceName) || !this._storage.addons[instanceName].hasOwnProperty(addonType) || !this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
            return false;
          }

          return this._storage.addons[instanceName][addonType][addonName];
        };
        /**
         * Get all registered classes
         * @return {Array}
         */


        InstancesController.prototype.getClasses = function () {
          return Object.keys(this._storage.instancesConstructors.cssClasses);
        };
        /**
         * For given cssClass return name of instance
         * @param {String} cssClass
         * @return {*}
         */


        InstancesController.prototype.getInstanceNameByCssClass = function (cssClass) {
          return this._storage.instancesConstructors.cssClasses[cssClass];
        };
        /**
         * Get constructor by name or class name
         * @param {*} name
         */


        InstancesController.prototype.getInstanceConstructors = function () {// TODO
        };

        module.exports = InstancesController;
        /***/
      },

      /***/
      "./src/core/ajax/baseActions.js":
      /*!**************************************!*\
        !*** ./src/core/ajax/baseActions.js ***!
        \**************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable max-len */

        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /**
         * This plugin adds ability to perform actions from the server.
         * @param {Object} sf
         * "action":"reload"
         * "action":{"redirect":"/account"}
         * "action":{"redirect":"/account","delay":3000}
         * "action":{"name":"redirect","url":"/account","delay":3000}
         */
        module.exports = function (sf) {
          sf.ajax.events.on('load', options => {
            const {
              response
            } = options;
            if (!response || !response.data) return;
            const {
              data
            } = response;
            if (!data.action) return;

            if (typeof data.action === 'string') {
              // "action":"reload"
              sf.events.trigger(data.action);
            } else if (typeof data.action === 'object') {
              const keys = Object.keys(data.action); // TODO: notifications
              // if (keys.indexOf('flash') !== -1) {
              //   const { flash } = data.action;
              //   const timestamp = Date.now();
              //   let sfFlashMessage = {};
              //   if (typeof data.action.flash === 'object') {
              //     sfFlashMessage = flash;
              //     sfFlashMessage.timestamp = timestamp;
              //   } else {
              //     sfFlashMessage = {
              //       message: flash,
              //       timestamp,
              //     };
              //   }
              //   sessionStorage.setItem('sfFlashMessage', JSON.stringify(sfFlashMessage));
              // }

              if (keys.indexOf('redirect') !== -1) {
                setTimeout(() => {
                  sf.events.trigger('redirect', data.action.redirect, options);
                }, +data.action.delay || 0);
              } else if (keys.indexOf('name') !== -1) {
                setTimeout(() => {
                  sf.events.trigger(data.action.name, data.action.url);
                }, +data.action.delay || 0);
              }
            } else {
              console.error('Action from server. Something wrong. ', data.action);
            }
          }); // (function (sfFlashMessage) {
          //   if (!sfFlashMessage) return;
          //   const message = JSON.parse(sfFlashMessage);
          //   const timestamp = Date.now();
          //   let flashClass;
          //   if (timestamp - message.timestamp > 10000) return;
          //   if (message.type === 'debug' || message.type === 'success') {
          //     flashClass = 'debug';
          //   } else if (message.type === 'info' || !message.type || message.type === 'notice') {
          //     flashClass = 'info';
          //   } else {
          //     flashClass = 'danger';
          //   }
          //   const node = document.createElement('div');
          //   const nodeWrapper = document.createElement('div');
          //   nodeWrapper.classList.add('flash-wrapper');
          //   node.classList.add('flash', flashClass);
          //   node.innerHTML = message.message;
          //   document.body.appendChild(nodeWrapper);
          //   nodeWrapper.appendChild(node);
          //   setTimeout(() => {
          //     nodeWrapper.classList.add('show');
          //   }, 1);
          //   setTimeout(() => {
          //     nodeWrapper.classList.remove('show');
          //   }, message.timeout || 5000);
          //   sessionStorage.removeItem('sfFlashMessage');
          // }(sessionStorage.getItem('sfFlashMessage')));
        };
        /***/

      },

      /***/
      "./src/core/events/baseEvents.js":
      /*!***************************************!*\
        !*** ./src/core/events/baseEvents.js ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-restricted-globals */
        module.exports = function baseEvents(events) {
          events.on('redirect', event => {
            const url = Object.prototype.toString.call(event) === '[object String]' ? event : event.url; // http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative

            const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(url);

            if (isAbsolute) {
              self.location.href = url;
            } else {
              const origin = window.location.origin || `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
              self.location.href = origin + (url.charAt(0) === '/' ? url : `/${url}`); // Relative path
            }
          });
          events.on('reload', () => {
            window.location.reload();
          });
          events.on('refresh', () => {
            events.trigger('reload');
          });
          events.on('close', () => {
            self.close();
          });
        };
        /***/

      },

      /***/
      "./src/helpers/DOMEvents.js":
      /*!**********************************!*\
        !*** ./src/helpers/DOMEvents.js ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-param-reassign */

        /* eslint-disable no-console */

        /* eslint-disable max-len */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable func-names */

        /**
         * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
         * It's very helpful for die() method of instances
         * @TODO add to many nodes
         * @TODO new method like addEventListener  DOMEvents.on(node(s),event,callback,useCapture);
         * @constructor
         */
        const DOMEvents = function () {
          /**
             * Internal storage for events
             * @property {Array.<Object>} DOMEvents - dom events array
             * @property {Object} DOMEvents.DOMNode -   DOM node
             * @property {String} DOMEvents.eventType -   Event type
             * @property {Function} DOMEvents.eventFunction -   Function
             * @property {Boolean} DOMEvents.useCapture=false -   useCapture
             * @property {Object} ... -   another object
             * @private
             */
          this._DOMEventsStorage = [];
        };
        /**
         * Add event(s) to node(s).
         * @TODO add to many nodes
         * @param {Array.<Object>|Object} eventArray - event array or event itself
         * @param {Object} eventArray.DOMNode -   DOM node
         * @param {String} eventArray.eventType -   Event type
         * @param {Function} eventArray.eventFunction -   Function
         * @param {Boolean} [eventArray.useCapture=false] -   useCapture
         * @example
         * var DOMEventsInstance = new DOMEvents();
         * var eventOne = {
         *      DOMNode: document.getElementById("example"),
         *      eventType: "click",
         *      eventFunction: function (e) {
         *          console.log("Hi there. Native  DOM events is:",e);
         *      }
         * }
         *  var eventTwo = {
         *      DOMNode: document.getElementById("example2"),
         *      eventType: "mousedown",
         *      eventFunction: function (e) {
         *          console.log("Hi there. mousedown event. Native  DOM events is:",e);
         *      }
         * }
         *  DOMEventsInstance.add([eventOne,eventTwo]);
         */


        DOMEvents.prototype.add = function (eventArray) {
          if (Object.prototype.toString.call([]) !== '[object Array]') {
            eventArray = [eventArray];
          }

          eventArray.forEach(function (val) {
            val.useCapture = !!val.useCapture;
            val.DOMNode.addEventListener(val.eventType, val.eventFunction, val.useCapture);

            this._DOMEventsStorage.push(val);
          }, this);
        };
        /**
         * Remove events
         * @param {Array.<Object>} eventArray - event array
         * @param {Object} eventArray.DOMNode -   DOM node
         * @param {String} eventArray.eventType -   Event type
         * @param {Function} eventArray.eventFunction -   Function
         * @param {Boolean} [eventArray.useCapture=false] -   useCapture
         */


        DOMEvents.prototype.remove = function ()
        /* eventArray */
        {
          // TODO IMPLEMENT
          // TODO не уверен что этот метод необходим. если надо часто убирать какието обработчики, то лучше поставить обработчки на родителя
          console.warn('TODO IMPLEMENT');
        };
        /**
         * Remove all dom events registered with this instance (added by method add)
         * @example
         * //look at add method as first part of this code
         * DOMEventsInstance.removeAll();
         */


        DOMEvents.prototype.removeAll = function () {
          this._DOMEventsStorage.forEach(val => {
            val.DOMNode.removeEventListener(val.eventType, val.eventFunction, val.useCapture);
          });

          this._DOMEventsStorage = [];
        };

        module.exports = DOMEvents;
        /***/
      },

      /***/
      "./src/helpers/domTools.js":
      /*!*********************************!*\
        !*** ./src/helpers/domTools.js ***!
        \*********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable max-len */

        /* eslint-disable no-param-reassign */

        /**
         This is a collection of useful DOM tools.
         */
        module.exports = {
          /**
             * Found first parent node with matched selector(s)
             * @param {Object} elem - dom node
             * @param {String|Array} selectors - selector or array of selectors
             * @returns {Object| Boolean} - node or false
             */
          closest(elem, selectors) {
            selectors = typeof selectors === 'string' ? [selectors] : selectors;
            let key;
            const l = selectors.length;
            const matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

            while (elem && elem.parentNode) {
              for (key = 0; key < l; key += 1) {
                if (matchesSelector.call(elem, selectors[key])) {
                  return elem;
                }
              }

              elem = elem.parentNode;
            }

            return false;
          },

          /**
             * Found first parent node with matched className(s).
             * TODO Why this? Because old IE....
             * TODO It's not good, because it's a copy of closest @see closest. Refactor
             * @param {Object} elem - dom node
             * @param {String|Array} className - className or array of classNames
             * @returns {Object| Boolean} - node or false
             */
          closestByClassName(elem, className) {
            className = typeof className === 'string' ? [className] : className;
            let key;
            const l = className.length;

            while (elem && elem.parentNode) {
              for (key = 0; key < l; key += 1) {
                const reg = new RegExp(`(\\s|^)${className[key]}(\\s|$)`);

                if (elem.className.match(reg)) {
                  return elem;
                }
              }

              elem = elem.parentNode;
            }

            return false;
          }

        };
        /***/
      },

      /***/
      "./src/helpers/tools.js":
      /*!******************************!*\
        !*** ./src/helpers/tools.js ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-restricted-globals */

        /**
         * @module tools
         * @namespace
         */
        const tools = {
          resolveKeyPath(path, obj, safe) {
            // eslint-disable-next-line no-nested-ternary
            return path.split('.').reduce((prev, curr) => !safe ? prev[curr] : prev ? prev[curr] : undefined, obj || self);
          }

        };
        module.exports = tools;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable global-require */

        /* eslint-disable func-names */

        /* eslint-disable max-len */

        /* eslint-disable no-prototype-builtins */

        /**
         * Provides a spiral-specific sf bundle
         * TODO: This wrapping looks very fishy, why we need it? Move to toolkit may be?
         */
        const sf = __webpack_require__(
        /*! ./sf */
        "./src/sf.js");

        const sfWrapper = {
          core: sf.core,
          helpers: sf.helpers,
          tools: sf.tools
        }; // Add console shim for old IE

        __webpack_require__(
        /*! ./shim/console */
        "./src/shim/console.js");

        __webpack_require__(
        /*! ./shim/Object.assign */
        "./src/shim/Object.assign.js");

        if (!sfWrapper.hasOwnProperty('options')) sfWrapper.options = {
          instances: {}
        };
        if (!sfWrapper.options.hasOwnProperty('instances')) sfWrapper.options.instances = {};
        sfWrapper.instancesController = new sfWrapper.core.InstancesController(sfWrapper);
        sfWrapper.domMutation = new sfWrapper.core.DomMutations(sfWrapper.instancesController); // Events system

        sfWrapper.events = new sfWrapper.core.Events();

        __webpack_require__(
        /*! ./core/events/baseEvents.js */
        "./src/core/events/baseEvents.js")(sfWrapper.events); // AJAX


        sfWrapper.ajax = new sfWrapper.core.Ajax(window && window.csrfToken ? {
          // TODO move to spiral bindings
          headers: {
            'X-CSRF-Token': window.csrfToken
          }
        } : null); // ACTIONS

        __webpack_require__(
        /*! ./core/ajax/baseActions.js */
        "./src/core/ajax/baseActions.js")(sfWrapper); // API


        sfWrapper.createModulePrototype = function () {
          return Object.create(sfWrapper.core.BaseDOMConstructor.prototype);
        };

        sfWrapper.registerInstanceType = sfWrapper.instancesController.registerInstanceType.bind(sfWrapper.instancesController);
        sfWrapper.addInstance = sfWrapper.instancesController.addInstance.bind(sfWrapper.instancesController);
        sfWrapper.removeInstance = sfWrapper.instancesController.removeInstance.bind(sfWrapper.instancesController);
        sfWrapper.getInstance = sfWrapper.instancesController.getInstance.bind(sfWrapper.instancesController);
        sfWrapper.getInstances = sfWrapper.instancesController.getInstances.bind(sfWrapper.instancesController);
        sfWrapper.closest = sf.helpers.domTools.closest;
        sfWrapper.resolveKeyPath = sf.tools.resolveKeyPath;
        module.exports = sfWrapper;
        /***/
      },

      /***/
      "./src/sf.js":
      /*!*******************!*\
        !*** ./src/sf.js ***!
        \*******************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable global-require */
        const core = {
          Ajax: __webpack_require__(
          /*! ./core/Ajax */
          "./src/core/Ajax.js"),
          BaseDOMConstructor: __webpack_require__(
          /*! ./core/BaseDOMConstructor */
          "./src/core/BaseDOMConstructor.js"),
          DomMutations: __webpack_require__(
          /*! ./core/DomMutations */
          "./src/core/DomMutations.js"),
          Events: __webpack_require__(
          /*! ./core/Events */
          "./src/core/Events.js"),
          InstancesController: __webpack_require__(
          /*! ./core/InstancesController */
          "./src/core/InstancesController.js")
        };
        const helpers = {
          DOMEvents: __webpack_require__(
          /*! ./helpers/DOMEvents */
          "./src/helpers/DOMEvents.js"),
          domTools: __webpack_require__(
          /*! ./helpers/domTools */
          "./src/helpers/domTools.js") // LikeFormData: require('./helpers/LikeFormData'),
          // tools: require('./helpers/tools'),

        };
        const sf = {
          core,
          helpers,
          tools: __webpack_require__(
          /*! ./helpers/tools */
          "./src/helpers/tools.js")
        };
        module.exports = sf;
        /***/
      },

      /***/
      "./src/shim/Object.assign.js":
      /*!***********************************!*\
        !*** ./src/shim/Object.assign.js ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable func-names */

        /**
         * Object.assign polyfill
         * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
         */
        if (typeof Object.assign !== 'function') {
          (function () {
            Object.assign = function (target) {
              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
              }

              const output = Object(target);

              for (let index = 1; index < arguments.length; index += 1) {
                // eslint-disable-next-line prefer-rest-params
                const source = arguments[index];

                if (source !== undefined && source !== null) {
                  // for (const nextKey in source) {
                  Object.keys(source).forEach(nextKey => {
                    // eslint-disable-next-line no-prototype-builtins
                    if (source.hasOwnProperty(nextKey)) {
                      output[nextKey] = source[nextKey];
                    }
                  });
                }
              }

              return output;
            };
          })();
        }
        /***/

      },

      /***/
      "./src/shim/console.js":
      /*!*****************************!*\
        !*** ./src/shim/console.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable func-names */

        /**
         * Avoid `console` errors in browsers that lack a console.
         */
        (function () {
          let method;

          const noop = function () {};

          const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
          let {
            length
          } = methods; // eslint-disable-next-line no-multi-assign

          const console = window.console = window.console || {}; // eslint-disable-next-line no-plusplus

          while (length--) {
            method = methods[length]; // Only stub undefined methods.

            if (!console[method]) {
              console[method] = noop;
            }
          }
        })();
        /***/

      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGltL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaW0vY29uc29sZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJFdmVudHMiLCJBamF4Iiwib3B0aW9ucyIsImN1cnJlbnRSZXF1ZXN0cyIsImV2ZW50cyIsImNhbmNlbCIsImhlYWRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzZW5kIiwidGhhdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJDYW5jZWxUb2tlbiIsImNhbmNlbFNvdXJjZSIsInNvdXJjZSIsImNvbmZpZyIsInVybCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25Qcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsIndyYXBFcnJvciIsImUiLCJpc1NGQWpheEVycm9yIiwiYWpheFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRyaWdnZXIiLCJjYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYXNlRE9NQ29uc3RydWN0b3IiLCJpbml0Iiwic2YiLCJub2RlIiwiZ3JhYk9wdGlvbnMiLCJvcHRpb25zVG9HcmFiIiwiY3VycmVudE9wdGlvblZhbHVlIiwiY3VycmVudE9wdGlvbiIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImluc3RhbmNlcyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiZG9tQXR0ciIsInByb2Nlc3NvciIsImNhbGwiLCJEb21NdXRhdGlvbnMiLCJpbnN0YW5jZXNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25Eb21NdXRhdGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9ic2VydmUiLCJkb2N1bWVudCIsIm11dGF0aW9ucyIsImNsYXNzQXJyYXkiLCJnZXRDbGFzc2VzIiwiY2xhc3NTZWxlY3RvciIsImpvaW4iLCJsZW5ndGgiLCJtdXRhdGlvbiIsInR5cGUiLCJwcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzIiwicHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImN1cnJlbnRDbGFzc2VzIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic3BsaXQiLCJvbGRDbGFzc2VzIiwib2xkVmFsdWUiLCJhZGRlZENsYXNzZXMiLCJmaWx0ZXIiLCJ2YWwiLCJpbmRleE9mIiwicmVtb3ZlZENsYXNzZXMiLCJhZGRlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlSW5zdGFuY2UiLCJnZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzIiwiYWRkSW5zdGFuY2UiLCJub2Rlc0xpc3QiLCJhY3Rpb24iLCJjaGVja05vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vZGVUeXBlIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RvcE9ic2VydmUiLCJkaXNjb25uZWN0IiwiYWxsb3dlZEV2ZW50cyIsIl9zdG9yYWdlIiwiX2FsbG93ZWRFdmVudHMiLCJvbiIsImNhbGxiYWNrIiwiZXZlbnRBcnIiLCJyZXBsYWNlIiwiZXZlbnQiLCJ3YXJuIiwicHVzaCIsInJlZ2lzdGVyQWN0aW9uIiwib2ZmIiwiYWxlcnQiLCJuIiwibCIsInBlcmZvcm1BY3Rpb24iLCJJbnN0YW5jZXNDb250cm9sbGVyIiwic3BpcmFsIiwiaW5zdGFuY2VzQ29uc3RydWN0b3JzIiwiY3NzQ2xhc3NlcyIsImpzQ29uc3RydWN0b3JzIiwiYWRkb25zIiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJjb25zdHJ1Y3RvckZ1bmN0aW9uIiwiY3NzQ2xhc3NOYW1lIiwiaXNTa2lwSW5pdGlhbGl6YXRpb24iLCJpbnN0YW5jZU5hbWUiLCJzcGlyYWxGcmFtZXdvcmtOYW1lIiwibm9kZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsIm1heCIsImFkZEluc3RhbmNlVHlwZSIsIkluc3RhbmNlQ29uc3RydWN0b3IiLCJpc0FscmVhZHlBZGRlZCIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9iaiIsImRpZSIsImtleSIsInNwbGljZSIsImlzUmV0dXJuT2JqZWN0IiwidHlwZUFyciIsInJldCIsIkhUTUxFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRJbnN0YW5jZXMiLCJyZWdpc3RlckFkZG9uIiwiYWRkb24iLCJhZGRvblR5cGUiLCJhZGRvbk5hbWUiLCJnZXRJbnN0YW5jZUFkZG9uIiwiY3NzQ2xhc3MiLCJnZXRJbnN0YW5jZUNvbnN0cnVjdG9ycyIsImFqYXgiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJkZWxheSIsImJhc2VFdmVudHMiLCJ0b1N0cmluZyIsImlzQWJzb2x1dGUiLCJ0ZXN0Iiwic2VsZiIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsIndpbmRvdyIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiY2hhckF0IiwicmVsb2FkIiwiY2xvc2UiLCJET01FdmVudHMiLCJfRE9NRXZlbnRzU3RvcmFnZSIsImFkZCIsImV2ZW50QXJyYXkiLCJ1c2VDYXB0dXJlIiwiRE9NTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJldmVudEZ1bmN0aW9uIiwicmVtb3ZlIiwicmVtb3ZlQWxsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3QiLCJlbGVtIiwic2VsZWN0b3JzIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwicGFyZW50Tm9kZSIsImNsb3Nlc3RCeUNsYXNzTmFtZSIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwidG9vbHMiLCJyZXNvbHZlS2V5UGF0aCIsInBhdGgiLCJvYmoiLCJzYWZlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJzZldyYXBwZXIiLCJjb3JlIiwiaGVscGVycyIsImRvbU11dGF0aW9uIiwiY3NyZlRva2VuIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwiY3JlYXRlIiwiYmluZCIsImRvbVRvb2xzIiwiVHlwZUVycm9yIiwib3V0cHV0IiwiaW5kZXgiLCJuZXh0S2V5Iiwibm9vcCIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsMERBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUNBOztBQUNBOztBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXJCLEMsQ0FFQTs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHNDQUFELENBQXRCLEMsQ0FDQTs7QUFFQTs7Ozs7Ozs7OztBQVFBLE1BQU1FLElBQUksR0FBRyxVQUFVQyxPQUFWLEVB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QUFZLENBQ3hCLENBREQ7O0FBRUEsUUFBTUMsT0FBTyxHQUFHLENBQ2QsUUFEYyxFQUNKLE9BREksRUFDSyxPQURMLEVBQ2MsT0FEZCxFQUN1QixLQUR2QixFQUM4QixRQUQ5QixFQUN3QyxPQUR4QyxFQUVkLFdBRmMsRUFFRCxPQUZDLEVBRVEsZ0JBRlIsRUFFMEIsVUFGMUIsRUFFc0MsTUFGdEMsRUFFOEMsS0FGOUMsRUFHZCxjQUhjLEVBR0UsU0FIRixFQUdhLFlBSGIsRUFHMkIsT0FIM0IsRUFHb0MsTUFIcEMsRUFHNEMsU0FINUMsRUFJZCxXQUpjLEVBSUQsT0FKQyxFQUlRLE1BSlIsQ0FBaEI7QUFNQSxNQUFJO0FBQUV6SjtBQUFGLE1BQWF5SixPQUFqQixDQVZXLENBV1g7O0FBQ0EsUUFBTTVNLE9BQU8sR0FBSXNKLE1BQU0sQ0FBQ3RKLE9BQVAsR0FBaUJzSixNQUFNLENBQUN0SixPQUFQLElBQWtCLEVBQXBELENBWlcsQ0FjWDs7QUFDQSxTQUFPbUQsTUFBTSxFQUFiLEVBQWlCO0FBQ2Z2RSxVQUFNLEdBQUdnTyxPQUFPLENBQUN6SixNQUFELENBQWhCLENBRGUsQ0FHZjs7QUFDQSxRQUFJLENBQUNuRCxPQUFPLENBQUNwQixNQUFELENBQVosRUFBc0I7QUFDcEJvQixhQUFPLENBQUNwQixNQUFELENBQVAsR0FBa0IrTixJQUFsQjtBQUNEO0FBQ0Y7QUFDRixDQXZCQSxHQUFELEMiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2ZcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4vLyB2YXIgdG9vbHMgPSByZXF1aXJlKFwiLi4vaGVscGVycy90b29sc1wiKTtcbmNvbnN0IEV2ZW50cyA9IHJlcXVpcmUoJy4vRXZlbnRzJyk7XG4vLyBjb25zdCBMaWtlRm9ybURhdGEgPSByZXF1aXJlKCcuLi9oZWxwZXJzL0xpa2VGb3JtRGF0YScpO1xuXG4vKipcbiAqIFRoaXMgaXMgYW4gQWpheCB0cmFuc3BvcnQuXG4gKiBTdXBwb3J0cyAgWERvbWFpblJlcXVlc3QgZm9yIG9sZCBJRVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhlYWRlcnNdIEhlYWRlcnMgdG8gYWRkIHRvIHRoZSBpbnN0YW5jZVxuICogQGZpcmVzIGJlZm9yZVNlbmQgZXZlbnQgdGhhdCB3aWxsIGJlIHBlcmZvcm1lZCBiZWZvcmUgcmVxdWVzdCBpcyBzZW5kLiBFdmVudCBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyIFwib3B0aW9uc1wiLCB0aGF0IGNvbnRhaW5zIGFsbCB2YXJpYWJsZXMgZm9yIEFqYXhcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBamF4ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdGhpcy5jdXJyZW50UmVxdWVzdHMgPSAwO1xuICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoWydiZWZvcmVTZW5kJywgJ2xvYWQnXSk7XG4gIHRoaXMuY2FuY2VsID0gbnVsbDtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGhlYWRlcnMuIFlvdSBjYW4gb3ZlcndyaXRlIGl0LiBMb29rIGF0IHRoZSBldmVudCBiZWZvcmVTZW5kXG4gKiBQbGVhc2Ugbm90ZSB0aGF0IG9uIFhEb21haW5SZXF1ZXN0ICB3ZSBjYW4ndCBzZW5kIGFueSBoZWFkZXJzLlxuICogQHR5cGUgT2JqZWN0XG4gKi9cbkFqYXgucHJvdG90eXBlLmhlYWRlcnMgPSB7XG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbn07XG5cbi8qKlxuICogU2VuZCBhamF4IHJlcXVlc3QgdG8gc2VydmVyXG4gKiBXaWxsIHJldHVybiBwcm9taXNlIG9yIGFycmF5IHdpdGggcHJvbWlzZSBhbmQgWE1MSHR0cFJlcXVlc3QgOiB7d2luZG93LlByb21pc2V8W3dpbmRvdy5Qcm9taXNlLFhNTEh0dHBSZXF1ZXN0XX1cbiAqIEBzaW5jZSAwLjQuMFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudXJsIHVybCB0byBzZW5kIGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW29wdGlvbnMuZGF0YV0gZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWV0aG9kXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhlYWRlcnNdIGhlYWRlcnMgdG8gYWRkIHRvIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vblByb2dyZXNzXSBjYWxsYmFjayBmdW5jdGlvbiBvbiBwcm9ncmVzcy4gVHdvIGNhbGxiYWNrIG9wdGlvbnM6IGN1cnJlbnQgYnl0ZXMgc2VudCx0b3RhbEJ5dGVzXG4gKiBJZiB0cmVlIHRoZW4gIFt3aW5kb3cuUHJvbWlzZSwgWE1MSHR0cFJlcXVlc3QgXSB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJuIHtQcm9taXNlfEFycmF5fVxuICovXG5BamF4LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgLy8gVE9ETyB3aHkgd2UgY2hlY2sgaGVyZSBpZiBkYXRhID09PSBudWxsIHRoZW4gcmVhc3NpZ24gdG8gbnVsbCBhZ2Fpbj9cbiAgaWYgKG9wdGlvbnMuZGF0YSA9PT0gbnVsbCB8fCBvcHRpb25zLmRhdGEgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmRhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gbnVsbDtcbiAgfVxuICBpZiAoIW9wdGlvbnMubWV0aG9kKSB7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gIH1cblxuICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPyBPYmplY3QuYXNzaWduKG9wdGlvbnMuaGVhZGVycywgdGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpIDogKHsgLi4udGhpcy5oZWFkZXJzIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xuICBjb25zdCBjYW5jZWxTb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLy8gYHVybGAgaXMgdGhlIHNlcnZlciBVUkwgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gICAgdXJsOiBvcHRpb25zLnVybCxcblxuICAgIC8vIGBtZXRob2RgIGlzIHRoZSByZXF1ZXN0IG1ldGhvZCB0byBiZSB1c2VkIHdoZW4gbWFraW5nIHRoZSByZXF1ZXN0XG4gICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcblxuICAgIC8vIGBoZWFkZXJzYCBhcmUgY3VzdG9tIGhlYWRlcnMgdG8gYmUgc2VudFxuICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyxcblxuICAgIC8vIGBkYXRhYCBpcyB0aGUgZGF0YSB0byBiZSBzZW50IGFzIHRoZSByZXF1ZXN0IGJvZHlcbiAgICAvLyBPbmx5IGFwcGxpY2FibGUgZm9yIHJlcXVlc3QgbWV0aG9kcyAnUFVUJywgJ1BPU1QnLCBhbmQgJ1BBVENIJ1xuICAgIC8vIFdoZW4gbm8gYHRyYW5zZm9ybVJlcXVlc3RgIGlzIHNldCwgbXVzdCBiZSBvZiBvbmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcbiAgICAvLyAtIHN0cmluZywgcGxhaW4gb2JqZWN0LCBBcnJheUJ1ZmZlciwgQXJyYXlCdWZmZXJWaWV3LCBVUkxTZWFyY2hQYXJhbXNcbiAgICAvLyAtIEJyb3dzZXIgb25seTogRm9ybURhdGEsIEZpbGUsIEJsb2JcbiAgICAvLyAtIE5vZGUgb25seTogU3RyZWFtLCBCdWZmZXJcbiAgICBkYXRhOiBvcHRpb25zLmRhdGEsXG5cbiAgICAvLyBgb25VcGxvYWRQcm9ncmVzc2AgYWxsb3dzIGhhbmRsaW5nIG9mIHByb2dyZXNzIGV2ZW50cyBmb3IgdXBsb2Fkc1xuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5vblByb2dyZXNzKSB7XG4gICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyhwcm9ncmVzc0V2ZW50LmxvYWRlZCwgcHJvZ3Jlc3NFdmVudC50b3RhbCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGBjYW5jZWxUb2tlbmAgc3BlY2lmaWVzIGEgY2FuY2VsIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2FuY2VsIHRoZSByZXF1ZXN0XG4gICAgLy8gKHNlZSBDYW5jZWxsYXRpb24gc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlscylcbiAgICBjYW5jZWxUb2tlbjogY2FuY2VsU291cmNlLnRva2VuLFxuICB9O1xuXG4gIHRoaXMuY2FuY2VsID0gY2FuY2VsU291cmNlLmNhbmNlbDtcblxuICBjb25zdCB3cmFwRXJyb3IgPSAoZSkgPT4ge1xuICAgIGUuaXNTRkFqYXhFcnJvciA9IHRydWU7IC8vIE1hcmtzIGVycm9yIHRoYXQgY2FuIGhhdmUgbm9ybWFsIGRhdGEgaW5zaWRlXG4gICAgcmV0dXJuIGU7XG4gIH07XG5cbiAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyBSZXR1cm4gYSBuZXcgcHJvbWlzZS5cbiAgICBpZiAoIW9wdGlvbnMudXJsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJykpO1xuICAgIH1cbiAgICB0aGF0LmN1cnJlbnRSZXF1ZXN0cyArPSAxO1xuICAgIGF4aW9zXG4gICAgICAucmVxdWVzdChjb25maWcpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhhdC5jdXJyZW50UmVxdWVzdHMgLT0gMTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDE5OSAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHsgLy8gMjAwLTI5OVxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPiAzOTkgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNjAwKSB7IC8vIDQwMC01OTlcbiAgICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5rbm93biBzdGF0dXMgJWQuIFJlamVjdGluZycsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICByZWplY3Qod3JhcEVycm9yKHJlc3BvbnNlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTsgLy8gcmVqZWN0IHdpdGggdGhlIHN0YXR1cyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdsb2FkJywgb3B0aW9ucyk7IC8vIGZvciBleGFtcGxlIC0gdXNlZCB0byBoYW5kbGUgYWN0aW9uc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhhdC5jdXJyZW50UmVxdWVzdHMgLT0gMTtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihlcnJvci5yZXNwb25zZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGFqYXhQcm9taXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBamF4O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovIC8vIFRPRE86ID9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBUaGlzIGEgYmFzZSBjb25zdHJ1Y3RvciAoY2xhc3MpIGZvciBhbnkgRE9NIGJhc2VkIGluc3RhbmNlLlxuICogVGhpcyBjb25zdHJ1Y3RvciBqdXN0IGdyYWIgYWxsIG5vZGUgYXR0cmlidXRlcyBhbmQgZ2VuZXJhdGVzIG9wdGlvbnMuIEFsbCBwcm9jZXNzZWQgb3B0aW9ucyBzdG9yZWQgYXQgdGhpcy5vcHRpb25zXG4gKiBAZXhhbXBsZVxuICogV2UgaGF2ZSBodG1sIGxpa2UgdGhpczpcbiAqIDxkaXYgZGF0YS10ZXN0PVwidGVzdFZhbHVlXCIgZGF0YS12YWx1ZT1cInZhbHVlMTIzXCI+Li4uLi48L2Rpdj5cbiAqIHRoaXMub3B0aW9ucyB3aWxsIGJlOlxuICoge1xuICogIHRlc3Q6XCJ0ZXN0VmFsdWVcIixcbiAqICB2YWx1ZTpcInZhbHVlXCJcbiAqIH1cbiAqIE5vdGU6IGRhdGEtdGVzdCBhbmQgZGF0YS12YWx1ZSBzaG91bGQgYmUgZGVzY3JpYmVkIGluIGF0dHJpYnV0ZXNUb0dyYWJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBCYXNlRE9NQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG59O1xuLyoqXG4gKiBJbml0IG1ldGhvZC4gQ2FsbCBhZnRlciBjb25zdHJ1Y3QgaW5zdGFuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKi9cbkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICAvLyBUT0RPIGRhdGEtc3BpcmFsLUpTT05cbiAgdGhpcy5zZiA9IHNmO1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICAvLyBpZiAoc2Yub3B0aW9ucyAmJiBzZi5vcHRpb25zLmluc3RhbmNlcyAmJiBzZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdKSB7XG4gIC8vICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMgfHwge30sIHNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0pO1xuICAvLyB9XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5ncmFiT3B0aW9ucyhub2RlKSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgYSBvcHRpb25zIHRvIGdlbmVyYXRlLlxuICogWW91IHNob3VsZCBwcm92aWRlIHByb2Nlc3NvciBvciB2YWx1ZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge09iamVjdH0gcHJvcGVydHlLZXkgLSBvYmplY3Qgb2YgcHJvcGVydHlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm9wZXJ0eUtleS52YWx1ZSAtIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3Byb3BlcnR5S2V5LmRvbUF0dHJdIC0gZG9tIGF0dHJpYnV0ZSB0byBncmFiIGRhdGFcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtwcm9wZXJ0eUtleS5wcm9jZXNzb3JdIC0gIHByb2Nlc3NvciB0byBwcm9jZXNzIGRhdGEgYmVmb3JlIHJldHVyblxuICogQHByb3BlcnR5IHtPYmplY3R9ICAuLi4gLSBBbm90aGVyIG9iamVjdCBvZiBvbmUgcHJvcGVydHlcbiAqIEB0eXBlIHt7fX1cbiAqICBAZXhhbXBsZVxuICogXCJzb21lQXR0cmlidXRlXCI6IHsvLyBrZXlcbiAqICAgICAgdmFsdWU6IHRydWUsIC8vZGVmYXVsdCBWYWx1ZVxuICogICAgICBkb21BdHRyOiBcImRhdGEtc29tZS1hdHRyaWJ1dGVcIiwgLy8gYXR0cmlidXRlIGZyb20gbm9kZSB0byBncmFiXG4gKiAgICAgIHByb2Nlc3NvcjogZnVuY3Rpb24gKG5vZGUsdmFsLHNlbGYpIHsgLy9wcm9jZXNzb3IgdG8gcHJvY2VzcyB2YWx1ZXMgYmVmb3JlIHJldHVyblxuICogICAgICAgICAgLy9zb21lIGNhbGN1bGF0aW9uc1xuICogICAgICByZXR1cm4gc29tZVZhbHVlO1xuICogICAgICB9XG4gKiAgfSxcbiAqICBcImFub3RoZXJBdHRyaWJ1dGVcIjp7Li4ufSxcbiAqICBcIi4uLlwiXG4gKlxuICogIEBleGFtcGxlXG4gKiAgLy9yZXR1cm4gbm9kZSBhcyB2YWx1ZVxuICogIFwiY29udGV4dFwiOiB7XG4gKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxrZXkpIHsgLy9wcm9jZXNzb3JcbiAqICAgICAgICAgIHJldHVybiBub2RlO1xuICogICAgICB9XG4gKiAgfSxcbiAqICBcIkFub3RoZXIta2V5XCI6ey4uLn0sXG4gKiAgXCIuLi5cIlxuICogQGV4YW1wbGVcbiAqIC8vR3JhYiBhdHRyaWJ1dGUgXCJkYXRhLWF0dHJpYnV0ZVwiIGFzIFwiTXlBdHRyaWJ1dGVcIiBpZiBhdHRyaWJ1dGUgbm90IHByb3ZpZGVkIHJldHVybiBcIkRlZmF1bHRWYWx1ZVwiXG4gKiAvLyBEb20gbm9kZSA8ZGl2IGRhdGEtYXR0cmlidXRlPVwic29tZVZhbHVlXCI+PC9kaXY+XG4gKiBcIk15QXR0cmlidXRlXCI6IHtcbiAqICAgICAgdmFsdWU6IFwiRGVmYXVsdFZhbHVlXCIsXG4gKiAgICAgIGRvbUF0dHI6IFwiZGF0YS1hdHRyaWJ1dGVcIlxuICogIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJNeUF0dHJpYnV0ZVwiOlwic29tZVZhbHVlXCJ9XG4gKlxuICogIEBleGFtcGxlXG4gKiAvL0dyYWIgYXR0cmlidXRlIFwiZGF0YS1hdHRyaWJ1dGVcIiBhcyBcIk15QXR0cmlidXRlXCIgYW5kIHJldHVybiBzb21lIHZhbHVlIGluc3RlYWRcbiAqIC8vRG9tIG5vZGUgIDxkaXYgZGF0YS1hdHRyaWJ1dGU9XCJzb21lVmFsdWVcIj48L2Rpdj5cbiAqIFwiTXlBdHRyaWJ1dGVcIjoge1xuICogICAgICBkb21BdHRyOiBcImRhdGEtYXR0cmlidXRlXCIsXG4gKiAgICAgIHByb2Nlc3NvcjogZnVuY3Rpb24gKG5vZGUsdmFsLHNlbGYpIHtcbiAqICAgICAgICAgIHJldHVybiB2YWwrXCJTb21lQ2FsY3VsYXRpb25cIjtcbiAqICAgICAgfVxuICogIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJNeUF0dHJpYnV0ZVwiOlwic29tZVZhbHVlU29tZUNhbGN1bGF0aW9uXCJ9XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vcmV0dXJuIGZ1bmN0aW9uIGFzIHZhbHVlXG4gKiBwcm9jZXNzQW5zd2VyOiB7XG4gKiAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAqICAgICAgICAgcmV0dXJuIFwic29tZVZhbFwiO1xuICogICAgICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wicHJvY2Vzc0Fuc3dlclwiOmZ1bmN0aW9uIChvcHRpb25zKSB7XG4gKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcbiAqICAgICAgfVxuICogICB9XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vcmV0dXJuIGluaXQgdGltZSBhcyB2YWx1ZVxuICogaW5pdFRpbWU6IHtcbiAqICAgICAgXCJwcm9jZXNzb3JcIjogZnVuY3Rpb24gKG5vZGUsdmFsLHNlbGYpIHtcbiAqICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZTtcbiAqICAgICAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcImluaXRUaW1lXCI6MTQyOTgwODk3NzQwNH1cbiAqIEBleGFtcGxlXG4gKiAvL3JldHVybiBvdGhlciB2YWx1ZSBpbnN0ZWFkIG9mIHJlYWwgb25lXG4gKiBwcm9jZXNzQW5zd2VyOiB7XG4gKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XG4gKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcbiAqICAgICAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcInByb2Nlc3NBbnN3ZXJcIjpcInNvbWVWYWxcIn1cbiAqL1xuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge307XG5cbi8qKlxuICogR3JhYiBhbGwgb3B0aW9ucyB0aGF0IGRlc2NyaWJlZCBpbiBvcHRpb25zVG9HcmFiXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSBkb21Ob2RlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUuZ3JhYk9wdGlvbnMgPSBmdW5jdGlvbiAobm9kZSkge1xuICBjb25zdCBvcHRpb25zID0ge307XG4gIGxldCBjdXJyZW50T3B0aW9uVmFsdWU7XG4gIGxldCBjdXJyZW50T3B0aW9uO1xuICAvLyBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLm9wdGlvbnNUb0dyYWIpIHtcbiAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zVG9HcmFiKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zVG9HcmFiLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5vcHRpb25zVG9HcmFiLmhhc093blByb3BlcnR5KG9wdGlvbikpIHsgLy8gaWYgdGhpcyBpcyBvd24gb3B0aW9uXG4gICAgICAgIGN1cnJlbnRPcHRpb24gPSB0aGlzLm9wdGlvbnNUb0dyYWJbb3B0aW9uXTtcbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHsgLy8gd2UgaGF2ZSBkZWZhdWx0IG9wdGlvbi4gTGV0J3MgZ3JhYiBpdCBmb3IgZmlyc3RcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXSAmJiB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0uaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXVtvcHRpb25dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24uaGFzT3duUHJvcGVydHkoJ2RvbUF0dHInKSAmJiBub2RlLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoY3VycmVudE9wdGlvbi5kb21BdHRyKSkgeyAvLyB3ZSBjYW4gZ3JhYiB0aGUgYXR0cmlidXRlIG9mIG5vZGVcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBub2RlLmF0dHJpYnV0ZXNbY3VycmVudE9wdGlvbi5kb21BdHRyXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmhhc093blByb3BlcnR5KCdwcm9jZXNzb3InKSkgeyAvLyB3ZSBoYXZlIHByb2Nlc3Nvci4gTGV0J3MgZXhlY3V0ZSBpdFxuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IGN1cnJlbnRPcHRpb24ucHJvY2Vzc29yLmNhbGwodGhpcywgbm9kZSwgY3VycmVudE9wdGlvblZhbHVlLCBjdXJyZW50T3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBjdXJyZW50T3B0aW9uVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZURPTUNvbnN0cnVjdG9yO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIERvbSBtdXRhdGlvbi4gTGlzdGVuaW5nIHRvIHRoZSBET00gYW5kIGFkZCBvciByZW1vdmUgaW5zdGFuY2VzIGJhc2VkIG9uIGNsYXNzZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VzQ29udHJvbGxlciAgc3BpcmFsIGluc3RhbmNlc0NvbnRyb2xsZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnN0YW5jZXNDb250cm9sbGVyLmdldENsYXNzZXMgIGdldCBhbGwgcmVnaXN0ZXJlZCBtb2R1bGVzIGNsYXNzZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlICBhZGQgaW5zdGFuY2UgbWV0aG9kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZSAgcmVtb3ZlIGluc3RhbmNlIG1ldGhvZFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IERvbU11dGF0aW9ucyA9IGZ1bmN0aW9uIChpbnN0YW5jZXNDb250cm9sbGVyKSB7XG4gIGlmICghaW5zdGFuY2VzQ29udHJvbGxlcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSBpbnN0YW5jZXNDb250cm9sbGVyICBmb3IgRE9NIE11dGF0aW9uLiBCZWNhdXNlIERPTSBNdXRhdGlvbiAgc2hvdWxkIGtub3duIGFsbCBjbGFzc2VzIGFuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMuY29uc3RydWN0b3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlIGNhbGwgRG9tTXV0YXRpb25zIHdpdGggbmV3ICAtICduZXcgRG9tTXV0YXRpb25zKCknIFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyID0gaW5zdGFuY2VzQ29udHJvbGxlcjtcbiAgY29uc3QgY29uZmlnID0geyAvLyBjb25maWcgZm9yIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuICB9O1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkgeyAvLyBjYWxsIGZ1bmN0aW9uIHdoZW4gZG9tIG11dGF0ZWQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHRoYXQub25Eb21NdXRhdGUuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICB9KTtcbiAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCBjb25maWcpOy8vIHN0YXJ0IG9ic2VydmVyXG59O1xuXG4vKipcbiAqIFdoZW4gZG9tIG11dGF0ZWQgdGhpcyBmdW5jdGlvbiBpZCBleGVjdXRlZC5cbiAqIEBwYXJhbSB7QXJyYXl9IG11dGF0aW9ucyBhcnJheSBvZiBtdXRhdGlvbnNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUub25Eb21NdXRhdGUgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gIGNvbnN0IGNsYXNzQXJyYXkgPSB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0Q2xhc3NlcygpOy8vIGdldCBhbGwgcmVnaXN0ZXJlZCBjbGFzc2VzXG4gIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBgLiR7Y2xhc3NBcnJheS5qb2luKCcsLicpfWA7Ly8gY29udmVydCBmb3IgcXVlcnlTZWxlY3RvckFsbCgpXG4gIGlmIChjbGFzc1NlbGVjdG9yLmxlbmd0aCA9PT0gMSkgeyAvLyBpZiBub3QgcmVnaXN0ZXJlZCBhbnkgaW5zdGFuY2VUeXBlc1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHsgLy8gbG9vcCBvdmVyIG11dGF0aW9uIGFycmF5XG4gICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzKG11dGF0aW9uLCBjbGFzc0FycmF5KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoYXJhY3RlckRhdGEnOlxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkNoaWxkTGlzdChtdXRhdGlvbi5hZGRlZE5vZGVzLCAnYWRkSW5zdGFuY2UnLCBjbGFzc1NlbGVjdG9yLCBjbGFzc0FycmF5KTtcbiAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24ucmVtb3ZlZE5vZGVzLCAncmVtb3ZlSW5zdGFuY2UnLCBjbGFzc1NlbGVjdG9yLCBjbGFzc0FycmF5KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdyb25nLiBDb250YWN0IHRlY2ggc3VwcG9ydCcpO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLnByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAobXV0YXRpb24sIGNsYXNzQXJyYXkpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICBjb25zdCBvbGRDbGFzc2VzID0gKG11dGF0aW9uLm9sZFZhbHVlKSA/IG11dGF0aW9uLm9sZFZhbHVlLnNwbGl0KCcgJykgOiBbXTtcbiAgY29uc3QgYWRkZWRDbGFzc2VzID0gY3VycmVudENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChvbGRDbGFzc2VzLmluZGV4T2YodmFsKSA9PT0gLTEpKTtcbiAgY29uc3QgcmVtb3ZlZENsYXNzZXMgPSBvbGRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAoY3VycmVudENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xuICBjb25zdCBhZGRlZFJlZ2lzdGVyZWRDbGFzc2VzID0gYWRkZWRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAoY2xhc3NBcnJheS5pbmRleE9mKHZhbCkgIT09IC0xKSk7XG4gIGNvbnN0IHJlbW92ZWRSZWdpc3RlcmVkQ2xhc3NlcyA9IHJlbW92ZWRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAoY2xhc3NBcnJheS5pbmRleE9mKHZhbCkgIT09IC0xKSk7XG4gIHJlbW92ZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UodGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3ModmFsKSwgbXV0YXRpb24udGFyZ2V0KTtcbiAgfSk7XG4gIGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgdGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlKHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIG11dGF0aW9uLnRhcmdldCk7XG4gIH0pO1xufTtcbi8qKlxuICogUHJvY2VzcyBtdXRhdGlvbiBvbiBDaGlsZExpc3RcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzTGlzdCBhcnJheSB3aXRoIG5vZGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIGFjdGlvbiB0byBjYWxsIChhZGQgb3IgcmVtb3ZlIG5vZGVzKVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzU2VsZWN0b3IgLSBzdHJpbmcgc2VsZWN0b3IgZm9yIHF1ZXJ5U2VsZWN0b3JBbGxcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzQXJyYXkgLSBhcnJheSBvZiBhbGwgcmVnaXN0ZXJlZCBjbGFzc2VzXG4gKi9cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0ID0gZnVuY3Rpb24gKG5vZGVzTGlzdCwgYWN0aW9uLCBjbGFzc1NlbGVjdG9yLCBjbGFzc0FycmF5KSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIGZvciBjaGVja2luZyBub2RlIGNsYXNzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGUgZG9tIG5vZGVcbiAgICAgKi9cbiAgZnVuY3Rpb24gY2hlY2tOb2RlKG5vZGUpIHtcbiAgICBjbGFzc0FycmF5LmZvckVhY2goKGNsYXNzTmFtZSkgPT4geyAvLyBsb29wIG92ZXIgcmVnaXN0ZXJlZCBjbGFzc2VzXG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkgeyAvLyBpZiBjbGFzcyBtYXRjaCB0cnkgdG8gYWRkIG9yIHJlbW92ZSBpbnN0YW5jZSBmb3IgdGhpcyBub2RlXG4gICAgICAgIHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlclthY3Rpb25dKHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKGNsYXNzTmFtZSksIG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgW10uZm9yRWFjaC5jYWxsKG5vZGVzTGlzdCwgKHZhbCkgPT4geyAvLyBsb29wIG92ZXIgbXV0YXRpb24gbm9kZXNcbiAgICBpZiAodmFsLm5vZGVUeXBlICE9PSAxIHx8IHZhbC5ub2RlTmFtZSA9PT0gJ1NDUklQVCcgfHwgdmFsLm5vZGVOYW1lID09PSAnTElOSycpIHsgLy8gZG8gbm90IHByb2Nlc3Mgb3RoZXIgbm9kZXMgdGhlbiBFTEVNRU5UX05PREUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUubm9kZVR5cGUgYWxzbyBpZ25vcmUgU0NSSVBUIGFuZCBMSU5LIHRhZ1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjaGVja05vZGUodmFsKTsvLyBjaGVjayBtdXRhdGlvbiBub2RlXG4gICAgW10uZm9yRWFjaC5jYWxsKHZhbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzU2VsZWN0b3IpLCBjaGVja05vZGUpOy8vIHF1ZXJ5IGFsbCBub2RlcyB3aXRoIHJlcXVpcmVkIGNsYXNzZXMgYW5kIGNoZWNrIGl0XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBTdG9wIGxpc3RlbmluZyB0aGUgZG9tIGNoYW5nZXNcbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5zdG9wT2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvbU11dGF0aW9ucztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogRXZlbnRzIHN5c3RlbS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFsbG93ZWRFdmVudHMgYXJyYXkgb2YgYWxsb3dlZCBldmVudHMuXG4gKiBAY29uc3RydWN0cyBFdmVudHNcbiAqIEBleGFtcGxlXG4gKiAvL2FsbG93IHRvIHdvcmsgd2l0aCBhbGwgZXZlbnRzXG4gKiB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pO1xuICogQGV4YW1wbGVcbiAqIC8vQWxsb3cgdG8gc2VydmUgb25seSBsaW1pdGVkIGV2ZW50c1xuICogIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKFtcImJlZm9yZVN1Ym1pdFwiLFwib25EYXRhUmVhZHlcIl0pO1xuICogIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9KTsvL3dpbGwgbm90IHdvcmtzXG4gKiAgZXZlbnRzLm9uKFwiYmVmb3JlU3VibWl0XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9KTsvL3dpbGwgd29ya1xuICovXG5jb25zdCBFdmVudHMgPSBmdW5jdGlvbiAoYWxsb3dlZEV2ZW50cykge1xuICB0aGlzLl9zdG9yYWdlID0ge307XG4gIHRoaXMuX2FsbG93ZWRFdmVudHMgPSBhbGxvd2VkRXZlbnRzO1xufTtcblxuLyoqXG4gKiBBZGQgZXZlbnQocylcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudHMgZXZlbnQgb3Igc3BhY2Ugc2VwYXJhdGVkIGV2ZW50IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50IG15QmVzdEV2ZW50MiBteUJlc3RFdmVudDNcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pO1xuICovXG5FdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50cywgY2FsbGJhY2spIHtcbiAgY29uc3QgZXZlbnRBcnIgPSBldmVudHMucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnNwbGl0KCcgJyk7XG4gIGV2ZW50QXJyLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gZXZlbnQgbm90IGluc2lkZSBhbGxvd2VkIGV2ZW50c1xuICAgIGlmICh0aGlzLl9hbGxvd2VkRXZlbnRzICYmIHRoaXMuX2FsbG93ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0V2ZW50cy4gVHJ5IHRvIHJlZ2lzdGVyIGV2ZW50ICVzLCBidXQgZXZlbnQgaXMgbm90IGFsbG93ZWQnLCBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICBpZiAoIXRoaXMuX3N0b3JhZ2UuaGFzT3duUHJvcGVydHkoZXZlbnRzKSkge1xuICAgICAgdGhpcy5fc3RvcmFnZVtldmVudF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fc3RvcmFnZVtldmVudF0ucHVzaChjYWxsYmFjayk7XG4gIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBBZGQgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAZGVwcmVjYXRlZCAgdXNlIFwib25cIiBpbnN0ZWFkXG4gKi9cbkV2ZW50cy5wcm90b3R5cGUucmVnaXN0ZXJBY3Rpb24gPSBFdmVudHMucHJvdG90eXBlLm9uO1xuXG5cbi8qKlxuICogcmVtb3ZlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbkV2ZW50cy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgYWxlcnQoJ1lvdSB0cnkgdG8gcmVtb3ZlIGFjdGlvbi4gVGhpcyBwYXJ0IGlzIGluY29tcGxldGUnKTtcbiAgLy8gVE9ET1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGV2ZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBjYWxsYmFja1xuICogQGV4YW1wbGVcbiAqIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUuYmVzdEtleSl9KTtcbiAqIGV2ZW50cy50cmlnZ2VyKFwibXlCZXN0RXZlbnRcIix7YmVzdEtleTo0Mn0pOyAvL3dpbGwgc2hvdyBpbiBsb2dcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKSB7XG4gIC8vIGV2ZW50IG5vdCBpbnNpZGUgYWxsb3dlZCBldmVudHNcbiAgaWYgKHRoaXMuX2FsbG93ZWRFdmVudHMgJiYgdGhpcy5fYWxsb3dlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oJ0V2ZW50cy4gVHJ5IHRvIHRyaWdnZXIgZXZlbnQgJXMsIGJ1dCBldmVudCBpcyBub3QgYWxsb3dlZCcsIGV2ZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAodGhpcy5fc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICBmb3IgKGxldCBuID0gMCwgbCA9IHRoaXMuX3N0b3JhZ2VbZXZlbnRdLmxlbmd0aDsgbiA8IGw7IG4gKz0gMSkge1xuICAgICAgdGhpcy5fc3RvcmFnZVtldmVudF1bbl0ob3B0aW9ucyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFBlcmZvcm0gYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2FjdGlvblBhcmFtc10gb2JqZWN0IHdpdGggYWxsIGFjdGlvbiBkYXRhIGZyb20gc2VydmVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFqYXggb3B0aW9uc1xuICogQGRlcHJlY2F0ZWQgdXNlIFwidHJpZ2dlclwiIGluc3RlYWRcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5wZXJmb3JtQWN0aW9uID0gRXZlbnRzLnByb3RvdHlwZS50cmlnZ2VyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqLyAvLyBUT0RPOiA/XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBJbnN0YW5jZSBjb250cm9sbGVyXG4gKiBAcGFyYW0geyp9IHNwaXJhbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEluc3RhbmNlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoc3BpcmFsKSB7XG4gIHRoaXMuc3BpcmFsID0gc3BpcmFsO1xuICBpZiAoIXRoaXMuY29uc3RydWN0b3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlIGNhbGwgSW5zdGFuY2VzQ29udHJvbGxlciB3aXRoIG5ldyAgLSAnbmV3IEluc3RhbmNlc0NvbnRyb2xsZXIoKScgXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9zdG9yYWdlID0ge1xuICAgIGluc3RhbmNlc0NvbnN0cnVjdG9yczoge1xuICAgICAgY3NzQ2xhc3Nlczoge30sXG4gICAgICBqc0NvbnN0cnVjdG9yczoge30sXG4gICAgfSxcbiAgICBhZGRvbnM6IHt9LFxuICAgIGluc3RhbmNlczoge30sXG4gIH07XG5cbiAgLy8gdG9kbyBkZWNpZGUgaWYgd2UgbmVlZCB0aGlzXG4gIC8vIFtcIm9uQWRkSW5zdGFuY2VcIiwgXCJvblJlbW92ZUluc3RhbmNlXCJdXG4gIC8vIHRoaXMuZXZlbnRzID0gbmV3IHNwaXJhbC5tb2R1bGVzLmNvcmUuRXZlbnRzKCk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIG5ldyBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvckZ1bmN0aW9uIC0gY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY3NzQ2xhc3NOYW1lXSAtIGNzcyBjbGFzcyBuYW1lIG9mIGluc3RhbmNlLiBJZiBjbGFzcyBub3QgcHJvdmlkZWQgdGhhdCBpdCBjYW4ndCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjb250cm9sbGVkIGJ5IERvbU11dGF0aW9uLiBCdXQgeW91IHN0aWxsIGNhbiB1c2UgaXQgZnJvbSBKUy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzU2tpcEluaXRpYWxpemF0aW9uPWZhbHNlXSAgLSBza2lwIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiwganVzdCBhZGRpbmcsIG5vIGluaXQgbm9kZXMuXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlZ2lzdGVySW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNzc0NsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc3QgaW5zdGFuY2VOYW1lID0gY29uc3RydWN0b3JGdW5jdGlvbi5zcGlyYWxGcmFtZXdvcmtOYW1lIHx8IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWU7XG5cbiAgaWYgKCFpbnN0YW5jZU5hbWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnN0YW5jZSBjb25zdHJ1Y3RvciBzaG91bGQgaGF2ZSBuYW1lIGluc2lkZSBpdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAodGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnN0YW5jZSBDb25zdHJ1Y3RvciBmb3IgdHlwZSAnJXMnIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nXCIsIGluc3RhbmNlTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNzc0NsYXNzTmFtZSkgeyAvLyBhZGQgbGluayAoY3NzQ2xhc3NOYW1lLT5pbnN0YW5jZU5hbWUpXG4gICAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc05hbWVdID0gaW5zdGFuY2VOYW1lO1xuICB9XG5cbiAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXSA9IGNvbnN0cnVjdG9yRnVuY3Rpb247XG5cbiAgLy8gaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGNsYXNzTmFtZSkpe1xuICAvLyAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFuY2UgQ29uc3RydWN0b3IgZm9yIHR5cGUgJXMgYWxyZWFkeSBhZGRlZC4gU2tpcHBpbmdcIixjb25zdHJ1Y3RvckZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lKTtcbiAgLy8gICAgcmV0dXJuO1xuICAvLyB9XG4gIC8vIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzW2NsYXNzTmFtZV0gPSB7Ly9pbml0IHN0b3JhZ2UgZmllbGRzXG4gIC8vICAgIFwidHlwZU5hbWVcIjogY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZSxcbiAgLy8gICAgXCJjb25zdHJ1Y3RvclwiOiBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gIC8vIH07XG4gIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gPSBbXTtcbiAgaWYgKCFpc1NraXBJbml0aWFsaXphdGlvbikge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjc3NDbGFzc05hbWUpOy8vIGluaXQgYWRkIG5vZGVzIHdpdGggdGhpcyBjbGFzc1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5hZGRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogT2xkIG1ldGhvZCB0byByZWdpc3RlciBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0geyp9IGNsYXNzTmFtZVxuICogQHBhcmFtIHsqfSBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IGlzU2tpcEluaXRpYWxpemF0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29uc3RydWN0b3JGdW5jdGlvbiwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc29sZS53YXJuKCdhZGRJbnN0YW5jZVR5cGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSByZWdpc3Rlckluc3RhbmNlVHlwZSBpbnN0ZWFkJyk7XG4gIHJldHVybiB0aGlzLnJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGlzU2tpcEluaXRpYWxpemF0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBBZGQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAtIGRvbSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIGZvciBzZW5kIHRvIHRoZSBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IEluc3RhbmNlQ29uc3RydWN0b3IgPSB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5qc0NvbnN0cnVjdG9yc1tpbnN0YW5jZU5hbWVdO1xuICBjb25zdCBpc0FscmVhZHlBZGRlZCA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlKTtcblxuICBpZiAoIUluc3RhbmNlQ29uc3RydWN0b3IgfHwgaXNBbHJlYWR5QWRkZWQpIHsgLy8gaWYgbm90IGZvdW5kIHRoaXMgdHlwZSAgb3IgYWxyZWFkeSBhZGRlZCAtIHJldHVyblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlQ29uc3RydWN0b3IodGhpcy5zcGlyYWwsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnB1c2goeyAvLyBhZGQgbmV3IGluc3RhbmNlIG9mIHRoaXMgdHlwZVxuICAgIG5vZGUsXG4gICAgaW5zdGFuY2UsXG4gIH0pO1xuXG4gIC8vIHRoaXMuZXZlbnRzLnRyaWdnZXIoXCJvbkFkZEluc3RhbmNlXCIsIGluc3RhbmNlKTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlIGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5vZGUgLSBkb20gbm9kZSBJRFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlKSB7XG4gIGNvbnN0IGluc3RhbmNlT2JqID0gdGhpcy5nZXRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGUsIHRydWUpO1xuXG4gIGlmICghaW5zdGFuY2VPYmopIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaW5zdGFuY2VPYmouaW5zdGFuY2UuZGllKCk7Ly8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgY29uc3Qga2V5ID0gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5pbmRleE9mKGluc3RhbmNlT2JqKTtcbiAgaWYgKGtleSAhPT0gLTEpIHsgLy8gcmVtb3ZlIGtleVxuICAgIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uc3BsaWNlKGtleSwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBpbnN0YW5jZS4gUmV0dXJuIGluc3RhbmNlIG9iamVjdCBvZiB0aGlzIGRvbSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgbyBkb21lIG5vZGUgSURcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzUmV0dXJuT2JqZWN0XSAtIHJldHVybiBvYmplY3Qgb3IgaW5zdGFuY2VcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSwgaXNSZXR1cm5PYmplY3QpIHtcbiAgLy8gVE9ETyBpc1JldHVybk9iamVjdCBub3QgbmVlZGVkLiBSZWZhY3RvciBhbmQgcmVtb3ZlXG5cbiAgY29uc3QgdHlwZUFyciA9IHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV07XG4gIGxldCByZXQgPSBmYWxzZTtcbiAgaWYgKCF0eXBlQXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSA/IG5vZGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlKTtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGtleSA9IDAsIGwgPSB0eXBlQXJyLmxlbmd0aDsga2V5IDwgbDsga2V5ICs9IDEpIHsgLy8gaXRlcmF0ZSBzdG9yYWdlIGFuZCB0cnkgdG8gZmluZCBpbnN0YW5jZVxuICAgIGlmICh0eXBlQXJyW2tleV0ubm9kZSA9PT0gbm9kZSkge1xuICAgICAgcmV0ID0gKGlzUmV0dXJuT2JqZWN0KSA/IHR5cGVBcnJba2V5XSA6IHR5cGVBcnJba2V5XS5pbnN0YW5jZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuLyoqXG4gKiBHZXQgaW5zdGFuY2VzLiBSZXR1cm4gYXJyYXkgb2YgaW5zdGFuY2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcmV0dXJuIHthcnJheXxib29sZWFufVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZXMgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lKSB7XG4gIHJldHVybiB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdIHx8IGZhbHNlO1xufTtcblxuXG4vKipcbiAqIFJlZ2lzdGVyIGFkZG9uIGZvciBpbnN0YW5jZVxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIG5hbWUgb2YgaW5zdGFuY2UgdG8gcmVnaXN0ZXIgYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvblR5cGUgdHlwZSBvZiBhZGRvbiAobWVzc2FnZSxmaWxsLGV0YylcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvbk5hbWUgbmFtZSBvZiBhZGRvbiAoc3BpcmFsLCBib290c3RyYXAsZXRjKVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5yZWdpc3RlckFkZG9uID0gZnVuY3Rpb24gKGFkZG9uLCBpbnN0YW5jZU5hbWUsIGFkZG9uVHlwZSwgYWRkb25OYW1lKSB7XG4gIGlmICghdGhpcy5fc3RvcmFnZS5hZGRvbnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKSkge1xuICAgIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0gPSB7fTtcbiAgfVxuICBpZiAoIXRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0uaGFzT3duUHJvcGVydHkoYWRkb25UeXBlKSkge1xuICAgIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXSA9IHt9O1xuICB9XG4gIGlmICh0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0uaGFzT3duUHJvcGVydHkoYWRkb25OYW1lKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSAlcyBhZGRvbiB0eXBlICVzIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgaW5zdGFuY2UgJXMhIFNraXBwaW5nIHJlZ2lzdHJhdGlvbi4nLCBhZGRvbk5hbWUsIGFkZG9uVHlwZSwgaW5zdGFuY2VOYW1lKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV0gPSBhZGRvbjtcbn07XG5cbi8qKlxuICogR2V0IHJlZ2lzdGVyZWQgYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgbmFtZSBvZiBpbnN0YW5jZSB0byByZWdpc3RlciBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uVHlwZSB0eXBlIG9mIGFkZG9uIChtZXNzYWdlLGZpbGwsZXRjKVxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uTmFtZSBuYW1lIG9mIGFkZG9uIChzcGlyYWwsIGJvb3RzdHJhcCxldGMpXG4gKiBAcmV0dXJuIHsqfVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZUFkZG9uID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgYWRkb25UeXBlLCBhZGRvbk5hbWUpIHtcbiAgaWYgKCF0aGlzLl9zdG9yYWdlLmFkZG9ucy5oYXNPd25Qcm9wZXJ0eShpbnN0YW5jZU5hbWUpXG4gICAgICAgIHx8ICF0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdLmhhc093blByb3BlcnR5KGFkZG9uVHlwZSlcbiAgICAgICAgfHwgIXRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXS5oYXNPd25Qcm9wZXJ0eShhZGRvbk5hbWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5jc3NDbGFzc2VzKTtcbn07XG5cbi8qKlxuICogRm9yIGdpdmVuIGNzc0NsYXNzIHJldHVybiBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzQ2xhc3NcbiAqIEByZXR1cm4geyp9XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MgPSBmdW5jdGlvbiAoY3NzQ2xhc3MpIHtcbiAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXNbY3NzQ2xhc3NdO1xufTtcblxuLyoqXG4gKiBHZXQgY29uc3RydWN0b3IgYnkgbmFtZSBvciBjbGFzcyBuYW1lXG4gKiBAcGFyYW0geyp9IG5hbWVcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VDb25zdHJ1Y3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRPRE9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5zdGFuY2VzQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBUaGlzIHBsdWdpbiBhZGRzIGFiaWxpdHkgdG8gcGVyZm9ybSBhY3Rpb25zIGZyb20gdGhlIHNlcnZlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogXCJhY3Rpb25cIjpcInJlbG9hZFwiXG4gKiBcImFjdGlvblwiOntcInJlZGlyZWN0XCI6XCIvYWNjb3VudFwifVxuICogXCJhY3Rpb25cIjp7XCJyZWRpcmVjdFwiOlwiL2FjY291bnRcIixcImRlbGF5XCI6MzAwMH1cbiAqIFwiYWN0aW9uXCI6e1wibmFtZVwiOlwicmVkaXJlY3RcIixcInVybFwiOlwiL2FjY291bnRcIixcImRlbGF5XCI6MzAwMH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2YpIHtcbiAgc2YuYWpheC5ldmVudHMub24oJ2xvYWQnLCAob3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgICBpZiAoIWRhdGEuYWN0aW9uKSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnc3RyaW5nJykgeyAvLyBcImFjdGlvblwiOlwicmVsb2FkXCJcbiAgICAgIHNmLmV2ZW50cy50cmlnZ2VyKGRhdGEuYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLmFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhLmFjdGlvbik7XG4gICAgICAvLyBUT0RPOiBub3RpZmljYXRpb25zXG4gICAgICAvLyBpZiAoa2V5cy5pbmRleE9mKCdmbGFzaCcpICE9PSAtMSkge1xuICAgICAgLy8gICBjb25zdCB7IGZsYXNoIH0gPSBkYXRhLmFjdGlvbjtcbiAgICAgIC8vICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIC8vICAgbGV0IHNmRmxhc2hNZXNzYWdlID0ge307XG5cbiAgICAgIC8vICAgaWYgKHR5cGVvZiBkYXRhLmFjdGlvbi5mbGFzaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZSA9IGZsYXNoO1xuICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZSA9IHtcbiAgICAgIC8vICAgICAgIG1lc3NhZ2U6IGZsYXNoLFxuICAgICAgLy8gICAgICAgdGltZXN0YW1wLFxuICAgICAgLy8gICAgIH07XG4gICAgICAvLyAgIH1cblxuICAgICAgLy8gICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZkZsYXNoTWVzc2FnZScsIEpTT04uc3RyaW5naWZ5KHNmRmxhc2hNZXNzYWdlKSk7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChrZXlzLmluZGV4T2YoJ3JlZGlyZWN0JykgIT09IC0xKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNmLmV2ZW50cy50cmlnZ2VyKCdyZWRpcmVjdCcsIGRhdGEuYWN0aW9uLnJlZGlyZWN0LCBvcHRpb25zKTtcbiAgICAgICAgfSwgK2RhdGEuYWN0aW9uLmRlbGF5IHx8IDApO1xuICAgICAgfSBlbHNlIGlmIChrZXlzLmluZGV4T2YoJ25hbWUnKSAhPT0gLTEpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2YuZXZlbnRzLnRyaWdnZXIoZGF0YS5hY3Rpb24ubmFtZSwgZGF0YS5hY3Rpb24udXJsKTtcbiAgICAgICAgfSwgK2RhdGEuYWN0aW9uLmRlbGF5IHx8IDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBY3Rpb24gZnJvbSBzZXJ2ZXIuIFNvbWV0aGluZyB3cm9uZy4gJywgZGF0YS5hY3Rpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gKGZ1bmN0aW9uIChzZkZsYXNoTWVzc2FnZSkge1xuICAvLyAgIGlmICghc2ZGbGFzaE1lc3NhZ2UpIHJldHVybjtcblxuICAvLyAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKHNmRmxhc2hNZXNzYWdlKTtcbiAgLy8gICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAvLyAgIGxldCBmbGFzaENsYXNzO1xuXG4gIC8vICAgaWYgKHRpbWVzdGFtcCAtIG1lc3NhZ2UudGltZXN0YW1wID4gMTAwMDApIHJldHVybjtcblxuICAvLyAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdkZWJ1ZycgfHwgbWVzc2FnZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgLy8gICAgIGZsYXNoQ2xhc3MgPSAnZGVidWcnO1xuICAvLyAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnaW5mbycgfHwgIW1lc3NhZ2UudHlwZSB8fCBtZXNzYWdlLnR5cGUgPT09ICdub3RpY2UnKSB7XG4gIC8vICAgICBmbGFzaENsYXNzID0gJ2luZm8nO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBmbGFzaENsYXNzID0gJ2Rhbmdlcic7XG4gIC8vICAgfVxuXG4gIC8vICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IG5vZGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgbm9kZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZmxhc2gtd3JhcHBlcicpO1xuICAvLyAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnZmxhc2gnLCBmbGFzaENsYXNzKTtcbiAgLy8gICBub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGVXcmFwcGVyKTtcbiAgLy8gICBub2RlV3JhcHBlci5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgbm9kZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAvLyAgIH0sIDEpO1xuXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBub2RlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIC8vICAgfSwgbWVzc2FnZS50aW1lb3V0IHx8IDUwMDApO1xuXG4gIC8vICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnc2ZGbGFzaE1lc3NhZ2UnKTtcbiAgLy8gfShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZkZsYXNoTWVzc2FnZScpKSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZUV2ZW50cyhldmVudHMpIHtcbiAgZXZlbnRzLm9uKCdyZWRpcmVjdCcsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChldmVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nID8gZXZlbnQgOiBldmVudC51cmw7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDY4NzA5OS9ob3ctdG8tdGVzdC1pZi1hLXVybC1zdHJpbmctaXMtYWJzb2x1dGUtb3ItcmVsYXRpdmVcbiAgICBjb25zdCBpc0Fic29sdXRlID0gL14oPzpbYS16XSs6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG4gICAgaWYgKGlzQWJzb2x1dGUpIHtcbiAgICAgIHNlbGYubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgIHx8IChgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5wb3J0ID8gYDoke3dpbmRvdy5sb2NhdGlvbi5wb3J0fWAgOiAnJ31gKTtcbiAgICAgIHNlbGYubG9jYXRpb24uaHJlZiA9IG9yaWdpbiArICgodXJsLmNoYXJBdCgwKSA9PT0gJy8nKSA/IHVybCA6IChgLyR7dXJsfWApKTsgLy8gUmVsYXRpdmUgcGF0aFxuICAgIH1cbiAgfSk7XG5cbiAgZXZlbnRzLm9uKCdyZWxvYWQnLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBldmVudHMub24oJ3JlZnJlc2gnLCAoKSA9PiB7XG4gICAgZXZlbnRzLnRyaWdnZXIoJ3JlbG9hZCcpO1xuICB9KTtcblxuICBldmVudHMub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgIHNlbGYuY2xvc2UoKTtcbiAgfSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogSGVscGVyIHRvIG1hbmlwdWxhdGUgRE9NIEV2ZW50cy4gSXQncyBhIHNpbXBsZSB3cmFwcGVyIGFyb3VuZCBcImFkZEV2ZW50TGlzdGVuZXJcIiBidXQgaXQncyBzdG9yZSBhbGwgZnVuY3Rpb25zIGFuZCBhbGxvdyB1cyB0byByZW1vdmUgaXQgYWxsLlxuICogSXQncyB2ZXJ5IGhlbHBmdWwgZm9yIGRpZSgpIG1ldGhvZCBvZiBpbnN0YW5jZXNcbiAqIEBUT0RPIGFkZCB0byBtYW55IG5vZGVzXG4gKiBAVE9ETyBuZXcgbWV0aG9kIGxpa2UgYWRkRXZlbnRMaXN0ZW5lciAgRE9NRXZlbnRzLm9uKG5vZGUocyksZXZlbnQsY2FsbGJhY2ssdXNlQ2FwdHVyZSk7XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICAgKiBJbnRlcm5hbCBzdG9yYWdlIGZvciBldmVudHNcbiAgICAgKiBAcHJvcGVydHkge0FycmF5LjxPYmplY3Q+fSBET01FdmVudHMgLSBkb20gZXZlbnRzIGFycmF5XG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IERPTUV2ZW50cy5ET01Ob2RlIC0gICBET00gbm9kZVxuICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBET01FdmVudHMuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gRE9NRXZlbnRzLmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBET01FdmVudHMudXNlQ2FwdHVyZT1mYWxzZSAtICAgdXNlQ2FwdHVyZVxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAuLi4gLSAgIGFub3RoZXIgb2JqZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZSA9IFtdO1xufTtcbi8qKlxuICogQWRkIGV2ZW50KHMpIHRvIG5vZGUocykuXG4gKiBAVE9ETyBhZGQgdG8gbWFueSBub2Rlc1xuICogQHBhcmFtIHtBcnJheS48T2JqZWN0PnxPYmplY3R9IGV2ZW50QXJyYXkgLSBldmVudCBhcnJheSBvciBldmVudCBpdHNlbGZcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEFycmF5LkRPTU5vZGUgLSAgIERPTSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRBcnJheS5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50QXJyYXkuZXZlbnRGdW5jdGlvbiAtICAgRnVuY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2V2ZW50QXJyYXkudXNlQ2FwdHVyZT1mYWxzZV0gLSAgIHVzZUNhcHR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgRE9NRXZlbnRzSW5zdGFuY2UgPSBuZXcgRE9NRXZlbnRzKCk7XG4gKiB2YXIgZXZlbnRPbmUgPSB7XG4gKiAgICAgIERPTU5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKSxcbiAqICAgICAgZXZlbnRUeXBlOiBcImNsaWNrXCIsXG4gKiAgICAgIGV2ZW50RnVuY3Rpb246IGZ1bmN0aW9uIChlKSB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpIHRoZXJlLiBOYXRpdmUgIERPTSBldmVudHMgaXM6XCIsZSk7XG4gKiAgICAgIH1cbiAqIH1cbiAqICB2YXIgZXZlbnRUd28gPSB7XG4gKiAgICAgIERPTU5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZTJcIiksXG4gKiAgICAgIGV2ZW50VHlwZTogXCJtb3VzZWRvd25cIixcbiAqICAgICAgZXZlbnRGdW5jdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgdGhlcmUuIG1vdXNlZG93biBldmVudC4gTmF0aXZlICBET00gZXZlbnRzIGlzOlwiLGUpO1xuICogICAgICB9XG4gKiB9XG4gKiAgRE9NRXZlbnRzSW5zdGFuY2UuYWRkKFtldmVudE9uZSxldmVudFR3b10pO1xuICovXG5ET01FdmVudHMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChldmVudEFycmF5KSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoW10pICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgZXZlbnRBcnJheSA9IFtldmVudEFycmF5XTtcbiAgfVxuICBldmVudEFycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbC51c2VDYXB0dXJlID0gISEodmFsLnVzZUNhcHR1cmUpO1xuICAgIHZhbC5ET01Ob2RlLmFkZEV2ZW50TGlzdGVuZXIodmFsLmV2ZW50VHlwZSwgdmFsLmV2ZW50RnVuY3Rpb24sIHZhbC51c2VDYXB0dXJlKTtcbiAgICB0aGlzLl9ET01FdmVudHNTdG9yYWdlLnB1c2godmFsKTtcbiAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBldmVudHNcbiAqIEBwYXJhbSB7QXJyYXkuPE9iamVjdD59IGV2ZW50QXJyYXkgLSBldmVudCBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QXJyYXkuRE9NTm9kZSAtICAgRE9NIG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudEFycmF5LmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnRBcnJheS5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBbZXZlbnRBcnJheS51c2VDYXB0dXJlPWZhbHNlXSAtICAgdXNlQ2FwdHVyZVxuICovXG5ET01FdmVudHMucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgvKiBldmVudEFycmF5ICovKSB7XG4gIC8vIFRPRE8gSU1QTEVNRU5UXG4gIC8vIFRPRE8g0L3QtSDRg9Cy0LXRgNC10L0g0YfRgtC+INGN0YLQvtGCINC80LXRgtC+0LQg0L3QtdC+0LHRhdC+0LTQuNC8LiDQtdGB0LvQuCDQvdCw0LTQviDRh9Cw0YHRgtC+INGD0LHQuNGA0LDRgtGMINC60LDQutC40LXRgtC+INC+0LHRgNCw0LHQvtGC0YfQuNC60LgsINGC0L4g0LvRg9GH0YjQtSDQv9C+0YHRgtCw0LLQuNGC0Ywg0L7QsdGA0LDQsdC+0YLRh9C60Lgg0L3QsCDRgNC+0LTQuNGC0LXQu9GPXG4gIGNvbnNvbGUud2FybignVE9ETyBJTVBMRU1FTlQnKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBkb20gZXZlbnRzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGluc3RhbmNlIChhZGRlZCBieSBtZXRob2QgYWRkKVxuICogQGV4YW1wbGVcbiAqIC8vbG9vayBhdCBhZGQgbWV0aG9kIGFzIGZpcnN0IHBhcnQgb2YgdGhpcyBjb2RlXG4gKiBET01FdmVudHNJbnN0YW5jZS5yZW1vdmVBbGwoKTtcbiAqL1xuRE9NRXZlbnRzLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgdmFsLkRPTU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih2YWwuZXZlbnRUeXBlLCB2YWwuZXZlbnRGdW5jdGlvbiwgdmFsLnVzZUNhcHR1cmUpO1xuICB9KTtcbiAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZSA9IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01FdmVudHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyoqXG4gVGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdXNlZnVsIERPTSB0b29scy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICAgKiBGb3VuZCBmaXJzdCBwYXJlbnQgbm9kZSB3aXRoIG1hdGNoZWQgc2VsZWN0b3IocylcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGRvbSBub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHNlbGVjdG9ycyAtIHNlbGVjdG9yIG9yIGFycmF5IG9mIHNlbGVjdG9yc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8IEJvb2xlYW59IC0gbm9kZSBvciBmYWxzZVxuICAgICAqL1xuXG4gIGNsb3Nlc3QoZWxlbSwgc2VsZWN0b3JzKSB7XG4gICAgc2VsZWN0b3JzID0gKHR5cGVvZiBzZWxlY3RvcnMgPT09ICdzdHJpbmcnKSA/IFtzZWxlY3RvcnNdIDogc2VsZWN0b3JzO1xuICAgIGxldCBrZXk7XG4gICAgY29uc3QgbCA9IHNlbGVjdG9ycy5sZW5ndGg7XG4gICAgY29uc3QgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbS5tYXRjaGVzIHx8IGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICB3aGlsZSAoZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoa2V5ID0gMDsga2V5IDwgbDsga2V5ICs9IDEpIHtcbiAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW0sIHNlbGVjdG9yc1trZXldKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8qKlxuICAgICAqIEZvdW5kIGZpcnN0IHBhcmVudCBub2RlIHdpdGggbWF0Y2hlZCBjbGFzc05hbWUocykuXG4gICAgICogVE9ETyBXaHkgdGhpcz8gQmVjYXVzZSBvbGQgSUUuLi4uXG4gICAgICogVE9ETyBJdCdzIG5vdCBnb29kLCBiZWNhdXNlIGl0J3MgYSBjb3B5IG9mIGNsb3Nlc3QgQHNlZSBjbG9zZXN0LiBSZWZhY3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gZG9tIG5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gY2xhc3NOYW1lIC0gY2xhc3NOYW1lIG9yIGFycmF5IG9mIGNsYXNzTmFtZXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fCBCb29sZWFufSAtIG5vZGUgb3IgZmFsc2VcbiAgICAgKi9cblxuICBjbG9zZXN0QnlDbGFzc05hbWUoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NOYW1lID0gKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSA/IFtjbGFzc05hbWVdIDogY2xhc3NOYW1lO1xuICAgIGxldCBrZXk7XG4gICAgY29uc3QgbCA9IGNsYXNzTmFtZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoa2V5ID0gMDsga2V5IDwgbDsga2V5ICs9IDEpIHtcbiAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgKFxcXFxzfF4pJHtjbGFzc05hbWVba2V5XX0oXFxcXHN8JClgKTtcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NOYW1lLm1hdGNoKHJlZykpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG4vKipcbiAqIEBtb2R1bGUgdG9vbHNcbiAqIEBuYW1lc3BhY2VcbiAqL1xuY29uc3QgdG9vbHMgPSB7XG4gIHJlc29sdmVLZXlQYXRoKHBhdGgsIG9iaiwgc2FmZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgIHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoIXNhZmUgPyBwcmV2W2N1cnJdIDogKHByZXYgPyBwcmV2W2N1cnJdIDogdW5kZWZpbmVkKSksIG9iaiB8fCBzZWxmKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9vbHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG5cbi8qKlxuICogUHJvdmlkZXMgYSBzcGlyYWwtc3BlY2lmaWMgc2YgYnVuZGxlXG4gKiBUT0RPOiBUaGlzIHdyYXBwaW5nIGxvb2tzIHZlcnkgZmlzaHksIHdoeSB3ZSBuZWVkIGl0PyBNb3ZlIHRvIHRvb2xraXQgbWF5IGJlP1xuICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJy4vc2YnKTtcblxuY29uc3Qgc2ZXcmFwcGVyID0ge1xuICBjb3JlOiBzZi5jb3JlLFxuICBoZWxwZXJzOiBzZi5oZWxwZXJzLFxuICB0b29sczogc2YudG9vbHMsXG59O1xuXG4vLyBBZGQgY29uc29sZSBzaGltIGZvciBvbGQgSUVcbnJlcXVpcmUoJy4vc2hpbS9jb25zb2xlJyk7XG5yZXF1aXJlKCcuL3NoaW0vT2JqZWN0LmFzc2lnbicpO1xuXG5pZiAoIXNmV3JhcHBlci5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpKSBzZldyYXBwZXIub3B0aW9ucyA9IHsgaW5zdGFuY2VzOiB7fSB9O1xuaWYgKCFzZldyYXBwZXIub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnaW5zdGFuY2VzJykpIHNmV3JhcHBlci5vcHRpb25zLmluc3RhbmNlcyA9IHt9O1xuXG5zZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlciA9IG5ldyBzZldyYXBwZXIuY29yZS5JbnN0YW5jZXNDb250cm9sbGVyKHNmV3JhcHBlcik7XG5zZldyYXBwZXIuZG9tTXV0YXRpb24gPSBuZXcgc2ZXcmFwcGVyLmNvcmUuRG9tTXV0YXRpb25zKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcblxuLy8gRXZlbnRzIHN5c3RlbVxuc2ZXcmFwcGVyLmV2ZW50cyA9IG5ldyBzZldyYXBwZXIuY29yZS5FdmVudHMoKTtcbnJlcXVpcmUoJy4vY29yZS9ldmVudHMvYmFzZUV2ZW50cy5qcycpKHNmV3JhcHBlci5ldmVudHMpO1xuXG4vLyBBSkFYXG5zZldyYXBwZXIuYWpheCA9IG5ldyBzZldyYXBwZXIuY29yZS5BamF4KHdpbmRvdyAmJiB3aW5kb3cuY3NyZlRva2VuID8ge1xuICAvLyBUT0RPIG1vdmUgdG8gc3BpcmFsIGJpbmRpbmdzXG4gIGhlYWRlcnM6IHtcbiAgICAnWC1DU1JGLVRva2VuJzogd2luZG93LmNzcmZUb2tlbixcbiAgfSxcbn0gOiBudWxsKTtcblxuLy8gQUNUSU9OU1xucmVxdWlyZSgnLi9jb3JlL2FqYXgvYmFzZUFjdGlvbnMuanMnKShzZldyYXBwZXIpO1xuXG4vLyBBUElcbnNmV3JhcHBlci5jcmVhdGVNb2R1bGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHNmV3JhcHBlci5jb3JlLkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xufTtcblxuc2ZXcmFwcGVyLnJlZ2lzdGVySW5zdGFuY2VUeXBlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIuYWRkSW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5hZGRJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5yZW1vdmVJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLmdldEluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIuZ2V0SW5zdGFuY2VzID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VzLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuXG5zZldyYXBwZXIuY2xvc2VzdCA9IHNmLmhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdDtcbnNmV3JhcHBlci5yZXNvbHZlS2V5UGF0aCA9IHNmLnRvb2xzLnJlc29sdmVLZXlQYXRoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNmV3JhcHBlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbmNvbnN0IGNvcmUgPSB7XG4gIEFqYXg6IHJlcXVpcmUoJy4vY29yZS9BamF4JyksXG4gIEJhc2VET01Db25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jb3JlL0Jhc2VET01Db25zdHJ1Y3RvcicpLFxuICBEb21NdXRhdGlvbnM6IHJlcXVpcmUoJy4vY29yZS9Eb21NdXRhdGlvbnMnKSxcbiAgRXZlbnRzOiByZXF1aXJlKCcuL2NvcmUvRXZlbnRzJyksXG4gIEluc3RhbmNlc0NvbnRyb2xsZXI6IHJlcXVpcmUoJy4vY29yZS9JbnN0YW5jZXNDb250cm9sbGVyJyksXG59O1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICBET01FdmVudHM6IHJlcXVpcmUoJy4vaGVscGVycy9ET01FdmVudHMnKSxcbiAgZG9tVG9vbHM6IHJlcXVpcmUoJy4vaGVscGVycy9kb21Ub29scycpLFxuICAvLyBMaWtlRm9ybURhdGE6IHJlcXVpcmUoJy4vaGVscGVycy9MaWtlRm9ybURhdGEnKSxcbiAgLy8gdG9vbHM6IHJlcXVpcmUoJy4vaGVscGVycy90b29scycpLFxufTtcblxuY29uc3Qgc2YgPSB7XG4gIGNvcmUsXG4gIGhlbHBlcnMsXG4gIHRvb2xzOiByZXF1aXJlKCcuL2hlbHBlcnMvdG9vbHMnKSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Y7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKipcbiAqIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqL1xuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9PSAnZnVuY3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQgJiYgc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gZm9yIChjb25zdCBuZXh0S2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgobmV4dEtleSkgPT4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShuZXh0S2V5KSkge1xuICAgICAgICAgICAgICBvdXRwdXRbbmV4dEtleV0gPSBzb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgfSgpKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qKlxuICogQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxuICovXG4oZnVuY3Rpb24gKCkge1xuICBsZXQgbWV0aG9kO1xuICBjb25zdCBub29wID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBjb25zdCBtZXRob2RzID0gW1xuICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXG4gICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXG4gICAgJ21hcmtUaW1lbGluZScsICdwcm9maWxlJywgJ3Byb2ZpbGVFbmQnLCAndGFibGUnLCAndGltZScsICd0aW1lRW5kJyxcbiAgICAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nLFxuICBdO1xuICBsZXQgeyBsZW5ndGggfSA9IG1ldGhvZHM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgY29uc3QgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdO1xuXG4gICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxuICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xuICAgIH1cbiAgfVxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "../datagrid/dist/datagrid.js":
/*!************************************!*\
  !*** ../datagrid/dist/datagrid.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/node-libs-browser/node_modules/assert/assert.js":
      /*!*******************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/assert/assert.js ***!
        \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (global) {
          var objectAssign = __webpack_require__(
          /*! object-assign */
          "../../node_modules/object-assign/index.js"); // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
          // original notice:

          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
           * @license  MIT
           */


          function compare(a, b) {
            if (a === b) {
              return 0;
            }

            var x = a.length;
            var y = b.length;

            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
              if (a[i] !== b[i]) {
                x = a[i];
                y = b[i];
                break;
              }
            }

            if (x < y) {
              return -1;
            }

            if (y < x) {
              return 1;
            }

            return 0;
          }

          function isBuffer(b) {
            if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
              return global.Buffer.isBuffer(b);
            }

            return !!(b != null && b._isBuffer);
          } // based on node assert, original notice:
          // NB: The URL to the CommonJS spec is kept just for tradition.
          //     node-assert has evolved a lot since then, both in API and behavior.
          // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
          //
          // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
          //
          // Originally from narwhal.js (http://narwhaljs.org)
          // Copyright (c) 2009 Thomas Robinson <280north.com>
          //
          // Permission is hereby granted, free of charge, to any person obtaining a copy
          // of this software and associated documentation files (the 'Software'), to
          // deal in the Software without restriction, including without limitation the
          // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
          // sell copies of the Software, and to permit persons to whom the Software is
          // furnished to do so, subject to the following conditions:
          //
          // The above copyright notice and this permission notice shall be included in
          // all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
          // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


          var util = __webpack_require__(
          /*! util/ */
          "../../node_modules/node-libs-browser/node_modules/util/util.js");

          var hasOwn = Object.prototype.hasOwnProperty;
          var pSlice = Array.prototype.slice;

          var functionsHaveNames = function () {
            return function foo() {}.name === 'foo';
          }();

          function pToString(obj) {
            return Object.prototype.toString.call(obj);
          }

          function isView(arrbuf) {
            if (isBuffer(arrbuf)) {
              return false;
            }

            if (typeof global.ArrayBuffer !== 'function') {
              return false;
            }

            if (typeof ArrayBuffer.isView === 'function') {
              return ArrayBuffer.isView(arrbuf);
            }

            if (!arrbuf) {
              return false;
            }

            if (arrbuf instanceof DataView) {
              return true;
            }

            if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
              return true;
            }

            return false;
          } // 1. The assert module provides functions that throw
          // AssertionError's when particular conditions are not met. The
          // assert module must conform to the following interface.


          var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
          // new assert.AssertionError({ message: message,
          //                             actual: actual,
          //                             expected: expected })

          var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

          function getName(func) {
            if (!util.isFunction(func)) {
              return;
            }

            if (functionsHaveNames) {
              return func.name;
            }

            var str = func.toString();
            var match = str.match(regex);
            return match && match[1];
          }

          assert.AssertionError = function AssertionError(options) {
            this.name = 'AssertionError';
            this.actual = options.actual;
            this.expected = options.expected;
            this.operator = options.operator;

            if (options.message) {
              this.message = options.message;
              this.generatedMessage = false;
            } else {
              this.message = getMessage(this);
              this.generatedMessage = true;
            }

            var stackStartFunction = options.stackStartFunction || fail;

            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, stackStartFunction);
            } else {
              // non v8 browsers so we can have a stacktrace
              var err = new Error();

              if (err.stack) {
                var out = err.stack; // try to strip useless frames

                var fn_name = getName(stackStartFunction);
                var idx = out.indexOf('\n' + fn_name);

                if (idx >= 0) {
                  // once we have located the function frame
                  // we need to strip out everything before it (and its line)
                  var next_line = out.indexOf('\n', idx + 1);
                  out = out.substring(next_line + 1);
                }

                this.stack = out;
              }
            }
          }; // assert.AssertionError instanceof Error


          util.inherits(assert.AssertionError, Error);

          function truncate(s, n) {
            if (typeof s === 'string') {
              return s.length < n ? s : s.slice(0, n);
            } else {
              return s;
            }
          }

          function inspect(something) {
            if (functionsHaveNames || !util.isFunction(something)) {
              return util.inspect(something);
            }

            var rawname = getName(something);
            var name = rawname ? ': ' + rawname : '';
            return '[Function' + name + ']';
          }

          function getMessage(self) {
            return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
          } // At present only the three keys mentioned above are used and
          // understood by the spec. Implementations or sub modules can pass
          // other keys to the AssertionError's constructor - they will be
          // ignored.
          // 3. All of the following functions must throw an AssertionError
          // when a corresponding condition is not met, with a message that
          // may be undefined if not provided.  All assertion methods provide
          // both the actual and expected values to the assertion error for
          // display purposes.


          function fail(actual, expected, message, operator, stackStartFunction) {
            throw new assert.AssertionError({
              message: message,
              actual: actual,
              expected: expected,
              operator: operator,
              stackStartFunction: stackStartFunction
            });
          } // EXTENSION! allows for well behaved errors defined elsewhere.


          assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
          // by !!guard.
          // assert.ok(guard, message_opt);
          // This statement is equivalent to assert.equal(true, !!guard,
          // message_opt);. To test strictly for the value true, use
          // assert.strictEqual(true, guard, message_opt);.

          function ok(value, message) {
            if (!value) fail(value, true, message, '==', assert.ok);
          }

          assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
          // ==.
          // assert.equal(actual, expected, message_opt);

          assert.equal = function equal(actual, expected, message) {
            if (actual != expected) fail(actual, expected, message, '==', assert.equal);
          }; // 6. The non-equality assertion tests for whether two objects are not equal
          // with != assert.notEqual(actual, expected, message_opt);


          assert.notEqual = function notEqual(actual, expected, message) {
            if (actual == expected) {
              fail(actual, expected, message, '!=', assert.notEqual);
            }
          }; // 7. The equivalence assertion tests a deep equality relation.
          // assert.deepEqual(actual, expected, message_opt);


          assert.deepEqual = function deepEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'deepEqual', assert.deepEqual);
            }
          };

          assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
            }
          };

          function _deepEqual(actual, expected, strict, memos) {
            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
              return true;
            } else if (isBuffer(actual) && isBuffer(expected)) {
              return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
              // equivalent if it is also a Date object that refers to the same time.
            } else if (util.isDate(actual) && util.isDate(expected)) {
              return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
              // equivalent if it is also a RegExp object with the same source and
              // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
            } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
              return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
              // equivalence is determined by ==.
            } else if ((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
              return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
              // ArrayBuffers in a Buffer each to increase performance
              // This optimization requires the arrays to have the same type as checked by
              // Object.prototype.toString (aka pToString). Never perform binary
              // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
              // bit patterns are not identical.
            } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
              return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
              // determined by having the same number of owned properties (as verified
              // with Object.prototype.hasOwnProperty.call), the same set of keys
              // (although not necessarily the same order), equivalent values for every
              // corresponding key, and an identical 'prototype' property. Note: this
              // accounts for both named and indexed properties on Arrays.
            } else if (isBuffer(actual) !== isBuffer(expected)) {
              return false;
            } else {
              memos = memos || {
                actual: [],
                expected: []
              };
              var actualIndex = memos.actual.indexOf(actual);

              if (actualIndex !== -1) {
                if (actualIndex === memos.expected.indexOf(expected)) {
                  return true;
                }
              }

              memos.actual.push(actual);
              memos.expected.push(expected);
              return objEquiv(actual, expected, strict, memos);
            }
          }

          function isArguments(object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
          }

          function objEquiv(a, b, strict, actualVisitedObjects) {
            if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

            if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
            if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
            var aIsArgs = isArguments(a);
            var bIsArgs = isArguments(b);
            if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

            if (aIsArgs) {
              a = pSlice.call(a);
              b = pSlice.call(b);
              return _deepEqual(a, b, strict);
            }

            var ka = objectKeys(a);
            var kb = objectKeys(b);
            var key, i; // having the same number of owned properties (keys incorporates
            // hasOwnProperty)

            if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

            ka.sort();
            kb.sort(); //~~~cheap key test

            for (i = ka.length - 1; i >= 0; i--) {
              if (ka[i] !== kb[i]) return false;
            } //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test


            for (i = ka.length - 1; i >= 0; i--) {
              key = ka[i];
              if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
            }

            return true;
          } // 8. The non-equivalence assertion tests for any deep inequality.
          // assert.notDeepEqual(actual, expected, message_opt);


          assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
            }
          };

          assert.notDeepStrictEqual = notDeepStrictEqual;

          function notDeepStrictEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
            }
          } // 9. The strict equality assertion tests strict equality, as determined by ===.
          // assert.strictEqual(actual, expected, message_opt);


          assert.strictEqual = function strictEqual(actual, expected, message) {
            if (actual !== expected) {
              fail(actual, expected, message, '===', assert.strictEqual);
            }
          }; // 10. The strict non-equality assertion tests for strict inequality, as
          // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


          assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
            if (actual === expected) {
              fail(actual, expected, message, '!==', assert.notStrictEqual);
            }
          };

          function expectedException(actual, expected) {
            if (!actual || !expected) {
              return false;
            }

            if (Object.prototype.toString.call(expected) == '[object RegExp]') {
              return expected.test(actual);
            }

            try {
              if (actual instanceof expected) {
                return true;
              }
            } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
            }

            if (Error.isPrototypeOf(expected)) {
              return false;
            }

            return expected.call({}, actual) === true;
          }

          function _tryBlock(block) {
            var error;

            try {
              block();
            } catch (e) {
              error = e;
            }

            return error;
          }

          function _throws(shouldThrow, block, expected, message) {
            var actual;

            if (typeof block !== 'function') {
              throw new TypeError('"block" argument must be a function');
            }

            if (typeof expected === 'string') {
              message = expected;
              expected = null;
            }

            actual = _tryBlock(block);
            message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

            if (shouldThrow && !actual) {
              fail(actual, expected, 'Missing expected exception' + message);
            }

            var userProvidedMessage = typeof message === 'string';
            var isUnwantedException = !shouldThrow && util.isError(actual);
            var isUnexpectedException = !shouldThrow && actual && !expected;

            if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
              fail(actual, expected, 'Got unwanted exception' + message);
            }

            if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
              throw actual;
            }
          } // 11. Expected to throw an error:
          // assert.throws(block, Error_opt, message_opt);


          assert.throws = function (block,
          /*optional*/
          error,
          /*optional*/
          message) {
            _throws(true, block, error, message);
          }; // EXTENSION! This is annoying to write outside this module.


          assert.doesNotThrow = function (block,
          /*optional*/
          error,
          /*optional*/
          message) {
            _throws(false, block, error, message);
          };

          assert.ifError = function (err) {
            if (err) throw err;
          }; // Expose a strict only variant of assert


          function strict(value, message) {
            if (!value) fail(value, true, message, '==', strict);
          }

          assert.strict = objectAssign(strict, assert, {
            equal: assert.strictEqual,
            deepEqual: assert.deepStrictEqual,
            notEqual: assert.notStrictEqual,
            notDeepEqual: assert.notDeepStrictEqual
          });
          assert.strict.strict = assert.strict;

          var objectKeys = Object.keys || function (obj) {
            var keys = [];

            for (var key in obj) {
              if (hasOwn.call(obj, key)) keys.push(key);
            }

            return keys;
          };
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__(
        /*! ./../../../webpack/buildin/global.js */
        "../../node_modules/webpack/buildin/global.js"));
        /***/
      },

      /***/
      "../../node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js":
      /*!*******************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js ***!
        \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        if (typeof Object.create === 'function') {
          // implementation from standard node.js 'util' module
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          };
        } else {
          // old school shim for old browsers
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;

            var TempCtor = function () {};

            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          };
        }
        /***/

      },

      /***/
      "../../node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js":
      /*!**********************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js ***!
        \**********************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = function isBuffer(arg) {
          return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
        };
        /***/

      },

      /***/
      "../../node_modules/node-libs-browser/node_modules/util/util.js":
      /*!***************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/util/util.js ***!
        \***************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (process) {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.
          var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
            var keys = Object.keys(obj);
            var descriptors = {};

            for (var i = 0; i < keys.length; i++) {
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            }

            return descriptors;
          };

          var formatRegExp = /%[sdj%]/g;

          exports.format = function (f) {
            if (!isString(f)) {
              var objects = [];

              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }

              return objects.join(' ');
            }

            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') return '%';
              if (i >= len) return x;

              switch (x) {
                case '%s':
                  return String(args[i++]);

                case '%d':
                  return Number(args[i++]);

                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }

                default:
                  return x;
              }
            });

            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }

            return str;
          }; // Mark that a method should not be used.
          // Returns a modified function which warns once by default.
          // If --no-deprecation is set, then it is a no-op.


          exports.deprecate = function (fn, msg) {
            if (typeof process !== 'undefined' && process.noDeprecation === true) {
              return fn;
            } // Allow for deprecating things in the process of starting up.


            if (typeof process === 'undefined') {
              return function () {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }

            var warned = false;

            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }

                warned = true;
              }

              return fn.apply(this, arguments);
            }

            return deprecated;
          };

          var debugs = {};
          var debugEnviron;

          exports.debuglog = function (set) {
            if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();

            if (!debugs[set]) {
              if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                var pid = process.pid;

                debugs[set] = function () {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function () {};
              }
            }

            return debugs[set];
          };
          /**
           * Echos the value of a value. Trys to print the value out
           * in the best way possible given the different types.
           *
           * @param {Object} obj The object to print out.
           * @param {Object} opts Optional options object that alters the output.
           */

          /* legacy: obj, showHidden, depth, colors*/


          function inspect(obj, opts) {
            // default options
            var ctx = {
              seen: [],
              stylize: stylizeNoColor
            }; // legacy...

            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];

            if (isBoolean(opts)) {
              // legacy...
              ctx.showHidden = opts;
            } else if (opts) {
              // got an "options" object
              exports._extend(ctx, opts);
            } // set default options


            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }

          exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

          inspect.colors = {
            'bold': [1, 22],
            'italic': [3, 23],
            'underline': [4, 24],
            'inverse': [7, 27],
            'white': [37, 39],
            'grey': [90, 39],
            'black': [30, 39],
            'blue': [34, 39],
            'cyan': [36, 39],
            'green': [32, 39],
            'magenta': [35, 39],
            'red': [31, 39],
            'yellow': [33, 39]
          }; // Don't use 'blue' not visible on cmd.exe

          inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            // "name": intentionally not styling
            'regexp': 'red'
          };

          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];

            if (style) {
              return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
            } else {
              return str;
            }
          }

          function stylizeNoColor(str, styleType) {
            return str;
          }

          function arrayToHash(array) {
            var hash = {};
            array.forEach(function (val, idx) {
              hash[val] = true;
            });
            return hash;
          }

          function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
              var ret = value.inspect(recurseTimes, ctx);

              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }

              return ret;
            } // Primitive types cannot have properties


            var primitive = formatPrimitive(ctx, value);

            if (primitive) {
              return primitive;
            } // Look up the keys of the object.


            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);

            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            } // IE doesn't make error fields non-enumerable
            // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


            if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
              return formatError(value);
            } // Some type of object without properties can be shortcutted.


            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }

              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              }

              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }

              if (isError(value)) {
                return formatError(value);
              }
            }

            var base = '',
                array = false,
                braces = ['{', '}']; // Make Array say that they are Array

            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            } // Make functions say that they are functions


            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            } // Make RegExps say that they are RegExps


            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            } // Make dates with properties first say the date


            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            } // Make error with message first say the error


            if (isError(value)) {
              base = ' ' + formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }

            ctx.seen.push(value);
            var output;

            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function (key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
              });
            }

            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
          }

          function formatPrimitive(ctx, value) {
            if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

            if (isString(value)) {
              var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
              return ctx.stylize(simple, 'string');
            }

            if (isNumber(value)) return ctx.stylize('' + value, 'number');
            if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

            if (isNull(value)) return ctx.stylize('null', 'null');
          }

          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }

          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];

            for (var i = 0, l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
              } else {
                output.push('');
              }
            }

            keys.forEach(function (key) {
              if (!key.match(/^\d+$/)) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
              }
            });
            return output;
          }

          function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {
              value: value[key]
            };

            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }

            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }

            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }

                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str.split('\n').map(function (line) {
                      return '  ' + line;
                    }).join('\n').substr(2);
                  } else {
                    str = '\n' + str.split('\n').map(function (line) {
                      return '   ' + line;
                    }).join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }

            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }

              name = JSON.stringify('' + key);

              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.substr(1, name.length - 2);
                name = ctx.stylize(name, 'name');
              } else {
                name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }

            return name + ': ' + str;
          }

          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function (prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0) numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);

            if (length > 60) {
              return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          } // NOTE: These type checking functions intentionally don't use `instanceof`
          // because it is fragile and can be easily faked with `Object.create()`.


          function isArray(ar) {
            return Array.isArray(ar);
          }

          exports.isArray = isArray;

          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }

          exports.isBoolean = isBoolean;

          function isNull(arg) {
            return arg === null;
          }

          exports.isNull = isNull;

          function isNullOrUndefined(arg) {
            return arg == null;
          }

          exports.isNullOrUndefined = isNullOrUndefined;

          function isNumber(arg) {
            return typeof arg === 'number';
          }

          exports.isNumber = isNumber;

          function isString(arg) {
            return typeof arg === 'string';
          }

          exports.isString = isString;

          function isSymbol(arg) {
            return typeof arg === 'symbol';
          }

          exports.isSymbol = isSymbol;

          function isUndefined(arg) {
            return arg === void 0;
          }

          exports.isUndefined = isUndefined;

          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }

          exports.isRegExp = isRegExp;

          function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
          }

          exports.isObject = isObject;

          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }

          exports.isDate = isDate;

          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }

          exports.isError = isError;

          function isFunction(arg) {
            return typeof arg === 'function';
          }

          exports.isFunction = isFunction;

          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
            typeof arg === 'undefined';
          }

          exports.isPrimitive = isPrimitive;
          exports.isBuffer = __webpack_require__(
          /*! ./support/isBuffer */
          "../../node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js");

          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }

          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }

          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

          function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          } // log is just a thin wrapper to console.log that prepends a timestamp


          exports.log = function () {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
          };
          /**
           * Inherit the prototype methods from one constructor into another.
           *
           * The Function.prototype.inherits from lang.js rewritten as a standalone
           * function (not on Function.prototype). NOTE: If this file is to be loaded
           * during bootstrapping this function needs to be rewritten using some native
           * functions as prototype setup using normal JavaScript does not work as
           * expected during bootstrapping (see mirror.js in r114903).
           *
           * @param {function} ctor Constructor function which needs to inherit the
           *     prototype.
           * @param {function} superCtor Constructor function to inherit prototype from.
           */


          exports.inherits = __webpack_require__(
          /*! inherits */
          "../../node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js");

          exports._extend = function (origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;
            var keys = Object.keys(add);
            var i = keys.length;

            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }

            return origin;
          };

          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }

          var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

          exports.promisify = function promisify(original) {
            if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

            if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
              var fn = original[kCustomPromisifiedSymbol];

              if (typeof fn !== 'function') {
                throw new TypeError('The "util.promisify.custom" argument must be of type Function');
              }

              Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                value: fn,
                enumerable: false,
                writable: false,
                configurable: true
              });
              return fn;
            }

            function fn() {
              var promiseResolve, promiseReject;
              var promise = new Promise(function (resolve, reject) {
                promiseResolve = resolve;
                promiseReject = reject;
              });
              var args = [];

              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }

              args.push(function (err, value) {
                if (err) {
                  promiseReject(err);
                } else {
                  promiseResolve(value);
                }
              });

              try {
                original.apply(this, args);
              } catch (err) {
                promiseReject(err);
              }

              return promise;
            }

            Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
            if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: false,
              writable: false,
              configurable: true
            });
            return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
          };

          exports.promisify.custom = kCustomPromisifiedSymbol;

          function callbackifyOnRejected(reason, cb) {
            // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
            // Because `null` is a special error value in callbacks which means "no error
            // occurred", we error-wrap so the callback consumer can distinguish between
            // "the promise rejected with null" or "the promise fulfilled with undefined".
            if (!reason) {
              var newReason = new Error('Promise was rejected with a falsy value');
              newReason.reason = reason;
              reason = newReason;
            }

            return cb(reason);
          }

          function callbackify(original) {
            if (typeof original !== 'function') {
              throw new TypeError('The "original" argument must be of type Function');
            } // We DO NOT return the promise as it gives the user a false sense that
            // the promise is actually somehow related to the callback's execution
            // and that the callback throwing will reject the promise.


            function callbackified() {
              var args = [];

              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }

              var maybeCb = args.pop();

              if (typeof maybeCb !== 'function') {
                throw new TypeError('The last argument must be of type Function');
              }

              var self = this;

              var cb = function () {
                return maybeCb.apply(self, arguments);
              }; // In true node style we process the callback on `nextTick` with all the
              // implications (stack, `uncaughtException`, `async_hooks`)


              original.apply(this, args).then(function (ret) {
                process.nextTick(cb, null, ret);
              }, function (rej) {
                process.nextTick(callbackifyOnRejected, rej, cb);
              });
            }

            Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
            Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
            return callbackified;
          }

          exports.callbackify = callbackify;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__(
        /*! ./../../../process/browser.js */
        "../../node_modules/process/browser.js"));
        /***/
      },

      /***/
      "../../node_modules/object-assign/index.js":
      /*!******************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/object-assign/index.js ***!
        \******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */

        /* eslint-disable no-unused-vars */

        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            } // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118


            var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

            test1[5] = 'de';

            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test2 = {};

            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }

            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });

            if (order2.join('') !== '0123456789') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
              test3[letter] = letter;
            });

            if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;

          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);

            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }

            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);

              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }

          return to;
        };
        /***/
      },

      /***/
      "../../node_modules/process/browser.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/process/browser.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
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
          } // if setTimeout wasn't available but was latter defined


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
          } // if clearTimeout wasn't available but was latter defined


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
        }; // v8 likes predictible objects


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
        /***/

      },

      /***/
      "../../node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },

      /***/
      "./src/Datagrid.ts":
      /*!*************************!*\
        !*** ./src/Datagrid.ts ***!
        \*************************/

      /*! exports provided: Datagrid, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Datagrid", function () {
          return Datagrid;
        });
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! assert */
        "../../node_modules/node-libs-browser/node_modules/assert/assert.js");
        /* harmony import */


        var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");
        /* harmony import */


        var _DatagridState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./DatagridState */
        "./src/DatagridState.ts");
        /* harmony import */


        var _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./render/defaultRenderer */
        "./src/render/defaultRenderer.ts");
        /* harmony import */


        var _render_GridRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./render/GridRenderer */
        "./src/render/GridRenderer.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.ts");

        var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }; // import './styles.css';


        class Datagrid extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(sf, node, options) {
            super();
            this.optionsToGrab = {
              id: {
                value: Datagrid.defaultOptions.id,
                domAttr: 'id'
              },
              url: {
                value: Datagrid.defaultOptions.url,
                domAttr: 'data-url'
              }
            };
            this.options = Object.assign({}, Datagrid.defaultOptions);
            this.grids = [];
            this.state = new _DatagridState__WEBPACK_IMPORTED_MODULE_3__["DatagridState"](this);
            this.capturedForms = []; // TODO: type as sf.Form instance array

            this.capturedPaginators = []; // TODO: type as sf.Paginator instance array

            this.init(sf, node, options);
            this.options = Object.assign(Object.assign({}, Datagrid.defaultOptions), this.options);
            const additionalOptionsEl = node.querySelector('script[role="sf-options"]');

            if (additionalOptionsEl) {
              try {
                const one = Function('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + ''); // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');

                const overrides = one()();
                this.options = Object.assign(Object.assign({}, this.options), overrides);
              } catch (e) {
                console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
                throw e;
              }
            }

            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.id, '', 'id should be not empty');
            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.url, '', 'url should be not empty'); // Process options
            // TODO: we can override columns and sort options inside renderers but it might produce situation of triggering unexisting sort
            // Think about that, or ignore

            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeColumns"])(this.options.columns, this.options.sortable); // Set default sort if present

            if (this.options.sort) {
              if (typeof this.options.sort === 'string') {
                this.state.setSort(this.options.sort, _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC);
              } else {
                this.state.setSort(this.options.sort.field, this.options.sort.direction || _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC);
              }
            }

            this.createRenderers();
            this.captureForms();
            this.request();
          }

          captureForms() {
            const forms = this.sf.getInstances('form');
            forms.forEach(f => {
              console.log(f); // TODO: should be an async capture

              if (f.instance.options && f.instance.options.id && this.options.captureForms.indexOf(f.instance.options.url) >= 0) {
                const instance = f.instance;
                this.capturedForms.push(instance);
                instance.options.jsonOnly = true;

                instance.options.beforeSubmitCallback = options => {
                  this.state.setFormData(instance.options.id, options.data);
                  this.request(); // TODO: better way

                  return false;
                };
              }
            });
          }
          /**
           * Sets sort for this field if not yet, or changes direction if already same
           * @param fieldId
           */


          triggerSort(fieldId) {
            if (this.state.sortBy === fieldId) {
              if (this.state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC) {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].DESC);
              } else {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC);
              }
            } else {
              const field = this.columnInfo.find(cI => cI.id === fieldId);

              if (field) {
                this.state.setSort(field.id, field.direction);
              } else {
                console.warn(`Trying to sort by unsortable field ${fieldId}`);
              }
            }

            this.request();
          }

          formRequest() {
            // TODO: 1. Collect data from forms
            // TODO: 2. Collect data from state
            const request = {
              fetchCount: true,
              filter: this.state.getFilter(),
              paginate: {
                limit: 25,
                page: 1
              },
              sort: this.state.sortBy ? {
                [this.state.sortBy]: this.state.sortDir
              } : {}
            };
            return request;
          }

          unlock() {
            if (!this.sf.removeInstance('lock', this.node)) {
              console.warn('You try to remove \'lock\' instance, but it is not available or not started');
            }

            this.capturedForms.forEach(f => {
              if (f.unlock) {
                f.unlock();
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.unlock) {
                f.unlock();
              }
            });
            return;
          }

          lock() {
            if (!this.options.lockType || this.options.lockType === 'none') {
              return;
            }

            const lock = this.sf.addInstance('lock', this.node, {
              type: this.options.lockType
            });

            if (!lock) {
              console.warn('You try to add \'lock\' instance, but it is not available or already started');
              return;
            }

            this.capturedForms.forEach(f => {
              if (f.lock) {
                f.lock();
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.lock) {
                f.lock();
              }
            });
          }

          handleSuccess({
            data
          }) {
            console.log('Success', data);
            this.state.setSuccess(data.data, data.pagination); // TODO: set success status

            this.render(); // TODO: rerender data
          }

          handleError({
            data,
            status,
            statusText
          }) {
            console.log('Error', data);
            this.state.setError(data.error, data.errors, this.options.resetOnError);
            this.capturedForms.forEach(f => {
              if (f.processAnswer) {
                f.processAnswer({
                  data,
                  status,
                  statusText
                });
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.processAnswer) {
                f.processAnswer({
                  data,
                  status,
                  statusText
                }); // TODO: might be different API
              }
            });
            this.render(); // TODO: set error status
            // TODO: remove data and display error
            // TODO: send validation errors to other forms
          }

          request() {
            return __awaiter(this, void 0, void 0, function* () {
              if (this.state.isLoading) {
                console.warn('Cant start new request');
                return;
              }

              this.state.startLoading();
              this.lock();
              const data = this.formRequest();
              const request = this.sf.ajax.send({
                url: this.options.url,
                method: this.options.method,
                headers: this.options.headers,
                data
              });

              try {
                const response = yield request;
                this.handleSuccess(response);
              } catch (e) {
                if (e.isSFAjaxError) {
                  this.handleError(e);
                } else {
                  this.handleError({
                    data: {
                      error: e.toString(),
                      originalError: e
                    },
                    status: 1000,
                    statusText: e.toString()
                  });
                }
              } finally {
                this.unlock();
                this.state.stopLoading();
              }
            });
          }

          createRenderers() {
            assert__WEBPACK_IMPORTED_MODULE_1__["deepEqual"](this.grids, [], 'Grids are already initialized');
            const renderList = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
            renderList.forEach(renderOption => {
              this.grids.push(new _render_GridRenderer__WEBPACK_IMPORTED_MODULE_5__["GridRenderer"](Object.assign(Object.assign({}, renderOption), {
                columns: renderOption.columns && renderOption.columns.length ? renderOption.columns : this.options.columns,
                sortable: renderOption.sortable && renderOption.sortable.length ? renderOption.sortable : this.options.sortable
              }), this));
            });
          }

          render() {
            this.grids.forEach(grid => {
              grid.render(this.state);
            });
          }

        }

        Datagrid.spiralFrameworkName = 'datagrid';
        Datagrid.defaultOptions = {
          id: '',
          lockType: 'default',
          resetOnError: false,
          captureForms: [],
          columns: [],
          headers: {},
          method: _constants__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].POST,
          sortable: [],
          url: '',
          ui: {
            cellAttributes: {},
            rowAttributes: {},
            rowClassName: '',
            cellClassName: {},
            tableClassName: 'table table-stripped',
            wrapperClassName: 'table-responsive'
          },
          renderers: _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_4__["defaultRenderer"]
        };
        /* harmony default export */

        __webpack_exports__["default"] = Datagrid;
        /***/
      },

      /***/
      "./src/DatagridState.ts":
      /*!******************************!*\
        !*** ./src/DatagridState.ts ***!
        \******************************/

      /*! exports provided: DEFAULT_LIMIT, DatagridState */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DEFAULT_LIMIT", function () {
          return DEFAULT_LIMIT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DatagridState", function () {
          return DatagridState;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");

        const DEFAULT_LIMIT = 25;

        class DatagridState {
          constructor(parent) {
            this.parent = parent;
            this.state = {
              loading: false,
              page: 1,
              sortDir: _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC,
              limit: DEFAULT_LIMIT,
              data: [],
              formData: {}
            };
          }

          get isLoading() {
            return this.state.loading;
          }

          startLoading() {
            this.state.loading = true;
          }

          stopLoading() {
            this.state.loading = false;
          }

          get data() {
            return this.state.data;
          }

          set data(data) {
            this.state.data = data;
          }

          get hasError() {
            return !!this.state.error;
          }

          get errorMessage() {
            return this.state.error;
          }

          get sortBy() {
            return this.state.sortBy;
          }

          get sortDir() {
            return this.state.sortDir;
          }

          setSuccess(data, pagination) {
            this.data = data;
            this.state.error = undefined;
            this.state.errors = undefined;
            this.state.page = pagination.page;
            this.state.limit = pagination.limit;
            this.state.count = typeof pagination.count !== 'undefined' ? pagination.count : this.state.count;
          }

          setError(error, errors = {}, resetData = false) {
            if (resetData) {
              this.data = [];
            }

            this.state.error = error;
            this.state.errors = errors;
          }

          setSort(field, direction) {
            this.state.sortBy = field;
            this.state.sortDir = direction;
          }

          setFormData(formId, data) {
            this.state.formData[formId] = data;
          }

          getFilter() {
            return Object.keys(this.state.formData).reduce((prev, key) => {
              return Object.assign(Object.assign({}, prev), this.state.formData[key]);
            }, {});
          }

        }
        /***/

      },

      /***/
      "./src/constants.ts":
      /*!**************************!*\
        !*** ./src/constants.ts ***!
        \**************************/

      /*! exports provided: SortDirection, RequestMethod */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
          return SortDirection;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "RequestMethod", function () {
          return RequestMethod;
        });

        var SortDirection;

        (function (SortDirection) {
          SortDirection["ASC"] = "asc";
          SortDirection["DESC"] = "desc";
        })(SortDirection || (SortDirection = {}));

        var RequestMethod;

        (function (RequestMethod) {
          RequestMethod["GET"] = "GET";
          RequestMethod["POST"] = "POST";
          RequestMethod["DELETE"] = "DELETE";
          RequestMethod["PUT"] = "PUT";
          RequestMethod["PATCH"] = "PATCH";
        })(RequestMethod || (RequestMethod = {}));
        /***/

      },

      /***/
      "./src/index.ts":
      /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _Datagrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Datagrid */
        "./src/Datagrid.ts");

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_Datagrid__WEBPACK_IMPORTED_MODULE_1__["default"], 'sf-js-datagrid');
        /* harmony default export */


        __webpack_exports__["default"] = _Datagrid__WEBPACK_IMPORTED_MODULE_1__["default"]; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/render/GridRenderer.ts":
      /*!************************************!*\
        !*** ./src/render/GridRenderer.ts ***!
        \************************************/

      /*! exports provided: GridRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "GridRenderer", function () {
          return GridRenderer;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");
        /* harmony import */


        var _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./defaultBodyWrapper */
        "./src/render/defaultBodyWrapper.ts");
        /* harmony import */


        var _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./defaultFooterWrapper */
        "./src/render/defaultFooterWrapper.ts");
        /* harmony import */


        var _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./defaultHeaderCellRenderer */
        "./src/render/defaultHeaderCellRenderer.ts");
        /* harmony import */


        var _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./defaultHeaderWrapper */
        "./src/render/defaultHeaderWrapper.ts");
        /* harmony import */


        var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./defaultRowRenderer */
        "./src/render/defaultRowRenderer.ts");
        /* harmony import */


        var _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./defaultRowWrapper */
        "./src/render/defaultRowWrapper.ts");
        /* harmony import */


        var _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./defaultTableWrapper */
        "./src/render/defaultTableWrapper.ts");

        class GridRenderer {
          constructor(options, root) {
            this.options = options;
            this.root = root;
            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeColumns"])(this.options.columns, this.options.sortable);
            console.log(this.columnInfo);
            this.create();
          }

          create() {
            this.wrapper = document.createElement('div');
            this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
            this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');
            this.root.node.innerHTML = '';
            this.root.node.appendChild(this.wrapper);
            const tableRenderer = this.options.tableWrapper || _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_7__["defaultTableWrapper"];
            this.tableEl = tableRenderer(this.wrapper, this.options);
          }

          render(state) {
            // Render header
            const headerRenderer = this.options.headerWrapper || _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_4__["defaultHeaderWrapper"];

            if (this.headerEl) {
              this.tableEl.removeChild(this.headerEl);
            }

            this.headerEl = headerRenderer(this.tableEl, this.options, state);

            if (this.headerEl) {
              this.tableEl.appendChild(this.headerEl); // TODO: Render header cells

              if (this.columnInfo.length) {
                this.columnInfo.forEach((cI, index) => {
                  const headerCellRenderer = (this.options.headerList || {})[cI.id] || _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_3__["defaultHeaderCellRenderer"];
                  this.headerEl.appendChild(headerCellRenderer(cI, this.options, state));
                });
              }
            } // Render body


            if (this.bodyEl) {
              this.tableEl.removeChild(this.bodyEl);
            }

            const bodyRenderer = this.options.bodyWrapper || _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_1__["defaultBodyWrapper"];
            this.bodyEl = bodyRenderer(this.tableEl, this.options, state);

            if (this.bodyEl) {
              this.tableEl.appendChild(this.bodyEl);
              const row = this.options.rowWrapper || _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_6__["defaultRowWrapper"];
              state.data.forEach((item, index) => {
                const el = row(this.bodyEl, this.options, state, index);
                this.columnInfo.forEach(cI => {
                  const rowCellRenderer = (this.options.cells || {})[cI.id] || _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__["defaultRowCellRenderer"];
                  el.appendChild(rowCellRenderer(cI, this.options, state, index));
                });
              });
            } // Render footer


            if (this.footerEl) {
              this.tableEl.removeChild(this.footerEl);
            }

            const footerRenderer = this.options.footerWrapper || _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_2__["defaultFooterWrapper"];
            this.footerEl = footerRenderer(this.tableEl, this.options, state);

            if (this.footerEl) {
              this.tableEl.appendChild(this.footerEl); // We assume footer render handles all data so no additional renders here
            }
          }

        }
        /***/

      },

      /***/
      "./src/render/defaultBodyWrapper.ts":
      /*!******************************************!*\
        !*** ./src/render/defaultBodyWrapper.ts ***!
        \******************************************/

      /*! exports provided: defaultBodyWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultBodyWrapper", function () {
          return defaultBodyWrapper;
        });

        const defaultBodyWrapper = (node, options, state) => {
          const el = document.createElement('tbody');
          node.appendChild(el);

          if (state.hasError) {
            const errorTr = document.createElement('tr');
            const errorTd = document.createElement('td');
            errorTd.colSpan = options.columns.length;
            errorTd.innerText = state.errorMessage || 'Unknown Error';
            errorTd.classList.add('sf-table__error');
            errorTr.appendChild(errorTd);
            el.appendChild(errorTr);
          } else if (state.data.length === 0) {
            const emptyTr = document.createElement('tr');
            const emptyTd = document.createElement('td');
            emptyTd.colSpan = options.columns.length;
            emptyTd.innerHTML = 'No Data';
            emptyTd.classList.add('sf-table__empty');
            emptyTr.appendChild(emptyTd);
            el.appendChild(emptyTr);
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultFooterWrapper.ts":
      /*!********************************************!*\
        !*** ./src/render/defaultFooterWrapper.ts ***!
        \********************************************/

      /*! exports provided: defaultFooterWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultFooterWrapper", function () {
          return defaultFooterWrapper;
        });

        const defaultFooterWrapper = (node, options, state) => {
          return undefined;
        };
        /***/

      },

      /***/
      "./src/render/defaultHeaderCellRenderer.ts":
      /*!*************************************************!*\
        !*** ./src/render/defaultHeaderCellRenderer.ts ***!
        \*************************************************/

      /*! exports provided: defaultHeaderCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRenderer", function () {
          return defaultHeaderCellRenderer;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");

        const defaultHeaderCellRenderer = (column, options, state) => {
          const el = document.createElement('th');
          const classes = [];

          if (column.sortable) {
            classes.push('sf-table__sort');
            el.addEventListener('click', () => {
              state.parent.triggerSort(column.id);
            });
          }

          if (state.sortBy === column.id) {
            if (state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC) {
              classes.push('sf-table__sort_asc');
            } else {
              classes.push('sf-table__sort_desc');
            }
          }

          el.innerHTML = `<div class="${classes.join(' ')}">${column.title}</div>`;
          const cellMeta = {
            id: column.id,
            column: column,
            index: 0,
            rowSelected: false,
            state: state,
            item: null
          };

          if (options.ui.headerCellClassName) {
            if (typeof options.ui.headerCellClassName === 'function') {
              el.classList.add(options.ui.headerCellClassName(cellMeta));
            } else {
              const specific = options.ui.headerCellClassName[column.id];

              if (specific) {
                if (typeof specific === 'string') {
                  el.classList.add(specific);
                } else {
                  el.classList.add(specific(cellMeta));
                }
              }
            }
          }

          if (options.ui.headerCellAttributes) {
            if (typeof options.ui.headerCellAttributes === 'function') {
              Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, options.ui.headerCellAttributes(cellMeta));
            } else {
              const specific = options.ui.headerCellAttributes[column.id];

              if (specific) {
                if (typeof specific === 'function') {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific(cellMeta));
                } else {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific);
                }
              }
            }
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultHeaderWrapper.ts":
      /*!********************************************!*\
        !*** ./src/render/defaultHeaderWrapper.ts ***!
        \********************************************/

      /*! exports provided: defaultHeaderWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderWrapper", function () {
          return defaultHeaderWrapper;
        });

        const defaultHeaderWrapper = (node, options, state) => {
          const el = document.createElement('thead');
          node.appendChild(el);
          const tr = document.createElement('tr');
          el.appendChild(tr);
          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultRenderer.ts":
      /*!***************************************!*\
        !*** ./src/render/defaultRenderer.ts ***!
        \***************************************/

      /*! exports provided: defaultRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRenderer", function () {
          return defaultRenderer;
        });

        const defaultRenderer = {
          columns: [],
          sortable: [],

          /**
           * Basic class/attribute properties
           */
          ui: {
            wrapperClassName: 'table-responsive',
            tableClassName: 'table table-striped',
            cellClassName: {},
            rowClassName: '',
            cellAttributes: cellMeta => {
              return {};
            },
            rowAttributes: rowlMeta => {
              return {};
            }
          }
        };
        /***/
      },

      /***/
      "./src/render/defaultRowRenderer.ts":
      /*!******************************************!*\
        !*** ./src/render/defaultRowRenderer.ts ***!
        \******************************************/

      /*! exports provided: defaultRowCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRowCellRenderer", function () {
          return defaultRowCellRenderer;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");

        const defaultRowCellRenderer = (column, options, state, index) => {
          const el = document.createElement('td');
          el.innerText = state.data[index][column.id];
          const cellMeta = {
            id: column.id,
            column: column,
            index,
            // rowSelected: (state as any).isSelected(index),
            rowSelected: false,
            state: state,
            item: state.data[index]
          };

          if (options.ui.cellClassName) {
            if (typeof options.ui.cellClassName === 'function') {
              el.classList.add(options.ui.cellClassName(cellMeta));
            } else {
              const specific = options.ui.cellClassName[column.id];

              if (specific) {
                if (typeof specific === 'string') {
                  el.classList.add(specific);
                } else {
                  el.classList.add(specific(cellMeta));
                }
              }
            }
          }

          if (options.ui.cellAttributes) {
            if (typeof options.ui.cellAttributes === 'function') {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, options.ui.cellAttributes(cellMeta));
            } else {
              const specific = options.ui.cellAttributes[column.id];

              if (specific) {
                if (typeof specific === 'function') {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific(cellMeta));
                } else {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific);
                }
              }
            }
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultRowWrapper.ts":
      /*!*****************************************!*\
        !*** ./src/render/defaultRowWrapper.ts ***!
        \*****************************************/

      /*! exports provided: defaultRowWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRowWrapper", function () {
          return defaultRowWrapper;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");

        const defaultRowWrapper = (node, options, state, index) => {
          const el = document.createElement('tr');
          node.appendChild(el);
          const rowMeta = {
            id: '1',
            index,
            // rowSelected: (state as any).isSelected(index),
            selected: false,
            state: state,
            item: state.data[index]
          };

          if (options.ui.rowClassName) {
            if (typeof options.ui.rowClassName === 'function') {
              el.classList.add(options.ui.rowClassName(rowMeta));
            } else {
              el.classList.add(options.ui.rowClassName);
            }
          }

          if (options.ui.rowAttributes) {
            if (typeof options.ui.rowAttributes === 'function') {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, options.ui.rowAttributes(rowMeta));
            } else {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, options.ui.rowAttributes);
            }
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultTableWrapper.ts":
      /*!*******************************************!*\
        !*** ./src/render/defaultTableWrapper.ts ***!
        \*******************************************/

      /*! exports provided: defaultTableWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultTableWrapper", function () {
          return defaultTableWrapper;
        });

        const defaultTableWrapper = (node, options) => {
          const el = document.createElement('table');
          el.className = options.ui.tableClassName || '';
          node.appendChild(el);
          return el;
        };
        /***/

      },

      /***/
      "./src/utils.ts":
      /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/

      /*! exports provided: normalizeColumns, applyAttrributes */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "normalizeColumns", function () {
          return normalizeColumns;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "applyAttrributes", function () {
          return applyAttrributes;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");

        const normalizeColumns = (columns, sortable) => {
          const sList = sortable.map(s => {
            if (typeof s === 'string') {
              return {
                field: s,
                direction: undefined
              };
            }

            return s;
          });
          return columns.map(c => {
            let id;
            let title;
            let sortDir;

            if (typeof c === 'string') {
              id = c;
              title = c;
              sortDir = _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
            } else {
              id = c.id;
              title = c.title || c.id;
              sortDir = c.sortDir || _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
            }

            const sort = sList.find(s => s.field === id);

            if (sort) {
              return {
                id,
                title,
                sortable: true,
                direction: sort.direction || sortDir
              };
            }

            return {
              id,
              title,
              sortable: false,
              direction: _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC
            };
          });
        };

        const applyAttrributes = (node, attrs) => {
          Object.keys(attrs).forEach(name => {
            node.setAttribute(name, attrs[name]);
          });
        };
        /***/

      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.ts ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.ts */
        "./src/index.ts");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
});

/***/ }),

/***/ "../form/dist/form.js":
/*!****************************!*\
  !*** ../form/dist/form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css":
      /*!**************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js");

        exports = ___CSS_LOADER_API_IMPORT___(true); // Module

        exports.push([module.i, "[data-form-message] ~ [data-form-hint] {\r\n  display: none;\r\n}\r\n\r\n.is-invalid[data-message-placeholder]>.invalid-feedback,\r\n.is-invalid[data-field]>.invalid-feedback {\r\n  display: block;\r\n}\r\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB",
          "file": "styles.css",
          "sourcesContent": ["[data-form-message] ~ [data-form-hint] {\r\n  display: none;\r\n}\r\n\r\n.is-invalid[data-message-placeholder]>.invalid-feedback,\r\n.is-invalid[data-field]>.invalid-feedback {\r\n  display: block;\r\n}\r\n"]
        }]); // Exports

        module.exports = exports;
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names

        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)


        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
        /***/

      },

      /***/
      "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!*************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isOldIE = function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === 'undefined') {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(window && document && document.all && !window.atob);
            }

            return memo;
          };
        }();

        var getTarget = function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === 'undefined') {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        }();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3]
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === 'function') {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || 'head');

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */


        var replaceText = function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
          };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute('media', media);
          } else {
            style.removeAttribute('media');
          }

          if (sourceMap && btoa) {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          } // For old IE

          /* istanbul ignore if  */


          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update(obj = newObj);
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== '[object Array]') {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };
        /***/

      },

      /***/
      "./src/Form.js":
      /*!*********************!*\
        !*** ./src/Form.js ***!
        \*********************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./formToObject */
        "./src/formToObject.js");
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formToObject__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./formMessages */
        "./src/formMessages.js");
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formMessages__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./iterateInputs */
        "./src/iterateInputs.js");
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iterateInputs__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-underscore-dangle */


        let idCounter = 1;
        /**
         * Spiral Forms
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @constructor Form
         * @extends BaseDOMConstructor
         */

        const Form = function (sf, node, options) {
          this._construct(sf, node, options);
        };
        /**
         * @lends sf.Form.prototype
         */


        Form.prototype = _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.createModulePrototype();
        /**
         * Name to register
         * @type {string}
         */

        Form.prototype.name = 'form';
        /**
         * Function that call on new instance is created.
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @private
         */

        Form.prototype._construct = function (sf, node, options) {
          this.init(sf, node, options);
          this.options.jsonOnly = this.options.jsonOnly && !!window.FormData;
          this.mixMessagesOptions(); // this.options.fillFrom && this.fillFieldsFrom(); // id required to fill form

          /**
             * @extends DOMEvents
             * @type {DOMEvents}
             * @inheritDoc
             * */

          this.DOMEvents = new this.sf.helpers.DOMEvents();
          this.addEvents();
          this.events = new this.sf.core.Events(['beforeSend', 'success', 'error', 'always']);
          _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.iterateInputs = _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default.a;
        };
        /**
         * @override
         * @inheritDoc
         * @enum {Object}
         * @deprecated
         */


        Form.prototype.optionsToGrab = {
          /**
             * Link to form
             */
          context: {
            processor(node) {
              // Processor
              return node;
            }

          },

          /**
             * Link to 'this'
             */
          self: {
            processor() {
              return this;
            }

          },
          id: {
            // eslint-disable-next-line no-plusplus
            value: `form:${idCounter++}`,
            domAttr: 'id'
          },

          /**
             * URL to send form (if ajax form) <b>Default: "/"</b>
             */
          url: {
            domAttr: 'action',
            value: '/'
          },

          /**
             * Method to send to send form (if ajax form) <b>Default: "POST"</b>
             */
          method: {
            domAttr: 'method',
            value: 'POST'
          },

          /**
             * Lock type when form sending <b>Default: "default"</b> @see sf.lock
             */
          lockType: {
            value: 'default',
            domAttr: 'data-lock-type'
          },

          /**
             * Force to not use FormData even if it's available
             */
          jsonOnly: {
            value: false,
            domAttr: 'data-json-only'
          },

          /**
             *
             */
          messagesType: {
            value: 'spiral',
            domAttr: 'data-messages-type'
          },

          /**
             * Pass custom template for form messages
             */
          messages: {
            value: '',
            domAttr: 'data-messages',

            processor(node, val, self) {
              if (!val) return this.value;

              if (typeof val === 'string') {
                try {
                  val = JSON.parse(val);
                } catch (e) {
                  console.error('Form JSON.parse error: ', e);
                }
              }

              return Object.assign(self.value, val);
            }

          },

          /**
             * Use ajax to submit form <b>Default: true</b>
             */
          useAjax: {
            // Attribute of form
            value: true,
            // Default value
            domAttr: 'data-use-ajax',

            processor(node, val) {
              // processor to process data before return
              if (typeof val === 'boolean') {
                return val;
              }

              val = val !== undefined && val !== null ? val.toLowerCase() : '';

              if (val === 'false') {
                val = false;
              } else if (val === 'true') {
                val = true;
              }

              return val;
            }

          },

          /**
             * Callback after form submitting <b>Default: false</b>
             * <br/>
             * <b> Example </b>
             * function(options){
             *  //options contains all options after send
             * }
             */
          ajaxCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-callback'
          },
          beforeSubmitCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-before-submit'
          },
          afterSubmitCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-after-submit'
          },
          headers: {
            // attribute of form
            value: {
              Accept: 'application/json'
            },
            // Default value
            domAttr: 'data-headers',

            processor(node, val, self) {
              if (val === undefined || val == null) return this.value;

              if (typeof val === 'string') {
                try {
                  val = JSON.parse(val);
                } catch (e) {
                  console.error('Form JSON.parse error: ', e);
                }
              }

              return Object.assign(self.value, val);
            }

          }
        };

        Form.prototype.mixMessagesOptions = function () {
          const global = this.sf.options.instances.form;
          this.options.messages = { ..._formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.defaults,
            ...(global && global.messages && global.messages[this.options.messagesType]),
            ...this.options.messages
          };
        };
        /**
         * Call on form submit
         * @param {Event} e submit event
         */


        Form.prototype.onSubmit = function (e) {
          if (this.sf.getInstance('lock', this.node)) {
            // On lock we should'n do any actions
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          this.removeMessages();
          this.options.data = this.getFormData(); // We can send files only with FormData
          // If form contain files and no FormData than disable ajax

          if (!this.options.jsonOnly && this.options.context.querySelectorAll("input[type='file']").length !== 0) {
            this.options.useAjax = false;
          }

          this.events.trigger('beforeSend', this.options); // sf.events.performAction("beforeSubmit", this.options);
          // this.events.performAction("beforeSubmit", this.options);

          if (this.options.useAjax) {
            this.send(this.options);
            e.preventDefault();
            e.stopPropagation();
          }
        };
        /**
         * Locker. Add or remove.
         */


        Form.prototype.lock = function () {
          if (!this.options.lockType || this.options.lockType === 'none') {
            return;
          }

          const lock = this.sf.addInstance('lock', this.node, {
            type: this.options.lockType
          });

          if (!lock) {
            console.warn("You try to add 'lock' instance, but it is not available or already started");
            return;
          }

          this.options.onProgress = lock.progress;
        };
        /**
         * Locker. Add or remove.
         */


        Form.prototype.unlock = function () {
          if (!this.options.lockType || this.options.lockType === 'none') {
            return;
          }

          if (!this.sf.removeInstance('lock', this.node)) {
            console.warn("You try to remove 'lock' instance, but it is not available or not started");
          }
        }; // Form messages


        Form.prototype.showFormMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFormMessage;
        Form.prototype.showFieldMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldMessage;
        Form.prototype.showFieldsMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldsMessages;
        Form.prototype.showMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showMessages;
        Form.prototype.removeMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessages;
        Form.prototype.removeMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessage;

        Form.prototype.processAnswer = function (answer) {
          if (this.options.messagesType) {
            this.showMessages(answer);
          }
        };

        Form.prototype.optCallback = function (options, type) {
          if (options[type]) {
            // eslint-disable-next-line no-eval
            const fn = eval(options[type]);

            if (typeof fn === 'function') {
              return fn.call(this, options);
            }
          }
        };
        /**
         * Send form to server
         * @param {Object} sendOptions
         */


        Form.prototype.send = function (sendOptions) {
          const that = this;

          if (this.optCallback(sendOptions, 'beforeSubmitCallback') === false) {
            return;
          }

          this.lock();
          this.sf.ajax.send(sendOptions).then(answer => {
            that.events.trigger('success', sendOptions);
            return answer;
          }, error => {
            that.events.trigger('error', sendOptions);
            return error;
          }).then(answer => {
            that.lock(true);
            that.processAnswer(answer);
            this.optCallback(sendOptions, 'afterSubmitCallback');
            that.events.trigger('always', sendOptions);
          }); // To cancel request:
          // if (this.sf.ajax.cancel) this.sf.ajax.cancel();
        };
        /**
         * Serialize form
         * @return {Object}
         */


        Form.prototype.getFormData = function () {
          if (!this.options.jsonOnly) {
            return new FormData(this.options.context);
          } // console.log(`Form \`${this.options.context}\` were processed without FormData.`);


          return new _formToObject__WEBPACK_IMPORTED_MODULE_1___default.a(this.options.context);
        };
        /**
         * Set options (overwrite current)
         * @param {Object} opt options
         */


        Form.prototype.setOptions = function (opt) {
          this.options = Object.assign(this.options, opt);
        };
        /**
         * Add all events for forms
         */


        Form.prototype.addEvents = function () {
          const that = this;
          this.DOMEvents.add([{
            DOMNode: this.options.context,
            eventType: 'submit',

            eventFunction(e) {
              that.onSubmit.call(that, e);
            }

          }]);
        };
        /**
         * Clear all variables and die
         */


        Form.prototype.die = function () {
          this.DOMEvents.removeAll(); // TODO don't we need to remove it's addons and plugins?
        };
        /* harmony default export */


        __webpack_exports__["default"] = Form;
        /***/
      },

      /***/
      "./src/formMessages.js":
      /*!*****************************!*\
        !*** ./src/formMessages.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable max-len */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-multi-assign */

        /* eslint-disable no-template-curly-in-string */
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const defaults = {
          // template: '<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',
          template: '<div class="alert alert-${type} alert-dismissible fade show" role="alert">' + '${text}' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>' + '</div>',
          close: '.close',
          place: 'bottom',
          levels: {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'danger'
          },
          selector: '[data-message]',
          field: '[data-field]',
          fieldElement: '[data-input]',
          fieldTemplate: '<div data-message class="invalid-feedback" data-form-message>${text}</div>',
          fieldPlace: 'bottom',
          fieldClasses: {
            success: 'is-valid',
            info: 'is-valid',
            warning: 'is-invalid',
            error: 'is-invalid'
          }
        }; // Often used alias

        defaults.levels.message = defaults.levels.success; // Other aliases
        // PSR-3 severity levels mapping (debug, info, notice, warning, error, critical, alert, emergency)
        // https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md

        defaults.levels.debug = defaults.levels.success;
        defaults.levels.info = defaults.levels.notice = defaults.levels.info;
        defaults.levels.danger = defaults.levels.critical = defaults.levels.alert = defaults.levels.emergency = defaults.levels.error;
        /**
         * @param {Object|String} message
         * @param {String} type
         * @return {Object}
         */

        function prepareMessageObject(message, type) {
          if (typeof message !== 'object') {
            message = {
              text: message,
              type
            };
          }

          message.text = message.text || message.message || message;
          message.type = message.type || type;
          return message;
        }

        module.exports = {
          defaults,

          showMessages(answer) {
            if (!answer) return;
            let isMsg = false;
            const that = this;

            if (answer.data) {
              // for (const type in this.options.messages.levels) {
              Object.keys(this.options.messages.levels).forEach(type => {
                if (answer.data[type]) {
                  this.showFormMessage(answer.data[type], this.options.messages.levels[type]);
                  isMsg = true;
                }
              });

              if (answer.data.messages) {
                this.showFieldsMessages(answer.data.messages, 'success');
                isMsg = true;
              }

              if (answer.data.errors) {
                this.showFieldsMessages(answer.data.errors, 'error');
                isMsg = true;
              }

              if (answer.data.warnings) {
                this.showFieldsMessages(answer.data.warnings, 'warning');
                isMsg = true;
              }
            }

            if (!isMsg) {
              let error;

              if (!answer.status) {
                // Network.error
                error = answer;
              } else if (answer.status > 300) {
                error = answer.status ? `${answer.status} ` : '';
                error += answer.statusText ? answer.statusText : '';
                error += answer.data && !answer.statusText ? answer.data : '';
              }

              if (error) this.showFormMessage(error, this.options.messages.levels.error);
            }

            this._messages.forEach(m => {
              if (m.close) {
                m.closeHandler = that.removeMessage.bind(that, m);
                m.close.addEventListener('click', m.closeHandler);
              }
            });
          },

          removeMessage(m, e) {
            if (m.close) {
              m.close.removeEventListener('click', m.closeHandler);
            }

            m.el.parentNode.removeChild(m.el);

            if (m.field) {
              const fieldEl = m.field.querySelector(this.options.messages.fieldElement);

              if (fieldEl) {
                fieldEl.classList.remove(this.options.messages.fieldClasses[m.type]);
              } else {
                m.field.classList.remove(this.options.messages.fieldClasses[m.type]);
              }
            }

            if (e) {
              if (e.preventDefault) e.preventDefault();

              this._messages.splice(this._messages.indexOf(m), 1);
            }
          },

          removeMessages() {
            const that = this;

            if (this._messages) {
              this._messages.forEach(m => {
                that.removeMessage(m, false);
              });
            }

            that._messages = [];
          },

          showFormMessage(message, type) {
            let parent;
            let tpl = this.options.messages.template;
            message = prepareMessageObject(message, type); // for (const item in message) {

            Object.keys(message).forEach(item => {
              // eslint-disable-next-line no-prototype-builtins
              if (!message.hasOwnProperty(item)) return;
              tpl = tpl.replace(`\${${item}}`, message[item]);
            });
            const tplElem = document.createElement('div');
            tplElem.innerHTML = tpl;
            const msgEl = tplElem.firstChild;

            if (this.options.messages.place === 'bottom') {
              this.node.appendChild(msgEl);
            } else if (this.options.messages.place === 'top') {
              this.node.insertBefore(msgEl, this.node.firstChild);
            } else {
              parent = document.querySelector(this.options.messages.place);
              parent.appendChild(msgEl);
            }

            this._messages.push({
              el: msgEl,
              close: msgEl.querySelector(this.options.messages.close)
            });
          },

          /**
             * @param {HTMLElement} el
             * @param {String} message
             * @param {String} type
             * @param {Boolean} [isContainer]
             */
          showFieldMessage(el, message, type, isContainer) {
            let field = isContainer ? el : sf.helpers.domTools.closest(el, this.options.messages.field);
            let tpl = this.options.messages.fieldTemplate;

            if (!field) {
              return;
            }

            message = prepareMessageObject(message, type);
            const fieldEl = field.querySelector(this.options.messages.fieldElement);
            const currentMsgEl = field.querySelector(this.options.messages.selector);

            if (fieldEl) {
              fieldEl.classList.add(this.options.messages.fieldClasses[type]);
            } else {
              field.classList.add(this.options.messages.fieldClasses[type]);
            } // for (const item in message) {


            Object.keys(message).forEach(item => {
              // eslint-disable-next-line no-prototype-builtins
              if (!message.hasOwnProperty(item)) return;
              tpl = tpl.replace(`\${${item}}`, message[item]);
            });
            const tplElem = document.createElement('div');
            tplElem.innerHTML = tpl;
            const msgEl = tplElem.firstChild;

            if (this.options.messages.fieldPlace === 'bottom') {
              if (fieldEl) {
                field.insertBefore(msgEl, fieldEl.nextSibling);
              } else if (!currentMsgEl) {
                field.appendChild(msgEl);
              }
            } else if (this.options.messages.fieldPlace === 'top') {
              field.insertBefore(msgEl, field.firstChild);
            } else {
              field = field.querySelector(this.options.messages.fieldPlace);
              field.appendChild(msgEl);
            }

            this._messages.push({
              el: msgEl,
              close: msgEl.querySelector(this.options.messages.fieldClose),
              field,
              type
            });
          },

          showFieldsMessages(messages, type) {
            const that = this;
            const notFound = sf.iterateInputs(this.node, messages, (el, message) => {
              that.showFieldMessage(el, message, type);
            });
            notFound.forEach(msgObj => {
              Object.keys(msgObj).forEach(name => {
                const container = that.node.querySelector(`[data-message-placeholder="${name}"]`);

                if (container) {
                  // TODO check container.dataset.messageVariant? variants are "field" and "form"
                  that.showFieldMessage(container, msgObj[name], type, true);
                }
              });
            });
          }

        };
        /***/
      },

      /***/
      "./src/formToObject.js":
      /*!*****************************!*\
        !*** ./src/formToObject.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-param-reassign */

        /* eslint-disable func-names */

        /*
         * github.com/serbanghita/FormToObject.js 1.0.1  (c) 2013 Serban Ghita <serbanghita@gmail.com>
         * @licence MIT
         */
        // Constructor.
        const FormToObject = function (formRef) {
          if (!formRef) {
            return false;
          }

          this.formRef = formRef; // eslint-disable-next-line no-useless-escape

          this.keyRegex = /[^\[\]]+/g;
          this.$form = null;
          this.$formElements = [];
          this.formObj = {};

          if (!this.setForm()) {
            return false;
          }

          if (!this.setFormElements()) {
            return false;
          }

          return this.setFormObj();
        }; // Set the main form object we are working on.


        FormToObject.prototype.setForm = function () {
          switch (typeof this.formRef) {
            case 'string':
              this.$form = document.getElementById(this.formRef);
              break;

            case 'object':
              if (this.isDomNode(this.formRef)) {
                this.$form = this.formRef;
              }

              break;

            default:
          }

          return this.$form;
        }; // Set the elements we need to parse.


        FormToObject.prototype.setFormElements = function () {
          this.$formElements = this.$form.querySelectorAll('input, textarea, select');
          return this.$formElements.length;
        }; // Check to see if the object is a HTML node.


        FormToObject.prototype.isDomNode = function (node) {
          return typeof node === 'object' && 'nodeType' in node && node.nodeType === 1;
        }; // Iteration through arrays and objects. Compatible with IE.


        FormToObject.prototype.forEach = function (arr, callback) {
          if ([].forEach) {
            [].forEach.call(arr, callback);
            return;
          } // let i;
          // for (i in arr) {


          Object.keys(arr).forEach(i => {
            // Object.prototype.hasOwnProperty instead of arr.hasOwnProperty for IE8 compatibility.
            if (Object.prototype.hasOwnProperty.call(arr, i)) {
              callback.call(arr, arr[i]);
            }
          });
        }; // Recursive method that adds keys and values of the corresponding fields.


        FormToObject.prototype.addChild = function (result, domNode, keys, value) {
          // #1 - Single dimensional array.
          if (keys.length === 1) {
            // We're only interested in the radio that is checked.
            if (domNode.nodeName === 'INPUT' && domNode.type === 'radio') {
              if (domNode.checked) {
                result[keys] = value;
                return;
              }

              return;
            } // Checkboxes are a special case. We have to grab each checked values
            // and put them into an array.


            if (domNode.nodeName === 'INPUT' && domNode.type === 'checkbox') {
              if (domNode.checked) {
                if (!result[keys]) {
                  result[keys] = [];
                }

                result[keys].push(value);
                return;
              }

              return;
            } // Multiple select is a special case.
            // We have to grab each selected option and put them into an array.


            if (domNode.nodeName === 'SELECT' && domNode.type === 'select-multiple') {
              result[keys] = [];
              const DOMchilds = domNode.querySelectorAll('option[selected]');

              if (DOMchilds) {
                this.forEach(DOMchilds, child => {
                  result[keys].push(child.value);
                });
              }

              return;
            } // Fallback. The default one to one assign.


            result[keys] = value;
          } // #2 - Multi dimensional array.


          if (keys.length > 1) {
            if (!result[keys[0]]) {
              result[keys[0]] = {};
            }

            this.addChild(result[keys[0]], domNode, keys.splice(1, keys.length), value);
          } // return result; // ?

        };

        FormToObject.prototype.setFormObj = function () {
          let test;
          let i = 0;

          for (i = 0; i < this.$formElements.length; i += 1) {
            // Ignore the element if the 'name' attribute is empty.
            // Ignore the 'disabled' elements.
            if (this.$formElements[i].name && !this.$formElements[i].disabled) {
              test = this.$formElements[i].name.match(this.keyRegex);
              this.addChild(this.formObj, this.$formElements[i], test, this.$formElements[i].value);
            }
          }

          return this.formObj;
        };

        module.exports = FormToObject;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const Form = __webpack_require__(
        /*! ./Form */
        "./src/Form.js").default;

        sf.registerInstanceType(Form, 'js-sf-form');
        module.exports = Form; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/iterateInputs.js":
      /*!******************************!*\
        !*** ./src/iterateInputs.js ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-console */

        /* eslint-disable func-names */
        // Plugin in formMessages to iterate form inputs
        // TODO comment all of this
        // TODO ask @Systerr the reason of variable 'prefix'
        let notFound = [];
        /**
         *
         * @param {HTMLElement} context
         * @param {Object} names
         * @param {Function} callback
         * @param {String} [prefix]
         */

        function findNodes(context, names, callback, prefix) {
          // for (const name in names) {
          Object.keys(names).forEach(name => {
            // eslint-disable-next-line no-prototype-builtins
            if (!names.hasOwnProperty(name)) {
              return;
            }

            const partOfSelector = prefix ? `${prefix}[${name}]` : name;
            const type = Object.prototype.toString.call(names[name]);
            const selector = `[name='${partOfSelector}']`;

            switch (type) {
              case '[object Object]':
                findNodes(context, names[name], callback, partOfSelector);
                break;

              case '[object Array]':
                names[name].forEach(el => {
                  // TODO refactor this should call recursive
                  const sel = `[name='${partOfSelector}[]'][value='${el}']`;
                  const nodes = context.querySelectorAll(sel);

                  if (nodes.length === 0) {
                    notFound.push(sel);
                  }

                  for (let i = 0, max = nodes.length; i < max; i += 1) {
                    callback(nodes[i], true);
                  }
                });
                break;

              case '[object String]':
              case '[object Number]':
                // eslint-disable-next-line no-case-declarations
                const nodes = context.querySelectorAll(selector);

                if (nodes.length === 0) {
                  const obj = {};
                  obj[partOfSelector] = names[name];
                  notFound.push(obj);
                }

                for (let i = 0, max = nodes.length; i < max; i += 1) {
                  callback(nodes[i], names[name]);
                }

                break;

              default:
                console.error('unknown type -', type, ' and message', names[name]);
            }
          });
        }
        /**
         * @param {HTMLElement} context
         * @param {Object} names
         * @param {Function} callback
         * @param {String} [prefix]
         * @return {String[]}
         */


        const iterateInputs = function (context, names, callback, prefix) {
          notFound = [];
          findNodes(context, names, callback, prefix);

          if (notFound.length !== 0) {// eslint-disable-next-line no-console
            // console.log('Some element not found in form', notFound);
          }

          return notFound;
        };

        module.exports = iterateInputs;
        /***/
      },

      /***/
      "./src/styles.css":
      /*!************************!*\
        !*** ./src/styles.css ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        content = content.__esModule ? content.default : content;

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;
        var update = api(content, options);
        var exported = content.locals ? content.locals : {};
        module.exports = exported;
        /***/
      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsIm9wdENhbGxiYWNrIiwiZm4iLCJldmFsIiwiY2FsbCIsInNlbmRPcHRpb25zIiwidGhhdCIsImFqYXgiLCJ0aGVuIiwiRm9ybVRvT2JqZWN0Iiwic2V0T3B0aW9ucyIsIm9wdCIsImFkZCIsIkRPTU5vZGUiLCJldmVudFR5cGUiLCJldmVudEZ1bmN0aW9uIiwiZGllIiwicmVtb3ZlQWxsIiwicmVxdWlyZSIsInRlbXBsYXRlIiwiY2xvc2UiLCJwbGFjZSIsImxldmVscyIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInNlbGVjdG9yIiwiZmllbGQiLCJmaWVsZEVsZW1lbnQiLCJmaWVsZFRlbXBsYXRlIiwiZmllbGRQbGFjZSIsImZpZWxkQ2xhc3NlcyIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIm5vdGljZSIsImRhbmdlciIsImNyaXRpY2FsIiwiYWxlcnQiLCJlbWVyZ2VuY3kiLCJwcmVwYXJlTWVzc2FnZU9iamVjdCIsInRleHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNNc2ciLCJrZXlzIiwiZm9yRWFjaCIsImVycm9ycyIsIndhcm5pbmdzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIl9tZXNzYWdlcyIsIm0iLCJjbG9zZUhhbmRsZXIiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZpZWxkRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3BsaWNlIiwiaW5kZXhPZiIsInBhcmVudCIsInRwbCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGxhY2UiLCJ0cGxFbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibXNnRWwiLCJmaXJzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJwdXNoIiwiaXNDb250YWluZXIiLCJkb21Ub29scyIsImNsb3Nlc3QiLCJjdXJyZW50TXNnRWwiLCJuZXh0U2libGluZyIsImZpZWxkQ2xvc2UiLCJub3RGb3VuZCIsIm1zZ09iaiIsImNvbnRhaW5lciIsImZvcm1SZWYiLCJrZXlSZWdleCIsIiRmb3JtIiwiJGZvcm1FbGVtZW50cyIsImZvcm1PYmoiLCJzZXRGb3JtIiwic2V0Rm9ybUVsZW1lbnRzIiwic2V0Rm9ybU9iaiIsImdldEVsZW1lbnRCeUlkIiwiaXNEb21Ob2RlIiwibm9kZVR5cGUiLCJhcnIiLCJjYWxsYmFjayIsImkiLCJhZGRDaGlsZCIsInJlc3VsdCIsImRvbU5vZGUiLCJub2RlTmFtZSIsImNoZWNrZWQiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwiZGVmYXVsdCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsb0JBQW9CLEtBQUssK0dBQStHLHFCQUFxQixLQUFLLFdBQVcsaUVBQWlFLFVBQVUsTUFBTSxNQUFNLFVBQVUsc0ZBQXNGLG9CQUFvQixLQUFLLCtHQUErRyxxQkFBcUIsS0FBSyxPQUFPO0FBQy9rQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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NkIsSUFBaEMsRUFBc0MsY0FBdEMsRUFBc0QrSCxLQUFLLENBQUN6TCxJQUFELENBQTNEO0FBaENKO0FBa0NELEdBNUNEO0FBNkNEO0FBRUQ7Ozs7Ozs7OztBQU9BLE1BQU1XLGFBQWEsR0FBRyxVQUFVRSxPQUFWLEVBQW1CNEssS0FBbkIsRUFBMEJmLFFBQTFCLEVBQW9DZ0IsTUFBcEMsRUFBNEM7QUFDaEUvQixVQUFRLEdBQUcsRUFBWDtBQUNBNkIsV0FBUyxDQUFDM0ssT0FBRCxFQUFVNEssS0FBVixFQUFpQmYsUUFBakIsRUFBMkJnQixNQUEzQixDQUFUOztBQUNBLE1BQUkvQixRQUFRLENBQUN0RyxNQUFULEtBQW9CLENBQXhCLEVBQTJCLENBQ3pCO0FBQ0E7QUFDRDs7QUFDRCxTQUFPc0csUUFBUDtBQUNELENBUkQ7O0FBVUE1QyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyRyxhQUFqQixDOzs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMsNkpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRKQUE0RTs7QUFFOUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiW2RhdGEtZm9ybS1tZXNzYWdlXSB+IFtkYXRhLWZvcm0taGludF0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlzLWludmFsaWRbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyXT4uaW52YWxpZC1mZWVkYmFjayxcXHJcXG4uaXMtaW52YWxpZFtkYXRhLWZpZWxkXT4uaW52YWxpZC1mZWVkYmFjayB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxyXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmltcG9ydCBGb3JtVG9PYmplY3QgZnJvbSAnLi9mb3JtVG9PYmplY3QnO1xuaW1wb3J0IGZvcm1NZXNzYWdlcyBmcm9tICcuL2Zvcm1NZXNzYWdlcyc7XG5pbXBvcnQgaXRlcmF0ZUlucHV0cyBmcm9tICcuL2l0ZXJhdGVJbnB1dHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xuXG5cbi8qKlxuICogU3BpcmFsIEZvcm1zXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQGNvbnN0cnVjdG9yIEZvcm1cbiAqIEBleHRlbmRzIEJhc2VET01Db25zdHJ1Y3RvclxuICovXG5jb25zdCBGb3JtID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2NvbnN0cnVjdChzZiwgbm9kZSwgb3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbkZvcm0ucHJvdG90eXBlID0gY29yZS5jcmVhdGVNb2R1bGVQcm90b3R5cGUoKTtcblxuLyoqXG4gKiBOYW1lIHRvIHJlZ2lzdGVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Gb3JtLnByb3RvdHlwZS5uYW1lID0gJ2Zvcm0nO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Gb3JtLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucy5qc29uT25seSA9IHRoaXMub3B0aW9ucy5qc29uT25seSAmJiAhIXdpbmRvdy5Gb3JtRGF0YTtcbiAgdGhpcy5taXhNZXNzYWdlc09wdGlvbnMoKTtcbiAgLy8gdGhpcy5vcHRpb25zLmZpbGxGcm9tICYmIHRoaXMuZmlsbEZpZWxkc0Zyb20oKTsgLy8gaWQgcmVxdWlyZWQgdG8gZmlsbCBmb3JtXG5cbiAgLyoqXG4gICAgICogQGV4dGVuZHMgRE9NRXZlbnRzXG4gICAgICogQHR5cGUge0RPTUV2ZW50c31cbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqICovXG4gIHRoaXMuRE9NRXZlbnRzID0gbmV3IHRoaXMuc2YuaGVscGVycy5ET01FdmVudHMoKTtcbiAgdGhpcy5hZGRFdmVudHMoKTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyB0aGlzLnNmLmNvcmUuRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2Fsd2F5cyddKTtcbiAgY29yZS5pdGVyYXRlSW5wdXRzID0gaXRlcmF0ZUlucHV0cztcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge09iamVjdH1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkZvcm0ucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqIExpbmsgdG8gZm9ybVxuICAgICAqL1xuICBjb250ZXh0OiB7XG4gICAgcHJvY2Vzc29yKG5vZGUpIHsgLy8gUHJvY2Vzc29yXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBMaW5rIHRvICd0aGlzJ1xuICAgICAqL1xuICBzZWxmOiB7XG4gICAgcHJvY2Vzc29yKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbiAgaWQ6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICB2YWx1ZTogYGZvcm06JHtpZENvdW50ZXIrK31gLFxuICAgIGRvbUF0dHI6ICdpZCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIFVSTCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCIvXCI8L2I+XG4gICAgICovXG4gIHVybDoge1xuICAgIGRvbUF0dHI6ICdhY3Rpb24nLFxuICAgIHZhbHVlOiAnLycsXG4gIH0sXG4gIC8qKlxuICAgICAqIE1ldGhvZCB0byBzZW5kIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIlBPU1RcIjwvYj5cbiAgICAgKi9cbiAgbWV0aG9kOiB7XG4gICAgZG9tQXR0cjogJ21ldGhvZCcsXG4gICAgdmFsdWU6ICdQT1NUJyxcbiAgfSxcbiAgLyoqXG4gICAgICogTG9jayB0eXBlIHdoZW4gZm9ybSBzZW5kaW5nIDxiPkRlZmF1bHQ6IFwiZGVmYXVsdFwiPC9iPiBAc2VlIHNmLmxvY2tcbiAgICAgKi9cbiAgbG9ja1R5cGU6IHtcbiAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgIGRvbUF0dHI6ICdkYXRhLWxvY2stdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIEZvcmNlIHRvIG5vdCB1c2UgRm9ybURhdGEgZXZlbiBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAqL1xuICBqc29uT25seToge1xuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBkb21BdHRyOiAnZGF0YS1qc29uLW9ubHknLFxuICB9LFxuICAvKipcbiAgICAgKlxuICAgICAqL1xuICBtZXNzYWdlc1R5cGU6IHtcbiAgICB2YWx1ZTogJ3NwaXJhbCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbWVzc2FnZXMtdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIFBhc3MgY3VzdG9tIHRlbXBsYXRlIGZvciBmb3JtIG1lc3NhZ2VzXG4gICAgICovXG4gIG1lc3NhZ2VzOiB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtIEpTT04ucGFyc2UgZXJyb3I6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLnZhbHVlLCB2YWwpO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIFVzZSBhamF4IHRvIHN1Ym1pdCBmb3JtIDxiPkRlZmF1bHQ6IHRydWU8L2I+XG4gICAgICovXG4gIHVzZUFqYXg6IHsgLy8gQXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLXVzZS1hamF4JyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7IC8vIHByb2Nlc3NvciB0byBwcm9jZXNzIGRhdGEgYmVmb3JlIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkgPyB2YWwudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogQ2FsbGJhY2sgYWZ0ZXIgZm9ybSBzdWJtaXR0aW5nIDxiPkRlZmF1bHQ6IGZhbHNlPC9iPlxuICAgICAqIDxici8+XG4gICAgICogPGI+IEV4YW1wbGUgPC9iPlxuICAgICAqIGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgICAqICAvL29wdGlvbnMgY29udGFpbnMgYWxsIG9wdGlvbnMgYWZ0ZXIgc2VuZFxuICAgICAqIH1cbiAgICAgKi9cbiAgYWpheENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtY2FsbGJhY2snLFxuICB9LFxuICBiZWZvcmVTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWJlZm9yZS1zdWJtaXQnLFxuICB9LFxuICBhZnRlclN1Ym1pdENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtYWZ0ZXItc3VibWl0JyxcbiAgfSxcbiAgaGVhZGVyczogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiB7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1oZWFkZXJzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09IG51bGwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxufTtcblxuRm9ybS5wcm90b3R5cGUubWl4TWVzc2FnZXNPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWwgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzLmZvcm07XG4gIHRoaXMub3B0aW9ucy5tZXNzYWdlcyA9IHtcbiAgICAuLi5mb3JtTWVzc2FnZXMuZGVmYXVsdHMsXG4gICAgLi4uZ2xvYmFsICYmIGdsb2JhbC5tZXNzYWdlcyAmJiBnbG9iYWwubWVzc2FnZXNbdGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZV0sXG4gICAgLi4udGhpcy5vcHRpb25zLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuLyoqXG4gKiBDYWxsIG9uIGZvcm0gc3VibWl0XG4gKiBAcGFyYW0ge0V2ZW50fSBlIHN1Ym1pdCBldmVudFxuICovXG5Gb3JtLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICh0aGlzLnNmLmdldEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgIC8vIE9uIGxvY2sgd2Ugc2hvdWxkJ24gZG8gYW55IGFjdGlvbnNcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgdGhpcy5vcHRpb25zLmRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG5cbiAgLy8gV2UgY2FuIHNlbmQgZmlsZXMgb25seSB3aXRoIEZvcm1EYXRhXG4gIC8vIElmIGZvcm0gY29udGFpbiBmaWxlcyBhbmQgbm8gRm9ybURhdGEgdGhhbiBkaXNhYmxlIGFqYXhcbiAgaWYgKCF0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgdGhpcy5vcHRpb25zLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKS5sZW5ndGggIT09IDApIHtcbiAgICB0aGlzLm9wdGlvbnMudXNlQWpheCA9IGZhbHNlO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2JlZm9yZVNlbmQnLCB0aGlzLm9wdGlvbnMpO1xuICAvLyBzZi5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuICAvLyB0aGlzLmV2ZW50cy5wZXJmb3JtQWN0aW9uKFwiYmVmb3JlU3VibWl0XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy51c2VBamF4KSB7XG4gICAgdGhpcy5zZW5kKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBMb2NrZXIuIEFkZCBvciByZW1vdmUuXG4gKi9cbkZvcm0ucHJvdG90eXBlLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcbiAgaWYgKCFsb2NrKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byBhZGQgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub3B0aW9ucy5vblByb2dyZXNzID0gbG9jay5wcm9ncmVzcztcbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgdHJ5IHRvIHJlbW92ZSAnbG9jaycgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkXCIpO1xuICB9XG59O1xuXG4vLyBGb3JtIG1lc3NhZ2VzXG5Gb3JtLnByb3RvdHlwZS5zaG93Rm9ybU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0Zvcm1NZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRNZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkc01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZHNNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnNob3dNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93TWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZTtcblxuRm9ybS5wcm90b3R5cGUucHJvY2Vzc0Fuc3dlciA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGUpIHtcbiAgICB0aGlzLnNob3dNZXNzYWdlcyhhbnN3ZXIpO1xuICB9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5vcHRDYWxsYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChvcHRpb25zW3R5cGVdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCBmbiA9IGV2YWwob3B0aW9uc1t0eXBlXSk7XG4gICAgaWYgKHR5cGVvZiAoZm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZCBmb3JtIHRvIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlbmRPcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZE9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGlmICh0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYmVmb3JlU3VibWl0Q2FsbGJhY2snKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sb2NrKCk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEodGhpcy5vcHRpb25zLmNvbnRleHQpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGBGb3JtIFxcYCR7dGhpcy5vcHRpb25zLmNvbnRleHR9XFxgIHdlcmUgcHJvY2Vzc2VkIHdpdGhvdXQgRm9ybURhdGEuYCk7XG4gIHJldHVybiBuZXcgRm9ybVRvT2JqZWN0KHRoaXMub3B0aW9ucy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgKG92ZXJ3cml0ZSBjdXJyZW50KVxuICogQHBhcmFtIHtPYmplY3R9IG9wdCBvcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0KSB7XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHQpO1xufTtcblxuLyoqXG4gKiBBZGQgYWxsIGV2ZW50cyBmb3IgZm9ybXNcbiAqL1xuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgdGhpcy5ET01FdmVudHMuYWRkKFtcbiAgICB7XG4gICAgICBET01Ob2RlOiB0aGlzLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIGV2ZW50VHlwZTogJ3N1Ym1pdCcsXG4gICAgICBldmVudEZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhhdC5vblN1Ym1pdC5jYWxsKHRoYXQsIGUpO1xuICAgICAgfSxcbiAgICB9LFxuICBdKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkZvcm0ucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ET01FdmVudHMucmVtb3ZlQWxsKCk7XG4gIC8vIFRPRE8gZG9uJ3Qgd2UgbmVlZCB0byByZW1vdmUgaXQncyBhZGRvbnMgYW5kIHBsdWdpbnM/XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgLy8gdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiYWxlcnQgZm9ybS1tc2cgJHt0eXBlfVwiPjxidXR0b24gY2xhc3M9XCJidG4tY2xvc2VcIj7DlzwvYnV0dG9uPjxwIGNsYXNzPVwibXNnXCI+JHt0ZXh0fTwvcD48L2Rpdj4nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3R5cGV9IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPidcbiAgICArICcke3RleHR9J1xuICAgICsgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPidcbiAgICArICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPidcbiAgICArICc8L2J1dHRvbj4nXG4gICAgKyAnPC9kaXY+JyxcbiAgY2xvc2U6ICcuY2xvc2UnLFxuICBwbGFjZTogJ2JvdHRvbScsXG4gIGxldmVsczoge1xuICAgIHN1Y2Nlc3M6ICdzdWNjZXNzJywgaW5mbzogJ2luZm8nLCB3YXJuaW5nOiAnd2FybmluZycsIGVycm9yOiAnZGFuZ2VyJyxcbiAgfSxcbiAgc2VsZWN0b3I6ICdbZGF0YS1tZXNzYWdlXScsXG4gIGZpZWxkOiAnW2RhdGEtZmllbGRdJyxcbiAgZmllbGRFbGVtZW50OiAnW2RhdGEtaW5wdXRdJyxcbiAgZmllbGRUZW1wbGF0ZTogJzxkaXYgZGF0YS1tZXNzYWdlIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiIGRhdGEtZm9ybS1tZXNzYWdlPiR7dGV4dH08L2Rpdj4nLFxuICBmaWVsZFBsYWNlOiAnYm90dG9tJyxcbiAgZmllbGRDbGFzc2VzOiB7XG4gICAgc3VjY2VzczogJ2lzLXZhbGlkJywgaW5mbzogJ2lzLXZhbGlkJywgd2FybmluZzogJ2lzLWludmFsaWQnLCBlcnJvcjogJ2lzLWludmFsaWQnLFxuICB9LFxufTtcblxuLy8gT2Z0ZW4gdXNlZCBhbGlhc1xuZGVmYXVsdHMubGV2ZWxzLm1lc3NhZ2UgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcblxuLy8gT3RoZXIgYWxpYXNlc1xuLy8gUFNSLTMgc2V2ZXJpdHkgbGV2ZWxzIG1hcHBpbmcgKGRlYnVnLCBpbmZvLCBub3RpY2UsIHdhcm5pbmcsIGVycm9yLCBjcml0aWNhbCwgYWxlcnQsIGVtZXJnZW5jeSlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waHAtZmlnL2ZpZy1zdGFuZGFyZHMvYmxvYi9tYXN0ZXIvYWNjZXB0ZWQvUFNSLTMtbG9nZ2VyLWludGVyZmFjZS5tZFxuZGVmYXVsdHMubGV2ZWxzLmRlYnVnID0gZGVmYXVsdHMubGV2ZWxzLnN1Y2Nlc3M7XG5kZWZhdWx0cy5sZXZlbHMuaW5mbyA9IGRlZmF1bHRzLmxldmVscy5ub3RpY2UgPSBkZWZhdWx0cy5sZXZlbHMuaW5mbztcbmRlZmF1bHRzLmxldmVscy5kYW5nZXIgPSBkZWZhdWx0cy5sZXZlbHMuY3JpdGljYWwgPSBkZWZhdWx0cy5sZXZlbHMuYWxlcnQgPSBkZWZhdWx0cy5sZXZlbHMuZW1lcmdlbmN5ID0gZGVmYXVsdHMubGV2ZWxzLmVycm9yO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSkge1xuICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICdvYmplY3QnKSB7XG4gICAgbWVzc2FnZSA9IHsgdGV4dDogbWVzc2FnZSwgdHlwZSB9O1xuICB9XG4gIG1lc3NhZ2UudGV4dCA9IG1lc3NhZ2UudGV4dCB8fCBtZXNzYWdlLm1lc3NhZ2UgfHwgbWVzc2FnZTtcbiAgbWVzc2FnZS50eXBlID0gbWVzc2FnZS50eXBlIHx8IHR5cGU7XG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdHMsXG4gIHNob3dNZXNzYWdlcyhhbnN3ZXIpIHtcbiAgICBpZiAoIWFuc3dlcikgcmV0dXJuO1xuXG4gICAgbGV0IGlzTXNnID0gZmFsc2U7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAoYW5zd2VyLmRhdGEpIHtcbiAgICAgIC8vIGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIuZGF0YVt0eXBlXSkge1xuICAgICAgICAgIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGFuc3dlci5kYXRhW3R5cGVdLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzW3R5cGVdKTtcbiAgICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5zd2VyLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEubWVzc2FnZXMsICdzdWNjZXNzJyk7XG4gICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbnN3ZXIuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEuZXJyb3JzLCAnZXJyb3InKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLndhcm5pbmdzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLndhcm5pbmdzLCAnd2FybmluZycpO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc01zZykge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgaWYgKCFhbnN3ZXIuc3RhdHVzKSB7IC8vIE5ldHdvcmsuZXJyb3JcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXI7XG4gICAgICB9IGVsc2UgaWYgKGFuc3dlci5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXIuc3RhdHVzID8gYCR7YW5zd2VyLnN0YXR1c30gYCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5zdGF0dXNUZXh0IDogJyc7XG4gICAgICAgIGVycm9yICs9IGFuc3dlci5kYXRhICYmICFhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5kYXRhIDogJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IpIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGVycm9yLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzLmVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAobS5jbG9zZSkge1xuICAgICAgICBtLmNsb3NlSGFuZGxlciA9IHRoYXQucmVtb3ZlTWVzc2FnZS5iaW5kKHRoYXQsIG0pO1xuICAgICAgICBtLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2UobSwgZSkge1xuICAgIGlmIChtLmNsb3NlKSB7XG4gICAgICBtLmNsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgICBtLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobS5lbCk7XG4gICAgaWYgKG0uZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkRWwgPSBtLmZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG0uZmllbGQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW20udHlwZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VzLnNwbGljZSh0aGlzLl9tZXNzYWdlcy5pbmRleE9mKG0pLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VzKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIHRoYXQucmVtb3ZlTWVzc2FnZShtLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhhdC5fbWVzc2FnZXMgPSBbXTtcbiAgfSxcblxuICBzaG93Rm9ybU1lc3NhZ2UobWVzc2FnZSwgdHlwZSkge1xuICAgIGxldCBwYXJlbnQ7XG4gICAgbGV0IHRwbCA9IHRoaXMub3B0aW9ucy5tZXNzYWdlcy50ZW1wbGF0ZTtcblxuICAgIG1lc3NhZ2UgPSBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKTtcblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMubm9kZS5pbnNlcnRCZWZvcmUobXNnRWwsIHRoaXMubm9kZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7IGVsOiBtc2dFbCwgY2xvc2U6IG1zZ0VsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmNsb3NlKSB9KTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc0NvbnRhaW5lcl1cbiAgICAgKi9cbiAgc2hvd0ZpZWxkTWVzc2FnZShlbCwgbWVzc2FnZSwgdHlwZSwgaXNDb250YWluZXIpIHtcbiAgICBsZXQgZmllbGQgPSBpc0NvbnRhaW5lciA/IGVsIDogc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGQpO1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRUZW1wbGF0ZTtcblxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICBjb25zdCBmaWVsZEVsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICBjb25zdCBjdXJyZW50TXNnRWwgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5zZWxlY3Rvcik7XG5cbiAgICBpZiAoZmllbGRFbCkge1xuICAgICAgZmllbGRFbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH1cblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZC5pbnNlcnRCZWZvcmUobXNnRWwsIGZpZWxkRWwubmV4dFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIGlmICghY3VycmVudE1zZ0VsKSB7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAndG9wJykge1xuICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlKTtcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHtcbiAgICAgIGVsOiBtc2dFbCxcbiAgICAgIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsb3NlKSxcbiAgICAgIGZpZWxkLFxuICAgICAgdHlwZSxcbiAgICB9KTtcbiAgfSxcblxuICBzaG93RmllbGRzTWVzc2FnZXMobWVzc2FnZXMsIHR5cGUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCBtZXNzYWdlcywgKGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUpO1xuICAgIH0pO1xuXG4gICAgbm90Rm91bmQuZm9yRWFjaCgobXNnT2JqKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhtc2dPYmopLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhhdC5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXI9XCIke25hbWV9XCJdYCk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAvLyBUT0RPIGNoZWNrIGNvbnRhaW5lci5kYXRhc2V0Lm1lc3NhZ2VWYXJpYW50PyB2YXJpYW50cyBhcmUgXCJmaWVsZFwiIGFuZCBcImZvcm1cIlxuICAgICAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShjb250YWluZXIsIG1zZ09ialtuYW1lXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qXG4gKiBnaXRodWIuY29tL3NlcmJhbmdoaXRhL0Zvcm1Ub09iamVjdC5qcyAxLjAuMSAgKGMpIDIwMTMgU2VyYmFuIEdoaXRhIDxzZXJiYW5naGl0YUBnbWFpbC5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqL1xuLy8gQ29uc3RydWN0b3IuXG5cbmNvbnN0IEZvcm1Ub09iamVjdCA9IGZ1bmN0aW9uIChmb3JtUmVmKSB7XG4gIGlmICghZm9ybVJlZikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuZm9ybVJlZiA9IGZvcm1SZWY7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB0aGlzLmtleVJlZ2V4ID0gL1teXFxbXFxdXSsvZztcbiAgdGhpcy4kZm9ybSA9IG51bGw7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IFtdO1xuICB0aGlzLmZvcm1PYmogPSB7fTtcblxuICBpZiAoIXRoaXMuc2V0Rm9ybSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghdGhpcy5zZXRGb3JtRWxlbWVudHMoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnNldEZvcm1PYmooKTtcbn07XG5cbi8vIFNldCB0aGUgbWFpbiBmb3JtIG9iamVjdCB3ZSBhcmUgd29ya2luZyBvbi5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0eXBlb2YgdGhpcy5mb3JtUmVmKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHRoaXMuJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZvcm1SZWYpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHRoaXMuaXNEb21Ob2RlKHRoaXMuZm9ybVJlZikpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuZm9ybVJlZjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiB0aGlzLiRmb3JtO1xufTtcblxuLy8gU2V0IHRoZSBlbGVtZW50cyB3ZSBuZWVkIHRvIHBhcnNlLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5zZXRGb3JtRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgcmV0dXJuIHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7XG59O1xuXG4vLyBDaGVjayB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUwgbm9kZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuaXNEb21Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnbm9kZVR5cGUnIGluIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8vIEl0ZXJhdGlvbiB0aHJvdWdoIGFycmF5cyBhbmQgb2JqZWN0cy4gQ29tcGF0aWJsZSB3aXRoIElFLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGFyciwgY2FsbGJhY2spIHtcbiAgaWYgKFtdLmZvckVhY2gpIHtcbiAgICBbXS5mb3JFYWNoLmNhbGwoYXJyLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbGV0IGk7XG4gIC8vIGZvciAoaSBpbiBhcnIpIHtcbiAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSBpbnN0ZWFkIG9mIGFyci5oYXNPd25Qcm9wZXJ0eSBmb3IgSUU4IGNvbXBhdGliaWxpdHkuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcnIsIGkpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKGFyciwgYXJyW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gUmVjdXJzaXZlIG1ldGhvZCB0aGF0IGFkZHMga2V5cyBhbmQgdmFsdWVzIG9mIHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkcy5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAocmVzdWx0LCBkb21Ob2RlLCBrZXlzLCB2YWx1ZSkge1xuICAvLyAjMSAtIFNpbmdsZSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gV2UncmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSByYWRpbyB0aGF0IGlzIGNoZWNrZWQuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAoZG9tTm9kZS5jaGVja2VkKSB7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tib3hlcyBhcmUgYSBzcGVjaWFsIGNhc2UuIFdlIGhhdmUgdG8gZ3JhYiBlYWNoIGNoZWNrZWQgdmFsdWVzXG4gICAgLy8gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBpZiAoZG9tTm9kZS5jaGVja2VkKSB7XG4gICAgICAgIGlmICghcmVzdWx0W2tleXNdKSB7XG4gICAgICAgICAgcmVzdWx0W2tleXNdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleXNdLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTXVsdGlwbGUgc2VsZWN0IGlzIGEgc3BlY2lhbCBjYXNlLlxuICAgIC8vIFdlIGhhdmUgdG8gZ3JhYiBlYWNoIHNlbGVjdGVkIG9wdGlvbiBhbmQgcHV0IHRoZW0gaW50byBhbiBhcnJheS5cbiAgICBpZiAoZG9tTm9kZS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiYgZG9tTm9kZS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgcmVzdWx0W2tleXNdID0gW107XG4gICAgICBjb25zdCBET01jaGlsZHMgPSBkb21Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbltzZWxlY3RlZF0nKTtcbiAgICAgIGlmIChET01jaGlsZHMpIHtcbiAgICAgICAgdGhpcy5mb3JFYWNoKERPTWNoaWxkcywgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgcmVzdWx0W2tleXNdLnB1c2goY2hpbGQudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjay4gVGhlIGRlZmF1bHQgb25lIHRvIG9uZSBhc3NpZ24uXG4gICAgcmVzdWx0W2tleXNdID0gdmFsdWU7XG4gIH1cblxuICAvLyAjMiAtIE11bHRpIGRpbWVuc2lvbmFsIGFycmF5LlxuICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgaWYgKCFyZXN1bHRba2V5c1swXV0pIHtcbiAgICAgIHJlc3VsdFtrZXlzWzBdXSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2hpbGQocmVzdWx0W2tleXNbMF1dLCBkb21Ob2RlLCBrZXlzLnNwbGljZSgxLCBrZXlzLmxlbmd0aCksIHZhbHVlKTtcbiAgfVxuXG4gIC8vIHJldHVybiByZXN1bHQ7IC8vID9cbn07XG5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybU9iaiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlc3Q7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy4kZm9ybUVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlbGVtZW50IGlmIHRoZSAnbmFtZScgYXR0cmlidXRlIGlzIGVtcHR5LlxuICAgIC8vIElnbm9yZSB0aGUgJ2Rpc2FibGVkJyBlbGVtZW50cy5cbiAgICBpZiAodGhpcy4kZm9ybUVsZW1lbnRzW2ldLm5hbWUgJiYgIXRoaXMuJGZvcm1FbGVtZW50c1tpXS5kaXNhYmxlZCkge1xuICAgICAgdGVzdCA9IHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lLm1hdGNoKHRoaXMua2V5UmVnZXgpO1xuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvcm1PYmosIHRoaXMuJGZvcm1FbGVtZW50c1tpXSwgdGVzdCwgdGhpcy4kZm9ybUVsZW1lbnRzW2ldLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5mb3JtT2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtVG9PYmplY3Q7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKTtcbmNvbnN0IEZvcm0gPSByZXF1aXJlKCcuL0Zvcm0nKS5kZWZhdWx0O1xuXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShGb3JtLCAnanMtc2YtZm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8vIFBsdWdpbiBpbiBmb3JtTWVzc2FnZXMgdG8gaXRlcmF0ZSBmb3JtIGlucHV0c1xuXG4vLyBUT0RPIGNvbW1lbnQgYWxsIG9mIHRoaXNcbi8vIFRPRE8gYXNrIEBTeXN0ZXJyIHRoZSByZWFzb24gb2YgdmFyaWFibGUgJ3ByZWZpeCdcbmxldCBub3RGb3VuZCA9IFtdO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZWZpeF1cbiAqL1xuZnVuY3Rpb24gZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KSB7XG4gIC8vIGZvciAoY29uc3QgbmFtZSBpbiBuYW1lcykge1xuICBPYmplY3Qua2V5cyhuYW1lcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICBpZiAoIW5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFydE9mU2VsZWN0b3IgPSAocHJlZml4KSA/IGAke3ByZWZpeH1bJHtuYW1lfV1gIDogbmFtZTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5hbWVzW25hbWVdKTtcbiAgICBjb25zdCBzZWxlY3RvciA9IGBbbmFtZT0nJHtwYXJ0T2ZTZWxlY3Rvcn0nXWA7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1tvYmplY3QgT2JqZWN0XSc6XG4gICAgICAgIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lc1tuYW1lXSwgY2FsbGJhY2ssIHBhcnRPZlNlbGVjdG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6XG4gICAgICAgIG5hbWVzW25hbWVdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgLy8gVE9ETyByZWZhY3RvciB0aGlzIHNob3VsZCBjYWxsIHJlY3Vyc2l2ZVxuICAgICAgICAgIGNvbnN0IHNlbCA9IGBbbmFtZT0nJHtwYXJ0T2ZTZWxlY3Rvcn1bXSddW3ZhbHVlPScke2VsfSddYDtcbiAgICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5vdEZvdW5kLnB1c2goc2VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG5vZGVzLmxlbmd0aDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhub2Rlc1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgIG9ialtwYXJ0T2ZTZWxlY3Rvcl0gPSBuYW1lc1tuYW1lXTtcbiAgICAgICAgICBub3RGb3VuZC5wdXNoKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG5vZGVzLmxlbmd0aDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIG5hbWVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcigndW5rbm93biB0eXBlIC0nLCB0eXBlLCAnIGFuZCBtZXNzYWdlJywgbmFtZXNbbmFtZV0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKiBAcmV0dXJuIHtTdHJpbmdbXX1cbiAqL1xuY29uc3QgaXRlcmF0ZUlucHV0cyA9IGZ1bmN0aW9uIChjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICBub3RGb3VuZCA9IFtdO1xuICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpO1xuICBpZiAobm90Rm91bmQubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBjb25zb2xlLmxvZygnU29tZSBlbGVtZW50IG5vdCBmb3VuZCBpbiBmb3JtJywgbm90Rm91bmQpO1xuICB9XG4gIHJldHVybiBub3RGb3VuZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXRlcmF0ZUlucHV0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/LXVybCZzb3VyY2VNYXAhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "../locker/dist/locker.js":
/*!********************************!*\
  !*** ../locker/dist/locker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css":
      /*!**************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js");

        exports = ___CSS_LOADER_API_IMPORT___(true); // Module

        exports.push([module.i, ".locked .form-content {\r\n  pointer-events: none;\r\n  filter: blur(3px);\r\n  opacity: .7;\r\n}\r\n\r\n.locker {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,kBAAkB;AACpB",
          "file": "styles.css",
          "sourcesContent": [".locked .form-content {\r\n  pointer-events: none;\r\n  filter: blur(3px);\r\n  opacity: .7;\r\n}\r\n\r\n.locker {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n"]
        }]); // Exports

        module.exports = exports;
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names

        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)


        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
        /***/

      },

      /***/
      "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!*************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isOldIE = function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === 'undefined') {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(window && document && document.all && !window.atob);
            }

            return memo;
          };
        }();

        var getTarget = function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === 'undefined') {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        }();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3]
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === 'function') {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || 'head');

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */


        var replaceText = function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
          };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute('media', media);
          } else {
            style.removeAttribute('media');
          }

          if (sourceMap && btoa) {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          } // For old IE

          /* istanbul ignore if  */


          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update(obj = newObj);
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== '[object Array]') {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };
        /***/

      },

      /***/
      "./src/Lock.js":
      /*!*********************!*\
        !*** ./src/Lock.js ***!
        \*********************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
        /* eslint-disable func-names */

        /* eslint-disable no-underscore-dangle */

        /**
         * Spiral lock for forms
         * @constructor Lock
         */


        const Lock = function (sf, node, options) {
          this._construct(sf, node, options);
        };
        /**
         * @lends Lock.prototype
         */


        Lock.prototype = _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.createModulePrototype();
        /**
         * Name of module
         * @type {string}
         */

        Lock.prototype.name = 'lock';
        /**
         * Function that call on new instance is created.
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @private
         */

        Lock.prototype._construct = function (sf, node, options) {
          this.init(sf, node, options);
          this.progress = this.add(this.options.type, this.node);
        };
        /**
         * Add lock
         * @param {String} [type] type of lock @see sf.lock.types
         * @param {Object} context context to add lock
         * @return {Function|*}
         */


        Lock.prototype.add = function (type, context) {
          // eslint-disable-next-line no-prototype-builtins
          if (!this.types.hasOwnProperty(type)) {
            return false;
          }

          const node = document.createElement('div');
          node.classList.add(this.types[type].className || 'js-sf-lock');
          node.classList.add('locker');
          node.innerHTML = this.types[type].html;
          context.appendChild(node);
          context.classList.add('locked');
          return this.types[type].progress;
        };
        /**
         * Clear all variables and die
         */


        Lock.prototype.die = function () {
          this.remove();
        };
        /**
         * Remove lock
         * @return {boolean}
         */


        Lock.prototype.remove = function () {
          this.node.classList.remove('locked');
          const sfLock = this.node.querySelector('.js-sf-lock'); // TODO this.lockNode ?

          if (sfLock) {
            this.node.removeChild(sfLock);
          }

          return true;
        };
        /**
         * Object with lock types.
         * @enum {Object}
         */


        Lock.prototype.types = {
          /**
             * @type {Object}
             */
          spinner: {
            /**
                 * HTML
                 * @inner
                 * @type String
                 */
            html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
          },
          progress: {
            /**
                 * HTML
                 * @inner
                 * @type String
                 */
            html: '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div></div>',

            /**
                 * Function to change styles while AJAX progress
                 * @param {Number} current
                 * @param {Number} total
                 */
            progress(current, total) {
              const progress = this.context.getElementsByClassName('progress-bar')[0];
              progress.style.width = `${100 * (current / total)}%`;
            }

          }
        }; // We have to have some default locker, let it be spinner

        Lock.prototype.types.default = Lock.prototype.types.spinner;
        /* harmony default export */

        __webpack_exports__["default"] = Lock;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const Lock = __webpack_require__(
        /*! ./Lock */
        "./src/Lock.js").default;

        sf.registerInstanceType(Lock);
        module.exports = Lock; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/styles.css":
      /*!************************!*\
        !*** ./src/styles.css ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        content = content.__esModule ? content.default : content;

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;
        var update = api(content, options);
        var exported = content.locals ? content.locals : {};
        module.exports = exported;
        /***/
      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjBmOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiIl0sIm5hbWVzIjpbIkxvY2siLCJzZiIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsImNvcmUiLCJjcmVhdGVNb2R1bGVQcm90b3R5cGUiLCJuYW1lIiwiaW5pdCIsInByb2dyZXNzIiwiYWRkIiwidHlwZSIsImNvbnRleHQiLCJ0eXBlcyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaHRtbCIsImFwcGVuZENoaWxkIiwiZGllIiwicmVtb3ZlIiwic2ZMb2NrIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUNoaWxkIiwic3Bpbm5lciIsImN1cnJlbnQiLCJ0b3RhbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiZGVmYXVsdCIsInJlcXVpcmUiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3Mi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QWVDLEtBQWYsR0FBd0IsR0FBRSxPQUFPSixPQUFPLEdBQUdDLEtBQWpCLENBQXdCLEdBQWxEO0FBQ0Q7O0FBZk87QUFaVyxDQUF2QixDLENBK0JBOztBQUNBOUIsSUFBSSxDQUFDSyxTQUFMLENBQWVTLEtBQWYsQ0FBcUJvQixPQUFyQixHQUErQmxDLElBQUksQ0FBQ0ssU0FBTCxDQUFlUyxLQUFmLENBQXFCYyxPQUFwRDtBQUdlNUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqSEEsTUFBTUMsRUFBRSxHQUFHa0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFsQjs7QUFDQSxNQUFNbkMsSUFBSSxHQUFHbUMsbUJBQU8sQ0FBQyw2QkFBRCxDQUFQLENBQWtCRCxPQUEvQjs7QUFFQWpDLEVBQUUsQ0FBQ21DLG9CQUFILENBQXdCcEMsSUFBeEI7QUFFQXFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLElBQWpCLEMsQ0FBdUIsa0Q7Ozs7Ozs7Ozs7O0FDTnZCLFVBQVUsbUJBQU8sQ0FBQyw2SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNEpBQTRFOztBQUU5Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0UiLCJmaWxlIjoibG9ja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvbG9ja2VyXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9sb2NrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQHNwaXJhbC10b29sa2l0L2xvY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3BhY2l0eTogLjc7XFxyXFxufVxcclxcblxcclxcbi5sb2NrZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3BhY2l0eTogLjc7XFxyXFxufVxcclxcblxcclxcbi5sb2NrZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBTcGlyYWwgbG9jayBmb3IgZm9ybXNcbiAqIEBjb25zdHJ1Y3RvciBMb2NrXG4gKi9cblxuY29uc3QgTG9jayA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBAbGVuZHMgTG9jay5wcm90b3R5cGVcbiAqL1xuTG9jay5wcm90b3R5cGUgPSBjb3JlLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSgpO1xuXG4vKipcbiAqIE5hbWUgb2YgbW9kdWxlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Mb2NrLnByb3RvdHlwZS5uYW1lID0gJ2xvY2snO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Mb2NrLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmFkZCh0aGlzLm9wdGlvbnMudHlwZSwgdGhpcy5ub2RlKTtcbn07XG5cbi8qKlxuICogQWRkIGxvY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdHlwZV0gdHlwZSBvZiBsb2NrIEBzZWUgc2YubG9jay50eXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgY29udGV4dCB0byBhZGQgbG9ja1xuICogQHJldHVybiB7RnVuY3Rpb258Kn1cbiAqL1xuTG9jay5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHR5cGUsIGNvbnRleHQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAoIXRoaXMudHlwZXMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTGlzdC5hZGQodGhpcy50eXBlc1t0eXBlXS5jbGFzc05hbWUgfHwgJ2pzLXNmLWxvY2snKTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdsb2NrZXInKTtcbiAgbm9kZS5pbm5lckhUTUwgPSB0aGlzLnR5cGVzW3R5cGVdLmh0bWw7XG4gIGNvbnRleHQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIGNvbnRleHQuY2xhc3NMaXN0LmFkZCgnbG9ja2VkJyk7XG4gIHJldHVybiB0aGlzLnR5cGVzW3R5cGVdLnByb2dyZXNzO1xufTtcbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkxvY2sucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZW1vdmUoKTtcbn07XG4vKipcbiAqIFJlbW92ZSBsb2NrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Mb2NrLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrZWQnKTtcbiAgY29uc3Qgc2ZMb2NrID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZi1sb2NrJyk7IC8vIFRPRE8gdGhpcy5sb2NrTm9kZSA/XG4gIGlmIChzZkxvY2spIHtcbiAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoc2ZMb2NrKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIE9iamVjdCB3aXRoIGxvY2sgdHlwZXMuXG4gKiBAZW51bSB7T2JqZWN0fVxuICovXG5Mb2NrLnByb3RvdHlwZS50eXBlcyA9IHtcbiAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgc3Bpbm5lcjoge1xuICAgIC8qKlxuICAgICAgICAgKiBIVE1MXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPjwvZGl2PicsXG4gIH0sXG4gIHByb2dyZXNzOiB7XG4gICAgLyoqXG4gICAgICAgICAqIEhUTUxcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB0byBjaGFuZ2Ugc3R5bGVzIHdoaWxlIEFKQVggcHJvZ3Jlc3NcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cnJlbnRcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsXG4gICAgICAgICAqL1xuICAgIHByb2dyZXNzKGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9ncmVzcy1iYXInKVswXTtcbiAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7MTAwICogKGN1cnJlbnQgLyB0b3RhbCl9JWA7XG4gICAgfSxcbiAgfSxcbn07XG5cbi8vIFdlIGhhdmUgdG8gaGF2ZSBzb21lIGRlZmF1bHQgbG9ja2VyLCBsZXQgaXQgYmUgc3Bpbm5lclxuTG9jay5wcm90b3R5cGUudHlwZXMuZGVmYXVsdCA9IExvY2sucHJvdG90eXBlLnR5cGVzLnNwaW5uZXI7XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9jaztcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuY29uc3QgTG9jayA9IHJlcXVpcmUoJy4vTG9jaycpLmRlZmF1bHQ7XG5cbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKExvY2spO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2s7IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const core = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");

__webpack_require__(/*! ./input */ "./src/input/index.js");

__webpack_require__(/*! @spiral-toolkit/locker */ "../locker/dist/locker.js");

__webpack_require__(/*! @spiral-toolkit/form */ "../form/dist/form.js");

__webpack_require__(/*! @spiral-toolkit/datagrid */ "../datagrid/dist/datagrid.js");

module.exports = core;

/***/ }),

/***/ "./src/input/index.js":
/*!****************************!*\
  !*** ./src/input/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sf = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");

const Input = __webpack_require__(/*! ./input */ "./src/input/input.js").default;

sf.instancesController.registerInstanceType(Input, 'sf-js-input');
module.exports = Input; // ES6 default export will not expose us as global

/***/ }),

/***/ "./src/input/input.js":
/*!****************************!*\
  !*** ./src/input/input.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-console */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable func-names */


const Input = function (sf, node, options) {
  this._construct(sf, node, options);
};
/**
 * @lends sf.Form.prototype
 */


Input.prototype = Object.create(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor.prototype);
/**
 * Name to register
 * @type {string}
 */

Input.prototype.name = 'input';

Input.prototype._construct = function (sf, node, options) {
  this.init(sf, node, options); // call parent

  if (options) {
    // if we pass options extend all options by passed options
    this.options = sf.tools.extend(this.options, options);
  } // Elements


  this.els = {
    node
  };

  if (this.options.prefix) {
    this.setPrefix();
    this.addPrefixEventListeners();
  } else if (this.options.pattern) {
    this.setupPattern();
    this.addPatternEventListeners();
  }
};
/**
 * @override
 * @inheritDoc
 * @enum {string}
 */


Input.prototype.optionsToGrab = {
  /**
     *  Pattern of input
     */
  pattern: {
    domAttr: 'data-pattern'
  },

  /**
     *  Prefix of  input
     */
  prefix: {
    domAttr: 'data-prefix'
  }
};
/**
 * Setup pattern
 * @return {HTMLElement}
 */

Input.prototype.isValidPattern = function () {
  return this.els.node.value.match(this.pattern);
};

Input.prototype.addPatternEventListeners = function () {
  const that = this;

  this._inputKeyPress = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const {
      value
    } = that.els.node;
    const position = that.getCursorPosition();

    if (char.length > 0) {
      event.preventDefault();
      let offset = 1;

      for (let i = position; i < value.length; i += 1) {
        if (that.formatCharacters.indexOf(value[i]) !== -1) {
          offset += 1;
        } else {
          break;
        }
      }

      const futureValue = value.substring(0, position + offset - 1) + char + value.substring(position + offset, value.length);

      if (!futureValue.match(that.patternWithEmpty)) {
        return false;
      }

      that.els.node.value = futureValue;
      that.setCursorPosition(position + offset);
      return false;
    }

    return true;
  };

  this.els.node.addEventListener('keypress', this._inputKeyPress);

  this._inputFocus = function (event) {
    event.preventDefault();
    setTimeout(() => {
      if (that.els.node.value === '') {
        // eslint-disable-next-line no-useless-escape
        that.els.node.value = that.patternString.replace(/[^\-\(\)\[\]\:\.\,\$\%\@\ \/]/g, '_');
        that.setCursorPosition(0);
      }
    }, 0);
  };

  this.els.node.addEventListener('focus', this._inputFocus);

  this._inputKeyDown = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const {
      value
    } = that.els.node;
    const position = that.getCursorPosition();

    if (event.keyCode === 8 || event.keyCode === 46) {
      event.preventDefault();
      let offset = 0;

      for (let i = position - 1; i > 0; i -= 1) {
        if (that.formatCharacters.indexOf(value[i]) !== -1) {
          offset -= 1;
        } else {
          break;
        }
      }

      const futureValue = `${value.substring(0, position + offset - 1)}_${value.substring(position + offset, value.length)}`;

      if (!futureValue.match(that.patternWithEmpty)) {
        return false;
      }

      console.log(futureValue);
      that.els.node.value = futureValue;
      that.setCursorPosition(position + offset - 1);
      return false;
    }

    if (char.match(/\W/)) {
      return false;
    }

    return true;
  };

  this.els.node.addEventListener('keydown', this._inputKeyDown);

  this._inputBlur = function () {
    if (!that.els.node.value.match(that.pattern)) {
      that.els.node.value = '';
    }
  };

  this.els.node.addEventListener('blur', this._inputBlur);
};

Input.prototype.getCursorPosition = function () {
  let position = 0;

  if (document.selection) {
    this.els.node.focus();
    const selectRange = document.selection.createRange();
    selectRange.moveStart('character', -this.els.node.value.length);
    position = selectRange.text.length;
  } else if (this.els.node.selectionStart || this.els.node.selectionStart === '0') {
    position = this.els.node.selectionStart;
  }

  return position;
};

Input.prototype.setCursorPosition = function (position) {
  if (this.els.node.createTextRange) {
    const range = this.els.node.createTextRange();
    range.move('character', position);
    range.select();
  } else if (this.els.node.selectionStart) {
    this.els.node.focus();
    this.els.node.selectionStart = position;
    this.els.node.selectionEnd = position;
  } else {
    this.els.node.focus();
  }
};

Input.prototype.setupPattern = function () {
  this.formatCharacters = this.els.node.getAttribute('data-format-characters') || '-()[]:.,$%@ /';
  this.patternString = this.options.pattern;
  this.els.node.placeholder = this.patternString;

  const _initPattern = function () {
    let formattedPatternStr = '';
    let formattedPatternWithEmptyStr = '';

    for (let i = 0; i < this.patternString.length; i += 1) {
      const char = this.patternString[i];

      if (this.formatCharacters.indexOf(char) >= 0) {
        formattedPatternStr += char;
        formattedPatternWithEmptyStr += char;
      } else if (char.match(/[0-9]/)) {
        formattedPatternStr += '[0-9]';
        formattedPatternWithEmptyStr += '([0-9]|_)';
      } else if (char.match(/[a-zA-Z]/)) {
        formattedPatternStr += '[a-zA-Z]';
        formattedPatternWithEmptyStr += '([a-zA-Z]|_)';
      } else if (char === '*') {
        formattedPatternStr += '[0-9a-zA-Z]';
        formattedPatternWithEmptyStr += '([0-9a-zA-Z]|_)';
      }
    }

    this.pattern = new RegExp(`^${formattedPatternStr}$`, 'g');
    this.patternWithEmpty = new RegExp(`^${formattedPatternWithEmptyStr}$`, 'g');
  }.bind(this);

  _initPattern();
};
/**
 * Adds static events listeners.
 */


Input.prototype.addPrefixEventListeners = function () {
  const that = this;

  this._inputKeyup = function () {
    const oldValue = this.getAttribute('data-prefix');

    if (that.els.node.value.indexOf(oldValue) !== 0) {
      that.els.node.value = `${oldValue} `;
    }
  };

  if (this.els.node) {
    this.els.node.addEventListener('keyup', this._inputKeyup);
  }
};

Input.prototype.removePatternEventListeners = function () {
  if (this.els.node) {
    this.els.node.addEventListener('keypress', this._inputKeyPress);
    this.els.node.addEventListener('focus', this._inputFocus);
    this.els.node.addEventListener('keydown', this._inputKeyDown);
    this.els.node.addEventListener('blur', this._inputBlur);
  }
};

Input.prototype.removePrefixEventListeners = function () {
  if (this.els.node) {
    this.els.node.removeEventListener('keyup', this._inputKeyup);
  }
};

Input.prototype.die = function () {
  if (this.options.pattern) {
    this.removePatternEventListeners();
  } else if (this.options.prefix) {
    this.removePrefixEventListeners();
  }

  delete this;
};

Input.prototype.setPrefix = function () {
  this.els.node.value = `${this.options.prefix} ${this.els.node.value}`;
};



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL0RhdGFncmlkLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9EYXRhZ3JpZFN0YXRlLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvR3JpZFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEJvZHlXcmFwcGVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEZvb3RlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEhlYWRlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93V3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRUYWJsZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrOi9TRkRhdGFHcmlkL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJjb3JlIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZiIsIklucHV0IiwiZGVmYXVsdCIsImluc3RhbmNlc0NvbnRyb2xsZXIiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIkJhc2VET01Db25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0IiwidG9vbHMiLCJleHRlbmQiLCJlbHMiLCJwcmVmaXgiLCJzZXRQcmVmaXgiLCJhZGRQcmVmaXhFdmVudExpc3RlbmVycyIsInBhdHRlcm4iLCJzZXR1cFBhdHRlcm4iLCJhZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMiLCJvcHRpb25zVG9HcmFiIiwiZG9tQXR0ciIsImlzVmFsaWRQYXR0ZXJuIiwidmFsdWUiLCJtYXRjaCIsInRoYXQiLCJfaW5wdXRLZXlQcmVzcyIsImV2ZW50IiwiY2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJwb3NpdGlvbiIsImdldEN1cnNvclBvc2l0aW9uIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJpIiwiZm9ybWF0Q2hhcmFjdGVycyIsImluZGV4T2YiLCJmdXR1cmVWYWx1ZSIsInN1YnN0cmluZyIsInBhdHRlcm5XaXRoRW1wdHkiLCJzZXRDdXJzb3JQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaW5wdXRGb2N1cyIsInNldFRpbWVvdXQiLCJwYXR0ZXJuU3RyaW5nIiwicmVwbGFjZSIsIl9pbnB1dEtleURvd24iLCJjb25zb2xlIiwibG9nIiwiX2lucHV0Qmx1ciIsImRvY3VtZW50Iiwic2VsZWN0aW9uIiwiZm9jdXMiLCJzZWxlY3RSYW5nZSIsImNyZWF0ZVJhbmdlIiwibW92ZVN0YXJ0IiwidGV4dCIsInNlbGVjdGlvblN0YXJ0IiwiY3JlYXRlVGV4dFJhbmdlIiwicmFuZ2UiLCJtb3ZlIiwic2VsZWN0Iiwic2VsZWN0aW9uRW5kIiwiZ2V0QXR0cmlidXRlIiwicGxhY2Vob2xkZXIiLCJfaW5pdFBhdHRlcm4iLCJmb3JtYXR0ZWRQYXR0ZXJuU3RyIiwiZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciIsIlJlZ0V4cCIsImJpbmQiLCJfaW5wdXRLZXl1cCIsIm9sZFZhbHVlIiwicmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGllIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0F3QkFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFwQjs7QUFFQUEsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLHdEQUFELENBQVA7O0FBQ0FBLG1C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QUcsS0FBS0QsR0FBTCxDQUFTWCxJQUFULENBQWNxQixLQUFNLEVBQXBFO0FBQ0QsQ0FGRCIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTRlRvb2xraXRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZFwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvZGF0YWdyaWRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0ZEYXRhR3JpZFwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gY29tcGFyZSBhbmQgaXNCdWZmZXIgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9ibG9iLzY4MGU5ZTVlNDg4ZjIyYWFjMjc1OTlhNTdkYzg0NGE2MzE1OTI4ZGQvaW5kZXguanNcbi8vIG9yaWdpbmFsIG5vdGljZTpcblxuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgeCA9IGEubGVuZ3RoO1xuICB2YXIgeSA9IGIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldO1xuICAgICAgeSA9IGJbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBpc0J1ZmZlcihiKSB7XG4gIGlmIChnbG9iYWwuQnVmZmVyICYmIHR5cGVvZiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIoYik7XG4gIH1cbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcik7XG59XG5cbi8vIGJhc2VkIG9uIG5vZGUgYXNzZXJ0LCBvcmlnaW5hbCBub3RpY2U6XG4vLyBOQjogVGhlIFVSTCB0byB0aGUgQ29tbW9uSlMgc3BlYyBpcyBrZXB0IGp1c3QgZm9yIHRyYWRpdGlvbi5cbi8vICAgICBub2RlLWFzc2VydCBoYXMgZXZvbHZlZCBhIGxvdCBzaW5jZSB0aGVuLCBib3RoIGluIEFQSSBhbmQgYmVoYXZpb3IuXG5cbi8vIGh0dHA6Ly93aWtpLmNvbW1vbmpzLm9yZy93aWtpL1VuaXRfVGVzdGluZy8xLjBcbi8vXG4vLyBUSElTIElTIE5PVCBURVNURUQgTk9SIExJS0VMWSBUTyBXT1JLIE9VVFNJREUgVjghXG4vL1xuLy8gT3JpZ2luYWxseSBmcm9tIG5hcndoYWwuanMgKGh0dHA6Ly9uYXJ3aGFsanMub3JnKVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IFRob21hcyBSb2JpbnNvbiA8Mjgwbm9ydGguY29tPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0b1xuLy8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbi8vIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuLy8gc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwvJyk7XG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbygpIHt9Lm5hbWUgPT09ICdmb28nO1xufSgpKTtcbmZ1bmN0aW9uIHBUb1N0cmluZyAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzVmlldyhhcnJidWYpIHtcbiAgaWYgKGlzQnVmZmVyKGFycmJ1ZikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwuQXJyYXlCdWZmZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycmJ1Zik7XG4gIH1cbiAgaWYgKCFhcnJidWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFycmJ1ZiBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGFycmJ1Zi5idWZmZXIgJiYgYXJyYnVmLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gMS4gVGhlIGFzc2VydCBtb2R1bGUgcHJvdmlkZXMgZnVuY3Rpb25zIHRoYXQgdGhyb3dcbi8vIEFzc2VydGlvbkVycm9yJ3Mgd2hlbiBwYXJ0aWN1bGFyIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuIFRoZVxuLy8gYXNzZXJ0IG1vZHVsZSBtdXN0IGNvbmZvcm0gdG8gdGhlIGZvbGxvd2luZyBpbnRlcmZhY2UuXG5cbnZhciBhc3NlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IG9rO1xuXG4vLyAyLiBUaGUgQXNzZXJ0aW9uRXJyb3IgaXMgZGVmaW5lZCBpbiBhc3NlcnQuXG4vLyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHsgbWVzc2FnZTogbWVzc2FnZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQgfSlcblxudmFyIHJlZ2V4ID0gL1xccypmdW5jdGlvblxccysoW15cXChcXHNdKilcXHMqLztcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvZnVuY3Rpb24ucHJvdG90eXBlLm5hbWUvYmxvYi9hZGVlZWVjOGJmY2M2MDY4YjE4N2Q3ZDlmYjNkNWJiMWQzYTMwODk5L2ltcGxlbWVudGF0aW9uLmpzXG5mdW5jdGlvbiBnZXROYW1lKGZ1bmMpIHtcbiAgaWYgKCF1dGlsLmlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcykge1xuICAgIHJldHVybiBmdW5jLm5hbWU7XG4gIH1cbiAgdmFyIHN0ciA9IGZ1bmMudG9TdHJpbmcoKTtcbiAgdmFyIG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuYXNzZXJ0LkFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuICB0aGlzLmFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsO1xuICB0aGlzLmV4cGVjdGVkID0gb3B0aW9ucy5leHBlY3RlZDtcbiAgdGhpcy5vcGVyYXRvciA9IG9wdGlvbnMub3BlcmF0b3I7XG4gIGlmIChvcHRpb25zLm1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tZXNzYWdlID0gZ2V0TWVzc2FnZSh0aGlzKTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG4gIHZhciBzdGFja1N0YXJ0RnVuY3Rpb24gPSBvcHRpb25zLnN0YWNrU3RhcnRGdW5jdGlvbiB8fCBmYWlsO1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIG5vbiB2OCBicm93c2VycyBzbyB3ZSBjYW4gaGF2ZSBhIHN0YWNrdHJhY2VcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgdmFyIG91dCA9IGVyci5zdGFjaztcblxuICAgICAgLy8gdHJ5IHRvIHN0cmlwIHVzZWxlc3MgZnJhbWVzXG4gICAgICB2YXIgZm5fbmFtZSA9IGdldE5hbWUoc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgICAgIHZhciBpZHggPSBvdXQuaW5kZXhPZignXFxuJyArIGZuX25hbWUpO1xuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSBsb2NhdGVkIHRoZSBmdW5jdGlvbiBmcmFtZVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIG91dCBldmVyeXRoaW5nIGJlZm9yZSBpdCAoYW5kIGl0cyBsaW5lKVxuICAgICAgICB2YXIgbmV4dF9saW5lID0gb3V0LmluZGV4T2YoJ1xcbicsIGlkeCArIDEpO1xuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKG5leHRfbGluZSArIDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YWNrID0gb3V0O1xuICAgIH1cbiAgfVxufTtcblxuLy8gYXNzZXJ0LkFzc2VydGlvbkVycm9yIGluc3RhbmNlb2YgRXJyb3JcbnV0aWwuaW5oZXJpdHMoYXNzZXJ0LkFzc2VydGlvbkVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHMsIG4pIHtcbiAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzLmxlbmd0aCA8IG4gPyBzIDogcy5zbGljZSgwLCBuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuZnVuY3Rpb24gaW5zcGVjdChzb21ldGhpbmcpIHtcbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyB8fCAhdXRpbC5pc0Z1bmN0aW9uKHNvbWV0aGluZykpIHtcbiAgICByZXR1cm4gdXRpbC5pbnNwZWN0KHNvbWV0aGluZyk7XG4gIH1cbiAgdmFyIHJhd25hbWUgPSBnZXROYW1lKHNvbWV0aGluZyk7XG4gIHZhciBuYW1lID0gcmF3bmFtZSA/ICc6ICcgKyByYXduYW1lIDogJyc7XG4gIHJldHVybiAnW0Z1bmN0aW9uJyArICBuYW1lICsgJ10nO1xufVxuZnVuY3Rpb24gZ2V0TWVzc2FnZShzZWxmKSB7XG4gIHJldHVybiB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuYWN0dWFsKSwgMTI4KSArICcgJyArXG4gICAgICAgICBzZWxmLm9wZXJhdG9yICsgJyAnICtcbiAgICAgICAgIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5leHBlY3RlZCksIDEyOCk7XG59XG5cbi8vIEF0IHByZXNlbnQgb25seSB0aGUgdGhyZWUga2V5cyBtZW50aW9uZWQgYWJvdmUgYXJlIHVzZWQgYW5kXG4vLyB1bmRlcnN0b29kIGJ5IHRoZSBzcGVjLiBJbXBsZW1lbnRhdGlvbnMgb3Igc3ViIG1vZHVsZXMgY2FuIHBhc3Ncbi8vIG90aGVyIGtleXMgdG8gdGhlIEFzc2VydGlvbkVycm9yJ3MgY29uc3RydWN0b3IgLSB0aGV5IHdpbGwgYmVcbi8vIGlnbm9yZWQuXG5cbi8vIDMuIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuICBBbGwgYXNzZXJ0aW9uIG1ldGhvZHMgcHJvdmlkZVxuLy8gYm90aCB0aGUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgdG8gdGhlIGFzc2VydGlvbiBlcnJvciBmb3Jcbi8vIGRpc3BsYXkgcHVycG9zZXMuXG5cbmZ1bmN0aW9uIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgb3BlcmF0b3IsIHN0YWNrU3RhcnRGdW5jdGlvbikge1xuICB0aHJvdyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHtcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIGFjdHVhbDogYWN0dWFsLFxuICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICBvcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZ1bmN0aW9uOiBzdGFja1N0YXJ0RnVuY3Rpb25cbiAgfSk7XG59XG5cbi8vIEVYVEVOU0lPTiEgYWxsb3dzIGZvciB3ZWxsIGJlaGF2ZWQgZXJyb3JzIGRlZmluZWQgZWxzZXdoZXJlLlxuYXNzZXJ0LmZhaWwgPSBmYWlsO1xuXG4vLyA0LiBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIWd1YXJkLlxuLy8gYXNzZXJ0Lm9rKGd1YXJkLCBtZXNzYWdlX29wdCk7XG4vLyBUaGlzIHN0YXRlbWVudCBpcyBlcXVpdmFsZW50IHRvIGFzc2VydC5lcXVhbCh0cnVlLCAhIWd1YXJkLFxuLy8gbWVzc2FnZV9vcHQpOy4gVG8gdGVzdCBzdHJpY3RseSBmb3IgdGhlIHZhbHVlIHRydWUsIHVzZVxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHRydWUsIGd1YXJkLCBtZXNzYWdlX29wdCk7LlxuXG5mdW5jdGlvbiBvayh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQub2spO1xufVxuYXNzZXJ0Lm9rID0gb2s7XG5cbi8vIDUuIFRoZSBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc2hhbGxvdywgY29lcmNpdmUgZXF1YWxpdHkgd2l0aFxuLy8gPT0uXG4vLyBhc3NlcnQuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT0gZXhwZWN0ZWQpIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09JywgYXNzZXJ0LmVxdWFsKTtcbn07XG5cbi8vIDYuIFRoZSBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciB3aGV0aGVyIHR3byBvYmplY3RzIGFyZSBub3QgZXF1YWxcbi8vIHdpdGggIT0gYXNzZXJ0Lm5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdEVxdWFsID0gZnVuY3Rpb24gbm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT0nLCBhc3NlcnQubm90RXF1YWwpO1xuICB9XG59O1xuXG4vLyA3LiBUaGUgZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGEgZGVlcCBlcXVhbGl0eSByZWxhdGlvbi5cbi8vIGFzc2VydC5kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBFcXVhbCcsIGFzc2VydC5kZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsID0gZnVuY3Rpb24gZGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcFN0cmljdEVxdWFsJywgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcykge1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICYmIGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBjb21wYXJlKGFjdHVhbCwgZXhwZWN0ZWQpID09PSAwO1xuXG4gIC8vIDcuMi4gSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgRGF0ZSBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgRGF0ZSBvYmplY3QgdGhhdCByZWZlcnMgdG8gdGhlIHNhbWUgdGltZS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzRGF0ZShhY3R1YWwpICYmIHV0aWwuaXNEYXRlKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgUmVnRXhwIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNvdXJjZSBhbmRcbiAgLy8gcHJvcGVydGllcyAoYGdsb2JhbGAsIGBtdWx0aWxpbmVgLCBgbGFzdEluZGV4YCwgYGlnbm9yZUNhc2VgKS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzUmVnRXhwKGFjdHVhbCkgJiYgdXRpbC5pc1JlZ0V4cChleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLnNvdXJjZSA9PT0gZXhwZWN0ZWQuc291cmNlICYmXG4gICAgICAgICAgIGFjdHVhbC5nbG9iYWwgPT09IGV4cGVjdGVkLmdsb2JhbCAmJlxuICAgICAgICAgICBhY3R1YWwubXVsdGlsaW5lID09PSBleHBlY3RlZC5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgYWN0dWFsLmxhc3RJbmRleCA9PT0gZXhwZWN0ZWQubGFzdEluZGV4ICYmXG4gICAgICAgICAgIGFjdHVhbC5pZ25vcmVDYXNlID09PSBleHBlY3RlZC5pZ25vcmVDYXNlO1xuXG4gIC8vIDcuNC4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICgoYWN0dWFsID09PSBudWxsIHx8IHR5cGVvZiBhY3R1YWwgIT09ICdvYmplY3QnKSAmJlxuICAgICAgICAgICAgIChleHBlY3RlZCA9PT0gbnVsbCB8fCB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBzdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIElmIGJvdGggdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgdHlwZWQgYXJyYXlzLCB3cmFwIHRoZWlyIHVuZGVybHlpbmdcbiAgLy8gQXJyYXlCdWZmZXJzIGluIGEgQnVmZmVyIGVhY2ggdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgLy8gVGhpcyBvcHRpbWl6YXRpb24gcmVxdWlyZXMgdGhlIGFycmF5cyB0byBoYXZlIHRoZSBzYW1lIHR5cGUgYXMgY2hlY2tlZCBieVxuICAvLyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIChha2EgcFRvU3RyaW5nKS4gTmV2ZXIgcGVyZm9ybSBiaW5hcnlcbiAgLy8gY29tcGFyaXNvbnMgZm9yIEZsb2F0KkFycmF5cywgdGhvdWdoLCBzaW5jZSBlLmcuICswID09PSAtMCBidXQgdGhlaXJcbiAgLy8gYml0IHBhdHRlcm5zIGFyZSBub3QgaWRlbnRpY2FsLlxuICB9IGVsc2UgaWYgKGlzVmlldyhhY3R1YWwpICYmIGlzVmlldyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICBwVG9TdHJpbmcoYWN0dWFsKSA9PT0gcFRvU3RyaW5nKGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgICEoYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8XG4gICAgICAgICAgICAgICBhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXkpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYWN0dWFsLmJ1ZmZlciksXG4gICAgICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoZXhwZWN0ZWQuYnVmZmVyKSkgPT09IDA7XG5cbiAgLy8gNy41IEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICE9PSBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbWVtb3MgPSBtZW1vcyB8fCB7YWN0dWFsOiBbXSwgZXhwZWN0ZWQ6IFtdfTtcblxuICAgIHZhciBhY3R1YWxJbmRleCA9IG1lbW9zLmFjdHVhbC5pbmRleE9mKGFjdHVhbCk7XG4gICAgaWYgKGFjdHVhbEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKGFjdHVhbEluZGV4ID09PSBtZW1vcy5leHBlY3RlZC5pbmRleE9mKGV4cGVjdGVkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vcy5hY3R1YWwucHVzaChhY3R1YWwpO1xuICAgIG1lbW9zLmV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuXG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpIHtcbiAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gaWYgb25lIGlzIGEgcHJpbWl0aXZlLCB0aGUgb3RoZXIgbXVzdCBiZSBzYW1lXG4gIGlmICh1dGlsLmlzUHJpbWl0aXZlKGEpIHx8IHV0aWwuaXNQcmltaXRpdmUoYikpXG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIGlmIChzdHJpY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB2YXIgYUlzQXJncyA9IGlzQXJndW1lbnRzKGEpO1xuICB2YXIgYklzQXJncyA9IGlzQXJndW1lbnRzKGIpO1xuICBpZiAoKGFJc0FyZ3MgJiYgIWJJc0FyZ3MpIHx8ICghYUlzQXJncyAmJiBiSXNBcmdzKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChhSXNBcmdzKSB7XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gX2RlZXBFcXVhbChhLCBiLCBzdHJpY3QpO1xuICB9XG4gIHZhciBrYSA9IG9iamVjdEtleXMoYSk7XG4gIHZhciBrYiA9IG9iamVjdEtleXMoYik7XG4gIHZhciBrZXksIGk7XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9PSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghX2RlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIDguIFRoZSBub24tZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGZvciBhbnkgZGVlcCBpbmVxdWFsaXR5LlxuLy8gYXNzZXJ0Lm5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3REZWVwRXF1YWwgPSBmdW5jdGlvbiBub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwRXF1YWwnLCBhc3NlcnQubm90RGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbCA9IG5vdERlZXBTdHJpY3RFcXVhbDtcbmZ1bmN0aW9uIG5vdERlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcFN0cmljdEVxdWFsJywgbm90RGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufVxuXG5cbi8vIDkuIFRoZSBzdHJpY3QgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHN0cmljdCBlcXVhbGl0eSwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBzdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT09JywgYXNzZXJ0LnN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gMTAuIFRoZSBzdHJpY3Qgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igc3RyaWN0IGluZXF1YWxpdHksIGFzXG4vLyBkZXRlcm1pbmVkIGJ5ICE9PS4gIGFzc2VydC5ub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIG5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPT0nLCBhc3NlcnQubm90U3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSB7XG4gIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXhwZWN0ZWQpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuIGV4cGVjdGVkLnRlc3QoYWN0dWFsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJZ25vcmUuICBUaGUgaW5zdGFuY2VvZiBjaGVjayBkb2Vzbid0IHdvcmsgZm9yIGFycm93IGZ1bmN0aW9ucy5cbiAgfVxuXG4gIGlmIChFcnJvci5pc1Byb3RvdHlwZU9mKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBfdHJ5QmxvY2soYmxvY2spIHtcbiAgdmFyIGVycm9yO1xuICB0cnkge1xuICAgIGJsb2NrKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IGU7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBfdGhyb3dzKHNob3VsZFRocm93LCBibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGFjdHVhbDtcblxuICBpZiAodHlwZW9mIGJsb2NrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJibG9ja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICBtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gICAgZXhwZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgYWN0dWFsID0gX3RyeUJsb2NrKGJsb2NrKTtcblxuICBtZXNzYWdlID0gKGV4cGVjdGVkICYmIGV4cGVjdGVkLm5hbWUgPyAnICgnICsgZXhwZWN0ZWQubmFtZSArICcpLicgOiAnLicpICtcbiAgICAgICAgICAgIChtZXNzYWdlID8gJyAnICsgbWVzc2FnZSA6ICcuJyk7XG5cbiAgaWYgKHNob3VsZFRocm93ICYmICFhY3R1YWwpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdNaXNzaW5nIGV4cGVjdGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIHZhciB1c2VyUHJvdmlkZWRNZXNzYWdlID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnO1xuICB2YXIgaXNVbndhbnRlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiB1dGlsLmlzRXJyb3IoYWN0dWFsKTtcbiAgdmFyIGlzVW5leHBlY3RlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgIWV4cGVjdGVkO1xuXG4gIGlmICgoaXNVbndhbnRlZEV4Y2VwdGlvbiAmJlxuICAgICAgdXNlclByb3ZpZGVkTWVzc2FnZSAmJlxuICAgICAgZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8XG4gICAgICBpc1VuZXhwZWN0ZWRFeGNlcHRpb24pIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdHb3QgdW53YW50ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKChzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgZXhwZWN0ZWQgJiZcbiAgICAgICFleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHwgKCFzaG91bGRUaHJvdyAmJiBhY3R1YWwpKSB7XG4gICAgdGhyb3cgYWN0dWFsO1xuICB9XG59XG5cbi8vIDExLiBFeHBlY3RlZCB0byB0aHJvdyBhbiBlcnJvcjpcbi8vIGFzc2VydC50aHJvd3MoYmxvY2ssIEVycm9yX29wdCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQudGhyb3dzID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3ModHJ1ZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbi8vIEVYVEVOU0lPTiEgVGhpcyBpcyBhbm5veWluZyB0byB3cml0ZSBvdXRzaWRlIHRoaXMgbW9kdWxlLlxuYXNzZXJ0LmRvZXNOb3RUaHJvdyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKGZhbHNlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuYXNzZXJ0LmlmRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgaWYgKGVycikgdGhyb3cgZXJyOyB9O1xuXG4vLyBFeHBvc2UgYSBzdHJpY3Qgb25seSB2YXJpYW50IG9mIGFzc2VydFxuZnVuY3Rpb24gc3RyaWN0KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIHN0cmljdCk7XG59XG5hc3NlcnQuc3RyaWN0ID0gb2JqZWN0QXNzaWduKHN0cmljdCwgYXNzZXJ0LCB7XG4gIGVxdWFsOiBhc3NlcnQuc3RyaWN0RXF1YWwsXG4gIGRlZXBFcXVhbDogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCxcbiAgbm90RXF1YWw6IGFzc2VydC5ub3RTdHJpY3RFcXVhbCxcbiAgbm90RGVlcEVxdWFsOiBhc3NlcnQubm90RGVlcFN0cmljdEVxdWFsXG59KTtcbmFzc2VydC5zdHJpY3Quc3RyaWN0ID0gYXNzZXJ0LnN0cmljdDtcblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0TWV0aG9kLCBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEYXRhZ3JpZFN0YXRlIH0gZnJvbSAnLi9EYXRhZ3JpZFN0YXRlJztcclxuaW1wb3J0IHsgZGVmYXVsdFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvZGVmYXVsdFJlbmRlcmVyJztcclxuaW1wb3J0IHsgR3JpZFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvR3JpZFJlbmRlcmVyJztcclxuaW1wb3J0IHsgbm9ybWFsaXplQ29sdW1ucyB9IGZyb20gJy4vdXRpbHMnO1xyXG4vLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZCBleHRlbmRzIHNmLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNmLCBub2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRGF0YWdyaWQuZGVmYXVsdE9wdGlvbnMuaWQsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnaWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucy51cmwsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnZGF0YS11cmwnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5ncmlkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGF0YWdyaWRTdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkRm9ybXMgPSBbXTsgLy8gVE9ETzogdHlwZSBhcyBzZi5Gb3JtIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMgPSBbXTsgLy8gVE9ETzogdHlwZSBhcyBzZi5QYWdpbmF0b3IgaW5zdGFuY2UgYXJyYXlcclxuICAgICAgICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgRGF0YWdyaWQuZGVmYXVsdE9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxPcHRpb25zRWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtyb2xlPVwic2Ytb3B0aW9uc1wiXScpO1xyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsT3B0aW9uc0VsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbmUgPSBGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICcgKyBhZGRpdGlvbmFsT3B0aW9uc0VsLmlubmVySFRNTC50cmltKCkgKyAnJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICcgKyBhZGRpdGlvbmFsT3B0aW9uc0VsLmlubmVySFRNTC50cmltKCkgKyAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVycmlkZXMgPSBvbmUoKSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBvdmVycmlkZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBpbnNpZGUgc2NyaXB0LCBlbnN1cmUgc2NyaXB0IGluc2lkZSBpcyBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gcmV0dXJuaW5nIElEYXRhR3JpZE9wdGlvbnMgb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbCh0aGlzLm9wdGlvbnMuaWQsICcnLCAnaWQgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xyXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbCh0aGlzLm9wdGlvbnMudXJsLCAnJywgJ3VybCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XHJcbiAgICAgICAgLy8gUHJvY2VzcyBvcHRpb25zXHJcbiAgICAgICAgLy8gVE9ETzogd2UgY2FuIG92ZXJyaWRlIGNvbHVtbnMgYW5kIHNvcnQgb3B0aW9ucyBpbnNpZGUgcmVuZGVyZXJzIGJ1dCBpdCBtaWdodCBwcm9kdWNlIHNpdHVhdGlvbiBvZiB0cmlnZ2VyaW5nIHVuZXhpc3Rpbmcgc29ydFxyXG4gICAgICAgIC8vIFRoaW5rIGFib3V0IHRoYXQsIG9yIGlnbm9yZVxyXG4gICAgICAgIHRoaXMuY29sdW1uSW5mbyA9IG5vcm1hbGl6ZUNvbHVtbnModGhpcy5vcHRpb25zLmNvbHVtbnMsIHRoaXMub3B0aW9ucy5zb3J0YWJsZSk7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgc29ydCBpZiBwcmVzZW50XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQodGhpcy5vcHRpb25zLnNvcnQsIFNvcnREaXJlY3Rpb24uQVNDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydCh0aGlzLm9wdGlvbnMuc29ydC5maWVsZCwgdGhpcy5vcHRpb25zLnNvcnQuZGlyZWN0aW9uIHx8IFNvcnREaXJlY3Rpb24uQVNDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVycygpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZUZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICBjYXB0dXJlRm9ybXMoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSB0aGlzLnNmLmdldEluc3RhbmNlcygnZm9ybScpO1xyXG4gICAgICAgIGZvcm1zLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZik7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCBiZSBhbiBhc3luYyBjYXB0dXJlXHJcbiAgICAgICAgICAgIGlmIChmLmluc3RhbmNlLm9wdGlvbnMgJiYgZi5pbnN0YW5jZS5vcHRpb25zLmlkICYmIHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMuaW5kZXhPZihmLmluc3RhbmNlLm9wdGlvbnMudXJsKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGYuaW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkRm9ybXMucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5vcHRpb25zLmpzb25Pbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMuYmVmb3JlU3VibWl0Q2FsbGJhY2sgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0Rm9ybURhdGEoaW5zdGFuY2Uub3B0aW9ucy5pZCwgb3B0aW9ucy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTsgLy8gVE9ETzogYmV0dGVyIHdheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzb3J0IGZvciB0aGlzIGZpZWxkIGlmIG5vdCB5ZXQsIG9yIGNoYW5nZXMgZGlyZWN0aW9uIGlmIGFscmVhZHkgc2FtZVxyXG4gICAgICogQHBhcmFtIGZpZWxkSWRcclxuICAgICAqL1xyXG4gICAgdHJpZ2dlclNvcnQoZmllbGRJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gZmllbGRJZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLkFTQykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KGZpZWxkSWQsIFNvcnREaXJlY3Rpb24uREVTQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGRJZCwgU29ydERpcmVjdGlvbi5BU0MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29sdW1uSW5mby5maW5kKGNJID0+IGNJLmlkID09PSBmaWVsZElkKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGQuaWQsIGZpZWxkLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyeWluZyB0byBzb3J0IGJ5IHVuc29ydGFibGUgZmllbGQgJHtmaWVsZElkfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVxdWVzdCgpO1xyXG4gICAgfVxyXG4gICAgZm9ybVJlcXVlc3QoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogMS4gQ29sbGVjdCBkYXRhIGZyb20gZm9ybXNcclxuICAgICAgICAvLyBUT0RPOiAyLiBDb2xsZWN0IGRhdGEgZnJvbSBzdGF0ZVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIGZldGNoQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5zdGF0ZS5nZXRGaWx0ZXIoKSxcclxuICAgICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAyNSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMuc3RhdGUuc29ydEJ5ID8geyBbdGhpcy5zdGF0ZS5zb3J0QnldOiB0aGlzLnN0YXRlLnNvcnREaXIgfSA6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuICAgIHVubG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2YucmVtb3ZlSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byByZW1vdmUgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3Igbm90IHN0YXJ0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGYudW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLnVubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuc2YuYWRkSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUsIHsgdHlwZTogdGhpcy5vcHRpb25zLmxvY2tUeXBlIH0pO1xyXG4gICAgICAgIGlmICghbG9jaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gYWRkIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIGFscmVhZHkgc3RhcnRlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRGb3Jtcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VjY2Vzcyh7IGRhdGEgfSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzJywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdWNjZXNzKGRhdGEuZGF0YSwgZGF0YS5wYWdpbmF0aW9uKTsgLy8gVE9ETzogc2V0IHN1Y2Nlc3Mgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAvLyBUT0RPOiByZXJlbmRlciBkYXRhXHJcbiAgICB9XHJcbiAgICBoYW5kbGVFcnJvcih7IGRhdGEsIHN0YXR1cywgc3RhdHVzVGV4dCB9KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRFcnJvcihkYXRhLmVycm9yLCBkYXRhLmVycm9ycywgdGhpcy5vcHRpb25zLnJlc2V0T25FcnJvcik7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGYucHJvY2Vzc0Fuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgZi5wcm9jZXNzQW5zd2VyKHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5wcm9jZXNzQW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICBmLnByb2Nlc3NBbnN3ZXIoeyBkYXRhLCBzdGF0dXMsIHN0YXR1c1RleHQgfSk7IC8vIFRPRE86IG1pZ2h0IGJlIGRpZmZlcmVudCBBUElcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgLy8gVE9ETzogc2V0IGVycm9yIHN0YXR1c1xyXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSBkYXRhIGFuZCBkaXNwbGF5IGVycm9yXHJcbiAgICAgICAgLy8gVE9ETzogc2VuZCB2YWxpZGF0aW9uIGVycm9ycyB0byBvdGhlciBmb3Jtc1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdCgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudCBzdGFydCBuZXcgcmVxdWVzdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnRMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jaygpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5zZi5hamF4LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm9wdGlvbnMubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5vcHRpb25zLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgcmVxdWVzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VjY2VzcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmlzU0ZBamF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVJlbmRlcmVycygpIHtcclxuICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKHRoaXMuZ3JpZHMsIFtdLCAnR3JpZHMgYXJlIGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBjb25zdCByZW5kZXJMaXN0ID0gQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMucmVuZGVyZXJzKSA/IHRoaXMub3B0aW9ucy5yZW5kZXJlcnMgOiBbdGhpcy5vcHRpb25zLnJlbmRlcmVyc107XHJcbiAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChyZW5kZXJPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkcy5wdXNoKG5ldyBHcmlkUmVuZGVyZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZW5kZXJPcHRpb24pLCB7IGNvbHVtbnM6IChyZW5kZXJPcHRpb24uY29sdW1ucyAmJiByZW5kZXJPcHRpb24uY29sdW1ucy5sZW5ndGgpID8gcmVuZGVyT3B0aW9uLmNvbHVtbnMgOiB0aGlzLm9wdGlvbnMuY29sdW1ucywgc29ydGFibGU6IChyZW5kZXJPcHRpb24uc29ydGFibGUgJiYgcmVuZGVyT3B0aW9uLnNvcnRhYmxlLmxlbmd0aCkgPyByZW5kZXJPcHRpb24uc29ydGFibGUgOiB0aGlzLm9wdGlvbnMuc29ydGFibGUgfSksIHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcclxuICAgICAgICAgICAgZ3JpZC5yZW5kZXIodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuRGF0YWdyaWQuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZCc7XHJcbkRhdGFncmlkLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdkZWZhdWx0JyxcclxuICAgIHJlc2V0T25FcnJvcjogZmFsc2UsXHJcbiAgICBjYXB0dXJlRm9ybXM6IFtdLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBoZWFkZXJzOiB7fSxcclxuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QT1NULFxyXG4gICAgc29ydGFibGU6IFtdLFxyXG4gICAgdXJsOiAnJyxcclxuICAgIHVpOiB7XHJcbiAgICAgICAgY2VsbEF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZToge30sXHJcbiAgICAgICAgdGFibGVDbGFzc05hbWU6ICd0YWJsZSB0YWJsZS1zdHJpcHBlZCcsXHJcbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyZXJzOiBkZWZhdWx0UmVuZGVyZXIsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFncmlkO1xyXG4iLCJpbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDI1O1xyXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgc29ydERpcjogU29ydERpcmVjdGlvbi5BU0MsXHJcbiAgICAgICAgICAgIGxpbWl0OiBERUZBVUxUX0xJTUlULFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZm9ybURhdGE6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgaXNMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBzdGFydExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0b3BMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0Vycm9yKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuc3RhdGUuZXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvcnRCeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0Qnk7XHJcbiAgICB9XHJcbiAgICBnZXQgc29ydERpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGlyO1xyXG4gICAgfVxyXG4gICAgc2V0U3VjY2VzcyhkYXRhLCBwYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGFnZSA9IHBhZ2luYXRpb24ucGFnZTtcclxuICAgICAgICB0aGlzLnN0YXRlLmxpbWl0ID0gcGFnaW5hdGlvbi5saW1pdDtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvdW50ID0gKHR5cGVvZiBwYWdpbmF0aW9uLmNvdW50ICE9PSAndW5kZWZpbmVkJykgPyBwYWdpbmF0aW9uLmNvdW50IDogdGhpcy5zdGF0ZS5jb3VudDtcclxuICAgIH1cclxuICAgIHNldEVycm9yKGVycm9yLCBlcnJvcnMgPSB7fSwgcmVzZXREYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAocmVzZXREYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICBzZXRTb3J0KGZpZWxkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRCeSA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc29ydERpciA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuICAgIHNldEZvcm1EYXRhKGZvcm1JZCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9ybURhdGFbZm9ybUlkXSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZm9ybURhdGEpLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXYpLCB0aGlzLnN0YXRlLmZvcm1EYXRhW2tleV0pO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIFNvcnREaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoU29ydERpcmVjdGlvbikge1xyXG4gICAgU29ydERpcmVjdGlvbltcIkFTQ1wiXSA9IFwiYXNjXCI7XHJcbiAgICBTb3J0RGlyZWN0aW9uW1wiREVTQ1wiXSA9IFwiZGVzY1wiO1xyXG59KShTb3J0RGlyZWN0aW9uIHx8IChTb3J0RGlyZWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBSZXF1ZXN0TWV0aG9kO1xyXG4oZnVuY3Rpb24gKFJlcXVlc3RNZXRob2QpIHtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJHRVRcIl0gPSBcIkdFVFwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBPU1RcIl0gPSBcIlBPU1RcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJERUxFVEVcIl0gPSBcIkRFTEVURVwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBVVFwiXSA9IFwiUFVUXCI7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiUEFUQ0hcIl0gPSBcIlBBVENIXCI7XHJcbn0pKFJlcXVlc3RNZXRob2QgfHwgKFJlcXVlc3RNZXRob2QgPSB7fSkpO1xyXG4iLCJpbXBvcnQgc2YgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xyXG5pbXBvcnQgRGF0YUdyaWQgZnJvbSAnLi9EYXRhZ3JpZCc7XHJcbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKERhdGFHcmlkLCAnc2YtanMtZGF0YWdyaWQnKTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0YUdyaWQ7IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb2R5V3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdEJvZHlXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEZvb3RlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRGb290ZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlckNlbGxSZW5kZXJlciB9IGZyb20gJy4vZGVmYXVsdEhlYWRlckNlbGxSZW5kZXJlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRIZWFkZXJXcmFwcGVyIH0gZnJvbSAnLi9kZWZhdWx0SGVhZGVyV3JhcHBlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRSb3dDZWxsUmVuZGVyZXIgfSBmcm9tICcuL2RlZmF1bHRSb3dSZW5kZXJlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRSb3dXcmFwcGVyIH0gZnJvbSAnLi9kZWZhdWx0Um93V3JhcHBlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRUYWJsZVdyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRUYWJsZVdyYXBwZXInO1xyXG5leHBvcnQgY2xhc3MgR3JpZFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHJvb3QpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5JbmZvID0gbm9ybWFsaXplQ29sdW1ucyh0aGlzLm9wdGlvbnMuY29sdW1ucywgdGhpcy5vcHRpb25zLnNvcnRhYmxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbkluZm8pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdzZi1kYXRhZ3JpZC13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMudWkud3JhcHBlckNsYXNzTmFtZSB8fCAnJyk7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcclxuICAgICAgICBjb25zdCB0YWJsZVJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnRhYmxlV3JhcHBlciB8fCBkZWZhdWx0VGFibGVXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMudGFibGVFbCA9IHRhYmxlUmVuZGVyZXIodGhpcy53cmFwcGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHN0YXRlKSB7XHJcbiAgICAgICAgLy8gUmVuZGVyIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGhlYWRlclJlbmRlcmVyID0gdGhpcy5vcHRpb25zLmhlYWRlcldyYXBwZXIgfHwgZGVmYXVsdEhlYWRlcldyYXBwZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLnJlbW92ZUNoaWxkKHRoaXMuaGVhZGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWRlckVsID0gaGVhZGVyUmVuZGVyZXIodGhpcy50YWJsZUVsLCB0aGlzLm9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbCk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBoZWFkZXIgY2VsbHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uSW5mby5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uSW5mby5mb3JFYWNoKChjSSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJDZWxsUmVuZGVyZXIgPSAodGhpcy5vcHRpb25zLmhlYWRlckxpc3QgfHwge30pW2NJLmlkXSB8fCBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbFJlbmRlcmVyKGNJLCB0aGlzLm9wdGlvbnMsIHN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgYm9keVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHlFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5ib2R5RWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBib2R5UmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuYm9keVdyYXBwZXIgfHwgZGVmYXVsdEJvZHlXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuYm9keUVsID0gYm9keVJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9keUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmJvZHlFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMub3B0aW9ucy5yb3dXcmFwcGVyIHx8IGRlZmF1bHRSb3dXcmFwcGVyO1xyXG4gICAgICAgICAgICBzdGF0ZS5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHJvdyh0aGlzLmJvZHlFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5JbmZvLmZvckVhY2goKGNJKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93Q2VsbFJlbmRlcmVyID0gKHRoaXMub3B0aW9ucy5jZWxscyB8fCB7fSlbY0kuaWRdIHx8IGRlZmF1bHRSb3dDZWxsUmVuZGVyZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocm93Q2VsbFJlbmRlcmVyKGNJLCB0aGlzLm9wdGlvbnMsIHN0YXRlLCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgZm9vdGVyXHJcbiAgICAgICAgaWYgKHRoaXMuZm9vdGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLnJlbW92ZUNoaWxkKHRoaXMuZm9vdGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmb290ZXJSZW5kZXJlciA9IHRoaXMub3B0aW9ucy5mb290ZXJXcmFwcGVyIHx8IGRlZmF1bHRGb290ZXJXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyRWwgPSBmb290ZXJSZW5kZXJlcih0aGlzLnRhYmxlRWwsIHRoaXMub3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmZvb3RlckVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckVsKTtcclxuICAgICAgICAgICAgLy8gV2UgYXNzdW1lIGZvb3RlciByZW5kZXIgaGFuZGxlcyBhbGwgZGF0YSBzbyBubyBhZGRpdGlvbmFsIHJlbmRlcnMgaGVyZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdEJvZHlXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMsIHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChzdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGVycm9yVGQuY29sU3BhbiA9IG9wdGlvbnMuY29sdW1ucy5sZW5ndGg7XHJcbiAgICAgICAgZXJyb3JUZC5pbm5lclRleHQgPSBzdGF0ZS5lcnJvck1lc3NhZ2UgfHwgJ1Vua25vd24gRXJyb3InO1xyXG4gICAgICAgIGVycm9yVGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JUci5hcHBlbmRDaGlsZChlcnJvclRkKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlcnJvclRyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXRlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgZW1wdHlUZC5jb2xTcGFuID0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aDtcclxuICAgICAgICBlbXB0eVRkLmlubmVySFRNTCA9ICdObyBEYXRhJztcclxuICAgICAgICBlbXB0eVRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19lbXB0eScpO1xyXG4gICAgICAgIGVtcHR5VHIuYXBwZW5kQ2hpbGQoZW1wdHlUZCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZW1wdHlUcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0Rm9vdGVyV3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFwcGx5QXR0cnJpYnV0ZXMgfSBmcm9tICcuLi91dGlscyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyID0gKGNvbHVtbiwgb3B0aW9ucywgc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0Jyk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcmVudC50cmlnZ2VyU29ydChjb2x1bW4uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnNvcnRCeSA9PT0gY29sdW1uLmlkKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnc2YtdGFibGVfX3NvcnRfYXNjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0X2Rlc2MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIiR7Y2xhc3Nlcy5qb2luKCcgJyl9XCI+JHtjb2x1bW4udGl0bGV9PC9kaXY+YDtcclxuICAgIGNvbnN0IGNlbGxNZXRhID0ge1xyXG4gICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgcm93U2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcclxuICAgICAgICBpdGVtOiBudWxsLFxyXG4gICAgfTtcclxuICAgIGlmIChvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZShjZWxsTWV0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWVbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgaWYgKHNwZWNpZmljKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoc3BlY2lmaWMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChzcGVjaWZpYyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgb3B0aW9ucy51aS5oZWFkZXJDZWxsQXR0cmlidXRlcyhjZWxsTWV0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpYyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyV3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0UmVuZGVyZXIgPSB7XHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzaWMgY2xhc3MvYXR0cmlidXRlIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgdWk6IHtcclxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lOiAndGFibGUtcmVzcG9uc2l2ZScsXHJcbiAgICAgICAgdGFibGVDbGFzc05hbWU6ICd0YWJsZSB0YWJsZS1zdHJpcGVkJyxcclxuICAgICAgICBjZWxsQ2xhc3NOYW1lOiB7fSxcclxuICAgICAgICByb3dDbGFzc05hbWU6ICcnLFxyXG4gICAgICAgIGNlbGxBdHRyaWJ1dGVzOiBjZWxsTWV0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IHJvd2xNZXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGFwcGx5QXR0cnJpYnV0ZXMgfSBmcm9tICcuLi91dGlscyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Um93Q2VsbFJlbmRlcmVyID0gKGNvbHVtbiwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSBzdGF0ZS5kYXRhW2luZGV4XVtjb2x1bW4uaWRdO1xyXG4gICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgaWQ6IGNvbHVtbi5pZCxcclxuICAgICAgICBjb2x1bW46IGNvbHVtbixcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICAvLyByb3dTZWxlY3RlZDogKHN0YXRlIGFzIGFueSkuaXNTZWxlY3RlZChpbmRleCksXHJcbiAgICAgICAgcm93U2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcclxuICAgICAgICBpdGVtOiBzdGF0ZS5kYXRhW2luZGV4XSxcclxuICAgIH07XHJcbiAgICBpZiAob3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUoY2VsbE1ldGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIG9wdGlvbnMudWkuY2VsbEF0dHJpYnV0ZXMoY2VsbE1ldGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlc1tjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBhcHBseUF0dHJyaWJ1dGVzIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdFJvd1dyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGNvbnN0IHJvd01ldGEgPSB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICAvLyByb3dTZWxlY3RlZDogKHN0YXRlIGFzIGFueSkuaXNTZWxlY3RlZChpbmRleCksXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcclxuICAgICAgICBpdGVtOiBzdGF0ZS5kYXRhW2luZGV4XSxcclxuICAgIH07XHJcbiAgICBpZiAob3B0aW9ucy51aS5yb3dDbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkucm93Q2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQob3B0aW9ucy51aS5yb3dDbGFzc05hbWUocm93TWV0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChvcHRpb25zLnVpLnJvd0NsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMudWkucm93QXR0cmlidXRlcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51aS5yb3dBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIG9wdGlvbnMudWkucm93QXR0cmlidXRlcyhyb3dNZXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBvcHRpb25zLnVpLnJvd0F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWJsZVdyYXBwZXIgPSAobm9kZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gb3B0aW9ucy51aS50YWJsZUNsYXNzTmFtZSB8fCAnJztcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQ29sdW1ucyA9IChjb2x1bW5zLCBzb3J0YWJsZSkgPT4ge1xyXG4gICAgY29uc3Qgc0xpc3QgPSBzb3J0YWJsZS5tYXAoKHMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkOiBzLCBkaXJlY3Rpb246IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGxldCB0aXRsZTtcclxuICAgICAgICBsZXQgc29ydERpcjtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlkID0gYztcclxuICAgICAgICAgICAgdGl0bGUgPSBjO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGMuaWQ7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYy50aXRsZSB8fCBjLmlkO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gYy5zb3J0RGlyIHx8IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0ID0gc0xpc3QuZmluZCgocykgPT4gKHMuZmllbGQgPT09IGlkKSk7XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydC5kaXJlY3Rpb24gfHwgc29ydERpcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogU29ydERpcmVjdGlvbi5BU0MsXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXBwbHlBdHRycmlidXRlcyA9IChub2RlLCBhdHRycykgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX187IiwiY29uc3QgY29yZSA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5cbnJlcXVpcmUoJy4vaW5wdXQnKTtcblxucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2xvY2tlcicpO1xucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2Zvcm0nKTtcbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmU7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKTtcbmNvbnN0IElucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpLmRlZmF1bHQ7XG5cbnNmLmluc3RhbmNlc0NvbnRyb2xsZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUoSW5wdXQsICdzZi1qcy1pbnB1dCcpO1xubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcblxuY29uc3QgSW5wdXQgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5fY29uc3RydWN0KHNmLCBub2RlLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbklucHV0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY29yZS5jb3JlLkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIE5hbWUgdG8gcmVnaXN0ZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbklucHV0LnByb3RvdHlwZS5uYW1lID0gJ2lucHV0JztcblxuSW5wdXQucHJvdG90eXBlLl9jb25zdHJ1Y3QgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHNmLCBub2RlLCBvcHRpb25zKTsgLy8gY2FsbCBwYXJlbnRcblxuICBpZiAob3B0aW9ucykge1xuICAgIC8vIGlmIHdlIHBhc3Mgb3B0aW9ucyBleHRlbmQgYWxsIG9wdGlvbnMgYnkgcGFzc2VkIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSBzZi50b29scy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEVsZW1lbnRzXG4gIHRoaXMuZWxzID0ge1xuICAgIG5vZGUsXG4gIH07XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wcmVmaXgpIHtcbiAgICB0aGlzLnNldFByZWZpeCgpO1xuICAgIHRoaXMuYWRkUHJlZml4RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGF0dGVybikge1xuICAgIHRoaXMuc2V0dXBQYXR0ZXJuKCk7XG4gICAgdGhpcy5hZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBvdmVycmlkZVxuICogQGluaGVyaXREb2NcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbklucHV0LnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge1xuICAvKipcbiAgICAgKiAgUGF0dGVybiBvZiBpbnB1dFxuICAgICAqL1xuICBwYXR0ZXJuOiB7XG4gICAgZG9tQXR0cjogJ2RhdGEtcGF0dGVybicsXG4gIH0sXG4gIC8qKlxuICAgICAqICBQcmVmaXggb2YgIGlucHV0XG4gICAgICovXG4gIHByZWZpeDoge1xuICAgIGRvbUF0dHI6ICdkYXRhLXByZWZpeCcsXG4gIH0sXG59O1xuXG4vKipcbiAqIFNldHVwIHBhdHRlcm5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5JbnB1dC5wcm90b3R5cGUuaXNWYWxpZFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVscy5ub2RlLnZhbHVlLm1hdGNoKHRoaXMucGF0dGVybik7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuYWRkUGF0dGVybkV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICB0aGlzLl9pbnB1dEtleVByZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhhdC5lbHMubm9kZTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoYXQuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcblxuICAgIGlmIChjaGFyLmxlbmd0aCA+IDApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NpdGlvbjsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGF0LmZvcm1hdENoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZVtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZnV0dXJlVmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24gKyBvZmZzZXQgLSAxKSArIGNoYXIgKyB2YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24gKyBvZmZzZXQsIHZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIGlmICghZnV0dXJlVmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuV2l0aEVtcHR5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gZnV0dXJlVmFsdWU7XG4gICAgICB0aGF0LnNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uICsgb2Zmc2V0KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuX2lucHV0S2V5UHJlc3MpO1xuXG4gIHRoaXMuX2lucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhhdC5lbHMubm9kZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSB0aGF0LnBhdHRlcm5TdHJpbmcucmVwbGFjZSgvW15cXC1cXChcXClcXFtcXF1cXDpcXC5cXCxcXCRcXCVcXEBcXCBcXC9dL2csICdfJyk7XG4gICAgICAgIHRoYXQuc2V0Q3Vyc29yUG9zaXRpb24oMCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH07XG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9pbnB1dEZvY3VzKTtcblxuICB0aGlzLl9pbnB1dEtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGF0LmVscy5ub2RlO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhhdC5nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NpdGlvbiAtIDE7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHRoYXQuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKHZhbHVlW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBvZmZzZXQgLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmdXR1cmVWYWx1ZSA9IGAke3ZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbiArIG9mZnNldCAtIDEpfV8ke3ZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbiArIG9mZnNldCwgdmFsdWUubGVuZ3RoKX1gO1xuXG4gICAgICBpZiAoIWZ1dHVyZVZhbHVlLm1hdGNoKHRoYXQucGF0dGVybldpdGhFbXB0eSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZnV0dXJlVmFsdWUpO1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IGZ1dHVyZVZhbHVlO1xuICAgICAgdGhhdC5zZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbiArIG9mZnNldCAtIDEpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gaWYgKGNoYXIubWF0Y2goL1xcVy8pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faW5wdXRLZXlEb3duKTtcblxuICB0aGlzLl9pbnB1dEJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGF0LmVscy5ub2RlLnZhbHVlLm1hdGNoKHRoYXQucGF0dGVybikpIHtcbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSAnJztcbiAgICB9XG4gIH07XG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2lucHV0Qmx1cik7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuZ2V0Q3Vyc29yUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcblxuICAgIGNvbnN0IHNlbGVjdFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBzZWxlY3RSYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC10aGlzLmVscy5ub2RlLnZhbHVlLmxlbmd0aCk7XG5cbiAgICBwb3NpdGlvbiA9IHNlbGVjdFJhbmdlLnRleHQubGVuZ3RoO1xuICB9IGVsc2UgaWYgKHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQgfHwgdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCA9PT0gJzAnKSB7XG4gICAgcG9zaXRpb24gPSB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufTtcblxuSW5wdXQucHJvdG90eXBlLnNldEN1cnNvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gIGlmICh0aGlzLmVscy5ub2RlLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5lbHMubm9kZS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBwb3NpdGlvbik7XG4gICAgcmFuZ2Uuc2VsZWN0KCk7XG4gIH0gZWxzZSBpZiAodGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCkge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcbiAgICB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVscy5ub2RlLmZvY3VzKCk7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZS5zZXR1cFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0Q2hhcmFjdGVycyA9IHRoaXMuZWxzLm5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm1hdC1jaGFyYWN0ZXJzJykgfHwgJy0oKVtdOi4sJCVAIC8nO1xuICB0aGlzLnBhdHRlcm5TdHJpbmcgPSB0aGlzLm9wdGlvbnMucGF0dGVybjtcbiAgdGhpcy5lbHMubm9kZS5wbGFjZWhvbGRlciA9IHRoaXMucGF0dGVyblN0cmluZztcblxuICBjb25zdCBfaW5pdFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGZvcm1hdHRlZFBhdHRlcm5TdHIgPSAnJztcbiAgICBsZXQgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdHRlcm5TdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLnBhdHRlcm5TdHJpbmdbaV07XG5cbiAgICAgIGlmICh0aGlzLmZvcm1hdENoYXJhY3RlcnMuaW5kZXhPZihjaGFyKSA+PSAwKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gY2hhcjtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSBjaGFyO1xuICAgICAgfSBlbHNlIGlmIChjaGFyLm1hdGNoKC9bMC05XS8pKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1swLTldJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFswLTldfF8pJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhci5tYXRjaCgvW2EtekEtWl0vKSkge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9ICdbYS16QS1aXSc7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gJyhbYS16QS1aXXxfKSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcqJykge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9ICdbMC05YS16QS1aXSc7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gJyhbMC05YS16QS1aXXxfKSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0dGVkUGF0dGVyblN0cn0kYCwgJ2cnKTtcbiAgICB0aGlzLnBhdHRlcm5XaXRoRW1wdHkgPSBuZXcgUmVnRXhwKGBeJHtmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyfSRgLCAnZycpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgX2luaXRQYXR0ZXJuKCk7XG59O1xuXG5cbi8qKlxuICogQWRkcyBzdGF0aWMgZXZlbnRzIGxpc3RlbmVycy5cbiAqL1xuSW5wdXQucHJvdG90eXBlLmFkZFByZWZpeEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICB0aGlzLl9pbnB1dEtleXVwID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG5cbiAgICBpZiAodGhhdC5lbHMubm9kZS52YWx1ZS5pbmRleE9mKG9sZFZhbHVlKSAhPT0gMCkge1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IGAke29sZFZhbHVlfSBgO1xuICAgIH1cbiAgfTtcblxuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9pbnB1dEtleXVwKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnJlbW92ZVBhdHRlcm5FdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZWxzLm5vZGUpIHtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5faW5wdXRLZXlQcmVzcyk7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2lucHV0Rm9jdXMpO1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2lucHV0S2V5RG93bik7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faW5wdXRCbHVyKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnJlbW92ZVByZWZpeEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9pbnB1dEtleXVwKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJuKSB7XG4gICAgdGhpcy5yZW1vdmVQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucHJlZml4KSB7XG4gICAgdGhpcy5yZW1vdmVQcmVmaXhFdmVudExpc3RlbmVycygpO1xuICB9XG4gIGRlbGV0ZSB0aGlzO1xufTtcblxuSW5wdXQucHJvdG90eXBlLnNldFByZWZpeCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbHMubm9kZS52YWx1ZSA9IGAke3RoaXMub3B0aW9ucy5wcmVmaXh9ICR7dGhpcy5lbHMubm9kZS52YWx1ZX1gO1xufTtcblxuZXhwb3J0IHsgSW5wdXQgYXMgZGVmYXVsdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlUm9vdCI6IiJ9