<template>
  <BaseMultipleAutoComplete :items="prefectures" :label="label" @selected="selectedPrefectures"></BaseMultipleAutoComplete>
</template>

<script>
import BaseMultipleAutoComplete from "./BaseMultipleAutoComplete";
import { prefectures } from "./Prefectures";

export default {
  name: "PrefecturesAutoComplete",
  components: {
    BaseMultipleAutoComplete
  },
  computed: {
    //画面表示する都道府県（0：不明以外）を返す
    prefectures() {
      return prefectures.filter(p => p.id > 0);
    },
    label() {
      return "都道府県";
    }
  },
  methods: {
    selectedPrefectures(selectedItems) {
      this.$emit("selectedPrefectures", selectedItems);
    }
  }
};
</script>