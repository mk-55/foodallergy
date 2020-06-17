<template>
  <v-chip v-if="included" label class="ma-1">{{text}}</v-chip>
</template>

<script>
export default {
  name: "BaseAllergen",
  props: {
    included: Boolean,
    text: String
  },
  computed: {},
  data: () => ({})
};
</script>
