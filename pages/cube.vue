<template>
    <div ref="cube" class="cube">
      <div class="face front">Front</div>
      <div class="face back">Back</div>
      <div class="face left">Left</div>
      <div class="face right">Right</div>
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useGsap } from '#gsap'
  
  const cube = ref(null)
  
  onMounted(() => {
    const cubeEl = cube.value
  
    // Mousemove to rotate the cube based on mouse position
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const xRotation = (clientY / window.innerHeight) * 360 - 180
      const yRotation = (clientX / window.innerWidth) * 360 - 180
  
      useGsap.to(cubeEl, {
        rotationX: xRotation, // Rotate based on vertical mouse movement
        rotationY: yRotation, // Rotate based on horizontal mouse movement
        ease: 'power2.out',   // Smooth easing for realistic motion
        duration: 1,          // Smooth transition
      })
    })
  })
  </script>
  
  <style scoped>
  /* Center the cube in the viewport */
  .cube {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    perspective: 1000px; /* Make sure we can see the 3D effect */
  }
  
  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
  }
  
  /* Position each face of the cube */
  .front {
    transform: rotateY(0deg) translateZ(100px);
  }
  .back {
    transform: rotateY(180deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
  
  /* Add a subtle 3D shadow effect */
  .cube {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  </style>
  