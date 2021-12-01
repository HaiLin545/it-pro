<template>
  <el-card shadow="hover" class="input-part">
    <h4>预测分析</h4>
    <el-form ref="form" class="form" inline>
      <el-form-item label="投放人数" size="small">
        <el-input-number v-model="form.local" :min="1" />
      </el-form-item>
      <el-form-item label="投放人数中的境外人数" size="small">
        <el-input-number v-model="form.foreign" :min="0" />
      </el-form-item>
      <el-form-item label="投放城市" size="small">
        <el-select v-model="form.city" placeholder="请选择要投放病人的城市">
          <el-option label="广州" value="广州"></el-option>
          <el-option label="深圳" value="深圳"></el-option>
          <el-option label="佛山" value="佛山"></el-option>
          <el-option label="东莞" value="东莞"></el-option>
          <el-option label="中山" value="中山"></el-option>
          <el-option label="珠海" value="珠海"></el-option>
          <el-option label="江门" value="江门"></el-option>
          <el-option label="肇庆" value="肇庆"></el-option>
          <el-option label="惠州" value="惠州"></el-option>
          <el-option label="汕头" value="汕头"></el-option>
          <el-option label="潮州" value="潮州"></el-option>
          <el-option label="揭阳" value="揭阳"></el-option>
          <el-option label="汕尾" value="汕尾"></el-option>
          <el-option label="湛江" value="湛江"></el-option>
          <el-option label="茂名" value="茂名"></el-option>
          <el-option label="阳江" value="阳江"></el-option>
          <el-option label="云浮" value="云浮"></el-option>
          <el-option label="韶关" value="韶关"></el-option>
          <el-option label="河源" value="河源"></el-option>
          <el-option label="梅州" value="梅州"></el-option>
          <el-option label="清远" value="清远"></el-option>
        </el-select>
      </el-form-item>
      <el-button
        class="begin"
        type="primary"
        @click="changeChecked"
        size="small"
      >
        {{text}}
      </el-button>
    </el-form>
  </el-card>
</template>

<script>
import { ref } from "vue";
import { ElLoading } from "element-plus";

export default {
  data() {
    return {
      form: {
        local: 1,
        foreign: 0,
        city: "",
      },
    };
  },
  props: {
    checked: Boolean,
  },
  computed:{
    text: function(){
      return this.checked?"重新预测":"开始预测"
    }
  },
  methods: {
    changeChecked() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
        this.$emit("changeChecked");
      }, 1500);
    },
  },
  setup() {
    const fullscreenLoading = ref(false);
    function openFullScreen() {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2000);
    }
    return {
      fullscreenLoading,
      openFullScreen,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-part {
  margin-top: 10px;
  .form {
    margin-top: 15px;
  }
}
</style>