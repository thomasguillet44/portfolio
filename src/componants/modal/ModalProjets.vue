<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title Playfair Display">Projets</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>
        </div>
    </div> 
</template>
<script setup>
const emits = defineEmits(['close']);

function emitsClose() {
    emits('close');
}
</script>
<style>
</style>