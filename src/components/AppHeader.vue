<template>
  <header id="header">
    <router-link to="/" class="logo">CB</router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/" :class="{ active: $route.name === 'Home' }"> Home </router-link>
        </li>
        <li>
          <router-link to="/about" :class="{ active: $route.name === 'About' }">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/projects" :class="{ active: $route.name === 'Projects' }">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/contact" :class="{ active: $route.name === 'Contact' }">
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="toggles">
      <div class="theme-toggle" @click="$emit('theme-toggle')">
        <img
          :src="
            currentTheme === 'dark' ? '/src/assets/header/sun.svg' : '/src/assets/header/moon.svg'
          "
          alt="Theme Toggle"
          id="theme-icon"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    currentTheme: {
      type: String,
      default: 'dark',
    },
  },
  emits: ['theme-toggle'],
}
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1rem 10vw;
  background-color: rgba(24, 26, 27, 0.8);
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.3125rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease;
}

[data-theme='light'] #header {
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.5);
}

.logo {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-color-primary);
  text-decoration: none;
  padding-right: 2rem;
  text-align: left;
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li a {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: var(--accent-color);
}

nav ul li a.active {
  border-bottom: 0.125rem solid var(--accent-color);
}

.toggles {
  display: flex;
  gap: 1.25rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 50%;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-toggle img {
  width: 1.875rem;
  height: 1.875rem;
}

[data-theme='light'] .theme-toggle img {
  filter: none;
}

/* Media queries */
@media (max-width: 1024px) {
  #header {
    padding: 1rem 5vw;
  }

  nav ul {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  #header {
    padding: 0.75rem 1.5rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .logo {
    padding-right: 0;
  }

  nav {
    order: 3;
    width: 100%;
    margin-top: 0.75rem;
  }

  nav ul {
    justify-content: space-between;
    width: 100%;
  }

  nav ul li a {
    font-size: 1rem;
  }

  .theme-toggle {
    width: 2rem;
    height: 2rem;
  }

  .theme-toggle img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
