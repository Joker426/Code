<template>
  <view>
    <h1 class="title">
      事件标题
    </h1>
    <u-input
      v-model="value1"
      :type="type"
      :border="border"
    />
    <h1 class="title2">
      事件内容
    </h1>
    <u-input
      v-model="value2"
      :type="type1"
      :border="border"
    />
    <div class="btn">
      <u-button
        type="success"
        shape="square"
        size="medium"
        :ripple="true"
        ripple-bg-color="#75c8b1"
        @click="sub"
      >
        提交
      </u-button>
    </div>
  </view>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      type: 'text',
      type1: 'textarea',
      wLists: [],
      border: true,
    };
  },
  methods: {
    sub() {
      this.wLists.push({
        value1: this.value1,
        value2: this.value2,
      });
      this.$store.commit('whole/add', this.wLists);
      this.value1 = '';
      this.value2 = '';
    },
  },
};
</script>
<style>
.title{
  font-size: 22px;
  text-align: center;
}
.title2{
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
}
.btn{
  margin-top: 150px;
  margin-left: 120px;
}
</style>
