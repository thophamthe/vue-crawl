<template>
  <div class="navbar">
    <vs-navbar square center-collapsed v-model="active">
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <vs-navbar-item to="/" :active="active == 'home'" id="home">
        Home
      </vs-navbar-item>
      <vs-navbar-item to="document" :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
  }),
};
</script>
<style scoped>
.active {
  color: #5b3cc4;
}
</style>
