export enum TaskStatus {
  todo = "todo",
  inprogress = "inprogress",
  inreview = "inreview",
  done = "done",
}

export enum Priority {
  critical = "critical",
  high = "high",
  medium = "medium",
  low = "low",
}

export interface SingleTask {
  id: number;
  title: string;
  startDate?: Date;
  dueDate: Date;
  assignee: string;
  priority: Priority;
  status: TaskStatus;
}
