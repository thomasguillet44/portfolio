<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title">Projets</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>
            <div class="projects-wrapper">
                <ProjetContainer></ProjetContainer>
            </div>
        </div>
    </div> 
</template>
<script setup>
import ProjetContainer from '../content/projets/ProjetContainer.vue';
const emits = defineEmits(['close']);

function emitsClose() {
    emits('close');
}
</script>
<style>
.projects-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
}
</style>