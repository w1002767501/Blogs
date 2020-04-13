<template>
  <div class="tips">
    <div class="top">温馨通道</div>
    <ul>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
      <li>
        <a href="#">温馨通道：测试案例111111</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.tips {
  padding: 3% 5% 0 5%;
  box-shadow: 0 2px 12px 0 rgba(2, 0, 21, 0.14);
  ul {
    padding: 4% 0 0 7%;
    li {
      a {
        text-decoration: none;
        color: skyblue;
      }
      padding: 0 0 10px 0;
    }
  }
  .top {
    padding: 3% 0;
    border-bottom: 1px dotted;
  }
}
</style>
