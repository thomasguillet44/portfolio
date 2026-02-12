<template>
    <div class="name-owner">Thomas Guillet</div>
    <div class="work-occupation">Développeur fullstack Paris</div>
    <div class="container-techno">
        <TechnologiesContainer
            v-for="(item, key) in parameters"
            :key="key"
            :icon="item.icon"
            :title="item.title"
        />
    </div>
    
</template>
<script setup>
import { ref } from 'vue';
import TechnologiesContainer from './TechnologiesContainer.vue';

const parameters = ref({
  vue: {
    icon: "devicon-vuejs-plain",
    title: "Vue.js"
  },
  javascript: {
    icon: "devicon-javascript-plain",
    title: "Javascript"
  },
  css: {
    icon: "devicon-css3-plain",
    title: "CSS3"
  },
  docker: {
    icon: "devicon-docker-plain",
    title: "Docker"
  },
  html: {
    icon: "devicon-html5-plain",
    title: "HTML5"
  },
  java: {
    icon: "devicon-java-plain",
    title: "Java 17"
  },
  spring: {
    icon: "devicon-spring-original",
    title: "Spring"
  }
});
</script>
<style scoped>
.name-owner {
    font-size: 6vh;
}

.work-occupation {
    font-size: 3vh;
}

.container-techno {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 5px;
}
</style>