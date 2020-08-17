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
        <PrefecturesAutoComplete @selectedPrefectures="selectPrefectures"></PrefecturesAutoComplete>
        <AllergensAutoComplete @selectedAllergens="selectAllergens"></AllergensAutoComplete>
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
import AllergensAutoComplete from "./AllergensAutoComplete.vue";

export default {
  name: "Omiyage",
  components: {
    Item,
    PrefecturesAutoComplete,
    AllergensAutoComplete
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
    selectPrefectures(p) {
      this.prefectures = p;
    },
    selectAllergens(a) {
      this.allergens = a;
    },
    //TODO もう少しスマートに書けない？あまりにひどい
    //各お土産でアレルゲンをBooleanで表現しているのが問題なのだが、このデータ構造は、確実にアレルゲンを定義するという意味で変えない方が良い気がしている
    includesAllergesns(omiyage, allergens) {
      let a = omiyage.allergens;
      if (allergens.some(i => i.id == 1) && a.egg == true) return false;
      if (allergens.some(i => i.id == 2) && a.dairy == true) return false;
      if (allergens.some(i => i.id == 3) && a.wheat == true) return false;
      if (allergens.some(i => i.id == 4) && a.shrimp == true) return false;
      if (allergens.some(i => i.id == 5) && a.crab == true) return false;
      if (allergens.some(i => i.id == 6) && a.buckwheat == true) return false;
      if (allergens.some(i => i.id == 7) && a.peanut == true) return false;
      if (allergens.some(i => i.id == 8) && a.almond == true) return false;
      if (allergens.some(i => i.id == 9) && a.abalone == true) return false;
      if (allergens.some(i => i.id == 10) && a.squid == true) return false;
      if (allergens.some(i => i.id == 11) && a.salmonRoe == true) return false;
      if (allergens.some(i => i.id == 12) && a.orange == true) return false;
      if (allergens.some(i => i.id == 13) && a.kiwifruit == true) return false;
      if (allergens.some(i => i.id == 14) && a.beef == true) return false;
      if (allergens.some(i => i.id == 15) && a.walnut == true) return false;
      if (allergens.some(i => i.id == 16) && a.salmon == true) return false;
      if (allergens.some(i => i.id == 17) && a.mackerel == true) return false;
      if (allergens.some(i => i.id == 18) && a.soyBeans == true) return false;
      if (allergens.some(i => i.id == 19) && a.chicken == true) return false;
      if (allergens.some(i => i.id == 20) && a.banana == true) return false;
      if (allergens.some(i => i.id == 21) && a.pork == true) return false;
      if (allergens.some(i => i.id == 22) && a.matsutake == true) return false;
      if (allergens.some(i => i.id == 23) && a.peach == true) return false;
      if (allergens.some(i => i.id == 24) && a.yam == true) return false;
      if (allergens.some(i => i.id == 25) && a.apple == true) return false;
      if (allergens.some(i => i.id == 26) && a.gelatine == true) return false;
      if (allergens.some(i => i.id == 27) && a.cashewnuts == true) return false;
      if (allergens.some(i => i.id == 28) && a.sesame == true) return false;
      return true;
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
      ret =
        this.allergens.length == 0
          ? ret
          : ret.filter(o => this.includesAllergesns(o, this.allergens));

      return ret;
    }
  }
};
</script>
