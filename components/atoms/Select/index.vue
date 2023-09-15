<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from '@ark-ui/vue'

defineOptions({
  inheritAttrs: false
})

export interface Props {
  modelValue: string
  placeholder?: string
  options: {
    label: string
    value: string
  }[] | string[]
}
const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<template>
  <Select
    v-slot="{ selectedOption }"
    :model-value="{value: model, label: model}"
    @change="model = ($event?.value || '')"
  >
    <SelectTrigger 
      class="min-w-[120px] text-left rounded-md p-2 bg-transparent border-transparent hover:border-slate-300 focus:bg-white hover:bg-white"
      :class="$attrs.class"
    >
      <button>{{ selectedOption.value ?? props.placeholder }}</button>
    </SelectTrigger>
    <Teleport to="body">
      <SelectPositioner>
        <SelectContent class="border rounded-md p-1 bg-white">
          <SelectOption 
            v-for="item of props.options"
            :label="typeof item === 'string' ? item : item.label"
            :value=" typeof item === 'string' ? item : item.value"
            :key="typeof item === 'string' ? item : item.value"
            class="p-2 rounded hover:bg-slate-50 cursor-pointer" 
          />
        </SelectContent>
      </SelectPositioner>
    </Teleport>
  </Select>
</template>

<style scoped>
button[data-scope="select"][data-part="trigger"] {
  @apply rounded-md border p-1 focus:outline-primary;
}

button[data-state="open"][data-part="trigger"] {
  @apply outline-primary outline outline-2 border-transparent;
}

</style>