// composables/useSecureEmail.ts
export const useSecureEmail = (delay: number = 3000) => {
  const user = 'hello'
  const domain = 'kalenmichael.com'

  const email = ref<string>('')
  const isRevealed = ref(false)

  const reveal = () => {
    if (isRevealed.value) return
    email.value = `${user}@${domain}`
    isRevealed.value = true
  }

  // Only run on client-side to protect prerendered HTML
  onMounted(() => {
    setTimeout(reveal, delay)
  })

  return {
    email,
    isRevealed,
    reveal
  }
}
