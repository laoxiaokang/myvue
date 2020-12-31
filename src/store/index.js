import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 实例化Vuex，创建一个仓库
const store = new Vuex.Store({
  // 状态
  // 该库存数据的地方
  state: {
    // 状态值
    count: 1,
    author: 'LXK',
    sex: '男',
    age: 18,
  },
  // 修改数据的方法
  mutations: {
    // 修改数据的第一个方法
    increment(state, num) {
      state.count += num;
      console.log(state.count)
    },
    // 修改仓库中state中的author
    editAuthor(state, data) {
      state.author = data
    }
  }
})
// 暴露store仓库到`main.js`的根容器里面
export default store;

