<template>
  <v-autocomplete
    v-model="selectedItems"
    :items="items"
    outlined
    dense
    chips
    small-chips
    :label="label"
    item-text="name"
    return-object
    multiple
    prepend-inner-icon="mdi-magnify"
  ></v-autocomplete>
</template>

<script>
export default {
  name: "BaseAutoComplete",
  //TODO validate more
  //item must have "id" and "name"
  props: {
    items: Array,
    label: String
  },
  data: () => ({
    selectedItems: []
  }),

  updated: function() {
    this.$emit("selected", this.selectedItems);
  }
};
</script>