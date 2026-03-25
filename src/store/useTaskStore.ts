import { create } from "zustand";
import dataGenerator from "../data/dataGenerator";
import type { SingleTask, TaskStatus } from "../types/TasksInterface";

interface TaskState {
  tasks: SingleTask[];
  setTasks: (tasks: SingleTask[]) => void;
  updateTaskStatus: (id: number, status: TaskStatus) => void;
  setView: (view: "kanban" | "list" | "timeline") => void;
  view: "kanban" | "list" | "timeline";
  dragTaskId: number | null;
  setDragTask: (id: number) => void;
  clearDragState: () => void;
}

const initialTasks = dataGenerator();

export const useTaskStore = create<TaskState>((set) => ({
  tasks: initialTasks,
  dragTaskId: null,
  view: "kanban",

  setTasks: (tasks) => set({ tasks }),

  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task,
      ),
    })),

  setView: (view) => set({ view }),

  setDragTask: (id) => set({ dragTaskId: id }),
  clearDragState: () => set({ dragTaskId: null }),
}));
