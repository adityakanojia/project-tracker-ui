import type { SingleTask, TaskStatus } from "../types/TasksInterface";
import TaskCard from "./TaskCard.tsx";
import { useTaskStore } from "../store/useTaskStore.ts";

interface Props {
  title: string;
  tasks: SingleTask[];
}

export default function Column({ title, tasks }: Props) {
  const { updateTaskStatus, clearDragState, dragTaskId } = useTaskStore();
  return (
    <div className="bg-gray-100 rounded-xl p-3 flex flex-col h-full">
      <h2 className="font-bold mb-3 capitalize">
        {title} ({tasks.length})
      </h2>

      <div className="flex flex-col gap-3 overflow-y-auto">
        {tasks.length === 0 ? (
          <div className="text-gray-400 text-sm text-center mt-10">
            No tasks
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
