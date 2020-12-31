<template>
    <div class="content-area">
        <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<br>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<br>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>

<br>

<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
<br>
<h3>文字链接</h3>
<div>
  <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
  <el-link type="primary">主要链接</el-link>
  <el-link type="success">成功链接</el-link>
  <el-link type="warning">警告链接</el-link>
  <el-link type="danger">危险链接</el-link>
  <el-link type="info">信息链接</el-link>
</div>
<br>
<h3>文字链接(禁用)</h3>
<div>
  <el-link disabled>默认链接</el-link>
  <el-link type="primary" disabled>主要链接</el-link>
  <el-link type="success" disabled>成功链接</el-link>
  <el-link type="warning" disabled>警告链接</el-link>
  <el-link type="danger" disabled>危险链接</el-link>
  <el-link type="info" disabled>信息链接</el-link>
</div>
<h3>有无下划线</h3>
<div>
  <el-link :underline="false">无下划线</el-link>
  <el-link>有下划线</el-link>
</div>
<h3>带图标</h3>
<div>
  <el-link icon="el-icon-edit">编辑</el-link>
  <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
</div>

    <p>
      <router-link to="/">Go to Welcome Page</router-link>
    </p>
    <router-view />

    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <h1>hahahahaha</h1>
    <el-backtop target=".content-area">
        <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>

    </el-backtop>

    </div>
    
</template>
<style scoped>

.content-area{
  	/* 这里高度减60像素减的是顶部导航条的高度。避免出现浏览器自带的滚动条 */
    height: calc(100vh);
    /* 溢出高度自动显示滚动条 */
    overflow: auto;
  }
</style>
