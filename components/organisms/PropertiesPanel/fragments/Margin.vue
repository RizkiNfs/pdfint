<script setup lang="ts">
import type { Style } from '@react-pdf/types'
import Expanded from './Expanded.vue'

const { selectedNode } = useFileEditor()

const items: Array<[keyof Style, Array<keyof Style>]> = [
  [
    'margin',
    [
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight'
    ]
  ], 
  [
    'padding',
    [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
    ]
  ]
]


</script>

<template>
  <div v-if="selectedNode">
    <Expanded :items="items">
      <template #default="slotProps">
        <label class="flex items-center flex-1">
          <span class="text-zinc-500 w-36 capitalize">
            {{ slotProps[0] }}
          </span>
          <a-input-unit
            class="w-12"
            placeholder="0"
            v-model="selectedNode.style[slotProps[0]]"
          />
        </label>
      </template>
      <template #content="slotProps">
        <label
          class="flex items-center pl-4"
          v-for="(style, idx) of slotProps[1]"
          :key="idx"
        >
          <span class="text-zinc-500 flex-1">
            {{ style.replace(/[A-Z]/g, letter => ` ${letter}`).split(' ').slice(1).join(' ') }}
          </span>
          <a-input-unit
            class="w-12"
            placeholder="-"
            v-model="selectedNode.style[style]"
          />
        </label>
      </template>
    </Expanded>
  </div>
</template>