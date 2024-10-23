<!-- layout.vue | page.vue | component.vue -->

<template>
    <div class="bg-red-400 w-28 h-28 m-8">
      <h1 class="title">Nuxt Gsap</h1>
    </div>
  </template>
  
  <script setup lang="ts">
    const { $gsap } = useNuxtApp()
  
    onMounted(() => {
      $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
    })
  </script>