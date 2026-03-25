import { useTaskStore } from "../store/useTaskStore";
import type { SingleTask } from "../types/TasksInterface";

interface Props {
  task: SingleTask;
}

export default function TaskCard({ task }: Props) {
  const { setDragTask, clearDragState } = useTaskStore();
  const initials = task.assignee
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      draggable
      onDrag={() => setDragTask(task.id)}
      onDragEnd={clearDragState}
      className="bg-white rounded-lg p-3 shadow-md"
    >
      <h3 className="font-semibold text-sm">{task.title}</h3>

      <div className="flex items-center justify-between mt-2">
        {/* Assignee */}
        <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
          {initials}
        </div>

        {/* Priority */}
        <span className="text-xs px-2 py-1 rounded bg-gray-200">
          {task.priority}
        </span>
      </div>

      {/* Due Date */}
      <div className="text-xs text-gray-500 mt-2">
        {new Date(task.dueDate).toDateString()}
      </div>
    </div>
  );
}
