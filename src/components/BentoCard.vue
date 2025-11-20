<script setup>
defineProps({
  title: String,
  noPadding: Boolean,
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
  >
    <div v-if="title" class="px-6 pt-6 pb-2">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-white">
        {{ title }}
      </h2>
    </div>
    <div :class="noPadding ? '' : 'p-6'" class="flex-grow">
      <slot></slot>
    </div>
  </div>
</template>
