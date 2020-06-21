import IPipelineStep from "./PipelineStep";
declare const _default: <T = any>(steps: IPipelineStep<T>[], context: T) => Promise<T>;
/**
 * Shortcut function to execute a pipeline.
 * @param steps process steps to execute
 * @param context context for all process steps
 */
export default _default;
