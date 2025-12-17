
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * Room Summary Card Registration Module
 *
 * This module handles the registration of the Room Summary Card custom element
 * with the browser and Home Assistant's custom card registry. It makes the
 * component available for use in Home Assistant dashboards.
 */ /**
 * Room Summary Card Component
 *
 * A custom element that displays a summary of room information in Home Assistant.
 * This card shows room state, climate information, and various entity states in a
 * grid layout with interactive elements.
 *
 * @version See package.json
 */ /******************************************************************************
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $a90010e54f817fa8$var$extendStatics = function(d, b) {
    $a90010e54f817fa8$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $a90010e54f817fa8$var$extendStatics(d, b);
};
function $a90010e54f817fa8$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $a90010e54f817fa8$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $a90010e54f817fa8$export$18ce0697a983be9b = function() {
    $a90010e54f817fa8$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $a90010e54f817fa8$export$18ce0697a983be9b.apply(this, arguments);
};
function $a90010e54f817fa8$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $a90010e54f817fa8$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $a90010e54f817fa8$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $a90010e54f817fa8$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
function $a90010e54f817fa8$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $a90010e54f817fa8$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $a90010e54f817fa8$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $a90010e54f817fa8$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $a90010e54f817fa8$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
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
function $a90010e54f817fa8$export$67ebef60e6f28a6(thisArg, body) {
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
var $a90010e54f817fa8$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
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
function $a90010e54f817fa8$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $a90010e54f817fa8$export$45d3717a4c69092e(o, m, p);
}
function $a90010e54f817fa8$export$19a8beecd37a4c45(o) {
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
function $a90010e54f817fa8$export$8d051b38c9118094(o, n) {
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
function $a90010e54f817fa8$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($a90010e54f817fa8$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $a90010e54f817fa8$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $a90010e54f817fa8$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $a90010e54f817fa8$export$10c90e4f7922046c(v) {
    return this instanceof $a90010e54f817fa8$export$10c90e4f7922046c ? (this.v = v, this) : new $a90010e54f817fa8$export$10c90e4f7922046c(v);
}
function $a90010e54f817fa8$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
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
        r.value instanceof $a90010e54f817fa8$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
function $a90010e54f817fa8$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $a90010e54f817fa8$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $a90010e54f817fa8$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $a90010e54f817fa8$export$19a8beecd37a4c45 === "function" ? $a90010e54f817fa8$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
function $a90010e54f817fa8$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $a90010e54f817fa8$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $a90010e54f817fa8$var$ownKeys = function(o) {
    $a90010e54f817fa8$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $a90010e54f817fa8$var$ownKeys(o);
};
function $a90010e54f817fa8$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $a90010e54f817fa8$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $a90010e54f817fa8$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $a90010e54f817fa8$var$__setModuleDefault(result, mod);
    return result;
}
function $a90010e54f817fa8$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $a90010e54f817fa8$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $a90010e54f817fa8$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $a90010e54f817fa8$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $a90010e54f817fa8$export$88ac25d8e944e405(env, value, async) {
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
var $a90010e54f817fa8$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $a90010e54f817fa8$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $a90010e54f817fa8$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
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
function $a90010e54f817fa8$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $a90010e54f817fa8$export$2e2bcd8739ae039 = {
    __extends: $a90010e54f817fa8$export$a8ba968b8961cb8a,
    __assign: $a90010e54f817fa8$export$18ce0697a983be9b,
    __rest: $a90010e54f817fa8$export$3c9a16f847548506,
    __decorate: $a90010e54f817fa8$export$29e00dfd3077644b,
    __param: $a90010e54f817fa8$export$d5ad3fd78186038f,
    __esDecorate: $a90010e54f817fa8$export$3a84e1ae4e97e9b0,
    __runInitializers: $a90010e54f817fa8$export$d831c04e792af3d,
    __propKey: $a90010e54f817fa8$export$6a2a36740a146cb8,
    __setFunctionName: $a90010e54f817fa8$export$d1a06452d3489bc7,
    __metadata: $a90010e54f817fa8$export$f1db080c865becb9,
    __awaiter: $a90010e54f817fa8$export$1050f835b63b671e,
    __generator: $a90010e54f817fa8$export$67ebef60e6f28a6,
    __createBinding: $a90010e54f817fa8$export$45d3717a4c69092e,
    __exportStar: $a90010e54f817fa8$export$f33643c0debef087,
    __values: $a90010e54f817fa8$export$19a8beecd37a4c45,
    __read: $a90010e54f817fa8$export$8d051b38c9118094,
    __spread: $a90010e54f817fa8$export$afc72e2116322959,
    __spreadArrays: $a90010e54f817fa8$export$6388937ca91ccae8,
    __spreadArray: $a90010e54f817fa8$export$1216008129fb82ed,
    __await: $a90010e54f817fa8$export$10c90e4f7922046c,
    __asyncGenerator: $a90010e54f817fa8$export$e427f37a30a4de9b,
    __asyncDelegator: $a90010e54f817fa8$export$bbd80228419bb833,
    __asyncValues: $a90010e54f817fa8$export$e3b29a3d6162315f,
    __makeTemplateObject: $a90010e54f817fa8$export$4fb47efe1390b86f,
    __importStar: $a90010e54f817fa8$export$c21735bcef00d192,
    __importDefault: $a90010e54f817fa8$export$da59b14a69baef04,
    __classPrivateFieldGet: $a90010e54f817fa8$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $a90010e54f817fa8$export$d40a35129aaff81f,
    __classPrivateFieldIn: $a90010e54f817fa8$export$81fdc39f203e4e04,
    __addDisposableResource: $a90010e54f817fa8$export$88ac25d8e944e405,
    __disposeResources: $a90010e54f817fa8$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $a90010e54f817fa8$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $219a89f05d06a34f$var$t = globalThis, $219a89f05d06a34f$export$b4d10f6001c083c2 = $219a89f05d06a34f$var$t.ShadowRoot && (void 0 === $219a89f05d06a34f$var$t.ShadyCSS || $219a89f05d06a34f$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $219a89f05d06a34f$var$s = Symbol(), $219a89f05d06a34f$var$o = new WeakMap;
class $219a89f05d06a34f$export$505d1e8739bad805 {
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($219a89f05d06a34f$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $219a89f05d06a34f$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $219a89f05d06a34f$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $219a89f05d06a34f$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
}
const $219a89f05d06a34f$export$8d80f9cac07cdb3 = (t)=>new $219a89f05d06a34f$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $219a89f05d06a34f$var$s), $219a89f05d06a34f$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $219a89f05d06a34f$export$505d1e8739bad805(o, t, $219a89f05d06a34f$var$s);
}, $219a89f05d06a34f$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($219a89f05d06a34f$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $219a89f05d06a34f$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $219a89f05d06a34f$export$ee69dfd951e24778 = $219a89f05d06a34f$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $219a89f05d06a34f$export$8d80f9cac07cdb3(e);
    })(t) : t;


var $0f6d70ec1686f84d$var$_Symbol, $0f6d70ec1686f84d$var$_a, $0f6d70ec1686f84d$var$_a1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $0f6d70ec1686f84d$var$i, defineProperty: $0f6d70ec1686f84d$var$e, getOwnPropertyDescriptor: $0f6d70ec1686f84d$var$h, getOwnPropertyNames: $0f6d70ec1686f84d$var$r, getOwnPropertySymbols: $0f6d70ec1686f84d$var$o, getPrototypeOf: $0f6d70ec1686f84d$var$n } = Object, $0f6d70ec1686f84d$var$a = globalThis, $0f6d70ec1686f84d$var$c = $0f6d70ec1686f84d$var$a.trustedTypes, $0f6d70ec1686f84d$var$l = $0f6d70ec1686f84d$var$c ? $0f6d70ec1686f84d$var$c.emptyScript : "", $0f6d70ec1686f84d$var$p = $0f6d70ec1686f84d$var$a.reactiveElementPolyfillSupport, $0f6d70ec1686f84d$var$d = (t, s)=>t, $0f6d70ec1686f84d$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $0f6d70ec1686f84d$var$l : null;
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
}, $0f6d70ec1686f84d$export$53a6892c50694894 = (t, s)=>!$0f6d70ec1686f84d$var$i(t, s), $0f6d70ec1686f84d$var$b = {
    attribute: !0,
    type: String,
    converter: $0f6d70ec1686f84d$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $0f6d70ec1686f84d$export$53a6892c50694894
};
var $0f6d70ec1686f84d$var$_metadata, $0f6d70ec1686f84d$var$_litPropertyMetadata;
($0f6d70ec1686f84d$var$_metadata = ($0f6d70ec1686f84d$var$_Symbol = Symbol).metadata) !== null && $0f6d70ec1686f84d$var$_metadata !== void 0 ? $0f6d70ec1686f84d$var$_metadata : $0f6d70ec1686f84d$var$_Symbol.metadata = Symbol("metadata"), ($0f6d70ec1686f84d$var$_litPropertyMetadata = ($0f6d70ec1686f84d$var$_a = $0f6d70ec1686f84d$var$a).litPropertyMetadata) !== null && $0f6d70ec1686f84d$var$_litPropertyMetadata !== void 0 ? $0f6d70ec1686f84d$var$_litPropertyMetadata : $0f6d70ec1686f84d$var$_a.litPropertyMetadata = new WeakMap;
class $0f6d70ec1686f84d$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        var _this_l;
        this._$Ei(), ((_this_l = this.l) !== null && _this_l !== void 0 ? _this_l : this.l = []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $0f6d70ec1686f84d$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $0f6d70ec1686f84d$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        var _h;
        const { get: e, set: r } = (_h = $0f6d70ec1686f84d$var$h(this.prototype, t)) !== null && _h !== void 0 ? _h : {
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
                const h = e === null || e === void 0 ? void 0 : e.call(this);
                r === null || r === void 0 ? void 0 : r.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        var _this_elementProperties_get;
        return (_this_elementProperties_get = this.elementProperties.get(t)) !== null && _this_elementProperties_get !== void 0 ? _this_elementProperties_get : $0f6d70ec1686f84d$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($0f6d70ec1686f84d$var$d("elementProperties"))) return;
        const t = $0f6d70ec1686f84d$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($0f6d70ec1686f84d$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($0f6d70ec1686f84d$var$d("properties"))) {
            const t = this.properties, s = [
                ...$0f6d70ec1686f84d$var$r(t),
                ...$0f6d70ec1686f84d$var$o(t)
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
            for (const s of e)i.unshift((0, $219a89f05d06a34f$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $219a89f05d06a34f$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Ev() {
        var _this_constructor_l;
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), (_this_constructor_l = this.constructor.l) === null || _this_constructor_l === void 0 ? void 0 : _this_constructor_l.forEach((t)=>t(this));
    }
    addController(t) {
        var _t_hostConnected;
        var _this__$EO;
        ((_this__$EO = this._$EO) !== null && _this__$EO !== void 0 ? _this__$EO : this._$EO = new Set).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t));
    }
    removeController(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        var _this_shadowRoot;
        const t = (_this_shadowRoot = this.shadowRoot) !== null && _this_shadowRoot !== void 0 ? _this_shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $219a89f05d06a34f$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        var _this__$EO;
        var _this_renderRoot;
        (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(!0), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostConnected;
            return (_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostDisconnected;
            return (_t_hostDisconnected = t.hostDisconnected) === null || _t_hostDisconnected === void 0 ? void 0 : _t_hostDisconnected.call(t);
        });
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            var _i_converter;
            const h = (void 0 !== ((_i_converter = i.converter) === null || _i_converter === void 0 ? void 0 : _i_converter.toAttribute) ? i.converter : $0f6d70ec1686f84d$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            var _t_converter, _this__$Ej;
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== ((_t_converter = t.converter) === null || _t_converter === void 0 ? void 0 : _t_converter.fromAttribute) ? t.converter : $0f6d70ec1686f84d$export$7312b35fbf521afb;
            var _h_fromAttribute, _ref;
            this._$Em = e, this[e] = (_ref = (_h_fromAttribute = h.fromAttribute(s, t.type)) !== null && _h_fromAttribute !== void 0 ? _h_fromAttribute : (_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(e)) !== null && _ref !== void 0 ? _ref : null, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            var _this__$Ej;
            const e = this.constructor, h = this[t];
            var _i_hasChanged;
            if (i !== null && i !== void 0 ? i : i = e.getPropertyOptions(t), !(((_i_hasChanged = i.hasChanged) !== null && _i_hasChanged !== void 0 ? _i_hasChanged : $0f6d70ec1686f84d$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === ((_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(t)) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        var _this__$Ej, _ref, _this__$Eq;
        i && !((_this__$Ej = this._$Ej) !== null && _this__$Ej !== void 0 ? _this__$Ej : this._$Ej = new Map).has(t) && (this._$Ej.set(t, (_ref = r !== null && r !== void 0 ? r : s) !== null && _ref !== void 0 ? _ref : this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && ((_this__$Eq = this._$Eq) !== null && _this__$Eq !== void 0 ? _this__$Eq : this._$Eq = new Set).add(t));
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
            var _this_renderRoot;
            if ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this._$Ep) {
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
            var _this__$EO;
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
                var _t_hostUpdate;
                return (_t_hostUpdate = t.hostUpdate) === null || _t_hostUpdate === void 0 ? void 0 : _t_hostUpdate.call(t);
            }), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostUpdated;
            return (_t_hostUpdated = t.hostUpdated) === null || _t_hostUpdated === void 0 ? void 0 : _t_hostUpdated.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
        this._$Eq && (this._$Eq = this._$Eq.forEach((t)=>this._$ET(t, this[t]))), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
}
var $0f6d70ec1686f84d$var$_reactiveElementVersions;
$0f6d70ec1686f84d$export$c7c07a37856565d.elementStyles = [], $0f6d70ec1686f84d$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $0f6d70ec1686f84d$export$c7c07a37856565d[$0f6d70ec1686f84d$var$d("elementProperties")] = new Map, $0f6d70ec1686f84d$export$c7c07a37856565d[$0f6d70ec1686f84d$var$d("finalized")] = new Map, $0f6d70ec1686f84d$var$p === null || $0f6d70ec1686f84d$var$p === void 0 ? void 0 : $0f6d70ec1686f84d$var$p({
    ReactiveElement: $0f6d70ec1686f84d$export$c7c07a37856565d
}), (($0f6d70ec1686f84d$var$_reactiveElementVersions = ($0f6d70ec1686f84d$var$_a1 = $0f6d70ec1686f84d$var$a).reactiveElementVersions) !== null && $0f6d70ec1686f84d$var$_reactiveElementVersions !== void 0 ? $0f6d70ec1686f84d$var$_reactiveElementVersions : $0f6d70ec1686f84d$var$_a1.reactiveElementVersions = []).push("2.1.0");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $8f2793d8325bb031$var$_t;
const $8f2793d8325bb031$var$t = globalThis, $8f2793d8325bb031$var$i = $8f2793d8325bb031$var$t.trustedTypes, $8f2793d8325bb031$var$s = $8f2793d8325bb031$var$i ? $8f2793d8325bb031$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $8f2793d8325bb031$var$e = "$lit$", $8f2793d8325bb031$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $8f2793d8325bb031$var$o = "?" + $8f2793d8325bb031$var$h, $8f2793d8325bb031$var$n = `<${$8f2793d8325bb031$var$o}>`, $8f2793d8325bb031$var$r = document, $8f2793d8325bb031$var$l = ()=>$8f2793d8325bb031$var$r.createComment(""), $8f2793d8325bb031$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $8f2793d8325bb031$var$a = Array.isArray, $8f2793d8325bb031$var$u = (t)=>$8f2793d8325bb031$var$a(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]), $8f2793d8325bb031$var$d = "[ \t\n\f\r]", $8f2793d8325bb031$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $8f2793d8325bb031$var$v = /-->/g, $8f2793d8325bb031$var$_ = />/g, $8f2793d8325bb031$var$m = RegExp(`>|${$8f2793d8325bb031$var$d}(?:([^\\s"'>=/]+)(${$8f2793d8325bb031$var$d}*=${$8f2793d8325bb031$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $8f2793d8325bb031$var$p = /'/g, $8f2793d8325bb031$var$g = /"/g, $8f2793d8325bb031$var$$ = /^(?:script|style|textarea|title)$/i, $8f2793d8325bb031$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $8f2793d8325bb031$export$c0bb0b647f701bb5 = $8f2793d8325bb031$var$y(1), $8f2793d8325bb031$export$7ed1367e7fa1ad68 = $8f2793d8325bb031$var$y(2), $8f2793d8325bb031$export$47d5b44d225be5b4 = $8f2793d8325bb031$var$y(3), $8f2793d8325bb031$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $8f2793d8325bb031$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $8f2793d8325bb031$var$A = new WeakMap, $8f2793d8325bb031$var$C = $8f2793d8325bb031$var$r.createTreeWalker($8f2793d8325bb031$var$r, 129);
function $8f2793d8325bb031$var$P(t, i) {
    if (!$8f2793d8325bb031$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $8f2793d8325bb031$var$s ? $8f2793d8325bb031$var$s.createHTML(i) : i;
}
const $8f2793d8325bb031$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $8f2793d8325bb031$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $8f2793d8325bb031$var$f ? "!--" === u[1] ? c = $8f2793d8325bb031$var$v : void 0 !== u[1] ? c = $8f2793d8325bb031$var$_ : void 0 !== u[2] ? ($8f2793d8325bb031$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $8f2793d8325bb031$var$m) : void 0 !== u[3] && (c = $8f2793d8325bb031$var$m) : c === $8f2793d8325bb031$var$m ? ">" === u[0] ? (c = r !== null && r !== void 0 ? r : $8f2793d8325bb031$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $8f2793d8325bb031$var$m : '"' === u[3] ? $8f2793d8325bb031$var$g : $8f2793d8325bb031$var$p) : c === $8f2793d8325bb031$var$g || c === $8f2793d8325bb031$var$p ? c = $8f2793d8325bb031$var$m : c === $8f2793d8325bb031$var$v || c === $8f2793d8325bb031$var$_ ? c = $8f2793d8325bb031$var$f : (c = $8f2793d8325bb031$var$m, r = void 0);
        const x = c === $8f2793d8325bb031$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $8f2793d8325bb031$var$f ? s + $8f2793d8325bb031$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $8f2793d8325bb031$var$e + s.slice(d) + $8f2793d8325bb031$var$h + x) : s + $8f2793d8325bb031$var$h + (-2 === d ? i : x);
    }
    return [
        $8f2793d8325bb031$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $8f2793d8325bb031$var$N {
    static createElement(t, i) {
        const s = $8f2793d8325bb031$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $8f2793d8325bb031$var$V(t, s);
        if (this.el = $8f2793d8325bb031$var$N.createElement(f, n), $8f2793d8325bb031$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $8f2793d8325bb031$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($8f2793d8325bb031$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($8f2793d8325bb031$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $8f2793d8325bb031$var$H : "?" === e[1] ? $8f2793d8325bb031$var$I : "@" === e[1] ? $8f2793d8325bb031$var$L : $8f2793d8325bb031$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($8f2793d8325bb031$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($8f2793d8325bb031$var$$.test(r.tagName)) {
                    const t = r.textContent.split($8f2793d8325bb031$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $8f2793d8325bb031$var$i ? $8f2793d8325bb031$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $8f2793d8325bb031$var$l()), $8f2793d8325bb031$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $8f2793d8325bb031$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $8f2793d8325bb031$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($8f2793d8325bb031$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $8f2793d8325bb031$var$h.length - 1;
                }
            }
            c++;
        }
    }
}
function $8f2793d8325bb031$var$S(t, i, s = t, e) {
    var _s__$Co, _h__$AO;
    var _s;
    if (i === $8f2793d8325bb031$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? (_s__$Co = s._$Co) === null || _s__$Co === void 0 ? void 0 : _s__$Co[e] : s._$Cl;
    const o = $8f2793d8325bb031$var$c(i) ? void 0 : i._$litDirective$;
    var __$Co;
    return (h === null || h === void 0 ? void 0 : h.constructor) !== o && (h === null || h === void 0 ? void 0 : (_h__$AO = h._$AO) === null || _h__$AO === void 0 ? void 0 : _h__$AO.call(h, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((__$Co = (_s = s)._$Co) !== null && __$Co !== void 0 ? __$Co : _s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = $8f2793d8325bb031$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $8f2793d8325bb031$var$M {
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var _t_creationScope;
        const { el: { content: i }, parts: s } = this._$AD, e = ((_t_creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t_creationScope !== void 0 ? _t_creationScope : $8f2793d8325bb031$var$r).importNode(i, !0);
        $8f2793d8325bb031$var$C.currentNode = e;
        let h = $8f2793d8325bb031$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $8f2793d8325bb031$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $8f2793d8325bb031$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== (l === null || l === void 0 ? void 0 : l.index) && (h = $8f2793d8325bb031$var$C.nextNode(), o++);
        }
        return $8f2793d8325bb031$var$C.currentNode = $8f2793d8325bb031$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
}
class $8f2793d8325bb031$var$R {
    get _$AU() {
        var _this__$AM;
        var _this__$AM__$AU;
        return (_this__$AM__$AU = (_this__$AM = this._$AM) === null || _this__$AM === void 0 ? void 0 : _this__$AM._$AU) !== null && _this__$AM__$AU !== void 0 ? _this__$AM__$AU : this._$Cv;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (t === null || t === void 0 ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $8f2793d8325bb031$var$S(this, t, i), $8f2793d8325bb031$var$c(t) ? t === $8f2793d8325bb031$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $8f2793d8325bb031$export$45b790e32b2810ee && this._$AR(), this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee) : t !== this._$AH && t !== $8f2793d8325bb031$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $8f2793d8325bb031$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $8f2793d8325bb031$export$45b790e32b2810ee && $8f2793d8325bb031$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($8f2793d8325bb031$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var _this__$AH;
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $8f2793d8325bb031$var$N.createElement($8f2793d8325bb031$var$P(s.h, s.h[0]), this.options)), s);
        if (((_this__$AH = this._$AH) === null || _this__$AH === void 0 ? void 0 : _this__$AH._$AD) === e) this._$AH.p(i);
        else {
            const t = new $8f2793d8325bb031$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $8f2793d8325bb031$var$A.get(t.strings);
        return void 0 === i && $8f2793d8325bb031$var$A.set(t.strings, i = new $8f2793d8325bb031$var$N(t)), i;
    }
    k(t) {
        $8f2793d8325bb031$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $8f2793d8325bb031$var$R(this.O($8f2793d8325bb031$var$l()), this.O($8f2793d8325bb031$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var _this__$AP, _this;
        for((_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var _this__$AP, _this;
        void 0 === this._$AM && (this._$Cv = t, (_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, t));
    }
    constructor(t, i, s, e){
        var _e_isConnected;
        this.type = 2, this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e_isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e_isConnected !== void 0 ? _e_isConnected : !0;
    }
}
class $8f2793d8325bb031$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $8f2793d8325bb031$var$S(this, t, i, 0), o = !$8f2793d8325bb031$var$c(t) || t !== this._$AH && t !== $8f2793d8325bb031$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $8f2793d8325bb031$var$S(this, e[s + n], i, n), r === $8f2793d8325bb031$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o || (o = !$8f2793d8325bb031$var$c(r) || r !== this._$AH[n]), r === $8f2793d8325bb031$export$45b790e32b2810ee ? t = $8f2793d8325bb031$export$45b790e32b2810ee : t !== $8f2793d8325bb031$export$45b790e32b2810ee && (t += (r !== null && r !== void 0 ? r : "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $8f2793d8325bb031$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee;
    }
}
class $8f2793d8325bb031$var$H extends $8f2793d8325bb031$var$k {
    j(t) {
        this.element[this.name] = t === $8f2793d8325bb031$export$45b790e32b2810ee ? void 0 : t;
    }
    constructor(){
        super(...arguments), this.type = 3;
    }
}
class $8f2793d8325bb031$var$I extends $8f2793d8325bb031$var$k {
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $8f2793d8325bb031$export$45b790e32b2810ee);
    }
    constructor(){
        super(...arguments), this.type = 4;
    }
}
class $8f2793d8325bb031$var$L extends $8f2793d8325bb031$var$k {
    _$AI(t, i = this) {
        var _S;
        if ((t = (_S = $8f2793d8325bb031$var$S(this, t, i, 0)) !== null && _S !== void 0 ? _S : $8f2793d8325bb031$export$45b790e32b2810ee) === $8f2793d8325bb031$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $8f2793d8325bb031$export$45b790e32b2810ee && s !== $8f2793d8325bb031$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $8f2793d8325bb031$export$45b790e32b2810ee && (s === $8f2793d8325bb031$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var _this_options;
        var _this_options_host;
        "function" == typeof this._$AH ? this._$AH.call((_this_options_host = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) !== null && _this_options_host !== void 0 ? _this_options_host : this.element, t) : this._$AH.handleEvent(t);
    }
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
}
class $8f2793d8325bb031$var$z {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $8f2793d8325bb031$var$S(this, t);
    }
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
}
const $8f2793d8325bb031$export$8613d1ca9052b22e = {
    M: $8f2793d8325bb031$var$e,
    P: $8f2793d8325bb031$var$h,
    A: $8f2793d8325bb031$var$o,
    C: 1,
    L: $8f2793d8325bb031$var$V,
    R: $8f2793d8325bb031$var$M,
    D: $8f2793d8325bb031$var$u,
    V: $8f2793d8325bb031$var$S,
    I: $8f2793d8325bb031$var$R,
    H: $8f2793d8325bb031$var$k,
    N: $8f2793d8325bb031$var$I,
    U: $8f2793d8325bb031$var$L,
    B: $8f2793d8325bb031$var$H,
    F: $8f2793d8325bb031$var$z
}, $8f2793d8325bb031$var$j = $8f2793d8325bb031$var$t.litHtmlPolyfillSupport;
var $8f2793d8325bb031$var$_litHtmlVersions;
$8f2793d8325bb031$var$j === null || $8f2793d8325bb031$var$j === void 0 ? void 0 : $8f2793d8325bb031$var$j($8f2793d8325bb031$var$N, $8f2793d8325bb031$var$R), (($8f2793d8325bb031$var$_litHtmlVersions = ($8f2793d8325bb031$var$_t = $8f2793d8325bb031$var$t).litHtmlVersions) !== null && $8f2793d8325bb031$var$_litHtmlVersions !== void 0 ? $8f2793d8325bb031$var$_litHtmlVersions : $8f2793d8325bb031$var$_t.litHtmlVersions = []).push("3.3.0");
const $8f2793d8325bb031$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var _s_renderBefore;
    const e = (_s_renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore !== void 0 ? _s_renderBefore : i;
    let h = e._$litPart$;
    if (void 0 === h) {
        var _s_renderBefore1;
        const t = (_s_renderBefore1 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore1 !== void 0 ? _s_renderBefore1 : null;
        e._$litPart$ = h = new $8f2793d8325bb031$var$R(i.insertBefore($8f2793d8325bb031$var$l(), t), t, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
};




var $1c65a264a7b7a28b$var$_s_litElementHydrateSupport;
var $1c65a264a7b7a28b$var$_s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1c65a264a7b7a28b$var$s = globalThis;
class $1c65a264a7b7a28b$export$3f2f9f5909897157 extends (0, $0f6d70ec1686f84d$export$c7c07a37856565d) {
    createRenderRoot() {
        var _this_renderOptions;
        const t = super.createRenderRoot();
        var _renderBefore;
        return (_renderBefore = (_this_renderOptions = this.renderOptions).renderBefore) !== null && _renderBefore !== void 0 ? _renderBefore : _this_renderOptions.renderBefore = t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $8f2793d8325bb031$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var _this__$Do;
        super.connectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!0);
    }
    disconnectedCallback() {
        var _this__$Do;
        super.disconnectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!1);
    }
    render() {
        return 0, $8f2793d8325bb031$export$9c068ae9cc5db4e8;
    }
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
}
$1c65a264a7b7a28b$export$3f2f9f5909897157._$litElement$ = !0, $1c65a264a7b7a28b$export$3f2f9f5909897157["finalized"] = !0, ($1c65a264a7b7a28b$var$_s_litElementHydrateSupport = $1c65a264a7b7a28b$var$s.litElementHydrateSupport) === null || $1c65a264a7b7a28b$var$_s_litElementHydrateSupport === void 0 ? void 0 : $1c65a264a7b7a28b$var$_s_litElementHydrateSupport.call($1c65a264a7b7a28b$var$s, {
    LitElement: $1c65a264a7b7a28b$export$3f2f9f5909897157
});
const $1c65a264a7b7a28b$var$o = $1c65a264a7b7a28b$var$s.litElementPolyfillSupport;
$1c65a264a7b7a28b$var$o === null || $1c65a264a7b7a28b$var$o === void 0 ? void 0 : $1c65a264a7b7a28b$var$o({
    LitElement: $1c65a264a7b7a28b$export$3f2f9f5909897157
});
const $1c65a264a7b7a28b$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
var $1c65a264a7b7a28b$var$_litElementVersions;
(($1c65a264a7b7a28b$var$_litElementVersions = ($1c65a264a7b7a28b$var$_s = $1c65a264a7b7a28b$var$s).litElementVersions) !== null && $1c65a264a7b7a28b$var$_litElementVersions !== void 0 ? $1c65a264a7b7a28b$var$_litElementVersions : $1c65a264a7b7a28b$var$_s.litElementVersions = []).push("4.2.0");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f7a79d06361b41af$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $067b415b06ab5dd2$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $76838bb15bd8102a$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $0f6d70ec1686f84d$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $0f6d70ec1686f84d$export$53a6892c50694894)
}, $76838bb15bd8102a$export$8d623b1670eb40f4 = (t = $76838bb15bd8102a$var$o, e, r)=>{
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
function $76838bb15bd8102a$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $76838bb15bd8102a$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}


function $064dffebce997de0$export$71511d61b312f219(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $f1828b5e61c0cb65$export$71511d61b312f219(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $064dffebce997de0$export$71511d61b312f219)(target, key, source[key]);
        });
    }
    return target;
}


function $0f232f35f40fe68f$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $0f232f35f40fe68f$export$71511d61b312f219(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $0f232f35f40fe68f$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $fffe4bd641112b8c$export$ca000e230c0caa3e(r) {
    return (0, $76838bb15bd8102a$export$d541bacb2bda4494)((0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, r), {
        state: !0,
        attribute: !1
    }));
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $c5cb498dc60cbd6e$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9f323fba3a87cf79$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $bc7b07d92f0bc114$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>{
            var _t_renderRoot;
            var _t_renderRoot_querySelector;
            return (_t_renderRoot_querySelector = (_t_renderRoot = t.renderRoot) === null || _t_renderRoot === void 0 ? void 0 : _t_renderRoot.querySelector(e)) !== null && _t_renderRoot_querySelector !== void 0 ? _t_renderRoot_querySelector : null;
        };
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i !== null && i !== void 0 ? i : (()=>{
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
            return (0, $9f323fba3a87cf79$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $9f323fba3a87cf79$export$51987bb50e1f6752)(n, s, {
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
 */ let $e27019667994fd79$var$e;
