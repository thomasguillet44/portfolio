<template>
  <div class="tab-main-content">
      <div class="info-container">
        <p class="main-title">
          <a href="https://www.setics.com/fr/" target="_blank">Développeur logiciel</a>
        </p>
        <p class="location">Köln, Allemagne</p>
        <p class="subtitle">Présentation de la structure :</p>
        <p> 
          PME qui développe un logiciel STTAR, qui permet de prévisualiser un projet d'implémentation de 
          fibre optique.
        </p>
        <p class="subtitle">Projet :
          <i class="icon-langage devicon-csharp-plain"></i>
        </p>
        <p>
          Développement d'un feature de requête <strong>OSM</strong> sur le logiciel STTAR.
        </p>
      </div>

      <div class="date">Fev - Aout 2021</div>
  </div>
  <Map></Map>

</template>
<script setup>
import Map from './Map.vue';
</script>