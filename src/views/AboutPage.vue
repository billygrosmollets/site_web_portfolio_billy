<template>
  <section id="about">
    <h3 class="section-title">Who I Am</h3>

    <QualityCard
      :is-main="true"
      description="As a software developer with expertise in computer systems, algorithms, and data structures, I have two years of experience in computer science and two years of studies in English. I am currently pursuing my training within the 42 network to obtain a Master's degree in IT Digital Architecture. Coding and solving problems through code are my passions, and I am enthusiastic about collaborating with talented programmers and expanding my knowledge even further! Currently, I am pursuing my passion for programming within the 42 network, working towards a Master's degree in IT Architecture."
    />

    <h2 id="qualities-title" class="section-title">My Qualities</h2>

    <div class="qualities-grid">
      <QualityCard
        title="Problem Solving"
        description="Approaching complex coding challenges with analytical thinking and perseverance."
        icon-type="code"
      />

      <QualityCard
        title="Continuous Learner"
        description="Passionate about keeping up with the latest technologies and best practices."
        icon-type="book"
      />

      <QualityCard
        title="Creative Thinker"
        description="Finding innovative solutions by thinking outside the box."
        icon-type="smile"
      />

      <QualityCard
        title="Teamwork Enthusiast"
        description="Thriving in collaborative environments, embracing shared problem-solving and continuous learning."
        icon-type="teamwork"
      />
    </div>
  </section>
</template>

<script>
import QualityCard from '../components/QualityCard.vue'

export default {
  name: 'AboutPage',
  components: {
    QualityCard,
  },
}
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 400px 50px;
}

.section-title {
  font-size: 2rem;
  margin: 40px 0;
  text-align: left;
  color: var(--text-color-primary);
  width: 100%;
}

.qualities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
}

/* Media queries pour responsive */
@media (max-width: 1200px) {
  #about {
    padding: 100px 200px 50px;
  }
}

@media (max-width: 768px) {
  #about {
    padding: 100px 50px 50px;
  }

  .qualities-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  #about {
    padding: 80px 20px 30px;
  }
}
</style>
