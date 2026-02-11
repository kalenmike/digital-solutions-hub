<template>
  <!-- <div -->
  <!--   class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950" -->
  <!-- > -->
  <!--   <div -->
  <!--     class="animate-grid absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" -->
  <!--   ></div> -->
  <!-- </div> -->
  <div class="grid-wrapper">
    <div class="grid animate-grid"></div>
    <div class="mask"></div>
  </div>
</template>

<style scoped>
/* @keyframes grid-move { */
/*   from { background-position: 0 0; } */
/*   to { background-position: 40px 40px; } */
/* } */
/**/
/* .animate-grid { */
/*   animation: grid-move 4s linear infinite; */
/* } */

.grid-wrapper {
  overflow: hidden;
  position: fixed; /* or absolute */
  z-index: -10;
  inset: 0;
  pointer-events: none;
}

.grid {
  width: 200%; /* make it bigger than viewport for smooth looping */
  height: 200%;
  background-image:
    linear-gradient(to right, #80808012 1px, transparent 1px),
    linear-gradient(to bottom, #80808012 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}

.animate-grid {
  animation: grid-move 4s linear infinite;
  will-change: transform; /* Hint GPU to optimize */
}
</style>
