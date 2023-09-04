<template>
  <div class="">
    <header class="h-12 border-b p-2 fixed top-0 w-full bg-white z-10">
      PDFint
    </header>
    <div class="flex h-screen">
      <aside class="w-60 p-2 fixed left-0 top-12 h-full border-r">
        <o-node-panel />
      </aside>
      <main class="flex-1 p-4 flex justify-center mt-12">
        <slot />
      </main>
      <aside class="w-60 p-2 fixed right-0 top-12 h-full border-l">
        <o-properties-panel />
      </aside>
    </div>
  </div>
</template>