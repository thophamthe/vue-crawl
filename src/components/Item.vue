<template>
  <div class="item" vs-type="flex" w="12">
    <vs-row>
      <vs-col w="4">
        <img class="image" :src="img" alt="" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-row class="content"
          ><h3>{{ name }}</h3>
        </vs-row>
        <vs-row
          ><p>{{ desc }}</p>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["name", "img", "desc"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 45%;
  margin: 1rem 0.5rem;
  padding: 0 0.5rem 0 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 20px;
  max-height: 12rem;
}
.item:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  transform: scale(1.02);
  transition-duration: 0.25s;
}
.cart {
  width: 100%;
}
.content {
  padding: 1rem;
}
.image {
  width: 12rem;
  height: 12rem;
  border-radius: 20px;
  float: left;
}
h3 {
  font-size: 1.25rem;
}
.content p {
  font-size: 1rem;
}
@media screen and (min-width: 1920px) {
  .item {
    width: 32%;
  }
}
</style>
