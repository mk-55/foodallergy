<!-- 大豆 -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "SoyBeans",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/soy-beans.png"),
    allergenFreeImg: require("@/assets/allergens/soy-beans_free.png"),
    allergenAlt: "大豆あり",
    allergenFreeAlt: "大豆なし"
  })
};
</script>
