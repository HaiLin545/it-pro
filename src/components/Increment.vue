<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <p class="current" :style="colorStyle">{{ currentNumber }}</p>
    <div class="change">
      <span>较昨日</span>
      <span :style="colorStyle" style="changeNumber">{{
        changeNumber >= 0 ? "+" + changeNumber : changeNumber
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStyle: {
        color: this.color,
      },
    };
  },
  props: {
    title: String,
    color: String,
    currentNumber: Number,
    changeNumber: Number,
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 5px 0;
  }

  .current {
    font-size: 20px;
    font-weight: 700;
  }

  .change {
    font-size: 14px;
    margin-top: 5px;

    .changeNumber {
      margin-left: 2px;
    }
  }
}
</style>