<script setup lang="ts">
import type { Style } from '@react-pdf/types'
import type { Props as InputProps } from '@/components/atoms/InputNumber/index.vue'
import type { Props as SelectProps } from '@/components/atoms/Select/index.vue'

const { selectedNode } = useFileEditor()

type TextProperty = Record<keyof Style, {
  input: any,
  props?: InputProps | SelectProps
}>

const textProperties: Partial<TextProperty> = {
  fontSize: {
    input: resolveComponent('a-input-unit'),
    props: { unit: 'px' }
  },
  lineHeight: {
    input: resolveComponent('a-input-unit')
  },
  letterSpacing: {
    input: resolveComponent('a-input-unit'), 
    props: { unit: 'px', placeholder: '0' }
  },
  textAlign: {
    input: resolveComponent('a-select'),
    props: {
      placeholder: 'left',
      options: ['left', 'center','right']
    }
  },
  textDecoration: {
    input: resolveComponent('a-select'),
    props: {
      placeholder: 'none',
      options: ['none', 'line-through', 'underline', 'line-through underline', 'underline line-through']
    }
  },
} 

</script>

<template>
  <div v-if="selectedNode?.type === 'text'">
    <p class="font-semibold mb-1">
      Text
    </p>
    <textarea
      class="w-full"
      v-model="selectedNode.children"
    />
    <div
      v-for="([key, value], index) of Object.entries(textProperties)"
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