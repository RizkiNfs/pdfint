<script setup lang="ts">
import type { Node } from '@/composables/editor'

const props = defineProps<{ node: Node }>()

const { selectedNode } = useFileEditor()


</script>

<template>
  <p
    @click.stop="selectedNode = props.node"
    :style="(props.node.style as any)" 
    class="hover:outline-2 hover:outline cursor-pointer oke"
  >
    {{ props.node.children }}
  </p>
</template>