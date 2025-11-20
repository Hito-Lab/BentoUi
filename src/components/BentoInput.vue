<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  type: { type: String, default: "text" },
  icon: String,
  error: String,
  disabled: Boolean,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1.5 text-left">
    <label
      v-if="label"
      class="text-sm font-medium text-gray-700 dark:text-gray-300"
      >{{ label }}</label
    >
    <div class="relative">
      <div
        v-if="icon"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <i :class="`ph ph-${icon} text-lg`"></i>
      </div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full rounded-lg border bg-gray-50 dark:bg-gray-900 dark:text-white px-4 py-2.5 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-bento-ao/50"
        :class="[
          icon ? 'pl-10' : '',
          error
            ? 'border-red-400 focus:ring-red-200'
            : 'border-gray-200 dark:border-gray-700 focus:border-bento-ao',
          disabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : '',
        ]"
      />
    </div>
    <span v-if="error" class="text-xs text-red-500 animate-pulse">{{
      error
    }}</span>
  </div>
</template>
