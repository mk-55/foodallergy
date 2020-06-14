<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-img
        :alt="alt"
        :src="img"
        aspect-ratio="1"
        height="30"
        width="30"
        max-height="30"
        max-width="30"
        v-on="on"
      ></v-img>
    </template>
    <span>{{alt}}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "BaseAllergen",
  props: {
    alt: String,
    img: String,
    included: Boolean
  },
  computed: {},
  data: () => ({})
};
</script>
