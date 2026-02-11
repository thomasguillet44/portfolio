<template>
    <ModalFormation 
      v-show="parameters.education.visible"
      @close="parameters.education.visible = false"
    ></ModalFormation>
    <ModaleExperiencesPro 
      v-show="parameters.work.visible"
      @close="parameters.work.visible = false"
    ></ModaleExperiencesPro>
    <ModalProjets 
      v-show="parameters.projects.visible"
      @close="parameters.projects.visible = false"
    ></ModalProjets>
    <div class="main-content">
      <ContainerElement
              v-for="(item, key) in parameters"
              :key="key"
              :id="item.id"
              :icon="item.icon"
              :title="item.title"
              @open="openModal"
          />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ContainerElement from '@/componants/ContainerElement.vue';
import ModalFormation from '@/componants/modal/ModalFormation.vue';
import ModalProjets from '@/componants/modal/ModalProjets.vue';
import ModaleExperiencesPro from '@/componants/modal/ModaleExperiencesPro.vue';

// TODO : a mettre dans une énum (a voir)
const parameters = ref({
  education: {
    id: 1,
    icon: "bi bi-backpack-fill",
    title: "Formation",
    visible: false
  },
  work: {
    id: 2,
    icon: "bi bi-briefcase-fill",
    title: "Expériences",
    visible: false
  },
  projects: {
    id: 3,
    icon: "bi bi-code-slash",
    title: "Projets",
    visible: false
  }
});

function openModal(data) {
  const id = data.id;
  // parcourt les parameters, cherche celui avec l'id correspondant, et change la valeur de visible
  for (const key in parameters.value) {
    parameters.value[key].visible = parameters.value[key].id === id;
  }
}

</script>
<style>
.main-content {
    display: flex;
    justify-content: center;
}
</style>