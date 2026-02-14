// plugins/directives.ts
import { defineNuxtPlugin } from "#app";
import scrollAnimate from "~/directives/scroll-animate";

export default defineNuxtPlugin((nuxtApp) => {
  // Register the directive globally in the app
  nuxtApp.vueApp.directive("scroll-animate", scrollAnimate);
});
