<template>
  <div id="div">
    <button v-on:click="isHidden = !isHidden">Character List Component</button>
    <div v-for="c in chars" :key="c.id">
      <Character v-if="!isHidden" v-bind:char="c" />
    </div>
  </div>
</template>

<script>
import Character from "./Character.vue";

export default {
  name: "CharacterList",
  data() {
    return { chars: this.getAllCharacters(), isHidden: true };
  },
  components: {
    Character
  },
  methods: {
    async getAllCharacters() {
      const response = await fetch("http://localhost:4000/character");
      const data = await response.json();

      console.log(data);

      this.chars = data;
    }
  }
};
</script>

<style scoped>
#div {
  border: 1px solid black;
}
</style>
