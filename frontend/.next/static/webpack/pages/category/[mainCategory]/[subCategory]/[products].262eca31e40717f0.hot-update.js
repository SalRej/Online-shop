"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category/[mainCategory]/[subCategory]/[products]",{

/***/ "./pages/category/[mainCategory]/[subCategory]/[products]/index.jsx":
/*!**************************************************************************!*\
  !*** ./pages/category/[mainCategory]/[subCategory]/[products]/index.jsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ProductCard_ProductsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/ProductCard/ProductsCard */ \"./components/ProductCard/ProductsCard.jsx\");\n/* harmony import */ var _components_Filters_FiltersMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/Filters/FiltersMenu */ \"./components/Filters/FiltersMenu.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Products(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), noProducts = ref[0], setNoProducts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoaded = ref1[0], setIsLoaded = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showFilters = ref2[0], setShowFilters = ref2[1]; //show filters menu or not\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), products = ref3[0], setProducts = ref3[1]; //data of the products fetcher from backend\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        price: 0,\n        color: [],\n        size: []\n    }), filterValues = ref4[0], setFilterValues = ref4[1]; //values to send to the server to filter\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var productsType = router.query.products;\n    //takes the params from query string\n    //const [searchParams] = useSearchParams();\n    //const name = searchParams.get('name');\n    var toogleShowFilters = function(bool) {\n        setShowFilters(bool);\n    };\n    var handleSetFilterValues = function(e) {\n        //what this function does\n        //1.checks the type of the input\n        //2.if its range type just update the value of price\n        //3.if its checkbox type check is it uncheck or checked value\n        //4.if its checked then check to see if it's already in the array \n        //5.if not then add id\n        //6.if the value is unckecked then filter the array to return everythin\n        //exept the element with value === the uncked box\n        if (e.target.type === \"range\") {\n            setFilterValues(function(prev) {\n                return _objectSpread({}, prev, {\n                    price: e.target.value\n                });\n            });\n            setIsLoaded(false);\n        } else if (e.target.type === \"checkbox\") {\n            var value = e.target.value;\n            var name = e.target.name;\n            if (e.target.checked === true) {\n                if (!filterValues[name].includes(value)) {\n                    setFilterValues(function(prev) {\n                        return _objectSpread({}, prev, _defineProperty({}, name, _toConsumableArray(prev[name]).concat([\n                            value\n                        ])));\n                    });\n                    setIsLoaded(false);\n                }\n            } else {\n                setFilterValues(function(prev) {\n                    return _objectSpread({}, prev, _defineProperty({}, name, prev[name].filter(function(item) {\n                        return item !== value;\n                    })));\n                });\n                setIsLoaded(false);\n            }\n        }\n    };\n    var filterProducts = function() {\n        fetch(\"http://localhost:5000\" + \"/filterProducts?productsType=\".concat(productsType, \"&&price=\").concat(filterValues.price, \"&&colors=\").concat(filterValues.color, \"&&sizes=\").concat(filterValues.size)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setProducts(data);\n            setIsLoaded(true);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        filterProducts();\n    }, [\n        filterValues\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setProducts(props.products);\n        console.log(\"rerender\");\n        setIsLoaded(true);\n    }, []);\n    //if(isLoaded === false) return <p>Loading</p>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-heading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: props.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters_FiltersMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        showFilters: showFilters,\n                        toogleShowFilters: toogleShowFilters,\n                        price: props.price,\n                        avaibleSizes: props.avaibleSizes,\n                        filterValues: filterValues,\n                        handleSetFilterValues: handleSetFilterValues\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-holder\",\n                children: [\n                    isLoaded === true && products.map(function(item) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard_ProductsCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: item\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 32\n                        }, _this);\n                    }),\n                    noPorducts && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"no-products\",\n                        children: \"No products were found\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"7xcXuKb/SBmUzHip7Cf4ZK2j5lQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bbWFpbkNhdGVnb3J5XS9bc3ViQ2F0ZWdvcnldL1twcm9kdWN0c10vaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNzQztBQUNOOztBQUN4RSxTQUFTTSxRQUFRLENBQUNDLEtBQUssRUFBRTs7O0lBRXJCLElBQW1DTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTnRELFVBTXFCLEdBQWtCQSxHQUFlLEdBQWpDLEVBTnJCLGFBTW1DLEdBQUlBLEdBQWUsR0FBbkI7SUFDL0IsSUFBK0JBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQbEQsUUFPbUIsR0FBZ0JBLElBQWUsR0FBL0IsRUFQbkIsV0FPK0IsR0FBSUEsSUFBZSxHQUFuQjtJQUMzQixJQUFxQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVJ4RCxXQVFzQixHQUFtQkEsSUFBZSxHQUFsQyxFQVJ0QixjQVFxQyxHQUFJQSxJQUFlLEdBQW5CLEVBQW9CLDBCQUEwQjtJQUMvRSxJQUErQkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBVDdDLFFBU21CLEdBQWdCQSxJQUFVLEdBQTFCLEVBVG5CLFdBUytCLEdBQUlBLElBQVUsR0FBZCxFQUFlLDJDQUEyQztJQUNyRixJQUFxQ0EsSUFBb0MsR0FBcENBLCtDQUFRLENBQUM7UUFBQ2MsS0FBSyxFQUFDLENBQUM7UUFBQ0MsS0FBSyxFQUFDLEVBQUU7UUFBQ0MsSUFBSSxFQUFDLEVBQUU7S0FBQyxDQUFDLEVBVjdFLFlBVXVCLEdBQWtCaEIsSUFBb0MsR0FBdEQsRUFWdkIsZUFVdUMsR0FBRUEsSUFBb0MsR0FBdEMsRUFBdUMsd0NBQXdDO0lBR2xILElBQU1tQixNQUFNLEdBQUdsQixzREFBUyxFQUFFO0lBQzFCLElBQU1tQixZQUFZ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YkNhdGVnb3J5XS9bcHJvZHVjdHNdL2luZGV4LmpzeD9jOTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb2R1Y3RzQ2FyZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1Byb2R1Y3RzQ2FyZCc7XHJcbmltcG9ydCBGaWx0ZXJzTWVudSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyc01lbnUnO1xyXG5mdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtub1Byb2R1Y3RzLHNldE5vUHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9hZGVkLHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RmlsdGVycyxzZXRTaG93RmlsdGVyc10gPSB1c2VTdGF0ZShmYWxzZSk7Ly9zaG93IGZpbHRlcnMgbWVudSBvciBub3RcclxuICAgIGNvbnN0IFtwcm9kdWN0cyxzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZSgpOy8vZGF0YSBvZiB0aGUgcHJvZHVjdHMgZmV0Y2hlciBmcm9tIGJhY2tlbmRcclxuICAgIGNvbnN0IFtmaWx0ZXJWYWx1ZXMsc2V0RmlsdGVyVmFsdWVzXT11c2VTdGF0ZSh7cHJpY2U6MCxjb2xvcjpbXSxzaXplOltdfSk7Ly92YWx1ZXMgdG8gc2VuZCB0byB0aGUgc2VydmVyIHRvIGZpbHRlclxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c1R5cGUgPSByb3V0ZXIucXVlcnkucHJvZHVjdHM7XHJcbiAgICBcclxuICAgIC8vdGFrZXMgdGhlIHBhcmFtcyBmcm9tIHF1ZXJ5IHN0cmluZ1xyXG4gICAgLy9jb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgLy9jb25zdCBuYW1lID0gc2VhcmNoUGFyYW1zLmdldCgnbmFtZScpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b29nbGVTaG93RmlsdGVycyA9IChib29sKSA9PntcclxuICAgICAgICBzZXRTaG93RmlsdGVycyhib29sKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVNldEZpbHRlclZhbHVlcyA9IChlKSA9PntcclxuICAgICAgICAvL3doYXQgdGhpcyBmdW5jdGlvbiBkb2VzXHJcbiAgICAgICAgLy8xLmNoZWNrcyB0aGUgdHlwZSBvZiB0aGUgaW5wdXRcclxuICAgICAgICAvLzIuaWYgaXRzIHJhbmdlIHR5cGUganVzdCB1cGRhdGUgdGhlIHZhbHVlIG9mIHByaWNlXHJcbiAgICAgICAgLy8zLmlmIGl0cyBjaGVja2JveCB0eXBlIGNoZWNrIGlzIGl0IHVuY2hlY2sgb3IgY2hlY2tlZCB2YWx1ZVxyXG4gICAgICAgIC8vNC5pZiBpdHMgY2hlY2tlZCB0aGVuIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIGFycmF5IFxyXG4gICAgICAgIC8vNS5pZiBub3QgdGhlbiBhZGQgaWRcclxuICAgICAgICAvLzYuaWYgdGhlIHZhbHVlIGlzIHVuY2tlY2tlZCB0aGVuIGZpbHRlciB0aGUgYXJyYXkgdG8gcmV0dXJuIGV2ZXJ5dGhpblxyXG4gICAgICAgIC8vZXhlcHQgdGhlIGVsZW1lbnQgd2l0aCB2YWx1ZSA9PT0gdGhlIHVuY2tlZCBib3hcclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQudHlwZSA9PT0gXCJyYW5nZVwiKXtcclxuICAgICAgICAgICAgc2V0RmlsdGVyVmFsdWVzKChwcmV2KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOmUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRlZChmYWxzZSlcclxuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC50eXBlPT09J2NoZWNrYm94Jyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGlmKCFmaWx0ZXJWYWx1ZXNbbmFtZV0uaW5jbHVkZXModmFsdWUpKXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlclZhbHVlcygocHJldik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06Wy4uLnByZXZbbmFtZV0sdmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyVmFsdWVzKChwcmV2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOiBwcmV2W25hbWVdLmZpbHRlcihpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlclByb2R1Y3RzID0gKCkgPT57XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVVJMICsgYC9maWx0ZXJQcm9kdWN0cz9wcm9kdWN0c1R5cGU9JHtwcm9kdWN0c1R5cGV9JiZwcmljZT0ke2ZpbHRlclZhbHVlcy5wcmljZX0mJmNvbG9ycz0ke2ZpbHRlclZhbHVlcy5jb2xvcn0mJnNpemVzPSR7ZmlsdGVyVmFsdWVzLnNpemV9YClcclxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgIH0sW2ZpbHRlclZhbHVlc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocHJvcHMucHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVyZW5kZXJcIilcclxuICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgLy9pZihpc0xvYWRlZCA9PT0gZmFsc2UpIHJldHVybiA8cD5Mb2FkaW5nPC9wPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHMtaGVhZGluZyc+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJzTWVudSBcclxuICAgICAgICAgICAgICAgICAgICBzaG93RmlsdGVycz17c2hvd0ZpbHRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2dsZVNob3dGaWx0ZXJzPXt0b29nbGVTaG93RmlsdGVyc31cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvcHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWJsZVNpemVzPXtwcm9wcy5hdmFpYmxlU2l6ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVmFsdWVzPXtmaWx0ZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2V0RmlsdGVyVmFsdWVzPXtoYW5kbGVTZXRGaWx0ZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxoMj5OdW1iZXIgb2YgcmVzdWx0cyA6IHtpc0xvYWRlZCAmJiBwcm9kdWN0cy5sZW5ndGh9PC9oMj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkcy1ob2xkZXInPlxyXG4gICAgICAgICAgICAgICAgeyAgIGlzTG9hZGVkPT09dHJ1ZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RzQ2FyZCBrZXk9e2l0ZW0uaWR9IGRhdGE9e2l0ZW19Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Qb3JkdWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J25vLXByb2R1Y3RzJz5ObyBwcm9kdWN0cyB3ZXJlIGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNUeXBlID0gY29udGV4dC5wYXJhbXMucHJvZHVjdHM7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5VUkwgKyBgL2dldFByb2R1Y3RzP3Byb2R1Y3RzVHlwZT0ke3Byb2R1Y3RzVHlwZX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcHJvZHVjdHM6ZGF0YS5kYXRhLFxyXG4gICAgICAgICAgcHJpY2U6e1xyXG4gICAgICAgICAgICAgIG1pblByaWNlOmRhdGEubWluUHJpY2UsXHJcbiAgICAgICAgICAgICAgbWF4UHJpY2U6ZGF0YS5tYXhQcmljZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF2YWlibGVTaXplczpkYXRhLmF2YWlibGVTaXplcyxcclxuICAgICAgICAgIG5hbWU6Y29udGV4dC5xdWVyeS5uYW1lXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdHNDYXJkIiwiRmlsdGVyc01lbnUiLCJQcm9kdWN0cyIsInByb3BzIiwibm9Qcm9kdWN0cyIsInNldE5vUHJvZHVjdHMiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwic2hvd0ZpbHRlcnMiLCJzZXRTaG93RmlsdGVycyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJwcmljZSIsImNvbG9yIiwic2l6ZSIsImZpbHRlclZhbHVlcyIsInNldEZpbHRlclZhbHVlcyIsInJvdXRlciIsInByb2R1Y3RzVHlwZSIsInF1ZXJ5IiwidG9vZ2xlU2hvd0ZpbHRlcnMiLCJib29sIiwiaGFuZGxlU2V0RmlsdGVyVmFsdWVzIiwiZSIsInRhcmdldCIsInR5cGUiLCJwcmV2IiwidmFsdWUiLCJuYW1lIiwiY2hlY2tlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsImZpbHRlclByb2R1Y3RzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYXZhaWJsZVNpemVzIiwibWFwIiwiaWQiLCJub1BvcmR1Y3RzIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/[mainCategory]/[subCategory]/[products]/index.jsx\n");

/***/ })

});