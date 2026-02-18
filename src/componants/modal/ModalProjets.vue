<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title">Projets</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>
            <div class="projects-wrapper">
                <ProjetContainer
                    v-for="(item, key) in parameters"
                    :key="key"
                    :name="item.name"
                    :link="item.link"
                    :git="item.git"
                    :image="item.image"
                    :explanation="item.explanation">
                </ProjetContainer>
            </div>
        </div>
    </div> 
</template>
<script setup>
import ProjetContainer from '../content/projets/ProjetContainer.vue';
import { ref } from 'vue';
const emits = defineEmits(['close']);

function emitsClose() {
    emits('close');
}

const parameters = ref({
    boggle : {
        id: 1,
        name: "Boggle",
        link: "https://boggle.thomasgui.fr",
        git: "https://github.com/thomasguillet44/boggle",
        image: "/boggle-screen.png",
        explanation: "Jeu en ligne, vous avez 3 minutes pour trouver le plus de mots possibles"
    },
    osmSportRequest : {
        id: 2,
        name: "Sport Finder",
        link: "https://sportfinder.thomasgui.fr/login",
        git: "https://github.com/thomasguillet44/OSM-Sport-Request",
        image: "/sportfinder-screen.png",
        explanation: "Outil de recherche de terrain de sport aux alentours"
    },
    cirilGroup : {
        id: 3,
        name: "Simulation feu de forêt",
        link: "https://github.com/thomasguillet44/cirilGroup",
        git: "https://github.com/thomasguillet44/cirilGroup",
        image: "/simulationcirilgroup-screen.png",
        explanation: "Simulateur basique de feu forêt"
    }
})

</script>
<style>
.projects-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    justify-content: center;
}
</style>