function $e27019667994fd79$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $9f323fba3a87cf79$export$51987bb50e1f6752)(n, o, {
            get () {
                var _this_renderRoot;
                return ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : $e27019667994fd79$var$e !== null && $e27019667994fd79$var$e !== void 0 ? $e27019667994fd79$var$e : $e27019667994fd79$var$e = document.createDocumentFragment()).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $67a51c73e9c8ca3b$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $9f323fba3a87cf79$export$51987bb50e1f6752)(n, e, {
            async get () {
                var _this_renderRoot;
                var _this_renderRoot_querySelector;
                return await this.updateComplete, (_this_renderRoot_querySelector = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(r)) !== null && _this_renderRoot_querySelector !== void 0 ? _this_renderRoot_querySelector : null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $a828ad47ddfe7d02$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o !== null && o !== void 0 ? o : {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $9f323fba3a87cf79$export$51987bb50e1f6752)(e, n, {
            get () {
                var _this_renderRoot;
                var _t_assignedElements;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(c), e = (_t_assignedElements = t === null || t === void 0 ? void 0 : t.assignedElements(o)) !== null && _t_assignedElements !== void 0 ? _t_assignedElements : [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $3265d23ab6c16a70$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n !== null && n !== void 0 ? n : {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $9f323fba3a87cf79$export$51987bb50e1f6752)(o, r, {
            get () {
                var _this_renderRoot;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(s);
                var _t_assignedNodes;
                return (_t_assignedNodes = t === null || t === void 0 ? void 0 : t.assignedNodes(n)) !== null && _t_assignedNodes !== void 0 ? _t_assignedNodes : [];
            }
        });
    };
}




const $93ab8e068532bba3$export$4bb1c5099bd99a57 = (mold, config)=>{
    var _config_thresholds;
    const moldThreshold = (_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.mold;
    // If no threshold is set, always show the mold indicator
    if (moldThreshold === undefined) return true;
    // Parse the mold state value as a number
    const moldValue = Number(mold.state);
    // If the value is not a valid number, don't show the indicator
    if (Number.isNaN(moldValue)) return false;
    // Show the indicator only if the mold value is at or above the threshold
    return moldValue >= moldThreshold;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_active.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/literal-includes.ts#L6
 */ /**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */ const $f7a86b27aed09785$export$2fff862a498eed4d = (array)=>(searchElement, fromIndex)=>array.includes(searchElement, fromIndex);


const $a7bee5b3ec27c408$export$f2d101b977a134fd = 'unavailable';
const $a7bee5b3ec27c408$export$78244dbb77cfa6b6 = 'unknown';
const $a7bee5b3ec27c408$export$8a4b4288adcd729e = 'on';
const $a7bee5b3ec27c408$export$173de64b5ad0d5b4 = 'off';
const $a7bee5b3ec27c408$export$565a86226f245f0b = [
    $a7bee5b3ec27c408$export$f2d101b977a134fd,
    $a7bee5b3ec27c408$export$78244dbb77cfa6b6
];
const $a7bee5b3ec27c408$export$8ccd97e727a09c65 = [
    $a7bee5b3ec27c408$export$f2d101b977a134fd,
    $a7bee5b3ec27c408$export$78244dbb77cfa6b6,
    $a7bee5b3ec27c408$export$173de64b5ad0d5b4
];
const $a7bee5b3ec27c408$export$dea4173a348a2153 = (0, $f7a86b27aed09785$export$2fff862a498eed4d)($a7bee5b3ec27c408$export$565a86226f245f0b);
const $a7bee5b3ec27c408$export$3473ff6928139ced = (0, $f7a86b27aed09785$export$2fff862a498eed4d)($a7bee5b3ec27c408$export$8ccd97e727a09c65);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_domain.ts
 */ const $676762a3bf0095a1$export$2044bdc9670769ab = (entityId)=>entityId.substring(0, entityId.indexOf('.'));


function $d460d16f74269a4e$export$c0e85c3982a3daa6(stateObj, state) {
    const domain = (0, $676762a3bf0095a1$export$2044bdc9670769ab)(stateObj.entity_id);
    const compareState = state !== undefined ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    if ([
        'button',
        'event',
        'input_button',
        'scene'
    ].includes(domain)) return compareState !== (0, $a7bee5b3ec27c408$export$f2d101b977a134fd);
    if ((0, $a7bee5b3ec27c408$export$dea4173a348a2153)(compareState)) return false;
    // The "off" check is relevant for most domains, but there are exceptions
    // such as "alert" where "off" is still a somewhat active state and
    // therefore gets a custom color and "idle" is instead the state that
    // matches what most other domains consider inactive.
    if (compareState === (0, $a7bee5b3ec27c408$export$173de64b5ad0d5b4) && domain !== 'alert') return false;
    // Custom cases
    switch(domain){
        case 'alarm_control_panel':
            return compareState !== 'disarmed';
        case 'alert':
            // "on" and "off" are active, as "off" just means alert was acknowledged but is still active
            return compareState !== 'idle';
        case 'cover':
            return compareState !== 'closed';
        case 'device_tracker':
        case 'person':
            return compareState !== 'not_home';
        case 'lawn_mower':
            return [
                'mowing',
                'error'
            ].includes(compareState);
        case 'lock':
            return compareState !== 'locked';
        case 'media_player':
            return ![
                'standby',
                'paused'
            ].includes(compareState);
        case 'vacuum':
            return ![
                'idle',
                'docked',
                'paused'
            ].includes(compareState);
        case 'valve':
            return compareState !== 'closed';
        case 'plant':
            return compareState === 'problem';
        case 'group':
            return [
                'on',
                'home',
                'open',
                'locked',
                'problem'
            ].includes(compareState);
        case 'timer':
            return compareState === 'active';
        case 'camera':
            return compareState === 'streaming';
    }
    return true;
}




let $a6dfaa78520799c6$var$_ = (t)=>t, $a6dfaa78520799c6$var$t;
const $a6dfaa78520799c6$export$c18c768bbe3223b7 = (hass, entity, className = '')=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($a6dfaa78520799c6$var$t || ($a6dfaa78520799c6$var$t = $a6dfaa78520799c6$var$_`<state-display
    .hass=${0}
    .stateObj=${0}
    class=${0}
  ></state-display>`), hass, entity, className);


let $d71beedfb309b5b1$var$_ = (t)=>t, $d71beedfb309b5b1$var$t, $d71beedfb309b5b1$var$t1, $d71beedfb309b5b1$var$t2, $d71beedfb309b5b1$var$t3, $d71beedfb309b5b1$var$t4;
const $d71beedfb309b5b1$export$8093665c9ba8ead9 = (hass, config, sensors)=>{
    const { problemSensors: problemSensors } = sensors;
    const problemExists = problemSensors.some((sensor)=>(0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(sensor));
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($d71beedfb309b5b1$var$t2 || ($d71beedfb309b5b1$var$t2 = $d71beedfb309b5b1$var$_`<div class="problems">
    ${0}
    ${0}
  </div>`), problemSensors.length > 0 ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($d71beedfb309b5b1$var$t || ($d71beedfb309b5b1$var$t = $d71beedfb309b5b1$var$_`<ha-icon
          .icon=${0}
          class="status-entities"
          ?has-problems=${0}
        ></ha-icon>`), `mdi:numeric-${problemSensors.length}`, problemExists) : (0, $8f2793d8325bb031$export$45b790e32b2810ee), sensors.mold && (0, $93ab8e068532bba3$export$4bb1c5099bd99a57)(sensors.mold, config) ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($d71beedfb309b5b1$var$t1 || ($d71beedfb309b5b1$var$t1 = $d71beedfb309b5b1$var$_`<div class="mold-indicator">
          <ha-state-icon
            .hass=${0}
            .stateObj=${0}
          ></ha-state-icon>
          <span class="mold-text">${0}</span>
        </div>`), hass, sensors.mold, (0, $a6dfaa78520799c6$export$c18c768bbe3223b7)(hass, sensors.mold)) : (0, $8f2793d8325bb031$export$45b790e32b2810ee));
};
const $d71beedfb309b5b1$export$6697a659ce63852 = (hass, entity, config, options = {})=>{
    var _config_features;
    const { state: state } = entity;
    const stickyEntitiesEnabled = (_config_features = config.features) === null || _config_features === void 0 ? void 0 : _config_features.includes('sticky_entities');
    const { isMainRoomEntity: isMainRoomEntity = false, isActive: isActive, hasImage: hasImage, occupied: occupied, smoke: smoke } = options;
    // If state is undefined and sticky entities is not enabled, return nothing
    if (!state && !stickyEntitiesEnabled) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    if (!state && stickyEntitiesEnabled) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($d71beedfb309b5b1$var$t3 || ($d71beedfb309b5b1$var$t3 = $d71beedfb309b5b1$var$_`<div class="sticky-entity"></div>`));
    /*
   * Order of properties is important for logic checks
   * Set config and hass last
   */ return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($d71beedfb309b5b1$var$t4 || ($d71beedfb309b5b1$var$t4 = $d71beedfb309b5b1$var$_`<room-state-icon
    .isMainRoomEntity=${0}
    .isActive=${0}
    .image=${0}
    .occupied=${0}
    .smoke=${0}
    .entity=${0}
    .config=${0}
    .hass=${0}
  ></room-state-icon>`), isMainRoomEntity, isActive, hasImage, occupied, smoke, entity, config, hass);
};


var $f554b0d97be25fc9$var$safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function $f554b0d97be25fc9$var$isEqual(first, second) {
    if (first === second) return true;
    if ($f554b0d97be25fc9$var$safeIsNaN(first) && $f554b0d97be25fc9$var$safeIsNaN(second)) return true;
    return false;
}
function $f554b0d97be25fc9$var$areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!$f554b0d97be25fc9$var$isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function $f554b0d97be25fc9$export$2e2bcd8739ae039(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = $f554b0d97be25fc9$var$areInputsEqual;
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


const $b02f37b9ae80224f$export$805ddaeeece0413e = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((config, feature)=>{
    var _config_features;
    return !config || ((_config_features = config.features) === null || _config_features === void 0 ? void 0 : _config_features.includes(feature)) || false;
});
const $b02f37b9ae80224f$export$47f3d980c4d9b226 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity, feature)=>{
    var _entity_config_features;
    return !entity || ((_entity_config_features = entity.config.features) === null || _entity_config_features === void 0 ? void 0 : _entity_config_features.includes(feature)) || false;
});



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/dom/fire_event.ts
 */ // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
const $589840a8bffad2e2$export$43835e9acf248a15 = (node, type, detail, options)=>{
    options = options || {};
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/common/directives/action-handler-directive.ts
 */ 
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $f8f448f4cc7b38fe$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $f8f448f4cc7b38fe$export$befdefbdce210f91 {
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
    constructor(t){}
}




const $093cdf9d6017a838$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector('action-handler')) return body.querySelector('action-handler');
    const actionhandler = document.createElement('action-handler');
    body.appendChild(actionhandler);
    return actionhandler;
};
const $093cdf9d6017a838$export$520aee61eb0a2770 = (element, options)=>{
    const actionhandler = $093cdf9d6017a838$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
const $093cdf9d6017a838$export$8a44987212de21b = (0, $f8f448f4cc7b38fe$export$99b43ad1ed32e735)(class extends (0, $f8f448f4cc7b38fe$export$befdefbdce210f91) {
    update(part, [options]) {
        $093cdf9d6017a838$export$520aee61eb0a2770(part.element, options);
        return 0, $8f2793d8325bb031$export$9c068ae9cc5db4e8;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(_options) {}
});


const $b96673d7637fba33$export$8a44987212de21b = (entity)=>{
    var _entity_config, _entity_config1;
    const isActionEnabled = (actionConfig)=>(actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.action) !== 'none' && (actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.action) !== undefined;
    return (0, $093cdf9d6017a838$export$8a44987212de21b)({
        hasDoubleClick: isActionEnabled((_entity_config = entity.config) === null || _entity_config === void 0 ? void 0 : _entity_config.double_tap_action),
        hasHold: isActionEnabled((_entity_config1 = entity.config) === null || _entity_config1 === void 0 ? void 0 : _entity_config1.hold_action)
    });
};
const $b96673d7637fba33$export$3d3654ce4577c53d = (element, entity)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            var _ev_detail;
            // Extract action from event detail
            const action = (_ev_detail = ev.detail) === null || _ev_detail === void 0 ? void 0 : _ev_detail.action;
            if (!action) return;
            // Create configuration object for the action
            const config = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({
                entity: entity.config.entity_id
            }, entity.config);
            // @ts-ignore
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(element, 'hass-action', {
                config: config,
                action: action
            });
        }
    };
};



/**
 * Checks if an entity is currently detecting an alarm condition
 * @param hass Home Assistant instance
 * @param entityId Entity ID of the sensor
 * @returns True if condition is detected, false otherwise
 */ const $82ec124af523e08e$var$isEntityDetected = (hass, entityId)=>{
    const entity = hass.states[entityId];
    if (!entity) return false;
    return (0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(entity);
};
/**
 * Gets the current alarm state for a configured alarm sensor
 * @param hass Home Assistant instance
 * @param config Alarm configuration
 * @returns True if condition is detected, false otherwise
 */ const $82ec124af523e08e$var$getAlarmState = (hass, config)=>{
    if (!config) return false;
    // Check if any of the entities detect the condition
    return config.entities.some((entityId)=>$82ec124af523e08e$var$isEntityDetected(hass, entityId));
};
/**
 * Gets CSS variables for alarm styling based on current state
 * @param isDetected Current detection state
 * @param config Alarm configuration
 * @param prefix CSS variable prefix (e.g., 'occupancy' or 'smoke')
 * @param defaultColor Default color to use (e.g., 'var(--success-color)' or 'var(--error-color)')
 * @param animationName Animation name (e.g., 'occupancy-pulse' or 'smoke-pulse')
 * @returns Object with CSS variable names and values
 */ const $82ec124af523e08e$var$getAlarmCssVars = (isDetected, config, prefix = 'alarm', defaultColor = 'var(--primary-color)', animationName = 'alarm-pulse')=>{
    var _config_options, _config_options1;
    if (!config) return {};
    const vars = {};
    if (!isDetected) return vars;
    // Set card border variable (3px solid) unless disabled
    const isCardBorderDisabled = (_config_options = config.options) === null || _config_options === void 0 ? void 0 : _config_options.includes('disabled_card_styles');
    if (!isCardBorderDisabled) {
        var _config_options2;
        var _config_card_border_color;
        const borderColor = (_config_card_border_color = config.card_border_color) !== null && _config_card_border_color !== void 0 ? _config_card_border_color : defaultColor;
        vars[`--${prefix}-card-border`] = `3px solid ${borderColor}`;
        vars[`--${prefix}-card-border-color`] = borderColor;
        // Set animation unless disabled
        const isAnimationDisabled = (_config_options2 = config.options) === null || _config_options2 === void 0 ? void 0 : _config_options2.includes('disabled_card_styles_animation');
        if (!isAnimationDisabled) vars[`--${prefix}-card-animation`] = `${animationName} 2s ease-in-out infinite alternate`;
    }
    // Icon color styling
    const isIconColorDisabled = (_config_options1 = config.options) === null || _config_options1 === void 0 ? void 0 : _config_options1.includes('disable_icon_styles');
    if (!isIconColorDisabled) {
        var _config_options3;
        var _config_icon_color;
        const iconColor = (_config_icon_color = config.icon_color) !== null && _config_icon_color !== void 0 ? _config_icon_color : defaultColor;
        vars[`--${prefix}-icon-color`] = iconColor;
        // Set animation unless disabled
        const isIconAnimationDisabled = (_config_options3 = config.options) === null || _config_options3 === void 0 ? void 0 : _config_options3.includes('disable_icon_animation');
        if (!isIconAnimationDisabled) vars[`--${prefix}-icon-animation`] = 'icon-breathe 3s ease-in-out infinite alternate';
    }
    return vars;
};
const $82ec124af523e08e$export$9df2091f323033b9 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$a44444e2ac55f0e7 = (isOccupied, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isOccupied, config, 'occupancy', 'var(--success-color)', 'occupancy-pulse');
};
const $82ec124af523e08e$export$9e738e3e7dcdd507 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$2b84bc3470ef94ef = (isSmokeDetected, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isSmokeDetected, config, 'smoke', 'var(--error-color)', 'smoke-pulse');
};




/**
 * Gets sensor value - from specific entity in individual sensors, or averaged sensor
 */ const $b45c3666c29a512e$var$getSensorValue = (sensorData, deviceClass, entityId)=>{
    // If entityId is specified, look for it in individual sensors first
    if (entityId) {
        const individualSensor = sensorData.individual.find((s)=>s.entity_id === entityId);
        if ((individualSensor === null || individualSensor === void 0 ? void 0 : individualSensor.attributes.device_class) === deviceClass) return Number(individualSensor.state);
    }
    // Look in averaged sensors
    const averagedSensor = sensorData.averaged.find((s)=>s.device_class === deviceClass);
    if (!averagedSensor) return null;
    // If entityId is specified, look for it in the averaged sensor's states
    if (entityId) {
        const entity = averagedSensor.states.find((state)=>state.entity_id === entityId);
        return entity ? Number(entity.state) : null;
    }
    return averagedSensor.average;
};
/**
 * Gets threshold value - from specific entity in thresholdSensors sensors, or number configuration
 */ const $b45c3666c29a512e$var$getThresholdSensorValue = (sensors, defaultValue, config)=>{
    if (!config) return defaultValue;
    if (typeof config === 'number') return config;
    const sensor = sensors.find((s)=>s.entity_id === config);
    if (sensor) return Number(sensor.state);
    return defaultValue;
};
/**
 * Checks if any threshold entry in an array matches the sensor data
 *
 * @param thresholdEntries - Array of threshold configurations
 * @param sensorData - Sensor data containing individual and averaged sensors
 * @param deviceClass - Device class to filter sensors ('temperature' or 'humidity')
 * @returns Object with triggered flag and color if threshold is met
 */ const $b45c3666c29a512e$var$checkThresholdEntries = (thresholdEntries, sensorData, deviceClass)=>{
    // coalesce to [{}] so that we always have at least one entry to iterate for default values
    for (const entry of thresholdEntries || [
        {}
    ]){
        const sensorValue = $b45c3666c29a512e$var$getSensorValue(sensorData, deviceClass, entry.entity_id);
        if (sensorValue === null) continue;
        // Get threshold value - can be a number or entity ID string
        const thresholdValue = $b45c3666c29a512e$var$getThresholdSensorValue(sensorData.thresholdSensors, deviceClass === 'temperature' ? 80 : 60, entry.value);
        var _entry_operator;
        const operator = (_entry_operator = entry.operator) !== null && _entry_operator !== void 0 ? _entry_operator : 'gt';
        if ($b45c3666c29a512e$var$meetsThreshold(sensorValue, thresholdValue, operator)) return {
            triggered: true,
            color: entry.color
        };
    }
    return {
        triggered: false
    };
};
/**
 * Checks if a numeric value meets a threshold condition using the specified operator
 *
 * @param value - The numeric value to test
 * @param threshold - The threshold value to compare against
 * @param operator - The comparison operator to use
 * @returns true if the condition is met
 */ const $b45c3666c29a512e$var$meetsThreshold = (value, threshold, operator)=>{
    switch(operator){
        case 'gt':
            return value > threshold;
        case 'gte':
            return value >= threshold;
        case 'lt':
            return value < threshold;
        case 'lte':
            return value <= threshold;
        case 'eq':
            return value === threshold;
        default:
            return value > threshold; // Default to 'gt' for backward compatibility
    }
};
const $b45c3666c29a512e$export$c1ca802e67721a4 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((config, sensorData)=>{
    if ((0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'skip_climate_styles')) return {
        hot: false,
        humid: false,
        hotColor: undefined,
        humidColor: undefined
    };
    const thresholds = config.thresholds;
    const hotResult = $b45c3666c29a512e$var$checkThresholdEntries(thresholds === null || thresholds === void 0 ? void 0 : thresholds.temperature, sensorData, 'temperature');
    const humidResult = $b45c3666c29a512e$var$checkThresholdEntries(thresholds === null || thresholds === void 0 ? void 0 : thresholds.humidity, sensorData, 'humidity');
    return {
        hot: hotResult.triggered,
        humid: humidResult.triggered,
        hotColor: hotResult.color,
        humidColor: humidResult.color
    };
});



const $7806862517a8ec93$export$520c40045967cb15 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((areas, areaId)=>areas[areaId]);






const $6d9b59681496f671$export$50fdfeece43146fd = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((states, entityId, fakeState = false)=>{
    if (!entityId) return undefined;
    var _states_entityId;
    const state = (_states_entityId = states[entityId]) !== null && _states_entityId !== void 0 ? _states_entityId : fakeState ? {
        entity_id: entityId,
        state: 'off',
        // Set friendly_name to an empty string so the label is blank
        attributes: {
            friendly_name: ''
        }
    } : undefined;
    if (!state) return undefined;
    const domain = (0, $676762a3bf0095a1$export$2044bdc9670769ab)(state.entity_id);
    return {
        state: state.state,
        attributes: state.attributes,
        entity_id: state.entity_id,
        domain: domain
    };
});


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/media_source.ts
 */ const $1de811e5c0604194$export$82af5f6c9f5dec8 = (mediaId)=>mediaId.startsWith('media-source://');
const $1de811e5c0604194$export$512e5252162de675 = async (hass, mediaContentId)=>{
    const result = await hass.callWS({
        type: 'media_source/resolve_media',
        media_content_id: mediaContentId
    });
    return result.url;
};


/**
 * Resolves a media source content ID or returns it as-is
 */ const $7359f6b91fb77fd2$var$resolveMediaContentId = async (hass, mediaContentId)=>{
    if ((0, $1de811e5c0604194$export$82af5f6c9f5dec8)(mediaContentId)) return await (0, $1de811e5c0604194$export$512e5252162de675)(hass, mediaContentId);
    return mediaContentId;
};
/**
 * Handles image configuration that can be a string or object
 */ const $7359f6b91fb77fd2$var$handleImageConfig = async (hass, image)=>{
    if (typeof image === 'string') return await $7359f6b91fb77fd2$var$resolveMediaContentId(hass, image);
    return await $7359f6b91fb77fd2$var$resolveMediaContentId(hass, image.media_content_id);
};
const $7359f6b91fb77fd2$export$9dd734c640ccb658 = async (hass, config)=>{
    var _config_background_options, _config_background, _config_background1, _config_background2;
    const disableImage = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('disable');
    if (disableImage) return undefined;
    // Check entity picture first
    if ((_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : _config_background1.image_entity) {
        var _entityState_attributes;
        const entityState = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, config.background.image_entity);
        if (entityState === null || entityState === void 0 ? void 0 : (_entityState_attributes = entityState.attributes) === null || _entityState_attributes === void 0 ? void 0 : _entityState_attributes.entity_picture) return entityState.attributes.entity_picture;
    }
    // Check config image
    if ((_config_background2 = config.background) === null || _config_background2 === void 0 ? void 0 : _config_background2.image) return await $7359f6b91fb77fd2$var$handleImageConfig(hass, config.background.image);
    // Fallback to area picture
    const area = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area);
    return area === null || area === void 0 ? void 0 : area.picture;
};






/**
 * Checks if a string is a URL (starts with http:// or https://)
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a URL
 */ const $d9cd925d0860ec58$var$isUrl = (str)=>{
    return str.startsWith('http://') || str.startsWith('https://');
};
const $d9cd925d0860ec58$export$25fedbc2fd674160 = (hass, config)=>{
    var _getArea;
    const roomEntityId = `light.${config.area}_light`;
    var _config_navigate;
    // Determine the navigation target
    const navigationTarget = (_config_navigate = config.navigate) !== null && _config_navigate !== void 0 ? _config_navigate : config.area.replace('_', '-');
    // Create appropriate action based on whether the target is a URL or path
    const tapAction = $d9cd925d0860ec58$var$isUrl(navigationTarget) ? {
        action: 'url',
        url_path: navigationTarget
    } : {
        action: 'navigate',
        navigation_path: navigationTarget
    };
    const actionConfig = {
        tap_action: tapAction,
        hold_action: {
            action: 'more-info'
        },
        double_tap_action: {
            action: 'none'
        }
    };
    // Handle different entity configuration formats
    if (config.entity && !(0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'ignore_entity')) {
        if (typeof config.entity === 'string') // String format
        return {
            config: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({
                entity_id: config.entity
            }, actionConfig),
            state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, config.entity)
        };
        else // Object format
        return {
            config: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, actionConfig, config.entity),
            state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, config.entity.entity_id)
        };
    }
    // Default room light configuration
    return {
        config: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({
            entity_id: roomEntityId,
            icon: (_getArea = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area)) === null || _getArea === void 0 ? void 0 : _getArea.icon
        }, actionConfig),
        state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, roomEntityId, true)
    };
};




const $62a596c6a9bc2e04$export$30c823bc834d6ab4 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((devices, deviceId)=>devices[deviceId]);



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/number/format_number.ts
 */ const $1c9527a6ee3bb670$export$88bfc1035e667f37 = (stateObj)=>$1c9527a6ee3bb670$export$b6c45d0299750e7c(stateObj.attributes);
const $1c9527a6ee3bb670$export$b6c45d0299750e7c = (attributes, numericDeviceClasses)=>{
    var _attributes_device_class;
    return !!attributes.unit_of_measurement || !!attributes.state_class || (numericDeviceClasses || []).includes((_attributes_device_class = attributes.device_class) !== null && _attributes_device_class !== void 0 ? _attributes_device_class : '');
};


/**
 * Filters entities by device class and ensures they are numeric
 */ const $0b0bca794600042c$var$getNumericEntitiesByClass = (entities, deviceClass)=>{
    return entities.filter((entity)=>entity.attributes.device_class === deviceClass && (0, $1c9527a6ee3bb670$export$88bfc1035e667f37)(entity) && entity.state.trim() !== '' && !Number.isNaN(Number(entity.state)));
};
/**
 * Groups entities by their unit of measurement
 */ const $0b0bca794600042c$var$groupEntitiesByUom = (entities)=>{
    const uomGroups = new Map();
    for (const entity of entities){
        var _entity_attributes_unit_of_measurement;
        const uom = (_entity_attributes_unit_of_measurement = entity.attributes.unit_of_measurement) !== null && _entity_attributes_unit_of_measurement !== void 0 ? _entity_attributes_unit_of_measurement : '';
        if (!uomGroups.has(uom)) uomGroups.set(uom, []);
        uomGroups.get(uom).push(entity);
    }
    return uomGroups;
};
/**
 * Calculates average for a group of entities
 */ const $0b0bca794600042c$var$calculateGroupAverage = (groupEntities, uom, deviceClass)=>{
    const sum = groupEntities.reduce((total, entity)=>total + Number(entity.state), 0);
    const average = sum / groupEntities.length;
    return {
        states: groupEntities,
        uom: uom,
        average: average,
        device_class: deviceClass,
        domain: 'sensor'
    };
};
/**
 * Processes a single device class and returns averages
 */ const $0b0bca794600042c$var$processDeviceClass = (entities, deviceClass)=>{
    const classEntities = $0b0bca794600042c$var$getNumericEntitiesByClass(entities, deviceClass);
    if (classEntities.length === 0) return [];
    const uomGroups = $0b0bca794600042c$var$groupEntitiesByUom(classEntities);
    const averages = [];
    for (const [uom, groupEntities] of uomGroups)if (groupEntities.length > 0) averages.push($0b0bca794600042c$var$calculateGroupAverage(groupEntities, uom, deviceClass));
    return averages;
};
const $0b0bca794600042c$export$499e7395a53e0376 = (entities, deviceClasses)=>{
    return deviceClasses.flatMap((deviceClass)=>$0b0bca794600042c$var$processDeviceClass(entities, deviceClass));
};


const $e186e7c110487ed3$export$d4cef0abb1b35d6f = (hass, config)=>{
    var _config_sensors, _config_thresholds, _config_thresholds1;
    const skipDefaultEntities = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'exclude_default_entities');
    const multiLightEnabled = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'multi_light_background');
    // Default sensor classes if not specified
    const sensorClasses = config.sensor_classes || [
        'temperature',
        'humidity',
        'illuminance'
    ];
    // Arrays to hold different categories
    const configOrderedSensors = [];
    const classSensors = [];
    const problemSensors = [];
    const lightEntities = [];
    const thresholdSensors = [];
    let mold = undefined;
    // Get configured light entity IDs if multi-light feature is enabled
    let configuredLightIds = [];
    if (multiLightEnabled && config.lights && config.lights.length > 0) configuredLightIds = config.lights;
    // Helper function to extract entity_id from string or SensorConfig
    const getSensorEntityId = (sensor)=>{
        return typeof sensor === 'string' ? sensor : sensor.entity_id;
    };
    // Get array of entity IDs from config.sensors for quick lookup
    const configSensorIds = ((_config_sensors = config.sensors) === null || _config_sensors === void 0 ? void 0 : _config_sensors.map(getSensorEntityId)) || [];
    // Extract threshold entity IDs from threshold entries' value properties
    const thresholdSensorIds = new Set();
    if ((_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.temperature) config.thresholds.temperature.forEach((entry)=>{
        if (typeof entry.value === 'string') thresholdSensorIds.add(entry.value);
    });
    if ((_config_thresholds1 = config.thresholds) === null || _config_thresholds1 === void 0 ? void 0 : _config_thresholds1.humidity) config.thresholds.humidity.forEach((entry)=>{
        if (typeof entry.value === 'string') thresholdSensorIds.add(entry.value);
    });
    // Process all entities in the area
    Object.values(hass.entities).forEach((entity)=>{
        var _config_lights, _entity_labels, _state_attributes;
        // Check if this sensor is explicitly configured
        const isConfigSensor = configSensorIds.includes(entity.entity_id);
        const device = (0, $62a596c6a9bc2e04$export$30c823bc834d6ab4)(hass.devices, entity.device_id);
        const isInArea = [
            entity.area_id,
            device === null || device === void 0 ? void 0 : device.area_id
        ].includes(config.area);
        // Check if this is a configured light entity (always process these)
        const isConfiguredLight = configuredLightIds.includes(entity.entity_id);
        // Check if this is a configured threshold entity (always process these)
        const isThresholdEntity = thresholdSensorIds.has(entity.entity_id);
        // If it's not a config sensor, not in the area, and not a configured light, skip it
        // If it's a config sensor or configured light, always include it since the user has explicitly included it
        if (!isConfigSensor && !isInArea && !isConfiguredLight && !isThresholdEntity) return;
        const state = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        if (!state) return;
        // Collect light entities for multi-light background feature
        if (multiLightEnabled) {
            if (isConfiguredLight || !((_config_lights = config.lights) === null || _config_lights === void 0 ? void 0 : _config_lights.length) && isInArea && entity.entity_id.startsWith('light.')) // Always include explicitly configured lights, or auto-discover lights in area
            // only if no lights are manually configured
            lightEntities.push(state);
        }
        if (entity === null || entity === void 0 ? void 0 : (_entity_labels = entity.labels) === null || _entity_labels === void 0 ? void 0 : _entity_labels.includes('problem')) problemSensors.push(state);
        if ((entity === null || entity === void 0 ? void 0 : entity.platform) === 'mold_indicator') mold = state;
        // If it's a config sensor, always include it in individual sensors
        if (isConfigSensor) {
            configOrderedSensors.push(state);
            return;
        }
        if (isThresholdEntity) {
            thresholdSensors.push(state);
            return;
        }
        // If we're skipping default entities, don't process further
        if (skipDefaultEntities) return;
        // Check if this is a sensor with a device class we care about
        const deviceClass = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.device_class;
        if (state.domain === 'sensor' && deviceClass && sensorClasses.includes(deviceClass)) classSensors.push(state);
    });
    // Sort config sensors by their order in the config array
    configOrderedSensors.sort((a, b)=>{
        var _configSensorIds_indexOf;
        const indexA = (_configSensorIds_indexOf = configSensorIds === null || configSensorIds === void 0 ? void 0 : configSensorIds.indexOf(a.entity_id)) !== null && _configSensorIds_indexOf !== void 0 ? _configSensorIds_indexOf : -1;
        var _configSensorIds_indexOf1;
        const indexB = (_configSensorIds_indexOf1 = configSensorIds === null || configSensorIds === void 0 ? void 0 : configSensorIds.indexOf(b.entity_id)) !== null && _configSensorIds_indexOf1 !== void 0 ? _configSensorIds_indexOf1 : -1;
        return indexA - indexB;
    });
    // Calculate averages for class-based sensors
    const averaged = (0, $0b0bca794600042c$export$499e7395a53e0376)(classSensors, sensorClasses);
    return {
        individual: configOrderedSensors,
        averaged: averaged,
        problemSensors: problemSensors,
        mold: mold,
        lightEntities: lightEntities,
        thresholdSensors: thresholdSensors
    };
};


