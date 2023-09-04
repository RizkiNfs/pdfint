<script setup lang="ts">
const { selectedNode } = useFileEditor()

</script>

<template>
  <div class="overflow-auto">
    <m-toolbar class="mb-4" />
    <div v-if="selectedNode?.type === 'text'">
      <textarea
        class="w-full"
        v-model="selectedNode.children"
      />
      <input v-model="selectedNode.style.fontSize">
    </div>
  </div>
</template>