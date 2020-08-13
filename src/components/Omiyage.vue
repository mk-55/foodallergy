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
      <v-col></v-col>
      <v-col class="mb-4" lg="9" md="9" sm="9" cols="12">
        <PrefecturesAutoComplete @selectedPrefectures="selectedPrefectures"></PrefecturesAutoComplete>
        <Item
          v-for="item in displayedOmiyages"
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
      <v-col></v-col>
    </v-row>

    <!-- TODO もう少しまともなエラー処理-->
    <v-alert
      v-if="this.error"
      border="left"
      colored-border
      type="error"
      elevation="2"
    >データの取得に失敗しました。</v-alert>
  </v-container>
</template>

<script>
import Item from "./Item";
import PrefecturesAutoComplete from "./PrefecturesAutoComplete.vue";

export default {
  name: "Omiyage",
  components: {
    Item,
    PrefecturesAutoComplete
  },
  methods: {
    fetchItems() {
      fetch(this.source)
        .then(stream => stream.json())
        .then(data => (this.omiyages = data))
        .catch(error => {
          console.error(error);
          this.error = true;
        });
    },
    selectedPrefectures(p) {
      this.prefectures = p;
    }
  },
  mounted() {
    this.fetchItems();
  },
  data: () => ({
    source: "/json/omiyages.json",
    omiyages: [],
    prefectures: [],
    allergens: [],
    error: false
  }),
  computed: {
    //画面表示するお土産を返す
    displayedOmiyages() {
      let ret = this.omiyages;
      //filter by Prefectures
      ret =
        this.prefectures.length == 0
          ? ret
          : ret.filter(o => this.prefectures.some(p => p.id == o.prefecture));
      // filter by Allergens
      return ret;
    }
  }
};
</script>
