/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/camelcase */
import { TodoistTask, TodoistProject, TodoistLabel } from '../../src/types';
import { TodoistComment } from '../../src/types';

export const FIXTURES: {
  tasks: TodoistTask[];
  projects: TodoistProject[];
  labels: TodoistLabel[];
  comments: TodoistComment[];
} = {
  tasks: [
    {
      id: 1,
      project_id: 1,
      section_id: 1,
      content: 'Get milk',
      completed: false,
      label_ids: [1, 7],
      order: 1,
      priority: 1,
      comment_count: 1,
      url: 'https://todoist.com/showTask?id=1',
    },
    {
      id: 2,
      project_id: 2,
      section_id: 0,
      content: 'Plan a thing',
      completed: false,
      label_ids: [1, 6],
      order: 2,
      priority: 1,
      comment_count: 1,
      url: 'https://todoist.com/showTask?id=2',
    },
    {
      id: 3,
      project_id: 3,
      section_id: 2,
      content: 'Buy the thing',
      completed: false,
      label_ids: [2, 8, 10],
      order: 3,
      priority: 1,
      comment_count: 0,
      url: 'https://todoist.com/showTask?id=3',
    },
    {
      id: 4,
      project_id: 4,
      section_id: 0,
      content: 'Sign up for dance class',
      completed: false,
      label_ids: [3, 6, 9],
      order: 4,
      priority: 1,
      comment_count: 0,
      due: { recurring: false, string: '10 okt.', date: '2018-10-10' },
      url: 'https://todoist.com/showTask?id=4',
    },
    {
      id: 5,
      project_id: 5,
      section_id: 3,
      content: 'Project review',
      completed: false,
      label_ids: [2, 5, 10],
      order: 5,
      priority: 1,
      comment_count: 0,
      due: { recurring: false, string: '9 okt.', date: '2018-10-09' },
      url: 'https://todoist.com/showTask?id=5',
    },
  ],
  projects: [
    { id: 1, name: 'Inbox', order: 0, comment_count: 1 },
    { id: 2, name: 'Next Actions', order: 1, comment_count: 0 },
    { id: 3, name: 'Waiting', order: 2, comment_count: 0 },
    { id: 4, name: 'Someday/Maybe', order: 3, comment_count: 0 },
    { id: 5, name: 'Work', order: 4, comment_count: 0 },
  ],
  labels: [
    { id: 1, name: '15min', order: 1 },
    { id: 2, name: '30min', order: 2 },
    { id: 3, name: '1hour', order: 3 },
    { id: 4, name: '2hours', order: 4 },
    { id: 5, name: 'at_work', order: 5 },
    { id: 6, name: 'at_home', order: 6 },
    { id: 7, name: 'on_road', order: 7 },
    { id: 8, name: 'at_store', order: 8 },
    { id: 9, name: 'waiting_for', order: 9 },
    { id: 10, name: 'next_actions', order: 10 },
  ],
  comments: [
    {
      id: 1,
      task_id: 1,
      posted: '2019-12-13T12:37:24Z',
      content: 'This is a task comment',
    },
    {
      id: 2,
      project_id: 1,
      posted: '2019-12-13T12:37:24Z',
      content: 'This is a project comment',
    },
  ],
};
