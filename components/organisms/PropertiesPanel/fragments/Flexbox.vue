<script setup lang="ts">
import type { Style } from '@react-pdf/types'

const { selectedNode } = useFileEditor()

type TextProperty = Record<keyof Style, {
  input: any,
  props?: Record<string, any>
}>

const flexProperties: Partial<TextProperty> = {
  flexDirection: {
    input: resolveComponent('a-select'),
    props: {
      placeholder: 'column',
      options: ['row', 'row-reverse', 'column', 'column-reverse']
    }
  },
  alignItems: {
    input: resolveComponent('a-select'),
    props: {
      placeholder: 'stretch',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
    }
  },
  justifyContent: {
    input: resolveComponent('a-select'),
    props: {
      placeholder: 'flex-start',
      options: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly']
    }
  },
  
}

</script>

<template>
  <div v-if="selectedNode?.type === 'view' || selectedNode?.type === 'page'">
    <p class="font-semibold mb-1">
      Flexbox
    </p>
    <div
      v-for="([key, value], index) of Object.entries(flexProperties)"
      :key="index"
    >
      <label class="flex items-center">
        <span class="capitalize text-zinc-500 flex-1">
          {{ key.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`) }}
        </span>
        <component
          class="w-36"
          :is="value.input"
          v-model="selectedNode.style[key as keyof Style]"
          v-bind="value.props"
        />
      </label>
    </div>
  </div>
</template>