const $c4ab0a640e168730$export$df764ae7d62abece = (hass, config)=>{
    var _getArea;
    var _config_area_name, _ref;
    const roomInfo = {
        area_name: (_ref = (_config_area_name = config.area_name) !== null && _config_area_name !== void 0 ? _config_area_name : (_getArea = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area)) === null || _getArea === void 0 ? void 0 : _getArea.name) !== null && _ref !== void 0 ? _ref : config.area
    };
    const roomEntity = (0, $d9cd925d0860ec58$export$25fedbc2fd674160)(hass, config);
    const sensors = (0, $e186e7c110487ed3$export$d4cef0abb1b35d6f)(hass, config);
    const thresholds = (0, $b45c3666c29a512e$export$c1ca802e67721a4)(config, sensors);
    const image = (0, $7359f6b91fb77fd2$export$9dd734c640ccb658)(hass, config);
    const smokeDetected = (0, $82ec124af523e08e$export$9e738e3e7dcdd507)(hass, config.smoke);
    const occupied = (0, $82ec124af523e08e$export$9df2091f323033b9)(hass, config.occupancy);
    // Calculate if room is active - either room entity is active or any light is active
    const isActive = roomEntity.state && (0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(roomEntity.state) || sensors.lightEntities.some((entityState)=>(0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(entityState));
    return {
        roomInfo: roomInfo,
        roomEntity: roomEntity,
        sensors: sensors,
        image: image,
        isActive: isActive,
        thresholds: thresholds,
        flags: {
            // Smoke takes priority over occupancy - if smoke is detected, don't show occupancy
            occupied: smokeDetected ? false : occupied,
            smoke: smokeDetected,
            dark: hass.themes.darkMode
        }
    };
};






/**
 * Maps Home Assistant domains to their conventional active state colors
 * Returns a color name from the standard HA_COLORS list
 *
 * @param domain - The Home Assistant domain (e.g., 'light', 'switch', 'cover')
 * @returns Color name from HA_COLORS (e.g., 'amber', 'blue')
 */ const $4b849e6973597846$export$426ed50d9b9daf3a = (domain)=>{
    switch(domain){
        // Lighting
        case 'light':
        case 'switch_as_x':
            return 'yellow';
        // Switches & Electric
        case 'switch':
        case 'input_boolean':
        case 'automation':
        case 'script':
            return 'blue';
        // Climate & Environment
        case 'climate':
        case 'fan':
            return 'teal';
        // Security & Safety
        case 'alarm_control_panel':
        case 'lock':
            return 'red';
        // Covers & Doors
        case 'cover':
        case 'garage_door':
        case 'door':
            return 'green';
        // Media
        case 'media_player':
            return 'indigo';
        // Sensors & Binary Sensors
        case 'binary_sensor':
        case 'sensor':
            return 'cyan';
        // Person & Presence
        case 'person':
        case 'device_tracker':
            return 'purple';
        // Weather & Update
        case 'weather':
        case 'update':
            return 'orange';
        // Vacuum
        case 'vacuum':
            return 'deep-purple';
        // Timer & Schedule
        case 'timer':
        case 'schedule':
            return 'pink';
        // Default for unknown domains
        default:
            return 'yellow';
    }
};


/**
 * @file color-definitions.js
 * @description Defines RGB color variables for use in Home Assistant themes and components
 */ 
let $caf1696fa639ec30$var$_ = (t)=>t, $caf1696fa639ec30$var$t, $caf1696fa639ec30$var$t1, $caf1696fa639ec30$var$t2, $caf1696fa639ec30$var$t3;
const $caf1696fa639ec30$export$33537d9e76cd536a = [
    'primary',
    'accent',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'light-grey',
    'grey',
    'dark-grey',
    'blue-grey',
    'black',
    'white',
    'disabled'
];
const $caf1696fa639ec30$export$30317f76025d8bf5 = [
    'red',
    'green',
    'yellow',
    'blue',
    'purple',
    'grey',
    'pink',
    'theme'
];
const $caf1696fa639ec30$export$dec94ffc2d530e03 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($caf1696fa639ec30$var$t || ($caf1696fa639ec30$var$t = $caf1696fa639ec30$var$_`
  --theme-color-minimalist: rgb(var(--color-theme));
`));
const $caf1696fa639ec30$export$4aa0a1b480cdb1b6 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($caf1696fa639ec30$var$t1 || ($caf1696fa639ec30$var$t1 = $caf1696fa639ec30$var$_`
  --theme-background-color-card: var(
    --ha-card-background,
    var(--card-background-color, white)
  );
  --theme-background-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );
  --theme-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );

  --opacity-icon-active: 1;
  --opacity-icon-inactive: 0.2;
`));
const $caf1696fa639ec30$export$38d2ecc76f0c2959 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($caf1696fa639ec30$var$t2 || ($caf1696fa639ec30$var$t2 = $caf1696fa639ec30$var$_`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.1;
`));
const $caf1696fa639ec30$export$eae85ad18a22ab6c = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($caf1696fa639ec30$var$t3 || ($caf1696fa639ec30$var$t3 = $caf1696fa639ec30$var$_`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.05;
`));


const $2acaa25b6d047245$export$2757cc6eb9fa350d = (iconColor, onColor, offColor, domain, active)=>{
    if (iconColor && (0, $caf1696fa639ec30$export$30317f76025d8bf5).includes(iconColor)) return `rgb(var(--color-${iconColor}))`;
    const color = active ? onColor !== null && onColor !== void 0 ? onColor : (0, $4b849e6973597846$export$426ed50d9b9daf3a)(domain) : offColor;
    if (color && (0, $caf1696fa639ec30$export$30317f76025d8bf5).includes(color)) return `rgb(var(--color-${color}))`;
    return undefined;
};
const $2acaa25b6d047245$export$de247ce18e8ed95f = (iconColor, onColor = '', offColor = '', active = false)=>{
    if (iconColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(iconColor)) return `var(--${iconColor}-color)`;
    if (active && onColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(onColor)) return `var(--${onColor}-color)`;
    if (!active && offColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(offColor)) return `var(--${offColor}-color)`;
    return iconColor;
};





/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $709101fc184637c4$var$n = "important", $709101fc184637c4$var$i = " !" + $709101fc184637c4$var$n, $709101fc184637c4$export$1e5b4ce2fa884e6a = (0, $f8f448f4cc7b38fe$export$99b43ad1ed32e735)(class extends (0, $f8f448f4cc7b38fe$export$befdefbdce210f91) {
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
                const r = "string" == typeof e && e.endsWith($709101fc184637c4$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $709101fc184637c4$var$n : "") : s[t] = e;
            }
        }
        return 0, $8f2793d8325bb031$export$9c068ae9cc5db4e8;
    }
    constructor(t){
        var _t_strings;
        if (super(t), t.type !== (0, $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || ((_t_strings = t.strings) === null || _t_strings === void 0 ? void 0 : _t_strings.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
});



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_color.ts
 * This file is modified to allow for light entities to be included in the state color calculation
 * so that the multi-light background feature can work
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/color/battery_color.ts
 */ const $0bd50d43cbb3bf44$export$8b81ac7267f802e2 = (state)=>{
    const value = Number(state);
    if (Number.isNaN(value)) return undefined;
    if (value >= 70) return '--state-sensor-battery-high-color';
    if (value >= 30) return '--state-sensor-battery-medium-color';
    return '--state-sensor-battery-low-color';
};




/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/string/slugify.ts
 */ // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const $9e5c6bd7705b1882$export$c383cdd2a518017a = (value, delimiter = '_')=>{
    const a = "\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010D\u0111\u010F\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xee\xef\xed\u012B\u012F\xec\u0131\u0130\u0142\u1E3F\xf1\u0144\u01F9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014D\xf5\u0151\u1E55\u0155\u0159\xdf\u015B\u0161\u015F\u0219\u0165\u021B\xfb\xfc\xf9\xfa\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xff\xfd\u017E\u017A\u017C\xb7";
    const b = `aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}`;
    const p = new RegExp(a.split('').join('|'), 'g');
    let slugified;
    if (value === '') slugified = '';
    else {
        slugified = value.toString().toLowerCase().replace(p, (c)=>b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/(\d),(?=\d)/g, '$1') // Remove Commas between numbers
        .replace(/[^a-z0-9]+/g, delimiter) // Replace all non-word characters
        .replace(new RegExp(`(${delimiter})\\1+`, 'g'), '$1') // Replace multiple delimiters with single delimiter
        .replace(new RegExp(`^${delimiter}+`), '') // Trim delimiter from start of text
        .replace(new RegExp(`${delimiter}+$`), ''); // Trim delimiter from end of text
        if (slugified === '') slugified = 'unknown';
    }
    return slugified;
};



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/group.ts
 */ 
const $b00b2d9b4eb2aaf5$export$995df2070398c848 = (stateObj)=>{
    const entityIds = stateObj.attributes.entity_id || [];
    const uniqueDomains = [
        ...new Set(entityIds.map((entityId)=>(0, $676762a3bf0095a1$export$2044bdc9670769ab)(entityId)))
    ];
    return uniqueDomains.length === 1 ? uniqueDomains[0] : undefined;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/resources/css-variables.ts
 */ function $8d09d9a47fbd924a$export$32531bbdc9316392(props) {
    if (Array.isArray(props)) return props.reverse().reduce((str, variable)=>`var(${variable}${str ? `, ${str}` : ''})`, undefined);
    return `var(${props})`;
}


const $d41ad01236652ab5$var$STATE_COLORED_DOMAIN = new Set([
    'alarm_control_panel',
    'alert',
    'automation',
    'binary_sensor',
    'calendar',
    'camera',
    'climate',
    'cover',
    'device_tracker',
    'fan',
    'group',
    'humidifier',
    'input_boolean',
    'lawn_mower',
    'light',
    'lock',
    'media_player',
    'person',
    'plant',
    'remote',
    'schedule',
    'script',
    'siren',
    'sun',
    'switch',
    'timer',
    'update',
    'vacuum',
    'valve',
    'water_heater'
]);
const $d41ad01236652ab5$export$b2779b0e0d1bdfa9 = (stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    if (compareState === (0, $a7bee5b3ec27c408$export$f2d101b977a134fd) && !active) return `var(--state-unavailable-color)`;
    const properties = $d41ad01236652ab5$export$e4e5839282fc5156(stateObj, scope, active, state);
    if (properties) return (0, $8d09d9a47fbd924a$export$32531bbdc9316392)(properties);
    return undefined;
};
const $d41ad01236652ab5$export$2b7fdd1a076d6214 = (domain, stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj.state;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active !== null && active !== void 0 ? active : (0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(stateObj, state);
    // allow for theme override
    const properties = [
        `--state-color-${scope}-theme`
    ];
    const stateKey = (0, $9e5c6bd7705b1882$export$c383cdd2a518017a)(compareState, '_');
    const activeKey = isActive ? 'active' : 'inactive';
    const dc = stateObj.attributes.device_class;
    if (dc) properties.push(`--state-${domain}-${dc}-${stateKey}-color`);
    properties.push(`--state-${domain}-${stateKey}-color`, `--state-${domain}-${activeKey}-color`, `--state-${activeKey}-color`);
    return properties;
};
const $d41ad01236652ab5$export$e4e5839282fc5156 = (stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    const domain = (0, $676762a3bf0095a1$export$2044bdc9670769ab)(stateObj.entity_id);
    const dc = stateObj.attributes.device_class;
    // Special rules for battery coloring
    if (domain === 'sensor' && dc === 'battery') {
        const property = (0, $0bd50d43cbb3bf44$export$8b81ac7267f802e2)(compareState);
        if (property) return [
            `--state-color-${scope}-theme`,
            property
        ];
    }
    // Special rules for group coloring
    if (domain === 'group') {
        const groupDomain = (0, $b00b2d9b4eb2aaf5$export$995df2070398c848)(stateObj);
        if (groupDomain && $d41ad01236652ab5$var$STATE_COLORED_DOMAIN.has(groupDomain)) return $d41ad01236652ab5$export$2b7fdd1a076d6214(groupDomain, stateObj, scope, active, state);
    }
    if ($d41ad01236652ab5$var$STATE_COLORED_DOMAIN.has(domain)) return $d41ad01236652ab5$export$2b7fdd1a076d6214(domain, stateObj, scope, active, state);
    return undefined;
};
const $d41ad01236652ab5$export$65bcdaf7f2807be8 = (stateObj)=>{
    if (stateObj.attributes.brightness && (0, $676762a3bf0095a1$export$2044bdc9670769ab)(stateObj.entity_id) !== 'plant') {
        // lowest brightness will be around 50% (that's pretty dark)
        const brightness = stateObj.attributes.brightness;
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    return '';
};



const $78d5b7f684c6d2c0$export$ce6920689b32408c = (state, onColor, offColor, active)=>{
    const rgbColor = state.attributes.rgb_color;
    // This conditional block checks whether the `rgbColor` attribute of the entity state
    // should be used to generate an RGB color string. The conditions ensure:
    // 1. The entity is not active with an `onColor` defined (`!(active && onColor)`).
    // 2. The entity is not inactive with an `offColor` defined (`!(!active && offColor)`).
    // 3. The `rgbColor` attribute exists, is an array, and contains exactly three elements.
    // If all these conditions are met, the function returns an RGB string in the format
    // `rgb(r, g, b)` using the values from the `rgbColor` array.
    if (!(active && onColor) && !(!active && offColor) && rgbColor && Array.isArray(rgbColor) && rgbColor.length === 3) return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    return undefined;
};


const $273edb1bb8e481ef$export$de96a622725f4284 = (hass, entity, thresholdResult, active)=>{
    var _state_attributes, _state_attributes1, _state_attributes2, _hass_themes_theme;
    const { state: state } = entity;
    if (!state) return undefined;
    // threshold-based colors have the highest priority
    if (thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.color) return (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(thresholdResult.color);
    // icon color is the second priority - hex colors
    const iconColor = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.icon_color;
    if (iconColor === null || iconColor === void 0 ? void 0 : iconColor.startsWith('#')) return iconColor;
    var _entity_config_on_color;
    const onColor = (_entity_config_on_color = entity.config.on_color) !== null && _entity_config_on_color !== void 0 ? _entity_config_on_color : (_state_attributes1 = state.attributes) === null || _state_attributes1 === void 0 ? void 0 : _state_attributes1.on_color;
    var _entity_config_off_color;
    const offColor = (_entity_config_off_color = entity.config.off_color) !== null && _entity_config_off_color !== void 0 ? _entity_config_off_color : state === null || state === void 0 ? void 0 : (_state_attributes2 = state.attributes) === null || _state_attributes2 === void 0 ? void 0 : _state_attributes2.off_color;
    const rgbColor = (0, $78d5b7f684c6d2c0$export$ce6920689b32408c)(state, onColor, offColor, active);
    // If the state has a specific RGB color, return it directly
    if (rgbColor) return rgbColor;
    // Try minimalist colors first if minimalist theme
    if ((_hass_themes_theme = hass.themes.theme) === null || _hass_themes_theme === void 0 ? void 0 : _hass_themes_theme.startsWith('minimalist-')) {
        const minimalistResult = (0, $2acaa25b6d047245$export$2757cc6eb9fa350d)(iconColor, onColor, offColor, state.domain, active);
        if (minimalistResult) return minimalistResult;
    }
    // Fallback to Home Assistant colors
    return (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(iconColor, onColor, offColor, active);
};


const $3eeea5b8a350985f$export$76969a794fd1f893 = (entity)=>{
    const { config: config, state: state } = entity;
    if (!state) return undefined;
    // Check state-based result configuration first
    const stateResult = $3eeea5b8a350985f$export$a459976b71c8081f(entity);
    if (stateResult) return stateResult;
    // Fallback to threshold-based configuration
    if (!config.thresholds) return undefined;
    // Sort thresholds by value in descending order to check highest first
    const sortedThresholds = [
        ...config.thresholds
    ].sort((a, b)=>b.threshold - a.threshold);
    for (const threshold of sortedThresholds){
        var _state_attributes;
        // Determine what value to compare against
        const valueToCompare = threshold.attribute ? (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes[threshold.attribute] : state.state;
        const numericValue = Number.parseFloat(String(valueToCompare !== null && valueToCompare !== void 0 ? valueToCompare : ''));
        // Skip if value is not a valid number
        if (Number.isNaN(numericValue)) continue;
        if ($3eeea5b8a350985f$var$meetsThreshold(numericValue, threshold)) return {
            color: threshold.icon_color,
            titleColor: threshold.title_color,
            icon: threshold.icon,
            label: threshold.label,
            styles: threshold.styles
        };
    }
    return undefined;
};
const $3eeea5b8a350985f$export$a459976b71c8081f = (entity)=>{
    const { config: config, state: state } = entity;
    if (!config.states || !state) return undefined;
    for (const stateConfig of config.states){
        var _state_attributes;
        var _state_attributes_stateConfig_attribute;
        // Determine what value to compare against
        const valueToMatch = stateConfig.attribute ? String((_state_attributes_stateConfig_attribute = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes[stateConfig.attribute]) !== null && _state_attributes_stateConfig_attribute !== void 0 ? _state_attributes_stateConfig_attribute : '') : state.state;
        if (stateConfig.state === valueToMatch) return {
            color: stateConfig.icon_color,
            titleColor: stateConfig.title_color,
            icon: stateConfig.icon,
            label: stateConfig.label,
            styles: stateConfig.styles
        };
    }
    return undefined;
};
const $3eeea5b8a350985f$export$3d43351ca2ab732f = (entity)=>{
    var _getStateResult;
    return (_getStateResult = $3eeea5b8a350985f$export$a459976b71c8081f(entity)) === null || _getStateResult === void 0 ? void 0 : _getStateResult.color;
};
/**
 * Checks if a numeric value meets a threshold condition
 *
 * @param value - The numeric value to test
 * @param threshold - The threshold configuration
 * @returns true if the condition is met
 */ const $3eeea5b8a350985f$var$meetsThreshold = (value, threshold)=>{
    const operator = threshold.operator || 'gte';
    switch(operator){
        case 'gt':
            return value > threshold.threshold;
        case 'gte':
            return value >= threshold.threshold;
        case 'lt':
            return value < threshold.threshold;
        case 'lte':
            return value <= threshold.threshold;
        case 'eq':
            return value === threshold.threshold;
        default:
            return value >= threshold.threshold;
    }
};
const $3eeea5b8a350985f$export$9d7fd66a8622e6b5 = (entity, result)=>{
    // First priority: label from state/threshold result
    if (result === null || result === void 0 ? void 0 : result.label) return result.label;
    // Second priority: label from config
    return entity.config.label;
};


const $07e9954134d2b2af$export$de2836153ec9a0b1 = (hass, scope, entity, active)=>{
    const { state: state } = entity;
    if (!state) return null;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active !== null && active !== void 0 ? active : (0, $d460d16f74269a4e$export$c0e85c3982a3daa6)(state);
    const activeClass = isActive ? 'active' : 'inactive';
    const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(entity);
    const themeOverride = (0, $273edb1bb8e481ef$export$de96a622725f4284)(hass, entity, thresholdResult, isActive);
    var _stateColorCss;
    const cssColor = (_stateColorCss = (0, $d41ad01236652ab5$export$b2779b0e0d1bdfa9)(state, scope, isActive)) !== null && _stateColorCss !== void 0 ? _stateColorCss : themeOverride ? `var(--state-color-${scope}-theme)` : undefined;
    return {
        active: isActive,
        cssColor: cssColor,
        themeOverride: themeOverride,
        activeClass: activeClass,
        thresholdResult: thresholdResult
    };
};


const $58c246fbddf82f4c$export$43aa80132b9e21fa = (hass, config, entity, isActive)=>{
    var _styleData_thresholdResult, _config_styles, _config_styles1;
    const skipStyles = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    if (skipStyles) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    const styleData = (0, $07e9954134d2b2af$export$de2836153ec9a0b1)(hass, 'text', entity, isActive);
    if (!styleData) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    // Check if titleColor is specified in threshold/state result
    const titleColor = ((_styleData_thresholdResult = styleData.thresholdResult) === null || _styleData_thresholdResult === void 0 ? void 0 : _styleData_thresholdResult.titleColor) ? (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(styleData.thresholdResult.titleColor) : styleData.cssColor;
    return styleData.active ? (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({
        '--text-color': titleColor,
        '--state-color-text-theme': styleData.themeOverride
    }, (_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.title)) : (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({
        '--text-color': titleColor
    }, (_config_styles1 = config.styles) === null || _config_styles1 === void 0 ? void 0 : _config_styles1.title));
};






const $370eb512b0573832$export$fcf7c33d7fd02301 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entities, entityId)=>entities[entityId]);





let $6f5f72559a4d178c$var$_ = (t)=>t, $6f5f72559a4d178c$var$t;
const $6f5f72559a4d178c$export$3703ea65b0ac4726 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    // Separate keyframes from regular styles
    const keyframesEntries = [];
    const regularStyles = [];
    for (const [key, value] of Object.entries(styles))if (key === 'keyframes') // Handle keyframes specially
    keyframesEntries.push(`@keyframes ${value}`);
    else // Regular CSS property
    regularStyles.push(`${key}: ${value};`);
    const cssString = regularStyles.join(' ');
    const keyframesString = keyframesEntries.join('\n');
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($6f5f72559a4d178c$var$t || ($6f5f72559a4d178c$var$t = $6f5f72559a4d178c$var$_`
      <style>
        ${0}
        :host {
          ${0}
        }
      </style>
    `), keyframesString, cssString);
});
const $6f5f72559a4d178c$export$94e56d1d743c1f9b = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)(styles);
});



let $2ad98ee9ff0934fc$var$_ = (t)=>t, $2ad98ee9ff0934fc$var$t;
const $2ad98ee9ff0934fc$export$91d43c07a591098e = (hass, config)=>{
    var _config_styles;
    if (!hass || (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'hide_area_stats')) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    const devices = Object.keys(hass.devices).filter((k)=>(0, $62a596c6a9bc2e04$export$30c823bc834d6ab4)(hass.devices, k).area_id === config.area);
    const entities = Object.keys(hass.entities).filter((k)=>{
        const entity = (0, $370eb512b0573832$export$fcf7c33d7fd02301)(hass.entities, k);
        return entity.area_id === config.area || devices.includes(entity.device_id);
    });
    const e = [
        [
            devices.length,
            'devices'
        ],
        [
            entities.length,
            'entities'
        ]
    ].filter((count)=>count.length > 0).map(([count, type])=>`${count} ${type}`).join(' ');
    const s = (0, $6f5f72559a4d178c$export$94e56d1d743c1f9b)((_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.stats);
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($2ad98ee9ff0934fc$var$t || ($2ad98ee9ff0934fc$var$t = $2ad98ee9ff0934fc$var$_`<span style="${0}" class="stats text">${0}</span>`), s, e);
};


let $52a5e6cbabf7b8e2$var$_ = (t)=>t, $52a5e6cbabf7b8e2$var$t;
const $52a5e6cbabf7b8e2$export$a80b3bd66acc52ff = (element, hass, roomInformation, roomEntity, config, sensors, isActive)=>{
    const textStyle = (0, $58c246fbddf82f4c$export$43aa80132b9e21fa)(hass, config, roomEntity, isActive);
    const stats = (0, $2ad98ee9ff0934fc$export$91d43c07a591098e)(hass, config);
    const handler = (0, $b96673d7637fba33$export$8a44987212de21b)(roomEntity);
    const action = (0, $b96673d7637fba33$export$3d3654ce4577c53d)(element, roomEntity);
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($52a5e6cbabf7b8e2$var$t || ($52a5e6cbabf7b8e2$var$t = $52a5e6cbabf7b8e2$var$_`<div class="info">
    <div class="text" @action=${0} .actionHandler=${0}>
      <div class="name text" style=${0}>
        ${0}
      </div>
      ${0}
    </div>
    <sensor-collection
      .config=${0}
      .sensors=${0}
      .hass=${0}
    ></sensor-collection>
  </div>`), action, handler, textStyle, roomInformation.area_name, stats, config, sensors, hass);
};









const $8f71a348c8e54f2c$export$abc50289182506e4 = (config, active)=>{
    var _config_background_options, _config_background, _config_background1;
    const skipStyles = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    var _config_background_options_includes;
    const isIconBackground = (_config_background_options_includes = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('icon_background')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false;
    // Only apply opacity to card if icon_background is NOT set
    const opacity = !isIconBackground && ((_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : _config_background1.opacity) ? config.background.opacity / 100 : undefined;
    return {
        '--opacity-theme': opacity,
        '--background-opacity-card': `var(--opacity-background-${active && !skipStyles ? 'active' : 'inactive'})`
    };
};



const $5e4701340181d3da$export$6675fe814017d7b1 = (hass, config, entity, isOccupied, isSmokeDetected, image, isActive = false, thresholds)=>{
    var _config_styles;
    const { state: state } = entity;
    const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(entity);
    const themeOverride = (0, $273edb1bb8e481ef$export$de96a622725f4284)(hass, entity, thresholdResult, isActive);
    const skipStyles = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    const opacity = (0, $8f71a348c8e54f2c$export$abc50289182506e4)(config, isActive);
    // Smoke takes priority over occupancy - if smoke is detected, use smoke CSS vars
    const alarmVars = isSmokeDetected ? (0, $82ec124af523e08e$export$2b84bc3470ef94ef)(isSmokeDetected, config.smoke) : (0, $82ec124af523e08e$export$a44444e2ac55f0e7)(isOccupied, config.occupancy);
    const cssColor = (0, $d41ad01236652ab5$export$b2779b0e0d1bdfa9)(state, 'card', isActive);
    const filter = (0, $d41ad01236652ab5$export$65bcdaf7f2807be8)(state);
    let backgroundColorCard;
    if (skipStyles) backgroundColorCard = undefined;
    else backgroundColorCard = isActive ? cssColor : undefined;
    // Generate threshold CSS variables
    const thresholdVars = {};
    if (thresholds) {
        if (thresholds.hot && thresholds.hotColor) thresholdVars['--threshold-hot-color'] = thresholds.hotColor;
        if (thresholds.humid && thresholds.humidColor) thresholdVars['--threshold-humid-color'] = thresholds.humidColor;
    }
    // Return complete style map
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({
        '--background-color-card': backgroundColorCard,
        '--state-color-card-theme': themeOverride,
        '--background-image': image ? `url(${image})` : undefined,
        '--background-filter': filter
    }, opacity, alarmVars, thresholdVars, (_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.card));
};


/**
 * Room Summary Card Styles Module
 *
 * Handles all styling logic and CSS definitions for the Room Summary Card.
 * Includes functions for generating dynamic styles based on state and
 * configuration, as well as static CSS styles for the card layout.
 */ 

let $9a549ca08a876898$var$_ = (t)=>t, $9a549ca08a876898$var$t;
const $9a549ca08a876898$export$e8f30ede68e93366 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($9a549ca08a876898$var$t || ($9a549ca08a876898$var$t = $9a549ca08a876898$var$_`
  /* Mold indicator container styling */
  .mold-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
    animation: mold-pulse 2s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }

  /* Mold indicator icon styling */
  .mold-indicator ha-state-icon {
    color: white;
    --mdc-icon-size: 20px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    animation: mold-icon-bounce 1.5s ease-in-out infinite;
  }

  /* Mold indicator text styling */
  .mold-indicator .mold-text {
    color: white;
    font-size: 0.8em;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    animation: mold-text-glow 2s ease-in-out infinite alternate;
  }

  /* Glowing effect behind the indicator */
  .mold-indicator::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a52, #ff6b6b);
    border-radius: 14px;
    z-index: -1;
    animation: mold-glow 3s ease-in-out infinite;
    opacity: 0.6;
  }

  /* Warning triangle effect */
  .mold-indicator::after {
    content: '⚠';
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 12px;
    color: #ffeb3b;
    text-shadow: 0 0 4px rgba(255, 235, 59, 0.8);
    animation: mold-warning-flash 1s ease-in-out infinite;
  }

  /* Animation keyframes */
  @keyframes mold-pulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 4px 16px rgba(255, 107, 107, 0.5);
    }
  }

  @keyframes mold-icon-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }

  @keyframes mold-text-glow {
    0% {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.3),
        0 0 8px rgba(255, 255, 255, 0.6);
    }
  }

  @keyframes mold-glow {
    0%,
    100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @keyframes mold-warning-flash {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }

  /* Hover effects */
  .mold-indicator:hover {
    animation: mold-pulse 0.5s ease-in-out infinite;
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  .mold-indicator:hover::before {
    animation: mold-glow 1s ease-in-out infinite;
  }

  /* Dark theme adjustments */
  :host([dark]) .mold-indicator {
    background: linear-gradient(135deg, #d32f2f, #c62828);
    box-shadow: 0 2px 8px rgba(211, 47, 47, 0.4);
  }

  :host([dark]) .mold-indicator::before {
    background: linear-gradient(45deg, #d32f2f, #c62828, #d32f2f);
  }
`));



let $6d7979ce7cb6be76$var$_ = (t)=>t, $6d7979ce7cb6be76$var$t;
const $6d7979ce7cb6be76$export$e417a58d8f305947 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($6d7979ce7cb6be76$var$t || ($6d7979ce7cb6be76$var$t = $6d7979ce7cb6be76$var$_`
  /* Card border styling when smoke is detected (takes priority over occupancy) */
  :host([smoke]) ha-card {
    animation: var(--smoke-card-animation, none);
    border: var(--smoke-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Card border styling when occupied (only if smoke is not detected) */
  :host([occupied]:not([smoke])) ha-card {
    animation: var(--occupancy-card-animation, none);
    border: var(--occupancy-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Animation keyframes for smoke */
  @keyframes smoke-pulse {
    0% {
      box-shadow: 0 0 5px var(--smoke-card-border-color, var(--error-color));
    }
    100% {
      box-shadow: 0 0 20px var(--smoke-card-border-color, var(--error-color));
    }
  }

  /* Animation keyframes for occupancy */
  @keyframes occupancy-pulse {
    0% {
      box-shadow: 0 0 5px
        var(--occupancy-card-border-color, var(--success-color));
    }
    100% {
      box-shadow: 0 0 20px
        var(--occupancy-card-border-color, var(--success-color));
    }
  }
`));



let $4fafc8f75bfc202b$var$_ = (t)=>t, $4fafc8f75bfc202b$var$t, $4fafc8f75bfc202b$var$t1, $4fafc8f75bfc202b$var$t2, $4fafc8f75bfc202b$var$t3, $4fafc8f75bfc202b$var$t4, $4fafc8f75bfc202b$var$t5, $4fafc8f75bfc202b$var$t6, $4fafc8f75bfc202b$var$t7, $4fafc8f75bfc202b$var$t8;
/**
 * Base theme and color definitions
 */ const $4fafc8f75bfc202b$var$hostThemeStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t || ($4fafc8f75bfc202b$var$t = $4fafc8f75bfc202b$var$_`
  /* Card Themes and Colors */
  :host {
    ${0}
    ${0}
    ${0}
  }

  :host([dark]) {
    ${0}
  }

  :host {
    --text-color: var(--primary-text-color);
    --background-color-card: var(--theme-background-color-card);
    --background-opacity-card: var(--opacity-background-inactive);
    --icon-color: var(--theme-color-icon);
    --background-color-icon: var(--theme-background-color-icon);
    --background-opacity-icon: var(--opacity-icon-fill-inactive);
    --background-image: none;
  }
`), (0, $caf1696fa639ec30$export$dec94ffc2d530e03), (0, $caf1696fa639ec30$export$4aa0a1b480cdb1b6), (0, $caf1696fa639ec30$export$38d2ecc76f0c2959), (0, $caf1696fa639ec30$export$eae85ad18a22ab6c));
/**
 * Base theme and color definitions
 */ const $4fafc8f75bfc202b$var$haCardThemeStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t1 || ($4fafc8f75bfc202b$var$t1 = $4fafc8f75bfc202b$var$_`
  :host([hot]) ha-card {
    border-left: 3px solid var(--threshold-hot-color, var(--error-color)) !important;
    border-top: 3px solid var(--threshold-hot-color, var(--error-color)) !important;
    border-right: 3px solid var(--threshold-hot-color, var(--error-color));
    border-bottom: 3px solid var(--threshold-hot-color, var(--error-color));
  }

  :host([humid]) ha-card {
    border-left: 3px solid var(--threshold-humid-color, var(--info-color));
    border-top: 3px solid var(--threshold-humid-color, var(--info-color));
    border-right: 3px solid var(--threshold-humid-color, var(--info-color)) !important;
    border-bottom: 3px solid var(--threshold-humid-color, var(--info-color)) !important;
  }

  :host([image]) ha-card {
    --opacity-theme: 0.3;
    --text-opacity-theme: 0.8;
    --opacity-icon-fill-inactive: 0.2;
  }

  :host([image]) {
    --user-background-image-overlay: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }
`));
/**
 * Card container and background styling
 */ const $4fafc8f75bfc202b$var$cardContainerStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t2 || ($4fafc8f75bfc202b$var$t2 = $4fafc8f75bfc202b$var$_`
  ha-card {
    line-height: normal;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  :host([image]) ha-card::before {
    background-image:
      var(--user-background-image-overlay), var(--background-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  :host([image][icon-bg]) ha-card::before {
    background-image: none;
  }

  ha-card::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--background-color-card);
    opacity: var(--opacity-theme, var(--background-opacity-card));
    filter: var(--background-filter, none);
  }
`));
/**
 * Grid layout and positioning
 */ const $4fafc8f75bfc202b$var$gridLayoutStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t3 || ($4fafc8f75bfc202b$var$t3 = $4fafc8f75bfc202b$var$_`
  .grid {
    display: grid;
    grid-template-areas: var(
      --user-grid-template-areas,
      'i i i e' 'i i i e' 'r r . e' 'r r . e'
    );
    grid-template-columns: var(--user-grid-template-columns, 1fr 1fr 1fr 1fr);
    grid-template-rows: var(--user-grid-template-rows, 1fr 1fr 1fr 1fr);
    justify-items: center;
    aspect-ratio: var(--user-grid-aspect-ratio, 1/1);
    height: 100%;
    width: 100%;
    position: relative; /* For absolute positioning of clickable area */
  }

  .text {
    cursor: pointer;
  }

  .info {
    grid-area: i;
    width: 100%;
    margin: 5% 0px 0px 10%;
    container-type: inline-size;
  }

  entity-collection,
  entity-slider {
    grid-area: e;
  }

  /* Room area styling - Large square shape */
  room-state-icon[room] {
    grid-area: r;
    width: var(--user-room-icon-size, 150%);
    aspect-ratio: 1 / 1;
    align-self: center;
  }

  room-state-icon[room].hidden {
    opacity: 0;
  }
`));
/**
 * Entity and component area styles
 */ const $4fafc8f75bfc202b$var$entityAreaStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t4 || ($4fafc8f75bfc202b$var$t4 = $4fafc8f75bfc202b$var$_`
  /* Statistics text */
  .stats {
    font-size: 0.8em;
    opacity: var(--text-opacity-theme, 0.4);
  }

  /* Common text styles */
  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content; /* don't cover other elements plz */
  }
`));
/**
 * Status entity indicator
 */ const $4fafc8f75bfc202b$var$statusEntityStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t5 || ($4fafc8f75bfc202b$var$t5 = $4fafc8f75bfc202b$var$_`
  .problems {
    grid-area: 4 / 1 / 4 / 1;
    align-self: end;
    justify-self: start;
    margin-left: 10%;
    margin-bottom: 10%;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  /* Status entities indicator */
  .status-entities {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    color: var(--black-color);
    position: relative;
    z-index: 1;
  }

  .status-entities::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: var(--success-color);
    opacity: 0.6;
    z-index: -1;
  }

  /* Problem state styling */
  .status-entities[has-problems]::before {
    background-color: var(--error-color);
    opacity: 0.8;
    animation: problem-pulse 2s ease-in-out infinite;
  }

  /* Problem pulse animation */
  @keyframes problem-pulse {
    0%,
    100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`));
