<template>
  <div class="home">
    <vs-row>
      <vs-col offset="2" vs-type="flex" vs-justify="center" vs-align="center">
        <FormAction />
      </vs-col>
    </vs-row>
    <vs-row>
      <Item
        v-for="(item, index) in items"
        data="index"
        v-bind:name="item.name"
        v-bind:img="item.img"
        v-bind:desc="item.desc"
        v-bind:from="item.from"
        v-bind:price="item.price"
        v-bind:size="item.size"
        :key="index"
      />
    </vs-row>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import FormAction from "../components/FormAction.vue";
export default {
  name: "HomeView",
  components: { Item, FormAction },
  data: () => ({
    items: [
      {
        name: "Home Loan Account",
        img: "http://placeimg.com/640/480/sports",
        desc: "Ut ut qui qui molestiae magni voluptas nulla quibusdam.",
        price: "485.00",
        size: 14878,
        from: "Provo",
        id: "1",
      },
      {
        name: "Money Market Account",
        img: "http://placeimg.com/640/480/sports",
        desc: "Commodi velit dolor totam unde nobis officia in.",
        price: "545.00",
        size: 35901,
        from: "Commerce City",
        id: "2",
      },
      {
        name: "Money Market Account",
        img: "http://placeimg.com/640/480/technics",
        desc: "earum dolor iure",
        price: "987.00",
        size: 24501,
        from: "Casper",
        id: "3",
      },
      {
        name: "Credit Card Account",
        img: "http://placeimg.com/640/480/nightlife",
        desc: "Iste nostrum pariatur.",
        price: "841.00",
        size: 21612,
        from: "Apple Valley",
        id: "4",
      },
      {
        name: "Investment Account",
        img: "http://placeimg.com/640/480/city",
        desc: "Aliquid dicta debitis tempora enim accusantium earum. Cum numquam rerum tempore est. Exercitationem illum ut aut. Perferendis perspiciatis eius esse eius vitae.\n \rExpedita suscipit repellendus at perferendis. Qui consequatur dolorem harum veritatis aut. Aut nisi sint omnis. Nihil iusto est eos ea.\n \rEt quia enim fugit ipsum doloribus in. Vel sit quia quas nihil id. Sunt eveniet aliquid eveniet. Reprehenderit omnis cupiditate qui vel non nulla.",
        price: "731.00",
        size: 14450,
        from: "Fort Lauderdale",
        id: "5",
      },
      {
        name: "Checking Account",
        img: "http://placeimg.com/640/480/sports",
        desc: "Perspiciatis et sed odit magnam. Nobis ab ea alias velit. Sint cumque aut unde. Aut reprehenderit dolorum fuga et. Excepturi laboriosam consectetur expedita quis fuga vel natus velit.",
        price: "492.00",
        size: 22209,
        from: "Waterbury",
        id: "6",
      },
      {
        name: "Home Loan Account",
        img: "http://placeimg.com/640/480/food",
        desc: "Sunt quia quia earum dolore qui provident qui. Ut sapiente qui debitis ut ullam laboriosam reiciendis dicta blanditiis. Possimus provident suscipit veniam est. Est natus qui ad repellendus quaerat ut rem. Non hic vitae.\n \rFacilis aliquam itaque sunt saepe voluptatum odit vel sunt dolores. Voluptates suscipit et recusandae nulla culpa modi iusto. Aut dolorum eos velit natus dolor.\n \rPraesentium neque at cupiditate recusandae fugit nihil. Nesciunt ipsam velit cum. Ut possimus ipsam vitae aut. Earum omnis aliquid voluptatem sint recusandae sed temporibus quo.",
        price: "464.00",
        size: 29448,
        from: "Deerfield Beach",
        id: "7",
      },
      {
        name: "Home Loan Account",
        img: "http://placeimg.com/640/480/abstract",
        desc: "Minima ea eum dolore suscipit nihil.\nNobis consequatur est dolorem explicabo.\nEt rerum autem autem natus.\nIste vel accusantium earum placeat reprehenderit rerum eos tempore.\nTempore possimus ut aut nihil.",
        price: "177.00",
        size: 91118,
        from: "North Miami Beach",
        id: "8",
      },
      {
        name: "Savings Account",
        img: "http://placeimg.com/640/480/city",
        desc: "Minus quibusdam voluptatum rerum corrupti fugiat omnis. Et nisi consequatur hic rem eum. Cupiditate eius at corporis. Optio laborum tempora praesentium. Eligendi quia molestiae eaque enim dolor. Ea officiis consectetur sint culpa quia nobis qui.",
        price: "807.00",
        size: 27345,
        from: "Scottsdale",
        id: "9",
      },
      {
        name: "Savings Account",
        img: "http://placeimg.com/640/480/fashion",
        desc: "Illum amet molestiae a.",
        price: "272.00",
        size: 17844,
        from: "Azusa",
        id: "10",
      },
      {
        name: "Investment Account",
        img: "http://placeimg.com/640/480/transport",
        desc: "Porro architecto aut.",
        price: "534.00",
        size: 14062,
        from: "Little Rock",
        id: "11",
      },
      {
        name: "Checking Account",
        img: "http://placeimg.com/640/480/nature",
        desc: "earum",
        price: "519.00",
        size: 48671,
        from: "Bell Gardens",
        id: "12",
      },
      {
        name: "Personal Loan Account",
        img: "http://placeimg.com/640/480/nightlife",
        desc: "quia aliquid facilis",
        price: "216.00",
        size: 15614,
        from: "Fort Worth",
        id: "13",
      },
      {
        name: "Investment Account",
        img: "http://placeimg.com/640/480/fashion",
        desc: "Officiis sapiente ut facilis molestiae iste cupiditate distinctio est ea.",
        price: "140.00",
        size: 91988,
        from: "Minot",
        id: "14",
      },
      {
        name: "Credit Card Account",
        img: "http://placeimg.com/640/480/transport",
        desc: "non tenetur quia",
        price: "107.00",
        size: 5375,
        from: "Murfreesboro",
        id: "15",
      },
      {
        name: "Money Market Account",
        img: "http://placeimg.com/640/480/nature",
        desc: "sit",
        price: "392.00",
        size: 30970,
        from: "Sheboygan",
        id: "16",
      },
      {
        name: "Savings Account",
        img: "http://placeimg.com/640/480/fashion",
        desc: "Ipsum fugit suscipit et laborum perferendis.\nRatione ut qui sunt aut ducimus ab autem.\nMinima dolore deserunt qui.\nCumque nemo fugit debitis ut excepturi alias et.",
        price: "673.00",
        size: 18870,
        from: "South Hill",
        id: "17",
      },
      {
        name: "Investment Account",
        img: "http://placeimg.com/640/480/transport",
        desc: "neque",
        price: "730.00",
        size: 51251,
        from: "Greenwood",
        id: "18",
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
  margin-top: 1rem;
  margin-left: 5rem;
}
</style>
