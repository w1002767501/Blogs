<template>
  <div class="hotlist">
    <div class="top">本周热议</div>
    <ul>
      <li>
        <a href="#">热议文章11111</a>
      </li>
      <li>
        <a href="#">热议文章11111</a>
      </li>
      <li>
        <a href="#">热议文章11111</a>
      </li>
      <li>
        <a href="#">热议文章11111</a>
      </li>
      <li>
        <a href="#">热议文章11111</a>
      </li>
      <li>
        <a href="#">热议文章11111</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  }
}
</script>

<style lang='scss'>
.hotlist {
  padding: 3% 5% 0 5%;
  box-shadow: 0 2px 12px 0 rgba(2, 0, 21, 0.14);
  ul {
    padding: 4% 0 0 7%;
    li {
      a {
        text-decoration: none;
        color: thistle;
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
