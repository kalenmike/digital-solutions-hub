// directives/scroll-animate.ts
import type { DirectiveBinding, ObjectDirective } from "vue";

const scrollAnimate: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // Function to trigger animation
    const triggerAnimation = () => {
      el.classList.add("animate");
    };


    let delay = "";

    // Check if an argument (e.g., `v-scroll-animate:400ms`) is passed
    if (binding.arg) {
      delay = binding.arg;
    }
    // Otherwise, check if the directive has a dynamic value (e.g., `v-scroll-animate="delay"`)
    else if (binding.value) {
      console.log(binding.value);
      delay = binding.value;
    }

    if (delay) {
      el.style.animationDelay = delay;
    }

    // Check if the element is already in view
    const isInViewport = () => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // If the element is already in view, trigger the animation immediately
    if (isInViewport()) {
      triggerAnimation();
    } else {
      // Initialize IntersectionObserver
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add the animation class when the element enters the viewport
              triggerAnimation();
              observer.unobserve(entry.target); // Stop observing after animation triggers
            }
          });
        },
        { threshold: 0.5 }, // Trigger when 50% of the element is in view
      );

      // Start observing the element
      observer.observe(el);
    }
  },
};

export default scrollAnimate;
