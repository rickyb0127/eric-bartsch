<template>
  <div class="flex flex-col h-full py-20">
    <h2 class="text-4xl font-bold mb-6">Experience</h2>
    <div class="mb-5" v-for="experience in experiences" :key="experience.id">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-50">
        <div>
          <div class="text-3xl">{{ experience.company }}</div>
          <div>{{ experience.title }}</div>
          <div>{{ experience.dates }}</div>
        </div>
        <div>
          <div v-html="experience.summary"></div>
          <div class="flex flex-row flex-wrap">
            <div class="flex mx-2 my-2 bg-bg-tag text-white rounded" v-for="tag in experience.tags">
              <div class="px-1">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-10">Full resume can be downloaded <a :href="`${pdf}`" download class="cursor-pointer text-blue-800">here</a></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const pdf = new URL("../assets/Eric Bartsch - Resume.pdf", import.meta.url);

const experiences = ref([
  {
    id: 1,
    company: "DMC Global",
    title: "Full Stack Developer",
    dates: "August 2022 - April 2023",
    tags: [
      "React",
      "SalesForce",
      "jsForce",
      "AirTable",
      "Ionic Framework"
    ],
    summary: "Worked to port existing quoting tool built in vbscript into a modern web application using React as a frontend framework"
  },
  {
    id: 2,
    company: "Nerkle",
    title: "Software Systems Engineer II",
    dates: "January 2019 - August 2022",
    tags: [
      "Vue",
      "Vuex", 
      "TypeScript", 
      "AWS Lambda", 
      "GraphQL", 
      "Vue Material", 
      "Sequelize",
      "iOS storyboard", 
      "Swift", 
      "Apollo"
    ],
    summary: "Worked remotely with a small team to develop applications for stakeholders, using various technologies"
  },
  {
    id: 3,
    company: "American Express",
    title: "Software Engineer III",
    dates: "July 2015 - January 2017",
    tags: [
      "JavaScript",
      "React",
      "Java", 
      "Selenium", 
      "Jenkins"
    ],
    summary: "Worked on automated testing framework utilizing Selenium's interface, implemented to test and deploy applications within GCAP division"
  }
]);
</script>