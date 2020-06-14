<!-- ゼラチン -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "Gelatine",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/gelatine.png"),
    allergenFreeImg: require("@/assets/allergens/gelatine_free.png"),
    allergenAlt: "ゼラチンあり",
    allergenFreeAlt: "ゼラチンなし"
  })
};
</script>
