<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title Playfair Display">Expériences</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>
            <div class="tabs">
                <button
                    class="tab"
                    :class="{ active: activeTab === 'setics' }"
                    @click="activeTab = 'setics'"
                >
                    Setics
                </button>
                <button
                    class="tab"
                    :class="{ active: activeTab === 'bnf' }"
                    @click="activeTab = 'bnf'"
                >
                    BnF
                </button>
                <button
                    class="tab"
                    :class="{ active: activeTab === 'mitsiomotu' }"
                    @click="activeTab = 'mitsiomotu'"
                >
                    MitsioMotu
                </button>
            </div>
            <div class="tab-content">
                <div v-if="activeTab === 'setics'">
                    <p>Contenu de Setics</p>
                </div>
                <div v-if="activeTab === 'bnf'">
                    <p>Contenu de BnF</p>
                </div>
                <div v-if="activeTab === 'mitsiomotu'">
                    <p>Contenu de MitsioMotu</p>
                </div>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';

const emits = defineEmits(['close']);

const activeTab = ref('setics');

function emitsClose() {
    emits('close');
}
</script>
<style>
</style>