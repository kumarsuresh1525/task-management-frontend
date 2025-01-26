export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  DONE = 'done'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
} 