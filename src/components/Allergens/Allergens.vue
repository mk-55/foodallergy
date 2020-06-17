<template>
  <v-container>
    <v-row>
      <h6>含まれるアレルゲン(特定原材料およびそれに準ずるもの)</h6>
    </v-row>
    <v-row>
      <!-- 特定原材料 -->
      <Egg :included="this.egg"></Egg>
      <Dairy :included="this.dairy"></Dairy>
      <Wheat :included="this.wheat"></Wheat>
      <Shrimp :included="this.shrimp"></Shrimp>
      <Crab :included="this.crab"></Crab>
      <Buckwheat :included="this.buckwheat"></Buckwheat>
      <Peanut :included="this.peanut"></Peanut>
      <!-- 特定原材料に準ずるもの -->
      <Almond :included="this.almond"></Almond>
      <Abalone :included="this.abalone"></Abalone>
      <Squid :included="this.squid"></Squid>
      <SalmonRoe :included="this.salmonRoe"></SalmonRoe>
      <Orange :included="this.orange"></Orange>
      <KiwiFruit :included="this.kiwifruit"></KiwiFruit>
      <Beef :included="this.beef"></Beef>
      <Walnut :included="this.walnut"></Walnut>
      <Salmon :included="this.salmon"></Salmon>
      <Mackerel :included="this.mackerel"></Mackerel>
      <SoyBeans :included="this.soyBeans"></SoyBeans>
      <Chicken :included="this.chicken"></Chicken>
      <Banana :included="this.banana"></Banana>
      <Pork :included="this.pork"></Pork>
      <Matsutake :included="this.matsutake"></Matsutake>
      <Peach :included="this.peach"></Peach>
      <Yam :included="this.yam"></Yam>
      <Apple :included="this.apple"></Apple>
      <Gelatine :included="this.gelatine"></Gelatine>
      <Cashewnuts :included="this.cashewnuts"></Cashewnuts>
      <Sesame :included="this.sesame"></Sesame>
    </v-row>
  </v-container>
</template>

<script>
//特定原材料
import Egg from "./Egg";
import Dairy from "./Dairy";
import Wheat from "./Wheat";
import Shrimp from "./Shrimp";
import Crab from "./Crab";
import Buckwheat from "./Buckwheat";
import Peanut from "./Peanut";
//特定原材料に準ずるもの
import Almond from "./Almond"; //2019年追加
import Abalone from "./Abalone";
import Squid from "./Squid";
import SalmonRoe from "./SalmonRoe";
import Orange from "./Orange";
import KiwiFruit from "./KiwiFruit";
import Beef from "./Beef";
import Walnut from "./Walnut";
import Salmon from "./Salmon";
import Mackerel from "./Mackerel";
import SoyBeans from "./SoyBeans";
import Chicken from "./Chicken";
import Banana from "./Banana";
import Pork from "./Pork";
import Matsutake from "./Matsutake";
import Peach from "./Peach";
import Yam from "./Yam";
import Apple from "./Apple";
import Gelatine from "./Gelatine";
import Cashewnuts from "./Cashewnuts";
import Sesame from "./Sesame";

export default {
  name: "Item",
  components: {
    //特定原材料
    Egg,
    Dairy,
    Wheat,
    Shrimp,
    Crab,
    Buckwheat,
    Peanut,
    //特定原材料に準ずるもの
    Almond,
    Abalone,
    Squid,
    SalmonRoe,
    Orange,
    KiwiFruit,
    Beef,
    Walnut,
    Salmon,
    Mackerel,
    SoyBeans,
    Chicken,
    Banana,
    Pork,
    Matsutake,
    Peach,
    Yam,
    Apple,
    Gelatine,
    Cashewnuts,
    Sesame
  },
  props: {
    egg: Boolean,
    dairy: Boolean,
    wheat: Boolean,
    shrimp: Boolean,
    crab: Boolean,
    buckwheat: Boolean,
    peanut: Boolean,
    almond: Boolean,
    abalone: Boolean,
    squid: Boolean,
    salmonRoe: Boolean,
    orange: Boolean,
    kiwifruit: Boolean,
    beef: Boolean,
    walnut: Boolean,
    salmon: Boolean,
    mackerel: Boolean,
    soyBeans: Boolean,
    chicken: Boolean,
    banana: Boolean,
    pork: Boolean,
    matsutake: Boolean,
    peach: Boolean,
    yam: Boolean,
    apple: Boolean,
    gelatine: Boolean,
    cashewnuts: Boolean,
    sesame: Boolean
  },
  computed: {},
  data: () => ({})
};
</script>
