<template>
    <div class="flex flex-col gap-2 mb-0">
      <label :for="id" class="text-base font-medium text-white mt-4.5">{{
        label
      }}</label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="px-3 w-full h-9 bg-white rounded-md border border-gray-300"
        
        :aria-label="label"
        
      />
      
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps<{
    label: string;
    type: string;
    modelValue: string;
  
    id: string;
    
  }>();
  
  defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();
  </script>
  