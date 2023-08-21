import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => state.tasks,
    getTasksByPriority: (state) => (priority) =>
      state.tasks.filter((task) => task.priority === priority),
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
      console.log("task added");
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
  },
});
