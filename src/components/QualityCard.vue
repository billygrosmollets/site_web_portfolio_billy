<template>
  <div class="quality-card" :class="{ main: isMain }">
    <div v-if="!isMain" class="header-container">
      <div class="icon-container">
        <svg
          class="quality-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="iconPath" />
          <path v-if="iconPath2" :d="iconPath2" />
          <circle v-if="iconCircle" :cx="iconCircle.cx" :cy="iconCircle.cy" :r="iconCircle.r" />
          <line
            v-for="line in iconLines"
            :key="line.id"
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
          />
        </svg>
      </div>
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'QualityCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    isMain: {
      type: Boolean,
      default: false,
    },
    iconType: {
      type: String,
      default: 'code',
    },
  },
  computed: {
    iconPath() {
      const icons = {
        code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
        book: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z',
        smile: '',
        teamwork: 'M12 17l1.5-2.5M12 17l-1.5-2.5M12 17V4',
      }
      return icons[this.iconType] || icons.code
    },
    iconPath2() {
      const secondPaths = {
        book: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
        teamwork: 'M16 21H8',
      }
      return secondPaths[this.iconType] || null
    },
    iconCircle() {
      if (this.iconType === 'smile') {
        return { cx: 12, cy: 12, r: 10 }
      }
      return null
    },
    iconLines() {
      const lines = {
        smile: [
          { id: 1, x1: 8, y1: 14, x2: 16, y2: 14 },
          { id: 2, x1: 9, y1: 9, x2: 9.01, y2: 9 },
          { id: 3, x1: 15, y1: 9, x2: 15.01, y2: 9 },
        ],
        teamwork: [
          { id: 1, x1: 21, y1: 12, x2: 18, y2: 13 },
          { id: 2, x1: 3, y1: 12, x2: 6, y2: 13 },
        ],
      }
      return lines[this.iconType] || []
    },
  },
}
</script>

<style scoped>
.quality-card {
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.quality-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.quality-card.main {
  grid-column: 1 / span 2;
  grid-row: 1;
  background-color: var(--card-background);
}

.quality-card.main .card-description {
  font-size: 1.2rem;
}

.header-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.icon-container {
  background-color: var(--icon-background);
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.quality-icon {
  stroke: var(--accent-color);
}

.card-title {
  font-size: 1.5rem;
  color: var(--text-color-primary);
  margin: 0;
}

.card-description {
  color: var(--text-color-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}
</style>
