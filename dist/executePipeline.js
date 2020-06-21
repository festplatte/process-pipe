"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PipelineExecutor_1 = __importDefault(require("./PipelineExecutor"));
/**
 * Shortcut function to execute a pipeline.
 * @param steps process steps to execute
 * @param context context for all process steps
 */
exports.default = (function (steps, context) {
    var pipelineExecutor = new PipelineExecutor_1.default(steps, context);
    return pipelineExecutor.execute();
});
//# sourceMappingURL=executePipeline.js.map