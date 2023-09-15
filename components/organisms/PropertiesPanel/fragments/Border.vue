<script setup lang="ts">
import type { Style } from '@react-pdf/types'
import Expanded from './Expanded.vue'

const { selectedNode } = useFileEditor()

const properties = [
  'Top', 'Bottom', 'Left', 'Right'
] as const

const items: Array<[keyof Style, typeof properties]> = [
  [
    'border',
    properties
  ],
]

</script>

<template>
  <div v-if="selectedNode?.type === 'view'">
    <Expanded :items="items">
      <template #default>
        <label class="flex items-center flex-1">
          <span class="text-zinc-500 w-36 capitalize">
            Border
          </span>
          <a-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style['borderWidth']"
          />
          <input
            class="w-12"
            type="color"
            v-model="selectedNode.style[`borderColor`]"
          >
        </label>
      </template>
      <template #content="slotProps">
        <label
          class="flex items-center"
          v-for="item of slotProps[1]"
          :key="item"
        >
          <span class="capitalize text-zinc-500 flex-1 pl-4">
            {{ item }}
          </span>
          <span class="w-36">
            <a-input-unit
              class="w-12"
              placeholder="0"
              v-model="selectedNode.style[`border${item}Width`]"
            />
            <input
              class="w-12"
              type="color"
              v-model="selectedNode.style[`border${item}Color`]"
            >
          </span>
        </label>
      </template>
    </Expanded>
  </div>
</template>
