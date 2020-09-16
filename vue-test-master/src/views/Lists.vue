<template>
  <div>
    <el-tabs v-model="activeName">
      <!-- 编写事件 -->
      <el-tab-pane label="编写事项" name="first">
        <h1>事件标题</h1>
        <el-input v-model="input" placeholder="请输入内容" clearable />
        <h1>事件内容</h1>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        <el-button type="primary" round @click="sub">提交</el-button>
      </el-tab-pane>
      <!-- 待办事件 -->
      <el-tab-pane label="待办事项" name="second">
        <el-row :gutter="20" class="lists" v-for="(item,index) in listsOne" :key="index">
          <el-col :span="4">
            <div class="grid-content bg-purple">{{index+1}}</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">{{item.input}}</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-button type="success" icon="el-icon-check" @click="com(index)" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="del(index)" circle></el-button>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!-- 完成事件 -->
      <el-tab-pane label="完成事项" name="third">
        <el-row :gutter="20" class="lists" v-for="(item,index) in listsTwo" :key="index">
          <el-col :span="4">
            <div class="grid-content bg-purple">{{index+1}}</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">{{item.input}}</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-button type="success" icon="el-icon-back" @click="bac(index)" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="deL(index)" circle></el-button>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listsOne: [],
      listsTwo: [],
      activeName: 'second',
      textarea: '',
      input: '',
    };
  },
  methods: {
    sub() {
      this.listsOne.push({
        input: this.input,
        textarea: this.textarea,
      });
      // console.log(this.listsOne);
      this.input = '';
      this.textarea = '';
    },
    del(index) {
      this.listsOne.splice(index, 1);
    },
    deL(index) {
      this.listsTwo.splice(index, 1);
    },
    com(index) {
      this.listsTwo.push({
        input: this.listsOne[index].input,
      });
      this.listsOne.splice(index, 1);
      // console.log(this.listsTwo);
    },
    bac(index) {
      this.listsOne.push({
        input: this.listsTwo[index].input,
      });
      this.listsTwo.splice(index, 1);
    },
  },
};
</script>

<style lang='scss' scoped>
.lists {
  width: 100%;
  height: 75px;
  border: 1px solid #000;
}
</style>
