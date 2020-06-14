<template>
  <v-app>
    <v-content>
      <Omiyage />
    </v-content>
  </v-app>
</template>

<script>
import Omiyage from "./components/Omiyage";

export default {
  name: "App",

  components: {
    Omiyage
  },

  data: () => ({
    //
  })
};
</script>
