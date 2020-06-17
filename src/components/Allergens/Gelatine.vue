<!-- ゼラチン -->
<template>
  <BaseAllergen :included="included" :text="text"></BaseAllergen>
</template>

<script>
import BaseAllergen from "./BaseAllergen";
export default {
  name: "Gelatine",
  components: {
    BaseAllergen
  },
  props: {
    included: Boolean
  },
  data: () => ({
    text: "ゼラチン"
  })
};
</script>
