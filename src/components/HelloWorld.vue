<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to My Vue.js App</h1>
    
    <p>
      <router-link to="/hello">Go to hello:axios的使用</router-link>
    </p>
    <p>
      <router-link to="/world">Go to world:element-ui组件</router-link>
    </p>
    <p>
      <router-link to="/transition">Go to transition:过渡动画</router-link>
    </p>
     <p>
      <router-link to="/ly">Go to Layout:布局</router-link>
    </p>
    <p>
      <router-link to="/allbt">Go to All Buttont:各种按钮</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    // 来自于vuex仓库
    console.log(
      this.$store.state.author,
      this.$store.state.age,
      this.$store.state.sex
    ); //获取store中的数据
    if (this.$store.state.title) {
      console.log('store中的title:'+this.$store.state.title);
    } else {
      console.log('store中没有该title...');
      this.$store.state.title = "wscats"; //向store 添加数据
    }

    this.$store.commit('increment',3)//修改store中的数据
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
