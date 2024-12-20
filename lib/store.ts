import { create } from "domain";

export type Status = "TODO" | "IN_PORGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
};

export type State = {
  tasks: Task[];
};

export type Actions = {
  addTask: (title: string, description?: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
};

export const useTaskStore = create<State & Actions>()((set) => ({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
}));
