<template>
  <div class="formaction">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
        <vs-select
          class="select"
          v-model="province"
          :color="'#5b3cc4'"
          filter
          placeholder="Provinces"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
        <vs-select
          class="select"
          v-model="district"
          :color="'#5b3cc4'"
          filter
          placeholder="Districts"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
        <vs-select
          class="select"
          v-model="ward"
          :color="'#5b3cc4'"
          filter
          placeholder="Wards"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
        <vs-select
          class="select"
          w="6"
          v-model="start"
          :color="'#5b3cc4'"
          filter
          placeholder="Start"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
        <vs-select
          class="select"
          w="6"
          v-model="end"
          :color="'#5b3cc4'"
          filter
          placeholder="End"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
        <vs-select
          class="select"
          w="6"
          v-model="source"
          :color="'#5b3cc4'"
          filter
          placeholder="Source"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
      </vs-col>
      <vs-col w="3">
        <vs-select
          class="select"
          w="6"
          v-model="sort"
          :color="'#5b3cc4'"
          filter
          placeholder="Sort"
        >
          <vs-option label="Vuesax" value="1">Vuesax</vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
        <vs-button :active="active == 1" gradient v-on:click="submit">
          Tìm kiếm
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "FormAction",
  props: {
    msg: String,
  },
  data: () => ({
    active: 0,
    province: "",
    district: "",
    ward: "",
    source: "",
    sort: "1",
    start: 0,
    end: 0,
  }),
  methods: {
    submit() {
      console.log("ok");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {
  margin-bottom: 1rem;
}
</style>
