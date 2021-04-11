<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <!-- <div v-for="obj of cards" :key="obj.id">
      <div v-for="card in obj.descriptor.cards" :key="card.template"> 
        <p>{{card.question}} - {{card.answer}} </p>
      </div>
    </div> -->
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>

</style>
