<!-- 都道府県 -->
<template>
  <v-chip label small>
    <v-avatar left>
      <v-icon small>mdi-map-marker</v-icon>
    </v-avatar>
    {{prefectureName}}
  </v-chip>
</template>

<script>
import { prefectures } from "./Prefectures";

export default {
  name: "PrefectureIcon",
  props: {
    prefectureId: Number
  },
  computed: {
    prefectureName: function() {
      console.debug(this.prefectureId);
      return prefectures[this.prefectureId].name;
    }
  },
  data: () => ({})
};
</script>
