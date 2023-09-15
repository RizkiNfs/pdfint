<script setup lang="ts">
import {  } from 'vue'

export interface Props { 
  modelValue?: string | number
  unit?: 'px' | '%'
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  unit: 'px'
})
const emit = defineEmits<{
  'update:modelValue': [value: string | number | undefined]
}>()

const model = computed({
  get() {
    if(!props.unit) return props.modelValue 
    return parseFloat(String(props.modelValue).replace(props.unit, ''))
  },
  set(value) {
    emit('update:modelValue', props.unit ? `${value}${props.unit}` : value)
  }
})
</script>

<template>
  <input
    v-model="model"
    class="bg-transparent border-transparent hover:border-slate-300 focus:bg-white hover:bg-white"
    type="number"
  >
</template>