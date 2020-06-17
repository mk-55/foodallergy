<template>
  <BaseAllergen :included="included" :text="text"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
export default {
  name: "Wheat",
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    text: "小麦"
  })
};
</script>
