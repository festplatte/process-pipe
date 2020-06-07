import IPipelineStep from "./PipelineStep.ts";
import PipelineExecutor from "./PipelineExecutor.ts";

/**
 * Shortcut function to execute a pipeline.
 * @param steps process steps to execute
 * @param context context for all process steps
 */
export default <T = any>(
  steps: IPipelineStep<T>[],
  context: T,
): Promise<T> => {
  const pipelineExecutor = new PipelineExecutor(steps, context);
  return pipelineExecutor.execute();
};
