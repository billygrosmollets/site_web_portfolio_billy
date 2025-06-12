<template>
  <div id="app">
    <AppHeader @theme-toggle="toggleTheme" :current-theme="theme" />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const theme = ref('dark')

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme.value)
      localStorage.setItem('theme', theme.value)
    }

    onMounted(() => {
      // Applique le thème sauvegardé ou 'dark' par défaut
      const savedTheme = localStorage.getItem('theme') || 'dark'
      theme.value = savedTheme
      document.documentElement.setAttribute('data-theme', savedTheme)
    })

    return {
      theme,
      toggleTheme,
    }
  },
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
