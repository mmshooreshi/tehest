<script setup>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  provideHeadlessUseId(() => useId())

  gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>