/**
 * Sensor and label display styles
 */ const $4fafc8f75bfc202b$var$sensorLabelStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t6 || ($4fafc8f75bfc202b$var$t6 = $4fafc8f75bfc202b$var$_`
  /* Room name styling */
  .name {
    font-size: clamp(1.2rem, 6cqw, 2rem);
    font-weight: 500;
    color: var(--text-color);
  }
`));
/**
 * Full card action overlay styles
 */ const $4fafc8f75bfc202b$var$cardOverlayStyles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t7 || ($4fafc8f75bfc202b$var$t7 = $4fafc8f75bfc202b$var$_`
  .card-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
  }
`));
const $4fafc8f75bfc202b$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($4fafc8f75bfc202b$var$t8 || ($4fafc8f75bfc202b$var$t8 = $4fafc8f75bfc202b$var$_`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), $4fafc8f75bfc202b$var$hostThemeStyles, $4fafc8f75bfc202b$var$haCardThemeStyles, $4fafc8f75bfc202b$var$cardContainerStyles, $4fafc8f75bfc202b$var$gridLayoutStyles, $4fafc8f75bfc202b$var$entityAreaStyles, $4fafc8f75bfc202b$var$sensorLabelStyles, $4fafc8f75bfc202b$var$statusEntityStyles, (0, $6d7979ce7cb6be76$export$e417a58d8f305947), (0, $9a549ca08a876898$export$e8f30ede68e93366), $4fafc8f75bfc202b$var$cardOverlayStyles);



const $86dc711946e77b66$export$4368d992c4eafac0 = (config, ...args)=>{
    if ((0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'debug')) console.debug(...args);
};


let $01f4c5d41a54ca3c$var$_ = (t)=>t, $01f4c5d41a54ca3c$var$t, $01f4c5d41a54ca3c$var$t1, $01f4c5d41a54ca3c$var$t2, $01f4c5d41a54ca3c$var$t3;
var $ee3d06fe83a6a770$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
$ee3d06fe83a6a770$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


class $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $4fafc8f75bfc202b$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        if (!$ee3d06fe83a6a770$exports(config, this._config)) {
            var _config_background_options, _config_background;
            var _config_background_options_includes;
            this.iconBackground = (_config_background_options_includes = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('icon_background')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false;
            this._config = config;
        }
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        var _this__hass;
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this._config, 'room-summary-card', 'set hass');
        const { roomInfo: roomInfo, roomEntity: roomEntity, sensors: sensors, image: image, isActive: isActive, thresholds: thresholds, flags: { occupied: occupied, smoke: smoke, dark: dark } } = (0, $c4ab0a640e168730$export$df764ae7d62abece)(hass, this._config);
        this.occupied = occupied;
        this.smoke = smoke;
        this.dark = dark;
        this._isActive = isActive;
        // Handle async image resolution
        image.then((resolvedImage)=>{
            // Don't set image attribute on card if icon_background is set
            // (background should only apply to icon, not card)
            this.image = !this.iconBackground && !!resolvedImage;
            this._image = resolvedImage;
        });
        // Update states only if they've changed
        let shouldRender = false;
        if (!$ee3d06fe83a6a770$exports(roomInfo, this._roomInformation)) {
            this._roomInformation = roomInfo;
            shouldRender = true;
        }
        if (!$ee3d06fe83a6a770$exports(roomEntity, this._roomEntity)) {
            this._roomEntity = roomEntity;
            shouldRender = true;
        }
        if (!$ee3d06fe83a6a770$exports(sensors, this._sensors)) {
            this._sensors = sensors;
            shouldRender = true;
        }
        if (!$ee3d06fe83a6a770$exports(thresholds, this._thresholds)) {
            this._thresholds = thresholds;
            this.hot = thresholds.hot;
            this.humid = thresholds.humid;
            shouldRender = true;
        }
        if (shouldRender || hass.formatEntityState !== ((_this__hass = this._hass) === null || _this__hass === void 0 ? void 0 : _this__hass.formatEntityState)) // normally we wouldn't need to update the hass object this way,
        // but since state-display is using the formatEntityState function
        // we need to ensure it is updated when the new function is available
        // this is a workaround and prevents the need to re-render the card many times
        // https://github.com/home-assistant/frontend/issues/25648
        this._hass = hass;
        else // update children who are subscribed
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'hass-update', {
            hass: hass
        });
    }
    // card configuration
    static getConfigElement() {
        return document.createElement('room-summary-card-editor');
    }
    static async getStubConfig(hass) {
        // Get all area IDs and their friendly names
        const areas = Object.entries(hass.areas);
        // Find the first area that has matching entities
        const matchingArea = areas.find(([areaId, area])=>{
            const areaName = area.area_id.toLowerCase().replace(/\s+/g, '_');
            // Check if either entity exists for this area
            const hasLight = `light.${areaName}_light` in hass.entities || `light.${areaName}` in hass.entities;
            const hasFan = `switch.${areaName}_fan` in hass.entities || `fan.${areaName}` in hass.entities;
            // Return true if either entity exists
            return hasLight || hasFan;
        });
        // Return the matching area ID or empty string if none found
        return {
            area: matchingArea ? matchingArea[0] : ''
        };
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this._config, 'room-summary-card', 'render');
        if (!this._hass) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const roomEntity = (0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, this._roomEntity, this._config, {
            isMainRoomEntity: true,
            isActive: this._isActive,
            hasImage: !!this._image,
            occupied: this.occupied,
            smoke: this.smoke
        });
        const cardStyle = (0, $5e4701340181d3da$export$6675fe814017d7b1)(this._hass, this._config, this._roomEntity, this.occupied, this.smoke, this._image, this._isActive, this._thresholds);
        const problems = (0, $d71beedfb309b5b1$export$8093665c9ba8ead9)(this._hass, this._config, this._sensors);
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($01f4c5d41a54ca3c$var$t3 || ($01f4c5d41a54ca3c$var$t3 = $01f4c5d41a54ca3c$var$_`
      <ha-card style="${0}">
        <div class="grid">
          ${0}

          <!-- Room Icon -->
          ${0}

          <!-- Entities Container -->
          ${0}

          <!-- Problem Indicator -->
          ${0}
        </div>

        <!-- Full Card Action Overlay -->
        ${0}
      </ha-card>
    `), cardStyle, (0, $52a5e6cbabf7b8e2$export$a80b3bd66acc52ff)(this, this._hass, this._roomInformation, this._roomEntity, this._config, this._sensors, this._isActive), roomEntity, (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(this._config, 'slider') ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($01f4c5d41a54ca3c$var$t || ($01f4c5d41a54ca3c$var$t = $01f4c5d41a54ca3c$var$_`
                <entity-slider
                  .config=${0}
                  .hass=${0}
                ></entity-slider>
              `), this._config, this._hass) : (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($01f4c5d41a54ca3c$var$t1 || ($01f4c5d41a54ca3c$var$t1 = $01f4c5d41a54ca3c$var$_`
                <entity-collection
                  .config=${0}
                  .hass=${0}
                ></entity-collection>
              `), this._config, this._hass), problems, (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(this._config, 'full_card_actions') ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($01f4c5d41a54ca3c$var$t2 || ($01f4c5d41a54ca3c$var$t2 = $01f4c5d41a54ca3c$var$_`
              <div
                class="card-overlay"
                @action=${0}
                .actionHandler=${0}
              ></div>
            `), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, this._roomEntity), (0, $b96673d7637fba33$export$8a44987212de21b)(this._roomEntity)) : (0, $8f2793d8325bb031$export$45b790e32b2810ee));
    }
    constructor(...args){
        super(...args), /**
   * Whether the room is considered active (for styling)
   */ this._isActive = false;
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_roomInformation", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_roomEntity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_sensors", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_isActive", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_thresholds", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "dark", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "hot", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "humid", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "image", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "occupied", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "smoke", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'icon-bg'
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "iconBackground", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_hass", void 0);











/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $ff55a5f0dbea74c9$var$t } = (0, $8f2793d8325bb031$export$8613d1ca9052b22e), $ff55a5f0dbea74c9$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $ff55a5f0dbea74c9$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $ff55a5f0dbea74c9$export$6b6d145ec2a44ca9 = (o, t)=>void 0 === t ? void 0 !== (o === null || o === void 0 ? void 0 : o._$litType$) : (o === null || o === void 0 ? void 0 : o._$litType$) === t, $ff55a5f0dbea74c9$export$6a0e8de894d2fcca = (o)=>{
    var _o__$litType$;
    return null != (o === null || o === void 0 ? void 0 : (_o__$litType$ = o._$litType$) === null || _o__$litType$ === void 0 ? void 0 : _o__$litType$.h);
}, $ff55a5f0dbea74c9$export$2f448fec17d50a3e = (o)=>void 0 !== (o === null || o === void 0 ? void 0 : o._$litDirective$), $ff55a5f0dbea74c9$export$f28e31de6a6eaf32 = (o)=>o === null || o === void 0 ? void 0 : o._$litDirective$, $ff55a5f0dbea74c9$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $ff55a5f0dbea74c9$var$s = ()=>document.createComment(""), $ff55a5f0dbea74c9$export$291b2338ad9b0b30 = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore($ff55a5f0dbea74c9$var$s(), l), c = e.insertBefore($ff55a5f0dbea74c9$var$s(), l);
        n = new $ff55a5f0dbea74c9$var$t(i, c, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, c = i !== o;
        if (c) {
            var _n__$AQ;
            let t;
            (_n__$AQ = n._$AQ) === null || _n__$AQ === void 0 ? void 0 : _n__$AQ.call(n, o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
        }
        if (t !== l || c) {
            let o = n._$AA;
            for(; o !== t;){
                const t = o.nextSibling;
                e.insertBefore(o, l), o = t;
            }
        }
    }
    return n;
}, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4 = (o, t, i = o)=>(o._$AI(t, i), o), $ff55a5f0dbea74c9$var$u = {}, $ff55a5f0dbea74c9$export$ea70d9dd5965b1c8 = (o, t = $ff55a5f0dbea74c9$var$u)=>o._$AH = t, $ff55a5f0dbea74c9$export$59e9bce518cde500 = (o)=>o._$AH, $ff55a5f0dbea74c9$export$3133b3144bbba267 = (o)=>{
    var _o__$AP;
    (_o__$AP = o._$AP) === null || _o__$AP === void 0 ? void 0 : _o__$AP.call(o, !1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o = t.nextSibling;
        t.remove(), t = o;
    }
}, $ff55a5f0dbea74c9$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $861f50142b1ef3e8$var$u = (e, s, t)=>{
    const r = new Map;
    for(let l = s; l <= t; l++)r.set(e[l], l);
    return r;
}, $861f50142b1ef3e8$export$76d90c956114f2c2 = (0, $f8f448f4cc7b38fe$export$99b43ad1ed32e735)(class extends (0, $f8f448f4cc7b38fe$export$befdefbdce210f91) {
    dt(e, s, t) {
        let r;
        void 0 === t ? t = s : void 0 !== s && (r = s);
        const l = [], o = [];
        let i = 0;
        for (const s of e)l[i] = r ? r(s, i) : i, o[i] = t(s, i), i++;
        return {
            values: o,
            keys: l
        };
    }
    render(e, s, t) {
        return this.dt(e, s, t).values;
    }
    update(s, [t, r, c]) {
        const d = (0, $ff55a5f0dbea74c9$export$59e9bce518cde500)(s), { values: p, keys: a } = this.dt(t, r, c);
        if (!Array.isArray(d)) return this.ut = a, p;
        var _this_ut;
        const h = (_this_ut = this.ut) !== null && _this_ut !== void 0 ? _this_ut : this.ut = [], v = [];
        let m, y, x = 0, j = d.length - 1, k = 0, w = p.length - 1;
        for(; x <= j && k <= w;)if (null === d[x]) x++;
        else if (null === d[j]) j--;
        else if (h[x] === a[k]) v[k] = (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(d[x], p[k]), x++, k++;
        else if (h[j] === a[w]) v[w] = (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(d[j], p[w]), j--, w--;
        else if (h[x] === a[w]) v[w] = (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(d[x], p[w]), (0, $ff55a5f0dbea74c9$export$291b2338ad9b0b30)(s, v[w + 1], d[x]), x++, w--;
        else if (h[j] === a[k]) v[k] = (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(d[j], p[k]), (0, $ff55a5f0dbea74c9$export$291b2338ad9b0b30)(s, d[x], d[j]), j--, k++;
        else if (void 0 === m && (m = $861f50142b1ef3e8$var$u(a, k, w), y = $861f50142b1ef3e8$var$u(h, x, j)), m.has(h[x])) {
            if (m.has(h[j])) {
                const e = y.get(a[k]), t = void 0 !== e ? d[e] : null;
                if (null === t) {
                    const e = (0, $ff55a5f0dbea74c9$export$291b2338ad9b0b30)(s, d[x]);
                    (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(e, p[k]), v[k] = e;
                } else v[k] = (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(t, p[k]), (0, $ff55a5f0dbea74c9$export$291b2338ad9b0b30)(s, d[x], t), d[e] = null;
                k++;
            } else (0, $ff55a5f0dbea74c9$export$3133b3144bbba267)(d[j]), j--;
        } else (0, $ff55a5f0dbea74c9$export$3133b3144bbba267)(d[x]), x++;
        for(; k <= w;){
            const e = (0, $ff55a5f0dbea74c9$export$291b2338ad9b0b30)(s, v[w + 1]);
            (0, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4)(e, p[k]), v[k++] = e;
        }
        for(; x <= j;){
            const e = d[x++];
            null !== e && (0, $ff55a5f0dbea74c9$export$3133b3144bbba267)(e);
        }
        return this.ut = a, (0, $ff55a5f0dbea74c9$export$ea70d9dd5965b1c8)(s, v), $8f2793d8325bb031$export$9c068ae9cc5db4e8;
    }
    constructor(e){
        if (super(e), e.type !== (0, $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa).CHILD) throw Error("repeat() can only be used in text expressions");
    }
});




let $8e72cbf99a87388e$var$_ = (t)=>t, $8e72cbf99a87388e$var$t, $8e72cbf99a87388e$var$t1, $8e72cbf99a87388e$var$t2, $8e72cbf99a87388e$var$t3, $8e72cbf99a87388e$var$t4, $8e72cbf99a87388e$var$t5, $8e72cbf99a87388e$var$t6;
class $8e72cbf99a87388e$export$12e5e4192ee344c7 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    _getKey(item, index) {
        // Generate a stable key based on entity_id and index
        const entityId = typeof item === 'string' ? item : item.entity_id;
        return `${entityId}-${index}`;
    }
    _getEntityId(item) {
        if (typeof item === 'string') return item;
        return item.entity_id;
    }
    render() {
        if (!this.hass) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const addEntityClass = `add-entity${this.single ? ' single-mode' : ''}`;
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t5 || ($8e72cbf99a87388e$var$t5 = $8e72cbf99a87388e$var$_`
      <label>
        ${0}
      </label>
      ${0}
      ${0}
    `), this.label || `${this.hass.localize('ui.panel.lovelace.editor.card.generic.entities')} (${this.hass.localize('ui.panel.lovelace.editor.card.config.optional')})`, !this.single ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t1 || ($8e72cbf99a87388e$var$t1 = $8e72cbf99a87388e$var$_`
            <ha-sortable
              handle-selector=".handle"
              @item-moved=${0}
            >
              <div class="entities">
                ${0}
              </div>
            </ha-sortable>
          `), this._rowMoved, (0, $861f50142b1ef3e8$export$76d90c956114f2c2)(items, (item, index)=>this._getKey(item, index), (item, index)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t || ($8e72cbf99a87388e$var$t = $8e72cbf99a87388e$var$_`
                    <div class="entity">
                      <div class="handle">
                        <ha-icon icon="mdi:drag"></ha-icon>
                      </div>
                      <ha-entity-picker
                        allow-custom-entity
                        hide-clear-icon
                        .hass=${0}
                        .value=${0}
                        .index=${0}
                        .includeEntities=${0}
                        @value-changed=${0}
                      ></ha-entity-picker>
                      <ha-icon-button
                        .label=${0}
                        class="remove-icon"
                        .index=${0}
                        @click=${0}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </ha-icon-button>
                      <ha-icon-button
                        .label=${0}
                        class="edit-icon"
                        .index=${0}
                        @click=${0}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </ha-icon-button>
                    </div>
                  `), this.hass, this._getEntityId(item), index, this.availableEntities, this._valueChanged, this.hass.localize('ui.components.entity.entity-picker.clear'), index, this._removeRow, this.hass.localize('ui.components.entity.entity-picker.edit'), index, this._editRow))) : (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t3 || ($8e72cbf99a87388e$var$t3 = $8e72cbf99a87388e$var$_`
            <div class="entities">
              ${0}
            </div>
          `), (0, $861f50142b1ef3e8$export$76d90c956114f2c2)(items, (item, index)=>this._getKey(item, index), (item, index)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t2 || ($8e72cbf99a87388e$var$t2 = $8e72cbf99a87388e$var$_`
                  <div class="entity">
                    <ha-entity-picker
                      allow-custom-entity
                      hide-clear-icon
                      .hass=${0}
                      .value=${0}
                      .index=${0}
                      .includeEntities=${0}
                      @value-changed=${0}
                    ></ha-entity-picker>
                    <ha-icon-button
                      .label=${0}
                      class="remove-icon"
                      .index=${0}
                      @click=${0}
                    >
                      <ha-icon icon="mdi:close"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      .label=${0}
                      class="edit-icon"
                      .index=${0}
                      @click=${0}
                    >
                      <ha-icon icon="mdi:pencil"></ha-icon>
                    </ha-icon-button>
                  </div>
                `), this.hass, this._getEntityId(item), index, this.availableEntities, this._valueChanged, this.hass.localize('ui.components.entity.entity-picker.clear'), index, this._removeRow, this.hass.localize('ui.components.entity.entity-picker.edit'), index, this._editRow))), !this.single || items.length === 0 ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($8e72cbf99a87388e$var$t4 || ($8e72cbf99a87388e$var$t4 = $8e72cbf99a87388e$var$_`
            <ha-entity-picker
              class=${0}
              .hass=${0}
              .includeEntities=${0}
              @value-changed=${0}
            ></ha-entity-picker>
          `), addEntityClass, this.hass, this.availableEntities, this._addEntity) : (0, $8f2793d8325bb031$export$45b790e32b2810ee));
    }
    async _addEntity(ev) {
        ev.stopPropagation(); // Stop the picker's event from bubbling up
        const value = ev.detail.value;
        if (value === '') return;
        // In single mode, replace instead of add
        if (this.single) {
            ev.target.value = '';
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: [
                    value
                ]
            });
            return;
        }
        if (this.field === 'entities') {
            const newConfigEntities = [
                ...this.entities || [],
                value
            ];
            ev.target.value = '';
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            const newConfigLights = [
                ...this.lights || [],
                value
            ];
            ev.target.value = '';
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _removeRow(ev) {
        const index = ev.currentTarget.index;
        if (this.field === 'entities') {
            const newConfigEntities = (this.entities || []).concat();
            newConfigEntities.splice(index, 1);
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            const newConfigLights = (this.lights || []).concat();
            newConfigLights.splice(index, 1);
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _valueChanged(ev) {
        const value = ev.detail.value;
        const index = ev.target.index;
        if (this.field === 'entities') {
            const newConfigEntities = (this.entities || []).concat();
            if (value === '' || value === undefined) newConfigEntities.splice(index, 1);
            else {
                const currentItem = newConfigEntities[index];
                if (typeof currentItem === 'string') newConfigEntities[index] = value;
                else newConfigEntities[index] = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, currentItem), {
                    entity_id: value
                });
            }
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            const newConfigLights = (this.lights || []).concat();
            if (value === '' || value === undefined) newConfigLights.splice(index, 1);
            else newConfigLights[index] = value;
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _editRow(ev) {
        const index = ev.currentTarget.index;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const elementConfig = items[index];
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'edit-detail-element', {
            subElementConfig: {
                index: index,
                type: 'entity',
                elementConfig: elementConfig,
                field: this.field
            }
        });
    }
    _rowMoved(ev) {
        ev.stopPropagation();
        const { oldIndex: oldIndex, newIndex: newIndex } = ev.detail;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const newItems = items.concat();
        const [movedItem] = newItems.splice(oldIndex, 1);
        if (movedItem !== undefined) {
            newItems.splice(newIndex, 0, movedItem);
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'value-changed', {
                value: newItems
            });
        }
    }
    constructor(...args){
        super(...args), this.field = 'entities', this.single = false;
    }
}
$8e72cbf99a87388e$export$12e5e4192ee344c7.styles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($8e72cbf99a87388e$var$t6 || ($8e72cbf99a87388e$var$t6 = $8e72cbf99a87388e$var$_`
    ha-entity-picker {
      margin-top: 8px;
    }
    .add-entity {
      display: block;
      margin-left: 31px;
      margin-right: 71px;
      margin-inline-start: 31px;
      margin-inline-end: 71px;
      direction: var(--direction);
    }
    .add-entity.single-mode {
      margin-left: 0;
      margin-inline-start: 0;
    }
    .entities {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .entity {
      display: flex;
      align-items: center;
    }

    .entity .handle {
      padding-right: 8px;
      cursor: move; /* fallback if grab cursor is unsupported */
      cursor: grab;
      padding-inline-end: 8px;
      padding-inline-start: initial;
      direction: var(--direction);
    }
    .entity .handle > * {
      pointer-events: none;
    }

    .entity ha-entity-picker {
      flex-grow: 1;
      min-width: 0;
    }

    .remove-icon,
    .edit-icon {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
    }
  `));
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "hass", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "entities", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "lights", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "label", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "field", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "single", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "availableEntities", void 0);





var $14bbfc67a3760abd$exports = {};
$14bbfc67a3760abd$exports = JSON.parse('{"editor":{"area":{"area":"Area","area_name":"Area name","area_side_entities":"Area side entities","room_entity":"Room entity"},"background":{"background":"Background","background_image":"Background Image","background_image_entity":"Background Image Entity","background_opacity":"Background Opacity","disable_background_image":"Disable Background Image","multi_light_background":"Multi-Light Background","light_entities":"Light Entities","multi_light_background_info":"Configure which light entities should be tracked for the multi-light background feature. When enabled, the card background (dark mode only) and room icon will light up when any of these lights are on. The card automatically discovers all lights in the area if no entities are specified."},"entity":{"entity_id":"Entity","entity_label":"Label","entity_attribute":"Attribute","entity_icon":"Icon","entity_on_color":"On Color","entity_off_color":"Off Color","ignore_entity":"Ignore Entity","show_entity_labels":"Show Entity Labels","use_entity_icon":"Use Entity Icon","styles":"Styles","states":"States","add_state":"Add State","thresholds":"Thresholds","add_threshold":"Add Threshold","state":{"state":"State","icon_color":"Icon Color","title_color":"Title Color","icon":"Icon","label":"Label","attribute":"Attribute","styles":"Styles"},"threshold":{"threshold":"Threshold","icon_color":"Icon Color","title_color":"Title Color","icon":"Icon","label":"Label","attribute":"Attribute","styles":"Styles","operator":"Operator"}},"entities":{"entities_info":"These options are for setting up the right side entities."},"icon":{"disable_icon_animations":"Disable Icon Animations","disable_icon_color":"Disable Icon Color","icon_background":"Icon Background","icon_background_color_occupied":"Icon Background Color (Occupied)","icon_background_color_smoke":"Icon Background Color (Smoke Detected)","hide_icon_only":"Hide Icon Only","hide_room_icon":"Hide Room Icon"},"card":{"card_border_color_occupied":"Card Border Color (Occupied)","card_border_color_smoke":"Card Border Color (Smoke Detected)","disable_card_border":"Disable Card Border","disable_card_border_animations":"Disable Card Border Animations","skip_card_background_styles":"Skip Card Background Styles"},"sensor":{"sensor_classes":"Sensor classes","hide_sensor_icons":"Hide Sensor icons","hide_sensor_labels":"Hide Sensor labels","hide_sensors":"Hide Sensors","individual_sensor_entities":"Individual sensor entities","sensors_info":"Sensors appear on the top row below the card title. They can be clicked for more info.","features_info":"Configure sensor display features:","hide_sensors_desc":"Hide the climate/sensor information","hide_sensor_icons_desc":"Hide the icons next to sensor values","hide_sensor_labels_desc":"Hide the labels next to sensor icons"},"threshold":{"thresholds":"Thresholds","temperature_threshold":"Temperature threshold","temperature_thresholds":"Temperature Thresholds","add_temperature_threshold":"Add Temperature Threshold","temperature_operator":"Temperature Operator","temperature_entity":"Temperature Entity","temperature_color":"Temperature Border Color","humidity_threshold":"Humidity threshold","humidity_thresholds":"Humidity Thresholds","add_humidity_threshold":"Add Humidity Threshold","humidity_operator":"Humidity Operator","humidity_entity":"Humidity Entity","humidity_color":"Humidity Border Color","mold_threshold":"Mold threshold","operator":{"equal":"Equal (=)","greater_than":"Greater than (>)","greater_than_or_equal":"Greater than or equal (\u2265)","less_than":"Less than (<)","less_than_or_equal":"Less than or equal (\u2264)"}},"interactions":{"interactions":"Interactions","tap_action":"Tap Action","double_tap_action":"Double Tap Action","hold_action":"Hold Action","navigate_path":"Navigate path when card tapped"},"occupancy":{"occupancy_presence_detection":"Occupancy & Presence Detection","motion_occupancy_presence_sensors":"Motion/Occupancy/Presence Sensors","occupancy_options":"Options","occupancy_info":"Configure motion, occupancy, and presence detection sensors. When any sensor detects activity, the card border and room icon can change color to indicate the room is occupied."},"alarm":{"alarm_info":"Configure alarm detection sensors. Occupancy sensors detect motion/presence, while smoke detectors detect smoke. When smoke is detected, it takes priority over occupancy and uses a different color (default: red).","occupancy_detection":"Occupancy Detection","smoke_detection":"Smoke Detection","motion_occupancy_presence_sensors":"Motion/Occupancy/Presence Sensors","smoke_detectors":"Smoke Detectors","alarm_options":"Options"},"styles":{"styles":"Styles","css_styles":"Your CSS Styles","card_styles":"Card Styles","entities_container_styles":"Entities Container Styles","entity_icon_styles":"Entity Icon Styles","room_entity_icon_styles":"Main Room Entity Icon Styles","sensor_styles":"Sensor Styles","stats_styles":"Stats Styles","title_styles":"Title Styles","skip_climate_styles":"Skip Climate Styles"},"layout":{"content":"Content","sensor_layout":"Sensor Layout","default_in_label_area":"Default (in label area)","bottom":"Bottom","vertical_stack":"Vertical Stack"},"stats":{"hide_area_stats":"Hide Area Stats"},"slider":{"slider_style":"Slider Style","minimalist":"Minimalist","track":"Track","line":"Line","filled":"Filled/Progress","gradient":"Gradient","dual_rail":"Dual Rail","dots":"Dots/Ticks","notched":"Notched","grid":"Grid","glow":"Glow","shadow_trail":"Shadow Trail","outlined":"Outlined Track"},"features":{"features":"Features","exclude_default_entities":"Exclude Default Entities","sticky_entities":"Sticky Entities","slider":"Slider","full_card_actions":"Full Card Actions","sticky_entities_info":"Keep entity positions stable even when their state is unavailable. This prevents UI layout shifts and makes it easier to tap entities on touch dashboards.","features_info":"Configure global features that affect how entities are displayed and handled:","show_entity_labels_desc":"Show entity labels under each entity icon","exclude_default_entities_desc":"Don\'t include default light/fan entities","ignore_entity_desc":"Ignore the entity property in the configuration","sticky_entities_desc":"Keep entity positions even when state is unavailable","slider_desc":"Display a single entity in a slider layout instead of the entity collection","full_card_actions_desc":"Make the entire card clickable using the room entity\'s tap/hold/double-tap actions","options":"Options"}}}');


// Import other languages as needed above this line and in order
// Define supported languages
const $026d47447e611f6a$var$languages = {
    en: $14bbfc67a3760abd$exports
};
const $026d47447e611f6a$export$b3bd0bc58e36cd63 = (hass, key, search = '', replace = '')=>{
    let translated;
    var _getNestedTranslation, _ref;
    translated = (_ref = (_getNestedTranslation = $026d47447e611f6a$var$getNestedTranslation($026d47447e611f6a$var$languages[hass.language], key)) !== null && _getNestedTranslation !== void 0 ? _getNestedTranslation : $026d47447e611f6a$var$getNestedTranslation($026d47447e611f6a$var$languages.en, key)) !== null && _ref !== void 0 ? _ref : key;
    // Replace placeholders
    if (search !== '' && replace !== '') translated = translated.replace(search, replace);
    return translated;
};
// Helper function to safely navigate nested objects
function $026d47447e611f6a$var$getNestedTranslation(obj, path) {
    if (!obj) return undefined;
    const keys = path.split('.');
    let result = obj;
    for (const key of keys){
        if (result === undefined || result === null || typeof result !== 'object') return undefined;
        result = result[key];
    }
    return typeof result === 'string' ? result : undefined;
}












let $68ce0c44dd114f11$var$_ = (t)=>t, $68ce0c44dd114f11$var$t, $68ce0c44dd114f11$var$t1, $68ce0c44dd114f11$var$t2, $68ce0c44dd114f11$var$t3;
class $68ce0c44dd114f11$export$806f47322f907427 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    _getKey(item, index) {
        // Use index as key to maintain stable identity during editing
        // This prevents focus loss when typing in form fields
        return `${this.mode}-${index}`;
    }
    _addItem() {
        if (this.mode === 'states') {
            const newState = {
                state: ''
            };
            const newStates = [
                ...this.states || [],
                newState
            ];
            const newIndex = newStates.length - 1;
            this._expandedStates = new Set([
                ...this._expandedStates,
                newIndex
            ]);
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'states-value-changed', {
                value: newStates
            });
        } else {
            const newThreshold = {
                threshold: 0
            };
            const newThresholds = [
                ...this.thresholds || [],
                newThreshold
            ];
            const newIndex = newThresholds.length - 1;
            this._expandedStates = new Set([
                ...this._expandedStates,
                newIndex
            ]);
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'thresholds-value-changed', {
                value: newThresholds
            });
        }
    }
    /**
   * Adjusts expanded state indices after removing an item at the specified index.
   * Indices greater than the removed index are decremented by 1.
   */ _adjustExpandedIndicesAfterRemoval(removedIndex) {
        const newExpanded = new Set(this._expandedStates);
        newExpanded.delete(removedIndex);
        const adjustedExpanded = new Set();
        for (const idx of newExpanded)if (idx > removedIndex) adjustedExpanded.add(idx - 1);
        else adjustedExpanded.add(idx);
        return adjustedExpanded;
    }
    /**
   * Removes a state item at the specified index and fires the appropriate event.
   */ _removeStateItem(index) {
        const newStates = (this.states || []).concat();
        newStates.splice(index, 1);
        this._expandedStates = this._adjustExpandedIndicesAfterRemoval(index);
        // Always ensure we send an array, even if empty
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'states-value-changed', {
            value: newStates.length > 0 ? newStates : []
        });
    }
    /**
   * Removes a threshold item at the specified index and fires the appropriate event.
   */ _removeThresholdItem(index) {
        const newThresholds = (this.thresholds || []).concat();
        newThresholds.splice(index, 1);
        this._expandedStates = this._adjustExpandedIndicesAfterRemoval(index);
        // Always ensure we send an array, even if empty
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'thresholds-value-changed', {
            value: newThresholds.length > 0 ? newThresholds : []
        });
    }
    _removeItem(index) {
        if (this.mode === 'states') this._removeStateItem(index);
        else this._removeThresholdItem(index);
    }
    /**
   * Removes empty string properties from a config object
   */ _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            // Skip empty strings
            if (value === '') continue;
            // Recursively clean nested objects
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _itemValueChanged(index, ev) {
        if (this.mode === 'states') {
            const newStates = (this.states || []).concat();
            const updatedState = ev.detail.value;
            // Ensure we have valid state before updating
            if (updatedState && typeof updatedState === 'object') {
                // Clean empty strings from the state config
                const cleanedState = this._cleanEmptyStrings(updatedState);
                newStates[index] = cleanedState;
            }
            // Always ensure we send an array
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'states-value-changed', {
                value: newStates
            });
        } else {
            const newThresholds = (this.thresholds || []).concat();
            const updatedThreshold = ev.detail.value;
            // Ensure we have valid threshold before updating
            if (updatedThreshold && typeof updatedThreshold === 'object') {
                // Clean empty strings from the threshold config
                const cleanedThreshold = this._cleanEmptyStrings(updatedThreshold);
                newThresholds[index] = cleanedThreshold;
            }
            // Always ensure we send an array
            (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'thresholds-value-changed', {
                value: newThresholds
            });
        }
    }
    _getItemTitle(item) {
        if (this.mode === 'states') {
            const state = item;
            if (state.label) return `${state.state} (${state.label})`;
            return state.state || 'New State';
        } else {
            var _threshold_threshold;
            const threshold = item;
            if (threshold.label) return `${threshold.threshold} (${threshold.label})`;
            return ((_threshold_threshold = threshold.threshold) === null || _threshold_threshold === void 0 ? void 0 : _threshold_threshold.toString()) || 'New Threshold';
        }
    }
    render() {
        if (!this.hass) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const entityId = this.entityId || '';
        const defaultLabel = this.mode === 'states' ? (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.states') : (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.thresholds');
        const addButtonLabel = this.mode === 'states' ? (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.add_state') : (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.add_threshold');
        const renderItems = ()=>{
            if (this.mode === 'states') {
                const states = Array.isArray(this.states) ? this.states : [];
                return (0, $861f50142b1ef3e8$export$76d90c956114f2c2)(states, (item, index)=>this._getKey(item, index), (item, index)=>{
                    const isExpanded = this._expandedStates.has(index);
                    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($68ce0c44dd114f11$var$t || ($68ce0c44dd114f11$var$t = $68ce0c44dd114f11$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="state-header">
                  <div class="state-title">${0}</div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="state-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                        if (ev.detail.value) this._expandedStates = new Set([
                            ...this._expandedStates,
                            index
                        ]);
                        else {
                            const newExpanded = new Set(this._expandedStates);
                            newExpanded.delete(index);
                            this._expandedStates = newExpanded;
                        }
                    }, this._getItemTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                        e.stopPropagation();
                        this._removeItem(index);
                    }, this.hass, item, this._getStateSchema(entityId, this.hass, this.isSensor, this.isMainEntity), this._computeLabelCallback, (ev)=>this._itemValueChanged(index, ev));
                });
            } else {
                const thresholds = Array.isArray(this.thresholds) ? this.thresholds : [];
                return (0, $861f50142b1ef3e8$export$76d90c956114f2c2)(thresholds, (item, index)=>this._getKey(item, index), (item, index)=>{
                    const isExpanded = this._expandedStates.has(index);
                    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($68ce0c44dd114f11$var$t1 || ($68ce0c44dd114f11$var$t1 = $68ce0c44dd114f11$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="state-header">
                  <div class="state-title">${0}</div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="state-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                        if (ev.detail.value) this._expandedStates = new Set([
                            ...this._expandedStates,
                            index
                        ]);
                        else {
                            const newExpanded = new Set(this._expandedStates);
                            newExpanded.delete(index);
                            this._expandedStates = newExpanded;
                        }
                    }, this._getItemTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                        e.stopPropagation();
                        this._removeItem(index);
                    }, this.hass, item, this._getThresholdSchema(entityId, this.hass), this._computeLabelCallback, (ev)=>this._itemValueChanged(index, ev));
                });
            }
        };
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($68ce0c44dd114f11$var$t2 || ($68ce0c44dd114f11$var$t2 = $68ce0c44dd114f11$var$_`
      <label>
        ${0}
        (${0})
      </label>
      <div class="states">${0}</div>
      <mwc-button class="add-state" outlined @click=${0}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${0}
      </mwc-button>
    `), this.label || defaultLabel, this.hass.localize('ui.panel.lovelace.editor.card.config.optional'), renderItems(), this._addItem, addButtonLabel);
    }
    constructor(...args){
        super(...args), this.mode = 'states', this.isSensor = false, this.isMainEntity = false, this._expandedStates = new Set(), this._getStateSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass, isSensor, isMainEntity)=>{
            const schema = [
                {
                    name: 'state',
                    required: true,
                    label: 'editor.entity.state.state',
                    selector: {
                        text: {}
                    }
                },
                {
                    name: 'icon_color',
                    required: true,
                    label: 'editor.entity.state.icon_color',
                    selector: {
                        ui_color: {}
                    }
                }
            ];
            // Only include title_color for main entity (not sensors, not entities list)
            if (!isSensor && isMainEntity) schema.push({
                name: 'title_color',
                required: false,
                label: 'editor.entity.state.title_color',
                selector: {
                    ui_color: {}
                }
            });
            schema.push({
                type: 'grid',
                name: '',
                label: 'editor.entity.entity_label',
                schema: [
                    {
                        name: 'icon',
                        label: 'editor.entity.state.icon',
                        required: false,
                        selector: {
                            icon: {}
                        }
                    },
                    {
                        name: 'label',
                        label: 'editor.entity.state.label',
                        required: false,
                        selector: {
                            text: {}
                        }
                    }
                ]
            }, {
                name: 'attribute',
                label: 'editor.entity.state.attribute',
                required: false,
                selector: {
                    attribute: {
                        entity_id: entity_id
                    }
                }
            }, {
                name: 'styles',
                label: 'editor.entity.state.styles',
                required: false,
                selector: {
                    object: {}
                }
            });
            return schema;
        }), this._getThresholdSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass)=>{
            return [
                {
                    name: 'threshold',
                    required: true,
                    label: 'editor.entity.threshold.threshold',
                    selector: {
                        number: {
                            mode: 'box'
                        }
                    }
                },
                {
                    name: 'icon_color',
                    required: true,
                    label: 'editor.entity.threshold.icon_color',
                    selector: {
                        ui_color: {}
                    }
                },
                {
                    name: 'title_color',
                    required: false,
                    label: 'editor.entity.threshold.title_color',
                    selector: {
                        ui_color: {}
                    }
                },
                {
                    name: 'operator',
                    required: false,
                    label: 'editor.entity.threshold.operator',
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    value: 'gt',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.greater_than')
                                },
                                {
                                    value: 'gte',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.greater_than_or_equal')
                                },
                                {
                                    value: 'lt',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.less_than')
                                },
                                {
                                    value: 'lte',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.less_than_or_equal')
                                },
                                {
                                    value: 'eq',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.equal')
                                }
                            ]
                        }
                    }
                },
                {
                    type: 'grid',
                    name: '',
                    label: 'editor.entity.entity_label',
                    schema: [
                        {
                            name: 'icon',
                            label: 'editor.entity.threshold.icon',
                            required: false,
                            selector: {
                                icon: {}
                            }
                        },
                        {
                            name: 'label',
                            label: 'editor.entity.threshold.label',
                            required: false,
                            selector: {
                                text: {}
                            }
                        }
                    ]
                },
                {
                    name: 'attribute',
                    label: 'editor.entity.threshold.attribute',
                    required: false,
                    selector: {
                        attribute: {
                            entity_id: entity_id
                        }
                    }
                },
                {
                    name: 'styles',
                    label: 'editor.entity.threshold.styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                }
            ];
        }), this._computeLabelCallback = (schema)=>{
            if (!schema.label) return '';
            return `${(0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, schema.label)} ${schema.required ? `(${this.hass.localize('ui.panel.lovelace.editor.card.config.required')})` : `(${this.hass.localize('ui.panel.lovelace.editor.card.config.optional')})`}`;
        };
    }
}
$68ce0c44dd114f11$export$806f47322f907427.styles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($68ce0c44dd114f11$var$t3 || ($68ce0c44dd114f11$var$t3 = $68ce0c44dd114f11$var$_`
    :host {
      margin-bottom: 20px;
      display: block;
    }

    label {
      display: block;
    }

    .states {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    ha-expansion-panel {
      --expansion-panel-summary-padding: 12px 16px;
      --expansion-panel-content-padding: 0;
    }

    .state-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .state-title {
      flex-grow: 1;
      font-weight: 500;
    }

    .remove-icon {
      --mdc-icon-button-size: 32px;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .state-content {
      padding: 16px;
    }

    .add-state {
      cursor: pointer;
    }
  `));
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "hass", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "states", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "thresholds", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "label", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "entityId", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "mode", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "isSensor", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "isMainEntity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "_expandedStates", void 0);


let $43564874ab3ed043$var$_ = (t)=>t, $43564874ab3ed043$var$t, $43564874ab3ed043$var$t1, $43564874ab3ed043$var$t2, $43564874ab3ed043$var$t3;
class $43564874ab3ed043$export$5062b3ea8745e421 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    setConfig(config) {
        if (typeof config === 'string') this._config = {
            entity_id: config
        };
        else this._config = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config);
    }
    set value(value) {
        if (!value) {
            this._config = undefined;
            return;
        }
        this.setConfig(value);
    }
    get value() {
        return this._config;
    }
    render() {
        if (!this.hass || !this._config) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const schema = this.type === 'entity' ? this._entitiesSchema(this._config.entity_id, this.hass) : this._sensorsSchema(this._config.entity_id, this.hass);
        const states = Array.isArray(this._config.states) ? this._config.states : undefined;
        const thresholds = Array.isArray(this._config.thresholds) ? this._config.thresholds : undefined;
        const thresholdsEditor = this.type === 'entity' ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($43564874ab3ed043$var$t || ($43564874ab3ed043$var$t = $43564874ab3ed043$var$_`
            <room-summary-states-row-editor
              .hass=${0}
              .thresholds=${0}
              .entityId=${0}
              .mode=${0}
              label=${0}
              @thresholds-value-changed=${0}
            ></room-summary-states-row-editor>
          `), this.hass, thresholds, this._config.entity_id, 'thresholds', (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.thresholds'), this._thresholdsValueChanged) : (0, $8f2793d8325bb031$export$45b790e32b2810ee);
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($43564874ab3ed043$var$t2 || ($43564874ab3ed043$var$t2 = $43564874ab3ed043$var$_`
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      ${0}
    `), this.hass, this._config, schema, this._computeLabelCallback, this._valueChanged, this._config.entity_id ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($43564874ab3ed043$var$t1 || ($43564874ab3ed043$var$t1 = $43564874ab3ed043$var$_`
            <room-summary-states-row-editor
              .hass=${0}
              .states=${0}
              .entityId=${0}
              .mode=${0}
              .isSensor=${0}
              .isMainEntity=${0}
              label=${0}
              @states-value-changed=${0}
            ></room-summary-states-row-editor>
            ${0}
          `), this.hass, states, this._config.entity_id, 'states', this.type === 'sensor', this.isMainEntity, (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, 'editor.entity.states'), this._statesValueChanged, thresholdsEditor) : (0, $8f2793d8325bb031$export$45b790e32b2810ee));
    }
    /**
   * Removes empty string properties from a config object
   */ _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            // Skip empty strings
            if (value === '') continue;
            // Recursively clean nested objects
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _statesValueChanged(ev) {
        if (!this._config) return;
        const statesValue = ev.detail.value;
        // Ensure states is always an array, never an object
        if (!Array.isArray(statesValue)) {
            console.warn('States value is not an array:', statesValue);
            return;
        }
        // Clean empty strings from each state config
        const cleanedStates = statesValue.map((state)=>this._cleanEmptyStrings(state));
        const newConfig = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._config, cleanedStates.length > 0 ? {
            states: cleanedStates
        } : {});
        // If states array is empty, ensure we remove the property
        if (cleanedStates.length === 0 && 'states' in newConfig) delete newConfig.states;
        // @ts-ignore
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'config-changed', {
            config: newConfig
        });
    }
    _thresholdsValueChanged(ev) {
        if (!this._config) return;
        const thresholdsValue = ev.detail.value;
        // Ensure thresholds is always an array, never an object
        if (!Array.isArray(thresholdsValue)) {
            console.warn('Thresholds value is not an array:', thresholdsValue);
            return;
        }
        // Clean empty strings from each threshold config
        const cleanedThresholds = thresholdsValue.map((threshold)=>this._cleanEmptyStrings(threshold));
        const newConfig = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._config, cleanedThresholds.length > 0 ? {
            thresholds: cleanedThresholds
        } : {});
        // If thresholds array is empty, ensure we remove the property
        if (cleanedThresholds.length === 0 && 'thresholds' in newConfig) delete newConfig.thresholds;
        // @ts-ignore
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'config-changed', {
            config: newConfig
        });
    }
    _valueChanged(ev) {
        // @ts-ignore
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'config-changed', {
            config: ev.detail.value
        });
    }
    constructor(...args){
        super(...args), this.type = 'entity', this.isMainEntity = false, this._entitiesSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass)=>{
            return [
                {
                    name: 'entity_id',
                    required: true,
                    label: 'editor.entity.entity_id',
                    selector: {
                        entity: {}
                    }
                },
                {
                    type: 'grid',
                    name: '',
                    label: 'editor.entity.entity_label',
                    schema: [
                        {
                            name: 'label',
                            label: 'editor.entity.entity_label',
                            selector: {
                                text: {}
                            }
                        },
                        {
                            name: 'attribute',
                            label: 'editor.entity.entity_attribute',
                            selector: {
                                attribute: {
                                    entity_id: entity_id
                                }
                            }
                        },
                        {
                            name: 'icon',
                            label: 'editor.entity.entity_icon',
                            selector: {
                                icon: {}
                            }
                        }
                    ]
                },
                {
                    type: 'grid',
                    name: '',
                    label: 'editor.entity.entity_label',
                    schema: [
                        {
                            name: 'on_color',
                            label: 'editor.entity.entity_on_color',
                            selector: {
                                ui_color: {}
                            }
                        },
                        {
                            name: 'off_color',
                            label: 'editor.entity.entity_off_color',
                            selector: {
                                ui_color: {}
                            }
                        }
                    ]
                },
                {
                    name: 'features',
                    label: 'editor.features.features',
                    required: false,
                    selector: {
                        select: {
                            multiple: true,
                            mode: 'list',
                            options: [
                                {
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.entity.use_entity_icon'),
                                    value: 'use_entity_icon'
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'interactions',
                    label: 'editor.interactions.interactions',
                    type: 'expandable',
                    flatten: true,
                    icon: 'mdi:gesture-tap',
                    schema: [
                        {
                            name: 'tap_action',
                            label: 'editor.interactions.tap_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'toggle'
                                }
                            }
                        },
                        {
                            name: 'double_tap_action',
                            label: 'editor.interactions.double_tap_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'more-info'
                                }
                            }
                        },
                        {
                            name: 'hold_action',
                            label: 'editor.interactions.hold_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'none'
                                }
                            }
                        }
                    ]
                },
                {
                    name: 'styles',
                    label: 'editor.styles.css_styles',
                    type: 'expandable',
                    flatten: true,
                    icon: 'mdi:brush-variant',
                    schema: [
                        {
                            name: 'styles',
                            label: 'editor.entity.styles',
                            required: false,
                            selector: {
                                object: {}
                            }
                        }
                    ]
                }
            ];
        }), this._sensorsSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass)=>{
            return [
                {
                    name: 'entity_id',
                    required: true,
                    label: 'editor.entity.entity_id',
                    selector: {
                        entity: {}
                    }
                },
                {
                    type: 'grid',
                    name: '',
                    label: 'editor.entity.entity_label',
                    schema: [
                        {
                            name: 'label',
                            label: 'editor.entity.entity_label',
                            selector: {
                                text: {}
                            }
                        },
                        {
                            name: 'attribute',
                            label: 'editor.entity.entity_attribute',
                            selector: {
                                attribute: {
                                    entity_id: entity_id
                                }
                            }
                        }
                    ]
                }
            ];
        }), this._computeLabelCallback = (schema)=>{
            if (!schema.label) return '';
            return `${(0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, schema.label)} ${schema.required ? `(${this.hass.localize('ui.panel.lovelace.editor.card.config.required')})` : `(${this.hass.localize('ui.panel.lovelace.editor.card.config.optional')})`}`;
        };
    }
}
$43564874ab3ed043$export$5062b3ea8745e421.styles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($43564874ab3ed043$var$t3 || ($43564874ab3ed043$var$t3 = $43564874ab3ed043$var$_`
    ha-form {
      padding: 16px;
    }
  `));
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "hass", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "_config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "type", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "isMainEntity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "value", null);







let $ffd7d578a1e62621$var$_ = (t)=>t, $ffd7d578a1e62621$var$t, $ffd7d578a1e62621$var$t1, $ffd7d578a1e62621$var$t2, $ffd7d578a1e62621$var$t3;
class $ffd7d578a1e62621$export$ddca213b44fe1587 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    render() {
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($ffd7d578a1e62621$var$t || ($ffd7d578a1e62621$var$t = $ffd7d578a1e62621$var$_`
      <div class="header">
        <div class="back-title">
          <ha-icon-button-prev
            .label=${0}
            @click=${0}
          ></ha-icon-button-prev>
          <span slot="title">
            ${0}
          </span>
        </div>
        <ha-icon-button
          class="gui-mode-button"
          @click=${0}
          .disabled=${0}
          .label=${0}
        >
          <ha-icon
            icon=${0}
          ></ha-icon>
        </ha-icon-button>
      </div>
      ${0}
    `), this.hass.localize('ui.common.back'), this._goBack, this.hass.localize(`ui.panel.lovelace.editor.sub-element-editor.types.row`), this._toggleMode, !this._guiModeAvailable, this.hass.localize(this._guiMode ? 'ui.panel.lovelace.editor.edit_card.show_code_editor' : 'ui.panel.lovelace.editor.edit_card.show_visual_editor'), this._guiMode ? 'mdi:code-braces' : 'mdi:list-box-outline', this._renderEditor());
    }
    _renderEditor() {
        const type = this.config.type;
        if (type === 'entity' || type === 'sensor') {
            var _this_config_isMainEntity;
            if (this._guiMode) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($ffd7d578a1e62621$var$t1 || ($ffd7d578a1e62621$var$t1 = $ffd7d578a1e62621$var$_`
          <room-summary-entity-detail-editor
            class="editor"
            .hass=${0}
            .value=${0}
            .type=${0}
            .isMainEntity=${0}
            @config-changed=${0}
          ></room-summary-entity-detail-editor>
        `), this.hass, this.config.elementConfig, type, (_this_config_isMainEntity = this.config.isMainEntity) !== null && _this_config_isMainEntity !== void 0 ? _this_config_isMainEntity : false, this._handleConfigChanged);
            else // YAML mode
            return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($ffd7d578a1e62621$var$t2 || ($ffd7d578a1e62621$var$t2 = $ffd7d578a1e62621$var$_`
          <ha-yaml-editor
            .defaultValue=${0}
            autofocus
            .hass=${0}
            @value-changed=${0}
            dir="ltr"
            .showErrors=${0}
          ></ha-yaml-editor>
        `), this.config.elementConfig || {}, this.hass, this._handleYAMLChanged, false);
        }
        return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    }
    _handleConfigChanged(ev) {
        ev.stopPropagation();
        const value = ev.detail.config;
        // @ts-ignore
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'config-changed', {
            config: value
        });
    }
    _handleYAMLChanged(ev) {
        ev.stopPropagation();
        const value = ev.detail.value;
        // @ts-ignore
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'config-changed', {
            config: value
        });
    }
    _toggleMode() {
        this._guiMode = !this._guiMode;
    }
    _goBack() {
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'go-back');
    }
    constructor(...args){
        super(...args), this._guiModeAvailable = true, this._guiMode = true;
    }
}
$ffd7d578a1e62621$export$ddca213b44fe1587.styles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($ffd7d578a1e62621$var$t3 || ($ffd7d578a1e62621$var$t3 = $ffd7d578a1e62621$var$_`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--divider-color);
    }

    .back-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .editor {
      padding: 16px;
    }

    ha-icon-button-prev {
      color: var(--primary-color);
    }
  `));
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "_guiModeAvailable", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "_guiMode", void 0);









let $460e8ac2e6479550$var$_ = (t)=>t, $460e8ac2e6479550$var$t, $460e8ac2e6479550$var$t1, $460e8ac2e6479550$var$t2;
class $460e8ac2e6479550$export$b79a6ddbd7dc2198 extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    _getKey(item, index) {
        return `threshold-${this.thresholdType}-${index}`;
    }
    _addThreshold() {
        const newThreshold = {};
        const newThresholds = [
            ...this.thresholds || [],
            newThreshold
        ];
        const newIndex = newThresholds.length - 1;
        this._expandedThresholds = new Set([
            ...this._expandedThresholds,
            newIndex
        ]);
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'threshold-entries-value-changed', {
            value: newThresholds
        });
    }
    _adjustExpandedIndicesAfterRemoval(removedIndex) {
        const newExpanded = new Set(this._expandedThresholds);
        newExpanded.delete(removedIndex);
        const adjustedExpanded = new Set();
        for (const idx of newExpanded)if (idx > removedIndex) adjustedExpanded.add(idx - 1);
        else adjustedExpanded.add(idx);
        return adjustedExpanded;
    }
    _removeThresholdItem(index) {
        const newThresholds = (this.thresholds || []).concat();
        newThresholds.splice(index, 1);
        this._expandedThresholds = this._adjustExpandedIndicesAfterRemoval(index);
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'threshold-entries-value-changed', {
            value: newThresholds.length > 0 ? newThresholds : []
        });
    }
    _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            if (value === '') continue;
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _thresholdValueChanged(index, ev) {
        const newThresholds = (this.thresholds || []).concat();
        const updatedThreshold = ev.detail.value;
        if (updatedThreshold && typeof updatedThreshold === 'object') {
            const cleanedThreshold = this._cleanEmptyStrings(updatedThreshold);
            newThresholds[index] = cleanedThreshold;
        }
        (0, $589840a8bffad2e2$export$43835e9acf248a15)(this, 'threshold-entries-value-changed', {
            value: newThresholds
        });
    }
    _getThresholdTitle(item) {
        if (item.entity_id && item.value) return `${item.entity_id}: ${item.value}`;
        if (item.value) return item.value.toString();
        if (item.entity_id) return item.entity_id;
        return 'New Threshold';
    }
    render() {
        if (!this.hass) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const defaultLabel = this.thresholdType === 'temperature' ? this.hass.localize('editor.threshold.temperature_thresholds') || 'Temperature Thresholds' : this.hass.localize('editor.threshold.humidity_thresholds') || 'Humidity Thresholds';
        const addButtonLabel = this.thresholdType === 'temperature' ? this.hass.localize('editor.threshold.add_temperature_threshold') || 'Add Temperature Threshold' : this.hass.localize('editor.threshold.add_humidity_threshold') || 'Add Humidity Threshold';
        const thresholds = Array.isArray(this.thresholds) ? this.thresholds : [];
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($460e8ac2e6479550$var$t1 || ($460e8ac2e6479550$var$t1 = $460e8ac2e6479550$var$_`
      <label>
        ${0}
        (${0})
      </label>
      <div class="thresholds">
        ${0}
      </div>
      <mwc-button class="add-threshold" outlined @click=${0}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${0}
      </mwc-button>
    `), this.label || defaultLabel, this.hass.localize('ui.panel.lovelace.editor.card.config.optional'), (0, $861f50142b1ef3e8$export$76d90c956114f2c2)(thresholds, (item, index)=>this._getKey(item, index), (item, index)=>{
            const isExpanded = this._expandedThresholds.has(index);
            return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($460e8ac2e6479550$var$t || ($460e8ac2e6479550$var$t = $460e8ac2e6479550$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="threshold-header">
                  <div class="threshold-title">
                    ${0}
                  </div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="threshold-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                if (ev.detail.value) this._expandedThresholds = new Set([
                    ...this._expandedThresholds,
                    index
                ]);
                else {
                    const newExpanded = new Set(this._expandedThresholds);
                    newExpanded.delete(index);
                    this._expandedThresholds = newExpanded;
                }
            }, this._getThresholdTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                e.stopPropagation();
                this._removeThresholdItem(index);
            }, this.hass, item, this.hass ? this._getThresholdSchema(this.hass, this.thresholdType, this.availableEntities || []) : [], this._computeLabelCallback, (ev)=>this._thresholdValueChanged(index, ev));
        }), this._addThreshold, addButtonLabel);
    }
    constructor(...args){
        super(...args), this.thresholdType = 'temperature', this._expandedThresholds = new Set(), this._getThresholdSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((hass, thresholdType, availableEntities)=>{
            const isTemperature = thresholdType === 'temperature';
            const entityFilter = isTemperature ? {
                device_class: 'temperature'
            } : {
                device_class: 'humidity'
            };
            return [
                {
                    name: 'entity_id',
                    label: isTemperature ? 'editor.threshold.temperature_entity' : 'editor.threshold.humidity_entity',
                    required: false,
                    selector: {
                        entity: {
                            multiple: false,
                            include_entities: availableEntities,
                            filter: entityFilter
                        }
                    }
                },
                {
                    name: 'value',
                    label: isTemperature ? 'editor.threshold.temperature_threshold' : 'editor.threshold.humidity_threshold',
                    required: false,
                    selector: isTemperature ? {
                        number: {
                            mode: 'box',
                            unit_of_measurement: "\xb0"
                        }
                    } : {
                        number: {
                            mode: 'slider',
                            unit_of_measurement: '%',
                            min: 0,
                            max: 100
                        }
                    }
                },
                {
                    name: 'operator',
                    label: isTemperature ? 'editor.threshold.temperature_operator' : 'editor.threshold.humidity_operator',
                    required: false,
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    value: 'gt',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.greater_than')
                                },
                                {
                                    value: 'gte',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.greater_than_or_equal')
                                },
                                {
                                    value: 'lt',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.less_than')
                                },
                                {
                                    value: 'lte',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.less_than_or_equal')
                                },
                                {
                                    value: 'eq',
                                    label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.operator.equal')
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'color',
                    label: isTemperature ? 'editor.threshold.temperature_color' : 'editor.threshold.humidity_color',
                    required: false,
                    selector: {
                        ui_color: {}
                    }
                }
            ];
        }), this._computeLabelCallback = (schema)=>{
            if (!schema.label) return '';
            return `${(0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(this.hass, schema.label)} ${schema.required ? `(${this.hass.localize('ui.panel.lovelace.editor.card.config.required')})` : `(${this.hass.localize('ui.panel.lovelace.editor.card.config.optional')})`}`;
        };
    }
}
$460e8ac2e6479550$export$b79a6ddbd7dc2198.styles = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($460e8ac2e6479550$var$t2 || ($460e8ac2e6479550$var$t2 = $460e8ac2e6479550$var$_`
    :host {
      margin-bottom: 20px;
      display: block;
    }

    label {
      display: block;
    }

    .thresholds {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    ha-expansion-panel {
      --expansion-panel-summary-padding: 12px 16px;
      --expansion-panel-content-padding: 0;
    }

    .threshold-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .threshold-title {
      flex-grow: 1;
      font-weight: 500;
    }

    .remove-icon {
      --mdc-icon-button-size: 32px;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .threshold-content {
      padding: 16px;
    }

    .add-threshold {
      cursor: pointer;
    }
  `));
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "hass", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "thresholds", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "label", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "thresholdType", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "availableEntities", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "_expandedThresholds", void 0);






const $4aaac1c384d75a93$export$19efda5681568302 = (superClass)=>{
    class HassUpdateClass extends superClass {
        connectedCallback() {
            super.connectedCallback();
            window.addEventListener('hass-update', this._boundHassUpdateHandler);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            window.removeEventListener('hass-update', this._boundHassUpdateHandler);
        }
        _handleHassUpdate(event) {
            const { detail: { hass: hass } } = event;
            this.hass = hass;
        }
        constructor(...args){
            super(...args), this._boundHassUpdateHandler = this._handleHassUpdate.bind(this);
        }
    }
    (0, $a90010e54f817fa8$export$29e00dfd3077644b)([
        (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
            attribute: false
        })
    ], HassUpdateClass.prototype, "hass", void 0);
    return HassUpdateClass;
};






const $ec7fd3dcfcac1ba4$var$climateIcons = {
    auto: 'mdi:autorenew',
    cool: 'mdi:snowflake',
    heat: 'mdi:fire',
    dry: 'mdi:water',
    heat_cool: 'mdi:sun-snowflake',
    fan_only: 'mdi:fan',
    off: 'mdi:snowflake-off'
};
const $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20 = (hass, config)=>{
    // Define base entities for the area
    // Support both naming conventions: light.{area}_light / light.{area} and switch.{area}_fan / fan.{area}
    const baseEntities = [
        `light.${config.area}_light`,
        `light.${config.area}`,
        `switch.${config.area}_fan`,
        `fan.${config.area}`
    ];
    const configEntities = config.entities || [];
    // Combine base and config entities unless fan is removed
    const entities = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'exclude_default_entities') ? configEntities : baseEntities.concat(configEntities);
    const stickyEntitiesEnabled = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'sticky_entities');
    // Process and transform entities
    const states = entities.map((entity)=>{
        // Transform string format to entity config for convenience
        if (typeof entity === 'string') entity = {
            entity_id: entity
        };
        const state = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        // If state is not found and sticky entities is disabled, return undefined
        if (!state) {
            if (!stickyEntitiesEnabled) return undefined;
            // Return entity with undefined state for sticky entities
            return {
                config: entity,
                state: undefined
            };
        }
        const useClimateIcons = !(0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'skip_climate_styles') && state.domain === 'climate';
        // Create entity information with defaults and climate handling
        return {
            config: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({
                tap_action: {
                    action: 'toggle'
                },
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                }
            }, entity),
            state: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, state), {
                attributes: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({
                    icon: useClimateIcons ? $ec7fd3dcfcac1ba4$var$climateIcons[state.state] : undefined
                }, state.attributes)
            })
        };
    }).filter((entity)=>entity !== undefined);
    return states;
};







let $97576b6c0b409321$var$_ = (t)=>t, $97576b6c0b409321$var$t;
const $97576b6c0b409321$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($97576b6c0b409321$var$t || ($97576b6c0b409321$var$t = $97576b6c0b409321$var$_`
  :host {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    aspect-ratio: 0.23 / 1;
    padding: 5px 5px 5px 0;
  }
`));


let $b96a40707b142c90$var$_ = (t)=>t, $b96a40707b142c90$var$t;

class $b96a40707b142c90$export$b15c5e7ddecda86e extends (0, $4aaac1c384d75a93$export$19efda5681568302)((0, $1c65a264a7b7a28b$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $97576b6c0b409321$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'entity-collection', 'set hass');
        const states = (0, $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20)(hass, this.config);
        // Update entities only if they've changed
        if (!$ee3d06fe83a6a770$exports(states, this._entities)) this._entities = states;
        this._hass = hass;
    }
    render() {
        var _this_config_styles;
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'entity-collection', 'render');
        if (!this._hass || !this._entities) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const stateIcons = this._entities.map((entity)=>(0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, entity, this.config));
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($b96a40707b142c90$var$t || ($b96a40707b142c90$var$t = $b96a40707b142c90$var$_`
      ${0} ${0}
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.entities), stateIcons);
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Object
    })
], $b96a40707b142c90$export$b15c5e7ddecda86e.prototype, "config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $b96a40707b142c90$export$b15c5e7ddecda86e.prototype, "_entities", void 0);







const $d3a1c41917263588$export$bfd42fd87279097a = async (hass, entityId, brightness)=>{
    if (!entityId) return;
    // Ensure brightness is within valid range
    const clampedBrightness = Math.max(0, Math.min(255, Math.round(brightness)));
    // If brightness is 0, turn off the light
    if (clampedBrightness === 0) {
        await hass.callService('light', 'turn_off', {
            entity_id: entityId
        });
        return;
    }
    // Otherwise, turn on the light with the specified brightness
    await hass.callService('light', 'turn_on', {
        entity_id: entityId,
        brightness: clampedBrightness
    });
};








let $9b2e353c70f86bcb$var$_ = (t)=>t, $9b2e353c70f86bcb$var$t;
const $9b2e353c70f86bcb$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($9b2e353c70f86bcb$var$t || ($9b2e353c70f86bcb$var$t = $9b2e353c70f86bcb$var$_`
  :host {
    position: relative;
    aspect-ratio: 0.23 / 1;
    height: 80%;
    margin: auto 0;
    display: flex;
    justify-content: center;
  }

  /* Sunken track/well that the icon slides along */
  :host([slider='track'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    box-shadow:
      inset 0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 -1px 2px rgba(255, 255, 255, 0.1);
  }

  /* Thin line slider */
  :host([slider='line'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  /* Filled/Progress bar - shows brightness level */
  :host([slider='filled'])::before {
    content: '';
    position: absolute;
    top: var(--slider-position, 50%);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: rgba(var(--rgb-primary-color, 0, 0, 0), 0.2);
    border-radius: 100px;
    transition: top 0.1s ease;
  }

  /* Gradient line */
  :host([slider='gradient'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.3)
    );
    border-radius: 3px;
  }

  /* Dual rail - two parallel lines */
  :host([slider='dual-rail'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 2px,
      transparent 2px,
      transparent 10px,
      rgba(0, 0, 0, 0.2) 10px,
      rgba(0, 0, 0, 0.2) 12px
    );
  }

  /* Dots/Ticks at regular intervals */
  :host([slider='dots'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      transparent calc(25% - 3px),
      rgba(0, 0, 0, 0.3) calc(25% - 3px),
      rgba(0, 0, 0, 0.3) calc(25% + 3px),
      transparent calc(25% + 3px)
    );
    border-radius: 4px;
  }

  /* Notched track with indents */
  :host([slider='notched'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 10%,
      rgba(0, 0, 0, 0.25) 10%,
      rgba(0, 0, 0, 0.25) 12%,
      rgba(0, 0, 0, 0.15) 12%
    );
    border-radius: 100px;
  }

  /* Grid with horizontal lines */
  :host([slider='grid'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      transparent calc(25% - 1px),
      rgba(0, 0, 0, 0.15) calc(25% - 1px),
      rgba(0, 0, 0, 0.15) calc(25% + 1px),
      transparent calc(25% + 1px)
    );
  }

  /* Glow line with blur effect */
  :host([slider='glow'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    background: rgba(var(--rgb-primary-color, 66, 133, 244), 0.4);
    border-radius: 3px;
    box-shadow:
      0 0 8px rgba(var(--rgb-primary-color, 66, 133, 244), 0.6),
      0 0 12px rgba(var(--rgb-primary-color, 66, 133, 244), 0.3);
  }

  /* Shadow trail that follows icon position */
  :host([slider='shadow-trail'])::after {
    content: '';
    position: absolute;
    top: var(--slider-position, 50%);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 40px;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.15) 0%,
      transparent 70%
    );
    transition: top 0.1s ease;
    pointer-events: none;
  }

  /* Outlined track */
  :host([slider='outlined'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
  }

  .icon-container {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
    transition: opacity 0.2s ease;
    z-index: 1;
  }

  .icon-container.dragging {
    cursor: grabbing;
    opacity: 0.8;
    transition: none;
  }
`));


let $21a9ea85b7e2278b$var$_ = (t)=>t, $21a9ea85b7e2278b$var$t;

class $21a9ea85b7e2278b$export$ec4599f0917a20c8 extends (0, $4aaac1c384d75a93$export$19efda5681568302)((0, $1c65a264a7b7a28b$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $9b2e353c70f86bcb$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        var _this_config, _states_;
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'entity-slider', 'set hass');
        // Update slider style from config
        this.sliderStyle = ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.slider_style) || 'minimalist';
        const states = (0, $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20)(hass, this.config);
        const firstEntity = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, states[0]), {
            config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, (_states_ = states[0]) === null || _states_ === void 0 ? void 0 : _states_.config), {
                tap_action: {
                    action: 'none'
                },
                hold_action: {
                    action: 'none'
                },
                double_tap_action: {
                    action: 'none'
                }
            })
        });
        // Update entity only if it's changed
        if (!$ee3d06fe83a6a770$exports(firstEntity, this._entity)) {
            var _firstEntity_state_attributes, _firstEntity_state;
            this._entity = firstEntity;
            // Update position based on brightness attribute
            const brightness = firstEntity === null || firstEntity === void 0 ? void 0 : (_firstEntity_state = firstEntity.state) === null || _firstEntity_state === void 0 ? void 0 : (_firstEntity_state_attributes = _firstEntity_state.attributes) === null || _firstEntity_state_attributes === void 0 ? void 0 : _firstEntity_state_attributes.brightness;
            if (brightness !== undefined && brightness !== null) {
                // Convert brightness (0-255) to position (100-0%)
                // Higher brightness = higher position (lower percentage, towards top)
                const brightnessNum = Number(brightness);
                this._yPosition = 100 - brightnessNum / 255 * 100;
            } else this._yPosition = 100;
        }
        this._hass = hass;
    }
    render() {
        var _this_config_styles;
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'entity-slider', 'render');
        if (!this._hass || !this._entity) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const stateIcon = (0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, this._entity, this.config);
        // Set CSS custom property for slider position (used by filled and shadow-trail styles)
        this.style.setProperty('--slider-position', `${this._yPosition}%`);
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($21a9ea85b7e2278b$var$t || ($21a9ea85b7e2278b$var$t = $21a9ea85b7e2278b$var$_`
      ${0}
      <div
        class="icon-container ${0}"
        style="top: ${0}%"
        @mousedown=${0}
        @touchstart=${0}
      >
        ${0}
      </div>
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.entities), this._isDragging ? 'dragging' : '', this._yPosition, this._handleDragStart, this._handleTouchStart, stateIcon);
    }
    constructor(...args){
        super(...args), /**
   * Slider style - reflected to DOM as data-slider-style attribute
   */ this.sliderStyle = 'minimalist', /**
   * Whether the icon is currently being dragged
   */ this._isDragging = false, /**
   * Vertical position of the icon (0-100, percentage from top)
   * Default: 50 (centered)
   */ this._yPosition = 100, /**
   * Store initial drag state
   */ this._dragStartY = 0, this._dragStartPosition = 0, /**
   * Handle drag start (mouse)
   */ this._handleDragStart = (e)=>{
            this._isDragging = true;
            this._dragStartY = e.clientY;
            this._dragStartPosition = this._yPosition;
            document.addEventListener('mousemove', this._handleDragMove);
            document.addEventListener('mouseup', this._handleDragEnd);
        }, /**
   * Handle drag start (touch)
   */ this._handleTouchStart = (e)=>{
            if (!e.touches[0]) return;
            this._isDragging = true;
            this._dragStartY = e.touches[0].clientY;
            this._dragStartPosition = this._yPosition;
            document.addEventListener('touchmove', this._handleTouchMove);
            document.addEventListener('touchend', this._handleTouchEnd);
        }, /**
   * Handle drag move (mouse)
   */ this._handleDragMove = (e)=>{
            if (!this._isDragging) return;
            const containerHeight = this.offsetHeight;
            if (!containerHeight) return;
            const deltaY = e.clientY - this._dragStartY;
            const deltaPercent = deltaY / containerHeight * 100;
            // Update position with constraints (0-100%)
            this._yPosition = Math.max(0, Math.min(100, this._dragStartPosition + deltaPercent));
        }, /**
   * Handle drag move (touch)
   */ this._handleTouchMove = (e)=>{
            if (!this._isDragging || !e.touches[0]) return;
            const containerHeight = this.offsetHeight;
            if (!containerHeight) return;
            const deltaY = e.touches[0].clientY - this._dragStartY;
            const deltaPercent = deltaY / containerHeight * 100;
            // Update position with constraints (0-100%)
            this._yPosition = Math.max(0, Math.min(100, this._dragStartPosition + deltaPercent));
        }, /**
   * Handle drag end (mouse)
   */ this._handleDragEnd = ()=>{
            var _this__entity_state, _this__entity;
            this._isDragging = false;
            document.removeEventListener('mousemove', this._handleDragMove);
            document.removeEventListener('mouseup', this._handleDragEnd);
            // Update entity brightness: position (0-100%) to brightness (255-0)
            (0, $d3a1c41917263588$export$bfd42fd87279097a)(this._hass, (_this__entity = this._entity) === null || _this__entity === void 0 ? void 0 : (_this__entity_state = _this__entity.state) === null || _this__entity_state === void 0 ? void 0 : _this__entity_state.entity_id, Math.round((100 - this._yPosition) * 2.55));
        }, /**
   * Handle drag end (touch)
   */ this._handleTouchEnd = ()=>{
            var _this__entity_state, _this__entity;
            this._isDragging = false;
            document.removeEventListener('touchmove', this._handleTouchMove);
            document.removeEventListener('touchend', this._handleTouchEnd);
            // Update entity brightness: position (0-100%) to brightness (255-0)
            (0, $d3a1c41917263588$export$bfd42fd87279097a)(this._hass, (_this__entity = this._entity) === null || _this__entity === void 0 ? void 0 : (_this__entity_state = _this__entity.state) === null || _this__entity_state === void 0 ? void 0 : _this__entity_state.entity_id, Math.round((100 - this._yPosition) * 2.55));
        };
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Object
    })
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: String,
        reflect: true,
        attribute: 'slider'
    })
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "sliderStyle", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_entity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_isDragging", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_yPosition", void 0);







/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_entity_name.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_device_name.ts
 */ const $1f43699295fc468a$export$7cd00372ca4db95e = (device)=>{
    var _this;
    var _device_name_by_user;
    return (_this = (_device_name_by_user = device.name_by_user) !== null && _device_name_by_user !== void 0 ? _device_name_by_user : device.name) === null || _this === void 0 ? void 0 : _this.trim();
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_state_name.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_object_id.ts
 */ const $d630bcb47e310226$export$1f42443b32ee681a = (entityId)=>entityId.substring(entityId.indexOf('.') + 1);


const $a7ac2479c70bcfb4$export$9a5b24b7a75b993d = (entityId, attributes)=>{
    var _attributes_friendly_name;
    return attributes.friendly_name === undefined ? (0, $d630bcb47e310226$export$1f42443b32ee681a)(entityId).replace(/_/g, ' ') : ((_attributes_friendly_name = attributes.friendly_name) !== null && _attributes_friendly_name !== void 0 ? _attributes_friendly_name : '').toString();
};
const $a7ac2479c70bcfb4$export$9616006ead40a64 = (stateObj)=>$a7ac2479c70bcfb4$export$9a5b24b7a75b993d(stateObj.entity_id, stateObj.attributes);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/strip_prefix_from_entity_name.ts
 */ const $3d00a5da4019d727$var$SUFFIXES = [
    ' ',
    ': ',
    ' - '
];
const $3d00a5da4019d727$export$525f917b212a890 = (entityName, prefix)=>{
    const lowerCasedEntityName = entityName.toLowerCase();
    const lowerCasedPrefix = prefix.toLowerCase();
    for (const suffix of $3d00a5da4019d727$var$SUFFIXES){
        const lowerCasedPrefixWithSuffix = `${lowerCasedPrefix}${suffix}`;
        if (lowerCasedEntityName.startsWith(lowerCasedPrefixWithSuffix)) {
            var _newName_;
            const newName = entityName.substring(lowerCasedPrefixWithSuffix.length);
            if (newName.length) // If first word already has an upper case letter (e.g. from brand name)
            // leave as-is, otherwise capitalize the first word.
            return $3d00a5da4019d727$var$hasUpperCase(newName.substr(0, newName.indexOf(' '))) ? newName : ((_newName_ = newName[0]) === null || _newName_ === void 0 ? void 0 : _newName_.toUpperCase()) + newName.slice(1);
        }
    }
    return undefined;
};
const $3d00a5da4019d727$var$hasUpperCase = (str)=>str.toLowerCase() !== str;


const $c79a91fa6515815d$export$9daa015aff969d71 = (stateObj, hass)=>{
    const entry = hass.entities[stateObj.entity_id];
    if (!entry) // Fall back to state name if not in the entity registry (friendly name)
    return (0, $a7ac2479c70bcfb4$export$9616006ead40a64)(stateObj);
    return $c79a91fa6515815d$export$8c1ece05882a2b32(entry, hass);
};
const $c79a91fa6515815d$export$8c1ece05882a2b32 = (entry, hass)=>{
    const name = entry.name || ('original_name' in entry ? entry.original_name : undefined);
    const device = entry.device_id ? hass.devices[entry.device_id] : undefined;
    if (!device) {
        if (name) return name;
        const stateObj = hass.states[entry.entity_id];
        if (stateObj) return (0, $a7ac2479c70bcfb4$export$9616006ead40a64)(stateObj);
        return undefined;
    }
    const deviceName = (0, $1f43699295fc468a$export$7cd00372ca4db95e)(device);
    var _stripPrefixFromEntityName;
    // If the device name is the same as the entity name, consider empty entity name
    // this causes blank labels, not sure why HAS does this
    // if (deviceName === name) {
    //   return undefined;
    // }
    // Remove the device name from the entity name if it starts with it
    if (deviceName && name) return (_stripPrefixFromEntityName = (0, $3d00a5da4019d727$export$525f917b212a890)(name, deviceName)) !== null && _stripPrefixFromEntityName !== void 0 ? _stripPrefixFromEntityName : name;
    // slight fix - not the same in HAS
    return name !== null && name !== void 0 ? name : deviceName;
};



let $c9151a6b7cddd826$var$_ = (t)=>t, $c9151a6b7cddd826$var$t;
const $c9151a6b7cddd826$export$f11d5335cd202cec = (hass, entity, attribute, className = '')=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($c9151a6b7cddd826$var$t || ($c9151a6b7cddd826$var$t = $c9151a6b7cddd826$var$_`<ha-attribute-value
    hide-unit
    .hass=${0}
    .stateObj=${0}
    .attribute=${0}
    class=${0}
  ></ha-attribute-value>`), hass, entity, attribute, className);






const $591072dd54c0e5bc$export$5edf3a158822b217 = (hass, entity, isActive, image, isMainRoomEntity, config)=>{
    var _config_background_options, _config_background, _config_background1;
    const { state: state } = entity;
    const filter = (0, $d41ad01236652ab5$export$65bcdaf7f2807be8)(state);
    const styleData = (0, $07e9954134d2b2af$export$de2836153ec9a0b1)(hass, 'icon', entity, isActive);
    if (!styleData) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    var _config_background_options_includes;
    // Calculate opacity for image backgrounds
    // Apply opacity to icon only if icon_background option is set
    const isIconBackground = (_config_background_options_includes = config === null || config === void 0 ? void 0 : (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('icon_background')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false;
    const userOpacity = (config === null || config === void 0 ? void 0 : (_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : _config_background1.opacity) && isIconBackground && isMainRoomEntity ? config.background.opacity / 100 : undefined;
    const opacity = userOpacity !== null && userOpacity !== void 0 ? userOpacity : image && styleData.active ? '1' : `var(--opacity-icon-fill-${styleData.activeClass})`;
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--icon-color': styleData.cssColor,
        '--icon-opacity': `var(--opacity-icon-${styleData.activeClass})`,
        '--background-color-icon': styleData.cssColor,
        '--background-opacity-icon': opacity,
        '--state-color-icon-theme': styleData.themeOverride,
        '--background-image': image ? `url(${image})` : undefined,
        '--icon-filter': filter
    });
};








let $3221e0e6382742ce$var$_ = (t)=>t, $3221e0e6382742ce$var$t;
const $3221e0e6382742ce$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($3221e0e6382742ce$var$t || ($3221e0e6382742ce$var$t = $3221e0e6382742ce$var$_`
  :host {
    width: var(--user-entity-icon-size, 100%);
  }

  :host([image][icon-bg]) {
    --user-background-image-overlay: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }

  /* Icon container styling */
  .icon {
    cursor: pointer;
    align-self: center;
    position: relative;
    display: flex;
    justify-content: center;
    aspect-ratio: 1 / 1;
  }

  .icon::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color-icon);
    opacity: var(--background-opacity-icon);
    filter: var(--icon-filter, none);
  }

  /* Icon background image styling */
  :host([image][icon-bg]) .icon::before {
    background-image:
      var(--user-background-image-overlay), var(--background-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  /* State icon styling */
  .icon ha-state-icon {
    width: 50%;
    color: var(--icon-color);
    opacity: var(--icon-opacity);
    --mdc-icon-size: 100%;
    filter: var(--icon-filter, none);
  }

  /* Entity label styling */
  .entity-label {
    position: absolute;
    font-size: 0.7em;
    text-align: center;
    overflow: hidden;
    margin-top: 75%;
    display: var(--user-entity-label-display, block);
  }

  .box {
    cursor: pointer;
    align-self: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* Smoke styling - applies when smoke is detected (takes priority over occupancy) */
  :host([room][smoke]) .icon::before {
    animation: var(--smoke-icon-animation);
    background-color: var(--smoke-icon-color, var(--background-color-icon));
    transition: all 0.3s ease;
  }

  /* Occupancy styling - applies when the room is occupied (only if smoke is not detected) */
  :host([room][occupied]:not([smoke])) .icon::before {
    animation: var(--occupancy-icon-animation);
    background-color: var(--occupancy-icon-color, var(--background-color-icon));
    transition: all 0.3s ease;
  }

  /* Animation keyframes for occupancy indicator */
  @keyframes icon-breathe {
    0% {
      transform: scale(1);
      opacity: 0.1;
    }
    100% {
      transform: scale(1.1);
      opacity: 0.4;
    }
  }
`));


let $21884f49b48db948$var$_ = (t)=>t, $21884f49b48db948$var$t, $21884f49b48db948$var$t1, $21884f49b48db948$var$t2, $21884f49b48db948$var$t3;

class $21884f49b48db948$export$8063c4212d705050 extends (0, $4aaac1c384d75a93$export$19efda5681568302)((0, $1c65a264a7b7a28b$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $3221e0e6382742ce$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ set config(config) {
        if (!$ee3d06fe83a6a770$exports(config, this._config)) {
            var _config_background_options, _config_background, _config_features;
            var _config_background_options_includes;
            this.iconBackground = (_config_background_options_includes = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('icon_background')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false;
            var _config_features_includes;
            this._showLabels = (_config_features_includes = (_config_features = config.features) === null || _config_features === void 0 ? void 0 : _config_features.includes('show_entity_labels')) !== null && _config_features_includes !== void 0 ? _config_features_includes : false;
            // Calculate hiding logic for main room entity
            if (this.isMainRoomEntity) {
                var _config_background_options1, _config_background1;
                this._hideRoomIcon = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(config, 'hide_room_icon');
                this._hideIconContent = ((_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : (_config_background_options1 = _config_background1.options) === null || _config_background_options1 === void 0 ? void 0 : _config_background_options1.includes('hide_icon_only')) || false;
            }
            this._config = config;
        }
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        var _this_entity_state_attributes, _this_entity_state, _this_entity;
        this._image = (0, $b02f37b9ae80224f$export$47f3d980c4d9b226)(this.entity, 'use_entity_icon') ? undefined : (_this_entity = this.entity) === null || _this_entity === void 0 ? void 0 : (_this_entity_state = _this_entity.state) === null || _this_entity_state === void 0 ? void 0 : (_this_entity_state_attributes = _this_entity_state.attributes) === null || _this_entity_state_attributes === void 0 ? void 0 : _this_entity_state_attributes.entity_picture;
        if (this._image) {
            (0, $86dc711946e77b66$export$4368d992c4eafac0)(this._config, 'room-state-icon - image', this._image);
            this.image = true;
            this.iconBackground = true;
            this._hideIconContent = true;
        }
        this._hass = hass;
    }
    render() {
        var _this__config_styles, _this__config, _this__config_styles1, _this__config1;
        const { state: state } = this.entity;
        if (!state) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        // If the icon should be completely hidden, return nothing
        if (this._hideRoomIcon) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($21884f49b48db948$var$t || ($21884f49b48db948$var$t = $21884f49b48db948$var$_`<div
        class="box"
        @action=${0}
        .actionHandler=${0}
      ></div>`), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, this.entity), (0, $b96673d7637fba33$export$8a44987212de21b)(this.entity));
        const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(this.entity);
        const iconStyle = (0, $591072dd54c0e5bc$export$5edf3a158822b217)(this._hass, this.entity, this.isActive, this._image, this.isMainRoomEntity, this._config);
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this._config, 'room-state-icon - iconStyle', iconStyle);
        const iconStyles = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, (_this__config = this._config) === null || _this__config === void 0 ? void 0 : (_this__config_styles = _this__config.styles) === null || _this__config_styles === void 0 ? void 0 : _this__config_styles.entity_icon, this.isMainRoomEntity ? (_this__config1 = this._config) === null || _this__config1 === void 0 ? void 0 : (_this__config_styles1 = _this__config1.styles) === null || _this__config_styles1 === void 0 ? void 0 : _this__config_styles1.room_entity_icon : undefined, this.entity.config.styles, thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.styles);
        // Get label (priority: state/threshold label > config label > attribute value > entity name)
        let label;
        if (this._showLabels && !this._hideIconContent) {
            // First priority: label from state/threshold result
            const thresholdLabel = (0, $3eeea5b8a350985f$export$9d7fd66a8622e6b5)(this.entity, thresholdResult);
            if (thresholdLabel) label = thresholdLabel;
            else if (this.entity.config.label) // Second priority: configured label
            label = this.entity.config.label;
            else if (this.entity.config.attribute) // Third priority: attribute value if attribute is configured
            label = (0, $c9151a6b7cddd826$export$f11d5335cd202cec)(this._hass, state, this.entity.config.attribute);
            else // Fallback: entity name
            label = (0, $c79a91fa6515815d$export$9daa015aff969d71)(state, this._hass);
        }
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($21884f49b48db948$var$t3 || ($21884f49b48db948$var$t3 = $21884f49b48db948$var$_`
      ${0}
      <div
        class="icon"
        style=${0}
        @action=${0}
        .actionHandler=${0}
      >
        ${0}
        ${0}
      </div>
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)(iconStyles), iconStyle, (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, this.entity), (0, $b96673d7637fba33$export$8a44987212de21b)(this.entity), this._hideIconContent ? (0, $8f2793d8325bb031$export$45b790e32b2810ee) : (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($21884f49b48db948$var$t1 || ($21884f49b48db948$var$t1 = $21884f49b48db948$var$_`<ha-state-icon
              .hass=${0}
              .stateObj=${0}
              .icon=${0}
            ></ha-state-icon>`), this._hass, state, (thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.icon) || this.entity.config.icon), label ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($21884f49b48db948$var$t2 || ($21884f49b48db948$var$t2 = $21884f49b48db948$var$_`<div class="entity-label">${0}</div>`), label) : (0, $8f2793d8325bb031$export$45b790e32b2810ee));
    }
    constructor(...args){
        super(...args), /**
   * Whether this is the main room entity (for applying room-specific hiding logic)
   */ this.isMainRoomEntity = false;
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_showLabels", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_hideRoomIcon", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_hideIconContent", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Object,
        hasChanged: (newVal, oldVal)=>{
            return !$ee3d06fe83a6a770$exports(newVal, oldVal);
        }
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "entity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'room'
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "isMainRoomEntity", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "image", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'icon-bg'
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "iconBackground", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "isActive", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "occupied", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "smoke", void 0);







var $30f636dbed1da0d8$exports = {};
'use strict';

const $30f636dbed1da0d8$var$memoizeOne = (fn, isEqual = $ee3d06fe83a6a770$exports, { cachePromiseRejection: cachePromiseRejection = false } = {})=>{
    if (!fn) throw new TypeError('You have to provide a `fn` function.');
    let calledOnce = false;
    let oldArgs;
    let lastResult;
    return async (...newArgs)=>{
        if (calledOnce && isEqual(newArgs, oldArgs)) return lastResult;
        lastResult = fn(...newArgs);
        if (!cachePromiseRejection && lastResult.catch) lastResult.catch(()=>calledOnce = false);
        calledOnce = true;
        oldArgs = newArgs;
        return lastResult;
    };
};
$30f636dbed1da0d8$exports = $30f636dbed1da0d8$var$memoizeOne;


const $bd80f520e20b7898$export$306d3b376c79075a = (0, (/*@__PURE__*/$parcel$interopDefault($30f636dbed1da0d8$exports)))((hass)=>hass.callWS({
        type: 'frontend/get_icons',
        category: 'entity_component'
    }), ()=>true);


/**
 * Formats a number with appropriate decimal places
 */ const $23d9b52a9a7ecac4$var$formatNumber = (value, maxDecimals = 1)=>{
    return value.toFixed(maxDecimals).replace(/\.?0+$/, '');
};
/**
 * Adds appropriate spacing before unit if needed
 */ const $23d9b52a9a7ecac4$var$blankBeforeUnit = (unit)=>{
    // Units that don't need a space (like % or °)
    const noSpaceUnits = [
        '%',
        "\xb0C",
        "\xb0F"
    ];
    return noSpaceUnits.some((u)=>unit.includes(u)) ? '' : ' ';
};
const $23d9b52a9a7ecac4$export$6b5316c1eb8ef7e7 = (averagedSensor)=>`${$23d9b52a9a7ecac4$var$formatNumber(averagedSensor.average)}${$23d9b52a9a7ecac4$var$blankBeforeUnit(averagedSensor.uom)}${averagedSensor.uom}`;


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/icon.ts
 */ const $a6e6dfe1c75e2ac8$export$733ca6fe4b07869c = {
    air_quality: 'mdi:air-filter',
    alert: 'mdi:alert',
    automation: 'mdi:robot',
    calendar: 'mdi:calendar',
    climate: 'mdi:thermostat',
    configurator: 'mdi:cog',
    conversation: 'mdi:forum-outline',
    counter: 'mdi:counter',
    date: 'mdi:calendar',
    datetime: 'mdi:calendar-clock',
    demo: 'mdi:home-assistant',
    device_tracker: 'mdi:account',
    google_assistant: 'mdi:google-assistant',
    group: 'mdi:google-circles-communities',
    homeassistant: 'mdi:home-assistant',
    homekit: 'mdi:home-automation',
    image_processing: 'mdi:image-filter-frames',
    image: 'mdi:image',
    input_boolean: 'mdi:toggle-switch',
    input_button: 'mdi:button-pointer',
    input_datetime: 'mdi:calendar-clock',
    input_number: 'mdi:ray-vertex',
    input_select: 'mdi:format-list-bulleted',
    input_text: 'mdi:form-textbox',
    lawn_mower: 'mdi:robot-mower',
    light: 'mdi:lightbulb',
    notify: 'mdi:comment-alert',
    number: 'mdi:ray-vertex',
    persistent_notification: 'mdi:bell',
    person: 'mdi:account',
    plant: 'mdi:flower',
    proximity: 'mdi:apple-safari',
    remote: 'mdi:remote',
    scene: 'mdi:palette',
    schedule: 'mdi:calendar-clock',
    script: 'mdi:script-text',
    select: 'mdi:format-list-bulleted',
    sensor: 'mdi:eye',
    simple_alarm: 'mdi:bell',
    siren: 'mdi:bullhorn',
    stt: 'mdi:microphone-message',
    sun: 'mdi:white-balance-sunny',
    text: 'mdi:form-textbox',
    time: 'mdi:clock',
    timer: 'mdi:timer-outline',
    todo: 'mdi:clipboard-list',
    tts: 'mdi:speaker-message',
    vacuum: 'mdi:robot-vacuum',
    wake_word: 'mdi:chat-sleep',
    weather: 'mdi:weather-partly-cloudy',
    zone: 'mdi:map-marker-radius'
};
















/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $01e5acdf5646665e$var$s = (i, t)=>{
    var _i__$AO;
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)(_i__$AO = i._$AO) === null || _i__$AO === void 0 ? void 0 : _i__$AO.call(i, t, !1), $01e5acdf5646665e$var$s(i, t);
    return !0;
}, $01e5acdf5646665e$var$o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === (e === null || e === void 0 ? void 0 : e.size));
}, $01e5acdf5646665e$var$r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), $01e5acdf5646665e$var$c(t);
    }
};
function $01e5acdf5646665e$var$h(i) {
    void 0 !== this._$AN ? ($01e5acdf5646665e$var$o(this), this._$AM = i, $01e5acdf5646665e$var$r(this)) : this._$AM = i;
}
function $01e5acdf5646665e$var$n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)$01e5acdf5646665e$var$s(r[i], !1), $01e5acdf5646665e$var$o(r[i]);
            else null != r && ($01e5acdf5646665e$var$s(r, !1), $01e5acdf5646665e$var$o(r));
        } else $01e5acdf5646665e$var$s(this, i);
    }
}
const $01e5acdf5646665e$var$c = (i)=>{
    var _i, _i1;
    var __$AP, __$AQ;
    i.type == (0, $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa).CHILD && ((__$AP = (_i = i)._$AP) !== null && __$AP !== void 0 ? __$AP : _i._$AP = $01e5acdf5646665e$var$n, (__$AQ = (_i1 = i)._$AQ) !== null && __$AQ !== void 0 ? __$AQ : _i1._$AQ = $01e5acdf5646665e$var$h);
};
class $01e5acdf5646665e$export$7d025501802325e extends (0, $f8f448f4cc7b38fe$export$befdefbdce210f91) {
    _$AT(i, t, e) {
        super._$AT(i, t, e), $01e5acdf5646665e$var$r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        var _this_reconnected, _this, _this_disconnected, _this1;
        i !== this.isConnected && (this.isConnected = i, i ? (_this_reconnected = (_this = this).reconnected) === null || _this_reconnected === void 0 ? void 0 : _this_reconnected.call(_this) : (_this_disconnected = (_this1 = this).disconnected) === null || _this_disconnected === void 0 ? void 0 : _this_disconnected.call(_this1)), t && ($01e5acdf5646665e$var$s(this, i), $01e5acdf5646665e$var$o(this));
    }
    setValue(t) {
        if ((0, $ff55a5f0dbea74c9$export$7f431ad0fff82fd9)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
}


/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7a8c63ab0b6f1045$export$74673a32c6041f3e = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class $7a8c63ab0b6f1045$export$71341b9b69479007 {
    disconnect() {
        this.G = void 0;
    }
    reconnect(t) {
        this.G = t;
    }
    deref() {
        return this.G;
    }
    constructor(t){
        this.G = t;
    }
}
class $7a8c63ab0b6f1045$export$193ea5a420bb5c41 {
    get() {
        return this.Y;
    }
    pause() {
        var _this_Y;
        (_this_Y = this.Y) !== null && _this_Y !== void 0 ? _this_Y : this.Y = new Promise((t)=>this.Z = t);
    }
    resume() {
        var _this_Z, _this;
        (_this_Z = (_this = this).Z) === null || _this_Z === void 0 ? void 0 : _this_Z.call(_this), this.Y = this.Z = void 0;
    }
    constructor(){
        this.Y = void 0, this.Z = void 0;
    }
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7b5ce03f476dfece$var$n = (t)=>!(0, $ff55a5f0dbea74c9$export$c3825b437cbdea5c)(t) && "function" == typeof t.then, $7b5ce03f476dfece$var$h = 1073741823;
class $7b5ce03f476dfece$export$51c6edf8ee19b71a extends (0, $01e5acdf5646665e$export$7d025501802325e) {
    render(...s) {
        var _s_find;
        return (_s_find = s.find((t)=>!$7b5ce03f476dfece$var$n(t))) !== null && _s_find !== void 0 ? _s_find : (0, $8f2793d8325bb031$export$9c068ae9cc5db4e8);
    }
    update(s, i) {
        const e = this._$Cbt;
        let r = e.length;
        this._$Cbt = i;
        const o = this._$CK, c = this._$CX;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$Cwt); t++){
            const s = i[t];
            if (!$7b5ce03f476dfece$var$n(s)) return this._$Cwt = t, s;
            t < r && s === e[t] || (this._$Cwt = $7b5ce03f476dfece$var$h, r = 0, Promise.resolve(s).then(async (t)=>{
                for(; c.get();)await c.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const e = i._$Cbt.indexOf(s);
                    e > -1 && e < i._$Cwt && (i._$Cwt = e, i.setValue(t));
                }
            }));
        }
        return 0, $8f2793d8325bb031$export$9c068ae9cc5db4e8;
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
    constructor(){
        super(...arguments), this._$Cwt = $7b5ce03f476dfece$var$h, this._$Cbt = [], this._$CK = new (0, $7a8c63ab0b6f1045$export$71341b9b69479007)(this), this._$CX = new (0, $7a8c63ab0b6f1045$export$193ea5a420bb5c41);
    }
}
const $7b5ce03f476dfece$export$a40009bd2c363351 = (0, $f8f448f4cc7b38fe$export$99b43ad1ed32e735)($7b5ce03f476dfece$export$51c6edf8ee19b71a);





let $a2c19dc37818e84b$var$_ = (t)=>t, $a2c19dc37818e84b$var$t;
const $a2c19dc37818e84b$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($a2c19dc37818e84b$var$t || ($a2c19dc37818e84b$var$t = $a2c19dc37818e84b$var$_`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    opacity: var(--text-opacity-theme, 0.4);
    margin-left: -2%;
    margin-top: 1%;
    position: relative;
    z-index: 2; /* Ensure sensor collection appears above room entity */
    width: fit-content; /* don't cover other elements plz */
  }

  :host([hide-icons]) {
    column-gap: 8px;
    margin-left: 0px;
  }

  :host([layout='stacked']) {
    flex-direction: column;
  }

  :host([layout='bottom']) {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }

  .sensor {
    display: flex;
    align-items: center;
    gap: 4px;
    --mdc-icon-size: var(--user-sensor-icon-size, 20px);
    cursor: pointer;
    position: relative;
    z-index: 1; /* Ensure sensors are above room entity and create stacking context for ::before */
    border-radius: 6px;
    transition:
      transform 150ms ease,
      background-color 150ms ease,
      box-shadow 150ms ease,
      opacity 150ms ease;
  }

  /* Soft background hover using theme icon background color */
  .sensor::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: var(--background-color-icon);
    opacity: 0;
    transform: scale(0.96);
    transition: inherit;
    z-index: -1;
  }

  .sensor:hover {
    transform: translateY(-1px);
  }

  .sensor:hover::before {
    opacity: 0.15;
    transform: scale(1);
  }

  .sensor ha-state-icon,
  .sensor ha-icon {
    color: var(--sensor-icon-color);
    flex-shrink: 0;
    transition:
      transform 150ms ease,
      filter 150ms ease,
      opacity 150ms ease;
  }

  .sensor:hover ha-state-icon,
  .sensor:hover ha-icon {
    transform: scale(1.2);
  }
`));


let $0a8df7eca34388c3$var$_ = (t)=>t, $0a8df7eca34388c3$var$t, $0a8df7eca34388c3$var$t1, $0a8df7eca34388c3$var$t2, $0a8df7eca34388c3$var$t3, $0a8df7eca34388c3$var$t4, $0a8df7eca34388c3$var$t5, $0a8df7eca34388c3$var$t6, $0a8df7eca34388c3$var$t7;
class $0a8df7eca34388c3$export$265e5e10b1eff6c6 extends (0, $4aaac1c384d75a93$export$19efda5681568302)((0, $1c65a264a7b7a28b$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $a2c19dc37818e84b$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'set hass');
        this._hass = hass;
        this.hide = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(this.config, 'hide_sensor_icons');
        this._hideLabels = (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(this.config, 'hide_sensor_labels');
        var _this_config_sensor_layout;
        this.layout = (_this_config_sensor_layout = this.config.sensor_layout) !== null && _this_config_sensor_layout !== void 0 ? _this_config_sensor_layout : 'default';
    }
    render() {
        var _this_config_styles;
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'render');
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'config', this.config);
        (0, $86dc711946e77b66$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'sensors', this.sensors);
        if (!this._hass || (0, $b02f37b9ae80224f$export$805ddaeeece0413e)(this.config, 'hide_climate_label')) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t || ($0a8df7eca34388c3$var$t = $0a8df7eca34388c3$var$_`
      ${0}
      ${0}
      ${0}
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.sensors), this.sensors.averaged.map((sensor)=>this.renderSensor(sensor, true)), this.sensors.individual.map((sensor)=>this.renderSensor(sensor, false)));
    }
    renderSensor(sensor, isAveraged) {
        if (isAveraged) {
            const s = sensor;
            const isMultiple = s.states.length > 1;
            if (isMultiple) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t1 || ($0a8df7eca34388c3$var$t1 = $0a8df7eca34388c3$var$_`
          <div class="sensor">
            ${0}
            ${0}
          </div>
        `), this.renderMultiIcon(s), this._hideLabels ? (0, $8f2793d8325bb031$export$45b790e32b2810ee) : (0, $23d9b52a9a7ecac4$export$6b5316c1eb8ef7e7)(s));
            // Use the first state from averaged sensor
            const state = s.states[0];
            return this.renderSingleSensor(state);
        }
        // Use the sensor directly as EntityState
        return this.renderSingleSensor(sensor);
    }
    renderSingleSensor(state) {
        // Look up sensor config from config.sensors
        const sensorConfig = this.getSensorConfig(state.entity_id);
        // Create EntityInformation with sensor config for state-based styling
        const info = {
            config: {
                entity_id: state.entity_id,
                tap_action: {
                    action: 'more-info'
                },
                label: sensorConfig === null || sensorConfig === void 0 ? void 0 : sensorConfig.label,
                states: sensorConfig === null || sensorConfig === void 0 ? void 0 : sensorConfig.states
            },
            state: state
        };
        // Get state/threshold-based styling result
        const result = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(info);
        // Get label (priority: state/threshold label > config label)
        const label = (0, $3eeea5b8a350985f$export$9d7fd66a8622e6b5)(info, result);
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t2 || ($0a8df7eca34388c3$var$t2 = $0a8df7eca34388c3$var$_`
      <div
        class="sensor"
        style=${0}
        @action=${0}
        .actionHandler=${0}
      >
        ${0}
        ${0}
      </div>
    `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({
            '--sensor-icon-color': result === null || result === void 0 ? void 0 : result.color
        }, result === null || result === void 0 ? void 0 : result.styles)), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, info), (0, $b96673d7637fba33$export$8a44987212de21b)(info), this.renderStateIcon(state, result === null || result === void 0 ? void 0 : result.icon), this.renderSensorLabel(state, label, sensorConfig));
    }
    /**
   * Renders the sensor label with proper fallback logic
   * @param state - The entity state
   * @param label - The configured label (if any)
   * @param sensorConfig - The sensor configuration (if any)
   * @returns The label content, attribute value, state display, or nothing if labels are hidden
   */ renderSensorLabel(state, label, sensorConfig) {
        if (this._hideLabels) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        if (label) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t3 || ($0a8df7eca34388c3$var$t3 = $0a8df7eca34388c3$var$_`${0}`), label);
        // If attribute is specified, display the attribute value instead of state
        if (sensorConfig === null || sensorConfig === void 0 ? void 0 : sensorConfig.attribute) return (0, $c9151a6b7cddd826$export$f11d5335cd202cec)(this._hass, state, sensorConfig.attribute);
        return (0, $a6dfaa78520799c6$export$c18c768bbe3223b7)(this._hass, state);
    }
    /**
   * Gets the sensor configuration for a given entity ID
   * @param entityId - The entity ID to look up
   * @returns The SensorConfig if found, undefined otherwise
   */ getSensorConfig(entityId) {
        if (!this.config.sensors) return undefined;
        const sensor = this.config.sensors.find((s)=>{
            const sensorEntityId = typeof s === 'string' ? s : s.entity_id;
            return sensorEntityId === entityId;
        });
        // Return undefined if not found or if it's a string (no config)
        if (!sensor || typeof sensor === 'string') return undefined;
        return sensor;
    }
    renderMultiIcon(sensor) {
        if (this.hide) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        const iconPromise = (0, $bd80f520e20b7898$export$306d3b376c79075a)(this._hass).then((icons)=>{
            var _icons_resources_sensor_domain_sensor_device_class, _icons_resources_sensor_domain, _icons_resources;
            const icon = (_icons_resources = icons.resources) === null || _icons_resources === void 0 ? void 0 : (_icons_resources_sensor_domain = _icons_resources[sensor.domain]) === null || _icons_resources_sensor_domain === void 0 ? void 0 : (_icons_resources_sensor_domain_sensor_device_class = _icons_resources_sensor_domain[sensor.device_class]) === null || _icons_resources_sensor_domain_sensor_device_class === void 0 ? void 0 : _icons_resources_sensor_domain_sensor_device_class.default;
            if (icon) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t4 || ($0a8df7eca34388c3$var$t4 = $0a8df7eca34388c3$var$_`<ha-icon .icon=${0}></ha-icon>`), icon);
            const fallback = (0, $a6e6dfe1c75e2ac8$export$733ca6fe4b07869c)[sensor.domain];
            return fallback ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t5 || ($0a8df7eca34388c3$var$t5 = $0a8df7eca34388c3$var$_`<ha-icon .icon=${0}></ha-icon>`), fallback) : (0, $8f2793d8325bb031$export$45b790e32b2810ee);
        });
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t6 || ($0a8df7eca34388c3$var$t6 = $0a8df7eca34388c3$var$_`${0}`), (0, $7b5ce03f476dfece$export$a40009bd2c363351)(iconPromise));
    }
    renderStateIcon(state, icon) {
        if (this.hide || !state) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0a8df7eca34388c3$var$t7 || ($0a8df7eca34388c3$var$t7 = $0a8df7eca34388c3$var$_`<ha-state-icon
      .hass=${0}
      .stateObj=${0}
      .icon=${0}
    ></ha-state-icon>`), this._hass, state, icon);
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Object
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Object
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "sensors", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "hide", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $76838bb15bd8102a$export$d541bacb2bda4494)({
        type: String,
        reflect: true
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "layout", void 0);






/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/sensor.ts
 */ let $2c30722c058d3347$var$sensorNumericDeviceClassesCache;
const $2c30722c058d3347$export$932b0589381997d6 = async (hass)=>{
    if ($2c30722c058d3347$var$sensorNumericDeviceClassesCache) return $2c30722c058d3347$var$sensorNumericDeviceClassesCache;
    $2c30722c058d3347$var$sensorNumericDeviceClassesCache = hass.callWS({
        type: 'sensor/numeric_device_classes'
    });
    return $2c30722c058d3347$var$sensorNumericDeviceClassesCache;
};



const $cf084a38eb33c4f3$export$76fcdb2ea14db822 = {
    name: 'interactions',
    label: 'editor.interactions.interactions',
    type: 'expandable',
    flatten: true,
    icon: 'mdi:gesture-tap',
    schema: [
        {
            name: 'navigate',
            label: 'editor.interactions.navigate_path',
            required: false,
            selector: {
                navigation: {}
            }
        }
    ]
};


const $ebeb8808033cc92f$export$5c1d9ab613e2f923 = (hass, area)=>{
    return Object.values(hass.entities).filter((entity)=>{
        var _hass_devices_entity_device_id;
        return entity.area_id === area || entity.device_id && ((_hass_devices_entity_device_id = hass.devices[entity.device_id]) === null || _hass_devices_entity_device_id === void 0 ? void 0 : _hass_devices_entity_device_id.area_id) === area;
    }).map((entity)=>entity.entity_id);
};
const $ebeb8808033cc92f$export$aff8e21126109cb8 = async (hass, area)=>{
    const entities = Object.values(hass.entities).filter((entity)=>{
        var _hass_devices_entity_device_id;
        const entityDomain = (0, $676762a3bf0095a1$export$2044bdc9670769ab)(entity.entity_id);
        return entityDomain === 'sensor' && (entity.area_id === area || entity.device_id && ((_hass_devices_entity_device_id = hass.devices[entity.device_id]) === null || _hass_devices_entity_device_id === void 0 ? void 0 : _hass_devices_entity_device_id.area_id) === area);
    });
    const numericDeviceClasses = await (0, $2c30722c058d3347$export$932b0589381997d6)(hass);
    const classes = entities.map((entity)=>{
        var _hass_states_entity_entity_id;
        var _hass_states_entity_entity_id_attributes_device_class;
        return (_hass_states_entity_entity_id_attributes_device_class = (_hass_states_entity_entity_id = hass.states[entity.entity_id]) === null || _hass_states_entity_entity_id === void 0 ? void 0 : _hass_states_entity_entity_id.attributes.device_class) !== null && _hass_states_entity_entity_id_attributes_device_class !== void 0 ? _hass_states_entity_entity_id_attributes_device_class : '';
    }).filter((c)=>c && numericDeviceClasses.numeric_device_classes.includes(c));
    return [
        ...new Set(classes)
    ];
};
const $ebeb8808033cc92f$var$schemeStyles = (hass, entities)=>{
    return {
        name: 'styles',
        label: 'editor.styles.styles',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:brush-variant',
        schema: [
            {
                name: 'background',
                label: 'editor.background.background',
                type: 'expandable',
                icon: 'mdi:format-paint',
                schema: [
                    {
                        name: 'image',
                        label: 'editor.background.background_image',
                        selector: {
                            media: {
                                image_upload: true
                            }
                        }
                    },
                    {
                        name: 'image_entity',
                        label: 'editor.background.background_image_entity',
                        selector: {
                            entity: {
                                filter: {
                                    domain: [
                                        'image',
                                        'person'
                                    ]
                                }
                            }
                        }
                    },
                    {
                        name: 'opacity',
                        label: 'editor.background.background_opacity',
                        required: false,
                        selector: {
                            number: {
                                mode: 'slider',
                                unit_of_measurement: '%',
                                min: 0,
                                max: 100
                            }
                        }
                    },
                    {
                        name: 'options',
                        label: 'editor.features.options',
                        selector: {
                            select: {
                                multiple: true,
                                mode: 'list',
                                options: [
                                    {
                                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.background.disable_background_image'),
                                        value: 'disable'
                                    },
                                    {
                                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.icon.icon_background'),
                                        value: 'icon_background'
                                    },
                                    {
                                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.icon.hide_icon_only'),
                                        value: 'hide_icon_only'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'styles',
                label: 'editor.styles.css_styles',
                type: 'expandable',
                icon: 'mdi:spray',
                schema: [
                    {
                        name: 'card',
                        label: 'editor.styles.card_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'stats',
                        label: 'editor.styles.stats_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'title',
                        label: 'editor.styles.title_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    }
                ]
            }
        ]
    };
};
const $ebeb8808033cc92f$export$2763e19f10bf2cf8 = (hass)=>{
    return [
        {
            name: 'styles',
            label: 'editor.styles.css_styles',
            type: 'grid',
            column_min_width: '100%',
            schema: [
                {
                    name: 'entities',
                    label: 'editor.styles.entities_container_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                },
                {
                    name: 'entity_icon',
                    label: 'editor.styles.entity_icon_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                },
                {
                    name: 'room_entity_icon',
                    label: 'editor.styles.room_entity_icon_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                }
            ]
        },
        {
            name: 'slider_style',
            label: 'editor.slider.slider_style',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.minimalist'),
                            value: 'minimalist'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.track'),
                            value: 'track'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.line'),
                            value: 'line'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.filled'),
                            value: 'filled'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.gradient'),
                            value: 'gradient'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.dual_rail'),
                            value: 'dual-rail'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.dots'),
                            value: 'dots'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.notched'),
                            value: 'notched'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.grid'),
                            value: 'grid'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.glow'),
                            value: 'glow'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.shadow_trail'),
                            value: 'shadow-trail'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.slider.outlined'),
                            value: 'outlined'
                        }
                    ]
                }
            }
        }
    ];
};
const $ebeb8808033cc92f$export$157fbfc8be11fdc6 = (hass, entities)=>{
    return [
        {
            name: 'lights',
            label: 'editor.background.light_entities',
            required: false,
            selector: {
                entity: {
                    multiple: true,
                    include_entities: entities,
                    filter: {
                        domain: [
                            'light',
                            'switch'
                        ]
                    }
                }
            }
        },
        $ebeb8808033cc92f$export$7f37e4e3829f238c(hass)
    ];
};
const $ebeb8808033cc92f$export$40b696e9a591543c = (hass, sensorClasses, entities)=>{
    return [
        {
            name: 'sensors',
            label: 'editor.sensor.individual_sensor_entities',
            required: false,
            selector: {
                entity: {
                    multiple: true,
                    include_entities: entities
                }
            }
        },
        {
            name: 'sensor_classes',
            label: 'editor.sensor.sensor_classes',
            selector: {
                select: {
                    reorder: true,
                    multiple: true,
                    custom_value: true,
                    options: sensorClasses
                }
            }
        },
        {
            name: 'sensor_layout',
            label: 'editor.layout.sensor_layout',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.default_in_label_area'),
                            value: 'default'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.bottom'),
                            value: 'bottom'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.vertical_stack'),
                            value: 'stacked'
                        }
                    ]
                }
            }
        }
    ];
};
const $ebeb8808033cc92f$export$8709ba19f35e0c23 = (hass, sensorClasses)=>{
    return [
        {
            name: 'sensor_classes',
            label: 'editor.sensor.sensor_classes',
            selector: {
                select: {
                    reorder: true,
                    multiple: true,
                    custom_value: true,
                    options: sensorClasses
                }
            }
        },
        {
            name: 'sensor_layout',
            label: 'editor.layout.sensor_layout',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.default_in_label_area'),
                            value: 'default'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.bottom'),
                            value: 'bottom'
                        },
                        {
                            label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.layout.vertical_stack'),
                            value: 'stacked'
                        }
                    ]
                }
            }
        },
        {
            name: 'styles',
            label: 'editor.styles.css_styles',
            type: 'grid',
            column_min_width: '100%',
            schema: [
                {
                    name: 'sensors',
                    label: 'editor.styles.sensor_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                }
            ]
        }
    ];
};
const $ebeb8808033cc92f$export$88e662a4d20309d2 = (hass, entities)=>[
        {
            name: 'area',
            label: 'editor.area.area',
            required: true,
            selector: {
                area: {}
            }
        },
        {
            name: 'entity',
            label: 'editor.area.room_entity',
            required: false,
            selector: {
                entity: {
                    multiple: false,
                    include_entities: entities
                }
            }
        },
        {
            name: 'content',
            label: 'editor.layout.content',
            type: 'expandable',
            flatten: true,
            icon: 'mdi:text-short',
            schema: [
                {
                    name: 'area_name',
                    label: 'editor.area.area_name',
                    required: false,
                    selector: {
                        text: {}
                    }
                }
            ]
        },
        (0, $cf084a38eb33c4f3$export$76fcdb2ea14db822),
        $ebeb8808033cc92f$var$schemeStyles(hass, entities),
        $ebeb8808033cc92f$var$featuresSchema(hass)
    ];
const $ebeb8808033cc92f$export$9b953466d2b38742 = ()=>({
        name: 'area',
        label: 'editor.area.area',
        required: true,
        selector: {
            area: {}
        }
    });
const $ebeb8808033cc92f$export$1b129ae08555a818 = (hass, entities)=>[
        {
            name: 'area_name',
            label: 'editor.area.area_name',
            required: false,
            selector: {
                text: {}
            }
        },
        (0, $cf084a38eb33c4f3$export$76fcdb2ea14db822),
        $ebeb8808033cc92f$var$schemeStyles(hass, entities),
        $ebeb8808033cc92f$var$featuresSchema(hass)
    ];
/**
 * Returns schema for a single alarm configuration (occupancy or smoke)
 */ const $ebeb8808033cc92f$var$getAlarmConfigSchema = (hass, entities, alarmType)=>{
    const isSmoke = alarmType === 'smoke';
    return {
        name: alarmType,
        label: isSmoke ? 'editor.alarm.smoke_detection' : 'editor.alarm.occupancy_detection',
        type: 'expandable',
        icon: isSmoke ? 'mdi:smoke-detector' : 'mdi:motion-sensor',
        schema: [
            {
                name: 'entities',
                label: isSmoke ? 'editor.alarm.smoke_detectors' : 'editor.alarm.motion_occupancy_presence_sensors',
                required: true,
                selector: {
                    entity: {
                        multiple: true,
                        include_entities: entities,
                        filter: isSmoke ? {
                            domain: [
                                'binary_sensor'
                            ],
                            device_class: [
                                'smoke'
                            ]
                        } : {
                            domain: [
                                'binary_sensor'
                            ],
                            device_class: [
                                'motion',
                                'occupancy',
                                'presence'
                            ]
                        }
                    }
                }
            },
            {
                name: 'card_border_color',
                label: isSmoke ? 'editor.card.card_border_color_smoke' : 'editor.card.card_border_color_occupied',
                required: false,
                selector: {
                    ui_color: {}
                }
            },
            {
                name: 'icon_color',
                label: isSmoke ? 'editor.icon.icon_background_color_smoke' : 'editor.icon.icon_background_color_occupied',
                required: false,
                selector: {
                    ui_color: {}
                }
            },
            {
                name: 'options',
                label: 'editor.alarm.alarm_options',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: [
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.card.disable_card_border'),
                                value: 'disabled_card_styles'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.card.disable_card_border_animations'),
                                value: 'disabled_card_styles_animation'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.icon.disable_icon_color'),
                                value: 'disable_icon_styles'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.icon.disable_icon_animations'),
                                value: 'disable_icon_animation'
                            }
                        ]
                    }
                }
            }
        ]
    };
};
const $ebeb8808033cc92f$export$510b3679edaaf6b = (hass, entities)=>{
    return [
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'occupancy'),
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'smoke')
    ];
};
const $ebeb8808033cc92f$var$featuresSchema = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:list-box',
        schema: [
            {
                name: 'features',
                label: 'editor.features.features',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: [
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.stats.hide_area_stats'),
                                value: 'hide_area_stats'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.icon.hide_room_icon'),
                                value: 'hide_room_icon'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.styles.skip_climate_styles'),
                                value: 'skip_climate_styles'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.card.skip_card_background_styles'),
                                value: 'skip_entity_styles'
                            },
                            {
                                label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.full_card_actions'),
                                value: 'full_card_actions'
                            }
                        ]
                    }
                }
            }
        ]
    };
};
const $ebeb8808033cc92f$export$a3234059ca65f80a = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.entity.show_entity_labels'),
                        value: 'show_entity_labels'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.exclude_default_entities'),
                        value: 'exclude_default_entities'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.entity.ignore_entity'),
                        value: 'ignore_entity'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.sticky_entities'),
                        value: 'sticky_entities'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.slider'),
                        value: 'slider'
                    }
                ]
            }
        }
    };
};
const $ebeb8808033cc92f$export$7f37e4e3829f238c = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.background.multi_light_background'),
                        value: 'multi_light_background'
                    }
                ]
            }
        }
    };
};
const $ebeb8808033cc92f$export$e8b24eae43edea4f = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensors'),
                        value: 'hide_climate_label'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensor_icons'),
                        value: 'hide_sensor_icons'
                    },
                    {
                        label: (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensor_labels'),
                        value: 'hide_sensor_labels'
                    }
                ]
            }
        }
    };
};



function $58c2b5810601848d$export$851056343f01ae23(hass, schema) {
    return `${(0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, schema.label)} ${schema.required ? `(${hass.localize('ui.panel.lovelace.editor.card.config.required')})` : `(${hass.localize('ui.panel.lovelace.editor.card.config.optional')})`}`;
}




let $b76dc3474f73e549$var$_ = (t)=>t, $b76dc3474f73e549$var$t;
function $b76dc3474f73e549$export$633a60486668629e(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged, onEntitiesRowChanged: onEntitiesRowChanged, onEditDetailElement: onEditDetailElement } = params;
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($b76dc3474f73e549$var$t || ($b76dc3474f73e549$var$t = $b76dc3474f73e549$var$_`
    <div class="entities-tab">
      <div class="info-header">
        ${0}
      </div>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <div class="info-header">
        <div>${0}</div>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>${0}</li>
          <li>
            ${0}
          </li>
          <li>${0}</li>
          <li>${0}</li>
        </ul>
      </div>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.entities.entities_info'), hass, config.entities, entities, hass.localize('ui.panel.lovelace.editor.card.generic.entities') || 'Entities', onEntitiesRowChanged, onEditDetailElement, hass, config, (0, $ebeb8808033cc92f$export$2763e19f10bf2cf8)(hass), (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged, (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.features_info'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.show_entity_labels_desc'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.exclude_default_entities_desc'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.ignore_entity_desc'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.features.sticky_entities_desc'), hass, config, [
        (0, $ebeb8808033cc92f$export$a3234059ca65f80a)(hass)
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged);
}






