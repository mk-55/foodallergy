<template>
  <BaseMultipleAutoComplete :items="allergens" :label="label" @selected="selectedAllergens"></BaseMultipleAutoComplete>
</template>

<script>
import BaseMultipleAutoComplete from "./BaseMultipleAutoComplete";
import { allergens } from "./Allergens";

export default {
  name: "allergensAutoComplete",
  components: {
    BaseMultipleAutoComplete
  },
  computed: {
    //画面表示するアレルゲン（0：不明 以外）を返す
    allergens() {
      return allergens.filter(p => p.id > 0);
    },
    label() {
      return "含まれないアレルゲン(特定原材料およびそれに準ずるもの)";
    }
  },
  methods: {
    selectedAllergens(selectedItems) {
      this.$emit("selectedAllergens", selectedItems);
    }
  }
};
</script>