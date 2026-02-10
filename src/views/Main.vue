<template>
    <ContainerElement
        v-for="(item, key) in parameters"
        :key="key"
        :icon="item.icon"
        :title="item.title"
    />
</template>
<script setup>
import ContainerElement from '@/componants/ContainerElement.vue';

// TODO : a mettre dans une énum
const parameters = {
  education: {
    icon: "bi bi-backpack-fill",
    title: "Formation"
  },
  work: {
    icon: "bi bi-briefcase-fill",
    title: "Expériences"
  },
  projects: {
    icon: "bi bi-code-slash",
    title: "Projets"
  }
};
</script>