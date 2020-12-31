<template>
  <div>
    <h1>{{ info }}</h1>
    <h3>{{ author }}</h3>
    <p>
      <router-link to="/">Go to Welcome Page</router-link>
    </p>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
      info: null,
      author: null,
    };
  },
  mounted() {
    // 由于 main.js 里全局定义的 axios,此处直接使用 $axios 即可。
    // 由于 main.js 里定义了每个请求前缀，此处的 / 即为 /api/，
    // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
    this.$axios
      .get("/" + "?c=i")
      .then(
        (response) => (
          (this.info = response.data.hitokoto),
          (this.author = response.data.from)
        )
      )
      .catch((error) => console.log(error));
    setInterval(() => {
      this.$axios
        .get("/" + "?c=i")
        .then(
          (response) => (
            (this.info = response.data.hitokoto),
            (this.author = response.data.from)
          )
        )
        .catch((error) => console.log(error));
    }, 5000);
  },
};
</script>
<style scoped>
a {
  color: #42b983;
}
</style>