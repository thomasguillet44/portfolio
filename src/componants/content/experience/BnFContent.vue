<template>
  <div class="tab-main-content">
    <div class="info-container">
      <p class="main-title">
        <a href="https://www.bnf.fr/fr" target="_blank">
          {{$t('works.bnf.job')}}
        </a>
      </p> 
      <p>{{$t('works.bnf.type')}}</p>
      <p class="location">Paris, France</p> 
      <p class="subtitle">{{$t('works.bnf.structure_subtitle')}}</p>
      <p> 
          {{$t('works.bnf.structure_description')}}
      </p>
      <p class="subtitle">{{$t('works.bnf.project_subtitle')}}
        <i class="icon-langage devicon-java-plain"></i> 
        <i class="icon-langage devicon-spring-original"></i> 
        <i class="icon-langage devicon-javascript-plain"></i> 
        <i class="icon-langage devicon-html5-plain"></i>
        <i class="icon-langage devicon-css3-plain"></i>
      </p>
      <p>
        {{$t('works.bnf.projet_description_1')}} <a class="link-inP" href="https://www.bnf.fr/fr/suivre-les-evolutions-des-donnees" target="_blank"><strong>Noemi</strong></a>, 
        {{$t('works.bnf.projet_description_2')}}
        <ul class="liste">
          <li>{{$t('works.bnf.projet_subdescription_1')}}<strong>g4</strong>{{$t('works.bnf.projet_subdescription_2')}}<strong>Solr</strong></li>
          <li>{{$t('works.bnf.projet_subdescription_3')}}</li>
        </ul>
      </p>
    </div>
    <div class="date">2021 - 2024</div>
  </div>
</template>
<style>
.link-inP:hover {
  display: inline-block;
}
.link-inP:hover {
  transform: translate(-1px, -1px);
}
</style>