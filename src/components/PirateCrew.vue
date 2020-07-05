<template>
  <div id="div">
    PirateCrew Component
    <br />
    Name: {{ crew.firstName }}
    <br />
    CrewCaptain: {{ crew.crewCaptain }}
    <br />
    Status: {{crew.status}}
  </div>
</template>

<script>
export default {
  name: "PirateCrew",
  props: ["crew"]
};
</script>

<style scoped>
#div {
  border: 1px solid blue;
}
</style>
