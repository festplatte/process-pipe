import IPipelineStep from "./PipelineStep";
/**
 * Executor for a pipeline of process steps.
 * It takes in some process steps to execute on the
 * given context and returns the result context.
 * If one of the process steps fails, all previous
 * steps are reverted (if possible) and an exception
 * is raised.
 */
export default class PipelineExecutor<T> {
    steps: IPipelineStep<T>[];
    context: T;
    constructor(steps: IPipelineStep<T>[], context: T);
    /**
     * Executes the pipeline.
     */
    execute(): Promise<T>;
    /**
     * Reverts all steps before the failed one.
     * @param index index of the failed step
     */
    private _revert;
}
