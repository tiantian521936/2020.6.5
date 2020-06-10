<template>
  <div>
    <!-- 商品分类导航 -->
    <Typenav></Typenav>
    <List></List>
    <Tody></Tody>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    
    <Brand></Brand>
  </div>
</template>



<script type="text/ecmascript-6">
import Brand from "./Brand/brand";
import Floor from "./Floor/floor";
import Like from "./Like/like";
import List from "./List/list";
import Rank from "./Rank/rank";
import Tody from "./Tody/tody";
import {mapState} from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapState({
      floors : state =>state.Home.floors
    })
  },
  mounted() {
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getBanners')
  },
  components: {
    Brand,
    Floor,
    Like,
    List,
    Rank,
    Tody
  }
};
</script>



<style  lang="less" scoped>
</style>