import IPipelineStep from "./PipelineStep.ts";

/**
 * Executor for a pipeline of process steps.
 * It takes in some process steps to execute on the
 * given context and returns the result context.
 * If one of the process steps fails, all previous
 * steps are reverted (if possible) and an exception
 * is raised.
 */
export default class PipelineExecutor<T> {
  constructor(
    public steps: IPipelineStep<T>[],
    public context: T,
  ) {}

  /**
   * Executes the pipeline.
   */
  async execute(): Promise<T> {
    for (let i = 0; i < this.steps.length; i++) {
      try {
        this.context = await this.steps[i].execute(this.context);
      } catch (e) {
        console.error("pipeline execution did fail:", e);
        await this._revert(i);
        throw e;
      }
    }
    return this.context;
  }

  /**
   * Reverts all steps before the failed one.
   * @param index index of the failed step
   */
  private async _revert(index: number) {
    for (let i = index; i >= 0; i--) {
      try {
        const step = this.steps[i];
        if (step.revert) {
          await step.revert(this.context);
        }
      } catch (e) {
        console.error("failed during reverting:", e);
        break;
      }
    }
  }
}
