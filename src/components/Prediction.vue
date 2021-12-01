<template>
  <el-card shadow="hover" class="line-part" id="header3">
    <h4>未来14天确诊人数趋势图</h4>
    <v-chart class="chart" :option="option" />
  </el-card>
  <el-card shadow="hover" class="timeline-map-part" id="header4">
    <h4>疫情时间线预测地图</h4>
    <div class="map-wrapper">
      <iframe
        src="static/timeline_map.html"
        frameborder="0"
        class="map"
        scrolling="no"
      ></iframe>
    </div>
  </el-card>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import { ref } from "vue";

use([
  CanvasRenderer,
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
]);

export default {
  setup() {
    const option = ref({
      xAxis: {
        type: "category",
        data: [
          "11-20",
          "11-21",
          "11-22",
          "11-23",
          "11-24",
          "11-25",
          "11-26",
          "11-27",
          "11-28",
          "11-29",
          "11-30",
          "12-01",
          "12-02",
          "12-03",
          "12-04",
        ],
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove|click",
        axisPointer: {
          type: "line",
        },
        showContent: true,
        alwaysShowContent: false,
        showDelay: 0,
        hideDelay: 100,
        textStyle: {
          fontSize: 16,
        },
        borderWidth: 0,
        padding: 5,
      },
      series: [
        {
          data: [
            32, 34, 38, 40, 46, 50, 55, 60, 55, 60, 56, 52, 46, 44, 40, 36, 32,
            26,
          ],
          type: "line",
          smooth: true,
        },
      ],
    });
    return { option };
  },
};
</script>

<style lang="scss" scoped>
.line-part {
  margin-top: 10px;
  height: 650px;
  .chart {
    height: 600px;
    width: 950px;
  }
}
.timeline-map-part {
  margin-top: 10px;
  .map-wrapper {
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 580px;
    .map {
      position: absolute;
      left: 60px;
      top: 30px;
      transform: scale(1.1);
      width: 100%;
      height: 640px;
    }
  }
}
</style>