let $f2a06477c32045b7$var$_ = (t)=>t, $f2a06477c32045b7$var$t, $f2a06477c32045b7$var$t1;
function $f2a06477c32045b7$export$eb43fb94789f71b0(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged } = params;
    const schema = (0, $ebeb8808033cc92f$export$157fbfc8be11fdc6)(hass, entities);
    const infoText = 'editor.background.multi_light_background_info';
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($f2a06477c32045b7$var$t1 || ($f2a06477c32045b7$var$t1 = $f2a06477c32045b7$var$_`
    ${0}
    <ha-form
      .hass=${0}
      .data=${0}
      .schema=${0}
      .computeLabel=${0}
      @value-changed=${0}
    ></ha-form>
  `), infoText ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($f2a06477c32045b7$var$t || ($f2a06477c32045b7$var$t = $f2a06477c32045b7$var$_` <div class="info-header">${0}</div> `), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, infoText)) : (0, $8f2793d8325bb031$export$45b790e32b2810ee), hass, config, schema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged);
}





let $2753b9fff4eabaa1$var$_ = (t)=>t, $2753b9fff4eabaa1$var$t;
function $2753b9fff4eabaa1$export$3aced84aff4edb7f(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged, onEntityRowChanged: onEntityRowChanged, onEditDetailElement: onEditDetailElement } = params;
    const areaSchema = (0, $ebeb8808033cc92f$export$9b953466d2b38742)();
    const restSchema = (0, $ebeb8808033cc92f$export$1b129ae08555a818)(hass, entities);
    // Convert single entity to array for row-editor
    const entityArray = config.entity ? [
        config.entity
    ] : [];
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($2753b9fff4eabaa1$var$t || ($2753b9fff4eabaa1$var$t = $2753b9fff4eabaa1$var$_`
    <div class="entities-tab">
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        .single=${0}
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), hass, config, [
        areaSchema
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged, hass, entityArray, entities, true, hass.localize('editor.area.room_entity') || 'Room Entity', onEntityRowChanged, onEditDetailElement, hass, config, restSchema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged);
}








let $733e085d0161322d$var$_ = (t)=>t, $733e085d0161322d$var$t, $733e085d0161322d$var$t1;
function $733e085d0161322d$export$71d9f56309acfb74(params) {
    var _config_thresholds, _config_thresholds1, _config_thresholds2;
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged } = params;
    const schema = (0, $ebeb8808033cc92f$export$510b3679edaaf6b)(hass, entities);
    const infoText = 'editor.alarm.alarm_info';
    const handleTemperatureThresholdsChanged = (ev)=>{
        var _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2;
        const thresholds = ev.detail.value;
        const newConfig = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            thresholds: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config.thresholds), {
                temperature: thresholds.length > 0 ? thresholds : undefined
            })
        });
        // Remove thresholds object if both temperature and humidity are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    const handleHumidityThresholdsChanged = (ev)=>{
        var _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2;
        const thresholds = ev.detail.value;
        const newConfig = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            thresholds: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config.thresholds), {
                humidity: thresholds.length > 0 ? thresholds : undefined
            })
        });
        // Remove thresholds object if both temperature and humidity are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    const handleMoldThresholdChanged = (ev)=>{
        var _ev_detail_value, _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2, _newConfig_thresholds3;
        const moldValue = (_ev_detail_value = ev.detail.value) === null || _ev_detail_value === void 0 ? void 0 : _ev_detail_value.mold;
        const newConfig = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            thresholds: (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config.thresholds, moldValue !== undefined && moldValue !== null ? {
                mold: moldValue
            } : {})
        });
        // Remove thresholds object if all fields are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        else if (!((_newConfig_thresholds3 = newConfig.thresholds) === null || _newConfig_thresholds3 === void 0 ? void 0 : _newConfig_thresholds3.mold)) delete newConfig.thresholds.mold;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($733e085d0161322d$var$t1 || ($733e085d0161322d$var$t1 = $733e085d0161322d$var$_`
    ${0}
    <ha-form
      .hass=${0}
      .data=${0}
      .schema=${0}
      .computeLabel=${0}
      @value-changed=${0}
    ></ha-form>
    <ha-expansion-panel outlined>
      <div slot="header" class="thresholds-header">
        <ha-icon icon="mdi:thermometer-alert"></ha-icon>
        <span class="thresholds-title"
          >${0}</span
        >
      </div>
      <div class="thresholds-section">
        <room-summary-thresholds-row-editor
          .hass=${0}
          .thresholds=${0}
          .thresholdType=${0}
          .availableEntities=${0}
          label=${0}
          @threshold-entries-value-changed=${0}
        ></room-summary-thresholds-row-editor>
        <room-summary-thresholds-row-editor
          .hass=${0}
          .thresholds=${0}
          .thresholdType=${0}
          .availableEntities=${0}
          label=${0}
          @threshold-entries-value-changed=${0}
        ></room-summary-thresholds-row-editor>
        <ha-form
          .hass=${0}
          .data=${0}
          .schema=${0}
          .computeLabel=${0}
          @value-changed=${0}
        ></ha-form>
      </div>
    </ha-expansion-panel>
  `), infoText ? (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($733e085d0161322d$var$t || ($733e085d0161322d$var$t = $733e085d0161322d$var$_` <div class="info-header">${0}</div> `), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, infoText)) : (0, $8f2793d8325bb031$export$45b790e32b2810ee), hass, config, schema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged, (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.threshold.thresholds'), hass, ((_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.temperature) || [], 'temperature', entities, hass.localize('editor.threshold.temperature_thresholds'), handleTemperatureThresholdsChanged, hass, ((_config_thresholds1 = config.thresholds) === null || _config_thresholds1 === void 0 ? void 0 : _config_thresholds1.humidity) || [], 'humidity', entities, hass.localize('editor.threshold.humidity_thresholds'), handleHumidityThresholdsChanged, hass, {
        mold: (_config_thresholds2 = config.thresholds) === null || _config_thresholds2 === void 0 ? void 0 : _config_thresholds2.mold
    }, [
        {
            name: 'mold',
            label: 'editor.threshold.mold_threshold',
            required: false,
            selector: {
                number: {
                    mode: 'slider',
                    unit_of_measurement: '%',
                    min: 0,
                    max: 100
                }
            }
        }
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), handleMoldThresholdChanged);
}






let $338d9b587813c56d$var$_ = (t)=>t, $338d9b587813c56d$var$t;
function $338d9b587813c56d$export$359e193b1547165(params) {
    const { hass: hass, config: config, entities: entities, sensorClasses: sensorClasses, onValueChanged: onValueChanged, onSensorsRowChanged: onSensorsRowChanged, onEditDetailElement: onEditDetailElement } = params;
    const restSchema = (0, $ebeb8808033cc92f$export$8709ba19f35e0c23)(hass, sensorClasses);
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($338d9b587813c56d$var$t || ($338d9b587813c56d$var$t = $338d9b587813c56d$var$_`
    <div class="entities-tab">
      <div class="info-header">
        ${0}
      </div>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <div class="info-header">
        <div>${0}</div>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>${0}</li>
          <li>${0}</li>
          <li>${0}</li>
        </ul>
      </div>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.sensors_info'), hass, config.sensors, entities, hass.localize('editor.sensor.individual_sensor_entities') || 'Individual sensor entities', onSensorsRowChanged, onEditDetailElement, hass, config, restSchema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged, (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.features_info'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensors_desc'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensor_icons_desc'), (0, $026d47447e611f6a$export$b3bd0bc58e36cd63)(hass, 'editor.sensor.hide_sensor_labels_desc'), hass, config, [
        (0, $ebeb8808033cc92f$export$e8b24eae43edea4f)(hass)
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(hass, schema), onValueChanged);
}






