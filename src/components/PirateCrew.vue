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
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>
