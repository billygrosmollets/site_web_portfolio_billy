<template>
  <section id="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Mepuls Expert Interface',
          description:
            'A human-machine interface software designed for the configuration and monitoring of Mepuls systems. This tool enables expert operators to access advanced features for performance analysis and optimization.',
          image: '/src/assets/projects/mepuls.png',
          technologies: [
            { name: 'Qt Creator 5', logo: '/src/assets/logo/qt-logo.svg' },
            { name: 'C++', logo: '/src/assets/logo/cpp-logo.svg' },
            { name: 'CLion', logo: '/src/assets/logo/clion-logo.svg' },
          ],
          links: [
            {
              type: 'website',
              label: 'View Project',
              url: 'https://vlb-systemes.com/index.php/mepuls/',
              external: true,
            },
          ],
        },
        {
          id: 2,
          title: "Mobile App 'Tracker'",
          description:
            'Mobile application developed for tracking and managing data in real-time. Enables users to visualize, analyze, and share information intuitively and efficiently.',
          image: '/src/assets/projects/tracker.jpg',
          technologies: [
            { name: 'JavaScript', logo: '/src/assets/logo/javascript-logo.svg' },
            { name: 'React Native', logo: '/src/assets/logo/react-logo.svg' },
            { name: 'Expo', logo: '/src/assets/logo/expo-go-logo.svg' },
            { name: 'WebStorm', logo: '/src/assets/logo/webstorm-logo.svg' },
          ],
          links: [
            {
              type: 'website',
              label: 'View Project',
              url: 'https://github.com/billygrosmollets',
              external: true,
            },
            {
              type: 'github',
              label: 'GitHub',
              url: 'https://github.com/orgs/TrackerDevTeam/repositories',
              external: true,
              icon: '/src/assets/logo/github-logo.svg',
            },
          ],
        },
        {
          id: 3,
          title: "Website 'Portfolio'",
          description:
            'Curious to dive into the web world, I developed a site to showcase my skills and journey. Thanks for visiting!',
          image: '/src/assets/projects/portfolio.png',
          technologies: [
            { name: 'HTML', logo: '/src/assets/logo/html-logo.svg' },
            { name: 'CSS', logo: '/src/assets/logo/css-logo.svg' },
            { name: 'JavaScript', logo: '/src/assets/logo/javascript-logo.svg' },
          ],
          links: [
            {
              type: 'website',
              label: 'View Project',
              url: 'https://github.com/billygrosmollets',
              external: true,
            },
            {
              type: 'github',
              label: 'GitHub',
              url: 'https://github.com/orgs/TrackerDevTeam/repositories',
              external: true,
              icon: '/src/assets/logo/github-logo.svg',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
#projects {
  display: flex;
  flex-direction: column;
  padding: 100px 200px 50px;
}

/* Media queries */
@media (max-width: 1200px) {
  #projects {
    padding: 100px 100px 50px;
  }
}

@media (max-width: 768px) {
  #projects {
    padding: 100px 50px 50px;
  }
}

@media (max-width: 480px) {
  #projects {
    padding: 80px 20px 30px;
  }
}
</style>
