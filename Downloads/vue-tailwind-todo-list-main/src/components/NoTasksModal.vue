<template>
  <div
    v-if="tasks.length === 0"
    class="flex flex-col justify-center items-center bg-yellow-400"
  >
    <h1>YOU HAVE NO REMAINING TASKS</h1>
    <p>Enter your tasks above</p>
  </div>
</template>

<script setup>
const props = defineProps({
  tasks: Array,
});
</script>
