<!-- 卵 -->
<template>
  <BaseAllergen :included="included" :text="text"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
export default {
  name: "Egg",
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    text: "卵"
  })
};
</script>
