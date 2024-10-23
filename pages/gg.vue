<template>
    <div class="scroll-container">
      <!-- Tall container for scrolling -->
      <div class="spacer"></div>
      <!-- 3D Cube -->
      <div class="cube" ref="cube">
        <div class="face front">*</div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
      <div class="spacer"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useGsap } from '#gsap'
  
  const cube = ref(null)
  
  onMounted(() => {
    const cubeEl = cube.value
  
    // Smooth cube gravitation toward the mouse
    // window.addEventListener('mousemove', (e) => {
    //   const { clientX, clientY } = e
    //   const xRotation = (clientY / window.innerHeight) * 10 - 5
    //   const yRotation = (clientX / window.innerWidth) * 10 - 5
  
    //   useGsap.to(cubeEl, {
    //     rotationX: xRotation, 
    //     rotationY: yRotation, 
    //     duration: 1, 
    //     ease: 'power2.out',
    //   })
    // })
  
    // Parallax scroll animations using GSAP ScrollTrigger
    useGsap.to(cubeEl, {
      y: -300, 
      x:-300,
      scrollTrigger: {
        trigger: '.cube',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, 
      }
    })
  
    // Rotate cube on scroll
    useGsap.to(cubeEl, {
      rotationY: 360, 
      rotationX: 170, 
      scrollTrigger: {
        trigger: '.cube',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, 
      }
    })
  
    // Scale cube based on scroll
    useGsap.to(cubeEl, {
      scale: 1.5, 
      scrollTrigger: {
        trigger: '.cube',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, 
      }
    })
  })
  </script>
  
  <style scoped>
  /* Tall container to simulate scrolling */
  .scroll-container {
    height: 300vh; /* 3 times the viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .spacer {
    height: 100vh; /* Space before and after cube to allow scroll */
  }
  
  /* The 3D Cube */
  .cube {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    transition: box-shadow 0.2s ease;
  }
  
  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 255, 255, 0.7); /* Neon border */
    background: transparent;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.3s, box-shadow 0.3s;
    background-color: rgba(134, 134, 134, 0);

  }
  
  /* Hover effect for the edges - gloomy glow */
  .face:hover {
    border-color:rgb(162, 255, 0); /* Glow effect */
    background-color: rgba(119, 197, 24, 0.302);
  }
  
   .front{
    background-color:rgba(0, 255, 255, 0.288);

  }
  /* Position each face of the cube in 3D */
  .front  { transform: rotateY(0deg) translateZ(100px); }
  .back   { transform: rotateY(180deg) translateZ(100px); }
  .left   { transform: rotateY(-90deg) translateZ(100px); }
  .right  { transform: rotateY(90deg) translateZ(100px); }
  .top    { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }
  

  </style>
  