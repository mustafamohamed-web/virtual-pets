<template>
  <div class="grid grid-cols-4 grid-rows-6 gap-4 mx-5">
    <div
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="flex flex-col justify-center bg-slate-600 text-blacks border border-black rounded p-5 mt-5"
      :class="{ 'opacity-50': task.done }"
      :style="{ background: priorityBg(task.priority) }"
    >
      <div class="flex flex-col justify-between">
        <h1 class="font-bold capitalize" :class="{ 'line-through': task.done }">
          {{ task.name }}
        </h1>
        <p :class="{ 'line-through': task.done }">{{ task.description }}</p>
        <p :class="{ 'line-through': task.done }">{{ task.date }}</p>
        <p
          :class="{ 'line-through': task.done }"
          class="rounded text-black font-bold"
        >
          {{ task.priority }}
        </p>
      </div>

      <div class="flex justify-center gap-3">
        <input type="checkbox" v-model="task.done" class="mr-2" />
        <img
          src="../icons8-delete-button.svg"
          @click="taskStore.deleteTask(task.id)"
          class="cursor-pointer"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- <NoTasksModal :tasks="tasks" /> -->
</template>

<script setup>
import { useTaskStore } from "../stores/TasksStore";

const taskStore = useTaskStore();

const props = defineProps({
  filterPriority: Array,
});

const priorityBg = (priority) => {
  if (priority === "Low") {
    return "##FFA500";
  } else if (priority === "Medium") {
    return "#FFD700 ";
  } else {
    return "#6E0B0A";
  }
};
</script>
