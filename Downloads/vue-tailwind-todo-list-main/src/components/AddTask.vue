<template>
  <div class="flex flex-col items-center mt-5">
    <div class="flex w-full justify-center gap-4">
      <button
        class="text-white border border-white rounded px-3 py-4 hover:bg-black w-30"
        @click="toggleModal"
        v-if="!isModal"
      >
        Add Todo
      </button>

      <div class="relative inline-block">
        <button
          @click="toggleDropdown"
          class="text-white bg-green-950 border border-white font-medium hover:bg-black rounded text-sm px-5 py-5 text-center inline-flex items-center"
          type="button"
          v-if="!isModal"
        >
          Filter Priority
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          :class="{ hidden: !showDropdown, active: selectedPriority }"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white text-center"
        >
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-black"
                @click="setPriorityFilter('Low')"
                >Low</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-black"
                @click="setPriorityFilter('Medium')"
                >Medium</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-black"
                @click="setPriorityFilter('High')"
                >High</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <form
    class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
    v-if="isModal"
  >
    <h2 class="text-xl font-semibold mb-4 text-green-950">Add a New Task</h2>
    <form>
      <div class="mb-4">
        <label for="taskName" class="block font-medium text-green-950"
          >Task Name</label
        >
        <input
          type="text"
          v-model="newTasks"
          name="taskName"
          class="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-green-950"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block font-medium text-green-950"
          >Description</label
        >
        <textarea
          v-model="description"
          name="description"
          rows="3"
          class="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300text-green-950"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="dueDate" class="block font-medium">Due Date</label>
        <input
          type="date"
          v-model="date"
          name="dueDate"
          class="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-green-950"
        />
      </div>
      <div class="mb-4 flex justify-between">
        <div>
          <h1 class="font-medium">Priority</h1>
        </div>
        <select
          class="cursor-pointer border-2 rounded border-green-950"
          v-model="priority"
          id=""
        >
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        @click="handleSubmit"
        type="submit"
        class="w-full bg-green-950 text-white rounded-md px-4 py-2 hover:bg-green-900"
      >
        Add Task
      </button>
    </form>
  </form>

  <Tasks :filterPriority="filterPriority" />
</template>

<script setup>
import { ref, watch, computed } from "vue";
import Tasks from "./Tasks.vue";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "../stores/TasksStore";

const taskStore = useTaskStore();
const isModal = ref(false);
const selectedPriority = ref("");
const showDropdown = ref(false);
const date = ref("");
const description = ref("");
const priority = ref("");
const newTasks = ref("");

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const toggleModal = () => {
  isModal.value = !isModal.value;
};

const setPriorityFilter = (priority) => {
  selectedPriority.value = priority;
  showDropdown.value = false;
};

const filterPriority = computed(() => {
  if (selectedPriority.value === "") {
    return taskStore.getTasks; // Use the getTasks getter
  } else {
    return taskStore.getTasksByPriority(selectedPriority.value); // Use the getTasksByPriority getter
  }
});

const handleSubmit = () => {
  if (newTasks.value.length > 0) {
    taskStore.addTask({
      name: newTasks.value,
      done: false,
      id: uuidv4(),
      date: date.value,
      description: description.value,
      priority: priority.value,
    });
    newTasks.value = "";
    date.value = "";
    description.value = "";
    priority.value = "";
  }
};

watch(
  () => taskStore.tasks.length,
  () => {
    isModal.value = false;
  }
);
</script>