/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $94ecd7aeca8c09b3$export$7d1e3a5e95ceca43 = ()=>new $94ecd7aeca8c09b3$var$h;
class $94ecd7aeca8c09b3$var$h {
}
const $94ecd7aeca8c09b3$var$o = new WeakMap, $94ecd7aeca8c09b3$export$eff4d24c3ff7876e = (0, $f8f448f4cc7b38fe$export$99b43ad1ed32e735)(class extends (0, $01e5acdf5646665e$export$7d025501802325e) {
    render(i) {
        return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    }
    update(i, [s]) {
        var _i_options;
        const e = s !== this.G;
        return e && void 0 !== this.G && this.rt(void 0), (e || this.lt !== this.ct) && (this.G = s, this.ht = (_i_options = i.options) === null || _i_options === void 0 ? void 0 : _i_options.host, this.rt(this.ct = i.element)), $8f2793d8325bb031$export$45b790e32b2810ee;
    }
    rt(t) {
        if (this.isConnected || (t = void 0), "function" == typeof this.G) {
            var _this_ht;
            const i = (_this_ht = this.ht) !== null && _this_ht !== void 0 ? _this_ht : globalThis;
            let s = $94ecd7aeca8c09b3$var$o.get(i);
            void 0 === s && (s = new WeakMap, $94ecd7aeca8c09b3$var$o.set(i, s)), void 0 !== s.get(this.G) && this.G.call(this.ht, void 0), s.set(this.G, t), void 0 !== t && this.G.call(this.ht, t);
        } else this.G.value = t;
    }
    get lt() {
        var _o_get, _this_G;
        var _this_ht;
        return "function" == typeof this.G ? (_o_get = $94ecd7aeca8c09b3$var$o.get((_this_ht = this.ht) !== null && _this_ht !== void 0 ? _this_ht : globalThis)) === null || _o_get === void 0 ? void 0 : _o_get.get(this.G) : (_this_G = this.G) === null || _this_G === void 0 ? void 0 : _this_G.value;
    }
    disconnected() {
        this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
        this.rt(this.ct);
    }
});




