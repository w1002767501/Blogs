<template>
  <div class="contact">
    <div class="contact_c">
      <ul>
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">提问</a>
        </li>
        <li>
          <a href="#">分享</a>
        </li>
        <li>
          <a href="#">讨论</a>
        </li>
        <li>
          <a href="#">建议</a>
        </li>
        <li>
          <a href="#">公告</a>
        </li>
        <li>
          <a href="#">动态</a>
        </li>
      </ul>
      <div class="show">
        <span>我发表的贴</span>
        <span>我收藏的贴</span>
      </div>
      <div class="tijiao">
        <el-button type="success">发表新帖</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.contact {
  padding: 10px 0;
  box-shadow: 0 2px 12px 0 rgba(2, 0, 21, 0.14);
  .contact_c {
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    ul {
      padding: 0;
      height: 50px;
      line-height: 50px;
      li {
        list-style: none;
        display: inline-block;
        text-align: center;
        margin: 0 50px 0 0;
        a {
          text-decoration: none;
          color: black;
        }
        :hover {
          color: seagreen;
        }
      }
    }
    .show {
      span {
        display: inline-block;
        margin: 0 20px 0 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .contact {
    .contact_c {
      padding: 0 0 20px 0;
      box-sizing: border-box;
      height: auto;
      width: 90%;
      ul {
        flex: 0 0 100%;
        width: 100%;
        height: auto;
        li {
          width: 33.33%;
          margin: 0px;
        }
      }
      .show,
      .tijiao {
        flex: 0 0 100%;
        text-align: center;
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>
