<template>
  <Header />
  <AddTask />
  <h1>{{ taskStore.name }}</h1>
</template>

<script setup>
import Header from "./components/Header.vue";
import AddTask from "./components/AddTask.vue";
import { useTaskStore } from "./stores/TasksStore";

const taskStore = useTaskStore();
</script>
