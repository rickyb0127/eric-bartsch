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
          <a v-if="project.url" target="_blank" :href="`${project.url}`">
            <img :src="`${project.imgUrl}`"/>
          </a>
          <img v-else :src="`${project.imgUrl}`"/>
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
    name: "Coding Practice",
    summary: "Tool created to practice algorithm problems, featuring an interactive terminal utilizing codemirror and React",
    imgUrl: new URL("../assets/coding-practice.png", import.meta.url),
    url: "https://monumental-blancmange-86349e.netlify.app/"
  },
  {
    id: 2,
    name: "Korean Vocab",
    summary: "Flash card-like app to learn the most common words in the Korean language. Features Korean-English toggle and speech for Korean",
    imgUrl: new URL("../assets/korean-vocab.png", import.meta.url),
    url: "https://soft-kulfi-47eb0f.netlify.app/"
  },
  {
    id: 3,
    name: "Netflix Clone",
    summary: "Netflix clone using themoviedb as an api source for top movies and tv shows, built using Vue",
    imgUrl: new URL("../assets/netflix.png", import.meta.url),
    url: "https://comfy-tiramisu-474cf4.netlify.app/"
  },
  {
    id: 4,
    name: "Hangul Practice",
    summary: "Tool to practice Hangul (Korean writing) utilizing Web Speech API to access text to speech, HTML Canvas to capture user drawn image, and Google Cloud Vision API as an OCR to compare the user drawn image to the correct Korean text",
    imgUrl: new URL("../assets/hangul-practice.png", import.meta.url),
    url: null
  }
]);
</script>