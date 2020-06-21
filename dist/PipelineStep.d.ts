/**
 * Interface for pipeline steps.
 */
export default interface IPipelineStep<T> {
    execute: (context: T) => Promise<T>;
    revert?: (context: T) => Promise<void>;
}
