"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Executor for a pipeline of process steps.
 * It takes in some process steps to execute on the
 * given context and returns the result context.
 * If one of the process steps fails, all previous
 * steps are reverted (if possible) and an exception
 * is raised.
 */
var PipelineExecutor = /** @class */ (function () {
    function PipelineExecutor(steps, context) {
        this.steps = steps;
        this.context = context;
    }
    /**
     * Executes the pipeline.
     */
    PipelineExecutor.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < this.steps.length)) return [3 /*break*/, 7];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 6]);
                        _a = this;
                        return [4 /*yield*/, this.steps[i].execute(this.context)];
                    case 3:
                        _a.context = _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _b.sent();
                        console.error("pipeline execution did fail:", e_1);
                        return [4 /*yield*/, this._revert(i)];
                    case 5:
                        _b.sent();
                        throw e_1;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, this.context];
                }
            });
        });
    };
    /**
     * Reverts all steps before the failed one.
     * @param index index of the failed step
     */
    PipelineExecutor.prototype._revert = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var i, step, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = index;
                        _a.label = 1;
                    case 1:
                        if (!(i >= 0)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        step = this.steps[i];
                        if (!step.revert) return [3 /*break*/, 4];
                        return [4 /*yield*/, step.revert(this.context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        console.error("failed during reverting:", e_2);
                        return [3 /*break*/, 7];
                    case 6:
                        i--;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return PipelineExecutor;
}());
exports.default = PipelineExecutor;
//# sourceMappingURL=PipelineExecutor.js.map