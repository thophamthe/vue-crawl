<template>
  <div class="home">
    <Item
      v-for="(item, index) in items"
      data="index"
      v-bind:name="item.name"
      v-bind:img="item.img"
      v-bind:desc="item.desc"
      :key="index"
    />
  </div>
</template>

<script>
import Item from "../components/Item.vue";
export default {
  name: "HomeView",
  components: { Item },
  data: () => ({
    items: [
      {
        name: "Manchester",
        img: "http://placeimg.com/640/480",
        desc: "Veniam eos qui qui ut eligendi facilis non harum quia.",
        id: "1",
      },
      {
        name: "Mansfield",
        img: "http://placeimg.com/640/480",
        desc: "Voluptas et ab rerum fugiat.\nQuam porro quaerat perspiciatis ut animi molestiae ea.\nQuisquam omnis vel dolor vero sed doloremque doloribus omnis.",
        id: "2",
      },
      {
        name: "Trenton",
        img: "http://placeimg.com/640/480",
        desc: "Sint corporis adipisci optio porro est dolores debitis.",
        id: "3",
      },
      {
        name: "Waterloo",
        img: "http://placeimg.com/640/480",
        desc: "iure possimus dolorem",
        id: "4",
      },
      {
        name: "University",
        img: "http://placeimg.com/640/480",
        desc: "Minus numquam voluptatem tempore delectus exercitationem et rerum quidem excepturi. Eum aut occaecati minus ipsam earum.",
        id: "5",
      },
      {
        name: "Miami",
        img: "http://placeimg.com/640/480",
        desc: "eos et sint",
        id: "6",
      },
      {
        name: "Guaynabo",
        img: "http://placeimg.com/640/480",
        desc: "Rerum tempore ad necessitatibus ipsam odio omnis. Sed accusamus ex. Repudiandae libero corporis rem fugit occaecati vel ut rerum tenetur. Modi quibusdam blanditiis alias. Aut laborum enim alias. Ut molestiae provident temporibus omnis.",
        id: "7",
      },
      {
        name: "Sioux City",
        img: "http://placeimg.com/640/480",
        desc: "Nihil quia quo ipsa laborum aut non a commodi. Distinctio error excepturi. Dolore laboriosam dolorem et sed deserunt adipisci et quisquam. Alias ut ullam.\n \rArchitecto corrupti quaerat explicabo doloribus sunt ut quia occaecati ut. Reprehenderit est voluptatem voluptatem eveniet. Officia voluptas minus. Ut quo dolor sunt porro. Vero dolorem repudiandae. Doloribus et sequi totam omnis iure corporis.\n \rEum aut dolor. Totam ut illum magnam. Officiis praesentium eum ut dolores harum quisquam sapiente. Aut non dicta. Et sit distinctio dicta.",
        id: "8",
      },
      {
        name: "Knoxville",
        img: "http://placeimg.com/640/480",
        desc: "Quidem quibusdam est.",
        id: "9",
      },
      {
        name: "Killeen",
        img: "http://placeimg.com/640/480",
        desc: "Voluptas et non.",
        id: "10",
      },
      {
        name: "Fort Lauderdale",
        img: "http://placeimg.com/640/480",
        desc: "repellendus",
        id: "11",
      },
      {
        name: "Chino Hills",
        img: "http://placeimg.com/640/480",
        desc: "Nihil aut ea ex officia aut. Non odio et voluptatem qui eligendi facere omnis sed. Reprehenderit mollitia et est amet nemo accusantium placeat. Culpa inventore sit. Ducimus nihil quasi voluptas aut.",
        id: "12",
      },
      {
        name: "Bend",
        img: "http://placeimg.com/640/480",
        desc: "ex",
        id: "13",
      },
      {
        name: "New Rochelle",
        img: "http://placeimg.com/640/480",
        desc: "Voluptatem exercitationem qui voluptas iure magnam saepe cum mollitia.\nArchitecto expedita id omnis et.\nOfficiis qui nihil alias velit veritatis id iusto.\nReprehenderit quia ipsa in ex dolorem voluptatem.\nDolorum odit mollitia asperiores commodi.",
        id: "14",
      },
      {
        name: "West Des Moines",
        img: "http://placeimg.com/640/480",
        desc: "Aut maxime ut vel eligendi.",
        id: "15",
      },
      {
        name: "Santa Fe",
        img: "http://placeimg.com/640/480",
        desc: "ea atque molestiae",
        id: "16",
      },
      {
        name: "Montebello",
        img: "http://placeimg.com/640/480",
        desc: "animi et architecto",
        id: "17",
      },
      {
        name: "Cerritos",
        img: "http://placeimg.com/640/480",
        desc: "Tempora qui architecto soluta sunt consequatur velit est voluptates velit. Aut natus fugit est tempora inventore. Quasi rerum assumenda esse incidunt architecto. Optio veniam eum quae.\n \rQuam velit aspernatur consequatur illum explicabo non consequuntur. Qui nobis qui. Et eum et et et. Nemo mollitia recusandae et autem. Ad illum qui quidem doloremque quis sit quasi quis. Ipsa nisi libero.\n \rVoluptas alias neque voluptatem quod dolores sit. Vel voluptatum quae et sed quia sunt natus. Ut voluptatem dolorum quis. Quidem vel ipsum suscipit beatae sit. Et et tenetur. Officia architecto mollitia.",
        id: "18",
      },
      {
        name: "Chesapeake",
        img: "http://placeimg.com/640/480",
        desc: "Illo ducimus eaque quos dolorem fuga placeat tempora perspiciatis.",
        id: "19",
      },
      {
        name: "Elk Grove",
        img: "http://placeimg.com/640/480",
        desc: "Voluptas delectus sint. Voluptatem reiciendis possimus neque qui ipsum. Odio tenetur rerum libero quaerat ipsam.\n \rVoluptatem quae magni sapiente. Totam enim eos recusandae ut sequi nostrum occaecati. Error explicabo architecto eius in voluptates. Dolor sint eligendi sed. Ipsam repellendus molestias ad sit.\n \rQui et quam molestiae eos magnam earum. Iste et atque commodi rerum. Voluptatem iusto aut quos autem.",
        id: "20",
      },
    ],
  }),
};
</script>
<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 3rem;
  margin-left: 5rem;
}
</style>
