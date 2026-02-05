<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined,
  url: undefined,
  _honey: undefined,
});

type Schema = typeof state;

function validate(state: Partial<Schema>): FormError[] {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Email required: We hate spam more than cold coffee. Promise." });
  if (!state.url) errors.push({ name: "url", message: "URL required" });
  return errors;
}

const onSubmit = async () => {
loading.value = true
  try {
    // FormSubmit expects a standard POST request

    const emailHash = config.public.formHash;

    await $fetch(`https://formsubmit.co/ajax/${emailHash}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...state,
        _subject: `Tool Suggestion from ${state.name}`
      })
    })

    // Success Toast
    toast.add({
      title: 'Message Sent!',
      description: 'Thanks for the suggestion. I’ll review it soon.',
      icon: 'i-heroicons-check-circle',
      color: 'green',
      timeout: 5000
    })

    // Reset the form
    Object.assign(state, { name: '', email: '', subject: '', message: '' })

  } catch (err) {
    // Error Toast
    toast.add({
      title: 'Submission Failed',
      description: 'Something went wrong. Please try again or email me directly.',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    })
    console.error(err)
  }finally {
    loading.value = false
  }
}
const createTool = (title, description, icon, to, img) => {
  const domain = new URL(to).hostname;
  const image = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return {
    title: title,
    description: description,
    icon: icon,
    to: to,
    img: image
  };
};

const tools = [
createTool("Coolors", "Generate perfect color combinations for your designs.", "i-lucide-palette", "https://coolors.co/"),
createTool("GTmetrix","Performance reports and insights valuable for optimization.","i-lucide-zap","https://gtmetrix.com/"),
createTool("Whats My DNS", "Lookup DNS across multiple nameservers in different parts of the world.", "i-lucide-globe", "https://www.whatsmydns.net/"),
createTool("Mail Tester", "Test the spammyness of your emails.", "i-lucide-mail-question-mark", "https://www.mail-tester.com/"),
createTool("Spell Checker", "Identifier potential spelling mistakes across your site.", "i-lucide-spell-check-2", "https://datayze.com/website-spell-checker"),
createTool("Web Check", "Easily discover all  publically available information on your domain.", "i-lucide-shield-user", "https://web-check.xyz/"),
createTool("Contrast Ratio", "Verify that your chosen colours are readable to your users.", "i-lucide-contrast", "https://www.siegemedia.com/contrast-ratio"),
createTool("Tiny JPG", "Minimize your images to improve your page loading time.", "i-lucide-scaling", "https://tinyjpg.com/"),
createTool("Form Submit", "Form submissions without a backend.", "i-lucide-send-horizontal", "https://formsubmit.co/"),
];
</script>
<template>
  <UPageHero
    title="Third Party Tools"
    description="A curated selection of industry-standard tools I use to monitor, optimize, and scale digital infrastructure."
    :links="[
      {
        label: 'Suggest a Tool',
        to: '#suggest',
        color: 'gray',
        variant: 'ghost',
        icon: 'i-heroicons-envelope',
      },
    ]"
  >
    <template #top>
      <div
        class="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full -z-10"
      />
    </template>

    <template #headline>
      <span
        class="text-primary-500 font-mono font-semibold uppercase tracking-widest text-xs"
      >
        The Stack
      </span>
    </template>
    <UPageBody>
      <UPageGrid>
        <UPageCard
          v-for="tool in tools"
          :title="tool.title"
          :description="tool.description"
          :icon="tool.icon"
          :to="tool.to"
          target="_blank"
          class="hover:ring-2 hover:ring-primary-500/50 transition-all"
          orientation="horizontal"
          reverse
        >
        <div class="flex items-center justify-center h-full min-w-[64px]">
        <img :src="tool.img" :alt="tool.title" class="max-w-[64px] max-h-[64px] object-contain rounded-md shadow-sm" loading="lazy"/>
        </div>
        </UPageCard>
      </UPageGrid>
    </UPageBody>
  </UPageHero>


    <UPageSection id="suggest" title="Suggest a Tool" description="Found a tool that’s a total game-changer? Drop the link below and help us kill the 'boring software' vibe.">
      <UContainer>
      <div class="flex align-center justify-center max-w-xl mx-auto">
        <UForm :validate="validate" :state="state" class="space-y-4 flex-1 w-full" @submit="onSubmit">
            <UInput v-model="state._honey" type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off"/>
          <UFormField label="Name" name="name" size="xl">
            <UInput v-model="state.name" placeholder="Elliot Alderson" class="w-full"/>
          </UFormField>
          <UFormField label="Email" name="email" size="xl">
            <UInput v-model="state.email" placeholder="mr@robot.com" class="w-full"/>
          </UFormField>
          <UFormField label="Url" name="url" size="xl">
            <UInput v-model="state.url" placeholder="https://f-society.org" class="w-full"/>
          </UFormField>

          <UFormField label="Message" name="message" size="xl">
            <UTextarea v-model="state.message" :rows="6" autoresize class="w-full" placeholder="Why is this tool worth a look? Give us the 'elevator pitch.'"/>
          </UFormField>
          <div class="flex justify-end">
          <UButton type="submit" :loading="loading" icon="i-lucide-send" class="py-4" size="xl"> Submit Tool </UButton>
          </div>
        </UForm>
        </div>
      </UContainer>
    </UPageSection>
</template>
