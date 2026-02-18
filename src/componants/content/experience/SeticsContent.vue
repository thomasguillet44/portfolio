<template>
  <div class="setics-wrapper">
    <div class="tab-main-content">
        <div class="info-container">
          <p class="main-title">
            <a href="https://www.setics.com/fr/" target="_blank">
              {{$t('works.setics.job')}}
            </a>
          </p>
          <p>{{$t('works.setics.type')}}</p>
          <p class="location">Köln, Allemagne</p>
          <p class="subtitle">{{$t('works.setics.structure_subtitle')}}</p>
          <p> 
            {{$t('works.setics.structure_description')}}
          </p>
          <p class="subtitle">{{$t('works.setics.project_subtitle')}}
            <i class="icon-langage devicon-csharp-plain"></i>
          </p>
          <p>
            {{$t('works.setics.project_descrition_1')}} <strong>OSM</strong> {{$t('works.setics.project_descrition_2')}}
          </p>
        </div>

        <div class="date">Fev - Aout 2021</div>
    </div>
    <Map></Map>
  </div>

</template>
<script setup>
import Map from './Map.vue';
</script>
<style>
.setics-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>