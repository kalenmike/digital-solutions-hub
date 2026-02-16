<template>
  <div class="browser-window" ref="containerWrapper">
    <!-- Fake macOS title bar -->
    <div class="title-bar">
      <div class="buttons">
        <span class="button close"></span>
        <span class="button minimize"></span>
        <span class="button maximize"></span>
      </div>
      <div class="title text-muted">{{ title }}</div>
    </div>

    <!-- Scrollable screenshot -->
    <div class="scrollable-container" ref="container">
      <img
        v-if="imageReady"
        :src="src"
        :alt="alt"
        class="scrollable-image"
        style="margin: 0"
      />
      <div v-else class="loading-placeholder">Loading...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "Screenshot" },
  title: {
    type: String,
    default: "Modernized Site – Faster, Smarter, Cleaner",
  },
});

const container = ref(null);
const containerWrapper = ref(null);
const imageReady = ref(false);

function setHeight() {
  if (container.value && containerWrapper.value) {
    // 16:9 ratio based on width
    const width = containerWrapper.value.offsetWidth;
    container.value.style.height = `${(width * 9) / 16}px`;
  }
}

onMounted(() => {
  setHeight();
  window.addEventListener("resize", setHeight);
  imageReady.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", setHeight);
});
</script>

<style scoped>
/* Browser Window */
.browser-window {
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid #ccc;
  background: #fff;
  margin: 1rem 0;
}

/* Mac-style title bar */
.title-bar {
  height: 28px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid #ddd;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  position: relative;
}

/* Buttons stay on the left */
.title-bar .buttons {
  display: flex;
  gap: 6px;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

/* Title is centered */
.title-bar .title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  user-select: none;
}

/* Close/Minimize/Maximize buttons */
.title-bar .button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.button.close {
  background: #ff5f57;
}
.button.minimize {
  background: #ffbd2e;
}
.button.maximize {
  background: #28c840;
}

/* Scrollable screenshot container */
.scrollable-container {
  width: 100%;
  overflow-y: scroll;
  border-top: none;
}

.scrollable-image {
  width: 100%;
  display: block;
}
</style>
