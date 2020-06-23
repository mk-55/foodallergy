<!-- お土産一覧（Souvenirsだとニュアンスが違う気がしておみやげs） -->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">日本全国のお土産</h1>
        <p class="mb-3">主に小麦・卵アレルギーがあっても食べられるお土産の紹介</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col class="mb-4" cols="8">
        <Item
          v-for="item in omiyages"
          :key="item.name"
          :name="item.name"
          :brand="item.brand"
          :prefecture="item.prefecture"
          :summary="item.summary"
          :allergens="item.allergens"
          :note="item.note"
          :ingredient="item.ingredient"
          :url="item.url"
        ></Item>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "./Item";

export default {
  name: "Omiyage",
  components: {
    Item
  },
  methods: {
    fetchItems() {
      fetch(this.source)
        .then(stream => stream.json())
        .then(data => (this.omiyages = data))
        .catch(error => console.error(error));
    }
  },
  mounted() {
    this.fetchItems();
  },
  data: () => ({
    source: "@/json/omiyage.json",
    omiyages: Array
  })
};
</script>
