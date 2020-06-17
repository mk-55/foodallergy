<!-- そば -->
<template>
  <BaseAllergen :included="included" :text="text"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
export default {
  name: "Buckwheat",
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    text: "そば"
  })
};
</script>
