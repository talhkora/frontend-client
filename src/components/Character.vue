<template>
  <div id="div">
    Character Component
    <br />
    Name: {{ char.firstName }}
    <br />
    Age : {{ char.age }}
    <br />
    DevilFruit: {{char.devilFruit}}
  </div>
</template>

<script>
export default {
  name: "Character",
  props: ["char"]
};
</script>

<style scoped>
#div {
  border: 1px solid blue;
}
</style>
