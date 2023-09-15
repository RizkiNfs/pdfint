<script setup lang="ts">
import BorderRadius from './fragments/BorderRadius.vue'
import Border from './fragments/Border.vue'
import Text from './fragments/Text.vue'
import Flexbox from './fragments/Flexbox.vue'
import Colors from './fragments/Colors.vue'
import Margin from './fragments/Margin.vue'

const { selectedNode } = useFileEditor()


</script>

<template>
  <div class="overflow-auto">
    <m-toolbar 
      v-if="selectedNode?.type === 'view' || selectedNode?.type === 'page'" 
      class="mb-4"
    />
    <Margin />
    <Border />
    <BorderRadius />
    <Colors class="mt-2" />
    <Flexbox class="mt-2" />
    <Text class="mt-2" />
  </div>
</template>