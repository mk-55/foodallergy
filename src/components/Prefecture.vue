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
const prefectures = [
  "不明", //0
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県", //10
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県", //20
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府", //26
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県", //30
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県", //40
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県"
];
export default {
  name: "Prefecture",
  props: {
    prefecture: Number
  },
  computed: {
    prefectureName: function() {
      return prefectures[this.prefecture];
    }
  },
  data: () => ({})
};
</script>
