<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const config = useRuntimeConfig();
const toast = useToast();
const loading = ref(false);

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined,
  _honey: undefined,
});

type Schema = typeof state;

function validate(state: Partial<Schema>): FormError[] {
  const errors = [];
  if (!state.email)
    errors.push({
      name: "email",
      message: "Email required: We hate spam more than cold coffee. Promise.",
    });
  return errors;
}

const onSubmit = async () => {
  loading.value = true;
  try {
    // FormSubmit expects a standard POST request

    const emailHash = config.public.formHash;

    await $fetch(`https://formsubmit.co/ajax/${emailHash}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...state,
        _subject: `Web Contact from ${state.name}`,
      }),
    });

    // Success Toast
    toast.add({
      title: "Message Sent!",
      description: "Thanks for reaching out. I’ll get back to you soon.",
      icon: "i-heroicons-check-circle",
      color: "green",
      timeout: 5000,
    });

    // Reset the form
    Object.assign(state, { name: "", email: "", subject: "", message: "" });
  } catch (err) {
    // Error Toast
    toast.add({
      title: "Submission Failed",
      description:
        "Something went wrong. Please try again or email me directly.",
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
    });
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <UPageSection
    id="contact"
  >
    <template #title>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
      Let's Work Together
      </span>
    </template>
    <template #description>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
      Have a project in mind or just want to chat?
      </span>
    </template>
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col h-full">
          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4 flex-1"
            @submit="onSubmit"
          >
            <UInput
              v-model="state._honey"
              type="text"
              name="_honey"
              style="display: none"
              tabindex="-1"
              autocomplete="off"
            />
            <UFormField label="Name" name="name" size="xl">
              <UInput
                v-model="state.name"
                placeholder="Taylor Pixelburn"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Email" name="email" size="xl">
              <UInput
                v-model="state.email"
                placeholder="help@pixelburn.com"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Message" name="message" size="xl">
              <UTextarea
                v-model="state.message"
                :rows="6"
                autoresize
                class="w-full"
                placeholder="Tell me about your project..."
              />
            </UFormField>
            <div class="flex justify-end">
              <UButton
                type="submit"
                :loading="loading"
                icon="i-lucide-send"
                class="py-4"
                size="xl"
              >
                Send Message
              </UButton>
            </div>
          </UForm>
        </div>

        <div class="lg:pl-12 space-y-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Contact Details</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Based in your city, available worldwide. I usually respond within
              24 hours.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <ProtectedEmail />
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-primary" />
              <span>Remote / Digital Nomad</span>
            </div>
          </div>

          <div
            class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <h4 class="font-semibold mb-2">Technical Support</h4>
            <p class="text-sm text-gray-500">
              Need urgent help with cloud infrastructure? Mark your message as
              "High Priority".
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </UPageSection>
</template>
