import { useTaskStore } from "../store/useTaskStore";
import Columns from "./Columns";

const statuses = ["todo", "inprogress", "inreview", "done"];

export default function KanbanBoard() {
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-screen border-2 border-gray-300">
      {statuses.map((status) => {
        const filteredTasks = tasks.filter((t) => t.status === status);

        return <Columns key={status} title={status} tasks={filteredTasks} />;
      })}
    </div>
  );
}
