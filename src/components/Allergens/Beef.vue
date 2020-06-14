<!-- 牛肉 -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "Beef",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/beef.png"),
    allergenFreeImg: require("@/assets/allergens/beef_free.png"),
    allergenAlt: "牛肉あり",
    allergenFreeAlt: "牛肉なし"
  })
};
</script>
