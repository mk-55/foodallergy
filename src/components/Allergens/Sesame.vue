<!-- ごま -->
<template>
  <BaseAllergen :included="included" :text="text"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
export default {
  name: "Sesame",
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    text: "ごま"
  })
};
</script>
