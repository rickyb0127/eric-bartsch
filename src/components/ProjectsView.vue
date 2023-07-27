<template>
  <div class="flex flex-col h-full py-20">
    <h2 class="text-4xl font-bold mb-6">Projects</h2>
    <div class="mb-5" v-for="project in projects" :key="project.id">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-50">
        <div>
          <div class="text-3xl">{{ project.name }}</div>
          <div>{{ project.summary }}</div>
        </div>
        <div>
          <img :src="`${project.imgUrl}`"/>
          <!-- <div class="flex flex-row flex-wrap">
            <div class="flex mx-2 my-2 bg-bg-tag text-white rounded" v-for="tag in project.tags">
              <div class="px-1">
                {{ tag }}
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: "Hangul Practice",
    summary: "Tool to practice Hangul (Korean writing) utilizing Web Speech API to access text to speech, HTML Canvas to capture user drawn image, and Google Cloud Vision API as an OCR to compare the user drawn image to the correct Korean text",
    imgUrl: new URL("../assets/hangul-practice.png", import.meta.url)
  },
  {
    id: 2,
    name: "Netflix Clone",
    summary: "Netflix clone using themoviedb as an api source for top movies and tv shows, built using Vue",
    imgUrl: new URL("../assets/netflix.png", import.meta.url)
  },
  {
    id: 3,
    name: "Coding Practice",
    summary: "Tool created to practice algorithm problems, featuring an interactive terminal utilizing codemirror and Vue",
    imgUrl: new URL("../assets/coding-practice.png", import.meta.url)
  },
]);
</script>