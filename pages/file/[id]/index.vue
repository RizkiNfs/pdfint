<script setup lang="ts">

const { state } = useFileEditor()
const selectedNode = useSelectedNode()

const pageSizes = {
  A4: {
    width: 595,
    height: 842
  }
}

</script>

<template>
  <div>
    <div
      v-for="(page, index) of state.pages"
      @click="selectedNode = page"
      :key="index"
      :style="{...(page?.style || {}), width: `${pageSizes.A4.width}px`, height: `${pageSizes.A4.height}px`}"
      class="outline outline-1 outline-slate-300 relative mt-6"
    >
      <template
        v-for="node of page.children" 
        :key="node.id" 
      >
        <a-node-view
          v-if="node.type === 'view'"
          :node="node"
          :class="selectedNode.id === node.id && 'outline'"
        />
        <a-node-text
          v-if="node.type === 'text'"
          :node="node"
          :class="selectedNode.id === node.id && 'outline'"
        />
      </template>
    </div>
  </div>
</template>