let $82f367c6f871e29a$var$_ = (t)=>t, $82f367c6f871e29a$var$t;
function $82f367c6f871e29a$export$c12c36dfee4d12e2(params) {
    const { currentTab: currentTab, showLeftScroll: showLeftScroll, showRightScroll: showRightScroll, tabContainerRef: tabContainerRef, onScroll: onScroll, onTabClick: onTabClick, tabContent: tabContent } = params;
    return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($82f367c6f871e29a$var$t || ($82f367c6f871e29a$var$t = $82f367c6f871e29a$var$_`
    <div class="card-config">
      <div class="tab-bar-wrapper">
        <div
          class="scroll-indicator scroll-indicator-left ${0}"
        >
          <svg class="scroll-arrow" viewBox="0 0 24 24">
            <path
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
        </div>
        <div
          class="tab-bar-container"
          ${0}
          @scroll=${0}
        >
          <div class="custom-tab-bar">
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Main
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Entities
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Lights
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Sensors
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Alarm
            </button>
          </div>
        </div>
        <div
          class="scroll-indicator scroll-indicator-right ${0}"
        >
          <svg class="scroll-arrow" viewBox="0 0 24 24">
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </div>
      </div>
      ${0}
    </div>
  `), showLeftScroll ? 'visible' : '', (0, $94ecd7aeca8c09b3$export$eff4d24c3ff7876e)(tabContainerRef), onScroll, currentTab === 0 ? 'active' : '', ()=>onTabClick(0), currentTab === 1 ? 'active' : '', ()=>onTabClick(1), currentTab === 2 ? 'active' : '', ()=>onTabClick(2), currentTab === 3 ? 'active' : '', ()=>onTabClick(3), currentTab === 4 ? 'active' : '', ()=>onTabClick(4), showRightScroll ? 'visible' : '', tabContent);
}



