<template>
  <div id="app">
    <CharacterList />
    <br />
    <PirateCrewList />
  </div>
</template>

<script>
import CharacterList from "./components/CharacterList.vue";
import PirateCrewList from "./components/PirateCrewList.vue";

export default {
  name: "App",
  components: {
    CharacterList,
    PirateCrewList
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
