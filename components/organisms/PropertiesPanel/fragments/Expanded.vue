<script setup lang="ts" generic="T">
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '@ark-ui/vue'

interface Props {
  items?: T[]
}

const props = defineProps<Props>()

</script>

<template>
  <Accordion
    multiple
    collapsible
  >
    <AccordionItem
      v-for="(item, index) of props.items"
      :value="`item-${index}`"
      :key="index"
    >
      <div class="flex">
        <slot v-bind="item" />
        <AccordionTrigger>
          <button class="capitalize border-none text-left p-0 w-12">
            <Icon
              name="ion:ellipsis-vertical"
              class="text-gray-500"
            />
          </button>
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <slot
          name="content"
          v-bind="item"
        />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>