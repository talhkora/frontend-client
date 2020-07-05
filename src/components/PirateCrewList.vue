<template>
  <div id="div">
    <button v-on:click="isHidden = !isHidden">PirateCrew List Component</button>
    <div v-for="p in crews" :key="p.id">
      <PirateCrew v-if="!isHidden" v-bind:crew="p" />
    </div>
  </div>
</template>

<script>
import PirateCrew from "./PirateCrew.vue";

export default {
  name: "PirateCrewList",
  data() {
    return { crews: this.getAllCharacters(), isHidden: true };
  },
  components: {
    PirateCrew
  },
  methods: {
    async getAllCharacters() {
      const response = await fetch("http://localhost:4000/piratecrew");
      const data = await response.json();

      console.log(data);

      this.crews = data;
    }
  }
};
</script>

<style scoped>
#div {
  border: 1px solid black;
}
</style>
