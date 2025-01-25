export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'PENDING' | 'COMPLETED' | 'DONE';
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
} 