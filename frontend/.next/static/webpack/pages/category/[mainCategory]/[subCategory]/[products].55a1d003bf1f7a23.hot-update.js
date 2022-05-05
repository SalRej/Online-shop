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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ProductCard_ProductsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/ProductCard/ProductsCard */ \"./components/ProductCard/ProductsCard.jsx\");\n/* harmony import */ var _components_Filters_FiltersMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/Filters/FiltersMenu */ \"./components/Filters/FiltersMenu.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Products(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoaded = ref[0], setIsLoaded = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showFilters = ref1[0], setShowFilters = ref1[1]; //show filters menu or not\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), products = ref2[0], setProducts = ref2[1]; //data of the products fetcher from backend\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        price: 0,\n        color: [],\n        size: []\n    }), filterValues = ref3[0], setFilterValues = ref3[1]; //values to send to the server to filter\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var productsType = router.query.products;\n    //takes the params from query string\n    //const [searchParams] = useSearchParams();\n    //const name = searchParams.get('name');\n    var toogleShowFilters = function(bool) {\n        setShowFilters(bool);\n    };\n    var handleSetFilterValues = function(e) {\n        //what this function does\n        //1.checks the type of the input\n        //2.if its range type just update the value of price\n        //3.if its checkbox type check is it uncheck or checked value\n        //4.if its checked then check to see if it's already in the array \n        //5.if not then add id\n        //6.if the value is unckecked then filter the array to return everythin\n        //exept the element with value === the uncked box\n        if (e.target.type === \"range\") {\n            setFilterValues(function(prev) {\n                return _objectSpread({}, prev, {\n                    price: e.target.value\n                });\n            });\n            setIsLoaded(false);\n        } else if (e.target.type === \"checkbox\") {\n            var value = e.target.value;\n            var name = e.target.name;\n            if (e.target.checked === true) {\n                if (!filterValues[name].includes(value)) {\n                    setFilterValues(function(prev) {\n                        return _objectSpread({}, prev, _defineProperty({}, name, _toConsumableArray(prev[name]).concat([\n                            value\n                        ])));\n                    });\n                    setIsLoaded(false);\n                }\n            } else {\n                setFilterValues(function(prev) {\n                    return _objectSpread({}, prev, _defineProperty({}, name, prev[name].filter(function(item) {\n                        return item !== value;\n                    })));\n                });\n                setIsLoaded(false);\n            }\n        }\n    };\n    var filterProducts = function() {\n        fetch(\"http://localhost:5000\" + \"/filterProducts?productsType=\".concat(productsType, \"&&price=\").concat(filterValues.price, \"&&colors=\").concat(filterValues.color, \"&&sizes=\").concat(filterValues.size)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setProducts(data);\n            setIsLoaded(true);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        filterProducts();\n    }, [\n        filterValues\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setProducts(props.products);\n        console.log(\"rerender\");\n        setIsLoaded(true);\n    }, []);\n    //if(isLoaded === false) return <p>Loading</p>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters_FiltersMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    showFilters: showFilters,\n                    toogleShowFilters: toogleShowFilters,\n                    price: props.price,\n                    avaibleSizes: props.avaibleSizes,\n                    filterValues: filterValues,\n                    handleSetFilterValues: handleSetFilterValues\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-holder\",\n                children: isLoaded === true && products.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard_ProductsCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        data: item\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 32\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sa\\\\Desktop\\\\Proekti\\\\react-online-shop\\\\Online-shop\\\\frontend\\\\pages\\\\category\\\\[mainCategory]\\\\[subCategory]\\\\[products]\\\\index.jsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"Ymp20S2OMimeF37gfqb5ky6CJhQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bbWFpbkNhdGVnb3J5XS9bc3ViQ2F0ZWdvcnldL1twcm9kdWN0c10vaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNzQztBQUNOOztBQUN4RSxTQUFTTSxRQUFRLENBQUNDLEtBQUssRUFBRTs7O0lBRXJCLElBQStCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTmxELFFBTW1CLEdBQWdCQSxHQUFlLEdBQS9CLEVBTm5CLFdBTStCLEdBQUlBLEdBQWUsR0FBbkI7SUFDM0IsSUFBcUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQeEQsV0FPc0IsR0FBbUJBLElBQWUsR0FBbEMsRUFQdEIsY0FPcUMsR0FBSUEsSUFBZSxHQUFuQixFQUFvQiwwQkFBMEI7SUFDL0UsSUFBK0JBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVI3QyxRQVFtQixHQUFnQkEsSUFBVSxHQUExQixFQVJuQixXQVErQixHQUFJQSxJQUFVLEdBQWQsRUFBZSwyQ0FBMkM7SUFDckYsSUFBcUNBLElBQW9DLEdBQXBDQSwrQ0FBUSxDQUFDO1FBQUNZLEtBQUssRUFBQyxDQUFDO1FBQUNDLEtBQUssRUFBQyxFQUFFO1FBQUNDLElBQUksRUFBQyxFQUFFO0tBQUMsQ0FBQyxFQVQ3RSxZQVN1QixHQUFrQmQsSUFBb0MsR0FBdEQsRUFUdkIsZUFTdUMsR0FBRUEsSUFBb0MsR0FBdEMsRUFBdUMsd0NBQXdDO0lBR2xILElBQU1pQixNQUFNLEdBQUdoQixzREFBUyxFQUFFO0lBQzFCLElBQU1pQixZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDVCxRQUFRO0lBRTFDLG9DQUFvQztJQUNwQywyQ0FBMkM7SUFDM0Msd0NBQXdDO0lBRXhDLElBQU1VLGlCQUFpQixHQUFHLFNBQUNDLElB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OEM7SUFDOUMscUJBQ0ksOERBQUNxQyxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjswQkFFN0IsNEVBQUMxQyx1RUFBVztvQkFDUkssV0FBVyxFQUFFQSxXQUFXO29CQUN4QlksaUJBQWlCLEVBQUVBLGlCQUFpQjtvQkFDcENSLEtBQUssRUFBRVAsS0FBSyxDQUFDTyxLQUFLO29CQUNsQmtDLFlBQVksRUFBRXpDLEtBQUssQ0FBQ3lDLFlBQVk7b0JBQ2hDL0IsWUFBWSxFQUFFQSxZQUFZO29CQUMxQk8scUJBQXFCLEVBQUVBLHFCQUFxQjs7Ozs7d0JBQzlDOzs7OztvQkFDQTswQkFFTiw4REFBQ3NCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxjQUFjOzBCQUNyQnZDLFFBQVEsS0FBRyxJQUFJLElBQ2ZJLFFBQVEsQ0FBQ3FDLEdBQUcsQ0FBQ2YsU0FBQUEsSUFBSSxFQUFFO29CQUNmLHFCQUFPLDhEQUFDOUIsNEVBQVk7d0JBQWV1QyxJQUFJLEVBQUVULElBQUk7dUJBQW5CQSxJQUFJLENBQUNnQixFQUFFOzs7OzZCQUFlLENBQUM7aUJBQ3BELENBQUM7Ozs7O29CQUVKOzs7Ozs7WUFDSixDQUNUO0NBQ0o7R0EzR1E1QyxRQUFROztRQVFFSCxrREFBUzs7O0FBUm5CRyxLQUFBQSxRQUFROztBQTZIakIsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW21haW5DYXRlZ29yeV0vW3N1YkNhdGVnb3J5XS9bcHJvZHVjdHNdL2luZGV4LmpzeD9jOTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb2R1Y3RzQ2FyZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1Byb2R1Y3RzQ2FyZCc7XHJcbmltcG9ydCBGaWx0ZXJzTWVudSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyc01lbnUnO1xyXG5mdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRlZCxzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0ZpbHRlcnMsc2V0U2hvd0ZpbHRlcnNdID0gdXNlU3RhdGUoZmFsc2UpOy8vc2hvdyBmaWx0ZXJzIG1lbnUgb3Igbm90XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoKTsvL2RhdGEgb2YgdGhlIHByb2R1Y3RzIGZldGNoZXIgZnJvbSBiYWNrZW5kXHJcbiAgICBjb25zdCBbZmlsdGVyVmFsdWVzLHNldEZpbHRlclZhbHVlc109dXNlU3RhdGUoe3ByaWNlOjAsY29sb3I6W10sc2l6ZTpbXX0pOy8vdmFsdWVzIHRvIHNlbmQgdG8gdGhlIHNlcnZlciB0byBmaWx0ZXJcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcHJvZHVjdHNUeXBlID0gcm91dGVyLnF1ZXJ5LnByb2R1Y3RzO1xyXG4gICAgXHJcbiAgICAvL3Rha2VzIHRoZSBwYXJhbXMgZnJvbSBxdWVyeSBzdHJpbmdcclxuICAgIC8vY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIC8vY29uc3QgbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ25hbWUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9vZ2xlU2hvd0ZpbHRlcnMgPSAoYm9vbCkgPT57XHJcbiAgICAgICAgc2V0U2hvd0ZpbHRlcnMoYm9vbCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTZXRGaWx0ZXJWYWx1ZXMgPSAoZSkgPT57XHJcbiAgICAgICAgLy93aGF0IHRoaXMgZnVuY3Rpb24gZG9lc1xyXG4gICAgICAgIC8vMS5jaGVja3MgdGhlIHR5cGUgb2YgdGhlIGlucHV0XHJcbiAgICAgICAgLy8yLmlmIGl0cyByYW5nZSB0eXBlIGp1c3QgdXBkYXRlIHRoZSB2YWx1ZSBvZiBwcmljZVxyXG4gICAgICAgIC8vMy5pZiBpdHMgY2hlY2tib3ggdHlwZSBjaGVjayBpcyBpdCB1bmNoZWNrIG9yIGNoZWNrZWQgdmFsdWVcclxuICAgICAgICAvLzQuaWYgaXRzIGNoZWNrZWQgdGhlbiBjaGVjayB0byBzZWUgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBhcnJheSBcclxuICAgICAgICAvLzUuaWYgbm90IHRoZW4gYWRkIGlkXHJcbiAgICAgICAgLy82LmlmIHRoZSB2YWx1ZSBpcyB1bmNrZWNrZWQgdGhlbiBmaWx0ZXIgdGhlIGFycmF5IHRvIHJldHVybiBldmVyeXRoaW5cclxuICAgICAgICAvL2V4ZXB0IHRoZSBlbGVtZW50IHdpdGggdmFsdWUgPT09IHRoZSB1bmNrZWQgYm94XHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LnR5cGUgPT09IFwicmFuZ2VcIil7XHJcbiAgICAgICAgICAgIHNldEZpbHRlclZhbHVlcygocHJldik9PntcclxuICAgICAgICAgICAgICAgIHJldHVybih7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTplLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQoZmFsc2UpXHJcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQudHlwZT09PSdjaGVja2JveCcpe1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZighZmlsdGVyVmFsdWVzW25hbWVdLmluY2x1ZGVzKHZhbHVlKSl7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJWYWx1ZXMoKHByZXYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdOlsuLi5wcmV2W25hbWVdLHZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlclZhbHVlcygocHJldik9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcHJldltuYW1lXS5maWx0ZXIoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJQcm9kdWN0cyA9ICgpID0+e1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlVSTCArIGAvZmlsdGVyUHJvZHVjdHM/cHJvZHVjdHNUeXBlPSR7cHJvZHVjdHNUeXBlfSYmcHJpY2U9JHtmaWx0ZXJWYWx1ZXMucHJpY2V9JiZjb2xvcnM9JHtmaWx0ZXJWYWx1ZXMuY29sb3J9JiZzaXplcz0ke2ZpbHRlclZhbHVlcy5zaXplfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICB9LFtmaWx0ZXJWYWx1ZXNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHByb3BzLnByb2R1Y3RzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlcmVuZGVyXCIpXHJcbiAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIC8vaWYoaXNMb2FkZWQgPT09IGZhbHNlKSByZXR1cm4gPHA+TG9hZGluZzwvcD5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzLWhlYWRpbmcnPlxyXG4gICAgICAgICAgICAgICAgey8qIDxoMj57bmFtZX08L2gyPiAqL31cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJzTWVudSBcclxuICAgICAgICAgICAgICAgICAgICBzaG93RmlsdGVycz17c2hvd0ZpbHRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2dsZVNob3dGaWx0ZXJzPXt0b29nbGVTaG93RmlsdGVyc31cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvcHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWJsZVNpemVzPXtwcm9wcy5hdmFpYmxlU2l6ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVmFsdWVzPXtmaWx0ZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2V0RmlsdGVyVmFsdWVzPXtoYW5kbGVTZXRGaWx0ZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxoMj5OdW1iZXIgb2YgcmVzdWx0cyA6IHtpc0xvYWRlZCAmJiBwcm9kdWN0cy5sZW5ndGh9PC9oMj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkcy1ob2xkZXInPlxyXG4gICAgICAgICAgICAgICAgeyAgIGlzTG9hZGVkPT09dHJ1ZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RzQ2FyZCBrZXk9e2l0ZW0uaWR9IGRhdGE9e2l0ZW19Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNUeXBlID0gY29udGV4dC5wYXJhbXMucHJvZHVjdHM7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5VUkwgKyBgL2dldFByb2R1Y3RzP3Byb2R1Y3RzVHlwZT0ke3Byb2R1Y3RzVHlwZX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcHJvZHVjdHM6ZGF0YS5kYXRhLFxyXG4gICAgICAgICAgcHJpY2U6e1xyXG4gICAgICAgICAgICAgIG1pblByaWNlOmRhdGEubWluUHJpY2UsXHJcbiAgICAgICAgICAgICAgbWF4UHJpY2U6ZGF0YS5tYXhQcmljZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF2YWlibGVTaXplczpkYXRhLmF2YWlibGVTaXplcyxcclxuICAgICAgICAgIG5hbWU6cHJvZHVjdHNUeXBlXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdHNDYXJkIiwiRmlsdGVyc01lbnUiLCJQcm9kdWN0cyIsInByb3BzIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInNob3dGaWx0ZXJzIiwic2V0U2hvd0ZpbHRlcnMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicHJpY2UiLCJjb2xvciIsInNpemUiLCJmaWx0ZXJWYWx1ZXMiLCJzZXRGaWx0ZXJWYWx1ZXMiLCJyb3V0ZXIiLCJwcm9kdWN0c1R5cGUiLCJxdWVyeSIsInRvb2dsZVNob3dGaWx0ZXJzIiwiYm9vbCIsImhhbmRsZVNldEZpbHRlclZhbHVlcyIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicHJldiIsInZhbHVlIiwibmFtZSIsImNoZWNrZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsIml0ZW0iLCJmaWx0ZXJQcm9kdWN0cyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlVSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhdmFpYmxlU2l6ZXMiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/[mainCategory]/[subCategory]/[products]/index.jsx\n");

/***/ })

});