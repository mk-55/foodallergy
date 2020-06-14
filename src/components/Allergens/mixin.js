export default {
  props: {
    included: Boolean
  },
  computed: {
    alt: function() {
      return this.included === true ? this.allergenAlt : this.allergenFreeAlt;
    },
    img: function() {
      return this.included === true ? this.allergenImg : this.allergenFreeImg;
    }
  },
  data: () => ({
    //TODO 画像のデフォルト値の準備
    allergenImg: null,
    allergenFreeImg: null,
    allergenAlt: "あり",
    allergenFreeAlt: "なし"
  })
};
