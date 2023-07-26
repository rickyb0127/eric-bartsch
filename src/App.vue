<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-bg-primary">
    <NavBar :scrolled-section="scrolledSection" @setScrolledSection="(section) => scrolledSection = section" />
    <div class="container divide-y">
      <IntroView />
      <ProjectsView id="projects" />
      <ExperienceView id="experience" />
      <AboutView id="about" />
      <FooterView id="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import NavBar from './components/NavBar.vue';
import IntroView from './components/IntroView.vue';
import ProjectsView from './components/ProjectsView.vue';
import ExperienceView from './components/ExperienceView.vue';
import AboutView from './components/AboutView.vue';
import FooterView from './components/FooterView.vue';

const scrolledSection = ref(null);

watch(scrolledSection, (newScrolledSection) => {
  if(newScrolledSection) {
    scrollToSection(newScrolledSection);
  }
});

function scrollToSection(section) {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: "smooth" });
  scrolledSection.value = null;
};
</script>

<style scoped>
</style>