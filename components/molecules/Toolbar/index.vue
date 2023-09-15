<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Node } from '@/composables/editor'

const { selectedNode, initialStyle } = useFileEditor()


const addView = () => {

  const value: Node = {
    type: 'view',
    id: nanoid(),
    style: {
      ...initialStyle.common,
      ...initialStyle.view,
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
      ...initialStyle.common,
      ...initialStyle.text,
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
    <a-button @click="addView">
      View
    </a-button>
    <a-button @click="addText">
      Text
    </a-button>
  </div>
</template>