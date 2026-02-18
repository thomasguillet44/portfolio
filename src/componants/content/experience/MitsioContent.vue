<template>
  <div class="tab-main-content">
    <div class="info-container">
      <p class="main-title">
        <a href="https://www.mitsiomotu.com/" target="_blank">
          {{$t('works.mitsio.job')}}
        </a>
      </p>
      <p>{{$t('works.mitsio.type')}}</p>
      <p class="location">Lomé, Togo</p>
      <p class="subtitle">{{$t('works.mitsio.structure_subtitle')}}</p>
      <p> 
        {{$t('works.mitsio.structure_description')}}
      </p>
      <p class="subtitle">{{$t('works.mitsio.project_subtitle')}}      
        <i class="icon-langage devicon-vuejs-plain"></i>
        <i class="icon-langage devicon-nodejs-plain"></i>       
        <i class="icon-langage devicon-docker-plain"></i>        
        <i class="icon-langage devicon-githubactions-plain"></i>          
        <i class="icon-langage devicon-figma-plain"></i>       
      </p>
      <p>
        {{$t('works.mitsio.projet_description_1')}} <a class="link-inP" href="https://geodata.gouv.tg/"><strong> {{$t('works.mistio.geoportail')}}</strong></a>.
        {{$t('works.mitsio.projet_description_2')}}<strong>{{$t('works.mitsio.projet_description_strong')}}</strong>.
      </p>
      <p>
        <video controls src="/public/demo_plateforme_validation_v2.mp4" width="100%"></video>
      </p>
    </div>

    <div class="date">2024 - 2025</div>
  </div>

</template>