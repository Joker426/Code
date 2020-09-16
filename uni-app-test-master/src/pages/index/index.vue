<template>
  <view>
    <u-row
      v-for="(item,index) in lists"
      :key="index"
      gutter="16"
    >
      <div class="row">
        <u-col span="3">
          <div class="jz fs1">
            <view class="demo-layout bg-purple ta">
              {{ index+1 }}
            </view>
          </div>
        </u-col>
        <u-col span="6">
          <view class="demo-layout bg-purple-light ta">
            <div class="mt5 fs16">
              标题： {{ item.value1 }}
            </div>
            <div class="mt5 fs14">
              {{ item.value2 }}
            </div>
          </view>
        </u-col>
        <u-col span="3">
          <div class="jz">
            <view class="demo-layout bg-purple-dark ta">
              <u-icon
                name="checkmark"
                class="fs"
                @click="com(index)"
              />
              <u-icon
                name="trash"
                class="ml fs"
                @click="del(index)"
              />
            </view>
          </div>
        </u-col>
      </div>
    </u-row>
  </view>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      uplists: [],
    };
  },
  created() {
    this.lists = this.$store.state.whole.listsOne;
  },
  methods: {
    com(index) {
      this.uplists.push({
        value1: this.lists[index].value1,
        value2: this.lists[index].value2,
      });
      this.$store.commit('whole/add2', this.uplists);
      this.lists.splice(index, 1);
    },
    del(index) {
      this.lists.splice(index, 1);
    },
  },
  onLoad() {
    uni.setStorage({
      key: 'arrTodo',
      data: this.lists,
      success() {
        console.log('缓存成功');
      },
      fail() {
        console.log('fail');
      },
    });
    uni.getStorage({
      key: 'arrTodo',
      success(res) {
        console.log(res.data);
      },
    });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.ta {
  text-align: center;
}
.row {
  width: 100%;
  height: 70px;
}
.jz {
  margin-top: 30px;
}
.ml {
  margin-left: 10px;
}
.fs {
  font-size: 20px;
}
.fs1 {
  font-size: 16px;
}
.mt5 {
  margin-top: 15px;
}
.fs16{
  font-size: 16px;
}
.fs14{
  font-size: 14px;
}
</style>
