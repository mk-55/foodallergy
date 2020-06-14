<!-- 豚肉 -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "Pork",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/pork.png"),
    allergenFreeImg: require("@/assets/allergens/pork_free.png"),
    allergenAlt: "豚肉あり",
    allergenFreeAlt: "豚肉なし"
  })
};
</script>
