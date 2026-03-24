export interface SingleTask {
  id: string;
  title: string;
  startDate: Date;
  dueDate: Date;
  assigneeAvatar: string;
  asignee: string;
  status: "ToDo" | "InProgress" | "InReview" | "Done";
}
