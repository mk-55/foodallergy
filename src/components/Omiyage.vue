<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">日本全国のお土産</h1>
        <p class="mb-3">主に小麦・卵アレルギーがあっても食べられるお土産の紹介</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col class="mb-4" cols="8">
        <Item
          v-for="item in Omiyages"
          :key="item.name"
          :name="item.name"
          :brand="item.brand"
          :prefecture="item.prefecture"
          :summary="item.summary"
          :allergens="item.allergens"
          :note="item.note"
          :ingredient="item.ingredient"
          :url="item.url"
        ></Item>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "./Item";

export default {
  name: "Omiyage",
  components: {
    Item
  },
  data: () => ({
    Omiyages: [
      {
        name: "夕張メロンピュアゼリー",
        brand: "ホリ",
        prefecture: 1,
        summary: "夕張メロンのような贅沢なゼリー",
        note:
          "凍らせてシャーベットのようにたべてもおいしい。有名なので大抵の土産物店で購入できる。",
        ingredient:
          "原材料はメロン、砂糖、洋酒、レモン果汁、脱脂粉乳、トレハロース、ゲル化剤（増粘多糖類）、香料、パプリカ色素。※最新の情報は直接確認してください。",
        url: "https://www.e-hori.com/",
        allergens: {
          egg: false,
          dairy: true,
          wheat: false,
          shrimp: false,
          crab: false,
          buckwheat: false,
          peanut: false,
          almond: false,
          abalone: false,
          squid: false,
          salmonRoe: false,
          orange: false,
          kiwifruit: false,
          beef: false,
          walnut: false,
          salmon: false,
          mackerel: false,
          soyBeans: true,
          chicken: false,
          banana: false,
          pork: false,
          matsutake: false,
          peach: false,
          yam: false,
          apple: false,
          gelatine: false,
          cashewnuts: false,
          sesame: false
        }
      },
      {
        name: "AN DE COOKIE",
        brand: "都松庵",
        prefecture: 26,
        summary: "あんこで作ったやさしい味のクッキー",
        note: `
          本店と京都タワーにお店がある。またJR京都伊勢丹の地下でも取り扱いあり
          複数の味があり、季節限定のものも。
        `,
        ingredient:
          "原材料は詳細失念。基本的に小麦・卵は不使用、バターの使用あり。たしか「きな粉」味があるので大豆アレルギーの人は注意",
        url: "https://www.toshoan.com/",
        allergens: {
          egg: false,
          dairy: true,
          wheat: false,
          shrimp: false,
          crab: false,
          buckwheat: false,
          peanut: false,
          almond: false,
          abalone: false,
          squid: false,
          salmonRoe: false,
          orange: false,
          kiwifruit: false,
          beef: false,
          walnut: false,
          salmon: false,
          mackerel: false,
          soyBeans: false,
          chicken: false,
          banana: false,
          pork: false,
          matsutake: false,
          peach: false,
          yam: false,
          apple: false,
          gelatine: false,
          cashewnuts: false,
          sesame: false
        }
      }
    ]
  })
};
</script>
