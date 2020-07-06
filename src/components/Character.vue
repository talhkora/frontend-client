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
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>

