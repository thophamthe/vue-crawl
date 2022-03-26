<template>
  <div class="item" vs-type="flex" w="12">
    <vs-row>
      <vs-col w="4">
        <img class="image" :src="img" alt="" />
      </vs-col>
      <vs-col
        class="content"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="8"
      >
        <vs-row
          ><h3>{{ name }}</h3>
        </vs-row>
        <vs-row
          ><p>{{ desc }}</p>
        </vs-row>
        <vs-row class="size">
          <span class="material-icons md-18"> straighten </span>
          <p>{{ size }}</p>
        </vs-row>
        <vs-row class="price"
          ><span class="material-icons md-24"> sell </span>
          <p>{{ price }}</p>
        </vs-row>
        <vs-row class="from"
          ><span class="material-icons md-18">home</span>{{ from }}
          <span> </span>
          <span class="material-icons md-18"> schedule </span> 2 giờ trước
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["name", "img", "desc", "size", "price", "from"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 45%;
  margin: 1rem 0.5rem;
  padding: 0 0.5rem 0 0;
  box-shadow: 0 3px 10px rgb(36, 33, 69, 0.2);
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
  object-fit: cover;
  border-radius: 20px;
  float: left;
}
h3 {
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content {
  position: absolute;
  left: 35%;
}
.content p {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.from {
  position: absolute;
  top: 100%;
}
.from span {
  margin-right: 0.5rem;
}
.size {
  color: rgb(23, 201, 100);
}
.price {
  color: rgb(242, 19, 93);
}
.price p {
  font-size: 1.5rem;
}
.from {
  color: rgb(255, 130, 0);
}
@media screen and (min-width: 1700px) {
  .item {
    width: 32%;
  }
}
</style>
