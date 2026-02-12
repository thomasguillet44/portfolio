<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title">Expériences</h2>
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
            <div class="tab-content" v-if="activeTab === 'setics'">
                <SeticsContent></SeticsContent>
            </div>
            <div class="tab-content" v-if="activeTab === 'bnf'">
                <BnFContent></BnFContent>
            </div>
            <div class="tab-content" v-if="activeTab === 'mitsiomotu'">
                <MitsioContent></MitsioContent>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';
import BnFContent from '../content/experience/BnFContent.vue';
import SeticsContent from '../content/experience/SeticsContent.vue';
import MitsioContent from '../content/experience/MitsioContent.vue';

const emits = defineEmits(['close']);

const activeTab = ref('setics');

function emitsClose() {
    emits('close');
}
</script>
<style>
</style>