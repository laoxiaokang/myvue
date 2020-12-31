<template>
  <div>
      <p style="float:left;">
      <router-link to="/">Go to Welcome Page</router-link>
    </p>
    <router-view />
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <!-- <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition> -->
      <transition name="el-zoom-in-center">
        <div v-show="show" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
         <el-collapse-transition>
        <div v-show="show">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>

    
    </div>
</template>

<script>
    export default {
    name:'ts',
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  a {
  color: #42b983;
}
</style>