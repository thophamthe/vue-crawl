<template>
  <div class="formaction">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
        <vs-select
          class="select"
          v-model="province"
          :color="'#5b3cc4'"
          filter
          @change="selectProvince"
          label-placeholder="Provinces"
          placeholder="Provinces"
          required
        >
          <template #message-warn>
            <span v-if="provinceErr">Hãy chọn một thành phố</span>
          </template>
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
          @change="selectDistrict"
          :disabled="DisableSelectDistrict"
          label-placeholder="Districts"
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
          :disabled="DisableSelectWard"
          placeholder="Wards"
          label-placeholder="Wards"
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
          label-placeholder="Start"
        >
          <vs-option label="Dưới 1 triệu" value="1"> Dưới 1 triệu </vs-option>
          <vs-option label="1 triệu" value="2"> 1 triệu </vs-option>
          <vs-option label="2 triệu" value="3"> 2 triệu </vs-option>
          <vs-option label="3 triệu" value="4"> 3 triệu </vs-option>
          <vs-option label="5 triệu" value="5"> 5 triệu </vs-option>
          <vs-option label="trên 5 triệu" value="6"> trên 5 triệu </vs-option>
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
    DisableSelectDistrict: true,
    DisableSelectWard: true,
    provinceErr: false,
  }),
  methods: {
    submit() {
      console.log("ok");
    },
    selectProvince(value) {
      this.DisableSelectDistrict = false;
      this.DisableSelectWard = true;
      this.district = "";
      this.ward = "";

      console.log(value);
    },
    selectDistrict(value) {
      this.DisableSelectWard = false;
      this.ward = "";
      console.log(value);
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
