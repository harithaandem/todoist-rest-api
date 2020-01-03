import Adapter from './rest-adapter';
import queryString from 'query-string';
import stringify from 'fast-safe-stringify';
import { TodoistTask, TodoistTaskOptions } from './types';

export default class TaskAdapter extends Adapter<
  TodoistTask,
  TodoistTaskOptions
> {
  public constructor(token: string) {
    super('task', token);
  }

  /**
   * Returns a JSON-encoded array containing all user active tasks.
   */
  public async findAll(options?: {
    project_id?: number;
    label_id?: number;
    filter?: string;
    lang?: string;
  }): Promise<TodoistTask[]> {
    const query = options ? queryString.stringify(options) : '';
    const { body }: { body: TodoistTask[] } = await this.client.get(
      `${this.type}s?${query}`,
    );

    return body;
  }

  /**
   * Closes a task and returns true if the request succeeded.
   *
   * The command does exactly what official clients do when you close a task. Regular tasks are completed and moved to history, subtasks are checked (marked as done, but not moved to history), recurring tasks are moved forward (due date is updated).
   */
  public async close(id: number): Promise<boolean> {
    const response = await this.client.post(
      `${this.type}s/${id.toString()}/close`,
    );

    if (response.statusCode !== 204)
      throw new Error(
        `The task probably wasn't closed, but no error status code was returned from Todoist\n\n${stringify(
          response,
        )}`,
      );

    return true;
  }

  /**
   * Reopens a task and returns true if the request succeeded.
   *
   * This command reopens a previously closed task. Works both with checked tasks in the user’s workspace and tasks moved to history. The behaviour varies for different types of tasks (the command follows the behaviour of official clients when tasks are uncompleted or extracted from the history).
   *
   * - Regular tasks are extracted from the history and added back to the user workspace as normal unchecked tasks (without their subtasks though).
   * - Completed subtasks of a non-completed task are simply marked as uncompleted.
   * - Subtasks that were moved to history are added back to the workspace as first-level tasks.
   * - Non-completed recurring tasks are ignored.
   */
  public async reopen(id: number): Promise<boolean> {
    const response = await this.client.post(
      `${this.type}s/${id.toString()}/reopen`,
    );

    if (response.statusCode !== 204)
      throw new Error(
        `The task probably wasn't reopened, but no error status code was returned from Todoist\n\n${stringify(
          response,
        )}`,
      );

    return true;
  }
}
