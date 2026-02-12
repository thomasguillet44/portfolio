<template>
    <div class="map-wrapper">
        <div id="map"></div>
    </div>  
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    var map = L.map('map').setView([50.9375, 6.9603], 13); // centré sur Cologne


    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map)

    // Ajouter un marqueur
    L.marker([50.9375, 6.9603]).addTo(map)
});
</script>
