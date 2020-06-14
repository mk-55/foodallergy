<!-- 松茸 -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "Matsutake",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/matsutake.png"),
    allergenFreeImg: require("@/assets/allergens/matsutake_free.png"),
    allergenAlt: "松茸あり",
    allergenFreeAlt: "松茸なし"
  })
};
</script>
