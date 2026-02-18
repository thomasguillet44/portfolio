<template>
    <ModalFormation 
      v-show="visibility.education"
      @close="visibility.education = false"
    ></ModalFormation>
    <ModaleExperiencesPro 
      v-show="visibility.work"
      @close="visibility.work = false"
    ></ModaleExperiencesPro>
    <ModalProjets 
      v-show="visibility.projects"
      @close="visibility.projects = false"
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
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import ContainerElement from '@/componants/ContainerElement.vue';
import ModalFormation from '@/componants/modal/ModalFormation.vue';
import ModalProjets from '@/componants/modal/ModalProjets.vue';
import ModaleExperiencesPro from '@/componants/modal/ModaleExperiencesPro.vue';

const { t } = useI18n()

// ref pour la visibilité des modales
const visibility = ref({
  education: false,
  work: false,
  projects: false
})

// computed pour la traduction
const parameters = computed(() => ({
  education: {
    id: 1,
    icon: "bi bi-backpack-fill",
    title: t('nav.study'),
    visible: visibility.value.education
  },
  work: {
    id: 2,
    icon: "bi bi-briefcase-fill",
    title: t('nav.experiences'),
    visible: visibility.value.work
  },
  projects: {
    id: 3,
    icon: "bi bi-code-slash",
    title: t('nav.projects'),
    visible: visibility.value.projects
  }
}))

function openModal(data) {
  const id = data.id
  for (const key in visibility.value) {
    visibility.value[key] = parameters.value[key].id === id
  }
}
</script>
<style>
.main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* affichage ordi */
@media (min-width: 769px) {
    .main-content {
        flex-direction: row;
    }
}
</style>