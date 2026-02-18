<template>
    <div class="name-owner">Thomas Guillet</div>
    <div class="work-occupation">{{$t('subtitle.job')}}</div>
    <div class="container-techno">
        <TechnologiesContainer
            v-for="(item, key) in parameters"
            :key="key"
            :icon="item.icon"
            :title="item.title"
        />
    </div>
    <button class="language-button" @click="toggleLang">
      <i class="bi bi-arrow-return-right"></i>
      <span class="label">{{ locale === 'fr' ? 'English' : 'Français' }}</span>
    </button>
    
</template>
<script setup>
import { ref } from 'vue';
import TechnologiesContainer from './TechnologiesContainer.vue';
import { useI18n } from 'vue-i18n'

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

const { locale } = useI18n(); //on récupère directement la variable locale, pour éviter de le faire en deux lignes

function toggleLang() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr';
};
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

.language-button {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: #121212;
  color: #F5F5F5;
  border: 2px solid #F5F5F5;
  border-radius: 3px;
}

.language-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0 white;
}
</style>