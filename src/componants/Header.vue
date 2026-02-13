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
    icon: "devicon-vuejs-plain colored",
    title: "Vue.js"
  },
  javascript: {
    icon: "devicon-javascript-plain colored",
    title: "Javascript"
  },  
  java: {
    icon: "devicon-java-plain colored",
    title: "Java 17"
  }, 
  css: {
    icon: "devicon-css3-plain colored",
    title: "CSS3"
  },
  html: {
    icon: "devicon-html5-plain colored",
    title: "HTML5"
  },
  docker: {
    icon: "devicon-docker-plain colored",
    title: "Docker"
  },
  spring: {
    icon: "devicon-spring-original colored",
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
    grid-template-columns: repeat(7, 1fr);
    margin-top: 5px;
}
</style>