<template>
  <div class="hello">
    <vs-button
      flat
      success
      icon
      @click="openNotification('top-right', 'success')"
    >
      <i class="bx bx-border-radius t-r"></i>
    </vs-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    openNotification(position = null, color) {
      return this.$vs.notification({
        color,
        position,
        title: "Documentation Vuesax 4.0+",
        text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
