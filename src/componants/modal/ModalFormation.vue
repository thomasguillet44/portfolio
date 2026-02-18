<template>
    <div class="bloc-modale">
        <div class="overlay" @click="emitsClose"></div>
        <div class="modale">
            <div class="header-modal">
                <h2 class="modale-title">{{$t('nav.study')}}</h2>
                <i class="bi bi-x-square close-icon" @click="emitsClose"></i>
            </div>            
            <div class="tabs">                
                <button
                    class="tab"
                    :class="{ active: activeTab === 'livet' }"
                    @click="activeTab = 'livet'"
                >
                    {{$t('studies.highschool.name')}}
                </button>
                <button
                    class="tab"
                    :class="{ active: activeTab === 'telecom' }"
                    @click="activeTab = 'telecom'"
                >
                    {{$t('studies.engineering_school.name')}}
                </button>
            </div>              
            <div class="tab-content" v-if="activeTab === 'livet'">
                <LivetContent></LivetContent>
            </div>
            <div class="tab-content" v-if="activeTab === 'telecom'">
                <TelecomContent></TelecomContent>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';
import LivetContent from '../content/formation/LivetContent.vue';
import TelecomContent from '../content/formation/TelecomContent.vue';

const emits = defineEmits(['close']);

const activeTab = ref('telecom');

function emitsClose() {
    emits('close');
}
</script>