<template>
  <div id="app">
    <Header />
    <AddCharacter v-on:add-char="addChar" />
    <CharacterList />
    <br />
    <PirateCrewList />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import AddCharacter from "./components/AddCharacter.vue";
import CharacterList from "./components/CharacterList.vue";
import PirateCrewList from "./components/PirateCrewList.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    AddCharacter,
    CharacterList,
    PirateCrewList,
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    addChar(newChar) {
      const { firstName, lastName, age, devilFruit } = newChar;
      axios
        .post("http://localhost:4000/character", {
          firstName,
          lastName,
          age,
          devilFruit,
        })
        .then((res) => (this.characters = [...this.characters, res.data]))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
