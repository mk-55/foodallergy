<!-- 山芋 -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "Yam",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/yam.png"),
    allergenFreeImg: require("@/assets/allergens/yam_free.png"),
    allergenAlt: "山芋あり",
    allergenFreeAlt: "山芋なし"
  })
};
</script>
