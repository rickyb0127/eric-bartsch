<template>
  <nav id="nav" class="bg-transparent drop-shadow-lg sticky top-0">
    <div class="container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-start">
          <div class="flex flex-shrink-0 items-center">
            <div class="text-white cursor-pointer" @click="toggleScrolledSection('app')">EB</div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="flex flex-shrink-0 items-center">
            <div class="mr-10 text-white cursor-pointer" @click="toggleScrolledSection('projects')">Projects</div>
            <div class="mr-10 text-white cursor-pointer" @click="toggleScrolledSection('experience')">Experience</div>
            <div class="text-white cursor-pointer" @click="toggleScrolledSection('about')">About</div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import debounce from 'lodash.debounce';

const props = defineProps({
  scrolledSection: String
});

onMounted(() => {
  window.addEventListener('scroll', handleDebouncedScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleDebouncedScroll);
});

const emit = defineEmits(['setScrolledSection']);

function toggleScrolledSection(selectedSection) {
  emit('setScrolledSection', selectedSection);
};

const handleDebouncedScroll = debounce(handleScroll, 10);

function handleScroll(e) {
  const nav = document.getElementById("nav");

  if(window.scrollY > 25) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-bg-nav");
  } else {
    nav.classList.remove("bg-bg-nav");
    nav.classList.add("bg-transparent");
  }
};
</script>