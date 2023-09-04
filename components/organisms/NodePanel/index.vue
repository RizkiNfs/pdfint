<script setup lang="ts">

const { state } = useFileEditor()

</script>

<template>
  <o-node-panel-item 
    v-for="(node) of state.pages"
    :node="node"
    :key="node.id"
  />
</template>