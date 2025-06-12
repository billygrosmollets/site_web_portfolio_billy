<template>
  <section id="home">
    <div id="home-title" class="animate-slide-in">
      <h1><span class="highlight">Clément</span> Billy</h1>
      <p class="subtitle">
        Senior Front-End & Full-Stack Engineer with Over 8 Years of Building Innovative Web
        Solutions
      </p>
      <div class="icon-container">
        <a href="mailto:clementbilly04@gmail.com" class="icon-link">
          <img src="/src/assets/logo/gmail-logo.svg" alt="Gmail" class="icon" />
        </a>
        <a href="https://github.com/billygrosmollets" target="_blank" class="icon-link">
          <img src="/src/assets/logo/github-logo.svg" alt="GitHub" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/billy-clement/" target="_blank" class="icon-link">
          <img src="/src/assets/logo/linkedin-logo.svg" alt="LinkedIn" class="icon" />
        </a>
      </div>
    </div>
    <div class="image-container">
      <img src="/src/assets/p.svg" alt="Profile Image" class="profile-image animate-float" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin-top: 25vh;
  margin-right: 15vw;
  margin-left: 15vw;
  color: var(--text-color-primary);
}

#home h1 {
  font-size: 4.5rem;
  margin: 0;
}

#home .subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
  max-width: 80%;
  line-height: 1.5;
  color: var(--text-color-primary);
}

.highlight {
  color: var(--accent-color);
  font-weight: 600;
}

.icon-container {
  display: flex;
  justify-content: left;
  gap: 2rem;
}

.icon-link {
  display: inline-flex;
  align-items: center;
}

.icon {
  width: auto;
  height: 2.5rem;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: translateY(-0.3rem);
}

.image-container {
  display: flex;
  justify-content: flex-end;
  margin-left: 10%;
}

.profile-image {
  width: 31.25rem;
  height: auto;
}

/* Animations Vue */
.animate-slide-in {
  animation: slideInDown 1s ease-out;
}

.animate-float {
  animation: float 2s ease-in-out infinite alternate;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-0.625rem);
  }
}

/* Media queries */
@media (max-width: 1200px) {
  #home {
    padding: 10vh 10vw;
  }

  .profile-image {
    width: 25rem;
  }
}

@media (max-width: 768px) {
  #home {
    flex-direction: column;
    padding: 8vh 5vw;
  }

  .image-container {
    margin-left: 0;
    margin-top: 2rem;
  }

  #home h1 {
    font-size: 3rem;
  }
}
</style>