/**
 * Utility functions for cleaning up configuration objects
 */ /**
 * Removes empty arrays from a configuration object
 * @param config - The configuration object to clean
 * @param key - The key to check for empty arrays
 */ function $2294891ef4a556a4$export$cad94c565c931d44(config, key) {
    const arr = config[key];
    if (Array.isArray(arr) && !arr.length) delete config[key];
}
function $2294891ef4a556a4$export$4e25f33241712942(config, key) {
    const obj = config[key];
    if (!obj || typeof obj !== 'object') return;
    for (const k of Object.keys(obj)){
        !obj[k] && delete obj[k];
        $2294891ef4a556a4$export$cad94c565c931d44(obj, k);
    }
    if (!Object.keys(obj).length) delete config[key];
}



function $0bc175ba06f09633$export$57ed763a527776f2(element, config) {
    if (!config) return;
    // Clean default values
    if (config.sensor_layout === 'default') delete config.sensor_layout;
    // Clean up undefined entity field
    if (config.entity === undefined) delete config.entity;
    // Clean up empty arrays
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'features');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'entities');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'lights');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'problem_entities');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'sensor_classes');
    // Clean empty strings from entity configs
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'entity');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'entities');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'lights');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'sensors');
    // Clean nested objects
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'background');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'thresholds');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'occupancy');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'smoke');
    // @ts-ignore
    (0, $589840a8bffad2e2$export$43835e9acf248a15)(element, 'config-changed', {
        config: config
    });
}


/**
 * @file Sub-element Change Handler Utilities
 * @description Utility functions for handling sub-element configuration changes in the editor.
 */ 

/**
 * Normalizes a value to either a string or EntityConfig
 */ function $f02a0f7965e0b168$var$normalizeEntityValue(value) {
    if (!value) return undefined;
    return value;
}
function $f02a0f7965e0b168$export$12af996a8c28e0e9(config, value) {
    if (!value) return {
        config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            entity: undefined
        }),
        shouldGoBack: true
    };
    const normalizedValue = $f02a0f7965e0b168$var$normalizeEntityValue(value);
    return {
        config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            entity: normalizedValue
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$89654eeaac3a5675(config, value, index) {
    const newConfigEntities = (config.entities || []).concat();
    if (!value) {
        newConfigEntities.splice(index, 1);
        return {
            config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
                entities: newConfigEntities
            }),
            shouldGoBack: true
        };
    }
    const normalizedValue = $f02a0f7965e0b168$var$normalizeEntityValue(value);
    newConfigEntities[index] = normalizedValue;
    return {
        config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            entities: newConfigEntities
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$a9959ef3c8b3dcec(config, value, index) {
    const newConfigSensors = (config.sensors || []).concat();
    if (!value) {
        newConfigSensors.splice(index, 1);
        return {
            config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
                sensors: newConfigSensors
            }),
            shouldGoBack: true
        };
    }
    // Sensors can be strings or SensorConfig (which extends BaseEntityConfig)
    const normalizedValue = typeof value === 'string' ? value : value;
    newConfigSensors[index] = normalizedValue;
    return {
        config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            sensors: newConfigSensors
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$599599e7109cb02(config, value, index) {
    const newConfigLights = (config.lights || []).concat();
    if (!value) {
        newConfigLights.splice(index, 1);
        return {
            config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
                lights: newConfigLights
            }),
            shouldGoBack: true
        };
    }
    // Lights are always strings - extract entity_id if EntityConfig
    const entityId = typeof value === 'string' ? value : value.entity_id;
    newConfigLights[index] = entityId;
    return {
        config: (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config), {
            lights: newConfigLights
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$879d6ba342fa9eda(config, value, subElementConfig, currentTab) {
    const { field: field, index: index } = subElementConfig;
    // Handle single entity field (from tab 0)
    if (field === 'entities' && currentTab === 0) return $f02a0f7965e0b168$export$12af996a8c28e0e9(config, value);
    // Handle entities array (from tab 1)
    if (field === 'entities' && currentTab === 1) return $f02a0f7965e0b168$export$89654eeaac3a5675(config, value, index);
    // Handle sensors array (from tab 3)
    if (field === 'entities' && currentTab === 3) return $f02a0f7965e0b168$export$a9959ef3c8b3dcec(config, value, index);
    // Handle lights array
    if (field === 'lights') return $f02a0f7965e0b168$export$599599e7109cb02(config, value, index);
    // Default: no change
    return {
        config: config,
        shouldGoBack: false
    };
}


/**
 * Updates scroll indicators based on container scroll position
 * @param container - The scrollable container element
 * @returns Object with showLeftScroll and showRightScroll boolean values
 */ function $e3c4dcc70c15e57e$export$b08e81f6b8074e1b(container) {
    if (!container) return {
        showLeftScroll: false,
        showRightScroll: false
    };
    const { scrollLeft: scrollLeft, scrollWidth: scrollWidth, clientWidth: clientWidth } = container;
    // Show left indicator if scrolled right
    const showLeftScroll = scrollLeft > 5;
    // Show right indicator if there's more content to the right
    const showRightScroll = scrollLeft < scrollWidth - clientWidth - 5;
    return {
        showLeftScroll: showLeftScroll,
        showRightScroll: showRightScroll
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d6d54e2212c78dd0$export$61db76a97f26b7e1 = {
    INITIAL: 0,
    PENDING: 1,
    COMPLETE: 2,
    ERROR: 3
}, $d6d54e2212c78dd0$export$d4c72bab9d6cc13a = Symbol();
class $d6d54e2212c78dd0$export$2dea7024bcdd7731 {
    get taskComplete() {
        return this.t || (1 === this.i ? this.t = new Promise((t, s)=>{
            this.o = t, this.h = s;
        }) : 3 === this.i ? this.t = Promise.reject(this.l) : this.t = Promise.resolve(this.u)), this.t;
    }
    hostUpdate() {
        !0 === this.autoRun && this.S();
    }
    hostUpdated() {
        "afterUpdate" === this.autoRun && this.S();
    }
    T() {
        if (void 0 === this.j) return;
        const t = this.j();
        if (!Array.isArray(t)) throw Error("The args function must return an array");
        return t;
    }
    async S() {
        const t = this.T(), s = this.O;
        this.O = t, t === s || void 0 === t || void 0 !== s && this.m(s, t) || await this.run(t);
    }
    async run(t) {
        var _this_q;
        let s, h;
        t !== null && t !== void 0 ? t : t = this.T(), this.O = t, 1 === this.i ? (_this_q = this.q) === null || _this_q === void 0 ? void 0 : _this_q.abort() : (this.t = void 0, this.o = void 0, this.h = void 0), this.i = 1, "afterUpdate" === this.autoRun ? queueMicrotask(()=>this._.requestUpdate()) : this._.requestUpdate();
        const r = ++this.p;
        this.q = new AbortController;
        let e = !1;
        try {
            s = await this.v(t, {
                signal: this.q.signal
            });
        } catch (t) {
            e = !0, h = t;
        }
        if (this.p === r) {
            if (s === $d6d54e2212c78dd0$export$d4c72bab9d6cc13a) this.i = 0;
            else {
                if (!1 === e) {
                    var _this_o, _this;
                    try {
                        var _this_k, _this1;
                        (_this_k = (_this1 = this).k) === null || _this_k === void 0 ? void 0 : _this_k.call(_this1, s);
                    } catch (e) {}
                    this.i = 2, (_this_o = (_this = this).o) === null || _this_o === void 0 ? void 0 : _this_o.call(_this, s);
                } else {
                    var _this_h, _this2;
                    try {
                        var _this_A, _this3;
                        (_this_A = (_this3 = this).A) === null || _this_A === void 0 ? void 0 : _this_A.call(_this3, h);
                    } catch (e) {}
                    this.i = 3, (_this_h = (_this2 = this).h) === null || _this_h === void 0 ? void 0 : _this_h.call(_this2, h);
                }
                this.u = s, this.l = h;
            }
            this._.requestUpdate();
        }
    }
    abort(t) {
        var _this_q;
        1 === this.i && ((_this_q = this.q) === null || _this_q === void 0 ? void 0 : _this_q.abort(t));
    }
    get value() {
        return this.u;
    }
    get error() {
        return this.l;
    }
    get status() {
        return this.i;
    }
    render(t) {
        switch(this.i){
            case 0:
                var _t_initial;
                return (_t_initial = t.initial) === null || _t_initial === void 0 ? void 0 : _t_initial.call(t);
            case 1:
                var _t_pending;
                return (_t_pending = t.pending) === null || _t_pending === void 0 ? void 0 : _t_pending.call(t);
            case 2:
                var _t_complete;
                return (_t_complete = t.complete) === null || _t_complete === void 0 ? void 0 : _t_complete.call(t, this.value);
            case 3:
                var _t_error;
                return (_t_error = t.error) === null || _t_error === void 0 ? void 0 : _t_error.call(t, this.error);
            default:
                throw Error("Unexpected status: " + this.i);
        }
    }
    constructor(t, s, i){
        var _this_T, _this;
        this.p = 0, this.i = 0, (this._ = t).addController(this);
        const h = "object" == typeof s ? s : {
            task: s,
            args: i
        };
        var _h_argsEqual, _h_autoRun;
        this.v = h.task, this.j = h.args, this.m = (_h_argsEqual = h.argsEqual) !== null && _h_argsEqual !== void 0 ? _h_argsEqual : $d6d54e2212c78dd0$export$41b40a0c6412e2a2, this.k = h.onComplete, this.A = h.onError, this.autoRun = (_h_autoRun = h.autoRun) !== null && _h_autoRun !== void 0 ? _h_autoRun : !0, "initialValue" in h && (this.u = h.initialValue, this.i = 2, this.O = (_this_T = (_this = this).T) === null || _this_T === void 0 ? void 0 : _this_T.call(_this));
    }
}
const $d6d54e2212c78dd0$export$41b40a0c6412e2a2 = (s, i)=>s === i || s.length === i.length && s.every((s, h)=>!(0, $0f6d70ec1686f84d$export$53a6892c50694894)(s, i[h]));








let $500688a290281052$var$_ = (t)=>t, $500688a290281052$var$t;
const $500688a290281052$export$9dd6ff9ea0189349 = (0, $219a89f05d06a34f$export$dbf350e5966cf602)($500688a290281052$var$t || ($500688a290281052$var$t = $500688a290281052$var$_`
  .card-config {
    display: flex;
    flex-direction: column;
  }

  .tab-bar-wrapper {
    position: relative;
    border-bottom: 1px solid var(--divider-color);
  }

  .tab-bar-container {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin; /* Firefox */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }

  /* Scroll hint gradients */
  .scroll-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-indicator.visible {
    opacity: 1;
  }

  .scroll-indicator-left {
    left: 0;
    background: linear-gradient(
      to right,
      var(--card-background-color, var(--primary-background-color)) 0%,
      transparent 100%
    );
  }

  .scroll-indicator-right {
    right: 0;
    background: linear-gradient(
      to left,
      var(--card-background-color, var(--primary-background-color)) 0%,
      transparent 100%
    );
  }

  .scroll-arrow {
    width: 20px;
    height: 20px;
    fill: var(--primary-text-color);
    opacity: 0.6;
    filter: drop-shadow(0 0 2px var(--card-background-color));
  }

  /* Custom scrollbar styling for Chrome, Safari and Opera */
  .tab-bar-container::-webkit-scrollbar {
    height: 4px;
  }

  .tab-bar-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .tab-bar-container::-webkit-scrollbar-thumb {
    background: var(--divider-color);
    border-radius: 2px;
  }

  .tab-bar-container::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-text-color);
  }

  .custom-tab-bar {
    display: flex;
    min-width: min-content;
    gap: 0;
  }

  .custom-tab {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    min-width: 72px;
    padding: 0 16px;
    text-transform: uppercase;
    transition:
      border-color 0.2s ease,
      color 0.2s ease;
    white-space: nowrap;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-tab:hover {
    color: var(--primary-color);
  }

  .custom-tab.active {
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
  }

  .custom-tab:focus {
    outline: none;
  }

  .custom-tab:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  ha-form {
    padding: 16px 0;
  }

  .entities-tab {
    padding: 16px 0;
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  .info-header {
    padding: 16px;
    background-color: var(--info-background-color, rgba(33, 150, 243, 0.1));
    border-left: 4px solid var(--info-color, var(--primary-color));
    border-radius: 4px;
    color: var(--primary-text-color);
    font-size: 0.9em;
    line-height: 1.5;
  }

  ha-expansion-panel {
    margin-top: 10px;
    display: block;
    --expansion-panel-content-padding: 0;
    border-radius: var(--ha-border-radius-md);
    --ha-card-border-radius: var(--ha-border-radius-md);
  }

  .thresholds-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .thresholds-title {
    font-weight: 500;
  }

  .thresholds-section {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`));


let $0f35678ae26800e3$var$_ = (t)=>t, $0f35678ae26800e3$var$t, $0f35678ae26800e3$var$t1, $0f35678ae26800e3$var$t2, $0f35678ae26800e3$var$t3, $0f35678ae26800e3$var$t4, $0f35678ae26800e3$var$t5;
class $0f35678ae26800e3$export$be1ca41262ce011e extends (0, $1c65a264a7b7a28b$export$3f2f9f5909897157) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $500688a290281052$export$9dd6ff9ea0189349;
    }
    /**
   * renders the lit element card
   * @returns The rendered HTML template
   */ render() {
        if (!this.hass || !this._config) return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
        // Show sub-element editor if active
        if (this._subElementEditorConfig) return (0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t || ($0f35678ae26800e3$var$t = $0f35678ae26800e3$var$_`
        <room-summary-sub-element-editor
          .hass=${0}
          .config=${0}
          @go-back=${0}
          @config-changed=${0}
        ></room-summary-sub-element-editor>
      `), this.hass, this._subElementEditorConfig, this._goBack, this._handleSubElementChanged);
        return (0, $82f367c6f871e29a$export$c12c36dfee4d12e2)({
            currentTab: this._currentTab,
            showLeftScroll: this._showLeftScroll,
            showRightScroll: this._showRightScroll,
            tabContainerRef: this._tabContainerRef,
            onScroll: ()=>{
                const indicators = (0, $e3c4dcc70c15e57e$export$b08e81f6b8074e1b)(this._tabContainerRef.value);
                this._showLeftScroll = indicators.showLeftScroll;
                this._showRightScroll = indicators.showRightScroll;
            },
            onTabClick: (index)=>{
                this._currentTab = index;
            },
            tabContent: this._renderTabContent()
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Update scroll indicators after render
        if (changedProperties.has('_config') || changedProperties.has('_currentTab')) setTimeout(()=>{
            const indicators = (0, $e3c4dcc70c15e57e$export$b08e81f6b8074e1b)(this._tabContainerRef.value);
            this._showLeftScroll = indicators.showLeftScroll;
            this._showRightScroll = indicators.showRightScroll;
        }, 100);
    }
    _renderTabContent() {
        // Main tab (tab 0)
        if (this._currentTab === 0) return this._getEntitiesTask.render({
            initial: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            pending: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            complete: (value)=>{
                return (0, $2753b9fff4eabaa1$export$3aced84aff4edb7f)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this),
                    onEntityRowChanged: this._entityRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t1 || ($0f35678ae26800e3$var$t1 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Entities tab (tab 1)
        if (this._currentTab === 1) return this._getEntitiesTask.render({
            initial: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            pending: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            complete: (value)=>{
                return (0, $b76dc3474f73e549$export$633a60486668629e)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this),
                    onEntitiesRowChanged: this._entitiesRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t2 || ($0f35678ae26800e3$var$t2 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Lights tab (tab 2)
        if (this._currentTab === 2) return this._getEntitiesTask.render({
            initial: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            pending: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            complete: (value)=>{
                return (0, $f2a06477c32045b7$export$eb43fb94789f71b0)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this)
                });
            },
            error: (error)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t3 || ($0f35678ae26800e3$var$t3 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Sensors tab (tab 3)
        if (this._currentTab === 3) return this._getEntitiesTask.render({
            initial: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            pending: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            complete: (value)=>{
                return (0, $338d9b587813c56d$export$359e193b1547165)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    sensorClasses: value.sensorClasses,
                    onValueChanged: this._valueChanged.bind(this),
                    onSensorsRowChanged: this._sensorsRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t4 || ($0f35678ae26800e3$var$t4 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Occupancy tab (tab 4)
        if (this._currentTab === 4) return this._getEntitiesTask.render({
            initial: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            pending: ()=>(0, $8f2793d8325bb031$export$45b790e32b2810ee),
            complete: (value)=>{
                return (0, $733e085d0161322d$export$71d9f56309acfb74)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this)
                });
            },
            error: (error)=>(0, $8f2793d8325bb031$export$c0bb0b647f701bb5)($0f35678ae26800e3$var$t5 || ($0f35678ae26800e3$var$t5 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        return 0, $8f2793d8325bb031$export$45b790e32b2810ee;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        this._config = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, config);
    }
    _valueChanged(ev) {
        const config = ev.detail.value;
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, config);
    }
    _entitiesRowChanged(ev) {
        const value = ev.detail.value;
        const field = ev.target.field;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        this._config = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._config), {
            [field]: value
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _sensorsRowChanged(ev) {
        const value = ev.detail.value;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        this._config = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._config), {
            sensors: value
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _entityRowChanged(ev) {
        const value = ev.detail.value;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        // Convert array back to single entity (take first element or undefined)
        const entityValue = value.length > 0 ? value[0] : undefined;
        this._config = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._config), {
            entity: entityValue
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _editDetailElement(ev) {
        const config = (0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, ev.detail.subElementConfig);
        // Set type to 'sensor' if we're on the sensors tab (tab 3)
        if (this._currentTab === 3 && config.field === 'entities') config.type = 'sensor';
        // Set isMainEntity to true if we're on the main tab (tab 0) and field is 'entities'
        // Main entity is edited on tab 0, entities list is edited on tab 1
        config.isMainEntity = this._currentTab === 0 && config.field === 'entities';
        this._subElementEditorConfig = config;
    }
    _handleSubElementChanged(ev) {
        ev.stopPropagation();
        if (!this._config || !this.hass || !this._subElementEditorConfig) return;
        const value = ev.detail.config;
        const result = (0, $f02a0f7965e0b168$export$879d6ba342fa9eda)(this._config, value, this._subElementEditorConfig, this._currentTab);
        this._config = result.config;
        // Update sub-element editor config with the new value
        this._subElementEditorConfig = (0, $0f232f35f40fe68f$export$71511d61b312f219)((0, $f1828b5e61c0cb65$export$71511d61b312f219)({}, this._subElementEditorConfig), {
            elementConfig: value
        });
        if (result.shouldGoBack) this._goBack();
        ev.detail.value = this._config;
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _goBack() {
        this._subElementEditorConfig = undefined;
    }
    constructor(...args){
        super(...args), /**
   * Current active tab index
   */ this._currentTab = 0, /**
   * Scroll state for tab container
   */ this._showLeftScroll = false, this._showRightScroll = false, /**
   * Reference to the tab bar container for scroll detection
   */ this._tabContainerRef = (0, $94ecd7aeca8c09b3$export$7d1e3a5e95ceca43)(), /**
   * Task that fetches the entities asynchronously
   * Uses the Home Assistant web sockets Promise
   */ this._getEntitiesTask = new (0, $d6d54e2212c78dd0$export$2dea7024bcdd7731)(this, {
            task: async ([area])=>{
                if (!area) return {
                    sensorClasses: [],
                    entities: []
                };
                const sensorClasses = await (0, $ebeb8808033cc92f$export$aff8e21126109cb8)(this.hass, area);
                const entities = (0, $ebeb8808033cc92f$export$5c1d9ab613e2f923)(this.hass, area);
                return {
                    sensorClasses: sensorClasses,
                    entities: entities
                };
            },
            args: ()=>{
                var _this__config;
                return [
                    (_this__config = this._config) === null || _this__config === void 0 ? void 0 : _this__config.area
                ];
            }
        });
    }
}
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_config", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_currentTab", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_showLeftScroll", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_showRightScroll", void 0);
(0, $a90010e54f817fa8$export$29e00dfd3077644b)([
    (0, $fffe4bd641112b8c$export$ca000e230c0caa3e)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_subElementEditorConfig", void 0);


var $649c526c16197344$exports = {};
$649c526c16197344$exports = JSON.parse("{\"name\":\"room-summary-card\",\"version\":\"0.57.0\",\"author\":\"Patrick Masters\",\"license\":\"ISC\",\"description\":\"Custom card Home Assistant which can show a summary of room entities.\",\"source\":\"src/index.ts\",\"module\":\"dist/room-summary-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\",\"format\":\"prettier --write .\",\"test\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha\",\"test:coverage\":\"nyc npm run test\",\"test:watch\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha --watch\",\"update\":\"npx npm-check-updates -u && yarn install\"},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@open-wc/testing\":\"^4.0.0\",\"@parcel/transformer-inline-string\":\"^2.16.3\",\"@testing-library/dom\":\"^10.4.1\",\"@trivago/prettier-plugin-sort-imports\":\"^6.0.0\",\"@types/chai\":\"^5.2.3\",\"@types/jsdom\":\"^27.0.0\",\"@types/mocha\":\"^10.0.10\",\"@types/sinon\":\"^21.0.0\",\"chai\":\"^6.2.1\",\"jsdom\":\"^27.2.0\",\"mocha\":\"^11.7.5\",\"nyc\":\"^17.1.0\",\"parcel\":\"^2.16.3\",\"prettier\":\"3.7.4\",\"prettier-plugin-organize-imports\":\"^4.3.0\",\"proxyquire\":\"^2.1.3\",\"sinon\":\"^21.0.0\",\"ts-node\":\"^10.9.2\",\"tsconfig-paths\":\"^4.2.0\",\"typescript\":\"^5.9.3\"},\"dependencies\":{\"@lit/task\":\"^1.0.3\",\"async-memoize-one\":\"^1.1.9\",\"fast-deep-equal\":\"^3.1.3\",\"lit\":\"^3.3.1\",\"memoize-one\":\"^6.0.0\"}}");


// Register the custom element with the browser
customElements.define('room-summary-card', (0, $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9));
customElements.define('room-summary-card-editor', (0, $0f35678ae26800e3$export$be1ca41262ce011e));
customElements.define('sensor-collection', (0, $0a8df7eca34388c3$export$265e5e10b1eff6c6));
customElements.define('entity-collection', (0, $b96a40707b142c90$export$b15c5e7ddecda86e));
customElements.define('entity-slider', (0, $21a9ea85b7e2278b$export$ec4599f0917a20c8));
customElements.define('room-state-icon', (0, $21884f49b48db948$export$8063c4212d705050));
customElements.define('room-summary-entity-detail-editor', (0, $43564874ab3ed043$export$5062b3ea8745e421));
customElements.define('room-summary-entities-row-editor', (0, $8e72cbf99a87388e$export$12e5e4192ee344c7));
customElements.define('room-summary-states-row-editor', (0, $68ce0c44dd114f11$export$806f47322f907427));
customElements.define('room-summary-thresholds-row-editor', (0, $460e8ac2e6479550$export$b79a6ddbd7dc2198));
customElements.define('room-summary-sub-element-editor', (0, $ffd7d578a1e62621$export$ddca213b44fe1587));
// Ensure the customCards array exists on the window object
window.customCards = window.customCards || [];
// Register the card with Home Assistant's custom card registry
window.customCards.push({
    // Unique identifier for the card type
    type: 'room-summary-card',
    // Display name in the UI
    name: 'Room Summary',
    // Card description for the UI
    description: 'A card to summarize the status of a room, including temperature, humidity, and any problem entities.',
    // Show a preview of the card in the UI
    preview: true,
    // URL for the card's documentation
    documentationURL: 'https://github.com/homeassistant-extras/room-summary-card'
});
console.info(`%c\u{1F431} Poat's Tools: room-summary-card - ${(0, $649c526c16197344$exports.version)}`, 'color: #CFC493;');


//# sourceMappingURL=room-summary-card.js.map
