<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "outline", "ghost", "sakura"].includes(value),
  },
  loading: { type: Boolean, default: false },
  icon: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const classes = computed(() => {
  const base =
    "relative overflow-hidden group transition-all duration-200 active:scale-95 font-medium rounded-lg px-5 py-2.5 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bento-ao dark:focus:ring-offset-gray-900";

  const variants = {
    primary:
      "bg-bento-ao text-white hover:bg-opacity-90 shadow-md shadow-bento-ao/30",
    secondary:
      "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600",
    outline:
      "border-2 border-gray-200 text-gray-700 hover:border-bento-ao hover:text-bento-ao dark:border-gray-700 dark:text-gray-300 dark:hover:border-bento-ao",
    ghost:
      "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
    sakura:
      "bg-bento-sakura text-bento-kuro hover:brightness-95 shadow-md shadow-bento-sakura/30",
  };

  return [
    base,
    variants[props.variant],
    props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");
});
</script>

<template>
  <button :class="classes" :disabled="disabled || loading">
    <span v-if="loading" class="animate-spin"
      ><i class="ph ph-spinner text-lg"></i
    ></span>
    <i v-else-if="icon" :class="`ph ph-${icon} text-lg`"></i>
    <span :class="{ 'opacity-0': loading }"><slot></slot></span>
  </button>
</template>
