<!-- いくら -->
<template>
  <BaseAllergen :included="included" :img="img" :alt="alt"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
import Mixin from "./mixin"; //TODO ディレクトリ構成これでいいのか？
export default {
  name: "SalmonRoe",
  mixins: [Mixin],
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    //TODO 定数なのでdataにもちたくないが、mixin使うときはどうしたら良い？
    allergenImg: require("@/assets/allergens/salmon-roe.png"),
    allergenFreeImg: require("@/assets/allergens/salmon-roe_free.png"),
    allergenAlt: "いくらあり",
    allergenFreeAlt: "いくらなし"
  })
};
</script>
