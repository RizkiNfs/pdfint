<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Node } from 'composables/editor'

const { selectedNode } = useFileEditor()


const addView = () => {

  const value: Node = {
    type: 'view',
    id: nanoid(),
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: []
  }

  if(Array.isArray(selectedNode.value.children)) {
    selectedNode.value.children?.push(value)
  }

  
}

const addText = () => {

  const value: Node = {
    type: 'text',
    id: nanoid(),
    style: {
      display: 'flex',
      fontSize: '16px'
    },
    children: 'Text'
  }

  if(Array.isArray(selectedNode.value.children)) {
    selectedNode.value.children?.push(value)
  }

}

</script>

<template>
  <div class="flex gap-x-4">
    <a-button
      @click="addView"
      v-if="selectedNode?.type !== 'text'"
    >
      View
    </a-button>
    <a-button
      @click="addText"
      v-if="selectedNode?.type !== 'text'"
    >
      Text
    </a-button>
  </div>
</template>