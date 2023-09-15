<script setup>

const { state } = useFileEditor()
const handleCreate = () => {
  $fetch('/api/create/abcd', {
    method: 'POST',
    body: {
      schema: state.value
    }
  }).then((res) => {
    download(res, state.value.id)
  })
}

</script>

<template>
  <div class="">
    <header class="h-12 border-b p-2 fixed top-0 w-full bg-white z-10 flex items-center justify-between">
      PDFint
      <div>
        <button @click="handleCreate">
          Download
        </button>
      </div>
    </header>
    <div class="flex h-screen">
      <aside 
        class="w-60 p-2 fixed left-0 top-12 border-r overflow-auto"
        :style="{height: 'calc(100vh - 48px)'}"
      >
        <o-node-panel />
      </aside>
      <main class="flex-1 p-4 flex justify-center mt-12">
        <slot />
      </main>
      <aside 
        class="w-80 p-2 fixed right-0 top-12 border-l overflow-auto"
        :style="{height: 'calc(100vh - 48px)'}"
      >
        <o-properties-panel />
      </aside>
    </div>
  </div>
</template>