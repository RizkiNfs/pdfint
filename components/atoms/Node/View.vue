<script setup lang="ts">
import type { Node } from '@/composables/editor'

const props = defineProps<{ node: Node }>()

const { selectedNode } = useFileEditor()

</script>

<template>
  <div 
    @click.stop="selectedNode = props.node"
    :style="(props.node.style as any)"
    class="hover:outline-2 hover:outline cursor-pointer items-stretch"
  >
    <template
      v-for="(item) of props.node.children"
      :key="item.id"
    >
      <a-node-view
        v-if="(item as Node).type === 'view'"
        :node="(item as Node)"
        :class="selectedNode.id === (item as Node).id && 'outline'"
      />
      <a-node-text
        v-if="(item as Node).type === 'text'"
        :node="(item as Node)"
        :class="selectedNode.id === (item as Node).id && 'outline'"
      />
    </template>
  </div>
</template>