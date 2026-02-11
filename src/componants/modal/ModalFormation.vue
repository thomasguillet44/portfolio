<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title Playfair Display">Formation</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>            
            <div class="tabs">                
                <button
                    class="tab"
                    :class="{ active: activeTab === 'livet' }"
                    @click="activeTab = 'livet'"
                >
                    Lycée Eugène Livet
                </button>
                <button
                    class="tab"
                    :class="{ active: activeTab === 'telecom' }"
                    @click="activeTab = 'telecom'"
                >
                    Télécom SudParis
                </button>
            </div>
            <div class="tab-content">                
                <div v-if="activeTab === 'livet'">
                    <p>Contenu du Lycée Eugène Livet</p>
                </div>
                <div v-if="activeTab === 'telecom'">
                    <p>Contenu de Télécom SudParis</p>
                </div>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';

const emits = defineEmits(['close']);

const activeTab = ref('livet');

function emitsClose() {
    emits('close');
}
</script>