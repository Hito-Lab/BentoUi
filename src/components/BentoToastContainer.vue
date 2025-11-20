<script setup>
import { useToast } from "../composables/useToast";

const { toasts } = useToast();
</script>

<template>
  <div
    class="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none"
  >
    <transition-group
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'pointer-events-auto flex items-center p-4 rounded-lg shadow-lg border text-sm font-medium min-w-[300px]',
          toast.type === 'success'
            ? 'bg-white border-l-4 border-l-green-500 text-gray-800'
            : '',
          toast.type === 'error'
            ? 'bg-white border-l-4 border-l-red-500 text-gray-800'
            : '',
          'dark:bg-gray-800 dark:text-white',
        ]"
      >
        <i
          :class="[
            'ph text-xl mr-3',
            toast.type === 'success'
              ? 'ph-check-circle text-green-500'
              : 'ph-warning-circle text-red-500',
          ]"
        ></i>
        {{ toast.message }}
      </div>
    </transition-group>
  </div>
</template>
