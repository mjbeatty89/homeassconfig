
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirefe65"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirefe65"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("k63il", function(module, exports) {

$parcel$export(module.exports, "default", () => $ea16ec7e0d69904b$export$2e2bcd8739ae039);

var $hcfeX = parcelRequire("hcfeX");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, $hcfeX.default).Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
var $ea16ec7e0d69904b$export$2e2bcd8739ae039 = cloneBuffer;

});
parcelRegister("hcfeX", function(module, exports) {

$parcel$export(module.exports, "default", () => $c84f610a11e93076$export$2e2bcd8739ae039);

var $650B5 = parcelRequire("650B5");
/** Detect free variable `self`. */ var $c84f610a11e93076$var$freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $c84f610a11e93076$var$root = (0, $650B5.default) || $c84f610a11e93076$var$freeSelf || Function('return this')();
var $c84f610a11e93076$export$2e2bcd8739ae039 = $c84f610a11e93076$var$root;

});
parcelRegister("650B5", function(module, exports) {

$parcel$export(module.exports, "default", () => $46d3ac447e18307e$export$2e2bcd8739ae039);
/** Detect free variable `global` from Node.js. */ var $46d3ac447e18307e$var$freeGlobal = typeof $parcel$global == 'object' && $parcel$global && $parcel$global.Object === Object && $parcel$global;
var $46d3ac447e18307e$export$2e2bcd8739ae039 = $46d3ac447e18307e$var$freeGlobal;

});



parcelRegister("iDbNV", function(module, exports) {

$parcel$export(module.exports, "default", () => $d90506931a767f55$export$2e2bcd8739ae039);

var $hcfeX = parcelRequire("hcfeX");

var $d7Bo5 = parcelRequire("d7Bo5");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, $hcfeX.default).Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || (0, $d7Bo5.default);
var $d90506931a767f55$export$2e2bcd8739ae039 = isBuffer;

});
parcelRegister("d7Bo5", function(module, exports) {

$parcel$export(module.exports, "default", () => $98d8ee35e041190c$export$2e2bcd8739ae039);
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function $98d8ee35e041190c$var$stubFalse() {
    return false;
}
var $98d8ee35e041190c$export$2e2bcd8739ae039 = $98d8ee35e041190c$var$stubFalse;

});


parcelRegister("93yOW", function(module, exports) {

$parcel$export(module.exports, "default", () => $697f678a30ce7eaa$export$2e2bcd8739ae039);

var $650B5 = parcelRequire("650B5");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && (0, $650B5.default).process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
var $697f678a30ce7eaa$export$2e2bcd8739ae039 = nodeUtil;

});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $f33b121d8786b813$var$extendStatics = function(d, b) {
    $f33b121d8786b813$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $f33b121d8786b813$var$extendStatics(d, b);
};
function $f33b121d8786b813$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $f33b121d8786b813$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $f33b121d8786b813$export$18ce0697a983be9b = function() {
    $f33b121d8786b813$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $f33b121d8786b813$export$18ce0697a983be9b.apply(this, arguments);
};
function $f33b121d8786b813$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $f33b121d8786b813$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $f33b121d8786b813$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $f33b121d8786b813$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $f33b121d8786b813$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $f33b121d8786b813$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $f33b121d8786b813$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $f33b121d8786b813$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $f33b121d8786b813$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
}
function $f33b121d8786b813$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $f33b121d8786b813$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $f33b121d8786b813$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $f33b121d8786b813$export$45d3717a4c69092e(o, m, p);
}
function $f33b121d8786b813$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $f33b121d8786b813$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $f33b121d8786b813$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($f33b121d8786b813$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $f33b121d8786b813$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $f33b121d8786b813$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $f33b121d8786b813$export$10c90e4f7922046c(v) {
    return this instanceof $f33b121d8786b813$export$10c90e4f7922046c ? (this.v = v, this) : new $f33b121d8786b813$export$10c90e4f7922046c(v);
}
function $f33b121d8786b813$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $f33b121d8786b813$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $f33b121d8786b813$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $f33b121d8786b813$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $f33b121d8786b813$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $f33b121d8786b813$export$19a8beecd37a4c45 === "function" ? $f33b121d8786b813$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $f33b121d8786b813$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $f33b121d8786b813$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $f33b121d8786b813$var$ownKeys = function(o) {
    $f33b121d8786b813$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $f33b121d8786b813$var$ownKeys(o);
};
function $f33b121d8786b813$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $f33b121d8786b813$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $f33b121d8786b813$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $f33b121d8786b813$var$__setModuleDefault(result, mod);
    return result;
}
function $f33b121d8786b813$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $f33b121d8786b813$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $f33b121d8786b813$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $f33b121d8786b813$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $f33b121d8786b813$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $f33b121d8786b813$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $f33b121d8786b813$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $f33b121d8786b813$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $f33b121d8786b813$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $f33b121d8786b813$export$2e2bcd8739ae039 = {
    __extends: $f33b121d8786b813$export$a8ba968b8961cb8a,
    __assign: $f33b121d8786b813$export$18ce0697a983be9b,
    __rest: $f33b121d8786b813$export$3c9a16f847548506,
    __decorate: $f33b121d8786b813$export$29e00dfd3077644b,
    __param: $f33b121d8786b813$export$d5ad3fd78186038f,
    __esDecorate: $f33b121d8786b813$export$3a84e1ae4e97e9b0,
    __runInitializers: $f33b121d8786b813$export$d831c04e792af3d,
    __propKey: $f33b121d8786b813$export$6a2a36740a146cb8,
    __setFunctionName: $f33b121d8786b813$export$d1a06452d3489bc7,
    __metadata: $f33b121d8786b813$export$f1db080c865becb9,
    __awaiter: $f33b121d8786b813$export$1050f835b63b671e,
    __generator: $f33b121d8786b813$export$67ebef60e6f28a6,
    __createBinding: $f33b121d8786b813$export$45d3717a4c69092e,
    __exportStar: $f33b121d8786b813$export$f33643c0debef087,
    __values: $f33b121d8786b813$export$19a8beecd37a4c45,
    __read: $f33b121d8786b813$export$8d051b38c9118094,
    __spread: $f33b121d8786b813$export$afc72e2116322959,
    __spreadArrays: $f33b121d8786b813$export$6388937ca91ccae8,
    __spreadArray: $f33b121d8786b813$export$1216008129fb82ed,
    __await: $f33b121d8786b813$export$10c90e4f7922046c,
    __asyncGenerator: $f33b121d8786b813$export$e427f37a30a4de9b,
    __asyncDelegator: $f33b121d8786b813$export$bbd80228419bb833,
    __asyncValues: $f33b121d8786b813$export$e3b29a3d6162315f,
    __makeTemplateObject: $f33b121d8786b813$export$4fb47efe1390b86f,
    __importStar: $f33b121d8786b813$export$c21735bcef00d192,
    __importDefault: $f33b121d8786b813$export$da59b14a69baef04,
    __classPrivateFieldGet: $f33b121d8786b813$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $f33b121d8786b813$export$d40a35129aaff81f,
    __classPrivateFieldIn: $f33b121d8786b813$export$81fdc39f203e4e04,
    __addDisposableResource: $f33b121d8786b813$export$88ac25d8e944e405,
    __disposeResources: $f33b121d8786b813$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $f33b121d8786b813$export$889dfb5d17574b0b
};


/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function $f13c85f9ae0a44ab$var$listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
var $f13c85f9ae0a44ab$export$2e2bcd8739ae039 = $f13c85f9ae0a44ab$var$listCacheClear;


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function $fda4384b78d96ad0$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
var $fda4384b78d96ad0$export$2e2bcd8739ae039 = $fda4384b78d96ad0$var$eq;


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function $4b881f8c36c831be$var$assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ((0, $fda4384b78d96ad0$export$2e2bcd8739ae039)(array[length][0], key)) return length;
    }
    return -1;
}
var $4b881f8c36c831be$export$2e2bcd8739ae039 = $4b881f8c36c831be$var$assocIndexOf;


/** Used for built-in method references. */ var $aed03f5471efd656$var$arrayProto = Array.prototype;
/** Built-in value references. */ var $aed03f5471efd656$var$splice = $aed03f5471efd656$var$arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $aed03f5471efd656$var$listCacheDelete(key) {
    var data = this.__data__, index = (0, $4b881f8c36c831be$export$2e2bcd8739ae039)(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else $aed03f5471efd656$var$splice.call(data, index, 1);
    --this.size;
    return true;
}
var $aed03f5471efd656$export$2e2bcd8739ae039 = $aed03f5471efd656$var$listCacheDelete;



/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $b82f0c1fae09a59f$var$listCacheGet(key) {
    var data = this.__data__, index = (0, $4b881f8c36c831be$export$2e2bcd8739ae039)(data, key);
    return index < 0 ? undefined : data[index][1];
}
var $b82f0c1fae09a59f$export$2e2bcd8739ae039 = $b82f0c1fae09a59f$var$listCacheGet;



/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $37beb15e56d5b70f$var$listCacheHas(key) {
    return (0, $4b881f8c36c831be$export$2e2bcd8739ae039)(this.__data__, key) > -1;
}
var $37beb15e56d5b70f$export$2e2bcd8739ae039 = $37beb15e56d5b70f$var$listCacheHas;



/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function $21b99a49d3b09b27$var$listCacheSet(key, value) {
    var data = this.__data__, index = (0, $4b881f8c36c831be$export$2e2bcd8739ae039)(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
var $21b99a49d3b09b27$export$2e2bcd8739ae039 = $21b99a49d3b09b27$var$listCacheSet;


/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $b33f1734b5006cfd$var$ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
$b33f1734b5006cfd$var$ListCache.prototype.clear = (0, $f13c85f9ae0a44ab$export$2e2bcd8739ae039);
$b33f1734b5006cfd$var$ListCache.prototype['delete'] = (0, $aed03f5471efd656$export$2e2bcd8739ae039);
$b33f1734b5006cfd$var$ListCache.prototype.get = (0, $b82f0c1fae09a59f$export$2e2bcd8739ae039);
$b33f1734b5006cfd$var$ListCache.prototype.has = (0, $37beb15e56d5b70f$export$2e2bcd8739ae039);
$b33f1734b5006cfd$var$ListCache.prototype.set = (0, $21b99a49d3b09b27$export$2e2bcd8739ae039);
var $b33f1734b5006cfd$export$2e2bcd8739ae039 = $b33f1734b5006cfd$var$ListCache;



/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function $833ba610f949dd4f$var$stackClear() {
    this.__data__ = new (0, $b33f1734b5006cfd$export$2e2bcd8739ae039);
    this.size = 0;
}
var $833ba610f949dd4f$export$2e2bcd8739ae039 = $833ba610f949dd4f$var$stackClear;


/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $86704622dd2bd25e$var$stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
var $86704622dd2bd25e$export$2e2bcd8739ae039 = $86704622dd2bd25e$var$stackDelete;


/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $da10b27b5328e499$var$stackGet(key) {
    return this.__data__.get(key);
}
var $da10b27b5328e499$export$2e2bcd8739ae039 = $da10b27b5328e499$var$stackGet;


/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $738b227853436ae2$var$stackHas(key) {
    return this.__data__.has(key);
}
var $738b227853436ae2$export$2e2bcd8739ae039 = $738b227853436ae2$var$stackHas;




var $hcfeX = parcelRequire("hcfeX");
/** Built-in value references. */ var $3b8da15b2f986e77$var$Symbol = (0, $hcfeX.default).Symbol;
var $3b8da15b2f986e77$export$2e2bcd8739ae039 = $3b8da15b2f986e77$var$Symbol;



/** Used for built-in method references. */ var $865a131e1176a122$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $865a131e1176a122$var$hasOwnProperty = $865a131e1176a122$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $865a131e1176a122$var$nativeObjectToString = $865a131e1176a122$var$objectProto.toString;
/** Built-in value references. */ var $865a131e1176a122$var$symToStringTag = (0, $3b8da15b2f986e77$export$2e2bcd8739ae039) ? (0, $3b8da15b2f986e77$export$2e2bcd8739ae039).toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $865a131e1176a122$var$getRawTag(value) {
    var isOwn = $865a131e1176a122$var$hasOwnProperty.call(value, $865a131e1176a122$var$symToStringTag), tag = value[$865a131e1176a122$var$symToStringTag];
    try {
        value[$865a131e1176a122$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $865a131e1176a122$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$865a131e1176a122$var$symToStringTag] = tag;
        else delete value[$865a131e1176a122$var$symToStringTag];
    }
    return result;
}
var $865a131e1176a122$export$2e2bcd8739ae039 = $865a131e1176a122$var$getRawTag;


/** Used for built-in method references. */ var $e3b6221e937296c2$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $e3b6221e937296c2$var$nativeObjectToString = $e3b6221e937296c2$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $e3b6221e937296c2$var$objectToString(value) {
    return $e3b6221e937296c2$var$nativeObjectToString.call(value);
}
var $e3b6221e937296c2$export$2e2bcd8739ae039 = $e3b6221e937296c2$var$objectToString;


/** `Object#toString` result references. */ var $de72ebb851f120e2$var$nullTag = '[object Null]', $de72ebb851f120e2$var$undefinedTag = '[object Undefined]';
/** Built-in value references. */ var $de72ebb851f120e2$var$symToStringTag = (0, $3b8da15b2f986e77$export$2e2bcd8739ae039) ? (0, $3b8da15b2f986e77$export$2e2bcd8739ae039).toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $de72ebb851f120e2$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $de72ebb851f120e2$var$undefinedTag : $de72ebb851f120e2$var$nullTag;
    return $de72ebb851f120e2$var$symToStringTag && $de72ebb851f120e2$var$symToStringTag in Object(value) ? (0, $865a131e1176a122$export$2e2bcd8739ae039)(value) : (0, $e3b6221e937296c2$export$2e2bcd8739ae039)(value);
}
var $de72ebb851f120e2$export$2e2bcd8739ae039 = $de72ebb851f120e2$var$baseGetTag;


/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $b9d887c38969fda7$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
var $b9d887c38969fda7$export$2e2bcd8739ae039 = $b9d887c38969fda7$var$isObject;


/** `Object#toString` result references. */ var $68eade924c218bd1$var$asyncTag = '[object AsyncFunction]', $68eade924c218bd1$var$funcTag = '[object Function]', $68eade924c218bd1$var$genTag = '[object GeneratorFunction]', $68eade924c218bd1$var$proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function $68eade924c218bd1$var$isFunction(value) {
    if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, $de72ebb851f120e2$export$2e2bcd8739ae039)(value);
    return tag == $68eade924c218bd1$var$funcTag || tag == $68eade924c218bd1$var$genTag || tag == $68eade924c218bd1$var$asyncTag || tag == $68eade924c218bd1$var$proxyTag;
}
var $68eade924c218bd1$export$2e2bcd8739ae039 = $68eade924c218bd1$var$isFunction;



var $hcfeX = parcelRequire("hcfeX");
/** Used to detect overreaching core-js shims. */ var $c7a5870b1d5babc5$var$coreJsData = (0, $hcfeX.default)['__core-js_shared__'];
var $c7a5870b1d5babc5$export$2e2bcd8739ae039 = $c7a5870b1d5babc5$var$coreJsData;


/** Used to detect methods masquerading as native. */ var $93d5c3bf043e4626$var$maskSrcKey = function() {
    var uid = /[^.]+$/.exec((0, $c7a5870b1d5babc5$export$2e2bcd8739ae039) && (0, $c7a5870b1d5babc5$export$2e2bcd8739ae039).keys && (0, $c7a5870b1d5babc5$export$2e2bcd8739ae039).keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function $93d5c3bf043e4626$var$isMasked(func) {
    return !!$93d5c3bf043e4626$var$maskSrcKey && $93d5c3bf043e4626$var$maskSrcKey in func;
}
var $93d5c3bf043e4626$export$2e2bcd8739ae039 = $93d5c3bf043e4626$var$isMasked;



/** Used for built-in method references. */ var $c438dd0576173c7c$var$funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var $c438dd0576173c7c$var$funcToString = $c438dd0576173c7c$var$funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function $c438dd0576173c7c$var$toSource(func) {
    if (func != null) {
        try {
            return $c438dd0576173c7c$var$funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
var $c438dd0576173c7c$export$2e2bcd8739ae039 = $c438dd0576173c7c$var$toSource;


/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var $12caaf0ac647602b$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var $12caaf0ac647602b$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var $12caaf0ac647602b$var$funcProto = Function.prototype, $12caaf0ac647602b$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $12caaf0ac647602b$var$funcToString = $12caaf0ac647602b$var$funcProto.toString;
/** Used to check objects for own properties. */ var $12caaf0ac647602b$var$hasOwnProperty = $12caaf0ac647602b$var$objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var $12caaf0ac647602b$var$reIsNative = RegExp('^' + $12caaf0ac647602b$var$funcToString.call($12caaf0ac647602b$var$hasOwnProperty).replace($12caaf0ac647602b$var$reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function $12caaf0ac647602b$var$baseIsNative(value) {
    if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(value) || (0, $93d5c3bf043e4626$export$2e2bcd8739ae039)(value)) return false;
    var pattern = (0, $68eade924c218bd1$export$2e2bcd8739ae039)(value) ? $12caaf0ac647602b$var$reIsNative : $12caaf0ac647602b$var$reIsHostCtor;
    return pattern.test((0, $c438dd0576173c7c$export$2e2bcd8739ae039)(value));
}
var $12caaf0ac647602b$export$2e2bcd8739ae039 = $12caaf0ac647602b$var$baseIsNative;


/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $70d12ab5175e66ef$var$getValue(object, key) {
    return object == null ? undefined : object[key];
}
var $70d12ab5175e66ef$export$2e2bcd8739ae039 = $70d12ab5175e66ef$var$getValue;


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function $a82cd8972d97ac79$var$getNative(object, key) {
    var value = (0, $70d12ab5175e66ef$export$2e2bcd8739ae039)(object, key);
    return (0, $12caaf0ac647602b$export$2e2bcd8739ae039)(value) ? value : undefined;
}
var $a82cd8972d97ac79$export$2e2bcd8739ae039 = $a82cd8972d97ac79$var$getNative;



var $hcfeX = parcelRequire("hcfeX");
/* Built-in method references that are verified to be native. */ var $d7c4c577630c21a3$var$Map = (0, $a82cd8972d97ac79$export$2e2bcd8739ae039)((0, $hcfeX.default), 'Map');
var $d7c4c577630c21a3$export$2e2bcd8739ae039 = $d7c4c577630c21a3$var$Map;



/* Built-in method references that are verified to be native. */ var $471c140affbb0174$var$nativeCreate = (0, $a82cd8972d97ac79$export$2e2bcd8739ae039)(Object, 'create');
var $471c140affbb0174$export$2e2bcd8739ae039 = $471c140affbb0174$var$nativeCreate;


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function $7bfa9de3c15fb305$var$hashClear() {
    this.__data__ = (0, $471c140affbb0174$export$2e2bcd8739ae039) ? (0, $471c140affbb0174$export$2e2bcd8739ae039)(null) : {};
    this.size = 0;
}
var $7bfa9de3c15fb305$export$2e2bcd8739ae039 = $7bfa9de3c15fb305$var$hashClear;


/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $54f365f517e19f35$var$hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
var $54f365f517e19f35$export$2e2bcd8739ae039 = $54f365f517e19f35$var$hashDelete;



/** Used to stand-in for `undefined` hash values. */ var $9bdb325049c85f08$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var $9bdb325049c85f08$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $9bdb325049c85f08$var$hasOwnProperty = $9bdb325049c85f08$var$objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $9bdb325049c85f08$var$hashGet(key) {
    var data = this.__data__;
    if (0, $471c140affbb0174$export$2e2bcd8739ae039) {
        var result = data[key];
        return result === $9bdb325049c85f08$var$HASH_UNDEFINED ? undefined : result;
    }
    return $9bdb325049c85f08$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
}
var $9bdb325049c85f08$export$2e2bcd8739ae039 = $9bdb325049c85f08$var$hashGet;



/** Used for built-in method references. */ var $8c2dedcc88eb1dd6$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $8c2dedcc88eb1dd6$var$hasOwnProperty = $8c2dedcc88eb1dd6$var$objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $8c2dedcc88eb1dd6$var$hashHas(key) {
    var data = this.__data__;
    return (0, $471c140affbb0174$export$2e2bcd8739ae039) ? data[key] !== undefined : $8c2dedcc88eb1dd6$var$hasOwnProperty.call(data, key);
}
var $8c2dedcc88eb1dd6$export$2e2bcd8739ae039 = $8c2dedcc88eb1dd6$var$hashHas;



/** Used to stand-in for `undefined` hash values. */ var $b227f3f145ad4a0f$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function $b227f3f145ad4a0f$var$hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (0, $471c140affbb0174$export$2e2bcd8739ae039) && value === undefined ? $b227f3f145ad4a0f$var$HASH_UNDEFINED : value;
    return this;
}
var $b227f3f145ad4a0f$export$2e2bcd8739ae039 = $b227f3f145ad4a0f$var$hashSet;


/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $2f2f503c286c919e$var$Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
$2f2f503c286c919e$var$Hash.prototype.clear = (0, $7bfa9de3c15fb305$export$2e2bcd8739ae039);
$2f2f503c286c919e$var$Hash.prototype['delete'] = (0, $54f365f517e19f35$export$2e2bcd8739ae039);
$2f2f503c286c919e$var$Hash.prototype.get = (0, $9bdb325049c85f08$export$2e2bcd8739ae039);
$2f2f503c286c919e$var$Hash.prototype.has = (0, $8c2dedcc88eb1dd6$export$2e2bcd8739ae039);
$2f2f503c286c919e$var$Hash.prototype.set = (0, $b227f3f145ad4a0f$export$2e2bcd8739ae039);
var $2f2f503c286c919e$export$2e2bcd8739ae039 = $2f2f503c286c919e$var$Hash;




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function $7d4bea679b5b4546$var$mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new (0, $2f2f503c286c919e$export$2e2bcd8739ae039),
        'map': new ((0, $d7c4c577630c21a3$export$2e2bcd8739ae039) || (0, $b33f1734b5006cfd$export$2e2bcd8739ae039)),
        'string': new (0, $2f2f503c286c919e$export$2e2bcd8739ae039)
    };
}
var $7d4bea679b5b4546$export$2e2bcd8739ae039 = $7d4bea679b5b4546$var$mapCacheClear;


/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function $aba4241df9b0e3ea$var$isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
var $aba4241df9b0e3ea$export$2e2bcd8739ae039 = $aba4241df9b0e3ea$var$isKeyable;


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function $59f2c375426d6d6c$var$getMapData(map, key) {
    var data = map.__data__;
    return (0, $aba4241df9b0e3ea$export$2e2bcd8739ae039)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
var $59f2c375426d6d6c$export$2e2bcd8739ae039 = $59f2c375426d6d6c$var$getMapData;


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $9f67136ebf31a226$var$mapCacheDelete(key) {
    var result = (0, $59f2c375426d6d6c$export$2e2bcd8739ae039)(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
var $9f67136ebf31a226$export$2e2bcd8739ae039 = $9f67136ebf31a226$var$mapCacheDelete;



/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $8dada1d092517c5e$var$mapCacheGet(key) {
    return (0, $59f2c375426d6d6c$export$2e2bcd8739ae039)(this, key).get(key);
}
var $8dada1d092517c5e$export$2e2bcd8739ae039 = $8dada1d092517c5e$var$mapCacheGet;



/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $6bce82612e14a58e$var$mapCacheHas(key) {
    return (0, $59f2c375426d6d6c$export$2e2bcd8739ae039)(this, key).has(key);
}
var $6bce82612e14a58e$export$2e2bcd8739ae039 = $6bce82612e14a58e$var$mapCacheHas;



/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function $748d20d979d4afc5$var$mapCacheSet(key, value) {
    var data = (0, $59f2c375426d6d6c$export$2e2bcd8739ae039)(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
var $748d20d979d4afc5$export$2e2bcd8739ae039 = $748d20d979d4afc5$var$mapCacheSet;


/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $acf923f236584542$var$MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
$acf923f236584542$var$MapCache.prototype.clear = (0, $7d4bea679b5b4546$export$2e2bcd8739ae039);
$acf923f236584542$var$MapCache.prototype['delete'] = (0, $9f67136ebf31a226$export$2e2bcd8739ae039);
$acf923f236584542$var$MapCache.prototype.get = (0, $8dada1d092517c5e$export$2e2bcd8739ae039);
$acf923f236584542$var$MapCache.prototype.has = (0, $6bce82612e14a58e$export$2e2bcd8739ae039);
$acf923f236584542$var$MapCache.prototype.set = (0, $748d20d979d4afc5$export$2e2bcd8739ae039);
var $acf923f236584542$export$2e2bcd8739ae039 = $acf923f236584542$var$MapCache;


/** Used as the size to enable large array optimizations. */ var $91e6b95d46ea488b$var$LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function $91e6b95d46ea488b$var$stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof (0, $b33f1734b5006cfd$export$2e2bcd8739ae039)) {
        var pairs = data.__data__;
        if (!(0, $d7c4c577630c21a3$export$2e2bcd8739ae039) || pairs.length < $91e6b95d46ea488b$var$LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new (0, $acf923f236584542$export$2e2bcd8739ae039)(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
var $91e6b95d46ea488b$export$2e2bcd8739ae039 = $91e6b95d46ea488b$var$stackSet;


/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $59f5fa0ba5dd221d$var$Stack(entries) {
    var data = this.__data__ = new (0, $b33f1734b5006cfd$export$2e2bcd8739ae039)(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
$59f5fa0ba5dd221d$var$Stack.prototype.clear = (0, $833ba610f949dd4f$export$2e2bcd8739ae039);
$59f5fa0ba5dd221d$var$Stack.prototype['delete'] = (0, $86704622dd2bd25e$export$2e2bcd8739ae039);
$59f5fa0ba5dd221d$var$Stack.prototype.get = (0, $da10b27b5328e499$export$2e2bcd8739ae039);
$59f5fa0ba5dd221d$var$Stack.prototype.has = (0, $738b227853436ae2$export$2e2bcd8739ae039);
$59f5fa0ba5dd221d$var$Stack.prototype.set = (0, $91e6b95d46ea488b$export$2e2bcd8739ae039);
var $59f5fa0ba5dd221d$export$2e2bcd8739ae039 = $59f5fa0ba5dd221d$var$Stack;



var $2e9be55edda91197$var$defineProperty = function() {
    try {
        var func = (0, $a82cd8972d97ac79$export$2e2bcd8739ae039)(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
var $2e9be55edda91197$export$2e2bcd8739ae039 = $2e9be55edda91197$var$defineProperty;


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function $edc08170675910d5$var$baseAssignValue(object, key, value) {
    if (key == '__proto__' && (0, $2e9be55edda91197$export$2e2bcd8739ae039)) (0, $2e9be55edda91197$export$2e2bcd8739ae039)(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
    });
    else object[key] = value;
}
var $edc08170675910d5$export$2e2bcd8739ae039 = $edc08170675910d5$var$baseAssignValue;



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function $5b92afb0eedb3be3$var$assignMergeValue(object, key, value) {
    if (value !== undefined && !(0, $fda4384b78d96ad0$export$2e2bcd8739ae039)(object[key], value) || value === undefined && !(key in object)) (0, $edc08170675910d5$export$2e2bcd8739ae039)(object, key, value);
}
var $5b92afb0eedb3be3$export$2e2bcd8739ae039 = $5b92afb0eedb3be3$var$assignMergeValue;


/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function $44e240a11b829ae0$var$createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
var $44e240a11b829ae0$export$2e2bcd8739ae039 = $44e240a11b829ae0$var$createBaseFor;


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var $db291a15bbcda851$var$baseFor = (0, $44e240a11b829ae0$export$2e2bcd8739ae039)();
var $db291a15bbcda851$export$2e2bcd8739ae039 = $db291a15bbcda851$var$baseFor;




var $k63il = parcelRequire("k63il");

var $hcfeX = parcelRequire("hcfeX");
/** Built-in value references. */ var $9c8c080709217daf$var$Uint8Array = (0, $hcfeX.default).Uint8Array;
var $9c8c080709217daf$export$2e2bcd8739ae039 = $9c8c080709217daf$var$Uint8Array;


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function $de06b4c9bdd5b20e$var$cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new (0, $9c8c080709217daf$export$2e2bcd8739ae039)(result).set(new (0, $9c8c080709217daf$export$2e2bcd8739ae039)(arrayBuffer));
    return result;
}
var $de06b4c9bdd5b20e$export$2e2bcd8739ae039 = $de06b4c9bdd5b20e$var$cloneArrayBuffer;


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function $f53d426364cb320b$var$cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, $de06b4c9bdd5b20e$export$2e2bcd8739ae039)(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var $f53d426364cb320b$export$2e2bcd8739ae039 = $f53d426364cb320b$var$cloneTypedArray;


/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function $65b29d06d873ab0c$var$copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
var $65b29d06d873ab0c$export$2e2bcd8739ae039 = $65b29d06d873ab0c$var$copyArray;



/** Built-in value references. */ var $36ac51de6989a986$var$objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var $36ac51de6989a986$var$baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(proto)) return {};
        if ($36ac51de6989a986$var$objectCreate) return $36ac51de6989a986$var$objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
var $36ac51de6989a986$export$2e2bcd8739ae039 = $36ac51de6989a986$var$baseCreate;


/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $f117f94d036d2cfa$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
var $f117f94d036d2cfa$export$2e2bcd8739ae039 = $f117f94d036d2cfa$var$overArg;


/** Built-in value references. */ var $8c791a1e279086b7$var$getPrototype = (0, $f117f94d036d2cfa$export$2e2bcd8739ae039)(Object.getPrototypeOf, Object);
var $8c791a1e279086b7$export$2e2bcd8739ae039 = $8c791a1e279086b7$var$getPrototype;


/** Used for built-in method references. */ var $38e924363d56bacd$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $38e924363d56bacd$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || $38e924363d56bacd$var$objectProto;
    return value === proto;
}
var $38e924363d56bacd$export$2e2bcd8739ae039 = $38e924363d56bacd$var$isPrototype;


/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function $e60a5ee78691012a$var$initCloneObject(object) {
    return typeof object.constructor == 'function' && !(0, $38e924363d56bacd$export$2e2bcd8739ae039)(object) ? (0, $36ac51de6989a986$export$2e2bcd8739ae039)((0, $8c791a1e279086b7$export$2e2bcd8739ae039)(object)) : {};
}
var $e60a5ee78691012a$export$2e2bcd8739ae039 = $e60a5ee78691012a$var$initCloneObject;



/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $54140d3eba340999$var$isObjectLike(value) {
    return value != null && typeof value == 'object';
}
var $54140d3eba340999$export$2e2bcd8739ae039 = $54140d3eba340999$var$isObjectLike;


/** `Object#toString` result references. */ var $6d5715ab1c6b0255$var$argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $6d5715ab1c6b0255$var$baseIsArguments(value) {
    return (0, $54140d3eba340999$export$2e2bcd8739ae039)(value) && (0, $de72ebb851f120e2$export$2e2bcd8739ae039)(value) == $6d5715ab1c6b0255$var$argsTag;
}
var $6d5715ab1c6b0255$export$2e2bcd8739ae039 = $6d5715ab1c6b0255$var$baseIsArguments;



/** Used for built-in method references. */ var $aefc2fbc1f361678$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $aefc2fbc1f361678$var$hasOwnProperty = $aefc2fbc1f361678$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $aefc2fbc1f361678$var$propertyIsEnumerable = $aefc2fbc1f361678$var$objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var $aefc2fbc1f361678$var$isArguments = (0, $6d5715ab1c6b0255$export$2e2bcd8739ae039)(function() {
    return arguments;
}()) ? (0, $6d5715ab1c6b0255$export$2e2bcd8739ae039) : function(value) {
    return (0, $54140d3eba340999$export$2e2bcd8739ae039)(value) && $aefc2fbc1f361678$var$hasOwnProperty.call(value, 'callee') && !$aefc2fbc1f361678$var$propertyIsEnumerable.call(value, 'callee');
};
var $aefc2fbc1f361678$export$2e2bcd8739ae039 = $aefc2fbc1f361678$var$isArguments;


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var $3f7286cc6608d7d0$var$isArray = Array.isArray;
var $3f7286cc6608d7d0$export$2e2bcd8739ae039 = $3f7286cc6608d7d0$var$isArray;



/** Used as references for various `Number` constants. */ var $266c61a70049c877$var$MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function $266c61a70049c877$var$isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= $266c61a70049c877$var$MAX_SAFE_INTEGER;
}
var $266c61a70049c877$export$2e2bcd8739ae039 = $266c61a70049c877$var$isLength;


/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function $ea8cdeee92e5caca$var$isArrayLike(value) {
    return value != null && (0, $266c61a70049c877$export$2e2bcd8739ae039)(value.length) && !(0, $68eade924c218bd1$export$2e2bcd8739ae039)(value);
}
var $ea8cdeee92e5caca$export$2e2bcd8739ae039 = $ea8cdeee92e5caca$var$isArrayLike;



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function $af948f4389ea964a$var$isArrayLikeObject(value) {
    return (0, $54140d3eba340999$export$2e2bcd8739ae039)(value) && (0, $ea8cdeee92e5caca$export$2e2bcd8739ae039)(value);
}
var $af948f4389ea964a$export$2e2bcd8739ae039 = $af948f4389ea964a$var$isArrayLikeObject;



var $iDbNV = parcelRequire("iDbNV");





/** `Object#toString` result references. */ var $4e9c7f5f471a53cc$var$objectTag = '[object Object]';
/** Used for built-in method references. */ var $4e9c7f5f471a53cc$var$funcProto = Function.prototype, $4e9c7f5f471a53cc$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $4e9c7f5f471a53cc$var$funcToString = $4e9c7f5f471a53cc$var$funcProto.toString;
/** Used to check objects for own properties. */ var $4e9c7f5f471a53cc$var$hasOwnProperty = $4e9c7f5f471a53cc$var$objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var $4e9c7f5f471a53cc$var$objectCtorString = $4e9c7f5f471a53cc$var$funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function $4e9c7f5f471a53cc$var$isPlainObject(value) {
    if (!(0, $54140d3eba340999$export$2e2bcd8739ae039)(value) || (0, $de72ebb851f120e2$export$2e2bcd8739ae039)(value) != $4e9c7f5f471a53cc$var$objectTag) return false;
    var proto = (0, $8c791a1e279086b7$export$2e2bcd8739ae039)(value);
    if (proto === null) return true;
    var Ctor = $4e9c7f5f471a53cc$var$hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && $4e9c7f5f471a53cc$var$funcToString.call(Ctor) == $4e9c7f5f471a53cc$var$objectCtorString;
}
var $4e9c7f5f471a53cc$export$2e2bcd8739ae039 = $4e9c7f5f471a53cc$var$isPlainObject;





/** `Object#toString` result references. */ var $f7661edc4758c93d$var$argsTag = '[object Arguments]', $f7661edc4758c93d$var$arrayTag = '[object Array]', $f7661edc4758c93d$var$boolTag = '[object Boolean]', $f7661edc4758c93d$var$dateTag = '[object Date]', $f7661edc4758c93d$var$errorTag = '[object Error]', $f7661edc4758c93d$var$funcTag = '[object Function]', $f7661edc4758c93d$var$mapTag = '[object Map]', $f7661edc4758c93d$var$numberTag = '[object Number]', $f7661edc4758c93d$var$objectTag = '[object Object]', $f7661edc4758c93d$var$regexpTag = '[object RegExp]', $f7661edc4758c93d$var$setTag = '[object Set]', $f7661edc4758c93d$var$stringTag = '[object String]', $f7661edc4758c93d$var$weakMapTag = '[object WeakMap]';
var $f7661edc4758c93d$var$arrayBufferTag = '[object ArrayBuffer]', $f7661edc4758c93d$var$dataViewTag = '[object DataView]', $f7661edc4758c93d$var$float32Tag = '[object Float32Array]', $f7661edc4758c93d$var$float64Tag = '[object Float64Array]', $f7661edc4758c93d$var$int8Tag = '[object Int8Array]', $f7661edc4758c93d$var$int16Tag = '[object Int16Array]', $f7661edc4758c93d$var$int32Tag = '[object Int32Array]', $f7661edc4758c93d$var$uint8Tag = '[object Uint8Array]', $f7661edc4758c93d$var$uint8ClampedTag = '[object Uint8ClampedArray]', $f7661edc4758c93d$var$uint16Tag = '[object Uint16Array]', $f7661edc4758c93d$var$uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var $f7661edc4758c93d$var$typedArrayTags = {};
$f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$float32Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$float64Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$int8Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$int16Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$int32Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$uint8Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$uint8ClampedTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$uint16Tag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$uint32Tag] = true;
$f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$argsTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$arrayTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$arrayBufferTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$boolTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$dataViewTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$dateTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$errorTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$funcTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$mapTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$numberTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$objectTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$regexpTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$setTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$stringTag] = $f7661edc4758c93d$var$typedArrayTags[$f7661edc4758c93d$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $f7661edc4758c93d$var$baseIsTypedArray(value) {
    return (0, $54140d3eba340999$export$2e2bcd8739ae039)(value) && (0, $266c61a70049c877$export$2e2bcd8739ae039)(value.length) && !!$f7661edc4758c93d$var$typedArrayTags[(0, $de72ebb851f120e2$export$2e2bcd8739ae039)(value)];
}
var $f7661edc4758c93d$export$2e2bcd8739ae039 = $f7661edc4758c93d$var$baseIsTypedArray;


/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $9c6740c437a059d2$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
var $9c6740c437a059d2$export$2e2bcd8739ae039 = $9c6740c437a059d2$var$baseUnary;



var $93yOW = parcelRequire("93yOW");
/* Node.js helper references. */ var $79a040b4ecac7eae$var$nodeIsTypedArray = (0, $93yOW.default) && (0, $93yOW.default).isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var $79a040b4ecac7eae$var$isTypedArray = $79a040b4ecac7eae$var$nodeIsTypedArray ? (0, $9c6740c437a059d2$export$2e2bcd8739ae039)($79a040b4ecac7eae$var$nodeIsTypedArray) : (0, $f7661edc4758c93d$export$2e2bcd8739ae039);
var $79a040b4ecac7eae$export$2e2bcd8739ae039 = $79a040b4ecac7eae$var$isTypedArray;


/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $244c3f83f13b0fae$var$safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') return;
    if (key == '__proto__') return;
    return object[key];
}
var $244c3f83f13b0fae$export$2e2bcd8739ae039 = $244c3f83f13b0fae$var$safeGet;




/** Used for built-in method references. */ var $51d9417621c6c88a$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $51d9417621c6c88a$var$hasOwnProperty = $51d9417621c6c88a$var$objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function $51d9417621c6c88a$var$assignValue(object, key, value) {
    var objValue = object[key];
    if (!($51d9417621c6c88a$var$hasOwnProperty.call(object, key) && (0, $fda4384b78d96ad0$export$2e2bcd8739ae039)(objValue, value)) || value === undefined && !(key in object)) (0, $edc08170675910d5$export$2e2bcd8739ae039)(object, key, value);
}
var $51d9417621c6c88a$export$2e2bcd8739ae039 = $51d9417621c6c88a$var$assignValue;



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function $095c0e4912575ade$var$copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) (0, $edc08170675910d5$export$2e2bcd8739ae039)(object, key, newValue);
        else (0, $51d9417621c6c88a$export$2e2bcd8739ae039)(object, key, newValue);
    }
    return object;
}
var $095c0e4912575ade$export$2e2bcd8739ae039 = $095c0e4912575ade$var$copyObject;


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function $6ae68597932aaa40$var$baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
var $6ae68597932aaa40$export$2e2bcd8739ae039 = $6ae68597932aaa40$var$baseTimes;





var $iDbNV = parcelRequire("iDbNV");
/** Used as references for various `Number` constants. */ var $995cf214d0fddeb3$var$MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var $995cf214d0fddeb3$var$reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function $995cf214d0fddeb3$var$isIndex(value, length) {
    var type = typeof value;
    length = length == null ? $995cf214d0fddeb3$var$MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && $995cf214d0fddeb3$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var $995cf214d0fddeb3$export$2e2bcd8739ae039 = $995cf214d0fddeb3$var$isIndex;



/** Used for built-in method references. */ var $ad0b471539fc44cc$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $ad0b471539fc44cc$var$hasOwnProperty = $ad0b471539fc44cc$var$objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function $ad0b471539fc44cc$var$arrayLikeKeys(value, inherited) {
    var isArr = (0, $3f7286cc6608d7d0$export$2e2bcd8739ae039)(value), isArg = !isArr && (0, $aefc2fbc1f361678$export$2e2bcd8739ae039)(value), isBuff = !isArr && !isArg && (0, $iDbNV.default)(value), isType = !isArr && !isArg && !isBuff && (0, $79a040b4ecac7eae$export$2e2bcd8739ae039)(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? (0, $6ae68597932aaa40$export$2e2bcd8739ae039)(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || $ad0b471539fc44cc$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    (0, $995cf214d0fddeb3$export$2e2bcd8739ae039)(key, length)))) result.push(key);
    return result;
}
var $ad0b471539fc44cc$export$2e2bcd8739ae039 = $ad0b471539fc44cc$var$arrayLikeKeys;




/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $ad0567b42ae11350$var$nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
var $ad0567b42ae11350$export$2e2bcd8739ae039 = $ad0567b42ae11350$var$nativeKeysIn;


/** Used for built-in method references. */ var $c5febd811b2ffb99$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $c5febd811b2ffb99$var$hasOwnProperty = $c5febd811b2ffb99$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $c5febd811b2ffb99$var$baseKeysIn(object) {
    if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(object)) return (0, $ad0567b42ae11350$export$2e2bcd8739ae039)(object);
    var isProto = (0, $38e924363d56bacd$export$2e2bcd8739ae039)(object), result = [];
    for(var key in object)if (!(key == 'constructor' && (isProto || !$c5febd811b2ffb99$var$hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
var $c5febd811b2ffb99$export$2e2bcd8739ae039 = $c5febd811b2ffb99$var$baseKeysIn;



/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function $b0d74920018ae1e7$var$keysIn(object) {
    return (0, $ea8cdeee92e5caca$export$2e2bcd8739ae039)(object) ? (0, $ad0b471539fc44cc$export$2e2bcd8739ae039)(object, true) : (0, $c5febd811b2ffb99$export$2e2bcd8739ae039)(object);
}
var $b0d74920018ae1e7$export$2e2bcd8739ae039 = $b0d74920018ae1e7$var$keysIn;


/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */ function $6c9e3dfbadeceac0$var$toPlainObject(value) {
    return (0, $095c0e4912575ade$export$2e2bcd8739ae039)(value, (0, $b0d74920018ae1e7$export$2e2bcd8739ae039)(value));
}
var $6c9e3dfbadeceac0$export$2e2bcd8739ae039 = $6c9e3dfbadeceac0$var$toPlainObject;


/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function $94e772760e353c51$var$baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = (0, $244c3f83f13b0fae$export$2e2bcd8739ae039)(object, key), srcValue = (0, $244c3f83f13b0fae$export$2e2bcd8739ae039)(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        (0, $5b92afb0eedb3be3$export$2e2bcd8739ae039)(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = (0, $3f7286cc6608d7d0$export$2e2bcd8739ae039)(srcValue), isBuff = !isArr && (0, $iDbNV.default)(srcValue), isTyped = !isArr && !isBuff && (0, $79a040b4ecac7eae$export$2e2bcd8739ae039)(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if ((0, $3f7286cc6608d7d0$export$2e2bcd8739ae039)(objValue)) newValue = objValue;
            else if ((0, $af948f4389ea964a$export$2e2bcd8739ae039)(objValue)) newValue = (0, $65b29d06d873ab0c$export$2e2bcd8739ae039)(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = (0, $k63il.default)(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = (0, $f53d426364cb320b$export$2e2bcd8739ae039)(srcValue, true);
            } else newValue = [];
        } else if ((0, $4e9c7f5f471a53cc$export$2e2bcd8739ae039)(srcValue) || (0, $aefc2fbc1f361678$export$2e2bcd8739ae039)(srcValue)) {
            newValue = objValue;
            if ((0, $aefc2fbc1f361678$export$2e2bcd8739ae039)(objValue)) newValue = (0, $6c9e3dfbadeceac0$export$2e2bcd8739ae039)(objValue);
            else if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(objValue) || (0, $68eade924c218bd1$export$2e2bcd8739ae039)(objValue)) newValue = (0, $e60a5ee78691012a$export$2e2bcd8739ae039)(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
    }
    (0, $5b92afb0eedb3be3$export$2e2bcd8739ae039)(object, key, newValue);
}
var $94e772760e353c51$export$2e2bcd8739ae039 = $94e772760e353c51$var$baseMergeDeep;





/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function $0a012fa29169ad5b$var$baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    (0, $db291a15bbcda851$export$2e2bcd8739ae039)(source, function(srcValue, key) {
        stack || (stack = new (0, $59f5fa0ba5dd221d$export$2e2bcd8739ae039));
        if ((0, $b9d887c38969fda7$export$2e2bcd8739ae039)(srcValue)) (0, $94e772760e353c51$export$2e2bcd8739ae039)(object, source, key, srcIndex, $0a012fa29169ad5b$var$baseMerge, customizer, stack);
        else {
            var newValue = customizer ? customizer((0, $244c3f83f13b0fae$export$2e2bcd8739ae039)(object, key), srcValue, key + '', object, source, stack) : undefined;
            if (newValue === undefined) newValue = srcValue;
            (0, $5b92afb0eedb3be3$export$2e2bcd8739ae039)(object, key, newValue);
        }
    }, (0, $b0d74920018ae1e7$export$2e2bcd8739ae039));
}
var $0a012fa29169ad5b$export$2e2bcd8739ae039 = $0a012fa29169ad5b$var$baseMerge;


/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function $87a75e4209ff521a$var$identity(value) {
    return value;
}
var $87a75e4209ff521a$export$2e2bcd8739ae039 = $87a75e4209ff521a$var$identity;


/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function $31ed4372ce96e8ea$var$apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
var $31ed4372ce96e8ea$export$2e2bcd8739ae039 = $31ed4372ce96e8ea$var$apply;


/* Built-in method references for those with the same name as other `lodash` methods. */ var $05f01db67821ab2b$var$nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function $05f01db67821ab2b$var$overRest(func, start, transform) {
    start = $05f01db67821ab2b$var$nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = $05f01db67821ab2b$var$nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return (0, $31ed4372ce96e8ea$export$2e2bcd8739ae039)(func, this, otherArgs);
    };
}
var $05f01db67821ab2b$export$2e2bcd8739ae039 = $05f01db67821ab2b$var$overRest;


/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function $591d99ef18a295aa$var$constant(value) {
    return function() {
        return value;
    };
}
var $591d99ef18a295aa$export$2e2bcd8739ae039 = $591d99ef18a295aa$var$constant;




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var $9f81d0f573d06b67$var$baseSetToString = !(0, $2e9be55edda91197$export$2e2bcd8739ae039) ? (0, $87a75e4209ff521a$export$2e2bcd8739ae039) : function(func, string) {
    return (0, $2e9be55edda91197$export$2e2bcd8739ae039)(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': (0, $591d99ef18a295aa$export$2e2bcd8739ae039)(string),
        'writable': true
    });
};
var $9f81d0f573d06b67$export$2e2bcd8739ae039 = $9f81d0f573d06b67$var$baseSetToString;


/** Used to detect hot functions by number of calls within a span of milliseconds. */ var $d6a1884753ece4fa$var$HOT_COUNT = 800, $d6a1884753ece4fa$var$HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $d6a1884753ece4fa$var$nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function $d6a1884753ece4fa$var$shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = $d6a1884753ece4fa$var$nativeNow(), remaining = $d6a1884753ece4fa$var$HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= $d6a1884753ece4fa$var$HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
var $d6a1884753ece4fa$export$2e2bcd8739ae039 = $d6a1884753ece4fa$var$shortOut;


/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var $3ef764265433b45e$var$setToString = (0, $d6a1884753ece4fa$export$2e2bcd8739ae039)((0, $9f81d0f573d06b67$export$2e2bcd8739ae039));
var $3ef764265433b45e$export$2e2bcd8739ae039 = $3ef764265433b45e$var$setToString;


/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function $056d9737814e7915$var$baseRest(func, start) {
    return (0, $3ef764265433b45e$export$2e2bcd8739ae039)((0, $05f01db67821ab2b$export$2e2bcd8739ae039)(func, start, (0, $87a75e4209ff521a$export$2e2bcd8739ae039)), func + '');
}
var $056d9737814e7915$export$2e2bcd8739ae039 = $056d9737814e7915$var$baseRest;






/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function $3a529fc13854c7ec$var$isIterateeCall(value, index, object) {
    if (!(0, $b9d887c38969fda7$export$2e2bcd8739ae039)(object)) return false;
    var type = typeof index;
    if (type == 'number' ? (0, $ea8cdeee92e5caca$export$2e2bcd8739ae039)(object) && (0, $995cf214d0fddeb3$export$2e2bcd8739ae039)(index, object.length) : type == 'string' && index in object) return (0, $fda4384b78d96ad0$export$2e2bcd8739ae039)(object[index], value);
    return false;
}
var $3a529fc13854c7ec$export$2e2bcd8739ae039 = $3a529fc13854c7ec$var$isIterateeCall;


/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function $65a7cab16a26d8af$var$createAssigner(assigner) {
    return (0, $056d9737814e7915$export$2e2bcd8739ae039)(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
        if (guard && (0, $3a529fc13854c7ec$export$2e2bcd8739ae039)(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
var $65a7cab16a26d8af$export$2e2bcd8739ae039 = $65a7cab16a26d8af$var$createAssigner;


/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */ var $7d34737af2e0c897$var$merge = (0, $65a7cab16a26d8af$export$2e2bcd8739ae039)(function(object, source, srcIndex) {
    (0, $0a012fa29169ad5b$export$2e2bcd8739ae039)(object, source, srcIndex);
});
var $7d34737af2e0c897$export$2e2bcd8739ae039 = $7d34737af2e0c897$var$merge;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $69a36672d671e49d$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b1fa9b0acaf40b20$var$t = globalThis, $b1fa9b0acaf40b20$export$b4d10f6001c083c2 = $b1fa9b0acaf40b20$var$t.ShadowRoot && (void 0 === $b1fa9b0acaf40b20$var$t.ShadyCSS || $b1fa9b0acaf40b20$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $b1fa9b0acaf40b20$var$s = Symbol(), $b1fa9b0acaf40b20$var$o = new WeakMap;
class $b1fa9b0acaf40b20$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $b1fa9b0acaf40b20$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($b1fa9b0acaf40b20$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $b1fa9b0acaf40b20$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $b1fa9b0acaf40b20$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $b1fa9b0acaf40b20$export$8d80f9cac07cdb3 = (t)=>new $b1fa9b0acaf40b20$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $b1fa9b0acaf40b20$var$s), $b1fa9b0acaf40b20$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $b1fa9b0acaf40b20$export$505d1e8739bad805(o, t, $b1fa9b0acaf40b20$var$s);
}, $b1fa9b0acaf40b20$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($b1fa9b0acaf40b20$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $b1fa9b0acaf40b20$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $b1fa9b0acaf40b20$export$ee69dfd951e24778 = $b1fa9b0acaf40b20$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $b1fa9b0acaf40b20$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $b7da6541276cd110$var$i, defineProperty: $b7da6541276cd110$var$e, getOwnPropertyDescriptor: $b7da6541276cd110$var$h, getOwnPropertyNames: $b7da6541276cd110$var$r, getOwnPropertySymbols: $b7da6541276cd110$var$o, getPrototypeOf: $b7da6541276cd110$var$n } = Object, $b7da6541276cd110$var$a = globalThis, $b7da6541276cd110$var$c = $b7da6541276cd110$var$a.trustedTypes, $b7da6541276cd110$var$l = $b7da6541276cd110$var$c ? $b7da6541276cd110$var$c.emptyScript : "", $b7da6541276cd110$var$p = $b7da6541276cd110$var$a.reactiveElementPolyfillSupport, $b7da6541276cd110$var$d = (t, s)=>t, $b7da6541276cd110$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $b7da6541276cd110$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $b7da6541276cd110$export$53a6892c50694894 = (t, s)=>!$b7da6541276cd110$var$i(t, s), $b7da6541276cd110$var$b = {
    attribute: !0,
    type: String,
    converter: $b7da6541276cd110$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $b7da6541276cd110$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $b7da6541276cd110$var$a.litPropertyMetadata ??= new WeakMap;
class $b7da6541276cd110$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $b7da6541276cd110$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $b7da6541276cd110$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $b7da6541276cd110$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $b7da6541276cd110$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($b7da6541276cd110$var$d("elementProperties"))) return;
        const t = $b7da6541276cd110$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($b7da6541276cd110$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($b7da6541276cd110$var$d("properties"))) {
            const t = this.properties, s = [
                ...$b7da6541276cd110$var$r(t),
                ...$b7da6541276cd110$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $b1fa9b0acaf40b20$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $b1fa9b0acaf40b20$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $b1fa9b0acaf40b20$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $b7da6541276cd110$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $b7da6541276cd110$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $b7da6541276cd110$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$b7da6541276cd110$export$c7c07a37856565d.elementStyles = [], $b7da6541276cd110$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $b7da6541276cd110$export$c7c07a37856565d[$b7da6541276cd110$var$d("elementProperties")] = new Map, $b7da6541276cd110$export$c7c07a37856565d[$b7da6541276cd110$var$d("finalized")] = new Map, $b7da6541276cd110$var$p?.({
    ReactiveElement: $b7da6541276cd110$export$c7c07a37856565d
}), ($b7da6541276cd110$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $acb99ac649e303dc$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $b7da6541276cd110$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $b7da6541276cd110$export$53a6892c50694894)
}, $acb99ac649e303dc$export$8d623b1670eb40f4 = (t = $acb99ac649e303dc$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $acb99ac649e303dc$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $acb99ac649e303dc$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $51a92eda89022b33$export$ca000e230c0caa3e(r) {
    return (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $afb8fefa21e04caf$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $c4283a9507079251$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $94045ccc1df6ada5$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $c4283a9507079251$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $c4283a9507079251$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $70c11d1dfaaf1a18$var$e;
function $70c11d1dfaaf1a18$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $c4283a9507079251$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($70c11d1dfaaf1a18$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $d68b28d748967ce8$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $c4283a9507079251$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $dcd2dedbce378935$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $c4283a9507079251$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $d0a1d5b6aca44566$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $c4283a9507079251$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ad0512c2874d4e1a$var$t = globalThis, $ad0512c2874d4e1a$var$i = $ad0512c2874d4e1a$var$t.trustedTypes, $ad0512c2874d4e1a$var$s = $ad0512c2874d4e1a$var$i ? $ad0512c2874d4e1a$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $ad0512c2874d4e1a$var$e = "$lit$", $ad0512c2874d4e1a$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $ad0512c2874d4e1a$var$o = "?" + $ad0512c2874d4e1a$var$h, $ad0512c2874d4e1a$var$n = `<${$ad0512c2874d4e1a$var$o}>`, $ad0512c2874d4e1a$var$r = document, $ad0512c2874d4e1a$var$l = ()=>$ad0512c2874d4e1a$var$r.createComment(""), $ad0512c2874d4e1a$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $ad0512c2874d4e1a$var$a = Array.isArray, $ad0512c2874d4e1a$var$u = (t)=>$ad0512c2874d4e1a$var$a(t) || "function" == typeof t?.[Symbol.iterator], $ad0512c2874d4e1a$var$d = "[ \t\n\f\r]", $ad0512c2874d4e1a$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $ad0512c2874d4e1a$var$v = /-->/g, $ad0512c2874d4e1a$var$_ = />/g, $ad0512c2874d4e1a$var$m = RegExp(`>|${$ad0512c2874d4e1a$var$d}(?:([^\\s"'>=/]+)(${$ad0512c2874d4e1a$var$d}*=${$ad0512c2874d4e1a$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $ad0512c2874d4e1a$var$p = /'/g, $ad0512c2874d4e1a$var$g = /"/g, $ad0512c2874d4e1a$var$$ = /^(?:script|style|textarea|title)$/i, $ad0512c2874d4e1a$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $ad0512c2874d4e1a$export$c0bb0b647f701bb5 = $ad0512c2874d4e1a$var$y(1), $ad0512c2874d4e1a$export$7ed1367e7fa1ad68 = $ad0512c2874d4e1a$var$y(2), $ad0512c2874d4e1a$export$47d5b44d225be5b4 = $ad0512c2874d4e1a$var$y(3), $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $ad0512c2874d4e1a$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $ad0512c2874d4e1a$var$A = new WeakMap, $ad0512c2874d4e1a$var$C = $ad0512c2874d4e1a$var$r.createTreeWalker($ad0512c2874d4e1a$var$r, 129);
function $ad0512c2874d4e1a$var$P(t, i) {
    if (!$ad0512c2874d4e1a$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $ad0512c2874d4e1a$var$s ? $ad0512c2874d4e1a$var$s.createHTML(i) : i;
}
const $ad0512c2874d4e1a$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $ad0512c2874d4e1a$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $ad0512c2874d4e1a$var$f ? "!--" === u[1] ? c = $ad0512c2874d4e1a$var$v : void 0 !== u[1] ? c = $ad0512c2874d4e1a$var$_ : void 0 !== u[2] ? ($ad0512c2874d4e1a$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $ad0512c2874d4e1a$var$m) : void 0 !== u[3] && (c = $ad0512c2874d4e1a$var$m) : c === $ad0512c2874d4e1a$var$m ? ">" === u[0] ? (c = r ?? $ad0512c2874d4e1a$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $ad0512c2874d4e1a$var$m : '"' === u[3] ? $ad0512c2874d4e1a$var$g : $ad0512c2874d4e1a$var$p) : c === $ad0512c2874d4e1a$var$g || c === $ad0512c2874d4e1a$var$p ? c = $ad0512c2874d4e1a$var$m : c === $ad0512c2874d4e1a$var$v || c === $ad0512c2874d4e1a$var$_ ? c = $ad0512c2874d4e1a$var$f : (c = $ad0512c2874d4e1a$var$m, r = void 0);
        const x = c === $ad0512c2874d4e1a$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $ad0512c2874d4e1a$var$f ? s + $ad0512c2874d4e1a$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $ad0512c2874d4e1a$var$e + s.slice(d) + $ad0512c2874d4e1a$var$h + x) : s + $ad0512c2874d4e1a$var$h + (-2 === d ? i : x);
    }
    return [
        $ad0512c2874d4e1a$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $ad0512c2874d4e1a$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $ad0512c2874d4e1a$var$V(t, s);
        if (this.el = $ad0512c2874d4e1a$var$N.createElement(f, n), $ad0512c2874d4e1a$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $ad0512c2874d4e1a$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($ad0512c2874d4e1a$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($ad0512c2874d4e1a$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $ad0512c2874d4e1a$var$H : "?" === e[1] ? $ad0512c2874d4e1a$var$I : "@" === e[1] ? $ad0512c2874d4e1a$var$L : $ad0512c2874d4e1a$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($ad0512c2874d4e1a$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($ad0512c2874d4e1a$var$$.test(r.tagName)) {
                    const t = r.textContent.split($ad0512c2874d4e1a$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $ad0512c2874d4e1a$var$i ? $ad0512c2874d4e1a$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $ad0512c2874d4e1a$var$l()), $ad0512c2874d4e1a$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $ad0512c2874d4e1a$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $ad0512c2874d4e1a$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($ad0512c2874d4e1a$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $ad0512c2874d4e1a$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $ad0512c2874d4e1a$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $ad0512c2874d4e1a$var$S(t, i, s = t, e) {
    if (i === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $ad0512c2874d4e1a$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $ad0512c2874d4e1a$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $ad0512c2874d4e1a$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $ad0512c2874d4e1a$var$r).importNode(i, !0);
        $ad0512c2874d4e1a$var$C.currentNode = e;
        let h = $ad0512c2874d4e1a$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $ad0512c2874d4e1a$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $ad0512c2874d4e1a$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $ad0512c2874d4e1a$var$C.nextNode(), o++);
        }
        return $ad0512c2874d4e1a$var$C.currentNode = $ad0512c2874d4e1a$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $ad0512c2874d4e1a$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $ad0512c2874d4e1a$var$S(this, t, i), $ad0512c2874d4e1a$var$c(t) ? t === $ad0512c2874d4e1a$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $ad0512c2874d4e1a$export$45b790e32b2810ee && this._$AR(), this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee) : t !== this._$AH && t !== $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $ad0512c2874d4e1a$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $ad0512c2874d4e1a$export$45b790e32b2810ee && $ad0512c2874d4e1a$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($ad0512c2874d4e1a$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $ad0512c2874d4e1a$var$N.createElement($ad0512c2874d4e1a$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $ad0512c2874d4e1a$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $ad0512c2874d4e1a$var$A.get(t.strings);
        return void 0 === i && $ad0512c2874d4e1a$var$A.set(t.strings, i = new $ad0512c2874d4e1a$var$N(t)), i;
    }
    k(t) {
        $ad0512c2874d4e1a$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $ad0512c2874d4e1a$var$R(this.O($ad0512c2874d4e1a$var$l()), this.O($ad0512c2874d4e1a$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $ad0512c2874d4e1a$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $ad0512c2874d4e1a$var$S(this, t, i, 0), o = !$ad0512c2874d4e1a$var$c(t) || t !== this._$AH && t !== $ad0512c2874d4e1a$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $ad0512c2874d4e1a$var$S(this, e[s + n], i, n), r === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$ad0512c2874d4e1a$var$c(r) || r !== this._$AH[n], r === $ad0512c2874d4e1a$export$45b790e32b2810ee ? t = $ad0512c2874d4e1a$export$45b790e32b2810ee : t !== $ad0512c2874d4e1a$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $ad0512c2874d4e1a$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $ad0512c2874d4e1a$var$H extends $ad0512c2874d4e1a$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $ad0512c2874d4e1a$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $ad0512c2874d4e1a$var$I extends $ad0512c2874d4e1a$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $ad0512c2874d4e1a$export$45b790e32b2810ee);
    }
}
class $ad0512c2874d4e1a$var$L extends $ad0512c2874d4e1a$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $ad0512c2874d4e1a$var$S(this, t, i, 0) ?? $ad0512c2874d4e1a$export$45b790e32b2810ee) === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $ad0512c2874d4e1a$export$45b790e32b2810ee && s !== $ad0512c2874d4e1a$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $ad0512c2874d4e1a$export$45b790e32b2810ee && (s === $ad0512c2874d4e1a$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $ad0512c2874d4e1a$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $ad0512c2874d4e1a$var$S(this, t);
    }
}
const $ad0512c2874d4e1a$export$8613d1ca9052b22e = {
    M: $ad0512c2874d4e1a$var$e,
    P: $ad0512c2874d4e1a$var$h,
    A: $ad0512c2874d4e1a$var$o,
    C: 1,
    L: $ad0512c2874d4e1a$var$V,
    R: $ad0512c2874d4e1a$var$M,
    D: $ad0512c2874d4e1a$var$u,
    V: $ad0512c2874d4e1a$var$S,
    I: $ad0512c2874d4e1a$var$R,
    H: $ad0512c2874d4e1a$var$k,
    N: $ad0512c2874d4e1a$var$I,
    U: $ad0512c2874d4e1a$var$L,
    B: $ad0512c2874d4e1a$var$H,
    F: $ad0512c2874d4e1a$var$z
}, $ad0512c2874d4e1a$var$j = $ad0512c2874d4e1a$var$t.litHtmlPolyfillSupport;
$ad0512c2874d4e1a$var$j?.($ad0512c2874d4e1a$var$N, $ad0512c2874d4e1a$var$R), ($ad0512c2874d4e1a$var$t.litHtmlVersions ??= []).push("3.3.1");
const $ad0512c2874d4e1a$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $ad0512c2874d4e1a$var$R(i.insertBefore($ad0512c2874d4e1a$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bef0b097a0201904$var$s = globalThis;
class $bef0b097a0201904$export$3f2f9f5909897157 extends (0, $b7da6541276cd110$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $ad0512c2874d4e1a$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $ad0512c2874d4e1a$export$9c068ae9cc5db4e8;
    }
}
$bef0b097a0201904$export$3f2f9f5909897157._$litElement$ = !0, $bef0b097a0201904$export$3f2f9f5909897157["finalized"] = !0, $bef0b097a0201904$var$s.litElementHydrateSupport?.({
    LitElement: $bef0b097a0201904$export$3f2f9f5909897157
});
const $bef0b097a0201904$var$o = $bef0b097a0201904$var$s.litElementPolyfillSupport;
$bef0b097a0201904$var$o?.({
    LitElement: $bef0b097a0201904$export$3f2f9f5909897157
});
const $bef0b097a0201904$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($bef0b097a0201904$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $598b32bcd6f02e31$export$6acf61af03e62db = !1;




var $69f38b57f7f9cb87$exports = {};
$69f38b57f7f9cb87$exports = ":host {\n  --wfc-wind-low: var(--success-color, #43a047);\n  --wfc-wind-medium: var(--warning-color, #43a047);\n  --wfc-wind-high: var(--error-color, #db4437);\n  --wfc-temp-low-color: var(--warning-color, #ffa600);\n  --wfc-temp-high-color: var(--primary-color, #009ac7);\n  --wfc-chart-label-color: var(--primary-text-color, #000);\n  --wfc-chart-grid-color: color-mix(in srgb, var(--primary-text-color, #000) 15%, transparent);\n  --wfc-precipitation-bar-color: color-mix(in srgb, var(--blue-color, #2196f3) 40%, transparent);\n  --wfc-sunrise-color: var(--orange-color, #ff9800);\n  --wfc-sunset-color: var(--purple-color, #926bc7);\n  --wfc-day-indicator-color: #056bb8;\n  --wfc-day-indicator-text-color: #fff;\n  --forecast-item-width: 50px;\n  --forecast-item-gap: 0px;\n  --forecast-precipitation-bar-max-height: calc(var(--ha-font-size-s, 12px)  + 2px);\n  --fade-width: 15px;\n  --forecast-conditions-icon-size: var(--wfc-forecast-conditions-icon-size, 28px);\n  --current-conditions-icon-size: var(--wfc-current-conditions-icon-size, 48px);\n  --indicator-width: 20px;\n}\n\nha-card {\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  padding: var(--card-padding, 10px);\n  display: block;\n}\n\n.wfc-container {\n  box-sizing: border-box;\n  border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));\n  gap: var(--ha-space-3, 12px);\n  flex-direction: column;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n}\n\n.wfc-current-weather-container {\n  pointer-events: auto;\n}\n\n.wfc-current-weather {\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--ha-space-3, 12px);\n  user-select: none;\n  cursor: pointer;\n  flex-flow: row;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  display: flex;\n}\n\n.wfc-current-conditions {\n  align-items: center;\n  gap: var(--ha-space-1, 4px);\n  flex-direction: row;\n  min-width: 0;\n  display: flex;\n}\n\n.wfc-name, .wfc-name-state, .wfc-current-state {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.wfc-current-temperature-high-low {\n  white-space: nowrap;\n}\n\n.wfc-weather-condition-icon-slot.wfc-current-icon {\n  width: var(--current-conditions-icon-size);\n  height: var(--current-conditions-icon-size);\n  margin-right: 12px;\n}\n\n.wfc-weather-condition-icon-slot.wfc-current-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.wfc-current-temperatures {\n  flex-direction: column;\n  align-items: flex-end;\n  display: flex;\n}\n\n.wfc-current-state, .wfc-current-temperature {\n  font-size: var(--ha-font-size-3xl);\n  line-height: var(--ha-line-height-condensed);\n  white-space: nowrap;\n}\n\n.wfc-forecast-container {\n  --mask: linear-gradient(to right, #0000 0, #000 var(--fade-width), #000 calc(100% - var(--fade-width)), #0000 100%);\n  pointer-events: auto;\n  -webkit-mask: var(--mask);\n  mask: var(--mask);\n}\n\n.wfc-scroll-container {\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  cursor: grab;\n  user-select: none;\n  touch-action: pan-x;\n  overscroll-behavior-x: contain;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  overflow: auto clip;\n}\n\n.wfc-scroll-container::-webkit-scrollbar {\n  display: none;\n}\n\n.wfc-forecast {\n  justify-content: flex-start;\n  column-gap: var(--forecast-item-gap);\n  flex-direction: row;\n  display: flex;\n  position: relative;\n}\n\n.wfc-forecast-slot {\n  min-width: var(--forecast-item-width);\n  max-width: var(--forecast-item-width);\n  align-items: center;\n  gap: var(--ha-space-1, 4px);\n  scroll-snap-align: start;\n  flex-direction: column;\n  display: flex;\n  position: relative;\n}\n\n.wfc-label {\n  font-size: var(--ha-font-size-l, 16px);\n  color: var(--secondary-text-color, #9b9b9b);\n}\n\n.wfc-secondary {\n  font-size: var(--ha-font-size-m, 14px);\n  color: var(--secondary-text-color, #9b9b9b);\n}\n\n.wfc-day-indicator-container {\n  z-index: 4;\n  min-width: var(--forecast-item-width);\n  max-width: var(--forecast-item-width);\n  margin-right: calc((var(--forecast-item-width)  + var(--forecast-item-gap)) * -1);\n  justify-content: center;\n  align-items: start;\n  display: flex;\n  position: sticky;\n  left: 0;\n}\n\n.wfc-day-indicator {\n  background-color: var(--wfc-day-indicator-color);\n  color: var(--wfc-day-indicator-text-color);\n  min-width: var(--indicator-width);\n  text-align: center;\n  border-radius: 12px;\n  height: 20px;\n  padding: 0 8px;\n  display: block;\n}\n\n.wfc-forecast-slot-time.wfc-sunrise {\n  color: var(--wfc-sunrise-color);\n}\n\n.wfc-forecast-slot-time.wfc-sunset {\n  color: var(--wfc-sunset-color);\n}\n\n.wfc-forecast-slot-time {\n  font-size: var(--ha-font-size-l, 16px);\n  line-height: var(--ha-line-height-condensed, 1.2);\n  color: var(--secondary-text-color, #9b9b9b);\n  text-align: center;\n  min-height: 20px;\n  margin-bottom: var(--ha-space-1, 4px);\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.wfc-forecast-slot-temperature {\n  white-space: nowrap;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 20px;\n  display: flex;\n}\n\n.wfc-forecast-temperature-low, .wfc-forecast-temperature-high {\n  font-size: var(--ha-font-size-l, 16px);\n  line-height: var(--ha-line-height-condensed, 1.2);\n  color: var(--primary-text-color, #212121);\n}\n\n.wfc-forecast-temperature-low {\n  color: var(--secondary-text-color, #9b9b9b);\n}\n\n.wfc-forecast-temperature-low.wfc-small, .wfc-forecast-temperature-high.wfc-small {\n  font-size: var(--ha-font-size-m, 14px);\n  line-height: var(--ha-line-height-condensed, 1.2);\n}\n\n.wfc-forecast-temperature-low.wfc-small {\n  font-size: var(--ha-font-size-m, 14px);\n}\n\n.wfc-forecast-temperature-separator {\n  color: var(--secondary-text-color, #9b9b9b);\n  margin: 0 1px;\n}\n\n.wfc-weather-condition-icon-slot {\n  width: var(--forecast-conditions-icon-size);\n  height: var(--forecast-conditions-icon-size);\n  pointer-events: none;\n  cursor: grab;\n  padding: 2px 0;\n}\n\n.wfc-weather-condition-icon-slot .rain {\n  fill: var(--weather-icon-rain-color, #30b3ff);\n}\n\n.wfc-weather-condition-icon-slot .sun {\n  fill: var(--weather-icon-sun-color, #fdd93c);\n}\n\n.wfc-weather-condition-icon-slot .moon {\n  fill: var(--weather-icon-moon-color, #fcf497);\n}\n\n.wfc-weather-condition-icon-slot .cloud-back {\n  fill: var(--weather-icon-cloud-back-color, #d4d4d4);\n}\n\n.wfc-weather-condition-icon-slot .cloud-front {\n  fill: var(--weather-icon-cloud-front-color, #f9f9f9);\n}\n\n.wfc-weather-condition-icon-slot .snow {\n  fill: var(--weather-icon-snow-color, #f9f9f9);\n  stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);\n  stroke-width: 1px;\n  paint-order: stroke;\n}\n\n.wfc-forecast-slot-info {\n  align-items: center;\n  gap: var(--ha-space-1, 4px);\n  flex-direction: column;\n  min-width: 40px;\n  display: flex;\n}\n\n.wfc-forecast-precip-amount-container {\n  justify-content: center;\n  align-items: flex-end;\n  height: 15px;\n  display: flex;\n  position: relative;\n}\n\n.wfc-forecast-precip-amount-container.wfc-not-available {\n  visibility: hidden;\n}\n\n.wfc-forecast-precip-amount-bar {\n  width: 30px;\n  height: calc(var(--forecast-precipitation-bar-max-height) * var(--forecast-precipitation-bar-height-pct, 0) / 100);\n  background: var(--wfc-precipitation-bar-color);\n  z-index: 1;\n  border-radius: 4px;\n  flex-direction: column;\n  justify-content: flex-end;\n  display: flex;\n  position: absolute;\n  overflow: hidden;\n}\n\n.wfc-forecast-precip-amount {\n  z-index: 2;\n  font-size: var(--ha-font-size-s, 12px);\n  color: var(--blue-color, #2196f3);\n  font-weight: 500;\n  line-height: 1;\n  position: relative;\n}\n\n.wfc-forecast-precip-probability {\n  font-size: var(--ha-font-size-s, 12px);\n}\n\n.wfc-forecast-chart {\n  height: 130px;\n  width: var(--wfc-forecast-chart-width, auto);\n}\n\n.wfc-forecast-chart-footer, .wfc-forecast-chart-header {\n  justify-content: flex-start;\n  column-gap: var(--forecast-item-gap);\n  min-width: var(--wfc-forecast-chart-width, auto);\n  flex-direction: row;\n  display: flex;\n  width: 100% !important;\n}\n\nwfc-wind-indicator, wfc-current-weather, wfc-forecast-header-items, wfc-weather-condition-icon-provider {\n  display: contents;\n}\n";


const $10a5d45eadbd8df0$export$9dd6ff9ea0189349 = (0, $b1fa9b0acaf40b20$export$dbf350e5966cf602)`
  ${(0, $b1fa9b0acaf40b20$export$8d80f9cac07cdb3)($69f38b57f7f9cb87$exports)}
`;


var $3ebf1056a905dec2$var$__assign = undefined && undefined.__assign || function() {
    $3ebf1056a905dec2$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $3ebf1056a905dec2$var$__assign.apply(this, arguments);
};
var $3ebf1056a905dec2$var$MS_PER_SECOND = 1e3;
var $3ebf1056a905dec2$var$SECS_PER_MIN = 60;
var $3ebf1056a905dec2$var$SECS_PER_HOUR = $3ebf1056a905dec2$var$SECS_PER_MIN * 60;
var $3ebf1056a905dec2$var$SECS_PER_DAY = $3ebf1056a905dec2$var$SECS_PER_HOUR * 24;
var $3ebf1056a905dec2$var$SECS_PER_WEEK = $3ebf1056a905dec2$var$SECS_PER_DAY * 7;
function $3ebf1056a905dec2$export$b8f7189986dd5395(from, to, thresholds) {
    if (to === void 0) to = Date.now();
    if (thresholds === void 0) thresholds = {};
    var resolvedThresholds = $3ebf1056a905dec2$var$__assign($3ebf1056a905dec2$var$__assign({}, $3ebf1056a905dec2$export$f4fd60e41371f80d), thresholds || {});
    var secs = (+from - +to) / $3ebf1056a905dec2$var$MS_PER_SECOND;
    if (Math.abs(secs) < resolvedThresholds.second) return {
        value: Math.round(secs),
        unit: 'second'
    };
    var mins = secs / $3ebf1056a905dec2$var$SECS_PER_MIN;
    if (Math.abs(mins) < resolvedThresholds.minute) return {
        value: Math.round(mins),
        unit: 'minute'
    };
    var hours = secs / $3ebf1056a905dec2$var$SECS_PER_HOUR;
    if (Math.abs(hours) < resolvedThresholds.hour) return {
        value: Math.round(hours),
        unit: 'hour'
    };
    var days = secs / $3ebf1056a905dec2$var$SECS_PER_DAY;
    if (Math.abs(days) < resolvedThresholds.day) return {
        value: Math.round(days),
        unit: 'day'
    };
    var fromDate = new Date(from);
    var toDate = new Date(to);
    var years = fromDate.getFullYear() - toDate.getFullYear();
    if (Math.round(Math.abs(years)) > 0) return {
        value: Math.round(years),
        unit: 'year'
    };
    var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
    if (Math.round(Math.abs(months)) > 0) return {
        value: Math.round(months),
        unit: 'month'
    };
    var weeks = secs / $3ebf1056a905dec2$var$SECS_PER_WEEK;
    return {
        value: Math.round(weeks),
        unit: 'week'
    };
}
var $3ebf1056a905dec2$export$f4fd60e41371f80d = {
    second: 45,
    minute: 45,
    hour: 22,
    day: 5
};


var $0412f1070fcb3161$export$27bce688931fdfcc, $0412f1070fcb3161$export$7fd1ce15b01d50ca, $0412f1070fcb3161$export$1a0dc7c974e8444d = function(e, t) {
    return $0412f1070fcb3161$var$i(t).format(e);
}, $0412f1070fcb3161$var$i = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}, $0412f1070fcb3161$export$3ae94a2503e890a1 = function(e, t) {
    return $0412f1070fcb3161$var$o(t).format(e);
}, $0412f1070fcb3161$var$o = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}, $0412f1070fcb3161$export$fbb9ef859002af37 = function(e, t) {
    return $0412f1070fcb3161$var$c(t).format(e);
}, $0412f1070fcb3161$var$c = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
}, $0412f1070fcb3161$export$7813392c1f00426f = function(e, t) {
    return $0412f1070fcb3161$var$s(t).format(e);
}, $0412f1070fcb3161$var$s = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        day: "numeric",
        month: "short"
    });
}, $0412f1070fcb3161$export$295e1e57d6713bf4 = function(e, t) {
    return $0412f1070fcb3161$var$d(t).format(e);
}, $0412f1070fcb3161$var$d = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long",
        year: "numeric"
    });
}, $0412f1070fcb3161$export$cbc7ca92d37b9650 = function(e, t) {
    return $0412f1070fcb3161$var$g(t).format(e);
}, $0412f1070fcb3161$var$g = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long"
    });
}, $0412f1070fcb3161$export$5a252a405018366 = function(e, t) {
    return $0412f1070fcb3161$var$h(t).format(e);
}, $0412f1070fcb3161$var$h = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric"
    });
};
!function(e) {
    e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
}($0412f1070fcb3161$export$27bce688931fdfcc || ($0412f1070fcb3161$export$27bce688931fdfcc = {})), function(e) {
    e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}($0412f1070fcb3161$export$7fd1ce15b01d50ca || ($0412f1070fcb3161$export$7fd1ce15b01d50ca = {}));
var $0412f1070fcb3161$var$b = function(e) {
    if (e.time_format === $0412f1070fcb3161$export$7fd1ce15b01d50ca.language || e.time_format === $0412f1070fcb3161$export$7fd1ce15b01d50ca.system) {
        var t = e.time_format === $0412f1070fcb3161$export$7fd1ce15b01d50ca.language ? e.language : void 0, n = (new Date).toLocaleString(t);
        return n.includes("AM") || n.includes("PM");
    }
    return e.time_format === $0412f1070fcb3161$export$7fd1ce15b01d50ca.am_pm;
}, $0412f1070fcb3161$export$8b492ed8828f789c = function(e, t) {
    return $0412f1070fcb3161$var$_(t).format(e);
}, $0412f1070fcb3161$var$_ = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $0412f1070fcb3161$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$c2c7ff0067c06a13 = function(e, t) {
    return $0412f1070fcb3161$var$w(t).format(e);
}, $0412f1070fcb3161$var$w = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $0412f1070fcb3161$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$c8a72f22956ccab0 = function(e, t) {
    return $0412f1070fcb3161$var$x(t).format(e);
}, $0412f1070fcb3161$var$x = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$3203edd9e5edd663 = function(e, t) {
    return $0412f1070fcb3161$var$S(t).format(e);
}, $0412f1070fcb3161$var$S = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: "numeric",
        minute: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$ec86e83f20e68cd8 = function(e, t) {
    return $0412f1070fcb3161$var$T(t).format(e);
}, $0412f1070fcb3161$var$T = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $0412f1070fcb3161$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$ad627f6ad084f5a2 = function(e, t) {
    return $0412f1070fcb3161$var$N(t).format(e);
}, $0412f1070fcb3161$var$N = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $0412f1070fcb3161$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $0412f1070fcb3161$var$b(e)
    });
}, $0412f1070fcb3161$export$caddcc104251c1d7 = function(t, r, n, i) {
    void 0 === i && (i = !0);
    var a = (0, $3ebf1056a905dec2$export$b8f7189986dd5395)(t, n);
    return i ? (function(e) {
        return new Intl.RelativeTimeFormat(e.language, {
            numeric: "auto"
        });
    })(r).format(a.value, a.unit) : Intl.NumberFormat(r.language, {
        style: "unit",
        unit: a.unit,
        unitDisplay: "long"
    }).format(Math.abs(a.value));
};
function $0412f1070fcb3161$export$50fe296bd2427aef(e) {
    var t, r = 3600 * (t = e.attributes.remaining.split(":").map(Number))[0] + 60 * t[1] + t[2];
    if ("active" === e.state) {
        var n = (new Date).getTime(), i = new Date(e.last_changed).getTime();
        r = Math.max(r - (n - i) / 1e3, 0);
    }
    return r;
}
function $0412f1070fcb3161$var$O() {
    return ($0412f1070fcb3161$var$O = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = arguments[t];
            for(var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }).apply(this, arguments);
}
var $0412f1070fcb3161$export$2a5af2efac2f8dc = function(e, t, r, n) {
    void 0 === n && (n = !1), e._themes || (e._themes = {});
    var i = t.default_theme;
    ("default" === r || r && t.themes[r]) && (i = r);
    var a = $0412f1070fcb3161$var$O({}, e._themes);
    if ("default" !== i) {
        var o = t.themes[i];
        Object.keys(o).forEach(function(t) {
            var r = "--" + t;
            e._themes[r] = "", a[r] = o[t];
        });
    }
    if (e.updateStyles ? e.updateStyles(a) : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, a), n) {
        var u = document.querySelector("meta[name=theme-color]");
        if (u) {
            u.hasAttribute("default-content") || u.setAttribute("default-content", u.getAttribute("content"));
            var c = a["--primary-color"] || u.getAttribute("default-content");
            u.setAttribute("content", c);
        }
    }
}, $0412f1070fcb3161$export$67835a66b9f6da52 = function(e) {
    return "function" == typeof e.getCardSize ? e.getCardSize() : 4;
};
function $0412f1070fcb3161$export$2044bdc9670769ab(e) {
    return e.substr(0, e.indexOf("."));
}
function $0412f1070fcb3161$export$4c7757901b2ff860(e) {
    return e.substr(e.indexOf(".") + 1);
}
function $0412f1070fcb3161$export$5cacf63e4bbfecae(e) {
    var t, r = (null == e || null == (t = e.locale) ? void 0 : t.language) || "en";
    return e.translationMetadata.translations[r] && e.translationMetadata.translations[r].isRTL || !1;
}
function $0412f1070fcb3161$export$703829fe2802931b(e) {
    return $0412f1070fcb3161$export$5cacf63e4bbfecae(e) ? "rtl" : "ltr";
}
function $0412f1070fcb3161$export$5b7b50e8043fabe(e) {
    return $0412f1070fcb3161$export$2044bdc9670769ab(e.entity_id);
}
var $0412f1070fcb3161$export$88bfc1035e667f37 = function(e) {
    return !!e.attributes.unit_of_measurement || !!e.attributes.state_class;
}, $0412f1070fcb3161$export$5e25e39d6a8c0c11 = function(e) {
    switch(e.number_format){
        case $0412f1070fcb3161$export$27bce688931fdfcc.comma_decimal:
            return [
                "en-US",
                "en"
            ];
        case $0412f1070fcb3161$export$27bce688931fdfcc.decimal_comma:
            return [
                "de",
                "es",
                "it"
            ];
        case $0412f1070fcb3161$export$27bce688931fdfcc.space_comma:
            return [
                "fr",
                "sv",
                "cs"
            ];
        case $0412f1070fcb3161$export$27bce688931fdfcc.system:
            return;
        default:
            return e.language;
    }
}, $0412f1070fcb3161$export$2077e0241d6afd3c = function(e, t) {
    return void 0 === t && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, $0412f1070fcb3161$export$f5dd818bff069720 = function(e, r, n) {
    var i = r ? $0412f1070fcb3161$export$5e25e39d6a8c0c11(r) : void 0;
    if (Number.isNaN = Number.isNaN || function e(t) {
        return "number" == typeof t && e(t);
    }, (null == r ? void 0 : r.number_format) !== $0412f1070fcb3161$export$27bce688931fdfcc.none && !Number.isNaN(Number(e)) && Intl) try {
        return new Intl.NumberFormat(i, $0412f1070fcb3161$var$V(e, n)).format(Number(e));
    } catch (t) {
        return console.error(t), new Intl.NumberFormat(void 0, $0412f1070fcb3161$var$V(e, n)).format(Number(e));
    }
    return "string" == typeof e ? e : $0412f1070fcb3161$export$2077e0241d6afd3c(e, null == n ? void 0 : n.maximumFractionDigits).toString() + ("currency" === (null == n ? void 0 : n.style) ? " " + n.currency : "");
}, $0412f1070fcb3161$var$V = function(e, t) {
    var r = $0412f1070fcb3161$var$O({
        maximumFractionDigits: 2
    }, t);
    if ("string" != typeof e) return r;
    if (!t || !t.minimumFractionDigits && !t.maximumFractionDigits) {
        var n = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
        r.minimumFractionDigits = n, r.maximumFractionDigits = n;
    }
    return r;
}, $0412f1070fcb3161$export$278f9ea9192cff94 = function(e, t, r, n) {
    var i = void 0 !== n ? n : t.state;
    if ("unknown" === i || "unavailable" === i) return e("state.default." + i);
    if ($0412f1070fcb3161$export$88bfc1035e667f37(t)) {
        if ("monetary" === t.attributes.device_class) try {
            return $0412f1070fcb3161$export$f5dd818bff069720(i, r, {
                style: "currency",
                currency: t.attributes.unit_of_measurement
            });
        } catch (e) {}
        return $0412f1070fcb3161$export$f5dd818bff069720(i, r) + (t.attributes.unit_of_measurement ? " " + t.attributes.unit_of_measurement : "");
    }
    var o = $0412f1070fcb3161$export$5b7b50e8043fabe(t);
    if ("input_datetime" === o) {
        var u;
        if (void 0 === n) return t.attributes.has_date && t.attributes.has_time ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day, t.attributes.hour, t.attributes.minute), $0412f1070fcb3161$export$8b492ed8828f789c(u, r)) : t.attributes.has_date ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day), $0412f1070fcb3161$export$3ae94a2503e890a1(u, r)) : t.attributes.has_time ? ((u = new Date).setHours(t.attributes.hour, t.attributes.minute), $0412f1070fcb3161$export$3203edd9e5edd663(u, r)) : t.state;
        try {
            var c = n.split(" ");
            if (2 === c.length) return $0412f1070fcb3161$export$8b492ed8828f789c(new Date(c.join("T")), r);
            if (1 === c.length) {
                if (n.includes("-")) return $0412f1070fcb3161$export$3ae94a2503e890a1(new Date(n + "T00:00"), r);
                if (n.includes(":")) {
                    var m = new Date;
                    return $0412f1070fcb3161$export$3203edd9e5edd663(new Date(m.toISOString().split("T")[0] + "T" + n), r);
                }
            }
            return n;
        } catch (e) {
            return n;
        }
    }
    return "humidifier" === o && "on" === i && t.attributes.humidity ? t.attributes.humidity + " %" : "counter" === o || "number" === o || "input_number" === o ? $0412f1070fcb3161$export$f5dd818bff069720(i, r) : t.attributes.device_class && e("component." + o + ".state." + t.attributes.device_class + "." + i) || e("component." + o + ".state._." + i) || i;
}, $0412f1070fcb3161$export$25978a5d5a562f09 = "mdi:bookmark", $0412f1070fcb3161$export$f78a3169a0f9f31b = "lovelace", $0412f1070fcb3161$export$6df9924792233bc = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink"
], $0412f1070fcb3161$export$b9a2b37e93bb73f2 = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "updater",
    "vacuum",
    "water_heater",
    "weather"
], $0412f1070fcb3161$export$ca927753507128f6 = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink"
], $0412f1070fcb3161$export$60e836dfbaf943c5 = [
    "camera",
    "configurator",
    "history_graph",
    "scene"
], $0412f1070fcb3161$export$23bace2b7923e5d1 = [
    "closed",
    "locked",
    "off"
], $0412f1070fcb3161$export$1b64f44bed0feb66 = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation"
]), $0412f1070fcb3161$export$3ed39d80c7b24b62 = "\xb0C", $0412f1070fcb3161$export$5c7f540eb0eef6a6 = "\xb0F", $0412f1070fcb3161$export$2c7beb20637e0bd1 = "group.default_view", $0412f1070fcb3161$export$43835e9acf248a15 = function(e, t, r, n) {
    n = n || {}, r = null == r ? {} : r;
    var i = new Event(t, {
        bubbles: void 0 === n.bubbles || n.bubbles,
        cancelable: Boolean(n.cancelable),
        composed: void 0 === n.composed || n.composed
    });
    return i.detail = r, e.dispatchEvent(i), i;
}, $0412f1070fcb3161$var$ie = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select"
]), $0412f1070fcb3161$var$ae = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    water_heater: "climate",
    input_datetime: "input-datetime"
}, $0412f1070fcb3161$export$5ad555b55cd85e0c = function(e, t) {
    void 0 === t && (t = !1);
    var r = function(e, t) {
        return n("hui-error-card", {
            type: "error",
            error: e,
            config: t
        });
    }, n = function(e, t) {
        var n = window.document.createElement(e);
        try {
            if (!n.setConfig) return;
            n.setConfig(t);
        } catch (n) {
            return console.error(e, n), r(n.message, t);
        }
        return n;
    };
    if (!e || "object" != typeof e || !t && !e.type) return r("No type defined", e);
    var i = e.type;
    if (i && i.startsWith("custom:")) i = i.substr(7);
    else if (t) {
        if ($0412f1070fcb3161$var$ie.has(i)) i = "hui-" + i + "-row";
        else {
            if (!e.entity) return r("Invalid config given.", e);
            var a = e.entity.split(".", 1)[0];
            i = "hui-" + ($0412f1070fcb3161$var$ae[a] || "text") + "-entity-row";
        }
    } else i = "hui-" + i + "-card";
    if (customElements.get(i)) return n(i, e);
    var o = r("Custom element doesn't exist: " + e.type + ".", e);
    o.style.display = "None";
    var u = setTimeout(function() {
        o.style.display = "";
    }, 2e3);
    return customElements.whenDefined(e.type).then(function() {
        clearTimeout(u), $0412f1070fcb3161$export$43835e9acf248a15(o, "ll-rebuild", {}, o);
    }), o;
}, $0412f1070fcb3161$export$61fc7d43ac8f84b0 = function(e, t, r) {
    var n;
    return void 0 === r && (r = !1), function() {
        var i = [].slice.call(arguments), a = this, o = function() {
            n = null, r || e.apply(a, i);
        }, u = r && !n;
        clearTimeout(n), n = setTimeout(o, t), u && e.apply(a, i);
    };
}, $0412f1070fcb3161$export$a76407ec79ca4ea3 = {
    alert: "mdi:alert",
    automation: "mdi:playlist-play",
    calendar: "mdi:calendar",
    camera: "mdi:video",
    climate: "mdi:thermostat",
    configurator: "mdi:settings",
    conversation: "mdi:text-to-speech",
    device_tracker: "mdi:account",
    fan: "mdi:fan",
    group: "mdi:google-circles-communities",
    history_graph: "mdi:chart-line",
    homeassistant: "mdi:home-assistant",
    homekit: "mdi:home-automation",
    image_processing: "mdi:image-filter-frames",
    input_boolean: "mdi:drawing",
    input_datetime: "mdi:calendar-clock",
    input_number: "mdi:ray-vertex",
    input_select: "mdi:format-list-bulleted",
    input_text: "mdi:textbox",
    light: "mdi:lightbulb",
    mailbox: "mdi:mailbox",
    notify: "mdi:comment-alert",
    person: "mdi:account",
    plant: "mdi:flower",
    proximity: "mdi:apple-safari",
    remote: "mdi:remote",
    scene: "mdi:google-pages",
    script: "mdi:file-document",
    sensor: "mdi:eye",
    simple_alarm: "mdi:bell",
    sun: "mdi:white-balance-sunny",
    switch: "mdi:flash",
    timer: "mdi:timer",
    updater: "mdi:cloud-upload",
    vacuum: "mdi:robot-vacuum",
    water_heater: "mdi:thermometer",
    weblink: "mdi:open-in-new"
};
function $0412f1070fcb3161$export$13fcd5035aa1446(e, t) {
    if (e in $0412f1070fcb3161$export$a76407ec79ca4ea3) return $0412f1070fcb3161$export$a76407ec79ca4ea3[e];
    switch(e){
        case "alarm_control_panel":
            switch(t){
                case "armed_home":
                    return "mdi:bell-plus";
                case "armed_night":
                    return "mdi:bell-sleep";
                case "disarmed":
                    return "mdi:bell-outline";
                case "triggered":
                    return "mdi:bell-ring";
                default:
                    return "mdi:bell";
            }
        case "binary_sensor":
            return t && "off" === t ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        case "cover":
            return "closed" === t ? "mdi:window-closed" : "mdi:window-open";
        case "lock":
            return t && "unlocked" === t ? "mdi:lock-open" : "mdi:lock";
        case "media_player":
            return t && "off" !== t && "idle" !== t ? "mdi:cast-connected" : "mdi:cast";
        case "zwave":
            switch(t){
                case "dead":
                    return "mdi:emoticon-dead";
                case "sleeping":
                    return "mdi:sleep";
                case "initializing":
                    return "mdi:timer-sand";
                default:
                    return "mdi:z-wave";
            }
        default:
            return console.warn("Unable to find icon for domain " + e + " (" + t + ")"), "mdi:bookmark";
    }
}
var $0412f1070fcb3161$export$e2b36fa5c60547b2 = function(e, t) {
    var r = t.value || t, n = t.attribute ? e.attributes[t.attribute] : e.state;
    switch(t.operator || "=="){
        case "==":
            return n === r;
        case "<=":
            return n <= r;
        case "<":
            return n < r;
        case ">=":
            return n >= r;
        case ">":
            return n > r;
        case "!=":
            return n !== r;
        case "regex":
            return n.match(r);
        default:
            return !1;
    }
}, $0412f1070fcb3161$export$8bcf112cf396c716 = function(e) {
    $0412f1070fcb3161$export$43835e9acf248a15(window, "haptic", e);
}, $0412f1070fcb3161$export$ff7962acd6052c28 = function(e, t, r) {
    void 0 === r && (r = !1), r ? history.replaceState(null, "", t) : history.pushState(null, "", t), $0412f1070fcb3161$export$43835e9acf248a15(window, "location-changed", {
        replace: r
    });
}, $0412f1070fcb3161$export$3303cc16da6bc061 = function(e, t, r) {
    void 0 === r && (r = !0);
    var n, i = $0412f1070fcb3161$export$2044bdc9670769ab(t), a = "group" === i ? "homeassistant" : i;
    switch(i){
        case "lock":
            n = r ? "unlock" : "lock";
            break;
        case "cover":
            n = r ? "open_cover" : "close_cover";
            break;
        default:
            n = r ? "turn_on" : "turn_off";
    }
    return e.callService(a, n, {
        entity_id: t
    });
}, $0412f1070fcb3161$export$4f6896672dcf12b1 = function(e, t) {
    var r = $0412f1070fcb3161$export$23bace2b7923e5d1.includes(e.states[t].state);
    return $0412f1070fcb3161$export$3303cc16da6bc061(e, t, r);
}, $0412f1070fcb3161$export$fe63bc0ae3396800 = function(e, t, r, n) {
    if (n || (n = {
        action: "more-info"
    }), !n.confirmation || n.confirmation.exemptions && n.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || ($0412f1070fcb3161$export$8bcf112cf396c716("warning"), confirm(n.confirmation.text || "Are you sure you want to " + n.action + "?"))) switch(n.action){
        case "more-info":
            (r.entity || r.camera_image) && $0412f1070fcb3161$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: r.entity ? r.entity : r.camera_image
            });
            break;
        case "navigate":
            n.navigation_path && $0412f1070fcb3161$export$ff7962acd6052c28(0, n.navigation_path);
            break;
        case "url":
            n.url_path && window.open(n.url_path);
            break;
        case "toggle":
            r.entity && ($0412f1070fcb3161$export$4f6896672dcf12b1(t, r.entity), $0412f1070fcb3161$export$8bcf112cf396c716("success"));
            break;
        case "call-service":
            if (!n.service) return void $0412f1070fcb3161$export$8bcf112cf396c716("failure");
            var i = n.service.split(".", 2);
            t.callService(i[0], i[1], n.service_data, n.target), $0412f1070fcb3161$export$8bcf112cf396c716("success");
            break;
        case "fire-dom-event":
            $0412f1070fcb3161$export$43835e9acf248a15(e, "ll-custom", n);
    }
}, $0412f1070fcb3161$export$6c6c3f4b7541eaf1 = function(e, t, r, n) {
    var i;
    "double_tap" === n && r.double_tap_action ? i = r.double_tap_action : "hold" === n && r.hold_action ? i = r.hold_action : "tap" === n && r.tap_action && (i = r.tap_action), $0412f1070fcb3161$export$fe63bc0ae3396800(e, t, r, i);
}, $0412f1070fcb3161$export$b981489921ee18cd = function(e, t, r, n, i) {
    var a;
    if (i && r.double_tap_action ? a = r.double_tap_action : n && r.hold_action ? a = r.hold_action : !n && r.tap_action && (a = r.tap_action), a || (a = {
        action: "more-info"
    }), !a.confirmation || a.confirmation.exemptions && a.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || confirm(a.confirmation.text || "Are you sure you want to " + a.action + "?")) switch(a.action){
        case "more-info":
            (a.entity || r.entity || r.camera_image) && ($0412f1070fcb3161$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: a.entity ? a.entity : r.entity ? r.entity : r.camera_image
            }), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic));
            break;
        case "navigate":
            a.navigation_path && ($0412f1070fcb3161$export$ff7962acd6052c28(0, a.navigation_path), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic));
            break;
        case "url":
            a.url_path && window.open(a.url_path), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic);
            break;
        case "toggle":
            r.entity && ($0412f1070fcb3161$export$4f6896672dcf12b1(t, r.entity), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic));
            break;
        case "call-service":
            if (!a.service) return;
            var o = a.service.split(".", 2), u = o[0], c = o[1], m = $0412f1070fcb3161$var$O({}, a.service_data);
            "entity" === m.entity_id && (m.entity_id = r.entity), t.callService(u, c, m, a.target), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic);
            break;
        case "fire-dom-event":
            $0412f1070fcb3161$export$43835e9acf248a15(e, "ll-custom", a), a.haptic && $0412f1070fcb3161$export$8bcf112cf396c716(a.haptic);
    }
};
function $0412f1070fcb3161$export$e217e69099d082f5(e) {
    return void 0 !== e && "none" !== e.action;
}
function $0412f1070fcb3161$export$695b4dbcc1028091(e, t, r) {
    if (t.has("config") || r) return !0;
    if (e.config.entity) {
        var n = t.get("hass");
        return !n || n.states[e.config.entity] !== e.hass.states[e.config.entity];
    }
    return !1;
}
function $0412f1070fcb3161$export$72d503079d05a3cf(e) {
    return void 0 !== e && "none" !== e.action;
}
var $0412f1070fcb3161$export$8d080c28108db9dd = function(e, t, r) {
    void 0 === r && (r = !0);
    var n = {};
    t.forEach(function(t) {
        if ($0412f1070fcb3161$export$23bace2b7923e5d1.includes(e.states[t].state) === r) {
            var i = $0412f1070fcb3161$export$2044bdc9670769ab(t), a = [
                "cover",
                "lock"
            ].includes(i) ? i : "homeassistant";
            a in n || (n[a] = []), n[a].push(t);
        }
    }), Object.keys(n).forEach(function(t) {
        var i;
        switch(t){
            case "lock":
                i = r ? "unlock" : "lock";
                break;
            case "cover":
                i = r ? "open_cover" : "close_cover";
                break;
            default:
                i = r ? "turn_on" : "turn_off";
        }
        e.callService(t, i, {
            entity_id: n[t]
        });
    });
}, $0412f1070fcb3161$export$b5e56594b0d6a61e = function() {
    var e = document.querySelector("home-assistant");
    if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;
        return t.current_view = e.___curView, t;
    }
    return null;
}, $0412f1070fcb3161$var$xe = {
    humidity: "mdi:water-percent",
    illuminance: "mdi:brightness-5",
    temperature: "mdi:thermometer",
    pressure: "mdi:gauge",
    power: "mdi:flash",
    signal_strength: "mdi:wifi"
}, $0412f1070fcb3161$var$De = {
    binary_sensor: function(e, t) {
        var r = "off" === e;
        switch(null == t ? void 0 : t.attributes.device_class){
            case "battery":
                return r ? "mdi:battery" : "mdi:battery-outline";
            case "battery_charging":
                return r ? "mdi:battery" : "mdi:battery-charging";
            case "cold":
                return r ? "mdi:thermometer" : "mdi:snowflake";
            case "connectivity":
                return r ? "mdi:server-network-off" : "mdi:server-network";
            case "door":
                return r ? "mdi:door-closed" : "mdi:door-open";
            case "garage_door":
                return r ? "mdi:garage" : "mdi:garage-open";
            case "power":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "gas":
            case "problem":
            case "safety":
            case "tamper":
                return r ? "mdi:check-circle" : "mdi:alert-circle";
            case "smoke":
                return r ? "mdi:check-circle" : "mdi:smoke";
            case "heat":
                return r ? "mdi:thermometer" : "mdi:fire";
            case "light":
                return r ? "mdi:brightness-5" : "mdi:brightness-7";
            case "lock":
                return r ? "mdi:lock" : "mdi:lock-open";
            case "moisture":
                return r ? "mdi:water-off" : "mdi:water";
            case "motion":
                return r ? "mdi:walk" : "mdi:run";
            case "occupancy":
                return r ? "mdi:home-outline" : "mdi:home";
            case "opening":
                return r ? "mdi:square" : "mdi:square-outline";
            case "plug":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "presence":
                return r ? "mdi:home-outline" : "mdi:home";
            case "running":
                return r ? "mdi:stop" : "mdi:play";
            case "sound":
                return r ? "mdi:music-note-off" : "mdi:music-note";
            case "update":
                return r ? "mdi:package" : "mdi:package-up";
            case "vibration":
                return r ? "mdi:crop-portrait" : "mdi:vibrate";
            case "window":
                return r ? "mdi:window-closed" : "mdi:window-open";
            default:
                return r ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        }
    },
    cover: function(e) {
        var t = "closed" !== e.state;
        switch(e.attributes.device_class){
            case "garage":
                return t ? "mdi:garage-open" : "mdi:garage";
            case "door":
                return t ? "mdi:door-open" : "mdi:door-closed";
            case "shutter":
                return t ? "mdi:window-shutter-open" : "mdi:window-shutter";
            case "blind":
                return t ? "mdi:blinds-open" : "mdi:blinds";
            case "window":
                return t ? "mdi:window-open" : "mdi:window-closed";
            default:
                return $0412f1070fcb3161$export$13fcd5035aa1446("cover", e.state);
        }
    },
    sensor: function(e) {
        var t = e.attributes.device_class;
        if (t && t in $0412f1070fcb3161$var$xe) return $0412f1070fcb3161$var$xe[t];
        if ("battery" === t) {
            var r = Number(e.state);
            if (isNaN(r)) return "mdi:battery-unknown";
            var n = 10 * Math.round(r / 10);
            return n >= 100 ? "mdi:battery" : n <= 0 ? "mdi:battery-alert" : "hass:battery-" + n;
        }
        var i = e.attributes.unit_of_measurement;
        return "\xb0C" === i || "\xb0F" === i ? "mdi:thermometer" : $0412f1070fcb3161$export$13fcd5035aa1446("sensor");
    },
    input_datetime: function(e) {
        return e.attributes.has_date ? e.attributes.has_time ? $0412f1070fcb3161$export$13fcd5035aa1446("input_datetime") : "mdi:calendar" : "mdi:clock";
    }
}, $0412f1070fcb3161$export$d138d1363acbec1f = function(e) {
    if (!e) return "mdi:bookmark";
    if (e.attributes.icon) return e.attributes.icon;
    var t = $0412f1070fcb3161$export$2044bdc9670769ab(e.entity_id);
    return t in $0412f1070fcb3161$var$De ? $0412f1070fcb3161$var$De[t](e) : $0412f1070fcb3161$export$13fcd5035aa1446(t, e.state);
};


const $f0822721f4eabc9a$export$f51a9068ac82ea43 = (state)=>{
    let listeners = [];
    function unsubscribe(listener) {
        let out = [];
        for(let i = 0; i < listeners.length; i++)if (listeners[i] === listener) listener = null;
        else out.push(listeners[i]);
        listeners = out;
    }
    function setState(update, overwrite) {
        state = overwrite ? update : Object.assign(Object.assign({}, state), update);
        let currentListeners = listeners;
        for(let i = 0; i < currentListeners.length; i++)currentListeners[i](state);
    }
    /**
     * An observable state container, returned from {@link createStore}
     * @name store
     */ return {
        get state () {
            return state;
        },
        /**
         * Create a bound copy of the given action function.
         * The bound returned function invokes action() and persists the result back to the store.
         * If the return value of `action` is a Promise, the resolved value will be used as state.
         * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
         * @returns {Function} boundAction()
         */ action (action) {
            function apply(result) {
                setState(result, false);
            }
            // Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500
            return function() {
                let args = [
                    state
                ];
                for(let i = 0; i < arguments.length; i++)args.push(arguments[i]);
                // @ts-ignore
                let ret = action.apply(this, args);
                if (ret != null) return ret instanceof Promise ? ret.then(apply) : apply(ret);
            };
        },
        setState: /**
         * Apply a partial state object to the current state, invoking registered listeners.
         * @param {Object} update				An object with properties to be merged into state
         * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
         */ setState,
        clearState () {
            state = undefined;
        },
        /**
         * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
         * @param {Function} listener	A function to call when state changes. Gets passed the new state.
         * @returns {Function} unsubscribe()
         */ subscribe (listener) {
            listeners.push(listener);
            return ()=>{
                unsubscribe(listener);
            };
        }
    };
};


// Time to wait to unsubscribe from updates after last subscriber unsubscribes
const $4de479c84d13968b$var$UNSUB_GRACE_PERIOD = 5000; // 5 seconds
const $4de479c84d13968b$var$DEBUG = false;
const $4de479c84d13968b$export$2716f3327981be5 = (conn, key, fetchCollection, subscribeUpdates, options = {
    unsubGrace: true
})=>{
    // @ts-ignore
    if (conn[key]) // @ts-ignore
    return conn[key];
    let active = 0;
    let unsubProm;
    let unsubTimer;
    let store = (0, $f0822721f4eabc9a$export$f51a9068ac82ea43)();
    const refresh = ()=>{
        if (!fetchCollection) throw new Error("Collection does not support refresh");
        return fetchCollection(conn).then((state)=>store.setState(state, true));
    };
    const refreshSwallow = ()=>refresh().catch((err)=>{
            // Swallow errors if socket is connecting, closing or closed.
            // We will automatically call refresh again when we re-establish the connection.
            if (conn.connected) throw err;
        });
    const setupUpdateSubscription = ()=>{
        if (unsubTimer !== undefined) {
            if ($4de479c84d13968b$var$DEBUG) console.log(`Prevented unsubscribe for ${key}`);
            clearTimeout(unsubTimer);
            unsubTimer = undefined;
            return;
        }
        if ($4de479c84d13968b$var$DEBUG) console.log(`Subscribing to ${key}`);
        if (subscribeUpdates) unsubProm = subscribeUpdates(conn, store);
        if (fetchCollection) {
            // Fetch when connection re-established.
            conn.addEventListener("ready", refreshSwallow);
            refreshSwallow();
        }
        conn.addEventListener("disconnected", handleDisconnect);
    };
    const teardownUpdateSubscription = ()=>{
        if ($4de479c84d13968b$var$DEBUG) console.log(`Unsubscribing from ${key}`);
        unsubTimer = undefined;
        // Unsubscribe from changes
        if (unsubProm) unsubProm.then((unsub)=>{
            unsub();
        });
        store.clearState();
        conn.removeEventListener("ready", refresh);
        conn.removeEventListener("disconnected", handleDisconnect);
    };
    const scheduleTeardownUpdateSubscription = ()=>{
        if ($4de479c84d13968b$var$DEBUG) console.log(`Scheduling unsubscribing from ${key}`);
        unsubTimer = setTimeout(teardownUpdateSubscription, $4de479c84d13968b$var$UNSUB_GRACE_PERIOD);
    };
    const handleDisconnect = ()=>{
        // If we're going to unsubscribe and then lose connection,
        // just unsubscribe immediately.
        if (unsubTimer) {
            clearTimeout(unsubTimer);
            teardownUpdateSubscription();
        }
    };
    // @ts-ignore
    conn[key] = {
        get state () {
            return store.state;
        },
        refresh: refresh,
        subscribe (subscriber) {
            active++;
            if ($4de479c84d13968b$var$DEBUG) console.log(`New subscriber for ${key}. Active subscribers: ${active}`);
            // If this was the first subscriber, attach collection
            if (active === 1) setupUpdateSubscription();
            const unsub = store.subscribe(subscriber);
            if (store.state !== undefined) // Don't call it right away so that caller has time
            // to initialize all the things.
            setTimeout(()=>subscriber(store.state), 0);
            return ()=>{
                unsub();
                active--;
                if ($4de479c84d13968b$var$DEBUG) console.log(`Unsubscribe for ${key}. Active subscribers: ${active}`);
                if (!active) options.unsubGrace ? scheduleTeardownUpdateSubscription() : teardownUpdateSubscription();
            };
        }
    };
    // @ts-ignore
    return conn[key];
};
const $4de479c84d13968b$export$c74125a8e3af6bb2 = (key, fetchCollection, subscribeUpdates, conn, onChange)=>$4de479c84d13968b$export$2716f3327981be5(conn, key, fetchCollection, subscribeUpdates).subscribe(onChange);


function $772816e6f82ebfc3$export$73693bad9f5880b0(accessToken) {
    return {
        type: "auth",
        access_token: accessToken
    };
}
function $772816e6f82ebfc3$export$2bff61baab7461f2() {
    return {
        type: "supported_features",
        id: 1,
        features: {
            coalesce_messages: 1
        }
    };
}
function $772816e6f82ebfc3$export$b782dad1d219cf26() {
    return {
        type: "get_states"
    };
}
function $772816e6f82ebfc3$export$e506a1d27d1eaa20() {
    return {
        type: "get_config"
    };
}
function $772816e6f82ebfc3$export$bce7a36871692cab() {
    return {
        type: "get_services"
    };
}
function $772816e6f82ebfc3$export$ddb906a32562356c() {
    return {
        type: "auth/current_user"
    };
}
function $772816e6f82ebfc3$export$b0a07e351525dd37(domain, service, serviceData, target, returnResponse) {
    const message = {
        type: "call_service",
        domain: domain,
        service: service,
        target: target,
        return_response: returnResponse
    };
    if (serviceData) message.service_data = serviceData;
    return message;
}
function $772816e6f82ebfc3$export$ea62a9fa42858d81(eventType) {
    const message = {
        type: "subscribe_events"
    };
    if (eventType) message.event_type = eventType;
    return message;
}
function $772816e6f82ebfc3$export$ecae289057fd79f5(subscription) {
    return {
        type: "unsubscribe_events",
        subscription: subscription
    };
}
function $772816e6f82ebfc3$export$ccfc10b8bad1155a() {
    return {
        type: "ping"
    };
}
function $772816e6f82ebfc3$export$a3bc9b8ed74fc(code, message) {
    return {
        type: "result",
        success: false,
        error: {
            code: code,
            message: message
        }
    };
}


const $a3b20455564c2a23$export$35029cc0a320e78a = (connection)=>connection.sendMessagePromise($772816e6f82ebfc3$export$b782dad1d219cf26());
const $a3b20455564c2a23$export$a009e3a1163d46fb = (connection)=>connection.sendMessagePromise($772816e6f82ebfc3$export$bce7a36871692cab());
const $a3b20455564c2a23$export$44487a86467333c3 = (connection)=>connection.sendMessagePromise($772816e6f82ebfc3$export$e506a1d27d1eaa20());
const $a3b20455564c2a23$export$7cbf767827cd68ba = (connection)=>connection.sendMessagePromise($772816e6f82ebfc3$export$ddb906a32562356c());
const $a3b20455564c2a23$export$b0a07e351525dd37 = (connection, domain, service, serviceData, target, returnResponse)=>connection.sendMessagePromise($772816e6f82ebfc3$export$b0a07e351525dd37(domain, service, serviceData, target, returnResponse));


function $bc6937910de2ed2d$var$processComponentLoaded(state, event) {
    if (state === undefined) return null;
    return {
        components: state.components.concat(event.data.component)
    };
}
const $bc6937910de2ed2d$var$fetchConfig = (conn)=>(0, $a3b20455564c2a23$export$44487a86467333c3)(conn);
const $bc6937910de2ed2d$var$subscribeUpdates = (conn, store)=>Promise.all([
        conn.subscribeEvents(store.action($bc6937910de2ed2d$var$processComponentLoaded), "component_loaded"),
        conn.subscribeEvents(()=>$bc6937910de2ed2d$var$fetchConfig(conn).then((config)=>store.setState(config, true)), "core_config_updated")
    ]).then((unsubs)=>()=>unsubs.forEach((unsub)=>unsub()));
const $bc6937910de2ed2d$export$53c2831d46a10eb2 = (conn)=>(0, $4de479c84d13968b$export$2716f3327981be5)(conn, "_cnf", $bc6937910de2ed2d$var$fetchConfig, $bc6937910de2ed2d$var$subscribeUpdates);
const $bc6937910de2ed2d$export$41e43c7bc5e9c63a = (conn, onChange)=>$bc6937910de2ed2d$export$53c2831d46a10eb2(conn).subscribe(onChange);
const $bc6937910de2ed2d$export$42381bc8583738af = "NOT_RUNNING";
const $bc6937910de2ed2d$export$c0d6d87847bc89cd = "STARTING";
const $bc6937910de2ed2d$export$15d38f80bed594b1 = "RUNNING";
const $bc6937910de2ed2d$export$a935423507d2e383 = "STOPPING";
const $bc6937910de2ed2d$export$21b212282c04508a = "FINAL_WRITE";


var $8df628d487ca79bc$exports = {};
/*
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/ (function() {
    'use strict';
    // shortcuts for easier to read formulas
    var PI = Math.PI, sin = Math.sin, cos = Math.cos, tan = Math.tan, asin = Math.asin, atan = Math.atan2, acos = Math.acos, rad = PI / 180;
    // sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas
    // date/time constants and conversions
    var dayMs = 86400000, J1970 = 2440588, J2000 = 2451545;
    function toJulian(date) {
        return date.valueOf() / dayMs - 0.5 + J1970;
    }
    function fromJulian(j) {
        return new Date((j + 0.5 - J1970) * dayMs);
    }
    function toDays(date) {
        return toJulian(date) - J2000;
    }
    // general calculations for position
    var e = rad * 23.4397; // obliquity of the Earth
    function rightAscension(l, b) {
        return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l));
    }
    function declination(l, b) {
        return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l));
    }
    function azimuth(H, phi, dec) {
        return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi));
    }
    function altitude(H, phi, dec) {
        return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H));
    }
    function siderealTime(d, lw) {
        return rad * (280.16 + 360.9856235 * d) - lw;
    }
    function astroRefraction(h) {
        if (h < 0) h = 0; // if h = -0.08901179 a div/0 would occur.
        // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
        return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
    }
    // general sun calculations
    function solarMeanAnomaly(d) {
        return rad * (357.5291 + 0.98560028 * d);
    }
    function eclipticLongitude(M) {
        var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), P = rad * 102.9372; // perihelion of the Earth
        return M + C + P + PI;
    }
    function sunCoords(d) {
        var M = solarMeanAnomaly(d), L = eclipticLongitude(M);
        return {
            dec: declination(L, 0),
            ra: rightAscension(L, 0)
        };
    }
    var SunCalc = {};
    // calculates sun position for a given date and latitude/longitude
    SunCalc.getPosition = function(date, lat, lng) {
        var lw = rad * -lng, phi = rad * lat, d = toDays(date), c = sunCoords(d), H = siderealTime(d, lw) - c.ra;
        return {
            azimuth: azimuth(H, phi, c.dec),
            altitude: altitude(H, phi, c.dec)
        };
    };
    // sun times configuration (angle, morning name, evening name)
    var times = SunCalc.times = [
        [
            -0.833,
            'sunrise',
            'sunset'
        ],
        [
            -0.3,
            'sunriseEnd',
            'sunsetStart'
        ],
        [
            -6,
            'dawn',
            'dusk'
        ],
        [
            -12,
            'nauticalDawn',
            'nauticalDusk'
        ],
        [
            -18,
            'nightEnd',
            'night'
        ],
        [
            6,
            'goldenHourEnd',
            'goldenHour'
        ]
    ];
    // adds a custom time to the times config
    SunCalc.addTime = function(angle, riseName, setName) {
        times.push([
            angle,
            riseName,
            setName
        ]);
    };
    // calculations for sun times
    var J0 = 0.0009;
    function julianCycle(d, lw) {
        return Math.round(d - J0 - lw / (2 * PI));
    }
    function approxTransit(Ht, lw, n) {
        return J0 + (Ht + lw) / (2 * PI) + n;
    }
    function solarTransitJ(ds, M, L) {
        return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L);
    }
    function hourAngle(h, phi, d) {
        return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d)));
    }
    function observerAngle(height) {
        return -2.076 * Math.sqrt(height) / 60;
    }
    // returns set time for the given sun altitude
    function getSetJ(h, lw, phi, dec, n, M, L) {
        var w = hourAngle(h, phi, dec), a = approxTransit(w, lw, n);
        return solarTransitJ(a, M, L);
    }
    // calculates sun times for a given date, latitude/longitude, and, optionally,
    // the observer height (in meters) relative to the horizon
    SunCalc.getTimes = function(date, lat, lng, height) {
        height = height || 0;
        var lw = rad * -lng, phi = rad * lat, dh = observerAngle(height), d = toDays(date), n = julianCycle(d, lw), ds = approxTransit(0, lw, n), M = solarMeanAnomaly(ds), L = eclipticLongitude(M), dec = declination(L, 0), Jnoon = solarTransitJ(ds, M, L), i, len, time, h0, Jset, Jrise;
        var result = {
            solarNoon: fromJulian(Jnoon),
            nadir: fromJulian(Jnoon - 0.5)
        };
        for(i = 0, len = times.length; i < len; i += 1){
            time = times[i];
            h0 = (time[0] + dh) * rad;
            Jset = getSetJ(h0, lw, phi, dec, n, M, L);
            Jrise = Jnoon - (Jset - Jnoon);
            result[time[1]] = fromJulian(Jrise);
            result[time[2]] = fromJulian(Jset);
        }
        return result;
    };
    // moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas
    function moonCoords(d) {
        var L = rad * (218.316 + 13.176396 * d), M = rad * (134.963 + 13.064993 * d), F = rad * (93.272 + 13.229350 * d), l = L + rad * 6.289 * sin(M), b = rad * 5.128 * sin(F), dt = 385001 - 20905 * cos(M); // distance to the moon in km
        return {
            ra: rightAscension(l, b),
            dec: declination(l, b),
            dist: dt
        };
    }
    SunCalc.getMoonPosition = function(date, lat, lng) {
        var lw = rad * -lng, phi = rad * lat, d = toDays(date), c = moonCoords(d), H = siderealTime(d, lw) - c.ra, h = altitude(H, phi, c.dec), // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        pa = atan(sin(H), tan(phi) * cos(c.dec) - sin(c.dec) * cos(H));
        h = h + astroRefraction(h); // altitude correction for refraction
        return {
            azimuth: azimuth(H, phi, c.dec),
            altitude: h,
            distance: c.dist,
            parallacticAngle: pa
        };
    };
    // calculations for illumination parameters of the moon,
    // based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
    // Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    SunCalc.getMoonIllumination = function(date) {
        var d = toDays(date || new Date()), s = sunCoords(d), m = moonCoords(d), sdist = 149598000, phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)), inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi)), angle = atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec) - cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra));
        return {
            fraction: (1 + cos(inc)) / 2,
            phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
            angle: angle
        };
    };
    function hoursLater(date, h) {
        return new Date(date.valueOf() + h * dayMs / 24);
    }
    // calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article
    SunCalc.getMoonTimes = function(date, lat, lng, inUTC) {
        var t = new Date(date);
        if (inUTC) t.setUTCHours(0, 0, 0, 0);
        else t.setHours(0, 0, 0, 0);
        var hc = 0.133 * rad, h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc, h1, h2, rise, set, a, b, xe, ye, d, roots, x1, x2, dx;
        // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)
        for(var i = 1; i <= 24; i += 2){
            h1 = SunCalc.getMoonPosition(hoursLater(t, i), lat, lng).altitude - hc;
            h2 = SunCalc.getMoonPosition(hoursLater(t, i + 1), lat, lng).altitude - hc;
            a = (h0 + h2) / 2 - h1;
            b = (h2 - h0) / 2;
            xe = -b / (2 * a);
            ye = (a * xe + b) * xe + h1;
            d = b * b - 4 * a * h1;
            roots = 0;
            if (d >= 0) {
                dx = Math.sqrt(d) / (Math.abs(a) * 2);
                x1 = xe - dx;
                x2 = xe + dx;
                if (Math.abs(x1) <= 1) roots++;
                if (Math.abs(x2) <= 1) roots++;
                if (x1 < -1) x1 = x2;
            }
            if (roots === 1) {
                if (h0 < 0) rise = i + x1;
                else set = i + x1;
            } else if (roots === 2) {
                rise = i + (ye < 0 ? x2 : x1);
                set = i + (ye < 0 ? x1 : x2);
            }
            if (rise && set) break;
            h0 = h2;
        }
        var result = {};
        if (rise) result.rise = hoursLater(t, rise);
        if (set) result.set = hoursLater(t, set);
        if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;
        return result;
    };
    $8df628d487ca79bc$exports = SunCalc;
})();


var $d54dfc44cec4eb2f$var$safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function $d54dfc44cec4eb2f$var$isEqual(first, second) {
    if (first === second) return true;
    if ($d54dfc44cec4eb2f$var$safeIsNaN(first) && $d54dfc44cec4eb2f$var$safeIsNaN(second)) return true;
    return false;
}
function $d54dfc44cec4eb2f$var$areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!$d54dfc44cec4eb2f$var$isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function $d54dfc44cec4eb2f$export$2e2bcd8739ae039(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = $d54dfc44cec4eb2f$var$areInputsEqual;
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}


const $cec8c66d67f18323$export$4aedea6f9b4cfc61 = (hass, _entity)=>{
    if (!hass) return "Home Assistant instance is not available.";
    return hass.config.state !== (0, $bc6937910de2ed2d$export$42381bc8583738af) ? hass.localize("ui.card.common.entity_not_found") : hass.localize("ui.panel.lovelace.warning.starting");
};
const $cec8c66d67f18323$export$86a5557e1d677e29 = (hass, datetime, force24Hour = false)=>{
    return $cec8c66d67f18323$export$e67a095c620b86fe(datetime).toLocaleTimeString($cec8c66d67f18323$export$180605366c04f0cd(hass), {
        hour: "numeric",
        hour12: force24Hour ? false : $cec8c66d67f18323$export$98b044737b007ca6(hass)
    });
};
const $cec8c66d67f18323$export$3203edd9e5edd663 = (hass, datetime, force24Hour = false)=>{
    return $cec8c66d67f18323$export$e67a095c620b86fe(datetime).toLocaleTimeString($cec8c66d67f18323$export$180605366c04f0cd(hass), {
        hour: "numeric",
        minute: "2-digit",
        hour12: force24Hour ? false : $cec8c66d67f18323$export$98b044737b007ca6(hass)
    });
};
const $cec8c66d67f18323$export$a7f242eff11c1345 = (hass, datetime)=>{
    return $cec8c66d67f18323$export$e67a095c620b86fe(datetime).toLocaleDateString($cec8c66d67f18323$export$180605366c04f0cd(hass), {
        weekday: "short"
    });
};
const $cec8c66d67f18323$export$98b044737b007ca6 = (0, $d54dfc44cec4eb2f$export$2e2bcd8739ae039)((hass)=>{
    const locale = hass?.locale;
    if (locale?.time_format === (0, $0412f1070fcb3161$export$7fd1ce15b01d50ca).language || locale?.time_format === (0, $0412f1070fcb3161$export$7fd1ce15b01d50ca).system) {
        const testLanguage = locale.time_format === (0, $0412f1070fcb3161$export$7fd1ce15b01d50ca).language ? locale.language : undefined;
        const test = new Date("January 1, 2023 22:00:00").toLocaleString(testLanguage);
        return test.includes("10");
    }
    return locale?.time_format === (0, $0412f1070fcb3161$export$7fd1ce15b01d50ca).am_pm;
});
const $cec8c66d67f18323$export$180605366c04f0cd = (hass)=>{
    return hass?.locale?.language || navigator.language || "en";
};
const $cec8c66d67f18323$export$e67a095c620b86fe = (datetime)=>{
    return typeof datetime === "string" ? new Date(datetime) : datetime;
};
const $cec8c66d67f18323$export$b266695db58ff2ef = (hass, datetime)=>{
    const { latitude: latitude, longitude: longitude } = hass?.config || {};
    if (!latitude || !longitude) return null;
    const date = $cec8c66d67f18323$export$e67a095c620b86fe(datetime);
    const times = $8df628d487ca79bc$exports.getTimes(date, latitude, longitude);
    return {
        sunrise: times.sunrise,
        sunset: times.sunset,
        isNightTime: date < times.sunrise || date > times.sunset
    };
};
const $cec8c66d67f18323$export$cc6710ee5f037d57 = (data)=>{
    if (data.length === 0) return 0;
    return data.reduce((a, b)=>a + b, 0) / data.length;
};
const $cec8c66d67f18323$export$95ae95d2176c5f0 = (input)=>{
    const d = typeof input === "string" ? new Date(input) : new Date(input);
    d.setMinutes(59, 59, 999);
    return d;
};


const $d1b6739b0a76a1d7$export$4f46d2c583b32374 = {
    silent: Number.NEGATIVE_INFINITY,
    fatal: 0,
    error: 0,
    warn: 1,
    log: 2,
    info: 3,
    success: 3,
    fail: 3,
    ready: 3,
    start: 3,
    box: 3,
    debug: 4,
    trace: 5,
    verbose: Number.POSITIVE_INFINITY
};
const $d1b6739b0a76a1d7$export$db0f62b3902a4d86 = {
    // Silent
    silent: {
        level: -1
    },
    // Level 0
    fatal: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.fatal
    },
    error: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.error
    },
    // Level 1
    warn: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.warn
    },
    // Level 2
    log: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.log
    },
    // Level 3
    info: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.info
    },
    success: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.success
    },
    fail: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.fail
    },
    ready: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.info
    },
    start: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.info
    },
    box: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.info
    },
    // Level 4
    debug: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.debug
    },
    // Level 5
    trace: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.trace
    },
    // Verbose
    verbose: {
        level: $d1b6739b0a76a1d7$export$4f46d2c583b32374.verbose
    }
};
function $d1b6739b0a76a1d7$var$isPlainObject$1(value) {
    if (value === null || typeof value !== "object") return false;
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) return false;
    if (Symbol.iterator in value) return false;
    if (Symbol.toStringTag in value) return Object.prototype.toString.call(value) === "[object Module]";
    return true;
}
function $d1b6739b0a76a1d7$var$_defu(baseObject, defaults, namespace = ".", merger) {
    if (!$d1b6739b0a76a1d7$var$isPlainObject$1(defaults)) return $d1b6739b0a76a1d7$var$_defu(baseObject, {}, namespace, merger);
    const object = Object.assign({}, defaults);
    for(const key in baseObject){
        if (key === "__proto__" || key === "constructor") continue;
        const value = baseObject[key];
        if (value === null || value === void 0) continue;
        if (merger && merger(object, key, value, namespace)) continue;
        if (Array.isArray(value) && Array.isArray(object[key])) object[key] = [
            ...value,
            ...object[key]
        ];
        else if ($d1b6739b0a76a1d7$var$isPlainObject$1(value) && $d1b6739b0a76a1d7$var$isPlainObject$1(object[key])) object[key] = $d1b6739b0a76a1d7$var$_defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
        else object[key] = value;
    }
    return object;
}
function $d1b6739b0a76a1d7$var$createDefu(merger) {
    return (...arguments_)=>// eslint-disable-next-line unicorn/no-array-reduce
        arguments_.reduce((p, c)=>$d1b6739b0a76a1d7$var$_defu(p, c, "", merger), {});
}
const $d1b6739b0a76a1d7$var$defu = $d1b6739b0a76a1d7$var$createDefu();
function $d1b6739b0a76a1d7$var$isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
function $d1b6739b0a76a1d7$var$isLogObj(arg) {
    if (!$d1b6739b0a76a1d7$var$isPlainObject(arg)) return false;
    if (!arg.message && !arg.args) return false;
    if (arg.stack) return false;
    return true;
}
let $d1b6739b0a76a1d7$var$paused = false;
const $d1b6739b0a76a1d7$var$queue = [];
class $d1b6739b0a76a1d7$export$931f3af3333a6b52 {
    options;
    _lastLog;
    _mockFn;
    /**
   * Creates an instance of Consola with specified options or defaults.
   *
   * @param {Partial<ConsolaOptions>} [options={}] - Configuration options for the Consola instance.
   */ constructor(options = {}){
        const types = options.types || $d1b6739b0a76a1d7$export$db0f62b3902a4d86;
        this.options = $d1b6739b0a76a1d7$var$defu({
            ...options,
            defaults: {
                ...options.defaults
            },
            level: $d1b6739b0a76a1d7$var$_normalizeLogLevel(options.level, types),
            reporters: [
                ...options.reporters || []
            ]
        }, {
            types: $d1b6739b0a76a1d7$export$db0f62b3902a4d86,
            throttle: 1e3,
            throttleMin: 5,
            formatOptions: {
                date: true,
                colors: false,
                compact: true
            }
        });
        for(const type in types){
            const defaults = {
                type: type,
                ...this.options.defaults,
                ...types[type]
            };
            this[type] = this._wrapLogFn(defaults);
            this[type].raw = this._wrapLogFn(defaults, true);
        }
        if (this.options.mockFn) this.mockTypes();
        this._lastLog = {};
    }
    /**
   * Gets the current log level of the Consola instance.
   *
   * @returns {number} The current log level.
   */ get level() {
        return this.options.level;
    }
    /**
   * Sets the minimum log level that will be output by the instance.
   *
   * @param {number} level - The new log level to set.
   */ set level(level) {
        this.options.level = $d1b6739b0a76a1d7$var$_normalizeLogLevel(level, this.options.types, this.options.level);
    }
    /**
   * Displays a prompt to the user and returns the response.
   * Throw an error if `prompt` is not supported by the current configuration.
   *
   * @template T
   * @param {string} message - The message to display in the prompt.
   * @param {T} [opts] - Optional options for the prompt. See {@link PromptOptions}.
   * @returns {promise<T>} A promise that infer with the prompt options. See {@link PromptOptions}.
   */ prompt(message, opts) {
        if (!this.options.prompt) throw new Error("prompt is not supported!");
        return this.options.prompt(message, opts);
    }
    /**
   * Creates a new instance of Consola, inheriting options from the current instance, with possible overrides.
   *
   * @param {Partial<ConsolaOptions>} options - Optional overrides for the new instance. See {@link ConsolaOptions}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */ create(options) {
        const instance = new $d1b6739b0a76a1d7$export$931f3af3333a6b52({
            ...this.options,
            ...options
        });
        if (this._mockFn) instance.mockTypes(this._mockFn);
        return instance;
    }
    /**
   * Creates a new Consola instance with the specified default log object properties.
   *
   * @param {InputLogObject} defaults - Default properties to include in any log from the new instance. See {@link InputLogObject}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */ withDefaults(defaults) {
        return this.create({
            ...this.options,
            defaults: {
                ...this.options.defaults,
                ...defaults
            }
        });
    }
    /**
   * Creates a new Consola instance with a specified tag, which will be included in every log.
   *
   * @param {string} tag - The tag to include in each log of the new instance.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */ withTag(tag) {
        return this.withDefaults({
            tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
        });
    }
    /**
   * Adds a custom reporter to the Consola instance.
   * Reporters will be called for each log message, depending on their implementation and log level.
   *
   * @param {ConsolaReporter} reporter - The reporter to add. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */ addReporter(reporter) {
        this.options.reporters.push(reporter);
        return this;
    }
    /**
   * Removes a custom reporter from the Consola instance.
   * If no reporter is specified, all reporters will be removed.
   *
   * @param {ConsolaReporter} reporter - The reporter to remove. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */ removeReporter(reporter) {
        if (reporter) {
            const i = this.options.reporters.indexOf(reporter);
            if (i !== -1) return this.options.reporters.splice(i, 1);
        } else this.options.reporters.splice(0);
        return this;
    }
    /**
   * Replaces all reporters of the Consola instance with the specified array of reporters.
   *
   * @param {ConsolaReporter[]} reporters - The new reporters to set. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */ setReporters(reporters) {
        this.options.reporters = Array.isArray(reporters) ? reporters : [
            reporters
        ];
        return this;
    }
    wrapAll() {
        this.wrapConsole();
        this.wrapStd();
    }
    restoreAll() {
        this.restoreConsole();
        this.restoreStd();
    }
    /**
   * Overrides console methods with Consola logging methods for consistent logging.
   */ wrapConsole() {
        for(const type in this.options.types){
            if (!console["__" + type]) console["__" + type] = console[type];
            console[type] = this[type].raw;
        }
    }
    /**
   * Restores the original console methods, removing Consola overrides.
   */ restoreConsole() {
        for(const type in this.options.types)if (console["__" + type]) {
            console[type] = console["__" + type];
            delete console["__" + type];
        }
    }
    /**
   * Overrides standard output and error streams to redirect them through Consola.
   */ wrapStd() {
        this._wrapStream(this.options.stdout, "log");
        this._wrapStream(this.options.stderr, "log");
    }
    _wrapStream(stream, type) {
        if (!stream) return;
        if (!stream.__write) stream.__write = stream.write;
        stream.write = (data)=>{
            this[type].raw(String(data).trim());
        };
    }
    /**
   * Restores the original standard output and error streams, removing the Consola redirection.
   */ restoreStd() {
        this._restoreStream(this.options.stdout);
        this._restoreStream(this.options.stderr);
    }
    _restoreStream(stream) {
        if (!stream) return;
        if (stream.__write) {
            stream.write = stream.__write;
            delete stream.__write;
        }
    }
    /**
   * Pauses logging, queues incoming logs until resumed.
   */ pauseLogs() {
        $d1b6739b0a76a1d7$var$paused = true;
    }
    /**
   * Resumes logging, processing any queued logs.
   */ resumeLogs() {
        $d1b6739b0a76a1d7$var$paused = false;
        const _queue = $d1b6739b0a76a1d7$var$queue.splice(0);
        for (const item of _queue)item[0]._logFn(item[1], item[2]);
    }
    /**
   * Replaces logging methods with mocks if a mock function is provided.
   *
   * @param {ConsolaOptions["mockFn"]} mockFn - The function to use for mocking logging methods. See {@link ConsolaOptions["mockFn"]}.
   */ mockTypes(mockFn) {
        const _mockFn = mockFn || this.options.mockFn;
        this._mockFn = _mockFn;
        if (typeof _mockFn !== "function") return;
        for(const type in this.options.types){
            this[type] = _mockFn(type, this.options.types[type]) || this[type];
            this[type].raw = this[type];
        }
    }
    _wrapLogFn(defaults, isRaw) {
        return (...args)=>{
            if ($d1b6739b0a76a1d7$var$paused) {
                $d1b6739b0a76a1d7$var$queue.push([
                    this,
                    defaults,
                    args,
                    isRaw
                ]);
                return;
            }
            return this._logFn(defaults, args, isRaw);
        };
    }
    _logFn(defaults, args, isRaw) {
        if ((defaults.level || 0) > this.level) return false;
        const logObj = {
            date: /* @__PURE__ */ new Date(),
            args: [],
            ...defaults,
            level: $d1b6739b0a76a1d7$var$_normalizeLogLevel(defaults.level, this.options.types)
        };
        if (!isRaw && args.length === 1 && $d1b6739b0a76a1d7$var$isLogObj(args[0])) Object.assign(logObj, args[0]);
        else logObj.args = [
            ...args
        ];
        if (logObj.message) {
            logObj.args.unshift(logObj.message);
            delete logObj.message;
        }
        if (logObj.additional) {
            if (!Array.isArray(logObj.additional)) logObj.additional = logObj.additional.split("\n");
            logObj.args.push("\n" + logObj.additional.join("\n"));
            delete logObj.additional;
        }
        logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
        logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
        const resolveLog = (newLog = false)=>{
            const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
            if (this._lastLog.object && repeated > 0) {
                const args2 = [
                    ...this._lastLog.object.args
                ];
                if (repeated > 1) args2.push(`(repeated ${repeated} times)`);
                this._log({
                    ...this._lastLog.object,
                    args: args2
                });
                this._lastLog.count = 1;
            }
            if (newLog) {
                this._lastLog.object = logObj;
                this._log(logObj);
            }
        };
        clearTimeout(this._lastLog.timeout);
        const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
        this._lastLog.time = logObj.date;
        if (diffTime < this.options.throttle) try {
            const serializedLog = JSON.stringify([
                logObj.type,
                logObj.tag,
                logObj.args
            ]);
            const isSameLog = this._lastLog.serialized === serializedLog;
            this._lastLog.serialized = serializedLog;
            if (isSameLog) {
                this._lastLog.count = (this._lastLog.count || 0) + 1;
                if (this._lastLog.count > this.options.throttleMin) {
                    this._lastLog.timeout = setTimeout(resolveLog, this.options.throttle);
                    return;
                }
            }
        } catch  {}
        resolveLog(true);
    }
    _log(logObj) {
        for (const reporter of this.options.reporters)reporter.log(logObj, {
            options: this.options
        });
    }
}
function $d1b6739b0a76a1d7$var$_normalizeLogLevel(input, types = {}, defaultLevel = 3) {
    if (input === void 0) return defaultLevel;
    if (typeof input === "number") return input;
    if (types[input] && types[input].level !== void 0) return types[input].level;
    return defaultLevel;
}
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.add = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.addReporter;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.remove = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.removeReporter;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.clear = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.removeReporter;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.withScope = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.withTag;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.mock = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.mockTypes;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.pause = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.pauseLogs;
$d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.resume = $d1b6739b0a76a1d7$export$931f3af3333a6b52.prototype.resumeLogs;
function $d1b6739b0a76a1d7$export$9a3d0f63dc13e45(options = {}) {
    return new $d1b6739b0a76a1d7$export$931f3af3333a6b52(options);
}


class $3cbde2a73d1b1bf2$var$BrowserReporter {
    options;
    defaultColor;
    levelColorMap;
    typeColorMap;
    constructor(options){
        this.options = {
            ...options
        };
        this.defaultColor = "#7f8c8d";
        this.levelColorMap = {
            0: "#c0392b",
            // Red
            1: "#f39c12",
            // Yellow
            3: "#00BCD4"
        };
        this.typeColorMap = {
            success: "#2ecc71"
        };
    }
    _getLogFn(level) {
        if (level < 1) return console.__error || console.error;
        if (level === 1) return console.__warn || console.warn;
        return console.__log || console.log;
    }
    log(logObj) {
        const consoleLogFn = this._getLogFn(logObj.level);
        const type = logObj.type === "log" ? "" : logObj.type;
        const tag = logObj.tag || "";
        const color = this.typeColorMap[logObj.type] || this.levelColorMap[logObj.level] || this.defaultColor;
        const style = `
      background: ${color};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `;
        const badge = `%c${[
            tag,
            type
        ].filter(Boolean).join(":")}`;
        if (typeof logObj.args[0] === "string") consoleLogFn(`${badge}%c ${logObj.args[0]}`, style, // Empty string as style resets to default console style
        "", ...logObj.args.slice(1));
        else consoleLogFn(badge, style, ...logObj.args);
    }
}
function $3cbde2a73d1b1bf2$export$9a3d0f63dc13e45(options = {}) {
    const consola2 = (0, $d1b6739b0a76a1d7$export$9a3d0f63dc13e45)({
        reporters: options.reporters || [
            new $3cbde2a73d1b1bf2$var$BrowserReporter({})
        ],
        prompt (message, options2 = {}) {
            if (options2.type === "confirm") return Promise.resolve(confirm(message));
            return Promise.resolve(prompt(message));
        },
        ...options
    });
    return consola2;
}
const $3cbde2a73d1b1bf2$export$d0e46ecc2d3d1cd9 = $3cbde2a73d1b1bf2$export$9a3d0f63dc13e45();


const $19702c521a648d13$var$logLevel = (0, $d1b6739b0a76a1d7$export$4f46d2c583b32374).info;
const $19702c521a648d13$export$af88d00dbe7f521 = (0, $3cbde2a73d1b1bf2$export$9a3d0f63dc13e45)({
    level: $19702c521a648d13$var$logLevel
}).withTag("weather-forecast-card");



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1a31a390bd55f1ec$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $1a31a390bd55f1ec$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $1a31a390bd55f1ec$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}





const $623c66717742c4ec$var$isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
class $623c66717742c4ec$var$ActionHandler extends HTMLElement {
    constructor(){
        super(), this.holdTime = 500, this.held = false;
        this.ripple = document.createElement("mwc-ripple");
    }
    connectedCallback() {
        Object.assign(this.style, {
            position: "absolute",
            width: $623c66717742c4ec$var$isTouch ? "100px" : "50px",
            height: $623c66717742c4ec$var$isTouch ? "100px" : "50px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: "999"
        });
        this.appendChild(this.ripple);
        this.ripple.primary = true;
        [
            "touchcancel",
            "mouseout",
            "mouseup",
            "touchmove",
            "mousewheel",
            "wheel",
            "scroll"
        ].forEach((ev)=>{
            document.addEventListener(ev, ()=>{
                clearTimeout(this.timer);
                this.stopAnimation();
                this.timer = undefined;
            }, {
                passive: true
            });
        });
    }
    bind(element, options) {
        if (element.actionHandler) return;
        element.actionHandler = true;
        element.addEventListener("contextmenu", (ev)=>{
            const e = ev || window.event;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        });
        const start = (ev)=>{
            this.held = false;
            let x;
            let y;
            if (ev.touches) {
                x = ev.touches[0].pageX;
                y = ev.touches[0].pageY;
            } else {
                x = ev.pageX;
                y = ev.pageY;
            }
            this.timer = window.setTimeout(()=>{
                this.startAnimation(x, y);
                this.held = true;
            }, this.holdTime);
        };
        const end = (ev)=>{
            // Prevent mouse event if touch event
            ev.preventDefault();
            if (options.stopPropagation) // Stop propagation to avoid parent handlers being invoked
            ev.stopPropagation();
            if ([
                "touchend",
                "touchcancel"
            ].includes(ev.type) && this.timer === undefined) return;
            clearTimeout(this.timer);
            this.stopAnimation();
            this.timer = undefined;
            if (this.held) (0, $0412f1070fcb3161$export$43835e9acf248a15)(element, "action", {
                action: "hold"
            }, {
                bubbles: !options.stopPropagation
            });
            else if (options.hasDoubleClick) {
                if (ev.type === "click" && ev.detail < 2 || !this.dblClickTimeout) this.dblClickTimeout = window.setTimeout(()=>{
                    this.dblClickTimeout = undefined;
                    (0, $0412f1070fcb3161$export$43835e9acf248a15)(element, "action", {
                        action: "tap"
                    }, {
                        bubbles: !options.stopPropagation
                    });
                }, 250);
                else {
                    clearTimeout(this.dblClickTimeout);
                    this.dblClickTimeout = undefined;
                    (0, $0412f1070fcb3161$export$43835e9acf248a15)(element, "action", {
                        action: "double_tap"
                    }, {
                        bubbles: !options.stopPropagation
                    });
                }
            } else (0, $0412f1070fcb3161$export$43835e9acf248a15)(element, "action", {
                action: "tap"
            }, {
                bubbles: !options.stopPropagation
            });
        };
        const handleEnter = (ev)=>{
            if (ev.keyCode !== 13) return;
            end(ev);
        };
        element.addEventListener("touchstart", start, {
            passive: true
        });
        element.addEventListener("touchend", end);
        element.addEventListener("touchcancel", end);
        element.addEventListener("mousedown", start, {
            passive: true
        });
        element.addEventListener("click", end);
        element.addEventListener("keyup", handleEnter);
    }
    startAnimation(x, y) {
        Object.assign(this.style, {
            left: `${x}px`,
            top: `${y}px`,
            display: null
        });
        this.ripple.disabled = false;
        this.ripple.active = true;
        this.ripple.unbounded = true;
    }
    stopAnimation() {
        this.ripple.active = false;
        this.ripple.disabled = true;
        this.style.display = "none";
    }
}
customElements.define("action-handler-wfc", $623c66717742c4ec$var$ActionHandler);
const $623c66717742c4ec$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector("action-handler-wfc")) return body.querySelector("action-handler-wfc");
    const actionhandler = document.createElement("action-handler-wfc");
    body.appendChild(actionhandler);
    return actionhandler;
};
const $623c66717742c4ec$export$520aee61eb0a2770 = (element, options)=>{
    const actionhandler = $623c66717742c4ec$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
const $623c66717742c4ec$export$8a44987212de21b = (0, $1a31a390bd55f1ec$export$99b43ad1ed32e735)(class extends (0, $1a31a390bd55f1ec$export$befdefbdce210f91) {
    update(part, [options]) {
        $623c66717742c4ec$export$520aee61eb0a2770(part.element, options);
        return 0, $ad0512c2874d4e1a$export$9c068ae9cc5db4e8;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(_options) {}
});


var $24b1361a8f4eb21b$export$3f4c2f605b6a3199 = /*#__PURE__*/ function(ForecastMode) {
    ForecastMode["Chart"] = "chart";
    ForecastMode["Simple"] = "simple";
    return ForecastMode;
}({});






var $9547816cba2a40b2$export$8b3032c22c6f26e6 = /*#__PURE__*/ function(WeatherEntityFeature) {
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_DAILY"] = 1] = "FORECAST_DAILY";
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_HOURLY"] = 2] = "FORECAST_HOURLY";
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_TWICE_DAILY"] = 4] = "FORECAST_TWICE_DAILY";
    return WeatherEntityFeature;
}({});
var $9547816cba2a40b2$export$4d77637090661a14 = /*#__PURE__*/ function(WeatherUnits) {
    WeatherUnits["Temperature"] = "temperature_unit";
    WeatherUnits["Pressure"] = "pressure_unit";
    WeatherUnits["WindSpeed"] = "wind_speed_unit";
    WeatherUnits["Precipitation"] = "precipitation_unit";
    WeatherUnits["Visibility"] = "visibility_unit";
    return WeatherUnits;
}({});
const $9547816cba2a40b2$export$a94cf610ac0519b4 = (hass, stateObj, measure)=>{
    const config = hass.config;
    const lengthUnit = config.unit_system.length || "";
    switch(measure){
        case "visibility":
            return stateObj.attributes.visibility_unit || lengthUnit;
        case "precipitation":
            return stateObj.attributes.precipitation_unit || (lengthUnit === "km" ? "mm" : "in");
        case "pressure":
            return stateObj.attributes.pressure_unit || (lengthUnit === "km" ? "hPa" : "inHg");
        case "apparent_temperature":
        case "dew_point":
        case "temperature":
        case "templow":
            return stateObj.attributes.temperature_unit || config.unit_system.temperature;
        case "wind_speed":
            return stateObj.attributes.wind_speed_unit || `${lengthUnit}/h`;
        case "cloud_coverage":
        case "humidity":
        case "precipitation_probability":
            return "%";
        default:
            return (measure in config.unit_system ? config.unit_system[measure] : "") || "";
    }
};
const $9547816cba2a40b2$var$EIGHT_HOURS = 28800000;
const $9547816cba2a40b2$var$DAY_IN_MILLISECONDS = 86400000;
const $9547816cba2a40b2$var$isForecastHourly = (forecast)=>{
    if (forecast && forecast?.length && forecast?.length > 2) {
        const date1 = new Date(forecast[1].datetime);
        const date2 = new Date(forecast[2].datetime);
        const timeDiff = date2.getTime() - date1.getTime();
        return timeDiff < $9547816cba2a40b2$var$EIGHT_HOURS;
    }
    return undefined;
};
const $9547816cba2a40b2$var$isForecastTwiceDaily = (forecast)=>{
    if (forecast && forecast?.length && forecast?.length > 2) {
        const date1 = new Date(forecast[1].datetime);
        const date2 = new Date(forecast[2].datetime);
        const timeDiff = date2.getTime() - date1.getTime();
        return timeDiff < $9547816cba2a40b2$var$DAY_IN_MILLISECONDS;
    }
    return undefined;
};
const $9547816cba2a40b2$var$getLegacyForecast = (weather_attributes)=>{
    if (weather_attributes?.forecast && weather_attributes.forecast.length > 2) {
        if ($9547816cba2a40b2$var$isForecastHourly(weather_attributes.forecast)) return {
            forecast: weather_attributes.forecast,
            type: "hourly"
        };
        if ($9547816cba2a40b2$var$isForecastTwiceDaily(weather_attributes.forecast)) return {
            forecast: weather_attributes.forecast,
            type: "twice_daily"
        };
        return {
            forecast: weather_attributes.forecast,
            type: "daily"
        };
    }
    return undefined;
};
const $9547816cba2a40b2$export$c1e906046b5de973 = (weather_attributes, forecast_event, forecast_type)=>{
    if (forecast_type === undefined) {
        if (forecast_event?.type !== undefined && forecast_event?.forecast && forecast_event?.forecast?.length > 2) return {
            forecast: forecast_event.forecast,
            type: forecast_event?.type
        };
        return $9547816cba2a40b2$var$getLegacyForecast(weather_attributes);
    }
    if (forecast_type === "legacy") return $9547816cba2a40b2$var$getLegacyForecast(weather_attributes);
    if (forecast_type === forecast_event?.type && forecast_event?.forecast && forecast_event?.forecast?.length > 2) return {
        forecast: forecast_event.forecast,
        type: forecast_type
    };
    return undefined;
};
const $9547816cba2a40b2$export$ace10bd47409a000 = (hass, entity_id, forecast_type, callback)=>hass.connection.subscribeMessage(callback, {
        type: "weather/subscribe_forecast",
        forecast_type: forecast_type,
        entity_id: entity_id
    });
const $9547816cba2a40b2$export$a50ac51123d082ca = (forecasts)=>{
    const maxPrecipitation = Math.max(...forecasts.map((f)=>f.precipitation || 0));
    return maxPrecipitation;
};
const $9547816cba2a40b2$export$1cbb3573d761a816 = (forecast)=>{
    return forecast.precipitation !== undefined && forecast.precipitation > 0 || forecast.precipitation_probability !== undefined && forecast.precipitation_probability > 0;
};
const $9547816cba2a40b2$export$cd2fc90c9579d3fd = (weatherEntity)=>{
    if (!weatherEntity || !weatherEntity.attributes) return false;
    const features = weatherEntity.attributes.supported_features;
    if (typeof features !== "number") return false;
    const hasDaily = (features & 1) !== 0;
    const hasHourly = (features & 2) !== 0;
    return hasDaily && hasHourly;
};
const $9547816cba2a40b2$export$c22786b38d196cde = (value, unit)=>{
    if (value === undefined) return "";
    const precipitationMm = unit === "mm" ? value : value * 25.4;
    if (precipitationMm === 0 || precipitationMm < 0.05) return "";
    const formatted = unit === "in" ? value.toFixed(2) : value.toFixed(1);
    return `${formatted} ${unit}`;
};
const $9547816cba2a40b2$export$99f5c9dd8f0f996b = (0, $d54dfc44cec4eb2f$export$2e2bcd8739ae039)((unit, forecastType)=>{
    const maxPrecipitationMm = forecastType === "hourly" ? 8 : 20;
    if (unit === "in") {
        const inches = maxPrecipitationMm / 25.4;
        return parseFloat(inches.toFixed(1));
    }
    return maxPrecipitationMm;
});
const $9547816cba2a40b2$export$9cb9630ccf5284ab = (forecast, groupSize)=>{
    const groupedForecast = [];
    let i = 0;
    while(i < forecast.length){
        const currentHour = new Date(forecast[i].datetime).getHours();
        const remainder = currentHour % groupSize;
        const steps = remainder === 0 ? groupSize : groupSize - remainder;
        const group = forecast.slice(i, i + steps);
        i += group.length;
        if (group.length === 0) continue;
        const temperatures = group.map((e)=>e.temperature);
        const validHumidity = group.map((e)=>e.humidity).filter((e)=>e !== undefined);
        const validPressure = group.map((e)=>e.pressure).filter((e)=>e !== undefined);
        const validWindSpeed = group.map((e)=>e.wind_speed).filter((e)=>e !== undefined);
        const validBearing = group.map((e)=>e.wind_bearing).filter((e)=>e !== undefined);
        const validPrecipChance = group.map((e)=>e.precipitation_probability).filter((e)=>e !== undefined);
        const lastEntryDate = new Date(group[group.length - 1].datetime);
        lastEntryDate.setMinutes(59);
        lastEntryDate.setSeconds(59);
        const aggregatedEntry = {
            datetime: group[0].datetime,
            groupEndtime: lastEntryDate.toISOString(),
            condition: $9547816cba2a40b2$var$getWorstCondition(group),
            temperature: parseFloat((0, $cec8c66d67f18323$export$cc6710ee5f037d57)(temperatures).toFixed(1))
        };
        if (validHumidity.length > 0) aggregatedEntry.humidity = Math.round((0, $cec8c66d67f18323$export$cc6710ee5f037d57)(validHumidity));
        if (validPrecipChance.length > 0) aggregatedEntry.precipitation_probability = Math.max(...validPrecipChance);
        if (group.some((e)=>e.precipitation !== undefined)) aggregatedEntry.precipitation = group.reduce((sum, entry)=>sum + (entry.precipitation || 0), 0);
        const validLows = group.map((e)=>e.templow).filter((e)=>e !== undefined);
        if (validLows.length > 0) aggregatedEntry.templow = Math.min(...validLows);
        if (validPressure.length > 0) aggregatedEntry.pressure = Math.round((0, $cec8c66d67f18323$export$cc6710ee5f037d57)(validPressure));
        if (validWindSpeed.length > 0) aggregatedEntry.wind_speed = (0, $cec8c66d67f18323$export$cc6710ee5f037d57)(validWindSpeed);
        if (validBearing.length > 0) aggregatedEntry.wind_bearing = $9547816cba2a40b2$var$computeAverageBearing(validBearing);
        groupedForecast.push(aggregatedEntry);
    }
    return groupedForecast;
};
const $9547816cba2a40b2$var$computeAverageBearing = (bearings)=>{
    if (bearings.length === 0) return 0;
    let sumSin = 0;
    let sumCos = 0;
    bearings.forEach((deg)=>{
        const rad = deg * Math.PI / 180;
        sumSin += Math.sin(rad);
        sumCos += Math.cos(rad);
    });
    const avgSin = sumSin / bearings.length;
    const avgCos = sumCos / bearings.length;
    let avgRad = Math.atan2(avgSin, avgCos);
    let avgDeg = avgRad * 180 / Math.PI;
    // Normalize to 0-360
    if (avgDeg < 0) avgDeg += 360;
    return Math.round(avgDeg);
};
const $9547816cba2a40b2$var$getWorstCondition = (forecast)=>{
    const severityOrder = [
        "exceptional",
        "hail",
        "lightning-rainy",
        "lightning",
        "snowy-rainy",
        "pouring",
        "snowy",
        "rainy",
        "windy-variant",
        "windy",
        "fog",
        "cloudy",
        "partlycloudy",
        "clear-night",
        "sunny"
    ];
    forecast.sort((a, b)=>{
        let indexA = severityOrder.indexOf(a.condition || "exceptional");
        let indexB = severityOrder.indexOf(b.condition || "exceptional");
        if (indexA === -1) indexA = 0;
        if (indexB === -1) indexB = 0;
        return indexA - indexB;
    });
    return forecast[0]?.condition || "exceptional";
};









/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f3c0ee04a587c8fb$var$n = "important", $f3c0ee04a587c8fb$var$i = " !" + $f3c0ee04a587c8fb$var$n, $f3c0ee04a587c8fb$export$1e5b4ce2fa884e6a = (0, $1a31a390bd55f1ec$export$99b43ad1ed32e735)(class extends (0, $1a31a390bd55f1ec$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $1a31a390bd55f1ec$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($f3c0ee04a587c8fb$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $f3c0ee04a587c8fb$var$n : "") : s[t] = e;
            }
        }
        return 0, $ad0512c2874d4e1a$export$9c068ae9cc5db4e8;
    }
});




/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */ /*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ /*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function $c639a761a852ef3b$export$2077e0241d6afd3c(v) {
    return v + 0.5 | 0;
}
const $c639a761a852ef3b$export$837ba5c449269406 = (v, l, h)=>Math.max(Math.min(v, h), l);
function $c639a761a852ef3b$export$bcc6e673dfa14d36(v) {
    return $c639a761a852ef3b$export$837ba5c449269406($c639a761a852ef3b$export$2077e0241d6afd3c(v * 2.55), 0, 255);
}
function $c639a761a852ef3b$export$869b26d4e1bbdb63(v) {
    return $c639a761a852ef3b$export$837ba5c449269406($c639a761a852ef3b$export$2077e0241d6afd3c(v / 2.55), 0, 100);
}
function $c639a761a852ef3b$export$ed9bd8dcaeba14f6(v) {
    return $c639a761a852ef3b$export$837ba5c449269406($c639a761a852ef3b$export$2077e0241d6afd3c(v * 255), 0, 255);
}
function $c639a761a852ef3b$export$dbf961a8d278dbef(v) {
    return $c639a761a852ef3b$export$837ba5c449269406($c639a761a852ef3b$export$2077e0241d6afd3c(v / 2.55) / 100, 0, 1);
}
function $c639a761a852ef3b$export$aa35ef1f24408ab9(v) {
    return $c639a761a852ef3b$export$837ba5c449269406($c639a761a852ef3b$export$2077e0241d6afd3c(v * 100), 0, 100);
}
const $c639a761a852ef3b$var$map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const $c639a761a852ef3b$var$hex = [
    ...'0123456789ABCDEF'
];
const $c639a761a852ef3b$var$h1 = (b)=>$c639a761a852ef3b$var$hex[b & 0xF];
const $c639a761a852ef3b$var$h2 = (b)=>$c639a761a852ef3b$var$hex[(b & 0xF0) >> 4] + $c639a761a852ef3b$var$hex[b & 0xF];
const $c639a761a852ef3b$var$eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const $c639a761a852ef3b$var$isShort = (v)=>$c639a761a852ef3b$var$eq(v.r) && $c639a761a852ef3b$var$eq(v.g) && $c639a761a852ef3b$var$eq(v.b) && $c639a761a852ef3b$var$eq(v.a);
function $c639a761a852ef3b$export$625a38b961e8b5e9(str) {
    var len = str.length;
    var ret;
    if (str[0] === '#') {
        if (len === 4 || len === 5) ret = {
            r: 255 & $c639a761a852ef3b$var$map$1[str[1]] * 17,
            g: 255 & $c639a761a852ef3b$var$map$1[str[2]] * 17,
            b: 255 & $c639a761a852ef3b$var$map$1[str[3]] * 17,
            a: len === 5 ? $c639a761a852ef3b$var$map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: $c639a761a852ef3b$var$map$1[str[1]] << 4 | $c639a761a852ef3b$var$map$1[str[2]],
            g: $c639a761a852ef3b$var$map$1[str[3]] << 4 | $c639a761a852ef3b$var$map$1[str[4]],
            b: $c639a761a852ef3b$var$map$1[str[5]] << 4 | $c639a761a852ef3b$var$map$1[str[6]],
            a: len === 9 ? $c639a761a852ef3b$var$map$1[str[7]] << 4 | $c639a761a852ef3b$var$map$1[str[8]] : 255
        };
    }
    return ret;
}
const $c639a761a852ef3b$var$alpha = (a, f)=>a < 255 ? f(a) : '';
function $c639a761a852ef3b$export$1b06654353ef9f67(v) {
    var f = $c639a761a852ef3b$var$isShort(v) ? $c639a761a852ef3b$var$h1 : $c639a761a852ef3b$var$h2;
    return v ? '#' + f(v.r) + f(v.g) + f(v.b) + $c639a761a852ef3b$var$alpha(v.a, f) : undefined;
}
const $c639a761a852ef3b$var$HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function $c639a761a852ef3b$var$hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function $c639a761a852ef3b$var$hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function $c639a761a852ef3b$var$hwb2rgbn(h, w, b) {
    const rgb = $c639a761a852ef3b$var$hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function $c639a761a852ef3b$var$hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function $c639a761a852ef3b$export$b5ba70b240f8f7f(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = $c639a761a852ef3b$var$hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function $c639a761a852ef3b$var$calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map($c639a761a852ef3b$export$ed9bd8dcaeba14f6);
}
function $c639a761a852ef3b$export$4c15bd42559b811d(h, s, l) {
    return $c639a761a852ef3b$var$calln($c639a761a852ef3b$var$hsl2rgbn, h, s, l);
}
function $c639a761a852ef3b$export$e2710022c70fc9ee(h, w, b) {
    return $c639a761a852ef3b$var$calln($c639a761a852ef3b$var$hwb2rgbn, h, w, b);
}
function $c639a761a852ef3b$export$b785a357c84e4a04(h, s, v) {
    return $c639a761a852ef3b$var$calln($c639a761a852ef3b$var$hsv2rgbn, h, s, v);
}
function $c639a761a852ef3b$var$hue(h) {
    return (h % 360 + 360) % 360;
}
function $c639a761a852ef3b$export$5e91288c399be4f9(str) {
    const m = $c639a761a852ef3b$var$HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? $c639a761a852ef3b$export$bcc6e673dfa14d36(+m[5]) : $c639a761a852ef3b$export$ed9bd8dcaeba14f6(+m[5]);
    const h = $c639a761a852ef3b$var$hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === 'hwb') v = $c639a761a852ef3b$export$e2710022c70fc9ee(h, p1, p2);
    else if (m[1] === 'hsv') v = $c639a761a852ef3b$export$b785a357c84e4a04(h, p1, p2);
    else v = $c639a761a852ef3b$export$4c15bd42559b811d(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function $c639a761a852ef3b$export$bb628a54ab399bc9(v, deg) {
    var h = $c639a761a852ef3b$export$b5ba70b240f8f7f(v);
    h[0] = $c639a761a852ef3b$var$hue(h[0] + deg);
    h = $c639a761a852ef3b$export$4c15bd42559b811d(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function $c639a761a852ef3b$export$a197af1c58e6260c(v) {
    if (!v) return;
    const a = $c639a761a852ef3b$export$b5ba70b240f8f7f(v);
    const h = a[0];
    const s = $c639a761a852ef3b$export$aa35ef1f24408ab9(a[1]);
    const l = $c639a761a852ef3b$export$aa35ef1f24408ab9(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${$c639a761a852ef3b$export$dbf961a8d278dbef(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const $c639a761a852ef3b$var$map = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
};
const $c639a761a852ef3b$var$names$1 = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
};
function $c639a761a852ef3b$var$unpack() {
    const unpacked = {};
    const keys = Object.keys($c639a761a852ef3b$var$names$1);
    const tkeys = Object.keys($c639a761a852ef3b$var$map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, $c639a761a852ef3b$var$map[k]);
        }
        k = parseInt($c639a761a852ef3b$var$names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let $c639a761a852ef3b$var$names;
function $c639a761a852ef3b$export$b2f06b640faad956(str) {
    if (!$c639a761a852ef3b$var$names) {
        $c639a761a852ef3b$var$names = $c639a761a852ef3b$var$unpack();
        $c639a761a852ef3b$var$names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = $c639a761a852ef3b$var$names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const $c639a761a852ef3b$var$RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function $c639a761a852ef3b$export$91aedb20f296e541(str) {
    const m = $c639a761a852ef3b$var$RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? $c639a761a852ef3b$export$bcc6e673dfa14d36(v) : $c639a761a852ef3b$export$837ba5c449269406(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? $c639a761a852ef3b$export$bcc6e673dfa14d36(r) : $c639a761a852ef3b$export$837ba5c449269406(r, 0, 255));
    g = 255 & (m[4] ? $c639a761a852ef3b$export$bcc6e673dfa14d36(g) : $c639a761a852ef3b$export$837ba5c449269406(g, 0, 255));
    b = 255 & (m[6] ? $c639a761a852ef3b$export$bcc6e673dfa14d36(b) : $c639a761a852ef3b$export$837ba5c449269406(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function $c639a761a852ef3b$export$9595423f22cf925a(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${$c639a761a852ef3b$export$dbf961a8d278dbef(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const $c639a761a852ef3b$var$to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const $c639a761a852ef3b$var$from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function $c639a761a852ef3b$var$interpolate(rgb1, rgb2, t) {
    const r = $c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb1.r));
    const g = $c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb1.g));
    const b = $c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb1.b));
    return {
        r: $c639a761a852ef3b$export$ed9bd8dcaeba14f6($c639a761a852ef3b$var$to(r + t * ($c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb2.r)) - r))),
        g: $c639a761a852ef3b$export$ed9bd8dcaeba14f6($c639a761a852ef3b$var$to(g + t * ($c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb2.g)) - g))),
        b: $c639a761a852ef3b$export$ed9bd8dcaeba14f6($c639a761a852ef3b$var$to(b + t * ($c639a761a852ef3b$var$from($c639a761a852ef3b$export$dbf961a8d278dbef(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function $c639a761a852ef3b$var$modHSL(v, i, ratio) {
    if (v) {
        let tmp = $c639a761a852ef3b$export$b5ba70b240f8f7f(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = $c639a761a852ef3b$export$4c15bd42559b811d(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function $c639a761a852ef3b$var$clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function $c639a761a852ef3b$var$fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = $c639a761a852ef3b$export$ed9bd8dcaeba14f6(input[3]);
        }
    } else {
        v = $c639a761a852ef3b$var$clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = $c639a761a852ef3b$export$ed9bd8dcaeba14f6(v.a);
    }
    return v;
}
function $c639a761a852ef3b$var$functionParse(str) {
    if (str.charAt(0) === 'r') return $c639a761a852ef3b$export$91aedb20f296e541(str);
    return $c639a761a852ef3b$export$5e91288c399be4f9(str);
}
class $c639a761a852ef3b$export$892596cec99bc70e {
    constructor(input){
        if (input instanceof $c639a761a852ef3b$export$892596cec99bc70e) return input;
        const type = typeof input;
        let v;
        if (type === 'object') v = $c639a761a852ef3b$var$fromObject(input);
        else if (type === 'string') v = $c639a761a852ef3b$export$625a38b961e8b5e9(input) || $c639a761a852ef3b$export$b2f06b640faad956(input) || $c639a761a852ef3b$var$functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = $c639a761a852ef3b$var$clone(this._rgb);
        if (v) v.a = $c639a761a852ef3b$export$dbf961a8d278dbef(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = $c639a761a852ef3b$var$fromObject(obj);
    }
    rgbString() {
        return this._valid ? $c639a761a852ef3b$export$9595423f22cf925a(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? $c639a761a852ef3b$export$1b06654353ef9f67(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? $c639a761a852ef3b$export$a197af1c58e6260c(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = $c639a761a852ef3b$var$interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new $c639a761a852ef3b$export$892596cec99bc70e(this.rgb);
    }
    alpha(a) {
        this._rgb.a = $c639a761a852ef3b$export$ed9bd8dcaeba14f6(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = $c639a761a852ef3b$export$2077e0241d6afd3c(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        $c639a761a852ef3b$var$modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        $c639a761a852ef3b$var$modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        $c639a761a852ef3b$var$modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        $c639a761a852ef3b$var$modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        $c639a761a852ef3b$export$bb628a54ab399bc9(this._rgb, deg);
        return this;
    }
}
function $c639a761a852ef3b$export$2e2bcd8739ae039(input) {
    return new $c639a761a852ef3b$export$892596cec99bc70e(input);
}


/**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ function $7cc28eca4d136c06$export$53a70dd1ebbae346() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const $7cc28eca4d136c06$export$2219238a014317b0 = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function $7cc28eca4d136c06$export$342063e11d6c3cad(value) {
    return value === null || value === undefined;
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function $7cc28eca4d136c06$export$8b22cf2602fb60ce(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function $7cc28eca4d136c06$export$23f2a1d2818174ef(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function $7cc28eca4d136c06$export$39b482c5e57630a8(value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function $7cc28eca4d136c06$export$c4ce752e73470fba(value, defaultValue) {
    return $7cc28eca4d136c06$export$39b482c5e57630a8(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function $7cc28eca4d136c06$export$90a7f3efeed30595(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
}
const $7cc28eca4d136c06$export$953cecd6e717a553 = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
const $7cc28eca4d136c06$export$7ccc53e8f1e7dfc5 = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function $7cc28eca4d136c06$export$3722cfe417b6ed86(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') return fn.apply(thisArg, args);
}
function $7cc28eca4d136c06$export$d66501df72047452(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if ($7cc28eca4d136c06$export$8b22cf2602fb60ce(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if ($7cc28eca4d136c06$export$23f2a1d2818174ef(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function $7cc28eca4d136c06$export$f38c853ae54ed474(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function $7cc28eca4d136c06$export$667d3bf0c5f83305(source) {
    if ($7cc28eca4d136c06$export$8b22cf2602fb60ce(source)) return source.map($7cc28eca4d136c06$export$667d3bf0c5f83305);
    if ($7cc28eca4d136c06$export$23f2a1d2818174ef(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = $7cc28eca4d136c06$export$667d3bf0c5f83305(source[keys[k]]);
        return target;
    }
    return source;
}
function $7cc28eca4d136c06$var$isValidKey(key) {
    return [
        '__proto__',
        'prototype',
        'constructor'
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function $7cc28eca4d136c06$export$317a3d46287192d8(key, target, source, options) {
    if (!$7cc28eca4d136c06$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($7cc28eca4d136c06$export$23f2a1d2818174ef(tval) && $7cc28eca4d136c06$export$23f2a1d2818174ef(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    $7cc28eca4d136c06$export$efca4cbe5dd06740(tval, sval, options);
    else target[key] = $7cc28eca4d136c06$export$667d3bf0c5f83305(sval);
}
function $7cc28eca4d136c06$export$efca4cbe5dd06740(target, source, options) {
    const sources = $7cc28eca4d136c06$export$8b22cf2602fb60ce(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!$7cc28eca4d136c06$export$23f2a1d2818174ef(target)) return target;
    options = options || {};
    const merger = options.merger || $7cc28eca4d136c06$export$317a3d46287192d8;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!$7cc28eca4d136c06$export$23f2a1d2818174ef(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function $7cc28eca4d136c06$export$555508cbc6add439(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return $7cc28eca4d136c06$export$efca4cbe5dd06740(target, source, {
        merger: $7cc28eca4d136c06$export$1ee57be6f6687d2c
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function $7cc28eca4d136c06$export$1ee57be6f6687d2c(key, target, source) {
    if (!$7cc28eca4d136c06$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($7cc28eca4d136c06$export$23f2a1d2818174ef(tval) && $7cc28eca4d136c06$export$23f2a1d2818174ef(sval)) $7cc28eca4d136c06$export$555508cbc6add439(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = $7cc28eca4d136c06$export$667d3bf0c5f83305(sval);
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$9d0e2d13d04f7070(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const $7cc28eca4d136c06$var$keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    '': (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function $7cc28eca4d136c06$export$1a8f5705751d8277(key) {
    const parts = key.split('.');
    const keys = [];
    let tmp = '';
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith('\\')) tmp = tmp.slice(0, -1) + '.';
        else {
            keys.push(tmp);
            tmp = '';
        }
    }
    return keys;
}
function $7cc28eca4d136c06$var$_getKeyResolver(key) {
    const keys = $7cc28eca4d136c06$export$1a8f5705751d8277(key);
    return (obj)=>{
        for (const k of keys){
            if (k === '') break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function $7cc28eca4d136c06$export$2d1720544b23b823(obj, key) {
    const resolver = $7cc28eca4d136c06$var$keyResolvers[key] || ($7cc28eca4d136c06$var$keyResolvers[key] = $7cc28eca4d136c06$var$_getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$a8550f7dbe79f93a(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const $7cc28eca4d136c06$export$dda1d9f60106f0e9 = (value)=>typeof value !== 'undefined';
const $7cc28eca4d136c06$export$a93c5207d687da10 = (value)=>typeof value === 'function';
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const $7cc28eca4d136c06$export$ee7c8ad385a60b7b = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function $7cc28eca4d136c06$export$3b513254972cfc9c(e) {
    return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const $7cc28eca4d136c06$export$56c0d5a1e737357d = Math.PI;
const $7cc28eca4d136c06$export$971d5caa766a69d7 = 2 * $7cc28eca4d136c06$export$56c0d5a1e737357d;
const $7cc28eca4d136c06$export$2ec5befb9e6c97d4 = $7cc28eca4d136c06$export$971d5caa766a69d7 + $7cc28eca4d136c06$export$56c0d5a1e737357d;
const $7cc28eca4d136c06$export$53c86fa97d611818 = Number.POSITIVE_INFINITY;
const $7cc28eca4d136c06$export$39c1cc7c062529d4 = $7cc28eca4d136c06$export$56c0d5a1e737357d / 180;
const $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd = $7cc28eca4d136c06$export$56c0d5a1e737357d / 2;
const $7cc28eca4d136c06$export$7a0bdf7d4a91ea88 = $7cc28eca4d136c06$export$56c0d5a1e737357d / 4;
const $7cc28eca4d136c06$export$c18d01048907ea92 = $7cc28eca4d136c06$export$56c0d5a1e737357d * 2 / 3;
const $7cc28eca4d136c06$export$faec65b429be379 = Math.log10;
const $7cc28eca4d136c06$export$2408f22a0fab9ae5 = Math.sign;
function $7cc28eca4d136c06$export$23ebac1979863676(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function $7cc28eca4d136c06$export$b9a6b53f9be3734(range) {
    const roundedRange = Math.round(range);
    range = $7cc28eca4d136c06$export$23ebac1979863676(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor($7cc28eca4d136c06$export$faec65b429be379(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function $7cc28eca4d136c06$export$a07804094c3ecf2d(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
/**
 * Verifies that attempting to coerce n to string or number won't throw a TypeError.
 */ function $7cc28eca4d136c06$var$isNonPrimitive(n) {
    return typeof n === 'symbol' || typeof n === 'object' && n !== null && !(Symbol.toPrimitive in n || 'toString' in n || 'valueOf' in n);
}
function $7cc28eca4d136c06$export$d141bba7fdc215a3(n) {
    return !$7cc28eca4d136c06$var$isNonPrimitive(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function $7cc28eca4d136c06$export$a05254e7c3aeba6e(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$a33b77bbdbb8366c(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function $7cc28eca4d136c06$export$625550452a3fa3ec(degrees) {
    return degrees * ($7cc28eca4d136c06$export$56c0d5a1e737357d / 180);
}
function $7cc28eca4d136c06$export$3a6d5c9ae78a2c08(radians) {
    return radians * (180 / $7cc28eca4d136c06$export$56c0d5a1e737357d);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function $7cc28eca4d136c06$export$91477dc880baac21(x) {
    if (!$7cc28eca4d136c06$export$39b482c5e57630a8(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function $7cc28eca4d136c06$export$96f57966bedc81b4(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * $7cc28eca4d136c06$export$56c0d5a1e737357d) angle += $7cc28eca4d136c06$export$971d5caa766a69d7; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle: angle,
        distance: radialDistanceFromCenter
    };
}
function $7cc28eca4d136c06$export$cf2f7c5792f80b46(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function $7cc28eca4d136c06$export$f074adc9fbd50943(a, b) {
    return (a - b + $7cc28eca4d136c06$export$2ec5befb9e6c97d4) % $7cc28eca4d136c06$export$971d5caa766a69d7 - $7cc28eca4d136c06$export$56c0d5a1e737357d;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function $7cc28eca4d136c06$export$ab83b03e4111b1d0(a) {
    return (a % $7cc28eca4d136c06$export$971d5caa766a69d7 + $7cc28eca4d136c06$export$971d5caa766a69d7) % $7cc28eca4d136c06$export$971d5caa766a69d7;
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$ffb5f4729a158638(angle, start, end, sameAngleIsFullCircle) {
    const a = $7cc28eca4d136c06$export$ab83b03e4111b1d0(angle);
    const s = $7cc28eca4d136c06$export$ab83b03e4111b1d0(start);
    const e = $7cc28eca4d136c06$export$ab83b03e4111b1d0(end);
    const angleToStart = $7cc28eca4d136c06$export$ab83b03e4111b1d0(s - a);
    const angleToEnd = $7cc28eca4d136c06$export$ab83b03e4111b1d0(e - a);
    const startToAngle = $7cc28eca4d136c06$export$ab83b03e4111b1d0(a - s);
    const endToAngle = $7cc28eca4d136c06$export$ab83b03e4111b1d0(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function $7cc28eca4d136c06$export$25ce5a424b770e84(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function $7cc28eca4d136c06$export$71cec2538cb2c617(value) {
    return $7cc28eca4d136c06$export$25ce5a424b770e84(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function $7cc28eca4d136c06$export$21579262ef46735b(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function $7cc28eca4d136c06$export$f96d196f7728bb5(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo: lo,
        hi: hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const $7cc28eca4d136c06$export$ef35774e6d314e91 = (table, key, value, last)=>$7cc28eca4d136c06$export$f96d196f7728bb5(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const $7cc28eca4d136c06$export$ebd11618f299a286 = (table, key, value)=>$7cc28eca4d136c06$export$f96d196f7728bb5(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function $7cc28eca4d136c06$export$2ed0fc6709e59212(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const $7cc28eca4d136c06$var$arrayEvents = [
    'push',
    'pop',
    'shift',
    'splice',
    'unshift'
];
function $7cc28eca4d136c06$export$882b5998b3b9117c(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, '_chartjs', {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    $7cc28eca4d136c06$var$arrayEvents.forEach((key)=>{
        const method = '_onData' + $7cc28eca4d136c06$export$a8550f7dbe79f93a(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === 'function') object[method](...args);
                });
                return res;
            }
        });
    });
}
function $7cc28eca4d136c06$export$3b14a55fb2447963(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    $7cc28eca4d136c06$var$arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function $7cc28eca4d136c06$export$71511d61b312f219(items) {
    const set = new Set(items);
    if (set.size === items.length) return items;
    return Array.from(set);
}
function $7cc28eca4d136c06$export$8c78c7c36408ea29(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/ const $7cc28eca4d136c06$export$43caf9889c228507 = function() {
    if (typeof window === 'undefined') return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function $7cc28eca4d136c06$export$61196ced6d74a310(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
        // Save the args for use later
        argsToUse = args;
        if (!ticking) {
            ticking = true;
            $7cc28eca4d136c06$export$43caf9889c228507.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, argsToUse);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function $7cc28eca4d136c06$export$4c3d22f3d993c33f(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const $7cc28eca4d136c06$export$3c2fa207a37baaea = (align)=>align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const $7cc28eca4d136c06$export$ce26c07117d59d6a = (align, start, end)=>align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const $7cc28eca4d136c06$export$890c4ad488842ce7 = (align, left, right, rtl)=>{
    const check = rtl ? 'left' : 'right';
    return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function $7cc28eca4d136c06$export$9e5f44173e64f162(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale: iScale, vScale: vScale, _parsed: _parsed } = meta;
        const spanGaps = meta.dataset ? meta.dataset.options ? meta.dataset.options.spanGaps : null : null;
        const axis = iScale.axis;
        const { min: min, max: max, minDefined: minDefined, maxDefined: maxDefined } = iScale.getUserBounds();
        if (minDefined) {
            start = Math.min($7cc28eca4d136c06$export$ef35774e6d314e91(_parsed, axis, min).lo, animationsDisabled ? pointCount : $7cc28eca4d136c06$export$ef35774e6d314e91(points, axis, iScale.getPixelForValue(min)).lo);
            if (spanGaps) {
                const distanceToDefinedLo = _parsed.slice(0, start + 1).reverse().findIndex((point)=>!$7cc28eca4d136c06$export$342063e11d6c3cad(point[vScale.axis]));
                start -= Math.max(0, distanceToDefinedLo);
            }
            start = $7cc28eca4d136c06$export$25ce5a424b770e84(start, 0, pointCount - 1);
        }
        if (maxDefined) {
            let end = Math.max($7cc28eca4d136c06$export$ef35774e6d314e91(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : $7cc28eca4d136c06$export$ef35774e6d314e91(points, axis, iScale.getPixelForValue(max), true).hi + 1);
            if (spanGaps) {
                const distanceToDefinedHi = _parsed.slice(end - 1).findIndex((point)=>!$7cc28eca4d136c06$export$342063e11d6c3cad(point[vScale.axis]));
                end += Math.max(0, distanceToDefinedHi);
            }
            count = $7cc28eca4d136c06$export$25ce5a424b770e84(end, start, pointCount) - start;
        } else count = pointCount - start;
    }
    return {
        start: start,
        count: count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function $7cc28eca4d136c06$export$efccba1c4a2ef57b(meta) {
    const { xScale: xScale, yScale: yScale, _scaleRanges: _scaleRanges } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const $7cc28eca4d136c06$var$atEdge = (t)=>t === 0 || t === 1;
const $7cc28eca4d136c06$var$elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * $7cc28eca4d136c06$export$971d5caa766a69d7 / p));
const $7cc28eca4d136c06$var$elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * $7cc28eca4d136c06$export$971d5caa766a69d7 / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const $7cc28eca4d136c06$export$f1e1789686576879 = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd) + 1,
    easeOutSine: (t)=>Math.sin(t * $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd),
    easeInOutSine: (t)=>-0.5 * (Math.cos($7cc28eca4d136c06$export$56c0d5a1e737357d * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>$7cc28eca4d136c06$var$atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>$7cc28eca4d136c06$var$atEdge(t) ? t : $7cc28eca4d136c06$var$elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>$7cc28eca4d136c06$var$atEdge(t) ? t : $7cc28eca4d136c06$var$elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return $7cc28eca4d136c06$var$atEdge(t) ? t : t < 0.5 ? 0.5 * $7cc28eca4d136c06$var$elasticIn(t * 2, s, p) : 0.5 + 0.5 * $7cc28eca4d136c06$var$elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - $7cc28eca4d136c06$export$f1e1789686576879.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? $7cc28eca4d136c06$export$f1e1789686576879.easeInBounce(t * 2) * 0.5 : $7cc28eca4d136c06$export$f1e1789686576879.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function $7cc28eca4d136c06$export$738ab4df8bf92ae9(value) {
    if (value && typeof value === 'object') {
        const type = value.toString();
        return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
    }
    return false;
}
function $7cc28eca4d136c06$export$db3b6bfb95261072(value) {
    return $7cc28eca4d136c06$export$738ab4df8bf92ae9(value) ? value : new (0, $c639a761a852ef3b$export$892596cec99bc70e)(value);
}
function $7cc28eca4d136c06$export$d377dcb2b61d6c4e(value) {
    return $7cc28eca4d136c06$export$738ab4df8bf92ae9(value) ? value : new (0, $c639a761a852ef3b$export$892596cec99bc70e)(value).saturate(0.5).darken(0.1).hexString();
}
const $7cc28eca4d136c06$var$numbers = [
    'x',
    'y',
    'borderWidth',
    'radius',
    'tension'
];
const $7cc28eca4d136c06$var$colors = [
    'color',
    'borderColor',
    'backgroundColor'
];
function $7cc28eca4d136c06$var$applyAnimationsDefaults(defaults) {
    defaults.set('animation', {
        delay: undefined,
        duration: 1000,
        easing: 'easeOutQuart',
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe('animation', {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
    });
    defaults.set('animations', {
        colors: {
            type: 'color',
            properties: $7cc28eca4d136c06$var$colors
        },
        numbers: {
            type: 'number',
            properties: $7cc28eca4d136c06$var$numbers
        }
    });
    defaults.describe('animations', {
        _fallback: 'animation'
    });
    defaults.set('transitions', {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    easing: 'linear',
                    fn: (v)=>v | 0
                }
            }
        }
    });
}
function $7cc28eca4d136c06$var$applyLayoutsDefaults(defaults) {
    defaults.set('layout', {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const $7cc28eca4d136c06$var$intlCache = new Map();
function $7cc28eca4d136c06$var$getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = $7cc28eca4d136c06$var$intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        $7cc28eca4d136c06$var$intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function $7cc28eca4d136c06$export$ae1af26003f05816(num, locale, options) {
    return $7cc28eca4d136c06$var$getNumberFormat(locale, options).format(num);
}
const $7cc28eca4d136c06$var$formatters = {
    values (value) {
        return $7cc28eca4d136c06$export$8b22cf2602fb60ce(value) ? value : '' + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = 'scientific';
            delta = $7cc28eca4d136c06$var$calculateDelta(tickValue, ticks);
        }
        const logDelta = $7cc28eca4d136c06$export$faec65b429be379(Math.abs(delta));
        const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation: notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return $7cc28eca4d136c06$export$ae1af26003f05816(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor($7cc28eca4d136c06$export$faec65b429be379(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return $7cc28eca4d136c06$var$formatters.numeric.call(this, tickValue, index, ticks);
        return '';
    }
};
function $7cc28eca4d136c06$var$calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var $7cc28eca4d136c06$export$9f4f30ee63539e24 = {
    formatters: $7cc28eca4d136c06$var$formatters
};
function $7cc28eca4d136c06$var$applyScaleDefaults(defaults) {
    defaults.set('scale', {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: 'ticks',
        clip: true,
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: '',
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: $7cc28eca4d136c06$export$9f4f30ee63539e24.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: false,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2
        }
    });
    defaults.route('scale.ticks', 'color', '', 'color');
    defaults.route('scale.grid', 'color', '', 'borderColor');
    defaults.route('scale.border', 'color', '', 'borderColor');
    defaults.route('scale.title', 'color', '', 'color');
    defaults.describe('scale', {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
        _indexable: (name)=>name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash'
    });
    defaults.describe('scales', {
        _fallback: 'scale'
    });
    defaults.describe('scale.ticks', {
        _scriptable: (name)=>name !== 'backdropPadding' && name !== 'callback',
        _indexable: (name)=>name !== 'backdropPadding'
    });
}
const $7cc28eca4d136c06$export$6559d589eb85fbb6 = Object.create(null);
const $7cc28eca4d136c06$export$2e2af4578d910ddf = Object.create(null);
function $7cc28eca4d136c06$var$getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split('.');
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function $7cc28eca4d136c06$var$set(root, scope, values) {
    if (typeof scope === 'string') return $7cc28eca4d136c06$export$efca4cbe5dd06740($7cc28eca4d136c06$var$getScope$1(root, scope), values);
    return $7cc28eca4d136c06$export$efca4cbe5dd06740($7cc28eca4d136c06$var$getScope$1(root, ''), scope);
}
class $7cc28eca4d136c06$var$Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = 'rgba(0,0,0,0.1)';
        this.borderColor = 'rgba(0,0,0,0.1)';
        this.color = '#666';
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            'mousemove',
            'mouseout',
            'click',
            'touchstart',
            'touchmove'
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>$7cc28eca4d136c06$export$d377dcb2b61d6c4e(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>$7cc28eca4d136c06$export$d377dcb2b61d6c4e(options.borderColor);
        this.hoverColor = (ctx, options)=>$7cc28eca4d136c06$export$d377dcb2b61d6c4e(options.color);
        this.indexAxis = 'x';
        this.interaction = {
            mode: 'nearest',
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
    set(scope, values) {
        return $7cc28eca4d136c06$var$set(this, scope, values);
    }
    get(scope) {
        return $7cc28eca4d136c06$var$getScope$1(this, scope);
    }
    describe(scope, values) {
        return $7cc28eca4d136c06$var$set($7cc28eca4d136c06$export$2e2af4578d910ddf, scope, values);
    }
    override(scope, values) {
        return $7cc28eca4d136c06$var$set($7cc28eca4d136c06$export$6559d589eb85fbb6, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = $7cc28eca4d136c06$var$getScope$1(this, scope);
        const targetScopeObject = $7cc28eca4d136c06$var$getScope$1(this, targetScope);
        const privateName = '_' + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if ($7cc28eca4d136c06$export$23f2a1d2818174ef(local)) return Object.assign({}, target, local);
                    return $7cc28eca4d136c06$export$90a7f3efeed30595(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var $7cc28eca4d136c06$export$4368d992c4eafac0 = /* #__PURE__ */ new $7cc28eca4d136c06$var$Defaults({
    _scriptable: (name)=>!name.startsWith('on'),
    _indexable: (name)=>name !== 'events',
    hover: {
        _fallback: 'interaction'
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    $7cc28eca4d136c06$var$applyAnimationsDefaults,
    $7cc28eca4d136c06$var$applyLayoutsDefaults,
    $7cc28eca4d136c06$var$applyScaleDefaults
]);
/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */ function $7cc28eca4d136c06$export$e171bab687b50e0(font) {
    if (!font || $7cc28eca4d136c06$export$342063e11d6c3cad(font.size) || $7cc28eca4d136c06$export$342063e11d6c3cad(font.family)) return null;
    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$e7c866399fa523f5(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function $7cc28eca4d136c06$export$c03999cb2f36933f(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        // Undefined strings and arrays should not be measured
        if (thing !== undefined && thing !== null && !$7cc28eca4d136c06$export$8b22cf2602fb60ce(thing)) longest = $7cc28eca4d136c06$export$e7c866399fa523f5(ctx, data, gc, longest, thing);
        else if ($7cc28eca4d136c06$export$8b22cf2602fb60ce(thing)) // if it is an array lets measure each element
        // to do maybe simplify this function a bit so we can do this more recursively?
        for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            // Undefined strings and arrays should not be measured
            if (nestedThing !== undefined && nestedThing !== null && !$7cc28eca4d136c06$export$8b22cf2602fb60ce(nestedThing)) longest = $7cc28eca4d136c06$export$e7c866399fa523f5(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */ function $7cc28eca4d136c06$export$78acf4525d8a74c4(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */ function $7cc28eca4d136c06$export$c9170ad7d4cd7e57(canvas, ctx) {
    if (!ctx && !canvas) return;
    ctx = ctx || canvas.getContext('2d');
    ctx.save();
    // canvas.width and canvas.height do not consider the canvas transform,
    // while clearRect does
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function $7cc28eca4d136c06$export$d66dc83d8cfc8dd(ctx, options, x, y) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    $7cc28eca4d136c06$export$158acd800e1ef08b(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function $7cc28eca4d136c06$export$158acd800e1ef08b(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * $7cc28eca4d136c06$export$39c1cc7c062529d4;
    if (style && typeof style === 'object') {
        type = style.toString();
        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        // Default includes circle
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, $7cc28eca4d136c06$export$971d5caa766a69d7);
            else ctx.arc(x, y, radius, 0, $7cc28eca4d136c06$export$971d5caa766a69d7);
            ctx.closePath();
            break;
        case 'triangle':
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += $7cc28eca4d136c06$export$c18d01048907ea92;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += $7cc28eca4d136c06$export$c18d01048907ea92;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case 'rectRounded':
            // NOTE: the rounded rect implementation changed to use `arc` instead of
            // `quadraticCurveTo` since it generates better results when rect is
            // almost a circle. 0.516 (instead of 0.5) produces results with visually
            // closer proportion to the previous impl and it is inscribed in the
            // circle with `radius`. For more details, see the following PRs:
            // https://github.com/chartjs/Chart.js/issues/5597
            // https://github.com/chartjs/Chart.js/issues/5858
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + $7cc28eca4d136c06$export$7a0bdf7d4a91ea88) * size;
            xOffsetW = Math.cos(rad + $7cc28eca4d136c06$export$7a0bdf7d4a91ea88) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + $7cc28eca4d136c06$export$7a0bdf7d4a91ea88) * size;
            yOffsetW = Math.sin(rad + $7cc28eca4d136c06$export$7a0bdf7d4a91ea88) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - $7cc28eca4d136c06$export$56c0d5a1e737357d, rad - $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd, rad + $7cc28eca4d136c06$export$56c0d5a1e737357d);
            ctx.closePath();
            break;
        case 'rect':
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += $7cc28eca4d136c06$export$7a0bdf7d4a91ea88;
        /* falls through */ case 'rectRot':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case 'crossRot':
            rad += $7cc28eca4d136c06$export$7a0bdf7d4a91ea88;
        /* falls through */ case 'cross':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'star':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += $7cc28eca4d136c06$export$7a0bdf7d4a91ea88;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'line':
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case 'dash':
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
        case false:
            ctx.closePath();
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */ function $7cc28eca4d136c06$export$e7094788287c5e9b(point, area, margin) {
    margin = margin || 0.5; // margin - default is to match rounded decimals
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function $7cc28eca4d136c06$export$8743009a87fcb00f(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function $7cc28eca4d136c06$export$3d8c2f653ac9d0b9(ctx) {
    ctx.restore();
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$493d36ec626b6698(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === 'middle') {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === 'after' !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$1fbe638ecf81657e(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function $7cc28eca4d136c06$var$setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!$7cc28eca4d136c06$export$342063e11d6c3cad(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function $7cc28eca4d136c06$var$decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        /**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */ const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function $7cc28eca4d136c06$var$drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */ function $7cc28eca4d136c06$export$dc98b0b04f4c7758(ctx, text, x, y, font, opts = {}) {
    const lines = $7cc28eca4d136c06$export$8b22cf2602fb60ce(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
    let i, line;
    ctx.save();
    ctx.font = font.string;
    $7cc28eca4d136c06$var$setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) $7cc28eca4d136c06$var$drawBackdrop(ctx, opts.backdrop);
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!$7cc28eca4d136c06$export$342063e11d6c3cad(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        $7cc28eca4d136c06$var$decorateText(ctx, x, y, line, opts);
        y += Number(font.lineHeight);
    }
    ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */ function $7cc28eca4d136c06$export$92108d983e8ee699(ctx, rect) {
    const { x: x, y: y, w: w, h: h, radius: radius } = rect;
    // top left arc
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * $7cc28eca4d136c06$export$56c0d5a1e737357d, $7cc28eca4d136c06$export$56c0d5a1e737357d, true);
    // line from top left to bottom left
    ctx.lineTo(x, y + h - radius.bottomLeft);
    // bottom left arc
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, $7cc28eca4d136c06$export$56c0d5a1e737357d, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd, true);
    // line from bottom left to bottom right
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    // bottom right arc
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd, 0, true);
    // line from bottom right to top right
    ctx.lineTo(x + w, y + radius.topRight);
    // top right arc
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -$7cc28eca4d136c06$export$7f8ddf7c7c20b3cd, true);
    // line from top right to top left
    ctx.lineTo(x + radius.topLeft, y);
}
const $7cc28eca4d136c06$var$LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const $7cc28eca4d136c06$var$FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function $7cc28eca4d136c06$export$d29e374196577086(value, size) {
    const matches = ('' + value).match($7cc28eca4d136c06$var$LINE_HEIGHT);
    if (!matches || matches[1] === 'normal') return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case 'px':
            return value;
        case '%':
            value /= 100;
            break;
    }
    return size * value;
}
const $7cc28eca4d136c06$var$numberOrZero = (v)=>+v || 0;
function $7cc28eca4d136c06$export$1a82df3d29112e01(value, props) {
    const ret = {};
    const objProps = $7cc28eca4d136c06$export$23f2a1d2818174ef(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = $7cc28eca4d136c06$export$23f2a1d2818174ef(value) ? objProps ? (prop)=>$7cc28eca4d136c06$export$90a7f3efeed30595(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = $7cc28eca4d136c06$var$numberOrZero(read(prop));
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function $7cc28eca4d136c06$export$9fa96a7d116ea3ce(value) {
    return $7cc28eca4d136c06$export$1a82df3d29112e01(value, {
        top: 'y',
        right: 'x',
        bottom: 'y',
        left: 'x'
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function $7cc28eca4d136c06$export$28f7fcd39efa255(value) {
    return $7cc28eca4d136c06$export$1a82df3d29112e01(value, [
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight'
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function $7cc28eca4d136c06$export$a9c23c6ac3fc3eca(value) {
    const obj = $7cc28eca4d136c06$export$9fa96a7d116ea3ce(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function $7cc28eca4d136c06$export$34aec0b863436764(options, fallback) {
    options = options || {};
    fallback = fallback || $7cc28eca4d136c06$export$4368d992c4eafac0.font;
    let size = $7cc28eca4d136c06$export$90a7f3efeed30595(options.size, fallback.size);
    if (typeof size === 'string') size = parseInt(size, 10);
    let style = $7cc28eca4d136c06$export$90a7f3efeed30595(options.style, fallback.style);
    if (style && !('' + style).match($7cc28eca4d136c06$var$FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: $7cc28eca4d136c06$export$90a7f3efeed30595(options.family, fallback.family),
        lineHeight: $7cc28eca4d136c06$export$d29e374196577086($7cc28eca4d136c06$export$90a7f3efeed30595(options.lineHeight, fallback.lineHeight), size),
        size: size,
        style: style,
        weight: $7cc28eca4d136c06$export$90a7f3efeed30595(options.weight, fallback.weight),
        string: ''
    };
    font.string = $7cc28eca4d136c06$export$e171bab687b50e0(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function $7cc28eca4d136c06$export$407448d2b89b1813(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === 'function') {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && $7cc28eca4d136c06$export$8b22cf2602fb60ce(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function $7cc28eca4d136c06$export$db202ddc8be9136(minmax, grace, beginAtZero) {
    const { min: min, max: max } = minmax;
    const change = $7cc28eca4d136c06$export$7ccc53e8f1e7dfc5(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function $7cc28eca4d136c06$export$35e795649ee09318(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */ function $7cc28eca4d136c06$export$a9c996f45e5784d0(scopes, prefixes = [
    ''
], rootScopes, fallback, getTarget = ()=>scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === 'undefined') fallback = $7cc28eca4d136c06$var$_resolve('_fallback', scopes);
    const cache = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: finalRootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>$7cc28eca4d136c06$export$a9c996f45e5784d0([
                scope,
                ...scopes
            ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete target._keys; // remove cached keys
            delete scopes[0][prop]; // remove from top level scope
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop) {
            return $7cc28eca4d136c06$var$_cached(target, prop, ()=>$7cc28eca4d136c06$var$_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return $7cc28eca4d136c06$var$getKeysFromAllScopes(target).includes(prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys (target) {
            return $7cc28eca4d136c06$var$getKeysFromAllScopes(target);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value; // set to top level scope + cache
            delete target._keys; // remove cached keys
            return true;
        }
    });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */ function $7cc28eca4d136c06$export$c3950d9923825c02(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: $7cc28eca4d136c06$export$7910e0436ed8d1de(proxy, descriptorDefaults),
        setContext: (ctx)=>$7cc28eca4d136c06$export$c3950d9923825c02(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>$7cc28eca4d136c06$export$c3950d9923825c02(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete proxy[prop]; // remove from proxy
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop, receiver) {
            return $7cc28eca4d136c06$var$_cached(target, prop, ()=>$7cc28eca4d136c06$var$_resolveWithContext(target, prop, receiver));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            proxy[prop] = value; // set to proxy
            delete target[prop]; // remove from cache
            return true;
        }
    });
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$7910e0436ed8d1de(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable: _scriptable = defaults.scriptable, _indexable: _indexable = defaults.indexable, _allKeys: _allKeys = defaults.allKeys } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: $7cc28eca4d136c06$export$a93c5207d687da10(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: $7cc28eca4d136c06$export$a93c5207d687da10(_indexable) ? _indexable : ()=>_indexable
    };
}
const $7cc28eca4d136c06$var$readKey = (prefix, name)=>prefix ? prefix + $7cc28eca4d136c06$export$a8550f7dbe79f93a(name) : name;
const $7cc28eca4d136c06$var$needsSubResolver = (prop, value)=>$7cc28eca4d136c06$export$23f2a1d2818174ef(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function $7cc28eca4d136c06$var$_cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop) || prop === 'constructor') return target[prop];
    const value = resolve();
    // cache the resolved value
    target[prop] = value;
    return value;
}
function $7cc28eca4d136c06$var$_resolveWithContext(target, prop, receiver) {
    const { _proxy: _proxy, _context: _context, _subProxy: _subProxy, _descriptors: descriptors } = target;
    let value = _proxy[prop]; // resolve from proxy
    // resolve with context
    if ($7cc28eca4d136c06$export$a93c5207d687da10(value) && descriptors.isScriptable(prop)) value = $7cc28eca4d136c06$var$_resolveScriptable(prop, value, target, receiver);
    if ($7cc28eca4d136c06$export$8b22cf2602fb60ce(value) && value.length) value = $7cc28eca4d136c06$var$_resolveArray(prop, value, target, descriptors.isIndexable);
    if ($7cc28eca4d136c06$var$needsSubResolver(prop, value)) // if the resolved value is an object, create a sub resolver for it
    value = $7cc28eca4d136c06$export$c3950d9923825c02(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function $7cc28eca4d136c06$var$_resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy: _proxy, _context: _context, _subProxy: _subProxy, _stack: _stack } = target;
    if (_stack.has(prop)) throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if ($7cc28eca4d136c06$var$needsSubResolver(prop, value)) // When scriptable option returns an object, create a resolver on that.
    value = $7cc28eca4d136c06$var$createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function $7cc28eca4d136c06$var$_resolveArray(prop, value, target, isIndexable) {
    const { _proxy: _proxy, _context: _context, _subProxy: _subProxy, _descriptors: descriptors } = target;
    if (typeof _context.index !== 'undefined' && isIndexable(prop)) return value[_context.index % value.length];
    else if ($7cc28eca4d136c06$export$23f2a1d2818174ef(value[0])) {
        // Array of objects, return array or resolvers
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = $7cc28eca4d136c06$var$createSubResolver(scopes, _proxy, prop, item);
            value.push($7cc28eca4d136c06$export$c3950d9923825c02(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function $7cc28eca4d136c06$var$resolveFallback(fallback, prop, value) {
    return $7cc28eca4d136c06$export$a93c5207d687da10(fallback) ? fallback(prop, value) : fallback;
}
const $7cc28eca4d136c06$var$getScope = (key, parent)=>key === true ? parent : typeof key === 'string' ? $7cc28eca4d136c06$export$2d1720544b23b823(parent, key) : undefined;
function $7cc28eca4d136c06$var$addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = $7cc28eca4d136c06$var$getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = $7cc28eca4d136c06$var$resolveFallback(scope._fallback, key, value);
            if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) // When we reach the descriptor that defines a new _fallback, return that.
            // The fallback will resume to that new scope.
            return fallback;
        } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) // Fallback to `false` results to `false`, when falling back to different key.
        // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
        return null;
    }
    return false;
}
function $7cc28eca4d136c06$var$createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = $7cc28eca4d136c06$var$resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = $7cc28eca4d136c06$var$addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if (typeof fallback !== 'undefined' && fallback !== prop) {
        key = $7cc28eca4d136c06$var$addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return $7cc28eca4d136c06$export$a9c996f45e5784d0(Array.from(set), [
        ''
    ], rootScopes, fallback, ()=>$7cc28eca4d136c06$var$subGetTarget(resolver, prop, value));
}
function $7cc28eca4d136c06$var$addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = $7cc28eca4d136c06$var$addScopes(set, allScopes, key, fallback, item);
    return key;
}
function $7cc28eca4d136c06$var$subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if ($7cc28eca4d136c06$export$8b22cf2602fb60ce(target) && $7cc28eca4d136c06$export$23f2a1d2818174ef(value)) // For array of objects, the object is used to store updated values
    return value;
    return target || {};
}
function $7cc28eca4d136c06$var$_resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = $7cc28eca4d136c06$var$_resolve($7cc28eca4d136c06$var$readKey(prefix, prop), scopes);
        if (typeof value !== 'undefined') return $7cc28eca4d136c06$var$needsSubResolver(prop, value) ? $7cc28eca4d136c06$var$createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function $7cc28eca4d136c06$var$_resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if (typeof value !== 'undefined') return value;
    }
}
function $7cc28eca4d136c06$var$getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = $7cc28eca4d136c06$var$resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function $7cc28eca4d136c06$var$resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith('_')))set.add(key);
    return Array.from(set);
}
function $7cc28eca4d136c06$export$4a5767248b18ef41(meta, data, start, count) {
    const { iScale: iScale } = meta;
    const { key: key = 'r' } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse($7cc28eca4d136c06$export$2d1720544b23b823(item, key), index)
        };
    }
    return parsed;
}
const $7cc28eca4d136c06$var$EPSILON = Number.EPSILON || 1e-14;
const $7cc28eca4d136c06$var$getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const $7cc28eca4d136c06$var$getValueAxis = (indexAxis)=>indexAxis === 'x' ? 'y' : 'x';
function $7cc28eca4d136c06$export$527e9aa3390079e9(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = $7cc28eca4d136c06$export$cf2f7c5792f80b46(current, previous);
    const d12 = $7cc28eca4d136c06$export$cf2f7c5792f80b46(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function $7cc28eca4d136c06$var$monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = $7cc28eca4d136c06$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = $7cc28eca4d136c06$var$getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if ($7cc28eca4d136c06$export$23ebac1979863676(deltaK[i], 0, $7cc28eca4d136c06$var$EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function $7cc28eca4d136c06$var$monotoneCompute(points, mK, indexAxis = 'x') {
    const valueAxis = $7cc28eca4d136c06$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = $7cc28eca4d136c06$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $7cc28eca4d136c06$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function $7cc28eca4d136c06$export$a17c37559e1db147(points, indexAxis = 'x') {
    const valueAxis = $7cc28eca4d136c06$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = $7cc28eca4d136c06$var$getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $7cc28eca4d136c06$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : $7cc28eca4d136c06$export$2408f22a0fab9ae5(deltaK[i - 1]) !== $7cc28eca4d136c06$export$2408f22a0fab9ae5(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    $7cc28eca4d136c06$var$monotoneAdjust(points, deltaK, mK);
    $7cc28eca4d136c06$var$monotoneCompute(points, mK, indexAxis);
}
function $7cc28eca4d136c06$var$capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function $7cc28eca4d136c06$var$capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = $7cc28eca4d136c06$export$e7094788287c5e9b(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && $7cc28eca4d136c06$export$e7094788287c5e9b(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = $7cc28eca4d136c06$var$capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = $7cc28eca4d136c06$var$capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = $7cc28eca4d136c06$var$capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = $7cc28eca4d136c06$var$capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$306ddfe3a8403e2(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === 'monotone') $7cc28eca4d136c06$export$a17c37559e1db147(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = $7cc28eca4d136c06$export$527e9aa3390079e9(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) $7cc28eca4d136c06$var$capBezierPoints(points, area);
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$3a1a48c8f6ef640e() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$9bb611d729802a56(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === '[object ShadowRoot]') parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function $7cc28eca4d136c06$var$parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf('%') !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const $7cc28eca4d136c06$var$getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function $7cc28eca4d136c06$export$fef3dfd9bad05307(el, property) {
    return $7cc28eca4d136c06$var$getComputedStyle(el).getPropertyValue(property);
}
const $7cc28eca4d136c06$var$positions = [
    'top',
    'right',
    'bottom',
    'left'
];
function $7cc28eca4d136c06$var$getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? '-' + suffix : '';
    for(let i = 0; i < 4; i++){
        const pos = $7cc28eca4d136c06$var$positions[i];
        result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const $7cc28eca4d136c06$var$useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function $7cc28eca4d136c06$var$getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX: offsetX, offsetY: offsetY } = source;
    let box = false;
    let x, y;
    if ($7cc28eca4d136c06$var$useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x: x,
        y: y,
        box: box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function $7cc28eca4d136c06$export$df995fae86a55f06(event, chart) {
    if ('native' in event) return event;
    const { canvas: canvas, currentDevicePixelRatio: currentDevicePixelRatio } = chart;
    const style = $7cc28eca4d136c06$var$getComputedStyle(canvas);
    const borderBox = style.boxSizing === 'border-box';
    const paddings = $7cc28eca4d136c06$var$getPositionedStyle(style, 'padding');
    const borders = $7cc28eca4d136c06$var$getPositionedStyle(style, 'border', 'width');
    const { x: x, y: y, box: box } = $7cc28eca4d136c06$var$getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width: width, height: height } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function $7cc28eca4d136c06$var$getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = canvas && $7cc28eca4d136c06$export$9bb611d729802a56(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = $7cc28eca4d136c06$var$getComputedStyle(container);
            const containerBorder = $7cc28eca4d136c06$var$getPositionedStyle(containerStyle, 'border', 'width');
            const containerPadding = $7cc28eca4d136c06$var$getPositionedStyle(containerStyle, 'padding');
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = $7cc28eca4d136c06$var$parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
            maxHeight = $7cc28eca4d136c06$var$parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
        }
    }
    return {
        width: width,
        height: height,
        maxWidth: maxWidth || $7cc28eca4d136c06$export$53c86fa97d611818,
        maxHeight: maxHeight || $7cc28eca4d136c06$export$53c86fa97d611818
    };
}
const $7cc28eca4d136c06$var$round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function $7cc28eca4d136c06$export$2329c99376c9d0a4(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = $7cc28eca4d136c06$var$getComputedStyle(canvas);
    const margins = $7cc28eca4d136c06$var$getPositionedStyle(style, 'margin');
    const maxWidth = $7cc28eca4d136c06$var$parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || $7cc28eca4d136c06$export$53c86fa97d611818;
    const maxHeight = $7cc28eca4d136c06$var$parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || $7cc28eca4d136c06$export$53c86fa97d611818;
    const containerSize = $7cc28eca4d136c06$var$getContainerSize(canvas, bbWidth, bbHeight);
    let { width: width, height: height } = containerSize;
    if (style.boxSizing === 'content-box') {
        const borders = $7cc28eca4d136c06$var$getPositionedStyle(style, 'border', 'width');
        const paddings = $7cc28eca4d136c06$var$getPositionedStyle(style, 'padding');
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = $7cc28eca4d136c06$var$round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = $7cc28eca4d136c06$var$round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = $7cc28eca4d136c06$var$round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = $7cc28eca4d136c06$var$round1(Math.floor(height * aspectRatio));
    }
    return {
        width: width,
        height: height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function $7cc28eca4d136c06$export$f787f51d84a910ad(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = $7cc28eca4d136c06$var$round1(chart.height * pixelRatio);
    const deviceWidth = $7cc28eca4d136c06$var$round1(chart.width * pixelRatio);
    chart.height = $7cc28eca4d136c06$var$round1(chart.height);
    chart.width = $7cc28eca4d136c06$var$round1(chart.width);
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const $7cc28eca4d136c06$export$3466f893ebf79586 = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        if ($7cc28eca4d136c06$export$3a1a48c8f6ef640e()) {
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        }
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function $7cc28eca4d136c06$export$b4171a6734a65d42(element, property) {
    const value = $7cc28eca4d136c06$export$fef3dfd9bad05307(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$6554612db691658e(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$8a5498727ef6be21(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function $7cc28eca4d136c06$export$d24c54395ce0c509(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = $7cc28eca4d136c06$export$6554612db691658e(p1, cp1, t);
    const b = $7cc28eca4d136c06$export$6554612db691658e(cp1, cp2, t);
    const c = $7cc28eca4d136c06$export$6554612db691658e(cp2, p2, t);
    const d = $7cc28eca4d136c06$export$6554612db691658e(a, b, t);
    const e = $7cc28eca4d136c06$export$6554612db691658e(b, c, t);
    return $7cc28eca4d136c06$export$6554612db691658e(d, e, t);
}
const $7cc28eca4d136c06$var$getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === 'center') return align;
            return align === 'right' ? 'left' : 'right';
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const $7cc28eca4d136c06$var$getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function $7cc28eca4d136c06$export$91c6e00c14e7e6fd(rtl, rectX, width) {
    return rtl ? $7cc28eca4d136c06$var$getRightToLeftAdapter(rectX, width) : $7cc28eca4d136c06$var$getLeftToRightAdapter();
}
function $7cc28eca4d136c06$export$9d398bebfec1c039(ctx, direction) {
    let style, original;
    if (direction === 'ltr' || direction === 'rtl') {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue('direction'),
            style.getPropertyPriority('direction')
        ];
        style.setProperty('direction', direction, 'important');
        ctx.prevTextDirection = original;
    }
}
function $7cc28eca4d136c06$export$24baa2b76016ce0e(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
}
function $7cc28eca4d136c06$var$propertyFn(property) {
    if (property === 'angle') return {
        between: $7cc28eca4d136c06$export$ffb5f4729a158638,
        compare: $7cc28eca4d136c06$export$f074adc9fbd50943,
        normalize: $7cc28eca4d136c06$export$ab83b03e4111b1d0
    };
    return {
        between: $7cc28eca4d136c06$export$21579262ef46735b,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function $7cc28eca4d136c06$var$normalizeSegment({ start: start, end: end, count: count, loop: loop, style: style }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style: style
    };
}
function $7cc28eca4d136c06$var$getSegment(segment, points, bounds) {
    const { property: property, start: startBound, end: endBound } = bounds;
    const { between: between, normalize: normalize } = $7cc28eca4d136c06$var$propertyFn(property);
    const count = points.length;
    let { start: start, end: end, loop: loop } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start: start,
        end: end,
        loop: loop,
        style: segment.style
    };
}
function $7cc28eca4d136c06$export$3d12bd131bb975d1(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property: property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare: compare, between: between, normalize: normalize } = $7cc28eca4d136c06$var$propertyFn(property);
    const { start: start, end: end, loop: loop, style: style } = $7cc28eca4d136c06$var$getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push($7cc28eca4d136c06$var$normalizeSegment({
                start: subStart,
                end: i,
                loop: loop,
                count: count,
                style: style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push($7cc28eca4d136c06$var$normalizeSegment({
        start: subStart,
        end: end,
        loop: loop,
        count: count,
        style: style
    }));
    return result;
}
function $7cc28eca4d136c06$export$2f6ca3d3b1f80bf5(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = $7cc28eca4d136c06$export$3d12bd131bb975d1(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function $7cc28eca4d136c06$var$findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start: start,
        end: end
    };
}
function $7cc28eca4d136c06$var$solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop: loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop: loop
    });
    return result;
}
function $7cc28eca4d136c06$export$7a38258bbe170828(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start: start, end: end } = $7cc28eca4d136c06$var$findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return $7cc28eca4d136c06$var$splitByStyles(line, [
        {
            start: start,
            end: end,
            loop: loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return $7cc28eca4d136c06$var$splitByStyles(line, $7cc28eca4d136c06$var$solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function $7cc28eca4d136c06$var$splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return $7cc28eca4d136c06$var$doSplitByStyles(line, segments, points, segmentOptions);
}
function $7cc28eca4d136c06$var$doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = $7cc28eca4d136c06$var$readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps: spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = $7cc28eca4d136c06$var$readStyle(segmentOptions.setContext($7cc28eca4d136c06$export$35e795649ee09318(chartContext, {
                type: 'segment',
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex: datasetIndex
            })));
            if ($7cc28eca4d136c06$var$styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function $7cc28eca4d136c06$var$readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function $7cc28eca4d136c06$var$styleChanged(style, prevStyle) {
    if (!prevStyle) return false;
    const cache = [];
    const replacer = function(key, value) {
        if (!$7cc28eca4d136c06$export$738ab4df8bf92ae9(value)) return value;
        if (!cache.includes(value)) cache.push(value);
        return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}
function $7cc28eca4d136c06$var$getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
}
function $7cc28eca4d136c06$var$getDatasetArea(meta, chartArea) {
    const { xScale: xScale, yScale: yScale } = meta;
    if (xScale && yScale) return {
        left: $7cc28eca4d136c06$var$getSizeForArea(xScale, chartArea, 'left'),
        right: $7cc28eca4d136c06$var$getSizeForArea(xScale, chartArea, 'right'),
        top: $7cc28eca4d136c06$var$getSizeForArea(yScale, chartArea, 'top'),
        bottom: $7cc28eca4d136c06$var$getSizeForArea(yScale, chartArea, 'bottom')
    };
    return chartArea;
}
function $7cc28eca4d136c06$export$995eb9fca571757(chart, meta) {
    const clip = meta._clip;
    if (clip.disabled) return false;
    const area = $7cc28eca4d136c06$var$getDatasetArea(meta, chart.chartArea);
    return {
        left: clip.left === false ? 0 : area.left - (clip.left === true ? 0 : clip.left),
        right: clip.right === false ? chart.width : area.right + (clip.right === true ? 0 : clip.right),
        top: clip.top === false ? 0 : area.top - (clip.top === true ? 0 : clip.top),
        bottom: clip.bottom === false ? chart.height : area.bottom + (clip.bottom === true ? 0 : clip.bottom)
    };
}




/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ 

class $815fd789f8127f09$var$Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart: chart,
                initial: anims.initial,
                numSteps: numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, $7cc28eca4d136c06$export$43caf9889c228507).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, 'progress');
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, 'complete');
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), 'complete');
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var $815fd789f8127f09$export$a424a0aa8f687495 = /* #__PURE__ */ new $815fd789f8127f09$var$Animator();
const $815fd789f8127f09$var$transparent = 'transparent';
const $815fd789f8127f09$var$interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, $7cc28eca4d136c06$export$db3b6bfb95261072)(from || $815fd789f8127f09$var$transparent);
        const c1 = c0.valid && (0, $7cc28eca4d136c06$export$db3b6bfb95261072)(to || $815fd789f8127f09$var$transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class $815fd789f8127f09$export$c35d437ae5945fcd {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || $815fd789f8127f09$var$interpolators[cfg.type || typeof from];
        this._easing = (0, $7cc28eca4d136c06$export$f1e1789686576879)[cfg.easing] || (0, $7cc28eca4d136c06$export$f1e1789686576879).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res: res,
                rej: rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? 'res' : 'rej';
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
class $815fd789f8127f09$export$8ab227dac26677d {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(config)) return;
        const animationOptions = Object.keys((0, $7cc28eca4d136c06$export$4368d992c4eafac0).animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = $815fd789f8127f09$var$resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) $815fd789f8127f09$var$awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === '$') continue;
            if (prop === 'options') {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new $815fd789f8127f09$export$c35d437ae5945fcd(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            $815fd789f8127f09$export$a424a0aa8f687495.add(this._chart, animations);
            return true;
        }
    }
}
function $815fd789f8127f09$var$awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function $815fd789f8127f09$var$resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function $815fd789f8127f09$var$scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function $815fd789f8127f09$var$defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = $815fd789f8127f09$var$scaleClip(xScale, allowedOverflow);
    const y = $815fd789f8127f09$var$scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function $815fd789f8127f09$var$toClip(value) {
    let t, r, b, l;
    if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function $815fd789f8127f09$var$getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function $815fd789f8127f09$var$applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === 'single';
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    let found = false;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            found = true;
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, $7cc28eca4d136c06$export$39b482c5e57630a8)(otherValue) && (singleMode || value === 0 || (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(value) === (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(otherValue))) value += otherValue;
    }
    if (!found && !options.all) return 0;
    return value;
}
function $815fd789f8127f09$var$convertObjectDataToArray(data, meta) {
    const { iScale: iScale, vScale: vScale } = meta;
    const iAxisKey = iScale.axis === 'x' ? 'x' : 'y';
    const vAxisKey = vScale.axis === 'x' ? 'x' : 'y';
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            [iAxisKey]: key,
            [vAxisKey]: data[key]
        };
    }
    return adata;
}
function $815fd789f8127f09$var$isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function $815fd789f8127f09$var$getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function $815fd789f8127f09$var$getUserBounds(scale) {
    const { min: min, max: max, minDefined: minDefined, maxDefined: maxDefined } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function $815fd789f8127f09$var$getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function $815fd789f8127f09$var$getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function $815fd789f8127f09$var$updateStacks(controller, parsed) {
    const { chart: chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale: iScale, vScale: vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = $815fd789f8127f09$var$getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index, [vAxis]: value } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = $815fd789f8127f09$var$getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = $815fd789f8127f09$var$getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = $815fd789f8127f09$var$getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function $815fd789f8127f09$var$getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function $815fd789f8127f09$var$createDatasetContext(parent, index) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index: index,
        mode: 'default',
        type: 'dataset'
    });
}
function $815fd789f8127f09$var$createDataContext(parent, index, element) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element: element,
        index: index,
        mode: 'default',
        type: 'data'
    });
}
function $815fd789f8127f09$var$clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) delete stacks[axis]._visualValues[datasetIndex];
    }
}
const $815fd789f8127f09$var$isDirectUpdateMode = (mode)=>mode === 'reset' || mode === 'none';
const $815fd789f8127f09$var$cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const $815fd789f8127f09$var$createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: $815fd789f8127f09$var$getSortedDatasetIndices(chart, true),
        values: null
    };
class $815fd789f8127f09$export$75572ec5c55b4048 {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = $815fd789f8127f09$var$isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled('filler')) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) $815fd789f8127f09$var$clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === 'x' ? x : axis === 'r' ? r : y;
        const xid = meta.xAxisID = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(dataset.xAxisID, $815fd789f8127f09$var$getFirstScaleId(chart, 'x'));
        const yid = meta.yAxisID = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(dataset.yAxisID, $815fd789f8127f09$var$getFirstScaleId(chart, 'y'));
        const rid = meta.rAxisID = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(dataset.rAxisID, $815fd789f8127f09$var$getFirstScaleId(chart, 'r'));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, $7cc28eca4d136c06$export$3b14a55fb2447963)(this._data, this);
        if (meta._stacked) $815fd789f8127f09$var$clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(data)) {
            const meta = this._cachedMeta;
            this._data = $815fd789f8127f09$var$convertObjectDataToArray(data, meta);
        } else if (_data !== data) {
            if (_data) {
                (0, $7cc28eca4d136c06$export$3b14a55fb2447963)(_data, this);
                const meta = this._cachedMeta;
                $815fd789f8127f09$var$clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, $7cc28eca4d136c06$export$882b5998b3b9117c)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = $815fd789f8127f09$var$isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            $815fd789f8127f09$var$clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) {
            $815fd789f8127f09$var$updateStacks(this, meta._parsed);
            meta._stacked = $815fd789f8127f09$var$isStacked(meta.vScale, meta);
        }
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta, _data: data } = this;
        const { iScale: iScale, _stacked: _stacked } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) $815fd789f8127f09$var$updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale: iScale, vScale: vScale } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale: xScale, yScale: yScale } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale: xScale, yScale: yScale } = meta;
        const { xAxisKey: xAxisKey = 'x', yAxisKey: yAxisKey = 'y' } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, $7cc28eca4d136c06$export$2d1720544b23b823)(item, xAxisKey), index),
                y: yScale.parse((0, $7cc28eca4d136c06$export$2d1720544b23b823)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: $815fd789f8127f09$var$getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return $815fd789f8127f09$var$applyStack(stack, value, meta.index, {
            mode: mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = $815fd789f8127f09$var$applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = $815fd789f8127f09$var$createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin, max: otherMax } = $815fd789f8127f09$var$getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, $7cc28eca4d136c06$export$39b482c5e57630a8)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, $7cc28eca4d136c06$export$39b482c5e57630a8)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
            value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || 'default');
        meta._clip = $815fd789f8127f09$var$toClip((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(this.options.clip, $815fd789f8127f09$var$defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = $815fd789f8127f09$var$createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = $815fd789f8127f09$var$createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = 'default', index) {
        const active = mode === 'active';
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + '-' + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, $7cc28eca4d136c06$export$dda1d9f60106f0e9)(index);
        if (cached) return $815fd789f8127f09$var$cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            'hover',
            elementType,
            ''
        ] : [
            elementType,
            ''
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, $7cc28eca4d136c06$export$4368d992c4eafac0).elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze($815fd789f8127f09$var$cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new $815fd789f8127f09$export$8ab227dac26677d(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || $815fd789f8127f09$var$isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions: sharedOptions,
            includeOptions: includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if ($815fd789f8127f09$var$isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !$815fd789f8127f09$var$isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, 'reset');
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) $815fd789f8127f09$var$clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            '_insertElements',
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            '_removeElements',
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            '_removeElements',
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            '_removeElements',
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            '_insertElements',
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            '_insertElements',
            0,
            arguments.length
        ]);
    }
}
function $815fd789f8127f09$var$getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, $7cc28eca4d136c06$export$71511d61b312f219)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function $815fd789f8127f09$var$computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = $815fd789f8127f09$var$getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, $7cc28eca4d136c06$export$dda1d9f60106f0e9)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function $815fd789f8127f09$var$computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio: ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function $815fd789f8127f09$var$computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start: start
    };
}
function $815fd789f8127f09$var$parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart: barStart,
        barEnd: barEnd,
        start: startValue,
        end: endValue,
        min: min,
        max: max
    };
}
function $815fd789f8127f09$var$parseValue(entry, item, vScale, i) {
    if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(entry)) $815fd789f8127f09$var$parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function $815fd789f8127f09$var$parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push($815fd789f8127f09$var$parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function $815fd789f8127f09$var$isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function $815fd789f8127f09$var$barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function $815fd789f8127f09$var$borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = 'left';
        end = 'right';
    } else {
        reverse = properties.base < properties.y;
        start = 'bottom';
        end = 'top';
    }
    if (reverse) {
        top = 'end';
        bottom = 'start';
    } else {
        top = 'start';
        bottom = 'end';
    }
    return {
        start: start,
        end: end,
        reverse: reverse,
        top: top,
        bottom: bottom
    };
}
function $815fd789f8127f09$var$setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start: start, end: end, reverse: reverse, top: top, bottom: bottom } = $815fd789f8127f09$var$borderProps(properties);
    if (edge === 'middle' && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[$815fd789f8127f09$var$parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[$815fd789f8127f09$var$parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function $815fd789f8127f09$var$parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = $815fd789f8127f09$var$swap(edge, a, b);
        edge = $815fd789f8127f09$var$startEnd(edge, b, a);
    } else edge = $815fd789f8127f09$var$startEnd(edge, a, b);
    return edge;
}
function $815fd789f8127f09$var$swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function $815fd789f8127f09$var$startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
}
function $815fd789f8127f09$var$setInflateAmount(properties, { inflateAmount: inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class $815fd789f8127f09$export$e97d5dc64e999004 extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'bar';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: true
            }
        }
    };
    parsePrimitiveData(meta, data, start, count) {
        return $815fd789f8127f09$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return $815fd789f8127f09$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale: iScale, vScale: vScale } = meta;
        const { xAxisKey: xAxisKey = 'x', yAxisKey: yAxisKey = 'y' } = this._parsing;
        const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, $7cc28eca4d136c06$export$2d1720544b23b823)(obj, iAxisKey), i);
            parsed.push($815fd789f8127f09$var$parseValue((0, $7cc28eca4d136c06$export$2d1720544b23b823)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale: iScale, vScale: vScale } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = $815fd789f8127f09$var$isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
            value: value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === 'reset';
        const { index: index, _cachedMeta: { vScale: vScale } } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions: sharedOptions, includeOptions: includeOptions } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(parsed[vScale.axis]) ? {
                base: base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal: horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || $815fd789f8127f09$var$isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
            const options = properties.options || bars[i].options;
            $815fd789f8127f09$var$setBorderSkipped(properties, options, stack, index);
            $815fd789f8127f09$var$setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale: iScale } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
        const iScaleValue = currentParsed && currentParsed[iScale.axis];
        const skipNull = (meta)=>{
            const parsed = meta._parsed.find((item)=>item[iScale.axis] === iScaleValue);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getAxisCount() {
        return this._getAxis().length;
    }
    getFirstScaleIdForIndexAxis() {
        const scales = this.chart.scales;
        const indexScaleId = this.chart.options.indexAxis;
        return Object.keys(scales).filter((key)=>scales[key].axis === indexScaleId).shift();
    }
    _getAxis() {
        const axis = {};
        const firstScaleAxisId = this.getFirstScaleIdForIndexAxis();
        for (const dataset of this.chart.data.datasets)axis[(0, $7cc28eca4d136c06$export$90a7f3efeed30595)(this.chart.options.indexAxis === 'x' ? dataset.xAxisID : dataset.yAxisID, firstScaleAxisId)] = true;
        return Object.keys(axis);
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || $815fd789f8127f09$var$computeMinSampleSize(meta);
        return {
            min: min,
            pixels: pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale: vScale, _stacked: _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength: minBarLength } } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = $815fd789f8127f09$var$isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(value) !== (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = $815fd789f8127f09$var$barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size: size,
            base: base,
            head: head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(options.maxBarThickness, Infinity);
        let center, size;
        const axisCount = this._getAxisCount();
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === 'flex' ? $815fd789f8127f09$var$computeFlexCategoryTraits(index, ruler, options, stackCount * axisCount) : $815fd789f8127f09$var$computeFitCategoryTraits(index, ruler, options, stackCount * axisCount);
            const axisID = this.chart.options.indexAxis === 'x' ? this.getDataset().xAxisID : this.getDataset().yAxisID;
            const axisNumber = this._getAxis().indexOf((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(axisID, this.getFirstScaleIdForIndexAxis()));
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined) + axisNumber;
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center: center,
            size: size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null && !rects[i].hidden) rects[i].draw(this._ctx);
    }
}
class $815fd789f8127f09$export$19b5c4773f17abe extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'bubble';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale: xScale, yScale: yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale: iScale, vScale: vScale } = this._cachedMeta;
        const { sharedOptions: sharedOptions, includeOptions: includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== 'active') values.radius = 0;
        values.radius += (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(parsed && parsed._custom, radius);
        return values;
    }
}
function $815fd789f8127f09$var$getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, $7cc28eca4d136c06$export$971d5caa766a69d7)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, $7cc28eca4d136c06$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, $7cc28eca4d136c06$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd), startY, endY);
        const minX = calcMin((0, $7cc28eca4d136c06$export$56c0d5a1e737357d), startX, endX);
        const minY = calcMin((0, $7cc28eca4d136c06$export$56c0d5a1e737357d) + (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX: ratioX,
        ratioY: ratioY,
        offsetX: offsetX,
        offsetY: offsetY
    };
}
class $815fd789f8127f09$export$e04603e7d8b77172 extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'doughnut';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    };
    static descriptors = {
        _scriptable: (name)=>name !== 'spacing',
        _indexable: (name)=>name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash')
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        const { labels: { pointStyle: pointStyle, textAlign: textAlign, color: color, useBorderRadius: useBorderRadius, borderRadius: borderRadius } } = chart.legend.options;
                        if (data.labels.length && data.datasets.length) return data.labels.map((label, i)=>{
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: label,
                                fillStyle: style.backgroundColor,
                                fontColor: color,
                                hidden: !chart.getDataVisibility(i),
                                lineDash: style.borderDash,
                                lineDashOffset: style.borderDashOffset,
                                lineJoin: style.borderJoinStyle,
                                lineWidth: style.borderWidth,
                                strokeStyle: style.borderColor,
                                textAlign: textAlign,
                                pointStyle: pointStyle,
                                borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                                index: i
                            };
                        });
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(data[start])) {
                const { key: key = 'value' } = this._parsing;
                getter = (i)=>+(0, $7cc28eca4d136c06$export$2d1720544b23b823)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, $7cc28eca4d136c06$export$971d5caa766a69d7);
        let max = -(0, $7cc28eca4d136c06$export$971d5caa766a69d7);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea: chartArea } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, $7cc28eca4d136c06$export$953cecd6e717a553)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference: circumference, rotation: rotation } = this._getRotationExtents();
        const { ratioX: ratioX, ratioY: ratioY, offsetX: offsetX, offsetY: offsetY } = $815fd789f8127f09$var$getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, $7cc28eca4d136c06$export$7ccc53e8f1e7dfc5)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, $7cc28eca4d136c06$export$971d5caa766a69d7));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions: sharedOptions, includeOptions: includeOptions } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle: startAngle,
                endAngle: startAngle + circumference,
                circumference: circumference,
                outerRadius: outerRadius,
                innerRadius: innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, $7cc28eca4d136c06$export$971d5caa766a69d7) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $7cc28eca4d136c06$export$ae1af26003f05816)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || '',
            value: value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== 'inner') max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
class $815fd789f8127f09$export$3c9b5d28c11cbfd0 extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'line';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line, data: points = [], _dataset: _dataset } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start: start, count: count } = (0, $7cc28eca4d136c06$export$9e5f44173e64f162)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, $7cc28eca4d136c06$export$efccba1c4a2ef57b)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options: options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale: iScale, vScale: vScale, _stacked: _stacked, _dataset: _dataset } = this._cachedMeta;
        const { sharedOptions: sharedOptions, includeOptions: includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps: spanGaps, segment: segment } = this.options;
        const maxGapLength = (0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
class $815fd789f8127f09$export$2a270b3a0d973c85 extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'polarArea';
    static defaults = {
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle: pointStyle, color: color } } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $7cc28eca4d136c06$export$ae1af26003f05816)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || '',
            value: value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $7cc28eca4d136c06$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, $7cc28eca4d136c06$export$56c0d5a1e737357d);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius: outerRadius,
                startAngle: startAngle,
                endAngle: endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
class $815fd789f8127f09$export$b21a3f1286706191 extends $815fd789f8127f09$export$e04603e7d8b77172 {
    static id = 'pie';
    static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    };
}
class $815fd789f8127f09$export$48dbc6ac651bf8be extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'radar';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
            line: {
                fill: 'start'
            }
        }
    };
    static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    };
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $7cc28eca4d136c06$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== 'resize') {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options: options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === 'reset';
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x: x,
                y: y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options: options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
class $815fd789f8127f09$export$b2f2bae6713db87 extends $815fd789f8127f09$export$75572ec5c55b4048 {
    static id = 'scatter';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        showLine: false,
        fill: false
    };
    static overrides = {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale: xScale, yScale: yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + ')'
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = [] } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start: start, count: count } = (0, $7cc28eca4d136c06$export$9e5f44173e64f162)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, $7cc28eca4d136c06$export$efccba1c4a2ef57b)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            if (!this.datasetElementType) this.addElements();
            const { dataset: line, _dataset: _dataset } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options: options
            }, mode);
        } else if (this.datasetElementType) {
            delete meta.dataset;
            this.datasetElementType = false;
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine: showLine } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = this.chart.registry.getElement('line');
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale: iScale, vScale: vScale, _stacked: _stacked, _dataset: _dataset } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps: spanGaps, segment: segment } = this.options;
        const maxGapLength = (0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
var $815fd789f8127f09$export$a6506504f799c5d5 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: $815fd789f8127f09$export$e97d5dc64e999004,
    BubbleController: $815fd789f8127f09$export$19b5c4773f17abe,
    DoughnutController: $815fd789f8127f09$export$e04603e7d8b77172,
    LineController: $815fd789f8127f09$export$3c9b5d28c11cbfd0,
    PieController: $815fd789f8127f09$export$b21a3f1286706191,
    PolarAreaController: $815fd789f8127f09$export$2a270b3a0d973c85,
    RadarController: $815fd789f8127f09$export$48dbc6ac651bf8be,
    ScatterController: $815fd789f8127f09$export$b2f2bae6713db87
});
/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function $815fd789f8127f09$var$abstract() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class $815fd789f8127f09$var$DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign($815fd789f8127f09$var$DateAdapterBase.prototype, members);
    }
    options;
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return $815fd789f8127f09$var$abstract();
    }
    parse() {
        return $815fd789f8127f09$var$abstract();
    }
    format() {
        return $815fd789f8127f09$var$abstract();
    }
    add() {
        return $815fd789f8127f09$var$abstract();
    }
    diff() {
        return $815fd789f8127f09$var$abstract();
    }
    startOf() {
        return $815fd789f8127f09$var$abstract();
    }
    endOf() {
        return $815fd789f8127f09$var$abstract();
    }
}
var $815fd789f8127f09$export$f32766ea09ec8bc4 = {
    _date: $815fd789f8127f09$var$DateAdapterBase
};
function $815fd789f8127f09$var$binarySearch(metaset, axis, value, intersect) {
    const { controller: controller, data: data, _sorted: _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    const spanGaps = metaset.dataset ? metaset.dataset.options ? metaset.dataset.options.spanGaps : null : null;
    if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, $7cc28eca4d136c06$export$ebd11618f299a286) : (0, $7cc28eca4d136c06$export$ef35774e6d314e91);
        if (!intersect) {
            const result = lookupMethod(data, axis, value);
            if (spanGaps) {
                const { vScale: vScale } = controller._cachedMeta;
                const { _parsed: _parsed } = metaset;
                const distanceToDefinedLo = _parsed.slice(0, result.lo + 1).reverse().findIndex((point)=>!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(point[vScale.axis]));
                result.lo -= Math.max(0, distanceToDefinedLo);
                const distanceToDefinedHi = _parsed.slice(result.hi).findIndex((point)=>!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(point[vScale.axis]));
                result.hi += Math.max(0, distanceToDefinedHi);
            }
            return result;
        } else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === 'function' && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function $815fd789f8127f09$var$evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index: index, data: data } = metasets[i];
        const { lo: lo, hi: hi } = $815fd789f8127f09$var$binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function $815fd789f8127f09$var$getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf('x') !== -1;
    const useY = axis.indexOf('y') !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function $815fd789f8127f09$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, $7cc28eca4d136c06$export$e7094788287c5e9b)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    };
    $815fd789f8127f09$var$evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function $815fd789f8127f09$var$getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle: startAngle, endAngle: endAngle } = element.getProps([
            'startAngle',
            'endAngle'
        ], useFinalPosition);
        const { angle: angle } = (0, $7cc28eca4d136c06$export$96f57966bedc81b4)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, $7cc28eca4d136c06$export$ffb5f4729a158638)(angle, startAngle, endAngle)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    }
    $815fd789f8127f09$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $815fd789f8127f09$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = $815fd789f8127f09$var$getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element: element,
                    datasetIndex: datasetIndex,
                    index: index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    }
    $815fd789f8127f09$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $815fd789f8127f09$var$getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === 'r' && !intersect ? $815fd789f8127f09$var$getNearestRadialItems(chart, position, axis, useFinalPosition) : $815fd789f8127f09$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function $815fd789f8127f09$var$getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    let intersectsItem = false;
    $815fd789f8127f09$var$evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element: element,
                datasetIndex: datasetIndex,
                index: index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var $815fd789f8127f09$export$a13296960cae0384 = {
    evaluateInteractionItems: $815fd789f8127f09$var$evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || 'x';
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? $815fd789f8127f09$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $815fd789f8127f09$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element: element,
                    datasetIndex: meta.index,
                    index: index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? $815fd789f8127f09$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $815fd789f8127f09$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex: datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return $815fd789f8127f09$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return $815fd789f8127f09$var$getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            return $815fd789f8127f09$var$getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(e, chart);
            return $815fd789f8127f09$var$getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
        }
    }
};
const $815fd789f8127f09$var$STATIC_POSITIONS = [
    'left',
    'top',
    'right',
    'bottom'
];
function $815fd789f8127f09$var$filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function $815fd789f8127f09$var$filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>$815fd789f8127f09$var$STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function $815fd789f8127f09$var$sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function $815fd789f8127f09$var$wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos, options: { stack: stack, stackWeight: stackWeight = 1 } } = box);
        layoutBoxes.push({
            index: i,
            box: box,
            pos: pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight: stackWeight
        });
    }
    return layoutBoxes;
}
function $815fd789f8127f09$var$buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack: stack, pos: pos, stackWeight: stackWeight } = wrap;
        if (!stack || !$815fd789f8127f09$var$STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function $815fd789f8127f09$var$setLayoutDims(layouts, params) {
    const stacks = $815fd789f8127f09$var$buildStacks(layouts);
    const { vBoxMaxWidth: vBoxMaxWidth, hBoxMaxHeight: hBoxMaxHeight } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize: fullSize } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function $815fd789f8127f09$var$buildLayoutBoxes(boxes) {
    const layoutBoxes = $815fd789f8127f09$var$wrapBoxes(boxes);
    const fullSize = $815fd789f8127f09$var$sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = $815fd789f8127f09$var$sortByWeight($815fd789f8127f09$var$filterByPosition(layoutBoxes, 'left'), true);
    const right = $815fd789f8127f09$var$sortByWeight($815fd789f8127f09$var$filterByPosition(layoutBoxes, 'right'));
    const top = $815fd789f8127f09$var$sortByWeight($815fd789f8127f09$var$filterByPosition(layoutBoxes, 'top'), true);
    const bottom = $815fd789f8127f09$var$sortByWeight($815fd789f8127f09$var$filterByPosition(layoutBoxes, 'bottom'));
    const centerHorizontal = $815fd789f8127f09$var$filterDynamicPositionByAxis(layoutBoxes, 'x');
    const centerVertical = $815fd789f8127f09$var$filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
        fullSize: fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: $815fd789f8127f09$var$filterByPosition(layoutBoxes, 'chartArea'),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function $815fd789f8127f09$var$getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function $815fd789f8127f09$var$updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function $815fd789f8127f09$var$updateDims(chartArea, params, layout, stacks) {
    const { pos: pos, box: box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) $815fd789f8127f09$var$updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - $815fd789f8127f09$var$getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    const newHeight = Math.max(0, params.outerHeight - $815fd789f8127f09$var$getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function $815fd789f8127f09$var$handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
}
function $815fd789f8127f09$var$getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        'left',
        'right'
    ]) : marginForPositions([
        'top',
        'bottom'
    ]);
}
function $815fd789f8127f09$var$fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, $815fd789f8127f09$var$getMargins(layout.horizontal, chartArea));
        const { same: same, other: other } = $815fd789f8127f09$var$updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && $815fd789f8127f09$var$fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function $815fd789f8127f09$var$setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function $815fd789f8127f09$var$placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x: x, y: y } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, $7cc28eca4d136c06$export$dda1d9f60106f0e9)(stack.start)) y = stack.start;
            if (box.fullSize) $815fd789f8127f09$var$setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else $815fd789f8127f09$var$setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if ((0, $7cc28eca4d136c06$export$dda1d9f60106f0e9)(stack.start)) x = stack.start;
            if (box.fullSize) $815fd789f8127f09$var$setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            else $815fd789f8127f09$var$setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            stack.start = x;
            stack.placed += height;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var $815fd789f8127f09$export$1ecca0613f5e56d2 = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || 'top';
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = $815fd789f8127f09$var$buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, $7cc28eca4d136c06$export$d66501df72047452)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === 'function') box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding: padding,
            availableWidth: availableWidth,
            availableHeight: availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        $815fd789f8127f09$var$updateMaxPadding(maxPadding, (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(minPadding));
        const chartArea = Object.assign({
            maxPadding: maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = $815fd789f8127f09$var$setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        $815fd789f8127f09$var$fitBoxes(boxes.fullSize, chartArea, params, stacks);
        $815fd789f8127f09$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        if ($815fd789f8127f09$var$fitBoxes(horizontalBoxes, chartArea, params, stacks)) $815fd789f8127f09$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        $815fd789f8127f09$var$handleMaxPadding(chartArea);
        $815fd789f8127f09$var$placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        $815fd789f8127f09$var$placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, $7cc28eca4d136c06$export$d66501df72047452)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class $815fd789f8127f09$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width: width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class $815fd789f8127f09$export$a40a96b24b46cf35 extends $815fd789f8127f09$export$7b1aeb87f31f7da8 {
    acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const $815fd789f8127f09$var$EXPANDO_KEY = '$chartjs';
const $815fd789f8127f09$var$EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
};
const $815fd789f8127f09$var$isNullOrEmpty = (value)=>value === null || value === '';
function $815fd789f8127f09$var$initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute('height');
    const renderWidth = canvas.getAttribute('width');
    canvas[$815fd789f8127f09$var$EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';
    if ($815fd789f8127f09$var$isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, $7cc28eca4d136c06$export$b4171a6734a65d42)(canvas, 'width');
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if ($815fd789f8127f09$var$isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === '') canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, $7cc28eca4d136c06$export$b4171a6734a65d42)(canvas, 'height');
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const $815fd789f8127f09$var$eventListenerOptions = (0, $7cc28eca4d136c06$export$3466f893ebf79586) ? {
    passive: true
} : false;
function $815fd789f8127f09$var$addListener(node, type, listener) {
    if (node) node.addEventListener(type, listener, $815fd789f8127f09$var$eventListenerOptions);
}
function $815fd789f8127f09$var$removeListener(chart, type, listener) {
    if (chart && chart.canvas) chart.canvas.removeEventListener(type, listener, $815fd789f8127f09$var$eventListenerOptions);
}
function $815fd789f8127f09$var$fromNativeEvent(event, chart) {
    const type = $815fd789f8127f09$var$EVENT_TYPES[event.type] || event.type;
    const { x: x, y: y } = (0, $7cc28eca4d136c06$export$df995fae86a55f06)(event, chart);
    return {
        type: type,
        chart: chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function $815fd789f8127f09$var$nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function $815fd789f8127f09$var$createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $815fd789f8127f09$var$nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !$815fd789f8127f09$var$nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function $815fd789f8127f09$var$createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $815fd789f8127f09$var$nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !$815fd789f8127f09$var$nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const $815fd789f8127f09$var$drpListeningCharts = new Map();
let $815fd789f8127f09$var$oldDevicePixelRatio = 0;
function $815fd789f8127f09$var$onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === $815fd789f8127f09$var$oldDevicePixelRatio) return;
    $815fd789f8127f09$var$oldDevicePixelRatio = dpr;
    $815fd789f8127f09$var$drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function $815fd789f8127f09$var$listenDevicePixelRatioChanges(chart, resize) {
    if (!$815fd789f8127f09$var$drpListeningCharts.size) window.addEventListener('resize', $815fd789f8127f09$var$onWindowResize);
    $815fd789f8127f09$var$drpListeningCharts.set(chart, resize);
}
function $815fd789f8127f09$var$unlistenDevicePixelRatioChanges(chart) {
    $815fd789f8127f09$var$drpListeningCharts.delete(chart);
    if (!$815fd789f8127f09$var$drpListeningCharts.size) window.removeEventListener('resize', $815fd789f8127f09$var$onWindowResize);
}
function $815fd789f8127f09$var$createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, $7cc28eca4d136c06$export$9bb611d729802a56)(canvas);
    if (!container) return;
    const resize = (0, $7cc28eca4d136c06$export$61196ced6d74a310)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    $815fd789f8127f09$var$listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function $815fd789f8127f09$var$releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === 'resize') $815fd789f8127f09$var$unlistenDevicePixelRatioChanges(chart);
}
function $815fd789f8127f09$var$createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, $7cc28eca4d136c06$export$61196ced6d74a310)((event)=>{
        if (chart.ctx !== null) listener($815fd789f8127f09$var$fromNativeEvent(event, chart));
    }, chart);
    $815fd789f8127f09$var$addListener(canvas, type, proxy);
    return proxy;
}
class $815fd789f8127f09$export$f02da7f882cf6b2e extends $815fd789f8127f09$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext('2d');
        if (context && context.canvas === canvas) {
            $815fd789f8127f09$var$initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[$815fd789f8127f09$var$EXPANDO_KEY]) return false;
        const initial = canvas[$815fd789f8127f09$var$EXPANDO_KEY].initial;
        [
            'height',
            'width'
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[$815fd789f8127f09$var$EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: $815fd789f8127f09$var$createAttachObserver,
            detach: $815fd789f8127f09$var$createDetachObserver,
            resize: $815fd789f8127f09$var$createResizeObserver
        };
        const handler = handlers[type] || $815fd789f8127f09$var$createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: $815fd789f8127f09$var$releaseObserver,
            detach: $815fd789f8127f09$var$releaseObserver,
            resize: $815fd789f8127f09$var$releaseObserver
        };
        const handler = handlers[type] || $815fd789f8127f09$var$removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, $7cc28eca4d136c06$export$2329c99376c9d0a4)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = canvas && (0, $7cc28eca4d136c06$export$9bb611d729802a56)(canvas);
        return !!(container && container.isConnected);
    }
}
function $815fd789f8127f09$export$72cd9e67b1b784f9(canvas) {
    if (!(0, $7cc28eca4d136c06$export$3a1a48c8f6ef640e)() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) return $815fd789f8127f09$export$a40a96b24b46cf35;
    return $815fd789f8127f09$export$f02da7f882cf6b2e;
}
class $815fd789f8127f09$export$db77ccec0bb4ccac {
    static defaults = {};
    static defaultRoutes = undefined;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
        const { x: x, y: y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    hasValue() {
        return (0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(this.x) && (0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) // let's not create an object, if not needed
        return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
function $815fd789f8127f09$var$autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = $815fd789f8127f09$var$determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? $815fd789f8127f09$var$getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        $815fd789f8127f09$var$skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = $815fd789f8127f09$var$calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        $815fd789f8127f09$var$skip(ticks, newTicks, spacing, (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)$815fd789f8127f09$var$skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        $815fd789f8127f09$var$skip(ticks, newTicks, spacing, last, (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    $815fd789f8127f09$var$skip(ticks, newTicks, spacing);
    return newTicks;
}
function $815fd789f8127f09$var$determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function $815fd789f8127f09$var$calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = $815fd789f8127f09$var$getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, $7cc28eca4d136c06$export$a07804094c3ecf2d)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function $815fd789f8127f09$var$getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function $815fd789f8127f09$var$skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function $815fd789f8127f09$var$skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(majorStart, 0);
    const end = Math.min((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function $815fd789f8127f09$var$getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const $815fd789f8127f09$var$reverseAlign = (align)=>align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const $815fd789f8127f09$var$offsetFromEdge = (scale, edge, offset)=>edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const $815fd789f8127f09$var$getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
function $815fd789f8127f09$var$sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function $815fd789f8127f09$var$getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function $815fd789f8127f09$var$garbageCollect(caches, length) {
    (0, $7cc28eca4d136c06$export$d66501df72047452)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function $815fd789f8127f09$var$getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function $815fd789f8127f09$var$getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.font, fallback);
    const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(options.padding);
    const lines = (0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function $815fd789f8127f09$var$createScaleContext(parent, scale) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        scale: scale,
        type: 'scale'
    });
}
function $815fd789f8127f09$var$createTickContext(parent, index, tick) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        tick: tick,
        index: index,
        type: 'tick'
    });
}
function $815fd789f8127f09$var$titleAlign(align, position, reverse) {
    let ret = (0, $7cc28eca4d136c06$export$3c2fa207a37baaea)(align);
    if (reverse && position !== 'right' || !reverse && position === 'right') ret = $815fd789f8127f09$var$reverseAlign(ret);
    return ret;
}
function $815fd789f8127f09$var$titleArgs(scale, offset, position, align) {
    const { top: top, left: left, bottom: bottom, right: right, chart: chart } = scale;
    const { chartArea: chartArea, scales: scales } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, left, right);
        if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === 'center') titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = $815fd789f8127f09$var$offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
        } else if (position === 'center') titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = $815fd789f8127f09$var$offsetFromEdge(scale, position, offset);
        titleY = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, bottom, top);
        rotation = position === 'left' ? -(0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd) : (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd);
    }
    return {
        titleX: titleX,
        titleY: titleY,
        maxWidth: maxWidth,
        rotation: rotation
    };
}
class $815fd789f8127f09$export$d60cfc58d3c358b6 extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin: _userMin, _userMax: _userMax, _suggestedMin: _suggestedMin, _suggestedMax: _suggestedMax } = this;
        _userMin = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_userMin, _suggestedMin),
            max: (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(_userMax, _suggestedMax),
            minDefined: (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(_userMin),
            maxDefined: (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min: min, max: max, minDefined: minDefined, maxDefined: maxDefined } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min: min,
            max: max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(min, (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(max, min)),
            max: (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(max, (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero: beginAtZero, grace: grace, ticks: tickOpts } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, $7cc28eca4d136c06$export$db202ddc8be9136)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? $815fd789f8127f09$var$sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
            this.ticks = $815fd789f8127f09$var$autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = $815fd789f8127f09$var$getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - $815fd789f8127f09$var$getTickMarkLength(options.grid) - tickOpts.padding - $815fd789f8127f09$var$getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, $7cc28eca4d136c06$export$3a6d5c9ae78a2c08)(Math.min(Math.asin((0, $7cc28eca4d136c06$export$25ce5a424b770e84)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, $7cc28eca4d136c06$export$25ce5a424b770e84)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, $7cc28eca4d136c06$export$25ce5a424b770e84)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart: chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = $815fd789f8127f09$var$getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = $815fd789f8127f09$var$getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = $815fd789f8127f09$var$getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first: first, last: last, widest: widest, highest: highest } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align: align, padding: padding }, position: position } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === 'start') paddingRight = last.width;
            else if (align === 'end') paddingLeft = first.width;
            else if (align !== 'inner') {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis: axis, position: position } = this.options;
        return position === 'top' || position === 'bottom' || axis === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = $815fd789f8127f09$var$sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx: ctx, _longestTextCache: caches } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / $815fd789f8127f09$var$getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(label) && !(0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(label)) {
                width = (0, $7cc28eca4d136c06$export$e7c866399fa523f5)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(nestedLabel) && !(0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(nestedLabel)) {
                    width = (0, $7cc28eca4d136c06$export$e7c866399fa523f5)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        $815fd789f8127f09$var$garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths: widths,
            heights: heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, $7cc28eca4d136c06$export$71cec2538cb2c617)(this._alignToPixels ? (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: min, max: max } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = $815fd789f8127f09$var$createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = $815fd789f8127f09$var$createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== 'auto') return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid: grid, position: position, border: border } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = $815fd789f8127f09$var$getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === 'top') {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === 'bottom') {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === 'left') {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === 'right') {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === 'x') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === 'y') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = $815fd789f8127f09$var$getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1: tx1,
                ty1: ty1,
                tx2: tx2,
                ty2: ty2,
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                width: lineWidth,
                color: lineColor,
                borderDash: borderDash,
                borderDashOffset: borderDashOffset,
                tickWidth: tickWidth,
                tickColor: tickColor,
                tickBorderDash: tickBorderDash,
                tickBorderDashOffset: tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position: position, ticks: optionTicks } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align: align, crossAlign: crossAlign, padding: padding, mirror: mirror } = optionTicks;
        const tl = $815fd789f8127f09$var$getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = 'middle';
        if (position === 'top') {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'left') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === 'right') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (axis === 'x') {
            if (position === 'center') y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === 'y') {
            if (position === 'center') x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === 'y') {
            if (align === 'start') textBaseline = 'top';
            else if (align === 'end') textBaseline = 'bottom';
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === 'inner') {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? 'right' : 'left';
                    else if (i === 0) tickTextAlign = !this.options.reverse ? 'left' : 'right';
                    else tickTextAlign = 'center';
                }
                if (position === 'top') {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case 'middle':
                        top -= height / 2;
                        break;
                    case 'bottom':
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case 'center':
                        left -= width / 2;
                        break;
                    case 'right':
                        left -= width;
                        break;
                    case 'inner':
                        if (i === ilen - 1) left -= width;
                        else if (i > 0) left -= width / 2;
                        break;
                }
                backdrop = {
                    left: left,
                    top: top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label: label,
                font: font,
                textOffset: textOffset,
                options: {
                    rotation: rotation,
                    color: color,
                    strokeColor: strokeColor,
                    strokeWidth: strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline: textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop: backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position: position, ticks: ticks } = this.options;
        const rotation = -(0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.labelRotation);
        if (rotation) return position === 'top' ? 'left' : 'right';
        let align = 'center';
        if (ticks.align === 'start') align = 'left';
        else if (ticks.align === 'end') align = 'right';
        else if (ticks.align === 'inner') align = 'inner';
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position: position, ticks: { crossAlign: crossAlign, mirror: mirror, padding: padding } } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === 'left') {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x = this.left;
                }
            }
        } else if (position === 'right') {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x = this.right;
                }
            }
        } else textAlign = 'right';
        return {
            textAlign: textAlign,
            x: x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === 'left' || position === 'right') return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === 'top' || position === 'bottom') return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx: ctx, options: { backgroundColor: backgroundColor }, left: left, top: top, width: width, height: height } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart: chart, ctx: ctx, options: { border: border, grid: grid } } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, $7cc28eca4d136c06$export$78acf4525d8a74c4)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, $7cc28eca4d136c06$export$8743009a87fcb00f)(ctx, area);
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) (0, $7cc28eca4d136c06$export$3d8c2f653ac9d0b9)(ctx);
    }
    drawTitle() {
        const { ctx: ctx, options: { position: position, title: title, reverse: reverse } } = this;
        if (!title.display) return;
        const font = (0, $7cc28eca4d136c06$export$34aec0b863436764)(title.font);
        const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === 'bottom' || position === 'center' || (0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(position)) {
            offset += padding.bottom;
            if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX: titleX, titleY: titleY, maxWidth: maxWidth, rotation: rotation } = $815fd789f8127f09$var$titleArgs(this, offset, position, align);
        (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: $815fd789f8127f09$var$titleAlign(align, position, reverse),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(opts.grid && opts.grid.z, -1);
        const bz = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== $815fd789f8127f09$export$d60cfc58d3c358b6.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + 'AxisID';
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, $7cc28eca4d136c06$export$34aec0b863436764)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class $815fd789f8127f09$var$TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if ($815fd789f8127f09$var$isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + '.' + id;
        if (!id) throw new Error('class does not have id: ' + item);
        if (id in items) return scope;
        items[id] = item;
        $815fd789f8127f09$var$registerDefaults(item, scope, parentScope);
        if (this.override) (0, $7cc28eca4d136c06$export$4368d992c4eafac0).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, $7cc28eca4d136c06$export$4368d992c4eafac0)[scope]) {
            delete (0, $7cc28eca4d136c06$export$4368d992c4eafac0)[scope][id];
            if (this.override) delete (0, $7cc28eca4d136c06$export$6559d589eb85fbb6)[id];
        }
    }
}
function $815fd789f8127f09$var$registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, $7cc28eca4d136c06$export$efca4cbe5dd06740)(Object.create(null), [
        parentScope ? (0, $7cc28eca4d136c06$export$4368d992c4eafac0).get(parentScope) : {},
        (0, $7cc28eca4d136c06$export$4368d992c4eafac0).get(scope),
        item.defaults
    ]);
    (0, $7cc28eca4d136c06$export$4368d992c4eafac0).set(scope, itemDefaults);
    if (item.defaultRoutes) $815fd789f8127f09$var$routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, $7cc28eca4d136c06$export$4368d992c4eafac0).describe(scope, item.descriptors);
}
function $815fd789f8127f09$var$routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split('.');
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join('.');
        const parts = routes[property].split('.');
        const targetName = parts.pop();
        const targetScope = parts.join('.');
        (0, $7cc28eca4d136c06$export$4368d992c4eafac0).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function $815fd789f8127f09$var$isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
}
class $815fd789f8127f09$var$Registry {
    constructor(){
        this.controllers = new $815fd789f8127f09$var$TypedRegistry($815fd789f8127f09$export$75572ec5c55b4048, 'datasets', true);
        this.elements = new $815fd789f8127f09$var$TypedRegistry($815fd789f8127f09$export$db77ccec0bb4ccac, 'elements');
        this.plugins = new $815fd789f8127f09$var$TypedRegistry(Object, 'plugins');
        this.scales = new $815fd789f8127f09$var$TypedRegistry($815fd789f8127f09$export$d60cfc58d3c358b6, 'scales');
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each('register', args);
    }
    remove(...args) {
        this._each('unregister', args);
    }
    addControllers(...args) {
        this._each('register', args, this.controllers);
    }
    addElements(...args) {
        this._each('register', args, this.elements);
    }
    addPlugins(...args) {
        this._each('register', args, this.plugins);
    }
    addScales(...args) {
        this._each('register', args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, 'controller');
    }
    getElement(id) {
        return this._get(id, this.elements, 'element');
    }
    getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
    }
    getScale(id) {
        return this._get(id, this.scales, 'scale');
    }
    removeControllers(...args) {
        this._each('unregister', args, this.controllers);
    }
    removeElements(...args) {
        this._each('unregister', args, this.elements);
    }
    removePlugins(...args) {
        this._each('unregister', args, this.plugins);
    }
    removeScales(...args) {
        this._each('unregister', args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, $7cc28eca4d136c06$export$d66501df72047452)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, $7cc28eca4d136c06$export$a8550f7dbe79f93a)(method);
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(component['before' + camelMethod], [], component);
        registry[method](component);
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(component['after' + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + '.');
        return item;
    }
}
var $815fd789f8127f09$export$4bb7493d241fd8a5 = /* #__PURE__ */ new $815fd789f8127f09$var$Registry();
class $815fd789f8127f09$var$PluginService {
    constructor(){
        this._init = undefined;
    }
    notify(chart, hook, args, filter) {
        if (hook === 'beforeInit') {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, 'install');
        }
        if (this._init === undefined) return;
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === 'afterDestroy') {
            this._notify(descriptors, chart, 'stop');
            this._notify(this._init, chart, 'uninstall');
            this._init = undefined;
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(config.options && config.options.plugins, {});
        const plugins = $815fd789f8127f09$var$allPlugins(config);
        return options === false && !all ? [] : $815fd789f8127f09$var$createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
}
function $815fd789f8127f09$var$allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys($815fd789f8127f09$export$4bb7493d241fd8a5.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push($815fd789f8127f09$export$4bb7493d241fd8a5.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i = 0; i < local.length; i++){
        const plugin = local[i];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins: plugins,
        localIds: localIds
    };
}
function $815fd789f8127f09$var$getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function $815fd789f8127f09$var$createDescriptors(chart, { plugins: plugins, localIds: localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = $815fd789f8127f09$var$getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin: plugin,
            options: $815fd789f8127f09$var$pluginOpts(chart.config, {
                plugin: plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function $815fd789f8127f09$var$pluginOpts(config, { plugin: plugin, local: local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ''
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function $815fd789f8127f09$var$getIndexAxis(type, options) {
    const datasetDefaults = (0, $7cc28eca4d136c06$export$4368d992c4eafac0).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function $815fd789f8127f09$var$getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === '_index_') axis = indexAxis;
    else if (id === '_value_') axis = indexAxis === 'x' ? 'y' : 'x';
    return axis;
}
function $815fd789f8127f09$var$getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
}
function $815fd789f8127f09$var$idMatchesAxis(id) {
    if (id === 'x' || id === 'y' || id === 'r') return id;
}
function $815fd789f8127f09$var$axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') return 'x';
    if (position === 'left' || position === 'right') return 'y';
}
function $815fd789f8127f09$var$determineAxis(id, ...scaleOptions) {
    if ($815fd789f8127f09$var$idMatchesAxis(id)) return id;
    for (const opts of scaleOptions){
        const axis = opts.axis || $815fd789f8127f09$var$axisFromPosition(opts.position) || id.length > 1 && $815fd789f8127f09$var$idMatchesAxis(id[0].toLowerCase());
        if (axis) return axis;
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function $815fd789f8127f09$var$getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + 'AxisID'] === id) return {
        axis: axis
    };
}
function $815fd789f8127f09$var$retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
        const boundDs = config.data.datasets.filter((d)=>d.xAxisID === id || d.yAxisID === id);
        if (boundDs.length) return $815fd789f8127f09$var$getAxisFromDataset(id, 'x', boundDs[0]) || $815fd789f8127f09$var$getAxisFromDataset(id, 'y', boundDs[0]);
    }
    return {};
}
function $815fd789f8127f09$var$mergeScaleConfig(config, options) {
    const chartDefaults = (0, $7cc28eca4d136c06$export$6559d589eb85fbb6)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = $815fd789f8127f09$var$getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = $815fd789f8127f09$var$determineAxis(id, scaleConf, $815fd789f8127f09$var$retrieveAxisFromDatasets(id, config), (0, $7cc28eca4d136c06$export$4368d992c4eafac0).scales[scaleConf.type]);
        const defaultId = $815fd789f8127f09$var$getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = (0, $7cc28eca4d136c06$export$555508cbc6add439)(Object.create(null), [
            {
                axis: axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || $815fd789f8127f09$var$getIndexAxis(type, options);
        const datasetDefaults = (0, $7cc28eca4d136c06$export$6559d589eb85fbb6)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = $815fd789f8127f09$var$getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + 'AxisID'] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, $7cc28eca4d136c06$export$555508cbc6add439)(scales[id], [
                {
                    axis: axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, $7cc28eca4d136c06$export$555508cbc6add439)(scale, [
            (0, $7cc28eca4d136c06$export$4368d992c4eafac0).scales[scale.type],
            (0, $7cc28eca4d136c06$export$4368d992c4eafac0).scale
        ]);
    });
    return scales;
}
function $815fd789f8127f09$var$initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(options.plugins, {});
    options.scales = $815fd789f8127f09$var$mergeScaleConfig(config, options);
}
function $815fd789f8127f09$var$initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function $815fd789f8127f09$var$initConfig(config) {
    config = config || {};
    config.data = $815fd789f8127f09$var$initData(config.data);
    $815fd789f8127f09$var$initOptions(config);
    return config;
}
const $815fd789f8127f09$var$keyCache = new Map();
const $815fd789f8127f09$var$keysCached = new Set();
function $815fd789f8127f09$var$cachedKeys(cacheKey, generate) {
    let keys = $815fd789f8127f09$var$keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        $815fd789f8127f09$var$keyCache.set(cacheKey, keys);
        $815fd789f8127f09$var$keysCached.add(keys);
    }
    return keys;
}
const $815fd789f8127f09$var$addIfFound = (set, obj, key)=>{
    const opts = (0, $7cc28eca4d136c06$export$2d1720544b23b823)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class $815fd789f8127f09$var$Config {
    constructor(config){
        this._config = $815fd789f8127f09$var$initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = $815fd789f8127f09$var$initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        $815fd789f8127f09$var$initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return $815fd789f8127f09$var$cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return $815fd789f8127f09$var$cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return $815fd789f8127f09$var$cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ''
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return $815fd789f8127f09$var$cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options: options, type: type } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>$815fd789f8127f09$var$addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>$815fd789f8127f09$var$addIfFound(scopes, options, key));
            keys.forEach((key)=>$815fd789f8127f09$var$addIfFound(scopes, (0, $7cc28eca4d136c06$export$6559d589eb85fbb6)[type] || {}, key));
            keys.forEach((key)=>$815fd789f8127f09$var$addIfFound(scopes, (0, $7cc28eca4d136c06$export$4368d992c4eafac0), key));
            keys.forEach((key)=>$815fd789f8127f09$var$addIfFound(scopes, (0, $7cc28eca4d136c06$export$2e2af4578d910ddf), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if ($815fd789f8127f09$var$keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options: options, type: type } = this;
        return [
            options,
            (0, $7cc28eca4d136c06$export$6559d589eb85fbb6)[type] || {},
            (0, $7cc28eca4d136c06$export$4368d992c4eafac0).datasets[type] || {},
            {
                type: type
            },
            (0, $7cc28eca4d136c06$export$4368d992c4eafac0),
            (0, $7cc28eca4d136c06$export$2e2af4578d910ddf)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ''
    ]) {
        const result = {
            $shared: true
        };
        const { resolver: resolver, subPrefixes: subPrefixes } = $815fd789f8127f09$var$getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if ($815fd789f8127f09$var$needContext(resolver, names)) {
            result.$shared = false;
            context = (0, $7cc28eca4d136c06$export$a93c5207d687da10)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, $7cc28eca4d136c06$export$c3950d9923825c02)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ''
    ], descriptorDefaults) {
        const { resolver: resolver } = $815fd789f8127f09$var$getResolver(this._resolverCache, scopes, prefixes);
        return (0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(context) ? (0, $7cc28eca4d136c06$export$c3950d9923825c02)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function $815fd789f8127f09$var$getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, $7cc28eca4d136c06$export$a9c996f45e5784d0)(scopes, prefixes);
        cached = {
            resolver: resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes('hover'))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const $815fd789f8127f09$var$hasFunction = (value)=>(0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(value) && Object.getOwnPropertyNames(value).some((key)=>(0, $7cc28eca4d136c06$export$a93c5207d687da10)(value[key]));
function $815fd789f8127f09$var$needContext(proxy, names) {
    const { isScriptable: isScriptable, isIndexable: isIndexable } = (0, $7cc28eca4d136c06$export$7910e0436ed8d1de)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, $7cc28eca4d136c06$export$a93c5207d687da10)(value) || $815fd789f8127f09$var$hasFunction(value)) || indexable && (0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(value)) return true;
    }
    return false;
}
var $815fd789f8127f09$var$version = "4.5.1";
const $815fd789f8127f09$var$KNOWN_POSITIONS = [
    'top',
    'bottom',
    'left',
    'right',
    'chartArea'
];
function $815fd789f8127f09$var$positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || $815fd789f8127f09$var$KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function $815fd789f8127f09$var$compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function $815fd789f8127f09$var$onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function $815fd789f8127f09$var$onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function $815fd789f8127f09$var$getCanvas(item) {
    if ((0, $7cc28eca4d136c06$export$3a1a48c8f6ef640e)() && typeof item === 'string') item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const $815fd789f8127f09$var$instances = {};
const $815fd789f8127f09$var$getChart = (key)=>{
    const canvas = $815fd789f8127f09$var$getCanvas(key);
    return Object.values($815fd789f8127f09$var$instances).filter((c)=>c.canvas === canvas).pop();
};
function $815fd789f8127f09$var$moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function $815fd789f8127f09$var$determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === 'mouseout') return null;
    if (isClick) return lastEvent;
    return e;
}
class $815fd789f8127f09$export$acaa6426d77a227e {
    static defaults = (0, $7cc28eca4d136c06$export$4368d992c4eafac0);
    static instances = $815fd789f8127f09$var$instances;
    static overrides = (0, $7cc28eca4d136c06$export$6559d589eb85fbb6);
    static registry = $815fd789f8127f09$export$4bb7493d241fd8a5;
    static version = $815fd789f8127f09$var$version;
    static getChart = $815fd789f8127f09$var$getChart;
    static register(...items) {
        $815fd789f8127f09$export$4bb7493d241fd8a5.add(...items);
        $815fd789f8127f09$var$invalidatePlugins();
    }
    static unregister(...items) {
        $815fd789f8127f09$export$4bb7493d241fd8a5.remove(...items);
        $815fd789f8127f09$var$invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new $815fd789f8127f09$var$Config(userConfig);
        const initialCanvas = $815fd789f8127f09$var$getCanvas(item);
        const existingChart = $815fd789f8127f09$var$getChart(initialCanvas);
        if (existingChart) throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || $815fd789f8127f09$export$72cd9e67b1b784f9(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, $7cc28eca4d136c06$export$2219238a014317b0)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new $815fd789f8127f09$var$PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, $7cc28eca4d136c06$export$4c3d22f3d993c33f)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        $815fd789f8127f09$var$instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        $815fd789f8127f09$export$a424a0aa8f687495.listen(this, 'complete', $815fd789f8127f09$var$onAnimationsComplete);
        $815fd789f8127f09$export$a424a0aa8f687495.listen(this, 'progress', $815fd789f8127f09$var$onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio: aspectRatio, maintainAspectRatio: maintainAspectRatio }, width: width, height: height, _aspectRatio: _aspectRatio } = this;
        if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return $815fd789f8127f09$export$4bb7493d241fd8a5;
    }
    _initialize() {
        this.notifyPlugins('beforeInit');
        if (this.options.responsive) this.resize();
        else (0, $7cc28eca4d136c06$export$f787f51d84a910ad)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins('afterInit');
        return this;
    }
    clear() {
        (0, $7cc28eca4d136c06$export$c9170ad7d4cd7e57)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        $815fd789f8127f09$export$a424a0aa8f687495.stop(this);
        return this;
    }
    resize(width, height) {
        if (!$815fd789f8127f09$export$a424a0aa8f687495.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width: width,
            height: height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? 'resize' : 'attach';
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, $7cc28eca4d136c06$export$f787f51d84a910ad)(this, newRatio, true)) return;
        this.notifyPlugins('resize', {
            size: newSize
        });
        (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, $7cc28eca4d136c06$export$d66501df72047452)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = $815fd789f8127f09$var$determineAxis(id, scaleOptions);
            const isRadial = axis === 'r';
            const isHorizontal = axis === 'x';
            return {
                options: scaleOptions,
                dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
            };
        }));
        (0, $7cc28eca4d136c06$export$d66501df72047452)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = $815fd789f8127f09$var$determineAxis(id, scaleOptions);
            const scaleType = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || $815fd789f8127f09$var$positionIsHorizontal(scaleOptions.position, axis) !== $815fd789f8127f09$var$positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = $815fd789f8127f09$export$4bb7493d241fd8a5.getScale(scaleType);
                scale = new scaleClass({
                    id: id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, $7cc28eca4d136c06$export$d66501df72047452)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, $7cc28eca4d136c06$export$d66501df72047452)(scales, (scale)=>{
            $815fd789f8127f09$export$1ecca0613f5e56d2.configure(this, scale, scale.options);
            $815fd789f8127f09$export$1ecca0613f5e56d2.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort($815fd789f8127f09$var$compare2Level('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets, data: { datasets: datasets } } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || $815fd789f8127f09$var$getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = '' + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = $815fd789f8127f09$export$4bb7493d241fd8a5.getController(type);
                const { datasetElementType: datasetElementType, dataElementType: dataElementType } = (0, $7cc28eca4d136c06$export$4368d992c4eafac0).datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: $815fd789f8127f09$export$4bb7493d241fd8a5.getElement(dataElementType),
                    datasetElementType: datasetElementType && $815fd789f8127f09$export$4bb7493d241fd8a5.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins('reset');
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins('beforeUpdate', {
            mode: mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller: controller } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, $7cc28eca4d136c06$export$d66501df72047452)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins('afterUpdate', {
            mode: mode
        });
        this._layers.sort($815fd789f8127f09$var$compare2Level('z', '_idx'));
        const { _active: _active, _lastEvent: _lastEvent } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.scales, (scale)=>{
            $815fd789f8127f09$export$1ecca0613f5e56d2.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, $7cc28eca4d136c06$export$ee7c8ad385a60b7b)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: _hiddenIndices } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method: method, start: start, count: count } of changes){
            const move = method === '_removeElements' ? -count : count;
            $815fd789f8127f09$var$moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + ',' + c.splice(1).join(',')));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, $7cc28eca4d136c06$export$ee7c8ad385a60b7b)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(',')).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins('beforeLayout', {
            cancelable: true
        }) === false) return;
        $815fd789f8127f09$export$1ecca0613f5e56d2.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.boxes, (box)=>{
            if (noArea && box.position === 'chartArea') return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins('beforeDatasetsUpdate', {
            mode: mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._updateDataset(i, (0, $7cc28eca4d136c06$export$a93c5207d687da10)(mode) ? mode({
            datasetIndex: i
        }) : mode);
        this.notifyPlugins('afterDatasetsUpdate', {
            mode: mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta: meta,
            index: index,
            mode: mode,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetUpdate', args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetUpdate', args);
    }
    render() {
        if (this.notifyPlugins('beforeRender', {
            cancelable: true
        }) === false) return;
        if ($815fd789f8127f09$export$a424a0aa8f687495.has(this)) {
            if (this.attached && !$815fd789f8127f09$export$a424a0aa8f687495.running(this)) $815fd789f8127f09$export$a424a0aa8f687495.start(this);
        } else {
            this.draw();
            $815fd789f8127f09$var$onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width: width, height: height } = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null;
            this._resize(width, height);
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins('beforeDraw', {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const args = {
            meta: meta,
            index: meta.index,
            cancelable: true
        };
        const clip = (0, $7cc28eca4d136c06$export$995eb9fca571757)(this, meta);
        if (this.notifyPlugins('beforeDatasetDraw', args) === false) return;
        if (clip) (0, $7cc28eca4d136c06$export$8743009a87fcb00f)(ctx, clip);
        meta.controller.draw();
        if (clip) (0, $7cc28eca4d136c06$export$3d8c2f653ac9d0b9)(ctx);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetDraw', args);
    }
    isPointInArea(point) {
        return (0, $7cc28eca4d136c06$export$e7094788287c5e9b)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = $815fd789f8127f09$export$a13296960cae0384.modes[mode];
        if (typeof method === 'function') return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, $7cc28eca4d136c06$export$35e795649ee09318)(null, {
            chart: this,
            type: 'chart'
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? 'show' : 'hide';
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, $7cc28eca4d136c06$export$dda1d9f60106f0e9)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible: visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        $815fd789f8127f09$export$a424a0aa8f687495.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: canvas, ctx: ctx } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, $7cc28eca4d136c06$export$c9170ad7d4cd7e57)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete $815fd789f8127f09$var$instances[this.id];
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove('attach', attached);
            this.attached = true;
            this.resize();
            _add('resize', listener);
            _add('detach', detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove('resize', listener);
            this._stop();
            this._resize(0, 0);
            _add('attach', attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? 'set' : 'remove';
        let meta, item, i, ilen;
        if (mode === 'dataset') {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex: datasetIndex, index: index })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('No dataset found at index ' + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
            };
        });
        const changed = !(0, $7cc28eca4d136c06$export$f38c853ae54ed474)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay: replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins('afterEvent', args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [], options: options } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, $7cc28eca4d136c06$export$3b513254972cfc9c)(e);
        const lastEvent = $815fd789f8127f09$var$determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, $7cc28eca4d136c06$export$f38c853ae54ed474)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function $815fd789f8127f09$var$invalidatePlugins() {
    return (0, $7cc28eca4d136c06$export$d66501df72047452)($815fd789f8127f09$export$acaa6426d77a227e.instances, (chart)=>chart._plugins.invalidate());
}
function $815fd789f8127f09$var$clipSelf(ctx, element, endAngle) {
    const { startAngle: startAngle, x: x, y: y, outerRadius: outerRadius, innerRadius: innerRadius, options: options } = element;
    const { borderWidth: borderWidth, borderJoinStyle: borderJoinStyle } = options;
    const outerAngleClip = Math.min(borderWidth / outerRadius, (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(startAngle - endAngle));
    ctx.beginPath();
    ctx.arc(x, y, outerRadius - borderWidth / 2, startAngle + outerAngleClip / 2, endAngle - outerAngleClip / 2);
    if (innerRadius > 0) {
        const innerAngleClip = Math.min(borderWidth / innerRadius, (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(startAngle - endAngle));
        ctx.arc(x, y, innerRadius + borderWidth / 2, endAngle - innerAngleClip / 2, startAngle + innerAngleClip / 2, true);
    } else {
        const clipWidth = Math.min(borderWidth / 2, outerRadius * (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(startAngle - endAngle));
        if (borderJoinStyle === 'round') ctx.arc(x, y, clipWidth, endAngle - (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2, startAngle + (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2, true);
        else if (borderJoinStyle === 'bevel') {
            const r = 2 * clipWidth * clipWidth;
            const endX = -r * Math.cos(endAngle + (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2) + x;
            const endY = -r * Math.sin(endAngle + (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2) + y;
            const startX = r * Math.cos(startAngle + (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2) + x;
            const startY = r * Math.sin(startAngle + (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / 2) + y;
            ctx.lineTo(endX, endY);
            ctx.lineTo(startX, startY);
        }
    }
    ctx.closePath();
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.clip('evenodd');
}
function $815fd789f8127f09$var$clipArc(ctx, element, endAngle) {
    const { startAngle: startAngle, pixelMargin: pixelMargin, x: x, y: y, outerRadius: outerRadius, innerRadius: innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd), startAngle - (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd));
    ctx.closePath();
    ctx.clip();
}
function $815fd789f8127f09$var$toRadiusCorners(value) {
    return (0, $7cc28eca4d136c06$export$1a82df3d29112e01)(value, [
        'outerStart',
        'outerEnd',
        'innerStart',
        'innerEnd'
    ]);
}
/**
 * Parse border radius from the provided options
 */ function $815fd789f8127f09$var$parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = $815fd789f8127f09$var$toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(o.innerStart, 0, innerLimit),
        innerEnd: (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function $815fd789f8127f09$var$rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function $815fd789f8127f09$var$pathArc(ctx, element, offset, spacing, end, circular) {
    const { x: x, y: y, startAngle: start, pixelMargin: pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, $7cc28eca4d136c06$export$56c0d5a1e737357d)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart: outerStart, outerEnd: outerEnd, innerStart: innerStart, innerEnd: innerEnd } = $815fd789f8127f09$var$parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = $815fd789f8127f09$var$rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd));
        }
        // The line from point 3 to point 4
        const p4 = $815fd789f8127f09$var$rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter = $815fd789f8127f09$var$rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd), innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter = $815fd789f8127f09$var$rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd));
        }
        // The line from point 7 to point 8
        const p8 = $815fd789f8127f09$var$rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter = $815fd789f8127f09$var$rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function $815fd789f8127f09$var$drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles: fullCircles, startAngle: startAngle, circumference: circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        $815fd789f8127f09$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, $7cc28eca4d136c06$export$971d5caa766a69d7) || (0, $7cc28eca4d136c06$export$971d5caa766a69d7));
    }
    $815fd789f8127f09$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function $815fd789f8127f09$var$drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles: fullCircles, startAngle: startAngle, circumference: circumference, options: options } = element;
    const { borderWidth: borderWidth, borderJoinStyle: borderJoinStyle, borderDash: borderDash, borderDashOffset: borderDashOffset, borderRadius: borderRadius } = options;
    const inner = options.borderAlign === 'inner';
    if (!borderWidth) return;
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || 'round';
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || 'bevel';
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        $815fd789f8127f09$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.stroke();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, $7cc28eca4d136c06$export$971d5caa766a69d7) || (0, $7cc28eca4d136c06$export$971d5caa766a69d7));
    }
    if (inner) $815fd789f8127f09$var$clipArc(ctx, element, endAngle);
    if (options.selfJoin && endAngle - startAngle >= (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) && borderRadius === 0 && borderJoinStyle !== 'miter') $815fd789f8127f09$var$clipSelf(ctx, element, endAngle);
    if (!fullCircles) {
        $815fd789f8127f09$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class $815fd789f8127f09$export$d48203c759d6a1fc extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    static id = 'arc';
    static defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true,
        selfJoin: false
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash'
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        const { angle: angle, distance: distance } = (0, $7cc28eca4d136c06$export$96f57966bedc81b4)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius, circumference: circumference } = this.getProps([
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference'
        ], useFinalPosition);
        const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
        const _circumference = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(circumference, endAngle - startAngle);
        const nonZeroBetween = (0, $7cc28eca4d136c06$export$ffb5f4729a158638)(angle, startAngle, endAngle) && startAngle !== endAngle;
        const betweenAngles = _circumference >= (0, $7cc28eca4d136c06$export$971d5caa766a69d7) || nonZeroBetween;
        const withinRadius = (0, $7cc28eca4d136c06$export$21579262ef46735b)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x: x, y: y, startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius } = this.getProps([
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius'
        ], useFinalPosition);
        const { offset: offset, spacing: spacing } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options: options, circumference: circumference } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        this.fullCircles = circumference > (0, $7cc28eca4d136c06$export$971d5caa766a69d7) ? Math.floor(circumference / (0, $7cc28eca4d136c06$export$971d5caa766a69d7)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min((0, $7cc28eca4d136c06$export$56c0d5a1e737357d), circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        $815fd789f8127f09$var$drawArc(ctx, this, radiusOffset, spacing, circular);
        $815fd789f8127f09$var$drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}
function $815fd789f8127f09$var$setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(style.borderColor, options.borderColor);
}
function $815fd789f8127f09$var$lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function $815fd789f8127f09$var$getLineMethod(options) {
    if (options.stepped) return 0, $7cc28eca4d136c06$export$493d36ec626b6698;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, $7cc28eca4d136c06$export$1fbe638ecf81657e;
    return $815fd789f8127f09$var$lineTo;
}
function $815fd789f8127f09$var$pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count: count,
        start: start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function $815fd789f8127f09$var$pathSegment(ctx, line, segment, params) {
    const { points: points, options: options } = line;
    const { count: count, start: start, loop: loop, ilen: ilen } = $815fd789f8127f09$var$pathVars(points, segment, params);
    const lineMethod = $815fd789f8127f09$var$getLineMethod(options);
    let { move: move = true, reverse: reverse } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function $815fd789f8127f09$var$fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count: count, start: start, ilen: ilen } = $815fd789f8127f09$var$pathVars(points, segment, params);
    const { move: move = true, reverse: reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function $815fd789f8127f09$var$_getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
    return useFastPath ? $815fd789f8127f09$var$fastPathSegment : $815fd789f8127f09$var$pathSegment;
}
function $815fd789f8127f09$var$_getInterpolationMethod(options) {
    if (options.stepped) return 0, $7cc28eca4d136c06$export$8a5498727ef6be21;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, $7cc28eca4d136c06$export$d24c54395ce0c509;
    return 0, $7cc28eca4d136c06$export$6554612db691658e;
}
function $815fd789f8127f09$var$strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    $815fd789f8127f09$var$setStyle(ctx, line.options);
    ctx.stroke(path);
}
function $815fd789f8127f09$var$strokePathDirect(ctx, line, start, count) {
    const { segments: segments, options: options } = line;
    const segmentMethod = $815fd789f8127f09$var$_getSegmentMethod(line);
    for (const segment of segments){
        $815fd789f8127f09$var$setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start: start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const $815fd789f8127f09$var$usePath2D = typeof Path2D === 'function';
function $815fd789f8127f09$var$draw(ctx, line, start, count) {
    if ($815fd789f8127f09$var$usePath2D && !line.options.segment) $815fd789f8127f09$var$strokePathWithCache(ctx, line, start, count);
    else $815fd789f8127f09$var$strokePathDirect(ctx, line, start, count);
}
class $815fd789f8127f09$export$55e463fa7bcd3469 extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    static id = 'line';
    static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash' && name !== 'fill'
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, $7cc28eca4d136c06$export$306ddfe3a8403e2)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, $7cc28eca4d136c06$export$7a38258bbe170828)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, $7cc28eca4d136c06$export$2f6ca3d3b1f80bf5)(this, {
            property: property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = $815fd789f8127f09$var$_getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start: start, end: end } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = $815fd789f8127f09$var$_getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = $815fd789f8127f09$var$_getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start: start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            $815fd789f8127f09$var$draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
function $815fd789f8127f09$var$inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class $815fd789f8127f09$export$bd159b522b230b7a extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    static id = 'point';
    parsed;
    skip;
    stop;
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x: x, y: y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return $815fd789f8127f09$var$inRange$1(this, mouseX, 'x', useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $815fd789f8127f09$var$inRange$1(this, mouseY, 'y', useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x, y: y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, $7cc28eca4d136c06$export$e7094788287c5e9b)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, $7cc28eca4d136c06$export$d66dc83d8cfc8dd)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}
function $815fd789f8127f09$var$getBarBounds(bar, useFinalPosition) {
    const { x: x, y: y, base: base, width: width, height: height } = bar.getProps([
        'x',
        'y',
        'base',
        'width',
        'height'
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left: left,
        top: top,
        right: right,
        bottom: bottom
    };
}
function $815fd789f8127f09$var$skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(value, min, max);
}
function $815fd789f8127f09$var$parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, $7cc28eca4d136c06$export$9fa96a7d116ea3ce)(value);
    return {
        t: $815fd789f8127f09$var$skipOrLimit(skip.top, o.top, 0, maxH),
        r: $815fd789f8127f09$var$skipOrLimit(skip.right, o.right, 0, maxW),
        b: $815fd789f8127f09$var$skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: $815fd789f8127f09$var$skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function $815fd789f8127f09$var$parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius: enableBorderRadius } = bar.getProps([
        'enableBorderRadius'
    ]);
    const value = bar.options.borderRadius;
    const o = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(value);
    return {
        topLeft: $815fd789f8127f09$var$skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: $815fd789f8127f09$var$skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: $815fd789f8127f09$var$skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: $815fd789f8127f09$var$skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function $815fd789f8127f09$var$boundingRects(bar) {
    const bounds = $815fd789f8127f09$var$getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = $815fd789f8127f09$var$parseBorderWidth(bar, width / 2, height / 2);
    const radius = $815fd789f8127f09$var$parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius: radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function $815fd789f8127f09$var$inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && $815fd789f8127f09$var$getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, $7cc28eca4d136c06$export$21579262ef46735b)(x, bounds.left, bounds.right)) && (skipY || (0, $7cc28eca4d136c06$export$21579262ef46735b)(y, bounds.top, bounds.bottom));
}
function $815fd789f8127f09$var$hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function $815fd789f8127f09$var$addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function $815fd789f8127f09$var$inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class $815fd789f8127f09$export$a16ed71bf4b07672 extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    static id = 'bar';
    static defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount: inflateAmount, options: { borderColor: borderColor, backgroundColor: backgroundColor } } = this;
        const { inner: inner, outer: outer } = $815fd789f8127f09$var$boundingRects(this);
        const addRectPath = $815fd789f8127f09$var$hasRadius(outer.radius) ? (0, $7cc28eca4d136c06$export$92108d983e8ee699) : $815fd789f8127f09$var$addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, $815fd789f8127f09$var$inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, $815fd789f8127f09$var$inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill('evenodd');
        }
        ctx.beginPath();
        addRectPath(ctx, $815fd789f8127f09$var$inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return $815fd789f8127f09$var$inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return $815fd789f8127f09$var$inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $815fd789f8127f09$var$inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x, y: y, base: base, horizontal: horizontal } = this.getProps([
            'x',
            'y',
            'base',
            'horizontal'
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
    }
}
var $815fd789f8127f09$export$7a5d735b2ab6389d = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: $815fd789f8127f09$export$d48203c759d6a1fc,
    BarElement: $815fd789f8127f09$export$a16ed71bf4b07672,
    LineElement: $815fd789f8127f09$export$55e463fa7bcd3469,
    PointElement: $815fd789f8127f09$export$bd159b522b230b7a
});
const $815fd789f8127f09$var$BORDER_COLORS = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const $815fd789f8127f09$var$BACKGROUND_COLORS = /* #__PURE__ */ $815fd789f8127f09$var$BORDER_COLORS.map((color)=>color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function $815fd789f8127f09$var$getBorderColor(i) {
    return $815fd789f8127f09$var$BORDER_COLORS[i % $815fd789f8127f09$var$BORDER_COLORS.length];
}
function $815fd789f8127f09$var$getBackgroundColor(i) {
    return $815fd789f8127f09$var$BACKGROUND_COLORS[i % $815fd789f8127f09$var$BACKGROUND_COLORS.length];
}
function $815fd789f8127f09$var$colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = $815fd789f8127f09$var$getBorderColor(i);
    dataset.backgroundColor = $815fd789f8127f09$var$getBackgroundColor(i);
    return ++i;
}
function $815fd789f8127f09$var$colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>$815fd789f8127f09$var$getBorderColor(i++));
    return i;
}
function $815fd789f8127f09$var$colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>$815fd789f8127f09$var$getBackgroundColor(i++));
    return i;
}
function $815fd789f8127f09$var$getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof $815fd789f8127f09$export$e04603e7d8b77172) i = $815fd789f8127f09$var$colorizeDoughnutDataset(dataset, i);
        else if (controller instanceof $815fd789f8127f09$export$2a270b3a0d973c85) i = $815fd789f8127f09$var$colorizePolarAreaDataset(dataset, i);
        else if (controller) i = $815fd789f8127f09$var$colorizeDefaultDataset(dataset, i);
    };
}
function $815fd789f8127f09$var$containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) return true;
    }
    return false;
}
function $815fd789f8127f09$var$containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
function $815fd789f8127f09$var$containsDefaultColorsDefenitions() {
    return (0, $7cc28eca4d136c06$export$4368d992c4eafac0).borderColor !== 'rgba(0,0,0,0.1)' || (0, $7cc28eca4d136c06$export$4368d992c4eafac0).backgroundColor !== 'rgba(0,0,0,0.1)';
}
var $815fd789f8127f09$export$c537fa0d021d010b = {
    id: 'colors',
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) return;
        const { data: { datasets: datasets }, options: chartOptions } = chart.config;
        const { elements: elements } = chartOptions;
        const containsColorDefenition = $815fd789f8127f09$var$containsColorsDefinitions(datasets) || $815fd789f8127f09$var$containsColorsDefinition(chartOptions) || elements && $815fd789f8127f09$var$containsColorsDefinitions(elements) || $815fd789f8127f09$var$containsDefaultColorsDefenitions();
        if (!options.forceOverride && containsColorDefenition) return;
        const colorizer = $815fd789f8127f09$var$getColorizer(chart);
        datasets.forEach(colorizer);
    }
};
function $815fd789f8127f09$var$lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx, y: pointAy } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function $815fd789f8127f09$var$minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(minIndex) && !(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function $815fd789f8127f09$var$cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function $815fd789f8127f09$var$cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        $815fd789f8127f09$var$cleanDecimatedDataset(dataset);
    });
}
function $815fd789f8127f09$var$getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale: iScale } = meta;
    const { min: min, max: max, minDefined: minDefined, maxDefined: maxDefined } = iScale.getUserBounds();
    if (minDefined) start = (0, $7cc28eca4d136c06$export$25ce5a424b770e84)((0, $7cc28eca4d136c06$export$ef35774e6d314e91)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, $7cc28eca4d136c06$export$25ce5a424b770e84)((0, $7cc28eca4d136c06$export$ef35774e6d314e91)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start: start,
        count: count
    };
}
var $815fd789f8127f09$export$be17f937e9aa7533 = {
    id: 'decimation',
    defaults: {
        algorithm: 'min-max',
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            $815fd789f8127f09$var$cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data: _data, indexAxis: indexAxis } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                indexAxis,
                chart.options.indexAxis
            ]) === 'y') return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== 'linear' && xAxis.type !== 'time') return;
            if (chart.options.parsing) return;
            let { start: start, count: count } = $815fd789f8127f09$var$getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                $815fd789f8127f09$var$cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, 'data', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case 'lttb':
                    decimated = $815fd789f8127f09$var$lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case 'min-max':
                    decimated = $815fd789f8127f09$var$minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        $815fd789f8127f09$var$cleanDecimatedData(chart);
    }
};
function $815fd789f8127f09$var$_segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start: start, end: end } = segment;
        end = $815fd789f8127f09$var$_findSegmentEnd(start, end, points);
        const bounds = $815fd789f8127f09$var$_getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, $7cc28eca4d136c06$export$2f6ca3d3b1f80bf5)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = $815fd789f8127f09$var$_getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, $7cc28eca4d136c06$export$3d12bd131bb975d1)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: $815fd789f8127f09$var$_getEdge(bounds, subBounds, 'start', Math.max)
                },
                end: {
                    [property]: $815fd789f8127f09$var$_getEdge(bounds, subBounds, 'end', Math.min)
                }
            });
        }
    }
    return parts;
}
function $815fd789f8127f09$var$_getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === 'angle') {
        start = (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(start);
        end = (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(end);
    }
    return {
        property: property,
        start: start,
        end: end
    };
}
function $815fd789f8127f09$var$_pointsFromSegments(boundary, line) {
    const { x: x = null, y: y = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start: start, end: end })=>{
        end = $815fd789f8127f09$var$_findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y: y
            });
            points.push({
                x: last.x,
                y: y
            });
        } else if (x !== null) {
            points.push({
                x: x,
                y: first.y
            });
            points.push({
                x: x,
                y: last.y
            });
        }
    });
    return points;
}
function $815fd789f8127f09$var$_findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function $815fd789f8127f09$var$_getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function $815fd789f8127f09$var$_createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = $815fd789f8127f09$var$_pointsFromSegments(boundary, line);
    return points.length ? new $815fd789f8127f09$export$55e463fa7bcd3469({
        points: points,
        options: {
            tension: 0
        },
        _loop: _loop,
        _fullLoop: _loop
    }) : null;
}
function $815fd789f8127f09$var$_shouldApplyFill(source) {
    return source && source.fill !== false;
}
function $815fd789f8127f09$var$_resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, $7cc28eca4d136c06$export$39b482c5e57630a8)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function $815fd789f8127f09$var$_decodeFill(line, index, count) {
    const fill = $815fd789f8127f09$var$parseFillOption(line);
    if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, $7cc28eca4d136c06$export$39b482c5e57630a8)(target) && Math.floor(target) === target) return $815fd789f8127f09$var$decodeTargetIndex(fill[0], index, target, count);
    return [
        'origin',
        'start',
        'end',
        'stack',
        'shape'
    ].indexOf(fill) >= 0 && fill;
}
function $815fd789f8127f09$var$decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === '-' || firstCh === '+') target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function $815fd789f8127f09$var$_getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === 'start') pixel = scale.bottom;
    else if (fill === 'end') pixel = scale.top;
    else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function $815fd789f8127f09$var$_getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === 'start') value = startValue;
    else if (fill === 'end') value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function $815fd789f8127f09$var$parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return 'origin';
    return fill;
}
function $815fd789f8127f09$var$_buildStackLine(source) {
    const { scale: scale, index: index, line: line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = $815fd789f8127f09$var$getLinesBelow(scale, index);
    linesBelow.push($815fd789f8127f09$var$_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)$815fd789f8127f09$var$addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new $815fd789f8127f09$export$55e463fa7bcd3469({
        points: points,
        options: {}
    });
}
function $815fd789f8127f09$var$getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas('line');
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function $815fd789f8127f09$var$addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first: first, last: last, point: point } = $815fd789f8127f09$var$findPoint(line, sourcePoint, 'x');
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function $815fd789f8127f09$var$findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, $7cc28eca4d136c06$export$21579262ef46735b)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first: first,
        last: last,
        point: point
    };
}
class $815fd789f8127f09$var$simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x: x, y: y, radius: radius } = this;
        bounds = bounds || {
            start: 0,
            end: (0, $7cc28eca4d136c06$export$971d5caa766a69d7)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x: x, y: y, radius: radius } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle: angle
        };
    }
}
function $815fd789f8127f09$var$_getTarget(source) {
    const { chart: chart, fill: fill, line: line } = source;
    if ((0, $7cc28eca4d136c06$export$39b482c5e57630a8)(fill)) return $815fd789f8127f09$var$getLineByIndex(chart, fill);
    if (fill === 'stack') return $815fd789f8127f09$var$_buildStackLine(source);
    if (fill === 'shape') return true;
    const boundary = $815fd789f8127f09$var$computeBoundary(source);
    if (boundary instanceof $815fd789f8127f09$var$simpleArc) return boundary;
    return $815fd789f8127f09$var$_createBoundaryLine(boundary, line);
}
function $815fd789f8127f09$var$getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function $815fd789f8127f09$var$computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return $815fd789f8127f09$var$computeCircularBoundary(source);
    return $815fd789f8127f09$var$computeLinearBoundary(source);
}
function $815fd789f8127f09$var$computeLinearBoundary(source) {
    const { scale: scale = {}, fill: fill } = source;
    const pixel = $815fd789f8127f09$var$_getTargetPixel(fill, scale);
    if ((0, $7cc28eca4d136c06$export$39b482c5e57630a8)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function $815fd789f8127f09$var$computeCircularBoundary(source) {
    const { scale: scale, fill: fill } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = $815fd789f8127f09$var$_getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new $815fd789f8127f09$var$simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function $815fd789f8127f09$var$_drawfill(ctx, source, area) {
    const target = $815fd789f8127f09$var$_getTarget(source);
    const { chart: chart, index: index, line: line, scale: scale, axis: axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above: above = color, below: below = color } = fillOption || {};
    const meta = chart.getDatasetMeta(index);
    const clip = (0, $7cc28eca4d136c06$export$995eb9fca571757)(chart, meta);
    if (target && line.points.length) {
        (0, $7cc28eca4d136c06$export$8743009a87fcb00f)(ctx, area);
        $815fd789f8127f09$var$doFill(ctx, {
            line: line,
            target: target,
            above: above,
            below: below,
            area: area,
            scale: scale,
            axis: axis,
            clip: clip
        });
        (0, $7cc28eca4d136c06$export$3d8c2f653ac9d0b9)(ctx);
    }
}
function $815fd789f8127f09$var$doFill(ctx, cfg) {
    const { line: line, target: target, above: above, below: below, area: area, scale: scale, clip: clip } = cfg;
    const property = line._loop ? 'angle' : cfg.axis;
    ctx.save();
    let fillColor = below;
    if (below !== above) {
        if (property === 'x') {
            $815fd789f8127f09$var$clipVertical(ctx, target, area.top);
            $815fd789f8127f09$var$fill(ctx, {
                line: line,
                target: target,
                color: above,
                scale: scale,
                property: property,
                clip: clip
            });
            ctx.restore();
            ctx.save();
            $815fd789f8127f09$var$clipVertical(ctx, target, area.bottom);
        } else if (property === 'y') {
            $815fd789f8127f09$var$clipHorizontal(ctx, target, area.left);
            $815fd789f8127f09$var$fill(ctx, {
                line: line,
                target: target,
                color: below,
                scale: scale,
                property: property,
                clip: clip
            });
            ctx.restore();
            ctx.save();
            $815fd789f8127f09$var$clipHorizontal(ctx, target, area.right);
            fillColor = above;
        }
    }
    $815fd789f8127f09$var$fill(ctx, {
        line: line,
        target: target,
        color: fillColor,
        scale: scale,
        property: property,
        clip: clip
    });
    ctx.restore();
}
function $815fd789f8127f09$var$clipVertical(ctx, target, clipY) {
    const { segments: segments, points: points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start: start, end: end } = segment;
        const firstPoint = points[start];
        const lastPoint = points[$815fd789f8127f09$var$_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function $815fd789f8127f09$var$clipHorizontal(ctx, target, clipX) {
    const { segments: segments, points: points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start: start, end: end } = segment;
        const firstPoint = points[start];
        const lastPoint = points[$815fd789f8127f09$var$_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(clipX, firstPoint.y);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(clipX, lastPoint.y);
    }
    ctx.lineTo(clipX, target.first().y);
    ctx.closePath();
    ctx.clip();
}
function $815fd789f8127f09$var$fill(ctx, cfg) {
    const { line: line, target: target, property: property, color: color, scale: scale, clip: clip } = cfg;
    const segments = $815fd789f8127f09$var$_segments(line, target, property);
    for (const { source: src, target: tgt, start: start, end: end } of segments){
        const { style: { backgroundColor: backgroundColor = color } = {} } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        $815fd789f8127f09$var$clipBounds(ctx, scale, clip, notShape && $815fd789f8127f09$var$_getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else $815fd789f8127f09$var$interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) $815fd789f8127f09$var$interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? 'evenodd' : 'nonzero');
        ctx.restore();
    }
}
function $815fd789f8127f09$var$clipBounds(ctx, scale, clip, bounds) {
    const chartArea = scale.chart.chartArea;
    const { property: property, start: start, end: end } = bounds || {};
    if (property === 'x' || property === 'y') {
        let left, top, right, bottom;
        if (property === 'x') {
            left = start;
            top = chartArea.top;
            right = end;
            bottom = chartArea.bottom;
        } else {
            left = chartArea.left;
            top = start;
            right = chartArea.right;
            bottom = end;
        }
        ctx.beginPath();
        if (clip) {
            left = Math.max(left, clip.left);
            right = Math.min(right, clip.right);
            top = Math.max(top, clip.top);
            bottom = Math.min(bottom, clip.bottom);
        }
        ctx.rect(left, top, right - left, bottom - top);
        ctx.clip();
    }
}
function $815fd789f8127f09$var$interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var $815fd789f8127f09$export$d19ba4d812bed757 = {
    id: 'filler',
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof $815fd789f8127f09$export$55e463fa7bcd3469) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: $815fd789f8127f09$var$_decodeFill(line, i, count),
                chart: chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line: line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = $815fd789f8127f09$var$_resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === 'beforeDraw';
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) $815fd789f8127f09$var$_drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== 'beforeDatasetsDraw') return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if ($815fd789f8127f09$var$_shouldApplyFill(source)) $815fd789f8127f09$var$_drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!$815fd789f8127f09$var$_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') return;
        $815fd789f8127f09$var$_drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: 'beforeDatasetDraw'
    }
};
const $815fd789f8127f09$var$getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight: boxHeight = fontSize, boxWidth: boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth: boxWidth,
        boxHeight: boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const $815fd789f8127f09$var$itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class $815fd789f8127f09$var$Legend extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options: options, ctx: ctx } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth: boxWidth, itemHeight: itemHeight } = $815fd789f8127f09$var$getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx: ctx, maxWidth: maxWidth, options: { labels: { padding: padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top: top,
                row: row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx: ctx, maxHeight: maxHeight, options: { labels: { padding: padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth: itemWidth, itemHeight: itemHeight } = $815fd789f8127f09$var$calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left: left,
                top: currentColHeight,
                col: col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes, options: { align: align, labels: { padding: padding }, rtl: rtl } } = this;
        const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes){
                if (hitbox.col !== col) {
                    col = hitbox.col;
                    top = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox.top = top;
                hitbox.left += this.left + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
                top += hitbox.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, $7cc28eca4d136c06$export$8743009a87fcb00f)(ctx, this);
            this._draw();
            (0, $7cc28eca4d136c06$export$3d8c2f653ac9d0b9)(ctx);
        }
    }
    _draw() {
        const { options: opts, columnSizes: columnSizes, lineWidths: lineWidths, ctx: ctx } = this;
        const { align: align, labels: labelOpts } = opts;
        const defaultColor = (0, $7cc28eca4d136c06$export$4368d992c4eafac0).color;
        const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(opts.rtl, this.left, this.width);
        const labelFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(labelOpts.font);
        const { padding: padding } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth: boxWidth, boxHeight: boxHeight, itemHeight: itemHeight } = $815fd789f8127f09$var$getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.lineCap, 'butt');
            ctx.lineDashOffset = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.lineJoin, 'miter');
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, $7cc28eca4d136c06$export$90a7f3efeed30595)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, $7cc28eca4d136c06$export$158acd800e1ef08b)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, $7cc28eca4d136c06$export$92108d983e8ee699)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, $7cc28eca4d136c06$export$9d398bebfec1c039)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, $7cc28eca4d136c06$export$890c4ad488842ce7)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else if (typeof legendItem.text !== 'string') {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += $815fd789f8127f09$var$calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
            } else cursor.y += lineHeight;
        });
        (0, $7cc28eca4d136c06$export$24baa2b76016ce0e)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(titleOpts.font);
        const titlePadding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, $7cc28eca4d136c06$export$3c2fa207a37baaea)(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(titleOpts.font);
        const titlePadding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, $7cc28eca4d136c06$export$21579262ef46735b)(x, this.left, this.right) && (0, $7cc28eca4d136c06$export$21579262ef46735b)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, $7cc28eca4d136c06$export$21579262ef46735b)(x, hitBox.left, hitBox.left + hitBox.width) && (0, $7cc28eca4d136c06$export$21579262ef46735b)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!$815fd789f8127f09$var$isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const previous = this._hoveredItem;
            const sameItem = $815fd789f8127f09$var$itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function $815fd789f8127f09$var$calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = $815fd789f8127f09$var$calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = $815fd789f8127f09$var$calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth: itemWidth,
        itemHeight: itemHeight
    };
}
function $815fd789f8127f09$var$calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== 'string') legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function $815fd789f8127f09$var$calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== 'string') itemHeight = $815fd789f8127f09$var$calculateLegendItemHeight(legendItem, fontLineHeight);
    return itemHeight;
}
function $815fd789f8127f09$var$calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
}
function $815fd789f8127f09$var$isListened(type, opts) {
    if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === 'click' || type === 'mouseup')) return true;
    return false;
}
var $815fd789f8127f09$export$ed247974535929c7 = {
    id: 'legend',
    _element: $815fd789f8127f09$var$Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new $815fd789f8127f09$var$Legend({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, legend, options);
        $815fd789f8127f09$export$1ecca0613f5e56d2.addBox(chart, legend);
    },
    stop (chart) {
        $815fd789f8127f09$export$1ecca0613f5e56d2.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle: usePointStyle, pointStyle: pointStyle, textAlign: textAlign, color: color, useBorderRadius: useBorderRadius, borderRadius: borderRadius } } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: 'center',
            text: ''
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith('on'),
        labels: {
            _scriptable: (name)=>![
                    'generateLabels',
                    'filter',
                    'sort'
                ].includes(name)
        }
    }
};
class $815fd789f8127f09$var$Title extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(opts.text) ? opts.text.length : 1;
        this._padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(opts.padding);
        const textSize = lineCount * (0, $7cc28eca4d136c06$export$34aec0b863436764)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
    }
    _drawArgs(offset) {
        const { top: top, left: left, bottom: bottom, right: right, options: options } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === 'left') {
                titleX = left + offset;
                titleY = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, bottom, top);
                rotation = (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, $7cc28eca4d136c06$export$ce26c07117d59d6a)(align, top, bottom);
                rotation = (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX: titleX,
            titleY: titleY,
            maxWidth: maxWidth,
            rotation: rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, $7cc28eca4d136c06$export$34aec0b863436764)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX: titleX, titleY: titleY, maxWidth: maxWidth, rotation: rotation } = this._drawArgs(offset);
        (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: (0, $7cc28eca4d136c06$export$3c2fa207a37baaea)(opts.align),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function $815fd789f8127f09$var$createTitle(chart, titleOpts) {
    const title = new $815fd789f8127f09$var$Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart: chart
    });
    $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, title, titleOpts);
    $815fd789f8127f09$export$1ecca0613f5e56d2.addBox(chart, title);
    chart.titleBlock = title;
}
var $815fd789f8127f09$export$f99233281efd08a0 = {
    id: 'title',
    _element: $815fd789f8127f09$var$Title,
    start (chart, _args, options) {
        $815fd789f8127f09$var$createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        $815fd789f8127f09$export$1ecca0613f5e56d2.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'bold'
        },
        fullSize: true,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2000
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $815fd789f8127f09$var$map = new WeakMap();
var $815fd789f8127f09$export$d5c56664638992a4 = {
    id: 'subtitle',
    start (chart, _args, options) {
        const title = new $815fd789f8127f09$var$Title({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, title, options);
        $815fd789f8127f09$export$1ecca0613f5e56d2.addBox(chart, title);
        $815fd789f8127f09$var$map.set(chart, title);
    },
    stop (chart) {
        $815fd789f8127f09$export$1ecca0613f5e56d2.removeBox(chart, $815fd789f8127f09$var$map.get(chart));
        $815fd789f8127f09$var$map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = $815fd789f8127f09$var$map.get(chart);
        $815fd789f8127f09$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'normal'
        },
        fullSize: true,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $815fd789f8127f09$var$positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let xSet = new Set();
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                xSet.add(pos.x);
                y += pos.y;
                ++count;
            }
        }
        if (count === 0 || xSet.size === 0) return false;
        const xAverage = [
            ...xSet
        ].reduce((a, b)=>a + b) / xSet.size;
        return {
            x: xAverage,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, $7cc28eca4d136c06$export$cf2f7c5792f80b46)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x: x,
            y: y
        };
    }
};
function $815fd789f8127f09$var$pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function $815fd789f8127f09$var$splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) return str.split('\n');
    return str;
}
function $815fd789f8127f09$var$createTooltipItem(chart, item) {
    const { element: element, datasetIndex: datasetIndex, index: index } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label: label, value: value } = controller.getLabelAndValue(index);
    return {
        chart: chart,
        label: label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex: datasetIndex,
        element: element
    };
}
function $815fd789f8127f09$var$getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body: body, footer: footer, title: title } = tooltip;
    const { boxWidth: boxWidth, boxHeight: boxHeight } = options;
    const bodyFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.bodyFont);
    const titleFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.titleFont);
    const footerFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, $7cc28eca4d136c06$export$d66501df72047452)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, $7cc28eca4d136c06$export$d66501df72047452)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, $7cc28eca4d136c06$export$d66501df72047452)(body, (bodyItem)=>{
        (0, $7cc28eca4d136c06$export$d66501df72047452)(bodyItem.before, maxLineWidth);
        (0, $7cc28eca4d136c06$export$d66501df72047452)(bodyItem.lines, maxLineWidth);
        (0, $7cc28eca4d136c06$export$d66501df72047452)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, $7cc28eca4d136c06$export$d66501df72047452)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width: width,
        height: height
    };
}
function $815fd789f8127f09$var$determineYAlign(chart, size) {
    const { y: y, height: height } = size;
    if (y < height / 2) return 'top';
    else if (y > chart.height - height / 2) return 'bottom';
    return 'center';
}
function $815fd789f8127f09$var$doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x: x, width: width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === 'left' && x + width + caret > chart.width) return true;
    if (xAlign === 'right' && x - width - caret < 0) return true;
}
function $815fd789f8127f09$var$determineXAlign(chart, options, size, yAlign) {
    const { x: x, width: width } = size;
    const { width: chartWidth, chartArea: { left: left, right: right } } = chart;
    let xAlign = 'center';
    if (yAlign === 'center') xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    else if (x <= width / 2) xAlign = 'left';
    else if (x >= chartWidth - width / 2) xAlign = 'right';
    if ($815fd789f8127f09$var$doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = 'center';
    return xAlign;
}
function $815fd789f8127f09$var$determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || $815fd789f8127f09$var$determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || $815fd789f8127f09$var$determineXAlign(chart, options, size, yAlign),
        yAlign: yAlign
    };
}
function $815fd789f8127f09$var$alignX(size, xAlign) {
    let { x: x, width: width } = size;
    if (xAlign === 'right') x -= width;
    else if (xAlign === 'center') x -= width / 2;
    return x;
}
function $815fd789f8127f09$var$alignY(size, yAlign, paddingAndSize) {
    let { y: y, height: height } = size;
    if (yAlign === 'top') y += paddingAndSize;
    else if (yAlign === 'bottom') y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function $815fd789f8127f09$var$getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize: caretSize, caretPadding: caretPadding, cornerRadius: cornerRadius } = options;
    const { xAlign: xAlign, yAlign: yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight } = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(cornerRadius);
    let x = $815fd789f8127f09$var$alignX(size, xAlign);
    const y = $815fd789f8127f09$var$alignY(size, yAlign, paddingAndSize);
    if (yAlign === 'center') {
        if (xAlign === 'left') x += paddingAndSize;
        else if (xAlign === 'right') x -= paddingAndSize;
    } else if (xAlign === 'left') x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === 'right') x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(x, 0, chart.width - size.width),
        y: (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(y, 0, chart.height - size.height)
    };
}
function $815fd789f8127f09$var$getAlignedX(tooltip, align, options) {
    const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function $815fd789f8127f09$var$getBeforeAfterBodyLines(callback) {
    return $815fd789f8127f09$var$pushOrConcat([], $815fd789f8127f09$var$splitNewlines(callback));
}
function $815fd789f8127f09$var$createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        tooltip: tooltip,
        tooltipItems: tooltipItems,
        type: 'tooltip'
    });
}
function $815fd789f8127f09$var$overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const $815fd789f8127f09$var$defaultCallbacks = {
    beforeTitle: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === 'dataset') return item.dataset.label || '';
            else if (item.label) return item.label;
            else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
        }
        return '';
    },
    afterTitle: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    beforeBody: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    beforeLabel: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    label (tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        let label = tooltipItem.dataset.label || '';
        if (label) label += ': ';
        const value = tooltipItem.formattedValue;
        if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value)) label += value;
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    afterBody: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    beforeFooter: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    footer: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346),
    afterFooter: (0, $7cc28eca4d136c06$export$53a70dd1ebbae346)
};
function $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === 'undefined') return $815fd789f8127f09$var$defaultCallbacks[name].call(ctx, arg);
    return result;
}
class $815fd789f8127f09$var$Tooltip extends $815fd789f8127f09$export$db77ccec0bb4ccac {
    static positioners = $815fd789f8127f09$var$positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new $815fd789f8127f09$export$8ab227dac26677d(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = $815fd789f8127f09$var$createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks: callbacks } = options;
        const beforeTitle = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
        const title = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'title', this, context);
        const afterTitle = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
        let lines = [];
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(beforeTitle));
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(title));
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return $815fd789f8127f09$var$getBeforeAfterBodyLines($815fd789f8127f09$var$invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks: callbacks } = options;
        const bodyItems = [];
        (0, $7cc28eca4d136c06$export$d66501df72047452)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = $815fd789f8127f09$var$overrideCallbacks(callbacks, context);
            $815fd789f8127f09$var$pushOrConcat(bodyItem.before, $815fd789f8127f09$var$splitNewlines($815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
            $815fd789f8127f09$var$pushOrConcat(bodyItem.lines, $815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'label', this, context));
            $815fd789f8127f09$var$pushOrConcat(bodyItem.after, $815fd789f8127f09$var$splitNewlines($815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return $815fd789f8127f09$var$getBeforeAfterBodyLines($815fd789f8127f09$var$invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks: callbacks } = options;
        const beforeFooter = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
        const footer = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
        const afterFooter = $815fd789f8127f09$var$invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
        let lines = [];
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(beforeFooter));
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(footer));
        lines = $815fd789f8127f09$var$pushOrConcat(lines, $815fd789f8127f09$var$splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push($815fd789f8127f09$var$createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, $7cc28eca4d136c06$export$d66501df72047452)(tooltipItems, (context)=>{
            const scoped = $815fd789f8127f09$var$overrideCallbacks(options.callbacks, context);
            labelColors.push($815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'labelColor', this, context));
            labelPointStyles.push($815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
            labelTextColors.push($815fd789f8127f09$var$invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = $815fd789f8127f09$var$positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = $815fd789f8127f09$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = $815fd789f8127f09$var$determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = $815fd789f8127f09$var$getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign: xAlign, yAlign: yAlign } = this;
        const { caretSize: caretSize, cornerRadius: cornerRadius } = options;
        const { topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight } = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(cornerRadius);
        const { x: ptX, y: ptY } = tooltipPoint;
        const { width: width, height: height } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === 'center') {
            y2 = ptY + height / 2;
            if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === 'left') x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === 'right') x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1: x1,
            x2: x2,
            x3: x3,
            y1: y1,
            y2: y2,
            y3: y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(options.rtl, this.x, this.width);
            pt.x = $815fd789f8127f09$var$getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = 'middle';
            titleFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColor = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight: boxHeight, boxWidth: boxWidth } = options;
        const bodyFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.bodyFont);
        const colorX = $815fd789f8127f09$var$getAlignedX(this, 'left', options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, $7cc28eca4d136c06$export$d66dc83d8cfc8dd)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColor.borderColor;
            ctx.fillStyle = labelColor.backgroundColor;
            (0, $7cc28eca4d136c06$export$d66dc83d8cfc8dd)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
            ctx.strokeStyle = labelColor.borderColor;
            ctx.setLineDash(labelColor.borderDash || []);
            ctx.lineDashOffset = labelColor.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
            const borderRadius = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(labelColor.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, $7cc28eca4d136c06$export$92108d983e8ee699)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.beginPath();
                (0, $7cc28eca4d136c06$export$92108d983e8ee699)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body: body } = this;
        const { bodySpacing: bodySpacing, bodyAlign: bodyAlign, displayColors: displayColors, boxHeight: boxHeight, boxWidth: boxWidth, boxPadding: boxPadding } = options;
        const bodyFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = $815fd789f8127f09$var$getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, $7cc28eca4d136c06$export$d66501df72047452)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, $7cc28eca4d136c06$export$d66501df72047452)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, $7cc28eca4d136c06$export$d66501df72047452)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, $7cc28eca4d136c06$export$91c6e00c14e7e6fd)(options.rtl, this.x, this.width);
            pt.x = $815fd789f8127f09$var$getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = 'middle';
            footerFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign: xAlign, yAlign: yAlign } = this;
        const { x: x, y: y } = pt;
        const { width: width, height: height } = tooltipSize;
        const { topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight } = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === 'top') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === 'center' && xAlign === 'right') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === 'bottom') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === 'center' && xAlign === 'left') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = $815fd789f8127f09$var$positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = $815fd789f8127f09$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = $815fd789f8127f09$var$determineAlignment(chart, options, positionAndSize);
            const point = $815fd789f8127f09$var$getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, $7cc28eca4d136c06$export$9d398bebfec1c039)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, $7cc28eca4d136c06$export$24baa2b76016ce0e)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex: datasetIndex, index: index })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('Cannot find a dataset at index ' + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
            };
        });
        const changed = !(0, $7cc28eca4d136c06$export$f38c853ae54ed474)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, $7cc28eca4d136c06$export$f38c853ae54ed474)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive.filter((i)=>this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== undefined);
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX: caretX, caretY: caretY, options: options } = this;
        const position = $815fd789f8127f09$var$positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var $815fd789f8127f09$export$28c660c63b792dea = {
    id: 'tooltip',
    _element: $815fd789f8127f09$var$Tooltip,
    positioners: $815fd789f8127f09$var$positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new $815fd789f8127f09$var$Tooltip({
            chart: chart,
            options: options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip: tooltip
            };
            if (chart.notifyPlugins('beforeTooltipDraw', {
                ...args,
                cancelable: true
            }) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins('afterTooltipDraw', args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: {
            weight: 'bold'
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: 'bold'
        },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: true,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: 'easeOutQuart'
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'width',
                    'height',
                    'caretX',
                    'caretY'
                ]
            },
            opacity: {
                easing: 'linear',
                duration: 200
            }
        },
        callbacks: $815fd789f8127f09$var$defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: 'font',
        footerFont: 'font',
        titleFont: 'font'
    },
    descriptors: {
        _scriptable: (name)=>name !== 'filter' && name !== 'itemSort' && name !== 'external',
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: 'animation'
        }
    },
    additionalOptionScopes: [
        'interaction'
    ]
};
var $815fd789f8127f09$export$8b3ca321c77fdea6 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Colors: $815fd789f8127f09$export$c537fa0d021d010b,
    Decimation: $815fd789f8127f09$export$be17f937e9aa7533,
    Filler: $815fd789f8127f09$export$d19ba4d812bed757,
    Legend: $815fd789f8127f09$export$ed247974535929c7,
    SubTitle: $815fd789f8127f09$export$d5c56664638992a4,
    Title: $815fd789f8127f09$export$f99233281efd08a0,
    Tooltip: $815fd789f8127f09$export$28c660c63b792dea
});
const $815fd789f8127f09$var$addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === 'string') {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index: index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function $815fd789f8127f09$var$findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return $815fd789f8127f09$var$addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const $815fd789f8127f09$var$validIndex = (index, max)=>index === null ? null : (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(Math.round(index), 0, max);
function $815fd789f8127f09$var$_getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) return labels[value];
    return value;
}
class $815fd789f8127f09$export$29e663ba4d09fe7 extends $815fd789f8127f09$export$d60cfc58d3c358b6 {
    static id = 'category';
    static defaults = {
        ticks: {
            callback: $815fd789f8127f09$var$_getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index: index, label: label } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : $815fd789f8127f09$var$findOrAddLabel(labels, raw, (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(index, raw), this._addedLabels);
        return $815fd789f8127f09$var$validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined: minDefined, maxDefined: maxDefined } = this.getUserBounds();
        let { min: min, max: max } = this.getMinMax(true);
        if (this.options.bounds === 'ticks') {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value: value
        });
        return ticks;
    }
    getLabelForValue(value) {
        return $815fd789f8127f09$var$_getLabelForValue.call(this, value);
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== 'number') value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
function $815fd789f8127f09$var$generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds: bounds, step: step, min: min, max: max, precision: precision, count: count, maxTicks: maxTicks, maxDigits: maxDigits, includeBounds: includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(min);
    const maxDefined = !(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(max);
    const countDefined = !(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, $7cc28eca4d136c06$export$b9a6b53f9be3734)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, $7cc28eca4d136c06$export$b9a6b53f9be3734)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === 'ticks') {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, $7cc28eca4d136c06$export$a05254e7c3aeba6e)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, $7cc28eca4d136c06$export$23ebac1979863676)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, $7cc28eca4d136c06$export$91477dc880baac21)(spacing), (0, $7cc28eca4d136c06$export$91477dc880baac21)(niceMin));
    factor = Math.pow(10, (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, $7cc28eca4d136c06$export$23ebac1979863676)(Math.round((niceMin + j * spacing) * factor) / factor, min, $815fd789f8127f09$var$relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j){
        const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
        if (maxDefined && tickValue > max) break;
        ticks.push({
            value: tickValue
        });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, $7cc28eca4d136c06$export$23ebac1979863676)(ticks[ticks.length - 1].value, max, $815fd789f8127f09$var$relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function $815fd789f8127f09$var$relativeLabelSize(value, minSpacing, { horizontal: horizontal, minRotation: minRotation }) {
    const rad = (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ('' + value).length;
    return Math.min(minSpacing / ratio, length);
}
class $815fd789f8127f09$var$LinearScaleBase extends $815fd789f8127f09$export$d60cfc58d3c358b6 {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(raw)) return null;
        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero: beginAtZero } = this.options;
        const { minDefined: minDefined, maxDefined: maxDefined } = this.getUserBounds();
        let { min: min, max: max } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(min);
            const maxSign = (0, $7cc28eca4d136c06$export$2408f22a0fab9ae5)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit: maxTicksLimit, stepSize: stepSize } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks: maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = $815fd789f8127f09$var$generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === 'ticks') (0, $7cc28eca4d136c06$export$a33b77bbdbb8366c)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, $7cc28eca4d136c06$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class $815fd789f8127f09$export$e7f4e5e8656f0b93 extends $815fd789f8127f09$var$LinearScaleBase {
    static id = 'linear';
    static defaults = {
        ticks: {
            callback: (0, $7cc28eca4d136c06$export$9f4f30ee63539e24).formatters.numeric
        }
    };
    determineDataLimits() {
        const { min: min, max: max } = this.getMinMax(true);
        this.min = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(min) ? min : 0;
        this.max = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
const $815fd789f8127f09$var$log10Floor = (v)=>Math.floor((0, $7cc28eca4d136c06$export$faec65b429be379)(v));
const $815fd789f8127f09$var$changeExponent = (v, m)=>Math.pow(10, $815fd789f8127f09$var$log10Floor(v) + m);
function $815fd789f8127f09$var$isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, $815fd789f8127f09$var$log10Floor(tickVal));
    return remain === 1;
}
function $815fd789f8127f09$var$steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function $815fd789f8127f09$var$startExp(min, max) {
    const range = max - min;
    let rangeExp = $815fd789f8127f09$var$log10Floor(range);
    while($815fd789f8127f09$var$steps(min, max, rangeExp) > 10)rangeExp++;
    while($815fd789f8127f09$var$steps(min, max, rangeExp) < 10)rangeExp--;
    return Math.min(rangeExp, $815fd789f8127f09$var$log10Floor(min));
}
function $815fd789f8127f09$var$generateTicks(generationOptions, { min: min, max: max }) {
    min = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(generationOptions.min, min);
    const ticks = [];
    const minExp = $815fd789f8127f09$var$log10Floor(min);
    let exp = $815fd789f8127f09$var$startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value: value,
            major: $815fd789f8127f09$var$isMajor(value),
            significand: significand
        });
        if (significand >= 10) significand = significand < 15 ? 15 : 20;
        else significand++;
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = (0, $7cc28eca4d136c06$export$c4ce752e73470fba)(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: $815fd789f8127f09$var$isMajor(lastTick),
        significand: significand
    });
    return ticks;
}
class $815fd789f8127f09$export$85295eaf7cb3ac3e extends $815fd789f8127f09$export$d60cfc58d3c358b6 {
    static id = 'logarithmic';
    static defaults = {
        ticks: {
            callback: (0, $7cc28eca4d136c06$export$9f4f30ee63539e24).formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = $815fd789f8127f09$var$LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min: min, max: max } = this.getMinMax(true);
        this.min = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(min) ? Math.max(0, min) : null;
        this.max = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        if (this._zero && this.min !== this._suggestedMin && !(0, $7cc28eca4d136c06$export$39b482c5e57630a8)(this._userMin)) this.min = min === $815fd789f8127f09$var$changeExponent(this.min, 0) ? $815fd789f8127f09$var$changeExponent(this.min, -1) : $815fd789f8127f09$var$changeExponent(this.min, 0);
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: minDefined, maxDefined: maxDefined } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin($815fd789f8127f09$var$changeExponent(min, -1));
                setMax($815fd789f8127f09$var$changeExponent(max, 1));
            }
        }
        if (min <= 0) setMin($815fd789f8127f09$var$changeExponent(max, -1));
        if (max <= 0) setMax($815fd789f8127f09$var$changeExponent(min, 1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = $815fd789f8127f09$var$generateTicks(generationOptions, this);
        if (opts.bounds === 'ticks') (0, $7cc28eca4d136c06$export$a33b77bbdbb8366c)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? '0' : (0, $7cc28eca4d136c06$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, $7cc28eca4d136c06$export$faec65b429be379)(start);
        this._valueRange = (0, $7cc28eca4d136c06$export$faec65b429be379)(this.max) - (0, $7cc28eca4d136c06$export$faec65b429be379)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, $7cc28eca4d136c06$export$faec65b429be379)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
function $815fd789f8127f09$var$getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(tickOpts.backdropPadding);
        return (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(tickOpts.font && tickOpts.font.size, (0, $7cc28eca4d136c06$export$4368d992c4eafac0).font.size) + padding.height;
    }
    return 0;
}
function $815fd789f8127f09$var$measureLabelSize(ctx, font, label) {
    label = (0, $7cc28eca4d136c06$export$8b22cf2602fb60ce)(label) ? label : [
        label
    ];
    return {
        w: (0, $7cc28eca4d136c06$export$c03999cb2f36933f)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function $815fd789f8127f09$var$determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function $815fd789f8127f09$var$fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(opts.font);
        const textSize = $815fd789f8127f09$var$measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, $7cc28eca4d136c06$export$3a6d5c9ae78a2c08)(angleRadians));
        const hLimits = $815fd789f8127f09$var$determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = $815fd789f8127f09$var$determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        $815fd789f8127f09$var$updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = $815fd789f8127f09$var$buildPointLabelItems(scale, labelSizes, padding);
}
function $815fd789f8127f09$var$updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function $815fd789f8127f09$var$createPointLabelItem(scale, index, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra: extra, additionalAngle: additionalAngle, padding: padding, size: size } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round((0, $7cc28eca4d136c06$export$3a6d5c9ae78a2c08)((0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(pointLabelPosition.angle + (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd))));
    const y = $815fd789f8127f09$var$yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = $815fd789f8127f09$var$getTextAlignForAngle(angle);
    const left = $815fd789f8127f09$var$leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
        visible: true,
        x: pointLabelPosition.x,
        y: y,
        textAlign: textAlign,
        left: left,
        top: y,
        right: left + size.w,
        bottom: y + size.h
    };
}
function $815fd789f8127f09$var$isNotOverlapped(item, area) {
    if (!area) return true;
    const { left: left, top: top, right: right, bottom: bottom } = item;
    const apexesInArea = (0, $7cc28eca4d136c06$export$e7094788287c5e9b)({
        x: left,
        y: top
    }, area) || (0, $7cc28eca4d136c06$export$e7094788287c5e9b)({
        x: left,
        y: bottom
    }, area) || (0, $7cc28eca4d136c06$export$e7094788287c5e9b)({
        x: right,
        y: top
    }, area) || (0, $7cc28eca4d136c06$export$e7094788287c5e9b)({
        x: right,
        y: bottom
    }, area);
    return !apexesInArea;
}
function $815fd789f8127f09$var$buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels: centerPointLabels, display: display } = opts.pointLabels;
    const itemOpts = {
        extra: $815fd789f8127f09$var$getTickBackdropHeight(opts) / 2,
        additionalAngle: centerPointLabels ? (0, $7cc28eca4d136c06$export$56c0d5a1e737357d) / valueCount : 0
    };
    let area;
    for(let i = 0; i < valueCount; i++){
        itemOpts.padding = padding[i];
        itemOpts.size = labelSizes[i];
        const item = $815fd789f8127f09$var$createPointLabelItem(scale, i, itemOpts);
        items.push(item);
        if (display === 'auto') {
            item.visible = $815fd789f8127f09$var$isNotOverlapped(item, area);
            if (item.visible) area = item;
        }
    }
    return items;
}
function $815fd789f8127f09$var$getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return 'center';
    else if (angle < 180) return 'left';
    return 'right';
}
function $815fd789f8127f09$var$leftForTextAlign(x, w, align) {
    if (align === 'right') x -= w;
    else if (align === 'center') x -= w / 2;
    return x;
}
function $815fd789f8127f09$var$yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function $815fd789f8127f09$var$drawPointLabelBox(ctx, opts, item) {
    const { left: left, top: top, right: right, bottom: bottom } = item;
    const { backdropColor: backdropColor } = opts;
    if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(backdropColor)) {
        const borderRadius = (0, $7cc28eca4d136c06$export$28f7fcd39efa255)(opts.borderRadius);
        const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(opts.backdropPadding);
        ctx.fillStyle = backdropColor;
        const backdropLeft = left - padding.left;
        const backdropTop = top - padding.top;
        const backdropWidth = right - left + padding.width;
        const backdropHeight = bottom - top + padding.height;
        if (Object.values(borderRadius).some((v)=>v !== 0)) {
            ctx.beginPath();
            (0, $7cc28eca4d136c06$export$92108d983e8ee699)(ctx, {
                x: backdropLeft,
                y: backdropTop,
                w: backdropWidth,
                h: backdropHeight,
                radius: borderRadius
            });
            ctx.fill();
        } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
    }
}
function $815fd789f8127f09$var$drawPointLabels(scale, labelCount) {
    const { ctx: ctx, options: { pointLabels: pointLabels } } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const item = scale._pointLabelItems[i];
        if (!item.visible) continue;
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        $815fd789f8127f09$var$drawPointLabelBox(ctx, optsAtIndex, item);
        const plFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(optsAtIndex.font);
        const { x: x, y: y, textAlign: textAlign } = item;
        (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
        });
    }
}
function $815fd789f8127f09$var$pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx: ctx } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, $7cc28eca4d136c06$export$971d5caa766a69d7));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function $815fd789f8127f09$var$drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color, lineWidth: lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash || []);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    $815fd789f8127f09$var$pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function $815fd789f8127f09$var$createPointLabelContext(parent, index, label) {
    return (0, $7cc28eca4d136c06$export$35e795649ee09318)(parent, {
        label: label,
        index: index,
        type: 'pointLabel'
    });
}
class $815fd789f8127f09$export$cfafc36d95386d38 extends $815fd789f8127f09$var$LinearScaleBase {
    static id = 'radialLinear';
    static defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: (0, $7cc28eca4d136c06$export$9f4f30ee63539e24).formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    };
    static descriptors = {
        angleLines: {
            _fallback: 'grid'
        }
    };
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)($815fd789f8127f09$var$getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min: min, max: max } = this.getMinMax(false);
        this.min = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : 0;
        this.max = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / $815fd789f8127f09$var$getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        $815fd789f8127f09$var$LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : '';
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) $815fd789f8127f09$var$fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, $7cc28eca4d136c06$export$971d5caa766a69d7) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, $7cc28eca4d136c06$export$ab83b03e4111b1d0)(index * angleMultiplier + (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return $815fd789f8127f09$var$createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, $7cc28eca4d136c06$export$7f8ddf7c7c20b3cd) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle: angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left: left, top: top, right: right, bottom: bottom } = this._pointLabelItems[index];
        return {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        };
    }
    drawBackground() {
        const { backgroundColor: backgroundColor, grid: { circular: circular } } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            $815fd789f8127f09$var$pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines: angleLines, grid: grid, border: border } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) $815fd789f8127f09$var$drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0 || index === 0 && this.min < 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const context = this.getContext(index);
                const optsAtIndex = grid.setContext(context);
                const optsAtIndexBorder = border.setContext(context);
                $815fd789f8127f09$var$drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color: color, lineWidth: lineWidth } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && this.min >= 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, $7cc28eca4d136c06$export$34aec0b863436764)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, $7cc28eca4d136c06$export$dc98b0b04f4c7758)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color,
                strokeColor: optsAtIndex.textStrokeColor,
                strokeWidth: optsAtIndex.textStrokeWidth
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
const $815fd789f8127f09$var$INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const $815fd789f8127f09$var$UNITS = /* #__PURE__ */ Object.keys($815fd789f8127f09$var$INTERVALS);
function $815fd789f8127f09$var$sorter(a, b) {
    return a - b;
}
function $815fd789f8127f09$var$parse(scale, input) {
    if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(input)) return null;
    const adapter = scale._adapter;
    const { parser: parser, round: round, isoWeekday: isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === 'function') value = parser(value);
    if (!(0, $7cc28eca4d136c06$export$39b482c5e57630a8)(value)) value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === 'week' && ((0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function $815fd789f8127f09$var$determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = $815fd789f8127f09$var$UNITS.length;
    for(let i = $815fd789f8127f09$var$UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = $815fd789f8127f09$var$INTERVALS[$815fd789f8127f09$var$UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return $815fd789f8127f09$var$UNITS[i];
    }
    return $815fd789f8127f09$var$UNITS[ilen - 1];
}
function $815fd789f8127f09$var$determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = $815fd789f8127f09$var$UNITS.length - 1; i >= $815fd789f8127f09$var$UNITS.indexOf(minUnit); i--){
        const unit = $815fd789f8127f09$var$UNITS[i];
        if ($815fd789f8127f09$var$INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return $815fd789f8127f09$var$UNITS[minUnit ? $815fd789f8127f09$var$UNITS.indexOf(minUnit) : 0];
}
function $815fd789f8127f09$var$determineMajorUnit(unit) {
    for(let i = $815fd789f8127f09$var$UNITS.indexOf(unit) + 1, ilen = $815fd789f8127f09$var$UNITS.length; i < ilen; ++i){
        if ($815fd789f8127f09$var$INTERVALS[$815fd789f8127f09$var$UNITS[i]].common) return $815fd789f8127f09$var$UNITS[i];
    }
}
function $815fd789f8127f09$var$addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo: lo, hi: hi } = (0, $7cc28eca4d136c06$export$f96d196f7728bb5)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function $815fd789f8127f09$var$setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function $815fd789f8127f09$var$ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value: value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : $815fd789f8127f09$var$setMajorTicks(scale, ticks, map, majorUnit);
}
class $815fd789f8127f09$export$a894c72689ff3ec extends $815fd789f8127f09$export$d60cfc58d3c358b6 {
    static id = 'time';
    static defaults = {
        bounds: 'data',
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
            source: 'auto',
            callback: false,
            major: {
                enabled: false
            }
        }
    };
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = 'day';
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new $815fd789f8127f09$export$f32766ea09ec8bc4._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, $7cc28eca4d136c06$export$555508cbc6add439)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return $815fd789f8127f09$var$parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || 'day';
        let { min: min, max: max, minDefined: minDefined, maxDefined: maxDefined } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') _applyBounds(this.getMinMax(false));
        }
        min = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, $7cc28eca4d136c06$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min: min,
            max: max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === 'ticks' && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, $7cc28eca4d136c06$export$2ed0fc6709e59212)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? $815fd789f8127f09$var$determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : $815fd789f8127f09$var$determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : $815fd789f8127f09$var$determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return $815fd789f8127f09$var$ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(start, 0, limit);
        end = (0, $7cc28eca4d136c06$export$25ce5a424b770e84)(end, 0, limit);
        this._offsets = {
            start: start,
            end: end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || $815fd789f8127f09$var$determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)(options.ticks.stepSize, 1);
        const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, $7cc28eca4d136c06$export$d141bba7fdc215a3)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, 'isoWeek', weekday);
        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)$815fd789f8127f09$var$addTick(ticks, time, timestamps);
        if (time === max || options.bounds === 'ticks' || count === 1) $815fd789f8127f09$var$addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort($815fd789f8127f09$var$sorter).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) return (0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(formatter, [
            time,
            index,
            ticks
        ], this);
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, $7cc28eca4d136c06$export$625550452a3fa3ec)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, $815fd789f8127f09$var$ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push($815fd789f8127f09$var$parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, $7cc28eca4d136c06$export$71511d61b312f219)(values.sort($815fd789f8127f09$var$sorter));
    }
}
function $815fd789f8127f09$var$interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo: lo, hi: hi } = (0, $7cc28eca4d136c06$export$ef35774e6d314e91)(table, 'pos', val));
        ({ pos: prevSource, time: prevTarget } = table[lo]);
        ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo: lo, hi: hi } = (0, $7cc28eca4d136c06$export$ef35774e6d314e91)(table, 'time', val));
        ({ time: prevSource, pos: prevTarget } = table[lo]);
        ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class $815fd789f8127f09$export$85df64a8eb6dc986 extends $815fd789f8127f09$export$a894c72689ff3ec {
    static id = 'timeseries';
    static defaults = $815fd789f8127f09$export$a894c72689ff3ec.defaults;
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = $815fd789f8127f09$var$interpolate(table, this.min);
        this._tableRange = $815fd789f8127f09$var$interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min: min, max: max } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _generate() {
        const min = this.min;
        const max = this.max;
        let timestamps = super.getDataTimestamps();
        if (!timestamps.includes(min) || !timestamps.length) timestamps.splice(0, 0, min);
        if (!timestamps.includes(max) || timestamps.length === 1) timestamps.push(max);
        return timestamps.sort((a, b)=>a - b);
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return ($815fd789f8127f09$var$interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return $815fd789f8127f09$var$interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
var $815fd789f8127f09$export$bcac1c16f1530ec2 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: $815fd789f8127f09$export$29e663ba4d09fe7,
    LinearScale: $815fd789f8127f09$export$e7f4e5e8656f0b93,
    LogarithmicScale: $815fd789f8127f09$export$85295eaf7cb3ac3e,
    RadialLinearScale: $815fd789f8127f09$export$cfafc36d95386d38,
    TimeScale: $815fd789f8127f09$export$a894c72689ff3ec,
    TimeSeriesScale: $815fd789f8127f09$export$85df64a8eb6dc986
});
const $815fd789f8127f09$export$e8959e79e3af550f = [
    $815fd789f8127f09$export$a6506504f799c5d5,
    $815fd789f8127f09$export$7a5d735b2ab6389d,
    $815fd789f8127f09$export$8b3ca321c77fdea6,
    $815fd789f8127f09$export$bcac1c16f1530ec2
];


var $1203a5d4981d9f1e$var$devicePixelRatio = function() {
    if (typeof window !== 'undefined') {
        if (window.devicePixelRatio) return window.devicePixelRatio;
        // devicePixelRatio is undefined on IE10
        // https://stackoverflow.com/a/20204180/8837887
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85
        var screen = window.screen;
        if (screen) return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
    }
    return 1;
}();
var $1203a5d4981d9f1e$var$utils = {
    // @todo move this in Chart.helpers.toTextLines
    toTextLines: function(inputs) {
        var lines = [];
        var input;
        inputs = [].concat(inputs);
        while(inputs.length){
            input = inputs.pop();
            if (typeof input === 'string') lines.unshift.apply(lines, input.split('\n'));
            else if (Array.isArray(input)) inputs.push.apply(inputs, input);
            else if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(inputs)) lines.unshift('' + input);
        }
        return lines;
    },
    // @todo move this in Chart.helpers.canvas.textSize
    // @todo cache calls of measureText if font doesn't change?!
    textSize: function(ctx, lines, font) {
        var items = [].concat(lines);
        var ilen = items.length;
        var prev = ctx.font;
        var width = 0;
        var i;
        ctx.font = font.string;
        for(i = 0; i < ilen; ++i)width = Math.max(ctx.measureText(items[i]).width, width);
        ctx.font = prev;
        return {
            height: ilen * font.lineHeight,
            width: width
        };
    },
    /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */ bound: function(min, value, max) {
        return Math.max(min, Math.min(value, max));
    },
    /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */ arrayDiff: function(a0, a1) {
        var prev = a0.slice();
        var updates = [];
        var i, j, ilen, v;
        for(i = 0, ilen = a1.length; i < ilen; ++i){
            v = a1[i];
            j = prev.indexOf(v);
            if (j === -1) updates.push([
                v,
                1
            ]);
            else prev.splice(j, 1);
        }
        for(i = 0, ilen = prev.length; i < ilen; ++i)updates.push([
            prev[i],
            -1
        ]);
        return updates;
    },
    /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */ rasterize: function(v) {
        return Math.round(v * $1203a5d4981d9f1e$var$devicePixelRatio) / $1203a5d4981d9f1e$var$devicePixelRatio;
    }
};
function $1203a5d4981d9f1e$var$orient(point, origin) {
    var x0 = origin.x;
    var y0 = origin.y;
    if (x0 === null) return {
        x: 0,
        y: -1
    };
    if (y0 === null) return {
        x: 1,
        y: 0
    };
    var dx = point.x - x0;
    var dy = point.y - y0;
    var ln = Math.sqrt(dx * dx + dy * dy);
    return {
        x: ln ? dx / ln : 0,
        y: ln ? dy / ln : -1
    };
}
function $1203a5d4981d9f1e$var$aligned(x, y, vx, vy, align) {
    switch(align){
        case 'center':
            vx = vy = 0;
            break;
        case 'bottom':
            vx = 0;
            vy = 1;
            break;
        case 'right':
            vx = 1;
            vy = 0;
            break;
        case 'left':
            vx = -1;
            vy = 0;
            break;
        case 'top':
            vx = 0;
            vy = -1;
            break;
        case 'start':
            vx = -vx;
            vy = -vy;
            break;
        case 'end':
            break;
        default:
            // clockwise rotation (in degree)
            align *= Math.PI / 180;
            vx = Math.cos(align);
            vy = Math.sin(align);
            break;
    }
    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy
    };
}
// Line clipping (Cohen–Sutherland algorithm)
// https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm
var $1203a5d4981d9f1e$var$R_INSIDE = 0;
var $1203a5d4981d9f1e$var$R_LEFT = 1;
var $1203a5d4981d9f1e$var$R_RIGHT = 2;
var $1203a5d4981d9f1e$var$R_BOTTOM = 4;
var $1203a5d4981d9f1e$var$R_TOP = 8;
function $1203a5d4981d9f1e$var$region(x, y, rect) {
    var res = $1203a5d4981d9f1e$var$R_INSIDE;
    if (x < rect.left) res |= $1203a5d4981d9f1e$var$R_LEFT;
    else if (x > rect.right) res |= $1203a5d4981d9f1e$var$R_RIGHT;
    if (y < rect.top) res |= $1203a5d4981d9f1e$var$R_TOP;
    else if (y > rect.bottom) res |= $1203a5d4981d9f1e$var$R_BOTTOM;
    return res;
}
function $1203a5d4981d9f1e$var$clipped(segment, area) {
    var x0 = segment.x0;
    var y0 = segment.y0;
    var x1 = segment.x1;
    var y1 = segment.y1;
    var r0 = $1203a5d4981d9f1e$var$region(x0, y0, area);
    var r1 = $1203a5d4981d9f1e$var$region(x1, y1, area);
    var r, x, y;
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (!(r0 | r1) || r0 & r1) break;
        // at least one point is outside
        r = r0 || r1;
        if (r & $1203a5d4981d9f1e$var$R_TOP) {
            x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
            y = area.top;
        } else if (r & $1203a5d4981d9f1e$var$R_BOTTOM) {
            x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
            y = area.bottom;
        } else if (r & $1203a5d4981d9f1e$var$R_RIGHT) {
            y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
            x = area.right;
        } else if (r & $1203a5d4981d9f1e$var$R_LEFT) {
            y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
            x = area.left;
        }
        if (r === r0) {
            x0 = x;
            y0 = y;
            r0 = $1203a5d4981d9f1e$var$region(x0, y0, area);
        } else {
            x1 = x;
            y1 = y;
            r1 = $1203a5d4981d9f1e$var$region(x1, y1, area);
        }
    }
    return {
        x0: x0,
        x1: x1,
        y0: y0,
        y1: y1
    };
}
function $1203a5d4981d9f1e$var$compute$1(range, config) {
    var anchor = config.anchor;
    var segment = range;
    var x, y;
    if (config.clamp) segment = $1203a5d4981d9f1e$var$clipped(segment, config.area);
    if (anchor === 'start') {
        x = segment.x0;
        y = segment.y0;
    } else if (anchor === 'end') {
        x = segment.x1;
        y = segment.y1;
    } else {
        x = (segment.x0 + segment.x1) / 2;
        y = (segment.y0 + segment.y1) / 2;
    }
    return $1203a5d4981d9f1e$var$aligned(x, y, range.vx, range.vy, config.align);
}
var $1203a5d4981d9f1e$var$positioners = {
    arc: function(el, config) {
        var angle = (el.startAngle + el.endAngle) / 2;
        var vx = Math.cos(angle);
        var vy = Math.sin(angle);
        var r0 = el.innerRadius;
        var r1 = el.outerRadius;
        return $1203a5d4981d9f1e$var$compute$1({
            x0: el.x + vx * r0,
            y0: el.y + vy * r0,
            x1: el.x + vx * r1,
            y1: el.y + vy * r1,
            vx: vx,
            vy: vy
        }, config);
    },
    point: function(el, config) {
        var v = $1203a5d4981d9f1e$var$orient(el, config.origin);
        var rx = v.x * el.options.radius;
        var ry = v.y * el.options.radius;
        return $1203a5d4981d9f1e$var$compute$1({
            x0: el.x - rx,
            y0: el.y - ry,
            x1: el.x + rx,
            y1: el.y + ry,
            vx: v.x,
            vy: v.y
        }, config);
    },
    bar: function(el, config) {
        var v = $1203a5d4981d9f1e$var$orient(el, config.origin);
        var x = el.x;
        var y = el.y;
        var sx = 0;
        var sy = 0;
        if (el.horizontal) {
            x = Math.min(el.x, el.base);
            sx = Math.abs(el.base - el.x);
        } else {
            y = Math.min(el.y, el.base);
            sy = Math.abs(el.base - el.y);
        }
        return $1203a5d4981d9f1e$var$compute$1({
            x0: x,
            y0: y + sy,
            x1: x + sx,
            y1: y,
            vx: v.x,
            vy: v.y
        }, config);
    },
    fallback: function(el, config) {
        var v = $1203a5d4981d9f1e$var$orient(el, config.origin);
        return $1203a5d4981d9f1e$var$compute$1({
            x0: el.x,
            y0: el.y,
            x1: el.x + (el.width || 0),
            y1: el.y + (el.height || 0),
            vx: v.x,
            vy: v.y
        }, config);
    }
};
var $1203a5d4981d9f1e$var$rasterize = $1203a5d4981d9f1e$var$utils.rasterize;
function $1203a5d4981d9f1e$var$boundingRects(model) {
    var borderWidth = model.borderWidth || 0;
    var padding = model.padding;
    var th = model.size.height;
    var tw = model.size.width;
    var tx = -tw / 2;
    var ty = -th / 2;
    return {
        frame: {
            x: tx - padding.left - borderWidth,
            y: ty - padding.top - borderWidth,
            w: tw + padding.width + borderWidth * 2,
            h: th + padding.height + borderWidth * 2
        },
        text: {
            x: tx,
            y: ty,
            w: tw,
            h: th
        }
    };
}
function $1203a5d4981d9f1e$var$getScaleOrigin(el, context) {
    var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;
    if (!scale) return null;
    if (scale.xCenter !== undefined && scale.yCenter !== undefined) return {
        x: scale.xCenter,
        y: scale.yCenter
    };
    var pixel = scale.getBasePixel();
    return el.horizontal ? {
        x: pixel,
        y: null
    } : {
        x: null,
        y: pixel
    };
}
function $1203a5d4981d9f1e$var$getPositioner(el) {
    if (el instanceof (0, $815fd789f8127f09$export$d48203c759d6a1fc)) return $1203a5d4981d9f1e$var$positioners.arc;
    if (el instanceof (0, $815fd789f8127f09$export$bd159b522b230b7a)) return $1203a5d4981d9f1e$var$positioners.point;
    if (el instanceof (0, $815fd789f8127f09$export$a16ed71bf4b07672)) return $1203a5d4981d9f1e$var$positioners.bar;
    return $1203a5d4981d9f1e$var$positioners.fallback;
}
function $1203a5d4981d9f1e$var$drawRoundedRect(ctx, x, y, w, h, radius) {
    var HALF_PI = Math.PI / 2;
    if (radius) {
        var r = Math.min(radius, h / 2, w / 2);
        var left = x + r;
        var top = y + r;
        var right = x + w - r;
        var bottom = y + h - r;
        ctx.moveTo(x, top);
        if (left < right && top < bottom) {
            ctx.arc(left, top, r, -Math.PI, -HALF_PI);
            ctx.arc(right, top, r, -HALF_PI, 0);
            ctx.arc(right, bottom, r, 0, HALF_PI);
            ctx.arc(left, bottom, r, HALF_PI, Math.PI);
        } else if (left < right) {
            ctx.moveTo(left, y);
            ctx.arc(right, top, r, -HALF_PI, HALF_PI);
            ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
        } else if (top < bottom) {
            ctx.arc(left, top, r, -Math.PI, 0);
            ctx.arc(left, bottom, r, 0, Math.PI);
        } else ctx.arc(left, top, r, -Math.PI, Math.PI);
        ctx.closePath();
        ctx.moveTo(x, y);
    } else ctx.rect(x, y, w, h);
}
function $1203a5d4981d9f1e$var$drawFrame(ctx, rect, model) {
    var bgColor = model.backgroundColor;
    var borderColor = model.borderColor;
    var borderWidth = model.borderWidth;
    if (!bgColor && (!borderColor || !borderWidth)) return;
    ctx.beginPath();
    $1203a5d4981d9f1e$var$drawRoundedRect(ctx, $1203a5d4981d9f1e$var$rasterize(rect.x) + borderWidth / 2, $1203a5d4981d9f1e$var$rasterize(rect.y) + borderWidth / 2, $1203a5d4981d9f1e$var$rasterize(rect.w) - borderWidth, $1203a5d4981d9f1e$var$rasterize(rect.h) - borderWidth, model.borderRadius);
    ctx.closePath();
    if (bgColor) {
        ctx.fillStyle = bgColor;
        ctx.fill();
    }
    if (borderColor && borderWidth) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = 'miter';
        ctx.stroke();
    }
}
function $1203a5d4981d9f1e$var$textGeometry(rect, align, font) {
    var h = font.lineHeight;
    var w = rect.w;
    var x = rect.x;
    var y = rect.y + h / 2;
    if (align === 'center') x += w / 2;
    else if (align === 'end' || align === 'right') x += w;
    return {
        h: h,
        w: w,
        x: x,
        y: y
    };
}
function $1203a5d4981d9f1e$var$drawTextLine(ctx, text, cfg) {
    var shadow = ctx.shadowBlur;
    var stroked = cfg.stroked;
    var x = $1203a5d4981d9f1e$var$rasterize(cfg.x);
    var y = $1203a5d4981d9f1e$var$rasterize(cfg.y);
    var w = $1203a5d4981d9f1e$var$rasterize(cfg.w);
    if (stroked) ctx.strokeText(text, x, y, w);
    if (cfg.filled) {
        if (shadow && stroked) // Prevent drawing shadow on both the text stroke and fill, so
        // if the text is stroked, remove the shadow for the text fill.
        ctx.shadowBlur = 0;
        ctx.fillText(text, x, y, w);
        if (shadow && stroked) ctx.shadowBlur = shadow;
    }
}
function $1203a5d4981d9f1e$var$drawText(ctx, lines, rect, model) {
    var align = model.textAlign;
    var color = model.color;
    var filled = !!color;
    var font = model.font;
    var ilen = lines.length;
    var strokeColor = model.textStrokeColor;
    var strokeWidth = model.textStrokeWidth;
    var stroked = strokeColor && strokeWidth;
    var i;
    if (!ilen || !filled && !stroked) return;
    // Adjust coordinates based on text alignment and line height
    rect = $1203a5d4981d9f1e$var$textGeometry(rect, align, font);
    ctx.font = font.string;
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = model.textShadowBlur;
    ctx.shadowColor = model.textShadowColor;
    if (filled) ctx.fillStyle = color;
    if (stroked) {
        ctx.lineJoin = 'round';
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColor;
    }
    for(i = 0, ilen = lines.length; i < ilen; ++i)$1203a5d4981d9f1e$var$drawTextLine(ctx, lines[i], {
        stroked: stroked,
        filled: filled,
        w: rect.w,
        x: rect.x,
        y: rect.y + rect.h * i
    });
}
var $1203a5d4981d9f1e$var$Label = function(config, ctx, el, index) {
    var me = this;
    me._config = config;
    me._index = index;
    me._model = null;
    me._rects = null;
    me._ctx = ctx;
    me._el = el;
};
(0, $7cc28eca4d136c06$export$efca4cbe5dd06740)($1203a5d4981d9f1e$var$Label.prototype, {
    /**
   * @private
   */ _modelize: function(display, lines, config, context) {
        var me = this;
        var index = me._index;
        var font = (0, $7cc28eca4d136c06$export$34aec0b863436764)((0, $7cc28eca4d136c06$export$407448d2b89b1813)([
            config.font,
            {}
        ], context, index));
        var color = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
            config.color,
            (0, $7cc28eca4d136c06$export$4368d992c4eafac0).color
        ], context, index);
        return {
            align: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.align,
                'center'
            ], context, index),
            anchor: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.anchor,
                'center'
            ], context, index),
            area: context.chart.chartArea,
            backgroundColor: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.backgroundColor,
                null
            ], context, index),
            borderColor: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.borderColor,
                null
            ], context, index),
            borderRadius: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.borderRadius,
                0
            ], context, index),
            borderWidth: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.borderWidth,
                0
            ], context, index),
            clamp: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.clamp,
                false
            ], context, index),
            clip: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.clip,
                false
            ], context, index),
            color: color,
            display: display,
            font: font,
            lines: lines,
            offset: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.offset,
                4
            ], context, index),
            opacity: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.opacity,
                1
            ], context, index),
            origin: $1203a5d4981d9f1e$var$getScaleOrigin(me._el, context),
            padding: (0, $7cc28eca4d136c06$export$a9c23c6ac3fc3eca)((0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.padding,
                4
            ], context, index)),
            positioner: $1203a5d4981d9f1e$var$getPositioner(me._el),
            rotation: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.rotation,
                0
            ], context, index) * (Math.PI / 180),
            size: $1203a5d4981d9f1e$var$utils.textSize(me._ctx, lines, font),
            textAlign: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.textAlign,
                'start'
            ], context, index),
            textShadowBlur: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.textShadowBlur,
                0
            ], context, index),
            textShadowColor: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.textShadowColor,
                color
            ], context, index),
            textStrokeColor: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.textStrokeColor,
                color
            ], context, index),
            textStrokeWidth: (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
                config.textStrokeWidth,
                0
            ], context, index)
        };
    },
    update: function(context) {
        var me = this;
        var model = null;
        var rects = null;
        var index = me._index;
        var config = me._config;
        var value, label, lines;
        // We first resolve the display option (separately) to avoid computing
        // other options in case the label is hidden (i.e. display: false).
        var display = (0, $7cc28eca4d136c06$export$407448d2b89b1813)([
            config.display,
            true
        ], context, index);
        if (display) {
            value = context.dataset.data[index];
            label = (0, $7cc28eca4d136c06$export$90a7f3efeed30595)((0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(config.formatter, [
                value,
                context
            ]), value);
            lines = (0, $7cc28eca4d136c06$export$342063e11d6c3cad)(label) ? [] : $1203a5d4981d9f1e$var$utils.toTextLines(label);
            if (lines.length) {
                model = me._modelize(display, lines, config, context);
                rects = $1203a5d4981d9f1e$var$boundingRects(model);
            }
        }
        me._model = model;
        me._rects = rects;
    },
    geometry: function() {
        return this._rects ? this._rects.frame : {};
    },
    rotation: function() {
        return this._model ? this._model.rotation : 0;
    },
    visible: function() {
        return this._model && this._model.opacity;
    },
    model: function() {
        return this._model;
    },
    draw: function(chart, center) {
        var me = this;
        var ctx = chart.ctx;
        var model = me._model;
        var rects = me._rects;
        var area;
        if (!this.visible()) return;
        ctx.save();
        if (model.clip) {
            area = model.area;
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
        }
        ctx.globalAlpha = $1203a5d4981d9f1e$var$utils.bound(0, model.opacity, 1);
        ctx.translate($1203a5d4981d9f1e$var$rasterize(center.x), $1203a5d4981d9f1e$var$rasterize(center.y));
        ctx.rotate(model.rotation);
        $1203a5d4981d9f1e$var$drawFrame(ctx, rects.frame, model);
        $1203a5d4981d9f1e$var$drawText(ctx, model.lines, rects.text, model);
        ctx.restore();
    }
});
var $1203a5d4981d9f1e$var$MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger
var $1203a5d4981d9f1e$var$MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger
function $1203a5d4981d9f1e$var$rotated(point, center, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var cx = center.x;
    var cy = center.y;
    return {
        x: cx + cos * (point.x - cx) - sin * (point.y - cy),
        y: cy + sin * (point.x - cx) + cos * (point.y - cy)
    };
}
function $1203a5d4981d9f1e$var$projected(points, axis) {
    var min = $1203a5d4981d9f1e$var$MAX_INTEGER;
    var max = $1203a5d4981d9f1e$var$MIN_INTEGER;
    var origin = axis.origin;
    var i, pt, vx, vy, dp;
    for(i = 0; i < points.length; ++i){
        pt = points[i];
        vx = pt.x - origin.x;
        vy = pt.y - origin.y;
        dp = axis.vx * vx + axis.vy * vy;
        min = Math.min(min, dp);
        max = Math.max(max, dp);
    }
    return {
        min: min,
        max: max
    };
}
function $1203a5d4981d9f1e$var$toAxis(p0, p1) {
    var vx = p1.x - p0.x;
    var vy = p1.y - p0.y;
    var ln = Math.sqrt(vx * vx + vy * vy);
    return {
        vx: (p1.x - p0.x) / ln,
        vy: (p1.y - p0.y) / ln,
        origin: p0,
        ln: ln
    };
}
var $1203a5d4981d9f1e$var$HitBox = function() {
    this._rotation = 0;
    this._rect = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
};
(0, $7cc28eca4d136c06$export$efca4cbe5dd06740)($1203a5d4981d9f1e$var$HitBox.prototype, {
    center: function() {
        var r = this._rect;
        return {
            x: r.x + r.w / 2,
            y: r.y + r.h / 2
        };
    },
    update: function(center, rect, rotation) {
        this._rotation = rotation;
        this._rect = {
            x: rect.x + center.x,
            y: rect.y + center.y,
            w: rect.w,
            h: rect.h
        };
    },
    contains: function(point) {
        var me = this;
        var margin = 1;
        var rect = me._rect;
        point = $1203a5d4981d9f1e$var$rotated(point, me.center(), -me._rotation);
        return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
    },
    // Separating Axis Theorem
    // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
    intersects: function(other) {
        var r0 = this._points();
        var r1 = other._points();
        var axes = [
            $1203a5d4981d9f1e$var$toAxis(r0[0], r0[1]),
            $1203a5d4981d9f1e$var$toAxis(r0[0], r0[3])
        ];
        var i, pr0, pr1;
        if (this._rotation !== other._rotation) // Only separate with r1 axis if the rotation is different,
        // else it's enough to separate r0 and r1 with r0 axis only!
        axes.push($1203a5d4981d9f1e$var$toAxis(r1[0], r1[1]), $1203a5d4981d9f1e$var$toAxis(r1[0], r1[3]));
        for(i = 0; i < axes.length; ++i){
            pr0 = $1203a5d4981d9f1e$var$projected(r0, axes[i]);
            pr1 = $1203a5d4981d9f1e$var$projected(r1, axes[i]);
            if (pr0.max < pr1.min || pr1.max < pr0.min) return false;
        }
        return true;
    },
    /**
   * @private
   */ _points: function() {
        var me = this;
        var rect = me._rect;
        var angle = me._rotation;
        var center = me.center();
        return [
            $1203a5d4981d9f1e$var$rotated({
                x: rect.x,
                y: rect.y
            }, center, angle),
            $1203a5d4981d9f1e$var$rotated({
                x: rect.x + rect.w,
                y: rect.y
            }, center, angle),
            $1203a5d4981d9f1e$var$rotated({
                x: rect.x + rect.w,
                y: rect.y + rect.h
            }, center, angle),
            $1203a5d4981d9f1e$var$rotated({
                x: rect.x,
                y: rect.y + rect.h
            }, center, angle)
        ];
    }
});
function $1203a5d4981d9f1e$var$coordinates(el, model, geometry) {
    var point = model.positioner(el, model);
    var vx = point.vx;
    var vy = point.vy;
    if (!vx && !vy) // if aligned center, we don't want to offset the center point
    return {
        x: point.x,
        y: point.y
    };
    var w = geometry.w;
    var h = geometry.h;
    // take in account the label rotation
    var rotation = model.rotation;
    var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
    var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));
    // scale the unit vector (vx, vy) to get at least dx or dy equal to
    // w or h respectively (else we would calculate the distance to the
    // ellipse inscribed in the bounding rect)
    var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
    dx *= vx * vs;
    dy *= vy * vs;
    // finally, include the explicit offset
    dx += model.offset * vx;
    dy += model.offset * vy;
    return {
        x: point.x + dx,
        y: point.y + dy
    };
}
function $1203a5d4981d9f1e$var$collide(labels, collider) {
    var i, j, s0, s1;
    // IMPORTANT Iterate in the reverse order since items at the end of the
    // list have an higher weight/priority and thus should be less impacted
    // by the overlapping strategy.
    for(i = labels.length - 1; i >= 0; --i){
        s0 = labels[i].$layout;
        for(j = i - 1; j >= 0 && s0._visible; --j){
            s1 = labels[j].$layout;
            if (s1._visible && s0._box.intersects(s1._box)) collider(s0, s1);
        }
    }
    return labels;
}
function $1203a5d4981d9f1e$var$compute(labels) {
    var i, ilen, label, state, geometry, center, proxy;
    // Initialize labels for overlap detection
    for(i = 0, ilen = labels.length; i < ilen; ++i){
        label = labels[i];
        state = label.$layout;
        if (state._visible) {
            // Chart.js 3 removed el._model in favor of getProps(), making harder to
            // abstract reading values in positioners. Also, using string arrays to
            // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
            // positioners inefficient in the normal case (i.e. not the final values)
            // and the code a bit ugly, so let's use a Proxy instead.
            proxy = new Proxy(label._el, {
                get: (el, p)=>el.getProps([
                        p
                    ], true)[p]
            });
            geometry = label.geometry();
            center = $1203a5d4981d9f1e$var$coordinates(proxy, label.model(), geometry);
            state._box.update(center, geometry, label.rotation());
        }
    }
    // Auto hide overlapping labels
    return $1203a5d4981d9f1e$var$collide(labels, function(s0, s1) {
        var h0 = s0._hidable;
        var h1 = s1._hidable;
        if (h0 && h1 || h1) s1._visible = false;
        else if (h0) s0._visible = false;
    });
}
var $1203a5d4981d9f1e$var$layout = {
    prepare: function(datasets) {
        var labels = [];
        var i, j, ilen, jlen, label;
        for(i = 0, ilen = datasets.length; i < ilen; ++i)for(j = 0, jlen = datasets[i].length; j < jlen; ++j){
            label = datasets[i][j];
            labels.push(label);
            label.$layout = {
                _box: new $1203a5d4981d9f1e$var$HitBox(),
                _hidable: false,
                _visible: true,
                _set: i,
                _idx: label._index
            };
        }
        // TODO New `z` option: labels with a higher z-index are drawn
        // of top of the ones with a lower index. Lowest z-index labels
        // are also discarded first when hiding overlapping labels.
        labels.sort(function(a, b) {
            var sa = a.$layout;
            var sb = b.$layout;
            return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
        });
        this.update(labels);
        return labels;
    },
    update: function(labels) {
        var dirty = false;
        var i, ilen, label, model, state;
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            label = labels[i];
            model = label.model();
            state = label.$layout;
            state._hidable = model && model.display === 'auto';
            state._visible = label.visible();
            dirty |= state._hidable;
        }
        if (dirty) $1203a5d4981d9f1e$var$compute(labels);
    },
    lookup: function(labels, point) {
        var i, state;
        // IMPORTANT Iterate in the reverse order since items at the end of
        // the list have an higher z-index, thus should be picked first.
        for(i = labels.length - 1; i >= 0; --i){
            state = labels[i].$layout;
            if (state && state._visible && state._box.contains(point)) return labels[i];
        }
        return null;
    },
    draw: function(chart, labels) {
        var i, ilen, label, state, geometry, center;
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            label = labels[i];
            state = label.$layout;
            if (state._visible) {
                geometry = label.geometry();
                center = $1203a5d4981d9f1e$var$coordinates(label._el, label.model(), geometry);
                state._box.update(center, geometry, label.rotation());
                label.draw(chart, center);
            }
        }
    }
};
var $1203a5d4981d9f1e$var$formatter = function(value) {
    if ((0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value)) return null;
    var label = value;
    var keys, klen, k;
    if ((0, $7cc28eca4d136c06$export$23f2a1d2818174ef)(value)) {
        if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value.label)) label = value.label;
        else if (!(0, $7cc28eca4d136c06$export$342063e11d6c3cad)(value.r)) label = value.r;
        else {
            label = '';
            keys = Object.keys(value);
            for(k = 0, klen = keys.length; k < klen; ++k)label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
        }
    }
    return '' + label;
};
/**
 * IMPORTANT: make sure to also update tests and TypeScript definition
 * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
 */ var $1203a5d4981d9f1e$var$defaults = {
    align: 'center',
    anchor: 'center',
    backgroundColor: null,
    borderColor: null,
    borderRadius: 0,
    borderWidth: 0,
    clamp: false,
    clip: false,
    color: undefined,
    display: true,
    font: {
        family: undefined,
        lineHeight: 1.2,
        size: undefined,
        style: undefined,
        weight: null
    },
    formatter: $1203a5d4981d9f1e$var$formatter,
    labels: undefined,
    listeners: {},
    offset: 4,
    opacity: 1,
    padding: {
        top: 4,
        right: 4,
        bottom: 4,
        left: 4
    },
    rotation: 0,
    textAlign: 'start',
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    textShadowBlur: 0,
    textShadowColor: undefined
};
/**
 * @see https://github.com/chartjs/Chart.js/issues/4176
 */ var $1203a5d4981d9f1e$var$EXPANDO_KEY = '$datalabels';
var $1203a5d4981d9f1e$var$DEFAULT_KEY = '$default';
function $1203a5d4981d9f1e$var$configure(dataset, options) {
    var override = dataset.datalabels;
    var listeners = {};
    var configs = [];
    var labels, keys;
    if (override === false) return null;
    if (override === true) override = {};
    options = (0, $7cc28eca4d136c06$export$efca4cbe5dd06740)({}, [
        options,
        override
    ]);
    labels = options.labels || {};
    keys = Object.keys(labels);
    delete options.labels;
    if (keys.length) keys.forEach(function(key) {
        if (labels[key]) configs.push((0, $7cc28eca4d136c06$export$efca4cbe5dd06740)({}, [
            options,
            labels[key],
            {
                _key: key
            }
        ]));
    });
    else // Default label if no "named" label defined.
    configs.push(options);
    // listeners: {<event-type>: {<label-key>: <fn>}}
    listeners = configs.reduce(function(target, config) {
        (0, $7cc28eca4d136c06$export$d66501df72047452)(config.listeners || {}, function(fn, event) {
            target[event] = target[event] || {};
            target[event][config._key || $1203a5d4981d9f1e$var$DEFAULT_KEY] = fn;
        });
        delete config.listeners;
        return target;
    }, {});
    return {
        labels: configs,
        listeners: listeners
    };
}
function $1203a5d4981d9f1e$var$dispatchEvent(chart, listeners, label, event) {
    if (!listeners) return;
    var context = label.$context;
    var groups = label.$groups;
    var callback$1;
    if (!listeners[groups._set]) return;
    callback$1 = listeners[groups._set][groups._key];
    if (!callback$1) return;
    if ((0, $7cc28eca4d136c06$export$3722cfe417b6ed86)(callback$1, [
        context,
        event
    ]) === true) {
        // Users are allowed to tweak the given context by injecting values that can be
        // used in scriptable options to display labels differently based on the current
        // event (e.g. highlight an hovered label). That's why we update the label with
        // the output context and schedule a new chart render by setting it dirty.
        chart[$1203a5d4981d9f1e$var$EXPANDO_KEY]._dirty = true;
        label.update(context);
    }
}
function $1203a5d4981d9f1e$var$dispatchMoveEvents(chart, listeners, previous, label, event) {
    var enter, leave;
    if (!previous && !label) return;
    if (!previous) enter = true;
    else if (!label) leave = true;
    else if (previous !== label) leave = enter = true;
    if (leave) $1203a5d4981d9f1e$var$dispatchEvent(chart, listeners.leave, previous, event);
    if (enter) $1203a5d4981d9f1e$var$dispatchEvent(chart, listeners.enter, label, event);
}
function $1203a5d4981d9f1e$var$handleMoveEvents(chart, event) {
    var expando = chart[$1203a5d4981d9f1e$var$EXPANDO_KEY];
    var listeners = expando._listeners;
    var previous, label;
    if (!listeners.enter && !listeners.leave) return;
    if (event.type === 'mousemove') label = $1203a5d4981d9f1e$var$layout.lookup(expando._labels, event);
    else if (event.type !== 'mouseout') return;
    previous = expando._hovered;
    expando._hovered = label;
    $1203a5d4981d9f1e$var$dispatchMoveEvents(chart, listeners, previous, label, event);
}
function $1203a5d4981d9f1e$var$handleClickEvents(chart, event) {
    var expando = chart[$1203a5d4981d9f1e$var$EXPANDO_KEY];
    var handlers = expando._listeners.click;
    var label = handlers && $1203a5d4981d9f1e$var$layout.lookup(expando._labels, event);
    if (label) $1203a5d4981d9f1e$var$dispatchEvent(chart, handlers, label, event);
}
var $1203a5d4981d9f1e$export$2e2bcd8739ae039 = {
    id: 'datalabels',
    defaults: $1203a5d4981d9f1e$var$defaults,
    beforeInit: function(chart) {
        chart[$1203a5d4981d9f1e$var$EXPANDO_KEY] = {
            _actives: []
        };
    },
    beforeUpdate: function(chart) {
        var expando = chart[$1203a5d4981d9f1e$var$EXPANDO_KEY];
        expando._listened = false;
        expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}
        expando._datasets = []; // per dataset labels: [Label[]]
        expando._labels = []; // layouted labels: Label[]
    },
    afterDatasetUpdate: function(chart, args, options) {
        var datasetIndex = args.index;
        var expando = chart[$1203a5d4981d9f1e$var$EXPANDO_KEY];
        var labels = expando._datasets[datasetIndex] = [];
        var visible = chart.isDatasetVisible(datasetIndex);
        var dataset = chart.data.datasets[datasetIndex];
        var config = $1203a5d4981d9f1e$var$configure(dataset, options);
        var elements = args.meta.data || [];
        var ctx = chart.ctx;
        var i, j, ilen, jlen, cfg, key, el, label;
        ctx.save();
        for(i = 0, ilen = elements.length; i < ilen; ++i){
            el = elements[i];
            el[$1203a5d4981d9f1e$var$EXPANDO_KEY] = [];
            if (visible && el && chart.getDataVisibility(i) && !el.skip) for(j = 0, jlen = config.labels.length; j < jlen; ++j){
                cfg = config.labels[j];
                key = cfg._key;
                label = new $1203a5d4981d9f1e$var$Label(cfg, ctx, el, i);
                label.$groups = {
                    _set: datasetIndex,
                    _key: key || $1203a5d4981d9f1e$var$DEFAULT_KEY
                };
                label.$context = {
                    active: false,
                    chart: chart,
                    dataIndex: i,
                    dataset: dataset,
                    datasetIndex: datasetIndex
                };
                label.update(label.$context);
                el[$1203a5d4981d9f1e$var$EXPANDO_KEY].push(label);
                labels.push(label);
            }
        }
        ctx.restore();
        // Store listeners at the chart level and per event type to optimize
        // cases where no listeners are registered for a specific event.
        (0, $7cc28eca4d136c06$export$efca4cbe5dd06740)(expando._listeners, config.listeners, {
            merger: function(event, target, source) {
                target[event] = target[event] || {};
                target[event][args.index] = source[event];
                expando._listened = true;
            }
        });
    },
    afterUpdate: function(chart) {
        chart[$1203a5d4981d9f1e$var$EXPANDO_KEY]._labels = $1203a5d4981d9f1e$var$layout.prepare(chart[$1203a5d4981d9f1e$var$EXPANDO_KEY]._datasets);
    },
    // Draw labels on top of all dataset elements
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
    afterDatasetsDraw: function(chart) {
        $1203a5d4981d9f1e$var$layout.draw(chart, chart[$1203a5d4981d9f1e$var$EXPANDO_KEY]._labels);
    },
    beforeEvent: function(chart, args) {
        // If there is no listener registered for this chart, `listened` will be false,
        // meaning we can immediately ignore the incoming event and avoid useless extra
        // computation for users who don't implement label interactions.
        if (chart[$1203a5d4981d9f1e$var$EXPANDO_KEY]._listened) {
            var event = args.event;
            switch(event.type){
                case 'mousemove':
                case 'mouseout':
                    $1203a5d4981d9f1e$var$handleMoveEvents(chart, event);
                    break;
                case 'click':
                    $1203a5d4981d9f1e$var$handleClickEvents(chart, event);
                    break;
            }
        }
    },
    afterEvent: function(chart) {
        var expando = chart[$1203a5d4981d9f1e$var$EXPANDO_KEY];
        var previous = expando._actives;
        var actives = expando._actives = chart.getActiveElements();
        var updates = $1203a5d4981d9f1e$var$utils.arrayDiff(previous, actives);
        var i, ilen, j, jlen, update, label, labels;
        for(i = 0, ilen = updates.length; i < ilen; ++i){
            update = updates[i];
            if (update[1]) {
                labels = update[0].element[$1203a5d4981d9f1e$var$EXPANDO_KEY] || [];
                for(j = 0, jlen = labels.length; j < jlen; ++j){
                    label = labels[j];
                    label.$context.active = update[1] === 1;
                    label.update(label.$context);
                }
            }
        }
        if (expando._dirty || updates.length) {
            $1203a5d4981d9f1e$var$layout.update(expando._labels);
            chart.render();
        }
        delete expando._dirty;
    }
};








class $e3b7c6fb43fb5aee$export$40edea292a9ac592 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $b1fa9b0acaf40b20$export$dbf350e5966cf602)`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.suntimesInfo = (0, $cec8c66d67f18323$export$b266695db58ff2ef)(this.hass, this.forecast.datetime);
    }
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.forecast) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const { label: label, className: className } = this.getDateInfo();
        const isNightTime = this.forecastType === "hourly" && this.config.forecast?.show_sun_times && this.suntimesInfo ? this.suntimesInfo.isNightTime : false;
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-forecast-slot-time wfc-label ${className || ""}">
        ${label}
      </div>
      <wfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${isNightTime}
      ></wfc-weather-condition-icon-provider>
    `;
    }
    getDateInfo() {
        if (this.forecastType !== "hourly") return {
            label: (0, $cec8c66d67f18323$export$a7f242eff11c1345)(this.hass, this.forecast.datetime)
        };
        const startDate = new Date(this.forecast.datetime);
        const endDate = this.forecast.groupEndtime ? new Date(this.forecast.groupEndtime) : (0, $cec8c66d67f18323$export$95ae95d2176c5f0)(startDate);
        let displayDate = startDate;
        let className;
        if (this.config.forecast?.show_sun_times && this.suntimesInfo) {
            const { sunrise: sunrise, sunset: sunset } = this.suntimesInfo;
            const isEventInWindow = (eventDate)=>{
                const eventOnForecastDay = new Date(startDate);
                eventOnForecastDay.setHours(eventDate.getHours(), eventDate.getMinutes());
                return eventOnForecastDay.getTime() >= startDate.getTime() && eventOnForecastDay.getTime() <= endDate.getTime();
            };
            if (isEventInWindow(sunrise)) {
                className = "wfc-sunrise";
                displayDate = sunrise;
            } else if (isEventInWindow(sunset)) {
                className = "wfc-sunset";
                displayDate = sunset;
            }
        }
        const label = className ? (0, $cec8c66d67f18323$export$3203edd9e5edd663)(this.hass, displayDate, true) : (0, $cec8c66d67f18323$export$86a5557e1d677e29)(this.hass, displayDate, true);
        return {
            label: label,
            className: className
        };
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e3b7c6fb43fb5aee$export$40edea292a9ac592.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e3b7c6fb43fb5aee$export$40edea292a9ac592.prototype, "forecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e3b7c6fb43fb5aee$export$40edea292a9ac592.prototype, "forecastType", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e3b7c6fb43fb5aee$export$40edea292a9ac592.prototype, "config", void 0);
$e3b7c6fb43fb5aee$export$40edea292a9ac592 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-forecast-header-items")
], $e3b7c6fb43fb5aee$export$40edea292a9ac592);


(0, $815fd789f8127f09$export$acaa6426d77a227e).register((0, $815fd789f8127f09$export$e97d5dc64e999004), (0, $815fd789f8127f09$export$a16ed71bf4b07672), (0, $815fd789f8127f09$export$3c9b5d28c11cbfd0), (0, $815fd789f8127f09$export$55e463fa7bcd3469), (0, $815fd789f8127f09$export$bd159b522b230b7a), (0, $815fd789f8127f09$export$e7f4e5e8656f0b93), (0, $815fd789f8127f09$export$29e663ba4d09fe7), (0, $1203a5d4981d9f1e$export$2e2bcd8739ae039));
class $543239349f4cb4b1$export$4c291c67d2515ff0 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    createRenderRoot() {
        return this;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._chart?.destroy();
        this._chart = null;
    }
    firstUpdated() {
        this.initChart();
    }
    updated(changedProps) {
        super.updated(changedProps);
        const hasChanged = changedProps.has("forecast") || changedProps.has("weatherEntity") || changedProps.has("hass") || changedProps.has("forecastType") || changedProps.has("itemWidth");
        if (hasChanged && this.itemWidth > 0 && this.forecast?.length) {
            if (!this._chart) this.initChart();
            else {
                const structuralChange = changedProps.has("forecastType") || changedProps.has("itemWidth");
                this.updateChartData(structuralChange);
            }
        }
    }
    render() {
        if (!this.forecast?.length || this.itemWidth <= 0) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const count = this.forecast.length;
        const gaps = Math.max(count - 1, 0);
        const totalWidthCalc = `calc(${count} * var(--forecast-item-width) + ${gaps} * var(--forecast-item-gap))`;
        const scrollContainerStyle = {
            "--wfc-forecast-chart-width": totalWidthCalc
        };
        const clipperStyle = {
            width: "var(--wfc-forecast-chart-width)",
            overflow: "hidden"
        };
        const canvasStyle = {
            width: "calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",
            marginLeft: "calc(var(--forecast-item-gap) / -2)",
            display: "block"
        };
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-scroll-container" style=${(0, $f3c0ee04a587c8fb$export$1e5b4ce2fa884e6a)(scrollContainerStyle)}>
        <div class="wfc-forecast-chart-header">${this.renderHeaderItems()}</div>

        <div class="wfc-chart-clipper" style=${(0, $f3c0ee04a587c8fb$export$1e5b4ce2fa884e6a)(clipperStyle)}>
          <div
            class="wfc-forecast-chart"
            id="chart-container"
            style=${(0, $f3c0ee04a587c8fb$export$1e5b4ce2fa884e6a)(canvasStyle)}
          >
            <canvas id="forecast-canvas"></canvas>
          </div>
        </div>

        <div class="wfc-forecast-chart-footer">
          ${this.forecast.map((item)=>(0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
              <div class="wfc-forecast-slot">
                <wfc-forecast-info
                  .hass=${this.hass}
                  .forecast=${item}
                  .config=${this.config}
                  .hidePrecipitation=${true}
                ></wfc-forecast-info>
              </div>
            `)}
        </div>
      </div>
    `;
    }
    initChart() {
        if (!this._canvas || !this.forecast?.length) return;
        const config = this.getChartConfig();
        if (config) this._chart = new (0, $815fd789f8127f09$export$acaa6426d77a227e)(this._canvas, config);
    }
    /**
   * Update the chart's data and configuration.
   *
   * This method updates the chart's data and configuration based on the current forecast data.
   * It also handles resizing the chart if there has been a structural change, such as switching
   * between daily and hourly forecasts or changing the item width.
   *
   * @param structuralChange Whether the chart's layout or structure has changed, requiring a forced resize.
   */ updateChartData(structuralChange = false) {
        if (!this._chart || !this.forecast?.length) return;
        const newConfig = this.getChartConfig();
        this._chart.data = newConfig.data;
        if (this._chart.options.scales && newConfig.options?.scales) this._chart.options.scales = newConfig.options.scales;
        if (structuralChange) this._chart.resize();
        // No animation on data update.
        this._chart.update("none");
    }
    getChartConfig() {
        const style = getComputedStyle(this);
        const gridColor = style.getPropertyValue("--wfc-chart-grid-color");
        const datalabelColor = style.getPropertyValue("--wfc-chart-label-color");
        const highColor = style.getPropertyValue("--wfc-temp-high-color");
        const lowColor = style.getPropertyValue("--wfc-temp-low-color");
        const precipColor = style.getPropertyValue("--wfc-precipitation-bar-color");
        const { minTemp: minTemp, maxTemp: maxTemp } = this.computeScaleLimits();
        const maxPrecip = (0, $9547816cba2a40b2$export$99f5c9dd8f0f996b)((0, $9547816cba2a40b2$export$a94cf610ac0519b4)(this.hass, this.weatherEntity, "precipitation"), this.forecastType);
        return {
            type: "line",
            data: {
                labels: this.forecast.map((f)=>f.datetime),
                datasets: [
                    {
                        data: this.forecast.map((f)=>f.temperature),
                        borderColor: highColor,
                        fill: false,
                        yAxisID: "yTemp",
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: datalabelColor,
                            formatter: (value)=>value != null ? `${(0, $0412f1070fcb3161$export$f5dd818bff069720)(value, this.hass.locale)}\xb0` : null
                        }
                    },
                    {
                        data: this.forecast.map((f)=>f.templow ?? null),
                        borderColor: lowColor,
                        fill: false,
                        yAxisID: "yTemp",
                        datalabels: {
                            anchor: "start",
                            align: "bottom",
                            color: datalabelColor,
                            formatter: (value)=>value != null ? `${(0, $0412f1070fcb3161$export$f5dd818bff069720)(value, this.hass.locale)}\xb0` : null
                        }
                    },
                    {
                        data: this.forecast.map((f)=>f.precipitation && f.precipitation !== 0 ? f.precipitation : null),
                        backgroundColor: precipColor,
                        type: "bar",
                        yAxisID: "yPrecip",
                        borderWidth: 0,
                        categoryPercentage: 0.6,
                        barPercentage: 0.8,
                        order: 0,
                        datalabels: {
                            anchor: "start",
                            align: "end",
                            offset: -22,
                            color: datalabelColor,
                            formatter: (value)=>(0, $9547816cba2a40b2$export$c22786b38d196cde)(value, (0, $9547816cba2a40b2$export$a94cf610ac0519b4)(this.hass, this.weatherEntity, "precipitation"))
                        }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    autoPadding: false,
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 0,
                        right: 0
                    }
                },
                elements: {
                    line: {
                        tension: 0.3
                    }
                },
                scales: {
                    x: {
                        offset: true,
                        border: {
                            color: gridColor,
                            dash: [
                                4,
                                4
                            ]
                        },
                        grid: {
                            offset: true,
                            display: true,
                            color: gridColor,
                            drawTicks: true
                        },
                        ticks: {
                            display: false
                        }
                    },
                    yTemp: {
                        type: "linear",
                        display: false,
                        min: minTemp,
                        max: maxTemp,
                        position: "left",
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },
                    yPrecip: {
                        type: "linear",
                        display: false,
                        position: "right",
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: maxPrecip,
                        grid: {
                            display: false,
                            drawOnChartArea: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        };
    }
    /**
   * Compute dynamic scale limits for the temperature axis.
   *
   * Ensures adequate padding above and below the temperature data, with special handling to guarantee sufficient space below when
   * low temperatures are present. The alogithm works as follows:
   *
   * 1. Calculate the spread of temperature data, enforcing a minimum spread of 8 degrees.
   * 2. Determine dynamic padding as 20% of the spread.
   * 3. Ensure a minimum bottom buffer of 3 degrees if low temperature data exists.
   * 4. Set final min and max limits using Math.floor and Math.ceil for cleaner axis values.
   *
   * @returns An object containing the computed minTemp and maxTemp for the temperature scale.
   */ computeScaleLimits() {
        const temps = this.forecast.map((f)=>f.temperature);
        const lows = this.forecast.map((f)=>f.templow ?? f.temperature);
        const dataMin = Math.min(...lows);
        const dataMax = Math.max(...temps);
        const hasLowTempData = this.forecast.some((f)=>f.templow !== undefined && f.templow !== null);
        const spread = Math.max(dataMax - dataMin, 8);
        const dynamicPadding = spread * 0.2;
        const MIN_BOTTOM_BUFFER = 3;
        let bottomPadding;
        if (hasLowTempData) bottomPadding = Math.max(dynamicPadding, MIN_BOTTOM_BUFFER);
        else bottomPadding = Math.max(dynamicPadding, 2);
        const topPadding = Math.max(dynamicPadding, 2);
        const minTemp = Math.floor(dataMin - bottomPadding);
        const maxTemp = Math.ceil(dataMax + topPadding);
        return {
            minTemp: minTemp,
            maxTemp: maxTemp
        };
    }
    renderHeaderItems() {
        const parts = [];
        let currentDay;
        this.forecast.forEach((item)=>{
            if (!item.datetime) return;
            if (this.forecastType === "hourly") {
                const forecastDay = (0, $cec8c66d67f18323$export$a7f242eff11c1345)(this.hass, item.datetime);
                if (currentDay !== forecastDay) {
                    currentDay = forecastDay;
                    parts.push((0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div class="wfc-day-indicator-container">
              <div class="wfc-day-indicator">${forecastDay}</div>
            </div>`);
                }
            }
            parts.push((0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
        <div class="wfc-forecast-slot">
          <wfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${item}
            .forecastType=${this.forecastType}
            .config=${this.config}
          ></wfc-forecast-header-items>
        </div>
      `);
        });
        return parts;
    }
    constructor(...args){
        super(...args), this.forecast = [], this.itemWidth = 0, this._chart = null;
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "weatherEntity", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "forecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "config", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "forecastType", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "itemWidth", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $94045ccc1df6ada5$export$2fa187e846a241c4)("canvas")
], $543239349f4cb4b1$export$4c291c67d2515ff0.prototype, "_canvas", void 0);
$543239349f4cb4b1$export$4c291c67d2515ff0 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-forecast-chart")
], $543239349f4cb4b1$export$4c291c67d2515ff0);












class $9457a1be555c7a39$export$eaae3aadae68f3ef extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.forecast) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const precipitation = this.forecast.precipitation || 0;
        const barHeightPct = this.computePrecipitationBarHeight(precipitation);
        const precipitationAvailable = (0, $9547816cba2a40b2$export$1cbb3573d761a816)(this.forecast);
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-forecast-slot-temperature">
        <span class="wfc-forecast-temperature-high wfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow !== undefined ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<span
              class="wfc-forecast-temperature-low wfc-secondary wfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >` : (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
      </div>
      <div
        class="wfc-forecast-precip-amount-container${!precipitationAvailable ? " wfc-not-available" : ""}"
      >
        <div
          class="wfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${barHeightPct};"
        ></div>
        <span class="wfc-forecast-precip-amount">
          ${precipitation.toFixed(1)}
        </span>
      </div>
    `;
    }
    /**
   * Computes the height of the precipitation bar based on the precipitation amount.
   *
   * Larger amounts result in taller bars, capped at the maximum height defined. Minimal
   * precipitation values result in very small or zero-height bars.
   *
   * @param precipitation The precipitation amount.
   * @returns The height of the precipitation bar in pixels.
   */ computePrecipitationBarHeight(precipitation) {
        if (precipitation < 0.1) return 0;
        else if (precipitation < 0.2) return 10;
        const maxPrecip = this.maxPrecipitation || 10;
        // Calculate bar height as a percentage (0-100), rounded to integer
        const percent = precipitation / maxPrecip * 100;
        return Math.round(Math.min(percent, 100));
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $9457a1be555c7a39$export$eaae3aadae68f3ef.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $9457a1be555c7a39$export$eaae3aadae68f3ef.prototype, "forecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $9457a1be555c7a39$export$eaae3aadae68f3ef.prototype, "config", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $9457a1be555c7a39$export$eaae3aadae68f3ef.prototype, "maxPrecipitation", void 0);
$9457a1be555c7a39$export$eaae3aadae68f3ef = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-forecast-details")
], $9457a1be555c7a39$export$eaae3aadae68f3ef);









class $8d14f4859ba2ea7a$export$fe0c53150e2959b8 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $b1fa9b0acaf40b20$export$dbf350e5966cf602)`
    text {
      font-size: calc(var(--ha-font-size-s, 12px) * 1.2);
      fill: var(--primary-text-color);
    }
  `;
    }
    render() {
        const R = this.radius;
        const padding = 8;
        const tipOffset = 7;
        const cx = R + padding;
        const cy = R + padding;
        const boxSize = 2 * (R + padding);
        const speed = Math.round(this.windSpeed || 0);
        const lineColor = $8d14f4859ba2ea7a$var$computeLineColor(speed, this.windUnit);
        let bearing = this.windBearing || 0;
        if (this.type === "direction") bearing = (bearing + 180) % 360;
        const polar = (deg, r)=>{
            const a = deg * Math.PI / 180;
            return {
                x: cx + r * Math.cos(a),
                y: cy + r * Math.sin(a)
            };
        };
        const baseAngle = -90;
        const spread = 12;
        const p1 = polar(baseAngle - spread, R);
        const p2 = polar(baseAngle + spread, R);
        const tip = polar(baseAngle, R + tipOffset);
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${boxSize} ${boxSize}"
      >
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${R}"
          stroke="${lineColor}"
          stroke-width="3"
          fill="none"
        />

        <g transform="rotate(${bearing} ${cx} ${cy})">
          <polygon
            points="
              ${p1.x},${p1.y}
              ${p2.x},${p2.y}
              ${tip.x},${tip.y}
            "
            fill="${lineColor}"
          />
        </g>

        <text x="${cx}" y="${cy + 5}" text-anchor="middle">${speed}</text>
      </svg>
    `;
    }
    constructor(...args){
        super(...args), this.windBearing = 0, this.windSpeed = 0, this.windUnit = "m/s", this.size = 35, this.radius = 15, this.type = "bearing";
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "windBearing", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "windSpeed", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "windUnit", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "size", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "radius", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8.prototype, "type", void 0);
$8d14f4859ba2ea7a$export$fe0c53150e2959b8 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-wind-indicator")
], $8d14f4859ba2ea7a$export$fe0c53150e2959b8);
const $8d14f4859ba2ea7a$var$computeLineColor = (windSpeed, windUnit)=>{
    const unit = windUnit.toLowerCase();
    const multipliers = {
        "km/h": 1 / 3.6,
        kmh: 1 / 3.6,
        mph: 0.44704,
        kn: 0.514444,
        kt: 0.514444,
        knot: 0.514444,
        knots: 0.514444
    };
    const multiplier = multipliers[unit] ?? 1;
    const speedMS = windSpeed * multiplier;
    if (speedMS <= 3) return "var(--wfc-wind-low)";
    if (speedMS <= 8) return "var(--wfc-wind-medium)";
    return "var(--wfc-wind-high)";
};


class $800051c33f2152be$export$307d8e55955831a9 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.forecast) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-forecast-slot-info">
        ${this.getExtraInfo() ?? (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
      </div>
    `;
    }
    getExtraInfo() {
        const attribute = this.config?.forecast?.extra_attribute;
        if (!attribute) return null;
        if (attribute === "precipitation_probability") {
            const probability = Math.round(this.forecast.precipitation_probability || 0);
            return probability > 0 ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
            <span class="wfc-forecast-precip-probability wfc-secondary">
              ${probability < 10 ? `<10%` : `${probability}%`}
            </span>
          ` : null;
        } else if (attribute === "wind_bearing" || attribute === "wind_direction") {
            const windSpeed = this.forecast.wind_speed || 0;
            const windBearing = this.forecast.wind_bearing || 0;
            const windUnit = this.hass.states[this.config.entity]?.attributes?.wind_speed_unit || this.hass.config?.unit_system?.wind_speed || "m/s";
            return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<wfc-wind-indicator
        .windBearing="${windBearing}"
        .windSpeed="${windSpeed}"
        .windUnit="${windUnit}"
        .type="${attribute === "wind_direction" ? "direction" : "bearing"}"
      ></wfc-wind-indicator>`;
        } else (0, $19702c521a648d13$export$af88d00dbe7f521).warn(`Unsupported forecast.extra_attribute: ${attribute}`);
        return null;
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $800051c33f2152be$export$307d8e55955831a9.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $800051c33f2152be$export$307d8e55955831a9.prototype, "forecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $800051c33f2152be$export$307d8e55955831a9.prototype, "config", void 0);
$800051c33f2152be$export$307d8e55955831a9 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-forecast-info")
], $800051c33f2152be$export$307d8e55955831a9);


class $d351506912607216$export$2f21f03ebbea562e extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    connectedCallback() {
        super.connectedCallback();
        this.maxPrecipitation = (0, $9547816cba2a40b2$export$99f5c9dd8f0f996b)((0, $9547816cba2a40b2$export$a94cf610ac0519b4)(this.hass, this.weatherEntity, "precipitation"), this.forecastType);
    }
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.forecast?.length) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const forecastTemplates = [];
        let currentDay;
        this.forecast.forEach((forecast)=>{
            if (!forecast.datetime) return;
            if (this.forecastType === "hourly") {
                const forecastDay = (0, $cec8c66d67f18323$export$a7f242eff11c1345)(this.hass, forecast.datetime);
                if (currentDay !== forecastDay) {
                    currentDay = forecastDay;
                    forecastTemplates.push((0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div class="wfc-day-indicator-container">
              <div class="wfc-day-indicator">${forecastDay}</div>
            </div>`);
                }
            }
            forecastTemplates.push((0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
          <div class="wfc-forecast-slot">
            <wfc-forecast-header-items
              .hass=${this.hass}
              .forecast=${forecast}
              .forecastType=${this.forecastType}
              .config=${this.config}
            ></wfc-forecast-header-items>
            <wfc-forecast-details
              .hass=${this.hass}
              .forecast=${forecast}
              .maxPrecipitation=${this.maxPrecipitation}
              .config=${this.config}
            ></wfc-forecast-details>
            <wfc-forecast-info
              .hass=${this.hass}
              .forecast=${forecast}
              .config=${this.config}
            ></wfc-forecast-info>
          </div>
        `);
        });
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-forecast wfc-scroll-container">${forecastTemplates}</div>
    `;
    }
    constructor(...args){
        super(...args), this.forecast = [], this.maxPrecipitation = 0;
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $d351506912607216$export$2f21f03ebbea562e.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $d351506912607216$export$2f21f03ebbea562e.prototype, "weatherEntity", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $d351506912607216$export$2f21f03ebbea562e.prototype, "forecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $d351506912607216$export$2f21f03ebbea562e.prototype, "forecastType", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $d351506912607216$export$2f21f03ebbea562e.prototype, "config", void 0);
$d351506912607216$export$2f21f03ebbea562e = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-forecast-simple")
], $d351506912607216$export$2f21f03ebbea562e);












class $e2bb95eb281e9e8a$export$4ef10b5b8925079c extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.state || !this.config) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const classes = this.getClasses();
        const icon = this.getWeatherStateIcon();
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)` <div class="${classes}">${icon}</div> `;
    }
    getClasses() {
        return this.classes ? `wfc-weather-condition-icon-slot ${this.classes}` : "wfc-weather-condition-icon-slot";
    }
    getWeatherStateIcon() {
        if (this.config?.icons_path?.trim()) {
            const { path: path, state: state } = this.getCustomWeatherIconPath();
            return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)` <img src="${path}" alt="${state}" /> `;
        }
        const userDefinedIcon = getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);
        if (userDefinedIcon) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
        <div
          style="background-size: cover;${(0, $f3c0ee04a587c8fb$export$1e5b4ce2fa884e6a)({
            "background-image": userDefinedIcon
        })}"
        ></div>
      `;
        if ($e2bb95eb281e9e8a$var$weatherSVGs.has(this.state)) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`${$e2bb95eb281e9e8a$var$getWeatherStateSVG(this.state, this.isNightTime)}`;
        return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
    }
    constructor(...args){
        super(...args), this.isNightTime = false, this.state = "exceptional", this.getCustomWeatherIconPath = ()=>{
            let condition = $e2bb95eb281e9e8a$var$weatherSVGs.has(this.state) ? this.state : "exceptional";
            if (this.isNightTime) {
                if (this.state === "partlycloudy") condition = "partlycloudy-night";
                else if (this.state === "sunny") condition = "clear-night";
            }
            const iconsPath = this.config.icons_path?.trim().replace(/\/$/, "");
            return {
                path: `${iconsPath}/${condition}.svg`,
                state: condition
            };
        };
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e2bb95eb281e9e8a$export$4ef10b5b8925079c.prototype, "config", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e2bb95eb281e9e8a$export$4ef10b5b8925079c.prototype, "classes", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e2bb95eb281e9e8a$export$4ef10b5b8925079c.prototype, "isNightTime", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $e2bb95eb281e9e8a$export$4ef10b5b8925079c.prototype, "state", void 0);
$e2bb95eb281e9e8a$export$4ef10b5b8925079c = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-weather-condition-icon-provider")
], $e2bb95eb281e9e8a$export$4ef10b5b8925079c);
const $e2bb95eb281e9e8a$var$weatherSVGs = new Set([
    "clear-night",
    "cloudy",
    "exceptional",
    "fog",
    "lightning",
    "lightning-rainy",
    "partlycloudy",
    "pouring",
    "rainy",
    "hail",
    "snowy",
    "snowy-rainy",
    "sunny",
    "windy",
    "windy-variant"
]);
const $e2bb95eb281e9e8a$var$cloudyStates = new Set([
    "partlycloudy",
    "cloudy",
    "fog",
    "windy",
    "windy-variant",
    "hail",
    "rainy",
    "snowy",
    "snowy-rainy",
    "pouring",
    "lightning",
    "lightning-rainy"
]);
const $e2bb95eb281e9e8a$var$rainStates = new Set([
    "hail",
    "rainy",
    "pouring"
]);
const $e2bb95eb281e9e8a$var$windyStates = new Set([
    "windy",
    "windy-variant"
]);
const $e2bb95eb281e9e8a$var$snowyStates = new Set([
    "snowy",
    "snowy-rainy"
]);
const $e2bb95eb281e9e8a$var$lightningStates = new Set([
    "lightning",
    "lightning-rainy"
]);
const $e2bb95eb281e9e8a$var$getWeatherStateSVG = (state, nightTime)=>(0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${state === "sunny" ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        ` : ""}
  ${state === "clear-night" ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        ` : ""}
  ${state === "partlycloudy" && nightTime ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        ` : state === "partlycloudy" ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        ` : ""}
  ${$e2bb95eb281e9e8a$var$cloudyStates.has(state) ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        ` : ""}
  ${$e2bb95eb281e9e8a$var$rainStates.has(state) ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        ` : ""}
  ${state === "pouring" ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        ` : ""}
  ${$e2bb95eb281e9e8a$var$windyStates.has(state) ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        ` : ""}
  ${$e2bb95eb281e9e8a$var$snowyStates.has(state) ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="snow"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="snow"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="snow"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        ` : ""}
  ${$e2bb95eb281e9e8a$var$lightningStates.has(state) ? (0, $ad0512c2874d4e1a$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        ` : ""}
  </svg>`;



class $54bc4c825b876f43$export$dc1e52f88bfbd6d9 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.weatherEntity) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const { state: state } = this.weatherEntity;
        const tempInfo = this.getTemperature();
        const tempHighLowInfo = this.getTemperatureHighLow();
        const name = this.config.name || this.weatherEntity.attributes.friendly_name;
        const suntimesInfo = (0, $cec8c66d67f18323$export$b266695db58ff2ef)(this.hass, new Date());
        const isNightTime = this.config.forecast?.show_sun_times && suntimesInfo ? suntimesInfo.isNightTime : false;
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div class="wfc-current-weather">
        <div class="wfc-current-conditions">
          <wfc-weather-condition-icon-provider
            .config=${this.config}
            .state=${state}
            .isNightTime=${isNightTime}
            .classes=${"wfc-current-icon"}
          ></wfc-weather-condition-icon-provider>
          <div class="wfc-name-state">
            <div class="wfc-current-state">
              ${this.hass?.formatEntityState?.(this.weatherEntity)}
            </div>
            ${name ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div class="wfc-name wfc-secondary">${name}</div>` : (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
          </div>
        </div>
        ${tempInfo !== null ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
              <div class="wfc-current-temperatures">
                <div
                  class="wfc-current-temperature"
                  .actionHandler=${(0, $623c66717742c4ec$export$8a44987212de21b)({
            stopPropagation: true,
            hasHold: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.hold_action),
            hasDoubleClick: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.double_tap_action)
        })}
                  @action=${this.onAction}
                >
                  ${tempInfo.temperature}${tempInfo.temperatureUnit}
                </div>
                ${tempHighLowInfo ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
                      <div
                        class="wfc-current-temperature-high-low wfc-secondary"
                      >
                        ${tempHighLowInfo.temperatureHigh}${tempHighLowInfo.temperatureHighLowUnit}
                        /
                        ${tempHighLowInfo.temperatureLow}${tempHighLowInfo.temperatureHighLowUnit}
                      </div>
                    ` : (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
              </div>
            ` : (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
      </div>
    `;
    }
    getTemperature() {
        if (this.config?.temperature_entity) {
            const tempEntity = this.hass.states[this.config.temperature_entity];
            if (tempEntity) return {
                temperature: (0, $0412f1070fcb3161$export$f5dd818bff069720)(tempEntity.state, this.hass.locale),
                temperatureUnit: tempEntity.attributes.unit_of_measurement || this.hass.config?.unit_system?.temperature
            };
        }
        if (this.weatherEntity.attributes.temperature) return {
            temperature: (0, $0412f1070fcb3161$export$f5dd818bff069720)(this.weatherEntity.attributes.temperature, this.hass.locale),
            temperatureUnit: (0, $9547816cba2a40b2$export$a94cf610ac0519b4)(this.hass, this.weatherEntity, "temperature")
        };
        return null;
    }
    getTemperatureHighLow() {
        if (!this.dailyForecast || this.dailyForecast.length === 0) return null;
        const high = this.dailyForecast[0]?.temperature;
        const low = this.dailyForecast[0]?.templow;
        if (high && low) return {
            temperatureHigh: (0, $0412f1070fcb3161$export$f5dd818bff069720)(high, this.hass.locale),
            temperatureLow: (0, $0412f1070fcb3161$export$f5dd818bff069720)(low, this.hass.locale),
            temperatureHighLowUnit: (0, $9547816cba2a40b2$export$a94cf610ac0519b4)(this.hass, this.weatherEntity, "temperature")
        };
        return null;
    }
    constructor(...args){
        super(...args), this.onAction = (event)=>{
            const config = this.config.temperature_entity ? {
                ...this.config,
                entity: this.config.temperature_entity
            } : this.config;
            (0, $0412f1070fcb3161$export$6c6c3f4b7541eaf1)(this, this.hass, config, event.detail.action);
        };
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $54bc4c825b876f43$export$dc1e52f88bfbd6d9.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $54bc4c825b876f43$export$dc1e52f88bfbd6d9.prototype, "weatherEntity", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $54bc4c825b876f43$export$dc1e52f88bfbd6d9.prototype, "dailyForecast", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $54bc4c825b876f43$export$dc1e52f88bfbd6d9.prototype, "config", void 0);
$54bc4c825b876f43$export$dc1e52f88bfbd6d9 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("wfc-current-weather")
], $54bc4c825b876f43$export$dc1e52f88bfbd6d9);


const $56b293b67ea81167$var$DEFAULT_CONFIG = {
    type: "custom:weather-forecast-card",
    show_current: true,
    show_forecast: true,
    default_forecast: "daily",
    forecast: {
        mode: (0, $24b1361a8f4eb21b$export$3f4c2f605b6a3199).Simple,
        show_sun_times: true
    },
    forecast_action: {
        tap_action: {
            action: "toggle-forecast"
        }
    },
    tap_action: {
        action: "more-info"
    }
};
class $56b293b67ea81167$export$c2fefc327131811a extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $10a5d45eadbd8df0$export$9dd6ff9ea0189349);
    }
    static async getConfigElement() {
        return document.createElement("weather-forecast-card-editor");
    }
    static getStubConfig(hass) {
        const weatherEntities = Object.keys(hass?.states ?? {}).filter((entityId)=>entityId.startsWith("weather."));
        const defaultEntity = weatherEntities.find((entityId)=>entityId === "weather.home") || weatherEntities[0] || "";
        return {
            ...$56b293b67ea81167$var$DEFAULT_CONFIG,
            entity: defaultEntity
        };
    }
    setConfig(config) {
        if (!config || !config.entity) throw new Error("entity is required");
        if (config.show_current === false && config.show_forecast === false) throw new Error("At least one of show_current or show_forecast must be true");
        this.config = (0, $7d34737af2e0c897$export$2e2bcd8739ae039)({}, $56b293b67ea81167$var$DEFAULT_CONFIG, config);
        this._currentForecastType = this.config.default_forecast || "daily";
    }
    connectedCallback() {
        super.connectedCallback();
        this._minForecastItemWidth = this.getInitialMinForecastItemWidth();
        this.waitForLayout();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribeForecastEvents();
        this._resizeObserver?.disconnect();
        this._resizeObserver = null;
        // Make sure the component indicates no visibility when disconnected
        // This impacts the layout calculations when re-connected to the DOM.
        this._currentItemWidth = 0;
    }
    shouldUpdate(changedProperties) {
        return (0, $0412f1070fcb3161$export$695b4dbcc1028091)(this, changedProperties, false) || changedProperties.has("_dailyForecastEvent") || changedProperties.has("_hourlyForecastEvent") || changedProperties.has("_currentForecastType") || changedProperties.has("_currentItemWidth");
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this.config || !this.hass) return;
        if (changedProps.has("config") || this.haveWeatherUnitsChanged(changedProps) || !this._hourlySubscription && !this._dailySubscription) this.subscribeForecastEvents();
        // Depending on which forecast is shown, layout has to be recalculated if for example
        // the gap or item width changes when there are fewer items on the container.
        if (changedProps.has("_currentForecastType")) {
            if (this._forecastContainer) this.layoutForecastItems(this._forecastContainer.clientWidth);
        }
    }
    render() {
        if (!this.config || !this.hass) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const entity = this.config.entity;
        const stateObject = this.hass.states[entity];
        if (!stateObject) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<hui-warning>
        ${(0, $cec8c66d67f18323$export$4aedea6f9b4cfc61)(this.hass, entity)}
      </hui-warning>`;
        if (!this._hourlyForecastData && !this._dailyForecastData) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const isChartMode = this.config.forecast?.mode === (0, $24b1361a8f4eb21b$export$3f4c2f605b6a3199).Chart;
        const currentForecast = this._currentForecastType === "hourly" ? this._hourlyForecastData : this._dailyForecastData;
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <ha-card>
        <div class="wfc-container">
          ${this.config.show_current ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div
                class="wfc-current-weather-container"
                .actionHandler=${(0, $623c66717742c4ec$export$8a44987212de21b)({
            hasHold: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.hold_action),
            hasDoubleClick: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.double_tap_action)
        })}
                @action=${this.onCardAction}
              >
                <wfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${stateObject}
                  .config=${this.config}
                  .dailyForecast=${this._dailyForecastData}
                ></wfc-current-weather>
              </div>` : (0, $ad0512c2874d4e1a$export$45b790e32b2810ee)}
          ${this.config.show_forecast === false ? (0, $ad0512c2874d4e1a$export$45b790e32b2810ee) : (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div
                class="wfc-forecast-container"
                .actionHandler=${(0, $623c66717742c4ec$export$8a44987212de21b)({
            hasHold: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.forecast_action?.hold_action),
            hasDoubleClick: (0, $0412f1070fcb3161$export$e217e69099d082f5)(this.config.forecast_action?.double_tap_action)
        })}
                @action=${this.onForecastAction}
              >
                ${isChartMode ? (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
                      <wfc-forecast-chart
                        .hass=${this.hass}
                        .config=${this.config}
                        .weatherEntity=${stateObject}
                        .forecast=${currentForecast}
                        .forecastType=${this._currentForecastType}
                        .itemWidth=${this._currentItemWidth}
                      ></wfc-forecast-chart>
                    ` : (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
                      <wfc-forecast-simple
                        .hass=${this.hass}
                        .config=${this.config}
                        .weatherEntity=${stateObject}
                        .forecast=${currentForecast}
                        .forecastType=${this._currentForecastType}
                      ></wfc-forecast-simple>
                    `}
              </div>`}
        </div>
      </ha-card>
    `;
    }
    waitForLayout() {
        if (!this.isConnected) return;
        if (!this._forecastContainer) this._forecastContainer = this.renderRoot?.querySelector(".wfc-forecast-container");
        const width = this._forecastContainer?.clientWidth || 0;
        // We may need to wait for the container to have width (e.g. popup open animation)
        // before we can initialize the ResizeObserver.
        if (width > 0) this.initResizeObserver();
        else requestAnimationFrame(()=>this.waitForLayout());
    }
    initResizeObserver() {
        if (this._resizeObserver || !this._forecastContainer) return;
        this._resizeObserver = new ResizeObserver((entries)=>{
            for (const entry of entries)if (entry.contentRect.width > 0) this.layoutForecastItems(entry.contentRect.width);
        });
        this._resizeObserver.observe(this._forecastContainer);
        // Force immediate layout now that we know we have width
        this.layoutForecastItems(this._forecastContainer.clientWidth);
    }
    getInitialMinForecastItemWidth() {
        const computedStyle = getComputedStyle(this);
        const itemWidth = computedStyle.getPropertyValue("--forecast-item-width").trim();
        return parseInt(itemWidth || "60", 10);
    }
    processForecastData() {
        if (!this._dailyForecastEvent && !this._hourlyForecastEvent) return;
        const { attributes: attributes } = this.hass.states[this.config.entity];
        if (!attributes) return;
        const hourlyForecastData = (0, $9547816cba2a40b2$export$c1e906046b5de973)(attributes, this._hourlyForecastEvent, "hourly");
        const dailyForecastData = (0, $9547816cba2a40b2$export$c1e906046b5de973)(attributes, this._dailyForecastEvent, "daily");
        if (!hourlyForecastData && !dailyForecastData) return;
        this._dailyForecastData = dailyForecastData?.forecast;
        const hourlyGroupSize = this.config?.forecast?.hourly_group_size || 0;
        if (hourlyGroupSize > 1 && hourlyForecastData?.forecast) this._hourlyForecastData = (0, $9547816cba2a40b2$export$9cb9630ccf5284ab)(hourlyForecastData.forecast, hourlyGroupSize);
        else this._hourlyForecastData = hourlyForecastData?.forecast;
    }
    _toggleForecastView() {
        this._currentForecastType = this._currentForecastType === "daily" ? "hourly" : "daily";
    }
    unsubscribeForecastEvents() {
        (0, $19702c521a648d13$export$af88d00dbe7f521).debug("Unsubscribing from forecast events");
        this._dailySubscription?.then((unsub)=>unsub());
        this._hourlySubscription?.then((unsub)=>unsub());
    }
    async subscribeForecastEvents() {
        this.unsubscribeForecastEvents();
        if (!this.isConnected || !this.hass || !this.config || !this.hass.config.components.includes("weather") || !this.hass.states[this.config.entity]) return;
        if (!(0, $9547816cba2a40b2$export$cd2fc90c9579d3fd)(this.hass.states[this.config.entity])) {
            (0, $19702c521a648d13$export$af88d00dbe7f521).warn("Weather entity does not support all forecast features.");
            return;
        }
        (0, $19702c521a648d13$export$af88d00dbe7f521).debug("Subscribing to forecast events");
        try {
            this._dailySubscription = Promise.resolve((0, $9547816cba2a40b2$export$ace10bd47409a000)(this.hass, this.config.entity, "daily", (event)=>{
                this._dailyForecastEvent = event;
                this.processForecastData();
            }));
        } catch (error) {
            if (error.code === "invalid_entity_id") setTimeout(()=>{
                this._dailyForecastEvent = undefined;
            }, 2000);
            throw error;
        }
        try {
            this._hourlySubscription = Promise.resolve((0, $9547816cba2a40b2$export$ace10bd47409a000)(this.hass, this.config.entity, "hourly", (event)=>{
                this._hourlyForecastEvent = event;
                this.processForecastData();
            }));
        } catch (error) {
            if (error.code === "invalid_entity_id") setTimeout(()=>{
                this._hourlyForecastEvent = undefined;
            }, 2000);
            throw error;
        }
    }
    layoutForecastItems(containerWidth) {
        if (containerWidth <= 0 || !this._minForecastItemWidth) return;
        const items = (this._currentForecastType === "hourly" ? this._hourlyForecastEvent?.forecast : this._dailyForecastEvent?.forecast) || [];
        if (!items.length) return;
        const itemsPerView = Math.max(1, Math.floor(containerWidth / this._minForecastItemWidth));
        const calculatedItemWidth = Math.floor(containerWidth / itemsPerView);
        const n = items.length;
        const totalItemsWidth = n * calculatedItemWidth;
        const freeSpace = containerWidth - totalItemsWidth;
        const gap = freeSpace > 0 ? freeSpace / (n - 1) : 0;
        this._currentItemWidth = calculatedItemWidth + gap;
        this.style.setProperty("--forecast-item-gap", `${gap}px`);
        this.style.setProperty("--forecast-item-width", `${calculatedItemWidth}px`);
    }
    haveWeatherUnitsChanged(changedProps) {
        if (!changedProps.has("hass") || !this.config?.entity) return false;
        const oldHass = changedProps.get("hass");
        const newHass = this.hass;
        if (!oldHass || !newHass) return false;
        const oldState = oldHass.states[this.config.entity];
        const newState = newHass.states[this.config.entity];
        if (!oldState || !newState) return false;
        return Object.values((0, $9547816cba2a40b2$export$4d77637090661a14)).some((unitKey)=>{
            return oldState.attributes[unitKey] !== newState.attributes[unitKey];
        });
    }
    constructor(...args){
        super(...args), this._currentForecastType = "daily", this._forecastContainer = null, this._resizeObserver = null, this.onForecastAction = (event)=>{
            if (!this.config) return;
            const action = event.detail.action;
            if (action === "tap" && this.config.forecast_action?.tap_action?.action === "toggle-forecast" || action === "hold" && this.config.forecast_action?.hold_action?.action === "toggle-forecast" || action === "double_tap" && this.config.forecast_action?.double_tap_action?.action === "toggle-forecast") this._toggleForecastView();
            else (0, $0412f1070fcb3161$export$6c6c3f4b7541eaf1)(this, this.hass, {
                entity: this.config.entity,
                tap_action: this.config.forecast_action?.tap_action,
                hold_action: this.config.forecast_action?.hold_action,
                double_tap_action: this.config.forecast_action?.double_tap_action
            }, event.detail.action);
        }, this.onCardAction = (event)=>{
            (0, $0412f1070fcb3161$export$6c6c3f4b7541eaf1)(this, this.hass, this.config, event.detail.action);
        };
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "config", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_dailySubscription", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_hourlySubscription", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_dailyForecastEvent", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_hourlyForecastEvent", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_currentItemWidth", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $56b293b67ea81167$export$c2fefc327131811a.prototype, "_currentForecastType", void 0);


var $db183fbae05d6b51$exports = {};
$db183fbae05d6b51$exports = JSON.parse("{\"name\":\"weather-forecast-card\",\"version\":\"0.3.0\",\"description\":\"A TypeScript weather forecast card built with Parcel\",\"type\":\"module\",\"module\":\"dist/weather-forecast-card.js\",\"targets\":{\"module\":{\"distDir\":\"./dist\",\"source\":[\"src/index.ts\"],\"publicUrl\":\"/hacsfiles/ha-weather-forecast-card/\",\"includeNodeModules\":true}},\"scripts\":{\"dev\":\"parcel serve test/app/index.html test/app/resources/img/*.svg --open\",\"build\":\"parcel build --no-source-maps --target module\",\"clean\":\"rm -rf ./dist/ ./.parcel-cache\",\"preview\":\"parcel serve test/app/index.html --no-hmr\"},\"keywords\":[],\"author\":\"\",\"license\":\"ISC\",\"dependencies\":{\"chart.js\":\"^4.5.1\",\"chartjs-plugin-datalabels\":\"^2.2.0\",\"consola\":\"^3.4.2\",\"custom-card-helpers\":\"^1.9.0\",\"home-assistant-js-websocket\":\"^9.5.0\",\"lit\":\"^3.1.0\",\"lodash-es\":\"^4.17.21\",\"memoize-one\":\"^6.0.0\",\"suncalc\":\"^1.9.0\"},\"devDependencies\":{\"@parcel/transformer-inline-string\":\"2.16.1\",\"@types/lodash-es\":\"^4.17.12\",\"@types/lodash.merge\":\"^4.6.9\",\"@types/node\":\"^20.10.0\",\"@types/suncalc\":\"^1.9.2\",\"parcel\":\"^2.16.1\",\"typescript\":\"^5.9.3\"}}");







class $b37e4fca192b74c6$export$6ccdcb946a3763b7 extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this.hass || !this._config) return 0, $ad0512c2874d4e1a$export$45b790e32b2810ee;
        const schema = this._schema(this.hass.localize);
        const data = {
            ...$b37e4fca192b74c6$var$flattenNestedKeys(this._config)
        };
        data.forecast_mode = data.show_current && data.show_forecast ? "show_both" : data.show_current ? "show_current" : "show_forecast";
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
    `;
    }
    _valueChanged(ev) {
        ev.stopPropagation();
        const config = ev.detail.value;
        if (config.forecast_mode === "show_both") {
            config.show_current = true;
            config.show_forecast = true;
        } else if (config.forecast_mode === "show_current") {
            config.show_current = true;
            config.show_forecast = false;
        } else {
            config.show_current = false;
            config.show_forecast = true;
        }
        delete config.forecast_mode;
        const newConfig = $b37e4fca192b74c6$var$moveDottedKeysToNested(config);
        if (newConfig?.forecast?.extra_attribute === "none") delete newConfig.forecast.extra_attribute;
        (0, $0412f1070fcb3161$export$43835e9acf248a15)(this, "config-changed", {
            config: newConfig
        });
    }
    constructor(...args){
        super(...args), this._schema = (0, $d54dfc44cec4eb2f$export$2e2bcd8739ae039)((localize)=>[
                ...this._genericSchema(localize),
                ...this._forecastSchema(localize),
                ...this._interactionsSchema(localize),
                ...this._advancedSchema(localize)
            ]), this._genericSchema = (localize)=>[
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            domain: "weather"
                        }
                    },
                    optional: false
                },
                {
                    name: "name",
                    selector: {
                        text: {}
                    },
                    optional: true
                },
                {
                    name: "temperature_entity",
                    selector: {
                        entity: {
                            domain: "sensor",
                            device_class: "temperature"
                        }
                    },
                    optional: true
                },
                {
                    name: "forecast_mode",
                    default: "show_both",
                    selector: {
                        select: {
                            options: [
                                {
                                    value: "show_both",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.show_both")
                                },
                                {
                                    value: "show_current",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")
                                },
                                {
                                    value: "show_forecast",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")
                                }
                            ]
                        }
                    }
                },
                {
                    name: "default_forecast",
                    default: "daily",
                    optional: true,
                    selector: {
                        select: {
                            options: [
                                {
                                    value: "hourly",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.hourly")
                                },
                                {
                                    value: "daily",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.daily")
                                }
                            ]
                        }
                    }
                }
            ], this._forecastSchema = (localize)=>[
                {
                    name: "forecast.mode",
                    default: "simple",
                    selector: {
                        select: {
                            options: [
                                {
                                    value: "simple",
                                    label: "Simple"
                                },
                                {
                                    value: "chart",
                                    label: "Chart"
                                }
                            ]
                        }
                    },
                    optional: true
                },
                {
                    name: "forecast.extra_attribute",
                    optional: true,
                    selector: {
                        select: {
                            mode: "dropdown",
                            options: [
                                {
                                    value: "none",
                                    label: localize("ui.panel.lovelace.editor.card.weather-forecast.none") || "(no attribute)"
                                },
                                {
                                    value: "wind_bearing",
                                    label: localize("ui.card.weather.attributes.wind_bearing") || "Wind bearing"
                                },
                                {
                                    value: "wind_direction",
                                    label: localize("ui.card.weather.attributes.wind_direction") || "Wind direction"
                                },
                                {
                                    value: "precipitation_probability",
                                    label: localize("ui.card.weather.attributes.precipitation_probability") || "Precipitation probability"
                                }
                            ]
                        }
                    }
                },
                {
                    name: "forecast.show_sun_times",
                    selector: {
                        boolean: {}
                    },
                    default: true,
                    optional: true
                },
                {
                    name: "forecast.hourly_group_size",
                    optional: true,
                    selector: {
                        number: {
                            min: 1,
                            max: 4
                        }
                    },
                    default: 1
                }
            ], this._interactionsSchema = (localize)=>[
                {
                    name: "forecast_interactions",
                    type: "expandable",
                    flatten: true,
                    schema: [
                        {
                            name: "forecast_action.tap_action",
                            selector: {
                                ui_action: {
                                    default_action: "toggle-forecast"
                                }
                            }
                        },
                        {
                            name: "",
                            type: "optional_actions",
                            flatten: true,
                            schema: [
                                "hold_action",
                                "double_tap_action"
                            ].map((action)=>({
                                    name: `forecast_action.${action}`,
                                    selector: {
                                        ui_action: {
                                            default_action: "none"
                                        }
                                    }
                                }))
                        }
                    ]
                },
                {
                    name: "interactions",
                    type: "expandable",
                    flatten: true,
                    schema: [
                        {
                            name: "tap_action",
                            selector: {
                                ui_action: {
                                    default_action: "more-info"
                                }
                            }
                        },
                        {
                            name: "",
                            type: "optional_actions",
                            flatten: true,
                            schema: [
                                "hold_action",
                                "double_tap_action"
                            ].map((action)=>({
                                    name: action,
                                    selector: {
                                        ui_action: {
                                            default_action: "none"
                                        }
                                    }
                                }))
                        }
                    ]
                }
            ], this._advancedSchema = (localize)=>[
                {
                    name: "advanced_settings",
                    type: "expandable",
                    flatten: true,
                    schema: [
                        {
                            name: "icons_path",
                            selector: {
                                text: {}
                            },
                            optional: true
                        }
                    ]
                }
            ], this._computeLabel = (schema)=>{
            const name = schema.name.startsWith("forecast_action.") ? schema.name.split(".")[1] : schema.name;
            switch(name){
                case "entity":
                    return `${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required") || "required").toLocaleLowerCase()})`;
                case "name":
                    return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");
                case "temperature_entity":
                    return `${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity") || "entity").toLocaleLowerCase()}`;
                case "forecast_mode":
                    return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");
                case "default_forecast":
                    return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");
                case "icons_path":
                    return "Path to custom icons";
                case "forecast.extra_attribute":
                    return `Extra ${(this.hass.localize("ui.card.weather.forecast") || "forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute") || "attribute").toLocaleLowerCase()}`;
                case "forecast.mode":
                    return "Forecast display mode";
                case "forecast.show_sun_times":
                    return "Show sunrise and sunset times";
                case "forecast.hourly_group_size":
                    return "Hourly forecast group size";
                case "forecast_interactions":
                    return `${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize(`ui.panel.lovelace.editor.card.generic.interactions`) || "interactions").toLocaleLowerCase()}`;
                case "advanced_settings":
                    return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");
                default:
                    return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${name}`);
            }
        }, this._computeHelper = (schema)=>{
            switch(schema.name){
                case "temperature_entity":
                    return "Optional temperature sensor entity to override the weather entity's temperature.";
                case "default_forecast":
                    return "Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";
                case "forecast.extra_attribute":
                    return "Select an extra attribute to display below each forecast.";
                case "forecast_interactions":
                    return "Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";
                case "interactions":
                    return "Action to perform when the non-forecast area of the card is interacted with.";
                case "icons_path":
                    return "Path to custom weather condition icons (e.g., /local/img/weather).";
                case "forecast.hourly_group_size":
                    return "Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";
                case "name":
                    return "Overrides the friendly name of the entity.";
                default:
                    return undefined;
            }
        };
    }
}
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $acb99ac649e303dc$export$d541bacb2bda4494)({
        attribute: false
    })
], $b37e4fca192b74c6$export$6ccdcb946a3763b7.prototype, "hass", void 0);
(0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $51a92eda89022b33$export$ca000e230c0caa3e)()
], $b37e4fca192b74c6$export$6ccdcb946a3763b7.prototype, "_config", void 0);
$b37e4fca192b74c6$export$6ccdcb946a3763b7 = (0, $f33b121d8786b813$export$29e00dfd3077644b)([
    (0, $69a36672d671e49d$export$da64fc29f17f9d0e)("weather-forecast-card-editor")
], $b37e4fca192b74c6$export$6ccdcb946a3763b7);
const $b37e4fca192b74c6$var$moveDottedKeysToNested = (obj)=>{
    const result = {
        ...obj
    };
    for (const key of Object.keys(obj)){
        if (!key.startsWith("forecast.") && !key.startsWith("forecast_action.")) continue;
        const parts = key.split(".");
        if (parts.length < 2) continue;
        const [prefix, prop] = parts;
        if (!prefix || !prop) continue;
        if (!result[prefix] || typeof result[prefix] !== "object") result[prefix] = {};
        result[prefix][prop] = obj[key];
        delete result[key];
    }
    return result;
};
const $b37e4fca192b74c6$var$flattenNestedKeys = (obj)=>{
    const result = {};
    for(const key in obj){
        const value = obj[key];
        if (key === "forecast" && value && typeof value === "object" && !Array.isArray(value)) {
            for(const innerKey in value)result[`forecast.${innerKey}`] = value[innerKey];
            continue;
        }
        if (key === "forecast_action" && value && typeof value === "object" && !Array.isArray(value)) {
            for(const innerKey in value)result[`forecast_action.${innerKey}`] = value[innerKey];
            continue;
        }
        result[key] = value;
    }
    return result;
};


customElements.define("weather-forecast-card", (0, $56b293b67ea81167$export$c2fefc327131811a));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "weather-forecast-card",
    name: "Weather Forecast Card",
    description: "Weather forecast card for Home Assistant"
});
console.info(`%cWEATHER-FORECAST-CARD %c${$db183fbae05d6b51$exports.version}`, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");


