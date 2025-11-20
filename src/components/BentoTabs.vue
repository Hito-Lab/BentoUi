<script setup>
import { ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(props.tabs[0]);
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex border-b border-gray-200 dark:border-gray-700">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2"
        :class="
          activeTab === tab
            ? 'border-bento-ao text-bento-ao bg-bento-ao/5'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
        "
      >
        {{ tab }}
      </button>
    </div>
    <div class="flex-grow relative overflow-hidden">
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="h-full animate-fade-in">
          <slot :name="activeTab"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
