<template>
  <div id="div">
    <button v-on:click="isHidden = !isHidden">Add Character</button>
    <div v-if="!isHidden">
      <form @submit="addChar">
        <input type="text" v-model="firstName" name="firstName" placeholder="first name" />
        <br />
        <input type="text" v-model="lastName" name="lastName" placeholder="last name" />
        <br />
        <input type="text" v-model="age" name="age" placeholder="character's age" />
        <br />
        <input
          type="text"
          v-model="devilFruit"
          name="devilFruit"
          placeholder="DevilFruit user, true or false?"
        />
        <br />
        <input type="submit" value="Submit" class="btn" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCharacter",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
      devilFruit: "",
      isHidden: true
    };
  },
  methods: {
    addChar() {
      const newChar = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        devilFruit: this.devilFruit
      };
      this.$emit("add-char", newChar);
    }
  }
};
</script>

<style scoped>
#id {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>