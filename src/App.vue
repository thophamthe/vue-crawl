<template>
  <div id="app">
    <div class="center grid">
      <vs-row class="nav">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <NavBar />
        </vs-col>
      </vs-row>
      <vs-row class="side">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <SideBar />
        </vs-col>
        <vs-col
          class="content"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <router-view />
        </vs-col>
      </vs-row>
      <vs-row class="footer">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          100%
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1100px;
  max-width: 1920px;
}
.side {
  margin-top: 3rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.nav {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
<script>
import SideBar from "./views/SideBar.vue";
import NavBar from "./views/NavBar.vue";
export default {
  data: () => ({
    active: "guide",
  }),
  components: {
    SideBar,
    NavBar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css");
</style>
