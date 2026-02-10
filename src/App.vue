<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    
    <template #main>
      <Main></Main>
    </template>

    <template #footer>
      <Footer></Footer>
    </template>     
  </Layout>
</template>
<script setup>
import Layout from './views/Layout.vue';
import Header from './componants/Header.vue';
import Footer from './componants/Footer.vue';
import Main from './views/Main.vue';
</script>


<style scoped></style>
