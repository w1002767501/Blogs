<template>
  <div class="pages">
    <!-- 头部 -->
    <navheader></navheader>
    <!-- 导航 -->
    <panel></panel>
    <!-- 列表内容 -->
    <el-container>
      <el-main>
        <div class="lie_c">列表内容</div>
      </el-main>
      <el-aside width="30%">
        <el-main>
          <v-tips></v-tips>
        </el-main>
        <el-main>
          <v-sign></v-sign>
        </el-main>
        <el-main>
          <v-hotlist></v-hotlist>
        </el-main>
        <el-main>
          <v-ads></v-ads>
        </el-main>
        <el-main>
          <v-links></v-links>
        </el-main>
      </el-aside>
    </el-container>
    <!-- 尾部 -->
    <bottomf></bottomf>
  </div>
</template>
<script>
import navheader from '../component/Navheader'
import bottomf from '../component/bottomf'
import panel from '../component//panel'
import ads from '../component/sidebar/ads'
import hotlist from '../component/sidebar/hotlist'
import links from '../component/sidebar/links'
import sign from '../component/sidebar/sign'
import tips from '../component/sidebar/tips'
export default {
  data() {
    return {}
  },
  components: {
    navheader,
    bottomf,
    panel,
    'v-ads': ads,
    'v-hotlist': hotlist,
    'v-sign': sign,
    'v-tips': tips,
    'v-links': links
  }
}
</script>
<style lang="scss">
.pages {
  .el-container {
    width: 75%;
    margin: auto;
    .lie_c {
      box-shadow: 0 2px 12px 0 rgba(2, 0, 21, 0.14);
      height: 100%;
    }
  }
}
</style>
