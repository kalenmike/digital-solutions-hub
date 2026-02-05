<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined,
  _honey: undefined,
});

type Schema = typeof state;

function validate(state: Partial<Schema>): FormError[] {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Email required: We hate spam more than cold coffee. Promise." });
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
        _subject: `Web Contact from ${state.name}`
      })
    })

    // Success Toast
    toast.add({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. I’ll get back to you soon.',
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

const services = [
  {
    icon: "i-lucide-lightbulb",
    title: "Digital Strategy & Consulting",
    description:
      "Transform your business ideas into actionable digital strategies. I help you navigate the tech landscape and make informed decisions that align with your goals.",
  },
  {
    icon: "i-lucide-rocket",
    title: "MVP & Software Development Support",
    description:
      "Get your product to market faster. From architecture planning to hands-on development support, I help startups and businesses build and ship their MVPs.",
  },
  {
    icon: "i-lucide-cloud",
    title: "Cloud & Infrastructure Setup",
    description:
      "Design and implement scalable cloud solutions. Whether it's AWS, Google Cloud, or Azure, I'll set up infrastructure that grows with your business.",
  },
  {
    icon: "i-lucide-globe",
    title: "DNS & Web Hosting Support",
    description:
      "Navigate the complexities of domains, DNS configuration, and hosting environments. Get your web presence running smoothly and securely.",
  },
  {
    icon: "i-lucide-wrench",
    title: "Technical Troubleshooting & Mentorship",
    description:
      "Stuck on a technical challenge? I provide debugging support, code reviews, and mentorship to help you and your team overcome obstacles.",
  },
];

const technical = [
  {
    icon: "i-lucide-code",
    title: "Full-Stack Development",
    description:
      "TypeScript, React, Node.js, Python, and modern web frameworks",
  },
  {
    icon: "i-lucide-server",
    title: "Cloud Architecture",
    description: "AWS, GCP, Azure—design, deployment, and optimization",
  },
  {
    icon: "i-lucide-git-branch",
    title: "DevOps & CI/CD",
    description: "Docker, Kubernetes, GitHub Actions, automated pipelines",
  },
  {
    icon: "i-lucide-terminal",
    title: "Systems & Infrastructure",
    description: "Linux, networking, security, and performance tuning",
  },
];
</script>
<template>
  <div>
    <UPageHero
      :links="[
        {
          label: 'Get in Touch',
          to: '#contact',
          icon: 'i-lucide-send',
          size: 'xl',
        },
        {
          label: 'Learn More',
          to: '#about',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
      :ui="{
        wrapper:
          'min-h-[calc(100vh-64px)] flex flex-col justify-center py-0 m-0',
        container: 'py-0 sm:py-0 lg:py-0 flex flex-col justify-center',
        base: 'py-0 sm:py-0 lg:py-0',
      }"
    >
    <template #top>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
      <div class="animate-grid absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
    </div>
  </template>
      <template #title>
        <span class="tracking-wider">
          Digital Solutions <br /><span class="text-primary">Consultant</span>
        </span>
      </template>

      <template #description>
        <p class="text-2xl tracking-wide">
          Helping businesses and individuals bring their digital ideas to life
          with consulting, product development, cloud infrastructure,
          programming, and technical support.
        </p>
      </template>
    </UPageHero>

    <UPageSection id="about" title="About me" class="md:px-16">
      <UContainer>
        <p class="text-xl text-muted mb-6">
          With over a
          <span class="text-primary font-semibold">decade of experience</span>
          in the technology industry, I've had the privilege of working across
          diverse sectors; from startups racing to launch their MVPs to
          established enterprises modernizing their infrastructure.
        </p>
        <p class="text-xl text-muted mb-6">
          After taking time away to focus on personal growth and family, I've
          returned with
          <span class="text-primary font-semibold">renewed passion</span> and a
          fresh perspective on what businesses truly need in today's digital
          landscape. My break gave me clarity:
          <span class="text-primary font-semibold"
            >technology should serve people</span
          >, not the other way around.
        </p>
        <p class="text-xl text-muted">
          I
          <span class="text-primary font-semibold">bridge the gap</span> between
          technical complexity and business objectives. Whether you're a
          non-technical founder with a brilliant idea or a development team
          needing an extra set of expert hands, I
          <span class="text-primary font-semibold">adapt to your needs</span>
          and communicate in your language.
        </p>

        <UContainer class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <UPageCard
            title="10+"
            description="Years Experience"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
          <UPageCard
            title="50+"
            description="Projects Delivered"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
          <UPageCard
            title="100%"
            description="Client Focused"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
        </UContainer>

        <UContainer class="mt-20 justify-center flex gap-5">
          <UButton
            to="https://github.com/kalenmike"
            target="_blank"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          >
            <template #leading>
              <UIcon name="i-simple-icons-github" class="w-8 h-8" />
            </template>
          </UButton>
          <UButton
            to="https://www.linkedin.com/in/kalenmichael/"
            target="_blank"
            aria-label="LinkedIn"
            color="neutral"
            variant="ghost"
          >
            <template #leading>
              <UIcon name="i-simple-icons-linkedin" class="w-8 h-8" />
            </template>
          </UButton>
        </UContainer>
      </UContainer>
    </UPageSection>

    <UPageSection
      id="services"
      title="Services"
      description="Comprehensive digital solutions tailored to your needs, from strategic planning to hands-on technical implementation."
      :features="services"
    />

    <UPageSection>
      <UPageCTA
        title="Your partner in digital growth."
        description="Ready to start your next project? I'm here to help with the strategy, the code, and everything in between."
        variant="subtle"
        :links="[
          {
            label: 'Get Started',
            to: '#contact',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'primary',
          },
        ]"
      />
    </UPageSection>

    <UPageSection
      id="support"
      title="New to Technology?"
      description="You don't need to understand code to build great digital products. I'm here to guide you every step of the way."
    >
      <UCard variant="subtle">
        <h3 class="text-xl mb-5">How I Make Technology Accessible</h3>
        <UPageFeature
          title="I explain technical concepts in plain English. No jargon, no confusion!"
          description=" "
          icon="i-lucide-circle-check-big"
        />
        <UPageFeature
          title="Step-by-step guidance from idea to implementation"
          description=" "
          icon="i-lucide-circle-check-big"
        />
        <UPageFeature
          title="I act as your trusted technical advisor and translator"
          description=" "
          icon="i-lucide-circle-check-big"
        />
        <UPageFeature
          title="You stay in control while I handle the technical details"
          description=" "
          icon="i-lucide-circle-check-big"
        />
        <UPageFeature
          title="Regular updates and clear communication throughout our work together"
          description=" "
          icon="i-lucide-circle-check-big"
        />
        <UCard variant="subtle">
          <p class="text-xl">
            "My goal is to empower you with the knowledge and tools you need, so
            technology becomes an enabler—not a barrier—to your success."
          </p>
        </UCard>
      </UCard>
    </UPageSection>



    <UPageSection
      id="developers"
      title="For Technical Teams"
      description="Need an experienced developer to augment your team or lead a project? I bring deep technical expertise and a pragmatic approach to solving complex challenges.

       Whether you need architecture review, hands-on development, or technical leadership, I integrate seamlessly with your existing workflows and deliver production-ready results."
      :features="technical"
    />


    <UPageSection id="contact" title="Let's Work Together" description="Have a project in mind or just want to chat?">
      <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col h-full">
        <UForm :validate="validate" :state="state" class="space-y-4 flex-1" @submit="onSubmit">

            <UInput v-model="state._honey" type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off"/>
          <UFormField label="Name" name="name" size="xl">
            <UInput v-model="state.name" placeholder="Taylor Pixelburn" class="w-full"/>
          </UFormField>
          <UFormField label="Email" name="email" size="xl">
            <UInput v-model="state.email" placeholder="help@pixelburn.com" class="w-full"/>
          </UFormField>

          <UFormField label="Message" name="message" size="xl">
            <UTextarea v-model="state.message" :rows="6" autoresize class="w-full" placeholder="Tell me about your project..."/>
          </UFormField>
          <div class="flex justify-end">
          <UButton type="submit" :loading="loading" icon="i-lucide-send" class="py-4" size="xl"> Send Message </UButton>
          </div>
        </UForm>
        </div>

        <div class="lg:pl-12 space-y-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Details</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Based in your city, available worldwide. I usually respond within 24 hours.
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

        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-semibold mb-2">Technical Support</h4>
          <p class="text-sm text-gray-500">Need urgent help with cloud infrastructure? Mark your message as "High Priority".</p>
        </div>
      </div>
      </div>
      </UContainer>
    </UPageSection>
  </div>
</template>
