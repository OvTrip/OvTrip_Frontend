<template>
  <div class="logo">
    <a href="/" id="logo-label">OVTRIP</a>
    <img
      src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane.png"
      alt="Airplane"
      width="40"
      height="40"
      id="icon"
    />
  </div>
</template>

<script>
export default {
  name: "NavLogo",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
#logo-label {
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: black;
  font-weight: 900;
  font-size: 24px;
}
.logo {
  margin-top: 12px;
  height: 44px;
  line-height: 44px;
  display: flex;
}
</style>
