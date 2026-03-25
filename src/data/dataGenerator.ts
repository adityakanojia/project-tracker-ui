import type { SingleTask } from "../types/TasksInterface";
import { Priority } from "../types/TasksInterface";
import { TaskStatus } from "../types/TasksInterface";

const names: string[] = [
  "Aditya",
  "Piyush",
  "Pushkal",
  "Shreya",
  "Shubh",
  "Shreyas",
];
const status: TaskStatus[] = Object.values(TaskStatus);
const Priorities: Priority[] = Object.values(Priority);
const title: string[] = [
  "Frontend bug fix",
  "Backend bug fix",
  "adding new feature",
  "creating new design",
  "code review",
  "code sprint",
];

function randomGenerator<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPastDate(maxDaysAgo: number): Date {
  const date = new Date();
  const daysAgo = Math.floor(Math.random() * maxDaysAgo);
  date.setDate(date.getDate() - daysAgo);
  return date;
}

function getFutureDate(start: Date, maxDaysAhead: number): Date {
  const date = new Date(start);
  const daysAhead = Math.floor(Math.random() * maxDaysAhead) + 1;
  date.setDate(date.getDate() + daysAhead);
  return date;
}

function getOverdueDate(maxDaysAgo: number): Date {
  const date = new Date();
  const daysAgo = Math.floor(Math.random() * maxDaysAgo) + 1;
  date.setDate(date.getDate() - daysAgo);
  return date;
}

function dataGenerator(): SingleTask[] {
  const Tasks: SingleTask[] = [];
  let id: number = 0;

  for (let i = 0; i < 520; i++) {
    const type = Math.random();
    let startDate: Date | undefined;
    let dueDate: Date;

    if (type < 0.5) {
      startDate = getRandomPastDate(7);
      dueDate = getFutureDate(startDate, 10);
    } else if (type < 0.8) {
      startDate = getRandomPastDate(7);
      dueDate = getOverdueDate(5);
    } else {
      startDate = undefined;
      dueDate = getFutureDate(new Date(), 10);
    }
    Tasks.push({
      id: id++,
      title: randomGenerator(title),
      startDate,
      dueDate,
      assignee: randomGenerator(names),
      priority: randomGenerator(Priorities),
      status: randomGenerator(status),
    });
  }
  return Tasks;
}

const d = dataGenerator();

for (let index = 0; index < d.length; index++) {
  console.log(d[index]);
}
console.log("");
export default dataGenerator;
