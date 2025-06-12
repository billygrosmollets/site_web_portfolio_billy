<template>
  <div class="project-item">
    <img :src="project.image" :alt="project.title" class="project-image" />
    <div class="project-content">
      <div class="project-header">
        <h2 class="project-title">{{ project.title }}</h2>
      </div>
      <p class="project-description">{{ project.description }}</p>

      <div class="tools-list">
        <div v-for="tool in project.technologies" :key="tool.name" class="tool-tag">
          <img :src="tool.logo" :alt="tool.name" />
          {{ tool.name }}
        </div>
      </div>

      <div class="project-links">
        <a
          v-for="link in project.links"
          :key="link.type"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
          class="project-link"
        >
          <svg
            v-if="link.type === 'website'"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <img v-else :src="link.icon" :alt="link.type" width="18" height="18" />
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.project-item {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 50px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
}

[data-theme='light'] .project-item {
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}

.project-item:last-child {
  border-bottom: none;
}

.project-image {
  width: 600px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

.project-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--text-color-primary);
}

.project-header {
  margin-bottom: 5px;
}

.project-title {
  font-size: 28px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Lexend', sans-serif;
}

.project-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
}

.tool-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
}

.tool-tag img {
  width: 26px;
  height: 26px;
}

.project-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: rgba(0, 17, 34, 0.5);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  border: 2px solid #fb9e24;
}

.project-link:hover {
  background: #fb9e24;
  box-shadow: 0 5px 15px rgb(255, 98, 0);
}

.project-link svg,
.project-link img {
  width: 18px;
  height: 18px;
}

[data-theme='light'] .tool-tag {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
}

[data-theme='light'] .project-link {
  background: rgba(240, 240, 240, 0.5);
  color: #333;
}

[data-theme='light'] .project-link:hover {
  background: #fb9e24;
  box-shadow: 0 5px 15px rgb(255, 98, 0);
}

/* Media queries */
@media (max-width: 768px) {
  .project-item {
    flex-direction: column;
    gap: 20px;
  }

  .project-image {
    width: 100%;
    height: 200px;
  }

  .project-title {
    font-size: 24px;
  }
}
</style>
