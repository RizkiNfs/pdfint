<script setup lang="ts">
import type { Node } from '@/composables/editor'

const props = defineProps<{ node: Node }>()

const { selectedNode } = useFileEditor()

</script>

<template>
  <div class="pl-2">
    <p @click.stop="selectedNode = props.node">
      {{ props.node.type }}
    </p>
    <template v-if="Array.isArray(props.node.children)">
      <o-node-panel-item 
        v-for="item of props.node.children" 
        :node="item"
        :key="item.id" 
      />
    </template>
  </div>
</template>