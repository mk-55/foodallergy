<template>
  <v-app>
    <template>
      <v-app-bar dark flat dense app>
        <v-app-bar-nav-icon />
        <v-toolbar-title>食物アレルギーのもろもろ（仮）</v-toolbar-title>
      </v-app-bar>
    </template>
    <v-main>
      <Omiyage />
    </v-main>
  </v-app>
</template>

<script>
import Omiyage from "./components/Omiyage";

export default {
  name: "App",

  components: {
    Omiyage,
  },

  data: () => ({
    //
  }),
};
</script>
