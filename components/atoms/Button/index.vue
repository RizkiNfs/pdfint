<script setup lang="ts">
import { Pressable } from '@ark-ui/vue'
const slots = defineSlots<{
  default(): any
}>()

</script>

<template>  
  <Pressable class="py-2 px-4 rounded bg-primary">
    <slot>
      <component :is="slots?.default" />
    </slot>
  </Pressable>
</template>