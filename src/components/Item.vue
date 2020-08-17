<template>
  <v-card class="my-4">
    <v-card-title>
      <PrefectureIcon :prefectureId="prefecture"></PrefectureIcon>
      <span class="ma-1">{{this.name + " / " +this.brand}}</span>
    </v-card-title>
    <v-card-subtitle class="pb-0">{{this.summary}}</v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <Allergens
          class="ma-4"
          :egg="this.allergens.egg"
          :dairy="this.allergens.dairy"
          :wheat="this.allergens.wheat"
          :shrimp="this.allergens.shrimp"
          :crab="this.allergens.crab"
          :buckwheat="this.allergens.buckwheat"
          :peanut="this.allergens.peanut"
          :almond="this.allergens.almond"
          :abalone="this.allergens.abalone"
          :squid="this.allergens.squid"
          :salmonRoe="this.allergens.salmonRoe"
          :orange="this.allergens.orange"
          :kiwifruit="this.allergens.kiwifruit"
          :beef="this.allergens.beef"
          :walnut="this.allergens.walnut"
          :salmon="this.allergens.salmon"
          :mackerel="this.allergens.mackerel"
          :soyBeans="this.allergens.soyBeans"
          :chicken="this.allergens.chicken"
          :banana="this.allergens.banana"
          :pork="this.allergens.pork"
          :matsutake="this.allergens.matsutake"
          :peach="this.allergens.peach"
          :yam="this.allergens.yam"
          :apple="this.allergens.apple"
          :gelatine="this.allergens.gelatine"
          :cashewnuts="this.allergens.cashewnuts"
          :sesame="this.allergens.sesame"
        ></Allergens>
        <v-card-text>
          {{this.note}}
          <br />
          {{this.ingredient}}
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <a :href="this.url">公式サイトへのリンク</a>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Allergens from "./Allergens/Allergens";
import PrefectureIcon from "./PrefectureIcon";

export default {
  name: "Item",
  components: {
    Allergens,
    PrefectureIcon
  },
  props: {
    name: String,
    brand: String,
    summary: String,
    ingredient: String,
    note: String,
    prefecture: Number,
    allergens: {},
    url: String
  },
  data: () => ({
    show: false
  })
};
</script>
